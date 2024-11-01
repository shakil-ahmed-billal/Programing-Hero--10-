
// import SimpleForm from './components/Form/SimpleForm'
// import StateFullForm from './components/StateFull/StateFullForm'

import Grandpa from "./components/Grandpa/Grandpa"

// import HookForm from "./components/HookForm/HookForm"
// import ReusableForm from "./components/ReusableForm/ReusableForm"

// import RafForm from "./components/RefForm/RafForm"

function App() {


  // const handleSingUp = data =>{
  //   console.log(" sing in data :" , data)
  // }

  // const handleUpdate = data =>{
  //   console.log(" sing up data :" , data)
  // }

  return (
    <>
      
      <h1 className='text-red-500'>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RafForm></RafForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'Sing Up'} handleSubmitData={handleSingUp}>
        <div className="">
          <h2>Sing up </h2>
          <p>please sing up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Sing in'} handleSubmitData={handleUpdate}>
        <div className="">
          <h2>Update profile</h2>
          <p>always keep your profile update</p>
        </div>
      </ReusableForm> */}
      <Grandpa></Grandpa>
    </>
  )
}

export default App
