import { instance } from "../axios/axios";

export const PRODUCT_GET_SERVICE= async()=>{
    let respone= await instance.get("products")
    return respone.data
}

export const PRODUCT_POST_SERVICE= async(product)=>{
   return   await instance.post("products",product)
}
export const PRODUCT_PATCH_SERVICE= async(product)=>{
   return   await instance.patch(`products/${product.id}`,product)
}
export const PRODUCT_DELETE_SERVICE= async(id)=>{
   return   await instance.delete(`products/${id}`)
}