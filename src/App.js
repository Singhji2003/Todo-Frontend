import Home from './component/Home';
import DataState from './context/DataState';
const App = ()=>{
  return(
    <DataState>
      <Home/>
    </DataState>
  );
}
export default App;