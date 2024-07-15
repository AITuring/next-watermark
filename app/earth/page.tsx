"use client";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import React, { useEffect, useRef } from "react";

const Earth = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  let animationFrameId: number | null = null; // 声明一个变量来存储requestAnimationFrame的返回值

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({
      antialias: false, // 应该是 antialias 而不是 antialias
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = true;
    controls.dampingFactor = 0.05;

    const loader = new THREE.TextureLoader();
    const newGeo = new THREE.SphereGeometry(1, 32, 32);
    let texture;
    const newMat = new THREE.MeshStandardMaterial({
      color: 0x00ff00,
      map: loader.load("/earth.jpg", (textureImage) => {
        console.log(textureImage);
        texture = textureImage;
        // 一旦纹理加载完成，更新材质
        newMat.map = texture;
        animate();
      }),
      roughness: 0.9,
      metalness: 1,
    });
    const earthMash = new THREE.Mesh(newGeo, newMat);
    scene.add(earthMash);

    // const wireMat = new THREE.MeshBasicMaterial({
    //   color: 0xffffff,
    //   wireframe: true // 设置为true
    // });
    // const wireMesh = new THREE.Mesh(newGeo, wireMat);
    // wireMesh.scale.setScalar(1.001)
    // earthMash.add(wireMesh);

    const gridHelper = new THREE.GridHelper(2, 2); // 2x2网格辅助线
    scene.add(gridHelper);
    const axesHelper = new THREE.AxesHelper(2); // 坐标轴辅助线, 2为单位长度
    scene.add(axesHelper);

    const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
    scene.add(hemiLight);

    const animate = (t: number = 0) => {
      animationFrameId = requestAnimationFrame(animate); // 赋值给变量而不是直接传入函数
      earthMash.rotation.y = 0.0001 * t;
      // newMesh.scale.setScalar(Math.cos(t * 0.001) + 1)
      renderer.render(scene, camera);
      controls.update();
    };

    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId); // 使用存储的ID来取消动画
      }
    };
  }, []);

  return <div ref={mountRef} className="w-screen h-screen"></div>;
};

export default Earth;
