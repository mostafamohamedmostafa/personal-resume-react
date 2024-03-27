import React from 'react'
import { AboutMeSection } from './AboutMeSection'
import { MyResume } from './MyResume'
import { MySkillsSection } from './MySkillsSection'
import { ClientsTestimonialsSection } from './ClientsTestimonialsSection'
import { GetInTouchSection } from './GetInTouchSection'

export const ContactPage = () => {
    return (
        <section className='Contact-Page'>
            <AboutMeSection></AboutMeSection>
            <MyResume></MyResume>
            <MySkillsSection></MySkillsSection>
            <ClientsTestimonialsSection></ClientsTestimonialsSection>
            <GetInTouchSection></GetInTouchSection>








        </section>
    )
}
