import styled from 'styled-components'

export const Container = styled.main`

    background-color: #C1C7E3;
    display: flex;
    flex-direction: column;
    height: 100vh;

    h1 {
        font-size: 26pt;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #1d2c4f;
        text-align: center;
        margin: 30px;
    }

    article {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        height: 100%;
        grid-gap: 10px;
        padding: 30px;
    }

    section {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: solid 3px #1d2c4f;
        border-radius: 5px;
        transition: 0.5s;
    }

    section > h1 {
        color: #1d2c4f;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: bold;
    }

    section:hover {
        box-shadow: 1px 1px 6px #303030;
        transition: 0.5s;
    }

    .choosedDay {
        background-color: #1d2c4f;
        border: none;
        transition: 0.5s;
        cursor: default;
    }

    .choosedDay > h1 {
        color: #fff !important;
    }

    .btnNotChoosed {
        width: 300px;
        margin: 30px auto;
        cursor: not-allowed;
        background-color: transparent;
        border: 3px solid #1d2c4f;
        padding: 10px;
        font-size: 16pt;
        font-weight: bold;
        color: #1d2c4f;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        transition: 0.5s;
    }

    .btnChoosed {
        width: 300px;
        margin: 30px auto;
        cursor: pointer;
        background-color: #1d2c4f;
        border: 3px solid transparent;
        padding: 10px;
        font-size: 16pt;
        font-weight: bold;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        transition: 0.5s;
    }

    @media screen and (max-width: 920px){

        article {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media screen and (max-width: 660px) {

        height: 100%;

        article {
            grid-template-columns: 1fr;
        }

        section {
            padding: 30px;
        }
    }

`
