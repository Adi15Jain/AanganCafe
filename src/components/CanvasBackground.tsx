import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";
import * as THREE from "three";

const dummy = new THREE.Object3D();

/* Detect mobile for performance tuning */
function FloatingParticles({ count }: { count: number }) {
    const meshRef = useRef<THREE.InstancedMesh>(null);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.005 + Math.random() / 300; // slower drift
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
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

    useEffect(() => {
        if (!meshRef.current) return;
        const colorArray = new Float32Array(count * 3);
        particles.forEach((p, i) => p.color.toArray(colorArray, i * 3));
        meshRef.current.instanceColor = new THREE.InstancedBufferAttribute(
            colorArray,
            3,
        );
    }, [particles, count]);

    useFrame(() => {
        if (!meshRef.current) return;
        particles.forEach((particle, i) => {
            let { t, factor, speed } = particle;
            t = particle.t += speed / 2;
            const s = Math.cos(t) * 0.4 + 0.6; // stays more visible
            const wrapY = ((particle.yFactor + t * 4) % 100) - 50;
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
            dummy.scale.set(s * 0.5 + 0.3, s * 0.5 + 0.3, s * 0.5 + 0.3);
            dummy.rotation.set(s * 3, s * 3, s * 3);
            dummy.updateMatrix();
            if (meshRef.current) meshRef.current.setMatrixAt(i, dummy.matrix);
        });
        if (meshRef.current) meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            <sphereGeometry args={[0.3, 12, 12]} />
            <meshBasicMaterial toneMapped={false} transparent opacity={0.5} />
        </instancedMesh>
    );
}

export default function CanvasBackground() {
    const [particleCount, setParticleCount] = useState(20);

    useEffect(() => {
        /* Adaptive particle count based on device capability */
        const mobile = window.innerWidth < 768;
        const lowEnd =
            navigator.hardwareConcurrency !== undefined &&
            navigator.hardwareConcurrency <= 4;
        if (mobile) {
            setParticleCount(8);
        } else if (lowEnd) {
            setParticleCount(15);
        } else {
            setParticleCount(30);
        }
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 15], fov: 75 }}
                gl={{
                    antialias: false,
                    alpha: true,
                    powerPreference: "low-power",
                }}
                frameloop="always"
                dpr={[1, 1.5]} /* cap to 1.5x for perf on high-DPR phones */
            >
                <ambientLight intensity={0.4} />
                <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
                    <FloatingParticles count={particleCount} />
                </Float>
                {/* Background glow spheres — low poly for mobile */}
                <Float
                    speed={0.8}
                    rotationIntensity={0.05}
                    floatIntensity={0.3}
                >
                    <Sphere args={[5, 16, 16]} position={[-8, 6, -10]}>
                        <meshBasicMaterial
                            color="#ff6b35"
                            transparent
                            opacity={0.07}
                        />
                    </Sphere>
                    <Sphere args={[6, 16, 16]} position={[8, -4, -15]}>
                        <meshBasicMaterial
                            color="#fbbf24"
                            transparent
                            opacity={0.045}
                        />
                    </Sphere>
                    <Sphere args={[4, 16, 16]} position={[-4, -8, -8]}>
                        <meshBasicMaterial
                            color="#14b8a6"
                            transparent
                            opacity={0.055}
                        />
                    </Sphere>
                </Float>
            </Canvas>
        </div>
    );
}
