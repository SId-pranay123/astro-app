import React,{useState} from 'react'
import Footer from '../components/Footer';
import HeroSectionGoTo from '../components/GoTo/GoToHero';
import GoToNavbar from '../components/GoTo/GoToNav'
import ServicesSectionGoTo from '../components/GoTo/GoToServices';
import Sidebar from '../components/sidebar'
import { useLocation } from 'react-router';



const GoTo = () => {
    const [isOpen, setisOpen] = useState(false);

    const location = useLocation()
    const goto = location.state.date

    const toggle = ()=>{
        setisOpen(!isOpen)
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <GoToNavbar toggle={toggle}/>
            <HeroSectionGoTo date={goto} />
            <ServicesSectionGoTo  date = {goto}/>
            <Footer /> 
        </>
    )
}

export default GoTo
