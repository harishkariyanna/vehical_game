import React from 'react';
import { RigidBody } from '@react-three/rapier';

const FallingShapes = () => {
  const shapes = [];

  // Create falling shapes randomly
  for (let i = 0; i < 10; i++) {
    const shapeType = Math.floor(Math.random() * 3); // Randomly choose a shape type
    let geometry;
    switch (shapeType) {
      case 0:
        geometry = <boxGeometry args={[1, 1, 1]} />;
        break;
      case 1:
        geometry = <sphereGeometry args={[1, 16, 16]} />;
        break;
      case 2:
        geometry = <coneGeometry args={[1, 2, 4]} />;
        break;
      default:
        geometry = <boxGeometry args={[1, 1, 1]} />;
        break;
    }

    shapes.push(
      <RigidBody key={i} position={[Math.random() * 10 - 5, Math.random() * 5 + 5, Math.random() * 10 - 5]}>
        <mesh>
          {geometry}
          <meshStandardMaterial color="green" />
        </mesh>
      </RigidBody>
    );
  }

  return <>{shapes}</>;
};

export default FallingShapes;
