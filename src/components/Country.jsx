import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 1em;
    border-radius: 7px;
    cursor: pointer;
`

const Image = styled.img`
    object-fit: cover;
    aspect-ratio: 2 / 1;
    flex: 1;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
`

const DescriptionContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .6em;
    padding-left: 1em;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
`

const CountryName = styled.p`
    font-weight: 800;
    font-size: 16px;
`

const DescLine = styled.div`
    display: flex;
    align-items: center;
    gap: .2em;
`

const DescHeader = styled.p`
    font-weight: 600;
    font-size: 12px;
`

const DescData = styled.p`
    font-size: 12px;
`

const Country = ({id, link, name, population, region, capital, query}) => {

  return (
    <Link to={`/countries/${id}`}>
        <Container>
            <Image src={link}/>
            <DescriptionContainer>
                <CountryName>{name}</CountryName>
                <DescLine><DescHeader>Population: </DescHeader><DescData> {population}</DescData></DescLine>
                <DescLine><DescHeader>Region: </DescHeader><DescData> {region}</DescData></DescLine>
                <DescLine><DescHeader>Capital: </DescHeader><DescData> {capital}</DescData></DescLine>
            </DescriptionContainer>
        </Container>
    </Link>
  )
}

export default Country