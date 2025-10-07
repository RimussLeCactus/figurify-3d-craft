import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { ConfigOptions } from "@/pages/Configurator";
import { Loader2 } from "lucide-react";

type Viewer3DProps = {
  config: ConfigOptions;
};

// Placeholder 3D Model Component
const FigurineModel = ({ config }: { config: ConfigOptions }) => {
  const getScale = () => {
    switch (config.size) {
      case "small": return 0.8;
      case "large": return 1.4;
      default: return 1;
    }
  };

  return (
    <group scale={getScale()}>
      {/* Head/Body */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color={config.color}
          metalness={config.finish === "metallic" ? 0.9 : 0.2}
          roughness={config.finish === "glossy" ? 0.1 : 0.8}
        />
      </mesh>
      
      {/* Body */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.4, 0.5, 1.5, 32]} />
        <meshStandardMaterial 
          color={config.color}
          metalness={config.finish === "metallic" ? 0.9 : 0.2}
          roughness={config.finish === "glossy" ? 0.1 : 0.8}
        />
      </mesh>

      {/* Base */}
      {config.base !== "none" && (
        <mesh position={[0, -0.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          {config.base === "round" && <cylinderGeometry args={[0.8, 0.8, 0.2, 32]} />}
          {config.base === "square" && <boxGeometry args={[1.5, 0.2, 1.5]} />}
          {config.base === "hexagon" && <cylinderGeometry args={[0.8, 0.8, 0.2, 6]} />}
          <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.3} />
        </mesh>
      )}
    </group>
  );
};

const Viewer3D = ({ config }: Viewer3DProps) => {
  return (
    <div className="w-full aspect-square bg-background/50 rounded-xl overflow-hidden relative border border-primary/20">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} />
          <FigurineModel config={config} />
          <Environment preset="city" />
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            minDistance={3}
            maxDistance={8}
          />
        </Suspense>
      </Canvas>
      
      {/* Loading indicator */}
      <div className="absolute top-4 right-4 glass-card px-3 py-2 rounded-lg">
        <p className="text-xs text-muted-foreground">
          Glissez pour pivoter • Molette pour zoomer
        </p>
      </div>
    </div>
  );
};

export default Viewer3D;
