export default function index() {
  return (
    <div className="container bg-blue-200 p-5 mx-auto justify-center">
      <h3>Login</h3>
      <div>
        <div className="form-label">Username: </div>
        <div>
          <input type="text" name="username" id="username" />
        </div>
      </div>
      <div>
        <div className="form-label">Password</div>
        <div>
          <input type="text" name="password" id="password" />
        </div>
      </div>
      <footer>
        <button type="submit" className="bg-green-200 p-2 border-2 mt-2">
          Login
        </button>
        <div>
          <a href="./forgot" className="text-blue-600">
            Forgot Password?
          </a>
          <a href="./register">new User</a>
        </div>
      </footer>
    </div>
  );
}
