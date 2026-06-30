"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const fragmentShader = `
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
varying vec2 v_texCoord;

void main() {
    vec2 uv = v_texCoord;
    vec2 p = (uv - 0.5) * 2.0;
    p.x *= u_resolution.x / u_resolution.y;
    float t = u_time * 0.2;
    float wave = sin(p.x * 2.0 + t) * 0.5 + sin(p.y * 1.5 - t * 0.8) * 0.5;
    float glow = 0.05 / (0.1 + abs(wave));
    vec3 color = vec3(0.02, 0.02, 0.03);
    vec3 indigo = vec3(0.38, 0.4, 0.94);
    vec3 purple = vec3(0.66, 0.33, 0.97);
    color += mix(indigo, purple, sin(t) * 0.5 + 0.5) * glow * 0.4;
    float vignette = 1.0 - length(p) * 0.4;
    gl_FragColor = vec4(color * clamp(vignette, 0.0, 1.0), 1.0);
}
`;

const vertexShader = `
varying vec2 v_texCoord;
void main() {
    v_texCoord = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const ShaderPlane = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size, viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(size.width, size.height) },
    }),
    [size]
  );

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.u_time.value = state.clock.elapsedTime;
      material.uniforms.u_resolution.value.set(size.width, size.height);
    }
  });

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default function BackgroundShader() {
  return (
    <div className="fixed inset-0 z-[-1] h-full w-full bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ShaderPlane />
      </Canvas>
    </div>
  );
}
