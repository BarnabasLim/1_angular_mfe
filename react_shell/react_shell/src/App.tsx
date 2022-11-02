import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link,Navigate} from 'react-router-dom'


type user={
  id:Number;
  name:String;
}|null;


function App() {


  let userList:user[]=[
    {id:1, name:'Anna'},
    {id:2, name:'James'},
    {id:3, name:'Raj'},
  ]
  const [user, setUser] = useState<user>(null)
  const handleLogin=()=>{
    setUser(userList[0])
  }

  const handleLogout=()=>{
    setUser(null)
  }

  return (
    <div className="App">
      <Router>
        <Navigation/>
        {user?
          (<button onClick={handleLogout}>Sign Out</button>)
          :
          (<button onClick={handleLogin}>Log in</button>)

        }
        <Routes>
              <Route path='/' element={
                  <Home/>
              }/>
              <Route path='/about' element={
                <ProtectedRoute user={user}>
                  <About/>
                </ProtectedRoute>
              }/>
              <Route path='/notfound' element={
                <ProtectedRoute user={user}>
                  <NotFound/>
                </ProtectedRoute>
              
              }/>
              <Route path='/*' element={
                <ProtectedRoute user={user}>
                  <NotFound/>
                </ProtectedRoute>
                          
              }/>
        </Routes>
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function Navigation(){
  return (
    <nav>
      <Link to='/' >Home</Link>
      <Link to='/about' >About</Link>
      <Link to='/notfound' >Not Found</Link>
    </nav>
  );
}
function Home(){
  return <h2>Home (Public: anyone can access this page)</h2>
}
function About(){
  return <h2>About (Protected: authenticated User Required)</h2>
}
function NotFound(){
  return <h2>Not Found (Protected: authenticated User Required)</h2>
}


function ProtectedRoute(props:{user:user, children: JSX.Element}){
  let user=props.user
  let children=props.children
  if(!user){
    return (
      <Navigate to="/" replace/>
    )
  }
  return (
    children
  )
}


export default App;
