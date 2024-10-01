// const data = {name:'shakil', roll:26};

// const newData = JSON.stringify(data);
// console.log(newData);



const newFetch = ()=>{

    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(response => response.json())
    .then(json => newFun(json))

    const newFun = (data) =>{
        const apiData = data ;
        const newData =  data.map(d => d.address?.geo?.lng)
        for(const name of newData){
            console.log(name);
        }
    }
} 

newFetch()