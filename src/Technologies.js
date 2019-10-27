import React from 'react';
import Column from './Column';
import css3Image from './assets/img/css-3.svg';
import databaseImage from './assets/img/database.svg';
import herokuImage from './assets/img/heroku.svg';
import html5Image from './assets/img/html5.svg';
import nodejsImage from './assets/img/nodejs.svg';
import reactImage from './assets/img/react.svg';


function Technologies(){
    return (
        <div className="technologies">
            <section className="three-columns">
          <Column name="ReactJs" logo={reactImage} />
          <Column name="HTML5" logo={html5Image} />
          <Column name="CSS3" logo={css3Image} />
        </section>
        <section className="three-columns">
          <Column name="Node.js" logo={nodejsImage} />
          <Column name="MongoDB" logo={databaseImage} />
          <Column name="Heroku" logo={herokuImage} />
        </section>
        </div>
    )
}

export default Technologies;