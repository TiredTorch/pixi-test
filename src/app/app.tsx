import { useCallback } from "react";
import { Stage } from "@pixi/react";
import { Button } from "../components";
import { appStyles } from "./app.styles";

const App = () => {
    const handleStartMovement = useCallback(() => {
        throw new Error();
    }, []);

    const handleResetCharacterPosition = useCallback(() => {
        throw new Error();
    }, []);

    return (
        <div style={appStyles.root}>
            <div style={appStyles.buttonSection}>
                <Button onClick={handleStartMovement}>Start movement</Button>
                <Button onClick={handleResetCharacterPosition}>Reset</Button>
            </div>
            <div style={appStyles.canvasSection}>
                <Stage></Stage>
            </div>
        </div>
    );
};

export default App;
