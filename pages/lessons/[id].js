import Link from 'next/link';
import { useRouter } from 'next/router';
import { LESSONS } from './lessons';
import Topics from './topics';
import { topics } from './';
import { useState } from 'react';
export default function index({ params }) {
  const router = useRouter();
  const { id } = router.query;
  const filterData = LESSONS.filter((itemid) => {
    return itemid.title == id;
  });
  // const filterData1 =
  //   filterData &&
  //   filterData[0].topics.filter((itemid) => {
  //     return itemid.title == selectedItem.title;
  //   });
  // console.log(filterData1);
  const [selectedItem, setSelectedItem] = useState();

  const previousPage =
    selectedItem &&
    filterData[0].topics.filter((itemid) => {
      return itemid.index == Number(selectedItem.index - 1);
    });
  const nextPage =
    selectedItem &&
    filterData[0].topics.filter((itemid) => {
      return itemid.index == Number(selectedItem.index + 1);
    });
  return (
    <div className="flex">
      {filterData && filterData.length > 0 ? (
        <Topics
          items={filterData[0].topics}
          selectedItem={
            filterData[0] && filterData[0].index ? filterData[0].index : 0
          }
          selectedMenu={setSelectedItem}
        />
      ) : null}
      <div className="ml-4 w-full border-2 col-span-2">
        <div className="p-4">
          <div className="text-3xl text-color-black font-bold">
            {selectedItem ? selectedItem.title : ''}
          </div>
          <div>
            {selectedItem ? (
              <div>
                <div>{selectedItem.subtitle}</div>{' '}
                <code>
                  <span
                    dangerouslySetInnerHTML={{ __html: selectedItem.content }}
                  />
                </code>
              </div>
            ) : null}
          </div>

          <div className="flex justify-between border-t-2 p-5 pl-4 pr-4">
            <div className="">
              {previousPage && previousPage.length > 0 ? (
                <div
                  href={previousPage[0].title}
                  onClick={() => setSelectedItem(previousPage[0])}
                  className="p-2 border-1 bg-pink-100 flex hover:text-black-300 hover:underline cursor-pointer"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                      />
                    </svg>
                  </span>
                  <span className="ml-2">Previous</span>
                </div>
              ) : null}
            </div>
            <div className="">
              {nextPage && nextPage.length > 0 ? (
                <div
                  onClick={() => setSelectedItem(nextPage[0])}
                  className="p-2 border-1 bg-pink-100 flex hover:text-black-300 hover:underline cursor-pointer"
                >
                  <span className="mr-2">Next</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
