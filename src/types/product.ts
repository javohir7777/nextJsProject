import categoryTypes from "./category";
import ImageTypes from "./image";

interface ProductsType {
  checked: boolean;
  sold: number;
  _id: string;
  title: string;
  price: number;
  description: string;
  image: ImageTypes;
  quantity: number;
  category: categoryTypes;
  createdAt: string;
  updatedAt: string;
}
export default ProductsType;
