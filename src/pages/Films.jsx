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
        (html, film) => 
        
        html 
        + `<li>`
        + `<span>Title: ${film.title}</span>`
        + `<span>Episode: ${film.episode_id}</span>`
        + `<span>Director: ${film.director}</span>`
        + `</li>`, ''
      )
      if(document.querySelector('.films-container')) {
        document.querySelector('.load-animation').style.display = 'none'
        document.querySelector('.films-container').insertAdjacentHTML('beforeend', `<ul class="people-list">${itens}</ul>`)
      }
    });
}

class Films extends React.Component {
  componentDidMount() {
    paginated_fetch('https://swapi.dev/api/films')
  }
  render() {
    return (
      <div className="films-container">
        <LoadAnimation />
      </div>
    )
  }
}

export default Films;