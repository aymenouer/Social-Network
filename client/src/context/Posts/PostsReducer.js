const PostsReducer = (state,action) =>{
    switch(action.type)
    {
        case "POSTS_START":
            return {
                posts:null,
                isFetching:true,
                error:false,
            };
            case "POSTS_SUCCESS":
                return {
                    posts:action.payload,
                    isFetching:false,
                    error:false,
                };
            case "POSTS_USER_SUCCESS":
                return {
                    posts:action.payload,
                    isFetching:false,
                    error:false,
                };
        default:
            return state;
    }
}
export default PostsReducer;