import React, {useEffect} from 'react';
import './Pass.css';
import Aos from "aos";
import "aos/dist/aos.css";

function Pass() {
    useEffect(() =>{
        Aos.init({duration: 3000});
    }, [])
    return (
        <div data-aos="fade-up" id="Pass">
        <div className='PassContainer' >
            <div className=' overViewInner'> 
            <section className='videocontainer'><video  src='PASS.mp4' loop muted autoPlay/></section>
                <div className='overviewText'>
                    <p>
                    You have reached the top, you are Ultramodern!
                    Congratulations on unlocking all the perks to Crypto Car Club, and you can now apply for the Ambassador Program. 
                    </p>
                    <p>Take a luxury car for a drive during our car shows
                    Automatically join a raffle for a free car giveaway.
                    Get your Gas fee back when you mint Crypto Car Club NFT. 
                    customize your player NFT and become an NFT on us. 
                    </p>
                    <p>A higher return on royalties distribution. 
                    Grant you early access to Game token pre-sales and Crypto Car Club game. 
                    Start the game with CCC tokens.
                    </p>
                    <p>Access to private clubhouses and VIP events all around the world
                    Get customized merchandise with your name and your title.
                    Full access to Crypto Car Club AR and VR version  
                    We will be selecting 10 pass holders to get free NFT
                    </p>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Pass
