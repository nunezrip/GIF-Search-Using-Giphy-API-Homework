// READ the giphy API docs: https://developers.giphy.com/
const giphy_endpoint = 'http://api.giphy.com/v1/gifs/'
const api_key =`47bfed09375d4460ae21aa006c947558`
const results = document.querySelector(`.results`)
const searchForm = document.querySelector(`#search-form`);

function getGifs(term, path){
    $.ajax({
        url: `${giphy_endpoint}${path}?api_key=${api_key}&q=${term}`
    })
    .done(function(response){
        console.log(response)
        console.log(response.data[0].images.original.url)
    
       for(let i = 0; i < response.data.length; i++){
        results.innerHTML += `<img src="${response.data[i].images.original.url}">`
       }
    
    })
}

searchForm.addEventListener(`submit`, function(e){
    e.preventDefault()

    const term = document.querySelector('#search-term').value
    
    results.innerHTML = ``
    getGifs(term, 'search')
})

const trendingButtom = document.querySelector('#trending')
trendingButtom.addEventListener('click', function(e) {
    results.innerHTML = ''
    getGifs(undefined, 'trending')


})

const randomButtom = document.querySelector('#random')
randomButtom.addEventListener('click', function(e) {
    results.innerHTML = ''
    $.ajax({
        url: `${giphy_endpoint}/random?api_key=${api_key}`
    })

    .done(function(response){
        console.log(response)
        results.innerHTML += `<img src="${response.data.image_url}">`
    })
})