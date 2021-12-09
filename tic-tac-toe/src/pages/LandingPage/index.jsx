import React from 'react';
import PlayTypeButton from './components/PlayTypeButton';
import  {Link} from 'react-router-dom'

function LandingPage(props) {
console.log(props)


    return (
        <div className="landing-page">
           <Link style={{textDecoration:'none'}}  to="/player" > <PlayTypeButton description="Let's Play" img='/svg/X.svg' /></Link>
        </div>
    );
}

export default LandingPage;