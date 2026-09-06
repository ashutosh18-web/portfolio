import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Eye } from 'lucide-react';

export default function ThreeCanvas() {
  const containerRef = useRef(null);
  const [isInteractive, setIsInteractive] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f2fe, 3, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x9333ea, 2.5, 20);
    pointLight2.position.set(-5, -5, 3);
    scene.add(pointLight2);

    // --- Central 3D Interactive Core: Dual-layer Icosahedron ---
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner faceted jewel mesh
    const innerGeo = new THREE.IcosahedronGeometry(1.6, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x0a1428,
      emissive: 0x0d284a,
      roughness: 0.15,
      metalness: 0.85,
      flatShading: true,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Outer cyber-wireframe cage
    const outerGeo = new THREE.IcosahedronGeometry(2.1, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerMesh);

    // Floating orbital ring around core
    const ringGeo = new THREE.TorusGeometry(2.8, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.4,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    coreGroup.add(ringMesh);

    // --- Background Floating Particle Cloud ---
    const particleCount = 700;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 18;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 12;
      particleSpeeds[i] = 0.002 + Math.random() * 0.005;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x4facfe,
      size: 0.035,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // --- Mouse Interaction Tracking ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX = (x / rect.width) * 2 - 1;
      mouseY = -(y / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // --- Window Resize Handler ---
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // --- Animation Loop ---
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerping to mouse position
      targetX += (mouseX * 0.8 - targetX) * 0.05;
      targetY += (mouseY * 0.8 - targetY) * 0.05;

      // Rotate central 3D core
      coreGroup.rotation.y = elapsedTime * 0.2 + targetX;
      coreGroup.rotation.x = elapsedTime * 0.15 + targetY;
      
      // Counter-rotate wireframe and ring
      outerMesh.rotation.y = -elapsedTime * 0.3;
      ringMesh.rotation.z = elapsedTime * 0.15;

      // Bobbing floating effect
      coreGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.2;

      // Animate particles subtly
      const positions = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        // Slowly drift upward
        positions[i * 3 + 1] += particleSpeeds[i];
        if (positions[i * 3 + 1] > 7) {
          positions[i * 3 + 1] = -7;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;
      particles.rotation.y = elapsedTime * 0.02 + targetX * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js resources
      innerGeo.dispose();
      innerMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[480px] lg:min-h-[580px] flex items-center justify-center">
      {/* 3D WebGL Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Interactive 3D Canvas Badge */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-space-900/80 border border-cyan-500/20 backdrop-blur-md text-xs text-slate-300 pointer-events-auto shadow-lg hover:border-cyan-400/50 transition-colors">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
        <span className="font-mono text-[11px] text-cyan-300">Three.js WebGL</span>
        <span className="text-slate-500">•</span>
        <span className="text-[11px] text-slate-400">Move mouse to interact</span>
      </div>
    </div>
  );
}
