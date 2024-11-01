import { useContext } from "react"
import { AssetContext } from "../Grandpa/Grandpa"

const Friend = () => {


    const gift = useContext(AssetContext)

  return (
    <div>
        <p>Friend</p>
        <p>{gift}</p>
    </div>
  )
}

export default Friend