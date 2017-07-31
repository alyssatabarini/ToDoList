import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDataGrid from 'react-data-grid';
import { Data } from 'react-data-grid-addons';

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      columns: [
        {key: 'title', name: 'Title', sortable: true, filterable: true },
        {key: 'state',name: 'State', sortable: true, filterable: true, editable: true },
        {key: 'year',name: 'Year', sortable: true, filterable: true, editable: true},
      ],
      rows: [
        { title:'alyssa', state:'texas', year: 1994},
        { title:'alyssa', state:'california', year: 1994  },
        { title:'alyssa', state:'new york', year: 1992 },
        { title:'alyssa', state:'louisiana', year: 1994 },
        { title:'alyssa', state:'florida', year: 1994 },
        { title:'alyssa', state:'new mexico', year: 1994 },
        { title:'alyssa', state:'texas', year: 1994 },
        { title:'alyssa', state:'florida', year: 1992 },
        { title:'alyssa', state:'texas', year: 1994 },
        { title:'alyssa', state:'new york', year: 1994 },
        { title:'alyssa', state:'oklahoma', year: 1992 },
        { title:'alyssa', state:'oklahoma', year: 1994 },
        { title:'alyssa', state:'maine', year: 1992 },
      ],
      sortColumn: null,
      sortDirection: null,
    }
  }

  getRows = () => {
    return Data.Selectors.getRows(this.state);
  }

  rowGetter = (i) => {
    const rows = this.getRows()
    return rows[i];
  }

  onGridSort = (columnName, sortDirection) => {
    this.setState({
      sortColumn: columnName,
      sortDirection: sortDirection,
    })
  }

  handleGridRowsUpdated({ fromRow, toRow, updated }) {
     let rows = this.state.rows.slice();

     for (let i = fromRow; i <= toRow; i++) {
       let rowToUpdate = rows[i];
       let updatedRow = this.update(rowToUpdate, {$merge: updated});
       rows[i] = updatedRow;
     }

     this.setState({ rows });
   }



  render() {
    return(
      <ReactDataGrid
        enableCellSelect={true}
        columns={this.state.columns}
        rowGetter={this.rowGetter}
        rowsCount={this.state.rows.length}
        minHeight={500}
        onGridSort={this.onGridSort}
        handleGridRowsUpdated={this.handleGridRowsUpdated}
      />
    )
  }
}

export default Table;
