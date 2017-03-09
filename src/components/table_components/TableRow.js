import React from 'react';

// Table row containing title, number of subscribers, and description columns.
const TableRow = ({title, subscribers, public_description}) => {
  return (
    <tr className="subreddit-row">
      <td className="title">{title}</td>
      <td className="description">{public_description}</td>
      <td className="subscribers">{subscribers}</td>
    </tr>
  );
}

export default TableRow;
