- Table này được viết lại bằng Atomic, chỉ nắm giữ các style về khung lưới để hiển thị data và đặt sẵn vị trí các checkbox, action và cấu hình của data.
- Checkbox và các Row Action của từng hàng chỉ để props dạng elementType và pass sẵn toàn bộ data của row vào để dev có thể control hoàn toàn.

Cấu trúc thư mục:

- index: chứa table ResponsiveTable, sử dụng cho các table có nhiều cột nhằm hỗ trợ khi xem mobile.
- tableSampleData: file mẫu về cấu trúc dữ liệu xài trong table này.
- tableConfig: chứa các cấu hình về propTypes và defaultProps của table.
- EnhancedTableExport: thanh công cụ xuất dữ liệu table.
- EnhancedTableToolbar: thanh công cụ (tiêu đề, action, filter).
- ViewAsTable, ViewAsList: 2 file cấu trúc nên ResponsiveTable.
