import { useState } from "react";
import Image from "next/image";

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert("Payment submitted successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl relative">
      <div className="absolute top-4 right-6 text-gray-400">Step 3 of 4</div>
      <h2 className="text-2xl font-bold text-gray-900">Payment Method</h2>
      <p className="text-gray-400 mb-4">Please enter your payment method</p>
      <form onSubmit={handleSubmit}>
        {/* Credit Card Option */}
        <div className="mb-4">
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              checked={paymentMethod === "creditCard"}
              onChange={() => setPaymentMethod("creditCard")}
              className="mr-2"
            />
            <span>Credit Card</span>
            <Image
              src="/Visa.png"
              alt="Visa and Mastercard"
              width={60} 
              height={16}
              className="ml-auto w-15 h-4"
            />
          </label>
          {paymentMethod === "creditCard" && (
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-900">
                  CardNumber
                </label>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2"
                  required
                />
              </div>

              <div>
                <label className="block font-medium text-gray-900">
                  ExpirationDate
                </label>
                <input
                  type="text"
                  placeholder="(DD/MM/YY)"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2"
                  required
                />
              </div>

              <div>
                <label className="block font-medium text-gray-900">CVC</label>
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2"
                  required
                />
              </div>

              <div>
                <label className="block font-medium text-gray-900">
                  CardHolder
                </label>
                <input
                  type="text"
                  placeholder="Card Holder"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2"
                  required
                />
              </div>
            </div>
          )}
        </div>

        {/* PayPal Option */}
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
              className="mr-2"
            />
            <span>PayPal</span>
            <Image src="/PayPal.png" alt="PayPal" width={60} height={16} className="ml-auto w-15 h-4" />
          </label>
        </div>

        {/* Bitcoin Option */}
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="bitcoin"
              checked={paymentMethod === "bitcoin"}
              onChange={() => setPaymentMethod("bitcoin")}
              className="mr-2"
            />
            <span>Bitcoin</span>
            <Image
              src="/Bitcoin.png"
              alt="Bitcoin"
              width={60} 
              height={16}
              className="ml-auto w-15 h-4"
            />
          </label>
        </div>
      </form>
    </div>
  );
}
