//no usado, esquema inicial para o desemvolvimento final
import React, {useState} from 'react';

let elemento=null

const Page2 = () => {
  
  const [codigo, setTest]=useState()

  const consultar = (valor)=>{
     
      console.log("valor");
      console.log(valor);
      console.log(localStorage.getItem(valor));
      
      elemento=JSON.parse(localStorage.getItem(valor))
      
      console.log(elemento.codigo)
     
      
  }
  
  return (
    <div
      style={{
        height: '300px',
        width: '100%',
        //background: 'red',
        display: 'flex',
        flexDirection:'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
      }}    
    >
     
      <label>Digite um ID:</label><br/>
       <input type="text" value={codigo}  onChange={(el)=>setTest(el.target.value)} placeholder="aqui"/>
      <br/>
      
      <button onClick={()=>consultar(codigo)} >Ver Nome</button>

    </div>
  );
}
 
export default Page2;
