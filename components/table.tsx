import DataTable, { createTheme } from 'react-data-table-component';

const customStyles = {

};

export default function Table(props) {
  return (
    <DataTable
      selectableRows
      selectableRowsHighlight
      onSelectedRowsChange={({ selectedCount, selectedRows }) => props.setSelectedRow(selectedRows)}
      onRowDoubleClicked={(row) => {
        props.setEachRow(row)
        props.setIsOpen(true)
      }}
      pagination
      // fixedHeader
      highlightOnHover
      pointerOnHover
      responsive
      striped
      customStyles={customStyles}
      theme="dark"
      {...props}
    />
  );
};