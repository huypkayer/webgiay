// AdminDashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import styles from "./addnv.module.css"; 

const AdminDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [employeeForm, setEmployeeForm] = useState({
    username: "",
    email: "",
    phone: "",
    gender: "other",
    salary: "",
    role: "",
    createdAt: "",
    updatedAt: "",
    isActive: true,
  });
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5179/api/Users?role=employee");
        setEmployees(response.data);
      } catch (error) {
        console.error("Lỗi khi tải danh sách nhân viên", error);
        alert("Không thể tải danh sách nhân viên.");
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
      createdAt: employee.createdAt,
      updatedAt: employee.updatedAt,
      isActive: employee.isActive,
    });
    setIsEditMode(true);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEmployeeForm((prevState) => ({
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
        alert("Cập nhật thông tin nhân viên thành công!");
      } else {
        await axios.post("http://localhost:5179/api/Users", employeeForm, {
          headers: { "Content-Type": "application/json" },
        });
        alert("Thêm nhân viên mới thành công!");
      }

      const response = await axios.get("http://localhost:5179/api/Users?role=employee");
      setEmployees(response.data);

      setIsEditMode(false);
      setSelectedEmployee(null);
      setEmployeeForm({
        username: "",
        email: "",
        phone: "",
        gender: "other",
        salary: "",
        role: "",
        createdAt: "",
        updatedAt: "",
        isActive: true,
      });
    } catch (error) {
      console.error("Lỗi khi xử lý thông tin nhân viên", error);
      setFormError("Lỗi khi xử lý thông tin nhân viên. Vui lòng kiểm tra lại thông tin.");
    }
  };

  return (
    <div className={styles.adminDashboardContainer}>
      <Sidebar />
      <h1>Quản Lý Nhân Viên</h1>

      {formError && <div className={styles.errorMessage}>{formError}</div>}

      <div className={styles.editEmployeeForm}>
        <h2>{isEditMode ? "Chỉnh Sửa Thông Tin Nhân Viên" : "Thêm Nhân Viên Mới"}</h2>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Tên Đăng Nhập</label>
            <input
              type="text"
              id="username"
              value={employeeForm.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={employeeForm.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Số Điện Thoại</label>
            <input
              type="text"
              id="phone"
              value={employeeForm.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="gender">Giới Tính</label>
            <select id="gender" value={employeeForm.gender} onChange={handleInputChange} required>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="salary">Lương</label>
            <input
              type="number"
              id="salary"
              value={employeeForm.salary}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="role">Vai Trò</label>
            <input
              type="text"
              id="role"
              value={employeeForm.role}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="createdAt">Ngày Tạo</label>
            <input
              type="date"
              id="createdAt"
              value={employeeForm.createdAt}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="updatedAt">Ngày Cập Nhật</label>
            <input
              type="date"
              id="updatedAt"
              value={employeeForm.updatedAt}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="isActive">Tình Trạng Hoạt Động</label>
            <select id="isActive" value={employeeForm.isActive} onChange={handleInputChange} required>
              <option value={true}>Hoạt Động</option>
              <option value={false}>Ngừng Hoạt Động</option>
            </select>
          </div>
          <button type="submit">{isEditMode ? "Cập Nhật Thông Tin" : "Thêm Nhân Viên"}</button>
          {isEditMode && (
            <button type="button" onClick={() => setIsEditMode(false)}>
              Hủy
            </button>
          )}
        </form>
      </div>

      <div className={styles.employeeList}>
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
            {employees.map((employee) => (
              <tr key={employee.userId}>
                <td>{employee.username}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.gender}</td>
                <td>{employee.salary}</td>
                <td>{employee.role}</td>
                <td>{employee.createdAt}</td>
                <td>{employee.updatedAt}</td>
                <td>{employee.isActive ? "Hoạt Động" : "Ngừng Hoạt Động"}</td>
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
