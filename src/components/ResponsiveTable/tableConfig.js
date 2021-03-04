import PropTypes from 'prop-types';
// import AtomCheckbox from '../../atoms/Checkbox';
import { columnsSample, rowsSample } from './tableSampleData';

/* table config */
export const tablePropTypes = {
  rows: PropTypes.array, // các hàng dữ liệu
  columns: PropTypes.array, // define cột
  title: PropTypes.string, // tiêu đề
  showResultNumber: PropTypes.bool, // số hàng đang xem
  showNumberOrder: PropTypes.bool, // số thứ tự table row
  dense: PropTypes.bool, // thu hẹp table
  striped: PropTypes.bool, // màu đan xen các hàng
  CheckboxAllComponent: PropTypes.elementType, // dev tự control
  CheckboxItemComponent: PropTypes.elementType, // đã pass toàn bộ data của row, dev tự control
  RowActionComponent: PropTypes.elementType, // đã pass toàn bộ data của row, dev tự control
  noDataText: PropTypes.node,
};
export const tableDefaultProps = {
  rows: rowsSample,
  columns: columnsSample,
  title: '',
  showResultNumber: false,
  showNumberOrder: false,
  dense: false,
  striped: false,
  noDataText: 'No data found',
  // CheckboxAllComponent: AtomCheckbox,
  // CheckboxItemComponent: AtomCheckbox,
  // RowActionComponent: ví dụ Component thêm sửa xóa hàng
};

// export const tableProps = {
//   rows,
//   columns,
//   title,
//   showResultNumber,
//   dense,
//   striped,
//   showNumberOrder,
//   CheckboxAllComponent,
//   CheckboxItemComponent,
//   noDataText,
// };
