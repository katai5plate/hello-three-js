// 新規シーン
const scene = new THREE.Scene();
// 遠近法カメラ
const camera = new THREE.PerspectiveCamera(
  75, // 視野角
  window.innerWidth / window.innerHeight, // アス比
  0.1, // レンダリング最小距離
  1000 // レンダリング最大距離
);
// レンダラ
const renderer = new THREE.WebGLRenderer();
// キャンバスサイズを設定
renderer.setSize(window.innerWidth, window.innerHeight);
// レンダラを DOM と関連付け
document.body.appendChild(renderer.domElement);

// キューブを定義
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(), // 形状
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }) // 材質
);
// シーンに追加
scene.add(cube);

// 原点にあるキューブが見えるようにカメラを引く
camera.position.z = 5;

// メインループ
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera); // 描画を更新
}
animate();
