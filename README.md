#Projeto React API
<hr>

Desafio Front-End
O que é?
Este desafio faz parte do processo seletivo para o cargo de Desenvolvedor Front-End no James Tip. Este tem por objetivo medir seu nível de conhecimento com tecnologias de desenvolvimento front-end, e suas capacidades de propor novas ideias e arquiteturas para nossos serviços, sempre com o foco de manter o ambiente simples, seguro, funcional e objetivo.

Introdução
Um de nossos projetos internos necessita de uma “cara nova” para que os clientes possam acessar e gerenciar informações necessárias para as operações do dia-a-dia das suas empresas. Para isto, você, no papel de Desenvolvedor Front-End, foi acionado para elaborar um novo Portal para os Clientes do James Tip. Seu objetivo é criar um simples app que deve conter (no mínimo) duas páginas, uma que exibe um formulário para cadastro com os campos abaixo, e outra que liste os dados cadastrados:

Código do Produto
Categoria do Produto (ex.: Eletrônico)
Nome do Produto
Nome do Fornecedor
Valor do Produto
Para isto, foram estipuladas algumas necessidades, as quais devem ser atendidas:

Projetar interfaces de usuário para alcançar objetivos de diversos usuários finais;
Determinar o layout e a apresentação do aplicativo/página;
Proporcionar uma experiência de usuário agradável, combinada com alto desempenho, segurança e capacidade de resposta;
Garantir a viabilidade técnica de projetos de UI/UX;
Otimizar aplicativos para máxima velocidade e escalabilidade;
Realizar a engenharia da experiência de design de interação de elementos na interface do usuário;
Garantir uma navegação intuitiva e com acessibilidade;
A principal ideia aqui é que você faça por você mesmo (DIY);

Requisitos técnicos
Para realização deste desafio, deverão ser observados os seguintes requisitos:

A aplicação deverá ser Single Page Application (SPA);
O Layout deverá ser TableLess;
Implementação de compatibilidade entre navegadores de aplicativos da web;
Deve ser possível editar, listar e excluir os dados cadastrados pelo formulário;
Utilizar React.js para o desenvolvimento da aplicação;
Utilizar TypeScript;
Utilizar Context API para o compartilhamento das informações entre as páginas;
Fazer a persistência dos dados no localStorage ou IndexedDB;
Utilizar styled-components para estilização dos componentes;
Utilizar react-router-dom para a navegação entre as páginas;
(Opcional) Implementar testes utilizando jest/testing-library ou outra biblioteca para testes unitários;
Você é livre para estruturar o projeto da maneira que achar mais organizada.

Você é livre para implementar o código em qualquer padrão que achar mais adequado.

Você pode adicionar funcionalidades ou utilizar outros componentes como desejar, mas não fuja da simplicidade.

Entregáveis
Ao final do desafio, você deverá realizar um PULL REQUEST neste repositório, o qual deverá conter o seguinte conteúdo:

Todo e qualquer arquivo necessário para que possamos reproduzir a aplicação criada em um servidor web simples;
Arquivo README.md, contendo:

Breve descrição das funcionalidades da aplicação entregue;
Ferramentas utilizadas, e o por que estas foram escolhidas para a realização do desafio;
Decisões adotadas durante o planejamento e execução do desafio, justificando-as;
IMPORTANTE: Mesmo que você não consiga concluir o desafio por completo, envie o que você conseguiu fazer! Iremos avaliar todo e qualquer desenvolvimento que você nos apresentar! O mais importante deste desafio é, que ao final dele, você adquira novos conhecimentos ou aprimore os que você já possui. ;)

Após, envie e-mail para marcio.tavares@jamestip.com, com cópia para torres@jamestip.com, com o assunto "Desafio Front-End", sinalizando a entrega do desafio para avaliação.

O que será avaliado?
Usabilidade

Criatividade

Boa apresentação (Layout Clean e Profissional)

Boas práticas da arquitetura da informação

Código limpo e organização

Documentação de código (Tip: Podem ser “comentários” no código)

Capacidade de tomada de decisões técnicas

Desafio Bônus
Implementar o mesmo portal em arquitetura micro-frontend utilizando single-spa

<hr>


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

