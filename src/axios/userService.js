import { instance } from "../axios/axios";


//// products
export const PRODUCT_GET_SERVICE= async()=>{
    let respone= await instance.get("products")
    return respone.data
}

export const PRODUCT_POST_SERVICE= async(product)=>{
   console.log(product);
   return   await instance.post("products",product)
}



export const PRODUCT_PATCH_SERVICE= async(product)=>{
   console.log(product);
   return   await instance.patch(`products/${product.id}`,{
      "state": product.state,
      "videoSrc":product.videoSrc,
      "promotion":product.promotion,
      "titleProduct":product.titleProduct,
      "from":product.from,
      "price":product.price,
      "img":{
         "img1":product.img.img1,
         "img2":product.img.img2,
         "img3":product.img.img3,
         "img4":product.img.img4,
         "img5":product.img.img5,
         "img6":product.img.img6,
         "img7":product.img.img7,
         "img8":product.img.img8,
      },
      "cmt":{
         "cmt1":product.cmt.cmt1,
         "cmt2":product.cmt.cmt2,
         "cmt3":product.cmt.cmt3,
         "cmt4":product.cmt.cmt4,
         "cmt5":product.cmt.cmt5,
         "cmt6":product.cmt.cmt6,
      }
   })
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
 export const USER_PATCH_SERVICE=async(editUser)=>{

   await instance.patch(`users/${editUser.id}`,editUser)
}
   export const USER_PATCH_ACTIVE_SERVICE=async(activeUser)=>{
   console.log(activeUser);
   await instance.patch(`users/${activeUser.id}`,{"state": activeUser.state})
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

export const USER_DELETE_SERVICE=async(id)=>{
   console.log(id);
   return await instance.delete(`users/${id}`)
}


export const USER_SEARCH_SERVICE=async(action)=>{
   let loginUser=await instance.patch(`users?email_like=${action.payload.email}`)
   console.log(loginUser.data);
   return loginUser.data
}

// export const USER_LOGIN_SUCCESS=async(action)=>{
//    console.log(action.email);
//    let loginUser=await instance.get(`users?email_like=${action.email}`)
//    console.log(loginUser);
//    return loginUser
// }