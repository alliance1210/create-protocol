import React,{useState} from 'react'
import Base from '../Base'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import './create.css'

const Create = () =>{
    const [buttonDisplay, setButtonDisplay] = useState(false)
    const displayBtn = () => setButtonDisplay(true)
    const hide = ()=> setButtonDisplay(false)
    return(
        <Base>
            <div className='create-collection-container'>
                <div id="collection-title">
                    <ul>
                        <li>Your Collection</li>
                        <li>Home &gt; Collections info</li>
                    </ul>
                    <ConnectButton className="connect-button"/>
                </div>
                <div className='collection-body'>
                    <div className='collection-body-left'>
                        <div className='collection-body-left-title'>
                            Collection info
                        </div>
                        <div className='collection-body-left-card'>
                            <div onMouseOver={displayBtn} onMouseOut={hide} className='body-left-imgcontainer'>
                                <button id="collection-card-button" style={{display: buttonDisplay?'block':'none'}}>
                                    Change Image
                                </button>
                            </div>
                            <div className='body-left-body'>
                                <table border="0" borderSpacing="0 100px" width='100%'>
                                    <tr>
                                        <td>
                                            <h3>Collection Name</h3>
                                            <input type="textbox " placeholder='Eg. Awesome Ballon'/>
                                        </td>
                                        <td>
                                            <h3>Symbol</h3>
                                            <input type="textbox" placeholder='Eg. AWBA'/>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td rowSpan={2} colSpan={2}>
                                            <h3>ASCII mark</h3>
                                            <textarea placeholder='Enter your ascii mark here'>

                                            </textarea>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='collection-body-right'>
                        <div className='right-body-container'>
                            <div className='right-body-title'>
                                What is collection Name?
                            </div>
                            <div className='right-body-body'>
                            A NFT collection name is a name given to a collection of NFTs.
                            </div>
                            <div>
                                <a href="#" >Learn more</a>
                            </div>
                        </div>
                        <div className='right-body-buttons' >
                            <button id="cancel">Cancel</button>
                            <button id="deploy">Deploy on testnet</button>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default Create