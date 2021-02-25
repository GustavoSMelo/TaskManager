import styled from 'styled-components'

export const Container = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #C1C7E3;
    width: 100%;
    height: 100vh;

    form {
        background-color: #fff;
        padding: 15px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 600px;
    }

    form > input, form > textarea, form > select {

        width: 300px;
        border-radius: 5px;
        border: none;
        padding: 10px;
        margin: 5px;
        border: solid #1d2c4f 2px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 16pt;
    }

    form > textarea {
        resize: none;
        height: 200px;
    }

    form > button {
        width: 300px;
        background-color: #1d2c4f;
        border: none;
        border-radius: 15px;
        padding: 15px;
        font-size: 16pt;
        color: #fff;
        cursor: pointer;
        transition: 0.75s;
        margin: 10px;
    }

    @media screen and (max-width: 620px) {
        form {
            width: 95%;
        }

        form > input, form > textarea, form > select, form > button {
            width: 85%
        }
    }

`
