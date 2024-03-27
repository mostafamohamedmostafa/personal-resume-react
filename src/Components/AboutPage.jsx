import React from 'react'
import HeroImg from "../img/HeroImg.png";
import { AboutMeSection } from './AboutMeSection';
import { PopularServices } from './PopularServices';
import { ClientsTestimonialsSection } from './ClientsTestimonialsSection';
import { ClientsSection } from './ClientsSection';
export const AboutPage = () => {
  return (
    <section className='About-Page container-fluid'>
      <img src={HeroImg} className="img-fluid rounded-start " alt="" />

      <AboutMeSection></AboutMeSection>
      <PopularServices>  </PopularServices>

      <ClientsTestimonialsSection></ClientsTestimonialsSection>
      <ClientsSection></ClientsSection>



    </section>
  )
}
