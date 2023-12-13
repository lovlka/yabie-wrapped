import { AppContext } from "@app/contexts"
import { IAppContext } from "@app/contexts/types.interface"
import { useContext } from "react"
import { toggleModal } from "@app/services/toggleModal"

const StartButton: React.FC = (): JSX.Element => {
  const { dispatch } = useContext(AppContext) as IAppContext
  const handleClick = () => dispatch && toggleModal(dispatch, {
    userId: 0,
    userName: 'Yabie Wrapped'
  })

  return(
    <button onClick={handleClick} className="bg-black rounded-full px-8 py-4 font-bold text-white">
      Visa mitt Yabie Wrapped
    </button>
  )
}

export { StartButton }