import React from 'react';

import LoadAnimation from '../components/LoadAnimation';

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
        (html, planet) => 
        
        html 
        + `<li>`
        + `<span>Name: ${planet.name}</span>`
        + `<span>Climate: ${planet.climate}</span>`
        + `<span>Population: ${planet.population}</span>`
        + `</li>`, ''
      )
      if(document.querySelector('.planets-container')) {
        document.querySelector('.load-animation').style.display = 'none'
        document.querySelector('.planets-container').insertAdjacentHTML('beforeend', `<ul class="people-list">${itens}</ul>`)
      }
    });
}

class Planets extends React.Component {
  componentDidMount() {
    paginated_fetch('https://swapi.dev/api/planets/')
  }
  render() {
    return (
      <div className="planets-container">
        <LoadAnimation />
      </div>
    )
  }
}

export default Planets;