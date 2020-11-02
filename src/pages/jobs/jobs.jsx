import React, { useState } from "react";
import "./jobs.css";

export function Jobs() {
  const [filters, setFilters] = useState({
    locations: [],
    remoteOnly: true,
    years: "all",
    tech: [],
  });

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
    </>
  );
}
