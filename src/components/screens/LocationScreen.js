import React, { useContext, useEffect } from "react";
import {Box, FormControl, Input, InputLabel} from '@mui/material';
import AppContext from "../../AppContext";

const LocationScreen = ({handleChange}) => {
    const {setNextBtn, formData} = useContext(AppContext)

    useEffect(() => {
        if(!!formData.сountry && !!formData.city ){
            setNextBtn(true)
        } else {
            setNextBtn(false)
        }
    }, [formData])

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
                name={"сountry"}
                value={formData.сountry}
                onChange={handleChange} />
        </FormControl>
        <FormControl variant="standard" required={true} sx={{marginBottom: "20px"}}>
            <InputLabel htmlFor="city" >Город</InputLabel>
            <Input
                name={"city"}
                value={formData.city}
                onChange={handleChange}  />
        </FormControl>
        <FormControl variant="standard" sx={{marginBottom: "20px"}}>
            <InputLabel htmlFor="street" >Улица</InputLabel>
            <Input
                name={"street"}
                value={formData.street}
                onChange={handleChange} />
        </FormControl>
        <FormControl variant="standard" sx={{marginBottom: "20px"}}>
            <InputLabel htmlFor="hom" >Дом</InputLabel>
            <Input
                name={"hom"}
                value={formData.hom}
                onChange={handleChange}  />
        </FormControl>
    </Box>)
}

export default LocationScreen