import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles() {
  const ref = useRef<THREE.Points>(null!);

  // Create a sphere of particles
  const [positions, colors] = useMemo(() => {
    const count = 3000;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const color1 = new THREE.Color('#2563eb'); // primary
    const color2 = new THREE.Color('#0d9488'); // accent
    const color3 = new THREE.Color('#f59e0b'); // secondary/warm

    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);
      const distance = 5 + Math.random() * 10;

      pos[i * 3] = distance * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = distance * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = distance * Math.cos(phi);

      const mixedColor = color1.clone();
      const rand = Math.random();
      if (rand > 0.6) mixedColor.lerp(color2, Math.random());
      else if (rand > 0.3) mixedColor.lerp(color3, Math.random());

      cols[i * 3] = mixedColor.r;
      cols[i * 3 + 1] = mixedColor.g;
      cols[i * 3 + 2] = mixedColor.b;
    }
    return [pos, cols];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.05;
    ref.current.rotation.x = t * 0.03;

    // Add mouse interaction
    const mouseX = state.mouse.x * 2;
    const mouseY = state.mouse.y * 2;
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, mouseX, 0.1);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, mouseY, 0.1);
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

const VibrantBackground = () => {
  return (
    <div className="absolute inset-0 z-0 bg-[#0a0f1e]">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <color attach="background" args={['#0a0f1e']} />
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
      {/* Overlay for depth and legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1e]/40 to-[#0a0f1e]" />
    </div>
  );
};

export default VibrantBackground;
