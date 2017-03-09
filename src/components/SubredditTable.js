import React from 'react';
import { TableHeading, TableRow, TableTitle } from './table_components';


const SubredditTable = ({subreddits}) => {
  return (
    <table className="table">
      <tbody>
        <TableTitle />
        <TableHeading />
        {subreddits.map((data, idx) => (<TableRow key={idx} {...data} />))}
      </tbody>
    </table>
  )
}

export default SubredditTable;
