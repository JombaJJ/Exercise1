import React from "react";
import styles from './MainSection.module.css'


export default function MainSection2(props) {
    console.log(props.data.picture);
    console.log(styles.picture2);
    return (
        <div className={'Kuva2'}>
            <div className={styles.container}>
            <div className={styles.picture2}>&nbsp;</div>
            <div className={styles.newstopic}>
            <span style={{color:'blue', fontWeight:'700'}}>{props.data.maintopic} </span>| {props.data.news}</div> 
            </div>
            </div>
    )
}
