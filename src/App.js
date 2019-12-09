import React from 'react';
import './App.css';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

class App extends React.Component{

  render(){

    const data = [
      {
        name: 'Tanner Linsley',
        age: 26,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        }
      }
    ]

    const columns = [
      {
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      }, 
      {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }, 
      {
        id: 'friendName', // Required because our accessor is not a string
        Header: 'Friend Name',
        accessor: d => d.friend.name // Custom value accessors!
      }, 
      {
        Header: props => <span>Friend Age</span>, // Custom header components!
        accessor: 'friend.age'
      }
    ]

    return (
      <div className='app'>
        <ReactTable
          data={data}
          columns={columns} className='table'
        />

      </div>
    );  
  }
}

export default App;
