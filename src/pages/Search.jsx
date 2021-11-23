import React, {useState} from 'react';

let elemento=null
let array=[]
let seted

const Search = () => {

  const [codigo, setTest]=useState({"val":""})	
  const [showResults, setShowResults] = React.useState(false)

  //const[form,setForm]=useState({"id":null,"categoria":null,"nome":null,"fornecedor":null,"valor":null})
  

//pega o elemento da localstorage q e um string e converte em um objeto
	const consultar = (valor)=>{
		
		setShowResults(!showResults)

		if(localStorage.getItem(valor)!=null){
			elemento=JSON.parse(localStorage.getItem(valor))
			array= [elemento.codigo,elemento.categoria,elemento.nome,elemento.fornecedor,elemento.valor]
			console.log(array)
			seted=true

		}else{
		  console.log("codigo invalido")
		  seted=false
		}
	}

	//metodo que elimina o valor na localstorage
	const apagar = (chave)=>{     
		localStorage.removeItem(chave)      
	};

	const textButton = showResults? "Hide":"Ver Produto"
  
  return (
    <div>

      <label>Digite um ID:</label><br/>
       <input type="text" value={codigo.val}  onChange={(el)=>setTest(el.target.value)} placeholder="aqui"/>
      <br/>		
      <button onClick={()=>consultar(codigo)} >{textButton}</button>

      { showResults ? <Results id={ array[0] }
      	categoria={ array[1] }
      	produto={ array[2] }
      	fornecedor={ array[3] }
      	valor={ array[4] }
      	activo={ seted }
      	>algo</Results> : null }

      	<button onClick={()=>apagar(codigo)}>Eliminar Produto</button>
    </div>
  )
}

const Results = (props) => (
  <div id="results" className="search-results">
  	{props.activo ?  <ul>
	     <li style={{listStyle:"none"}}>ID: {props.id}</li>
	     <li style={{listStyle:"none"}}>Categorira: {props.categoria}</li>
	     <li style={{listStyle:"none"}}>Produto: {props.produto}</li>
	     <li style={{listStyle:"none"}}>Fornecedor: {props.fornecedor}</li>
	     <li style={{listStyle:"none"}}>Valor: {props.valor}$</li>
    </ul>:
    "codigo invalido"}
   
  </div>
)

export default Search;