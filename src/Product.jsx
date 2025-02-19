import React from 'react'

function Product(props) {
  function handleClick(id) {
    let oneProduct = props.product.filter((ev) => {
      return ev.id == id;
    })
    props.setDetail(oneProduct);
    props.setOpen(true);
    
  }
  return (
    <div>
      <div className='grid grid-cols-4 gap-2 p-2'>
        {
            props.product.map((pro) => (
                
                <div className='border border-gray-400 rounded-xl' onClick={() => handleClick(pro.id)}>
                    <img src={pro.images[0]} className='h-[250px]'></img>
                    <h1 className='font-bold text-lg ms-5'>{pro.title}</h1>
                    <h1 className='font-semibold ms-5'>{pro.description.substr(1,40)}</h1>
                    <h1 className='text-xl ms-5'>${pro.price}</h1>
                    <h1 className='ms-5'>Free Delivery</h1>
                    <button className='bg-green-800 ms-5 w-14 text-white mb-3 rounded-full'>*{pro.rating}</button><br />
                   
     

            </div>
            ))
        }
      </div>


      
    </div>
  )
}

export default Product
