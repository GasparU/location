import React from 'react'
import LocationInfo from './LocationInfo';
import ResidentCard from './ResidentCard';
import "./styles/mainContent.css"

const MainContent = ({ location, currentPage, productsPerPage }) => {

    const lastIndex = currentPage * productsPerPage
    const firstIndex = lastIndex - productsPerPage

    return (
        <>
            <LocationInfo location={location} />
            <div className='resident-container'>
                {
                    location?.residents.map(url => (
                        <ResidentCard key={url} url={url} />
                    )).slice(firstIndex, lastIndex)
                }
            </div></>
    )
}

export default MainContent