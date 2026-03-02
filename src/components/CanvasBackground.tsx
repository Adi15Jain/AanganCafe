import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";
import * as THREE from "three";

function FloatingParticles({ count = 15 }) {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Generate random positions, scales, and colors for particles
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;

            // Warm café colors (Primary: #ff6b35, Highlight: #fbbf24, Accent: #14b8a6)
            const color = new THREE.Color(
                Math.random() > 0.6
                    ? "#ff6b35"
                    : Math.random() > 0.3
                      ? "#fbbf24"
                      : "#14b8a6",
            );

            temp.push({
                t,
                factor,
                speed,
                xFactor,
                yFactor,
                zFactor,
                mx: 0,
                my: 0,
                color,
            });
        }
        return temp;
    }, [count]);

    // Apply colors to instances initially
    useMemo(() => {
        if (!meshRef.current) return;
        const colorArray = new Float32Array(count * 3);
        particles.forEach((p, i) => {
            p.color.toArray(colorArray, i * 3);
        });
        meshRef.current.instanceColor = new THREE.InstancedBufferAttribute(
            colorArray,
            3,
        );
    }, [particles, count]);

    useFrame(() => {
        if (!meshRef.current) return;
        particles.forEach((particle, i) => {
            let { t, factor, speed } = particle;
            // Slowly upward floating movement like embers/dust
            t = particle.t += speed / 2;
            const s = Math.cos(t);

            // Allow wrapping around Y to continuously float "upwards" infinitely
            const wrapY = ((particle.yFactor + t * 5) % 100) - 50;

            dummy.position.set(
                (particle.xFactor +
                    Math.cos((t / 10) * factor) +
                    Math.sin(t * 1) * factor) /
                    6,
                wrapY,
                (particle.zFactor +
                    Math.cos((t / 10) * factor) +
                    Math.sin(t * 3) * factor) /
                    6,
            );

            // Soft pulsating scale
            dummy.scale.set(s * 0.5 + 0.5, s * 0.5 + 0.5, s * 0.5 + 0.5);
            dummy.rotation.set(s * 5, s * 5, s * 5);
            dummy.updateMatrix();
            if (meshRef.current) meshRef.current.setMatrixAt(i, dummy.matrix);
        });
        if (meshRef.current) meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshBasicMaterial toneMapped={false} transparent opacity={0.6} />
        </instancedMesh>
    );
}

export default function CanvasBackground() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-transparent">
            <Canvas
                camera={{ position: [0, 0, 15], fov: 75 }}
                gl={{ antialias: false, alpha: true }}
            >
                <ambientLight intensity={0.5} />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                    <FloatingParticles count={40} />
                </Float>
                {/* Large blurry background spheres for warm ambience */}
                <Float speed={1} rotationIntensity={0.1} floatIntensity={0.5}>
                    <Sphere args={[5, 32, 32]} position={[-8, 6, -10]}>
                        <meshBasicMaterial
                            color="#ff6b35"
                            transparent
                            opacity={0.08}
                        />
                    </Sphere>
                    <Sphere args={[6, 32, 32]} position={[8, -4, -15]}>
                        <meshBasicMaterial
                            color="#fbbf24"
                            transparent
                            opacity={0.05}
                        />
                    </Sphere>
                    <Sphere args={[4, 32, 32]} position={[-4, -8, -8]}>
                        <meshBasicMaterial
                            color="#14b8a6"
                            transparent
                            opacity={0.06}
                        />
                    </Sphere>
                </Float>
            </Canvas>
        </div>
    );
}
