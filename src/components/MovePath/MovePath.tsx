import { FC, useCallback } from "react";
import { Container, Graphics } from "@pixi/react";
import { CELL_SIZE } from "../../utils";
import { MovePathProps } from "./MovePath.types";

export const MovePath: FC<MovePathProps> = ({ path }) => {
    const getCoordinateAccordingToCellSize = useCallback(
        (value: number) => value * CELL_SIZE + CELL_SIZE / 2,
        []
    );

    return (
        <Container>
            {path && (
                <Graphics
                    draw={(g) => {
                        g.clear();
                        g.lineStyle(2, "black");
                        path.forEach((point, pointIndex, points) => {
                            g.moveTo(
                                getCoordinateAccordingToCellSize(point.y),
                                getCoordinateAccordingToCellSize(point.x)
                            );
                            if (pointIndex < points.length - 1) {
                                g.lineTo(
                                    getCoordinateAccordingToCellSize(
                                        points[pointIndex + 1].y
                                    ),
                                    getCoordinateAccordingToCellSize(
                                        points[pointIndex + 1].x
                                    )
                                );
                            }
                        });
                    }}
                />
            )}
        </Container>
    );
};
