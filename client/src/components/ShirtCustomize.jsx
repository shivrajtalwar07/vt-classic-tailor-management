import React, { useState, useEffect, useRef } from 'react';
import { Shirt, ArrowLeft, Calendar, Clock, CheckCircle, ChevronRight, Sparkles, Package, X, Image as ImageIcon, Loader2, Store, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar, { shirtStyles } from './Navbar';
import gsap from 'gsap';
import axios from 'axios';


const ShirtCustomize = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [step, setStep] = useState(1); // 1 = select shop, 2 = select shirt, 3 = select date/time, 4 = confirmed
  const [selectedShop, setSelectedShop] = useState(null);
  const [selectedShirt, setSelectedShirt] = useState(null);
  const [selectedImageNumber, setSelectedImageNumber] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.data-card', {
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      });
      gsap.from('.page-title', {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Animate step transitions
  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.from('.step-content', {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [step]);

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const shops = [
    { id: 1, name: 'Favourite Fashions', address: 'Paras Estate, Navi Peth', detail: 'Established in 1985.', color: 'from-amber-500/20 to-orange-500/20' },
    { id: 2, name: 'B.Y. Tailors', address: 'Park Chowk', detail: 'Known for premium crafting.', color: 'from-blue-500/20 to-indigo-500/20' },
    { id: 3, name: 'Maharaja Tailor', address: 'Jodbhavi Peth, Near Chowdeshwari Temple', detail: 'Traditional excellence.', color: 'from-red-500/20 to-pink-500/20' },
    { id: 4, name: '7 Hills Mens Wear', address: 'Ashok Chowk', detail: 'Modern cuts & fits.', color: 'from-emerald-500/20 to-teal-500/20' },
    { id: 5, name: 'A S Sulakhe Tailors', address: 'Modi Khana', detail: 'Expert stitching.', color: 'from-purple-500/20 to-violet-500/20' },
    { id: 6, name: 'B. S. Sulakhe Tailors', address: 'Shaniwar Peth', detail: 'Expert stitching.', color: 'from-purple-500/20 to-violet-500/20' },
    { id: 7, name: 'D Y Tailor', address: 'Modi Khana', detail: 'Expert stitching.', color: 'from-purple-500/20 to-violet-500/20' },
    { id: 8, name: 'Flora Tailors', address: 'South Kasba', detail: 'Expert stitching.', color: 'from-purple-500/20 to-violet-500/20' },
    { id: 9, name: 'B Y Tailor', address: 'Rajendra Chowk, Jawaharlal Housing Society', detail: 'Expert stitching.', color: 'from-purple-500/20 to-violet-500/20' },
    { id: 10, name: 'Men\'s Tailor', address: 'MIDC Rd, Sunil Nagar', detail: 'Expert stitching.', color: 'from-purple-500/20 to-violet-500/20' },
    { id: 11, name: 'PATIL\'S GENTS TAILOR', address: 'Navi Peth, Murarji Peth', detail: 'Expert stitching.', color: 'from-purple-500/20 to-violet-500/20' },
    { id: 12, name: 'Raza Tailors', address: 'Vijay Nagar', detail: 'Expert stitching.', color: 'from-purple-500/20 to-violet-500/20' },
    { id: 13, name: 'Maharaja Tailor & Cutpiece Centre', address: 'Siddheshwar Mandir Rd, Jodbhavi Peth', detail: 'Expert stitching.', color: 'from-purple-500/20 to-violet-500/20' },
    { id: 14, name: 'Shape Style Tailors', address: 'MHADA Complex, Hyderabad Road', detail: 'Expert stitching.', color: 'from-purple-500/20 to-violet-500/20' },
    { id: 15, name: 'Favourite Fashion Tailor', address: 'Navi Peth, Budhavar Peth', detail: 'Expert stitching.', color: 'from-purple-500/20 to-violet-500/20' },
    { id: 16, name: 'Sunex Tailor & Collection', address: 'Sakhar Peth', detail: 'Expert stitching.', color: 'from-purple-500/20 to-violet-500/20' },
    { id: 17, name: 'Eagle Tailors', address: 'Ashok Chowk, New Paccha Peth', detail: 'Expert stitching.', color: 'from-purple-500/20 to-violet-500/20' },
    { id: 18, name: 'Vani Ladies Tailor', address: 'Solapur', detail: 'Expert stitching.', color: 'from-purple-500/20 to-violet-500/20' },
    { id: 19, name: 'Nihari Ladies Tailor', address: 'Gandhi Nagar', detail: 'Expert stitching.', color: 'from-purple-500/20 to-violet-500/20' },
    { id: 20, name: 'Gokarna Ladies Tailor', address: 'Ashok Chowk', detail: 'Expert stitching.', color: 'from-purple-500/20 to-violet-500/20' },
    { id: 21, name: 'Preeti Ladies Tailor', address: 'Padmashali Chowk', detail: 'Expert stitching.', color: 'from-purple-500/20 to-violet-500/20' },
    { id: 22, name: 'B Y Tailor', address: 'Rajendra Chowk, Jawaharlal Housing Society', detail: 'Expert stitching.', color: 'from-purple-500/20 to-violet-500/20' },
  ];


  const handleSelectShop = (shop) => {
    setSelectedShop(shop);
    toast.info(`Shop Selected: ${shop.name}`);
    setStep(2);
  };

  const handleSelectShirt = (shirt) => {
    setSelectedShirt(shirt);
    setSelectedImageNumber(null); // Reset when picked from card
    toast.info(`Selected: ${shirt.name}`);
  };

  const handleProceedToSchedule = () => {
    if (!selectedShirt) {
      toast.error('Please select a shirt style first');
      return;
    }
    setStep(3);
  };

  const handleConfirmOrder = async () => {
    if (!deliveryDate) {
      toast.error('Please select a delivery date');
      return;
    }
    if (!deliveryTime) {
      toast.error('Please select a delivery time');
      return;
    }

    setIsLoading(true);
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const orderData = {
        shirtId: selectedShirt.id,
        shirtName: selectedShirt.name,
        shirtIcon: selectedShirt.icon,
        shopName: selectedShop.name,
        imageNumber: selectedImageNumber,
        customerEmail: user?.email || 'Guest',
        price: selectedShirt.price,
        deliveryDate: deliveryDate,
        deliveryTime: deliveryTime,
      };

      const response = await axios.post('http://localhost:3000/api/orders', orderData);

      if (response.status === 201) {
        toast.success('Order placed successfully!');
        setStep(4);
      }
    } catch (error) {
      console.error('Error confirming order:', error);
      const errorMsg = error.response?.data?.message || 'Failed to place order. Please check if your server is running.';
      toast.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  };

  const formatTime = (timeStr) => {
    const [h, m] = timeStr.split(':');
    const hour = parseInt(h);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const display = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${display}:${m} ${ampm}`;
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-sans selection:bg-amber-600 selection:text-white pb-20" ref={containerRef}>
      <Navbar />

      {/* HEADER */}
      <div className="pt-28 pb-8 px-6 max-w-7xl mx-auto">
        <button
          onClick={() => step > 1 ? setStep(step - 1) : navigate('/dashboard')}
          className="flex items-center gap-2 text-neutral-500 hover:text-amber-500 transition-colors mb-6 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>{step > 1 ? 'Back' : 'Back to Dashboard'}</span>
        </button>

        {/* Step Indicator */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${step >= s
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                : 'bg-neutral-900 text-neutral-500 border border-neutral-800'
                }`}>
                {step > s ? '✓' : s}
              </div>
              <span className={`text-sm hidden sm:block ${step >= s ? 'text-amber-500' : 'text-neutral-600'}`}>
                {s === 1 ? 'Select Shop' : s === 2 ? 'Choose Style' : s === 3 ? 'Schedule Delivery' : 'Confirmed'}
              </span>
              {s < 4 && <ChevronRight className="w-4 h-4 text-neutral-700 mx-2" />}
            </div>
          ))}
        </div>

        <h1 className="text-4xl font-serif text-white page-title">
          {step === 1 && 'Select Your Preferred Shop'}
          {step === 2 && 'Choose Your Shirt Style'}
          {step === 3 && 'Select Delivery Date & Time'}
          {step === 4 && 'Order Confirmed!'}
        </h1>
        <p className="text-neutral-500 font-light mt-2 page-title">
          {step === 1 && 'Pick a store locations where you want to get your shirt stitched.'}
          {step === 2 && 'Browse through our premium shirt styles and pick your favorite.'}
          {step === 3 && 'Choose when you would like your custom shirt delivered.'}
          {step === 4 && 'Your order has been placed successfully.'}
        </p>
      </div>

      {/* STEP 1: Choose Shop */}
      {step === 1 && (
        <main className="max-w-7xl mx-auto px-6 step-content">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {shops.map((shop) => (
              <div
                key={shop.id}
                onClick={() => handleSelectShop(shop)}
                className={`data-card cursor-pointer rounded-3xl border p-8 transition-all duration-300 relative overflow-hidden group ${selectedShop?.id === shop.id
                  ? 'border-amber-500 bg-amber-500/10 shadow-xl shadow-amber-500/10 scale-[1.02]'
                  : `border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 hover:bg-neutral-900`
                  }`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${shop.color} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl`}></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/20 group-hover:scale-110 transition-transform">
                    <Store className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2">{shop.name}</h3>
                  <div className="flex items-start gap-2 text-neutral-400 mb-4">
                    <MapPin className="w-4 h-4 mt-1 text-amber-500 flex-shrink-0" />
                    <p className="text-sm leading-relaxed">{shop.address}</p>
                  </div>
                  <p className="text-neutral-500 text-xs uppercase tracking-widest">{shop.detail}</p>
                </div>

                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all">
                  <button className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* STEP 2: Shirt Styles */}
      {step === 2 && (
        <main className="max-w-7xl mx-auto px-6 step-content">
          {/* Selected Shop Recap */}
          <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-4 mb-8 flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-amber-600/10 rounded-xl flex items-center justify-center">
                <Store className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <p className="text-neutral-500 text-[10px] uppercase tracking-widest">Selected Store</p>
                <p className="text-white font-medium">{selectedShop?.name}</p>
              </div>
            </div>
            <button
              onClick={() => setStep(1)}
              className="text-amber-500 text-xs font-bold hover:underline"
            >
              CHANGE
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
            {shirtStyles.map((shirt) => (
              <div
                key={shirt.id}
                onClick={() => handleSelectShirt(shirt)}
                className={`shirt-card cursor-pointer rounded-3xl border p-6 transition-all duration-300 relative overflow-hidden group ${selectedShirt?.id === shirt.id
                  ? 'border-amber-500 bg-amber-500/10 shadow-xl shadow-amber-500/10 scale-[1.02]'
                  : `border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 hover:bg-neutral-900`
                  }`}
              >
                {/* Selected Badge */}
                {selectedShirt?.id === shirt.id && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                )}

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${shirt.color} opacity-30 group-hover:opacity-50 transition-opacity pointer-events-none rounded-3xl`}></div>

                <div className="relative z-10">
                  <div className="text-4xl mb-4">{shirt.icon}</div>
                  <h3 className="text-lg font-serif text-white mb-1">{shirt.name}</h3>
                  <p className="text-neutral-500 text-sm mb-4 leading-relaxed">{shirt.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-amber-500 font-bold text-lg">{shirt.price}</span>
                    <div className="flex items-center gap-3">
                      {shirt.images && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectShirt(shirt);
                            setIsGalleryOpen(true);
                          }}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 text-xs font-bold transition-all border border-amber-500/20 hover:border-amber-500/50 shadow-lg shadow-amber-500/5"
                        >
                          <ImageIcon className="w-4 h-4" />
                          VIEW DESIGNS
                        </button>
                      )}
                      <Shirt className={`w-5 h-5 ${selectedShirt?.id === shirt.id ? 'text-amber-500' : 'text-neutral-600'}`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* Style Images Gallery (Shows if the selected style has images) */}
          {selectedShirt?.images && (
            <div className="mb-12 p-8 bg-neutral-900/40 backdrop-blur-md rounded-[40px] border border-neutral-800/80 shadow-2xl relative overflow-hidden">
              {/* Decorative background glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                  <h3 className="text-2xl font-serif text-white mb-2 flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-amber-500" />
                    {selectedShirt.name} Collection
                  </h3>
                  <p className="text-neutral-500 text-sm font-light">Explore the variations and detailing of this premium style.</p>
                </div>
                <div className="px-4 py-2 bg-neutral-950/50 border border-neutral-800 rounded-2xl text-xs text-neutral-400 flex items-center gap-2">
                  <Package className="w-4 h-4 text-amber-500" />
                  <span>Click any design to select & proceed</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {selectedShirt.images.map((imgSrc, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedImageNumber(index + 1);
                      setStep(3);
                      toast.success(`Image ${index + 1} Selected from Showcase!`);
                    }}
                    className="aspect-[3/4] rounded-xl overflow-hidden border border-neutral-800 hover:border-amber-500/50 transition-colors shadow-lg group relative cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-amber-600/30 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                      <Package className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <img
                      src={imgSrc}
                      alt={`${selectedShirt.name} ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* Selected Shirt Summary + Next */}
          <div className="sticky bottom-4 bg-neutral-900/95 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
            {selectedShirt ? (
              <div className="flex items-center gap-4">
                <div className="text-3xl">{selectedShirt.icon}</div>
                <div>
                  <p className="text-white font-serif text-lg">{selectedShirt.name}</p>
                  <p className="text-neutral-500 text-sm">Price: <span className="text-amber-500 font-bold">{selectedShirt.price}</span></p>
                </div>
              </div>
            ) : (
              <p className="text-neutral-500">Select a shirt style to continue</p>
            )}
            <button
              onClick={handleProceedToSchedule}
              disabled={!selectedShirt}
              className={`flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium transition-all ${selectedShirt
                ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg shadow-amber-600/30'
                : 'bg-neutral-800 text-neutral-600 cursor-not-allowed'
                }`}
            >
              Next: Schedule Delivery <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </main>
      )}

      {/* STEP 3: Date & Time */}
      {step === 3 && (
        <main className="max-w-3xl mx-auto px-6 step-content">
          {/* Selected Shirt Recap */}
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 mb-8 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center">
                <Store className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <p className="text-neutral-500 text-[10px] uppercase tracking-widest">Shop</p>
                <p className="text-white font-medium">{selectedShop?.name}</p>
              </div>
            </div>
            <div className="w-px h-10 bg-neutral-800 hidden sm:block"></div>
            <div className="flex items-center gap-4">
              <div className="text-4xl">{selectedShirt?.icon}</div>
              <div>
                <p className="text-neutral-500 text-[10px] uppercase tracking-widest">Style</p>
                <p className="text-white font-serif text-lg">{selectedShirt?.name}</p>
                <p className="text-amber-500 font-bold text-sm">{selectedShirt?.price}</p>
              </div>
            </div>
          </div>

          {/* Date & Time Picker */}
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-serif text-white mb-8 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-amber-500" />
              Choose Delivery Schedule
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Date Picker */}
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-3">Delivery Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 pointer-events-none" />
                  <input
                    type="date"
                    min={getMinDate()}
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors cursor-pointer [color-scheme:dark]"
                  />
                </div>
                {deliveryDate && (
                  <p className="text-amber-500 text-sm mt-2">📅 {formatDate(deliveryDate)}</p>
                )}
              </div>

              {/* Time Picker */}
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-3">Delivery Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 pointer-events-none" />
                  <input
                    type="time"
                    min="08:00"
                    max="21:00"
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors cursor-pointer [color-scheme:dark]"
                  />
                </div>
                {deliveryTime && (
                  <p className="text-amber-500 text-sm mt-2">⏰ {formatTime(deliveryTime)}</p>
                )}
                <p className="text-neutral-600 text-xs mt-1">Available: 08:00 AM – 09:00 PM</p>
              </div>
            </div>

            {/* Confirm Button */}
            <button
              onClick={handleConfirmOrder}
              disabled={!deliveryDate || !deliveryTime}
              className={`w-full mt-10 flex items-center justify-center gap-3 py-4 rounded-2xl font-medium text-lg transition-all ${deliveryDate && deliveryTime
                ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-xl shadow-amber-600/30'
                : 'bg-neutral-800 text-neutral-600 cursor-not-allowed'
                }`}
            >
              <Package className="w-6 h-6" />
              Confirm Order
            </button>
          </div>
        </main>
      )}

      {/* STEP 4: Order Confirmed */}
      {step === 4 && (
        <main className="max-w-3xl mx-auto px-6 step-content">
          <div className="bg-neutral-900/50 border border-amber-500/30 rounded-[40px] p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-transparent to-green-600/5 pointer-events-none"></div>

            <div className="relative z-10">
              {/* Success Icon */}
              <div className="w-28 h-28 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-green-500/40 animate-bounce" style={{ animationDuration: '2s' }}>
                <CheckCircle className="w-14 h-14 text-green-500" />
              </div>

              {/* Confirmation Message */}
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                Order Confirmed! 🎉
              </h2>

              <div className="bg-neutral-950/60 border border-neutral-800 rounded-2xl p-6 mb-8 max-w-lg mx-auto">
                <p className="text-xl text-amber-500 font-serif leading-relaxed">
                  "Order confirmed with{' '}
                  <span className="text-white font-bold">{formatDate(deliveryDate)}</span>{' '}
                  and{' '}
                  <span className="text-white font-bold">{formatTime(deliveryTime)}</span>{' '}
                  arriving"
                </p>
              </div>

              {/* Order Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto">
                <div className="bg-neutral-950/40 border border-neutral-800 rounded-2xl p-4">
                  <Store className="w-7 h-7 text-amber-500 mx-auto mb-2" />
                  <p className="text-neutral-500 text-[10px] uppercase tracking-wider">Shop</p>
                  <p className="text-white font-medium text-xs truncate">{selectedShop?.name}</p>
                </div>
                <div className="bg-neutral-950/40 border border-neutral-800 rounded-2xl p-4">
                  <p className="text-3xl mb-2">{selectedShirt?.icon}</p>
                  <p className="text-neutral-500 text-[10px] uppercase tracking-wider">Style</p>
                  <p className="text-white font-medium text-xs">{selectedShirt?.name}</p>
                </div>
                <div className="bg-neutral-950/40 border border-neutral-800 rounded-2xl p-4">
                  <Calendar className="w-7 h-7 text-amber-500 mx-auto mb-2" />
                  <p className="text-neutral-500 text-[10px] uppercase tracking-wider">Date</p>
                  <p className="text-white font-medium text-xs">{deliveryDate && new Date(deliveryDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</p>
                </div>
                <div className="bg-neutral-950/40 border border-neutral-800 rounded-2xl p-4">
                  <Clock className="w-7 h-7 text-amber-500 mx-auto mb-2" />
                  <p className="text-neutral-500 text-[10px] uppercase tracking-wider">Time</p>
                  <p className="text-white font-medium text-xs">{deliveryTime && formatTime(deliveryTime)}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-2xl font-medium transition-all shadow-xl shadow-amber-600/30"
                >
                  <Sparkles className="w-5 h-5" />
                  Back to Dashboard
                </button>
                <button
                  onClick={() => {
                    setSelectedShop(null);
                    setSelectedShirt(null);
                    setDeliveryDate('');
                    setDeliveryTime('');
                    setStep(1);
                  }}
                  className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-4 rounded-2xl font-medium transition-all"
                >
                  Order Another
                </button>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Image Gallery Modal */}
      {isGalleryOpen && selectedShirt?.images && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-neutral-950/95 backdrop-blur-md" onClick={() => setIsGalleryOpen(false)}>
          <div
            className="bg-neutral-900 border border-neutral-800 rounded-[40px] p-8 md:p-12 w-full max-w-7xl max-h-[90vh] overflow-y-auto relative shadow-[0_0_100px_rgba(217,119,6,0.1)] transition-all animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div>
                <div className="flex items-center gap-3 text-amber-500 mb-2 uppercase tracking-[0.2em] text-xs font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>Exclusive Designs</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-serif text-white">{selectedShirt.name} Gallery</h3>
              </div>

              <button
                onClick={() => setIsGalleryOpen(false)}
                className="absolute top-8 right-8 p-4 bg-neutral-800/50 hover:bg-neutral-700/80 rounded-2xl text-neutral-400 hover:text-white transition-all backdrop-blur-md border border-neutral-700/50 group"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Instruction Banner */}
            <div className="mb-10 p-6 bg-amber-600/5 border border-amber-600/20 rounded-3xl flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-600/20 rounded-2xl flex items-center justify-center">
                <CheckCircle className="text-amber-500 w-6 h-6" />
              </div>
              <div>
                <p className="text-white font-medium">Ready to Choose?</p>
                <p className="text-neutral-500 text-sm">Simply click on your favorite design to select it and proceed to scheduling.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {selectedShirt.images.map((imgSrc, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedImageNumber(index + 1);
                    setIsGalleryOpen(false);
                    setStep(3);
                    toast.success(`Image ${index + 1} Selected from Gallery!`);
                  }}
                  className="aspect-[3/4] rounded-3xl overflow-hidden border border-neutral-800 relative group cursor-pointer shadow-2xl hover:border-amber-500/50 transition-all duration-500"
                >
                  <img
                    src={imgSrc}
                    alt={`${selectedShirt.name} ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4 backdrop-blur-[1px]">
                    <div className="bg-amber-600 p-4 rounded-full shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                      <ChevronRight className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-white font-bold text-xl uppercase tracking-widest bg-black/40 px-6 py-2 rounded-full backdrop-blur-md">Select Style {index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ShirtCustomize;
