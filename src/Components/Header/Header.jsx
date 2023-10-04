import React, { useState } from 'react'
import './Header.css';
import CV from "../../assets/Anjali_AP_Resume.pdf";


const Header = () => {
    /*Toggle Menu */
    const [Toggle,showMenu] =useState(false);

    return (
        <header className="header">
            <nav className="nav container" >
                <a href="index.html" className="nav__logo">Anjali A P</a>
                <div className={Toggle?"nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grids">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active_link">
                                <i className="uil uil-estate nav__icon">

                                </i>
                                Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon">

                                </i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-setting nav__icon">

                                </i>Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#projects" className="nav__link">
                                <i className="uil uil-briefcase nav__icon">

                                </i>Projects
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-phone nav__icon">

                                </i>Contact
                            </a>
                        </li>

                        <li className="nav__item" onClick={() => {
                      window.open(
                        "https://drive.google.com/file/d/1RKEqBkXsQnicwUApYAzfTfTFFeCkPfEm/view?usp=drive_link",
                        "_blank"
                      );
                    }}>
                            <a download="Anjali_AP_Resume" href={CV} className="nav__link">
                                <i className="uil uil-file-alt nav__icon">

                                </i>Resume
                            </a>
                        </li>
                    </ul>

                    <i class="uil uil-times nav__close" onClick={()=>{
                    showMenu(!Toggle)
                }}></i>
                </div>

                <div className="nav__toggle" onClick={()=>{
                    showMenu(!Toggle)
                }}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header