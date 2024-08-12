import { Texture } from "pixi.js";
import { FC } from "react";
import { Sprite } from "@pixi/react";
import {
	CELL_SIZE,
	CHARACTER_HEIGHT,
	CHARACTER_WIDTH
} from "../../utils";
import { CharacterProps } from "./Character.types";

export const Character: FC<CharacterProps> = ({}) => {
    return (
        <Sprite
            texture={Texture.WHITE}
            tint={0xff00ff}
            alpha={.5}
            width={CHARACTER_WIDTH}
            height={CHARACTER_HEIGHT}
            x={CELL_SIZE * 0.5}
            y={CELL_SIZE * 0.5}
            anchor={[0.5, 0.5]}
        />
    );
};
