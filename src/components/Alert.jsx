import React, { useState, useRef } from 'react';

const AlertSystem = () => {

  return (
    <>
      <div className='flex justify-center'>
        <button
          onClick={async ()=> {
            const response = await fetch('https://emailalert-cerf.onrender.com/alert', {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({
              email: 'sihbgp2024@gmail.com',
              subject: 'Garbage Alert',
              html: `
                <div style="font-family: Arial, sans-serif; color: #222;">
                <h2>Garbage Alert</h2>
                <p>Garbage detected in the post office premises. Please take immediate action to maintain cleanliness.</p>
                <ul>
                  <li><strong>Plastic:</strong> 1</li>
                  <li><strong>Organic:</strong> 2</li>
                  <li><strong>Food Waste:</strong> 5</li>
                </ul>
                </div>
              `,
              }),
            });
            if(response.status === 200){
              alert('Alert generated successfully');
            }
            else{
              alert('Error generating alert');
            }
          }}  
          className="w-full p-15 rounded-lg mb-12 h-8 bg-green-500"
        >
          Alert
        </button>
      </div>
    </>
  );
};

export default AlertSystem;
