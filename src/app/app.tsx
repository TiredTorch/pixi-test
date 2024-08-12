import {
	astar,
	Graph,
	GridNode
} from "javascript-astar";
import {
	useCallback,
	useMemo,
	useState
} from "react";
import { Stage } from "@pixi/react";
import {
	Button,
	Character,
	Grid,
	MovePath
} from "../components";
import { CELL_SIZE } from "../utils";
import { appStyles } from "./app.styles";

const App = () => {
    const [characterPath, setCharacterPath] = useState<GridNode[] | null>(null);

    const graph = useMemo(
        () =>
            new Graph(
                [
                    [1, 1, 1, 1, 0, 0, 0, 0],
                    [1, 1, 1, 1, 1, 0, 0, 0],
                    [0, 0, 1, 0, 0, 1, 1, 1],
                    [0, 1, 1, 1, 1, 1, 1, 1],
                ],
                {
                    diagonal: true,
                }
            ),
        []
    );

    const startPoint = useMemo(() => graph.grid[0][0], [graph]);
    const endPoint = useMemo(() => graph.grid[3][7], [graph]);

    const handleStartMovement = useCallback(() => {
        const searchedPath = astar.search(graph, startPoint, endPoint, {
            heuristic: astar.heuristics.diagonal,
        });

        setCharacterPath([startPoint, ...searchedPath]);
    }, [graph, startPoint, endPoint]);

    const handleResetCharacterPosition = useCallback(() => {
        setCharacterPath(null);
    }, []);

    return (
        <div style={appStyles.root}>
            <div style={appStyles.buttonSection}>
                <Button onClick={handleStartMovement}>Start movement</Button>
                <Button onClick={handleResetCharacterPosition}>Reset</Button>
            </div>
            <div style={appStyles.canvasSection}>
                <Stage
                    width={CELL_SIZE * 8 + 2}
                    height={CELL_SIZE * 4 + 2}
                    options={{
                        backgroundColor: 0xffffff,
                    }}
                >
                    <Grid
                        map={graph}
                        startPoint={startPoint}
                        endPoint={endPoint}
                        route={characterPath}
                    />
                    <MovePath path={characterPath} />
                    <Character route={characterPath} />
                </Stage>
            </div>
        </div>
    );
};

export default App;
