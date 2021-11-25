import React,{useState,useEffect} from 'react';
import {Meme} from './components/Meme'

function App() {
  const [templates,setTemplates]=useState([]);
  const [template,setTemplate]=useState(null);
  const [buttn,setButtn]=useState(false);
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes').then(x => x.json().then(response => 
    setTemplates(response.data.memes)));
  },[])
  return (<div>

  { !template && <div style={{textAlign:'center'}}>
    <button  onClick={ () => {
      {setButtn(true)}
      }} 
      style={{color:'white',backgroundColor:"#8B008B",paddingLeft:20,paddingRight:20, fontSize:30}}> Create your own meme </button><br /><br /></div>
    }
 
  <div style={{textAlign:'center'}}><h1>{!template && buttn? 'Pick any template':''}</h1></div>
 
 
 
  {
    !template && templates.map(template =>{
      return <img style={{width:200,height:200}} key={template.id} src={template.url} alt={template.name} 
      onClick={ () => {
        setTemplate(template);
      }}

       />
    })
  }
  {
    template && <Meme template={template}/>
  }
   
    </div>
  );
}

export default App;
