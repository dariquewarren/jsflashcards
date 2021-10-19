import React from 'react'
import FlashCard from './FlashCard';


const QuizPage = (props)=> {
    return (
        <div >
<button onClick={()=> console.log(props.quiz)} > test button</button>
{props.quiz.map((m)=>{
  return (
      <div 
      key={props.quiz.indexOf(m)+1}
      style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
      }}>
      <FlashCard  question={m.q} answer={m.a} questionNumber={props.quiz.indexOf(m) + 1}/>
      </div>
  )
})}
     
 
        </div>
    )
}

export default QuizPage