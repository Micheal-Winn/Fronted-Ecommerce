import ProductCard from "../Home/ProductCard";


export default function ProductLists(props)
{
    return(
        <div  className={'grid grid-cols-3 gap-7'}>
            {
                props.productLists.map((product)=><ProductCard key={product._id}
                                                               product={product}
                                        />)
            }
        </div>
    )
}