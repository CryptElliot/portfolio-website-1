import React from 'react'

import Image from "next/image"

import Chip from './Chip'
import { HiOutlineCalendar, HiOutlineClock, HiOutlineUser } from "react-icons/hi"

const BlogCard = (props) => {
    const { thumbnail, title, description, categories, authorName, timeToRead, publishedAt } = props
    return (
        <div className="lg:w-1/3 md:w-1/2 w-full">
            <div className="p-4 xs:mx-2 mb-4 rounded-lg bg-paper shadow-normal ">

                <div className="rounded-lg relative flex flex-col">
                    <div>
                        <Image src={thumbnail} alt="thumbnail" objectFit="cover" className="lg:h-48 select-none cursor-pointer md:h-36 w-full object-cover rounded-lg object-center" height={400} width={600} />
                    </div>
                    <div className='pt-4'>
                        <div className='mb-6'>
                            <div className='cursor-pointer'>
                                <h5 className="cursor-pointer text-base capitalize font-semibold mb-4">
                                    {title}
                                </h5>
                                <p className="cursor-pointer text-sm tracking-wider font-extralight capitalize text-textSecondary ">
                                    {description}
                                </p>
                            </div>
                        </div>
                        <span className="flex flex-wrap mb-4">
                            {categories.map(({ name }, index) => (
                                <div key={index}>
                                    <Chip>
                                        {name}
                                    </Chip>
                                </div>
                            ))}
                        </span>
                        <div className="flex flex-row flex-wrap justify-between px-1">
                            <span className="text-textSecondary  text-xs pb-3 pr-3 flex">
                                <HiOutlineUser className="w-3.5 h-3.5 mr-1" />
                                By {authorName}
                            </span>
                            <span className=" text-textSecondary  text-xs pb-3 pr-3 flex">
                                <HiOutlineClock className="w-3.5 h-3.5 mr-1 " />
                               {timeToRead}
                            </span>
                            <span className="text-textSecondary  text-xs flex">
                                <HiOutlineCalendar className="w-3.5 h-3.5 mr-1" />
                               {publishedAt}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard