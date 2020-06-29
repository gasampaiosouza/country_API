const clear = (element, input = false) => {
  if (!input) return (element.innerHTML = '');

  return (element.value = '');
};

export default clear;
