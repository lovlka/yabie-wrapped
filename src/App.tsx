
import { AppContext } from "@app/contexts"
import { getInitialState } from "@app/services/getInitialState"
import { useReducer } from "react"
import { reducerFn } from "@app/reducers"
import { Portal } from "@app/portals"
import { StoryPortal } from "@app/portals/StoryPortal"
import { StartButton } from "./components/StartButton"
import { Logo } from "./components/Logo"

function App() {
  const [state, dispatch] = useReducer(reducerFn, getInitialState())
  const globalState = {
    ...state,
    dispatch
  }

  return (
    <AppContext.Provider value={globalState}>
      <section className="flex flex-col items-center">
        <Logo />
        <StartButton />
      </section>
      <Portal>
        <StoryPortal />
      </Portal>
    </AppContext.Provider>
  )
}

export default App
