import React, { useState } from "react"
import "./App.css"
import { ChildArea } from "./ChildArea"

export const App = () => {
  console.log("App")
  const [text, setText] = useState("")
  const [open, setOpen] = useState(false)

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value)

  const onClickOpen = () => setOpen(!open)

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  )
}

export default App
