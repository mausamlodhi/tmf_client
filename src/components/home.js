import React from "react";

function PaymentPage(props) {
  return (
    <div>
      <main className="main">
        <h1 className="title">Make a Payment</h1>
        <p className="description">
          Click the button below and fill out the form to complete your payment.
        </p>
        <button className="payment-button" onClick={(e)=>{
          e.preventDefault();
          props.setIsModalOpen(true);
        }}>PAYMENT BUTTON</button>
      </main>
    </div>
  );
}

export default PaymentPage;
