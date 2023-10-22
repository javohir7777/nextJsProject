import ProductsType from "@/types/product";
import React from "react";
import ProductCard from "../card/ProductCard";
import Loading from "../laoding/Loading";

interface ProductsRowProps {
  loading?: boolean;
  products: ProductsType[];
}

const ProductsRow = ({ loading, products }: ProductsRowProps) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {loading ? (
        <div>
          <Loading />
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
