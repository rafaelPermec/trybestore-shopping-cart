require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('2.1 - se fetchItem é uma função', () => {
    expect(typeof fetchItem === 'function').toBeTruthy();
  });
  it('2.2 -fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', async () => {
    expect.assertions(1);
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('2.3 - se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint da url', async () => {
    expect.assertions(1);
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('2.4 - se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    const callObject = await fetchItem('MLB1615760527');
    expect(callObject).toEqual(item);
  });
  it('2.5 - se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    const callError = await fetchItem();
    expect(callError).toEqual(new Error('You must provide an url'));
  });
  
});
