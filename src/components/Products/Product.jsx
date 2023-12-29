import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'
import "./Product.css"

function Product({id, title, description, price, category, image, showButton}) {
  const navigate = useNavigate()

  function handleProductClick() {
    const productId = id;
    navigate(`/products/${productId}`);
  }  

  const truncateDescription = (description) => {
    if (description.length > 50) {
      return description.substring(0, 50) + "...";
    } else {
      return description;
    }
  };

  return (
    

    <div className={`card product-${id}`}>
        <div style={{ height: '200px', overflow: 'hidden'}}>
          <img src={image} alt={title} className='img-fluid pt-1' style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
        </div>
        <div className="card-body">
          <h5 className="card-title"><strong>{title}</strong></h5>
          <p className="card-text">{truncateDescription(description)}</p>
          <p className="card-text"><strong>Category:</strong> {category}</p>
          <p className="card-text"><strong>Price:</strong> {price}</p>
          { showButton ? (
              <button className="btn btn-primary" onClick={handleProductClick}>
                Ver producto
              </button>
            ) : null
          }
        </div>
    </div>
  )
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  showButton: PropTypes.bool.isRequired,
};

export default Product