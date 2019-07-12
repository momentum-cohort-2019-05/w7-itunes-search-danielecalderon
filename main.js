let button = document.querySelector("#submit")
let input = document.querySelector("#search")
let output = document.querySelector("#output")

document.addEventListener('click', (e) => {
    getData()
})



function getData() {

   url = 'https://itunes-api-proxy.glitch.me/search?term=linkin+park'

    fetch(url)
    .then(data => data.json())
    .then(json => {
      console.log(json)
        let finalHTML = ''

        json.results.forEach( song => {
            finalHTML += `
            <div class ="col s4 m4 l4"> 
            <div class="card" style="width: 18rem;">
            <img src="${song.artworkUrl60}" 
            class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${song.artistName}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Listen</a>
              <figure>
              <figcaption>Listen to the T-Rex:</figcaption>
              <audio controls src="/media/examples/t-rex-roar.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>
            </div>
          </div>
          </div>
            
            `
    })
  
     output.innerHTML = finalHTML 
  })
.catch( error => console.log(error))
}

