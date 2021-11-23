//no usado, esquema inicial para o desemvolvimento final

import React, {useState} from 'react';


let ID=0;

const Page1 = () => {


  const [nome, setNome]=useState("")

  const armazenar = (chave,valor)=>{
   ID += 1;
  
    localStorage.setItem(ID,valor)

    console.log(ID+"ID");
    console.log(chave+"chave");
    console.log(valor);
   
  }

  return (
    <div
      style={{
        height: '300px',
        width: '100%',
        //background: 'blue',
        display: 'flex', 
        flexDirection:'column',
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
      }}    
    >      

      <label>Digite um nome:</label><br/>

      <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)} /><br/>
      <button onClick={()=>armazenar(ID,nome)}>Gravar </button>

     
    </div>
  );
}
 
export default Page1;
