import CreateProduct from "../components/Products/CreateProduct"

function CreateProductPage() {
  return (
    <section className="container w-60 h-100 mt-1 p-5">
        <h1 className="text-center pb-5" style={{fontSize: "40px"}}>Crear nuevo producto</h1>
        <CreateProduct/>
    </section>
  )
}

export default CreateProductPage