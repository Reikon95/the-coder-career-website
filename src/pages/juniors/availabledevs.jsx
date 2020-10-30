import React from "react";
import "./availabledevs.css";
export function AvailableDevs() {
  let developers = [
    {
      id: 1,
      name: "Cam",
      remote: "Yes",
      tech: ["React", "Angular", "Typescript", "Python"],
      languages: { English: "Fluent", Spanish: "Basic" },
      bio:
        "I'm an ex-technical recuriter who retrained as a software engineer. I enjoy spending my free time helping peopel break into the tech",
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
        bias in a recruitment process.
      </p>
      <div className="developer-container">
        <div className="developer-profile">
          <div className="dev-title">Name: Cam</div>
          <div>Location: London</div>
          <div>Remote: Yes</div>
          <div>Tech: React, Angular, Python</div>
          <div>Years of experience: 1</div>
          <div>Languages: English (Fluent), Spanish (Basic)</div>
          <div className="developerBio">
            I'm an ex-technical recuriter who retrained as a software engineer.
            I enjoy spending my free time helping peopel break into the tech
            industry!
          </div>
          <div>
            <button className="dev-contact-button">Contact</button>
          </div>
        </div>
        <div className="developer-profile">item</div>
        <div className="developer-profile">item</div>
        <div className="developer-profile">item</div>
        <div className="developer-profile">item</div>
        <div className="developer-profile">item</div>
        <div className="developer-profile">item</div>
        <div className="developer-profile">item</div>
        <div className="developer-profile">item</div>
      </div>
    </>
  );
}
