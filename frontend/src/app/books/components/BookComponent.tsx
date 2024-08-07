"use client";

import { BookDto } from "@shared/dto/book.dto";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { handleTagClick } from "../../func/handleTagClick";
import { QUERY_TYPE } from "@shared/query/bookSearch.query";

export default function BookComponent({
...bockDTO
}: BookDto) {
  const router = useRouter();


  return (
    <>
      <div className="flex justify-between p-4 border rounded-md shadow-md">
        <div className="flex">
          <Image
            src="/path/to/your/image.jpg" // 이미지 경로
            alt="Description of the image" // 대체 텍스트
            width={140} // 이미지의 너비
            height={150} // 이미지의 높이
          />
          <div className="ml-4 flex flex-col overflow-hidden">
            <h2 className="text-lg font-bold mt-2">{bockDTO.title}</h2>
            <p>{bockDTO.author}</p>
            <p className="text-green-600 font-bold mt-2">
              {bockDTO.price}
              {/* 10% 12,600원 <span className="line-through">{price}</span> */}
            </p>
            <div className="mt-2 space-x-2">
              {bockDTO.hashtags.map((value: string, index) => (
                <span key={index} className="px-2 py-1 text-violet-600 border border-violet-600 hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring rounded" onClick={() => {handleTagClick(QUERY_TYPE.TAG,value, router)}}>
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded">
            장바구니
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            바로구매
          </button>
        </div>
      </div>
    </>
  );
}
