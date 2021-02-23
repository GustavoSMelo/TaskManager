import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { Container, WithoutContainer, TaskContainer } from '../../styles/task.day.style'
import DayInterface from '../../interface/NavbarInterface'
import api from '../../api/api'
import Image from 'next/image'
import { FaWindowClose, FaPlusCircle, FaTrash, FaPencilAlt } from 'react-icons/fa'
import Popup from '../../components/PopupBox'
import TaskInterface from '../../interface/TaskInterface'

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
    const [week_days, setWeek_days] = useState(props.day)
    const [start_at, setStart_at] = useState(null)
    const [end_at, setEnd_at] = useState(null)
    const [openForm, setOpenForm] = useState('none')
    const [displayButton, setDisplayButton] = useState('flex')
    const [PopupBox, setPopupBox] = useState(<></>)

    const getDataByAPI = async () => {
        try {
            const response = await api.get('/api/task', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('bearer-token')}`,
                    day: props.day
                }
            })

            setTasks(response.data)


            setTimeout(() => {
                setPopupBox(<></>)
            }, 3000)
            console.log({resposta: response.data})
        } catch (err) {
            console.log({Error: err})
        }

    }

    useEffect(() => {
        getDataByAPI()
    }, [PopupBox])

    const handlerCreateTask = async () => {

        try {
            await api.post('/api/task', {
                name, description, week_days, start_at, end_at
            }, {headers: {
                Authorization: `Bearer ${localStorage.getItem('bearer-token')}`,
            }})

            setPopupBox(<Popup textColor='#0AFA00' backgroundColor='#CEFAD5' message='Task created with success ' />)

            setName('')
            setDescription('')
            setEnd_at(0)
            setStart_at(0)
            setWeek_days(props.day)
            setOpenForm('none')
            setDisplayButton('flex')

        } catch (err) {
            setPopupBox(<Popup textColor='#f00' backgroundColor='#FCD9D5' message='Error to create a task, please try again' />)

            console.error({Error: err})
        }
    }

    const handlerDeleteTask = async (id: number) => {
        await api.delete(`/api/task/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('bearer-token')}`
            }
        })

        setTasks(tasks.filter((task: TaskInterface) => task.id !== id))
    }

    const viewWithoutTask = () => {
        return (
            <WithoutContainer formDisplayed={openForm}>
                <Image src='/images/void.svg' width={600} height={500}/>
                <p>
                    Hey!<br />
                    look's like you don't have any task registred yet
                </p>
                <button onClick={() => setOpenForm('flex')}>Create a new task</button>

                <form>
                    <FaWindowClose className="CloseIcon" onClick={() => setOpenForm('none')}/>
                    <h1>Create your task here</h1>

                    <input placeholder='insert a task name here... '
                        type='text'
                        name='name'
                        id='name'
                        value={name}
                        onChange={event => setName(event.target.value)}
                        required
                    />

                    <textarea
                        placeholder='insert a description of task here'    name='description'
                        id='description'
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                        required
                    />

                    <select value={week_days} onChange={e => setWeek_days(e.target.value)}>
                        <option value={''}>Choose you day</option>
                        <option value='Sunday'>Sunday</option>
                        <option value='Monday'>Monday</option>
                        <option value='Tuesday'>Tuesday</option>
                        <option value='Wednesday'>Wednesday</option>
                        <option value='Thursday'>Thursday</option>
                        <option value='Friday'>Friday</option>
                        <option value='Saturday'>Saturday</option>
                    </select>

                    <input
                        placeholder='Start at..'
                        name='name'
                        type='number'
                        id='name'
                        value={start_at}
                        onChange={event => setStart_at(parseFloat(event.target.value))}
                        required
                    />

                    <input
                        placeholder='End at.. '
                        name='name'
                        type='number'
                        id='name'
                        value={end_at}
                        onChange={event => setEnd_at(parseFloat(event.target.value))}
                        required
                    />

                    <button type='button' onClick={() => handlerCreateTask()}> Create Task</button>
                </form>
            </WithoutContainer>
        )
    }

    const showTheTasks = () => {
        return (
            <TaskContainer buttonDisplay={displayButton} formDisplayed={openForm}>
                {tasks.map((task : TaskInterface) => <article>
                    <h1>{task.name}</h1>
                    <hr />
                    <p>{task.description}</p>
                    <h4>Start at: {task.start_at} | End at: {task.end_at}</h4>
                    <span>
                        <FaTrash className='TaskIcon' onClick={() => handlerDeleteTask(task.id)} />
                        <FaPencilAlt className='TaskIcon' />
                    </span>
                </article>)}

                <button onClick={() => {
                    setOpenForm('flex')
                    setDisplayButton('none')
                }}><FaPlusCircle style={{margin: '10px'}} /> Create a new task</button>

                <form>
                    <FaWindowClose className="CloseIconForm" onClick={() => {
                        setOpenForm('none')
                        setDisplayButton('flex')
                    }}/>

                    <h1>Create your task here</h1>

                    <hr />

                    <input placeholder='insert a task name here... '
                        type='text'
                        name='name'
                        id='name'
                        value={name}
                        onChange={event => setName(event.target.value)}
                        required
                    />

                    <textarea
                        placeholder='insert a description of task here'    name='description'
                        id='description'
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                        required
                    />

                    <select value={week_days} onChange={e => setWeek_days(e.target.value)}>
                        <option selected value={props.day}>{props.day}</option>
                    </select>

                    <input
                        placeholder='Start at..'
                        name='name'
                        type='number'
                        id='name'
                        value={start_at}
                        onChange={event => setStart_at(parseFloat(event.target.value))}
                        required
                    />

                    <input
                        placeholder='End at.. '
                        name='name'
                        type='number'
                        id='name'
                        value={end_at}
                        onChange={event => setEnd_at(parseFloat(event.target.value))}
                        required
                    />

                    <button type='button' onClick={() => handlerCreateTask()}> Create Task</button>
                </form>
            </TaskContainer>
        )
    }

    return (
        <Container>
            <Navbar day={props.day} />
            {tasks.length <= 0 ? viewWithoutTask() : showTheTasks()}
            {PopupBox}
        </Container>
    )

}

export default Task
