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



