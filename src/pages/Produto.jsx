import React, { useState } from  'react'


const Produto = () => {


	const[form,setForm]=useState({"codigo":'',"categoria":"","nome":"","fornecedor":"","valor":""})

//mediante useState configura o valor da variavel Form com setForm a partir dos input no formulario
	const handleFormChange=(ev)=>{

		if(ev.target.getAttribute('name')==='fcodigo'){

			setForm({"codigo":ev.target.value,"categoria":form.categoria,"nome":form.nome,"fornecedor":form.fornecedor,"valor":form.valor})	

		}else if(ev.target.getAttribute('name')==='fcategoria'){

			setForm({"codigo":form.codigo,"categoria":ev.target.value,"nome":form.nome,"fornecedor":form.fornecedor,"valor":form.valor})	

		}else if(ev.target.getAttribute('name')==='fnome'){

			setForm({"codigo":form.codigo,"categoria":form.categoria,"nome":ev.target.value,"fornecedor":form.fornecedor,"valor":form.valor})	

		}else if(ev.target.getAttribute('name')==='ffornecedor'){

			setForm({"codigo":form.codigo,"categoria":form.categoria,"nome":form.nome,"fornecedor":ev.target.value,"valor":form.valor})	

		}else if(ev.target.getAttribute('name')==='fvalor'){

			setForm({"codigo":form.codigo,"categoria":form.categoria,"nome":form.nome,"fornecedor":form.fornecedor,"valor":ev.target.value})		
		}
		
	}

//guarda os elementos no localstorage
	const save=(ele)=>{
		

		let arreglo = {"codigo":ele.codigo,"categoria":ele.categoria,"nome":ele.nome,"fornecedor":ele.fornecedor,"valor":ele.valor}

		//o local storage aceita elementos do tipo string
		let arreglo_json = JSON.stringify(arreglo);

		//configuta chave valor no local storage
		localStorage.setItem(ele.codigo,arreglo_json)

		
		
	}

	return(
		 <div>
              <label>Codigo do Produto</label>
              <input type="text" name="fcodigo" value={form.codigo} onChange={(e)=>handleFormChange(e)}/><br/>
              <label>Categoria do Produto</label>
              <input type="text" name="fcategoria" value={form.categoria} onChange={(e)=>handleFormChange(e)}/><br/>
              <label>Nome do Produto</label>
              <input type="text" name="fnome" value={form.nome} onChange={(e)=>handleFormChange(e)}/><br/>
              <label>Nome do Fornecedor</label>
              <input type="text" name="ffornecedor" value={form.fornecedor} onChange={(e)=>handleFormChange(e)}/><br/>
              <label>Valor do Produto</label>
              <input type="text" name="fvalor" value={form.valor} onChange={(e)=>handleFormChange(e)}/><br/>

              <p>codigo:{form.codigo}</p>
              <p>categoria digitado:{form.categoria}</p>
              <p>nome digitado:{form.nome}</p>
			  <p>fornecedor digitado:{form.fornecedor}</p>
			  <p>valor digitado:{form.valor}</p>	

              <button onClick={()=>save(form)}>Gravar </button>
              
          </div>
		);
}

export default Produto;