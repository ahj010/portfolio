import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import html5Logo from "./images/html-5.svg";
import css3 from "./images/css-3.svg";
import js from "./images/js.svg";
import ts from "./images/ts.svg";
import node from "./images/node.svg";
import express from "./images/express.svg";
import react from "./images/react.svg";
import redux from "./images/redux.svg";
import gql from "./images/gql.svg";
import mdb from "./images/mdb.svg";
import mongoose from "./images/mongoose.svg";
import jwt from "./images/jwt.svg";
import tailwind from "./images/tailwind.svg";
import shadcn from "./images/shadcn.svg";
import git from "./images/git.svg";
import github from "./images/github.svg";
// import visit from "./images/visit.svg";
import phone from "./images/phone.svg"
import email from "./images/email.svg"
import linkedin from "./images/linkedin.svg"
import library from "./images/library.png";
import bloggy from "./images/blogsList.png";
import patientor from "./images/patientor.png"
import phonebook from "./images/phonebook.png"

const projects = [
  {
    title: "Library",
    description: "A fullstack book management system with GraphQL subscriptions.",
    image: library,
    sourceCode: "https://github.com/ahj010/FullStackOpen2024/tree/8e83e2831f9d1f98e760ec8167afcb04c87d45e8/part8",
  },
  {
    title: "Patientor",
    description: "Frontend of a hospital management system.",
    image: patientor,
    sourceCode: "https://github.com/ahj010/TypeScript/tree/main/patientor",
  },
  {
    title: "Bloggy",
    description: "A blog listing app with user authentication for commenting and liking a blog.",
    image: bloggy,
    sourceCode: "https://github.com/ahj010/FullStackOpen2024/tree/main/part7/blogList-redux",
  },
  {
    title: "Phonebook",
    description: "A phonebook app for managing contacts with live search.",
    image: phonebook,
    sourceCode: "https://github.com/ahj010/FullStackOpen2024/tree/main/part3",
  },
];

const techStack = [
  { logo: html5Logo, name: "HTML5" },
  { logo: css3, name: "CSS3" },
  { logo: js, name: "JavaScript" },
  { logo: ts, name: "TypeScript" },
  { logo: node, name: "Node.js" },
  { logo: express, name: "Express.js" },
  { logo: react, name: "React" },
  { logo: redux, name: "Redux" },
  { logo: gql, name: "GraphQL" },
  { logo: mdb, name: "MongoDB" },
  { logo: mongoose, name: "Mongoose" },
  { logo: jwt, name: "JWT" },
  { logo: tailwind, name: "Tailwind CSS" },
  { logo: shadcn, name: "ShadCN" },
  { logo: git, name: "Git" },
  { logo: github, name: "GitHub" },
];

const App = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col">
      {/* Navbar */}
             <header className="bg-blue-500 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
           <h1 className="text-xl font-bold">Portfolio</h1>
           <nav className="space-x-4">
             <Button variant="link" className= "bg-white hover:text-gray-200 hover:no-underline"><a href="#about">About</a></Button>
             <Button variant="link" className= "bg-white hover:text-gray-200 hover:no-underline"><a href="#projects" className="hover:text-gray-200">Projects</a></Button>
             <Button variant="link" className= "bg-white hover:text-gray-200 hover:no-underline"><a href="#contact" className="hover:text-gray-200">Contact</a></Button>

           </nav>
         </div>
       </header>

      {/* Hero Section */}
      <section className="bg-blue-100 py-20 text-center px-4">
         <h2 className="text-4xl font-bold text-gray-700">Hi, I'm Ali Haider</h2>
         <p className="mt-4 text-gray-800 text-lg">A passionate developer who loves building beautiful
           and functional websites.</p>
       </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <p className="mt-4 text-gray-800 text-lg">
            I specialize in MERN Stack with GraphQL and TypeScript and enjoy exploring new technologies.
          </p>
          <div className="flex flex-wrap justify-center items-center">
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center ">
                <img src={tech.logo} alt={tech.name} className="w-24 h-24 mx-4 my-8 flex justify-between" />
              </div>
            ))}
          </div>
        </div>
      </section>

    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={cn(
                "w-50 h-30 hover:w-full hover:h-full bg-slate-200 group overflow-hidden transition-transform duration-300 hover:scale-105"
              )}
            >
              <CardHeader className="bg-slate-800 text-white text-center py-4">
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent
                className={cn(
                  "bg-black p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                )}
              >
                <div className="space-y-4">
                  {/* Image */}
                  <div className="flex justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-50 h-30  transition-all duration-300 object-cover rounded"
                    />
                  </div>
                  {/* Description */}
                  <p className="text-gray-200 font-semibold font-sans italic">{project.description}</p>
                  {/* Links */}
                  <div className="flex justify-center space-x-4">
                    {/* <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <img
                        src={visit}
                        alt="Visit"
                        className="h-8 w-8 rounded bg-white hover:opacity-80"
                      />
                    </a> */}
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" flex items-center justify-center"
                    >
                      <img
                        src={github}
                        alt="GitHub"
                        className=" h-8 w-8 rounded bg-white hover:opacity-80 "
                      />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-50">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Contact</h2>
    <p className="text-gray-700 mb-6">Feel free to reach out to me</p>
    <a href="mailto:ahjafri010@gmail.com">
  <Button className="bg-blue-500 hover:bg-blue-600 text-white">Get in touch</Button>
</a>

  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex flex-wrap justify-around px-4">
          <div className="flex items-center space-x-2 mb-4">
            <img
              src={phone}
              alt="Phone icon"
              className="h-6 w-6 rounded bg-green-600"
            />
            <span className="text-gray-300">+92 3324110144</span>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <img
              src={email}
              alt="Email icon"
              className="h-6 w-6 rounded bg-yellow-500"
            />
            <a
              href="mailto:ahjafri010@gmail.com"
              className="text-gray-300 hover:underline"
            >
              ahjafri010@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <img
              src={linkedin}
              alt="LinkedIn icon"
              className="h-6 w-6"
            />
            <a
              href="https://www.linkedin.com/in/ahj010"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <img
              src={github}
              alt="GitHub icon"
              className="h-6 w-6 bg-white"
            />
            <a
              href="https://github.com/ahj010/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="text-center text-sm mt-4">
          © 2025 Ali Haider. All rights reserved.
        </div>
      </footer>

    </div>
  );
};

export default App;
