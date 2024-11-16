import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const CardModel = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('./assets/card.glb');

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.clip.geometry} material={materials.metal} />
      <mesh castShadow receiveShadow geometry={nodes.clamp.geometry} material={materials.metal} />
      <mesh castShadow receiveShadow geometry={nodes.card_1.geometry} material={materials.base} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.card_2.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.card_3.geometry}
        material={materials['Material.002']}
      />
    </group>
  );
});

export default CardModel;

useGLTF.preload('./assets/card.glb');
