import React, { useState } from 'react';
import { DemoHeader } from '../../DemoHeader';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const InventoryDemo = () => {
   const [step, setStep] = useState<'login' | 'dashboard' | 'manageitems' | 'viewreport'>('login');

   const [isSheetOpen, setIsSheetOpen] = useState(false);

   if (step === 'login') {
      return (
         <div className="h-full w-full bg-white from-[#4A90E2] to-[#9B51E0] flex flex-col items-center justify-center p-4 font-sans relative">

            {/* Android-style Status Bar */}
            <div className="absolute top-2 left-0 w-full px-4 flex justify-between items-center text-white/90 text-[10px]">
               <span className="font-medium">4:52 PM</span>
               <div className="flex gap-1.5 items-center">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21L1 10h22L12 21z" /></svg>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2.3L5 20h16l-8-17.7z" /></svg>
                  <div className="border border-white/50 px-0.5 rounded-sm text-[7px] leading-none">89</div>
               </div>
            </div>

            {/* Compact Login Card */}
            <div
               className="bg-[#F5F5F7] rounded-[24px] shadow-2xl flex flex-col items-center overflow-hidden"
               style={{ width: '230px', padding: '24px 20px' }} // Fixed width for better fit
            >
               {/* Logo Icon - Smaller */}
               <div className="mb-2">
                  <Inventory2Icon className="text-blue-500 w-40 h-40 hover:text-blue-700 transition-colors" />
               </div>

               <h2 className="text-lg font-bold text-blue-500 mb-5 tracking-tight">Inventory Management</h2>

               <div className="w-full space-y-3 mb-6">
                  {/* Email Input - Compact */}
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                           <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                           <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                     </div>
                     <input
                        type="text"
                        placeholder="Email"
                        className="block w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg bg-white text-[11px] focus:outline-none focus:ring-1 focus:ring-blue-400 placeholder:text-gray-400"
                     />
                  </div>

                  {/* Password Input - Compact */}
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                     </div>
                     <input
                        type="password"
                        placeholder="Password"
                        className="block w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg bg-white text-[11px] focus:outline-none focus:ring-1 focus:ring-blue-400 placeholder:text-gray-400"
                     />
                  </div>
               </div>

               {/* Login Button - Adjusted size */}
               <button
                  onClick={() => setStep('dashboard')}
                  className="w-full bg-[#1E88E5] text-white py-2.5 rounded-lg font-bold text-xs shadow-md active:scale-95 transition-all mb-5"
               >
                  Login
               </button>

               <p className="text-[#6D54A5] text-[9px] font-bold">
                  Don't have an account? <span className="text-[#1E88E5] cursor-pointer hover:underline">Sign Up</span>
               </p>
            </div>

            {/* Android Navigation Bar */}
            <div className="absolute bottom-4 left-0 w-full flex justify-center gap-12 text-white/40">
               <div className="w-3.5 h-3.5 rounded-sm border-[1.5px] border-current"></div>
               <div className="w-4 h-4 rounded-full border-[1.5px] border-current"></div>
               <div className="w-0 h-0 border-y-[7px] border-y-transparent border-r-[11px] border-r-current"></div>
            </div>
         </div>
      );
   } else if (step === 'dashboard') {
      return (
         <div className="h-full flex flex-col bg-[#fffcf5] font-sans overflow-y-auto no-scrollbar">
            {/* Admin Dashboard Header */}
            <header className="pt-10 pb-4 px-6 flex justify-between items-center sticky top-0 bg-[#fffcf5]/80 backdrop-blur-md z-50">
               <h1 className="text-xl font-black text-slate-800 tracking-tighter">Admin Dashboard</h1>
               <button onClick={() => setStep('login')} className="p-2 text-slate-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
               </button>
            </header>

            <div className="p-4 space-y-6">
               {/* Overview Section */}
               <section>
                  <div className="flex justify-between items-center mb-2 px-2">
                     <h2 className="text-sm font-black text-slate-800">Overview</h2>
                     <button className="w-6 h-6 rounded-full bg-[#f4511e] flex items-center justify-center text-white shadow-lg">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                     </button>
                  </div>

                  <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 px-1">
                     <div className="min-w-[60px] flex-1 bg-white p-2 rounded-2xl border border-green-200 shadow-sm">
                        <div className="text-[10px] font-black text-slate-800">৳605.86</div>
                        <div className="text-[8px] font-black uppercase text-slate-600 mt-1">Total Sales</div>
                     </div>
                     <div className="min-w-[60px] flex-1 bg-white p-2 rounded-2xl border border-blue-200 shadow-sm">
                        <div className="text-[10px] font-black text-slate-800">৳408.00</div>
                        <div className="text-[8px] font-black uppercase text-slate-600 mt-1">Total Paid</div>
                     </div>
                     <div className="min-w-[60px] flex-1 bg-white p-2 rounded-2xl border border-orange-200 shadow-sm">
                        <div className="text-[10px] font-black text-slate-800">৳564.86</div>
                        <div className="text-[8px] font-black uppercase text-slate-600 mt-1">Total Due</div>
                     </div>
                  </div>
               </section>

               {/* Monthly Profit Analysis */}
               <section className="bg-[#f3e5f5] rounded-[1rem] p-4 shadow-sm border border-purple-50">
                  <div className="flex justify-between items-center mb-2">
                     <h3 className="text-sm font-black text-slate-800">Monthly Profit Analysis</h3>
                     <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>

                  {/* Net Profit card */}
                  <div className="bg-[#f1f8e9] rounded-2xl p-3 text-center mb-3 border border-green-100 shadow-inner">
                     <div className="text-green-600 font-black text-[10px] uppercase tracking-widest mb-1">Net Profit</div>
                     <div className="text-xl font-black text-slate-800 mb-1">৳270.00</div>
                     <div className="text-[10px] font-bold text-green-600">11.7% Margin</div>
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-4">
                     <div>
                        <div className="flex justify-between text-[10px] font-black mb-1 px-1">
                           <span className="text-slate-800">Total Revenue</span>
                           <span className="text-slate-800">৳2310.00</span>
                        </div>
                        <div className="h-1.5 bg-slate-200/50 rounded-full overflow-hidden">
                           <div className="h-full bg-blue-500" style={{ width: '80%' }}></div>
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between text-[10px] font-black mb-1 px-1">
                           <span className="text-slate-800">Product Cost</span>
                           <span className="text-slate-800">৳2040.00</span>
                        </div>
                        <div className="h-1.5 bg-slate-200/50 rounded-full overflow-hidden">
                           <div className="h-full bg-orange-500" style={{ width: '70%' }}></div>
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between text-[10px] font-black mb-1 px-1">
                           <span className="text-slate-800">Net Profit</span>
                           <span className="text-slate-800">৳270.00</span>
                        </div>
                        <div className="h-1.5 bg-slate-200/50 rounded-full overflow-hidden">
                           <div className="h-full bg-green-500" style={{ width: '15%' }}></div>
                        </div>
                     </div>
                  </div>

                  {/* Bottom summary line */}
                  <div className="mt-2 pt-4 border-t border-purple-100 flex justify-between items-center">
                     <div className="text-[8px] font-black text-slate-600 leading-tight">
                        <div className="text-[10px] font-black text-slate-600">Revenue: ৳2310.00</div>
                        <div className="text-[10px] font-black text-slate-600">Cost: ৳2040.00</div>
                     </div>
                     <div className="px-3 py-1.5 bg-green-100 text-green-700 font-black text-[10px] rounded-2xl">
                        11.7%
                     </div>
                  </div>
               </section>

               {/* Quick Actions */}
               <section className="bg-[#e1f5fe] rounded-2xl p-6 shadow-sm border border-blue-150">
                  <h3 className="text-sm font-black text-slate-800 mb-2">Quick Actions</h3>
                  <div className="grid grid-cols-3 gap-4">
                     <button onClick={() => setStep('manageitems')} className="w-15 h-20 bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center gap-2 border border-slate-50 active:scale-95 transition-all">
                        <div className="w-6 h-6 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                           <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" /></svg>
                        </div>
                        <span className="text-[9px] font-black text-slate-600 uppercase tracking-tight">Manage Items</span>
                     </button>
                     <button onClick={() => setStep('viewreport')} className="w-15 h-20 bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center gap-3 border border-slate-50 active:scale-95 transition-all">
                        <div className="w-6 h-6 bg-green-50 rounded-xl flex items-center justify-center text-green-500">
                           <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" /></svg>
                        </div>
                        <span className="text-[9px] font-black text-slate-600 uppercase tracking-tight">View Reports</span>
                     </button>
                     <button className="w-15 h-20 bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center gap-3 border border-slate-50 active:scale-95 transition-all">
                        <div className="w-6 h-6 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500">
                           <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
                        </div>
                        <span className="text-[9px] font-black text-slate-600 uppercase tracking-tight">Customer Ledger</span>
                     </button>
                     <button className="w-15 h-20 bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center gap-3 border border-slate-50 active:scale-95 transition-all">
                        <div className="w-6 h-6 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-500">
                           <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg>
                        </div>
                        <span className="text-[9px] font-black text-slate-600 uppercase tracking-tight">Manage Users</span>
                     </button>
                  </div>
               </section>
            </div>
            <div className="h-10"></div>
         </div>
      );
   } else if (step === 'manageitems') {
      return (
         <div className="h-screen w-full flex flex-col bg-[#fffcf5] font-sans relative overflow-hidden">

            {/* 1. Header - Fixed at top */}
            <header className="pt-8 pb-4 px-4 flex justify-between items-center bg-blue-500 z-30 shadow-md">
               <button onClick={() => setStep('dashboard')} className="p-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
               </button>
               <h1 className="text-xl font-bold text-white tracking-tighter">Manage Items</h1>
               <div className='w-10'></div>
            </header>

            {/* 2. Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-2 space-y-2">

               {/* Search Bar */}
               <section className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                     </svg>
                  </div>
                  <input
                     type="text"
                     placeholder="Search items..."
                     className="w-full bg-white border border-slate-200 rounded-2xl py-3 pl-11 pr-4 text-sm shadow-sm outline-none"
                  />
               </section>

               {/* Items Grid */}
               <div className="grid grid-cols-1 gap-3 pb-24">
                  {/* Item Card 1: Keyboard */}
                  <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                     <div className="flex justify-between items-center mb-2">
                        <div>
                           <h4 className="text-sm font-black text-slate-800">Keyboard</h4>
                           <p className="text-xs text-slate-400">SKU: KB-MECH</p>
                        </div>
                        <div className="text-sm font-black text-blue-600">$89.99</div>
                     </div>
                     <div className="flex justify-between items-center bg-slate-50 rounded-lg p-2">
                        <div className="flex flex-col">
                           <span className="text-[10px] font-black text-slate-500 uppercase">Current</span>
                           <div className="flex items-center gap-1">
                              <span className="text-sm font-black text-slate-800">12</span>
                              <span className="text-[10px] font-black px-1.5 py-0.5 bg-red-100 text-red-600 rounded">Low</span>
                           </div>
                        </div>
                        <div className="text-right">
                           <span className="text-[10px] font-black text-slate-500 uppercase">Min</span>
                           <div className="text-sm font-black text-slate-800">15</div>
                        </div>
                     </div>
                  </div>

                  {/* Item Card 2: Monitor */}
                  <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                     <div className="flex justify-between items-center mb-2">
                        <div>
                           <h4 className="text-sm font-black text-slate-800">Monitor</h4>
                           <p className="text-xs text-slate-400">SKU: MON-27</p>
                        </div>
                        <div className="text-sm font-black text-blue-600">$299.99</div>
                     </div>
                     <div className="flex justify-between items-center bg-slate-50 rounded-lg p-2">
                        <div className="flex flex-col">
                           <span className="text-[10px] font-black text-slate-500 uppercase">Current</span>
                           <div className="flex items-center gap-1">
                              <span className="text-sm font-black text-slate-800">18</span>
                              <span className="text-[10px] font-black px-1.5 py-0.5 bg-green-100 text-green-600 rounded">Good</span>
                           </div>
                        </div>
                        <div className="text-right">
                           <span className="text-[10px] font-black text-slate-500 uppercase">Min</span>
                           <div className="text-sm font-black text-slate-800">10</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* 3. Floating Action Button */}
            <button
               onClick={() => setIsSheetOpen(true)}
               className="fixed bottom-8 right-6 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-xl z-40 active:scale-90 transition-transform"
            >
               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
               </svg>
            </button>

            {/* 4. The Bottom Sheet (Appears over everything) */}
            {isSheetOpen && (
               <div className="fixed inset-0 z-50 flex items-end">
                  {/* Dark Backdrop */}
                  <div
                     className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                     onClick={() => setIsSheetOpen(false)}
                  />

                  {/* Sheet Form */}
                  <div className="relative w-full bg-white rounded-t-[32px] p-6 shadow-2xl animate-in slide-in-from-bottom duration-300">
                     <div className="w-12 h-1 bg-slate-300 rounded-full mx-auto mb-6" />

                     <h2 className="text-lg font-black text-slate-800 mb-6">Add New Item</h2>

                     <div className="space-y-4">
                        <div>
                           <label className="text-[10px] font-black text-slate-500 uppercase mb-1 block">Item Name</label>
                           <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm outline-none focus:border-blue-500" placeholder="Enter name" />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                           <div>
                              <label className="text-[10px] font-black text-slate-500 uppercase mb-1 block">Price</label>
                              <input type="number" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm outline-none" placeholder="0.00" />
                           </div>
                           <div>
                              <label className="text-[10px] font-black text-slate-500 uppercase mb-1 block">Min Stock</label>
                              <input type="number" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm outline-none" placeholder="5" />
                           </div>
                        </div>

                        <div>
                           <label className="text-[10px] font-black text-slate-500 uppercase mb-1 block">Total Stock</label>
                           <input type="number" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm outline-none" placeholder="100" />
                        </div>

                        <div className="flex gap-3 pt-6 pb-2">
                           <button
                              onClick={() => setIsSheetOpen(false)}
                              className="flex-1 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl active:bg-slate-200"
                           >
                              Cancel
                           </button>
                           <button
                              className="flex-1 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg active:bg-blue-700"
                           >
                              Save Item
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </div>
      );
   } else if (step === 'viewreport') {
      return (
         <div className="h-screen w-full flex flex-col bg-[#fffcf5] font-sans relative overflow-hidden">

            {/* 1. Header - Fixed at top */}
            <header className="pt-8 pb-4 px-4 flex justify-between items-center bg-blue-500 z-30 shadow-md">
               <button onClick={() => setStep('dashboard')} className="p-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
               </button>
               <h1 className="text-xl font-bold text-white tracking-tighter">View Report</h1>
               <div className='w-10'></div>
            </header>

            {/* 2. Content Area */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-2 space-y-2">
               {/* Top Card */}
               <div className="mx-auto flex max-w-sm items-center gap-x-2 rounded-xl bg-blue-300 p-4 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                  <svg
                     className="w-4 h-4 text-black"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                  >
                     <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <div>
                     <div className="text-sm font-medium text-black dark:text-white">Date Range</div>
                     <p className="text-xs text-gray-500 dark:text-gray-400">Nov 28 - Dec 27</p>
                  </div>
                  <div className='w-25 px-4 py-2 bg-white rounded-full flex items-center gap-1'>
                     <svg
                        className="w-3 h-3 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                     >
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                     </svg>
                     <div className="text-xs font-medium text-black dark:text-white">Change</div>
                  </div>
               </div>
               {/* Middle Card */}
               <div className="mx-auto flex flex-col max-w-sm gap-x-2 rounded-xl bg-blue-300 p-4 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

                  <div className='flex flex-row gap-2'>
                     <svg
                        className="w-4 h-4 text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/01/svg"
                     >
                        <path
                           fillRule="evenodd"
                           d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 4.053a6.002 6.002 0 014.947 4.947H9V4.053zm0 6.947v5.947a6.002 6.002 0 01-4.947-4.947H9z"
                           clipRule="evenodd"
                        />
                     </svg>
                     <div className="text-sm font-medium text-black dark:text-white">Sales By Payment</div>
                  </div>
                  <div className='w-35 px-4 py-2 bg-white rounded-full flex items-center gap-1'>
                     <svg
                        className="w-3 h-3 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                     >
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                     </svg>
                     <div className="text-xs font-medium text-black dark:text-white">Change</div>
                  </div>
               </div>
            </div>

         </div>
      );
   }

   return (
      <div className="h-full flex flex-col bg-slate-50">
         <DemoHeader title="Inventory Admin" color="#22c55e" />
         <div className="p-4 grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-left">
               <div className="text-xl font-black text-green-500">124</div>
               <div className="text-[8px] font-black uppercase text-slate-400">Products</div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-left">
               <div className="text-xl font-black text-orange-400">12</div>
               <div className="text-[8px] font-black uppercase text-slate-400">Low Stock</div>
            </div>
         </div>
         <button
            onClick={() => setStep('login')}
            className="mt-auto p-4 text-slate-400 text-[10px] text-center uppercase font-black hover:text-slate-600"
         >
            Exit Demo
         </button>
      </div>
   );
};