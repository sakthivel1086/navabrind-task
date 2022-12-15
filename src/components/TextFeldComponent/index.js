import React from "react";
import TextField from "@mui/material/TextField";

const TextFieldComponent = ({
    variant,
    id,
    placeholder,
    name,
    changeEvent,
    type,
  }) => {
    return(
        <TextField type={type} id={id} placeholder={placeholder} variant={variant} name={name} onChange={(e) => changeEvent(e)}/>
    )
  }

export default TextFieldComponent;