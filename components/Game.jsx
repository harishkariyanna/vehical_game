import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import Vehicle from '../components/Vehicle';
import FallingShapes from '../components/FallingShape';

export default function Game() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.3} />
      <Physics gravity={[0, -9.81, 0]}>
        <Vehicle />
        <FallingShapes />
        {/* Ground */}
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[100, 1, 100]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </Physics>
    </Canvas>
  );
}
