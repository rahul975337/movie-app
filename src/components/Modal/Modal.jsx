import "./Modal.css";

function ModalPage() {
  return (
    <div className="main_card">
      <div className="card_left">
        <div className="card_datails">
          <h1>Mission: Impossible – Fallout</h1>
          <div className="card_cat">
            <p className="PG">PG - 13</p>
            <p className="year">2018</p>
            <p className="genre">Action | Adventure </p>
            <p className="time">2h 28m</p>
          </div>
          <p className="disc">
            Ethan Hunt and his IMF team, along with some familiar allies, race
            against time after a mission gone wrong.
          </p>
          <a
            href="https://www.imdb.com/title/tt4912910/"
            target="_blank"
            rel="noreferrer"
          >
            Read More
          </a>
          <div className="social-btn">
            <button>SEE TRAILER</button>
            <button>DOWNLOAD</button>
            <button>97%</button>
            <button>Stars</button>
          </div>
        </div>
      </div>
      <div className="card_right">
        <div className="img_container">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ModalPage;
