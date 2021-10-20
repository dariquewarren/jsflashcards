import React, { useState, useRef } from 'react'
import Card from 'react-bootstrap/Card'
import '../App.css';
export default function FlashCard(props) {
const [showAnswer, toggleAnswer] = useState(false)
const [showQuestion, toggleQuestion] = useState(true)
const cardRef = useRef()

    return (
       <Card ref={cardRef} bg='dark'  as='button' 
       style={{alignItems: 'center', justifyContent: 'center', color:'white', minWidth:'15rem', maxWidth: '20rem', width: 'auto', minHeight:'15rem', maxHeight:'20rem', height: 'auto'}} 
       onClick={()=>{
        toggleAnswer(!!!showAnswer)
        toggleQuestion(!!!showQuestion)
    
        
        console.log('showAnswer', showAnswer)
        console.log('showQuestion', showQuestion)
        console.log('card reference', cardRef)

    }
        
    }>
       <Card.Header> 
       <h3>{(showAnswer) ? 'Answer':'Question'} </h3>
       </Card.Header>
       {(showQuestion) 
        ? 
        <Card.Footer style={{border: '2px solid yellow'}}>
<h4>
{props.question}
</h4>       </Card.Footer>
        :<p></p>}
       

{
    (showAnswer) ?
    <Card.Footer style={{border: '2px solid green'}} >
    <h2>    {props.answer}
    </h2>
    </Card.Footer> : <p></p>
}

       
       </Card>
        
            
        
    )
}
