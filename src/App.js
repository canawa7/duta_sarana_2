import React from "react";
import MaterialTable from "material-table";
import './App.css';

function App() {
  const [state, setState] = React.useState({
    columns: [
      { 
        title: "No", 
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
          no: 1,
          tanggal: '28/9/19',
          keterangan: 'PT. Cipta Mortar Utama',
          no_giro: 'MY7. 410732',
          jumlah: 70042500
      },
      {
          no: 2,
          tanggal: '28/9/19',
          keterangan: 'PT Anugerah Beton Indonesia',
          no_giro: 'MY7. 410726',
          jumlah: 26840000
      },
      {
          no: 3,
          tanggal: '28/9/19',
          keterangan: 'PT Anugerah Beton Indonesia',
          no_giro: 'MY7. 410726',
          jumlah: 26840000
      },
  ],
  });

  return (
    <div className='app'>
      <MaterialTable
        title="Editable Example"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    </div>
    
  );
}

export default App;
