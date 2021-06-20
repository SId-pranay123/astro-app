import React,{useEffect, useState} from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
     Nav,
      NavbarContainer,
       NavLogo,
        MobileIcon,
         NavMenu,
          NavItem,
           NavLinks,
        NavBtn,
 } from './NavbarElements'
import {FaBars } from 'react-icons/fa'


const Navbar = ({toggle}) => {

    const [scrollNav, setscrollNav] = useState(false)

    const changeNav = ()=>{
        if(window.scrollY >=80){
            setscrollNav(true);
        }else{
            setscrollNav(false);
        }

    }

    useEffect(()=>{
        window.addEventListener('scroll', changeNav);

    },[]);

    const toggleHome = ()=>{
        scroll.scrollToTop();
    }

    return (
        
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        astro
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='description'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Description</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='search' smooth={true} duration={500} spy={true} exact='true' offset={-80} >Go to date</NavLinks>
                        </NavItem>
                       
                    </NavMenu>
                    <NavBtn src={require("../../images/logo.png").default}>
                          
                    </NavBtn>
                </NavbarContainer>
            </Nav>

        
    )
}

export default Navbar
