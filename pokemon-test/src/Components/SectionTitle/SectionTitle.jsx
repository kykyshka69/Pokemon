import React from 'react'

const SectionTitle = (props) => {
    const {text} = props
    return (
        <h2 className={'section-title'}>
            {text}
        </h2>
    )
}

export default SectionTitle
