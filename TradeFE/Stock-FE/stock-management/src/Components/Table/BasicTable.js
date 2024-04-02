import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
// import test_data from "./MOCK_DATA.json";

import "./table.css";

const BasicTable = (props) => {
  
  const [data] = useState(props.tableData);
  const [columns] = useState(props.tableColumn);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

    const formatDateTimeString = (dateTimeString) => {
      try{
        const dateTime = new Date(dateTimeString);
        if (isNaN(dateTime.getTime())) {
          return dateTimeString;
        }
        const formattedDate = dateTime.toLocaleDateString('en', { year: '2-digit', month: '2-digit', day: '2-digit' });
        const formattedTime = dateTime.toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        return `${formattedDate} ${formattedTime}`;
      }
      catch(error){
        return dateTimeString
      }
    };

  return (
    <table {...getTableProps} className={`table table-striped table-${props.themeMode}`}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps}>
        {rows &&
          rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  if (typeof cell.value === "string") {
                    return (
                      <td {...cell.getCellProps()}>
                        {formatDateTimeString(cell.value)}
                      </td>
                    );
                  } else {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  }
                })}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default BasicTable;
