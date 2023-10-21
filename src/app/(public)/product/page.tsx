"use client";
import ProductCard from "@/components/card/ProductCard";
import Search from "@/components/search/Search";
import ProductsRow from "@/components/shares/ProductsRow";
import requist from "@/server";
import categoryTypes from "@/types/category";
import ProductsType from "@/types/product";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const search = useSearchParams();
  const [products, setProducts] = useState([] as ProductsType[]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const [categories, setCategories] = useState([] as categoryTypes[]);
  const [category, setCategory] = useState(search.get("category") || "");

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const {
          data: { total, products },
        } = await requist.get<{ total: number; products: ProductsType[] }>(
          "product",
          { params: { category: category || undefined } }
        );
        const { data } = await requist.get("category");
        setCategories(data);

        setProducts(products);
        setTotal(total);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [category]);

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCategory(value);
    if (value === "") {
      router.push(`product`);
    } else {
      router.push(`product?category=${value}`);
    }
  };

  return (
    <section className="container">
      <Search setFilteredProducts={setProducts} />
      <h1 className="text-center my-3">Products:{total}</h1>

      <select
        className="form-select my-4"
        value={category}
        onChange={handleCategory}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      <ProductsRow loading={loading} products={products} />
    </section>
  );
};

export default Page;
