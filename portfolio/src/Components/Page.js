import React from 'react'
import { StyleSheet, Image, Text, View } from "react";
import Divider from '@mui/material/Divider';
import { Toolbar } from '@mui/material';
import CustomBtn from './CustomBtn'
import { withStyles } from '@mui/material/styles';

function Page() {
    return (
        <div style={stylesheet.div}>
            <h1 style={{color:'black'}}>Comment déplacer un objet en .FBX ?</h1>
            <Divider />
            <p style={stylesheet.date}> Louis Brochard 06/07/22</p>
            <p>apraprpaprpaprarpapr pedpedppzppedpapdppz pzpdppzapdzppadpzapdpzdpazpdpp </p>
        </div>
    )
}

export default Page

const stylesheet = {
    div:
    {
        borderRadius: '20px',
        padding: '30px',
        backgroundColor: 'White',
        width: '70%',
        margin: '30px',
    },
    date:
    {
        color: '#B6B6B6',
        fontStyle: 'italic',
        textAlign: 'right',
        marginRight: '20px',
    },
  };