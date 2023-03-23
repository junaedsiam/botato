import fetch from 'node-fetch'

const URL = 'https://api.chucknorris.io/jokes/random'


export const getChukNorrisJoke  = async () =>{
  try {
    const res = await fetch(URL)
    const json = await res.json()
    return json.value
  } catch(err) {
    console.log(err)
    return 'No joke today :( I am sad!'
  }
}
