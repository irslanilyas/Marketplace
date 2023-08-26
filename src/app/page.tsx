import Image from 'next/image'
import { BadgeHelp } from "lucide-react"
import { Badge } from 'lucide-react' 
import Hero from '@/components/section/Hero'


import { Button } from "@/components/ui/button"
import ProductList from '@/components/section/ProductList'
export default function Home() {
  return (
  <div className='bg-white'>
    <Hero />
    {/* {Products} */}
    
    <ProductList/>

  </div>
 
  )
}