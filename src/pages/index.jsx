import Item from "@/components/Item";
import { useEffect, useRef, useState } from "react";
function Home() {
  const [products, setProducts] = useState([]);
  const comtRef = useRef()
  function oncomment(e){
    e.preventDefault()
    const commentx = comtRef.current.value
    fetch("/api/comments/", {
      method: "POST",
      body:JSON.stringify(commentx),
      headers: {
        "Content-Type": "application/json",
      },
    
    })
  
  }
 
  useEffect(() => {
    fetch("/api/products/")
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  }, []);

  return (
    <div className="product-list">
      {products.map((product, ind) => {return(
      <div>
      <Item key={ind} item={product} />
        <form onSubmit={oncomment}>
        <textarea  rows={2} cols={28} ref={comtRef} >write a comment </textarea>
        <button htmlType="send">Submit</button>
        </form>
        
      </div>)
    }
      )}
        
    </div>
  );
}
export default Home;
