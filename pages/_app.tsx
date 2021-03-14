import '../styles/globals.css'
import { useState, useEffect } from "react"
import useDarkMode from "use-dark-mode"
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../ThemeConfig"
import styles from '../styles/app.module.css'

//Material
import Switch from '@material-ui/core/Switch';


function MyApp({ Component, pageProps }) {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    darkmode.toggle();
  };

  const [isMounted, setIsMounted] = useState(false)
  const darkmode = useDarkMode(true)
  const theme = darkmode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className={styles.themeSwitch}>
        Dark Mode
      <Switch
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        {isMounted && <Component {...pageProps} />}
      </div>
    </ThemeProvider >
  )
}

export default MyApp
