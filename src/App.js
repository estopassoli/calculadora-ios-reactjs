import './App.css';
import Calculator from './components/Calculator/Calculator';
import SwitchLabels from './components/Switch/Switch';
import { useState } from 'react';
function App() {

  const [theme, setTheme] = useState('light');

  const changeTheme = (ev) => {
    if (ev) {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  }
  const styles = {
    backgroundColor: theme === 'light' ? '#000' : '#fff',
    color: theme === 'light' ? '#fff' : '#000'
  }
  return (
    <div className="App" style={styles}>
      <SwitchLabels change={(ev) => { changeTheme(ev.target.checked) }} />
      <Calculator theme={theme} />
    </div>
  );
}

export default App;
