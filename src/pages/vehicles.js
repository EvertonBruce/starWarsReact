import React from 'react';

function paginated_fetch(url = 'https://swapi.dev/api/people/', page = 1, previousResponse = []) {
  return fetch(`${url}?page=${page}`) // Append the page number to the base URL
    .then(response => response.json())
    .then(newResponse => {
      const response = [...previousResponse, ...newResponse.results]; // Combine the two arrays

      if (newResponse.next !== null) { // test if there is another page to read
        page++;

        return paginated_fetch(url, page, response);
      }

      const itens = response.reduce(
        (html, vehicle) => 
        
        html 
        + `<li>`
        + `<span>Name: ${vehicle.name}</span>`
        + `<span>Model: ${vehicle.model}</span>`
        + `<span>Cost in credits: ${vehicle.cost_in_credits}</span>`
        + `</li>`, ''
      )
      document.querySelector('.vehicles-container').insertAdjacentHTML('beforeend', `<ul class="people-list">${itens}</ul>`)
    });
}

class Vehicles extends React.Component {
  componentDidMount() {
    paginated_fetch('https://swapi.dev/api/vehicles')
  }
  render() {
    return (
      <div className="vehicles-container">
      </div>
    )
  }
}

export default Vehicles;