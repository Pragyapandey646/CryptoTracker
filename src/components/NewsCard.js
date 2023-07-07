import React from 'react'

const NewsCard = (props) => {
  return (
    <>
    <div class="max-w-sm  overflow-hidden rounded-xl border-2 border-white backdrop-blur-2xl shadow-md duration-200 mb-10">
        <img src={props.img} alt="plant" class="h-auto w-full" />
        <div class="p-5">
          <p class="text-medium mb-5 text-white">{props.title}</p>
          <button class="w-full rounded-md bg-yellow-600  py-2 text-indigo-100 hover:bg-yellow-500 hover:shadow-md duration-75"><a href={props.url}>See More</a></button>
        </div>
      </div>
    </>
  )
}

export default NewsCard
