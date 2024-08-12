import { StyleList } from "../types";

export const appStyles: StyleList = {
    root: {
        minWidth: "100dvw",
        minHeight: "100dvh",
        maxWidth: "100dvw",
        maxHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
    },
    buttonSection: {
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        padding: "20px",
    },
    canvasSection: {
        width: "100%",
        flexGrow: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};
