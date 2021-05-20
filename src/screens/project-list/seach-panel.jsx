import { useState } from "react"

export const SeachPanel = ({param, setParam}) => {
  const [users, setUsers] = useState([])
  return <form action="">
    <div>
      <input type="text" value={param.name} onChange={evt => setParam({
        ...param,
        name:evt.target.value
      })} />
      <select value={param.pId} onChange={evt => setParam({
        ...param,
        pId: evt.target.value
      })}>
        {users.map(item => <option value={item.id}>{item.name}</option>)}

      </select>
    </div>
  </form>
}