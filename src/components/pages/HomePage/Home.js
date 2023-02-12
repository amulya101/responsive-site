import React from 'react'
import HomeSection from '../../HomeSection'
import { Footer } from '../Footer/Footer';
import {homeObjOne, homeObjTwo} from './Data'

function Home() {
  return (
    <>
        <HomeSection {...homeObjOne} />
        <HomeSection {...homeObjTwo} />
        <Footer />
    </>
  )
}

export default Home;