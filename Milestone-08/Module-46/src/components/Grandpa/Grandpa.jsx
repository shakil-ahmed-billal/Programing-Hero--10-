import { createContext, useState } from "react"
import Aunty from "../Aunty/Aunty"
import Dad from "../Dad/Dad"
import Uncle from "../Uncle/Uncle"
import './grand.css'

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {

  const [money , setMoney] = useState(1000)
  const asset = 'Diamond'
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>net Money : {money}</p>
        <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
          <Dad asset={asset}></Dad>
          <Uncle></Uncle>
          <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
        </MoneyContext.Provider>
    </div>
  )
}

export default Grandpa

/**
 * 1. create a context and export or
 * 2. add provider for the context with a value .
 * 3. useContext 
 */