import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Topics from '../topics';
import { topics } from '../';
import { LESSONS } from '../lessons';
import Link from 'next/link';
export default function index({ params }) {
  console.log(params);
  debugger;
  const router = useRouter();
  const { id } = router.query;
  const filterData = LESSONS.filter((itemid) => {
    return itemid.title == id;
  });
  console.log(filterData);
  const filterData1 = filterData[0].topics.filter((itemid) => {
    return itemid.title == id;
  });
  debugger;
  const previousPage =
    filterData1.length > 0 &&
    topics.filter((itemid) => {
      return itemid.index == Number(filterData1[0].index - 1);
    });
  const nextPage =
    filterData1.length > 0 &&
    topics.filter((itemid) => {
      return itemid.index == Number(filterData1[0].index + 1);
    });
  return (
    <div className="m-20 grid grid-cols-3 gap-4">
      <Topics
        items={topics}
        selectedItem={
          filterData[0] && filterData1[0].index ? filterData1[0].index : 0
        }
      />
      <div className="ml-4 w-full border-2 col-span-2">
        <div className="p-4">
          <div className="text-3xl text-color-black font-bold">{id}</div>
          <div>
            {filterData1 && filterData1.length > 0 ? (
              <div>
                <div>{filterData1[0].subtitle}</div>{' '}
                <code>
                  <span
                    dangerouslySetInnerHTML={{ __html: filterData1[0].content }}
                  />
                </code>
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex justify-between border-t-2 p-5 pl-4 pr-4">
          <div className="">
            {previousPage.length > 0 ? (
              <Link
                href={previousPage[0].title}
                className="p-2 border-1 bg-pink-100 flex hover:text-black-300 hover:underline"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                    />
                  </svg>
                </span>
                <span className="ml-2">Previous</span>
              </Link>
            ) : null}
          </div>
          <div className="">
            {nextPage.length > 0 ? (
              <Link
                href={nextPage[0].title}
                className="p-2 border-1 bg-pink-100 flex hover:text-black-300 hover:underline"
              >
                <span className="mr-2">Next</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
