import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
const Laptop = () => {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-sm-6">
            <div
              className="card m-2"
              style={{ width: "30rem", height: "45rem" }}
            >
              <img
                src="https://static.bhphoto.com/images/images250x250/1712114725000_1811272.jpg"
                className="card-img-top"
                alt="..."
              />

              <div className="card-body">
                <h5 class="card-title">Basic Laptops</h5>
                <p className="card-text">
                  Get ready for day-to-day tasks with a laptop that covers the
                  essentials.
                  <ul>
                    <li>Surf the net, chat and manage emails</li>
                    <li>Play easy games and stream movies</li>
                    <li>Produce uncomplicated presentations</li>
                  </ul>
                </p>
                <Link to="#" className="btn btn-success">
                  See Expert Pick
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div
              className="card m-2"
              style={{ width: "30rem", height: "45rem" }}
            >
              <img
                src="https://static.bhphoto.com/images/images250x250/1728936661000_1851422.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Work & Business Laptops</h5>
                <p className="card-text">
                  <ul>
                    <li>Manage large spreadsheets and presentations</li>
                    <li>
                      Take care of business anywhere, for long stretches of time
                    </li>
                    <li>Run a multitude of programs at once</li>
                  </ul>
                </p>
                <Link to="#" class="btn btn-success">
                  See Expert Pick
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card m-2 " style={{ width: "30rem", height: "45rem" }}>
              <img
                src="https://static.bhphoto.com/images/images250x250/1724705126000_1847408.jpg"
                className="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Creative Laptops</h5>
                <p class="card-text">
                  <ul>
                    <li>Render and export image-heavy jobs</li>
                    <li>Store RAW photos, video clips & sound samplings</li>
                    <li>Juggle multiple projects with ease</li>
                  </ul>
                </p>
                <Link to="#" class="btn btn-success">
                  See Expert Pick
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card m-2" style={{ width: "30rem", height: "45rem" }}>
              <img
                src="https://static.bhphoto.com/images/images250x250/1726766422000_1811269.jpg"
                className="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Gaming Laptops</h5>
                <p class="card-text">
                  <ul>
                    <li>Play for keeps with the latest features</li>
                    <li>Respond to challenges with blazing-fast speed</li>
                    <li>Recon the arena in crystal-clear detail</li>
                  </ul>
                </p>
                <Link to="#" class="btn btn-success">
                  See Expert Pick
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Laptop;
