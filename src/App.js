import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Read from './components/Read.jsx'
import Write from './components/Write.jsx'

function App() {
  return (
    <Provider store={store}>
      <Read />
      <Write />
    </Provider>
  );
}

export default App;
