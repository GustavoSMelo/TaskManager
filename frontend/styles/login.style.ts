import styled from 'styled-components'

export const Container = styled.main`

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #C1C7E3;
    flex-direction: column;

    form {
        display: flex;
        flex-direction: column;
        width: 600px;
        height: 50vh;
        align-items: center;
        justify-content: center;
        margin: 40px;
        border-radius: 5px;
        box-shadow: 1px 1px 6px #101010;
        background-color: #1d2c4f;
    }

    form > h1 {
        font-size: 22pt;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #fff;
    }

    form > input {
        width: 75%;
        margin: 10px;
        font-size: 16pt;
        padding: 15px;
        color: #fff;
        background-color: #4e5975;
        border:none;
        border-radius: 5px;
    }

    form > button {
        padding: 10px;
        width: 135px;
        height: 60px;
        font-size: 16pt;
        margin-top: 30px;
        cursor: pointer;
        background-color: #4e5975;
        border: none;
        border-radius: 5px;
        color: #fff;
    }

    @media (max-width: 620px) {
        form {
            width: 95%;
        }
    }

`
