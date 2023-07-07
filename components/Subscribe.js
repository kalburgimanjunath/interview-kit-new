export default function Subscribe() {
  return (
    <div className="p-4 m-4 border-2 rounded rounded-lg border-violet-800 shadow-md w-full">
      <div>
        <h1 className="font-bold text-2xl">
          Ready to land a fully remote job?
        </h1>
        <p>
          Click below to download the free guide and receive the newest remote
          jobs weekly in your inbox
        </p>
      </div>
      <div>
        <div>Username:</div>
        <div>
          <input type="text" name="username" />
        </div>
      </div>
      <div>
        <div>Email:</div>
        <div>
          <input type="email" name="email" />
        </div>
      </div>
      <div>
        <button type="button" name="submit" className="primary ml-0 ">
          Download the free Guide
        </button>
      </div>
    </div>
  );
}
