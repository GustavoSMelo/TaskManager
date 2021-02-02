import { ThemeProvider } from "styled-components"

function App ({Component, pageProps}) {

    const theme = {
        colors: {
            primary: "#fff",
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps}/>
        </ThemeProvider>
    )
}

export default App
