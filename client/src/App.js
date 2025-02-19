import './App.css';
import Form from './components/Form/Form';
import StockPage from './pages/StockPage/StockPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
          <Route path="/form" component={Form} />
          <Route path="/stock" component={StockPage} />
        </Switch>
      </Router>
      </header>

      <StockPage />
      <Form />
    </div>
  );
}

export default App;
