import { useState } from "react";

function App() {
  const [helloText, setHelloText] = useState<string>()
  
  return <>
    <h1>
      Hello React
    </h1>
    <button onClick={async () => {
      const response = await fetch("http://localhost:8000/api/hello", {mode: 'cors'})
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
