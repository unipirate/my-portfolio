import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, RoundedBox, useTexture, Environment } from '@react-three/drei'
import { Suspense } from 'react'

function AvatarCard() {
  const texture = useTexture('/avatar.png')

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.1}>
      <group>
        {/* Glowing purple frame peeking out behind */}
        <RoundedBox args={[3.4, 3.4, 0.24]} radius={0.34} smoothness={6} position={[0, 0, -0.06]}>
          <meshStandardMaterial
            color="#7c3aed"
            emissive="#7c3aed"
            emissiveIntensity={0.9}
            roughness={0.3}
            metalness={0.4}
          />
        </RoundedBox>

        {/* Dark card body (blends with the avatar's black background) */}
        <RoundedBox args={[3.2, 3.2, 0.34]} radius={0.3} smoothness={6}>
          <meshStandardMaterial color="#050a1f" roughness={0.5} metalness={0.3} />
        </RoundedBox>

        {/* Avatar image on the front face */}
        <mesh position={[0, 0, 0.18]}>
          <planeGeometry args={[3.0, 3.0]} />
          <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  )
}

function Hero3D() {
  return (
    <div className="h-[340px] w-full sm:h-[420px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 3, 5]} intensity={1.3} color="#c4b5fd" />
        <pointLight position={[-4, -2, -4]} intensity={2} color="#6366f1" />
        <Suspense fallback={null}>
          <AvatarCard />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minAzimuthAngle={-0.7}
          maxAzimuthAngle={0.7}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
        />
      </Canvas>
    </div>
  )
}

export default Hero3D
