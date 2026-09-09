import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, Box } from '@react-three/drei';

// Dummy 3D Models (using primitives to represent machines)
const Equipment = ({ type, position }) => {
  if (type === 'rack') {
    return (
      <group position={position}>
        {/* Rack base/outline */}
        <Box args={[1.2, 2.2, 1.2]} position={[0, 1.1, 0]}>
          <meshStandardMaterial color="#3f3f46" wireframe={true} />
        </Box>
        {/* Solid Barbell */}
        <Box args={[2, 0.05, 0.05]} position={[0, 1.5, 0.4]}>
          <meshStandardMaterial color="#dc2626" />
        </Box>
      </group>
    );
  }
  if (type === 'bench') {
    return (
      <Box args={[0.5, 0.4, 1.2]} position={position}>
        <meshStandardMaterial color="#18181b" />
      </Box>
    );
  }
  if (type === 'treadmill') {
    return (
      <group position={position}>
        {/* Base */}
        <Box args={[0.8, 0.2, 2]} position={[0, 0.1, 0]}>
          <meshStandardMaterial color="#27272a" />
        </Box>
        {/* Screen/Console */}
        <Box args={[0.8, 1.2, 0.2]} position={[0, 0.7, -0.9]}>
          <meshStandardMaterial color="#dc2626" />
        </Box>
      </group>
    );
  }
  if (type === 'dumbbells') {
    return (
      <Box args={[1.5, 0.8, 0.4]} position={position}>
        <meshStandardMaterial color="#52525b" />
      </Box>
    );
  }
  return null;
};

export default function Planner() {
  const [items, setItems] = useState([]);

  const addItem = (type) => {
    // Drop them slightly offset from center so they don't all stack perfectly
    const offset = (items.length * 0.5) % 3;
    setItems([...items, { id: Date.now(), type, position: [offset, 0, offset] }]);
  };

  const clearItems = () => setItems([]);

  return (
    <div className="flex flex-col md:flex-row w-full h-full bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden relative">
      
      {/* Sidebar UI */}
      <div className="w-full md:w-64 bg-zinc-900 border-r border-zinc-800 p-6 flex flex-col z-10">
        <h3 className="text-white font-black uppercase tracking-widest mb-6">Equipment</h3>
        
        <div className="space-y-3 flex-1">
          <button onClick={() => addItem('rack')} className="w-full bg-black border border-zinc-800 hover:border-red-600 text-zinc-300 py-3 font-bold tracking-wider uppercase text-sm transition-colors">
            + Power Rack
          </button>
          <button onClick={() => addItem('bench')} className="w-full bg-black border border-zinc-800 hover:border-red-600 text-zinc-300 py-3 font-bold tracking-wider uppercase text-sm transition-colors">
            + Flat Bench
          </button>
          <button onClick={() => addItem('treadmill')} className="w-full bg-black border border-zinc-800 hover:border-red-600 text-zinc-300 py-3 font-bold tracking-wider uppercase text-sm transition-colors">
            + Treadmill
          </button>
          <button onClick={() => addItem('dumbbells')} className="w-full bg-black border border-zinc-800 hover:border-red-600 text-zinc-300 py-3 font-bold tracking-wider uppercase text-sm transition-colors">
            + Dumbbell Rack
          </button>
        </div>

        <button onClick={clearItems} className="mt-8 w-full bg-red-600/10 text-red-500 border border-red-900/50 hover:bg-red-600 hover:text-white py-3 font-bold tracking-wider uppercase text-sm transition-colors">
          Clear Floor
        </button>
      </div>

      {/* 3D Canvas area */}
      <div className="flex-1 relative bg-black cursor-move">
        <div className="absolute top-4 right-4 z-10 text-zinc-500 text-xs font-bold uppercase tracking-widest pointer-events-none bg-black/50 px-3 py-1 rounded">
          Drag to rotate • Scroll to zoom
        </div>
        
        <Canvas camera={{ position: [5, 4, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
          <pointLight position={[-10, 5, -10]} intensity={0.5} color="#dc2626" />

          {/* Render equipment */}
          {items.map(item => (
            <Equipment key={item.id} type={item.type} position={item.position} />
          ))}

          {/* Floor grid */}
          <Grid 
            args={[20, 20]} 
            cellSize={1} 
            cellThickness={1} 
            cellColor="#3f3f46" 
            sectionSize={5} 
            sectionThickness={1.5} 
            sectionColor="#dc2626" 
            fadeDistance={25} 
            fadeStrength={1} 
          />
          
          <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2 - 0.05} />
        </Canvas>
      </div>
    </div>
  );
}
