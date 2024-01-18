import "../App.css";
import "./homepage.css";
import Header from "../components/header";

function Signin() {
  return (
    <section>
      <div>
        <Header />
      </div>
      <div>
        <section>
          <div className="form">
            <form>
              <div>
                <label>Username : </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  required
                />
              </div>
              <div>
                <label>Password : </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  required
                />
                <button type="submit">Login</button>
              </div>
              <div>
                <input type="checkbox" defaultChecked={false} /> Remember me
              </div>
              <div>
                <label>First time?</label>
                <button type="button">
                  {" "}
                  <a href="register.html"> Register here</a>
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Foot />
      <script src="main.js"></script>
    </section>
  );
}

export default Signin;
