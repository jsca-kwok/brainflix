import React from 'react';
import './header.scss';
import logo from '../../assets/logo/logo-brainflix.svg';
import buttonIcon from '../../assets/icons/svg/icon-upload.svg';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img className="header__logo" src={logo} alt="brainflix logo" />
                <input className="header__search" type="text" placeholder="Search"></input>
                <div className="header__user-container">
                    <button className="header__button" type="button"><img className="header__button-icon" src={buttonIcon} alt="" />UPLOAD</button>
                    <div className="header__profile-pic"></div>
                </div>
            </div>
        )
    }
}

export default Header;