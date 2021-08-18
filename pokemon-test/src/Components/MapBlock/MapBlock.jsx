import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'

const MapBlock = () => {
    return (
        <section style={{marginBottom: '30px'}}>
            <SectionTitle text={'Map'} />
            <iframe title="maps" src="https://www.google.com/maps/embed/v1/view?zoom=10&center=50.4501%2C30.5234&key=AIzaSyAmLVQB_iRMfGG5rt49HR7bcapapUIrnig" style={{width: '100%',height: '500px', loading: 'lazy', border: 'none', marginTop: '80px'}}></iframe>
        </section>
    )
}
export default MapBlock
