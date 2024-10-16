import './App.css'
// import Todo from './Coms/Todo';
import Actor from './coms/Actor'
import Singer from './coms/Singer'

function App() {
 const actors =['shakib', 'raj', 'bapi', 'joshim', 'rubel']
 const singers = [
 { name: 'Dr. Maffujull rohman', age: 68},
 { name: 'Dr. Eva rahman', age: 23},
 { name: 'Dr. shavo dev', age: 45},
 { name: 'Dr. pritom', age: 65},
]
  return (
    <>
      {singers.map(singer => <Singer singer={singer}></Singer>)}


      <Actor name='babu raja'></Actor>
      {actors.map(actor => <Actor name={actor}></Actor>)}

      {/* <Todo 
      task='learn react'
      isDone={true}></Todo>
      <Todo 
      task='core concept' 
      isDone={false}></Todo>
      <Todo 
      task='try jsx' 
      isDone={true}></Todo> */}
      {/* <Device name="laptop" price='50000'></Device>
      <Device name='mobile' price='12000'></Device>
      <Device name='watch' price='25000'></Device>
      <Person></Person>
      <Student grade='7' score='99'></Student>
      <Student grade='12' score='56'></Student>
      <Student grade= '15' score='89'></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )

}

function Device(props){
  // console.log(props);
  return (
    <h2>This Device: {props.name} price: {props.price}</h2>
  )
}

function Person(){
  const age = 30 ;
  const money = 20;
  const person = {name:'Shakil', age:12}
  return (
    <>
      <h3>I am {person.name} with age: {person.age}</h3>
    </>
  )
}

function Student ({grade=1 , score=0}){
  return(
    <div className='student'>
    <h3>This is a Student</h3>
    <p>Name: {grade}</p>
    <p>Age: {score}</p>
    </div>
  )
}

function Developer(){
  const newStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return(
    <div style={newStyle}>
      <h5>Developer</h5>
      <p>Coding</p>
    </div>
  )
}

export default App
