import useMaze from "state/maze"
import Field from "components/Field"
import Hedges from "components/Hedges"
import Character from "components/Character"
import GlobalStyles from "components/GlobalStyles"

const { min, max } = Math

const App = props => {
  const { x, y, maze, loaded } = useMaze(123456)
  return (
    <main className="app">
      <GlobalStyles />
      <h1 className="title">A-Maze'ing Routers!</h1>
      {loaded && (
        <Field width={30} height={30}>
          <Hedges maze={maze} width={30} height={30} />
          <Character x={x} y={y} />
        </Field>
      )}
    </main>
  )
}

export default App
