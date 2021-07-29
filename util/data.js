import battleship from '../public/images/battleship.png';
import bugtracker from '../public/images/bugtracker.png';
import comake from '../public/images/comake.png';
import conways from '../public/images/conways.png';
import neighborhoodchef from '../public/images/neighborhoodchef.png';

export const projects = [
  {
    id: 1,
    name: 'Bugtracker',
    description: `Bugtracker is a web app designed to help developers keep track of bugs and issues accross multiple projects. Basic
    features include user onboarding, the ability to create projects and add users to each project. Create and assign tickets
    based on priority level and comment on tickets.`,
    techStack: `Bugtracker is a full stack app that a built myself. The backend was created with Java, Spring Boot, Maven, PostgreSQL, OAUTH,
    Cloudinary and Heroku. The front end was designed using Nuxt, Vue, Bootstrap and Netlify.`,
    deployedUrl: 'https://bugtracker-frontend.netlify.app/',
    frontendGithubUrl: 'https://github.com/patrick-replogle/bugtracker-fe',
    backendGithubUrl: 'https://github.com/patrick-replogle/bugtracker-be',
    imgSrc: bugtracker
  },

  {
    id: 2,
    name: 'Neighborhood Chef',
    description: `Neighborhood Chef provides a uniquely intimate approach to social culinary gatherings, allowing for both the creation and attending 
    of culinary events in your neighborhood.`,
    techStack: `I designed and built this app along with one UX designer and a very small team of web developers. The backend was built using
    Node, Graphql, Express, Okta, Knex, PostrgreSQL, Cloudinary, Heroku and Docker. The frontend was built using React, Redux Hooks, Graphql,
    Material UI, Mapbox, Netlify, Formik, and Yup.`,
    deployedUrl: 'https://neighborhoodchef.netlify.app/',
    frontendGithubUrl:
      'https://github.com/patrick-replogle/neighborhood-chef-fe',
    backendGithubUrl:
      'https://github.com/patrick-replogle/neighborhood-chef-be',
    imgSrc: neighborhoodchef
  },

  {
    id: 3,
    name: "Conway's Game of Life",
    description: `Invented by Cambridge mathematician John Conway in the late 1960's, the Game of Life is a cellular automaton played on a two 
    dimensional grid of cells. The first generation of cells is constructed by the user, however the game evolves naturally based off 
    of a set of rules without further user input, classifying the Game of Life as a zero-player-game.`,
    techStack: `I built this implementation of the Game of Life using React Hooks. Activate cells on the board at will, select a pattern from one of 
    the presets, or click the random button to autopopulate the board and watch the Game of Life unfold. Other user controls include the 
    ability to adjust the generation cycle speed, change the cell color, and adjust the board size. The user can either watch the cycles 
    play through in real time or click to view each cycle one at a time.`,
    deployedUrl: 'https://conways-game-of-life-pearl.vercel.app',
    frontendGithubUrl:
      'https://github.com/patrick-replogle/Conways-Game-of-Life',
    imgSrc: conways
  },

  {
    id: 4,
    name: 'CoMake',
    description: `CoMake is a solution oriented web app geared towards bringing community members together to solve local problems. 
      CoMake provides users with a platfrom to call attention to local issues, volunteer their time or resources, or simply 
      ask for help.`,
    techStack: `CoMake is a full stack app that I built myself. The backend was created with Node JS, Express, Knex, bcryptjs, SQLite3, 
      PostrgeSQL, Heroku, Jest, Supertest, and jsonwebtokens. The front end was designed using React, Context API, Sass, Formik,
      Yup, and Material UI.`,
    deployedUrl: 'https://co-make-fe.herokuapp.com',
    backendGithubUrl: 'https://github.com/patrick-replogle/co-make-be',
    frontendGithubUrl: 'https://github.com/patrick-replogle/co-make-fe',
    imgSrc: comake
  },

  {
    id: 5,
    name: 'Battleship',
    description: `Based off of the popular board game, Battleship is a two player strategy type guessing game. It is 
      played on ruled grids on which each player's fleet of ships are marked. The locations of the fleets 
      are concealed from the other player and players alternate turns calling "shots" at the other player's 
      ships. The second player in this implementation of Battleship is played by the computer. Destroy all 
      five of the computer's ships and you win the game!`,
    techStack: `I created this rendition of Battleship using React and styled-components`,
    deployedUrl: 'https://battleship-six.vercel.app/',
    frontendGithubUrl: 'https://github.com/patrick-replogle/battleship',
    imgSrc: battleship
  }
];

export const skills = [
  'React',
  'Next',
  'Javascript',
  'HTML',
  'CSS',
  'Vue',
  'Nuxt',
  'Redux',
  'Node',
  'Express',
  'Apollo',
  'GraphQL',
  'Java',
  'Spring Boot',
  'SQL',
  'Python',
  'PostgreSQL',
  'Less / Sass',
  'Git / Github workflows',
  'Jest'
];
