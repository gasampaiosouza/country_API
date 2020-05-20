import configureContent from './configure_content.js';

const _default = {
    fetchAll: async URL =>
        await fetch(URL + 'all').then(res => res.json()),

    URL: 'https://restcountries.eu/rest/v2/',

    $flagsContainer: document.getElementById('flags__container'),
    $searchInput: document.getElementById('search__input'),
}

export default _default;