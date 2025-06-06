# 📄 Currículo Web Moderno

Um currículo web moderno, elegante e responsivo desenvolvido com Next.js 15, TypeScript e Tailwind CSS. Este projeto apresenta informações profissionais de forma atrativa e interativa, com suporte completo para português e inglês.

## ✨ Funcionalidades

- 🎨 **Design Moderno**: Interface limpa e profissional com gradientes suaves
- 🌍 **Bilíngue**: Suporte completo para português e inglês
- 📱 **Totalmente Responsivo**: Layout adaptativo para todos os dispositivos
- ⚡ **Performance Otimizada**: Construído com Next.js 15 e Turbopack
- 🎯 **Tipagem Segura**: Desenvolvido com TypeScript
- 🎨 **Tailwind CSS**: Estilização moderna e responsiva

## 🚀 Começando

### Pré-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun

### Instalação

1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd curriculo
```

2. Instale as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx          # Página principal do currículo
│   ├── layout.tsx        # Layout da aplicação
│   └── globals.css       # Estilos globais
└── data/
    ├── cv-data.json      # Dados do currículo (PT/EN)
    └── translations.json # Traduções da interface
```

## 🛠️ Personalização

### Editando os Dados do Currículo

Para personalizar o currículo com suas informações:

1. **Dados Pessoais**: Edite o arquivo `src/data/cv-data.json`
2. **Traduções**: Modifique `src/data/translations.json` para adicionar novos textos

### Estrutura dos Dados

```json
{
  "pt": {
    "nome_completo": "Seu Nome",
    "titulo_profissional": "Seu Cargo",
    "contato": {
      "email": "seu@email.com",
      "telefone": "(xx) xxxxx-xxxx",
      "localizacao": "Sua Cidade"
    },
    "links": {
      "linkedin": "https://linkedin.com/in/seu-perfil",
      "github": "https://github.com/seu-usuario",
      "portfolio": "https://seu-portfolio.com"
    }
    // ... outros campos
  }
}
```

## 🎨 Seções do Currículo

- **Informações Pessoais**: Nome, título, contatos e links sociais
- **Habilidades Técnicas**: Lista de tecnologias e ferramentas
- **Idiomas**: Proficiência em diferentes idiomas
- **Experiência Profissional**: Histórico de trabalho com timeline
- **Projetos em Destaque**: Portfolio de projetos com links
- **Formação Acadêmica**: Educação e certificações
- **Competências Pessoais**: Soft skills e características pessoais

## 🌍 Internacionalização

O projeto suporta completamente português e inglês:

- Alternância de idioma através do botão no cabeçalho
- Todos os textos da interface são traduzidos
- Dados do currículo disponíveis em ambos os idiomas

## 🎨 Tecnologias Utilizadas

- **[Next.js 15](https://nextjs.org)** - Framework React
- **[TypeScript](https://www.typescriptlang.org)** - Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com)** - Framework CSS
- **[React](https://reactjs.org)** - Biblioteca de interface
- **Turbopack** - Build tool otimizado

## 📱 Responsividade

O design é totalmente responsivo e otimizado para:

- 📱 **Mobile**: Layout em coluna única
- 📟 **Tablet**: Layout adaptativo
- 💻 **Desktop**: Layout em duas colunas
- 🖥️ **Grandes telas**: Layout otimizado

## 🚀 Deploy

### Vercel (Recomendado)

A forma mais fácil de fazer deploy é usar a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

### Outras Plataformas

O projeto pode ser deployed em qualquer plataforma que suporte Next.js:

- Netlify
- Railway
- AWS
- DigitalOcean

## 📚 Saiba Mais

Para aprender mais sobre as tecnologias utilizadas:

- [Documentação do Next.js](https://nextjs.org/docs)
- [Tutorial Interativo do Next.js](https://nextjs.org/learn)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Guia do TypeScript](https://www.typescriptlang.org/docs)

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

Desenvolvido com ❤️ por [Michel Schiavo](https://github.com/MichelSchiavo)
