import { useEffect} from 'react'
import './index.css'
import SingleNews from '../SingleNews'
import Gif from '../../assets/Counterrotation.gif'
import { useSelector,useDispatch } from 'react-redux'
import {fetchNews} from '../../action/news'

function News() {
 
      const news = useSelector(store => store.news)
      const loading = useSelector(store => store.loading)
      const dispatch = useDispatch()

      useEffect(() =>{
         dispatch(fetchNews()) 
      },[])

 
    return (
    <div className='container'>
      <h1 id='page-heading'> Breaking News</h1>
      <div className='news-container'>
          {!loading ? news.map((singleNews, index)=>(
            <SingleNews key={index} singleNews={singleNews}/>
          )):
          <img src={Gif} alt='loading'/>}
      </div>
    </div>
  )
}

export default News
