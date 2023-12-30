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

  const truncateDescription = (description) => {
    if (description.length > 50) {
      return description.substring(0, 50) + "...";
    } else {
      return description;
    }
  };

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
    <div className="products-container">
        {data.map(product => (
          <div key={product.id}>
            <Product
              id={product.id}
              title={product.title}
              description={truncateDescription(product.description)}
              price={product.price}
              image={product.image}
              rating={product.rating}
              showButton={true}
              onlyProduct={false}
            />
          </div>
        ))}
    </div>
  );
}

export default Products;
