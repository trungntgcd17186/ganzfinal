import React, { useState, useEffect } from "react";
import ReactDatatable from "@ashvin27/react-datatable";
import { Button } from "react-bootstrap";
import axios from "axios";

import UpdateProduct from "../AdminProduct/UpdateProduct";

function DataTableProducts(props) {
  const [datas, setDatas] = useState([]);

  //Xử lý gọi api để render sản phẩm.
  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setDatas(response.data);
    });
  }, []);

  //Xử lý gửi api để xóa sản phẩm.
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/products/${id}`)
      .then(() => this.setState({ status: "Delete successful" }));
    window.location.reload();
  };

  const columns = [
    {
      key: "id",
      text: "ID",
      sortable: true,
      cell: (data, index) => {
        return index + 1;
      },
    },
    {
      key: "title",
      text: "Tên sản phẩm",
      sortable: true,
      cell: (data) => {
        return data.title;
      },
    },
    {
      key: "image",
      text: "Hình ảnh",
      sortable: true,
      cell: (data) => {
        return <img className="imgSize" src={data.image} />;
      },
    },
    {
      key: "price",
      text: "Giá",
      sortable: true,
      cell: (data) => {
        return data.price;
      },
    },
    {
      key: "brand",
      text: "Danh mục",
      sortable: true,
      cell: (data) => {
        return data.brand;
      },
    },
    {
      key: "action",
      text: "Thao tác",
      cell: (data) => {
        return (
          <>
            <UpdateProduct
              onOrderSubmitUpdate={props.onOrderSubmitUpdate}
              handleSubmit={props.handleSubmit}
              register={props.register}
              errors={props.errors}
              dataId={data.id}
            />
            <Button
              variant="danger"
              onClick={() => {
                handleDelete(data.id);
              }}
            >
              <i className="fa fa-trash"></i>
            </Button>
          </>
        );
      },
    },
  ];

  const config = {
    page_size: 5,
    show_filter: true,
    show_length_menu: true,
    show_pagination: true,
    pagination: "advance",
  };

  const rowClickedHandler = (event, data, rowIndex) => {};

  return (
    <>
      <ReactDatatable
        responsive
        hover
        config={config}
        records={datas}
        columns={columns}
      />
    </>
  );
}

export default DataTableProducts;
