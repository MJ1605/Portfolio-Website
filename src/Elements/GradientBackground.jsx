import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
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
    float t = uTime * 0.2;

    float n = pattern(p * 1.2, t);
    
    // Create soft transitions for the pastels
    float layer1 = smoothstep(-0.6, 0.6, n);
    float layer2 = smoothstep(-0.3, 0.7, sin(n * 1.5 + t));

    // Blending the warm palette
    vec3 mix1 = mix(uColor1, uColor2, layer1);
    vec3 mix2 = mix(uColor3, uColor4, layer2);
    vec3 finalColor = mix(mix1, mix2, sin(t * 0.3) * 0.5 + 0.5);
    
    // Add a slight brightness boost to the "peaks"
    finalColor += layer2 * 0.1;

    // Grain to make the pastel look like textured paper
    float grain = (fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.02;

    gl_FragColor = vec4(finalColor + grain, 1.0);
  }
`;

function Scene({ colors }) {
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

export default function Background() {
  // WARM PASTEL RANGE:
  // Peach, Soft Rose, Creamy Orange, Muted Apricot
  const warmPastels = [
    "#FFD1BA", // Soft Peach
    "#FFB7B2", // Pastel Pink
    "#FFDAC1", // Apricot Cream
    "#FFE4E1"  // Misty Rose
  ];

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1, width: '100vw', height: '100vh' }}>
      <Canvas>
        <Scene colors={warmPastels} />
      </Canvas>
    </div>
  );
}