// React Fetch 
import './App.css'

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
  return (
    <main>
      <h1>Data getter</h1>
    </main>
  )
}




