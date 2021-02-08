import { Container } from '../styles/index.ts'

const Home = () => {
  return (
    <Container>
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
                <img src='/images/humans-spa.png' alt='banner' />
            </figure>
        </section>
        <button>Subscribe here</button>
    </Container>
  )
}

export default Home;
