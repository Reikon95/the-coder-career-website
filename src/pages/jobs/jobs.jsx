import React, { useState } from "react";
import "./jobs.css";

export function Jobs() {
  const [filters, setFilters] = useState({
    locations: [],
    remoteOnly: true,
    years: "all",
    tech: [],
  });

  let jobs = [
    {
      id: "000001",
      name: "Google",
      companyBio: "Search engines and that",
      jobTitle: "Senior Front End Developer",
    },
  ];

  return (
    <>
      <h2>Jobs</h2>
      <h6>
        Want to advertise a job? It's free for a limited time!{" "}
        <button>Add Your Job</button>
      </h6>
      <p>
        Browse opportunities currently advertised on The Coder Career. All
        opportunities are vetted by our team to ensure they are a quality
        employer.
      </p>
      <div className="developer-container">
        {jobs.map((job, index) => {
          return (
            <div className="developer-profile">
              <div className="dev-title">Name: {job.name}</div>
              {/* <div>Location: {dev.city + ", " + dev.country}</div> */}
              {/* <div>Remote: {dev.remote}</div> */}
              {/* <div>
                Tech:{" "}
                {dev.tech.map((tech) => {
                  return <>{tech + ", "}</>;
                })}
              </div> */}
              {/* <div>Years of experience: {dev.yearsXP}</div>
              <div>Languages: English (Fluent), Spanish (Basic)</div>
              <div className="developerBio">{dev.bio}</div> */}
              <div className="button-wrapper-dev">
                <button className="dev-contact-button">Apply</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
