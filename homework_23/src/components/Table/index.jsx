import React from 'react';
import Row from './components/Row';

function Table({list, changeStatus, deleteTask, updateTitle, updateTask}) {
    return (
      list.length > 0 ? 
      <table>
      <thead>
          <Row changeStatus={null}/>
      </thead>
      <tbody>
          {
              list.map((task) => <Row task={task} changeStatus={changeStatus} deleteTask={deleteTask} updateTitle={updateTitle} updateTask={updateTask}/>
              )
          }
      </tbody>
  </table> 
  : null
    )
}

export default Table;