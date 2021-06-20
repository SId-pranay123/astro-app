import React,{useState} from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/Hero';
import Navbar from '../components/Navbar'
import ServicesSection from '../components/InfoSection';
import Search from '../components/InfoSection/Search';
import Sidebar from '../components/sidebar'

const Home = () => {
    const [isOpen, setisOpen] = useState(false);

    const toggle = ()=>{
        setisOpen(!isOpen)
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection />
            <ServicesSection />
            <Search />
            <Footer /> 
        </>
    )
}

export default Home
