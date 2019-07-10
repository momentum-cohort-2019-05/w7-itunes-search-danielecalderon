//const myResults = 

fetch('https://itunes.apple.com/search?')
   .then(resp => resp.json())
   .then(json => {

console.log(json)

})