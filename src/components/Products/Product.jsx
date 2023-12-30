import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'
import "./Product.css"

function Product({id, title, description, price, image, showButton, onlyProduct}) {
  const navigate = useNavigate()

  function handleProductClick() {
    const productId = id;
    navigate(`/products/${productId}`);
  } 

  return (
    

    <div className={`card product-${id}`} style={{ height: onlyProduct ? '80%' : '100%', width: onlyProduct ? "80%" : "100%", marginLeft: "2px", marginRight: "2px" }}>
        <div style={{ height: '300px', width: '100%', overflow: 'hidden'}} className='d-flex justify-content-center align-items-center'>
          <img src={image} alt={title} className='img-fluid pt-1' style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
        </div>
        <div className="card-body">
          <h5 className="card-title"><strong>{title}</strong></h5>
          <p className="card-text">{description}</p>
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
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  showButton: PropTypes.bool.isRequired,
  onlyProduct: PropTypes.bool.isRequired
};

export default Product