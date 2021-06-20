import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrap, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons,SocialIconLink, WebsitesRights } from './FooterElements'

const Footer = () => {

    const toggleHome = ()=>{
        scroll.scrollToTop();
    };

    
    return (
        
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrap>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='#'>About us</FooterLink>
                                <FooterLink to='#'>How we Works</FooterLink>
                                <FooterLink to='#'>Api</FooterLink>
                               
                               
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Nasa api</FooterLinkTitle>
                                <FooterLink to={{pathname: 'https://api.nasa.gov/'} } target="_blank">Go To Nasa api</FooterLink>
                                <FooterLink to={{pathname: 'https://api.nasa.gov/'} } target="_blank">How it Works</FooterLink>
                                <FooterLink to='#'>Blank</FooterLink>
                                
                            
                        </FooterLinkItems>
                    </FooterLinksWrap>
                    
                </FooterLinksContainer>
           
        
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                    astro
                </SocialLogo>
                <WebsitesRights>astro © {new Date().getFullYear()} All Rights reserved.
                </WebsitesRights>
                <SocialIcons>
                    <SocialIconLink href='/' target='_blank' aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label="Youtube">
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label="Github">
                        <FaGithub />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
        </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
