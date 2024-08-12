import "javascript-astar";
import { FC } from "react";
import { Container, Graphics } from "@pixi/react";
import { CELL_SIZE } from "../../utils";
import { GridProps } from "./Grid.types";

export const Grid: FC<GridProps> = ({ map }) => {
    console.log("map", map);

    return (
        <Container>
            {map?.grid?.map((col, rowIndex) =>
                col?.map((cell, cellIndex) => (
                    <Graphics
                        key={`${rowIndex}_${cellIndex}`}
                        x={cell.y * CELL_SIZE}
                        y={cell.x * CELL_SIZE}
                        draw={(g) => {
                            g.clear();
                            g.beginFill(cell.weight === 1 ? "white" : "gray");
                            g.lineStyle(1, "black");
                            g.drawRect(0, 0, CELL_SIZE, CELL_SIZE);
                            g.endFill();
                        }}
                    />
                ))
            )}
        </Container>
    );
};
