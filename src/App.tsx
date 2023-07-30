import React, { useState, useRef } from 'react';

import { faPlay, faVideo } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import games from './data/games';
import profileImage from './profile-image.png';

import IconLink from './components/IconLink';
import './App.css';

function App() {
  const [selected, setGame] = useState(games[0]);
  const gamesContainer =  useRef<HTMLDivElement>(null);

  const handleUpdateSelectedGame = (newSelected: number) => {
    setGame(games[newSelected]);

    let children = gamesContainer.current?.children;

    if (children) {
      for (let i=0; i<children?.length; i++) {
        children[i].classList.remove("selected")
        if (i === newSelected)
        children[i].classList.add("selected")
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-7xl">Hi,</h1>
        <div className="flex flex-col md:flex-row items-center">
          <h2 className="text-5xl max-w-4xl">I am <span className="font-semibold">Junrick Bation</span>, a developer who loves making games and learning new things.</h2>
          <img src={profileImage} className="rounded-full m-12 w-3/6"/>
        </div>
        <div className="flex flex-row">
          <a href="#skills" className="mx-4">SKILLS</a>
          <a href="#featured-works" className="mx-4">FEATURED WORKS</a>
        </div>
      </header>
      
      <div id="skills" className="min-h-screen min-w-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl mb-12">SKILLS</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-2xl mb-4">LANGUAGES</h4>
            <div className="text-lg">
              <h6>C++</h6>
              <h6>C#</h6>
              <h6>Python</h6>
              <h6>Javascript</h6>
              <h6>Typescript</h6>
              <h6>Rust</h6>
            </div>
          </div>
          <div>
            <h4 className="text-2xl mb-4">ENGINES/FRAMEWORKS</h4>
            <div className="text-lg">
              <a href="https://unity.com/">Unity</a>
              <a href="https://www.unrealengine.com/">Unreal 5</a>
              <a href="https://godotengine.org/">Godot</a>
              <a href="https://www.pygame.org/">Pygame</a>
              <a href="https://reactjs.org/">React</a>
              <a href="https://vuejs.org/">Vue.js</a>
            </div>
          </div>
          <div>
            <h4 className="text-2xl mb-4">OTHERS</h4>
            <div className="text-lg">
              <h6>Git & Github</h6>
            </div>
          </div>
        </div>
      </div>

      <div id="featured-works" className="min-h-screen min-w-screen flex flex-col justify-center items-center">
        <div className="w-6/12">
          <h1 className="text-5xl mb-12">FEATURED WORKS</h1>
          <div ref={gamesContainer} className="flex flex-row justify-evenly items-center mb-12">
            {
              games.map((game, idx) =>
                <h4
                  key={idx}
                  className={`text-2xl nav-item ${idx===0?"selected":""}`}
                  onClick={() => handleUpdateSelectedGame(idx)}
                >
                  {game.title}
                </h4>
              )
            }
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex justify-center mr-12 w-full">
              <img src={selected.image} className="max-h-64" />
            </div>
            <div className="flex flex-col justify-evenly items-center">
            <div className="text-xl font-semibold">
                {selected.genre}
              </div>
              <div className="text-lg">
                {selected.description}
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <div className="flex flex-row my-8 md:my-2">
                  {
                    selected.buildUrl?
                      <IconLink icon={faPlay} url={selected.buildUrl} label={"Play " + selected.title} />
                    : null
                  }
                  {
                    selected.videoUrl?
                      <IconLink icon={faVideo} url={selected.videoUrl} label="Video Showcase" />
                    : null
                  }
                  {
                    selected.sourceCodeUrl?
                      <IconLink icon={faGithub} url={selected.sourceCodeUrl} label="Source Code" />
                    : null
                  }
                </div>
                <div>
                  Made with<IconLink icon={selected.engine.logo} url={selected.engine.website} label={selected.engine.name} custom />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <a href="https://github.com/artisan7" target="_blank">Designed and Developed by Junrick Bation</a>
      </footer>
    </div>
  );
}

export default App;
