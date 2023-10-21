import ProductsType from "@/types/product";
import React from "react";
import ProductCard from "../card/ProductCard";

interface ProductsRowProps {
  loading?: boolean;
  products: ProductsType[];
}

const ProductsRow = ({ loading, products }: ProductsRowProps) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols- gap-10">
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))
      )}
    </div>
  );
};

export default ProductsRow;
