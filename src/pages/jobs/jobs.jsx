import React, { useState } from "react";
import "./jobs.css";

export function Jobs() {
  const [filters, setFilters] = useState({
    locations: [],
    remoteOnly: true,
    categories: [],
    tech: [],
  });

  let jobs = [
    {
      id: "000001",
      name: "Google",
      companyBio: "Search engines and that",
      jobTitle: "Senior Front End Developer",
      remote: true,
      category: "Senior",
      city: "London",
      country: "UK",
      tech: ["Angular, Typescript, Stencil, Vue"],
    },
  ];

  return (
    <>
      <h2 className="global-header">Jobs</h2>
      <h6>
        Want to advertise a job? It's free for a limited time!{" "}
        <button>Add Your Job</button>
      </h6>
      <p>
        Browse opportunities currently advertised on The Coder Career. All
        opportunities are vetted by our team to ensure they are a quality
        employer. Check out the guide on how to use the page here.
      </p>
      <div>
        <h5>Filter</h5>
        <p>Country: </p>
        <p>City: </p>
        <p>Experience level:</p>
        <p>Remote Only</p>
        <p>Tech:</p>
      </div>
      <div className="developer-container">
        {jobs.map((job, index) => {
          return (
            <div className="developer-profile">
              <div className="dev-title">Name: {job.name}</div>
              <div>
                Location:{" "}
                {job.remote ? (
                  <>Remote!</>
                ) : (
                  <>{job.city + ", " + job.country}</>
                )}
              </div>
              <div>
                Tech:{" "}
                {job.tech.map((tech) => {
                  return <>{tech + ", "}</>;
                })}
              </div>
              <div>Job category: {job.category}</div>
              <div className="jobBio">{job.companyBio}</div>
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
