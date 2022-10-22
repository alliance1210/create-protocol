import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Base from '../Base';
import Frame from '../Frame/Frame';
import Overview from './Overview';

import forgotten from '../../Assets/Images/forgotten.png'
import looki from '../../Assets/Images/looki.png'
import the_man from '../../Assets/Images/the_man.png'
import voi from '../../Assets/Images/void.png'

import './home.css'
const Home = () =>{
    return(
        <Base >
        <div className='home-container'>
        
            <div className='home-body'>
                <div id="title">
                    <span>Your Collection</span>
                    <ConnectButton />
                </div>
                
            <div className='home-main-body'>   
            <div className='frame-wrapper'>
            <Frame
                 title="The Man" 
                 imgSrc={the_man}
                 body="The Man NFT collection is a digital art collection that celebrates the male form."
                 foot1="TMN"
                 foot2="ERC721"
                 foot3="Live"
                 />
            <Frame
                 title="The Man" 
                 imgSrc={looki}
                 body="The Man NFT collection is a digital art collection that celebrates the male form."
                 foot1="TMN"
                 foot2="ERC721"
                 foot3="Live"
                 />
            <Frame
                 title="The Man" 
                 imgSrc={forgotten}
                 body="The Man NFT collection is a digital art collection that celebrates the male form."
                 foot1="TMN"
                 foot2="ERC721"
                 foot3="Live"
                 />
            <Frame
                 title="The Man" 
                 imgSrc={voi}
                 body="The Man NFT collection is a digital art collection that celebrates the male form."
                 foot1="TMN"
                 foot2="ERC721"
                 foot3="Live"
                 />
            <Frame
                 title="The Man" 
                 imgSrc={voi}
                 body="The Man NFT collection is a digital art collection that celebrates the male form."
                 foot1="TMN"
                 foot2="ERC721"
                 foot3="Live"
                 />
            </div>
            <Overview className="over"/>
            </div> 
                
            </div>
        
        </div>
        </Base>
    )
}

export default Home