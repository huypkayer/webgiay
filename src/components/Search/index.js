import React, { Component } from 'react';
import axios from 'axios';
import './search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: 'all',
      selectedPriceRange: 'all',
      selectedSort: 'price-asc',
      products: [],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5179/api/Products', {
        params: { 
          size: this.state.selectedSize,
          priceRange: this.state.selectedPriceRange,
          sort: this.state.selectedSort,
        },
      });
      this.setState({ products: response.data });
    } catch (error) {
      console.error(error);
    }
  };

  handleSizeChange = (e) => {
    this.setState({ selectedSize: e.target.value }, this.fetchProducts);
  };

  handlePriceChange = (e) => {
    this.setState({ selectedPriceRange: e.target.value }, this.fetchProducts);
  };

  handleSortChange = (e) => {
    this.setState({ selectedSort: e.target.value }, this.fetchProducts);
  };

  render() {
    return (
      <div className="search">
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="size">Chọn Size Giày</label>
            <select id="size" value={this.state.selectedSize} onChange={this.handleSizeChange}>
              <option value="all">Tất cả</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">Khoảng Giá</label>
            <select id="price" value={this.state.selectedPriceRange} onChange={this.handlePriceChange}>
              <option value="all">Tất cả</option>
              <option value="1000000">1.000.000</option>
              <option value="2000000">2.000.000</option>
              <option value="3000000">3.000.000</option>
              <option value="4000000">4.000.000</option>
              <option value="5000000">5.000.000</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="sort">Sắp Xếp Theo</label>
            <select id="sort" value={this.state.selectedSort} onChange={this.handleSortChange}>
              <option value="price-asc">Giá thấp đến cao</option>
              <option value="name-asc">Tên A-Z</option>
              <option value="name-desc">Tên Z-A</option>
            </select>
          </div>
          <button className="search-btn" onClick={this.fetchProducts}>Tìm Giày Ngay</button>
        </div>
      </div>
    );
  }
}

export default Search;
