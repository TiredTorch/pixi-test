import { Texture } from "pixi.js";
import { FC, useCallback, useEffect, useState } from "react";
import { AnimationResult, Spring } from "react-spring";
import { Sprite } from "@pixi/react-animated";
import { CELL_SIZE, CHARACTER_HEIGHT, CHARACTER_WIDTH } from "../../utils";
import { CharacterProps } from "./Character.types";

const RESET_POSITION = { x: CELL_SIZE * 0.5, y: CELL_SIZE * 0.5 };
const DISABLED_ITERATION_STATE = 0;
const START_ITERATION_STATE = 1;

export const Character: FC<CharacterProps> = ({ route }) => {
    const [stepIteration, setStepIteration] = useState<number>(
        DISABLED_ITERATION_STATE
    );
    const [fromPosition, setFromPosition] = useState(RESET_POSITION);
    const [toPosition, setToPosition] = useState(RESET_POSITION);

    useEffect(() => {
        if (!route) {
            setFromPosition(RESET_POSITION);
            setToPosition(RESET_POSITION);
            setStepIteration(DISABLED_ITERATION_STATE);
        }

        if (route && stepIteration === DISABLED_ITERATION_STATE)
            setStepIteration(START_ITERATION_STATE);
    }, [route]);

    useEffect(() => {
        if (stepIteration !== DISABLED_ITERATION_STATE && route) {
            setFromPosition({
                x: RESET_POSITION.x + route[stepIteration - 1].y * CELL_SIZE,
                y: RESET_POSITION.y + route[stepIteration - 1].x * CELL_SIZE,
            });
            setToPosition({
                x: RESET_POSITION.x + route[stepIteration].y * CELL_SIZE,
                y: RESET_POSITION.y + route[stepIteration].x * CELL_SIZE,
            });
        }
    }, [stepIteration]);

    const incrementIterationStep = useCallback(
        (data: AnimationResult) => {
            if (data.noop) return;
            setStepIteration((prevIterationStep) => {
                if (!prevIterationStep) return prevIterationStep;
                if (route && prevIterationStep === route.length - 1)
                    return prevIterationStep;
                else return prevIterationStep + 1;
            });
        },
        [setStepIteration, route]
    );

    return (
        <Spring
            from={fromPosition}
            to={toPosition}
            onResolve={incrementIterationStep}
        >
            {(props) => (
                <Sprite
                    texture={Texture.WHITE}
                    tint={0xff00ff}
                    alpha={0.5}
                    width={CHARACTER_WIDTH}
                    height={CHARACTER_HEIGHT}
                    anchor={[0.5, 0.5]}
                    {...props}
                />
            )}
        </Spring>
    );
};
