import { useState } from "react"

import{ SeachPanel } from "./seach-panel"
import { List } from "./list"
import { useMount, useDebounce } from "../../untils/comon"

export  const ProjectScreen = () => {
  const [param, setParam] = useState({
    name:'',
    pId:''
  })

  const [list, setList] = useState([])

  useMount(() => {
    fetch('http://localhost:3000/users').then(async response => {
      if(response.ok){
        setList(await response.json())
      }
    })
  })
  return <div>
    <SeachPanel
      param ={ param }
      setParam = {setParam}
    />
    <List list = {list}/>
  </div>

}