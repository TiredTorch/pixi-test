import { FC } from "react";
import { Graphics } from "@pixi/react";
import { CELL_SIZE } from "../../../utils";
import { ColorDotProps } from "./ColorDot.types";

export const ColorDot: FC<ColorDotProps> = ({ color, node }) => {
    return (
        <Graphics
            x={node.y * CELL_SIZE}
            y={node.x * CELL_SIZE}
            draw={(g) => {
                g.clear;
                g.beginFill(color);
                g.drawCircle(CELL_SIZE / 2, CELL_SIZE / 2, CELL_SIZE / 4);
                g.endFill();
            }}
        />
    );
};
