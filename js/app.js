let amigos = [];

function adicionar() {
  let amigo = document.getElementById("nome-amigo");
  if (amigo.value == "") {
    alert("Informe o nome do amigo");
    return;
  }

  if (amigos.includes(amigo.value)) {
    alert("Nome já adicionado");
    return;
  }

  let listaAmigos = document.getElementById("lista-amigos");
  amigos.push(amigo.value);

  if (listaAmigos.textContent == "") {
    listaAmigos.textContent = amigo.value;
  } else {
    listaAmigos.textContent = listaAmigos.textContent + ", " + amigo.value;
  }
  amigo.value = "";
}

function sortear() {
  if (amigos.length < 4) {
    alert("Adicione pelo menos 4 amigos");
    return;
  }

  embaralha(amigos);
  let listaSorteios = document.getElementById("lista-sorteio");

  for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      listaSorteios.innerHTML =
        listaSorteios.innerHTML + amigos[i] + " --> " + amigos[0] + "<br>";
    } else {
      listaSorteios.innerHTML =
        listaSorteios.innerHTML + amigos[i] + " --> " + amigos[i + 1] + "<br>";
    }
  }
}

function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    // atribuição via destructuring
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}

function reiniciar() {
  amigos = [];
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
  document.getElementById("nome-amigo").value = "";
}

/*for (let numero = 1; numero <= 100; numero++) {
  if (numero % 5 === 0) {
    console.log(numero);
  }
}

No código ele nao está usando uma comparação válida, apenas conferindo se o numero divide por 5.
O código original estava verificando se o número era divisível por 5, mas não estava verificando se o resto da divisão era 0, que é a condição correta para identificar um número múltiplo de 5.
A operação numero % 5 === 0 verifica se o resto da divisão do numero por 5 é igual a 0. Se for, significa que o número é múltiplo de 5 e, portanto, ele é impresso no console.
*/
