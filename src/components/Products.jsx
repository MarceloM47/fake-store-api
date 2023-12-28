import {
  useQuery
} from '@tanstack/react-query'
import Product from "./Product";
import "./Products.css"

function Products() {

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products/');
    const products = await response.json();
    return products;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  if (isLoading) return <div className="loading-container">
                          <div className="newtons-cradle">
                            <div className="newtons-cradle__dot"></div>
                            <div className="newtons-cradle__dot"></div>
                            <div className="newtons-cradle__dot"></div>
                            <div className="newtons-cradle__dot"></div>
                          </div>
                        </div>
  if (error) return <div>Error al cargar productos: {error.message}</div>;

  return (
    <div className="container mt-5 mb-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map(product => (
          <div key={product.id} className="col">
            <Product
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              category={product.category}
              image={product.image}
              rating={product.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
