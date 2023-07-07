import Card from '../../components/Card';
// import { frontendproblems } from '../api/frontendproblems';
import { useState, useEffect } from 'react';
export default function Index() {
  const [frontendproblems, setFrontendProblems] = useState();
  const [searchTxt, setSearchString] = useState(' ');
  const fetchRecords = () => {
    fetch(
      'https://api.airtable.com/v0/appXy3Z9EQGEQveKp/Questions?api_key=keyeNXyxxuuYJY19w'
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result.records);
        setFrontendProblems(result.records);
      });
  };

  const [difficultyType, setType] = useState('Easy');
  const updateProblems = () => {
    const filterData =
      frontendproblems &&
      frontendproblems.filter((itemid) => {
        return itemid.fields.difficulty == difficultyType;
      });
    if (filterData && filterData.length > 0) {
      setFrontendProblems([...frontendproblems, filterData]);
    }
  };
  useEffect(() => {
    // if (difficultyType != 'Easy') {
    //   updateProblems();
    // } else {
    fetchRecords();
    // }
  }, [frontendproblems]);

  return (
    <div className="container bg-gray-200 p-5">
      <div className="flex justify-between m-5">
        <div className="font-bold p-2">Contributed Problems</div>
        <div className="search">
          <input
            type="text"
            name="search"
            value={searchTxt}
            placeholder="Search problem"
            className="px-2 py-2"
            onChange={(e) => setSearchString(e.target.value)}
          />
          {searchTxt}
        </div>
        <div className="bg-white-100 flex grid grid-cols-3 grid-cols-xs-2 divide-y divide-gray-200">
          <button
            className="bg-pink-200 m-1 p-2"
            onClick={() => setType('Easy')}
          >
            Easy
          </button>
          <button
            className="bg-pink-200 m-1 p-2"
            onClick={() => setType('Medium')}
          >
            Medium
          </button>
          <button
            className="bg-pink-200 m-1 p-2"
            onClick={() => setType('Hard')}
          >
            Hard
          </button>
        </div>
      </div>

      <div className="bg-white-100 flex grid grid-cols-3 grid-cols-xs-2 divide-y divide-gray-200">
        {frontendproblems &&
          frontendproblems
            .filter((newitem) =>
              newitem['fields'].title.toLowerCase().includes(searchTxt)
            )
            .map((item) => {
              return (
                <Card item={item.fields} type="frontend" itemId={item.id} />
              );
            })}
      </div>
      {/* <div className="bg-white-100 flex grid grid-cols-3 grid-cols-xs-2 divide-y divide-gray-200">
        {frontendproblems &&
          frontendproblems.map((item) => {
            return <Card item={item.fields} type="frontend" itemId={item.id} />;
          })}
      </div>
      <div className="bg-white-100 flex grid grid-cols-3 grid-cols-xs-2 divide-y divide-gray-200">
        {frontendproblems &&
          frontendproblems.map((item) => {
            return <Card item={item.fields} type="frontend" itemId={item.id} />;
          })}
      </div> */}
    </div>
  );
}
