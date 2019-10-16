import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    rectangle59: {
        height: '83px',
        backgroundColor: '#131313',
        overflow: 'auto',
        display: 'flex',
        alignItems: 'center'
    },
    icRepairDesignProject: {
        
        
        fontFamily: 'Roboto',
        fontSize: '14px',
        color: '#e3b873',
        marginLeft: '82px',
        marginRight: '95.5px'
    },
    list: {
        
        color: 'white',
        width: '581.4px',
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'Roboto',
        fontSize: '14px',
        marginRight: '67.4px',
    },
    active: {
        color: '#e3b873'
    },
    phone: {
        fontSize: '14px',
        color: '#e3b873',
        borderBottom: '1px #e3b873 solid',
        marginRight: '45px',
        fontFamily: 'Roboto'
    },
    request: {
        width: '161px',
        height: '37px',
        borderRadius: '2px',
        boxShadow: '0 5px 15px 0 rgba(227,184,115,0.2)',
        backgroundColor: '#e3b873',
        color: 'white',
        fontFamily: 'Roboto',
        textAlign: 'center',
        lineHeight: '37px'
    }
});

export default function Nav() {
    const classes = useStyles();
    return (
        <div className={classes.rectangle59}>
            <div className={classes.icRepairDesignProject}>
                IC "REPAIR DESIGN PROJECT"
            </div>
            <div className={classes.list}>
                <a className={classes.active}>HOME</a>
                <a>PROJECTS</a>
                <a>MEASUREMENT</a>
                <a>TEAM</a>
                <a>REVIEWS</a>
                <a>CONTACTS</a>
            </div>
            <div className={classes.phone}>+7 (928) 768-32-39</div>
            <div className={classes.request}>REQUEST A CALL</div>
        </div>
    );
}


