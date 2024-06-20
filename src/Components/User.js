import React, { useContext, useEffect, useState } from 'react';
import { NoteContext } from '../NoteContext';
import { BeatLoader } from 'react-spinners';

export default function User(props) {
  const { user } = useContext(NoteContext);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ backgroundColor: props.mode === 'light' ? 'white' : '#36454F' }} className="p-4 min-h-screen">
      {loading ? ( 
        <div className="flex justify-center items-center mt-10">
          <BeatLoader style={{ color: props.mode === 'light' ? '#805ad5' : 'black' }} size={15} />
        </div>
      ) : (
        <div style={{ backgroundColor: props.mode === 'light' ? '#E1BEE7' : '#A9A9A9' }} className='rounded-xl m-5 p-10'>
          <div className='flex justify-center'><img className="h-72 w-72 rounded-2xl" src={user.avatar} alt="" /></div>
          <div className='text-center font-bold text-xl lg:text-4xl sm:text-2xl my-5'>{user.profile.username}</div>
          <div className='text-center text-gray-600 font-semibold text-2xl mb-5'>{user.jobTitle}</div>

          <div className='text-black font-bold text-xl lg:text-4xl sm:text-2xl'>Description:</div>
          <div className='overflow-x-auto'>
            <div className='flex justify-center ml-20 '>
              <table className='table-auto w-full max-w-lg text-center'>
                <tbody>
                  <tr>
                    <th className='p-2 md:p-4 text-right'>Id:</th>
                    <td className='p-2 md:p-4'>{user.id}</td>
                  </tr>
                  <tr>
                    <th className='p-2 md:p-4 text-right'>Username:</th>
                    <td className='p-2 md:p-4'>{user.profile.username}</td>
                  </tr>
                  <tr>
                    <th className='p-2 md:p-4 text-right'>Job Title:</th>
                    <td className='p-2 md:p-4'>{user.jobTitle}</td>
                  </tr>
                  <tr>
                    <th className='p-2 md:p-4 text-right'>First Name:</th>
                    <td className='p-2 md:p-4'>{user.profile.firstName}</td>
                  </tr>
                  <tr>
                    <th className='p-2 md:p-4 text-right'>Last Name:</th>
                    <td className='p-2 md:p-4'>{user.profile.lastName}</td>
                  </tr>
                  <tr>
                    <th className='p-2 md:p-4 text-right'>Email:</th>
                    <td className='p-2 md:p-4'>{user.profile.email}</td>
                  </tr>
                  <tr>
                    <th className='p-2 md:p-4 text-right'>Bio:</th>
                    <td className='p-2 md:p-4'>{user.Bio}</td>
                  </tr>
                  <tr>
                    <th className='p-2 md:p-4 text-right'>Created At:</th>
                    <td className='p-2 md:p-4'>{user.createdAt}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
