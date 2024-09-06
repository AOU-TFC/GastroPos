import Table from 'Components/Table';
import React, { useState } from 'react';
import "Styles/Desktop/Staff.css";

function Staff() {
    const [data, setData] = useState({
        Name: "",
        password: "",
        admin: 0
    });
    const [rows, setRows] = useState([]);
    const rowsKeys = rows.length > 0 ? Object.keys(rows[0].filter((key)=> key !=="ID")): []
    
    const headers = ["FullName", "Email", "Status"]
    
    return (
    <React.Fragment>
        <div className='staff-container'>
            <div className='form-box'>
                <form className='form'>
                    <hassan className='title'>Welcome to Staff</hassan>
                    <div className='form-container'>
                        <input name='Name' type='text' className='input' placeholder='Full Name'/>
                        <input name='password' type='password' className='input' placeholder='Password'/>
                        <div className='status-wrapper'>
                            <span>
                                <input type='radio' name='admin' value="0"/>Staff</span>
                            <span>
                                <input type='radio' name='admin' value="1"/>Admin</span>
                        </div>
                    </div>
                    <button>Add Staff</button>
                </form>
            </div>
            <Table rows={rows} headers={headers}/>
        </div>
    </React.Fragment>
  )
}

export default Staff