import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { relative } from 'path';
import bgImage from '../images/Group7.png';
import Scroll from '../images/Group6.2.png';
import TypeImg from '../images/Type1.png';

const useStyles = makeStyles({
    root: {
        position: 'relative',
    },
    img: {
        width: '392px',
        height: '421px'
    },
    card: {
        width: '330px',
        height: '286px',
        boxShadow: '10px 10px 20px 0 rgba(0, 0, 0, 0.1)',
        position: 'absolute',
        top: '294px',
        left: '31px',
        backgroundColor: 'white',
        

    },
    rub: {
        width: '228px',
        height: '52px',
        boxShadow: '5px 5px 10px 0 rgba(227, 184, 115, 0.3)',
        backgroundColor: '#e3b873',
        fontFamily: 'Yeseva One',
        fontSize: '18px',
        color: 'white',
        textAlign: 'center',
        lineHeight: '52px',
        position: 'absolute',
        top: '554px',
        left: '31px'
    },
    title: {
        fontFamily: 'Yeseva One',
        fontSize: '18px',
        marginTop: '25px',
        marginLeft: '34px'
    },
    list: {
        fontFamily: 'Roboto',
        fontSize: '15px',
        color: '#959595',
        lineHeight: '1.76',
        marginTop: '13px',
        marginLeft: '34px',
        paddingLeft: '20px'
    }
});


export default function TypeCard(props) {
    const classes = useStyles();
    const listItems = props.data.list.map(i => <li>{i}</li>);
    
    return (
        <div className={classes.root}>
            <img src={props.data.img} className={classes.img}/>
            <div className={classes.card}>
                <div className={classes.title}>{props.data.title}</div>
                <div>
                    <ul className={classes.list}>
                        {listItems}
                    </ul>
                </div>
            </div>
            <div className={classes.rub}>
                {props.data.rub}
                
            </div>
        </div>
    );
}


