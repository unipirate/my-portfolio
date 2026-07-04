import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { useReducedMotion } from 'framer-motion'
import { useRef, Suspense } from 'react'
import type { Group } from 'three'

function DriftingStars({ animate }: { animate: boolean }) {
  const ref = useRef<Group>(null)

  useFrame((_, delta) => {
    if (animate && ref.current) {
      ref.current.rotation.y += delta * 0.01
      ref.current.rotation.x += delta * 0.004
    }
  })

  return (
    <group ref={ref}>
      <Stars radius={120} depth={70} count={6000} factor={4} saturation={0} fade speed={0.6} />
    </group>
  )
}

function SpaceBackground() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-space-950">
      {/* Deep-space starfield */}
      <Canvas
        className="!absolute inset-0"
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <DriftingStars animate={!reduceMotion} />
        </Suspense>
      </Canvas>

      {/* Grid + spotlight overlays */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 spotlight" />
      {/* Bottom fade so content sits on solid space */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-space-950 to-transparent" />
    </div>
  )
}

export default SpaceBackground
