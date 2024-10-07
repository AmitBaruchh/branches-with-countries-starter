'use strict'

function onGetCountryInfo() {
    const searchValue = document.querySelector('.country-input').value.toLowerCase() || 'Israel'

    getCountryByName(searchValue)
        .then(renderInfo)
        .catch(err => console.log('err:', err))
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
