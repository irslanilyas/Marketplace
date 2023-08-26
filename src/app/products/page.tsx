import { Products } from "@/utils/mocks"
import ProductCard from "@/components/ProductCard"
import P1 from "@/components/public/p1.webp"
import { StaticImageData } from "next/image";


const AllProducts=()=>{
return (
   <div className="flex justify-evenly mt-16 py-10 flex-wrap">
    {Products.map((product) => (
  <ProductCard
  key={product.id} 
  title={product.name} 
  price={100} 
  img={product.image as StaticImageData}
  category={product.category}
  id={product.id}

/>
))}
</div>
);
};

export default AllProducts