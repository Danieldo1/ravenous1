import Business from "./Business/Business";
import SearchBar from "./SearchBar/SearchBar";
import BusinessList from "./BusinessList/BusinessList";
import "./App.css";

function App() {
  return (
    <div >
      <div >
        <h2 className="heading">revenous</h2>
      </div>

      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
