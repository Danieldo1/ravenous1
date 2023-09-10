import Business from "./Business/Business";
import SearchBar from "./SearchBar/SearchBar";
import BusinessList from "./BusinessList/BusinessList";
import styles from "./App.css";
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
}
const businesses = [business, business, business, business, business, business];

function App() {
const [arr,setArr] = useState([])



  return (
    <div >
      <div className={styles.App} >
        <h2 className="heading">revenous</h2>
      </div>

      <SearchBar setArr={setArr} />
      <Business business={businesses}/>
      <BusinessList />
    </div>
  );
}

export default App;
