import Link from 'next/link';
import { useState, useEffect } from 'react';
export default function Topics({
  items,
  selectedItem,
  selected,
  selectedMenu,
}) {
  const [visited, setVisited] = useState(0);
  const [menuOpen, setMenuOpen] = useState(0);
  console.log(selectedItem);
  return (
    <div className="cols-span-1 border-2">
      <div className="p-3 border-b-2 text-2xl text-green-600 font-bold flex justify-between">
        {visited == items.length ? 'Completed' : 'In Progress'}

        {visited == items.length ? (
          <Link href={`../certificates/${items[0].sideheader}`} target="_new">
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
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </Link>
        ) : null}
      </div>

      <progress
        id="progress"
        max={items.length}
        value={visited}
        className="m-4"
      ></progress>
      <div className="p-3 border-b-2 border-t-2">{items[0].sideheader}</div>

      {items &&
        items.map((item, index) => {
          return (
            <div
              onClick={() => {
                selectedMenu(item);
                setMenuOpen(item.index);
              }}
              className={
                menuOpen == index + 1
                  ? 'p-3 hover:bg-gray-200 lesson-topics relative bg-gray-100'
                  : 'p-3 hover:bg-gray-200 lesson-topics relative'
              }
            >
              <div
                className="cursor-pointer flex"
                onClick={() => {
                  setVisited(visited + 1);
                }}
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
                      d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                    />
                  </svg>
                </span>
                <span className="pl-2">{item.title}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
}
