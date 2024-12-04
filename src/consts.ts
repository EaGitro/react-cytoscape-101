
// `@/consts.ts`

export const elems = [
    // Nodes
    {
        data: {
            id: "node-a",
            label: "Node A"
        },
    },
    {
        data: {
            id: "node-b",
            label: "Node B"
        }
    },
    {
        data: {
            id: "node-c",
            label: "Node C",
        }
    },
    {
        data: {
            id: "node-d",
            label: "Node D"
        }
    },
    {
        data: {
            id: "node-e",
            label: "Node E"
        }
    },
    // Edges
    // color というカスタムプロパティを追加
    {
        data: {
            id: "edge-a",
            source: "node-a",
            target: "node-b",
            label: "Edge A",
            color: "#ee827c"
        }
    },
    {
        data: {
            id: "edge-b",
            source: "node-c",
            target: "node-b",
            label: "Edge B",
            color: "#38b48b"
        }
    },
    {
        data:{
            id: "edge-c",
            source: "node-e",
            target: "node-d",
            label: "Edge C",
            color: "#89c3eb"
        }
    }
] 

export const styles = [
    {
        selector: "node",   // すべてのノードに適用
        style: {
            width: "80px",
            height: "80px",
            label: "data(label)",   // このようにして data にアクセスすることで label を指示する
            "border-width": 2,
            "text-valign": "center" // ノードの縦方向に中心に
        } as const      // ts の場合は as const を付けないとエラーになる場合がある
    },
    {
        selector: "edge",
        style: {
            width: 2,
            label: "data(label)",
            "line-color": "data(color)",    // カスタムプロパティにもアクセスできる
            "text-background-color": "#e8ecef",
            "text-background-shape": "rectangle",
            "text-background-opacity": 1,
        } as const 
    },
    {
        selector: `node.active`,            // node の中で active クラスのもの
        style: {
            "border-color": "#ffff00",      // 黄色にしてみる
            "border-width": 2,
        },
    },
    {
        selector: `edge.active`,
        style: {
            "line-color": "#ffff00",
        },
    },
]