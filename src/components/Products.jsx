import Product from "./Product";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/');
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map(product => (
          <div key={product.id} className="col">
            <Product
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
