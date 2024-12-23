import React from 'react'
import { NeonGradientCard } from '@/components/ui/neon-gradient-card';
import HeroParticle from "@/components/hero/HeroParticle";
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';
import ObjectDetection from "@/model/ObjectDetection"

export const scanpage = () => {
  return (
    <>
    <div className='relative h-screen'>
    <div className='absolute w-full h-screen z-10 flex items-center justify-center flex-col '>
    
    <div className='flex items-center justify-center '>

<MoveLeft color="#befdb9 "/>
<Link href={"./"} className='text-lg font-bold mr-[1200px] z-40 text-green-200 '>Back</Link>

</div>  

<div className='flex items-center justify-center'>
  <NeonGradientCard className="w-[300px] h-[300px] mb-20 mt-20  rounded-full flex items-center justify-center">
    <img src="/Assets/loogoo.png" alt="logo" className='w-full h-full items-center justify-center object-contain' />
  </NeonGradientCard>
</div>


    <div className=' pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]'>
      Scan & Dispose Smartly
    </div>
  </div>
  <HeroParticle/>
  </div>

  <ObjectDetection/>
  </>
  )
}

export default scanpage;
