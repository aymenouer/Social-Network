import { createContext, useEffect, useReducer } from "react";
import PostsReducer from "./PostsReducer";
const INITIAL_STATE = {
    posts: JSON.parse(localStorage.getItem("posts")) || null,
    isFetching:false,
    error:false
};
export const PostsContext = createContext(INITIAL_STATE);
export const PostsContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(PostsReducer,INITIAL_STATE);
    useEffect(()=>{
        localStorage.setItem("posts", JSON.stringify(state.posts))
      },[state.posts])
    return(
        <PostsContext.Provider value={{
            posts:state.posts,
            isFetching:state.isFetching,
              error:state.error
              ,dispatch
              }} >
{children}
        </PostsContext.Provider>
    )
}