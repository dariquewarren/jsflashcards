import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import QuizPage from './Components/QuizPage'
const jsQuiz =[
{q: 'inside which element do we put javascript?',
a: '<script/>'},
{q: 'Where is the correct place to insert a javascript?',
a: 'the <body> section'},
{q: 'What is the correct syntax for referring to an external script called "xxx.js"?',
a: '<script src="xxx.js"/>'},
{q: 'Is JavaScript the same as Java?',
a: 'No'},
{q: 'What will the following code return: Boolean(10 > 9)',
a: 'true'}
]

function App() {

  return (
    <div className="App">
    <QuizPage quiz={jsQuiz}/>
    </div>
  );
}

export default App;
