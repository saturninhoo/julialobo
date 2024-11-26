const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
  };
  
  const tickConfig = {
    color: getCSS('--cor-principal'),
    size: 13,
    family: getCSS('--font')
  }
  
  export { getCSS, tickConfig }