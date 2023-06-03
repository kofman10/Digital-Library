import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const aboutus = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-yellow-500 p-5 border-b-2 border-b-sky-500">
        <h1 className="text-center font-bold text-4xl text-white">About Us</h1>
        <p className="pt-4 text-center font-bold font-sans text-xl">PASSIONATE ABOUT EDUCATION DRIVEN BY TECHNOLOGY </p>
      </div>
      <section className="bg-gray-300">
        <div className="mx-5">
          <div className="flex flex-col gap-3 text-justify pt-5 pb-7">
            <p>
              Passionate About Education, Driven by Technology Meet Our Team: We
              are a team of undergraduate students in the University Of Ilorin,
              from Educational Technology Department with a passion for
              technology and education{" "}
            </p>
            <p>
              OYEDUN ADEYINKA YUSUFF 18/25PJ039 COMPUTER SCIENCE AND EDUCATION
              SHOAGA WURAOLA HASSANAT 18/25PC168 EDUCATIONAL TECHNOLOGY{" "}
            </p>
            <p>
              We are passionate about making research projects easily accessible
              to our peers. With this in mind, we developed this digital library
              as our final year project to serve as a platform for sharing
              undergraduate projects.
            </p>
            <p>
              We believe that education is the key to unlocking one's full
              potential, and we are committed to developing innovative solutions
              that can enhance the learning experience of students.
            </p>
            <p>
              Our team is made up of individuals with diverse backgrounds and
              skill sets, including web development, software engineering, and
              project management.
            </p>
            <p>
              We have come together to build this platform with the aim of
              making it easier for students and researchers to access quality
              undergraduate projects.
            </p>
            <p>
              Our goal is to provide a user-friendly platform where students can
              easily access and review undergraduate projects that have been
              successfully completed by their peers. We believe that by sharing
              knowledge and experience, we can create a community of lifelong
              learners who are committed to academic excellence.
            </p>
            <p>
              We are committed to maintaining the highest standards of integrity
              and professionalism in all our dealings with our stakeholders. Our
              team is constantly working to improve the platform and provide
              exceptional service to our users.
            </p>
            <p>
              Thank you for choosing our platform to access and review
              undergraduate projects. We look forward to serving you and helping
              you achieve your academic goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default aboutus;
