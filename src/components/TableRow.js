import React from 'react';

const TableRow = ({title, subscribers, public_description}) => {
  debugger
  return (
    <tr className="subreddit-row">
      <td className="title">{title}</td>
      <td className="description">{public_description}</td>
      <td className="subscribers">{subscribers}</td>
    </tr>
  );
}

export default TableRow;
