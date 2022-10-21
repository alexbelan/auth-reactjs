import React, { useContext, useEffect, useState} from "react";
import {Box, Button, FormControl, Input, InputLabel} from '@mui/material';
import AppContext from "../../AppContext";
import { generateCode } from "../../generates";

const NumberPhoneScreen = ({handleChange}) => {
    const {setNextBtn, formData} = useContext(AppContext)
    const [code, setCode] = useState({
        newCode: "",
        code: "", 
    })

    useEffect(() => {
        if(!!code.newCode && !!code.code && code.newCode == code.code){
            setNextBtn(true)
        } else {
            setNextBtn(false)
        }
    }, [formData, code])

    const handleChangeCode = (event) => {
        setCode(prev => ({...prev, code: event.target.value}))
    }

    return (
    <Box
        component="form"
        sx={{
            display: "flex",
            flexDirection: "column",
        }}
    >
        <FormControl variant="standard" required={true} sx={{marginBottom: "20px"}}>
            <InputLabel htmlFor="number" >Номер телефона</InputLabel>
            <Input 
                id={"number"}
                name={"number"}
                value={formData.number}
                onChange={handleChange} />
        </FormControl>
        <Box>
            <Button onClick={() => setCode(prev => ({...prev, newCode: generateCode()}))} variant={"contained"} disabled={!(!!formData.number)}>Получить код</Button>
            <p>Код: {code.newCode}</p>
        </Box>
        
        <FormControl variant="standard" required={true} sx={{marginBottom: "20px"}}>
            <InputLabel htmlFor="code" >Введите код</InputLabel>
            <Input 
                id={"code"}
                name={"code"}
                value={code.code}
                onChange={handleChangeCode}  />
        </FormControl>
    </Box>)
}

export default NumberPhoneScreen