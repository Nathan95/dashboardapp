import React from 'react';
import '../css/Table.css';

const Table = ({
  children
}) => {
  return (
    <div className="tableContainer">
        {children}
    </div>
  )
}

export default Table;