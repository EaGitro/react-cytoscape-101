"use client"
import { elems, styles } from "@/consts";
import cytoscape from "cytoscape";
import { useEffect, useRef } from "react";

export default function Graph() {
    const cyElemRef = useRef<HTMLDivElement>(null); // グラフ(canvas)が描画される領域

    // 描画後 => useEfect 
    useEffect(() => {

        // cytoscape に渡すオプション。
        const cyInstance = cytoscape({
            container: cyElemRef.current,   // 描画領域を渡す。js では `getElementById()` 等を使う
            elements: elems,
            style: styles
        })


        // イベントを付ける(ホバーイベント)
        cyInstance.on(      
            "mouseover",    // ターゲットに入ったとき
            "node",         // すべてのノードに対して
            (e)=>{          // ハンドラ
                const target = e.target;    // ホバーされたノード
                const connEdges = target.connectedEdges();      // 隣接エッジたち
                const connNodes = connEdges.connectedNodes();   // 隣接エッジに隣接したノードたち
                
                // e のなかにも cy がある
                // その中から .batch() という再描画させずに要素を操作する関数を使う。
                e.cy.batch(()=>{
                    // addClass で対象にcssクラスを付与する
                    target.addClass("active")   // .active というクラスを付与
                    connEdges.addClass("active")
                    connNodes.addClass("active")
                })
            }
        );
        cyInstance.on(
            "mouseout",     // ターゲットが外れた時
            "node",
            (e)=>{
                // 面倒なのですべてのノードから `.active` クラスをはぎ取ります
                e.cy.batch(() => {
                    e.cy.elements().removeClass("active");
                });
            }
        )


        // creanup 処理
        return ()=>{
            cyInstance.destroy()
        }
    }, [])

    return (
        <div ref={cyElemRef} style={{ // 描画領域を確保
            width: 500,
            height: 500
        }} />
    )
}
