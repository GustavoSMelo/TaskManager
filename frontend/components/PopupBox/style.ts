import styled, { keyframes } from 'styled-components'

const keyframeAnimation = keyframes`
    from {
        transform: translateX(10%);
    } to {
        transform: translateX(-17%);
    }
`

export const Container = styled.main<{backgroundColor: string, textColor: string}>`

    display: flex;
    flex-direction: column;
    background-color: ${props => props.backgroundColor};
    width: 350px;
    height: 60px;
    padding: 35px;
    margin: 10px auto;
    border-radius: 5px;
    border: none;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 1;
    animation-name: ${keyframeAnimation};
    animation-duration: 1s;
    animation-fill-mode: both;
    position: absolute;
    right: 0;
    top: 0;

    h1 {
        font-size: 16pt;
        font-weight: bold;
        color: ${props => props.textColor};
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
`
