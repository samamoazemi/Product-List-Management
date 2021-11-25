import style from "./ProductList.module.css"

const ProductList = ({products}) => {

    return(
        <div>
            {
                products.map((product)=>{
                    return(
                        <div className={style.ProductList}>
                            <div className={style.nameProduct}>Name of Product : {product.name}</div>
                            <div className={style.nameProduct}>Group of Product : {product.group}</div>
                        </div>
                        
                    )

                })
            }
        </div>
    )
}
 
export default ProductList;