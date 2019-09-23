import React from 'react';
import HelpButtonStyles from './HelpButton.css'

function HelpButton(){
    return(
        <a className={HelpButtonStyles} href="hola"><i className="far fa-question-circle"></i></a>
    )
};

export default HelpButton;