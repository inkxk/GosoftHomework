import React from "react";
import bootstrap from "bootstrap";
import TableRow from "./TableRow";
import './App.css';

function App() {
    return (
        <div className="container-fluid">
            <table>
                <tr className="table-head">
                    <th>รูปภาพ</th>
                    <th>รหัสสินค้า</th>
                    <th>ชื่อสินค้า</th>
					<th>หมวดหมู่</th>
					<th>ราคา</th>
					<th>จำนวนสินค้า/หน่วย</th>
					<th>สถานะ</th>
					<th>แสดงสินค้า</th>
                </tr>
                <TableRow id="0" name="A" price="5" />
				<TableRow id="01" name="BB" price="120" />
				<TableRow id="002" name="CCC" price="60" />
            </table>
        </div>
    );
}

export default App;
