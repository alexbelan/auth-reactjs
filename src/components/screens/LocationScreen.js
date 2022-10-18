import React, { useContext, useEffect } from "react";
import {Box, FormControl, Input, InputLabel} from '@mui/material';
import AppContext from "../../AppContext";

const LocationScreen = () => {
    const {setNextBtn, formData, setFormData} = useContext(AppContext)

    useEffect(() => {
        setFormData(prev => ({...prev, 
            сountry: "",
            city: "",
            street: "",
            hom: ""
        }))
    }, [])

    useEffect(() => {
        if(!!formData.сountry && !!formData.city ){
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
            <InputLabel htmlFor="сountry" >Страна</InputLabel>
            <Input 
                id={"сountry"}
                name={"сountry"}
                value={formData.сountry}
                onChange={handleChange} />
        </FormControl>
        <FormControl variant="standard" required={true} sx={{marginBottom: "20px"}}>
            <InputLabel htmlFor="city" >Город</InputLabel>
            <Input 
                id={"city"}
                name={"city"}
                value={formData.city}
                onChange={handleChange}  />
        </FormControl>
        <FormControl variant="standard" sx={{marginBottom: "20px"}}>
            <InputLabel htmlFor="street" >Улица</InputLabel>
            <Input
                id={"street"}
                name={"street"}
                value={formData.street}
                onChange={handleChange} />
        </FormControl>
        <FormControl variant="standard" sx={{marginBottom: "20px"}}>
            <InputLabel htmlFor="hom" >Дом</InputLabel>
            <Input 
                id={"hom"}
                name={"hom"}
                value={formData.hom}
                onChange={handleChange}  />
        </FormControl>
    </Box>)
}

export default LocationScreen