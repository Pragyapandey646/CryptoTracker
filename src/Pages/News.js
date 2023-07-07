import React from 'react'
import axios from 'axios'
import NewsCard from '../components/NewsCard';
import Navbar from '../components/Navbar';

const News = () => {
  const [News, setNews] = React.useState([])

  const options = {
    method: 'GET',
    url: 'https://real-time-finance-data.p.rapidapi.com/currency-news',
    params: {from_symbol: 'BTC', to_symbol: 'ETH'},
    headers: {
      'X-RapidAPI-Key': '2eee3d6248msheb060056dbd8a6fp14801ejsn277f87739647',
      'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
    }
  };
   
  const fetchNews  = async () => {
    let response = await axios.request(options);
    setNews(response.data.data.news)
  }

  React.useEffect(()=>{
    fetchNews()
  }, [])

  const newsArray = News.map(news => (
    <NewsCard 
      title = {news.article_title}
      url = {news.article_url}
      img = {news.article_photo_url}
    />
  ))

  return (
    <>
      <Navbar/>
      <div className='text-center px-20 my-5'>
        <h1 className='text-5xl text-teal-50 font-bold pb-5 leading-10'>News</h1>
      </div>  
      <div class="gp-10 grid items-center place-content-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ml-10">
        {newsArray}
      </div>
    </>
  )
}

export default News
