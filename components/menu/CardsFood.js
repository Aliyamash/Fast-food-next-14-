import { getFetch } from "@/utils/fetch";
import ProductCard from "../products/productCard";
import Paginate from "./Paginate";

export default async function CardFood({ params }) {
  const dataProducts = await getFetch(`/menu?${params}`);
  return (
    <>
      <div className="row gx-3">
        {dataProducts.products.map((product) => (
          <div key={product.id} className="col-sm-6 col-lg-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <Paginate link={dataProducts.meta.links} />
    </>
  );
}
