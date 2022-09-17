import { Link, useParams } from 'react-router-dom'

const CountryDetails = ({countryInfo}) => {
  const { cca3 } = useParams()
  const foundCountry = countryInfo.find(country => {
    return country.alpha3Code === cca3
  })
  
  return (
    <div className="col-7">
    <h1>{foundCountry.name.common}</h1>
    <table className="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style={{width: "30%"}}>Capital</td>
          <td>{foundCountry.capital}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>
            {foundCountry.area} km
            <sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              {foundCountry.borders.map(border => {
                const borderName = countryInfo.find(country => {
                  return country.alpha3Code === border
                })
                return (
                  <li key={border}>
                    <Link  to={`/${border}`}>{borderName.name.common}</Link>
                  </li>
                )
              })}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default CountryDetails