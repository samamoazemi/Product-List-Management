
import { useState } from 'react';
import style from './AddProducts.module.css'


const AddProducts = ({ productsGroup, selectGroup, addProduct, nameEntery, productInputObj }) => {
    

    return(
     <div>
          <div className={style.title}>Add Products</div>
            <div className={style.AddProducts}>
           
           <div>
               <label className={style.labelProduct}>Name of product : </label>
               <input className={style.inputProduct} onChange={nameEntery} value={productInputObj.name} type="text"/>
           </div>
           <div>
               <label className={style.labelProduct}>Group of product : </label>
               <select className={style.selectProduct} onChange={selectGroup} value={productInputObj.group}>
                  {
                      productsGroup.map((group) =>{
                          return(
                              <option>{group}</option>
                          )
                      })
                  }
               </select>
               <button className={style.buttonProduct} onClick={addProduct}>Add new product</button>
           </div>
          
        </div>
     </div>
    )
}
 
export default AddProducts;