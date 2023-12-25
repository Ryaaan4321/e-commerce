import React from 'react'
import { useLocation } from 'react-router';

const Success = () => {
  const location= useLocation();
  
    return (
        <>
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
            ,
          }}
        >
          
            <button
              style={{
                border: "none",
                width: 120,
                borderRadius: 5,
                padding: "20px",
                backgroundColor: "blue",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Succesfull.
            </button>
         
        </div>
        
        </>
      );
    };

export default Success;
