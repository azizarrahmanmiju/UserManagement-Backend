
import { useEffect, useState } from 'react'
import './App.css'

const url = "http://localhost:5000/users";

function App() {

  const [user, setUser] = useState([]);


  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setUser(data);
    }
    fetchdata();
  }, [])




  return (
    <>
      <h1 className='text-2xl '> User management Fontend</h1>
      <p>
        {
          user.map((user, index) => {
            return (
              <div key={index} className='flex border p-4 shadow-lg gap-2 m-4  rounded-lg'>
                <h2>{user.id}</h2>
                <h2>{user.name}</h2>
                <h2>{user.email}</h2>
              </div>
            )
          })
        }
      </p>

    </>
  )
}

export default App;
