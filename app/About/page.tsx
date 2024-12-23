import React from 'react'
import BlurIn from '@/components/ui/blur-in';
import ShineBorder from '@/components/ui/shine-border';
import HeroParticle from "@/components/hero/HeroParticle";
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';
import Footer from '@/components/Footer';


export const aboutpage = () => {
  return (
    <div className='relative h-screen'>
        <div className='absolute top-0 w-full h-screen z-10 flex items-center justify-center flex-col '>


   <BlurIn
      className="mt-40 text-sm font-bold pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-green-700 to-green-200/50 bg-clip-text leading-none text-transparent dark:from-green-100  dark:to-green-200/30"

       word="Waste Disposal Suggestions Scanner"
    />
   <div className='flex items-center justify-center '>

   <MoveLeft color="#befdb9" />
  <Link href={"./"} className='text-lg font-bold mr-[1200px] z-40 text-green-200'>Back</Link>
  
  </div>  

     <div className='flex items-center justify-center mb-40'>
      <ShineBorder
      className="relative flex h-[600px] w-[800px] mt-0 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <p className='max-w-max font-medium text-lg p-6 '>
        
      The *Waste Disposal Suggestions Scanner* is an innovative solution designed to help users identify and dispose of waste correctly. 
      Using advanced image recognition technology, the scanner analyzes waste items in real time and provides precise disposal instructions, ensuring that recyclable materials are properly separated from general waste. 
      This user-friendly tool promotes sustainable waste management practices by reducing contamination in recycling streams and encouraging 
      responsible disposal. Whether through a mobile app or web platform, the scanner empowers individuals to make eco-conscious decisions, contributing to a cleaner, greener environment.
      
      </p>
      <p className='max-w-full font-medium text-lg p-6'>
      The Smart Waste Disposal Scanner is your eco-friendly assistant, using cutting-edge image recognition to instantly identify your waste and guide you on how to dispose of it properly. Whether it’s plastic, glass, or organic material, just snap a photo, and the scanner provides real-time disposal suggestions to help you recycle right.

      This intuitive tool simplifies waste management, reducing recycling contamination and empowering you to make greener choices every day. Join the movement for a cleaner planet—start disposing smartly today!
      </p>
    </ShineBorder>
    </div>
    </div>
    <HeroParticle/>
    
    <br /> <br /><br /><br /><br /><br /><br />
    <br /><br />
    <div className=''>
      <Footer/>
    </div>

    </div>

    
  )
}
export default aboutpage;