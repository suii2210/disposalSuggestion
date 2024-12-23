


import React from 'react'
import HeroParticle from "./HeroParticle";
import GradualSpacing from '../ui/gradual-spacing';
import ShimmerButton from '../ui/shimmer-button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import BlurIn from '../ui/blur-in';
import Features from './Features';
import { MagicCard } from '../ui/magic-card';
import Footer from '../Footer';
import Faq from './Faq';

 






export const HeroSection = () => {
  return (
    <div className='relative h-screen'>
        <div className='absolute top-0 w-full h-screen z-10 flex items-center justify-center flex-col space-y-10'>
      <div>  <GradualSpacing
      className="font-display text-center text-9xl font-bold   md:text-8xl md:leading-[5rem] 
      pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-green-700 to-green-200/50 bg-clip-text leading-none text-transparent dark:from-green-100  dark:to-green-200/30"
      text="  Smart Disposal" 
      
    />
      </div>
            <p  className='text-xl text-gray-400 '>
            Waste Disposal Suggestions Scanner
            </p>
            <Link href={"./Scan"}>
            <ShimmerButton className="shadow-2xl w-max h-20">
            
            <span className="  flex whitespace-pre-wrap text-center text-lg font-bold  leading-none tracking-tight text-lime-400 dark:from-white dark:to-slate-900/10 lg:text-lg">
            Explore Now 
            <ArrowUpRight color="#ffffff" />
            </span>  
          </ShimmerButton>
          </Link>
        </div>
        
        <HeroParticle/> 

        <section  id='#features'>
        <BlurIn 
      className="mt-10 text-xsm font-bold pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-green-700 to-green-200/50 bg-clip-text leading-none text-transparent dark:from-green-100  dark:to-green-200/30"

       word="Our Features" 
    />
<Features/></section>

<section id='how-it-works'>
<BlurIn
      className=" text-xsm font-bold pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-green-700 to-green-200/50 bg-clip-text leading-none text-transparent dark:from-green-100  dark:to-green-200/30"

       word="How it Works"
    /></section>

<div
      className={
        "flex h-[300px]  pl-14 pr-14 w-[95rem]  flex-col gap-4 lg:h-[240px] lg:flex-row"
      }
    >
    <MagicCard
        className=" flex-col items-center justify-center shadow-2xl whitespace-nowrap p-15 text-lg text-center"
        gradientColor={"#D9D9D955"}
      >
        <img src="./Assets/Work1.jpg" alt="" className='rounded-xl ' />
        Capture Image of Waste 
      </MagicCard>
      <MagicCard
        className=" flex-col items-center justify-center shadow-2xl whitespace-nowrap p-15 text-lg text-center"
        gradientColor={"#D9D9D955"}
      >  <img src="./Assets/Work2.jpg" alt="" className='rounded-xl ' />
        Real-Time Identification 
        
        
      </MagicCard>

      <MagicCard
        className=" flex-col items-center justify-center shadow-2xl whitespace-nowrap p-15 text-lg text-center"
        gradientColor={"#D9D9D955"}
      > <img src="./Assets/Work3.3.jpg" alt="" className='rounded-xl' />
        Get Disposal Suggestions 
      </MagicCard>

      <MagicCard
        className=" flex-col items-center justify-center shadow-2xl whitespace-nowrap p-15 text-lg text-center"
        gradientColor={"#D9D9D955"}
      >
       <img src="./Assets/Work4.png" alt="" className='rounded-xl  ' />
       Locate Nearest Recycling Facility
      </MagicCard>

      <MagicCard
        className="flex-col items-center justify-center shadow-2xl whitespace-nowrap p-15 text-lg text-center"
        gradientColor={"#D9D9D955"}
      >
       <img src="./Assets/Work5.png" alt="" className='rounded-xl ' />
       Eco-Friendly Disposal Done! 
      </MagicCard>

      

    </div>
    <div className=' w-full h-32'>
   
    </div>
    <section id='how-it-works'>
<BlurIn
      className=" text-xsm font-bold pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-green-700 to-green-200/50 bg-clip-text leading-none text-transparent dark:from-green-100  dark:to-green-200/30"

       word="FAQ's"
    /></section>

    <Faq/>
    <div className=' w-full h-44'>
   
   </div>
    
    <Footer/>
      
      </div>
  )
}
