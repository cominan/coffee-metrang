import React from 'react'
import SlideInformation from '../slides/SlideInformation'
import SlidePartner from '../slides/SlidePartner'
import Introduce from './introduce/Introduce'
import { ProductInstant, ProductRoasted, ProductVacuumCoffee, ProductGroundCoffee, ProductTea } from './index'
export default function HomePage() {
  return (
    <div>
        <SlideInformation />
        <SlidePartner />
        <ProductRoasted />
        <ProductInstant />
        <ProductVacuumCoffee />
        <ProductGroundCoffee />
        <ProductTea />
        <Introduce />
    </div>
  )
}
