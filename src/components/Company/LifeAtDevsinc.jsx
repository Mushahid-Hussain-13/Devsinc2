import React from 'react'
import DevsincLifeHeroSection from './CompanySnippits/DevsincLifeHeroSection.jsx'
import Footer from '../Footer.jsx'
import DevsincSpace from './CompanySnippits/DevsincSpace.jsx'
import DayInLifeDevsinc from './CompanySnippits/DayInLifeDevsinc.jsx'
import MemoriesAtDevsinc from './CompanySnippits/MemoriesAtDevsinc.jsx'
import DevsincDiversity from './CompanySnippits/DevsincDiversity.jsx'
import DevsincNextChapter from './CompanySnippits/DevsincNextChapter.jsx'

const LifeAtDevsinc = () => {
  return (
    <>
      <DevsincLifeHeroSection />
      <MemoriesAtDevsinc />
      <DayInLifeDevsinc />
      <DevsincSpace />
      <DevsincDiversity />
      <DevsincNextChapter />
      <Footer />
    </>
  )
}

export default LifeAtDevsinc