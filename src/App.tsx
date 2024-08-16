import { useState } from 'react'
import './App.css'
import AgoraUIKit from 'agora-react-uikit'

const defaultStates = {
  token: '',
  channel: '',
  showVideo: false,
}

function App() {
  const [states, setStates] = useState(defaultStates);
  const callbacks = {
    EndCall: () => setStates(defaultStates),
  };

  const rtcProps = {
      appId: "1510f54378f344449c5ac30a62c11f7f",
      ...states
  };

  const videoCall = states.showVideo && states.channel && states.token;

  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <div style={{ display: 'flex', gap: '5px'}}>
      <input onChange={(e) => setStates({ ...states, channel: e.target.value })} 
        type='text' placeholder='channel name'
        style={{ height: "100px", width: "500px" }}
      />
      <input onChange={(e) => setStates({ ...states, token: e.target.value })}
        type='text' placeholder='token' 
        style={{ height: "100px", width: "500px" }}
      />
      <button onClick={() => setStates({ ...states, showVideo: true })}>Start Video</button>
    </div>
  );
}

export default App
