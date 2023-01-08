require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('1.1 - se fetchProducts é uma função', () => {
    expect(typeof fetchProducts === 'function').toBeTruthy();
  });
  it('1.2 - Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('1.3 - se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint da url', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('1.4 - se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch.', async () => {
    const callObject = await fetchProducts('computador');
    expect(callObject).toEqual(computadorSearch);
  });
  it('1.5 - se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    const callError = await fetchProducts();
    expect(callError).toEqual(new Error('You must provide an url'));
  });
});
