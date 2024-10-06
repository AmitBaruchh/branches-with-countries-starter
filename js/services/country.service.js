'use strict'

const COUNTRIES_KEY = 'countries'

const countriesUrl = `https://restcountries.com/v3.1/name/`

function getCountryByName(name) {
    const countries = loadFromStorage(COUNTRIES_KEY) || {}

    if (countries[name]) {
        console.log('Returning cached data for', name)
        return Promise.resolve(countries[name])
    }

    const url = `${countriesUrl}${name}`

    return axios
        .get(url)
        .then(res => {
            const countryFullData = res.data[0]
            const countryData = {
                name: countryFullData.name.common,
                population: countryFullData.population,
                area: countryFullData.area,
                borders: countryFullData.borders || [],
                flag: countryFullData.flags.png,
            }

            countries[name] = countryData
            saveToStorage(COUNTRIES_KEY, countries)

            return countryData
        })
        .catch(err => console.log('err:', err))
}
