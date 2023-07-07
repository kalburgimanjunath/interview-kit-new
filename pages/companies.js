import Link from 'next/link';
import { useState, useEffect } from 'react';
export default function Companies() {
  const companies = [
    'facebook',
    'honeywell',
    'naukri',
    'infosys',
    'TCS',
    'birla soft',
    'ABB',
    'Tatamotors',
    'Oracle',
    'Puresoftware',
    'Quess',
    'Bcforward',
  ];
  const [remoteCompany, setRemoteCompanies] = useState(null);
  const OPTIONS = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const getCompanies = async () => {
    try {
      const response = await fetch(
        'https://www.remote-work.app/_next/data/5UEnvi3GI_dL8GfDh-H51/remote-companies.json',
        {
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    getCompanies();
  }, []);
  const Companies = ({ item }) => {
    return (
      <Link href="../companybase">
        <div className="bg-pink-200 text-black-100 p-2 m-2 align-center text-center w-full hover:bg-gray-100 rounded-md shadow-md">
          {item}
        </div>
      </Link>
    );
  };
  return (
    <div className="container bg-blue-200 p-5">
      <div className="font-bold">Companies</div>
      <div className="p-2 m-1 gap gap-1 grid grid-cols-3 md:grid-cols-2 xs:grid-cols-1">
        {companies.map((item) => {
          return <Companies item={item} />;
        })}
      </div>
    </div>
  );
}
