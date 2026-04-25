import React, { useState } from 'react';

interface Customer {
  id: number;
  name: string;
  role: string;
  avatar: string;
  email: string;
  phone: string;
}

interface CustomerListProps {
  onBack: () => void;
}

interface CustomerCardProps {
  name: string;
  role: string;
  avatar: string;
  email?: string;
  phone?: string;
  onPress?: () => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ onBack }) => {
  // Sample customer data - you can replace with API data
  const [customers] = useState<Customer[]>([
    {
      id: 1,
      name: "Erin Lindford",
      role: "Admin",
      avatar: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
      email: "erin@example.com",
      phone: "+1 234 567 8900"
    },
    {
      id: 2,
      name: "Eliyen",
      role: "Manager",
      avatar: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
      email: "eliyen@example.com",
      phone: "+1 234 567 8901"
    },
    {
      id: 3,
      name: "John Doe",
      role: "Customer",
      avatar: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
      email: "john.doe@example.com",
      phone: "+1 234 567 8902"
    }
  ]);

  return (
    <div className="h-screen w-full flex flex-col bg-[#fffcf5] font-sans relative overflow-hidden">
      {/* Header - Fixed at top */}
      <header className="pt-8 pb-4 px-4 flex justify-between items-center bg-gradient-to-r from-blue-500 to-blue-600 z-30 shadow-lg">
        <button 
          onClick={onBack} 
          className="p-2 hover:bg-blue-600 rounded-full transition-colors duration-200"
          aria-label="Go back"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-white tracking-tighter">Customers</h1>
        <div className="w-10"></div>
      </header>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-3">
        {/* Customer Cards */}
        {customers.map((customer) => (
          <CustomerCard 
            key={customer.id}
            name={customer.name}
            role={customer.role}
            avatar={customer.avatar}
            email={customer.email}
            phone={customer.phone}
          />
        ))}
      </div>
    </div>
  );
};

// Customer Card Component
const CustomerCard: React.FC<CustomerCardProps> = ({ name, role, avatar, email, phone, onPress }) => {
  return (
    <div 
      onClick={onPress}
      className="flex flex-col gap-3 p-5 bg-white border border-indigo-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer sm:flex-row sm:items-center sm:gap-6 sm:py-4 hover:border-indigo-400 hover:scale-[1.02]"
    >
      <img 
        className="mx-auto block h-12 w-12 rounded-full object-cover sm:mx-0 sm:shrink-0 border-2 border-indigo-300" 
        src={avatar} 
        alt={`${name}'s avatar`}
      />
      <div className="space-y-2 text-center sm:text-left flex-1">
        <div className="space-y-0.5">
          <p className="text-[16px] font-semibold text-gray-800">{name}</p>
          <p className="text-[14px] font-medium text-indigo-600">{role}</p>
          {email && (
            <p className="text-[12px] text-gray-500 flex items-center justify-center sm:justify-start gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {email}
            </p>
          )}
          {phone && (
            <p className="text-[12px] text-gray-500 flex items-center justify-center sm:justify-start gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {phone}
            </p>
          )}
        </div>
      </div>
      {/* Optional arrow icon */}
      <div className="hidden sm:block">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default CustomerList;