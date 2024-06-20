import React, { useEffect, useState } from 'react';
import profile from '../profile.png';
import { BeatLoader } from 'react-spinners';
import { useContext } from 'react';
import { NoteContext } from '../NoteContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function List(props) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true); // Initially set loading to true
  
  const {setuser} = useContext(NoteContext);

  const naviagte = useNavigate();

  const users = (user)=>{
    setuser(user);
    naviagte("/user");
  }

  useEffect(() => {
    fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  return (
    <div  className='p-10'
    style={{backgroundColor : (props.mode==='light')?'white' : '#36454F'}}>
      <div className='text-center font-bold text-2xl '>List of Users:</div>
      {loading ? ( // Render loader if loading is true
        <div className='flex justify-center items-center mt-10'>
          <BeatLoader style={{color : (props.mode==='light') ? '#805ad5' : 'black'}} size={15} />
        </div>
      ) : (
        <div  className='p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
          {list.map((user) => (
            <Link to="/user">
             <div key={user.id}  onClick={()=>users(user)}  style={{ backgroundColor:(props.mode==='light') ? '#E1BEE7' : 'gray'}}  className=' cursor-pointer  rounded-2xl   p-4 mb-4 flex flex-col items-center'>
              <div className='flex flex-col items-center w-full sm:w-40'>
                <img src={user.avatar ? user.avatar : profile} alt="user" className='h-20 w-20 rounded-full' />
                <div className='mt-2 font-bold'>{user.profile.username}</div>
                <div className='text-gray-600 w-full text-center whitespace-nowrap'>{user.jobTitle}</div>
                
              </div>
            </div>
            
            </Link>
           
          ))}
        </div>
      )}
    </div>
  );
}
