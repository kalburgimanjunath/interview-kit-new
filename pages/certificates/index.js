export default function index() {
  const name = 'manjunath kalburgi';
  const conclude =
    'Person above has completed the business program in excellence.	';
  const header = 'Certificate of Completion';
  return (
    <div className="text-center pm-certificate-container m-50 border-2 ">
      <div className="p-10 border-2 m-5 bg-white">
        <h1 className="pm-certificate-header font-bold text-xl ">{header}</h1>
        <h3 className="cursive font-bold text-lg m-10">
          This is to certify that <span>{name}</span> successfully completed 5
          hours of {course_name} on March 2010
        </h3>
        <div className="mt-20 justify-center w-full flex">
          <img
            src="https://logodix.com/logo/1931250.jpg"
            width="100"
            height="100"
          />
        </div>
        {/* <div>
          <h1 className="uppercase border-bottom-1 border-color-black underline">
            {name}
          </h1>
        </div> */}
        {/* <div className="uppercase cursive">{conclude}</div> */}
        <div className="flex items-center justify-between w-full">
          <div>
            <div className="text-lg">20-20-2002</div>
            <div>Date</div>
          </div>
          <div>
            <div>
              <img
                src="https://static.cdn.wisestamp.com/wp-content/uploads/2020/08/Oprah-Winfrey-Signature-1.png"
                width="120"
                height="80"
              />
            </div>
            <div className="text-lg">Signature</div>
          </div>
        </div>
      </div>
    </div>
  );
}
