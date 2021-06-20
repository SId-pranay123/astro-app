import React,{useState} from 'react'
import { ServicesH1, ServicesWrapper,Btn, BtnLink,ServicesCard, Input,SearchContainer } from './ServicesElements'

import { useHistory } from 'react-router-dom'


const Search = () => {
    let history =useHistory()


   
    
    const [Date, setDate] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        // alert(JSON.stringify(Date))
        history.push('/signin',{date: JSON.stringify(Date)})
    }


    return (
            <SearchContainer id='search'>
                <ServicesH1>Search Astro by Date</ServicesH1>
                    <ServicesWrapper>
                        <ServicesCard>
                           
                            <form onSubmit={handleSubmit}>
                            <Input type='date' value={Date} onChange={(e)=> setDate(e.target.value) }></Input>
                            <Btn>
                                 <BtnLink>Get astro</BtnLink>
                            </Btn>
                            </form>
                        </ServicesCard>
                    </ServicesWrapper>
            </SearchContainer>
        )

    }

export default Search