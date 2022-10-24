import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useMemo, useCallback } from 'react';

const ParticlesComponent = () => {
  const loadOptions = useMemo(() => {
    return {
      particles: {
        links: {
          enable: true,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 3 },
        },
      },
    };
  }, []);

  const initializeParticles = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return (
    <Particles
      init={initializeParticles}
      option={loadOptions}
    />
  );
};

export default ParticlesComponent;
