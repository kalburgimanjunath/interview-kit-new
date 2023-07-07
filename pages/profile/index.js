export default function index() {
  const menus = [
    { name: 'Profile', href: '/Profile', current: true },
    { name: 'Liked Questions', href: '/Profile', current: false },
    { name: 'Bookmarked', href: '/Profile', current: false },
    { name: 'Completed', href: '/Profile', current: false },
    { name: 'Saved Problems', href: '/Profile', current: false },
    { name: 'Contribute', href: '/contribute', current: false },
  ];
  return (
    <div className="container bg-gray-200 p-24 grid grid-flow-col auto-cols-max">
      <div className="w-full">
        {menus &&
          menus.map((item) => {
            return (
              <div className="p-2 border-slate-50 border-2 m-2 bg-blue-100 hover:bg-blue-200">
                {item.name}
              </div>
            );
          })}
      </div>
      <div className="border-slate-50 border-2 w-full">
        <div className="p-2">
          <h1 className="font-bold text-xl">Manjunath Kalburgi</h1>
          <div>manjunathkalburgi65512@gmail.com</div>
          <div>Role: User</div>
        </div>
      </div>
    </div>
  );
}
