import FormComponent from './components/forms/form';
import LoginForm from './components/login';
import RegisterForm from './components/register';
import UseReducerExample from './components/useReducer/useReducer';
import classes from './styles.module.css';

function App() {
  
  return (
    <div className={classes.mainClass}>
      <div style={{display: 'flex', gap: '10px'}}>
        <LoginForm/>
        <RegisterForm/>
      </div>
    </div>
  )
}

export default App
