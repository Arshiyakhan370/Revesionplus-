import React from 'react'

const TableComponent = ({ Nameofstudent, assingmentList, UserList }) => {
    let Arr = [1, 2, 3, 4, 5]
    return (
        <div>
            {assingmentList &&
                Arr.map(itm => (
                    <div key={Math.random()} className='flex justify-between px-8 py-2 hover:bg-blue-50'>
                        {/* for name right side */}
                        <div className='flex items-center'>
                            {Nameofstudent}
                        </div>
                        {/* for name end right side */}
                        {/* for button left side */}
                        <div className='flex space-x-2 md:space-x-5'>
                            <button class="bg-yellow-500 hover:bg-yellow-700 text-white  py-0 px-2 rounded">
                                Share
                            </button>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white  py-0 px-2 rounded">
                                Print
                            </button>
                            <button class="bg-red-500 hover:bg-red-700 text-white  py-0 px-2 rounded">
                                View
                            </button>
                        </div>
                        {/* for button end left side */}
                    </div>
                ))
            }


            {UserList && <table className="table-auto w-full">
            
                <thead className='bg-[#e4eff6]'>
                    <tr>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2 hidden sm:table-cell">Email</th>
                        <th className="px-4 py-2 hidden md:table-cell">Role</th>
                        <th className="px-4 py-2">Mobile</th>
                        <th className="px-4 py-2 hidden lg:table-cell">Expiry Date</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                {Arr.map(itm => (
                    <tr>
                    <th className="px-4 py-2 text-sm md:text-base lg:text-lg">Pakeeza Fatima</th>
                    <th className="px-4 py-2 hidden sm:table-cell text-sm md:text-base lg:text-lg">pakeeza@gmail.com</th>
                    <th className="px-4 py-2 hidden md:table-cell text-sm md:text-base lg:text-lg">Teacher</th>
                    <th className="px-4 py-2 text-sm md:text-base lg:text-lg">8745921532</th>
                    <th className="px-4 py-2 hidden lg:table-cell text-sm md:text-base lg:text-lg">12-11-2023</th>
                    <th className="px-4 py-2 text-sm md:text-base lg:text-lg">
                         {/* svg for vertical dots */}
                         <span>dots</span>
                             <span>edit</span>
                                {/* svg end */}
                    </th>
                  </tr>
                ))}
                </tbody>
            </table>
            
            }
        </div>
    )
}

export default TableComponent