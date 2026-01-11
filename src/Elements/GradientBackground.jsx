import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  uniform vec3 uColor4;
  varying vec2 vUv;

  float pattern(vec2 p, float t) {
    vec2 q = vec2(
      sin(p.x * 1.0 + t * 0.4),
      cos(p.y * 1.2 + t * 0.5)
    );
    vec2 r = vec2(
      sin(p.y * 0.8 + q.x + t * 0.3),
      cos(p.x * 1.1 + q.y + t * 0.2)
    );
    return sin(length(p + r) * 1.5 - t);
  }

  void main() {
    vec2 p = vUv;
    float t = uTime * 0.15; // Slowed down for a calmer sky

    float n = pattern(p * 1.0, t);
    
    // Smooth the layers to prevent "hot spots" of red
    float layer1 = smoothstep(-0.8, 0.8, n);
    float layer2 = smoothstep(-0.5, 1.0, sin(n * 1.2 + t));

    vec3 mix1 = mix(uColor1, uColor2, layer1);
    vec3 mix2 = mix(uColor3, uColor4, layer2);

    // FIX: Instead of a raw mix, we use the brightness of layer2 
    // to "light up" the sky, pushing it toward the lighter colors.
    vec3 finalColor = mix(mix1, mix2, layer2 * 0.6 + 0.2);
    
    // Add a very subtle blue/white tint to the extreme peaks 
    // to simulate "sky blue" breaking through the peach.
    finalColor = mix(finalColor, vec3(0.95, 0.98, 1.0), layer2 * 0.05);

    // Subtle grain
    float grain = (fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.015;

    gl_FragColor = vec4(finalColor + grain, 1.0);
}
`;

function SkyShader({ colors }) {
  const materialRef = useRef();
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color(colors[0]) },
    uColor2: { value: new THREE.Color(colors[1]) },
    uColor3: { value: new THREE.Color(colors[2]) },
    uColor4: { value: new THREE.Color(colors[3]) },
  }), [colors]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

const RainDigit = ({ count = 30 }) => {
  const { viewport, pointer } = useThree();
  
  // Create an array of refs for individual digits
  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * viewport.width,
      y: Math.random() * viewport.height,
      speed: 0.01 + Math.random() * 0.03,
      val: Math.random() > 0.5 ? "1" : "0",
      ref: React.createRef()
    }));
  }, [count, viewport]);

  useFrame(() => {
    particles.forEach((p) => {
      if (!p.ref.current) return;

      // Mouse position in 3D world units
      const mx = (pointer.x * viewport.width) / 2;
      const my = (pointer.y * viewport.height) / 2;

      const dx = p.x - mx;
      const dy = p.y - my;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const radius = 1.2; 

      let displayX = p.x;
      let displayY = p.y;

      if (distance < radius) {
        const angle = Math.atan2(dy, dx);
        displayX = mx + Math.cos(angle) * radius;
        displayY = my + Math.sin(angle) * radius;
      }

      p.ref.current.position.set(displayX, displayY, 0);
      
      // Vertical movement
      p.y -= p.speed;
      if (p.y < -viewport.height / 2) p.y = viewport.height / 2;
    });
  });

  return (
    <>
      {particles.map((p, i) => (
        <Text
          key={i}
          ref={p.ref}
          fontSize={0.2}
          color="#FFF5E1"
          font="monospace" // Or a specific Mono font URL
          opacity={0.4}
          transparent
        >
          {p.val}
        </Text>
      ))}
    </>
  );
};

export default function Background() {
  const warmPastels = ["#FFB2A6", "#FFF9F0", "#E8A89E", "#F5D5AE"];

  return (
    <div style={{ 
      position: 'fixed', 
      inset: 0, 
      zIndex: -1, 
      backgroundColor: '#FFB2A6' // FIX: Instant color so there's no white flash
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <SkyShader colors={warmPastels} />
        <RainDigit count={40} />
      </Canvas>
    </div>
  );
}