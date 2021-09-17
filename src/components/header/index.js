import React from 'react';
import './styles.scss';

const Header=(props)=>{
    return (
        <header className="headerComponent" data-test="headerComponent">
            <div className="wrap">
            <div className="logo">
            <div className="logoIMG" data-test="logoIMG">
            <h2>Logo</h2>
            </div>                
            </div>
            </div>
        </header>
    );
}

export default Header;