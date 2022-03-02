import  axios  from 'axios';
export const loginCall = async (userCredentails,dispatch) =>{
    dispatch({type:"LOGIN_START"});
    try {
        const res = await axios.post('auth/login',userCredentails);
        dispatch({type:"LOGIN_SUCCESS",payload:res.data}); 
    } catch (err) {
        dispatch({type:"LOGIN_FAILURE",payload:err}); 
    }
}

export const postsCall = async (location,username,user,dispatch) =>{
    dispatch({type:"POSTS_START"});
    try {
        const res = location ==="all" ?  
        username ?  await axios.get("/posts/profile/"+username) : await axios.get("/posts/timeline/"+user._id) 
        : location==="/" ? await axios.get("/posts/timeline/"+user._id) : await axios.get("/posts/profile/"+username);


        dispatch({type:"POSTS_SUCCESS",payload:res.data.sort((p1,p2) => {

            return new Date(p2.createdAt) -new Date(p1.createdAt);
          })}); 
    } catch (err) {
     
    }
}

