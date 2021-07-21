import React from 'react';

function paginated_fetch(url, page = 1, previousResponse = []) {
  return fetch(`${url}?page=${page}`) // Append the page number to the base URL
    .then(response => response.json())
    .then(newResponse => {
      const response = [...previousResponse, ...newResponse.results]; // Combine the two arrays

      if (newResponse.next !== null) {
        page++;

        return paginated_fetch(url, page, response);
      }

      const itens = response.reduce(
        (html, person) => 
        
        html 
        + `<li>`
        + `<span>Name: ${person.name}</span>`
        + `<span>Birth Year: ${person.birth_year}</span>`
        + `</li>`, ''
      )
      document.querySelector('.people-container').insertAdjacentHTML('beforeend', `<ul class="people-list">${itens}</ul>`)
    });
}

paginated_fetch('https://swapi.dev/api/people/')

class People extends React.Component {
  render() {
    return (
      <div className="people-container">
        <h1>People</h1>
      </div>
    )
  }
}

export default People;