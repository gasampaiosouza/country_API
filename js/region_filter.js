'use strict';
import filterCountries from './filter_countries.js';
import configureContent from './configure_content.js';

const URL = 'https://restcountries.eu/rest/v2/';

const regionFilter = async filter => {
    const countries = await filterCountries({
        name: filter == 'no region' ? undefined : filter,
        topic: 'region',
        URL
    });

    configureContent(countries, filter, true);
}

export default regionFilter;