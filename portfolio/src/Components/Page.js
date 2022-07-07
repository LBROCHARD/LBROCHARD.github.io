import React from 'react'
import './Page.css'
import { StyleSheet, Image, Text, View } from "react";
import Divider from '@mui/material/Divider';
import { Toolbar } from '@mui/material';
import CustomBtn from './CustomBtn'
import { withStyles } from '@mui/material/styles';

function Page() {
    return (
        <div className="page">
            <h1>Comment réussir à YNOV sans travailler ?</h1>
            <Divider className="divider" />
            <p className="date"> Louis Brochard 06/07/22</p>
            <p>plusieurs méthodes sont à votres dispositions pour chopper un bon petit diplome sympa sans jamais travailler pour de vrai, c'est très simple ! </p>
            <p> - soudoyer les profs</p>
            <p> - passer sous la table</p>
            <p> - être julien</p>
            <p> - payer un coup a sebish</p>
            <p> - NICOLAS SEGURA</p>
        </div>
    )
}

export default Page
