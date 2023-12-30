import { useQuery } from "@tanstack/react-query"
import { useParams } from 'react-router-dom';

import Product from "../components/Products/Product"

function ShowProduct() {
    const { productId } = useParams();

    const fetchProduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const product = await response.json();
        return product;
      };
    
      const { isLoading, error, data } = useQuery({
        queryKey: ['product'],
        queryFn: fetchProduct
      });
    
      if (isLoading) return <div className="loading-container">
                              <div className="newtons-cradle">
                                <div className="newtons-cradle__dot"></div>
                                <div className="newtons-cradle__dot"></div>
                                <div className="newtons-cradle__dot"></div>
                                <div className="newtons-cradle__dot"></div>
                              </div>
                            </div>
      if (error) return <div>Error al cargar el producto: {error.message}</div>;

  return (
    <div key={data.id} style={{height: "90vh", width: "100%", display:"flex", alignItems:"center", justifyContent: "center"}}>
          <Product

            id={data.id}
            title={data.title}
            description={data.description}
            price={data.price}
            category={data.category}
            image={data.image}
            rating={data.rating}
            showButton={false}
            onlyProduct={true}
          />
    </div>
  )
}

export default ShowProduct