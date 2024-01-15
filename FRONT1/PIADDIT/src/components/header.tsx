import "./App.css";

export function header() {
  return (
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
  );
}
