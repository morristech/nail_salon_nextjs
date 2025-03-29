import React from 'react'

const Table1 = () => {
  const tableData = [
    {
      service: 'Plain Acrylic Set',
      short: 250,
      medium: 280,
      long: 320,
      extraLong: 350,
    },
    {
      service: 'Plain French Acrylic Set',
      short: 300,
      medium: 350,
      long: 400,
      extraLong: 450,
    },
    {
      service: 'Plain Ombré Acrylic Set',
      short: 300,
      medium: 350,
      long: 400,
      extraLong: 450,
    },
  ];

  return (
    <div className="w-full">
      <table className="mx-auto w-full text-center">
        <thead>
          <tr>
            <th></th>
            <th className="text-center">Short</th>
            <th className="text-center">Medium</th>
            <th className="text-center">Long</th>
            <th className="text-center">Extra Long</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <th>{row.service}</th>
              <td>{row.short}</td>
              <td>{row.medium}</td>
              <td>{row.long}</td>
              <td>{row.extraLong}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table1
