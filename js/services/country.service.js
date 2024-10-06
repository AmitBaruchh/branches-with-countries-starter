'use strict'

const countriesUrl = `https://restcountries.com/v3.1/name/`

function getCountryInfo(countryName) {
    const url = `${countriesUrl}${countryName}`

    return axios
        .get(url)
        .then(res => {
            const countryData = res.data[0]
            return {
                name: countryData.name.common,
                population: countryData.population,
                area: countryData.area,
                borders: countryData.borders || [],
                flag: countryData.flags.png,
            }
        })
        .catch(err => console.log('err:', err))
}
