document.addEventListener("DOMContentLoaded", function () {
    const produtosContainer = document.querySelector(".container");

    // Produtos Exemplo
    const produtos = [
        {
            nome: "Produto 1",
            descricao: "Este é um ótimo produto!",
            imagem: "https://via.placeholder.com/300",
            link: "https://www.sualinkdeafiliado.com"
        },
        {
            nome: "Produto 2",
            descricao: "Melhor preço e qualidade!",
            imagem: "https://via.placeholder.com/300",
            link: "https://www.sualinkdeafiliado.com"
        },
        {
            nome: "Produto 3",
            descricao: "Recomendado pelos especialistas!",
            imagem: "https://via.placeholder.com/300",
            link: "https://www.sualinkdeafiliado.com"
        }
    ];

    // Criar os produtos na página
    produtos.forEach(produto => {
        const produtoDiv = document.createElement("div");
        produtoDiv.classList.add("produto");
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <a href="${produto.link}" target="_blank">Comprar Agora</a>
        `;
        produtosContainer.appendChild(produtoDiv);
    });
});
