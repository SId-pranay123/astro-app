import styled from 'styled-components';
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'

import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'


export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content:'';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left:0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const HeroBg = styled.div`
    position:absolute;
    top:0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    heigth: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.img`
    width:100%;
    height: 100%;
    ${'' /* -o-object-fit: cover; */}
    object-fit: cover;
    background: #232a34
`;

export const HeroContent = styled.div`
    z-index:3;
    display: flex;
    max-width: 1200px;
    position: absolute;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color:#fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px
    }

    @media screen and (max-width: 480px){
        font-size: 32px
    }
`;

export const HeroP = styled.p`
    color:#fff;
    font-size: 24px;
    text-align: center;
    margin-top: 24px;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;



export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px){
        height: 800px;
    }

    @media screen and (max-width: 480px){
        heigth: 1000px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    ${'' /* color: #fff; */}

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    max-height: 640px;
    padding: 0 60px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;


    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;

    }
`;



export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 64px;
    color: #fff;

    @media screen and (max-width: 480px){
        font-size: 2rem;
        
    }

`;


export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin: 40px 0 20px;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
    margin: 10px 40px 60px;
`;



export const Btn = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 18px auto 40px;
    @media screen and (max-width: 768px){
        display: none;
    }
`;


export const BtnLink = styled.button`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition:all 0.2s ease-in-out;
    text-decoration: none;
    

    &:hover{
        transition:all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

export const Input = styled.input`
    margin: 40px auto 10px;
`;

export const Label = styled.label`
    text-align: left;
    margin: 30px auto 10px;
`;


export const Nav =styled.h1`
    ${'' /* background : ${({scrollNav})=>(scrollNav ? '#000' : "transparent")}; */}
    background: #000;
    height: 80px;
    ${'' /* margin-top: -80px; */}
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;


export const NavbarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height : 80px;
    z-index:1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;

`;

export const NavLogo= styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;


    @media screen and (max-width: 768px){
        display:none
    }
`;


export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding:  0 1rem;
    cursor: pointer;
    height: 100%;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavBtn = styled.img`
    display: flex;
    align-items: center;
    padding: 10px 22px;
    cursor: pointer;
    transition:all 0.2s ease-in-out;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavLinksR = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding:  0 1rem;
    cursor: pointer;
    height: 100%;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
`;
