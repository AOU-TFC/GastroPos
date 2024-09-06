import React from 'react';
import "Styles/Desktop/Table.css";
function Table({ rows, headers }) {
    return (
        <React.Fragment>
            <div className='table-wrapper'>
                <table>
                    <thead>
                        <tr style={{ gridTemplateColumns: `repeat(${headers.length +1},1fr)` }}>
                            {headers.map((key) => (
                                <th key={key}>
                                    {key}
                                </th>
                            ))}
                            {headers ? null : <th>Action</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((element, index) => (
                            <tr key={index}
                                style={{ gridTemplateColumns: `repeat(${headers.length + 1},1fr)` }}>
                                {headers.map((key) => (
                                    <td key={key}>
                                        element[key]
                                    </td>
                                ))}
                                <td className='actions'>
                                    <button className='delete-btn'><ion-icon name="trash-outline"></ion-icon></button>
                                    <button className='edit-btn'><ion-icon name="create-outline"></ion-icon></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default Table