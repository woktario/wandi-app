// import "./style.css"

import { useState } from "react"
import ProductCard from "./components/ProductCard"

function App() {

  const [productList, setProductList] = useState([
    {
      courseType: "Intensive Bootcamp",
      Title: "Programming Laravel",
      Description: "Getting Started with Laravel 9",
      price: 600000,
      discountPrice: 200000,
    },
    {
      courseType: "Intensive Bootcamp",
      Title: "Programming ReactJS",
      Description: "Getting Started with ReactJS",
      price: 500000,
      discountPrice: 199000,
    },
    {
      courseType: "Intensive Bootcamp",
      Title: "Programming IoT",
      Description: "Getting Started with IoT",
      price: 400000,
      discountPrice: 99000,
    },
    {
      courseType: "Free Bootcamp",
      Title: "CSS Fundamental",
      Description: "Getting Started with HTML CSS",
      price: 0,
      discountPrice: 0,
    }
  ])

  const [shoppingCart, setShoppingCart] = useState([]);

  console.log("shoppingCart:",shoppingCart)

  return (
    <div>
      <header className="bg-[#152A46] pt-[20px] m-0 text-[#ffffff] top-0">
        <div>
          <nav className="text-right">
            <ul className="list-none m-0 p-0">
              <li className="inline-block mr-[10px]"><a className="text-white no-underline" href="#">Menu 1</a> | </li>
              <li className="inline-block mr-[10px]"><a className="text-white no-underline" href="#">Menu 2</a> | </li>
              <li className="inline-block mr-[10px]"><a className="text-white no-underline" href="#">Menu 3</a> | </li>
              <li className="inline-block mr-[10px]"><span id="saldo">Total Keranjang : {shoppingCart.length}</span></li>
            </ul>
          </nav>
        </div>
        <div className="p-0 m-0">
          <div className="p-0 mb-[75px] ml-10 inline-block w-1/2"><h1 className="text-2xl">Jadi expert bersama edspert.id</h1><p className="text-xs">Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.</p></div>
          <div className="p-0 m-0 inline-block align-bottom ml-[100px]"><img src="./img/image 7.png" className="w-[300px] h-[200px]" /></div>
        </div>
      </header>

      <main className="flex flex-wrap justify-center item-center p-[20px] gap-4">
        {productList.map((product) => (
          <ProductCard
            key={product.Title}
            courseType={product.courseType}
            Title={product.Title}
            Description={product.Description}
            price={product.price}
            discountPrice={product.discountPrice}
            addShoppingCart={(prod) => setShoppingCart([...shoppingCart, prod])}
          />
        ))}
      </main>

      <footer className="bg-[#152A46] p-[20px] text-[#ffffff] text-sm text-center">
        <p>&copy; 2023 HTML Javascript dan CSS</p>
      </footer>
    </div>
  )
}

export default App