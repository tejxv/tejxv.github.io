import React from 'react';
import './Home.css';
// import pfp from './public/pfp.png';



function Home() {
    return (
        <div className='flexbox'>
            <div className='outerbox'>
                Tejas Upadhyay
                <div className='subText'>Web Developer, UI UX Designer, Freelancer</div>
                <div className='topLinksContainer'>
                <span className='topLinks'> <a href="/resume">Résumé</a> </span>
                <span className='topLinks'> <a href="/resume">GitHub</a> </span>
                <span className='topLinks'> <a href="/resume">Linkedin</a> </span>  
                </div>
                <div className='introContainer'><img src='pfp.png'></img><div className='intro'>
                    Fuelled by a passion for designing compelling products, I have a deep desire to excel and continuously improve in my work. 
                </div></div>
                

            </div>
        </div>

    )
}



export default Home;

