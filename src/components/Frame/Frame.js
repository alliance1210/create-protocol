import React,{ useState } from 'react'
import './frame.css'

const Frame = ({title,imgSrc,body,foot1,foot2,foot3}) => {
    const [hover,setHover] = useState(false); 

    const mouseOver = () => setHover(prev=> !prev)
    const mouseOut = () => setHover(prev=> !prev)
    // console.log(hover)
    return(
        <div onMouseOver={mouseOver} onMouseOut={mouseOut} className='frame-container' id={ hover? 'frame-hover': '' }>
            <div className='frame-left'>
                <div className='frame-img-container'>
                    <img src={imgSrc} alt="img"/>
                </div>
            </div>
            <div className='frame-right'>
                <div className='frame-title'>
                    <p>{title}</p>
                    <button> Polygon</button>
                </div>
                <div className='frame-body'>
                    <p>{body}</p>
                </div>
                <div className='frame-footer'>
                    <div className='foot-detail'>
                        <p>{foot1}</p>
                        <p>Symbol</p>
                    </div>
                    <div className='foot-detail special-foot'>
                        <p>{foot2}</p>
                        <p>Type</p>
                    </div>
                    <div className='foot-detail'>
                        <p>{foot3}</p>
                        <p>Status</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frame