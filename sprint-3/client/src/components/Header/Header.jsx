import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/logo/logo-brainflix.svg';
import buttonIcon from '../../assets/icons/svg/icon-upload.svg';

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt="brainflix logo" />
            </Link>
            <input className="header__search" type="text" placeholder="Search"></input>
            <div className="header__user-container">
                <Link to="/upload" className="header__upload-link">
                    <button className="header__button" type="button">
                        <img className="header__button-icon" src={buttonIcon} alt="" />
                        UPLOAD
                    </button>
                </Link>
                <div className="header__profile-pic"></div>
            </div>
        </div>
    )
}

export default Header;