import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { relative } from 'path';
import bgImage from '../images/Group7.png';
import Scroll from '../images/Group6.2.png';


const useStyles = makeStyles({
    home: {
        height: 'auto',
        position: 'relative'
    },
    instagram: {
        width: '81px',
        height: '707px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#131313'
    },
    igGroup: {
        display: 'flex',
        transform: 'rotate(90deg)',
    },
    igText: {
        color: '#e3b873',
        fontSize: '14px',
        fontFamily: 'Roboto',
        height: '20px',
        marginRight: '10px',
        lineHeight: '20px'
    },
    igDivider: {
        width: '55px',
        height: '1.5px',
        objectFit: 'contain',
        borderRadius: '30px',
        backgroundColor: '#e3b873',
        
        
    },
    igDividerContainer: {
        height: '20px',
        display: 'flex',
        alignItems: 'center'
    },
    submit: {
        width: '1356px',
        height: '707px',
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
        
    },
    row: {
        display: 'flex'
    },
    scrollDown: {
        height: '98px',
        width: '247px',
        backgroundColor: '#131313',
        position: 'absolute',
        bottom: '-49px',
        fontFamily: 'Yeseva One',
        lineHeight: '98px',
        textAlign: 'center',
        color: 'white',
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center'
    },
    title: {
        width: '676px',
        height: '105px',
        marginTop: '194px',
        marginLeft: '60px',
        fontFamily: 'Yeseva One',
        fontSize: '40px',
        lineHeight: '1.35',
        color: 'white'
    },
    description: {
        width: '504px',
        height: '89px',
        marginTop: '19px',
        marginLeft: '60px',
        fontFamily: 'Roboto',
        fontSize: '22px',
        lineHeight: '1.41',
        color: 'white',
        
    },
    buttonGroup: {
        height: '51px',
        width: '435px',
        marginLeft: '60px',
        marginTop: '41px',
        display: 'flex'
    },
    gold: {
        color: '#e3b873'
    },
    buttonCost: {
        width: '207px',
        height: '51px',
        borderRadius: '2px',
        boxShadow: '0 5px 15px 0 rgba(227, 184, 115, 0.3)',
        backgroundColor: '#e3b873',
        fontFamily: 'Roboto',
        fontSize: '13px',
        color: 'white',
        marginRight: '20px',
        lineHeight: '51px',
        textAlign: 'center'

    },
    buttonSubmit: {
        width: '207px',
        height: '51px',
        borderRadius: '2px',
        border: 'solid 1px white',
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: '13px'
    },
    scrollImg: {
        marginLeft: '20px'
    }
});

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.home}>
            <div className={classes.row}>
                <div className={classes.instagram}>
                    <div className={classes.igGroup}>
                        <div className={classes.igText}>INSTAGRAM</div>
                        <div className={classes.igDividerContainer}>
                            <div className={classes.igDivider}></div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className={classes.submit}  >
                    <div className={classes.title}>
                        TURNKEY REPAIR IN THE<br/>
                        CITY OF <span className={classes.gold}>ROSTOV-ON-DON</span>
                    </div>
                    <div className={classes.description}>
                        Get ready-made turnkey repairs on time<br/>
                        with work time saving up to 45 days and 20% from<br/>
                        cost of materials due to the organization of work
                    </div>
                    <div className={classes.buttonGroup}>
                        <div className={classes.buttonCost}>CALCULATE THE COST</div>
                        <button className={classes.buttonSubmit}>SUBMIT YOUR APPLICATION</button>
                    </div>
                </div>
            </div>
            <div className={classes.scrollDown}>
                <div>SCROLL DOWN</div>
                <img src={Scroll} className={classes.scrollImg}></img>
            </div>
            
        </div>
    );
}


