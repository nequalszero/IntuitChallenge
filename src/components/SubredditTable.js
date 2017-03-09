import React from 'react';
import { TableHeading, TableRow, TableTitle } from './table_components';

// Component that renders an array of subreddits into table format.
const SubredditTable = ({subreddits}) => {
  return (
    <table className="table">
      <thead>
        <TableHeading />
      </thead>
      <tbody>
        {subreddits.map((data, idx) => (<TableRow key={idx} {...data} />))}
      </tbody>
    </table>
  )
}

export default SubredditTable;
