import React, { useContext, useEffect, useState} from "react";
import {Box, Button, FormControl, Input, InputLabel} from '@mui/material';
import AppContext from "../../AppContext";

const NumberPhoneScreen = () => {
    const {setNextBtn, formData, setFormData} = useContext(AppContext)
    const [code, setCode] = useState({
        newCode: "",
        code: "", 
    })
    
    useEffect(() => {
        setFormData(prev => ({...prev, 
            number: "",
        }))
    }, [])

    useEffect(() => {
        if(!!code.newCode && !!code.code && code.newCode == code.code){
            setNextBtn(true)
        } else {
            setNextBtn(false)
        }
    }, [formData, code])

    const handleChange = (event) => {
        if(event.target.name === "number") {
            setFormData((prev) => {
                return {
                    ...prev,
                    [event.target.name]: event.target.value,
                }
            })
        }
        if(event.target.name === "code") {
            setCode(prev => ({...prev, code: event.target.value}))
        }
    }

    const generateCode = () => {
        let rand = 1000 + Math.random() * (9999 + 1 - 1000);
        setCode(prev => ({...prev, newCode: Math.floor(rand)}))
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
            <Button onClick={generateCode} variant={"contained"} disabled={!(!!formData.number)}>Получить код</Button>
            <p>Код: {code.newCode}</p>
        </Box>
        
        <FormControl variant="standard" required={true} sx={{marginBottom: "20px"}}>
            <InputLabel htmlFor="code" >Введите код</InputLabel>
            <Input 
                id={"code"}
                name={"code"}
                value={code.code}
                onChange={handleChange}  />
        </FormControl>
    </Box>)
}

export default NumberPhoneScreen