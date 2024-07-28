import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "./addsp.module.css";


const ProductManagement = () => {
  const [productName, setProductName] = useState("");
  const [material, setMaterial] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [features, setFeatures] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [products, setProducts] = useState([]);

  const handleImageUpload = (event) => {
    setProductImage(event.target.files[0]);
  };

  const handleAddProduct = (event) => {
    event.preventDefault();

    const newProduct = {
      productName,
      material,
      sellingPrice,
      discountPrice,
      features,
      productDescription,
      image: productImage ? URL.createObjectURL(productImage) : "",
    };

    setProducts([...products, newProduct]);

    // Reset form fields
    setProductName("");
    setMaterial("");
    setSellingPrice("");
    setDiscountPrice("");
    setFeatures("");
    setProductDescription("");
    setProductImage(null);
  };

  return (
    <div className="main-content">
      <Sidebar />
      <header>
        <h1>Quản lí sản phẩm</h1>
      </header>
      <main>
        <section className="form-section">
          <h2>Thêm sản phẩm</h2>
          <form id="productForm" onSubmit={handleAddProduct}>
            <div className="form-group">
              <label htmlFor="productName">Tên sản phẩm:</label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="material">Chất liệu:</label>
              <input
                type="text"
                id="material"
                name="material"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="sellingPrice">Giá bán:</label>
              <input
                type="number"
                id="sellingPrice"
                name="sellingPrice"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="discountPrice">Giá giảm:</label>
              <input
                type="number"
                id="discountPrice"
                name="discountPrice"
                value={discountPrice}
                onChange={(e) => setDiscountPrice(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="features">Đặc điểm nổi bật:</label>
              <textarea
                id="features"
                name="features"
                rows="3"
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="productDescription">Mô tả sản phẩm:</label>
              <textarea
                id="productDescription"
                name="productDescription"
                rows="5"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="productImage">Hình ảnh:</label>
              <input
                type="file"
                id="productImage"
                name="productImage"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <button type="submit">Gửi</button>
          </form>
        </section>
        <section className="table-section">
          <h2>Danh sách sản phẩm</h2>
          <table id="productTable">
            <thead>
              <tr>
                <th>Tên sản phẩm</th>
                <th>Chất liệu</th>
                <th>Giá bán</th>
                <th>Giá giảm</th>
                <th>Đặc điểm nổi bật</th>
                <th>Mô tả sản phẩm</th>
                <th>Hình ảnh</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.productName}</td>
                  <td>{product.material}</td>
                  <td>{product.sellingPrice}</td>
                  <td>{product.discountPrice}</td>
                  <td>{product.features}</td>
                  <td>{product.productDescription}</td>
                  <td>
                    {product.image && (
                      <img src={product.image} alt="Product" width="100" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default ProductManagement;
