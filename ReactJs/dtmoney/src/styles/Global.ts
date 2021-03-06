import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --shape: #FFFFFF;
        
        --text-style: #363F5F;
        --text-body: #969cb3;

        --blue-light: #6933FF;
        --blue: #5429CC;
        --green: #33CC95;
        --red: #E62E4D;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;   
    }

    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;

    }


    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`