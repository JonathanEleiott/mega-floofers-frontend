import { useState, useEffect } from "react";

const App = () => {
  const [allBunnies, setAllBunnies] = useState([]);

  useEffect(() => {
    const getAllBunnies = async() => {
      try {
        const response = await fetch(`/api/v1/bunnies`);
        const retrievedBunnies = await response.json();
        setAllBunnies(retrievedBunnies);
      } catch(err) {
        console.log(err);
      }
    }

    getAllBunnies();
  }, [])

  return (
    <>
      <h1>Mega Floofers</h1>

      <ul>
        {
          allBunnies.map((singleBunny) => {
            return <li>{singleBunny.name}</li>
          })
        }
      </ul>
    </>
  )
}

export default App
