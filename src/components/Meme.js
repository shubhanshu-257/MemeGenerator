import React,{useState,useEffect} from 'react';
const objectToQueryParam = obj => {
  const parameters = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return "?" + parameters.join("&");
};
export const Meme = ({ template, onClick }) => {
  const [textt0,setTextt0]=useState("");
  const [textt1,setTextt1]=useState("");
  const [textt2,setTextt2]=useState("");
  const [textt3,setTextt3]=useState("");
  const [meme,setMeme]=useState(null);
  const [h,setH]=useState(false);
    return (
    <div style={{textAlign:'center'}}>{ !meme &&
      <form onSubmit={ 
        
        async (e) => {
        e.preventDefault();
        
        const parameters = {
          template_id : template.id,
          text0 : textt0,
          text1 : textt1,
          text2 : textt2,
          username : 'shubhanshu257',
          password : 'react.com12@'
        }
        
        const response = await fetch(
          `https://api.imgflip.com/caption_image${objectToQueryParam(
            parameters
          )}`
        );
        const json = await response.json();
        setMeme(json.data.url);
      }}
    >
        <p>Enter the following details to create your meme;</p>
        <input type="text" id='1' required value={textt0} onChange={e => {setTextt0(e.target.value)}}/><br /><br />
        <input type="text" id='2' value={textt1} onChange={e => {setTextt1(e.target.value)}}/><br /><br />
        <input type="text" id='3' value={textt2} onChange={e => {setTextt2(e.target.value)}}/><br /><br />
        <input type="text" id='4' value={textt3} onChange={e => {setTextt3(e.target.value)}}/><br /><br />
        <button type="submit" style={{color:'white',backgroundColor:'tomato',paddingLeft:62,paddingRight:62}}>Generate</button>
      </form>
}
{meme && <div style={{textAlign:'center'}}>
  <h4>Here's the meme you have generated</h4>
  <img src={meme} />
  </div>

}
    </div>
    );
  };
