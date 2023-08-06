import { useState } from "react";

function App() {
  const [helloText, setHelloText] = useState<string>()
  
  return <>
    <h1>
      Hello App
    </h1>
    <button onClick={async () => {
      const response = await fetch(`${process.env.REACT_APP_API_SERVER}/hello`, {mode: 'cors'})
      const res = await response.json()
      setHelloText(res.msg)
    }}>
      Call API
    </button>
    <div>
      {helloText}
    </div>
  </>
}

export default App
