import requist from "@/server";
import ProductsType from "@/types/product";

const Search = ({ setFilteredProducts }: ProductsType) => {
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);

    try {
      const {
        data: { products },
      } = await requist.get(`product?search=${e.target.value}`);
      setFilteredProducts(products);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="container">
      <div className="input-group mt-3">
        <input
          className="form-control"
          type="search"
          onChange={handleSearch}
          placeholder="Searching ..."
        />
      </div>
    </form>
  );
};

export default Search;
