import { Graph, GridNode } from "javascript-astar";

export type GridProps = {
    map: Graph;
    startPoint: GridNode;
    endPoint: GridNode;
    route: GridNode[] | null;
};
