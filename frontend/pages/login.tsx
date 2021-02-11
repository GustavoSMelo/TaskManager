import React, { useState } from 'react'
import Popup from '../components/PopupBox'
import api from '../api/api'
import { Container } from '../styles/login.style'
import { useRouter } from 'next/router'

const Login : React.FC = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [PopupStatus, setPopupStatus] = useState(<></>)
    const router = useRouter()

    const handleLogin = async () => {
        try {

            const response = await api.post('/api/auth', {
                email,
                password
            })

            localStorage.setItem('bearer-token', response.data.token)

            //console.log(response);
            setPopupStatus(<></>)
            router.push('/home')

        } catch (err) {
            setPopupStatus(<Popup backgroundColor={'#E09487'} textColor={'#E60A00'} message={err.response.data.error} />)
            console.error({Error: err.response.data.error});
        }
    }

    return (
        <Container>
            <form>

                <h1>Welcome user :)</h1>

                <input type="email"
                    name='email'
                    value={email}
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}
                    required />

                <input type="password"
                    name="password"
                    value={password}
                    placeholder='Password'
                    onChange={e => setPassword(e.target.value)}
                    required />

                <button type="button" onClick={handleLogin}> Login </button>
            </form>
            {PopupStatus}
        </Container>
    )

}

export default Login
