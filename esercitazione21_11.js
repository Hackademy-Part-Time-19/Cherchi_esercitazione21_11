//funzione sort
//
//
//reverse per ruotare l'array

/*let listaProdotti = [
  {
    id: 1,
    nome: "Iphone",
    prezzo: 1000,
  },
  {
    id: 2,
    nome: "Mac",
    prezzo: 3000,
  },

  {
    id: 3,
    nome: "Scrivania",
    prezzo: 200,
  },
  {
    id: 4,
    nome: "Lampadari",
    prezzo: 600,
  },
];

//lista ordinata per prezzo

let listaOrdinata = listaProdotti.sort(function (prodotto1, prodotto2) {
  return prodotto1.prezzo - prodotto2.prezzo;
});

console.log(listaOrdinata);

//lista ordinata per nome

console.log(listaProdotti);

let listaAlfabetica = listaProdotti.sort(function (a, b) {
  if (a.nome < b.nome) return -1;

  if (a.nome > b.nome) return 1;

  return 0;
});

console.log(listaAlfabetica);

//filtro prezzo

let prezziFiltrati = listaProdotti.filter(function (prodotto) {
  return prodotto.prezzo > 250;
});

console.log(prezziFiltrati);

//filtra prezzo funzione normale

function filtraPrezzi(listaProdotti) {
  let filtro = [];

  for (let i = 0; i < listaProdotti.length; i++) {

    if (listaProdotti[i].prezzo > 250) {
      filtro.push(listaProdotti[i]);
    }
  }

  return filtro;

}

let prodottiFiltrati = filtraPrezzi(listaProdotti) ;
console.log(prodottiFiltrati);
*/
//stampa valori

let url =
  "https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999";

let urlSplittata = url.split("?");

console.log(urlSplittata);
