const app = new Vue ({
    el: '#app',
    data: {
        query: '',
        elementUrl: [
            'https://api.themoviedb.org/3/search/movie?api_key=e1b0e65be42222fb18709312c079ff41&language=it-IT&query='
        ],
        url: '',
        movies: '',
    },
    methods: {
        /* Milstone 1 */
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
                this.movies = resp.data.results
            })
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