import './App.css'
import { Data } from './Data/Data';

function App() {
  const urlData = 'http://localhost:7070/data'
  const urlLoading = 'http://localhost:7070/loading'
  const urlError = 'http://localhost:7070/error';

   return (
    <>
      <Data url={urlData}/>
      <Data url={urlLoading}/>
      <Data url={urlError}/>
    </>
  )
}

export default App
