// hàm gọi data lấy dự liệu từ Data.json
// Khai báo constructor function Data
function Data() {
  // Phương thức fetchJSON của Data
  this.fetchJSON = function() {
      // Sử dụng fetch để tải dữ liệu từ tệp JSON
      return fetch("./../data/Data.json").then((response) => {
          // Kiểm tra xem fetch có thành công không
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          // Trả về dữ liệu JSON
          return response.json();
      }).catch((error) => {
          // Xử lý lỗi nếu fetch không thành công
          console.error('Error fetching data:', error);
      });
  };
}
