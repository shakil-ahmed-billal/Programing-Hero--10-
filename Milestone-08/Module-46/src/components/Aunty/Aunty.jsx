import { useContext } from "react"
import Cousin from "../Cousin/Cousin"
import { MoneyContext } from "../Grandpa/Grandpa"

const Aunty = () => {

  const [money , setMoney] = useContext(MoneyContext)

  return (
    <div>
      <h2>Aunty</h2>
     <section>
      <Cousin name={'mamsad'}></Cousin>
      <Cousin name={'rubaiya'}></Cousin>
     </section>
     <p>Money : {money}</p>
     <button onClick={()=> setMoney(money + 1000)}>Add</button>
    </div>
  )
}

export default Aunty