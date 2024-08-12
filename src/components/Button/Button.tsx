import { ButtonHTMLAttributes, FC } from "react";
import { buttonStyles } from "./Button.styles";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    style,
    ...rest
}) => {
    return (
        <button
            style={{
                ...buttonStyles.root,
                ...style,
            }}
            {...rest}
        >
            {children}
        </button>
    );
};
