import React from 'react'

export const List = ({list}) => {
  return <table>
    <thead>
      <tr>
        <th>姓名</th>
        <th>负责人</th>
      </tr>
    </thead>
    <tbody>
      {
        list.map(pro => <tr>
          <td>{pro.name}</td>
          <td>{pro.personName}</td>
        </tr>)
      }
    </tbody>
  </table>
}