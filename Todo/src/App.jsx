import ContextButton from './components/contextToggle/button';
import ContextText from './components/contextToggle/text';
import classes from './styles.module.css';

function App() {
  
  return (
    <div className={classes.mainClass}>
      <ContextButton/>
      <ContextText/>
    </div>
  )
}

export default App
