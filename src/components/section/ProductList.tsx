import P1 from "public/p1.webp"
import ProductCard from "@/components/ProductCard"
import { Products } from "@/utils/mocks";
import { StaticImageData } from "next/image";


const ProductList = () => {
  const productChecks=Products.slice(0,3)
  return (
    <div className="flex justify-evenly mt-16 py-10">
        {productChecks.map((product)=>(
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

export default ProductList;