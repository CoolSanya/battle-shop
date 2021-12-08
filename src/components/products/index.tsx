import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useEffect } from "react";

const Products = () => {
    const { getProducts } = useActions();
    //const { products } = useTypedSelector(redux => redux.product);

    return(
        <>
            <h1 className="text-center">Продукти</h1>
            <div className="row">
                <div className = "col-md-6 offset-md-3">
                    <table className = "table table-hover">
                        <thead>
                            <tr>
                                <th scope = "col">Тип</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Products;