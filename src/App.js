
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import VideoCard from "./Components/VideoCard";


function App() {
  const [productList, setProductList] = useState([]);
  const [filterProduct, setFilterProduct] =useState([])

  useEffect(() => {
    // Make API call with searchTerm
    fetch(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=priti&&numResults=22`)
      .then((res) => res.json().then((data) => {
        console.log(data, "result debug")
        setProductList(data.results)
        setFilterProduct(data.results);
      }))
      
  }, []);

  const searchHandler = (e) => {
    const {value} = e.target;
    const searchResult = productList.filter((product) => {
      return product.video.toLowerCase().includes(value.toLowerCase());
      // return product.results.heading.includes(value);
    })
    setFilterProduct(searchResult);
  }

  return (
    <>
    <Header onChange={searchHandler}/>
    <div className="p-container">
      { filterProduct.length >= 1 &&
        filterProduct.map((product) => {
          return <VideoCard product={product} />
        })
      } 
    </div>
    </>
  )
}

export default App;
