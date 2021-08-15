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
        (html, starship) => 
        
        html 
        + `<li>`
        + `<span>Name: ${starship.name}</span>`
        + `<span>Model: ${starship.model}</span>`
        + `<span>Cost in credits: ${starship.cost_in_credits}</span>`
        + `</li>`, ''
      )
      if(document.querySelector('.starships-container')) {
        document.querySelector('.load-animation').style.display = 'none'
        document.querySelector('.starships-container').insertAdjacentHTML('beforeend', `<ul class="people-list">${itens}</ul>`)
      }
    });
}

class Starships extends React.Component {
  componentDidMount() {
    paginated_fetch('https://swapi.dev/api/starships/')
  }
  render() {
    return (
      <div className="starships-container">
        <LoadAnimation />
      </div>
    )
  }
}

export default Starships;