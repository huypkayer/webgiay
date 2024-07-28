import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [productImages, setProductImages] = useState([]);
  const [mainImage, setMainImage] = useState('./img/default.jpg');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5179/api/Products/${id}`);
        if (response.data) {
          setProduct(response.data);
          setProductImages(response.data.productImageUrls || []);
          // Set initial main image
          if (response.data.productImageUrls && response.data.productImageUrls.length > 0) {
            setMainImage(response.data.productImageUrls[0]);
          }
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>Lỗi khi tải chi tiết sản phẩm</div>;
  if (!product) return <div>Không tìm thấy sản phẩm</div>;

  // Determine if any size is available
  const anySizeAvailable = product.productShoeSizes.some(size => size.stockQuantity > 0);

  return (
    <section className="product-details">
      <div className="product-details-container">
        <div className="product-details-grid">
          <div className="product-details-left">
            <img className="main-image" src={mainImage} alt={product.name} />
            <div className="product-details-images">
              {productImages.length > 0 ? (
                productImages.slice(0, 5).map((img, index) => (
                  <img
                    key={index}
                    className={mainImage === img ? 'active' : ''}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => handleThumbnailClick(img)}
                  />
                ))
              ) : (
                <p>Không có hình ảnh</p>
              )}
            </div>
          </div>
          <div className="product-details-right">
            <div className="product-details-info">
              <h1>{product.name}</h1>
              <p>{product.price} đ</p>
            </div>
            <div className="product-details-buttons">
              {product.productShoeSizes && product.productShoeSizes.length > 0 ? (
                product.productShoeSizes.map((size, index) => (
                  <button
                    key={index}
                    className={`product-size-btn ${size.stockQuantity === 0 ? 'out-of-stock' : ''}`}
                    disabled={size.stockQuantity === 0}
                    onClick={() => {
                      if (size.stockQuantity > 0) {
                        // Handle size selection here
                      }
                    }}
                  >
                    {size.size} ({size.stockQuantity})
                  </button>
                ))
              ) : (
                <p>Không có kích cỡ khả dụng</p>
              )}
            </div>
            <div className="product-details-quantity">
              <h2>Số lượng:</h2>
              <div className="product-quantity-input">
                <input type="number" defaultValue="1" />
              </div>
            </div>
            <div className="product-details-cart">
              <button
                className="add-to-cart-btn"
                onClick={() => onAddToCart(product)}
                disabled={!anySizeAvailable}
              >
                <i className="fa-solid fa-cart-plus"></i>Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
