import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {
  const { scene } = useGLTF('./earth/scene.gltf'); // Ruta actualizada
  
  return (
    <primitive
      object={scene}
      scale={1.5} // Ajusta la escala según sea necesario
      position={[0, -1.5, 0]} // Ajusta la posición según sea necesario
      rotation={[0, 0, 0]} // Ajusta la rotación según sea necesario
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas 
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, -4, 5], // Ajusta la posición de la cámara según sea necesario
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        
        {/* Agregar iluminación */}
        <ambientLight intensity={3} />
        <directionalLight position={[10, 10, 5]} intensity={3} />

        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
