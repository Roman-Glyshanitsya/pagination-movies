const API_KEY = 'a44bb9523e0650c67fadd4918a95b1b0';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class MovieApiService {
  constructor() {
    this.page = 1;
  }

  fetchMovies() {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.page}`;

    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        return response.json();
      })
      .then(data => {
        return data.results;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  decrementPage() {
    if (this.page > 1) {
      this.page -= 1;
    }
  }
}
