import React, { useContext, useEffect} from "react";
import {Box, FormControl, Input, InputLabel} from '@mui/material';
import AppContext from "../../AppContext";

const LoginScreen = () => {
    const {setNextBtn, formData, setFormData} = useContext(AppContext)
    
    useEffect(() => {
        setFormData(prev => ({...prev, 
            login: "",
            email: "",
            password: "",
            repeatPassword: "",
        }))
    }, [])

    useEffect(() => {
        if(!!formData.login && !!formData.password && formData.password === formData.repeatPassword){
            setNextBtn(true)
        } else {
            setNextBtn(false)
        }
    }, [formData])

    const handleChange = (event) => {
        setFormData((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
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
            <InputLabel htmlFor="login" >Логин</InputLabel>
            <Input 
                id={"login"}
                name={"login"}
                value={formData.login}
                onChange={handleChange} />
        </FormControl>
        <FormControl variant="standard" sx={{marginBottom: "20px"}}>
            <InputLabel htmlFor="email" >Email</InputLabel>
            <Input 
                id={"email"}
                type={"email"}
                name={"email"}
                value={formData.email}
                onChange={handleChange}  />
        </FormControl>
        <FormControl variant="standard" required={true} sx={{marginBottom: "20px"}}>
            <InputLabel htmlFor="password" >Пароль</InputLabel>
            <Input
                id={"password"}
                type={"password"}
                name={"password"}
                value={formData.password}
                onChange={handleChange} />
        </FormControl>
        <FormControl variant="standard" required={true} sx={{marginBottom: "20px"}}>
            <InputLabel htmlFor="repeatPassword" >Повторить пароль</InputLabel>
            <Input 
                id={"repeatPassword"}
                type={"password"}
                name={"repeatPassword"}
                value={formData.repeatPassword}
                onChange={handleChange}  />
        </FormControl>
    </Box>)
}

export default LoginScreen