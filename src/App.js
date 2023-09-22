import { useEffect , useState } from "react";
import './App.css';
import {motion , useAnimationControls} from "framer-motion";


export const App = () => {

  const [cookies, setcookie] = useState()
  useEffect(() => {

    setcookie(parseInt(localStorage.getItem('ckey')));

  }, []);

  const controls = useAnimationControls()
  
  function newCookie() {
    setcookie(cookies + 1);
    localStorage.setItem('ckey', cookies+1);
    controls.start({ scale: 0.8 , x: -10})
    setTimeout(() => {  controls.start({scale: 1 }); }, 50);
  }
  
  function Reset() {
    if (window.confirm("You Are Going To Reset Your SCORE!") === true) {
      
      if (window.confirm("Second Confirm!") === true) {
        setcookie(0)
        localStorage.setItem('ckey', cookies)
        alert("Score Reseted")
      } else {
        alert("Your Score Is Kept")
      }
    } else {
      alert("Your Score Is Kept")
    }
  }

  const [Theme, SetTheme] = useState(false)

  function ChangeTHeme(){
    const CssVar = ['--text','--shadow','--contrest','--theme','--outline']
    const light = ['black','#e8e8e8','white',"var(--Night)",'cyan']
    const Night = ['white','#2d2d2e','black',"var(--Light)",'#004042']
    if (Theme == false){
      for (let i = 0; i < 5; i++) {
        r.style.setProperty(CssVar[i], light[i]);
        console.log("Changed")
        SetTheme(true)
      }
    }
    else {
      for (let i = 0; i < 4; i++) {
        r.style.setProperty(CssVar[i], Night[i]);
        console.log("Changed")
        SetTheme(false)
      }
    }
  }

  var r = document.querySelector(':root');
  r.style.setProperty('--blue', 'lightblue');
  
  return(
      <>
      <div className="App">
        <h1>This is a Cookie Clicker.</h1>
      </div>
      <div className="Texts">
        <div>
          <motion.h1 animate={controls} id="counter">Cookies: {cookies} </motion.h1>
        </div>
        <div>
          <button onClick={Reset} id="reset">Reset</button>
        </div>
        <div>
          <motion.button whileHover={{ scale:1.1 }} whileTap={{ scale: 0.9 }} className="button" onClick={newCookie}><motion.h2 id="text" >Cookie</motion.h2></motion.button>
        </div>
      </div>
      <div><motion.button whileTap={{ rotate: 40}} className="themebutton" onClick={ChangeTHeme}></motion.button></div>
      </>
     )
  }
export default App