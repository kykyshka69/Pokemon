import React from 'react'
import Button from '../Button/Button'
import Image from '../Image/Image'

const Card = (props) => {
    const {img, title,count,skillsComponents} = props
    return (
        <li className={'card card__block'}>
        <Image src={img} width={'261px'} height={'272px'}/>  
        <div className={'card__block__info'}>
        <h4 className={'card__block__info_title'}>{title}</h4> 
        <span className={'card__block__info__generation'}>Generation: <span>{count}</span></span>  
        <span>Type: {skillsComponents}</span> 
        <Button/>    
        </div>  
        </li>
    )
}

export default Card
