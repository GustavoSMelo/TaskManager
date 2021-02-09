import styled, { keyframes } from 'styled-components'

const animationForm = keyframes`
    from {
        transform: translateX(100%);
    } to {
        transform: translateX(0%);
    }
`

const animationFormClose = keyframes`
    from {
        transform: translateX(0%);
    } to {
        transform: translateX(-100%);
    }
`

export const Container = styled.main<{formWidth: string, formHeight: string, formDisplay: string}>`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    section {
        display: flex;
        flex-direction: row;
        height: 75%;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
    }

    section > span {
        width: 300px;
    }

    section > span > h1 {
        font-size: 32pt;
        font-weight: bold;
        color: #090821;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    section > span > small {
        color: #858585;
        font-family: sans-serif;
        text-align: justify;
        margin-top: 5px;
        font-size: 13pt;
        line-height: 30px;
    }

    section > figure {
        margin: 30px;
    }

    section > figure > img {
        width: 100%;
        height: 100%;
    }

    button {
        width: 460px;
        margin: 15px auto;
        cursor: pointer;
        padding: 20px;
        font-size: 16pt;
        background-color: #2951CC;
        border:none;
        border-radius: 5px;
        color: #fff;
        box-shadow: 1px 1px 4px #404040;
    }

    a {
        text-align: center;
        text-decoration: none;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color: #606060;
    }

    .enterForm, .exitForm {
        width: ${props => props.formWidth};
        height: ${props => props.formHeight};
        position: absolute;
        display: ${props => props.formDisplay};
        animation-duration: 1s;
        animation-fill-mode: unset;
        background-color: #F6EBF5;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .enterForm {
        animation-name: ${animationForm};
    }

    .exitForm {
        animation-name: ${animationFormClose};
    }

    article > .form-login {
        width: 50% !important;
        height: 100% !important;
    }

    article > form {
        display: flex;
        width: 50%;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    article > form > input {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #000;
        font-size: 18pt;
        border-radius: 5px;
        border-color: #2951CC;
        margin: 15px;
        width: 460px;
        padding: 15px;
    }

    article > form > h1 {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    .arrow-return {
        font-size: 32pt;
        cursor: pointer;
    }

    @media screen and (max-width: 820px) {

        margin:15px;

        section {
            flex-direction: column-reverse;
            align-items: center;
            justify-content: center;
            margin: auto;
            height: 100vh;
        }

        button {
            margin-bottom: 30px;
        }
    }

    @media screen and (max-width: 520px) {

        margin: 0px;

        section > span > h1 {
            font-size: x-large auto;
        }

        section > span > small {
            font-size: medium auto;
            text-size-adjust: auto;
        }

        button {
            width: 70%;
        }
    }

`
