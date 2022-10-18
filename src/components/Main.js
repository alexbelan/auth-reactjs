import { Button } from "@mui/material"
import { Box } from "@mui/system"
import React, { useContext, useEffect } from "react"
import AppContext from "../AppContext"
import { screens } from "../config"

const Main = () => {
    const {nextBtn, setNextBtn, numScreen, setNumScreen} = useContext(AppContext)

    const nextScreen = () => {
        if(numScreen < screens.length - 1) {
            setNumScreen(prev => prev + 1)
            setNextBtn(false)
            document.cookie = numScreen + 1
        } else {
            setNumScreen(0)
            setNextBtn(false)
            document.cookie = 0
        }
    }

    useEffect(() => {
        console.log(!!document.cookie)
        if(!!document.cookie) {
            setNumScreen(+document.cookie)
        } else {
            document.cookie = 0
        }
    }, [])

    return (
        <Box 
        component={"div"}
        sx={{
            width: 800,
            margin: "auto"
        }}
        >
            <h1>{screens[numScreen].title}</h1>
            <p>Поля с * обязательны к заполнению</p>
            {screens[numScreen].component}
            
            <Button variant={"contained"} onClick={nextScreen} disabled={!nextBtn}>{numScreen < screens.length - 1 ? "Продолжить" : "Завершить регистрацию"}</Button>
            
        </Box>
    )
}

export default Main