import React from 'react';
import TableHeading from './TableHeading';
import TableRow from './TableRow';

const SubredditTable = ({subreddits}) => {
  return (
    <table className="table">
      <tbody>
        <TableHeading />
        {subreddits.map((data, idx) => (<TableRow key={idx} {...data} />))}
      </tbody>
    </table>
  )
}

export default SubredditTable;
