const app = new Vue ({
    el: '#app',
    data: {
        query: '',
        elementUrl: [
            'https://api.themoviedb.org/3/search/movie?api_key=e1b0e65be42222fb18709312c079ff41&language=it-IT&query='
        ],
        url: '',
        movies: null,
        error: null
    },
    methods: {
        /* 
        Milestone 1:
        Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
        Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
        Titolo
        Titolo Originale
        Lingua
        Voto
        */

        addQuery(){
            this.elementUrl.push(this.query)
            console.log(this.elementUrl);
            this.url = this.elementUrl[0]+this.elementUrl[1];
            this.elementUrl.pop()
            this.query = '';
            axios
            .get(this.url)
            .then(resp => {
                console.log(resp.data.results);
                this.movies = resp.data; 
            }).catch(e => {
                console.error(e)
                this.error = 'Sorry something went ' + e;
            })
        }

    },
    mounted() {
        /* const fullUrl = this.movie[0] + this.movie[1]
        console.log(fullUrl); */
        /* axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=e1b0e65be42222fb18709312c079ff41&language=it-IT&query=fu')
        .then(resp => {
            this.movies.push(resp.data.results)
            console.log(resp.data.results);
        }) */

    }
})