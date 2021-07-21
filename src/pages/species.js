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
        (html, specie) => 
        
        html 
        + `<li>`
        + `<span>Name: ${specie.name}</span>`
        + `<span>Calssification: ${specie.classification}</span>`
        + `<span>designation: ${specie.designation}</span>`
        + `</li>`, ''
      )
      document.querySelector('.species-container').insertAdjacentHTML('beforeend', `<ul class="people-list">${itens}</ul>`)
    });
}

class Species extends React.Component {
  componentDidMount() {
    paginated_fetch('https://swapi.dev/api/species')
  }
  render() {
    return (
      <div className="species-container">
      </div>
    )
  }
}

export default Species;