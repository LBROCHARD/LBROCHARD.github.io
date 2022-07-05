import React from 'react'
import { StyleSheet, Image, Text, View } from "react";
import { Toolbar } from '@mui/material';
import CustomBtn from './CustomBtn'
import { withStyles } from '@mui/material/styles';

function ToolBar() {
    return (
        <div style={stylesheet.div}>
            <image src={"../img/logo.png"} />
            <h1 style={{color:'white'}}>Louis Brochard</h1>
            <CustomBtn txt="Articles"/>
            <CustomBtn txt="Contact"/>
            <CustomBtn txt="CV"/>
        </div>
    )
}

export default ToolBar

const stylesheet = {
    div:
    {
        display: "flex",
        color: "blue",
        backgroundColor: "#54C3FF",
        padding: "10px",
        fontFamily: "Arial",
        orientation: "horizontal",
        item: "center",
    },
  };