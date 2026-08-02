import {Routes ,Route} from 'react-router-dom'
import StopWatch from "./StopWatch";

function App() {
  return ( 
    <>
    <Routes>
      <Route path="/" element={<StopWatch/>}/>
    </Routes>
    </>
   );
}

export default App;