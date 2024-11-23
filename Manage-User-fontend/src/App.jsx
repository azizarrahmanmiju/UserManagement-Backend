
import { useEffect, useState } from 'react'
import './App.css'

///==================================

const url = "http://localhost:5000/users";

function App() {

  const [User, setUser] = useState([]);


  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setUser(data);
    }
    fetchdata();
  }, [])



  const AddingUser = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    if (name == "" && email == "") {
      alert("fill up all field")
      return;
    }
    const user = {
      name, email
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((res) => res.json()).then((data) => {
      form.reset();
      console.log(data.user);
      const newUSers = [...User, data.user];
      console.log(newUSers)
      setUser(newUSers);


    })

  }




  return (
    <div>
      <h1 className='text-2xl '> User management Fontend</h1>
      <div >
        <form onSubmit={AddingUser} className='grid grid-cols-1 container mx-auto p-4 border w-[300px] gap-2 rounded-lg mt-4'>
          <input className='p-2 border rounded-md' type="text" name='name' placeholder='Enter user name' />
          <input className='p-2 border rounded-md' type="text" name='email' placeholder='Enter Your Email' />
          <button className='border rounded text-xl p-2 bg-[#000] text-white' type='submit'>Add User</button>
        </form>
        <div className='m-4 w-[300px] h-10'>
        </div>
      </div>
      <div>
        <h1 className='text-2xl'>User List</h1>
        {
          User.map((user, index) => {
            return (
              <div key={index} className='flex border p-4 shadow-lg gap-2 m-2  rounded-lg'>
                <h2>{user.id}</h2>
                <h2>{user.name}</h2>
                <h2>{user.email}</h2>
              </div>
            )
          })
        }
      </div>


    </div>
  )
}

export default App;
