import React from "react";
import MaterialTable from "material-table";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "No", 
          field: "no" 
        },
        {
          title: "Tanggal",
          field: "tanggal",
        },
        { 
          title: "Keterangan", 
          field: "keterangan",  
        },
        {
          title: "No Giro",
          field: "no_giro",
        },
        {
          title: "Jumlah",
          field: "jumlah",
        }
      ],
      data: [
        {
          no: '1',
          tanggal: '28/9/19',
          keterangan: 'PT. Cipta Mortar Utama',
          no_giro: 'MY7. 410732',
          jumlah: '70042500'
        },
        {
            no: '2',
            tanggal: '28/9/19',
            keterangan: 'PT Anugerah Beton Indonesia',
            no_giro: 'MY7. 410726',
            jumlah: '26840000'
        },
        {
            no: '3',
            tanggal: '28/9/19',
            keterangan: 'PT Anugerah Beton Indonesia',
            no_giro: 'MY7. 410726',
            jumlah: '26840000'
        },
      ]
    };
  }

  
  
  render() {

    console.log(this.state.data);

    return (
      <MaterialTable
        title="Editable Preview"
        columns={this.state.columns}
        data={this.state.data}
        // editable={{

        //   onRowAdd: newData =>
        //     new Promise((resolve, reject) => {
        //       setTimeout(() => {
        //         {
        //           const data = this.state.data;
        //           data.push(newData);
        //           console.log(data);
                  
        //           this.setState({ data }, () => resolve());
        //         }
        //         resolve()
        //       }, 100)
        //     }),

        //   onRowUpdate: (newData, oldData) =>
        //     new Promise((resolve, reject) => {
        //       setTimeout(() => {
        //         {
        //           const data = this.state.data;
        //           const index = data.indexOf(oldData);
        //           data[index] = newData;
        //           this.setState({ data }, () => resolve());
        //         }
        //         resolve()
        //       }, 100)
        //     }),

        //   onRowDelete: oldData =>
        //     new Promise((resolve, reject) => {
        //       setTimeout(() => {
        //         {
        //           let data = this.state.data;
        //           const index = data.indexOf(oldData);
        //           data.splice(index, 1);
        //           this.setState({ data }, () => resolve());
        //         }
        //         resolve()
        //       }, 100)
        //     }),
        // }}
      />
    )
  }
}

export default App;
