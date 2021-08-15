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
        (html, person) => 
        
        html 
        + `<li>`
        + `<span>Name: ${person.name}</span>`
        + `<span>Birth Year: ${person.birth_year}</span>`
        + `</li>`, ''
      )
      if(document.querySelector('.people-container')) {
        document.querySelector('.load-animation').style.display = 'none'
        document.querySelector('.people-container').insertAdjacentHTML('beforeend', `<ul class="people-list">${itens}</ul>`)
      }
    });
}

class People extends React.Component {
  componentDidMount() {
    paginated_fetch()
  }
  render() {
    return (
      <div className="people-container">
        <LoadAnimation />
      </div>
    )
  }
}

export default People;