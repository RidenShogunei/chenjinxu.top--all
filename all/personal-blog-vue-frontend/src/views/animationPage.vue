<template>
  <div class="animation">
    <div class="sample">
      <div id="cube" ref="cubeElement"></div>
    </div>
  </div>
</template>

<script>
// 引入Three.js
import * as THREE from 'three';
// ... 其他导入部分 ...
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const cubeElement = ref(null);
    let cube, scene, camera, renderer, animationFrameId;

    const animate = function() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    }

    onMounted(() => {
      // 创建场景
      scene = new THREE.Scene();

      // 创建相机
      camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      camera.position.z = 5;

      // 创建渲染器，并将其添加到DOM元素中
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(400, 400);
      cubeElement.value.appendChild(renderer.domElement);

      // 创建几何体和材料
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

      // 将立方体添加到场景中
      cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      // 启动动画
      animate();
    });

    // 组件销毁时停止动画，并移除窗口事件监听器
    onBeforeUnmount(() => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', this.onWindowResize);
    });

    return { cubeElement };
  }
}
</script>


<style scoped>
.animation {
  /* 之前的样式不变 */
  background-image: url('../assets/yaya.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* 使用 flexbox 将内容居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction 为 column 可以使 h1 和 h2 垂直排列 */
  flex-direction: column;
}

</style>