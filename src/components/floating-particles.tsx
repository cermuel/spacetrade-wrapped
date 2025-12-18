import { useEffect, useState } from "react";
import Particle from "./particle";

const FloatingParticles: React.FC = () => {
  type InitialProps = { x: number; y: number; opacity: number };

  const [particleProps, setParticleProps] = useState<InitialProps[]>([]);

  const PARTICLE_COUNT = 20;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newProps: InitialProps[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        newProps.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: Math.random() * 0.5,
        });
      }

      setParticleProps(newProps);
    }
  }, []);

  if (particleProps.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particleProps.map((props, i) => (
        <Particle
          key={i}
          initial={{ x: props.x, y: props.y, opacity: props.opacity }}
          duration={Math.random() * 10 + 10}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
