import React from 'react';

function Cards({ item }) {
  return (
    <div className='mt-6 my-2'>
    <div className="card bg-base-100  w-80 h-64 shadow-xl hover:scale-105 duration-200 dark:bg-slate-500 dark:text-white dark:border-spacing-4 ">
      <figure className=''>
        
           <img 
           src="https://img.freepik.com/free-photo/reading-concept-with-pile-books_23-2147690501.jpg?t=st=1720677088~exp=1720680688~hmac=f8560691106084a694bcdcf626587fefcbf45ca815a2938e07a5674891f83e93&w=360"
           alt="Shoes" />
       </figure>
       <div className="card-body">
         <h2 className="card-title">
           {item.name}
           <div className="badge badge-secondary">New</div>
         </h2>
         <p>{item.tittle}</p>
         <div className="card-actions justify-between">
           <div className="badge badge-outline">${item.price}</div>
           <div className="badge badge-outline hover:text-white hover:bg-pink-500 duration-200">Buy Now</div>
     
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;
