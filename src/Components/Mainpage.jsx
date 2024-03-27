import React from 'react'
import { Navigation } from './Navigation'
import { HeroSection } from './HeroSection'
import { AboutMeSection } from './AboutMeSection'
import { MyResume } from './MyResume'
import { PopularServices } from './PopularServices'
import { MySkillsSection } from './MySkillsSection'
import { ProjectsSection } from './ProjectsSection'
import { ClientsTestimonialsSection } from './ClientsTestimonialsSection'
import { PricingPackageSection } from './PricingPackageSection'
import { GetInTouchSection } from './GetInTouchSection'
import { ClientsSection } from './ClientsSection'

export const Mainpage = () => {
    return (
        <section className='container-fluid'>
            <div>
                <HeroSection></HeroSection>
                <AboutMeSection></AboutMeSection>
                <MyResume></MyResume>
                <PopularServices></PopularServices>
                <MySkillsSection></MySkillsSection>
                <ProjectsSection></ProjectsSection>
                <ClientsTestimonialsSection></ClientsTestimonialsSection>
                <PricingPackageSection></PricingPackageSection>
                <ClientsSection></ClientsSection>
                <GetInTouchSection></GetInTouchSection>


            </div>
        </section>

    )
}
