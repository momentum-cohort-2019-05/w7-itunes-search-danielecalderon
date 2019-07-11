let button = document.querySelector("#submit")
let input = document.querySelector("#search")
let output = document.querySelector("#output")

document.addEventListener('click', (e) => {
    getData()
})



function getData() {

    fetch('https://itunes-api-proxy.glitch.me/search?term=linkin+park')
    .then(data => data.json())
    .then(json => {
        console.log(json)
        let finalHTML = ''

        json.results.forEach( song => {
            finalHTML += `
            <div> class ="col s4 m4 l4">
            <div class="card" style="width: 18rem;">
            <img src="${song.artworkUrl60}" 
            class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${song.artistName}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Listen</a>
            </div>
          </div>
          </div>
            
            `
    })
  
     output.innerHTML = finalHTML 
  })
.catch( error => console.log(error))
}

