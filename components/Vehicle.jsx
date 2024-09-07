import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';

const Vehicle = () => {
  const vehicleRef = useRef();

  // Basic vehicle movement logic (optional)
  useFrame(() => {
    if (vehicleRef.current) {
      // Example: Add movement logic if needed
    }
  });

  return (
    <RigidBody ref={vehicleRef} colliders="cuboid">
      {/* Vehicle body */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 0.5, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      
      {/* Front wheel (sphere) */}
      <mesh position={[0, -0.25, 1]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      {/* Rear wheels (cylinders) */}
      <mesh position={[-0.75, -0.25, -0.75]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.5, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0.75, -0.25, -0.75]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.5, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </RigidBody>
  );
};

export default Vehicle;
