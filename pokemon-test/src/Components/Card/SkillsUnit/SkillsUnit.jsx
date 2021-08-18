import React from 'react'

const SkillsUnit = (props) => {
    const {text, backgroundColor} = props
    return (
        <span className={'skills-unit skills-unit__block'} style={{backgroundColor}} >
            {text}
        </span>
    )
}

export default SkillsUnit
