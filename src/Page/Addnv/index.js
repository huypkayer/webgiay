import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import addnv from './addnv.module.css';
const AdminDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [employeeForm, setEmployeeForm] = useState({
    username: '',
    email: '',
    phone: '',
    gender: 'other',
    salary: '',
    role: '',
    street: '',
    city: '',
    state: '',
    country: '',
    avatarUrl: ''
  });
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5179/api/Users?role=employee');
        setEmployees(response.data);
      } catch (error) {
        console.error('Lỗi khi tải danh sách nhân viên', error);
        alert('Không thể tải danh sách nhân viên.');
      }
    };

    fetchEmployees();
  }, []);

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setEmployeeForm({
      username: employee.username,
      email: employee.email,
      phone: employee.phone,
      gender: employee.gender,
      salary: employee.salary,
      role: employee.role,
      street: employee.street || '',
      city: employee.city || '',
      state: employee.state || '',
      country: employee.country || '',
      avatarUrl: employee.avatarUrl || ''
    });
    setIsEditMode(true);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEmployeeForm(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode && selectedEmployee) {
        await axios.put(`http://localhost:5179/api/Users/${selectedEmployee.userId}`, employeeForm, {
          headers: { "Content-Type": "application/json" },
        });
        alert('Cập nhật thông tin nhân viên thành công!');

        const response = await axios.get('http://localhost:5179/api/Users?role=employee');
        setEmployees(response.data);

        setIsEditMode(false);
        setSelectedEmployee(null);
        setEmployeeForm({
          username: '',
          email: '',
          phone: '',
          gender: 'other',
          salary: '',
          role: '',
          street: '',
          city: '',
          state: '',
          country: '',
          avatarUrl: ''
        });
      }
    } catch (error) {
      console.error('Lỗi khi xử lý thông tin nhân viên', error);
      setFormError('Lỗi khi xử lý thông tin nhân viên. Vui lòng kiểm tra lại thông tin.');
    }
  };

  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      <h1>Dashboard Quản Lý Nhân Viên</h1>

      {formError && <div className="error-message">{formError}</div>}

      {isEditMode && (
        <div className="edit-employee-form">
          <h2>Chỉnh Sửa Thông Tin Nhân Viên</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="username">Tên Đăng Nhập</label>
              <input
                type="text"
                id="username"
                value={employeeForm.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={employeeForm.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Số Điện Thoại</label>
              <input
                type="text"
                id="phone"
                value={employeeForm.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Giới Tính</label>
              <select
                id="gender"
                value={employeeForm.gender}
                onChange={handleInputChange}
              >
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="salary">Lương</label>
              <input
                type="number"
                id="salary"
                value={employeeForm.salary}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Vai Trò</label>
              <input
                type="text"
                id="role"
                value={employeeForm.role}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="street">Đường</label>
              <input
                type="text"
                id="street"
                value={employeeForm.street}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">Thành Phố</label>
              <input
                type="text"
                id="city"
                value={employeeForm.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">Tỉnh/Bang</label>
              <input
                type="text"
                id="state"
                value={employeeForm.state}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Quốc Gia</label>
              <input
                type="text"
                id="country"
                value={employeeForm.country}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="avatarUrl">URL Hình Đại Diện</label>
              <input
                type="text"
                id="avatarUrl"
                value={employeeForm.avatarUrl}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Cập Nhật Thông Tin</button>
            <button type="button" onClick={() => setIsEditMode(false)}>Hủy</button>
          </form>
        </div>
      )}
      <div className="employee-list">
        <h2>Danh Sách Nhân Viên</h2>
        <table>
          <thead>
            <tr>
              <th>Tên Đăng Nhập</th>
              <th>Email</th>
              <th>Số Điện Thoại</th>
              <th>Giới Tính</th>
              <th>Lương</th>
              <th>Vai Trò</th> 
              <th>Ngày Tạo</th>        
              <th>Ngày Cập Nhật</th>    
              <th>Tình Trạng Hoạt Động</th> 
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.userId}>
                <td>{employee.username}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.gender}</td>
                <td>{employee.salary}</td>
                <td>{employee.role}</td>
                <td>{employee.createdAt}</td>  
                <td>{employee.updatedAt}</td>   
                <td>{employee.isActive ? 'Hoạt Động' : 'Ngừng Hoạt Động'}</td>
                <td>
                  <button onClick={() => handleEditClick(employee)}>Chỉnh Sửa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
