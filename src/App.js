import React from 'react'
import styled from 'styled-components'
import COMPANY_DATA from './components/data/data';
import makeData from './makeData'

import Table from './components/table/table';

function App() {
  const columns = React.useMemo(
    () => [
        {
          Header: 'No',
          accessor: 'no',
        },
        {
          Header: 'Tanggal',
          accessor: 'tanggal',
        },
        {
          Header: 'Keterangan',
          accessor: 'keterangan',
        },
        {
          Header: 'No Giro',
          accessor: 'no_giro',
        },
        {
          Header: 'Jumlah',
          accessor: 'jumlah',
        },
      ],
    []
  )

  const [data, setData] = React.useState(COMPANY_DATA);
  // const [data, setData] = React.useState(() => makeData(20))
  const [originalData] = React.useState(data)
  const [skipPageReset, setSkipPageReset] = React.useState(false)

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true)
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }

  // After data chagnes, we turn the flag back off
  // so that if data actually changes when we're not
  // editing it, the page is reset
  React.useEffect(() => {
    setSkipPageReset(false)
  }, [data])

  // Let's add a data resetter/randomizer to help
  // illustrate that flow...
  const resetData = () => setData(originalData)

  return (
    <div>
      <button onClick={resetData}>Reset Data</button>
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div>
  )
}

export default App