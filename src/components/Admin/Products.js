import axios from "axios";
import React from "react";

import DataTableProducts from "./DataTable/DataTableProducts";
import "./style.css";

import { useForm } from "react-hook-form";
import yup from "../../validate/yupGlobal";
import { yupResolver } from "@hookform/resolvers/yup";

import CreateProduct from "./AdminProduct/CreateProduct";

function Products(props) {
  const schema = yup.object().shape({
    title: yup.string().required("Vui lòng nhập tên sản phẩm!"),
    image: yup.string().required("Vui lòng nhập link hình ảnh sản phẩm!"),
    price: yup
      .number()
      .required("Vui lòng nhập giá sản phẩm!")
      .typeError("Vui lòng nhập giá sản phẩm!"),
    priceSale: yup
      .number()
      .required("Vui lòng nhập giá sản phẩm!")
      .typeError("Vui lòng nhập giá sản phẩm!"),
    category: yup.string().required("Vui lòng nhập giá sản phẩm!"),
    brand: yup.string().required("Vui lòng nhập giá sản phẩm!"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onOrderSubmit = (data) => {
    pushData({
      ...data,
      quantity: 1,
    });

    window.location.reload();
  };

  const onOrderSubmitUpdate = (data, id) => {
    handleEditProduct(
      {
        ...data,
      },
      id
    );

    window.location.reload();
  };
  const pushData = async (data) => {
    await axios.post("http://localhost:3001/products", data);
  };

  const handleEditProduct = async (data, id) => {
    await axios.put("http://localhost:3001/products/1", data);
  };

  return (
    <div className="dashboard-container">
      <DataTableProducts
        onOrderSubmitUpdate={onOrderSubmitUpdate}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
      />
      <CreateProduct
        onOrderSubmit={onOrderSubmit}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
      />
    </div>
  );
}

export default Products;
