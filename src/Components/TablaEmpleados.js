import React from "react";

const TablaEmpleados=({data,columns})=>{
    return(
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th 
                key={index} 
                style={{
                  border: '1px solid #ddd', 
                  padding: '8px', 
                  backgroundColor: '#f2f2f2', 
                  textAlign: 'left'
                }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td 
                  key={colIndex} 
                  style={{
                    border: '1px solid #ddd', 
                    padding: '8px'
                  }}
                >
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>      
    );    
};
export default TablaEmpleados;