import React from "react";
import styles from './SideSection.module.css'

export default function SideSection(props) {
    return (
            <div className={styles.container}><div className={styles.square}></div>
            <div style={{paddingTop:'20px'}}><span style={{fontWeight:'700'}}>{props.data.sidetitle} | </span>
            {props.data.sidebody}</div> 
            </div>
    )
}