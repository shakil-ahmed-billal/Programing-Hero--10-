import { useContext } from "react"
import Special from "../Special/Special"
import { AssetContext } from "../Grandpa/Grandpa"

const MySelf = ({asset}) => {
    const gift = useContext(AssetContext)
  return (
    <div>
        <h2>MySelf</h2>
        <Special asset={asset}></Special>
        <h2>Also has: {gift}</h2>
    </div>
  )
}

export default MySelf