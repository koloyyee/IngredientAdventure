import React ,{useState, useEffect}from 'react';
import { TweenMax }from "gsap";



const Testing = ()=>{

    const [click, setClick] = useState(false)


    useEffect(() => {
        TweenMax.set("#sq1", { transformOrigin: "center", })
        TweenMax.set("#sq2", { transformOrigin: "center", })
        TweenMax.to("#sq1", .5, { rotation: click ? '-135deg' : '0deg', })
        TweenMax.to("#sq2", .3, {
            scale: 2,
            yoyo: true,
            repeat: 1,
            ease: "back.Out"
        })
    
    }, [click])

    return(
        <div className='icon-hit-area'
            onClick={() => setClick(!click)}>
            <svg id='sq1' className='nav-icon'
                width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="sq2" d="M0 0H8V8H0V0Z" fill="#E63652" />
                <path id="sq2" d="M13 0H21V8H13V0Z" fill="#E63652" />
                <path id="sq2" d="M0 13H8V21H0V13Z" fill="#E63652" />
                <path id="sq2" d="M13 13H21V21H13V13Z" fill="#E63652" />
            </svg>
        </div>

    )
}
export default Testing;