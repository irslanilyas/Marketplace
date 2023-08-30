import { Product } from "./types";
import P1 from "/public/p1.webp"
import Female2 from "/public/Female2.png"
import Female3 from "public/Female3.png"
import Male1 from "/public/Male1.png"
import Male2 from "/public/Male2.png"
import Kids1 from "/public/Kids1.webp"
import kids2 from "/public/kids2.jpeg"


export const Products: Product[]= [ 
{
    id: 1,
    name: 'Imperial Alpaca Hoodie',
    category: 'female',
    price: 20,
    image: P1,
},
{
    id: 2,
    name: 'Brushed Raglan Sweatshirt',
    category: 'female',
    price: 200,
    image: Female2,
},
{
    id: 3,
    name: 'Cameryn Sash Tie Dress',
    category: 'female',
    price: 203,
    image: Female3,
},
{
    id: 4,
    name: 'Flex Push Button Bomber',
    category: 'male',
    price: 40,
    image: Male1,
},
{
    id: 5,
    name: 'Raglan Sweatshirt',
    category: 'male',
    price: 205,
    image: Male2,
},
{
    id: 6,
    name: 'Kids suit',
    category: 'kids',
    price: 20,
    image: Kids1,
},
{
    id: 7,
    name: 'Toddlers Irish Sweater',
    category: 'kids',
    price: 201,
    image: kids2,
},
];