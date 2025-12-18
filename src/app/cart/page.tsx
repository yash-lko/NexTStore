"use client"
import { useCart } from "../context/CartContext";
import Image from "next/image";
const CartPage = () => {

  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();
  const conversionRate = 90
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * conversionRate * item.quantity, 0)


  console.log(cart, "Cart")

  if (cart.length === 0) {
    return (<>
      <div className="max-100 flex center  px-4 py-10   min-h-100 justify-center">

        <Image
          src="/images/empty-cart.jpg"
          width={400}
          height={300}
          alt="Empty Cart"
        />
      </div>


    </>)
  }

  return (
    <>
      {

        <div className="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-6">Your Cart</h2>

            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b pb-5"
                >
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-xl"
                  />

                  <div className="flex-1">
                    <h3 className="text-md font-medium">{item.title}</h3>

                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-lg font-semibold">₹{item.price * 90}</span>


                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <button onClick={() => { decreaseQty(item.id) }} className="w-8 h-8 rounded-full cursor-pointer border flex items-center justify-center hover:bg-gray-200">
                        -
                      </button>
                      <span className="font-medium">{item.quantity}</span>
                      <button onClick={() => { increaseQty(item.id) }} className="w-8 h-8 rounded-full cursor-pointer border flex items-center justify-center hover:bg-gray-200">
                        +
                      </button>
                    </div>
                  </div>

                  <button onClick={() => { removeFromCart(item.id) }} className="text-pink-500 font-semibold hover:underline cursor-pointer">
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow h-fit">
            <h2 className="text-xl font-semibold mb-4">Price Details</h2>
            <div className="border-b pb-4 space-y-3">

              <div className="flex justify-between text-gray-600">
                <span>Price ({totalItems} items)</span>
                <span>₹{totalPrice}</span>
              </div>




            </div>

            <div className="flex justify-between text-lg font-semibold mt-4">
              <span>Total Amount</span>
              <span>₹{totalPrice}</span>
            </div>

            <button className="mt-6 w-full bg-pink-500 cursor-pointer  text-white py-3 rounded-xl font-semibold">
              Place Order
            </button>
          </div>
        </div>

      }

    </>
  );
};

export default CartPage;
