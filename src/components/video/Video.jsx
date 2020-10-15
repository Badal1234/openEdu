import React from "react";
import { Row } from "react-bootstrap";

const videolink = [
  {
    link: "https://www.youtube.com/embed/rvo5kZq4iG0",
    title: "chapter 1 Real Numbers (Class 10 Maths in Hindi Medium)",
  },
  {
    link: "https://www.youtube.com/embed/-wmarbIgKLA",
    title: "CBSE XII Chemistry The solid state -1 General characteristics",
  },
  {
    link: "https://www.youtube.com/embed/AT_GjUjNFpo",
    title: "🔴 LOGIC GATES | video lecture in HINDI",
  },
  {
    link: "https://www.youtube.com/embed/0o94KTFTZtU",
    title: "NCERT Class 8 Science - Crop Production and Management",
  },
  {
    link: "https://www.youtube.com/embed/hZQb5LxC6SA",
    title: "11th Class Biology - Chapter 1 | The Living World (Part 1)",
  },
  {
    link: "https://www.youtube.com/embed/n-tr3lHaXc0",
    title: "The ice-cream man - CBSE NCERT Class 5 lesson Explanation",
  },
  {
    link: "https://www.youtube.com/embed/DufM4_13qZI",
    title: "Class 7 History Chapter 3 Part1 || The Delhi Sultans",
  },
  {
    link: "https://www.youtube.com/embed/imPSCEk7TI4",
    title: "Class 9: Constitutional Design | Political Science",
  },
  {
    link: "https://www.youtube.com/embed/HLxwZ7UoWGE",
    title: "Class 12 English grammar new syllabus|| 2021 board exam||",
  },
  {
    link: "https://www.youtube.com/embed/Grw_QBqhU-E",
    title: "Class 4 Maths TICK TICK TICK (PART-1) | हिंदी Video  CBSE NCERT",
  },
  {
    link: "https://www.youtube.com/embed/Dt5bfptXO7s",
    title:
      "Ch-6 Molecular Basis of Inheritance GENETICS Full NCERT Explanation ",
  },
  {
    link: "https://www.youtube.com/embed/PbivQK4Cp80",
    title: "HOW MANY SQUARES |Chapter 3 class 5 maths | part -1",
  },
  {
    link: "https://www.youtube.com/embed/Egg1FpgIrZw",
    title: "informatics practices class 11th chapter 1st(hardware concept)",
  },
  {
    link: "https://www.youtube.com/embed/X7WugxKCqUY",
    title:
      "Class6th Science chapter 7 Getting to know Plants part 1 explanation",
  },
  {
    link: "https://www.youtube.com/embed/3JwmchAMcuQ",
    title: "Physics Laws of motion part 1 (Aristotle law) CBSE class 11",
  },
  {
    link: "https://www.youtube.com/embed/rnrSyDfYvJ0",
    title: "GEOGRAPHY CLASS 7 CHAPTER 2: INSIDE OUR EARTH",
  },
  {
    link: "https://www.youtube.com/embed/PetEfV902P0",
    title: "English Grammar - BKP - Editing Omission , Rearrange the words",
  },
  {
    link: "https://www.youtube.com/embed/s-w-SehoRKQ",
    title: "Light Class 8 Science Chapter 16 - Explanation, CBSE NCERT",
  },
  {
    link: "https://www.youtube.com/embed/FmVBg_m882Q",
    title: "class 9 chapter 3 history",
  },
  {
    link: "https://www.youtube.com/embed/GOCrD2OLWCk",
    title: "Cell structure and function - CBSE Class 8 Chapter 8 explanatio",
  },
];
const Video = () => {
  return (
    <>
      <Row className="video">
        {videolink.map((props) => {
          return (
            <>
              <div className="m-3 video_card ">
                <iframe
                  width="250"
                  height="200"
                  src={props.link}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
                <p>{props.title}</p>
              </div>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default Video;
