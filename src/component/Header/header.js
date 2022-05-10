import React from 'react';
import {Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu} from "./styled-components/navbar";

const Header = (props) => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={require("../../assets/kutaykaracair_logo.png")} alt="kutaykaracair-logo" style={{height:"80px",width:"80px"}}/>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    {/*<NavLink to="/blog" activeStyle>
                        Blog
                    </NavLink>*/}
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    {/*<NavLink to="/contact" activeStyle>
                        Contact Me
                    </NavLink>*/}
                </NavMenu>
            </Nav>
        </>
    );
}

export default Header;