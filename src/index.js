import './scss/style.scss';
import apiService from './js/apiService';
import updatePhotosMarkup from './js/updatePhotosMarkup';
import refs from './js/refs'

apiService.disableButton();

refs.searchForm.addEventListener('submit', onInputSearch);
refs.loadMoreBtn.addEventListener('click', onClickLoadMore);

function onInputSearch(event) {
    event.preventDefault();
    apiService.query = event.target.elements.query.value;
    refs.gallery.innerHTML = '';
    apiService.resetPage();

    console.log(apiService.fetchPhoto);
   
    apiService.fetchPhoto().
        then(updatePhotosMarkup);
}

function onClickLoadMore() {
    apiService.fetchPhoto()
        .then(updatePhotosMarkup);
}
