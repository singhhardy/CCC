import React, { useEffect } from 'react';
import './Game.css'
import Aos from "aos";
import "aos/dist/aos.css";

function Game() {
    useEffect(() =>{
        Aos.init({duration: 1000});
    }, [])

    return (
        <div className='gameContainer' id='Game' >
            <div className='gameVideoContainer'>
                <video src='ccc-1_trim.mp4' loop muted autoPlay className='gamevideo' />

                <div className='bothdivbtnandtext'>
                    
                    <p className='GameText'>READY TO RACE</p>

                    <button className='btn  gameBtn'>LEARN MORE</button>
                </div>
            </div>
            <div className='gameBottomText'>
            <p >
            THE MORE YOU RACE AND WIN THE MORE YOU INCREASE YOUR CRYPTO CAR CLUB RANK, AND NFT VALUE.
            </p>
        </div>

        <div  id='Tokenoic'></div>
        </div>
    )
}

export default Game
