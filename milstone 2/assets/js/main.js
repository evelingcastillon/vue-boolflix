const app = new Vue ({
    el: '#app',
    data: {
        query: '',
        elementUrlMovie: 'https://api.themoviedb.org/3/search/movie?',
        elementUrlTv: 'https://api.themoviedb.org/3/search/tv?',
        apiKey: 'e1b0e65be42222fb18709312c079ff41',
        urlMovie: '',
        urlTv: '',
        movies: null,
        tv: null,
        error: null
    },
    methods: {
        /* 
        Milestone 1:
        Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
        Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
        - Titolo
        - Titolo Originale
        - Lingua
        - Voto
        */

        addQuery(){

            this.urlMovie = this.elementUrlMovie + '&api_key=' + this.apiKey + '&query=' + this.query;
            console.log(this.url);
            axios
            .get(this.urlMovie)
            .then( resp => {
                this.movies = resp.data;
                console.log(this.movies);
            })
            .catch( e => {
                this.error = 'Errore: ' + e
            })

            /* 
            Milestone 2:
            Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente,
            gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).
            Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che
            corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno
            campi nel JSON di risposta diversi, simili ma non sempre identici)
            Qui un esempio di chiamata per le serie tv: 
            https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs
            */
            this.urlTv = this.elementUrlTv + '&api_key=' + this.apiKey + '&query=' + this.query;
            axios
            .get(this.urlTv)
            .then( resp => {
                this.tv = resp.data;
            })
            .catch( e => {
                this.error = 'Errore: ' + e
            })
            this.query = '';
        },
        

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