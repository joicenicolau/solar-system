import React from 'react';
import Title from './Title';
import data from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section className="planets">
          {data.map(({ name, image }) => (
            <PlanetCard
              key={ name }
              planetName={ name }
              planetImage={ image }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
