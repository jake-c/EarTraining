// import SideBarItem from "./components/SideBarItem";
import SideBar from "./components/SideBar";
import TonicIntervalQuiz from "./components/TonicIntervalQuiz";
const App = () => {
  return (
  <>
    <div className="app-container">
      <SideBar/>
      <div className="main-content">
        
        <TonicIntervalQuiz/>
        
      </div>
    </div>  
  </>
  )
}

export default App;