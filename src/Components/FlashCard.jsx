import React, { useState, useRef } from 'react'
import Card from 'react-bootstrap/Card'
import '../App.css';
export default function FlashCard(props) {
const [showAnswer, toggleAnswer] = useState(false)
const [showQuestion, toggleQuestion] = useState(true)
const cardRef = useRef()

    return (
        <div >
       <Card ref={cardRef} as='button' style={{width: '20rem', height: '15rem'}} bg='secondary'
       onClick={()=>{
        toggleAnswer(!!!showAnswer)
        toggleQuestion(!!!showQuestion)
    var cardStyle=  (cardRef.current.style.height !== '10rem') 
    ? cardRef.current.style.height = '10rem'
     : cardRef.current.style.height = '5rem'
        
        console.log('showAnswer', showAnswer)
        console.log('showQuestion', showQuestion)
        console.log('card reference', cardRef)

    }
        
    }>
       <Card.Header>FlashCard Question {props.questionNumber}</Card.Header>
       {(showQuestion) 
        ? 
        <Card.Footer style={{backgroundColor: 'yellow'}}>
       {props.question}
       </Card.Footer>
        :<p></p>}
       

{
    (showAnswer) ?
    <Card.Footer style={{backgroundColor: 'green', color:'white'}}>
    {props.answer}
    </Card.Footer> : <p></p>
}

       

       </Card>
        
            
            
        </div>
    )
}
