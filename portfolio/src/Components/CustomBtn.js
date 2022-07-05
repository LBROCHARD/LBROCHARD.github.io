import React from 'react'
import Button from '@mui/material/Button'

function CustomBtn(props) {
    return (
        <Button  variant="contained" style={stylesheet.btn}>{props.txt}</Button>
    )
}

const stylesheet = {
    btn:
    {
        color: 'white',
        backgroundColor: "Transparent",
        padding: "10px",
        fontFamily: "Arial",
        orientation: "horizontal",
        height: "50px",
        horizontal: "center",
        margin: "10px",
    },
  };

export default CustomBtn
