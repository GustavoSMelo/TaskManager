import { ThemeProvider, createGlobalStyle } from "styled-components"

function App ({Component, pageProps}) {

    const GlobalTheme = createGlobalStyle`
        * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }
    `

    const theme = {
        colors: {
            primary: "#fff",
        }
    }

    return (
        <>
            <GlobalTheme />
            <ThemeProvider theme={theme}>
                <Component {...pageProps}/>
            </ThemeProvider>
        </>
    )
}

export default App
