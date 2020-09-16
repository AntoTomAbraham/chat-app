import React, { useState, useEffect } from 'react';
import "./App.css";
import db from './firebase';
import Message from './Message';
import firebase from './firebase'
export default function App() {
  const[input,setInput]=useState('');
  const [messages, setmessages] = useState([]);
  const [username,setUsername]=useState('');

  useEffect(()=>{
    db.collection('123').onSnapshot(snapshot =>{
      setmessages(snapshot.docs.map(doc => doc.data()))
    } )
  },[])



  useEffect(() => {
      setUsername(prompt("Please enter your name"));
    }, [])





  const sendMessage= (event) => {
  event.preventDefault(); 
  

  db.collection("123").add({
    message:input,
    username:username,
    /*timestamp:firebase.firestore.FieldValue.serverTimestamp()*/
  })
  setInput('');
}
    return (
      <div className="App">
        <h1>Welcome Hustlers!!</h1>
    <h2>Welcome {username}</h2>
        <form action="">
          <input value={input} name="send" type="text" onChange={event=>setInput(event.target.value)}/>
          <br/>
          <button disabled={!input} type='submit' onClick={sendMessage}>Send Message</button>
        </form>
        {
          messages.map(message =>(
            <Message username={username} message={message} />
          ))
        }
      </div>
    )
    }