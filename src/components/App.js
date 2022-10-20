 import { useEffect, useState } from "react"




function App() {
    const [dog, setDog] = useState(null)

    useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json())
    .then(data => setDog(data.message))
    },[])
    
    
    return (
        <>
      {dog === null ? <p>Loading...</p> : <img src={dog} alt="A Random Dog"/>}
    </>
)
}

export default App