
import React, { useEffect, useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Float } from '@react-three/drei';
import AnimatedText from '../ui/AnimatedText';
import { Button } from '../ui/button';
import { Star, CircleArrowDown } from 'lucide-react';
import * as THREE from 'three';

const FloatingObject = ({ position, rotation, scale, color, speed = 1, amplitude = 0.5 }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    mesh.current.position.y = position[1] + Math.sin(t) * amplitude;
    mesh.current.rotation.x = rotation[0] + Math.sin(t * 0.5) * 0.1;
    mesh.current.rotation.y = rotation[1] + Math.sin(t * 0.3) * 0.1;
  });

  return (
    <mesh ref={mesh} position={position} rotation={rotation} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.5} metalness={0.8} />
    </mesh>
  );
};

const UserCard = ({ position, name, delay, image = null }) => {
  const mesh = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() + delay;
    mesh.current.position.y = position[1] + Math.sin(t * 0.5) * 0.2;
  });

  return (
    <group ref={mesh} position={position} scale={[0.6, 0.6, 0.6]}>
      <mesh>
        <planeGeometry args={[2.5, 1.25, 1]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
      </mesh>
      <mesh position={[-0.8, 0, 0.01]}>
        <circleGeometry args={[0.4, 32]} />
        <meshStandardMaterial color="#e2e8f0" />
      </mesh>
      <mesh position={[0.5, 0, 0.01]}>
        <boxGeometry args={[1.5, 0.3, 0.01]} />
        <meshStandardMaterial color="#e2e8f0" />
      </mesh>
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Background gradient spheres */}
      <FloatingObject position={[-4, 2, -5]} rotation={[0, 0, 0]} scale={[3, 3, 3]} color="#4f46e5" speed={0.5} amplitude={0.3} />
      <FloatingObject position={[5, -1, -7]} rotation={[0, 0, 0]} scale={[4, 4, 4]} color="#818cf8" speed={0.3} amplitude={0.2} />
      <FloatingObject position={[-6, -3, -10]} rotation={[0, 0, 0]} scale={[5, 5, 5]} color="#6366f1" speed={0.2} amplitude={0.4} />

      {/* Interactive elements */}
      <UserCard position={[3, 0, -3]} name="David" delay={1.5} />
      <UserCard position={[-3, 2, -4]} name="Mireya" delay={2.0} />
      
      {/* Floating decorative elements */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-2, -1, -2]} rotation={[0.5, 0.5, 0]}>
          <torusGeometry args={[0.6, 0.2, 16, 32]} />
          <meshStandardMaterial color="#f87171" />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
        <mesh position={[2, 1.5, -2]} rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial color="#fde047" />
        </mesh>
      </Float>
      
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  );
};

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden pt-20">
      {/* 3D background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background to-background/80">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 60 }}
          className="w-full h-full"
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-antimony/10 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-antimony/5 blur-[80px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      {/* Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-4 inline-block">
          <div className={`px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium backdrop-blur-sm border border-white/10 transition-all duration-700 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <span className="text-antimony flex items-center gap-2">
              <Star className="h-4 w-4" />
              Accelerate Your Digital Growth
            </span>
          </div>
        </div>
        
        <h1 className="heading-xl mb-6 mt-4">
          <AnimatedText 
            text="The world of custom" 
            className="block mb-2"
            gradient={false}
            words={true}
          />
          <AnimatedText 
            text="Software Solutions" 
            className="block text-white font-bold"
            words={true}
            delay={200}
          />
        </h1>
        
        <div className={`max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-white/80">
            Antimony crafts exceptional web applications, websites, and mobile apps
            while optimizing SEO and automating workflows for businesses worldwide.
          </p>
        </div>
        
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <Button 
            size="lg"
            className="bg-antimony hover:bg-antimony-light text-white px-8 py-6 rounded-full"
          >
            Explore Services
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent border border-white/20 hover:border-white/40 text-white px-8 py-6 rounded-full"
          >
            Contact Us
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-sm mb-2">Scroll to explore</span>
        <CircleArrowDown className="w-6 h-6 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
