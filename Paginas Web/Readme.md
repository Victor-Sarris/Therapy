# 🧠 Therapy - Repositório Oficial

Este repositório contém as páginas web do projeto **Therapy**, uma plataforma focada em soluções tecnológicas para atendimento psicológico remoto.

---

## 📁 Estrutura e Regras de Organização das Telas

Para manter o projeto claro, organizado e de fácil manutenção, todas as telas devem seguir as regras abaixo.

### 📂 1. Nomenclatura e Estrutura de Pastas
- Cada tela deve estar em uma pasta separada dentro de `Paginas Web`.
- O nome da pasta deve ser **claro e conciso**, representando o propósito da tela.
- Utilize **CamelCase** ou palavras separadas por hífen (`-`) ou (`_`), por exemplo:
  - `Login`, `Cadastro`, `Dashboard`, `Perfil-Usuario`, `tela_de_login`.
- Evite abreviações confusas. Exemplo correto: `Cadastro-Profissional`.

### 📝 2. Documentação com `README.md`
Cada pasta de tela **deve conter um arquivo `README.md`** com as seguintes informações:

- **📄 Descrição** da tela e sua funcionalidade.
- **🧰 Tecnologias e bibliotecas utilizadas** (ex: Bootstrap, Chart.js).
- **📸 Imagem opcional** da interface da tela.
- **🔄 Histórico de alterações** (opcional, em tópicos ou datas).

> Exemplo de título do `README.md` dentro da pasta `Login`:
>
> ```markdown
> # tela_de_login
> Esta tela permite o acesso de usuários ao sistema...
> ```

### 🗃️ 3. Organização dos Arquivos Internos
A estrutura dentro de cada pasta de tela deve seguir o modelo abaixo:

```
/NomeDaTela
├── index.html
├── style.css
├── script.js
├── README.md
```

- Se necessário, crie subpastas organizadas:
  - `/css` para estilos adicionais
  - `/js` para scripts auxiliares
  - `/assets` para imagens ou ícones

### 🔤 4. Nome de Arquivos
- HTML principal: `index.html`
- Outros arquivos devem ser nomeados com clareza, em **minúsculo e com hífen**:
  - `login.css`, `dashboard.js`, `form-validations.js`

## ✅ Check-list de Contribuição

Antes de subir qualquer nova tela:

- [ ] A pasta está com nome claro e padronizado?
- [ ] Existe um `README.md` com a descrição da tela?
- [ ] O HTML principal está como `index.html`?
- [ ] Os arquivos estão organizados e com nomes coerentes?
- [ ] O código está limpo, comentado e funcional?

---

