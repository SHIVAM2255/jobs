/*import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How HireSphere  Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, culpa.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, culpa.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, culpa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
*/
import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How HireSphere Works</h3>
          <div className="banner">
            {/* Existing cards */}
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, culpa.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, culpa.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, culpa.
              </p>
            </div>

            {/* New Resume Builder box */}
            <div className="resume-builder-card">
              <div className="card-content">
                <h4>Build Your Resume</h4>
                <p>Create stunning resumes effortlessly!</p>
                <button
                  onClick={() =>
                    window.open("https://atsresume.vercel.app/", "_blank")
                  }
                >
                  Try Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .howitworks {
          padding: 2rem 0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        h3 {
          font-size: 2rem;
          margin-bottom: 2rem;
        }
        .banner {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
        }
        .card {
          flex: 1;
          max-width: 300px;
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        .card p {
          margin: 0.5rem 0;
          font-size: 0.9rem;
        }

        /* Resume Builder card */
        .resume-builder-card {
          flex: 1;
          max-width: 300px;
          perspective: 1000px;
        }
        .card-content {
          background: linear-gradient(135deg, #4e54c8, #8f94fb);
          color: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          text-align: center;
          transform: rotateY(0deg);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }
        .resume-builder-card:hover .card-content {
          transform: rotateY(10deg);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.25);
        }
        .card-content h4 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        .card-content p {
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }
        .card-content button {
          padding: 0.5rem 1.5rem;
          font-size: 1rem;
          color: #4e54c8;
          background: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .card-content button:hover {
          background: #4e54c8;
          color: white;
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};

export default HowItWorks;
