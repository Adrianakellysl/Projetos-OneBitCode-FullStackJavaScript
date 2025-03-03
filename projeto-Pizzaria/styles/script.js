document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active"); // Adiciona ou remove a classe 'active'
  });
  loadCart(); // Carregar o carrinho ao iniciar a página
});

const cartModal = document.getElementById("cart-modal");
const closeButton = document.querySelector(".close");


// Função para abrir o modal
function openCart() {
  cartModal.style.display = "flex";
}

// Função para fechar o modal
function closeCart() {
  cartModal.style.display = "none";
}

// Fecha o modal ao clicar no botão de fechar
closeButton.addEventListener("click", closeCart);

// Fecha o modal ao clicar fora dele
window.addEventListener("click", (event) => {
    if (event.target === cartModal) {
        closeCart();
    }
});

setTimeout(() => {
  const closeButton = document.querySelector(".close");
  if (closeButton) {
      closeButton.addEventListener("click", closeCart);
  } else {
      console.error("Elemento '.close' não encontrado no DOM.");
  }
}, 1000);

document.addEventListener("DOMContentLoaded", function () {
  cartModal.style.display = "none";
});

document.querySelectorAll(".add-to-cart").forEach(icon => {
  icon.addEventListener("click", () => {
      icon.classList.add("shake");
      setTimeout(() => {
          icon.classList.remove("shake");
      }, 300); // Remove a classe após 0.3s
  });
});

document.addEventListener("click", (event) => {
  if (event.target.id === "checkoutBtn") {
      event.target.classList.add("pulse");

      setTimeout(() => {
          event.target.classList.remove("pulse");
      }, 300);
  }
});
