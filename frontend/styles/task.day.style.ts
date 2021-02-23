import styled from 'styled-components'

export const Container = styled.main`
    background-color: #C1C7E3;
    height: 100vh;
    align-items: center;
    justify-content: center;
`

export const WithoutContainer = styled.section<{formDisplayed: string}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 5%;

    .CloseIcon {
        font-size: 32pt;
        cursor: pointer;
        color: #fff;
    }

    form {
        display: ${props => props.formDisplayed};
        flex-direction: column;
        background-color: #101010dd;
        position: absolute;
        width: 100vw;
        height: 90vh;
        align-items: center;
        justify-content: center;
    }

    form > h1 {
        font-size: 22pt;
        font-weight: bold;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #fff;
    }

    form > input, form > textarea, form > select {
        width: 30%;
        margin: 10px;
        border: none;
        border-radius: 5px;
        padding: 15px;
        font-size: 14pt;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    form > textarea {
        resize: none;
        height: 200px;
    }

    form > select {
        cursor: pointer;
    }

    p {
        color: #1d2c4f;
        font-size: 20pt;
        font-weight: bold;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        margin: 15px;
        text-align:center;
    }

    button {
        width: 300px;
        background-color: #1d2c4f;
        border: none;
        border-radius: 15px;
        padding: 15px;
        font-size: 16pt;
        color: #fff;
        cursor: pointer;
        transition: 0.75s;
    }

    button:hover {
        background-color: #36344a;
        transition: 0.75s;
    }
`
