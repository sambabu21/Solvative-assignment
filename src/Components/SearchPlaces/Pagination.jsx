export default function Pagination({ totalPosts,postsPerPage,paginate,currentPage }){
    const  pageNumbers=[]
 
     for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
          pageNumbers.push(i)
     }

     return (
         <div >
             <ul className="page-container">
                 {pageNumbers.map((num)=>{
                    return  <li key={num} className="page">
                        <a className={currentPage==num?"current":"inactive"}onClick={()=>paginate(num)}>{num}</a> 
                    </li>
                 })}
             </ul>
         </div>
     )
 }