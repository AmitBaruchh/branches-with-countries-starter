'use strict'

function onGetCountryInfo() {
    const searchValue = document.querySelector('.country-input').value.toLowerCase() || 'Israel'
    console.log('value:', searchValue)

    getCountryByName(searchValue)
        .then(renderInfo)
        .catch(err => console.log('err:', err))
}

function renderInfo(data) {
    const { name, population, area, borders, flag } = data
    console.log('name:', name)
    console.log('population:', population)

    const elCountryInfo = document.querySelector('.country-container')
    const strHTMLs = `
        <h2>${name}</h2>
        <pre class="country-info">
        Population: ${population.toLocaleString()} people
        Area: ${area.toLocaleString()} km²
        Borders: ${borders.length ? borders.join(', ') : 'No neighboring countries'}
        </pre>
        <img src="${flag}" alt="${name} flag">
    `

    elCountryInfo.innerHTML = strHTMLs
}
