import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Float } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function AnimatedSphere({ position }) {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} position={position} args={[0.5, 32, 32]}>
        <meshStandardMaterial color="#4f46e5" roughness={0.1} metalness={0.8} />
      </Sphere>
    </Float>
  );
}

function AnimatedBox({ position }) {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1}>
      <Box ref={meshRef} position={position} args={[1, 1, 1]}>
        <meshStandardMaterial color="#7c3aed" roughness={0.2} metalness={0.6} />
      </Box>
    </Float>
  );
}

function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c3aed" />

        <AnimatedSphere position={[-3, 2, -2]} />
        <AnimatedBox position={[3, -1, -3]} />
        <AnimatedSphere position={[2, 3, -1]} />
        <AnimatedBox position={[-2, -2, -4]} />
        <AnimatedSphere position={[0, 0, -5]} />

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}

export default ThreeBackground;