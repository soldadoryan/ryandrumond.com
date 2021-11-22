import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        scrollbar-width: auto;
        scrollbar-color: #f83f59 #1f1f1f;

        /* Chrome, Edge, and Safari */
        &::-webkit-scrollbar {
            width: 5px;
        }

        &::-webkit-scrollbar-track {
            background: #1f1f1f;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #f83f59;
            border-radius: 10px;
            border: 3px solid #f83f59;
        }
    }

    body {
        overflow-x: hidden;
        overflow-y: hidden;
    }

    body, input, textarea, button, select {
        font-family: ${({ theme }) => theme.font};
        outline: 0;
    }

    button { cursor: pointer };
`;