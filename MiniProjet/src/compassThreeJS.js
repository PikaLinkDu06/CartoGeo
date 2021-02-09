$(document).ready(function() {

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 25, 1, 0.1, 1000 );
  camera.position.set(0, 8, 0) ;

  const renderer = new THREE.WebGLRenderer({ canvas: threeJSCompassCanvas });
  renderer.setSize(500, 500);

  const light = new THREE.AmbientLight( 0xffffff );
  scene.add( light );

  let duck ;
  const gltfLoader = new THREE.GLTFLoader();
  gltfLoader.load('./models/Duck.gltf', function(gltf) {
    duck = gltf.scene ;
    duck.rotation.set(0, (90 * (Math.PI / 180)), 0) ;
    scene.add( duck ) ;
  },
  function ( xhr ) {
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  },
  // called when loading has errors
  function ( error ) {
    console.log( 'An error happened' );
  }
) ;

const controls = new THREE.OrbitControls( camera, renderer.domElement );

const animate = function () {
  
  requestAnimationFrame( animate );

  if(window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(orientation) {
      if(duck !== undefined) duck.rotation.set(0, orientation.alpha * (Math.PI / 180), 0) ; ;
    }) ;
  }

  renderer.render( scene, camera );
};
animate();
}) ;
