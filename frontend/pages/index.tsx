import { useState, useEffect } from 'react'
import { Container } from '../styles/index.style'
import api from '../api/api'
import Images from 'next/image'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { setTimeout } from 'timers'
import Popup from '../components/PopupBox'

const Home = () => {

    const [formWidth, setFormWidth] = useState('0vw')
    const [formHeight, setFormHeight] = useState('0vh')
    const [formDisplay, setFormDisplay] = useState('none')
    const [formDirection, setFormDirection] = useState('')
    const [PopupStatus, setPopupStatus] = useState(<></>)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [formClassName, setFormClassName] = useState('enterForm')

    const handleFormulary = () => {
        setFormWidth('100vw')
        setFormHeight('100vh')
        setFormDisplay('flex')
        setFormDirection('animationForm')
        setFormClassName('enterForm')
    }

    const handleCloseFormulary = () => {
        setFormClassName('exitForm')

        setTimeout(() => {
            setFormWidth('0vw')
            setFormHeight('0vh')
            setFormDisplay('none')
        }, 1000)
    }

    useEffect(() => {
        setInterval(() => {
            setPopupStatus(<></>)
        }, 10000)
    }, [PopupStatus])

    const sendEmail = async () => {
        try {

            await api.post('/api/user', {email, name, password}, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            setPopupStatus(<Popup backgroundColor={'#9EE38D'} textColor={'#005407'} message={'User created with success '} />)
        } catch (err) {

            console.log({Error: err});

            setPopupStatus(<Popup backgroundColor={'#E09487'} textColor={'#E60A00'} message={'Some fields is missing or email already exists'} />)
        }
    }

    return (
        <Container
            formWidth={formWidth}
            formHeight={formHeight}
            formDisplay={formDisplay}
        >
            <section>
                <span>
                    <h1>
                        Never be
                        <br />
                        unorganizable
                    </h1>
                    <small>
                        If you are trying to organize yourself, but can't do it. Don't hurry
                        only, subscribe here and be organize forever. <br/>
                        Put your tasks here and make more easily your life
                    </small>
                </span>
                <figure>
                    <Images src='/images/task.png' alt='banner' width={300} height={300} />
                </figure>
            </section>
            <button onClick={handleFormulary}>Subscribe here</button>
            <Link href='/login'>
                <a>If you have account, do login here </a>
            </Link>

            <article className={formClassName}>
                <figure className='login-form'>
                    <Images
                        src='/images/loginform.png'
                        alt='form banner'
                        className='login-form-img'
                        width={600}
                        height={650}
                    />
                </figure>
                <form>
                    <FaArrowLeft onClick={handleCloseFormulary} className='arrow-return'  />
                    <h1>Create your account here </h1>

                    <input
                        type='email'
                        placeholder='Insert your email here... '
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        name='email'
                        id='email'
                        required />

                    <input
                        type='text'
                        placeholder='Insert your name here... '
                        value={name}
                        onChange={e => setName(e.target.value)}
                        name='name'
                        id='name'
                        required />

                    <input
                        type='password'
                        placeholder='Insert your password here... '
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        name='password'
                        id='password'
                        required />

                    <button type='button' onClick={sendEmail}>Sign in</button>
                </form>
            </article>
            {PopupStatus}
        </Container>
    )
}

export default Home;
