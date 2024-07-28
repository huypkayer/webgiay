import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    phone: '',
    gender: 'other',
    profilePicture: './img/icon/logo.svg', // Đường dẫn ảnh mặc định
  });
  const [addressList, setAddressList] = useState([]);
  const [isAddressFormVisible, setIsAddressFormVisible] = useState(false);
  const [addressForm, setAddressForm] = useState({
    name: '',
    phone: '',
    address: '',
  });
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const [activeSection, setActiveSection] = useState('profile');
  const [loading, setLoading] = useState(true);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const userId = localStorage.getItem('UserId');
        if (!userId) {
          throw new Error('Người dùng chưa đăng nhập');
        }
        console.log('Đang tải hồ sơ cho UserId:', userId); // Debug console.log
        const response = await axios.get(`http://localhost:5179/api/Users/${userId}`);
        console.log('Dữ liệu hồ sơ nhận được:', response.data); // Debug console.log
        setProfile(prevState => ({
          ...prevState,
          ...response.data,
          profilePicture: response.data.profilePicture || './img/icon/logo.svg', // Đặt ảnh mặc định nếu không có
        }));
      } catch (error) {
        console.error('Lỗi khi tải dữ liệu hồ sơ', error);
        alert('Không thể tải thông tin hồ sơ.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProfile(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('UserId');
      if (!userId) {
        throw new Error('Người dùng chưa đăng nhập');
      }

      const updatedUserData = {
        username: profile.username,
        email: profile.email,
        phone: profile.phone,
        gender: profile.gender,
        profilePicture: profile.profilePicture, // Bao gồm URL ảnh đại diện
      };

      console.log('Dữ liệu sẽ được gửi để cập nhật:', updatedUserData); // Debug console.log

      const response = await axios.put(`http://localhost:5179/api/Users/${userId}`, updatedUserData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log('Phản hồi từ API sau khi cập nhật:', response.data); // Debug console.log
      alert('Dữ liệu hồ sơ đã được cập nhật thành công!');
    } catch (error) {
      console.error('Lỗi khi cập nhật dữ liệu hồ sơ', error);
      setFormError('Lỗi khi cập nhật dữ liệu hồ sơ. Vui lòng kiểm tra lại thông tin.');
    }
  };

  const handleAddressInputChange = (e) => {
    const { id, value } = e.target;
    setAddressForm(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const toggleAddressForm = () => {
    setIsAddressFormVisible(prevState => !prevState);
    if (selectedAddressIndex !== null) {
      const address = addressList[selectedAddressIndex];
      setAddressForm({
        name: address.name,
        phone: address.phone,
        address: address.address,
      });
    } else {
      setAddressForm({
        name: '',
        phone: '',
        address: '',
      });
    }
  };

  const addOrUpdateAddress = () => {
    if (selectedAddressIndex !== null) {
      const updatedAddresses = [...addressList];
      updatedAddresses[selectedAddressIndex] = addressForm;
      setAddressList(updatedAddresses);
      setSelectedAddressIndex(null);
    } else {
      setAddressList(prevList => [
        ...prevList,
        { ...addressForm, isDefault: prevList.length === 0 },
      ]);
    }
    toggleAddressForm();
  };

  const deleteAddress = (index) => {
    const updatedAddresses = addressList.filter((_, i) => i !== index);
    setAddressList(updatedAddresses);
  };

  const setDefaultAddress = (index) => {
    const updatedAddresses = addressList.map((address, i) => ({
      ...address,
      isDefault: i === index,
    }));
    setAddressList(updatedAddresses);
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    const currentPassword = e.target.currentPassword.value;
    const newPassword = e.target.newPassword.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (newPassword !== confirmPassword) {
      alert("Mật khẩu mới và xác nhận mật khẩu không khớp!");
      return;
    }

    try {
      const userId = localStorage.getItem('UserId');
      if (!userId) {
        throw new Error('Người dùng chưa đăng nhập');
      }

      console.log('Đổi mật khẩu cho UserId:', userId); // Debug console.log
      console.log('Dữ liệu đổi mật khẩu:', { currentPassword, newPassword }); // Debug console.log

      await axios.post(`http://localhost:5179/api/Users/${userId}/ChangePassword`, {
        currentPassword,
        newPassword,
      });

      alert("Mật khẩu đã được đổi thành công!");
      e.target.reset();
    } catch (error) {
      console.error('Lỗi khi thay đổi mật khẩu', error);
      alert('Đổi mật khẩu thất bại. Vui lòng kiểm tra dữ liệu nhập.');
    }
  };

  const handleMenuClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='profile'>
      <div className="profile-container">
        <div className="profile-sidebar">
          <div className="profile-picture">
            <img
              src={profile.profilePicture || './img/icon/logo.svg'}
              alt="Avatar"
            />
          </div>
          <div className="profile-menu">
            <ul>
              <li
                className={`profile-menu-item ${activeSection === 'profile' ? 'active' : ''}`}
                onClick={() => handleMenuClick('profile')}
              >
                Hồ Sơ
              </li>
              <li
                className={`profile-menu-item ${activeSection === 'address' ? 'active' : ''}`}
                onClick={() => handleMenuClick('address')}
              >
                Địa Chỉ
              </li>
              <li
                className={`profile-menu-item ${activeSection === 'password' ? 'active' : ''}`}
                onClick={() => handleMenuClick('password')}
              >
                Đổi Mật Khẩu
              </li>
              <li
                className={`profile-menu-item ${activeSection === 'orders' ? 'active' : ''}`}
                onClick={() => handleMenuClick('orders')}
              >
                Thông Tin Đơn Hàng
              </li>
            </ul>
          </div>
        </div>
        <div className="profile-main-content">
          {loading && <p>Đang tải dữ liệu...</p>}

          {activeSection === 'profile' && (
            <div className="profile-content-section">
              <h2>Hồ Sơ Của Tôi</h2>
              <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
              {formError && <div className="error-message">{formError}</div>}
              <form id="profile-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Tên Đăng Nhập</label>
                  <input
                    type="text"
                    id="username"
                    value={profile.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={profile.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Số Điện Thoại</label>
                  <input
                    type="text"
                    id="phone"
                    value={profile.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Giới Tính</label>
                  <select
                    id="gender"
                    value={profile.gender}
                    onChange={handleInputChange}
                  >
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
                <button type="submit">Lưu Thay Đổi</button>
              </form>
            </div>
          )}

          {activeSection === 'address' && (
            <div className="profile-content-section">
              <h2>Danh Sách Địa Chỉ</h2>
              <button onClick={toggleAddressForm}>Thêm Địa Chỉ</button>
              {addressList.length > 0 ? (
                <ul className="address-list">
                  {addressList.map((address, index) => (
                    <li key={index} className={address.isDefault ? 'default-address' : ''}>
                      <p>{address.name}</p>
                      <p>{address.phone}</p>
                      <p>{address.address}</p>
                      <button onClick={() => setDefaultAddress(index)}>Đặt Làm Địa Chỉ Mặc Định</button>
                      <button onClick={() => {
                        setSelectedAddressIndex(index);
                        toggleAddressForm();
                      }}>Sửa</button>
                      <button onClick={() => deleteAddress(index)}>Xóa</button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Chưa có địa chỉ nào. Vui lòng thêm địa chỉ mới.</p>
              )}
              {isAddressFormVisible && (
                <div className="address-form">
                  <h3>{selectedAddressIndex !== null ? 'Sửa Địa Chỉ' : 'Thêm Địa Chỉ Mới'}</h3>
                  <form onSubmit={addOrUpdateAddress}>
                    <div className="form-group">
                      <label htmlFor="name">Tên</label>
                      <input
                        type="text"
                        id="name"
                        value={addressForm.name}
                        onChange={handleAddressInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Số Điện Thoại</label>
                      <input
                        type="text"
                        id="phone"
                        value={addressForm.phone}
                        onChange={handleAddressInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Địa Chỉ</label>
                      <input
                        type="text"
                        id="address"
                        value={addressForm.address}
                        onChange={handleAddressInputChange}
                      />
                    </div>
                    <button type="submit">Lưu Địa Chỉ</button>
                    <button type="button" onClick={toggleAddressForm}>Hủy</button>
                  </form>
                </div>
              )}
            </div>
          )}

          {activeSection === 'password' && (
            <div className="profile-content-section">
              <h2>Đổi Mật Khẩu</h2>
              <form onSubmit={handlePasswordChange}>
                <div className="form-group">
                  <label htmlFor="currentPassword">Mật Khẩu Hiện Tại</label>
                  <input
                    type="password"
                    id="currentPassword"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="newPassword">Mật Khẩu Mới</label>
                  <input
                    type="password"
                    id="newPassword"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Xác Nhận Mật Khẩu Mới</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    required
                  />
                </div>
                <button type="submit">Đổi Mật Khẩu</button>
              </form>
            </div>
          )}

          {activeSection === 'orders' && (
            <div className="profile-content-section">
              <h2>Lịch Sử Đơn Hàng</h2>
              {/* Hiển thị thông tin đơn hàng ở đây */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;






