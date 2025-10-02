// Pega carrinho salvo ou cria um novo
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Adicionar item ao carrinho
function addCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert(nome + " foi adicionado ao carrinho!");
}

// Mostrar carrinho na página carrinho.html
function mostrarCarrinho() {
  let lista = document.getElementById("lista-carrinho");
  if (!lista) return; // se não for a página do carrinho, sai

  lista.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, index) => {
    total += item.preco;

    lista.innerHTML += `
      <div class="card">
        <h3>${item.nome}</h3>
        <p class="preco">R$ ${item.preco.toFixed(2)}</p>
        <button onclick="removerItem(${index})">Remover</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = "Total: R$ " + total.toFixed(2);

  // Link do WhatsApp com mensagem automática
  let mensagem = "Olá! Quero comprar os seguintes itens: %0A";
  carrinho.forEach(item => {
    mensagem += `- ${item.nome} (R$ ${item.preco.toFixed(2)})%0A`;
  });
  mensagem += `%0ATotal: R$ ${total.toFixed(2)}`;

  // ⚠️ Troque o número pelo seu WhatsApp no formato 55DDDNÚMERO
  document.getElementById("checkout").href = "https://wa.me/55SEUNUMERO?text=" + mensagem;
}

// Remover item do carrinho
function removerItem(index) {
  carrinho.splice(index, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  mostrarCarrinho();
}

// Chama função quando abrir o carrinho.html
mostrarCarrinho();
