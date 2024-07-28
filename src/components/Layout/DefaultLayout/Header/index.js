import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import UserInfo from './UserInfo';
import './header.css';

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra xem có dữ liệu người dùng trong local storage không
    const userData = localStorage.getItem('user');
    console.log('Dữ liệu người dùng từ localStorage:', userData); // Kiểm tra dữ liệu trong localStorage
    if (userData) {
      try {
        setUser(JSON.parse(userData)); // Cập nhật dữ liệu người dùng nếu có
      } catch (e) {
        console.error('Lỗi khi phân tích dữ liệu người dùng:', e);
      }
    }
  }, []);

  const handleLogin = (userData) => {
    // Lưu dữ liệu người dùng vào local storage và cập nhật state
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    // Xóa dữ liệu người dùng và cập nhật state
    localStorage.removeItem('user');
    setUser(null);
    navigate('/'); // Chuyển hướng đến trang chính hoặc trang đăng nhập sau khi đăng xuất
  };

  return (
    <header className="header fixed-header">
      <div className="container">
        <div className="header_inner">
          <div className="header_inner_left">
            <div className="logo">
              <img src="./img/icon/logo.svg" alt="logo" className="logo_img" />
              <p>SNEAKER SHOP</p>
            </div>
            <nav className="nav_bar">
              <ul className="navbar_list">
                <li className="navbar_item"><Link to="/" className="navbar_link text-4xl font-extrabold text-gray-900 dark:text-white">HOME</Link></li>
                <li className="navbar_item"><Link to="/nike" className="navbar_link text-4xl font-extrabold text-gray-900 dark:text-white">NIKE</Link></li>
                <li className="navbar_item"><Link to="/adidas" className="navbar_link text-4xl font-extrabold text-gray-900 dark:text-white">ADIDAS</Link></li>
                <li className="navbar_item"><Link to="/yeezy" className="navbar_link text-4xl font-extrabold text-gray-900 dark:text-white">YEEZY</Link></li>
              </ul>
            </nav>
          </div>
          <div className="format">
            <div className="search">
              <input type="text" placeholder="Tìm kiếm" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="top_cart">
              <Link to="/cart" className="link_cart">
                <img src="./img/icon/Buy.svg" alt="cart" className="cart_icon" />
              </Link>
            </div>
            <div className="auth_section ">
              {user ? (
                <UserInfo user={user} onLogout={handleLogout} />
              ) : (
                <LoginComponent onLogin={handleLogin} />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
