'use strict'

function onGetCountryInfo() {
    const elLoader = document.querySelector('.loader')
    elLoader.classList.remove('hide')
    document.querySelector('.country-container').classList.add('hide')

    const searchValue = document.querySelector('.country-input').value.toLowerCase().trim() || 'Israel'
    getCountryByName(searchValue)
        .then(data => {
            renderInfo(data)
            elLoader.classList.add('hide')
            document.querySelector('.country-container').classList.remove('hide')
        })
        .catch(err => {
            console.log('err:', err)
            elLoader.classList.add('hide')
            document.querySelector('.country-container').classList.remove('hide')
        })
}

function renderInfo(data) {
    const { name, population, area, borders, flag } = data
    document.querySelector('.country-name').textContent = name
    document.querySelector('.country-population').textContent = `Population: ${population.toLocaleString()} people`
    document.querySelector('.country-area').textContent = `Area: ${area.toLocaleString()} km²`
    document.querySelector('.country-flag').src = flag
    document.querySelector('.country-flag').alt = `${name} flag`

    document.querySelector('.country-flag').classList.remove('hide')
}

function onClearCache() {
    saveCountries({})
}
