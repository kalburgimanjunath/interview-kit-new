import Link from 'next/link';
import Truncate from 'react-truncate';
export default function Card({ item, type }) {
  const path =
    type == 'algorithm' ? `/algorithm/${item.id}` : `/frontend/${item.id}`;
  return (
    <Link href={path}>
      <div className="bg-white py-4 p-5 m-5 rounded hover:bg-gray-100 ">
        <div className="flex w-full flex-row justify-between">
          {item.difficulty == 'Medium' ? (
            <div className="rounded-sm bg-gradient-to-r from-yellow-700 to-yellow-500 text-white px-2 py-0.5 text-sm mb-2">
              Medium
            </div>
          ) : null}
          {item.difficulty == 'Easy' ? (
            <div className="rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mb-2">
              Easy
            </div>
          ) : null}
          {item.difficulty == 'Hard' ? (
            <div className="rounded-sm bg-gradient-to-r from-red-700 to-red-500 text-white px-2 py-0.5 text-sm mb-2">
              Hard
            </div>
          ) : null}

          <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
            30 minutes
          </div>
        </div>
        <div className="text-sm font-medium text-gray-900">{item.title}</div>
        <div className="text-sm text-gray-500">
          <Truncate lines={3} ellipsis={<span>... Read more</span>}>
            {item.problemStatement}
          </Truncate>
        </div>
        {/* <div className="text-sm text-gray-500">{item.solution}</div>
        <div className="text-sm text-gray-500">{item.sampleCode}</div>
        <div className="mr-2 text-gray-400">{item.companies}</div> */}
      </div>
    </Link>
  );
}
