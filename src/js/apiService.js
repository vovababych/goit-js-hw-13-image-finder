import refs from './refs'

export default {
    searchQuery: '',
    page: 1,

    fetchPhoto() {
    const apiKey = '18667452-b6cf3b15ecb06490e1251bb0b';
    const perPage = 12;
    const url = `https://pixabay.com/api/?q=${this.query}&image_type=photo&orientation=horizontal&per_page=${perPage}&key=${apiKey}&page=${this.page}`;
        return fetch(url)
        
        .then(res => res.json())
        .then(({ hits, total }) => {
            console.log(this.page, perPage, this.page * perPage, total);
            if ((this.page * perPage) >= total) {
               this.disableButton()
            } else{ this.enableButton()}
            this.incrementPage();
            return hits
        })
        .catch(error => console.log(error))
        
        
    },

    resetPage() {
        this.page = 1;
    },

    incrementPage() {
        this.page += 1;
    },

    get query() {
        return this.searchQuery;
    },

    set query(value) {
        this.searchQuery = value;
    },

    enableButton() {
        refs.loadMoreBtn.removeAttribute("disabled");
    },

    disableButton() {
        refs.loadMoreBtn.setAttribute("disabled", "true");
    }
};