import Link from 'next/link';
export default function Blog() {
  const blogs = [
    {
      date: '9th Oct 2022',
      title: 'Junior front end developer interview questions',
      description: `There are a lot of junior developer jobs out there. But what exactly do these positions entail? And what kind of questions should you expect if you're...`,
      tags: ['React', 'Javascript'],
    },
    {
      date: '10th Oct 2022',
      title: 'Junior front end developer interview questions',
      description: `There are a lot of junior developer jobs out there. But what exactly do these positions entail? And what kind of questions should you expect if you're...`,
      tags: ['React', 'Javascript'],
    },
    {
      date: '12th Oct 2022',
      title: 'Junior front end developer interview questions',
      description: `There are a lot of junior developer jobs out there. But what exactly do these positions entail? And what kind of questions should you expect if you're...`,
      tags: ['React', 'Javascript'],
    },
  ];
  const BlogCard = ({ item }) => {
    return (
      <div className="bg-white py-4 p-5 m-5 rounded hover:bg-gray-100 ">
        <div className="text-sm font-medium text-gray-900">{item.title}</div>
        <div className="items-center space-x-2 text-xs text-[#06b6d4]">
          {item.date}
        </div>
        <div className="text-sm text-gray-500">{item.description}</div>
        <div className="text-sm text-gray-700">{item.tags}</div>
      </div>
    );
  };
  return (
    <div className="container bg-gray-200 p-24">
      <div className="text-center">
        <h3 className="font-bold">Blogs</h3>
        <p>
          Blogs Get the latest resources, news and article on Technical
          Interview Preparation. Level up your development career and ace your
          next technical interview round! or
          <Link href="./createblog">
            <span className="text-blue-700"> Contribute your blog post.</span>
          </Link>
        </p>
      </div>
      <div className="grid grid-cols-3 mt-10">
        {blogs.map((item) => {
          return <BlogCard item={item} />;
        })}
      </div>
    </div>
  );
}
