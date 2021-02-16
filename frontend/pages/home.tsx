import React, { useState } from 'react'
import { Container } from '../styles/home.style'
import { FaArrowRight } from 'react-icons/fa'
import { useRouter } from 'next/router'

const Home: React.FC = () => {

    const [choosedDay, setChoosedDay] = useState('')
    const [btnClass, setBtnClass] = useState('btnNotChoosed')
    const [dayClass, setDayClass] = useState([])
    const router = useRouter();

    const handleSelectDay = (day: string, index: number) => {

        setChoosedDay(day)
        setBtnClass('btnChoosed')

        const support = []

        for (let i = 0; i < 7; i++) {



            if (i === index) {
                support.push('choosedDay')
            } else {
                support.push('')
            }

        }

        setDayClass(support)
    }

    const handleClickButton = () => {
        if(choosedDay !== null && choosedDay !== undefined && choosedDay !== '') {
            router.push('/task')
        }
    }

    return (
        <Container>
            <h1>Which day you want to see the tasks</h1>

            <article>
                <section className={dayClass[0]} onClick={() => handleSelectDay('Monday', 0)} ><h1>Monday</h1></section>

                <section className={dayClass[1]} onClick={() => handleSelectDay('Tuesday', 1)} ><h1>Tuesday</h1></section>

                <section className={dayClass[2]} onClick={() => handleSelectDay('Wednesday', 2)} ><h1>Wednesday</h1></section>

                <section className={dayClass[3]} onClick={() => handleSelectDay('Thursday', 3)} ><h1>Thursday</h1></section>

                <section className={dayClass[4]} onClick={() => handleSelectDay('Friday', 4)} ><h1>Friday</h1></section>

                <section className={dayClass[5]} onClick={() => handleSelectDay('Saturday', 5)} ><h1>Saturday</h1></section>

                <section className={dayClass[6]} onClick={() => handleSelectDay('Sunday', 6)} ><h1>Sunday</h1></section>

            </article>

            <button className={btnClass} onClick={handleClickButton} > Continue <FaArrowRight /> </button>

        </Container>
    )
}

export default Home
