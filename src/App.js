import Business from "./Business/Business";
import SearchBar from "./SearchBar/SearchBar";
import BusinessList from "./BusinessList/BusinessList";
import "./App.css";
import {useState} from 'react'

const business = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

function App() {
const [arr,setArr] = useState([])

  return (
    <div >
      <div >
        <h2 className="heading">revenous</h2>
      </div>

      <SearchBar setArr={setArr} />
      <Business business={arr}/>
      <BusinessList />
    </div>
  );
}

export default App;
