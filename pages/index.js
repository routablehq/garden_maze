import React, {useEffect} from 'react';
import useMaze from "state/maze"
import Field from "components/Field"
import Hedges from "components/Hedges"
import Character from "components/Character"
import GlobalStyles from "components/GlobalStyles"
import io from 'socket.io-client';


const { min, max } = Math

const socket = io('http://localhost:8080');


const App = props => {
  socket.emit('client connected', 'client connected');
  
  socket.on('server connected', (payload) => {
    console.log('server connected', payload);
  });
  
  
  
  const { x, y, maze, loaded } = useMaze()
  
  return (
    <main className="app">
      <GlobalStyles />
      <h1 className="title">A-maze'in Routable</h1>
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
