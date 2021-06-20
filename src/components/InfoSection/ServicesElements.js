import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #151515;

    @media screen and (max-width: 768px){
        height: 800px;
    }

    @media screen and (max-width: 480px){
        heigth: 1000px;
    }
`;

export const SearchContainer = styled.div`
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
`

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