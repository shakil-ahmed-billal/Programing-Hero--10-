// export default function Todo({task}){
//     return(
//         <ul>
//             <li>Task: {task}</li>
//         </ul>
//     )
// }

// conditional rendering option 2
// export default function Todo({task, isDone}){
//     if(isDone){
//         return (
//             <li>Finish: {task}</li>
//         )
//     }
//     return(
//         <li>Work on: {task}</li>
//     )
// }

// conditional rendering 3 
// export default function Todo({task, isDone}){
//     return (
//         <li>{isDone? 'Finish ' : 'work on'} : {task}</li>
//     ) 
// }

// conditional rendering option 4 &&  5||
// export default function Todo({task, isDone}){
//     return (
//         // <li> Task :{task} {isDone && ': Done'}</li>
//         <li> Task :{task} {isDone || ': Do it'}</li>
//     ) 
// }

// conditional rendering option 6
export default function Todo({task, isDone}){
    let listItem ; 
    if(isDone){
        listItem = <li>Finish: {task}</li>
    }
    else{
        <li>Work on: {task}</li>
    }
    return listItem ;
}
