// React Fetch 
import './App.css'
import {useEffect, useState} from 'react';

/*
/api/items

{
  result: {
    code: 6,
    items: [
      { id: 15, name: 'foo'},
      { id: 48, name: 'bar'},
    ]
  }
}

*/

function fetch2(url) {
  console.debug(`Get data from: ${url}`)
  return new Promise((resolve) => {
      const response = {
          ok: true,
          status: 200,
          json: () => {
              return Promise.resolve({
                  result: {
                      items: [
                          { id: 15, name: 'foo' },
                          { id: 48, name: 'bar' },
                          { id: 13, name: 'link' },
                      ],
                  },
              });
          },
      };

      setTimeout(() => {
          resolve(response);
      }, 100);
  });
}

export default function App() {
  const [data, setData] = useState(() => []);

  useEffect(() => {
   fetch2('/api/items')
     .then(res => res.json())
     .then(data => setData(data.result))
  },[]);


  return (
    <main>
      <h1>Data getter</h1>
      <ul>
        {
          data.items.map(d => <li key={d.id}>{d.name}</li>)
        }
      </ul>
    </main>
  )
}