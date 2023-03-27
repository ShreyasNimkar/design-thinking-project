import React from 'react'
import Navbar from '../Components/Navbar'
import Cards from '../Components/Cards'
const ProductGrid = () => {
  return (
    <>
     <Navbar/> 
     <div className='h-[90vh] w-full overflow-hidden'>
<div className='h-full flex items-center justify-around'><div className='w-[90%] h-[90%] flex justify-around items-center flex-wrap overflow-y-scroll'>

<Cards/>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
</div>
</div>
</div>
    </>
  )
}

export default ProductGrid
