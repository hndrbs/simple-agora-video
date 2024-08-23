import { useState } from 'react'
import './App.css'
import AgoraUIKit from 'agora-react-uikit'

const defaultStates = {
  token: '',
  channel: '',
  showVideo: false,
  uid: 0,
  appId: "1510f54378f344449c5ac30a62c11f7f",
}

function App() {
  const [states, setStates] = useState(defaultStates);
  const callbacks = {
    EndCall: () => setStates({...states, showVideo: false}),
  };

  const videoCall = states.showVideo 
    && states.uid
    && states.channel 
    && states.token;

  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={states} callbacks={callbacks} />
    </div>
  ) : (
    <div className='flex-container'>
      <label>uid</label>
      <input onChange={(e) => setStates({ ...states, uid: +e.target.value })} 
        type='text' placeholder='uid'
        value={states.uid}
      />
      <label>channel</label>
      <input onChange={(e) => setStates({ ...states, channel: e.target.value })} 
        type='text' placeholder='channel name'
        value={states.channel}
      />
      <label>token</label>
      <input onChange={(e) => setStates({ ...states, token: e.target.value })}
        type='text' placeholder='token' value={states.token}
      />
      <button onClick={() => setStates({ ...states, showVideo: true })}>Start Video</button>
    </div>
  );
}

export default App
