
import { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import SearchBar from ".//Components/SearchBar";
import Hero from "./Components/Hero";
import Posts from "./Components/Posts";
import TableRows from "./Components/TableRows"
import Footer from "./Components/Footer";
import postData from "./data/posts.json";

function App() {
  const [posts, setPosts] = useState({all:postData, filtered:postData})
  const [search, setSearch] = useState("")

  useEffect(() => {
    const term = search.toLowerCase();
    const filtered = postData.filter((post) => {
      return (
        post.location.toLowerCase().includes(term) ||
        post.title.toLowerCase().includes(term)
        );
      });
      setPosts(filtered)
    }, [search])

    function handleSearch(event){
      setSearch(event.target.value)
      setPosts(search)
    }


    return (
      <>
      <div>
        <Nav/>
        <Hero/>
        <section className="container">
          <SearchBar postData={postData} setPosts={setPosts} handleSearchSearch={handleSearch}/>
          <section className="row row-gap-4">
            <Posts postData={postData} search={search}/>
            <TableRows posts={postData}/>
          </section>
        </section>
        <Footer/>
      </div>
      </>
    )
  }
  
  export default App;


// import React from "react";
// import birdData from "./data/birds"
// import { useState } from "react";
// import Cards from "./Cards";
// import Cart from "./Cart";
// import Checkout from "./Checkout";
// import "./App.css";
// function App() {
  //   const [cart, setCart] = useState([]);
  //   const [totalPrice, setTotalPrice] = useState(0);
  
  
  //   // click bird, add to cart
  //   function clickBird(bird) {
    //     setTotalPrice(totalPrice + bird.amount)
    //     setCart([...cart, bird])
    //   };
    
    
    //  // remove bird
    //   function removeBird(bird, index) {
      //     const foundBird = cart.find(bird2 => bird2.id === bird.id);
      //     const newCartPage = [...cart]
      //     newCartPage.splice(index, 1);
      //     setCart(newCartPage);
      //     setTotalPrice(totalPrice - foundBird.amount)
      //   }
      
      
      //   return (
        //     <div className="card">
        //       <Cards clickBird={clickBird} birdData={birdData} />
        //       <Cart cart={cart} totalPrice={totalPrice} removeBird={removeBird} />
        //       <Checkout />
        
        //     </div>
        //   );
        // };
        
        // export default App;
