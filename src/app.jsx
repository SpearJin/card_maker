import './app.css';
import Login from './components/login/login';

function App({ authService }) {
  return (
    <div>
      <Login authService={authService} />
    </div>
  );
}

export default App;
