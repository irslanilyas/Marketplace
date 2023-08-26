
import Link from "next/link"
import logo from "/public/logo.webp"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"



const Header = () => {
  return (
    <div className="flex flex-row items-centre justify-between items-center py-8 bg-white pt-8">
      <Link href={'/'}>
      <Image src={ logo } alt="logo" className="w-40"/>
      </Link>
      <ul className="flex flex-row gap-10">
        <li className="text-lg">
          <Link href="/category/female">Female</Link>
          </li>
        <li className="text-lg">
          <Link href="/category/male">Male</Link>
          </li>
        <li className="text-lg">
          <Link href="/category/kids">Kids</Link>
          </li>
          <li className="text-lg">
          <Link href="/category/sports">Sports</Link>
          </li>
        <li className="text-lg">
          <Link href={"/products"}>All Products</Link>
          </li>
      </ul>
      <div className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center">
        <ShoppingCart/>
        </div>
    </div>
  )
}

export default Header