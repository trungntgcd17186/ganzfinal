import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
function CreateProduct(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Tạo sản phẩm mới
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo sản phẩm mới</Modal.Title>
        </Modal.Header>
        <form
          action=""
          id="form-payment"
          onSubmit={props.handleSubmit(props.onOrderSubmit)}
        >
          <Modal.Body>
            <label>Tên sản phẩm</label>
            <input
              type="text"
              placeholder="Áo sơ mi tay dài..."
              className="form-control"
              {...props.register("title")}
            />
            {props.errors.title && (
              <p className="errors">{props.errors.title.message}</p>
            )}
            <label>Hình ảnh sản phẩm</label>
            <input
              type="text"
              placeholder="Nhập link ảnh sản phẩm"
              className="form-control"
              {...props.register("image")}
            />
            {props.errors.image && (
              <p className="errors">{props.errors.image.message}</p>
            )}
            <label>Giá sản phẩm</label>
            <input
              type="text"
              placeholder="199000"
              className="form-control"
              {...props.register("price")}
            />
            {props.errors.price && (
              <p className="errors">{props.errors.price.message}</p>
            )}
            <label>Giá chưa sale</label>
            <input
              type="text"
              placeholder="300000"
              className="form-control"
              {...props.register("priceSale")}
            />
            {props.errors.priceSale && (
              <p className="errors">{props.errors.priceSale.message}</p>
            )}
            <label>Category</label>
            <input
              type="text"
              placeholder="shirt"
              className="form-control"
              {...props.register("category")}
            />
            {props.errors.category && (
              <p className="errors">{props.errors.category.message}</p>
            )}
            <label>Brand</label>
            <input
              type="text"
              placeholder="Nike"
              className="form-control"
              {...props.register("brand")}
            />
            {props.errors.brand && (
              <p className="errors">{props.errors.brand.message}</p>
            )}
            <label>Description</label>
            <input
              type="text"
              placeholder="Áo sơ mi siêu thoáng mát..."
              className="form-control"
              {...props.register("description")}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default CreateProduct;
