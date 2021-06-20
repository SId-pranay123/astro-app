import React,{useState, useEffect} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './GoToElements'
import {Button} from '../ButtonElements'
import axios from 'axios'



const HeroSectionGoTo = ({date}) => {

    const [apod, setApod] = useState({})
    const str= new Date(date)
    const y = str.getFullYear()
    const m = str.getMonth()
    const d = str.getDate()
    const api_date=y+'-'+(m+1)+'-'+d;
    const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT
    const nasaApiKey = process.env.REACT_APP_API_KEY
    const url=nasaEndpoint+'planetary/apod?api_key='+nasaApiKey+'&date='+api_date
    
    
    axios.interceptors.request.use(
        config => {
          config.params = config.params ? config.params : {}
          const configUrl = config.url
          if (configUrl.includes(nasaEndpoint)) {
            config.params["api_key"] = nasaApiKey
          }
      
          return config
        },
        error => {
          return Promise.reject(error)
        }
      )
      
    
    
    useEffect(() => {
        axios.get(url)
        .then(res => {
          setApod(res.data)
         })
      })

    const [hover, setHover] = useState(false);

    const onHover =()=>{
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg src={apod.url} alt="" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Astrology for {str.toDateString()}</HeroH1>
                <HeroP>-By {apod.copyright?apod.copyright: "Nasa APOD"}</HeroP>
                <HeroBtnWrapper>
                    <Button to='description' primary='true' dark='true' onMouseEnter={onHover} onMouseLeave={onHover}  smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Full Description {hover ? <ArrowForward />: <ArrowRight />} 
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSectionGoTo
