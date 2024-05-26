
import './App.css';
import News from './components/News';
import {Provider} from 'react-redux' 
import store from './store/index.js'

function App() {
  return (
   <Provider store={store} >
     <div className="App">
      <News/>
     </div>
   </Provider>
  );
}

export default App;

/*
https://newsapi.org/v2/everything?apikey=86074700afeb4a65872f00a3986b9d61&q=chatgpt -----API LINK 
*/ 