
<h1 align="center">
  <img src="https://i.imgur.com/yqla6ik.png" alt="PokeInfo" height="125" width="">
</h1>

# Tópicos:

- [Funcionalidades](#funcionalidades)

- [Descrição do Projeto](#descrição-do-projeto)

- [Ferramentas Utilizadas](#ferramentas-utilizadas)

- [Processo de Criação](#processo-de-criação)

- [Utilizando o Projeto](#utilizando-o-projeto)

<br>
<br>
<br>

# Descrição do Projeto

PokeInfo é onde você pode encontrar seus Pokémon favoritos, podendo filtrá-los por tipo, pesquisar por eles ou achá-los na lista de todos os Pokémon existentes.

Ao clicar em qualquer Pokémon, você será levado à página de detalhes, onde poderá encontrar seus status, habilidades, movimentos e evoluções.

<br>
<br>

# Funcionalidades

<br>

## - Botões para filtrar por tipos

Pode filtrar pelo tipo que você procura.

https://imgur.com/ptzYC9P

<h1 align="center">
  <img src="https://imgur.com/ptzYC9P.mp4" alt="Botões de filtro">
</h1>

<br>

## - Barra de pesquisa para procurar Pokémon específicos 

Um Pokémon pelo seu número na Pokédex ou pelo seu nome.

<h1 align="center">
  <img src="https://imgur.com/uq6rmJZ.gif" alt="Barra de pesquisa" >
</h1>

<br>

## - Lista de Pokémon

Lista com todos os Pokémon existentes.

<h1 align="center">
  <img src="https://imgur.com/1jjZXqr.gif" alt="Lista de Pokémon" >
</h1>

<br>

## - Botões para mudar de tema e para voltar ao início

<h1 align="center">
  <img src="https://imgur.com/g4Etv1H.gif" alt="Botões para mudar tema e voltar ao topo" >
</h1>

<br>

## - Página de detalhes do Pokémon

Você pode clicar em qualquer Pokémon e será levado para a sua página de detalhes, e para voltar ao início é só clicar no botão Back.

<h1 align="center">
  <img src="https://imgur.com/jMsCxQU.gif" alt="Página de detalhes do Pokémon" >
</h1>

<br>

## - Botões de habilidades e movimentos

Na página de detalhes, cada Pokémon tem um botão para ver suas habilidades e movimentos.

<h1 align="center">
  <img src="https://imgur.com/36MZj80.gif" alt="Botões de habilidades e movimentos" >
</h1>

<br>

## - Aba de evoluções

Clique no Pokémon na aba de evoluções e a página mudará para essa evolução.

<h1 align="center">
  <img src="https://imgur.com/nxWUD0y.gif" alt="Aba de evoluções do Pokémon" >
</h1>


<br>
<br>
<br>

# Ferramentas Utilizadas

Na construção desse projeto, foi utilizado o React para aplicar o conceito de Single Page Applications (SPA).

Para buscar as informações de todos os Pokémon, foi usada a API PokeApi: [https://pokeapi.co](https://pokeapi.co).

Para estilização, foi usado o Styled Components, pela facilidade de modificar componentes específicos sem interferir nos outros.

A navegação entre páginas foi feita com react-router-dom, facilitando a navegação do usuário.

Os temas foram implementados usando a Context API, pela facilidade de passar informações diferentes para os componentes mais abaixo na árvore de arquivos.

Foram criados testes com o Jest para identificar falhas durante a modificação do projeto, tornando mais fácil a correção desses erros.


<br>
<br>
<br>

# Processo de Criação

Durante o processo, utilizei essas ferramentas porque foram elas que aprendi no curso do DevQuest, o qual foi bastante útil. Além disso, pesquisei por conta própria para aprender mais sobre certas funcionalidades, como a utilização dos temas junto com Styled Components, a criação de testes de unidade com o Jest e o tratamento das APIs.

<br>
<br>
<br>

# Utilizando o Projeto 

1. Copie o link do projeto no GitHub

<h1 align="center">
  <img src="https://imgur.com/JGdlqD2.gif" alt="Copiando link do repositório" >
</h1>

<br>
<br>

2. Crie uma pasta para guardá-lo, depois inicie o GitBash dentro dela 

<h1 align="center">
  <img src="https://imgur.com/lDcOE4A.gif" alt="Abrindo GitBash" height="300">
</h1>

<br>
<br>

3. Dentro do GitBash, utilize a URL copiada junto com o comando:

```
git clone https://github.com/LuizHR06/pokeinfo.git
```

<br>
<br>

4. Depois de clonado, entre na pasta usando o comando:

```
cd pokeinfo/
```

<br>
<br>

5. Abra o VSCode usando:

```
code .
```

<br>
<br>

6. Dentro do VSCode, abra o terminal e utilize esse comando para instalar os pacotes:

```
npm install
```

<h1 align="center">
  <img src="https://imgur.com/BBAhItd.gif" alt="Instalando pacotes no VS Code"  height="400" >
</h1>

7. Após finalizada a instalação, no mesmo terminal utilize:

```
npm start
```

## Tudo pronto, agora você pode inspecionar o código e o site 
