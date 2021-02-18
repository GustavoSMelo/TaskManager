import React, {useEffect, useState} from 'react'
import Navbar from '../../components/Navbar'
import { Container, WithoutContainer } from '../../styles/task.day.style'
import DayInterface from '../../interface/NavbarInterface'
import api from '../../api/api'
import Image from 'next/image'

export async function getServerSideProps(ctx: any) {
    const day = ctx.query.day

    return {
        props: {
            day
        }
    }

}

const Task : React.FC<DayInterface> = (props) => {

    const [tasks, setTasks] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [week_days, setWeek_days] = useState('')
    const [start_at, setStart_at] = useState('')
    const [end_at, setEnd_at] = useState('')

    const getDataByAPI = async () => {
        try {
            const response = await api.get('/api/task', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('bearer-token')}`,
                    day: props.day
                }
            })

            //setTasks(response.data)

            console.log({resposta: response})
        } catch (err) {
            console.log({Error: err})
        }

    }

    useEffect(() => {
        getDataByAPI()
    }, [])

    const viewWithoutTask = () => {
        return (
            <WithoutContainer>
                <Image src='/images/void.svg' width={600} height={500}/>
                <p>
                    Hey!<br />
                    look's like you don't have any task registred yet
                </p>
                <button>Create a new task</button>

                <form>
                    <h1>Create your task here</h1>
                    <input placeholder='insert a task name here... ' name='name' id='name' value={name} required/>
                    <textarea placeholder='insert a description of task here' name='description' id='description' value={description} required/>
                    <select value={week_days}>
                        <option value={''}>Choose you day</option>
                        <option value='Sunday'>Sunday</option>
                        <option value='Monday'>Monday</option>
                        <option value='Tuesday'>Tuesday</option>
                        <option value='Wednesday'>Wednesday</option>
                        <option value='Thursday'>Thursday</option>
                        <option value='Friday'>Friday</option>
                        <option value='Saturday'>Saturday</option>
                    </select>
                </form>
            </WithoutContainer>
        )
    }

    const showTheTasks = () => {
        return (
            <h1>aaa</h1>
        )
    }

    return (
        <Container>
            <Navbar day={props.day} />
            {tasks.length <= 0 ? viewWithoutTask() : showTheTasks()}
        </Container>
    )

}

export default Task
