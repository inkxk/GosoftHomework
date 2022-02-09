import React from "react";
import './TableRow.css';

function TableRow(props) {
    return (
        <tr className="table-row">
            <td>รูปภาพ</td>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>หมวดหมู่</td>
            <td>{props.price}</td>
            <td>จำนวนสินค้า/หน่วย</td>
            <td>สถานะ</td>
            <td>แสดงสินค้า</td>
        </tr>
    );
}

export default TableRow;
