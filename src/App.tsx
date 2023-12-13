import { Header } from "@app/components/Header"
import { AppContext } from "@app/contexts"
import { getInitialState } from "@app/services/getInitialState"
import { useReducer } from "react"
import { reducerFn } from "@app/reducers"
import { Portal } from "@app/portals"
import { StoryPortal } from "@app/portals/StoryPortal"
import { StoryBubble } from "./components/StoryBubble"
import { USERS } from "./data/users"

function App() {
  const [state, dispatch] = useReducer(reducerFn, getInitialState())
  const globalState = {
    ...state,
    dispatch
  }

  const { id, name, avatar } = USERS[0];

  return (
    <AppContext.Provider value={globalState}>
      <section>
        <Header />
        <StoryBubble
          userId={id}
          userName={name}
          imgUrl={avatar}
        />
      </section>
      <Portal>
        <StoryPortal />
      </Portal>
    </AppContext.Provider>
  )
}

export default App
