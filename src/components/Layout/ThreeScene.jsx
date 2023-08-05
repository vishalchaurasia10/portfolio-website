import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import * as THREE from 'three';

const ThreeScene = () => {
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 400;
    cameraRef.current = camera;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (rendererRef.current) {
      rendererRef.current.appendChild(renderer.domElement);
    }

    // Handle window resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Create geometry
    const distance = Math.min(200, window.innerWidth / 4);
    const geometry = new THREE.BufferGeometry(); // Use BufferGeometry instead of Geometry

    const positions = [];
    for (let i = 0; i < 1600; i++) {
      const theta = Math.acos(THREE.MathUtils.randFloatSpread(2));
      const phi = THREE.MathUtils.randFloatSpread(360);

      const x = distance * Math.sin(theta) * Math.cos(phi);
      const y = distance * Math.sin(theta) * Math.sin(phi);
      const z = distance * Math.cos(theta);

      positions.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    // Create particles
    const material = new THREE.PointsMaterial({ color: 0xff44ff, size: 2 });
    const particles = new THREE.Points(geometry, material);
    particles.boundingSphere = 50;
    particlesRef.current = particles;

    // Create rendering parent and add particles
    const renderingParent = new THREE.Group();
    renderingParent.add(particles);

    // Create resize container and add rendering parent
    const resizeContainer = new THREE.Group();
    resizeContainer.add(renderingParent);
    scene.add(resizeContainer);

    // Animate the scene
    const animate = function () {
      requestAnimationFrame(animate);
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    };
    animate();

    // Mouse move event to rotate particles
    let myTween;
    const onMouseMove = (event) => {
      if (myTween) myTween.kill();
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      myTween = gsap.to(particles.rotation, { duration: 0.1, x: mouseY * -1, y: mouseX });
    };

    document.addEventListener('mousemove', onMouseMove, false);

    // Scaling animation
    const animProps = { scale: 1, xRot: 0, yRot: 0 };
    gsap.to(animProps, {
      duration: 10,
      scale: 1.3,
      repeat: -1,
      yoyo: true,
      ease: 'sine',
      onUpdate: function () {
        if (renderingParent) renderingParent.scale.set(animProps.scale, animProps.scale, animProps.scale);
      },
    });

    gsap.to(animProps, {
      duration: 120,
      xRot: Math.PI * 2,
      yRot: Math.PI * 4,
      repeat: -1,
      yoyo: true,
      ease: 'none',
      onUpdate: function () {
        if (renderingParent) renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
      },
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove, false);
      if (myTween) myTween.kill();
      if (rendererRef.current) {
        rendererRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={rendererRef} />;
};

export default ThreeScene;
