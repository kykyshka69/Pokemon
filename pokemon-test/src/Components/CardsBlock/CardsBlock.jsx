import React from 'react'
import Card from '../Card/Card'
import SectionTitle from '../SectionTitle/SectionTitle'
import emboar from '../../image/emboar.png'
import darkai from '../../image/darkai.png'
import diggersby from '../../image/diggersby.png'
import SkillsUnit from '../Card/SkillsUnit/SkillsUnit'
const CardsBlock = () => {
    return (
        <section className={'section-cards section-cards__block'}>
        <SectionTitle text='Cards'/>
        <ul className={'section-cards__block_item'}>
        <Card img={emboar} title={'Emboar'} count={'5'} skillsComponents={
        <>
        <SkillsUnit text={'Fighting'} backgroundColor={'#9D4242'}/>
         <SkillsUnit text={'Fire'} backgroundColor={'#FB522D'}/>
         </>
        }/>
        <Card img={darkai} title={'Darkai'} count={'4'} skillsComponents={<SkillsUnit text={'Dark'} backgroundColor={'#5C5C5C'}/>}/>
        <Card img={diggersby} title={'Diggersby'} count={'5'} skillsComponents={
            <>
        <SkillsUnit text={'Normal'} backgroundColor={'#AAAAAA'}/>
        <SkillsUnit text={'Ground'} backgroundColor={'#976D63'}/>
        </>
        }/>
        </ul>
        </section>
    )
}

export default CardsBlock
