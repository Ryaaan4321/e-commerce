import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
// import { useHistory } from 'react-router-dom'; // Correct import statement
import axios from 'axios'; // You need to import axios

const KEY =
  "pk_test_51ONXuNSByDqYYjzh7H2byKZSVjlOVeskAfkdmPWE5WzIsa0B8sxDiTkj4Yrt7bFLo6Bp8SKgRJRybWXHh5E2IB3p00eCPbdy52";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  // const history = useHistory();
  
  const onToken = (token) => {
    setStripeToken(token);
  };
  
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        history.push("/success");
      } catch (err) {
        console.log(err);
      }
    };
    
    stripeToken && makeRequest(); // Corrected invocation
  }, [stripeToken, history]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (
        <span>Processing please wait..!</span>
      ) : (
        <StripeCheckout
          name="aryanstore"
          image=""
          billingAddress
          shippingAddress
          description="your total is 40$"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Pay Now
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
