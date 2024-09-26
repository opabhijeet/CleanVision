import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const garbageDetectionData = [
  { id: 0, place: "Outdoor Area", type: "Food Waste", time: "2024-09-26T06:25:00Z" },
  { id: 1, place: "Storage Room", type: "Plastic", time: "2024-09-26T04:30:00Z" },
  { id: 2, place: "Lobby", type: "Organic", time: "2024-09-26T03:30:00Z" },
  { id: 3, place: "Entrance", type: "Paper", time: "2024-09-26T02:45:00Z" },
  { id: 4, place: "Parcell counter", type: "Plastic", time: "2024-09-26T02:00:00Z" },
  { id: 5, place: "Break Area", type: "Metal", time: "2024-09-25T12:15:00Z" },
  { id: 6, place: "Outdoor Area", type: "Glass", time: "2024-09-25T13:30:00Z" },
  
];

const GarbageDetectionTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(garbageDetectionData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = garbageDetectionData.filter(
      (record) =>
        record.place.toLowerCase().includes(term) ||
        record.type.toLowerCase().includes(term) ||
        new Date(record.time).toLocaleString().toLowerCase().includes(term)
    );
    setFilteredData(filtered);
  };

  return (
    <motion.div
      className='md:w-1/2 w-full bg-opacity-50 backdrop-blur-md shadow-xl rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
       style={{backgroundColor:'#F5EDED'}}
    >
      <div className='flex w-full justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-black'>Garbage Detection Records</h2>
        <div className='relative w-2/3'>
          <input
            type='text'
            placeholder='Search records...'
            className='w-full bg-gray-200 text-black placeholder-gray-600 outline-double rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700'
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
        </div>
      </div>

      <div className='overflow-x-auto'>
        <table className='divide-y divide-gray-700'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-left text-md font-medium text-blue-900 uppercase tracking-wider'>
                Place of Post Office
              </th>
              <th className='px-6 py-3 text-left text-md font-medium text-blue-900 uppercase tracking-wider'>
                Type of Garbage
              </th>
              <th className='px-6 py-3 text-left  font-medium text-blue-900 text-md uppercase tracking-wider'>
                Time of Garbage Detection
              </th>
              <th className='px-6 py-3 text-left text-md font-medium text-blue-900 uppercase tracking-wider'>
                Actions
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-black'>
            {filteredData.map((record) => (
              <motion.tr
                key={record.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className='px-6 py-4'>
                  <div className='text-sm font-medium text-black'>{record.place}</div>
                </td>
                <td className='px-6 py-4'>
                  <div className='text-sm text-black'>{record.type}</div>
                </td>
                <td className='px-6 py-4'>
                  <div className='text-sm text-black whitespace-nowrap'>
                    {new Date(record.time).toLocaleString()}
                  </div>
                </td>
                <td className='px-6 py-4 text-sm text-black'>
                  <button className='text-indigo-400 hover:text-indigo-300 mr-2'>Edit</button>
                  <button className='text-red-400 hover:text-red-300'>Delete</button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default GarbageDetectionTable;
