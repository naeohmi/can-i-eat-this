import React, { Component } from 'react';
// import { Link, NavLink } from 'react-router-dom';

class Footer extends Component {
    render() {
        //each of the allergen icons
        const images = [
            "/images/icons/egg-color.png",
            "/images/icons/fish-color.png",
            "/images/icons/milk-color.png",
            "/images/icons/icons-blackandwhite/peanut-bw.png",
            "/images/icons/sesame-color.png",
            "/images/icons/shellfish-color.png",
            "/images/icons/soy-color.png",
            "/images/icons/treenut-color.png",
            "/images/icons/wheat-color.png",
            "/images/logo.png",
        ];
        //displays allergen icons on footer for fun!
        return (
            <div className="footer">
                <span className="iconsS"><img src={images[0]} alt="allergen-icon" /></span>
                <span className="iconsM"><img src={images[1]} alt="allergen-icon" /></span>
                <span className="iconsL"><img src={images[2]} alt="allergen-icon" /></span>
                <span className="iconsM"><img src={images[3]} alt="allergen-icon" /></span>
                <span className="iconsS"><img src={images[4]} alt="allergen-icon" /></span>
                <span className="iconsM"><img src={images[5]} alt="allergen-icon" /></span>
                <span className="iconsL"><img src={images[6]} alt="allergen-icon" /></span>
                <span className="iconsM"><img src={images[7]} alt="allergen-icon" /></span>
                <span className="iconsS"><img src={images[8]} alt="allergen-icon" /></span>
                <span className="iconsM"><img src={images[9]} alt="allergen-icon" /></span>
            </div>
        );
    }
}

export default Footer;