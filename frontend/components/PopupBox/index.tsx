import React from 'react'
import PopupInterface from '../../interface/PopupInterface'
import { Container } from './style'

const PopupBox: React.FC<PopupInterface> = ({ backgroundColor, message, textColor }) => {

    return (

        <Container
            backgroundColor={backgroundColor}
            textColor={textColor} >
            <h1>{message}</h1>
        </Container>

    )

}

export default PopupBox
