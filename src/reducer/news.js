import { FETCH_NEWS_SUCCESS,FETCH_NEWS_LOADING,FETCH_NEWS_FAILED } from "../action/news"

const initialState ={
    loading:false,
    news:[],
    erroMessage:''
}


const reducer =(state=initialState,action)=>{
    switch(action.type){
        case FETCH_NEWS_LOADING :
            return {
               ...state,
               loading:true
            }
        case FETCH_NEWS_SUCCESS :
            return {
               ...state,
               news:[...action.payload],
               loading:false
            }
        case FETCH_NEWS_FAILED :
            return {
                   ...state,
                   erroMessage:action.payload,
                   loading:false
                }
       
        default:
            return state
    }
}

export default reducer