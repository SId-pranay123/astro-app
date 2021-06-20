import React,{useEffect,useState} from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesH2, ServicesP } from './GoToElements'
import axios from 'axios'


const ServicesSectionGoto = ({date}) => {

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



    return (
            <ServicesContainer id='description'>
                <ServicesH1>Explanation</ServicesH1>
                    <ServicesWrapper>
                        <ServicesCard>
                            <ServicesH2>{apod.title}</ServicesH2>
                            <ServicesP>{apod.explanation}</ServicesP>
                        </ServicesCard>
                    </ServicesWrapper>
            </ServicesContainer>
        )

    }

export default ServicesSectionGoto