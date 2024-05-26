import React from 'react'
import './index.css'

function SingleNews({singleNews}) {
    const {title,description,image,publishedAt,source,url}= 
    singleNews;
    const defaultImageUrl = 'https://euaa.europa.eu/sites/default/files/styles/width_600px/public/default_images/news-default-big.png?itok=NNXAZZTc'
   
  return (  
   
     <div className='news-card'>
      <img className='news-img' src={image || defaultImageUrl } alt="img-url" />
      <div className='news-content'>
          <p className='news-title'>{title}</p>
          <p className='news-des'>{description}</p>
          <p className='news-info'>By:{sourde[0]} | Date:{publishedAt}</p>
          <a className='read-more' href={url} target='_blank'>Read More</a>
      </div>
      
    </div>

  )
}

export default SingleNews
