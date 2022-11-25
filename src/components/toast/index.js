import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import colors from "../../styles/colors";

const ToastComponent = ({ msg }) => {
    return <div>{msg}</div>;
};

export const StyledToastContainer = styled(ToastContainer).attrs({
    className: "toast-container",
    toastClassName: "toast",
    bodyClassName: "body",
    progressClassName: "progress",
})`
    --toastify-toast-min-height: 40px;

    &&&.Toastify__toast-container {
        font-weight: 400;
        font-size: 1rem;
        color: red !important;
        z-index: 999;
        display: flex;
        justify-content: center;
        padding: 12px;
        line-height: 1rem;
    }

    .Toastify__toast-body {
        align-items: center;
        padding: 0;
    }
    .Toastify__progress-bar {
    }
    .Toastify__toast-theme--colored {
        color: white;
    }

    .toast {
        background: ${(props) =>
            props.toastColor ? props.toastColor : colors.mainRed};
        color: white;
        box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.15);
        border-radius: 30px;
        width: 80%;
        align-items: center;
        text-align: center;
    }
    .body {
        color: white;
        padding: 0;
    }
    .Toastify__close-button > svg {
        display: none;
    }

    .Toastify__toast-container--bottom-center {
        bottom: 1em;
        left: 50%;
        transform: translateX(-50%);
        animation-name: Toastify__bounceInUp;
    }
`;
export const Toast = (msg) =>
    toast(<ToastComponent msg={msg} />, {
        autoClose: 1000,
        hideProgressBar: true,
        progress: undefined,
        position: "bottom-center",
        rtl: false,
    });
