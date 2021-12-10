import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ISearchProduct } from "../types";

const ProductsListPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { products, per_page } = useTypedSelector((store) => store.product);
  const { fetchProducts } = useActions();

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      try {
        const url = window.location.search;
        const params = new URLSearchParams(url); // id=123
        let page = params?.get("page") ?? 1;
        const search: ISearchProduct = {
          page: page,
        };
        await fetchProducts(search);
        setLoading(false);
      } catch (ex) {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  const buttons = [];
  for (var i =1; i<=per_page; i++) {
    buttons.push(i);
      
  }

  return (
    <>
      <h1 className="text-center">Товари на сайті</h1>
      {loading && <h2>Loading ...</h2>}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.detail}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr></tr>
        </tfoot>
      </table>
      <div className="text-center">
      { buttons.map((item, key)=> {
          return (
            <Link key={key} to={'/products/list/?page=' + item} className="btn btn-success">{item}</Link>
          );
      }) }
      </div>
      
    </>
  );
};

export default ProductsListPage;
