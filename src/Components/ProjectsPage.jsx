import React from 'react'
import { HeroSection } from './HeroSection'
import { MyResume } from './MyResume'
import { ProjectsSection } from './ProjectsSection'
import { GetInTouchSection } from './GetInTouchSection'

export const ProjectsPage = () => {
    return (
        <section className='Projects-Page container-fluid'>

            <HeroSection></HeroSection>
            <MyResume></MyResume>
            <ProjectsSection></ProjectsSection>
            <GetInTouchSection></GetInTouchSection>
        </section>
    )
}
