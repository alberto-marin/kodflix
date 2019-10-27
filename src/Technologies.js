import React from 'react';
import Column from './Column';
import getTechnologies from './data-source/Technologies-get';

function Technologies() {
  return (
    <div className="technologies">
      <section className="three-columns">
        {
          getTechnologies().map(technology => (
            <Column
              key={technology.id}
              id={technology.id}
              name={technology.name}
              logo={technology.logo}
            />
          ))
        }
      </section>
    </div>
  )
}

export default Technologies;