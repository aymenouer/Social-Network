export const LoginStart = () => ({
    type:"POSTS_START",
})
export const PostsSuccess = (posts) => ({
    type:"POSTS_SUCCESS",
    payload:posts,
})
export const PostsSuccessAdd = (newPost) => ({
    type:"POSTS_SUCCESS_ADD",
    payload:newPost,
})


export const Posts_User_Success = (posts) => ({
    type:"POSTS_USER_SUCCESS",
    payload:posts
})
