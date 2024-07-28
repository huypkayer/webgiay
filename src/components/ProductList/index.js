import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './productlist.css';

const ProductList = ({ categoryName }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5179/api/Products', {
          params: {
            categoryName: categoryName
          }
        });
        console.log('Dữ liệu sản phẩm:', response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    return <div>Lỗi khi tải sản phẩm</div>;
  }

  // Kết hợp sản phẩm với hình ảnh của chúng, sử dụng hình ảnh đầu tiên làm hình ảnh chính
  const productsWithImages = products.map(product => {
    const firstImage = product.productImageUrls && product.productImageUrls.length > 0 
      ? product.productImageUrls[0] 
      : 'default-image-url.jpg';
    return {
      ...product,
      imageUrl: firstImage
    };
  });

  return (
    <div className='product'>
      <div className="product-list">
        {productsWithImages.length > 0 ? (
          productsWithImages.map(product => (
            <div className="product-list-item" key={product.productId}>
              <div className="product-list-img">
                <a href={`/productdetail/${product.productId}`} className="product-link">
                  <img src={product.imageUrl} alt={product.name} className="product-img" />
                </a>
              </div>
              <div className="product-content">
                <a href={`/productdetail/${product.productId}`}>{product.name}</a>
                <span className="product-price">{product.price} đ</span>
              </div>
            </div>
          ))
        ) : (
          <div>Không tìm thấy sản phẩm</div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
