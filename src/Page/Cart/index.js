import './cart.css'

function Cart() {

  return (
    <div className='card'>
      <div className="cart_section">
        <div className="cart_section_container">
          <div className="cart_section_rowgrid">
            <div className="cart_section_left">
              <h2>CHI TIẾT ĐƠN HÀNG</h2>
              <div className="cart_section_left_detail">
                <div className="cart_section_left_detail_img">
                  {/* <span>ẢNH</span> */}
                </div>
                <div>
                  <span>SẢN PHẨM</span>
                </div>
                <div>
                  <span>THÀNH TIỀN</span>
                </div>
                <div>
                  <span>XÓA</span>
                </div>
              </div>
              <button
                style={{
                  marginTop: "30px",
                  width: "200px",
                  height: "50px",
                  letterSpacing: "2px",
                  backgroundColor: "#272D34",
                  fontWeight: "800",
                  border: "none",
                  borderRadius: "25px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Cập nhật giỏ hàng
              </button>
            </div>
            <div className="cart_section_right">
              <h2>THÔNG TIN GIAO HÀNG</h2>
              <div className="cart_section_right_input_name_phone">
                <input type="text" placeholder="Tên" name="" id="" />
                <input type="text" placeholder="Điện thoại" name="" id="" />
              </div>
              <div className="cart_section_right_input_email">
                <input
                  type="text"
                  placeholder="Nhập địa chỉ email"
                  name=""
                  id=""
                />
              </div>
              <div className="cart_section_right_select">
                <select name="" id="">
                  <option value="">Tỉnh/TP</option>
                </select>
                <select name="" id="">
                  <option value="">Quận/Huyện</option>
                </select>
                <select name="" id="">
                  <option value="">Phường/Xã</option>
                </select>
              </div>
              <div className="cart_section_right_input_add">
                <input type="text" placeholder="Địa chỉ" name="" id="" />
              </div>
              <div className="cart_section_right_input_note">
                <input type="text" placeholder="Ghi chú" name="" id="" />
              </div>
              <button className="cart_section_right_btn">Gửi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;



