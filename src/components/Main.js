import { Button } from "@mui/material"
import { Box } from "@mui/system"
import React, { useContext, useEffect } from "react"
import { getCookie, setCookie } from "../api/cookies"
import AppContext from "../AppContext"
import { fieldsBase, screens } from "../config"

const Main = () => {
    const {nextBtn, setNextBtn, numScreen, setNumScreen, setFormData} = useContext(AppContext)
    
    const handleChange = (event) => {
        setFormData((prev) => {
            const newState = {
                ...prev,
                [event.target.name]: event.target.value,
            }
            setCookie({
                screen: numScreen,
                state: newState
            })
            return newState
        })

    }

    const nextScreen = () => {
        if(numScreen < screens.length - 1) {
            setNumScreen(prev => prev + 1)
            setNextBtn(false)
            const cookieState = getCookie(document.cookie)
            setCookie({
                ...cookieState,
                screen: numScreen + 1
            })
        } else {
            setNumScreen(0)
            setNextBtn(false)
            setFormData(fieldsBase)
            setCookie({
                screen: numScreen,
                state: fieldsBase
            })
        }
    }

    const prevScreen = () => {
        setNumScreen(prev => prev - 1)
        setNextBtn(false)
        const cookieState = getCookie()
        setCookie({
            ...cookieState,
            screen: numScreen - 1
        })
    }

    useEffect(() => {
        if(!!document.cookie ) {
            const cookieState = getCookie()
            setNumScreen(+cookieState.screen)
            setFormData(cookieState.state)
        } else {
            setCookie({
                screen: numScreen,
                state: fieldsBase
            })
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
            {screens[numScreen].component({handleChange: handleChange})}
            <Box 
            component={"div"}
                >
                {numScreen > 0 &&
                    <Button variant={"contained"} sx={{marginRight: "10px"}} onClick={prevScreen}>{"Назад"}</Button>
                }
                <Button variant={"contained"} onClick={nextScreen} disabled={!nextBtn}>{numScreen < screens.length - 1 ? "Продолжить" : "Завершить регистрацию"}</Button>
            </Box>
            
            
        </Box>
    )
}

export default Main