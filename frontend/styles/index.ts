import styled from 'styled-components'

export const Container = styled.main`

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
        font-family: arial, sans-serif;
        text-align: justify;
        margin-top: 5px;
        font-size: 12pt;
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
        margin: auto;
        cursor: pointer;
        padding: 20px;
        font-size: 16pt;
        background-color: #2951CC;
        border:none;
        border-radius: 5px;
        color: #fff;
    }


    @media screen and (max-width: 820px) {

        margin:15px;

        section {
            flex-direction: column-reverse;
            align-items: center;
            justify-content: center;
            margin: auto;
        }
    }

    @media screen and (max-width: 520px) {

        section > span > h1 {
            font-size: xx-large;
        }

        section > span > small {
            font-size: medium;
        }

        button {
            width: 70%;
        }
    }

`
