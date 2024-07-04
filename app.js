new Vue({
    el: '#app',
    data: {
        movieTitle: '',
        movie: null,
        message: ''
    },
    methods: {
        searchMovie() {
            if (this.movieTitle) {
                this.fetchMovieDetails(this.movieTitle);
            } else {
                this.message = 'Por favor, introduce el título de la película.';
            }
        },
        fetchMovieDetails(title) {
            const apiKey = 'bc57fc24';
            const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.Response === 'True') {
                        this.movie = data;
                        this.message = '';
                    } else {
                        this.movie = null;
                        this.message = data.Error;
                    }
                })
                .catch(error => {
                    this.movie = null;
                    this.message = 'Ocurrió un error al buscar los detalles de la película.';
                });
        },
        addToFavorites(movie) {
            let history = JSON.parse(localStorage.getItem('movieHistory')) || [];
            history.push(movie);
            localStorage.setItem('movieHistory', JSON.stringify(history));
            this.message = 'Película agregada a favoritos';
        }
    }
});
