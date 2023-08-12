import { getAllProducts } from "@/services/products";

function detail(props)
{
    const {textile} = props;
    return(
        <>
        <h2>Detailed Page{textile}</h2>
       
        </>
    )
}
export default detail;

export function getStaticProps(){
const data = getAllProducts()
console.log(data)
return{
    props:{
        textile:"welcome to karachi"
    
    }
}
}
export function getStaticPaths(){
    return {
        paths:[{
            params:{
                productId:1
            }
        }
        ],
   fallback:true,
    }

}