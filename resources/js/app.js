const searchApp = document.querySelector('#search-app');

if (searchApp) {
    import('./search').then(search => search.mount(searchApp));
}
