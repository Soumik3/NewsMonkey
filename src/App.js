import './App.css';
import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default function App() {
  const pageSize=10;
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setprogress] = useState(0);
  
  const setProgress=(progress)=>{
    setprogress(progress)
  }
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
          height={3}
        color='#f11946'
        progress={progress}
      />
          {/* <News   pageSize={pageSize}{5} country="in" category="sports"/>  */}
          <Routes>
            {/* //We have used NewsKey for reMount(update) the component, */}
            <Route exact path="/NewsMonkey"element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize}country="in" category="general"/>}></Route> 
            <Route exact path="/"element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize}country="in" category="general"/>}></Route> 
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize}country="in" category="general"/>}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress}  apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}></Route>
            <Route exact path="/entertainment"element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize}country="in" category="entertainment"/>}></Route>
            <Route exact path="/health"element={<News setProgress={setProgress} apiKey={apiKey}  key="health"pageSize={pageSize} country="in" category="health"/>}></Route>
            <Route exact path="/science"element={<News setProgress={setProgress} apiKey={apiKey}  key="Science" pageSize={pageSize} country="in" category="Science"/>}></Route>
            <Route exact path="/sports"element={<News setProgress={setProgress}  apiKey={apiKey}  key="Sports"pageSize={pageSize} country="in" category="Sports"/>}></Route>
            <Route exact path="/technology"element={<News setProgress={setProgress} apiKey={apiKey}  key="Technology"pageSize={pageSize}country="in" category="Technology"/>}></Route>
          </Routes>
        </Router>

      </div>
    )
  }



