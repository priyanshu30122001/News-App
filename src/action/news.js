import axios from 'axios'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
export const FETCH_NEWS_LOADING = 'FETCH_NEWS_LOADING'
export const FETCH_NEWS_FAILED = 'FETCH_NEWS_FAILED'


export const fetchNewsLoading = ()=>({
    type: FETCH_NEWS_LOADING,
    
})
export const fetchNewsSuccess = (news)=>({
    type: FETCH_NEWS_SUCCESS,
    payload: news
})
export const fetchNewsFailed = (errorMessage)=>({
    type: FETCH_NEWS_FAILED,
    payload: errorMessage
    
})

export const fetchNews = () => {
  
  return async(dispatch)=>{
        try{
            dispatch(fetchNewsLoading())
            const res = await axios.get('https://gnews.io/api/v4/search?q=example&apikey=44642a05d09774a92226646c6ecf0d68')
            const filteredNews =res.data.articles
            console.log(filteredNews);
            dispatch(fetchNewsSuccess(filteredNews))
           } catch(error){
               console.log(error)
               dispatch(fetchNewsFailed(error.message))
            }
        }
    }



  
