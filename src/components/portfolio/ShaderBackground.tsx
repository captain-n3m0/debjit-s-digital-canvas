import { Canvas, useFrame } from "@react-three/fiber";
import { Component, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const fragmentShader = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  varying vec2 vUv;

  // Simplex-ish hash noise
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = uv * 3.0;
    float t = uTime * 0.08;

    float n = 0.0;
    n += noise(p + t) * 0.5;
    n += noise(p * 2.0 - t) * 0.25;
    n += noise(p * 4.0 + t * 1.3) * 0.125;

    // Mouse-reactive glow
    float d = distance(uv, uMouse);
    float glow = smoothstep(0.55, 0.0, d) * 0.18;

    // Subtle grid scanline
    float grid = step(0.985, sin(uv.y * uResolution.y * 0.5));

    vec3 base = vec3(0.04, 0.04, 0.05);
    vec3 accent = vec3(0.35, 0.95, 0.55); // matrix-green for cyber feel
    vec3 col = base + accent * n * 0.08 + accent * glow;
    col += grid * 0.015;

    // Vignette
    float vig = smoothstep(1.2, 0.3, distance(uv, vec2(0.5)));
    col *= vig;

    gl_FragColor = vec4(col, 1.0);
  }
`;

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const ShaderPlane = () => {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const mouse = useRef(new THREE.Vector2(0.5, 0.5));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    }),
    []
  );

  useFrame((state) => {
    if (!mat.current) return;
    mat.current.uniforms.uTime.value = state.clock.elapsedTime;
    mat.current.uniforms.uResolution.value.set(state.size.width, state.size.height);
    const target = mat.current.uniforms.uMouse.value as THREE.Vector2;
    target.lerp(mouse.current, 0.05);
  });

  return (
    <mesh
      onPointerMove={(e) => {
        mouse.current.set(e.uv?.x ?? 0.5, e.uv?.y ?? 0.5);
      }}
    >
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={mat}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

class CanvasErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

const supportsWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
};

const FallbackBackground = () => (
  <div className="absolute inset-0 bg-background">
    <div
      className="absolute inset-0 opacity-40"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--card)) 48%, hsl(var(--background)) 100%)",
      }}
    />
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: "linear-gradient(rgba(120, 255, 170, 0.18) 1px, transparent 1px)",
        backgroundSize: "100% 16px",
      }}
    />
  </div>
);

const ShaderBackground = () => {
  const [canRenderCanvas, setCanRenderCanvas] = useState(false);

  useEffect(() => {
    setCanRenderCanvas(supportsWebGL());
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {canRenderCanvas ? (
        <CanvasErrorBoundary fallback={<FallbackBackground />}>
          <Canvas
            orthographic
            camera={{ position: [0, 0, 1], zoom: 1 }}
            gl={{ antialias: false, powerPreference: "low-power" }}
            dpr={[1, 1.5]}
          >
            <ShaderPlane />
          </Canvas>
        </CanvasErrorBoundary>
      ) : (
        <FallbackBackground />
      )}
    </div>
  );
};

export default ShaderBackground;
