import React, { useState, useEffect } from 'react';
import { Users, ShoppingBag, BarChart3, Settings, Lock, LayoutDashboard, LogOut, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

const Admin = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetchOrders();
    }
  }, [isAuthenticated]);

  const fetchOrders = async () => {
    setLoadingOrders(true);
    try {
      const response = await axios.get('http://localhost:3000/api/orders');
      setOrders(response.data);
    } catch (err) {
      console.error('Error fetching orders:', err);
    } finally {
      setLoadingOrders(false);
    }
  };

  const handleDeleteOrder = async (id) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      try {
        await axios.delete(`http://localhost:3000/api/orders/${id}`);
        fetchOrders(); // Refresh list
      } catch (err) {
        console.error('Error deleting order:', err);
        alert('Failed to delete order.');
      }
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if ((email === 'shivrajtalwar07@gmail.com' || email === 'shivrajtalwar07@gamil.com') && password === '9156893352') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid email or password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6 mt-16">
        <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl max-w-md w-full shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20">
              <Lock className="text-amber-500 w-8 h-8" />
            </div>
          </div>
          <h2 className="text-2xl font-serif text-white text-center mb-6">Admin Access</h2>
          {error && <p className="text-red-500 text-sm mb-4 text-center bg-red-500/10 py-2 rounded-lg">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-neutral-400 text-sm mb-1">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                placeholder="Admin email"
                required
              />
            </div>
            <div>
              <label className="block text-neutral-400 text-sm mb-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                placeholder="Admin password"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-500 text-white font-medium py-3 rounded-xl transition-all shadow-lg shadow-amber-600/20 mt-4"
            >
              Login to Admin
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white pb-20">
      <Navbar />
      <div className="pt-28 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <h1 className="text-4xl font-serif text-amber-500 z-10 relative">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <Link
              to="/dashboard"
              className="px-6 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-amber-500/50 hover:text-amber-500 text-white flex items-center gap-2 transition-all"
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <button
              onClick={() => navigate('/login')}
              className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-xl hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-500 transition-all"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl flex items-center justify-between hover:border-amber-500/50 transition-all">
            <div>
              <p className="text-neutral-400 text-sm">Total Orders</p>
              <h3 className="text-3xl font-bold text-white mt-1">{orders.length}</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
              <ShoppingBag className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl flex items-center justify-between hover:border-amber-500/50 transition-all">
            <div>
              <p className="text-neutral-400 text-sm">Active Users</p>
              <h3 className="text-3xl font-bold text-white mt-1">856</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl flex items-center justify-between hover:border-amber-500/50 transition-all">
            <div>
              <p className="text-neutral-400 text-sm">Revenue</p>
              <h3 className="text-3xl font-bold text-white mt-1">
                ₹{orders.reduce((sum, order) => sum + parseInt(order.price.replace('₹', '')), 0)}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
              <BarChart3 className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl flex items-center justify-between hover:border-amber-500/50 transition-all">
            <div>
              <p className="text-neutral-400 text-sm">Settings</p>
              <h3 className="text-xl font-bold text-white mt-1">Manage</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
              <Settings className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
          <div className="p-6 border-b border-neutral-800 flex justify-between items-center">
            <h2 className="text-xl font-bold">Recent Orders</h2>
            <button onClick={fetchOrders} className="text-amber-500 text-sm hover:underline">Refresh</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-neutral-950 text-neutral-400 text-sm uppercase">
                <tr>
                  <th className="px-6 py-4 font-medium">Style</th>
                  <th className="px-6 py-4 font-medium">Customer</th>
                  <th className="px-6 py-4 font-medium">Image #</th>
                  <th className="px-6 py-4 font-medium">Price</th>
                  <th className="px-6 py-4 font-medium">Delivery Date</th>
                  <th className="px-6 py-4 font-medium">Shop</th>
                  <th className="px-6 py-4 font-medium">Time</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800">
                {orders.length > 0 ? (
                  orders.map((order) => (
                    <tr key={order._id} className="hover:bg-neutral-800/50 transition-colors">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <span className="text-2xl">{order.shirtIcon}</span>
                        <span className="font-medium">{order.shirtName}</span>
                      </td>
                      <td className="px-6 py-4 text-neutral-400 font-medium">
                        {order.customerEmail || 'Guest'}
                      </td>
                      <td className="px-6 py-4 text-neutral-400 font-medium">
                        {order.imageNumber ? `Image ${order.imageNumber}` : 'Standard'}
                      </td>
                      <td className="px-6 py-4 text-amber-500 font-bold">{order.price}</td>
                      <td className="px-6 py-4 text-neutral-400">{order.deliveryDate}</td>
                      <td className="px-6 py-4 text-neutral-400 font-medium">
                        {order.shopName || 'N/A'}
                      </td>
                      <td className="px-6 py-4 text-neutral-400">{order.deliveryTime}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-semibold border border-green-500/20">
                          {order.status || 'Confirmed'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={() => handleDeleteOrder(order._id)}
                          className="p-2 text-neutral-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                          title="Delete Order"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="px-6 py-10 text-center text-neutral-500">
                      {loadingOrders ? 'Loading orders...' : 'No orders found.'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
