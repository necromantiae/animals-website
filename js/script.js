const loader = document.querySelector('.loader')
const cats = document.querySelector('.cats-image')
const button = document.querySelector('.change-image')
const abyssinianCat = document.querySelector('.abyssinian')
const aeganCat = document.querySelector('.aegan')
const showNav = document.querySelector('.show-nav')
const navbar = document.querySelector('.navbar')
const americanBobtailCat = document.querySelector('.american-bobtail')
const americanCurlCat = document.querySelector('.american-curl')
const americanShorthairCat = document.querySelector('.american-shorthair')
const americanWirehairCat = document.querySelector('.american-wirehair')
const arabianMauCat = document.querySelector('.arabian-mau') 
const miniCatOne = document.querySelector('.miniature-1')
const miniCatTwo = document.querySelector('.miniature-2')

function getCats() {fetch('https://api.thecatapi.com/v1/images/search', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('#cats-image');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

getCats()

function getCatsMini() {fetch('https://api.thecatapi.com/v1/images/search', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('.miniature-1');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

getCatsMini()

function getCatsMiniTwo () {fetch('https://api.thecatapi.com/v1/images/search', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('.miniature-2');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

getCatsMiniTwo()

const removeHidden = () => {
navbar.classList.toggle('hidden')
showNav.classList.toggle('to-left')
}

function abyssinian() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=abys', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('#cats-image');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

function abyssinianMini() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=abys', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('.miniature-1');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

function abyssinianMiniTwo() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=abys', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('.miniature-2');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

function aegan() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=aege', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('#cats-image');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

function aeganMini() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=aege', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('.miniature-1');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

function aeganMiniTwo() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=aege', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('.miniature-2');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

function americanBobtail() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=abob', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('.miniature-1');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

function americanBobtailMini() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=abob', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('.miniature-2');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

function americanBobtailMiniTwo() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=abob', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('#cats-image');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

function americanCurl() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=acur', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('#cats-image');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

function americanCurlMini() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=acur', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('.miniature-1');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

function americanCurlMiniTwo() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=acur', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('.miniature-2');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

function americanShorthair() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=asho', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('#cats-image');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

function americanShorthairMini() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=asho', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('.miniature-1');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

function americanShorthairMiniTwo() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=asho', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('.miniature-2');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}


function americanWirehair() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=awir', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('#cats-image');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

function americanWirehairMini() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=awir', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('.miniature-1');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

function americanWirehairMiniTwo() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=awir', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('.miniature-2');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

function arabianMau() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=amau', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('#cats-image');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

function arabianMauMini() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=amau', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('.miniature-1');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

function arabianMauMiniTwo() {fetch('https://api.thecatapi.com/v1/images/search?breed_ids=amau', {
  headers: {
    'x-api-key': 'live_BLpAGAgFDsYnQrtHo3YFHy9HdB4h0yAzYOZCgDytYztFA0VpVqiRVNrowWOZBOXq'
  }
}).then(res => res.json()).then(result => {
    const image = document.querySelector('.miniature-2');
    image.src = result[0].url;
      image.classList.remove('hidden');
      const loader = document.querySelector('.loader');
      loader.classList.add('hidden');
  })
}

abyssinianCat.addEventListener('click', abyssinian)
aeganCat.addEventListener('click', aegan)
button.addEventListener('click', getCats)
button.addEventListener('click', getCatsMini)
button.addEventListener('click', getCatsMiniTwo)
showNav.addEventListener('click', removeHidden)
americanBobtailCat.addEventListener('click', americanBobtail)
americanBobtailCat.addEventListener('click', americanBobtailMini)
americanBobtailCat.addEventListener('click', americanBobtailMiniTwo)
americanCurlCat.addEventListener('click', americanCurl)
americanCurlCat.addEventListener('click', americanCurlMini)
americanCurlCat.addEventListener('click', americanCurlMiniTwo)
americanShorthairCat.addEventListener('click', americanShorthair)
americanShorthairCat.addEventListener('click', americanShorthairMini)
americanShorthairCat.addEventListener('click', americanShorthairMiniTwo)
americanWirehairCat.addEventListener('click', americanWirehair)
americanWirehairCat.addEventListener('click', americanWirehairMini)
americanWirehairCat.addEventListener('click', americanWirehairMiniTwo)
arabianMauCat.addEventListener('click', arabianMau)
arabianMauCat.addEventListener('click', arabianMauMini)
arabianMauCat.addEventListener('click', arabianMauMiniTwo)
abyssinianCat.addEventListener('click', abyssinianMini)
abyssinianCat.addEventListener('click', abyssinianMiniTwo)
aeganCat.addEventListener('click', aeganMini)
aeganCat.addEventListener('click', aeganMiniTwo)


