import React from 'react'

import Link from "next/link"
import Image from "next/image"

import { HiOutlineCalendar, HiOutlineClock, HiOutlineUser } from "react-icons/hi"

const BlogCard = ({article}) => {
    const { frontmatter: { title, description, thumbnail, tags, date }, slug } = article

    return (
        <Link href={`/article/${slug}`}>
            <div className="lg:w-1/3 md:w-1/2 w-full">
                <div className="p-4 mx-0 sm:mx-4 m-4 xs:mx-2 mb-4 rounded-lg shadow-normal bg-paper dark:bg-darkPaper group ">
                    <div className="relative flex flex-col">
                        <div className='leading-[0px]'>
                            <Image src={thumbnail} alt="thumbnail" loading="lazy" objectFit="cover" objectPosition="center" className="lg:h-48 select-none cursor-pointer md:h-36 w-full object-cover rounded-lg object-center" height={400} width={600} />
                        </div>
                        <div className='pt-4'>
                            <div className='mb-6'>
                                <div className='cursor-pointer'>
                                    <h5 className="cursor-pointer group-hover:text-secondary transition duration-500  text-textPrimary dark:text-darkTextPrimary text-lg md:text-xl  capitalize font-semibold mb-3">
                                        {title}
                                    </h5>
                                    <p className="cursor-pointer text-sm font-semibold capitalize">
                                        {description}
                                    </p>
                                </div>
                            </div>
                            <span className="flex flex-wrap mb-4">
                                {tags.map((tag, index) => (
                                    <div key={index}>
                                        <div className='cursor-pointer capitalize bg-primary dark:bg-slate-800 mr-2 mb-2 px-3 py-1.5 rounded-3xl select-none font-semibold tracking-wide text-xs text-white'>
                                            {tag}
                                        </div>
                                    </div>
                                ))}
                            </span>
                            <div className="flex flex-row flex-wrap justify-between px-1 pb-2">
                                <span className="text-xs center-elements">
                                    <HiOutlineUser className="w-3.5 h-3.5 mr-1" />
                                    By admin
                                </span>
                                <span className="text-xs center-elements">
                                    <HiOutlineCalendar className="w-3.5 h-3.5 mr-1" />
                                    {date}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard