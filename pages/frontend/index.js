import Card from '../../components/Card';
import { frontendproblems } from '../api/frontendproblems';
import { useState } from 'react';
export default function Index() {
  const [searchTxt, setSearchString] = useState('');
  return (
    <div className="container bg-gray-200 p-5">
      <div className="flex justify-between m-5">
        <div className="font-bold p-2">Frontend Problems</div>
        <div>
          <a
            className="bg-blue-200 hover:bg-blue-400 p-4"
            href={`/frontend/testing`}
            target="_new"
          >
            Add New Solution
          </a>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search problem"
            className="px-2 py-2"
            value={searchTxt}
            onChange={(e) => setSearchString(e.target.value)}
          />
        </div>
      </div>
      <div className="bg-white-100 flex grid grid-cols-3 grid-cols-xs-2 divide-y divide-gray-200">
        {frontendproblems &&
          frontendproblems
            .filter((newitem) => newitem.title.includes(searchTxt))
            .map((item) => {
              return <Card item={item} type="frontend" />;
            })}
      </div>
    </div>
  );
}
