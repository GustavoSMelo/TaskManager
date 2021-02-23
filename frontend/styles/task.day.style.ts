import styled from 'styled-components'

export const Container = styled.main`
    background-color: #C1C7E3;
    height: 100vh;
    align-items: center;
    justify-content: center;
`

export const TaskContainer = styled.section<{ buttonDisplay: string, formDisplayed: string}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;

    article {
        background-color: #fff;
        padding: 15px;
        margin: 15px;
        border: none;
        border-radius: 5px;
        width: 600px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        box-shadow: 1px 1px 4px #909090;
    }

    article > h1 {
        text-align: center;
        font-size: 20pt;
        text-transform: capitalize;
    }

    article > p {
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: justify;
    }

    article > h4 {
        text-align: center;
    }

    article > span {
        display: flex;
        justify-content: flex-end;
    }

    .TaskIcon {
        margin: 5px;
        font-size: 14pt;
        cursor: pointer;
    }

    button {
        width: 600px;
        padding: 15px;
        border: none;
        border-radius: 5px;
        box-shadow: 1px 1px 4px #909090;
        font-weight: bold;
        font-size: 14pt;
        display: ${props => props.buttonDisplay};
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: 0.25s;
    }

    button:hover {
        transition: 0.25s;
        box-shadow: 2px 2px 6px #909090;
    }


    form {
        width: 600px;
        margin-top: 15px;
        background-color: #fff;
        display: ${props => props.formDisplayed};
        flex-direction: column;
        padding: 15px;
        box-shadow: 1px 1px 4px #909090;
    }

    form > .CloseIconForm {
        justify-content: flex-end;
        cursor: pointer;
        font-size: 18pt;
    }

    form > h1 {
        text-align: center;
        font-size: 18pt;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        margin: 10px;
    }

    form > input, form > textarea, form > select {
        padding: 15px;
        margin: 10px;
        border-radius: 5px;
        border: none;
        box-shadow: 1px 1px 4px #303030;
        font-size: 14pt;
    }

    form > textarea {
        resize: none;
    }

    form > button {
        width: auto;
        margin: 10px;
        background-color: #1d2c4f;
        color: #fff;
        display: flex;
    }

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
