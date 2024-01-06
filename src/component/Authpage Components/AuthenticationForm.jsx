// import React, { useState } from 'react'
// import './Authentication.css'
// import { Link } from 'react-router-dom'

// const AuthenticationForm = () => {
//   const [isV1,SetIsV1]=useState(false)
//   return (
//     <div className="section-right max-w-md w-[100%] mt-8 bg-gray-100 rounded-md md:w-[100%] md:pr-8 md:pl-8">
//       <h2>Welcome to <span className="text-global">My Revision+</span> </h2>
//       <div className="tab">
//         <button className={`tablinks hover:bg-[#065982] ${!isV1 ? '!bg-[#002b4f] !text-white' : ''}`} id="defaultOpen"  onClick={()=>SetIsV1(false)}> Login My Revision V2</button>
//         <button className={`tablinks hover:bg-[#065982] ${isV1 ? '!bg-[#002b4f] !text-white' : ''}`} onClick={()=>SetIsV1(true)}> Login My Revision V1</button>
//       </div>
//       {isV1 && <div className='flex items-center justify-between mt-4'>
//         {/* Radio button for select v1 or v2 */}
//         <div className="flex items-center me-4">
//         <input checked id="purple-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
//         <label for="purple-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Student Login</label>
//     </div>
//     <div className="flex items-center me-4">
//         <input id="purple-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
//         <label for="purple-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teacher Login</label>
//     </div>
//       </div>}
//       <form>
//         <div className="mb-4 mt-4">
//           <div className="relative">
//             <input type="email" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-1 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-gray-500 focus:ring-0 focus:border-blue-900 peer" placeholder=" " />

//             <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Your Email</label>
//           </div>
//         </div>
//         <div className="mb-4">
//           <div className="relative">
//             <input type="password" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
//             <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
//           </div>
//         </div>
//         <div className="touch-form2">
//           <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
//           <label className="remember" for="vehicle1"> Remember me</label>
//           <Link to="#" className="forgot-password">Forgot Password?</Link>
//         </div>

//         <div className="touch-form2">
//           <button type="submit" className="submit-now">Continue</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default AuthenticationForm
  