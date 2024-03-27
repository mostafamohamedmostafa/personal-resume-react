import React from 'react'
import { MySkillsSection } from './MySkillsSection'
import { PopularServices } from './PopularServices'
import { PricingPackageSection } from './PricingPackageSection'
export const ServicesPage = () => {
    return (
        <section className='Service-Page container-fluid'>

            <MySkillsSection></MySkillsSection>

            <PopularServices></PopularServices>
            <PricingPackageSection></PricingPackageSection>








        </section>
    )
}
