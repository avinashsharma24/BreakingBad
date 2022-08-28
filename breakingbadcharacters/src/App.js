import './App.css';
import Header from './components/ui/Header' ;
import Footer from './components/ui/Footer';
import Search from'./components/ui/Search';
import Spinner from './components/ui/Spinner';
import CharacterGrid from './components/characters/CharacterGrid'
// import CharacterItem from './components/characters/CharacterItem'
import { useState , useEffect } from 'react';
import axios from 'axios'

function App() {

    const [items, setitems] = useState([])
    const [isLoading, setIsLoading] = useState(true)  
    const [query, setQuery] = useState('')

  useEffect (() => {
  const fetchItems = async () =>{
       setIsLoading(true)   
    const result = await axios(
      `https://breakingbadapi.com/api/characters?name=${query}`   
  )
      // console.log(result.data)
       setitems(result.data)
       setIsLoading(false)  
  }

  fetchItems()



  },[query])   

  return (
    <>
     
     
     <Header/>
     
     
     <Search  getQuery ={ (q)=> setQuery(q) } />   

    
       <CharacterGrid isLoading ={isLoading} items={items} />  
                         
     
      <Footer/>
    </>
  );
}

export default App;
