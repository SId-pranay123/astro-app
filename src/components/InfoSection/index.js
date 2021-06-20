import React,{useEffect,useState} from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesH2, ServicesP } from './ServicesElements'
import axios from 'axios'


const ServicesSection = () => {

    const [apod, setApod] = useState({})

    const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT
    const nasaApiKey = process.env.REACT_APP_API_KEY

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
        axios.get(`${nasaEndpoint}planetary/apod`)
        .then(res => {
          setApod(res.data)
         })
      }, [])



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

export default ServicesSection