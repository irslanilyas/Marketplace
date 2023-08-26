import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from '../ui/button'
import heroimg from "/public/header.webp"
import Image from 'next/image'
import bazaar from "/public/bazaar.webp"
import bustle from "/public/bustle.webp"
import versace from "/public/versace.webp"
import instyle from "/public/instyle.webp"

const Hero = () => {
  return (
    <section className='flex flex-row justify-between pt-20'>
        {/*Left Div */}
        <div>
            <Badge className= 'text-md py-3 px-6 bg-blue-200 text-blue-700 rounded-[8px]'>Sale 70%</Badge>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pt-8 w-[65%]">
            An Industrial Take on Streetwear
    </h1>
    <p className="leading-7 [&:not(:first-child)]:mt-6 w-[62%]">
    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.

    </p>
    <Button className=' bg-black text-white mt-8'>Start Shopping</Button>
    <div className='flex flex-row gap-16 mt-24'>
        <Image src={ bazaar } alt=''/>
        <Image src={ bustle } alt=''/>
        <Image src={ versace } alt=''/>
        <Image src={ instyle } alt=''/>
    </div>
</div>
        

        {/*Right Div */}
        <div className='bg-gray-100 rounded-full h-100 w-100'>
        <Image src={heroimg} alt={''}/>
        </div>
    </section>
  )
}

export default Hero