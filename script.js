let carrinho = [];

function addCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  alert(nome + " foi adicionado ao carrinho!");
  console.log(carrinho);
}
