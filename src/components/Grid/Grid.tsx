import "javascript-astar";
import { FC } from "react";
import { Container } from "@pixi/react";
import { ColorDot } from "./ColorDot/ColorDot";
import { GridProps } from "./Grid.types";
import { GridCell } from "./GridCell/GridCell";

export const Grid: FC<GridProps> = ({ map, endPoint, route, startPoint }) => {
    return (
        <Container>
            {map?.grid?.map((col, rowIndex) =>
                col?.map((cell, cellIndex) => (
                    <GridCell
                        key={`${rowIndex}_${cellIndex}`}
                        {...cell}
                    />
                ))
            )}
            <ColorDot
                node={startPoint}
                color={"green"}
            />
            <ColorDot
                node={endPoint}
                color={"red"}
            />
        </Container>
    );
};
