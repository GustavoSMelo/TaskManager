import styled, {keyframes} from 'styled-components'

const borderAnimation = keyframes`
    from {
        transform: translateY(50%)
    } to {
        transform: translateY(45%)
    }
`

export const Container = styled.main`

    display: flex;
    background-color: #C1C7E3;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #1d2c4f;
    }

    ul {
        margin-top: 40px;
    }

    ul > li {
        margin: 10px;
        list-style-type: none;
        font-size: 16pt;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        padding: 20px;
        transition: 0.5s;
        cursor: pointer;
    }

    ul > li:hover {
        font-size: 18pt;
        transition: 0.5s;
        border-radius: 5px;
    }

    ul > li:nth-child(2) {
        font-size: 22pt;
        transition: 0.5s;
        border-top: 3px solid #1d2c4f;
        border-bottom: 3px solid #1d2c4f;
        border-left: 3px solid #1d2c4f;
        border-right: 3px solid #1d2c4f;
        border-radius: 5px;
    }

    button {
        background-color: #1d2c4f;
        border: none;
        border-radius: 5px;
        padding: 20px;
        margin: 15px;
        color: #fff;
        font-size: 16pt;
        cursor: pointer;

    }

`
