import React from 'react'
import { Container } from './style'
import NavbarInterface from '../../interface/NavbarInterface'
import { FaArrowLeft, FaAlignRight } from 'react-icons/fa'
import { useRouter } from 'next/router'

const Navbar : React.FC<NavbarInterface> = (props) => {
    const router = useRouter()

    return (
        <Container>
            <span onClick={() => router.back()}>
                <FaArrowLeft fontSize={16} color='#fff' /> Go back
            </span>

            <h1>{props.day}</h1>

            <span>
                <FaAlignRight fontSize={32} color='#fff' />
            </span>
        </Container>
    )
}

export default Navbar
