import * as React from 'react';

const useStyles = makeStyles({
    footer:{
        display: "grid",
        justifyItems : "center",
        color: "#7a8a8a",
        fontWeight: 1000,
        padding: '5vw'
    }
})


const Footer =()=>{
    const styles = useStyles()
    const today = new Date()
    const year = today.getFullYear()

    return(
        <footer className = {styles.footer}>
            {year} Copyright &copy;
            All Rights Reserved.
        </footer>

    )
}
export default Footer;