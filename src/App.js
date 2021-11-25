import React, {useState} from 'react';
import './App.css';
import AddGroup from './components/addGroup/AddGroup';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/productList/ProductList';
import AddProducts from './components/Products/AddProducts';

const App = () => {

  const [groups, setGroups] = useState(["none"]); 
  const [input, setInput] = useState(""); 
  const[productEnter,setProductEnter] = useState({
    name: "",
    group: ""
  })
  const[products,setProducts] = useState([])

  const changeHandler = (e) => {
      console.log(e)
      setInput(e.target.value)
  }
  const clickHandler = () => {
      console.log(groups)
      setGroups([...groups, input])
      setInput("")
  }


  const productHandler = (e) => {
      
      const product = {...productEnter}
      product.name = e.target.value;
      setProductEnter(product)
    
  }
  const groupHandler = (e) => {
      const product = {...productEnter}
      product.group = e.target.value;
      setProductEnter(product)
  }
  const addHandler = () => {
      setProducts([...products,productEnter])
      const product = {...productEnter}
      product.name = "";
      product.group = "none";
      setProductEnter(product)
  }

  return (
    <div className="App">
      <Navbar/>
      <AddGroup 
        inputGroup= {input}
        changeInput={changeHandler}
        addNewGroup={clickHandler}
      />
      <AddProducts
        productsGroup={groups}
        selectGroup = {groupHandler}
        addProduct = {addHandler}
        nameEntery = {productHandler}
        productInputObj = {productEnter}
      />
      <ProductList products={products}/>
    </div>
  );
}

export default App;
