import { useEffect , useState } from "react";
import './App.css';
import {motion , useAnimationControls} from "framer-motion";


export const App = () => {
  
  const [cookies, setcookie] = useState(0)
  const [cursor, setcursor] = useState(0)
  const [test,settest] = useState(0)
  useEffect(() => {
    if (isNaN(parseInt(localStorage.getItem('ckey')))) {
      localStorage.setItem('ckey', 0)
    }
    if (isNaN(parseInt(localStorage.getItem('cukey')))) {
      localStorage.setItem('cukey', 0)
    }
    setcookie(parseInt(localStorage.getItem('ckey')));
    setcursor(parseInt(localStorage.getItem('cukey')));
  }, []);
  
  function newCookie() {
    setcookie(cookies + 1);
    localStorage.setItem('ckey', cookies+1);
    controls.start({ x: -10,y: -10, scale:0.9 })
    setTimeout(() => {  controls.start({x: 0,y:0,scale: 1}); }, 50);
  }
  
  function Timer() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setCount(settest(test + 1));
        if (cursor > 0) {
        setcookie(cookies + cursor);
        localStorage.setItem('ckey', cookies+cursor);
        controls.start({ x: -10,y: -10, scale:0.9 })
        setTimeout(() => {  controls.start({x: 0,y:0,scale: 1}); }, 50);
        }
      }, 1000);
    }, [test]); // <- add empty brackets here
  }
  
  Timer()
  
  const controls = useAnimationControls()
  
  function newCookie() {
    setcookie(cookies + 1);
    localStorage.setItem('ckey', cookies+1);
    controls.start({ x: -10,y: -10, scale:0.9 })
    setTimeout(() => {  controls.start({x: 0,y:0,scale: 1}); }, 50);
  }
  
  function Reset() {
    if (window.confirm("You Are Going To Reset Your SCORE!") === true) {
      
      if (window.confirm("Second Confirm!") === true) {
        setcookie(0)
        localStorage.setItem('ckey', 0)
        setcursor(0)
        localStorage.setItem('cukey', 0)
        
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
    const Night = ['white','#2d2d2e','black',"var(--Light)",'#009ca1']
    if (Theme == false){
      for (let i = 0; i < 5; i++) {
        r.style.setProperty(CssVar[i], light[i]);
        console.log("Changed")
        SetTheme(true)
      }
    }
    else {
      for (let i = 0; i < 5; i++) {
        r.style.setProperty(CssVar[i], Night[i]);
        console.log("Changed")
        SetTheme(false)
      }
    }
  }
  function AddCursors() {
    if (cookies >= (cursor + 1) * 100){
      setcursor(cursor+1)
      setcookie(cookies-(100*(cursor+1)))
      localStorage.ckey = cookies - (100*(cursor+1));
      localStorage.setItem('cukey', cursor);
    }
    localStorage.setItem('cukey', cursor);
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
          <motion.button whileHover={{ scale:1.1 }} whileTap={{ scale: 0.9 }} className="button" onClick={newCookie}></motion.button>
        </div>
      </div>
      <div>
        <motion.button whileTap={{ rotate: 40}} className="themebutton" onClick={ChangeTHeme}></motion.button>
      </div>
      <br></br>
      <hr></hr>
      <div>
        <motion.button id="upgrade" onClick={AddCursors}>
          <b>+1 Temperary Cursor</b>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <sub>cost:{(cursor + 1) * 100}</sub>
        </motion.button>
        <br></br>
        <p1 id="cursor">Cursor Count: {cursor}</p1>
        <p1 id="test">{test}</p1>
      </div>
      </>
     )
  }
export default App