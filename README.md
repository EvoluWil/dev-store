# Dev Store 🛍️

Uma aplicação de front-end para E-commerce desenvolvida com **React** e **Tailwind CSS**. O projeto simula uma loja virtual moderna, responsiva e funcional, com foco em experiência de usuário e persistência de estado.

## 🔗 Links

- [LinkedIn](https://www.linkedin.com/in/evoluwill)
- [Portfólio](https://willianrodrigues-tk.vercel.app)

## 🧩 Funcionalidades

- ✅ Listagem de produtos com imagem, nome, preço e avaliação.
- ✅ Página de detalhes do produto com:
  - Imagem principal (30~35% da tela), com zoom no hover focado no trecho onde o mouse está.
  - Miniaturas clicáveis para trocar a imagem principal.
  - Seletores dinâmicos de variantes (cor e/ou tamanho), gerados com base em dados.
  - Exibição de preço e disponibilidade.
  - Botão de compra desabilitado caso não haja estoque.
  - Link compartilhável direto para o produto.
- ✅ Validação de **CEP** usando [ViaCEP](https://viacep.com.br), exibindo endereço formatado ao digitar um CEP válido.
- ✅ Persistência de estado do usuário (seleções, visualizações, endereço etc.) por **15 minutos**, utilizando **cookies**.
- ✅ Layout responsivo para mobile, tablet e desktop.
- ✅ Tema claro e escuro baseado no sistema operacional do usuário.

## 🧠 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next.js](https://nextjs.org/)
- [Cookies](https://github.com/andreizanik/cookies-next)
- [ViaCep](https://viacep.com.br/)

## 🛒 Estrutura de Produto (Exemplo)

```js
{
  id: '003',
  name: "Men's V-Neck T-Shirt",
  rating: 4.0,
  description: "...",
  has_variations: true,
  variationAttributes: ['color', 'size'],
  imagesByAttribute: {
    color: {
      blue: ['img1.webp', 'img2.webp'],
      white: ['img3.webp', 'img4.webp']
    }
  },
  variations: [
    {
      id: '003-001',
      attributes: {
        color: { id: 'blue', value: '#00296b', label: 'Light Navy' },
        size: { id: 'small', value: 'S', label: 'Small' }
      },
      price: 849,
      quantity: 7,
      default: true
    }
  ]
}
```

> Produtos com ou sem variações são renderizados de forma dinâmica, permitindo flexibilidade de escalabilidade.

## 📷 Capturas de Tela

![Print detalhe de imagem](https://github.com/EvoluWil/dev-store/blob/master/public/images/read-me/print-product-detail.png)
![Print lista recomendada](https://github.com/EvoluWil/dev-store/blob/master/public/images/read-me/print-product-list.png)

## 🚀 Como executar localmente

```bash
# Clone o repositório
git clone https://github.com/EvoluWil/dev-store.git
cd dev-store

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

Acesse: `http://localhost:3000`

## 📦 Build

```bash
npm run build
```

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido com 💻 por [Willian Rodrigues](https://www.linkedin.com/in/EvoluWil)