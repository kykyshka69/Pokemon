import React, { useRef } from 'react'
import CardsBlock from '../CardsBlock/CardsBlock'
import FirstBlock from '../FirstBlock/FirstBlock'
import MapBlock from '../MapBlock/MapBlock'
import Scroll from '../Scroll/Scroll'

const Main = () => {
    const card = useRef()
    const scrollToBottom = (card) => {

        card.target.scrollIntoView({ behavior: 'smooth' })       
    }
    return (
        <>
            <FirstBlock/>
           <Scroll onClick={scrollToBottom} />
            <main > 
           <CardsBlock ref={card}/>
        </main>
        <MapBlock/>

        </>
    )
}

export default Main
