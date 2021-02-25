import React, { useState, useEffect } from 'react'
import EditTaskInterface from '../../../interface/EditTaskInterface'
import api from '../../../api/api'
import { Container } from '../../../styles/task.edit.style'
import Navbar from '../../../components/Navbar'
import { FaPencilAlt } from 'react-icons/fa'
import Popup from '../../../components/PopupBox'
import { useRouter } from 'next/router'

export function getServerSideProps (ctx: any) {

    console.log({contexto: ctx.query})

    const { id } = ctx.query

    return {
        props: { id }
    }

}

const EditTask : React.FC<EditTaskInterface> = (props) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [week_days, setWeek_days] = useState('')
    const [start_at, setStart_at] = useState(0)
    const [end_at, setEnd_at] = useState(0)
    const [PopupBox, setPopupBox] = useState(<></>)
    const router = useRouter()

    const getDataByAPI = async () => {

        const response = await api.get(`/api/task/${props.id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('bearer-token')}`
            }
        })

        setName(response.data.name)
        setDescription(response.data.description)
        setWeek_days(response.data.week_days)
        setStart_at(response.data.start_at)
        setEnd_at(response.data.end_at)

    }

    const handlerEditTask = async () => {
        try {
            await api.put(`/api/task/${props.id}`, {name, description, week_days, start_at, end_at}, {headers: {
                Authorization: `Bearer ${localStorage.getItem('bearer-token')}`
            }})

            router.back()

        } catch (err) {
            setPopupBox(<Popup backgroundColor={'#E09487'} textColor={'#E60A00'} message={err.response.data.error} />)
        }
    }

    useEffect(() => {
        getDataByAPI()
    }, [])


    return (
        <>
            <Navbar day={'Edit Task'} />
            <Container>
                <form>

                    <input type="text" placeholder="Insert a name here... " value={name} onChange={event => setName(event.target.value)} required />

                    <textarea placeholder="Insert a description here... " value={description} onChange={event => setDescription(event.target.value)} required />

                    <input type="number" placeholder="The task start in... " value={start_at} onChange={event => setStart_at(parseFloat(event.target.value))} required />

                    <input type="number" placeholder="The task end in... " value={end_at} onChange={event => setEnd_at(parseFloat(event.target.value))} required />

                    <select value={week_days} onChange={event => setWeek_days(event.target.value)}>
                        <option value={''}>Choose you day</option>
                        <option value='Sunday'>Sunday</option>
                        <option value='Monday'>Monday</option>
                        <option value='Tuesday'>Tuesday</option>
                        <option value='Wednesday'>Wednesday</option>
                        <option value='Thursday'>Thursday</option>
                        <option value='Friday'>Friday</option>
                        <option value='Saturday'>Saturday</option>
                    </select>

                    <button type='button' onClick={() => handlerEditTask()}>
                        <FaPencilAlt /> Edit Task
                    </button>

                </form>
                {PopupBox}
            </Container>
        </>
    )

}

export default EditTask
