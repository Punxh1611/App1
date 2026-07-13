import logo from './logo.svg';
import './App.css';

function App() {
  let r = "React"
  let rn = "React Native"
  const el=(
    <div>
      Created website & mobile app<br />
      with {r} & {rn}
    </div>
  );
  return (
    <>
    <h3>Hello world<br></br>สวัสดีชาวโลก</h3>
    <h3>{el}</h3>
    </>
  );
}

export default App;
