import css3Image from '../assets/img/css-3.svg';
import databaseImage from '../assets/img/database.svg';
import herokuImage from '../assets/img/heroku.svg';
import html5Image from '../assets/img/html5.svg';
import nodejsImage from '../assets/img/nodejs.svg';
import reactImage from '../assets/img/react.svg';

function getTechnologies() {
    return [
        { id: "react", name: "ReactJs", logo: reactImage },
        { id: "html5", name: "HTML5", logo: html5Image },
        { id: "css3", name: "CSS3", logo: css3Image },
        { id: "node", name: "Node.js", logo: nodejsImage },
        { id: "mongo", name: "MongoDB", logo: databaseImage },
        { id: "heroku", name: "Heroku", logo: herokuImage }
    ]
}

export default getTechnologies;