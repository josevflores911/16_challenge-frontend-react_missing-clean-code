#Projeto React API

##Cadastro de produtos 

###Introducao 

Foi desenvolvida uma aplicacao que permite adicao, busca e exclusao de produtos.

A aplicacao conta com 3 paginas no modelo Single Page Application o que permite uma melhor fluidez na hora de passar de uma pagina para outra, 
1) a pagina inicial com uma mensagem de bem vinda, 
2) uma segunda pagina com url ('/save') onde sao adicionados os produtos e armazenados na localstorage
3) uma terceira pagina onde e feita a busca a partir do codigo ou id do elemento

em todas as paginas se mostra o lista de produtos em stock, essa lista deve ser atualizado depois de cada adicao 

##Arquitetura

###Folders

Dentro da pasta fonte (src) temos duas pastas 

1) componentes:  contem todos os elementos visuais da api encontrados na pasta layout
2) pages: contem a informacoes desplegadas dentro do layout consulta, gravacao e lista.

###Files-components

O layout é simples constituido por um cabeçalho, boton com roteiros para salvar e buscar, e um container onde e apresentado a informacao
Button.jsx
Card.jsx
Apresentdo.jsx

Os elementos Button e Encabezado presentan um modelo css do tipo Styled Components

styled components
- yarn add styled-components

enquanto Card apresenta um import com uma folha de estilos proprio Card.css o que mostra dois tipos diferentes de caminhos para estilizar

###Files-pages

esta pasta contem 
Lista.jsx
Produto.jsx
Search.jsx
Page3.jsx

estos foram os arquivos utilizados dentro do App.jsx e que sao responsaveis pela informacao apresentada

Lista: faz um mapping nos elementos de localstorage e insere em lista (tableLess) existe NG-Prime uma libraria que fornece uma interfase elegante 
para apresentacao de informacoes

Produto: responsavel por receber as informacoes do formulario, apresentarlas e gravar-as no localStorage

Search: apresenta un input que recebe o codigo do produto e busca as informacoes no localstorage

###Src

App.js: e quem contem o conjunto das informacoes desenvolvidas na pasta de components e pages, neste arquivo se aplicam as rutas a traves da libreria

react router dom
- yarn add react-router-dom  

- npm i --save react-router-dom 

esta permite modificar a URL e enviar informacoe dos arquivos no endereco destino. a versao de react que esta sendo usada e V6 a qual fez modificacoes em 
algums de seus components

	Switch-> (was changed by)-> Routes
	Redirect-> (was changed by)-> Navigate
	useHistory-> (was changed by)-> useNavigate
	component={Page3}->element={<Page3/>}

Index.js: renderiza as informacoes na tela a traves de react.render e recebe o App.js no porto  3007

"start": "set PORT=3007 && react-scripts start",

[http://localhost:3007/]

