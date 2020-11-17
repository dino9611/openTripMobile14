const INITIAL_STATE={
    id:0,
    username:'',
    isverified:'',
    email:'',
    isLogin:false,
    isLoading:false,
    cart:[]
}


export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {...state,isLogin:true,...action.payload,isLoading:false,cart:action.cart}
        case 'LOADING':
            return {...state,isLoading:true}
        case 'ERROR':
            return{...state,isLoading:false}
        case 'LOGOUT':
            return INITIAL_STATE
        case 'ADDTOCART':
            return {...state,cart:action.cart}
        default:
            return state
    }
}