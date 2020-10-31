import React, { useState } from "react";
import "./availabledevs.css";
export function AvailableDevs() {
  const [hideNames, setHideNames] = useState(false);
  let developers = [
    {
      id: 1,
      name: "Cam",
      city: "London",
      country: "United Kingdom",
      remote: "Yes",
      tech: ["React", "Angular", "Typescript", "Python"],
      languages: { English: "Fluent", Spanish: "Basic" },
      yearsXP: 1,
      bio:
        "I'm an ex-technical recuriter who retrained as a software engineer. I enjoy spending my free time helping peopel break into the tech",
    },
    {
      id: 2,
      name: "Sergio",
      city: "Barcelona",
      country: "Spain",
      remote: "No",
      tech: ["Angular", "Python", "C#", ".NET"],
      languages: { Spanish: "Fluent", English: "Fluent" },
      yearsXP: 6,
      bio: "I love building distributed systems!",
    },
    {
      id: 3,
      name: "Annika",
      city: "Berlin",
      country: "Germany",
      remote: "Remote Only",
      tech: ["Angular", "React", "Vue", "Javascript"],
      languages: { German: "Fluent", English: "Fluent", Polish: "Basic" },
      yearsXP: 4,
      bio: "Front end and design expert who loves building amazing interfaces!",
    },
  ];

  return (
    <>
      <h2>Find a Developer!</h2>
      <h6>Want to be featured? (it's free!)</h6>
      <button>List Your Profile</button>
      <p>
        Feel free to contact any developer on this page with interview requests!
        Please note, we do not add pictures or current salary in order to combat
        bias in a recruitment process. If you want to anonomyse names too, click
        here.
      </p>
      <div className="developer-container">
        {developers.map((dev, index) => {
          return (
            <div className="developer-profile">
              <div className="dev-title">Name: {dev.name}</div>
              <div>Location: {dev.city + ", " + dev.country}</div>
              <div>Remote: {dev.remote}</div>
              <div>
                Tech:{" "}
                {dev.tech.map((tech) => {
                  return <>{tech + ", "}</>;
                })}
              </div>
              <div>Years of experience: {dev.yearsXP}</div>
              <div>Languages: English (Fluent), Spanish (Basic)</div>
              <div className="developerBio">{dev.bio}</div>
              <div className="button-wrapper-dev">
                <button className="dev-contact-button">
                  Contact {dev.name}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
