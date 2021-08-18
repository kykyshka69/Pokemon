import React from 'react'
import Image from '../Image/Image'
import dino from '../../image/dinoInFirstBlock.png'

const FirstBlock = () => {
    return (
        <div className={'first-block first-block__content'}>
            <div className={'first-block__content_info'}>
        <h1 className={'first-block__content_info--title'}>
            This is an Internal test task
            </h1>
            <p className={'first-block__content_info_text'}>
            <p>Hello,  don’t be afraid.</p>
            This task is easier than looks like.<br />
            It’s no magic, no quests and no math here. Only <strong>your skill</strong>  in <strong><i>semantic markup</i> </strong>matters. In this Figma design you already have everything to successfully path our test, just be attentive to details, take your time and GOOD LUCK.
            </p>
            </div>
            <div className={'first-block__content_img'}>
            <Image src={dino} width={'359px'} height={'400px'} alt={'dino'}/>
            </div>
           
        </div>
    )
}

export default FirstBlock
