import React, { useRef } from 'react';
import { Canvas, useLoader, useFrame } from 'react-three-fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';


const Box = () => {
  const mesh = useRef(null);
  useFrame(() => { mesh.current.rotation.y += 0.01 });

  // const spy = useLoader(TextureLoader, '/spy.png')
  // // const glass = useLoader(TextureLoader, './glass.png')
  // // const camera = useLoader(TextureLoader, './camera.png')
  // // const pipe = useLoader(TextureLoader, './pipe.png')

  return (<mesh ref={mesh}>
    <boxBufferGeometry attach="geometry" args={[2.5, 2.5, 2.5]} />
    <meshStandardMaterial color="gray" attach="material" />
    {/* <meshStandardMaterial map={glass} attachArray="material" />
    <meshStandardMaterial map={camera} attachArray="material" />
    <meshStandardMaterial map={pipe} attachArray="material" />
    <meshStandardMaterial map={spy} attachArray="material" />
    <meshStandardMaterial map={spy} attachArray="material" /> */}
  </mesh>)
}

const Logo = () => {
  return (
    <Canvas colorManagement style={{ height: '100px', width: '100px' }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[-7, -5, 8]} angle={0.15} penumbra={1} />
      <spotLight position={[7, -5, 8]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box />
    </Canvas>
  )
}

export default Logo;