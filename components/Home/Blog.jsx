import React from 'react'

import Section from '../Customs/Section'
import BlogCard from '../Customs/BlogCard'
import { HiOutlineArrowRight, HiOutlineEye } from 'react-icons/hi'

const Blog = () => {
  const categories = [
    { name: "Web3", slug: "web3" },
    { name: "Crypto Currency", slug: "crypto-currency" },
    { name: "Daily News", slug: "daily-news" },

  ]
  const articles = [
    {
      thumbnail: "/images/blog/blog-1.jpg",
      title: "Best Computer setup for programming under ₹10,000",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam minima omn.",
      categories: [categories[2]],
      authorName: "admin",
      timeToRead: "4 minutes",
      publishedAt: "26 august 2022"
    },
    {
      thumbnail: "/images/blog/blog-2.jpg",
      title: "Microsoft New Windows 11 is Amazing",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam minima omnis dolorem, excepturi autem.",
      categories: [categories[1], categories[2]],
      authorName: "admin",
      timeToRead: "8 minutes",
      publishedAt: "20 may 2022"
    },
    {
      thumbnail: "/images/blog/blog-3.jpg",
      title: "Web 2.0 is better than web 2.0",
      description: "Lorem, ipsum dolor elit. Nostrum ipsam minima omn, nostrum ipsam minima omn.",
      categories: [categories[0], categories[2]],
      authorName: "admin",
      timeToRead: "6 minutes",
      publishedAt: "28 april 2022"
    },
  ]
  return (
    <Section id="blog" title="My Blog" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo dolorum fugiat nostrum ipsam minima omnis dolorem, excepturi autem." subtitle="Recent Posts">
      <div className="flex flex-wrap justify-center items-start">
        {articles.map((article, index) => (
          <BlogCard key={index} {...article} />
        ))}
      </div>
      <div className='my-4'>
        <button className='flex items-center text-sm justify-center group mx-auto duration-300 bg-paper transition-all hover:bg-primary hover:text-white px-4 py-2 capitalize rounded-md font-semibold'>
          <HiOutlineEye className='w-5 h-5 mr-2' />
          see more
          <HiOutlineArrowRight className='w-4 h-4 transition-all ml-2 group-hover:ml-4 duration-300' />
        </button>
      </div>
    </Section>

  )
}

export default Blog