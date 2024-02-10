import React, { Fragment} from 'react'


const NavBar = () => {
  
  return (
    <Fragment>
    

    <div>
           <nav  style={{ backgroundColor: '#f8f9fa', display: 'flex', flexDirection: 'row', borderBottom: '1px solid #002b4f' }}>
        <span id="" className="pro-sidebar-logo ml-8 ">
        {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRODMyXTmktMB4X5psD64aOj7GjElLJsKX4KhzIYFm4eRSLIvHu2GzF7cUYta35_s03H4&usqp=CAU' alt='' className='w-10 h-10' /> */}
          <div>M</div>
          <h5 className='text-black'> My Revision<sup className="  text-blue-900 ">+</sup> </h5>
        </span> 
        
      </nav>
          </div>
  
</Fragment>
  )
}

export default NavBar