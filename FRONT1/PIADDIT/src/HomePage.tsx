import React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import "./App.css";
import "./homepage.css";
import { getPosts } from "./api/getPosts";
import { foot } from "./components/foot";

const HomePage: React.FC<{}> = () => {
  const { isLoading, isError, data } = useQuery("todos", getPosts);
  if (!isLoading) {
    if (isError) {
      console.log("error");
    } else {
      console.log("data is", data);
    }
  }

  return (
    <div style={{ width: "100vw" }}>
      <body>
        <header>
          <div className="navbar">
            <div className="brand">PIADDIT</div>
            <div className="search-box">
              <div>
                <select name="" id="">
                  <option value="Everything">Everything</option>
                  <option value="Titles">Titles</option>
                  <option value="Descriptions">Descriptions</option>
                </select>
                <input type="text" name="q" placeholder="search ..." />
                <button>
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="subjects">Subject</div>
        </header>
      </body>
      <section>
        <div
          className="container"
          style={{ height: "700px", overflow: "scroll" }}
        >
          <div className="table-row">
            <div className="subjects">
              <a href="">Is learning Python on 2021 worth it?</a>
              <br />
              <span>
                Started by{" "}
                <b>
                  <a href="">User</a>
                </b>{" "}
                .
              </span>
            </div>
            <div className="replies">
              2 replies <br /> 125 views
            </div>
          </div>
          <div className="table-row">
            <div className="subjects">
              <a href="">Is learning Python on 2021 worth it?</a>
              <br />
              <span>
                Started by{" "}
                <b>
                  <a href="">User</a>
                </b>{" "}
                .
              </span>
            </div>
            <div className="replies">
              2 replies <br /> 125 views
            </div>
          </div>
          <div className="table-row">
            <div className="subjects">
              <a href="">Is learning Python on 2021 worth it?</a>
              <br />
              <span>
                Started by{" "}
                <b>
                  <a href="">User</a>
                </b>{" "}
                .
              </span>
            </div>
            <div className="replies">
              2 replies <br /> 125 views
            </div>
          </div>
          <div className="table-row">
            <div className="subjects">
              <a href="">Is learning Python on 2021 worth it?</a>
              <br />
              <span>
                Started by{" "}
                <b>
                  <a href="">User</a>
                </b>{" "}
                .
              </span>
            </div>
            <div className="replies">
              2 replies <br /> 125 views
            </div>
          </div>
          <div className="table-row">
            <div className="subjects">
              <a href="">Is learning Python on 2021 worth it?</a>
              <br />
              <span>
                Started by{" "}
                <b>
                  <a href="">User</a>
                </b>{" "}
                .
              </span>
            </div>
            <div className="replies">
              2 replies <br /> 125 views
            </div>
          </div>
          <div className="table-row">
            <div className="subjects">
              <a href="">Is learning Python on 2021 worth it?</a>
              <br />
              <span>
                Started by{" "}
                <b>
                  <a href="">User</a>
                </b>{" "}
                .
              </span>
            </div>
            <div className="replies">
              2 replies <br /> 125 views
            </div>
          </div>
          <div className="table-row">
            <div className="subjects">
              <a href="">Is learning Python on 2021 worth it?</a>
              <br />
              <span>
                Started by{" "}
                <b>
                  <a href="">User</a>
                </b>{" "}
                .
              </span>
            </div>
            <div className="replies">
              2 replies <br /> 125 views
            </div>
          </div>
          <div className="table-row">
            <div className="subjects">
              <a href="">Is learning Python on 2021 worth it?</a>
              <br />
              <span>
                Started by{" "}
                <b>
                  <a href="">User</a>
                </b>{" "}
                .
              </span>
            </div>
            <div className="replies">
              2 replies <br /> 125 views
            </div>
          </div>
          <div className="table-row">
            <div className="subjects">
              <a href="">Is learning Python on 2021 worth it?</a>
              <br />
              <span>
                Started by{" "}
                <b>
                  <a href="">User</a>
                </b>{" "}
                .
              </span>
            </div>
            <div className="replies">
              2 replies <br /> 125 views
            </div>
          </div>
          <div className="table-row">
            <div className="subjects">
              <a href="">Is learning Python on 2021 worth it?</a>
              <br />
              <span>
                Started by{" "}
                <b>
                  <a href="">User</a>
                </b>{" "}
                .
              </span>
            </div>
            <div className="replies">
              2 replies <br /> 125 views
            </div>
          </div>
          <div className="table-row">
            <div className="subjects">
              <a href="">Is learning Python on 2021 worth it?</a>
              <br />
              <span>
                Started by{" "}
                <b>
                  <a href="">User</a>
                </b>{" "}
                .
              </span>
            </div>
            <div className="replies">
              2 replies <br /> 125 views
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="forum-info">
          <div className="chart">
            MyForum - Stats &nbsp;<i className="fa fa-bar-chart"></i>
          </div>
          <span>
            <u>5,369</u> Posts in <u>48</u> Topics by <u>8,124</u> Members.
          </span>
          <br />
          <span>
            Latest post:{" "}
            <b>
              <a href="">Random post</a>
            </b>{" "}
            on Dec 15 2021 By <a href="">RandomUser</a>
          </span>
          .<br />
          <span>
            Check <a href="">the latest posts</a> .
          </span>
          <br />
        </div>

        <>
          <foot />
        </>
        {/* <footer>
          <span>&copy; Paul Tham | All Rights Reserved</span>
        </footer> */}
      </section>
    </div>
  );
};

export default HomePage;
