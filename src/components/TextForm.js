import React,{ useState} from 'react'
import PropTypes from 'prop-types'
import voice,{useSpeechRecognition} from 'react-speech-recognition'
import './txtform.css'


export default function TextForm(props) {
    const  [text,setText]=useState("");
    const [plchold,setPlchold]=useState("Please continue....")
    const [wcount,newWcount]=useState(0);
    const [ccount,newCcount]=useState(0);
    const [tm,newtm]=useState(0);
    const {transcript,resetTranscript}=useSpeechRecognition("");
    // const [dark,light]=useState({backgroundColor:"white" ,color:"black" ,border:"2px solid dark"})
    // const [txt,newtxt]=useState({backgroundColor:"white" ,color:"black" ,border:"1px solid black"})
    // const [vary,newVary]=useState("PLCHLD");
   // const [mode,newMode]=useState("Dark")

    // const toggle=()=>{
    //     if(dark.backgroundColor==="white"){
    //         light({backgroundColor:"#1C1B1B" ,color:"white" ,border:"2px solid white"})
    //         newtxt({backgroundColor:"#1C1B1B",color:"white",border:"1px solid white"})
    //         newVary("PLCHOLD");
    //         newMode("Light")
    //     }
    //     else{
    //       light(  {backgroundColor:"white" ,color:"black" })
    //       newtxt({backgroundColor:"white" ,color:"black" ,border:"1px solid black"})
    //       newVary("PLCHLD");
    //       newMode("Dark")
    //     }


    // }
    function countWords(str) {
        const arr = str.split(' ');
      
        return arr.filter(word => word !== '').length;
      }


    const start=()=>{
       props.funct("Recording started!!","success")
        resetTranscript();
        voice.startListening({continuous:true})

    }

    const stop=()=>{
        props.funct("Recording stopped!!",'success')
        
        voice.stopListening();
        setText(transcript);
        let str=transcript;
        
      
    newWcount(countWords(str))
    newCcount(str.length)
    newtm((countWords(str))*0.008)
    }


    const clear=()=>{
        setText("")
        newWcount(0)
    newCcount(0)
    newtm(0)
    }
const lowHandle=()=>{
    setText(text.toLowerCase());
}
    const handle=()=>{
        if(text==="")
        {
            setPlchold("Please enter something to continue..")
        }
        else{
        setText(text.toUpperCase())
        
        }
        
    }
    const handlechange=(event)=>{
        setText(event.target.value)
    let str=event.target.value

    newWcount(countWords(str))
    newCcount(str.length)
    newtm((countWords(str))*0.008)

    

    }

    const copy=()=>{
     
       let hell=document.getElementById(props.mode==='light'?"PLCHLD":'PLCHOLD');
       hell.select();
       hell.setSelectionRange(0, 99999); 
       navigator.clipboard.writeText(hell.value);
       document.getSelection().removeAllRanges();
       props.funct("Copied to clipboard","success");
    }
    const find_repl=()=>{
let ori=prompt("Enter the word which you want to replace");

        let newTxt=prompt("Enter the new word");
        let aux=text.split(' ');
        for(let i=0;i<aux.length;i++)
        {
            if(aux[i]===ori)
            aux[i]=newTxt;
        }
        setText(aux.join(" "));
    }
    

      
  return (

    <div style={props.mode==='light'?{backgroundColor:"white" ,color:"black" ,border:"2px solid dark"}:{backgroundColor:"#1C1B1B" ,color:"white" ,border:"2px solid white"}}>
        <div className="container mb-3">
        <h4>{props.title}</h4>
    <textarea style={props.mode==='light'?{backgroundColor:"white" ,color:"black" ,border:"1px solid black"}:{backgroundColor:"#1C1B1B",color:"white",border:"1px solid white"}} className="form-control "  placeholder={plchold} value={text}  onChange={handlechange}   id={props.mode==='light'?"PLCHLD":'PLCHOLD'} rows="8"></textarea>
    <button className="btn btn-primary my-3 mx-3 " onClick={start}>Start</button>
    <button className="btn btn-primary my-3 mx-3 " onClick={stop}>Stop</button>


    
    <button disabled={text.length===0} className="btn btn-primary my-3 mx-3 " onClick={handle}>Convert to UpperCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={lowHandle}>Convert to Lower case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={clear}>Clear</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={copy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={find_repl}>Find and Replace</button>


    {/* <button  className={`btn ${mode==="Dark" ? 'btn-dark' : 'btn-light'}`} onClick={toggle} style={{border:"2px solid white"}}>{mode} Mode</button> */}

                                                       
  </div>
    <div className="container my-3">
        <h5>Your text summary</h5>
        <p>
            No. of Words : {wcount}
         </p>
         <p>
            No. of characters : {ccount}
        </p>
        <p>
            Time taken to read(minutes) : {tm.toPrecision(2)}
        </p>
        <h3>Preview</h3>
        <p>
            {text.length>0?text:"Nothing to preview...."}
        </p>
    </div>

    </div>
    
  )
}

TextForm.propTypes={
    title:PropTypes.string.isRequired


}
