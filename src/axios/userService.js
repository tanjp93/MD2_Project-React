import { instance } from "../axios/axios";


//// products
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
export const PRODUCT_SEARCH_PRODUCT_SERVICE= async(action)=>{
   let searchList=await instance.get(`products?titleProduct_like=${action.toWhere}`) 
   return searchList.data
}



//// users

export const USER_POST_SERVICE=async(user)=>{
   return await instance.post("users/",user)
}
  export const USER_GET_SERVICE=async()=>{
  let respone = await instance.get("users/")
 
   return respone.data
}
  
export const USER_LOGIN_SERVICE=async(user)=>{
   let respone = await instance.post("login",user)
   return respone.data
}



// export const USER_LOGIN_SUCCESS_SERVICE=async(user)=>{
//    return await instance.post("isLogin",user)
// }

export const USER_OUT_SUCCESS_SERVICE=async(id)=>{
   return await instance.del(`isLogin/${id}`)
}

export const USER_LOGIN_STATE_SERVICE=async(user)=>{
   return await instance.get("isLogin",user)
}


export const USER_SEARCH_SERVICE=async(action)=>{

   let loginUser=await instance.get(`users?email_like=${action.email}`)
   // console.log(loginUser.data);
   return loginUser.data

}

// export const USER_LOGIN_SUCCESS=async(action)=>{
//    console.log(action.email);
//    let loginUser=await instance.get(`users?email_like=${action.email}`)
//    console.log(loginUser);
//    return loginUser
// }