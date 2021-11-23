const Lista = (props) => {

	
	let fillingList=[];

	for(let i=0, len=localStorage.length; i<len; i++) {
	       //fillingList[i] ={id:Object.keys(localStorage)[i], nome:Object.values(localStorage)[i]};
	      
	       fillingList[i]=JSON.parse(Object.values(localStorage)[i])
	    
	}

	//console.log(fillingList[0].codigo)

	//crea um novo array lis apos mapear o localstorage

  	let lis = fillingList.map(k =>{
		return(

			<li key={k.codigo}>

				ID:{k.codigo}  -> Produto:{k.nome}
			</li>
			);
	});

  	return(
		<div>
			
			<ul style={{listStyle:"none"}}>
				{lis}
			</ul>	
			 <button onClick={() => window.location.reload(false)}>refresh </button>
		</div>


	)

}
export default Lista;