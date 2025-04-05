import * as TECH from "./technologies";

export enum ProjectType {
    Game,
    Web
}

export interface Project {
    title: string,
    type: ProjectType,
    genre: string,
    description: string,
    image: string,
    projectUrl?: string,
    sourceCodeUrl?: string,
    videoUrl?: string,
    technologies: TECH.Technology[],
}

export const projects : Project[] = [
{
    title: "Defendor",
    type: ProjectType.Game,
    genre: "Realtime Card Strategy",
    description: "Defendor is a deckbuilder where the player's goal is to survive for as long as they can while fighting against enemies and advancing through the stages. Developed in 48 hours during the Ludum Dare 50 Game Jam with the theme 'Delay the inevitable'",
    image: "https://img.itch.zone/aW1nLzg1NzM5NzYucG5n/315x250%23c/aDXKme.png",
    projectUrl: "https://junsama.itch.io/defendor",
    sourceCodeUrl: "https://github.com/asa-kaya/LudumDare50",
    technologies: [TECH.Unity],
},
{
    title: "Knife Parkour",
    type: ProjectType.Game,
    genre: "Rage Game",
    description: "Knife Parkour (to the Moon) is a game where the player tries to fling a knife through different obstacles until they reach the top. This game is meant to anger the player. Made in 10 days for a school Game Jam.",
    image: "https://img.itch.zone/aW1nLzc2NzUzNjMucG5n/315x250%23c/0U05FT.png",
    projectUrl: "https://junsama.itch.io/knife-parkour",
    technologies: [TECH.Construct3],
},
{
    title: "Janken",
    type: ProjectType.Game,
    genre: "Rock Paper Scissors using your Webcam",
    description: "Play rock paper scissors using hand gestures captured on your webcam against an AI opponent. This game is made as a proof-of-concept so there is no build that can be played immediately.",
    image: "https://raw.githubusercontent.com/asa-kaya/tsunomaki-janken-oncam/main/assets/screenshot.png",
    sourceCodeUrl: "https://github.com/asa-kaya/tsunomaki-janken-oncam",
    technologies: [TECH.Pygame],
},
{
    title: "My Portfolio",
    type: ProjectType.Web,
    genre: "Website showcasing personal projects",
    description: "View a showcase of my personal projects and get to know more about me.",
    image: "/assets/portfolio-image.jpg",
    projectUrl: "#",
    sourceCodeUrl: "https://github.com/asa-kaya/asa-kaya.github.io",
    technologies: [TECH.ReactJS, TECH.ThreeJS, TECH.ReactThreeFiber],
}];

export default [];