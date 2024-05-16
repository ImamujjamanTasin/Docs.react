import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";


function Card({data , reference}) {
  return (
    <motion.div whileDrag={{scale: 1.1}} dragElastic={0.2} dragTransition={{bounceStiffness:100, bounceDamping: 30}} drag dragConstraints={reference}
     className="relative flex-shrink-0 w-60 h-72 rounded-[42px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden">
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 font-light'>{data.desc}</p>
        <div className="footer absolute bottom-0  w-full    left-0 ">
            <div className="flex  items-center justify-between mb-3 py-3 px-8">
                <h5>{data.fileSize}</h5>
                <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
                {data.close ? <IoClose/> : 
                <FiDownload size=".78em" color='#fff'/>}
                
                </span>

            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full py-4 bg-blue-600 flex items-center justify-center`}>
                    <h3 className='text-md font-semibold'> {data.tag.tagTitle} </h3>
                 </div>
                )
            }
          
        </div>
    </motion.div>

  )
}

export default Card