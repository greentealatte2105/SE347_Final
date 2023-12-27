import React from 'react';
import "./instruction.styles.css";

const Instructions = () => {
  return (
    <div className="content-page rte">
      <p>&nbsp;</p>
      <ol start="1">
        <li><u><strong>Đối với các sản phẩm có sẵn:</strong></u></li>
      </ol>
      <div className="step1">
        <p><strong>Bước 1:</strong> Truy cập website và lựa chọn sản phẩm cần mua để mua hàng</p>
        <p><strong>Bước 2:</strong> Click vào sản phẩm muốn mua, màn hình hiển thị ra pop up với các lựa chọn sau</p>
        <ul>
            <li>Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần&nbsp;<em>Tiếp tục</em> mua hàng để lựa chọn thêm sản phẩm vào giỏ hàng</li>
            <li>Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Tắt pop up và ấn vào giỏ hàng tại vị trí ngoài cùng bên phải trên thanh bar</li>
            <li>Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm này vui lòng bấm vào:&nbsp;<em>Thực hiện thanh toán</em></li>
        </ul>
        <p><strong>Bước 3:</strong> Lựa chọn thông tin tài khoản thanh toán</p>
        <ul>
            <li>Nếu bạn đã có tài khoản: Bỏ qua phần&nbsp;<em>Shipping information</em>&nbsp;đã được lưu (hoặc nếu đổi địa chỉ, vui lòng nhập lại địa chỉ khác bạn muốn bọn mình ship đến)</li>
            <li>Nếu bạn chưa có tài khoản: Vui lòng điền các thông tin cá nhân trong mục&nbsp;<em>Shipping information</em>&nbsp;để website lưu tài khoản của bạn. Khi có tài khoản bạn sẽ dễ dàng mua hàng trong các lần tiếp theo</li>
        </ul>
        <p><strong>Bước 4:</strong> Lựa chọn hình thức thanh toán và vận chuyển (<em>Shipping Method</em>) cho đơn hàng của mình</p>
        <p><strong>Bước 5:</strong> Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng (<em>Complete Order</em>)</p>
        <p><u><strong>Note:</strong></u> Nếu có mã Discount và muốn sử dụng, vui lòng nhập mã trước khi hoàn thành đơn hàng.</p>
        <p>&nbsp;</p>
      </div>
      <ol start="2">
        <li><u><strong>Đối với các sản phẩm không có sẵn:</strong></u></li>
      </ol>
      <div className="step2">
        <p><strong>Bước 1:</strong> Nếu sản phẩm bạn tìm không có sẵn, bạn có thể inbox TBS qua Facebook hoặc direct qua Instagram</p>
        <p><strong>Bước 2:</strong> Gửi cho TBS tựa đề sách và bìa sách bạn muốn mua</p>
        <p><strong>Bước 3:</strong> TBS sẽ tìm và báo giá cho bạn, nếu bạn muốn order, bọn mình sẽ nhận cọc từ 50% - 100% giá trị cuốn sách, và sách sẽ về trong thời gian 2-3 tuần</p>
        <p><strong>Bước 4:</strong> Khi đơn hàng của bạn về, TBS sẽ thông báo đến bạn và lấy thông tin nhận sách để giao sách đến cho bạn.</p>
        <p>&nbsp;</p>
        <p>Trân trọng cảm ơn.</p>
        <p><strong>The Bookshelf Hanoi</strong></p>
      </div>
    </div>
  );
};

export default Instructions;
