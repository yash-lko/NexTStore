
const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      title: "Men's Sports Shoes",
      price: 1299,
      originalPrice: 3999,
      image: "/images/shoes.jpg",
      qty: 1,
    },
    {
      id: 2,
      title: "Wireless Bluetooth Earbuds",
      price: 899,
      originalPrice: 2499,
      image: "/images/earbuds.jpg",
      qty: 2,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
      
      {/* LEFT — Cart Items */}
      <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-6">Your Cart</h2>

        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b pb-5"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-xl"
              />

              <div className="flex-1">
                <h3 className="text-md font-medium">{item.title}</h3>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-semibold">₹{item.price}</span>
                  <span className="line-through text-gray-500 text-sm">
                    ₹{item.originalPrice}
                  </span>
                  <span className="text-green-600 text-sm font-semibold">
                    {Math.round(
                      (1 - item.price / item.originalPrice) * 100
                    )}
                    % Off
                  </span>
                </div>

                {/* Quantity Selector */}
                <div className="mt-3 flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-200">
                    -
                  </button>
                  <span className="font-medium">{item.qty}</span>
                  <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-200">
                    +
                  </button>
                </div>
              </div>

              <button className="text-red-500 font-semibold hover:underline">
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — Price Summary */}
      <div className="bg-white p-6 rounded-2xl shadow h-fit">
        <h2 className="text-xl font-semibold mb-4">Price Details</h2>
        <div className="border-b pb-4 space-y-3">

          <div className="flex justify-between text-gray-600">
            <span>Price (3 items)</span>
            <span>₹3,097</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Discount</span>
            <span className="text-green-600">– ₹2,200</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Delivery Charges</span>
            <span className="text-green-600">FREE</span>
          </div>
        </div>

        <div className="flex justify-between text-lg font-semibold mt-4">
          <span>Total Amount</span>
          <span>₹897</span>
        </div>

        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartPage;
