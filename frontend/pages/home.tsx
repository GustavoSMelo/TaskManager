import React, { useState } from 'react'
import { Container } from '../styles/home.style'
import { FaArrowRight } from 'react-icons/fa'

const Home: React.FC = () => {

    const [days, setDays] = useState(['Monday', 'Tuesday', 'Wednesday'])
    const [daysOfWeek, setDaysOfWeek] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
    const [choosedDay, setChoosedDay] = useState('Tuesday')

    const handleChangeDay = (indexDay: number) => {
        const currentlyIndexDay = daysOfWeek.findIndex(day => day === choosedDay)

        if (indexDay === 0) {
            setDays([daysOfWeek[currentlyIndexDay - 2], daysOfWeek[currentlyIndexDay - 1], daysOfWeek[currentlyIndexDay]])

            console.log([daysOfWeek[currentlyIndexDay - 2], daysOfWeek[currentlyIndexDay - 1], daysOfWeek[currentlyIndexDay]])

            setChoosedDay(daysOfWeek[currentlyIndexDay - 1])

        } else if (indexDay === 2) {
            setDays([daysOfWeek[currentlyIndexDay], daysOfWeek[currentlyIndexDay + 1], daysOfWeek[currentlyIndexDay + 2]])


            console.log([daysOfWeek[currentlyIndexDay], daysOfWeek[currentlyIndexDay + 1], daysOfWeek[currentlyIndexDay + 2]])

            setChoosedDay(daysOfWeek[currentlyIndexDay + 1])
        }
    }



    return (
        <Container>
            <h1>What day you wanna see the tasks ? </h1>
            <ul>
                <li onClick={() => handleChangeDay(0)}>{days[0]}</li>
                <li onClick={() => handleChangeDay(1)}>{days[1]}</li>
                <li onClick={() => handleChangeDay(2)}>{days[2]}</li>
            </ul>

            <button>Continue <FaArrowRight color='#fff' fontSize={16} /></button>
        </Container>
    )
}

export default Home
