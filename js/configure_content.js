'use strict';
import content from './content.js';
import emptyMessage from './empty_message.js';
import toggleElement from './toggle_element.js';

const $message_element = document.getElementById('empty__message');
const $flagsContainer = document.getElementById('flags__container');

const configureContent = (data, search, region = false, dataArray = []) => {
  // API's data.message is always == 'not found'
  if (data.message) return emptyMessage($flagsContainer, $message_element);

  let resultArr = [];

  data.map((item) => dataArray.push(item));

  if (search && !region) {
    // filter to match exactly with the country(ies) user is searching
    resultArr = dataArray.filter(({ name }) =>
      name.toLowerCase().startsWith(search.toLowerCase())
    );
  }
  // do not filter anything
  else resultArr = dataArray;

  // if after the filter, it's empty
  if (resultArr.length == 0)
    return emptyMessage($flagsContainer, $message_element);

  const result = resultArr.reduce((prev, { flag, name, region, subregion }) => {
    prev += content(flag, name, region, subregion);

    return prev;
  }, '');

  toggleElement($message_element, 'opacity', 0);

  return displayData(result, $flagsContainer);
};

// append the boxes with reduced data
const displayData = (result, container) => (container.innerHTML = result);

export default configureContent;
