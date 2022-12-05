import './style.css'
import * as THREE from 'three';
import { RenderPass, EffectComposer, OutlinePass } from "three-outlinepass";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { InteractionManager } from "three.interactive";
import * as TWEEN from "@tweenjs/tween.js";
import * as GlslCanvas from 'glslCanvas/dist/GlslCanvas';

window.addEventListener("load", init, false);

function init() {

  /* Load manager */ 
  var manager = new THREE.LoadingManager();
  var loadingComplete = false;
  manager.onProgress = function (item, loaded, total) {
    if (loaded / total == 1) {
      canInteract = true;
      camera.position.set(20.0, 5.0, 30.0);
      setOrbitLimits();

      // Hide loading graphics
      document.getElementById('loading').style.visibility = "hidden";

      // Create transition canvas
      createTransition("in");

      // Show 2D UI
      for (let i = 0; i < links.length; i++) {
        links[i].style.visibility = "visible";
      }

      // Mark loading complete
      loadingComplete = true;
    }
  };

  /* Create main scene */
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.render(scene, camera);

  scene.background = new THREE.Color(0xffffff);

  const body = document.getElementById('body');
  const links = document.getElementsByClassName("link");

  const originGeometry = new THREE.PlaneGeometry(0,0,1,1);
  const origin = new THREE.Mesh(originGeometry);
  scene.add(origin);

  /* Interaction manager */
  const interactionManager = new InteractionManager(
    renderer,
    camera,
    renderer.domElement
  );

  var canInteract = false;

  /* Update window on resize */
  window.onresize = function () {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
    compose.reset();
    compose.setSize( window.innerWidth, window.innerHeight );

  };

  /* Monitor mouse position */
  var mousePageX;
  var mousePageY;
  document.body.addEventListener('mousemove', (event) => {
    mousePageX = (event.pageX / window.innerWidth) * 2 - 1;
    mousePageY = (event.pageY / window.innerHeight) * 2 - 1;
    mousePageY *= -1;
  });

  const mouseTrackerPlaneGeometry = new THREE.PlaneGeometry(0, 0, 1, 1);
  const mouseTracker3D = new THREE.Mesh(mouseTrackerPlaneGeometry);
  scene.add(mouseTracker3D);

  /* Orbit controls */
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enableZoom = false;
  controls.autoRotate = false;

  var currentTarget = "main";

  /* Transition Canvas */
  async function createTransition(direction) {
    var glslCanvas = document.createElement("canvas");
    glslCanvas.id = "glslCanvas";
    glslCanvas.className = "glslCanvas";
    body.appendChild(glslCanvas);

    var glslShader = new GlslCanvas(glslCanvas);

    var string_frag_code_in = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nuniform vec2 u_resolution;\nuniform float u_time;\nvoid main() {\nvec2 uv = gl_FragCoord.xy/u_resolution;float curve = sin(uv.x * 10.0 - u_time * 20.0) * 0.65;\nfloat wave = step(uv.y * 5.0 + (2.0 - u_time * 10.0), curve);\nwave = 1.0 - wave;\nvec4 color = vec4(wave);\ngl_FragColor = color;\n}";
    var string_frag_code_out = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nuniform vec2 u_resolution;\nuniform float u_time;\nvoid main() {\nvec2 uv = gl_FragCoord.xy/u_resolution;\nfloat curve = sin(uv.x * 10.0 - u_time * 20.0) * 0.65;\nfloat wave = step(uv.y * 5.0 + (2.0 - u_time * 10.0), curve);\nvec4 color = vec4(wave);\ngl_FragColor = color;\n}";
    
    if (direction == "in") {
      glslShader.load(string_frag_code_in);
    }
    else {
      glslShader.load(string_frag_code_out);
    }

    glslCanvas.setAttribute('width', window.innerWidth);
    glslCanvas.setAttribute('height', window.innerHeight);

    setTimeout(function() {
      if (direction == "in") {
        glslCanvas.remove();
      }
      else {
        glslCanvas.remove();
        createTransition("in");
      }
    }, 1000);
  }

  /* Slash Canvas */
  async function createSlash() {
    var glslCanvas = document.createElement("canvas");
    glslCanvas.id = "glslCanvas";
    glslCanvas.className = "glslCanvas";
    body.appendChild(glslCanvas);

    var glslShader = new GlslCanvas(glslCanvas);

    var string_frag_code = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nuniform vec2 u_resolution;\nuniform float u_time;\nfloat plot(vec2 uv) {\nreturn 1.0 - step(0.075, abs(uv.x - uv.y));\n}\nvoid main() {\nvec2 uv = gl_FragCoord.xy/u_resolution;\nfloat timeMod = min((u_time*9.0) + 0.01, 1.0);\nfloat denominator = sin(uv.x*3.14) * sin(uv.y*3.14) * timeMod;\nvec4 slashColor = vec4(1.0, 0.15, 0.05, 1.0);\nvec4 color = vec4(plot(vec2(uv.x / (1.0-uv.y), (1.0-uv.y)) / denominator));\ncolor *= mix(vec4(1.0), slashColor, min(u_time * 1.5, 1.0));\ncolor *= mix(vec4(1.0), vec4(0.0), min(u_time * 1.5, 1.0));\ngl_FragColor = color;\n}";
    
    glslShader.load(string_frag_code);

    glslCanvas.setAttribute('width', window.innerWidth);
    glslCanvas.setAttribute('height', window.innerHeight);

    setTimeout(function() {
      glslCanvas.remove();
    }, 1000);
  }

  /* 2D UI Layer Links */
  const homeLink = document.getElementById("home");
  const aboutLink = document.getElementById("about");
  const arLink = document.getElementById("ar");
  const vrLink = document.getElementById("vr");
  const houdiniLink = document.getElementById("houdini");
  const otherLink = document.getElementById("other");

  // Home
  homeLink.onmouseover = function() {
    if (canInteract) {
      homeLinkMouseOver();
    }
  }

  homeLink.onmouseout = function() {
    homeLinkMouseOut();
  }

  homeLink.onclick = function() {
    if (canInteract) {
      homeLinkClicked();
    }
  }

  // About
  aboutLink.onmouseover = function() {
    if (canInteract) {
      aboutLinkMouseOver();
    }
  }

  aboutLink.onmouseout = function() {
    aboutLinkMouseOut();
  }

  aboutLink.onclick = function() {
    if (canInteract) {
      aboutLinkClicked();
    }
  }

  // AR
  arLink.onmouseover = function() {
    if (canInteract) {
      arLinkMouseOver();
    }
  }

  arLink.onmouseout = function() {
    arLinkMouseOut();
  }

  arLink.onclick = function() {
    if (canInteract) {
      arLinkClicked();
    }
  }

  // VR
  vrLink.onmouseover = function() {
    if (canInteract) {
      vrLinkMouseOver();
    }
  }

  vrLink.onmouseout = function() {
    vrLinkMouseOut();
  }

  vrLink.onclick = function() {
    if (canInteract) {
      vrLinkClicked();
    }
  }

  // Houdini
  houdiniLink.onmouseover = function() {
    if (canInteract) {
      houdiniLinkMouseOver();
    }
  }

  houdiniLink.onmouseout = function() {
    houdiniLinkMouseOut();
  }

  houdiniLink.onclick = function() {
    if (canInteract) {
      houdiniLinkClicked();
    }
  }

  // Other
  otherLink.onmouseover = function() {
    if (canInteract) {
      otherLinkMouseOver();
    }
  }

  otherLink.onmouseout = function() {
    otherLinkMouseOut();
  }

  otherLink.onclick = function() {
    otherLinkClicked();
  }

  // Button press
  var button = document.getElementById('button');

  button.onclick = function changeVideo() {

    metaCaptureIndex++;
    phonePlaneMaterial.map = metaCaptures[metaCaptureIndex % metaCaptures.length];

    // Animate phone
    phoneTapAction.reset();
    phoneTapAction.fadeIn(0.02);
    phoneScratchAction.fadeOut(0.02);
    phoneWaveAction.fadeOut(0.02);
    phoneTapAction.play();

    setTimeout(function() {
      phoneTapAction.fadeOut(0.3);
      phoneScratchAction.reset();
      phoneScratchAction.fadeIn(0.3);
    }, 500);

  }

  /* Outline pass */
  var outlineObjects = [];

  var compose = new EffectComposer(renderer);
  var renderPass = new RenderPass(scene, camera);

  var outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera, outlineObjects);
  outlinePass.renderToScreen = true;
  outlinePass.selectedObjects = outlineObjects;

  compose.addPass(renderPass);
  compose.addPass(outlinePass);

  var params = {
    edgeStrength: 12,
    edgeGlow: 1,
    edgeThickness: 1,
    pulsePeriod: 0,
    usePatternTexture: false,
    visibleEdgeColor: 0xff5500,
    hiddenEdgeColor: 0x551100
  };

  outlinePass.edgeStrength = params.edgeStrength;
  outlinePass.edgeGlow = params.edgeGlow;
  outlinePass.edgeThickness = params.edgeThickness;
  outlinePass.visibleEdgeColor.set(0xff5500);
  outlinePass.hiddenEdgeColor.set(0x773300);

  /* Skybox */
  const SKY_COLOR = new THREE.Color(0.5, 0.4, 1.0);
  const SKY_COLOR_LIGHT = new THREE.Color(0.5, 0.4, 1.0);
  const SKY_COLOR_DARK = new THREE.Color(0.15, 0.1, 0.2);
  const GROUND_COLOR = new THREE.Color(1.0, 0.4, 0.7);
  const GROUND_COLOR_LIGHT = new THREE.Color(1.0, 0.4, 0.7);
  const GROUND_COLOR_DARK = new THREE.Color(0.5, 0.2, 0.35);
  const SKY_SIZE = 900;

  const skyUniforms = {
    topColor: { value: SKY_COLOR },
    bottomColor: { value: GROUND_COLOR }
  }

  function fadeSkyColor(newTopColor, newBottomColor) {
    const skyColor = { topColor: skyUniforms.topColor.value, bottomColor: skyUniforms.bottomColor.value };
    new TWEEN.Tween(skyColor)
      .to({topColor: newTopColor, bottomColor: newBottomColor}, 600)
      .onUpdate(() => skyUniforms.topColor.value = skyColor.topColor, skyUniforms.bottomColor.value = skyColor.bottomColor)
      .start();
  }

  function addSkyGradient(scene) {
    const vertexShader = `
      varying vec3 localPosition;
      void main() {
        vec4 vLocalPosition = vec4(position, 1.0);
        localPosition = vLocalPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`
    const fragmentShader = `
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      varying vec3 localPosition;
      void main() {
        float h = normalize(localPosition).y;
        gl_FragColor = vec4(mix(bottomColor, topColor, max(h, 0.0)), 1.0);
      }`
    const skyGeo = new THREE.SphereGeometry(SKY_SIZE, 32, 15)
    const skyMat = new THREE.ShaderMaterial({
      uniforms: skyUniforms,
      vertexShader,
      fragmentShader,
      side: THREE.BackSide
    })
    const sky = new THREE.Mesh(skyGeo, skyMat);
    sky.position.set(0.0, -100.0, 0.0);
    sky.scale.set(1.0, 0.5, 1.0);
    scene.add(sky);
  }

  addSkyGradient(scene);

  /* Scene Lighting */
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
  scene.add(directionalLight.target);
  directionalLight.target.position.set(20.0, -10.0, -10.0);
  scene.add(directionalLight);

  /* Main 3D scene */

  // Water shader
  function waterVertexShader() {
    return `
      uniform float time;
      varying vec2 vUv;
      void main() {
        vUv = position.xy * 10.0;
        vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * modelViewPosition; 
      }
    `
  }
  
  function waterFragmentShader() {
    return `
      uniform float time;
      varying vec2 vUv;

      float random (in vec2 st) {
        return fract(sin(dot(st.xy,
            vec2(12.9898,78.233)))*
            43758.5453123);
      }

      float hash1( float n ) { return fract(sin(n)*43758.5453); }
      vec2  hash2( vec2  p ) { p = vec2( dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)) ); return fract(sin(p)*43758.5453); }

      // Based on Morgan McGuire @morgan3d
      // https://www.shadertoy.com/view/4dS3Wd
      float noise (in vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
    
        // Four corners in 2D of a tile
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
    
        vec2 u = f * f * (3.0 - 2.0 * f);
    
        return mix(a, b, u.x) +
                (c - a)* u.y * (1.0 - u.x) +
                (d - b) * u.x * u.y;
      }
        
      #define OCTAVES 6
      float fbm (in vec2 st) {
        // Initial values
        float value = 0.0;
        float amplitude = .5;
        float frequency = 0.;
        //
        // Loop of octaves
        for (int i = 0; i < OCTAVES; i++) {
            value += amplitude * noise(st);
            st *= 2.;
            amplitude *= .5;
        }
        return value;
      }
      
      // The parameter w controls the smoothness
      vec4 voronoi( in vec2 x, float w )
      {
        vec2 n = floor( x );
        vec2 f = fract( x );
      
        vec4 m = vec4( 1.0, 0.0, 0.0, 0.0 );
        for( int j=-2; j<=2; j++ ) {
          for( int i=-2; i<=2; i++ )
          {
            vec2 g = vec2( float(i),float(j) );
            vec2 o = hash2( n + g );
        
            // animate
            o = 0.5 + 0.5*sin( time*0.001 + 6.2831*o );
    
            // distance to cell		
            float d = length(g - f + o);
            
            // do the smooth min for colors and distances		
            float h = smoothstep( -1.0, 1.0, (m.x-d)/w );
            m.x = mix( m.x, d, h ) - h*(1.0-h)*w/(1.0+3.0*w); // distance
          }
        }
        
        return m;

      }

      vec3 srgbEncode(vec3 color){
        float r = color.r < 0.0031308 ? 12.92 * color.r : 1.055 * pow(color.r, 1.0/2.4) - 0.055;
        float g = color.g < 0.0031308 ? 12.92 * color.g : 1.055 * pow(color.g, 1.0/2.4) - 0.055;
        float b = color.b < 0.0031308 ? 12.92 * color.b : 1.055 * pow(color.b, 1.0/2.4) - 0.055;
        return vec3(r, g, b);
      }

      void main() {

        vec2 vUvm = vec2(fbm(vUv*0.1)) + vec2(0.0, time * -0.00015);

        vec4 v = voronoi( 6.0*vUv + vUvm*20., 0.0001 ) - voronoi( 6.0*vUv + vUvm*20., 0.5 );

        float threshold = 0.0001;
        if (v.x > threshold) { v.x = 1.0; }
        else { v.x = 0.0; }

        vec3 blue = vec3(0.0, 0.17, 0.65);
        vec3 white = vec3(1.0, 1.0, 1.0);

        vec3 col = mix(blue, white, v.x);

        float discardDistance = 3.5;
        if (sqrt(dot(vUv, vUv)) > discardDistance) {
          discard;
        }

        gl_FragColor = vec4(srgbEncode(col), 1.0);

      }
    `
  }

  // Wake shaders
  function wakeVertexShader() {
    return `
      uniform float time;
      varying vec2 vUv;
      void main() {
        vUv = position.xy;
        vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * modelViewPosition; 
      }
    `
  }

  function windWakeVertexShader() {
    return `
      uniform float time;
      varying vec2 vUv;
      void main() {
        vUv = position.xz;
        vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * modelViewPosition; 
      }
    `
  }

  function windWakeFragmentShader() {
    return `
      uniform float time;
      varying vec2 vUv;

      float random (in vec2 st) {
        return fract(sin(dot(st.xy,
            vec2(12.9898,78.233)))*
            43758.5453123);
      }

      float hash1( float n ) { return fract(sin(n)*43758.5453); }
      vec2  hash2( vec2  p ) { p = vec2( dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)) ); return fract(sin(p)*43758.5453); }
      
      // The parameter w controls the smoothness
      vec4 voronoi( in vec2 x, float w )
      {
        vec2 n = floor( x );
        vec2 f = fract( x );
      
        vec4 m = vec4( 1.0, 0.0, 0.0, 0.0 );
        for( int j=-2; j<=2; j++ ) {
          for( int i=-2; i<=2; i++ )
          {
            vec2 g = vec2( float(i),float(j) );
            vec2 o = hash2( n + g );
        
            // animate
            o = 0.5 + 0.5*sin( 6.2831*o + time*0.005 );
    
            // distance to cell		
            float d = length(g - f + o);
            
            // do the smooth min for colors and distances		
            float h = smoothstep( -1.0, 1.0, (m.x-d)/w );
            m.x = mix( m.x, d, h ) - h*(1.0-h)*w/(1.0+3.0*w); // distance
          }
        }
        
        return m;

      }

      vec3 srgbEncode(vec3 color){
        float r = color.r < 0.0031308 ? 12.92 * color.r : 1.055 * pow(color.r, 1.0/2.4) - 0.055;
        float g = color.g < 0.0031308 ? 12.92 * color.g : 1.055 * pow(color.g, 1.0/2.4) - 0.055;
        float b = color.b < 0.0031308 ? 12.92 * color.b : 1.055 * pow(color.b, 1.0/2.4) - 0.055;
        return vec3(r, g, b);
      }

      void main() {

        vec4 v = voronoi(vUv * vec2(2.0, 1.0) + time*0.005, 0.5);

        float threshold = 0.6;
        if (v.x > threshold) { v.x = 1.0; }
        else { discard; }

        vec3 col = vec3(v.x);

        gl_FragColor = vec4(srgbEncode(col), 1.0);

      }
    `
  }

  function wakeHorizontalFragmentShader() {
    return `
      uniform float time;
      varying vec2 vUv;

      float random (in vec2 st) {
        return fract(sin(dot(st.xy,
            vec2(12.9898,78.233)))*
            43758.5453123);
      }

      // Based on Morgan McGuire @morgan3d
      // https://www.shadertoy.com/view/4dS3Wd
      float noise (in vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
    
        // Four corners in 2D of a tile
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
    
        vec2 u = f * f * (3.0 - 2.0 * f);
    
        return mix(a, b, u.x) +
                (c - a)* u.y * (1.0 - u.x) +
                (d - b) * u.x * u.y;
      }
        
      #define OCTAVES 6
      float fbm (in vec2 st) {
        // Initial values
        float value = 0.0;
        float amplitude = .5;
        float frequency = 0.;
        //
        // Loop of octaves
        for (int i = 0; i < OCTAVES; i++) {
            value += amplitude * noise(st);
            st *= 2.;
            amplitude *= .5;
        }
        return value;
      }

      vec3 srgbEncode(vec3 color){
        float r = color.r < 0.0031308 ? 12.92 * color.r : 1.055 * pow(color.r, 1.0/2.4) - 0.055;
        float g = color.g < 0.0031308 ? 12.92 * color.g : 1.055 * pow(color.g, 1.0/2.4) - 0.055;
        float b = color.b < 0.0031308 ? 12.92 * color.b : 1.055 * pow(color.b, 1.0/2.4) - 0.055;
        return vec3(r, g, b);
      }

      void main() {

        vec2 uv = vUv + vec2(0.5);

        float uvy01 = uv.y / uv.x;
        float curve = sin(uv.x * 10.0 * fbm(uv) - time * 0.01);
        float wave = step(uvy01 * 5.0 - 2.0, curve);
        float wave01 = step(uvy01 * 5.0 - 3.0, curve);

        float alpha = wave01 - wave;
        alpha *= 1.0 - uv.x;

        if (alpha == 0.0) {
          discard;
        }

        gl_FragColor = vec4(srgbEncode(vec3(1.0)), alpha);

      }
    `
  }

  function wakeVerticalFragmentShader() {
    return `
      uniform float time;
      varying vec2 vUv;

      float random (in vec2 st) {
        return fract(sin(dot(st.xy,
            vec2(12.9898,78.233)))*
            43758.5453123);
      }

      // Based on Morgan McGuire @morgan3d
      // https://www.shadertoy.com/view/4dS3Wd
      float noise (in vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
    
        // Four corners in 2D of a tile
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
    
        vec2 u = f * f * (3.0 - 2.0 * f);
    
        return mix(a, b, u.x) +
                (c - a)* u.y * (1.0 - u.x) +
                (d - b) * u.x * u.y;
      }
        
      #define OCTAVES 6
      float fbm (in vec2 st) {
        // Initial values
        float value = 0.0;
        float amplitude = .5;
        float frequency = 0.;
        //
        // Loop of octaves
        for (int i = 0; i < OCTAVES; i++) {
            value += amplitude * noise(st);
            st *= 2.;
            amplitude *= .5;
        }
        return value;
      }

      vec3 srgbEncode(vec3 color){
        float r = color.r < 0.0031308 ? 12.92 * color.r : 1.055 * pow(color.r, 1.0/2.4) - 0.055;
        float g = color.g < 0.0031308 ? 12.92 * color.g : 1.055 * pow(color.g, 1.0/2.4) - 0.055;
        float b = color.b < 0.0031308 ? 12.92 * color.b : 1.055 * pow(color.b, 1.0/2.4) - 0.055;
        return vec3(r, g, b);
      }

      void main() {

        vec2 uv = vUv + vec2(0.5);

        float uvx01 = sin(uv.x * 3.14) * 0.75;
        float uvy01 = uv.y / uvx01;

        float curve = sin(uv.x * 10.0 * fbm(uv) - time * 0.01);
        float wave = step(uvy01 * 5.0 - 2.5, curve);
        float wave01 = step(uvy01 * 5.0 - 3.0, curve);
        
        vec3 waveColor = vec3(0.0, 0.17, 0.65);

        vec3 col = wave * waveColor + vec3(wave01 - wave);

        if (col.z == 0.0) {
          discard;
        }

        gl_FragColor = vec4(srgbEncode(col), 1.0);

      }
    `
  }

  const uniforms = {
    time: {type: 'float', value: 0.0}
  };

  // Create water plane
  const waterPlaneGeometry = new THREE.PlaneGeometry(1, 1, 1, 1);
  const waterMaterial = new THREE.ShaderMaterial({
    uniforms: uniforms,
    fragmentShader: waterFragmentShader(),
    vertexShader: waterVertexShader()
  })
  const waterPlane = new THREE.Mesh(waterPlaneGeometry, waterMaterial);
  waterPlane.rotation.set(Math.PI / -2, 0.0, 0.0);
  waterPlane.position.set(0.0, -10.01, 0.0);
  waterPlane.scale.set(1000, 1000, 1000);
  scene.add(waterPlane);

  // Create wake planes
  const wakePlaneGeometry = new THREE.PlaneGeometry(1, 1, 1, 1);
  const wakeHorizontalMaterial = new THREE.ShaderMaterial({
    uniforms: uniforms,
    fragmentShader: wakeHorizontalFragmentShader(),
    vertexShader: wakeVertexShader(),
    transparent: true
  })
  const wakeVerticalMaterial = new THREE.ShaderMaterial({
    uniforms: uniforms,
    fragmentShader: wakeVerticalFragmentShader(),
    vertexShader: wakeVertexShader(),
    transparent: false,
    side: THREE.DoubleSide
  })

  const windWakeMaterial = new THREE.ShaderMaterial({
    uniforms: uniforms,
    fragmentShader: windWakeFragmentShader(),
    vertexShader: windWakeVertexShader(),
    side: THREE.DoubleSide
  })

  const wakePlaneHL = new THREE.Mesh(wakePlaneGeometry, wakeHorizontalMaterial);
  wakePlaneHL.scale.set(50, 25, 1);
  wakePlaneHL.position.set(27.0, -9.9, -30.0);
  wakePlaneHL.rotation.set(Math.PI / -2, 0.0, 0.6);

  const wakePlaneHR = new THREE.Mesh(wakePlaneGeometry, wakeHorizontalMaterial);
  wakePlaneHR.scale.set(-50, 25, 1);
  wakePlaneHR.position.set(-27.0, -9.9, -30.0);
  wakePlaneHR.rotation.set(Math.PI / -2, 0.0, -0.6);

  const wakePlaneVL = new THREE.Mesh(wakePlaneGeometry, wakeVerticalMaterial);
  wakePlaneVL.scale.set(50, 20, 1);
  wakePlaneVL.position.set(17.0, 0.0, -42.0);
  wakePlaneVL.rotation.set(0.0, Math.PI / 2 - 0.4, 0.0);

  const wakePlaneVR = new THREE.Mesh(wakePlaneGeometry, wakeVerticalMaterial);
  wakePlaneVR.scale.set(50, 20, 1);
  wakePlaneVR.position.set(-17.0, 0.0, -42.0);
  wakePlaneVR.rotation.set(0.0, Math.PI / 2 + 0.4, 0.0);

  scene.add(wakePlaneHL, wakePlaneHR, wakePlaneVL, wakePlaneVR);

  // Sun geometry
  const sunGeometry = new THREE.SphereGeometry(75, 18, 18, 0, Math.PI *2, 0, Math.PI);
  const sunMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.95, 0.82, 0.95) });
  const sun = new THREE.Mesh(sunGeometry, sunMaterial);
  sun.position.set(-400, -10, -200);

  scene.add(sun);

  // Texture importer
  const textureLoader = new THREE.TextureLoader(manager);

  // Geometry import and animate
  const modelLoader = new GLTFLoader(manager);

  var jetSkiModel;

  var jetSkiMixer;

  var jetSkiIdleAction;

  var characterIdleAction;
  var characterStrikeAction;
  var characterJumpAction;
  var characterLeanAction;

  var phoneWaveAction;
  var phoneScratchAction;
  var phoneTapAction;

  var characterGeometry = [];
  var phoneGeometry = [];
  var phonePupils = [];
  var headsetGeometry = [];
  var swordGeometry = [];
  var boltGeometry;

  modelLoader.load('geometry/01_Cody_Animations_V3.glb', function (gltf) {

    jetSkiModel = gltf.scene;

    // Traverse imported glb
    jetSkiModel.traverse(function(obj) {

      // If traversed object has material
      if (obj.material) {

        obj.frustumCulled = true;

        // Assign wind wake shader material to splash meshes
        if (obj.material.name == "SideSplash" || obj.material.name == "BackSplash") {
          obj.material = windWakeMaterial;
        }

        else if (obj.material.name == "PhoneScreen") {
          obj.material = phonePlaneMaterial;
        }

        // Assign toon material to all other geometry
        else {
          var materialColor = obj.material.color;
          obj.material = new THREE.MeshToonMaterial({ color: materialColor.convertLinearToSRGB(), side: THREE.DoubleSide, name: obj.material.name });
          
          // Assign face texture to face material
          if (obj.material.name == "Face") {
            obj.material.color = new THREE.Color(1.0, 1.0, 1.0, 1.0);
            obj.material.map = textureLoader.load('textures/Face.png');
          }
        }

        // Specific objects for outlining //
        // Phone
        if (obj.material.name == "Phone"
        || obj.material.name == "PhoneScreen"
        || obj.material.name == "PhoneEyesWhite"
        || obj.material.name == "PhoneEyesPupil") {
          
          phoneGeometry.push(obj);

        }

        // Headset
        else if (obj.material.name == "HeadsetWhite" 
        || obj.material.name == "HeadsetBlack" 
        || obj.material.name == "HeadsetScreen") {

          headsetGeometry.push(obj);

        }

        // Character
        else if (obj.material.name == "Face" 
        || obj.material.name == "Hair" 
        || obj.material.name == "Shirt" 
        || obj.material.name == "Shorts"
        || obj.material.name == "Hat") {
          
          characterGeometry.push(obj);

        }

        // Bolt
        else if (obj.material.name == "Bolt") {

          boltGeometry = obj;

        }

        // Sword
        else if (obj.material.name == "SwordHilt" || obj.material.name == "SwordMetal") {

          swordGeometry.push(obj);

        }

        // Get phone pupils
        if (obj.material.name == "PhoneEyesPupil") {
          phonePupils.push(obj);
          obj.material.color = new THREE.Color(0.1, 0.1, 0.1);
        }

      }

    })

    // Animation mixers and clips //
    jetSkiMixer = new THREE.AnimationMixer(jetSkiModel);

    // Jetski
    const clips = gltf.animations;
    const jetSkiIdleClip = THREE.AnimationClip.findByName(clips, 'JetskiAction');
    jetSkiIdleAction = jetSkiMixer.clipAction(jetSkiIdleClip);

    jetSkiIdleAction.play();

    // Character
    const characterIdleClip = THREE.AnimationClip.findByName(clips, 'Jetski_Idle');
    characterIdleAction = jetSkiMixer.clipAction(characterIdleClip);

    const characterStrikeClip = THREE.AnimationClip.findByName(clips, 'Jetski_Strike');
    characterStrikeAction = jetSkiMixer.clipAction(characterStrikeClip);

    const characterJumpClip = THREE.AnimationClip.findByName(clips, 'Jetski_Jump');
    characterJumpAction = jetSkiMixer.clipAction(characterJumpClip);

    const characterLeanClip = THREE.AnimationClip.findByName(clips, 'Jetski_Speed');
    characterLeanAction = jetSkiMixer.clipAction(characterLeanClip);

    characterIdleAction.play();

    // Phone
    const phoneWaveClip = THREE.AnimationClip.findByName(clips, 'Phone_Wave');
    phoneWaveAction = jetSkiMixer.clipAction(phoneWaveClip);

    const phoneScratchClip = THREE.AnimationClip.findByName(clips, 'Phone_Scratch');
    phoneScratchAction = jetSkiMixer.clipAction(phoneScratchClip);

    const phoneTapClip = THREE.AnimationClip.findByName(clips, 'Phone_Tap');
    phoneTapAction = jetSkiMixer.clipAction(phoneTapClip);

    phoneScratchAction.play();

    // Mesh transforms
    jetSkiModel.scale.set(5.0, 5.0, 5.0);
    jetSkiModel.position.set(0.0, -11.0, -10.0);

    scene.add(jetSkiModel);

  });

  /* About me 3D scene */
  const aboutCameraTargetGeometry = new THREE.PlaneGeometry(0, 0, 1, 1);
  const aboutCameraTarget = new THREE.Mesh(aboutCameraTargetGeometry);
  aboutCameraTarget.position.set(0.0, 30.0, -5.5);

  scene.add(aboutCameraTarget);

  /* AR Work 3D scene and video textures */
  var metaCaptures = [];
  var metaCaptureIndex = 0;

  const sushiVideo = document.getElementById('sushi');
  const sushiVideoTexture = new THREE.VideoTexture(sushiVideo);
  metaCaptures.push(sushiVideoTexture);

  const jumpWaveVideo = document.getElementById('jumpwave');
  const jumpWaveVideoTexture = new THREE.VideoTexture(jumpWaveVideo);
  metaCaptures.push(jumpWaveVideoTexture);

  const costumeSelectorVideo = document.getElementById('costumeselector');
  const costumeSelectorVideoTexture = new THREE.VideoTexture(costumeSelectorVideo);
  metaCaptures.push(costumeSelectorVideoTexture);

  const groupSelfieVideo = document.getElementById('groupselfie');
  const groupSelfieVideoTexture = new THREE.VideoTexture(groupSelfieVideo);
  metaCaptures.push(groupSelfieVideoTexture);

  const snackUpVideo = document.getElementById('snackup');
  const snackUpVideoTexture = new THREE.VideoTexture(snackUpVideo);
  metaCaptures.push(snackUpVideoTexture);

  const phonePlaneMaterial = new THREE.MeshBasicMaterial({ map: sushiVideoTexture, side: THREE.FrontSide, color: 0xffffff });

  const arCameraTargetGeometry = new THREE.PlaneGeometry(0, 0, 1, 1);
  const arCameraTarget = new THREE.Mesh(arCameraTargetGeometry);
  arCameraTarget.position.set(0.0, 3.0, -5.5);

  scene.add(arCameraTarget);

  /* Interaction hitboxes */
  const hitBoxMaterial = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.0 });

  // Character
  const characterHitBoxGeometry = new THREE.PlaneGeometry(18, 30);
  const characterHitBox = new THREE.Mesh(characterHitBoxGeometry, hitBoxMaterial);
  characterHitBox.position.set(0.0, 0.0, -12.0);
  interactionManager.add(characterHitBox);

  characterHitBox.addEventListener("mouseover", (event) => {
    if (canInteract) {
      aboutLinkMouseOver();
    }
  });

  characterHitBox.addEventListener("mouseout", (event) => {
    aboutLinkMouseOut();
  });

  characterHitBox.addEventListener("click", (event) => {
    event.stopPropagation();

    if (canInteract) {
      aboutLinkClicked();
    }
  });

  scene.add(characterHitBox);

  // Phone
  const phoneHitBoxGeometry = new THREE.PlaneGeometry(8, 6);
  const phoneHitBox = new THREE.Mesh(phoneHitBoxGeometry, hitBoxMaterial);
  phoneHitBox.position.set(0.0, 3.0, -4.5);
  interactionManager.add(phoneHitBox);

  phoneHitBox.addEventListener("mouseover", (event) => {
    if (canInteract) {
      arLinkMouseOver();
    }
  });

  phoneHitBox.addEventListener("mouseout", (event) => {
    arLinkMouseOut();
  });

  phoneHitBox.addEventListener("click", (event) => {
    event.stopPropagation();

    if (canInteract) {
      arLinkClicked();
    }
  });

  scene.add(phoneHitBox);

  // Headset
  const headsetHitBoxGeometry = new THREE.PlaneGeometry(12, 7);
  const headsetHitBox = new THREE.Mesh(headsetHitBoxGeometry, hitBoxMaterial);
  headsetHitBox.position.set(0.0, 13.5, -8.0);
  interactionManager.add(headsetHitBox);

  headsetHitBox.addEventListener("mouseover", (event) => {
    if (canInteract) {
      vrLinkMouseOver();
    }
  });

  headsetHitBox.addEventListener("mouseout", (event) => {
    vrLinkMouseOut();
  });

  headsetHitBox.addEventListener("click", (event) => {
    event.stopPropagation();

    if (canInteract) {
      // View VR work //
    }

  });

  scene.add(headsetHitBox);

  // Bolt
  const boltHitBoxGeometry = new THREE.PlaneGeometry(10, 10);
  const boltHitBox = new THREE.Mesh(boltHitBoxGeometry, hitBoxMaterial);
  boltHitBox.position.set(0.0, -1.0, 4.0);
  boltHitBox.rotation.set(Math.PI / -3, 0.0, 0.0);
  interactionManager.add(boltHitBox);

  boltHitBox.addEventListener("mouseover", (event) => {
    if (canInteract) {
      homeLinkMouseOver();
    }
  });

  boltHitBox.addEventListener("mouseout", (event) => {
    homeLinkMouseOut();
  });

  boltHitBox.addEventListener("click", (event) => {
    event.stopPropagation();
    if (canInteract) {
      speedUp(3.0, 3000);
    }
  });
  
  scene.add(boltHitBox);

  // Sword
  const swordHitBoxGeometry = new THREE.PlaneGeometry(4, 26);
  const swordHitBox = new THREE.Mesh(swordHitBoxGeometry, hitBoxMaterial);
  swordHitBox.position.set(-5.0, 10.0, -3.0);
  swordHitBox.rotation.set(0.8, 0.0, -0.25);

  interactionManager.add(swordHitBox);

  swordHitBox.addEventListener("mouseover", (event) => {
    if (canInteract) {
      swordMouseOver();
    }
  });

  swordHitBox.addEventListener("mouseout", (event) => {
    swordMouseOut();
  });

  swordHitBox.addEventListener("click", (event) => {
    if (canInteract) {
      swordClicked();
    }
  });

  scene.add(swordHitBox);

  /* Link and object interaction functions */
  function homeLinkMouseOver() {
    outlineObjects.push(boltGeometry);
    outlinePass.edgeThickness = params.edgeThickness * 3.0;
    outlinePass.hiddenEdgeColor.set(0x000000);
    homeLink.style.setProperty('color', 'rgb(255, 227, 100)');
    body.style.setProperty('cursor', 'pointer');
  }

  function homeLinkMouseOut() {
    outlineObjects.splice(0, outlineObjects.length);
    outlinePass.edgeThickness = params.edgeThickness;
    outlinePass.hiddenEdgeColor.set(0x773300);
    body.setAttribute('style','cursor: default;');
    homeLink.style = "color: rgb(191, 202, 247);";
  }

  function homeLinkClicked() {

    if (currentTarget == "main") {
      speedUp(3.0, 3000);
    }

    else if (currentTarget == "about") {
      let to = origin;
      currentTarget = "main";
      animateCamera(to);

      fadeSkyColor(SKY_COLOR_LIGHT, GROUND_COLOR_LIGHT);

      characterGeometry.forEach(obj => {
        obj.scale.set(1.0, 1.0, 1.0);
      });
      headsetGeometry.forEach(obj => {
        obj.scale.set(1.0, 1.0, 1.0);
      });
      swordGeometry.forEach(obj => {
        obj.scale.set(1.0, 1.0, 1.0);
      });

      jetSkiIdleAction.play();
      characterIdleAction.reset();
      characterIdleAction.play(); 

    }

    else if (currentTarget == "ar") {

      let to = origin;
      currentTarget = "main";
      animateCamera(to);

      showUI(); 
      jetSkiIdleAction.play(); 
      characterIdleAction.play(); 
      phoneHitBox.scale.set(1.0, 1.0, 1.0);

      characterGeometry.forEach(obj => {
        obj.scale.set(1.0, 1.0, 1.0);
      });
      headsetGeometry.forEach(obj => {
        obj.scale.set(1.0, 1.0, 1.0);
      });
      swordGeometry.forEach(obj => {
        obj.scale.set(1.0, 1.0, 1.0);
      });

    }

  }

  function aboutLinkMouseOver() {
    characterGeometry.forEach(obj => {
      outlineObjects.push(obj);
    });
    aboutLink.style.setProperty('color', 'rgb(255, 227, 100)');
    body.style.setProperty('cursor', 'pointer');
  }

  function aboutLinkMouseOut() {
    outlineObjects.splice(0, outlineObjects.length);
    aboutLink.style.setProperty('color', 'rgb(191, 202, 247)');
    body.setAttribute('style','cursor: default;');
  }

  function aboutLinkClicked() {

    canInteract = false;

    outlineObjects.splice(0, outlineObjects.length);

    characterJumpAction.reset();
    characterIdleAction.fadeOut(0.2);
    jetSkiIdleAction.fadeOut(0.2);
    jetSkiIdleAction.reset();
    jetSkiIdleAction.fadeIn(0.2);
    characterJumpAction.fadeIn(0.2);
    characterJumpAction.play();

    setTimeout(function() {
      characterGeometry.forEach(obj => {
        obj.scale.set(0.0, 0.0, 0.0);
      });
      headsetGeometry.forEach(obj => {
        obj.scale.set(0.0, 0.0, 0.0);
      });
      swordGeometry.forEach(obj => {
        obj.scale.set(0.0, 0.0, 0.0);
      });

      characterJumpAction.stop();
    }, 800);

    setTimeout(function() {
      let to = aboutCameraTarget;
      currentTarget = "about";
      animateCamera(to);
      fadeSkyColor(SKY_COLOR_DARK, GROUND_COLOR_DARK);
    }, 1000);

  }

  function arLinkMouseOver() {
    if (currentTarget != "ar") {
      phoneGeometry.forEach(obj => {
        outlineObjects.push(obj);
      });
      arLink.style.setProperty('color', 'rgb(255, 227, 100)');
      body.style.setProperty('cursor', 'pointer');
    }
  }

  function arLinkMouseOut() {
    outlineObjects.splice(0, outlineObjects.length);
    arLink.style.setProperty('color', 'rgb(191, 202, 247)');
    body.setAttribute('style','cursor: default;');
  }

  function arLinkClicked() {

    outlineObjects.splice(0, outlineObjects.length);

    let to = arCameraTarget;
    currentTarget = "ar";
    animateCamera(to);

  }

  function vrLinkMouseOver() {
    headsetGeometry.forEach(obj => {
      outlineObjects.push(obj);
    });
    vrLink.style.setProperty('color', 'rgb(255, 227, 100)');
    body.style.setProperty('cursor', 'pointer');
  }

  function vrLinkMouseOut() {
    outlineObjects.splice(0, outlineObjects.length);
    vrLink.style.setProperty('color', 'rgb(191, 202, 247)');
    body.setAttribute('style','cursor: default;');
  }

  function vrLinkClicked() {
    // VR Work //
  }

  function houdiniLinkMouseOver() {
    houdiniLink.style.setProperty('color', 'rgb(255, 227, 100)');
    body.style.setProperty('cursor', 'pointer');
  }

  function houdiniLinkMouseOut() {
    houdiniLink.style.setProperty('color', 'rgb(191, 202, 247)');
    body.style.setProperty('cursor', 'default');
  }

  function houdiniLinkClicked() {
    // Houdini Work //
  }

  function otherLinkMouseOver() {
    otherLink.style.setProperty('color', 'rgb(255, 227, 100)');
    body.style.setProperty('cursor', 'pointer');
  }

  function otherLinkMouseOut() {
    otherLink.style.setProperty('color', 'rgb(191, 202, 247)');
    body.style.setProperty('cursor', 'default');
  }

  function otherLinkClicked() {
    // Gallery //
    createTransition("out");
  }

  var swordHover = false;
  function swordMouseOver() {
    swordGeometry.forEach(obj => {
      outlineObjects.push(obj);
    });
    swordHover = true;
    body.style.setProperty('cursor', 'pointer');
  }

  function swordMouseOut() {
    outlineObjects.splice(0, outlineObjects.length);
    swordHover = false;
    body.style.setProperty('cursor', 'default');
  }

  function swordClicked() {

    outlineObjects.splice(0, outlineObjects.length);

    canInteract = false;

    characterIdleAction.fadeOut(0.1);
    jetSkiIdleAction.fadeOut(0.1);
    jetSkiIdleAction.reset();
    jetSkiIdleAction.fadeIn(0.1);
    characterStrikeAction.reset();
    characterStrikeAction.fadeIn(0.1);
    characterStrikeAction.play();

    setTimeout(function() {
      createSlash();
    }, 300);
    
    setTimeout( function() {
      canInteract = true;
      if (swordHover) {
        swordGeometry.forEach(obj => {
          outlineObjects.push(obj);
        });
      }
      jetSkiIdleAction.fadeOut(0.3);
      jetSkiIdleAction.reset();
      jetSkiIdleAction.fadeIn(0.3);
      characterIdleAction.reset();
      characterStrikeAction.fadeOut(0.3);
      characterIdleAction.fadeIn(0.3);
    }, 500);

  }

  /* Camera animation function */
  function animateCamera(to) {

    // Temporarily remove orbit control limits
    controls.minPolarAngle = 0.0;
    controls.maxPolarAngle = Math.PI;
    controls.minAzimuthAngle = -Math.PI;
    controls.maxAzimuthAngle = Math.PI;

    // Disable interaction
    canInteract = false;

    // Animate camera position
    const coords = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
    var toCoords = { x: to.position.x, y: to.position.y, z: to.position.z }
    if (currentTarget == "main") {
      toCoords = { x: toCoords.x + 20.0, y: toCoords.y + 5.0, z: toCoords.z  + 30.0 };
    }
    else if (currentTarget == "about") {
      toCoords = { x: toCoords.x, y: toCoords.y - 10.0, z: toCoords.z };
    }
    else if (currentTarget == "ar") {
      toCoords = { x: toCoords.x, y: toCoords.y + 1.0, z: toCoords.z - 3.0 }
    }
    new TWEEN.Tween(coords)
      .to(toCoords, 600)
      .onUpdate(() =>
        camera.position.set(coords.x, coords.y, coords.z)
      )
      .start();

    // Animate orbit control target
    const controlcoords = { x: controls.target.x, y: controls.target.y, z: controls.target.z };
    const toControlcoords = { x: to.position.x, y: to.position.y, z: to.position.z }
    new TWEEN.Tween(controlcoords)
    .to(toControlcoords, 600)
    .onUpdate(() =>
    controls.target.set(controlcoords.x, controlcoords.y, controlcoords.z)
    )
    .start()
    .onComplete(function() {
      setOrbitLimits();
      onCameraAnimationComplete();
    });

  }

  /* On camera animation completed function */
  function onCameraAnimationComplete() {

      showUI();

      canInteract = true;

      if (currentTarget == "about") { 

        jetSkiIdleAction.stop(); 
        characterJumpAction.stop();

      }

      else if (currentTarget == "ar") { 

        // Stop jetski and character animations
        jetSkiIdleAction.stop(); 
        characterIdleAction.stop(); 

        // Hide phone hitbox
        phoneHitBox.scale.set(0.0, 0.0, 0.0);

        // Hide character
        characterGeometry.forEach(obj => {
          obj.scale.set(0.0, 0.0, 0.0);
        });
        headsetGeometry.forEach(obj => {
          obj.scale.set(0.0, 0.0, 0.0);
        });
        swordGeometry.forEach(obj => {
          obj.scale.set(0.0, 0.0, 0.0);
        });

        // Play phone wave
        phoneScratchAction.stop();
        phoneWaveAction.reset();
        phoneWaveAction.play();
        
        setTimeout(function() {
          phoneWaveAction.fadeOut(0.3);
          phoneScratchAction.play();
          phoneScratchAction.fadeIn(0.3);
        }, 1000);

      }

  }

  /* Set new orbit control limits function */
  function setOrbitLimits() {
    if (currentTarget == "main") {
      controls.minPolarAngle = 1.0;
      controls.maxPolarAngle = 1.75;
      controls.minAzimuthAngle = -0.75;
      controls.maxAzimuthAngle = 0.75;
    }
    else if (currentTarget == "about") {
      controls.minPolarAngle = Math.PI;
      controls.maxPolarAngle = -Math.PI;
      controls.minAzimuthAngle = Math.PI;
      controls.maxAzimuthAngle = -Math.PI;
    }
    else if (currentTarget == "ar") {
      controls.minPolarAngle = 0.0;
      controls.maxPolarAngle = Math.PI / 2;
      controls.minAzimuthAngle = -Math.PI - 0.5;
      controls.maxAzimuthAngle = Math.PI + 0.5;
    }
  }

  /* Contextual UI function */
  function showUI() {
    if (currentTarget == "ar") {
      button.setAttribute('style','visibility: visible;');
    }
    else {
      button.setAttribute('style','visibility: hidden;');
    }
  }

  /* Speed up animation function */
  var speed = { speedMult: 1.0, timeMod: 0.0 };
  function speedUp(newSpeed, duration) {

    if (canInteract) {

      canInteract = false;

      // Lean animation
      characterIdleAction.fadeOut(0.5);
      characterLeanAction.reset();
      jetSkiIdleAction.fadeOut(0.5);
      jetSkiIdleAction.reset();
      jetSkiIdleAction.fadeIn(0.5);
      characterLeanAction.fadeIn(0.5);
      characterLeanAction.play();

      // Update time modifier
      new TWEEN.Tween(speed).to( {timeMod: speed.timeMod + 6500}, 2000 + duration).easing(TWEEN.Easing.Quadratic.InOut).start();

      // Update speed
      new TWEEN.Tween(speed).to( {speedMult: newSpeed}, 1000).start()
      .onComplete(function() {
          setTimeout(slowDown, duration);
      })

      function slowDown() {

        new TWEEN.Tween(speed).to( {speedMult: 1.0}, 1000).start()
        .onComplete( function() { 

          canInteract = true;

          characterLeanAction.fadeOut(0.5);
          characterIdleAction.reset();
          jetSkiIdleAction.fadeOut(0.5);
          jetSkiIdleAction.reset();
          jetSkiIdleAction.fadeIn(0.5);
          characterIdleAction.fadeIn(0.5);
          characterIdleAction.play();

        });

      }

    }
  }

  /* Update mouse tracking geometry */
  function mouseGeometryUpdate() {

    var mouse3dVector = new THREE.Vector3(mousePageX, mousePageY, 0.0);
    mouse3dVector.unproject(camera);
    mouse3dVector.sub(camera.position).normalize();
    var mouse3dDistance = -camera.position.z / mouse3dVector.z;
    var mouse3dPos = camera.position.clone().add(mouse3dVector.multiplyScalar(mouse3dDistance));

    mouseTracker3D.position.set(mouse3dPos.x, mouse3dPos.y, mouse3dPos.z);

    if (currentTarget == "ar") {

      let phoneEyeMoveSpeed = 0.005;
      let phoneEyeMaxDisplacementX = 0.01;
      let phoneEyeMinDisplacementX = -0.01;
      let phoneEyeMaxDisplacementY = 1.025;
      let phoneEyeMinDisplacementY = 1.005;

      let pupil0x = phonePupils[0].position.x - 0.005;
      let pupil0y = phonePupils[0].position.y - 0.99;

      let pupil1x = phonePupils[1].position.x + 0.005;
      let pupil1y = phonePupils[1].position.y - 0.99;

      mouse3dPos.x *= 0.005;
      mouse3dPos.y *= 0.005;

      let pupil0xDelta;
      if (mouse3dPos.x > pupil0x + 0.001 && phonePupils[0].position.x <= phoneEyeMaxDisplacementX) {
        pupil0xDelta =  Math.max(phoneEyeMoveSpeed * Math.abs(Math.abs(mouse3dPos.x) - Math.abs(pupil0x)), 0.00075); 
      }
      else if (mouse3dPos.x < pupil0x - 0.001 && phonePupils[0].position.x >= phoneEyeMinDisplacementX) { 
        pupil0xDelta = -1 * Math.max(phoneEyeMoveSpeed * Math.abs(Math.abs(mouse3dPos.x) - Math.abs(pupil0x)), 0.00075); 
      }
      else { pupil0xDelta = 0.0; }
      
      let pupil0yDelta;
      if (mouse3dPos.y > pupil0y + 0.001 && phonePupils[0].position.y <= phoneEyeMaxDisplacementY) { 
        pupil0yDelta =  Math.max(phoneEyeMoveSpeed * Math.abs(Math.abs(mouse3dPos.y) - Math.abs(pupil0y)), 0.00075); 
      }
      else if (mouse3dPos.y < pupil0y - 0.001 && phonePupils[0].position.y >= phoneEyeMinDisplacementY) { 
        pupil0yDelta = -1 *  Math.max(phoneEyeMoveSpeed * Math.abs(Math.abs(mouse3dPos.y) - Math.abs(pupil0y)), 0.00075); 
      }
      else { pupil0yDelta = 0.0; }

      let pupil1xDelta;
      if (mouse3dPos.x > pupil1x + 0.001 && phonePupils[1].position.x <= phoneEyeMaxDisplacementX) { 
        pupil1xDelta =  Math.max(phoneEyeMoveSpeed * Math.abs(Math.abs(mouse3dPos.x) - Math.abs(pupil1x)), 0.00075); 
      }
      else if (mouse3dPos.x < pupil1x - 0.001 && phonePupils[1].position.x >= phoneEyeMinDisplacementX) { 
        pupil1xDelta = -1 *  Math.max(phoneEyeMoveSpeed * Math.abs(Math.abs(mouse3dPos.x) - Math.abs(pupil1x)), 0.00075); 
      }
      else { pupil1xDelta = 0.0; }
      
      let pupil1yDelta;
      if (mouse3dPos.y > pupil1y + 0.001 && phonePupils[1].position.y <= phoneEyeMaxDisplacementY) { 
        pupil1yDelta =  Math.max(phoneEyeMoveSpeed * Math.abs(Math.abs(mouse3dPos.y) - Math.abs(pupil1y)), 0.00075); 
      }
      else if (mouse3dPos.y < pupil1y - 0.001 && phonePupils[1].position.y >= phoneEyeMinDisplacementY) { 
        pupil1yDelta = -1 * Math.max(phoneEyeMoveSpeed * Math.abs(Math.abs(mouse3dPos.y) - Math.abs(pupil1y)), 0.00075); 
      }
      else { pupil1yDelta = 0.0; }

      phonePupils[0].position.x += pupil0xDelta;
      phonePupils[0].position.y += pupil0yDelta;
      phonePupils[0].position.z = -1.11 + (pupil0y - 0.0225) * 0.5;

      phonePupils[1].position.x += pupil1xDelta;
      phonePupils[1].position.y += pupil1yDelta;
      phonePupils[1].position.z = -1.11 + (pupil1y - 0.0225) * 0.5;

    }

  }

  /* Scene render and animate */
  const clock = new THREE.Clock();

  function animate(time) {

    const getDeltaTime = clock.getDelta();
    
    var frame = requestAnimationFrame(animate);
    renderer.render(scene, camera);

    // Update orbit controls
    controls.update();

    // Update interaction manager
    interactionManager.update();

    // Update TWEEN animations
    TWEEN.update(time);
    
    // Update gltf animations
    if (loadingComplete) {
      jetSkiMixer.update(getDeltaTime * speed.speedMult);
    }

    // Update mouse tracked geometry
    mouseGeometryUpdate();

    // Update shader time
    uniforms.time.value = time + speed.timeMod;

    // Update outline pass
    compose.render(scene, camera);
    
  }

  animate(clock.getDelta());

}