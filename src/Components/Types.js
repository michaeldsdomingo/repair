import React from 'react';
import { makeStyles } from '@material-ui/styles';
import VideoPic from '../images/image5@3x.png';
import Repair from '../images/repair11.4.png';
import TypeCard from './TypeCard';
import TypeImg1 from '../images/Type1.png';
import TypeImg2 from '../images/Type2.png';
import TypeImg3 from '../images/Type3.png';
import Step from '../images/Step.png'

const useStyles = makeStyles({
    types: {
        backgroundColor: 'white',
        height: '2590px',
        position: 'relative',
        border: '1px solid blue'
    },
    video: {
        width: '817px',
        height: '434px',
        backgroundColor: 'purple',
        margin: '0 auto',
        position: 'absolute',
        top: '-217px',
        left: '310.5px',
        backgroundImage: `url(${VideoPic})`,
        backgrondSize: 'cover',
        backgroundPosition: '50% 50%'
    },
    divider: {
        width: '55px',
        height: '1.5px',
        objectFit: 'contain',
        borderRadius: '30px',
        backgroundColor: '#e3b873',
        margin: '279.5px auto 34.5px auto'
    },
    description: {
        width: '750px',
        height: '131px',
        margin: '0 auto',
        color: '#363636',
        lineHeight: '1.76',
        fontFamily: 'Roboto',
        fontSize: '19px',
        textAlign: 'center',
    },
    namePhone: {
        width: '770px',
        height: '51px',
        margin: '91.5px auto 0',
        display: 'flex',
        justifyContent: 'space-between',
    },
    agreement: {
        width: '320px',
        height: '18px',
        margin: '35px auto 0 auto',
        display: 'flex',
        justifyContent: 'space-between',
    },
    typeTitle: {
        width: '257px',
        height: '26px',
        margin: '148px auto 0 auto',
        fontFamily: 'Yeseva One',
        fontSize: '20px',
        color: '#181818',
        textAlign: 'center',
    },
    divider2: {
        width: '114px',
        height: '28px',
        margin: '13px auto 31px auto',
        
    },
    inputRow: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        fontFamily: 'Roboto',
        fontSize: '15px',
        color: 'rgba(54, 54, 54, 0.5)'
    },
    input: {
        fontFamily: 'Roboto',
        fontSize: '18px',
        height: '100%',
        border: 'none',
        borderBottom: 'solid 1px rgba(24, 24, 24, 0.1)'
    },
    submit: {
        width: '200px',
        border: 'none',
        borderRadius: '2px',
        boxShadow: '0 15px 15px 0 rgba(227, 184, 115, 0.15)',
        backgroundColor: '#e3b873',
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: '15px',
    },
    checkInput: {
        color: '#e3b873',
        height: '18px',
        width: '18px',
        margin: '0',
    },
    labelAgreement: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        color: '#181818'
    },
    typesThree: {
        display: 'flex',
        width: 'calc(100% - 200px)',
        margin: '0 auto',
        justifyContent: 'space-between'

    },
    step: {
        width: '779px',
        height: '691px',
        backgroundImage: `url(${Step})`,
        backgroundPosition: '100% 50%'
    },
    stepRequest: {
        marginTop: '311px',
        display: 'flex'
    },
    request: {
        height: '508px',
        width: '503px',
        border: 'solid 1px rgba(255, 255, 255, 0.01)',
        backgroundColor: '#131313',
        marginLeft: '55px',
        marginTop: '115px'
    },
    requestTitle: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: '20px',
        lineHeight: '1.43',
        width: '297px',
        margin: '33px auto 39px auto',
        textAlign: 'center',
        
    },
    requestInput: {
        marginTop: '40px',
    },
    formLabel: {
        fontFamily: 'Roboto',
        fontSize: '15px',
        lineHeight: '1.41',
        color: 'rgba(255, 255, 255, 0.5);'
    },
    formInput: {
        display: 'block',
        border: 'none',
        borderBottom: 'solid 1px rgba(255, 255, 255, .1)',
        backgroundColor: '#131313',
        width: '407px',
        height: '25px',
        
        '&::placeholder': {
            color: 'white',
            fontFamily: 'Roboto',
            fontSize: '18px',
        }
        
    },
    
    requestForm: {
        marginLeft: '48px',
        marginRight: '48px',
    },
    measurer: {
        width: '213px',
        height: '51px',
        boxShadow: '0 5px 15px 0 rgba(227, 184, 115, 0.15)',
        border: 'none',
        borderRadius: '2px',
        backgroundColor: '#e3b873',
        color: 'white',
        marginLeft: 'auto',
        display: 'block',
    },
    requestAgree: {
        marginTop: '17px',
        marginBottom: '39px',
        display: 'flex',
        alignItems: 'center',
    },
    requestAgreement: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: '16px',
    },
    requestCheckInput: {
        margin: '0 9px 0 0',
        width: '18px',
        height: '18px',
    }

});

const typeData = [
    {
        title: 'Redecorating',
        list: ['Dismantling of old coatings',
            'Wallpapering',
            'Painting walls and ceilings',
            'Laying flooring',
            'Replacing plumbing',
            'Replacing sockets and switches',
            'Replacing doors'
            ],
        rub: 'FROM 900 RUB/M2',
        img: TypeImg1
    },
    {
        title: 'Overhaul',
        list: ['Dismantling of old coatings',
        'Wallpapering',
        'Painting walls and ceilings',
        'Laying flooring',
        'Replacing plumbing',
        'Replacing sockets and switches',
        'Replacing doors'
        ],
        rub: 'FROM 1800 RUB/M2',
        img: TypeImg2
    },
    {
        title: 'Designer Repair',
        list: ['Dismantling of old coatings',
        'Wallpapering',
        'Painting walls and ceilings',
        'Laying flooring',
        'Replacing plumbing',
        'Replacing sockets and switches',
        'Replacing doors'
        ],
        rub: 'FROM 4000 RUB/M2',
        img: TypeImg3
    },
    
    
]

export default function Types() {
    const classes = useStyles();
    return (
        <div className={classes.types}>
            <div className={classes.video}>
               
            </div>
            <div className={classes.divider}></div>
            <div className={classes.description}>
                At each facility, a camera is installed that broadcasts the progress of work on the clock. <br></br>
                At any time, you can go to our website and monitor the progress of work in your apartment. You can watch the live broadcast from one of our facilities! <br></br>
                Leave a request below and you will receive a link to the broadcast.
            </div>
            <div className={classes.namePhone}>
                <div className={classes.inputRow}>
                    <label className={classes.label}>Name</label>
                    <input className={classes.input} placeholder="What is your name:"/>
                </div>
                <div className={classes.inputRow}>
                    <label className={classes.label}>Phone</label>
                    <input className={classes.input} placeholder="Your phone number:"/>
                </div>
                <input type='submit' className={classes.submit} value="SUBMIT"/>
            </div>
            <div className={classes.agreement}>
                <input type="checkbox" checked="checked" className={classes.checkInput}/>
                <label className={classes.labelAgreement}>I agree to the processing of personal data</label>
            </div>
            <div className={classes.typeTitle}>TYPES OF REPAIR</div>
            <div className={classes.divider2}>
                <img src={Repair}/>
            </div>
            <div className={classes.typesThree}>
                <TypeCard data={typeData[0]} />
                <TypeCard data={typeData[1]} />
                <TypeCard data={typeData[2]} />
            </div>
            <div className={classes.stepRequest}>
                <div className={classes.step}></div>
                <div className={classes.request}>
                    <div className={classes.requestTitle}>
                        Leave a request for free departure of the measurer
                    </div>
                    <form className={classes.requestForm}>
                        <div className={classes.requestInput}>
                            <label className={classes.formLabel}>Name</label>
                            <input className={classes.formInput} placeholder='What is your name:'/>
                        </div>
                        <div className={classes.requestInput}>
                            <label className={classes.formLabel}>Phone</label>
                            <input className={classes.formInput} placeholder='Your phone number:'/>
                        </div>
                        <div className={classes.requestInput}>
                            <label className={classes.formLabel}>Email</label>
                            <input className={classes.formInput} placeholder='Your email:'/>
                        </div>
                        <div className={classes.requestAgree}>
                            <input type="checkbox" checked="checked" className={classes.requestCheckInput}/>
                            <label className={classes.requestAgreement}>I agree to the processing of personal data</label>
                        </div>
                        <input className={classes.measurer} type='submit' value='CALL THE MEASURER' />


                    </form>
                </div>
            </div>
        </div>
    );
}


