import React, { useState } from 'react'

const App = () => {
  const [mess,setMess]=useState({
    Message:''
  });
  const  onInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setMess({
      [name]:value
    });
    console.log(value);
  }
  const buttonPressed=async(e)=>{
    e.preventDefault();
    const response=await fetch("http://localhost:5000/sendMessage",{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(mess),
    })
    if(response.ok){
      console.log(response);

    }
  }
  return (
    <div className='h-screen flex flex-col items-center '>
      <h1>SEND MY ANONYMOUS MESSAGE</h1>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div>
          <textarea name="Message" id="Message" value={mess.Message} onChange={onInput} style={{ maxHeight: '200px', maxWidth: '250px', minHeight: '200px', minWidth: '250px',borderRadius:'25px',padding:'15px',borderColor:'black',borderWidth:'2px' }} />
        </div>
        <div>
          <button type='submit' name="submit-button" className='border border-black rounded-md p-1' onClick={buttonPressed}>Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default App