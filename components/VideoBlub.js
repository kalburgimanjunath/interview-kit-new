export default function VideoBlub({ items, title, subtitle }) {
  return (
    <div className="">
      {title ? <div className="font-bold m-2">{title}</div> : null}
      {subtitle ? <div className="m-2">{subtitle}</div> : null}
      <div className="grid grid-cols-6 gap-4">
        {items &&
          items.map((item) => {
            return (
              <div className="p-2 shadow-lg hover:bg-gray-300 cursor-pointer">
                <video controls>
                  <source src={item.url} />
                </video>
                <div className="font-bold">{item.title}</div>
                <div>manjunath k</div>
                <div>***** (4.5) 199</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
