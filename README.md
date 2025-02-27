# 📄 Curriculum Online - Michel Schiavo

Um currículo online moderno, responsivo e personalizável, construído com Next.js e TypeScript.

![Curriculum Preview](https://via.placeholder.com/800x450.png?text=Curriculum+Preview)
_Substitua esta imagem com um screenshot do seu currículo_

## ✨ Funcionalidades

- **Design Responsivo** - Otimizado para todos os tamanhos de tela (Mobile First)
- **Alternância de Tema** - Modos claro e escuro para maior conforto visual
- **Multilíngue** - Suporte para Português (BR) e Inglês (EN)
- **Interface Moderna** - Animações suaves e design contemporâneo
- **Personalização Fácil** - Estrutura de dados simples para atualização rápida de informações

## 🚀 Tecnologias

- [Next.js](https://nextjs.org/) - Framework React para produção
- [TypeScript](https://www.typescriptlang.org/) - JavaScript com tipagem
- [CSS Modules](https://github.com/css-modules/css-modules) - Encapsulamento de estilos
- [Font Awesome](https://fontawesome.com/) - Biblioteca de ícones

## 🛠️ Como Executar

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/curriculo.git
cd curriculo
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Execute o servidor de desenvolvimento**

```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador**

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

## 📂 Estrutura do Projeto

```
/src
  /components - Componentes reutilizáveis
    /FlagSelector - Seletor de idioma
    /ThemeToggle - Alternador de tema claro/escuro
  /contexts
    /ThemeContext.tsx - Gerenciamento do tema
  /data - Arquivos com dados do currículo
    /contacts.ts - Informações de contato
    /education.ts - Informações educacionais
    /experience.ts - Experiência profissional
    /head.ts - Dados do cabeçalho
    /hobbies.ts - Hobbies e interesses
    /skills.ts - Habilidades técnicas
  /pages - Páginas da aplicação
    /_app.tsx - Configuração global da aplicação
    /index.tsx - Página principal do currículo
  /styles - Arquivos de estilo
    /globals.css - Estilos globais
    /Home.module.css - Estilos específicos da página principal
```

## 🔧 Personalização

### Dados do Currículo

Para personalizar suas informações, edite os arquivos dentro do diretório `/src/data/`:

- `head.ts` - Título e descrição do cabeçalho
- `contacts.ts` - Informações de contato
- `skills.ts` - Habilidades e níveis de proficiência
- `education.ts` - Formação acadêmica
- `experience.ts` - Experiência profissional
- `hobbies.ts` - Hobbies e interesses

### Temas e Estilos

Para modificar as cores e estilos do tema:

1. Abra o arquivo `/src/styles/globals.css`
2. Ajuste as variáveis CSS dentro dos seletores `:root` (tema claro) e `[data-theme="dark"]` (tema escuro)

### Idiomas

Para adicionar ou modificar traduções:

1. Adicione a nova língua ao array `config` em `/src/pages/index.tsx`
2. Adicione as traduções correspondentes em cada arquivo do diretório `/src/data/`

## 👤 Autor

**Michel Schiavo**

- LinkedIn: [Michel Schiavo](https://www.linkedin.com/in/michel-schiavo-a2b3861a0/)
- GitHub: [MichelSchiavo](https://github.com/MichelSchiavo)
- Email: michel_dmc@hotmail.com

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

💼 Desenvolvido como um currículo online moderno e interativo. Sinta-se livre para clonar e adaptar para seu próprio uso!
