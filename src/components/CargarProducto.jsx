import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function CargarProducto() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inicio, setInicio] = useState({
    name: "",
    price: "",
    cant: 0,
    categoria: "General"
  });

  return (
    <>
      <a type="button" onClick={handleShow}>
        Cargar Producto
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: 'black', border: '2px solid red' }}>
          <Modal.Title style={{ color: 'red' }}>Cargar Productos Al Almacen</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: 'black', color: 'red', border: '2px solid red' }}>
          <form action="">
            <div className="row">
              <label htmlFor="formGroupExampleInput" className="form-label"><strong>Nombre del producto</strong></label>
              <div className="form-group input-group flex-nowrap">
                <input type="text" name="" className="form-control" id="nameProduct" required onChange={(e) => { setInicio({ ...inicio, "name": e.target.value }) }} />
              </div>
              <label htmlFor="formGroupExampleInput" className="form-label mt-2"><strong>Precio del producto</strong></label>
              <div className="form-group mt-2 input-group flex-nowrap">
                <input type="number" className="form-control" name="" id="priceProduct" required onChange={(e) => { setInicio({ ...inicio, "price": e.target.value }) }} />
              </div>
              <label htmlFor="formGroupExampleInput" className="form-label mt-2"><strong>Cantidad de producto a almacenar</strong></label>
              <div className="form-group mt-2 input-group flex-nowrap">
                <input type="number" className="form-control" name="" id="cantProduct" required onChange={(e) => { setInicio({ ...inicio, "cant": e.target.value }) }} />
              </div>
              <label htmlFor="formGroupExampleInput" className="form-label mt-2"><strong>Categoria del producto</strong></label>
              <div className="form-group">
                    <Form.Select aria-label="Categoria del Producto" onChange={(e)=>{setInicio({ ...inicio, "categoria": e.target.value })}}>
                        <option value="General">General</option>
                        <option value="Comestibles">Comestibles</option>
                        <option value="Higiene">Higiene</option>
                        <option value="Limpieza">Limpieza</option>
                        <option value="Indumentaria">Indumentaria</option>
                        <option value="Deporte">Deporte</option>
                        <option value="Tecnologia">Tecnologia</option>
                        <option value="Herramientas">Herramientas</option>
                        <option value="Otros">Otros</option>
                    </Form.Select>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: 'black', color: 'red', border: '2px solid red' }}>
          <button className="d-none d-md-inline appointment-btn scrollto btn btn-outline-danger regButton" onClick={handleClose}>
            Cerrar
          </button>

          <button className="d-none d-md-inline appointment-btn scrollto btn btn-outline-danger">
            Ingresar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CargarProducto;