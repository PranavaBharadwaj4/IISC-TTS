import TextToSpeech from './components/TextToSpeech';
import { useState } from "react"
const App = () => {
  const [ourText, setOurText] = useState("")
  return (
    <div>
      <h1>Text-To-Speech</h1>
      <input
        type='text'
        value={ourText}
        placeholder='Enter Text'
        onChange={(e) => setOurText(e.target.value)}
      />
      <TextToSpeech text={ourText} />
    </div>
  );
};

export default App;