# Trailer movies
Dự án được xây dựng từ reactJS + Nodejs (express)

React JS: Đã có một dự án xây bằng react từ trước nhưng sử dụng hoàn toàn 100% API ( Name Project: Webmovie )
- Lấy dữ liệu từ API themovies api
- Hiển thị movie và thông tin movie bằng thao tác click vào ảnh
- Chạy movie và lấy dữ liệu movie đã có trên youtube để hiển thị trailer trên web
- Tìm kiếm movie yêu thích hoặc muốn xem bằng trang search
- Bắt lỗi và hiển thị lỗi cho developer

NodeJS: Chức năng chính của dự án này ( Xây, lọc và trả lại API đúng yêu cầu bên react )
- Tạo cơ sở dữ liệu đã thu thập từ API tổng
- Lấy dữ liệu đã lấy và thao tác với chúng cho giống API ở trên 
  + Lọc các bộ phim có rate cao bằng middleware
  + Lọc các bộ phim có lượng người xem phổ biến nhất
  + Tạo chức năng tìm kiếm bằng nhận keyword từ form search người dùng gửi về
  + Gửi các dữ liệu lên cho người dùng và hiển thị như cũ bằng
  + Tạo lại chức năng xem trailer bằng cách ấn vào ảnh
  + Bắt các lỗi phía browser và server. Gửi lên phía browse để front end dễ kiểm tra các chức xem đã hoạt động đúng chưa
- Chỉnh sửa các lỗi liên quan đến route
- Kết nối thành công giữa react và nodeJS bằng axios thay vì fetch
- Test bằng post man

// Đang cập nhật thêm feature trong tương lai
