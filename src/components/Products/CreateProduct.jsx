import {
    useMutation
} from '@tanstack/react-query'
import { useState } from 'react';
import Product from './Product';

const createProduct = async (newProductData) => {
    const response = await fetch('https://fakestoreapi.com/products/', {
        method: "POST",
        body: JSON.stringify(newProductData),
    });

    return response
}


function CreateProduct() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    const mutation = useMutation({
        mutationFn: createProduct
    })


      const handleSubmit =  (e) => {
        e.preventDefault();
    
        try {
           mutation.mutate({
            title,
            price,
            description,
            image,
          });
    
          console.log('Producto creado exitosamente');
        } catch (error) {
          console.error('Error al crear el producto:', error);
        }
      };


      if (mutation.isPending){
        return <div className="loading-container">
                <div className="newtons-cradle">
                  <div className="newtons-cradle__dot"></div>
                  <div className="newtons-cradle__dot"></div>
                  <div className="newtons-cradle__dot"></div>
                  <div className="newtons-cradle__dot"></div>
                </div>
              </div>
      }

      if (mutation.error){
        return alert('Ocurrió un error'+mutation.error)
      }

      if (mutation.isSuccess){
        const id = mutation.data.id
        console.log(mutation.data);
        console.log(mutation.data.json());
        {
            alert("Recuerda que este sitio es un sitio de práctica y este registro realmente no se guarda en la base de datos")
        }
        return <Product 
                id={id}
                image={image}
                title={title}
                description={description}
                price={price}
                showButton={false}
                onlyProduct={false}
                
                />
      }




  return (
    <form onSubmit={handleSubmit} >
      <div className="mb-3">
        <label htmlFor="productTitulo" className="form-label">
          Titulo:
        </label>
        <input
          type="text"
          className="form-control"
          id="productTitulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required={true}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="productDescription" className="form-label">
          Description:
        </label>
        <input
          type="text"
          className="form-control"
          id="productDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required={true}
        />
      </div>

     
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">
          Precio:
        </label>
        <input
          type="number"
          className="form-control"
          id="productPrice"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required={true}
        />
      </div>
    
      <div className="mb-3">
        <label htmlFor="productImage" className="form-label">
          URL de la imagen:
        </label>
        <input
          type="url"
          className="form-control"
          id="productImage"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required={true}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Crear producto
      </button>
    </form>
  )
}

export default CreateProduct