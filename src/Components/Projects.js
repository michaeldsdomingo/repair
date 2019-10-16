import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Carousel1 from '../images/image2.1.png';
import OnlineDivider from '../images/Group11.4.png';

const useStyles = makeStyles({
    projects: {
        height: '1082px',
        backgroundColor: '#131313',
        border: '1px #131313 solid',
    },
    nav: {
        width: '623px',
        height: '23px',
        marginLeft: '593px',
        marginTop: '120px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    navActive: {
        display: 'inline-block',
        height: '23px',
        width: 'auto',
        fontFamily: 'Yeseva One',
        fontSize: '14px',
        lineHeight: '23px',
        borderBottom: '2px #e3b873 solid',
        color: '#e3b873',
    },
    navItem: {
        display: 'inline-block',
        color: 'rgba(255, 255, 255, 0.3)',
        fontFamily: 'Yeseva One',
    },
    row: {
        width: '100%',
        height: '481px',
        display: 'flex',
        backgroundColor: '#131313',
        marginTop: '45.4px'
    },
    online: {
        height: '26px',
        width: '196px',
        margin: '92px auto 0 auto',
        fontFamily: 'Yeseva One',
        fontSize: '20px',
        color: 'white',
        textAlign: 'center',
    },
    divider: {
        height: '28px',
        width: 'auto',
        margin: '12.8px auto 0 auto',
        
    },
    projectsDetails: {
        marginLeft: '100px',
    },
    projectTitle: {
        color: '#e3b873',
        fontFamily: 'Yeseva One',
        fontSize: '27px'
    },
    projectDesc: {
        fontSize: '16px',
        fontFamily: 'Roboto',
        color: 'white',
        width: '442px',
        margin: '34px 0 42px 0',
        lineHeight: '1.64'
    },
    projectsRow: {
        display: 'flex',
        marginBottom: '34px',
        
    },
    header: {
        fontFamily: 'Yeseva One',
        fontSize: '18px',
        color: '#e3b873',
    },
    body: {
        marginTop: '9px',
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: '15px'
    },
    left: {
        flexBasis: '45%'
    },
    carousel1: {
        height: '481px',
        width: '679px',
        backgroundImage: `url(${Carousel1})`
    },
    dividerImg: {
        display: 'block',
        margin: '0 auto',
    }
});

export default function Projects() {
    const classes = useStyles();
    return (
        <div className={classes.projects}>
            <div className={classes.nav}>
                <div className={classes.navActive}>BOSTOV-ON-DON, ADMIRAL</div>
                <div className={classes.navItem}>SOCHI THIEVES</div>
                <div className={classes.navItem}>ROSTOV-ON-DON PATRIOTIC</div>
            </div>
            <div className={classes.row}>
                <div className={classes.projectsDetails}>
                    <div className={classes.projectTitle}>
                        COMPLETED<br />
                        PROJECTS
                    </div>
                    <div className={classes.projectDesc}>
                        Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction 
                        market we have made happy more than 1000 families
                    </div>
                    <div className={classes.projectSpecs}>
                        <div className={classes.projectsRow}>
                            <div className={classes.left}>
                                <div className={classes.header}>CITY:</div>
                                <div className={classes.body}>
                                    Rostov-on-Don
                                    <br></br>
                                    LCD admiral
                                </div>
                            </div>
                            <div className={classes.right}>
                                <div className={classes.header}>APARTMENT AREA:</div>
                                <div className={classes.body}>81 m2</div>
                            </div>
                        </div>
                        <div className={classes.projectsRow}>
                            <div className={classes.left}>
                                <div className={classes.header}>REPAIR TIME:</div>
                                <div className={classes.body}>3.5 months</div>
                            </div>
                            <div className={classes.right}>
                                <div className={classes.header}>REPAIR COST:</div>
                                <div className={classes.body}>Upon request</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.carousel}>
                    <div className={classes.carousel1}></div>
                </div>
            </div>
            <div className={classes.online}>ONLINE CONTROL</div>
            <div className={classes.divider}>
                <img src={OnlineDivider} className={classes.dividerImg}></img>
            </div>
        </div>
    );
}


