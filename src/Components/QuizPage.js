import React, { useState } from 'react'
import FlashCard from './FlashCard';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'


const QuizPage = (props)=> {
const [quizData, changeQuizData] = useState(props.quiz)
const [showAll, toggleShowAll] = useState(false)
const shuffleQuiz = (theQuiz)=>{
    var tempArray1 = []
    var tempArray2 = []

var i = 0
for (i; i<theQuiz.length; i++){
    if(theQuiz.indexOf(theQuiz[i]) % 2 ){
        tempArray1.push(theQuiz[i])

    }else{
        tempArray2.push(theQuiz[i])
    }
}

    var shuffledQuiz = tempArray1.concat(tempArray2)

changeQuizData(shuffledQuiz)

}
    return (
        <div  >

     
        <h2>title Flash cards title</h2>
        <Button onClick={()=>toggleShowAll(!showAll)}> show all questions & answers</Button>
        <Button
        onClick={()=>shuffleQuiz(quizData)}
        >Shuffle cards</Button>
        <button onClick={()=> console.log('quizData',quizData)} > log quiz data</button>
      
        {
            (showAll) ?
            quizData.map((m)=>{
                return(
                   
        <div style={{display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} key={quizData.indexOf(m)+1} >
        <p>{m.q}</p>
            <p>{m.a}</p>
        </div>
        
                 
                )
            })
            : <p>all qs and as</p>
        }
      
      
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            width: '100%',
            border: '5px dashed red'
        }}>
        


{quizData.map((m)=>{
  return (
      <div 
      key={quizData.indexOf(m)+1}
     >
      <FlashCard  question={m.q} answer={m.a} questionNumber={props.quiz.indexOf(m) + 1}/>
      </div>
  )
})}
     
</div>
 
        </div>
    )
}

export default QuizPage