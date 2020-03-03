
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'



const useStyle = makeStyles({
    div:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    
    img:{
        padding: '5vw',
        width: '30%',
        opacity: 0.8,
        borderRadius: '10vw',
        '&:hover':{
            opacity: 1
        }
    },
    button:{
        alignSelf:'center',
        maxHeight: '3vw',
        '&:hover':{
            backgroundColor: '#edd340'
        }
    },
    anchor:{
        textDecoration: "none",
        color: '#edd340',
        fontSize: "1vw",
        '&:hover':{
            color: 'grey',
            fontWeight: 600
        }
    },
    
})

const Contact =()=>{

    const style = useStyle();

    return (
    <footer id='contact' className={style.div}>
        <img className = {style.img} src ={'/image/IMG_3512.JPG'} alt='contact photo' />
        <Button className={style.button} variant='outlined'>
            <a className = {style.anchor} href='/resume/resume.pdf' download> Resume</a>
        </Button> 
    </footer>
    )

}

export default Contact