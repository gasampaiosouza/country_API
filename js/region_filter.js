'use strict';
import filterCountries from './filter_countries.js';
import configureContent from './configure_content.js';

const URL = 'https://restcountries.eu/rest/v2/';

const regionFilter = filter => {
    filterCountries({
        name: filter.toLowerCase().trim(),
        topic: 'region',
        URL
    }).then(users => configureContent(users, filter));
}

export default regionFilter;