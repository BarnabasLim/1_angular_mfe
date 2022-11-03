import {useContext} from 'react'
import {BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import overall_settings_context from './context/Overall_settings';
import Landing from './pages/Landing/Landing';
import Navigation from './component/Navigation'
import {user} from './context/data.models'

const Entry = () => {
  let overall_settings=useContext(overall_settings_context)
  let user=overall_settings?overall_settings?.user:null;
  let handleLogin=overall_settings?overall_settings?.handleLogin:function(){}
  let handleLogout=overall_settings?overall_settings?.handleLogout:function(){}
  return (
    <div className="App">
        
        <Router>
          <Navigation/>
          {user?
            (<div>
              <button onClick={handleLogout}>Sign Out</button>
              <p>Welcome {user.name}</p>
            </div>)
            :
            (<button onClick={handleLogin}>Log in</button>)

          }
          
          <Routes>
                <Route path='/' element={
                    <Landing/>
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
        {/* <header className="App-header">
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
        </header> */}
      </div>
  )
}
export default Entry;



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