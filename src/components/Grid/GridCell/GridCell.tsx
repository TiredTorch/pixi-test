import { GridNode } from "javascript-astar";
import { FC } from "react";
import { Graphics } from "@pixi/react";
import { CELL_SIZE } from "../../../utils";

export const GridCell: FC<GridNode> = ({ x, y, weight }) => {
    return (
        <Graphics
            x={y * CELL_SIZE}
            y={x * CELL_SIZE}
            draw={(g) => {
                g.clear();
                g.beginFill(weight === 1 ? "white" : "gray");
                g.lineStyle(1, "black");
                g.drawRect(0, 0, CELL_SIZE, CELL_SIZE);
                g.endFill();
            }}
        />
    );
};
