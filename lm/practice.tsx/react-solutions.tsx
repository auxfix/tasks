// React Fetch example

import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';

/*
/api/items

{
  result: {
    items: [
      { id: 15, name: 'foo'},
      { id: 48, name: 'bar'},
    ]
  }
}

*/


async function fetch2() {
  return await Promise.resolve({
                         result: {
                           items: [
                             { id: 15, name: 'foo'},
                             { id: 48, name: 'bar'},
                             { id: 13, name: 'link'},
                           ]
                         }
                       })
}



export default function App() {
  const [data, setData ] = useState(() => []);

    useEffect(() => {
      async function getData(){
        let {result: { items: dt}} = await fetch2();
        setData(dt)
      }
      getData();
      
    },[]);
  return (
    <main>
      <h1>Data getter</h1>
      <ul>
        {
          data.map(d => <li key={d.id}>{d.name}</li>)
        }
      </ul>
    </main>
  )
}