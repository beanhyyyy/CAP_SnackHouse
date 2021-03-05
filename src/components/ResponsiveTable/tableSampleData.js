import React from 'react';

/* data sample 
By Tiến Lê - 01/02/2021 
- column : mảng chứa các cột của table
- rows : mảng các row data tương ứng với số cột
**** Định nghĩa các field đặc biệt:
+ id: id cột
+ label: tên của cột
+ format: tùy biến lại nội dung bên trong ô với value được trả về
+ props: truyền các props mà TableCell API hỗ trợ
+ styles: styled cho cột, ví dụ width, minWidth, maxWidth...
*/

/* generate Array Objects function */
export function createData(c1, c2, c3, c4) {
  return { c1, c2, c3, c4 };
}

/* format mảng dữ liệu, mỗi phần tử là một hàng */
export const rowsSample = [
  createData(1, 'ItemCol2', 'ItemCol3', 'ItemCol4'),
  createData(2, 'ItemCol2', 'ItemCol3', 'ItemCol4'),
  createData(3, 'ItemCol2', 'ItemCol3', 'ItemCol4'),
  createData(4, 'ItemCol2', 'ItemCol3', 'ItemCol4'),
];

/* format của cột */
export const columnsSample = [
  {
    id: 'c1',
    label: 'Col 1',
    format: value => (
      <React.Fragment>
        Tùy ý custom giá trị <b>{value * 2}</b> và truyền <b>component</b>
      </React.Fragment>
    ),
    props: {
      align: 'center',
      style: {
        width: 300,
        color: 'red',
        fontWeight: 400,
      },
    },
  },
  {
    id: 'c2',
    label: 'Col 2',
  },
  {
    id: 'c3',
    label: 'Col 3',
  },
  {
    id: 'c4',
    label: 'Col 4',
  },
];
