// import SideBarItem from "./components/SideBarItem";
import SideBar from "./components/SideBar";
import IntervalSelectorWheel from "./components/IntervalSelectorWheel";
const App = () => {
  return (
  <>
    <div className="app-container">
      <SideBar/>
      <div className="main-content">
        
        <IntervalSelectorWheel/>
      </div>
    </div>  
  </>
  )
}

export default App;