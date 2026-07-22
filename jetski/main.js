import * as THREE from 'three';
import { EffectComposer } from 'https://unpkg.com/three@0.128.0/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'https://unpkg.com/three@0.128.0/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'https://unpkg.com/three@0.128.0/examples/jsm/postprocessing/ShaderPass.js';
import { OutlinePass } from 'https://unpkg.com/three@0.128.0/examples/jsm/postprocessing/OutlinePass.js';
import { FXAAShader } from 'https://unpkg.com/three@0.128.0/examples/jsm/shaders/FXAAShader.js';
import { RGBELoader } from 'https://unpkg.com/three@0.128.0/examples/jsm/loaders/RGBELoader.js';
import { OBJLoader } from 'https://unpkg.com/three@0.128.0/examples/jsm/loaders/OBJLoader.js';
import { BufferGeometryUtils } from 'https://unpkg.com/three@0.128.0/examples/jsm/utils/BufferGeometryUtils.js';
import { FBXLoader } from 'https://unpkg.com/three@0.128.0/examples/jsm/loaders/FBXLoader.js';
import Stats from 'https://unpkg.com/three@0.128.0/examples/jsm/libs/stats.module.js';

/* ==========================================
   WebGL & Layout Customization Config (`SCENE_CONFIG`)
   ========================================== */
const SCENE_CONFIG = {
  // ==========================================
  // 1. SITE & HTML LAYOUT AESTHETICS
  // ==========================================
  site: {
    backgroundColorTop: '#414d4f',          // Pre-loader & canvas top background color
    backgroundColorBottom: '#394034',       // Pre-loader & canvas bottom background color
    backgroundColor: '#414d4f',             // Single fallback background color
    hoverColorText: '#91bfff'               // Accent hover color for 2D HTML links & logos
  },

  // ==========================================
  // 2. CAMERA CONFIGURATION
  // ==========================================
  camera: {
    fov: 24,                                // Field of view in degrees
    near: 0.1,                              // Near clipping plane
    far: 100,                               // Far clipping plane
    desktop: {
      position: { x: 0, y: 16.0, z: -22.0 },
      lookAt: { x: 0, y: 0, z: -2.25 }
    },
    mobile: {
      position: { x: 0, y: 16.0, z: -22.0 },
      lookAt: { x: 0, y: 0, z: -2.25 }
    }
  },

  // ==========================================
  // 3. LIGHTING & ENVIRONMENT
  // ==========================================
  lights: {
    skyboxRotation: -6,                     // Rotation of environment map reflections around Y-axis in degrees
    ambient: {
      color: 0xffffff,                      // Ambient light color tint
      intensity: 3.0                        // Ambient light intensity
    },
    directional: {
      color: 0xffffff,                      // Main directional light color tint
      intensity: 2.6,                       // Directional light intensity
      position: { x: 5.0, y: 5.0, z: 5.0 }  // Light source 3D position
    }
  },

  // ==========================================
  // 4. SCREEN VIGNETTE POST-PROCESSING
  // ==========================================
  vignette: {
    enabled: true,                          // Master toggle for desktop vignette post-processing
    enabledMobile: false,                   // Toggle to enable/disable vignette in mobile context
    offset: 1.0,                            // Vignette inner radius (higher = wider bright center)
    darkness: 1.16                          // Vignette outer darkness strength (higher = darker corners)
  },

  // ==========================================
  // 5. INTERACTION & 3D OUTLINES
  // ==========================================
  interaction: {
    spinDuration: 1.5,                      // Duration of Y-axis scene spin on home logo click (seconds)
    spinZoom: 0.25,                         // Camera zoom-out multiplier during scene spin
    hoverColor3D: '#91bfff',                 // Color glow tint for hovered 3D objects
    outline: {
      edgeStrength: 3.0,                     // Intensity of glowing selection outlines (matches Question Box)
      edgeGlow: 1.0,                         // Glowing halo blur dissipation range (matches Question Box)
      edgeThickness: 2.0                     // Outline edge thickness in pixels (matches Question Box)
    }
  },

  // ==========================================
  // 6. PETRI DISH & RAINBOW OIL-SLICK SHADER
  // ==========================================
  plate: {
    enabled: true,                          // Toggle to enable/disable the glass dish
    scale: 1.0,                             // Model scale factor
    yPos: 0,                                // Vertical height offset
    color: [0.04, 0.05, 0.04, 0.5],         // [R, G, B, A] glass color tint
    glass: {
      refractionIntensity: 0.36,            // Environment map refraction strength
      ior: 1.0,                             // Index of refraction ratio (1.0 / IOR)
      reflectivity: 0.99,                   // Environment map reflection strength
      roughness: 0.3                        // Surface roughness
    },
    rainbow: {
      intensity: 0.06,                       // Glow strength of oil-slick rainbow shader
      scale: 0.2,                           // Band frequency (smaller = wider bands)
      angleFactor: 6.6,                     // Fresnel angle color shift amount
      shimmer: 0.0,                         // Time-based color shifting amplitude
      shimmerSpeed: 0.0,                    // Speed of color shimmer
      centerSmoothness: 0.0,                // Center point softness
      centerOffset: [0.0, 0.0],             // [X, Z] offset of rainbow center
      fresnelMultiply: 0.99,                // Fresnel visibility ratio (1.0 = visible at edges only)
      paletteA: [0.5, 0.5, 0.5],
      paletteB: [0.5, 0.5, 0.5],
      paletteC: [1.0, 1.0, 1.0],
      paletteD: [0.0, 0.33, 0.67]           // Phase colors for rainbow palette
    }
  },

  // ==========================================
  // 7. GEL LAYER
  // ==========================================
  gel: {
    enabled: true,                          // Toggle to enable/disable the Gel agar layer
    glass: {
      color: '#0c0f16',                      // Gel color tint
      transmission: 0.0,                     // Physical transparency factor (0.0 to disable scene texture copies)
      opacity: 0.35,                         // Material alpha transparency (lower = more see-through)
      ior: 1.4,                              // Index of refraction
      roughness: 0.3,                        // Low roughness = sharp, mirror-like reflections
      reflectivity: 1.0,                      // Maximum reflection brightness
      clearcoat: 0.0,                        // Clearcoat layer disabled for PBR shader optimization
      clearcoatRoughness: 0.0
    }
  },

  // ==========================================
  // 8. INTERACTIVE QUESTION BOX
  // ==========================================
  questionBox: {
    enabled: true,                          // Toggle to enable/disable Question Box
    desktop: {
      position: { x: 0.0, y: 1.3, z: 0.0 } // Desktop 3D position
    },
    mobile: {
      position: { x: 0.0, y: 1.3, z: -2.0 } // Mobile 3D position (closer, slightly lower)
    },
    position: { x: 0.0, y: 1.3, z: 0.0 },   // Fallback 3D position
    scale: 0.005,                           // Model scale factor
    hoverSpinMultiplier: 2.0,               // Spin speed multiplier when hovered
    glass: {
      color: 0xffffff,                      // Glass shell color
      transmission: 0.8,                     // Transmission transparency
      roughness: 0.16,
      ior: 1.5,
      opacity: 1.0,
      reflectivity: 1.0,
      clearcoat: 0.0,
      clearcoatRoughness: 0.0
    },
    metal: {
      color: 0xffffff,                      // Metal core color
      metalness: 0.96,                      // Metalness factor
      roughness: 0.0,
      normalScale: 1.0,                     // Normal map bumpiness strength
      colorShiftSpeed: 0.25                 // Spectrum color cycling speed (0 to disable)
    },
    rotationSpeedX: 0.01,                   // Continuous X-axis rotation speed
    rotationSpeedY: 0.016,                  // Continuous Y-axis rotation speed
    billboardRotationX: 0,
    billboardRotationY: -90,
    billboardRotationZ: 0,
    planeScale: 82.0,                       // Scale of inner question mark graphic
    floatFrequency: 0.003,                  // Bobbing float frequency
    floatAmplitude: 0.1,                    // Bobbing float amplitude
    shadowY: 0.33,                          // Height of shadow plane
    shadowScale: 1.6,                       // Shadow scale factor
    hover: {
      soundEnabled: true,                    // Enable hover audio effects
      hoverInVolume: 0.5,                    // Volume for aboutHover.ogg (0.0 to 1.0)
      hoverOutVolume: 0.5                    // Volume for aboutOut.ogg (0.0 to 1.0)
    },
    shatter: {
      enabled: true,                         // Enable click-to-shatter explosion
      shardCount: 30,                        // Number of 3D glass shards
      sparkleCount: 6,                      // Number of billboard sparkle quads
      sparkleColors: ['#28a200', '#ffa527', '#3150ff'], // Sparkle color palette
      minShardScale: 0.3,                    // Min size of shards
      maxShardScale: 0.6,                    // Max size of shards
      minSparkleScale: 1.3,                  // Min size of sparkles
      maxSparkleScale: 2.0,                  // Max size of sparkles
      explosionSpeed: 3.0,                   // Outward shard velocity
      sparkleSpeed: 1.5,                     // Outward sparkle velocity
      fadeSpeed: 2.5,                        // Fade-out decay rate
      soundEnabled: true,                    // Enable shatter audio effect
      volume: 0.9,                           // Shatter audio volume (0.0 to 1.0)
      growVolume: 0.4,                       // Regrow audio volume (0.0 to 1.0)
      respawnDelay: 200,                    // Delay before grow-back animation (ms)
      respawnDuration: 800                   // Duration of grow-back animation (ms)
    }
  },

  // ==========================================
  // 9. HOUDINI 3D RUBBER TOY
  // ==========================================
  houdini3D: {
    enabled: true,                          // Toggle to enable/disable Houdini Toy
    scale: 1.0,                             // Scale factor
    rotation: { x: 0, y: 226, z: 0 },       // Initial rotation in degrees
    shadowY: 0.33,                          // Shadow plane height
    shadowScale: 2.0,                       // Shadow plane scale factor
    hoverYOffset: 0.15,                     // Vertical lift offset when hovered
    hover: {
      soundEnabled: true,                    // Enable hover audio effects
      hoverInVolume: 0.16,                    // Volume for houdiniHover.ogg (0.0 to 1.0)
      hoverOutVolume: 0.2                    // Volume for houdiniOut.ogg (0.0 to 1.0)
    },
    material: {
      color: 0xcccccc,                      // Diffuse color tint
      specular: 0x222222,                   // Specular highlight tint
      shininess: 30                         // Specular shininess
    },
    sway: {
      enabled: true,                         // Toggle side-to-side back-and-forth rotation
      pivotOffset: { x: 0.0, y: 0.0, z: 0.0 }, // Pivot point offset relative to base position [X, Y, Z]
      x: {
        enabled: true,                       // Toggle local X-axis sway (nodding)
        amount: 7.0,                         // Maximum sway rotation angle in degrees (+/- deg)
        speed: 1.0,                          // Sway oscillation speed factor
        phase: 0.0                           // Phase offset in radians
      },
      y: {
        enabled: false,                       // Toggle local Y-axis sway (swivel)
        amount: 3.0,                        // Maximum sway rotation angle in degrees (+/- deg)
        speed: 1.5,                          // Sway oscillation speed factor
        phase: 0.0
      },
      z: {
        enabled: false,                       // Toggle local Z-axis sway (side tilt)
        amount: 3.0,                         // Maximum sway rotation angle in degrees (+/- deg)
        speed: 1.0,                          // Sway oscillation speed factor
        phase: 0.0
      }
    },
    desktop: {
      position: { x: 3.5, y: 0.6, z: -4.5 }  // Desktop 3D position
    },
    mobile: {
      position: { x: 1.3, y: 0.6, z: -6.0 }  // Mobile 3D position
    },
    pop: {
      enabled: true,                         // Enable click-to-pop morph animation
      popDuration: 450,                      // Duration of pop morph & mesh fade out (ms)
      popMultiplier: 2.2,                    // Morph shape key influence multiplier
      easing: 'easeOutCubic',                // Easing curve: 'easeOutExpo' | 'easeOutQuart' | 'easeOutCubic' | 'easeOutBack' | 'linear'
      sparkleCount: 12,                      // Number of pop sparkles
      minSparkleScale: 1.0,                  // Min sparkle scale
      maxSparkleScale: 2.0,                  // Max sparkle scale
      sparkleSpeed: 3.0,                     // Outward sparkle velocity
      sparkleColors: ['#528ce4', '#153d8d', '#5d74d4'], // Radiant pop sparkle palette
      soundEnabled: true,                    // Enable pop audio effect
      volume: 0.2,                           // Pop audio volume (0.0 to 1.0)
      growVolume: 0.4,                       // Regrow audio volume (0.0 to 1.0)
      respawnDelay: 200,                    // Delay before growing back (ms)
      respawnDuration: 800                   // Regrow animation duration (ms)
    }
  },

  // ==========================================
  // 10. WEB 3D GLOBE
  // ==========================================
  web3D: {
    enabled: true,                          // Toggle to enable/disable Web 3D Globe
    scale: 0.0062,                             // Model scale factor
    rotation: { x: 0, y: 0, z: 0 },        // Initial base rotation in degrees
    rotationAxis: 'z',                     // Globe rotation axis: 'x' | 'y' | 'z' or vector object { x: 0, y: 1, z: 0 }
    rotationSpeedY: 0.01,                 // Continuous rotation speed for the globe
    floatFrequency: 0.001,                 // Bobbing float frequency
    floatAmplitude: 0.05,                   // Bobbing float amplitude
    hoverScale: 1.1,                      // Scale multiplier when hovered
    hoverSpinMultiplier: 2.0,              // Spin speed multiplier when hovered
    hoverYOffset: 0.0,                    // Vertical lift offset when hovered
    moon: {
      rotationAxis: 'z',                    // Moon rotation axis: 'x' | 'y' | 'z' or vector object { x: 0, y: 1, z: 0 }
      rotationSpeed: -0.01                  // Moon rotation speed
    },
    signal: {
      enabled: true,                         // Toggle signal ring cyclic animation
      interval: 530,                         // Base speed per step in ms (idle: ~0.66x speed)
      hoverSpeedMultiplier: 3.5,             // Speed multiplier when hovered (faster)
      clickSpeedMultiplier: 12.0,            // Speed multiplier on click burst (really fast)
      billboard: true,                       // Billboard signal meshes to always face camera
      billboardRotationX: 0,                 // Optional rotation offset X (deg)
      billboardRotationY: 0,                 // Optional rotation offset Y (deg)
      billboardRotationZ: 0                  // Optional rotation offset Z (deg)
    },
    desktop: {
      position: { x: -4.0, y: 1.2, z: 1.5 } // Desktop 3D position
    },
    mobile: {
      position: { x: -2.0, y: 1.2, z: 2.0 } // Mobile 3D position
    },
    shadowY: 0.33,                          // Shadow plane height
    shadowScale: 1.4,                       // Shadow plane scale factor
    materials: {
      grid: {
        color: 0x000000,                    // Diffuse color tint
        emissive: 0xffffff,                  // Emissive tint
        emissiveIntensity: 1.2,             // Emissive intensity
        emissiveMap: './graphics/grid.png', // Emissive map texture path
        roughness: 0.3,
        metalness: 0.1
      },
      antenna: {
        color: 0xcccccc,                    // Diffuse color tint for antenna
        roughness: 0.2,
        metalness: 0.9
      },
      moon: {
        color: 0x000000,                    // Diffuse color tint for moon
        emissive: 0x0b2e7f,                  // Emissive tint for moon
        emissiveIntensity: 1.0,             // Emissive intensity for moon
        roughness: 0.6,
        metalness: 0.0
      },
      signal: {
        color: 0x000000,                    // Diffuse color tint for signal rings
        emissive: 0xcddcff,                  // Emissive tint for signal rings
        emissiveIntensity: 1.0,             // Emissive intensity for signal rings
        roughness: 0.3,
        metalness: 0.1
      }
    },
    hover: {
      soundEnabled: true,                    // Enable hover audio effects
      hoverInVolume: 0.16,                    // Volume for webHover.ogg (0.0 to 1.0)
      hoverOutVolume: 0.16                    // Volume for webOut.ogg (0.0 to 1.0)
    },
    clickAnimation: {
      enabled: true,                         // Enable click animation
      soundEnabled: true,                    // Enable click audio effect (ring.ogg)
      volume: 0.4,                           // Click audio volume (0.0 to 1.0)
      duration: 1000,                        // Duration of emissive flash & god rays (ms)
      clickSpinMultiplier: 16.0,             // Fast spin speed multiplier on click (slowly returns to normal)
      emissiveFlashIntensity: 3.5,           // Peak emissive intensity for grid map during flash
      moonEmissiveFlashIntensity: 1.5,       // Peak emissive intensity for moon during flash
      godRayCount: 26,                       // Number of god ray light beams
      minRayLength: 0.5,                     // Min length of god ray beam
      maxRayLength: 1.0,                     // Max length of god ray beam
      minRayWidth: 0.1,                     // Min width of god ray beam
      maxRayWidth: 0.2,                     // Max width of god ray beam
      raySpeed: 2.0,                         // Outward expansion speed of rays
      rayColors: ['#ffffff', '#21ffd8', '#91bfff', '#70aaff'], // Radiant god ray beam colors
      respawnDelay: 200,                       // Delay before shrink-back transition (ms)
      respawnDuration: 1000                   // Duration of shrink-back transition (ms)
    }
  },

  // ==========================================
  // 11. CRAWLING LINKEDIN 3D BUG
  // ==========================================
  linkedin3D: {
    enabled: true,                          // Toggle to enable/disable LinkedIn Bug
    inspectEnabled: true,                   // Enable pause-and-inspect stance animations
    avoidanceEnabled: true,                 // Enable obstacle & boundary avoidance
    desktop: {
      position: { x: -3.6, y: 0.63, z: -4.6 }, // Starting 3D position on gel (Desktop)
      walkRadiusX: 9.0,                      // Max walk bound radius X (Desktop)
      walkRadiusZ: 9.0                       // Max walk bound radius Z (Desktop)
    },
    mobile: {
      position: { x: -2.0, y: 0.63, z: -6.0 }, // Starting 3D position on gel (Mobile)
      walkRadiusX: 3.6,                      // Max walk bound radius X (Mobile)
      walkRadiusZ: 9.0                       // Max walk bound radius Z (Mobile)
    },
    position: { x: -3.6, y: 0.63, z: -4.6 },   // Fallback starting position
    scale: 0.00166,                         // Model scale
    walkRadiusX: 9.0,                       // Fallback max walk bound radius X
    walkRadiusZ: 9.0,                       // Fallback max walk bound radius Z
    minObstacleDist: 1.0,                   // Minimum avoidance distance from obstacles
    speed: 0.005,                           // Walk speed per frame
    hoverDelay: 500,                        // Wait duration after hover ends (ms)
    showDebug: false,                       // Toggle red debug vector guides
    shadowY: 0.35,                          // Shadow plane height
    fallRotationSpeedThreshold: 2.0         // Rotation speed threshold to trigger bug fall
  },

  // ==========================================
  // 12. 3D MENU LAYOUT POSITIONS
  // ==========================================
  placeholderCubes: {
    enabled: true,                          // Toggle 3D menu navigation layout guides
    material: {
      color: 0x181024,
      roughness: 0.15,
      metalness: 0.1,
      transmission: 0.0,
      opacity: 0.85,
      transparent: true,
      clearcoat: 0.0,
      clearcoatRoughness: 0.0
    },
    layout: {
      desktop: {
        useIndividual: true,
        spacing: 2.2,
        individual: {
          about: { x: -4.4, y: 0, z: 10 },
          ar: { x: -2.2, y: 0, z: 10 },
          games: { x: 0, y: 0, z: 10 },
          web: { x: 2.2, y: 0, z: 10 },
          houdini: { x: 4.4, y: 0, z: 10 }
        }
      },
      mobile: {
        useIndividual: true,
        spacing: 1.8,
        individual: {
          about: { x: -3.6, y: 0, z: 0 },
          ar: { x: -1.8, y: 0, z: 0 },
          games: { x: 0, y: 0, z: 0 },
          web: { x: 1.8, y: 0, z: 0 },
          houdini: { x: 3.6, y: 0, z: 0 }
        }
      }
    },
    items: [
      { name: 'ar', label: 'AR', color: '#ff21a6' },
      { name: 'games', label: 'Games', color: '#2175ff' }
    ]
  },

  // ==========================================
  // 12. POST-PROCESSING RENDER STYLES & RETRO SHADERS
  // ==========================================
  renderStyles: {
    // Current mode index in activeModes array (managed automatically on logo click)
    currentModeIndex: 0,

    // ACTIVE MODES PIPELINE (Reorder, comment out, or remove modes to customize logo click sequence!)
    activeModes: [
      'default',    // 0: Standard High-Fidelity 3D Rendering (Clean)
      'oneBit',     // 1: 1-Bit Monochrome Bayer Dithering
      'pixelated',  // 2: Retro Arcade Pixelation with Scanlines
      'blueprint',  // 3: CAD Architectural Cobalt & Cyan Blueprint
      'multiBit',   // 4: Multi-Bit Color Bayer Dithering
      'gameBoy',    // 5: Classic 1989 Game Boy 4-Color LCD Filter
      'ascii',      // 6: Matrix Cyberpunk ASCII Character Grid
    ],

    // LOGO IMAGES MAP PER RENDER STYLE MODE
    logoImages: {
      'default': './graphics/thumbnail_ng_logo.png',
      'multiBit': './graphics/thumbnail_ng_logo_dithered_00.png',
      'oneBit': './graphics/thumbnail_ng_logo_dithered_01.png',
      'pixelated': './graphics/thumbnail_ng_logo_pixelated.png',
      'gameBoy': './graphics/thumbnail_ng_logo_gb.png',
      'blueprint': './graphics/thumbnail_ng_logo_outline.png',
      'ascii': './graphics/thumbnail_ng_logo_ascii.png'
    },

    // SOUND EFFECTS MAP PER RENDER STYLE MODE
    modeSounds: {
      'default': { src: 'sound/rm_wind.ogg', volume: 0.5 },
      'multiBit': { src: 'sound/rm_lazer.ogg', volume: 0.2 },
      'oneBit': { src: 'sound/rm_123.ogg', volume: 0.23 },
      'pixelated': { src: 'sound/rm_pixelate.ogg', volume: 0.26 },
      'gameBoy': { src: 'sound/rm_gameboy.ogg', volume: 0.23 },
      'blueprint': { src: 'sound/rm_bubble.ogg', volume: 0.9 },
      'ascii': { src: 'sound/rm_tone.ogg', volume: 0.2 }
    },

    // Mode-specific configuration parameters

    default: {
      textColor: '#ffffff',          // White rest color for text & logos
      hoverColor: '#91bfff',         // Default electric cyan/blue hover color
      soundSrc: '',                  // Sound file path for this mode (e.g. 'sound/rm_default.ogg')
      soundVolume: 0.8               // Transition sound volume (0.0 to 1.0)
    },

    multiBit: {
      colorLevels: 4.0,             // Color quantize levels
      pixelSize: 2.0,               // Pixelation block scale
      ditherStrength: 0.25,         // Bayer dither matrix strength
      textColor: '#ffffff',          // White rest color for text & logos
      hoverColor: '#aaaaff',         // Retro vibrant pink/magenta hover color
      soundSrc: '',                  // Sound file path (e.g. 'sound/rm_multibit.ogg')
      soundVolume: 0.8               // Transition sound volume (0.0 to 1.0)
    },

    oneBit: {
      darkColor: '#333319',         // Palette shadow color
      lightColor: '#e5ffff',        // Palette highlight color
      pixelSize: 2.0,               // Pixelation block scale
      ditherStrength: 0.66,         // Bayer dither matrix strength
      textColor: '#ffffff',          // Bright monochrome rest color
      hoverColor: '#ffffff',         // Pure white hover color
      soundSrc: '',                  // Sound file path (e.g. 'sound/rm_onebit.ogg')
      soundVolume: 0.8,              // Transition sound volume (0.0 to 1.0)

      // Mode-specific gel material override
      gelMaterialOverride: {
        override: true,            // Enable gel material override
        type: 'unlit',             // Material type: 'unlit' (MeshBasicMaterial) or 'lit' (MeshStandardMaterial)
        color: '#282828',          // Flat unlit color
        roughness: 1.0,
        metalness: 0.0
      }
    },

    pixelated: {
      pixelSize: 8.0,               // Pixelation block size in screen pixels
      colorLevels: 16.0,            // Color quantization step count
      scanlineIntensity: 0.08,      // CRT scanline overlay opacity
      textColor: '#ffffff',          // White rest color
      hoverColor: '#91bfff',         // Warm arcade gold/orange hover color
      soundSrc: '',                  // Sound file path (e.g. 'sound/rm_pixelated.ogg')
      soundVolume: 0.8,              // Transition sound volume (0.0 to 1.0)

      // Mode-specific gel material override
      gelMaterialOverride: {
        override: true,            // Enable gel material override
        type: 'unlit',             // Material type: 'unlit' or 'lit'
        color: '#4e4e4e',
        roughness: 1.0,
        metalness: 0.0
      }
    },

    gameBoy: {
      pixelSize: 2.0,               // Pixelation scale
      hideDish: false,              // Legacy toggle (replaced by dishMaterialOverride)
      hideGel: false,               // Legacy toggle (replaced by gelMaterialOverride)
      c0: '#0f380f',                // 1989 Game Boy darkest olive green
      c1: '#306230',                // Dark olive green
      c2: '#8bac0f',                // Light olive green
      c3: '#adcd1e',                // Lightest olive green
      textColor: '#ffffff',          // Classic 1989 Game Boy LCD light olive green rest color
      hoverColor: '#adcd1e',         // Bright 1989 Game Boy LCD olive green hover color
      soundSrc: 'sound/rm_gameboy.ogg', // Sound file path for Game Boy mode
      soundVolume: 0.8,              // Transition sound volume (0.0 to 1.0)

      // Mode-specific dish material override
      dishMaterialOverride: {
        override: false,           // Enable dish material override
        type: 'unlit',             // 'unlit' or 'lit'
        color: '#b3b3b3',
        roughness: 0.5,
        metalness: 0.1
      },

      // Mode-specific gel material override
      gelMaterialOverride: {
        override: true,            // Enable gel material override
        type: 'unlit',             // 'unlit' or 'lit'
        color: '#434343',
        roughness: 0.4,
        metalness: 0.1
      }
    },

    blueprint: {
      bgColor: '#001b3a',           // Deep cobalt blue background color
      lineColor: '#badaff',          // Bright cyan blueprint wireframe line color
      gridScale: 0.0,              // Blueprint grid paper scale (0 to disable)
      textColor: '#ffffff',          // Soft CAD blueprint blue rest color
      hoverColor: '#badaff',         // Bright cyan CAD wireframe line hover color
      soundSrc: '',                  // Sound file path (e.g. 'sound/rm_blueprint.ogg')
      soundVolume: 0.8               // Transition sound volume (0.0 to 1.0)
    },

    ascii: {
      cellSize: 6.0,                // Character cell size in screen pixels
      colorLevels: 256.0,             // Luminance quantization step count
      brightness: 1.9,              // Overall scene brightness multiplier
      contrast: 1.2,                // Scene contrast multiplier (high-contrast shadows & highlights)
      characterWeight: 1.4,         // Glyph stroke thickness & size multiplier
      disableVignette: false,        // Toggle to disable vignette pass in ASCII mode
      hideShadows: false,            // Toggle to hide contact shadow planes in ASCII mode
      useSolidColor: false,          // Toggle to render 100% uniform solid color characters
      backgroundColor: '#07070b',   // Solid background color override (disables background gradient)
      debugRawScene: false,         // Debug toggle: true = shows pre-filtered 3D scene, false = ASCII filter
      greenTint: '#c3ffc3',          // Matrix terminal radiant green tint
      textColor: '#ffffff',          // Matrix terminal green rest color
      hoverColor: '#c3ffc3',         // Matrix terminal radiant green hover color
      soundSrc: '',                  // Sound file path (e.g. 'sound/rm_ascii.ogg')
      soundVolume: 0.8,              // Transition sound volume (0.0 to 1.0)

      // Mode-specific gel material override
      gelMaterialOverride: {
        override: true,            // Enable gel material override
        type: 'unlit',             // Material type: 'unlit' or 'lit'
        color: '#373737'
      }
    }
  },

  // ==========================================
  // 13. THREE.JS FPS PERFORMANCE COUNTER (TEMPORARY)
  // ==========================================
  fpsCounter: {
    enabled: true,                          // Toggle FPS counter display (set to false to hide)
    panel: 0                                // 0: FPS, 1: MS frame time, 2: MB memory
  }
};

/* Initial settings */

// Logo
const noahLogoSrc = './graphics/thumbnail_ng_logo.png';
document.getElementById("logo").href = noahLogoSrc;

function applyMaskToElement(el, src) {
  if (!el) return;
  el.style.webkitMaskImage = `url("${src}")`;
  el.style.maskImage = `url("${src}")`;
  el.style.webkitMaskSize = 'contain';
  el.style.maskSize = 'contain';
  el.style.webkitMaskRepeat = 'no-repeat';
  el.style.maskRepeat = 'no-repeat';
  el.style.webkitMaskPosition = 'center';
  el.style.maskPosition = 'center';
  el.style.backgroundColor = 'currentColor';
}

const logoEl = document.getElementById("logolink");
applyMaskToElement(logoEl, noahLogoSrc);

// Preload all render mode NG logo images into browser memory cache so mode transitions are instant with zero flicker
const preloadedLogoImages = {};
function preloadLogoImages() {
  if (SCENE_CONFIG && SCENE_CONFIG.renderStyles && SCENE_CONFIG.renderStyles.logoImages) {
    Object.values(SCENE_CONFIG.renderStyles.logoImages).forEach((src) => {
      if (src && !preloadedLogoImages[src]) {
        const img = new Image();
        img.src = src;
        preloadedLogoImages[src] = img;
      }
    });
  }
}
preloadLogoImages();

document.getElementById("title").innerHTML = 'Noah Gunther | Portfolio';

// Main nav links
const mainNavLinksContents = '<div id="houdini" class="link" style="pointer-events: auto;">Houdini</div> <div id="web" class="link" style="pointer-events: auto;">Web</div> <div id="games" class="link" style="pointer-events: auto;">Games</div> <div id="ar" class="link" style="pointer-events: auto;">AR</div> <div id="about" class="link" style="pointer-events: auto;">About</div>';
document.getElementById("mainnavlinks").innerHTML = mainNavLinksContents;

// Mobile nav links
const mobileNavLinksContents = '<div class="mobilemenuwrapper"><div class="mobilelinkwrapper"><div id="aboutmobile" class="mobilelink">About</div></div> <div class="mobilelinkwrapper"><div id="armobile" class="mobilelink">AR</div></div> <div class="mobilelinkwrapper"><div id="gamesmobile" class="mobilelink">Games</div></div> <div class="mobilelinkwrapper"><div id="webmobile" class="mobilelink">Web</div></div> <div class="mobilelinkwrapper"><div id="houdinimobile" class="mobilelink">Houdini</div></div> <div class="mobilelinkwrapper" style="margin-top: 50px;"><a id="linkedin-mobile" href="https://www.linkedin.com/in/noah-gunther-3128bb185/" target="_blank" class="mobilelink" style="display: block; width: 32px; height: 32px; padding: 0; border: none; margin: 0 auto;"><div id="linkedin-mobile-icon" class="logo-tint-mask" style="-webkit-mask-image: url(\'graphics/li_logo_white.png\'); mask-image: url(\'graphics/li_logo_white.png\'); width: 100%; height: 100%;"></div></a></div></div>';
document.getElementById("mobilenavlinks").innerHTML = mobileNavLinksContents;

// Plain text icon
const plainTextIconSrc = './graphics/plaintexticon.png';

// Phone UI background videos
const alienAttackPreviewUrl = './meta_ar_captures/AlienAttack.mp4';
const friendsSpacewalkPreviewUrl = './meta_ar_captures/FriendsSpacewalk.mp4';

/* Get browser and os */
var browserId = 'unknown';
var osId = 'unknown';
function getBrowser() {
  const ua = navigator.userAgent.toLowerCase();
  if ((ua.indexOf("opera") || navigator.userAgent.indexOf('OPR')) != -1) {
    browserId = 'opera';
  } else if (ua.indexOf("edg") != -1) {
    browserId = 'edge';
  } else if (ua.indexOf("chrome") != -1) {
    browserId = 'chrome';
  } else if (ua.indexOf("safari") != -1) {
    browserId = 'safari';
  } else if (ua.indexOf("firefox") != -1) {
    browserId = 'firefox';
  } else if ((ua.indexOf("msie") != -1) || (!!document.documentMode == true)) {
    browserId = 'ie';
  }

  if (ua.indexOf("windows") != -1) {
    osId = 'windows';
  } else if (ua.indexOf("mac") != -1) {
    osId = 'osx';
  } else if (ua.indexOf("linux") != -1) {
    osId = 'linux';
  } else if (ua.indexOf("android") != -1) {
    osId = 'android';
  }
}
getBrowser();

/* Animation timeout helper */
function requestTimeout(callback, delay) {
  var dateNow = Date.now, requestAnimation = window.requestAnimationFrame, start = dateNow(), stop,
  timeoutFunc = function() {
    dateNow() - start < delay ? stop || requestAnimation(timeoutFunc) : callback()
  };
  requestAnimation(timeoutFunc);
  return {
    clear: function() { stop = 1 }
  }
}

/* Global State Variables */
var currentTarget = "main"; // "main", "about", "ar"
var canInteract = false;

/* Start scene when window loaded */
window.addEventListener("load", init, false);

/* Init Function */
function init() {
  const isMobileInitial = window.innerWidth <= window.innerHeight;

  // ==========================================
  // 1. DOM Elements Declarations
  // ==========================================
  const body = document.getElementById('body');

  // Set custom hover color CSS variable on startup if configured on documentElement (:root)
  if (SCENE_CONFIG.interaction && SCENE_CONFIG.site.hoverColorText) {
    document.documentElement.style.setProperty('--hover-color', SCENE_CONFIG.site.hoverColorText);
  }
  const loadingDiv = document.getElementById('loading');
  const canvasEl = document.getElementById('bg');

  if (SCENE_CONFIG.site.backgroundColorTop && SCENE_CONFIG.site.backgroundColorBottom) {
    const grad = `linear-gradient(to bottom, ${SCENE_CONFIG.site.backgroundColorTop}, ${SCENE_CONFIG.site.backgroundColorBottom})`;
    if (loadingDiv) {
      loadingDiv.style.background = grad;
    }
    if (canvasEl) {
      canvasEl.style.background = grad;
    }
    document.body.style.background = 'transparent';
  } else {
    if (loadingDiv) {
      loadingDiv.style.backgroundColor = SCENE_CONFIG.site.backgroundColor;
    }
    if (canvasEl) {
      canvasEl.style.backgroundColor = SCENE_CONFIG.site.backgroundColor;
    }
  }
  // Loading screen always uses the dark panel color regardless of scene background
  if (loadingDiv) {
    loadingDiv.style.background = 'rgb(10, 14, 18)';
  }

  // Dot animation: cycle Loading. → Loading.. → Loading... → repeat
  // Uses opacity (compositor-safe) so it stays smooth during heavy JS loading.
  const loadingDots = loadingDiv ? Array.from(loadingDiv.querySelectorAll('.loading-dot')) : [];
  let dotStep = 0;
  let dotInterval = null;
  if (loadingDots.length > 0) {
    dotInterval = setInterval(() => {
      dotStep = (dotStep % loadingDots.length) + 1;
      if (dotStep > loadingDots.length) dotStep = 1;
      loadingDots.forEach((dot, i) => {
        // Active dots: bright white. Inactive: revert to CSS dim gray.
        dot.style.color = i < dotStep ? 'rgba(255,255,255,0.9)' : '';
      });
    }, 180);
  }



  const mainNavLinks = document.getElementById("mainnavlinks");
  const homeLink = document.getElementById("home");
  const aboutLink = document.getElementById("about");
  const arLink = document.getElementById("ar");
  const gamesLink = document.getElementById("games");
  const webLink = document.getElementById("web");
  const houdiniLink = document.getElementById("houdini");

  const mobileNavMenu = document.getElementById("mobilenavmenu");
  const aboutLinkMobile = document.getElementById("aboutmobile");
  const arLinkMobile = document.getElementById("armobile");
  const gamesLinkMobile = document.getElementById("gamesmobile");
  const webLinkMobile = document.getElementById("webmobile");
  const houdiniLinkMobile = document.getElementById("houdinimobile");

  const mobileNavLinksButton = document.getElementById("mobilenavlinksbutton");
  const mobileNavLinksButtonTop = document.getElementById("mobilenavlinksbuttontop");
  const mobileNavLinksButtonMiddle = document.getElementById("mobilenavlinksbuttonmiddle");

  const linkedinDesktop = document.getElementById("linkedin-desktop");
  const linkedinMobile = document.getElementById("linkedin-mobile");

  // Lookup map for syncing 3D hovers back to text links
  const linkElementsMap = {
    about: { desktop: aboutLink, mobile: aboutLinkMobile },
    ar: { desktop: arLink, mobile: arLinkMobile },
    games: { desktop: gamesLink, mobile: gamesLinkMobile },
    web: { desktop: webLink, mobile: webLinkMobile },
    houdini: { desktop: houdiniLink, mobile: houdiniLinkMobile },
    linkedin: { desktop: linkedinDesktop, mobile: linkedinMobile }
  };
  const mobileNavLinksButtonBottom = document.getElementById("mobilenavlinksbuttonbottom");

  const phoneScreenPanel = document.getElementById("phonescreen");
  const phoneScreenHeader = document.getElementById("mobilearprojectsheader");
  const phoneScreenScrollWrapper = document.getElementById("mobilearscrollwrapper");
  const phoneScreenTray = document.getElementById("mobileartray");
  const phoneScreenInfoButton = document.getElementById("mobilearinfobutton");
  const phoneScreenClock = document.getElementById("mobilearprojectsheaderclock");

  const phoneScreenLoading = [
    document.getElementById("mobilearloading0"),
    document.getElementById("mobilearloading1"),
    document.getElementById("mobilearloading2")
  ];
  const arLoading = document.getElementById("mobilearloading");

  const arInfoPanelParent = document.getElementById("arinfopanel");
  const arInfoPanel = document.getElementById("arinfopanelwrapper");
  const arInfoPanelBackgroundBlur = document.getElementById("arinfopanelbackgroundblur");
  const arInfoPanelIcon = document.getElementById("arinfopanelicon");
  const arInfoPanelCloseButton = document.getElementById("arinfopanelclosebuttonwrapper");
  const arInfoPanelMobileButtons = document.getElementById("arinfopanelmobilebuttonswrapper");
  const arInfoPanelText = document.getElementById("arinfopaneltextwrapper");
  const arInfoPanelSubtitle = document.getElementById("arinfopanelsubtitle");

  const arInfoPanelSubject = document.getElementById('arinfopanelsubject');
  const arInfoPanelTitle = document.getElementById('arinfopaneltitle');
  const arInfoPanelContent = document.getElementById('arinfopanelcontent');

  const leftArrow = document.getElementById('leftarrow');
  const leftArrowFront = document.getElementById('leftarrowfront');

  const aboutMePanel = document.getElementById("aboutmepanel");
  const downArrow = document.getElementById('downarrow');
  const downArrowFront = document.getElementById('downarrowfront');

  if (aboutMePanel) {
    aboutMePanel.style.visibility = 'hidden';
  }
  if (downArrow) {
    downArrow.style.visibility = 'hidden';
  }

  const aboutOverlay = document.createElement('div');
  const aboutBlur = document.createElement('div');
  const aboutPanel = document.createElement('section');
  const aboutPanelSurface = document.createElement('div');
  const aboutPanelContent = document.createElement('div');
  const aboutCloseButton = document.createElement('button');
  aboutOverlay.className = 'about-overlay';
  aboutBlur.className = 'about-overlay__blur';
  aboutPanel.className = 'about-panel';
  aboutPanelSurface.className = 'about-panel__surface';
  aboutPanelContent.className = 'about-panel__content';
  aboutCloseButton.className = 'about-panel__close';

  // Single SVG border — drawn via stroke-dashoffset with 4-quadrant symmetric paths
  const NS = 'http://www.w3.org/2000/svg';
  const aboutBorderSvg      = document.createElementNS(NS, 'svg');
  const aboutBorderTopLeft  = document.createElementNS(NS, 'path');
  const aboutBorderTopRight = document.createElementNS(NS, 'path');
  const aboutBorderBotLeft  = document.createElementNS(NS, 'path');
  const aboutBorderBotRight = document.createElementNS(NS, 'path');

  aboutBorderSvg.setAttribute('class', 'about-panel__border-svg');
  aboutBorderSvg.setAttribute('aria-hidden', 'true');

  [aboutBorderTopLeft, aboutBorderTopRight, aboutBorderBotLeft, aboutBorderBotRight].forEach(path => {
    path.setAttribute('class', 'about-panel__border-path');
    path.setAttribute('pathLength', '1');
    aboutBorderSvg.appendChild(path);
  });

  // Computes symmetrical paths expanding outwards from top-center and bottom-center
  function updateBorderPaths() {
    const W  = aboutBorderSvg.clientWidth;
    const H  = aboutBorderSvg.clientHeight;
    if (!W || !H) return;
    const rx = 8;   // corner radius in px
    const s  = 0.5; // inset by half stroke-width to avoid clipping
    const gap = 26; // gap in pixels for top-right corner X button

    // 1. Top-Left: top-center → left corner → down left side to H/2
    aboutBorderTopLeft.setAttribute('d', [
      `M ${W/2},${s}`,
      `L ${rx+s},${s}`,
      `A ${rx},${rx} 0 0 0 ${s},${rx+s}`,
      `L ${s},${H/2}`
    ].join(' '));

    // 2. Top-Right: top-center → right (stops before X gap)
    aboutBorderTopRight.setAttribute('d', [
      `M ${W/2},${s}`,
      `L ${W - gap},${s}`
    ].join(' '));

    // 3. Bottom-Left: bottom-center → left corner → up left side to H/2
    aboutBorderBotLeft.setAttribute('d', [
      `M ${W/2},${H-s}`,
      `L ${rx+s},${H-s}`,
      `A ${rx},${rx} 0 0 1 ${s},${H-rx-s}`,
      `L ${s},${H/2}`
    ].join(' '));

    // 4. Bottom-Right: bottom-center → right corner → up right side (stops below X gap)
    aboutBorderBotRight.setAttribute('d', [
      `M ${W/2},${H-s}`,
      `L ${W-rx-s},${H-s}`,
      `A ${rx},${rx} 0 0 0 ${W-s},${H-rx-s}`,
      `L ${W-s},${gap}`
    ].join(' '));
  }

  aboutPanelContent.innerHTML = `
    <h1 class="about-panel__title">About</h1>
    <div class="about-panel__portrait-wrapper">
      <img src="./graphics/portrait.png" alt="Noah Gunther Self Portrait" class="about-panel__portrait" />
    </div>
    <p class="about-panel__email"><a href="mailto:noah.gunther@gmail.com">noah.gunther@gmail.com</a></p>
    <p class="about-panel__body">I'm a Technical Artist and Creative Coder with a focus on 3D graphics and rendering. I've worked in web development, VR, mobile AR, game development, and offline rendered video.</p>
    <br/>
    <p class="about-panel__body">My work involves writing code and creating graphics for immersive media, as well as creating tools for artists and building more experimental projects such as AI-driven gameplay and Gaussian Splat pipelines.</p>
    <br/>
    <p class="about-panel__body">This site was created with threejs. To learn more about this site and techniques I used, click here.</p>
  `;
  aboutCloseButton.type = 'button';
  aboutCloseButton.setAttribute('aria-label', 'Close about panel');
  aboutCloseButton.innerHTML = `
    <span class="about-panel__close-bar about-panel__close-bar--top"></span>
    <span class="about-panel__close-bar about-panel__close-bar--bottom"></span>
  `;

  aboutPanel.appendChild(aboutPanelSurface);
  aboutPanel.appendChild(aboutBorderSvg);
  aboutPanel.appendChild(aboutCloseButton);
  aboutPanel.appendChild(aboutPanelContent);
  aboutOverlay.appendChild(aboutBlur);
  aboutOverlay.appendChild(aboutPanel);
  document.body.appendChild(aboutOverlay);
  // ==========================================
  // Three.js WebGL Setup
  // ==========================================
  const canvas = document.getElementById('bg');

  // Outer scope declarations to resolve Temporal Dead Zone (TDZ) ReferenceErrors
  let plateTargetPos;
  let plateTargetRot;
  let plate = null;
  let gel = null;
  let cubes = [];
  let hoveredCube = null;
  let raycaster = new THREE.Raycaster();
  let mouse = new THREE.Vector2(-9999, -9999);
  let lastClientX = -9999;
  let lastClientY = -9999;
  let active3DPointerDownTarget = null;
  let linkHoveredCube = null;
  let linkHoveredAbout = false;
  let linkHoveredHoudini = false;
  let linkHoveredLinkedin = false;
  let isPlateHovered = false;
  let last3DHoveredName = null;
  let lastQBoxHoveredState = false;
  let qBoxReachedFullHoverScale = false;
  let lastHoudiniToyHoveredState = false;
  let houdiniReachedFullHoverScale = false;
  let webGlobeReachedFullHoverScale = false;
  let lastWebGlobeHoveredState = false;
  let isQBoxRegrowingSoundPlayed = false;
  let isHoudiniRegrowingSoundPlayed = false;
  let isWebRespawnSoundPlayed = false;

  // Web 3D Globe state variables
  let webGlobeGroup = null;
  let webGlobeMesh = null;
  let webMoonMesh = null;
  let webSignalInnerMesh = null;
  let webSignalMiddleMesh = null;
  let webSignalOuterMesh = null;
  let webSignalAnimTime = 0;
  let webShadowMesh = null;
  let webShadowMaterial = null;
  let webGridMaterial = null;
  let webAntennaMaterial = null;
  let webMoonMaterial = null;
  let webSignalMaterial = null;
  let isWebGlobeHovered = false;
  let linkHoveredWeb = false;
  let isWebGlobeClickAnimating = false;
  let webGlobeClickStartTime = 0;
  let webRespawnStartTime = 0;
  let webGodRayGroup = null;
  let webGodRays = [];

  let bugCubeGroup = null;
  let linkedinShadowMesh = null;
  let linkedinShadowMaterial = null;
  let bugBoundaryMesh = null;
  let bugObstacleMesh = null;
  let houdiniObstacleMesh = null;
  let webGlobeObstacleMesh = null;

  // Bug walking state variables
  let bugTargetPos = null;
  let bugPauseEndTime = 0;
  let isBugInspecting = false;
  let inspectSwayStart = 0;

  // Shatter animation state variables
  let isShattering = false;
  let shatterGroup = null;
  let shatterShards = [];
  let shatterSparkles = [];
  let shatterStartTime = 0;
  let respawnStartTime = 0;
  let pendingAboutOverlayAfterShatter = false;

  // Houdini Pop animation state variables
  let isHoudiniPopping = false;
  let houdiniPopGroup = null;
  let houdiniPopSparkles = [];
  let houdiniPopStartTime = 0;
  let houdiniRespawnStartTime = 0;
  let regrowQuestionBoxAfterAboutClose = false;
  let aboutOverlayVisible = false;
  let aboutOverlayAnimating = false;
  let sparkleTexture = null;
  let lastFrameTime = performance.now();
  let isBugModelLoaded = false;
  let bugWanderAngle = Math.random() * Math.PI * 2;
  let bugNextPauseTime = 0;
  let bugMixer = null;
  let bugInspectAction = null;
  let bugWalkAction = null;
  let bugFallAction = null;
  let bugStandAction = null;
  let bugCurrentAnimState = null; // 'walk' | 'inspect' | 'fall' | 'stand' | null
  let bugBehaviorState = 'idle'; // 'idle' | 'walking' | 'hoverPaused' | 'inspecting' | 'falling' | 'standing'
  let bugSkinnedMeshes = []; // Collected at load time for OutlinePass

  function getLinkedInBugInitialPos() {
    const lCfg = SCENE_CONFIG.linkedin3D;
    if (!lCfg) return { x: -3.6, y: 0.63, z: -4.6 };
    if (typeof isMobileInitial !== 'undefined' && isMobileInitial && lCfg.mobile && lCfg.mobile.position) {
      return lCfg.mobile.position;
    }
    if (lCfg.desktop && lCfg.desktop.position) {
      return lCfg.desktop.position;
    }
    return lCfg.position || { x: -3.6, y: 0.63, z: -4.6 };
  }

  function getLinkedInBugWalkRadius() {
    const lCfg = SCENE_CONFIG.linkedin3D;
    if (!lCfg) return { rx: 9.0, rz: 9.0 };
    if (typeof isMobileInitial !== 'undefined' && isMobileInitial && lCfg.mobile) {
      const rx = lCfg.mobile.walkRadiusX !== undefined ? lCfg.mobile.walkRadiusX : (lCfg.walkRadiusX !== undefined ? lCfg.walkRadiusX : 9.0);
      const rz = lCfg.mobile.walkRadiusZ !== undefined ? lCfg.mobile.walkRadiusZ : (lCfg.walkRadiusZ !== undefined ? lCfg.walkRadiusZ : 9.0);
      return { rx, rz };
    }
    if (lCfg.desktop) {
      const rx = lCfg.desktop.walkRadiusX !== undefined ? lCfg.desktop.walkRadiusX : (lCfg.walkRadiusX !== undefined ? lCfg.walkRadiusX : 9.0);
      const rz = lCfg.desktop.walkRadiusZ !== undefined ? lCfg.desktop.walkRadiusZ : (lCfg.walkRadiusZ !== undefined ? lCfg.walkRadiusZ : 9.0);
      return { rx, rz };
    }
    return {
      rx: lCfg.walkRadiusX !== undefined ? lCfg.walkRadiusX : 9.0,
      rz: lCfg.walkRadiusZ !== undefined ? lCfg.walkRadiusZ : 9.0
    };
  }

  const tmpCubeTargetPos = new THREE.Vector3();
  const tmpCubeScale = new THREE.Vector3();
  const tmpObjectScale = new THREE.Vector3();
  const tmpCameraWorldPos = new THREE.Vector3();
  const tmpWalkDir = new THREE.Vector3();
  const tmpCenterPush = new THREE.Vector3();
  const tmpToInsectQ = new THREE.Vector3();
  const tmpToInsectCube = new THREE.Vector3();
  const tmpAvoidVec = new THREE.Vector3();
  const tmpPerpVec = new THREE.Vector3();
  const tmpSteerVec = new THREE.Vector3();
  const tmpPushVec = new THREE.Vector3();
  const tmpBugIntersects = [];
  const tmpQBoxIntersects = [];
  const tmpHoudiniToyIntersects = [];
  const tmpCubeIntersects = [];

  let isSpinning = false;
  let introScale = 0.0;    // computed from elapsed time on load
  let introStartTime = -1; // set when loading completes; -1 = not started
  let fbxPlane = null;
  let fbxExteriorMaterial = null;
  let fbxInteriorMaterial = null;
  let questionBoxGroup = null;
  let shadowMesh = null;
  let shadowMaterial = null;
  let houdiniToyGroup = null;
  let houdiniShadowMesh = null;
  let houdiniShadowMaterial = null;
  let toyMaterial = null;
  let rubberToyMeshes = [];
  let vignettePass = null;
  let ditherPass = null;
  let isDitherActive = false;
  const scene = new THREE.Scene();
  // Clear scene.background to let CSS body gradient show through
  scene.background = null;
  const sceneGroup = new THREE.Group();
  scene.add(sceneGroup);

  // Perspective Camera
  const camera = new THREE.PerspectiveCamera(SCENE_CONFIG.camera.fov, window.innerWidth / window.innerHeight, SCENE_CONFIG.camera.near, SCENE_CONFIG.camera.far);
  camera.position.z = 7;

  const isMobileBrowser = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || ('ontouchstart' in window && navigator.maxTouchPoints > 0);

  // WebGL Renderer with hardware MSAA enabled on all devices
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true // let body gradient show through
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.0));

  // Multisampled Render Target for EffectComposer (4x MSAA enabled on all devices)
  const renderTarget = new THREE.WebGLMultisampleRenderTarget(
    window.innerWidth,
    window.innerHeight,
    {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat
    }
  );
  renderTarget.samples = 4;

  // Three.js FPS Performance Counter
  let stats = null;
  if (SCENE_CONFIG.fpsCounter && SCENE_CONFIG.fpsCounter.enabled !== false) {
    stats = new Stats();
    stats.showPanel(SCENE_CONFIG.fpsCounter.panel || 0);
    stats.dom.id = 'fps-stats';
    stats.dom.style.position = 'fixed';
    stats.dom.style.zIndex = '100000';
    stats.dom.style.top = '10px';
    stats.dom.style.left = '10px';
    document.body.appendChild(stats.dom);
  }

  // ==========================================
  // HDR Environment Map Loading
  // ==========================================
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();

  new RGBELoader()
    .setDataType(THREE.UnsignedByteType)
    .load('graphics/sky.hdr', (texture) => {
      // Enable wrapping and shift horizontal offset to rotate reflections around the Y axis
      texture.wrapS = THREE.RepeatWrapping;
      texture.offset.x = (SCENE_CONFIG.lights.skyboxRotation || 0.0) / 360.0;

      const envMap = pmremGenerator.fromEquirectangular(texture).texture;
      scene.environment = envMap;

      texture.dispose();
      pmremGenerator.dispose();
    });

  // Lighting
  const ambientLight = new THREE.AmbientLight(
    SCENE_CONFIG.lights.ambient.color,
    SCENE_CONFIG.lights.ambient.intensity
  );
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(
    SCENE_CONFIG.lights.directional.color,
    SCENE_CONFIG.lights.directional.intensity
  );
  directionalLight.position.set(
    SCENE_CONFIG.lights.directional.position.x,
    SCENE_CONFIG.lights.directional.position.y,
    SCENE_CONFIG.lights.directional.position.z
  );
  scene.add(directionalLight);

  // Postprocessing composer & outline pass
  const composer = new EffectComposer(renderer, renderTarget);
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  const outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
  composer.addPass(outlinePass);

  const deformerOutlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
  composer.addPass(deformerOutlinePass);

  const houdiniOutlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
  composer.addPass(houdiniOutlinePass);

  let fxaaPass = null;
  if (!isMobileBrowser) {
    fxaaPass = new ShaderPass(FXAAShader);
    const pixelRatio = renderer.getPixelRatio();

    fxaaPass.material.uniforms.resolution.value.x = 1 / (window.innerWidth * pixelRatio);
    fxaaPass.material.uniforms.resolution.value.y = 1 / (window.innerHeight * pixelRatio);

    composer.addPass(fxaaPass);
  }

  function setupSkinnedOutlinePass(pass, isSkinning, isMorphTargets) {
    const depthMat = pass.depthMaterial || pass.materialDepth;
    const maskMat = pass.prepareMaskMaterial || pass.materialPrepareMask;

    if (depthMat) {
      depthMat.skinning = isSkinning;
      depthMat.morphTargets = isMorphTargets;
      depthMat.needsUpdate = true;
    }

    if (maskMat) {
      maskMat.skinning = isSkinning;
      maskMat.morphTargets = isMorphTargets;

      maskMat.vertexShader = `
        #include <morphtarget_pars_vertex>
        #include <skinning_pars_vertex>

        varying vec4 projTexCoord;
        varying vec4 vPosition;

        uniform mat4 textureMatrix;

        void main() {
          #include <skinbase_vertex>
          #include <begin_vertex>
          #include <morphtarget_vertex>
          #include <skinning_vertex>

          vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
          vPosition = mvPosition;

          vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
          projTexCoord = textureMatrix * worldPosition;

          gl_Position = projectionMatrix * mvPosition;
        }
      `;

      maskMat.needsUpdate = true;
    }
  }

  setupSkinnedOutlinePass(deformerOutlinePass, true, false);
  setupSkinnedOutlinePass(houdiniOutlinePass, false, true);

  [outlinePass, deformerOutlinePass, houdiniOutlinePass].forEach((pass) => {
    pass.enabled = false; // Disabled by default when no objects are selected
    pass.edgeStrength = 6.0;
    pass.edgeGlow = 1.0;
    pass.edgeThickness = 2.0;
    pass.visibleEdgeColor.set('#ffffff');
    pass.hiddenEdgeColor.set('#000000');
  });

  function clearOutlines() {
    [outlinePass, deformerOutlinePass, houdiniOutlinePass].forEach((pass) => {
      pass.selectedObjects = [];
      pass.enabled = false;
    });
  }

  function selectRegularOutline(objects, color) {
    clearOutlines();
    const arr = Array.isArray(objects) ? objects : [objects];
    outlinePass.selectedObjects = arr;
    outlinePass.visibleEdgeColor.set(color);
    outlinePass.enabled = arr.length > 0;
  }

  function selectDeformerOutline(objects, color) {
    clearOutlines();
    const arr = Array.isArray(objects) ? objects : [objects];
    deformerOutlinePass.selectedObjects = arr;
    deformerOutlinePass.visibleEdgeColor.set(color);
    deformerOutlinePass.enabled = arr.length > 0;
  }

  function selectHoudiniOutline(objects, color) {
    clearOutlines();
    const arr = Array.isArray(objects) ? objects : [objects];
    houdiniOutlinePass.selectedObjects = arr;
    houdiniOutlinePass.visibleEdgeColor.set(color);
    houdiniOutlinePass.enabled = arr.length > 0;
  }

  function setOutlinePassSize(width, height) {
    const pRatio = renderer.getPixelRatio();
    [outlinePass, deformerOutlinePass, houdiniOutlinePass].forEach((pass) => {
      if (typeof pass.setSize === 'function') {
        pass.setSize(width * pRatio, height * pRatio);
      }
    });
    if (ditherPass && ditherPass.uniforms.resolution) {
      ditherPass.uniforms.resolution.value.set(width * pRatio, height * pRatio);
    }
  }

  // Vignette & Background Gradient Shader Pass (always active, vignette is toggled via uniform)
  const vignetteShader = {
    uniforms: {
      tDiffuse: { value: null },
      offset: { value: SCENE_CONFIG.vignette.offset },
      darkness: { value: SCENE_CONFIG.vignette.darkness },
      colorTop: { value: new THREE.Color(SCENE_CONFIG.site.backgroundColorTop) },
      colorBottom: { value: new THREE.Color(SCENE_CONFIG.site.backgroundColorBottom) },
      vignetteEnabled: {
        value: (window.innerWidth <= window.innerHeight)
          ? (SCENE_CONFIG.vignette.enabledMobile !== undefined ? SCENE_CONFIG.vignette.enabledMobile : false)
          : SCENE_CONFIG.vignette.enabled
      },
      useSolidBackground: { value: false },
      solidBackgroundColor: { value: new THREE.Color(0x050508) }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform float offset;
      uniform float darkness;
      uniform vec3 colorTop;
      uniform vec3 colorBottom;
      uniform bool vignetteEnabled;
      uniform bool useSolidBackground;
      uniform vec3 solidBackgroundColor;
      varying vec2 vUv;
      void main() {
        vec4 sceneColor = texture2D(tDiffuse, vUv);

        // Calculate background color: solid color if requested, or linear top-to-bottom gradient
        vec3 bg = useSolidBackground ? solidBackgroundColor : mix(colorBottom, colorTop, vUv.y);

        // Blend the scene color with the background based on scene alpha
        vec3 finalColor = mix(bg, sceneColor.rgb, sceneColor.a);

        // Apply vignette if enabled
        if (vignetteEnabled) {
          vec2 uv = vUv - vec2(0.5);
          float dist = length(uv);
          float vignette = smoothstep(offset, offset - 0.5, dist * darkness);
          gl_FragColor = vec4(finalColor * vignette, 1.0);
        } else {
          gl_FragColor = vec4(finalColor, 1.0);
        }
      }
    `
  };
  vignettePass = new ShaderPass(vignetteShader);
  composer.addPass(vignettePass);

  // Post-Processing Render Styles Shader Pass
  const DitherShader = {
    uniforms: {
      'tDiffuse': { value: null },
      'resolution': { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      'mode': { value: 0 },
      'uTime': { value: 0.0 },

      // multiBit / oneBit / pixelated
      'colorLevels': { value: 6.0 },
      'pixelSize': { value: 2.0 },
      'ditherStrength': { value: 0.25 },
      'darkColor': { value: new THREE.Color(0x050510) },
      'lightColor': { value: new THREE.Color(0xe6e6fa) },
      'pixelatedPixelSize': { value: 4.0 },
      'pixelatedColorLevels': { value: 16.0 },
      'scanlineIntensity': { value: 0.08 },

      // gameBoy
      'gbPixelSize': { value: 3.0 },
      'gbC0': { value: new THREE.Color(0x0f380f) },
      'gbC1': { value: new THREE.Color(0x306230) },
      'gbC2': { value: new THREE.Color(0x8bac0f) },
      'gbC3': { value: new THREE.Color(0x9bbc0f) },

      // vhs
      'vhsAberration': { value: 0.006 },
      'vhsJitter': { value: 0.003 },
      'vhsNoise': { value: 0.12 },

      // halftone
      'halftoneScale': { value: 4.0 },
      'halftoneAngle': { value: 0.785398 },

      // blueprint
      'blueprintBg': { value: new THREE.Color(0x001b3a) },
      'blueprintLine': { value: new THREE.Color(0x00f0ff) },
      'blueprintGrid': { value: 32.0 },

      // thermal
      'thC0': { value: new THREE.Color(0x000033) },
      'thC1': { value: new THREE.Color(0x550088) },
      'thC2': { value: new THREE.Color(0xcc0066) },
      'thC3': { value: new THREE.Color(0xff8800) },
      'thC4': { value: new THREE.Color(0xffffff) },

      // ascii
      'asciiCellSize': { value: 8.0 },
      'asciiColorLevels': { value: 4.0 },
      'asciiBrightness': { value: 1.1 },
      'asciiContrast': { value: 1.8 },
      'asciiCharacterWeight': { value: 1.3 },
      'asciiUseSolidColor': { value: true },
      'asciiDebugRawScene': { value: false },
      'asciiColor': { value: new THREE.Color(0x00ff66) },

      // anaglyph
      'anaglyphShift': { value: 0.005 }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform vec2 resolution;
      uniform int mode;
      uniform float uTime;

      uniform float colorLevels;
      uniform float pixelSize;
      uniform float ditherStrength;
      uniform vec3 darkColor;
      uniform vec3 lightColor;
      uniform float pixelatedPixelSize;
      uniform float pixelatedColorLevels;
      uniform float scanlineIntensity;

      uniform float gbPixelSize;
      uniform vec3 gbC0;
      uniform vec3 gbC1;
      uniform vec3 gbC2;
      uniform vec3 gbC3;

      uniform float vhsAberration;
      uniform float vhsJitter;
      uniform float vhsNoise;

      uniform float halftoneScale;
      uniform float halftoneAngle;

      uniform vec3 blueprintBg;
      uniform vec3 blueprintLine;
      uniform float blueprintGrid;

      uniform vec3 thC0;
      uniform vec3 thC1;
      uniform vec3 thC2;
      uniform vec3 thC3;
      uniform vec3 thC4;

      uniform float asciiCellSize;
      uniform float asciiColorLevels;
      uniform float asciiBrightness;
      uniform float asciiContrast;
      uniform float asciiCharacterWeight;
      uniform bool asciiUseSolidColor;
      uniform bool asciiDebugRawScene;
      uniform vec3 asciiColor;

      uniform float anaglyphShift;

      varying vec2 vUv;

      float getBayer4x4(vec2 uv) {
        int x = int(mod(uv.x, 4.0));
        int y = int(mod(uv.y, 4.0));

        if (x == 0 && y == 0) return 0.0 / 16.0;
        if (x == 2 && y == 0) return 8.0 / 16.0;
        if (x == 0 && y == 2) return 2.0 / 16.0;
        if (x == 2 && y == 2) return 10.0 / 16.0;

        if (x == 1 && y == 0) return 12.0 / 16.0;
        if (x == 3 && y == 0) return 4.0 / 16.0;
        if (x == 1 && y == 2) return 14.0 / 16.0;
        if (x == 3 && y == 2) return 6.0 / 16.0;

        if (x == 0 && y == 1) return 3.0 / 16.0;
        if (x == 2 && y == 1) return 11.0 / 16.0;
        if (x == 0 && y == 3) return 1.0 / 16.0;
        if (x == 2 && y == 3) return 9.0 / 16.0;

        if (x == 1 && y == 1) return 15.0 / 16.0;
        if (x == 3 && y == 1) return 7.0 / 16.0;
        if (x == 1 && y == 3) return 13.0 / 16.0;
        if (x == 3 && y == 3) return 5.0 / 16.0;

        return 0.0;
      }

      float pseudoRandom(vec2 co) {
        return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
      }

      void main() {
        vec4 texColor = texture2D(tDiffuse, vUv);

        if (mode == 0) {
          gl_FragColor = texColor;
          return;
        }

        if (mode == 1) {
          vec2 sampleUv = vUv;
          if (pixelSize > 1.05 && resolution.x > 0.0 && resolution.y > 0.0) {
            vec2 grid = resolution / pixelSize;
            sampleUv = (floor(vUv * grid) + 0.5) / grid;
          }
          vec4 color = texture2D(tDiffuse, sampleUv);
          vec2 ditherCoord = gl_FragCoord.xy / pixelSize;
          float bayer = getBayer4x4(ditherCoord) - 0.5;
          vec3 dithered = clamp(floor(color.rgb * colorLevels + bayer * ditherStrength) / (colorLevels - 1.0), 0.0, 1.0);
          gl_FragColor = vec4(dithered, color.a);
          return;
        }

        if (mode == 2) {
          vec2 sampleUv = vUv;
          if (pixelSize > 1.05 && resolution.x > 0.0 && resolution.y > 0.0) {
            vec2 grid = resolution / pixelSize;
            sampleUv = (floor(vUv * grid) + 0.5) / grid;
          }
          vec4 color = texture2D(tDiffuse, sampleUv);
          vec2 ditherCoord = gl_FragCoord.xy / pixelSize;
          float bayer = getBayer4x4(ditherCoord) - 0.5;
          float luminance = dot(color.rgb, vec3(0.299, 0.587, 0.114));
          float bit = (luminance + bayer * ditherStrength >= 0.5) ? 1.0 : 0.0;
          vec3 ditheredOneBit = mix(darkColor, lightColor, bit);
          gl_FragColor = vec4(ditheredOneBit, color.a);
          return;
        }

        if (mode == 3) {
          vec2 grid = resolution / max(pixelatedPixelSize, 1.0);
          vec2 sampleUv = (floor(vUv * grid) + 0.5) / grid;
          vec4 color = texture2D(tDiffuse, sampleUv);
          vec3 quantized = floor(color.rgb * pixelatedColorLevels + 0.5) / max(pixelatedColorLevels, 1.0);
          float scanline = sin(gl_FragCoord.y * 1.5) * scanlineIntensity;
          vec3 finalColor = clamp(quantized - scanline, 0.0, 1.0);
          gl_FragColor = vec4(finalColor, color.a);
          return;
        }

        if (mode == 4) {
          vec2 grid = resolution / max(gbPixelSize, 1.0);
          vec2 sampleUv = (floor(vUv * grid) + 0.5) / grid;
          vec4 color = texture2D(tDiffuse, sampleUv);
          float lum = dot(color.rgb, vec3(0.299, 0.587, 0.114));
          vec3 gbColor = gbC0;
          if (lum > 0.75) {
            gbColor = gbC3;
          } else if (lum > 0.5) {
            gbColor = gbC2;
          } else if (lum > 0.25) {
            gbColor = gbC1;
          }
          gl_FragColor = vec4(gbColor, color.a);
          return;
        }

        if (mode == 5) {
          float jitterOffset = sin(vUv.y * 60.0 + uTime * 12.0) * vhsJitter;
          vec2 uvJittered = vec2(vUv.x + jitterOffset, vUv.y);
          float r = texture2D(tDiffuse, uvJittered + vec2(vhsAberration, 0.0)).r;
          float g = texture2D(tDiffuse, uvJittered).g;
          float b = texture2D(tDiffuse, uvJittered - vec2(vhsAberration, 0.0)).b;
          float noise = pseudoRandom(vUv + fract(uTime)) * vhsNoise;
          vec3 col = clamp(vec3(r, g, b) + noise, 0.0, 1.0);
          gl_FragColor = vec4(col, texColor.a);
          return;
        }

        if (mode == 6) {
          float s = sin(halftoneAngle);
          float c = cos(halftoneAngle);
          vec2 rotUv = vec2(c * vUv.x - s * vUv.y, s * vUv.x + c * vUv.y);
          vec2 grid = resolution / max(halftoneScale, 1.0);
          vec2 cellUv = fract(rotUv * grid) - 0.5;
          float dist = length(cellUv);
          vec4 color = texture2D(tDiffuse, vUv);
          float lum = dot(color.rgb, vec3(0.299, 0.587, 0.114));
          float dotRadius = (1.0 - lum) * 0.6;
          float inDot = step(dist, dotRadius);
          vec3 halftoneColor = mix(color.rgb, vec3(0.0), inDot);
          gl_FragColor = vec4(halftoneColor, color.a);
          return;
        }

        if (mode == 7) {
          vec2 texel = vec2(1.0) / resolution;
          vec4 cTL = texture2D(tDiffuse, vUv + vec2(-texel.x,  texel.y));
          vec4 cTR = texture2D(tDiffuse, vUv + vec2( texel.x,  texel.y));
          vec4 cBL = texture2D(tDiffuse, vUv + vec2(-texel.x, -texel.y));
          vec4 cBR = texture2D(tDiffuse, vUv + vec2( texel.x, -texel.y));

          float lTL = dot(cTL.rgb, vec3(0.299, 0.587, 0.114));
          float lTR = dot(cTR.rgb, vec3(0.299, 0.587, 0.114));
          float lBL = dot(cBL.rgb, vec3(0.299, 0.587, 0.114));
          float lBR = dot(cBR.rgb, vec3(0.299, 0.587, 0.114));

          float gx = lTR - lTL + lBR - lBL;
          float gy = lBL - lTL + lBR - lTR;
          float edge = clamp(sqrt(gx * gx + gy * gy) * 3.0, 0.0, 1.0);

          float gridX = step(0.96, fract(vUv.x * blueprintGrid));
          float gridY = step(0.96, fract(vUv.y * blueprintGrid * (resolution.y / resolution.x)));
          float isGrid = max(gridX, gridY) * 0.15;

          vec3 bpColor = mix(blueprintBg, blueprintLine, edge + isGrid);
          gl_FragColor = vec4(bpColor, texColor.a);
          return;
        }

        if (mode == 8) {
          float lum = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
          vec3 thermalColor;
          if (lum < 0.25) {
            thermalColor = mix(thC0, thC1, lum * 4.0);
          } else if (lum < 0.5) {
            thermalColor = mix(thC1, thC2, (lum - 0.25) * 4.0);
          } else if (lum < 0.75) {
            thermalColor = mix(thC2, thC3, (lum - 0.5) * 4.0);
          } else {
            thermalColor = mix(thC3, thC4, (lum - 0.75) * 4.0);
          }
          gl_FragColor = vec4(thermalColor, texColor.a);
          return;
        }

        if (mode == 9) {
          if (asciiDebugRawScene) {
            gl_FragColor = texture2D(tDiffuse, vUv);
            return;
          }

          // 1. Hardware-exact pixel coordinate & grid cell size
          float cellSize = max(asciiCellSize, 1.0);
          vec2 cellIndex = floor(gl_FragCoord.xy / cellSize);
          vec2 cellCenterPixel = (cellIndex + vec2(0.5)) * cellSize;
          vec2 sampleUv = cellCenterPixel / resolution;

          // 2. Hardware-exact local cell UV (0.0 to 1.0)
          vec2 localUv = mod(gl_FragCoord.xy, cellSize) / cellSize;

          // 3. Sample diffuse texture & apply contrast + brightness
          vec4 color = texture2D(tDiffuse, sampleUv);

          // Apply contrast S-curve around midpoint 0.5
          vec3 contrastColor = (color.rgb - 0.5) * max(asciiContrast, 0.1) + 0.5;
          vec3 brightColor = clamp(contrastColor * max(asciiBrightness, 0.1), 0.0, 1.0);

          float rawLum = dot(brightColor, vec3(0.299, 0.587, 0.114));

          // 4. Quantize luminance with LSB epsilon guard to prevent floating-point boundary jitter
          float levels = max(asciiColorLevels, 1.0);
          float lum = (levels > 1.0) ? (floor(rawLum * levels + 0.005) / levels) : rawLum;

          // 5. Scaled character glyph patterns (characterWeight increases glyph size/stroke thickness)
          float weight = max(asciiCharacterWeight, 0.2);
          float charPattern = 0.0;
          if (lum >= 0.75) {
            float margin = clamp(0.15 / weight, 0.01, 0.45);
            charPattern = step(margin, localUv.x) * step(margin, 1.0 - localUv.x) * step(margin, localUv.y) * step(margin, 1.0 - localUv.y);
          } else if (lum >= 0.50) {
            float thickness = clamp(0.40 / weight, 0.15, 0.45);
            float crossH = step(thickness, localUv.y) * step(thickness, 1.0 - localUv.y);
            float crossV = step(thickness, localUv.x) * step(thickness, 1.0 - localUv.x);
            charPattern = max(crossH, crossV);
          } else if (lum >= 0.25) {
            float r = clamp(0.25 * weight, 0.10, 0.48);
            charPattern = step(length(localUv - vec2(0.5)), r);
          } else if (lum >= 0.10) {
            float r = clamp(0.10 * weight, 0.03, 0.35);
            charPattern = step(length(localUv - vec2(0.5)), r);
          } else {
            charPattern = 0.0; // Deep dark areas remain pure dark/empty
          }

          // 6. Final solid color or luminance-weighted output
          float textAlpha = asciiUseSolidColor ? charPattern : (charPattern * lum);
          vec3 asciiFinal = mix(vec3(0.0), asciiColor, textAlpha);
          gl_FragColor = vec4(asciiFinal, color.a);
          return;
        }

        if (mode == 10) {
          float r = texture2D(tDiffuse, vUv - vec2(anaglyphShift, 0.0)).r;
          vec4 gb = texture2D(tDiffuse, vUv + vec2(anaglyphShift, 0.0));
          gl_FragColor = vec4(r, gb.g, gb.b, texColor.a);
          return;
        }

        gl_FragColor = texColor;
      }
    `
  };

  ditherPass = new ShaderPass(DitherShader);
  composer.addPass(ditherPass);

  // ==========================================
  // Custom Concentric Spectral Diffraction Shader
  // ==========================================
  let plateShader;
  let gelShader;
  let qboxShader;
  // Custom uniforms for the rainbow overlay effect
  const rainbowUniforms = {
    uTime: { value: 0.0 },
    uRainbowIntensity: { value: SCENE_CONFIG.plate.rainbow.intensity },
    uRainbowScale: { value: SCENE_CONFIG.plate.rainbow.scale },
    uRainbowAngleFactor: { value: SCENE_CONFIG.plate.rainbow.angleFactor },
    uRainbowShimmer: { value: SCENE_CONFIG.plate.rainbow.shimmer },
    uRainbowShimmerSpeed: { value: SCENE_CONFIG.plate.rainbow.shimmerSpeed },
    uRainbowCenterSmoothness: { value: SCENE_CONFIG.plate.rainbow.centerSmoothness },
    uRainbowCenterOffset: { value: new THREE.Vector2(...SCENE_CONFIG.plate.rainbow.centerOffset) },
    uPaletteA: { value: new THREE.Vector3(...SCENE_CONFIG.plate.rainbow.paletteA) },
    uPaletteB: { value: new THREE.Vector3(...SCENE_CONFIG.plate.rainbow.paletteB) },
    uPaletteC: { value: new THREE.Vector3(...SCENE_CONFIG.plate.rainbow.paletteC) },
    uPaletteD: { value: new THREE.Vector3(...SCENE_CONFIG.plate.rainbow.paletteD) },
    uRainbowFresnelMultiply: { value: SCENE_CONFIG.plate.rainbow.fresnelMultiply },
    uSkyboxRotation: { value: (SCENE_CONFIG.lights.skyboxRotation || 0.0) * Math.PI / 180.0 }
  };

  const plateMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(...SCENE_CONFIG.plate.color.slice(0, 3)),
    transmission: SCENE_CONFIG.plate.glass.refractionIntensity, // physical light transmission amount
    opacity: 1.0, // refraction handles transparency, keep opacity high to prevent washing out
    transparent: true,
    roughness: SCENE_CONFIG.plate.glass.roughness,
    metalness: 0.05,
    ior: SCENE_CONFIG.plate.glass.ior, // physical glass IOR
    side: THREE.DoubleSide,
    depthWrite: true
  });

  plateMaterial.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, rainbowUniforms);
    plateShader = shader;

    // Modify the envmap_physical_pars_fragment chunk to rotate reflection/refraction vectors on the GPU
    let envmapChunk = THREE.ShaderChunk['envmap_physical_pars_fragment'];

    envmapChunk = envmapChunk.replace(
      /vec4\s+envMapColor\s*=\s*textureCubeUV\s*\(\s*envMap\s*,\s*reflectVec\s*,\s*roughness\s*\)\s*;/g,
      'vec4 envMapColor = textureCubeUV( envMap, rotateY(reflectVec, uSkyboxRotation), roughness );'
    );

    envmapChunk = envmapChunk.replace(
      /vec4\s+envMapColor\s*=\s*textureCubeUV\s*\(\s*envMap\s*,\s*worldNormal\s*,\s*1\.0\s*\)\s*;/g,
      'vec4 envMapColor = textureCubeUV( envMap, rotateY(worldNormal, uSkyboxRotation), 1.0 );'
    );

    // Inject rotateY function, uSkyboxRotation uniform, and the modified chunk
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <envmap_physical_pars_fragment>',
      `uniform float uSkyboxRotation;
       vec3 rotateY(vec3 v, float angle) {
         float c = cos(angle);
         float s = sin(angle);
         return vec3(v.x * c - v.z * s, v.y, v.x * s + v.z * c);
       }
       ${envmapChunk}`
    );

    // Pass local geometry position.xz for stable ring centering
    shader.vertexShader = shader.vertexShader.replace(
      '#include <common>',
      `#include <common>
       varying vec2 vLocalPosition;`
    );
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
       vLocalPosition = position.xz;`
    );

    // Ingest local position and custom uniforms in fragment shader
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <common>',
      `#include <common>
       varying vec2 vLocalPosition;
       uniform float uTime;
       uniform float uRainbowIntensity;
       uniform float uRainbowScale;
       uniform float uRainbowAngleFactor;
       uniform float uRainbowShimmer;
       uniform float uRainbowShimmerSpeed;
       uniform float uRainbowCenterSmoothness;
       uniform vec2 uRainbowCenterOffset;
       uniform vec3 uPaletteA;
       uniform vec3 uPaletteB;
       uniform vec3 uPaletteC;
       uniform vec3 uPaletteD;
       uniform float uRainbowFresnelMultiply;`
    );

    // Inject rainbow calculations to modify the diffuse body color of the glass
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <color_fragment>',
      `#include <color_fragment>
       vec2 offsetPos = vLocalPosition - uRainbowCenterOffset;
       float localDist = sqrt(dot(offsetPos, offsetPos) + uRainbowCenterSmoothness);

       // Use standard camera-space view vector (vViewPosition points to camera in View Space)
       vec3 viewDirCustom = normalize(vViewPosition);

       // Use standard camera-space normal passed as varying vNormal (since normal is not declared yet)
       vec3 normalCustom = normalize(vNormal);
       float fresnelCustom = pow(1.0 - max(dot(normalCustom, viewDirCustom), 0.0), 3.0);

       float timeShift = sin(uTime * uRainbowShimmerSpeed) * uRainbowShimmer;
       float thickness = (localDist * uRainbowScale) + (fresnelCustom * uRainbowAngleFactor) + timeShift;
       vec3 rainbowColor = uPaletteA + uPaletteB * cos(6.283185 * (uPaletteC * thickness + uPaletteD));

       // Blend the rainbow colors directly into the physical diffuse color of the glass, scaling by Fresnel multiplier
       float intensityMultiplier = mix(1.0, fresnelCustom, uRainbowFresnelMultiply);
       diffuseColor.rgb = mix(diffuseColor.rgb, rainbowColor, uRainbowIntensity * intensityMultiplier * fresnelCustom);`
    );
  };

  // Load dish.obj mesh to use as the plate
  const objLoader = new OBJLoader();

  if (SCENE_CONFIG.plate.enabled !== false) {
    objLoader.load('geometry/dish.obj', (object) => {
      object.traverse((child) => {
        if (child.isMesh) {
          child.material = plateMaterial;
          // Merge duplicate vertices to calculate smooth shading normals on low-poly/unindexed meshes
          if (typeof BufferGeometryUtils !== 'undefined') {
            child.geometry = BufferGeometryUtils.mergeVertices(child.geometry);
          }
          child.geometry.computeVertexNormals();
        }
      });

      plate = object;
      plate.position.copy(plateTargetPos);
      plate.rotation.set(plateTargetRot.x, plateTargetRot.y, plateTargetRot.z);

      const s = SCENE_CONFIG.plate.scale;
      plate.scale.set(s, s, s);

      sceneGroup.add(plate);
    });
  }

  // Load gel.obj mesh to use as transparent overlay
  const gelMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(SCENE_CONFIG.gel.glass.color),
    transmission: SCENE_CONFIG.gel.glass.transmission,
    ior: SCENE_CONFIG.gel.glass.ior,
    roughness: SCENE_CONFIG.gel.glass.roughness,
    clearcoat: SCENE_CONFIG.gel.glass.clearcoat !== undefined ? SCENE_CONFIG.gel.glass.clearcoat : 0.0,
    clearcoatRoughness: SCENE_CONFIG.gel.glass.clearcoatRoughness !== undefined ? SCENE_CONFIG.gel.glass.clearcoatRoughness : 0.05,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: SCENE_CONFIG.gel.glass.opacity !== undefined ? SCENE_CONFIG.gel.glass.opacity : 0.85
  });

  const gelUniforms = {
    uSkyboxRotation: { value: (SCENE_CONFIG.lights.skyboxRotation || 0.0) * Math.PI / 180.0 }
  };

  gelMaterial.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, gelUniforms);
    gelShader = shader;

    let envmapChunk = THREE.ShaderChunk['envmap_physical_pars_fragment'];

    envmapChunk = envmapChunk.replace(
      /vec4\s+envMapColor\s*=\s*textureCubeUV\s*\(\s*envMap\s*,\s*reflectVec\s*,\s*roughness\s*\)\s*;/g,
      'vec4 envMapColor = textureCubeUV( envMap, rotateY(reflectVec, uSkyboxRotation), roughness );'
    );

    envmapChunk = envmapChunk.replace(
      /vec4\s+envMapColor\s*=\s*textureCubeUV\s*\(\s*envMap\s*,\s*worldNormal\s*,\s*1\.0\s*\)\s*;/g,
      'vec4 envMapColor = textureCubeUV( envMap, rotateY(worldNormal, uSkyboxRotation), 1.0 );'
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <envmap_physical_pars_fragment>',
      `uniform float uSkyboxRotation;
       vec3 rotateY(vec3 v, float angle) {
         float c = cos(angle);
         float s = sin(angle);
         return vec3(v.x * c - v.z * s, v.y, v.x * s + v.z * c);
       }
       ${envmapChunk}`
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <dither_fragment>',
      `#include <dither_fragment>
       vec3 gelReflectVec = reflect(-vViewPosition, normal);
       vec4 gelEnvSky = textureCubeUV(envMap, rotateY(gelReflectVec, uSkyboxRotation), roughness);
       gl_FragColor.rgb += gelEnvSky.rgb * 1.5;
      `
    );
  };

  if (SCENE_CONFIG.gel.enabled !== false) {
    objLoader.load('geometry/gel.obj', (object) => {
      object.traverse((child) => {
        if (child.isMesh) {
          child.material = gelMaterial;
          if (typeof BufferGeometryUtils !== 'undefined') {
            child.geometry = BufferGeometryUtils.mergeVertices(child.geometry);
          }
          child.geometry.computeVertexNormals();
        }
      });

      gel = object;
      // Add directly to sceneGroup without any transform adjustments
      sceneGroup.add(gel);
    });
  }

  let pickNewBugTarget = null;
  if (SCENE_CONFIG.linkedin3D.enabled !== false) {
    // Helper to pick a new safe random wander target for the LinkedIn cube
    pickNewBugTarget = () => {
      const { rx: walkRx, rz: walkRz } = getLinkedInBugWalkRadius();
      const minObs = SCENE_CONFIG.linkedin3D.minObstacleDist || 0.9;
      const bugPos = getLinkedInBugInitialPos();

      let attempts = 0;
      while (attempts < 100) {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random(); // uniformly distributed distance factor
        const x = Math.cos(angle) * dist * walkRx;
        const z = Math.sin(angle) * dist * walkRz;

        // Avoid center Question Box
        const qBoxDist = Math.sqrt(x * x + z * z);
        if (qBoxDist < minObs) {
          attempts++;
          continue;
        }

        // Avoid menu cubes
        let collides = false;
        if (typeof cubes !== 'undefined' && cubes) {
          cubes.forEach((cube) => {
            const dx = x - cube.position.x;
            const dz = z - cube.position.z;
            const d = Math.sqrt(dx * dx + dz * dz);
            if (d < minObs) {
              collides = true;
            }
          });
        }

        // Avoid Houdini Toy
        if (houdiniToyGroup) {
          const dx = x - houdiniToyGroup.position.x;
          const dz = z - houdiniToyGroup.position.z;
          const d = Math.sqrt(dx * dx + dz * dz);
          if (d < minObs) {
            collides = true;
          }
        }

        // Avoid Web Globe
        if (webGlobeGroup) {
          const dx = x - webGlobeGroup.position.x;
          const dz = z - webGlobeGroup.position.z;
          const d = Math.sqrt(dx * dx + dz * dz);
          if (d < minObs) {
            collides = true;
          }
        }

        if (collides) {
          attempts++;
          continue;
        }

        return new THREE.Vector3(x, bugPos.y, z);
      }

      // Fallback point
      return new THREE.Vector3(walkRx * 0.5, bugPos.y, 0);
    };

    // Create bright red boundary ring visualizer at y=0 (gel surface) using EllipseCurve
    const visualShadowBaseY = SCENE_CONFIG.questionBox.shadowY !== undefined ? SCENE_CONFIG.questionBox.shadowY : 0.22;
    const { rx: walkRx, rz: walkRz } = getLinkedInBugWalkRadius();
    const boundaryCurve = new THREE.EllipseCurve(0, 0, walkRx, walkRz, 0, 2 * Math.PI, false, 0);
    const boundaryPoints = boundaryCurve.getPoints(64);
    const boundaryGeo = new THREE.BufferGeometry().setFromPoints(boundaryPoints);
    const boundaryMat = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const boundaryMesh = new THREE.LineLoop(boundaryGeo, boundaryMat);
    boundaryMesh.rotation.x = -Math.PI / 2;
    boundaryMesh.position.y = visualShadowBaseY + 0.005; // Slightly elevated to prevent z-fighting
    sceneGroup.add(boundaryMesh);
    bugBoundaryMesh = boundaryMesh; // Store reference for dynamic visibility toggling

    // Temporary question box collision boundary visualizer sphere
    const qBoxMinObs = SCENE_CONFIG.linkedin3D.minObstacleDist !== undefined ? SCENE_CONFIG.linkedin3D.minObstacleDist : 1.0;
    const qBoxBoundaryGeo = new THREE.SphereGeometry(qBoxMinObs, 32, 16);
    const qBoxBoundaryMat = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const qBoxBoundaryMesh = new THREE.Mesh(qBoxBoundaryGeo, qBoxBoundaryMat);
    qBoxBoundaryMesh.position.set(0, visualShadowBaseY, 0);
    sceneGroup.add(qBoxBoundaryMesh);
    bugObstacleMesh = qBoxBoundaryMesh; // Store reference for dynamic visibility toggling

    // Temporary Houdini toy collision boundary visualizer sphere
    const houdiniMinObs = SCENE_CONFIG.linkedin3D.minObstacleDist !== undefined ? SCENE_CONFIG.linkedin3D.minObstacleDist : 1.0;
    const houdiniBoundaryGeo = new THREE.SphereGeometry(houdiniMinObs, 32, 16);
    const houdiniBoundaryMat = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    houdiniObstacleMesh = new THREE.Mesh(houdiniBoundaryGeo, houdiniBoundaryMat);
    sceneGroup.add(houdiniObstacleMesh);

    // Temporary Web Globe collision boundary visualizer sphere
    const webMinObs = SCENE_CONFIG.linkedin3D.minObstacleDist !== undefined ? SCENE_CONFIG.linkedin3D.minObstacleDist : 1.0;
    const webBoundaryGeo = new THREE.SphereGeometry(webMinObs, 32, 16);
    const webBoundaryMat = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    webGlobeObstacleMesh = new THREE.Mesh(webBoundaryGeo, webBoundaryMat);
    sceneGroup.add(webGlobeObstacleMesh);

    // Load bug_cube.obj for 3D LinkedIn link
    const bugTexture = new THREE.TextureLoader().load('graphics/li_logo_blue.png');
    bugTexture.encoding = THREE.sRGBEncoding;

    const bugMaterial = new THREE.MeshStandardMaterial({
      map: bugTexture,
      roughness: 1.0,
      metalness: 0.0
    });

    bugCubeGroup = new THREE.Group();

    const bugFbxLoader = new FBXLoader();
    bugFbxLoader.load('geometry/bug_cube.fbx', (object) => {
      object.traverse((child) => {
        if (child.isMesh) {
          if (child.isSkinnedMesh) {
            child.material = bugMaterial.clone();
            child.material.skinning = true;
          } else {
            child.material = bugMaterial;
          }
          child.geometry.computeVertexNormals();
        }
      });

      bugCubeGroup.add(object);

      // Setup animation mixer
      if (object.animations && object.animations.length > 0) {
        bugMixer = new THREE.AnimationMixer(object);

        const inspectClip = object.animations.find(clip => clip.name.toLowerCase().includes('inspect'));
        if (inspectClip) {
          bugInspectAction = bugMixer.clipAction(inspectClip);
          bugInspectAction.setLoop(THREE.LoopRepeat, Infinity);
        }

        const walkClip = object.animations.find(clip => clip.name.toLowerCase().includes('walk'));
        if (walkClip) {
          bugWalkAction = bugMixer.clipAction(walkClip);
          bugWalkAction.setLoop(THREE.LoopRepeat, Infinity);
        }

        const fallClip = object.animations.find(clip => clip.name.toLowerCase().includes('fall'));
        if (fallClip) {
          bugFallAction = bugMixer.clipAction(fallClip);
          bugFallAction.setLoop(THREE.LoopOnce, 1);
          bugFallAction.clampWhenFinished = true;
        }

        const standClip = object.animations.find(clip => clip.name.toLowerCase().includes('stand'));
        if (standClip) {
          bugStandAction = bugMixer.clipAction(standClip);
          bugStandAction.setLoop(THREE.LoopOnce, 1);
          bugStandAction.clampWhenFinished = true;
        }

        // Mixer finished event listener for state progression
        bugMixer.addEventListener('finished', (e) => {
          if (bugFallAction && e.action === bugFallAction) {
            triggerBugStand();
          } else if (bugStandAction && e.action === bugStandAction) {
            triggerBugInspectPostFall();
          }
        });
      }


      // Collect skinned meshes
      object.traverse((child) => {
        if (child.isSkinnedMesh) {
          bugSkinnedMeshes.push(child);
        }
      });

      // Set initial position and scale from configuration
      const bugInitPos = getLinkedInBugInitialPos();
      bugCubeGroup.position.set(
        bugInitPos.x,
        bugInitPos.y,
        bugInitPos.z
      );
      const s = SCENE_CONFIG.linkedin3D.scale !== undefined ? SCENE_CONFIG.linkedin3D.scale : 0.4;
      bugCubeGroup.scale.set(s, s, s);

      sceneGroup.add(bugCubeGroup);

      // Create shadow under the LinkedIn block
      linkedinShadowMaterial = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('graphics/shadow.png'),
        transparent: true,
        opacity: 0.6,
        depthWrite: false,
        blending: THREE.NormalBlending
      });

      const bugShadowGeo = new THREE.PlaneGeometry(1.5, 1.5);
      linkedinShadowMesh = new THREE.Mesh(bugShadowGeo, linkedinShadowMaterial);
      linkedinShadowMesh.rotation.x = -Math.PI / 2;

      const shadowBaseY = SCENE_CONFIG.questionBox.shadowY !== undefined ? SCENE_CONFIG.questionBox.shadowY : 0.22;
      linkedinShadowMesh.position.set(
        bugInitPos.x,
        shadowBaseY,
        bugInitPos.z
      );
      linkedinShadowMesh.renderOrder = 10; // Force rendering after refractive gel to prevent depth-sorting issues
      sceneGroup.add(linkedinShadowMesh);
      isBugModelLoaded = true;

      // Start walking animation immediately once loaded
      if (bugWalkAction) {
        bugWalkAction.reset().play();
        bugCurrentAnimState = 'walk';
      }

    });
  }

  // Load question_box.fbx
  const fbxLoader = new FBXLoader();
  const textureLoader = new THREE.TextureLoader();
  const questionTexture = textureLoader.load('graphics/question.png');
  const dotsNormalMap = textureLoader.load('graphics/dots_normals.png');

  // Set texture wrap and filtering for normal map
  dotsNormalMap.wrapS = THREE.RepeatWrapping;
  dotsNormalMap.wrapT = THREE.RepeatWrapping;

  // Load and construct contact shadow plane below the question box
  const shadowTexture = textureLoader.load('graphics/shadow.png');
  shadowMaterial = new THREE.MeshBasicMaterial({
    map: shadowTexture,
    transparent: true,
    opacity: 0.6,
    depthWrite: false,
    blending: THREE.NormalBlending
  });
  const shadowGeo = new THREE.PlaneGeometry(1.5, 1.5);
  if (SCENE_CONFIG.questionBox.enabled !== false) {
    shadowMesh = new THREE.Mesh(shadowGeo, shadowMaterial);
    shadowMesh.rotation.x = -Math.PI / 2; // Lie flat on the gel surface
    const qBoxPos = SCENE_CONFIG.questionBox.position;
    const shadowBaseY = SCENE_CONFIG.questionBox.shadowY !== undefined ? SCENE_CONFIG.questionBox.shadowY : 0.08;
    shadowMesh.position.set(qBoxPos.x, shadowBaseY, qBoxPos.z);
    shadowMesh.renderOrder = 10; // Force rendering after refractive gel to prevent depth-sorting issues
    sceneGroup.add(shadowMesh);
  }

  if (SCENE_CONFIG.questionBox.enabled !== false) {
    const g = SCENE_CONFIG.questionBox.glass;
    fbxExteriorMaterial = new THREE.MeshPhysicalMaterial({
      color: g.color,
      transparent: true,
      opacity: g.opacity,
      transmission: g.transmission,
      roughness: g.roughness,
      ior: g.ior,
      reflectivity: g.reflectivity,
      clearcoat: g.clearcoat,
      clearcoatRoughness: g.clearcoatRoughness,
      depthWrite: false
    });

    const m = SCENE_CONFIG.questionBox.metal;
    fbxInteriorMaterial = new THREE.MeshStandardMaterial({
      color: m.color,
      metalness: m.metalness,
      roughness: m.roughness,
      normalMap: dotsNormalMap
    });
    if (fbxInteriorMaterial.normalScale) {
      fbxInteriorMaterial.normalScale.set(m.normalScale, m.normalScale);
    }

    const fbxPlaneMaterial = new THREE.MeshBasicMaterial({
      map: questionTexture,
      transparent: true,
      opacity: 1.0,
      side: THREE.DoubleSide
    });

    fbxLoader.load('geometry/question_box.fbx', (fbx) => {
      fbx.traverse((child) => {
        if (child.isMesh) {
          // Robust check of child name and parent name for flat/hierarchical FBX imports (case-insensitive)
          const fullName = (child.name + " " + (child.parent ? child.parent.name : "")).toLowerCase();
          if (fullName.includes('exterior')) {
            child.material = fbxExteriorMaterial;
            child.userData.isQuestionBoxExterior = true;
          } else if (fullName.includes('interior')) {
            child.material = fbxInteriorMaterial;
          } else if (fullName.includes('plane')) {
            child.material = fbxPlaneMaterial;
            fbxPlane = child; // Reference for camera billboarding
          } else {
            // Safeguard fallback: assign glass material to prevent null material crashes in Three.js renderer
            child.material = fbxExteriorMaterial;
            child.userData.isQuestionBoxExterior = true;
            console.warn("Unexpected mesh/parent name in question_box FBX, fallbacked:", child.name, "Parent:", child.parent ? child.parent.name : "null");
          }
        }
      });

      questionBoxGroup = fbx;

      // Position and scale based on SCENE_CONFIG — pick mobile or desktop position
      if (SCENE_CONFIG.questionBox) {
        const qbCfg = SCENE_CONFIG.questionBox;
        const qbPosCfg = isMobileInitial && qbCfg.mobile ? qbCfg.mobile.position : (qbCfg.desktop ? qbCfg.desktop.position : qbCfg.position);
        fbx.position.set(qbPosCfg.x, qbPosCfg.y, qbPosCfg.z);
        fbx.userData.baseX = qbPosCfg.x;
        fbx.userData.baseY = qbPosCfg.y;
        fbx.userData.baseZ = qbPosCfg.z;
        const s = qbCfg.scale;
        fbx.scale.set(s, s, s);
      }

      // Log size for debugging
      const box3 = new THREE.Box3().setFromObject(fbx);
      const sizeVec = new THREE.Vector3();
      box3.getSize(sizeVec);

      sceneGroup.add(fbx);
    }, undefined, (error) => {
      console.error("Error loading FBX question box:", error);
    });
  }

  // Load rubbertoy textures and FBX
  if (SCENE_CONFIG.houdini3D && SCENE_CONFIG.houdini3D.enabled !== false) {
    const toyBaseColorMap = textureLoader.load('graphics/toylowres.png');
    const toySpecularMap = textureLoader.load('graphics/toyspeclowres.png');
    toyBaseColorMap.encoding = THREE.sRGBEncoding;

    const matCfg = SCENE_CONFIG.houdini3D.material || {};
    toyMaterial = new THREE.MeshPhongMaterial({
      color: new THREE.Color(matCfg.color !== undefined ? matCfg.color : 0xffffff),
      map: toyBaseColorMap,
      specularMap: toySpecularMap,
      shininess: matCfg.shininess !== undefined ? matCfg.shininess : 30,
      specular: new THREE.Color(matCfg.specular !== undefined ? matCfg.specular : 0x222222),
      morphTargets: true,
      skinning: true
    });

    // Create shadow plane for the rubber toy
    const shadowTexture = textureLoader.load('graphics/shadow.png');
    houdiniShadowMaterial = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
      blending: THREE.NormalBlending
    });
    const shadowGeo = new THREE.PlaneGeometry(1.5, 1.5);
    houdiniShadowMesh = new THREE.Mesh(shadowGeo, houdiniShadowMaterial);
    houdiniShadowMesh.rotation.x = -Math.PI / 2;
    const hCfg = isMobileInitial ? SCENE_CONFIG.houdini3D.mobile : SCENE_CONFIG.houdini3D.desktop;
    const shadowBaseY = SCENE_CONFIG.houdini3D.shadowY !== undefined ? SCENE_CONFIG.houdini3D.shadowY : 0.08;
    houdiniShadowMesh.position.set(hCfg.position.x, shadowBaseY, hCfg.position.z);
    houdiniShadowMesh.renderOrder = 10;
    sceneGroup.add(houdiniShadowMesh);

    fbxLoader.load('geometry/rubbertoy.fbx', (fbx) => {
      rubberToyMeshes = [];
      fbx.traverse((child) => {
        if (child.isMesh) {
          const mat = toyMaterial.clone();
          mat.morphTargets = true;
          mat.skinning = child.isSkinnedMesh === true;
          child.material = mat;
          if (child.morphTargetDictionary) {
            console.log("[Houdini Toy] Mesh:", child.name, "| Morph Target Dictionary:", child.morphTargetDictionary);
          }
          if (typeof child.updateMorphTargets === 'function') {
            child.updateMorphTargets();
          }
          rubberToyMeshes.push(child);
        }
      });

      houdiniToyGroup = fbx;

      // Position, scale, and rotate based on initial screen context
      const pos = hCfg.position;
      fbx.position.set(pos.x, pos.y, pos.z);
      fbx.userData.baseX = pos.x;
      fbx.userData.baseY = pos.y;
      fbx.userData.baseZ = pos.z;
      const s = SCENE_CONFIG.houdini3D.scale;
      fbx.scale.set(s, s, s);

      if (SCENE_CONFIG.houdini3D.rotation) {
        const rot = SCENE_CONFIG.houdini3D.rotation;
        fbx.rotation.set(
          (rot.x || 0) * Math.PI / 180,
          (rot.y || 0) * Math.PI / 180,
          (rot.z || 0) * Math.PI / 180
        );
      }

      sceneGroup.add(fbx);
    }, undefined, (error) => {
      console.error("Error loading FBX rubbertoy:", error);
    });
  }

  // Load Web 3D Globe textures and FBX
  if (SCENE_CONFIG.web3D && SCENE_CONFIG.web3D.enabled !== false) {
    const wCfg = SCENE_CONFIG.web3D;
    const mCfg = wCfg.materials || {};

    const gridTexture = textureLoader.load((mCfg.grid && mCfg.grid.emissiveMap) || 'graphics/grid.png');

    const gMatCfg = mCfg.grid || {};
    webGridMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(gMatCfg.color !== undefined ? gMatCfg.color : 0xffffff),
      emissive: new THREE.Color(gMatCfg.emissive !== undefined ? gMatCfg.emissive : 0xffffff),
      emissiveMap: gridTexture,
      emissiveIntensity: gMatCfg.emissiveIntensity !== undefined ? gMatCfg.emissiveIntensity : 1.0,
      roughness: gMatCfg.roughness !== undefined ? gMatCfg.roughness : 0.2,
      metalness: gMatCfg.metalness !== undefined ? gMatCfg.metalness : 0.1
    });

    const aMatCfg = mCfg.antenna || {};
    webAntennaMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(aMatCfg.color !== undefined ? aMatCfg.color : 0xcccccc),
      roughness: aMatCfg.roughness !== undefined ? aMatCfg.roughness : 0.3,
      metalness: aMatCfg.metalness !== undefined ? aMatCfg.metalness : 0.8
    });

    const mMatCfg = mCfg.moon || {};
    webMoonMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(mMatCfg.color !== undefined ? mMatCfg.color : 0xffffff),
      emissive: new THREE.Color(mMatCfg.emissive !== undefined ? mMatCfg.emissive : 0xffffff),
      emissiveIntensity: mMatCfg.emissiveIntensity !== undefined ? mMatCfg.emissiveIntensity : 1.0,
      roughness: mMatCfg.roughness !== undefined ? mMatCfg.roughness : 0.3,
      metalness: mMatCfg.metalness !== undefined ? mMatCfg.metalness : 0.1
    });

    const sMatCfg = mCfg.signal || {};
    webSignalMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(sMatCfg.color !== undefined ? sMatCfg.color : 0x000000),
      emissive: new THREE.Color(sMatCfg.emissive !== undefined ? sMatCfg.emissive : 0x2267ff),
      emissiveIntensity: sMatCfg.emissiveIntensity !== undefined ? sMatCfg.emissiveIntensity : 1.2,
      roughness: sMatCfg.roughness !== undefined ? sMatCfg.roughness : 0.3,
      metalness: sMatCfg.metalness !== undefined ? sMatCfg.metalness : 0.1
    });

    // Contact shadow plane for the Web Globe
    const shadowTexture = textureLoader.load('graphics/shadow.png');
    webShadowMaterial = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
      blending: THREE.NormalBlending
    });
    const shadowGeo = new THREE.PlaneGeometry(1.5, 1.5);
    webShadowMesh = new THREE.Mesh(shadowGeo, webShadowMaterial);
    webShadowMesh.rotation.x = -Math.PI / 2;
    const initialPos = isMobileInitial ? wCfg.mobile.position : wCfg.desktop.position;
    const shadowBaseY = wCfg.shadowY !== undefined ? wCfg.shadowY : 0.33;
    webShadowMesh.position.set(initialPos.x, shadowBaseY, initialPos.z);
    webShadowMesh.renderOrder = 10;
    sceneGroup.add(webShadowMesh);

    webSignalInnerMesh = null;
    webSignalMiddleMesh = null;
    webSignalOuterMesh = null;

    fbxLoader.load('geometry/globe.fbx', (fbx) => {
      fbx.traverse((child) => {
        if (child.isMesh) {
          const cName = (child.name || "").toLowerCase();
          if (cName.includes('moon')) {
            child.material = webMoonMaterial;
            webMoonMesh = child;
          } else if (cName.includes('antenna')) {
            child.material = webAntennaMaterial;
          } else if (cName.includes('signal_inner') || cName.includes('signalinner') || cName.includes('signal_1') || cName.includes('signal1')) {
            child.material = webSignalMaterial;
            webSignalInnerMesh = child;
          } else if (cName.includes('signal_middle') || cName.includes('signalmiddle') || cName.includes('signal_2') || cName.includes('signal2')) {
            child.material = webSignalMaterial;
            webSignalMiddleMesh = child;
          } else if (cName.includes('signal_outer') || cName.includes('signalouter') || cName.includes('signal_3') || cName.includes('signal3')) {
            child.material = webSignalMaterial;
            webSignalOuterMesh = child;
          } else if (cName.includes('globe')) {
            child.material = webGridMaterial;
            webGlobeMesh = child;
          } else {
            child.material = webGridMaterial;
          }
        }
      });

      webGlobeGroup = fbx;
      fbx.position.set(initialPos.x, initialPos.y, initialPos.z);
      fbx.userData.baseX = initialPos.x;
      fbx.userData.baseY = initialPos.y;
      fbx.userData.baseZ = initialPos.z;

      const s = wCfg.scale || 1.0;
      fbx.scale.set(s, s, s);

      if (wCfg.rotation) {
        fbx.rotation.set(
          (wCfg.rotation.x || 0) * Math.PI / 180,
          (wCfg.rotation.y || 0) * Math.PI / 180,
          (wCfg.rotation.z || 0) * Math.PI / 180
        );
      }

      // Log bounding box for scale verification
      const box3 = new THREE.Box3().setFromObject(fbx);
      const sizeVec = new THREE.Vector3();
      box3.getSize(sizeVec);
      console.log("[Web Globe 3D] Loaded! Size:", sizeVec, `Signal meshes: Inner=${!!webSignalInnerMesh}, Middle=${!!webSignalMiddleMesh}, Outer=${!!webSignalOuterMesh}`);

      sceneGroup.add(fbx);
    }, undefined, (error) => {
      console.error("Error loading FBX globe:", error);
    });
  }

  // Targets for plate positions and rotations
  plateTargetPos = new THREE.Vector3(0, -0.8, 0);
  plateTargetRot = new THREE.Vector3(0, 0, 0);

  // Cubes Array & Hover trackers (reassigned/initialized)
  cubes = [];
  hoveredCube = null;
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2(-9999, -9999);
  linkHoveredCube = null;
  isSpinning = false;
  // Drag-rotation variables
  let isDraggingPointer = false;
  let previousPointerPos = { x: 0, y: 0 };
  let targetRotationX = 0;
  let targetRotationY = 0;
  let currentRotationX = 0;
  let currentRotationY = 0;
  let spinStartTime = 0;
  let startSpinRotation = 0;
  let lastRotationX = 0;

  // Helper to render text labels onto CanvasTextures
  function createTextTexture(text, textColor) {
    const textCanvas = document.createElement('canvas');
    textCanvas.width = 512;
    textCanvas.height = 512;
    const ctx = textCanvas.getContext('2d');

    // Fill soft dark radial gradient background
    const grad = ctx.createRadialGradient(256, 256, 10, 256, 256, 360);
    grad.addColorStop(0, '#1c122c');
    grad.addColorStop(1, '#0c0514');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    // Dynamic colored border
    ctx.strokeStyle = textColor;
    ctx.lineWidth = 16;
    ctx.strokeRect(15, 15, 482, 482);

    // Text Label in the center
    ctx.font = 'bold 72px "IBM Plex Mono", monospace';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = textColor;
    ctx.shadowBlur = 15;
    ctx.fillText(text, 256, 256);

    const texture = new THREE.CanvasTexture(textCanvas);
    return texture;
  }

  // Helper to generate a placeholder star/sparkle CanvasTexture
  function createPlaceholderSparkleTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    // Clear and draw radial soft glow gradient
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    grad.addColorStop(0.2, 'rgba(255, 255, 220, 0.8)');
    grad.addColorStop(0.6, 'rgba(255, 220, 255, 0.2)');
    grad.addColorStop(1.0, 'rgba(255, 255, 255, 0.0)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();

    // Draw star spikes (crosshair line flare)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(32, 10);
    ctx.lineTo(32, 54);
    ctx.moveTo(10, 32);
    ctx.lineTo(54, 32);
    ctx.stroke();

    // Draw minor diagonal spikes
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(44, 44);
    ctx.moveTo(20, 44);
    ctx.lineTo(44, 20);
    ctx.stroke();

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  // Helper to generate a volumetric god ray beam CanvasTexture
  function createGodRayTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    const gradV = ctx.createLinearGradient(0, 0, 0, 512);
    gradV.addColorStop(0.0, 'rgba(255, 255, 255, 0.0)');
    gradV.addColorStop(0.15, 'rgba(255, 255, 255, 0.7)');
    gradV.addColorStop(0.4, 'rgba(255, 255, 255, 1.0)');
    gradV.addColorStop(0.75, 'rgba(255, 255, 255, 0.4)');
    gradV.addColorStop(1.0, 'rgba(255, 255, 255, 0.0)');

    const gradH = ctx.createLinearGradient(0, 0, 128, 0);
    gradH.addColorStop(0.0, 'rgba(255, 255, 255, 0.0)');
    gradH.addColorStop(0.5, 'rgba(255, 255, 255, 1.0)');
    gradH.addColorStop(1.0, 'rgba(255, 255, 255, 0.0)');

    ctx.fillStyle = gradV;
    ctx.fillRect(0, 0, 128, 512);

    ctx.globalCompositeOperation = 'destination-in';
    ctx.fillStyle = gradH;
    ctx.fillRect(0, 0, 128, 512);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  // Cubes Configurations (About cube removed - replaced by 3D question box)
  if (SCENE_CONFIG.placeholderCubes.enabled !== false) {
    const clickHandlers = {
      ar: arLinkClicked,
      games: gamesLinkClicked,
      web: webLinkClicked,
      houdini: houdiniLinkClicked
    };

    const cubesConfig = [];
    if (SCENE_CONFIG.placeholderCubes.items) {
      SCENE_CONFIG.placeholderCubes.items.forEach(item => {
        cubesConfig.push({
          name: item.name,
          label: item.label,
          color: item.color,
          onClick: clickHandlers[item.name]
        });
      });
    }

    const m = SCENE_CONFIG.placeholderCubes.material || {};
    const baseMaterial = new THREE.MeshPhysicalMaterial({
      color: m.color !== undefined ? m.color : 0x181024,
      roughness: m.roughness !== undefined ? m.roughness : 0.15,
      metalness: m.metalness !== undefined ? m.metalness : 0.1,
      transmission: m.transmission !== undefined ? m.transmission : 0.6,
      opacity: m.opacity !== undefined ? m.opacity : 0.85,
      transparent: m.transparent !== undefined ? m.transparent : true,
      clearcoat: m.clearcoat !== undefined ? m.clearcoat : 1.0,
      clearcoatRoughness: m.clearcoatRoughness !== undefined ? m.clearcoatRoughness : 0.1
    });

    // Construct Cubes
    cubesConfig.forEach((cfg) => {
      const textTex = createTextTexture(cfg.label, cfg.color);
      const frontMaterial = new THREE.MeshPhysicalMaterial({
        map: textTex,
        roughness: m.roughness !== undefined ? m.roughness : 0.15,
        metalness: m.metalness !== undefined ? m.metalness : 0.1,
        clearcoat: m.clearcoat !== undefined ? m.clearcoat : 1.0,
        clearcoatRoughness: m.clearcoatRoughness !== undefined ? m.clearcoatRoughness : 0.1
      });

      const materials = [
        baseMaterial, // Right
        baseMaterial, // Left
        baseMaterial, // Top
        baseMaterial, // Bottom
        frontMaterial, // Front
        baseMaterial  // Back
      ];

      const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
      const cube = new THREE.Mesh(geometry, materials);

      const layout = isMobileInitial
        ? SCENE_CONFIG.placeholderCubes.layout.mobile
        : SCENE_CONFIG.placeholderCubes.layout.desktop;

      let baseX = 0, baseY = 0, baseZ = 0;
      if (layout.useIndividual && layout.individual && layout.individual[cfg.name]) {
        const pos = layout.individual[cfg.name];
        baseX = pos.x;
        baseY = pos.y;
        baseZ = pos.z;
      } else {
        const i = cubes.length;
        baseX = (i - (cubesConfig.length - 1) / 2) * layout.spacing;
        baseY = 0;
        baseZ = 0;
      }

      cube.userData = {
        name: cfg.name,
        color: cfg.color,
        onClick: cfg.onClick,
        isHovered: false,
        baseX: baseX,
        baseY: baseY,
        baseZ: baseZ,
        rotationSpeedX: 0.003 + Math.random() * 0.002,
        rotationSpeedY: 0.005 + Math.random() * 0.003
      };
      cube.position.set(baseX, baseY, baseZ);

      sceneGroup.add(cube);
      cubes.push(cube);
    });
  }


  const arHomeButton = document.getElementById('mobileartraybuttonhome');
  const arLastButton = document.getElementById('mobileartraybuttonlast');
  const arNextButton = document.getElementById('mobileartraybuttonnext');
  const arInfoMobileLastAnim = document.getElementById("arinfopanelmobilelastanim");
  const arInfoMobileLastButton = document.getElementById("arinfopanelmobilelastbutton");
  const arInfoMobileCloseAnim = document.getElementById("arinfopanelmobilecloseanim");
  const arInfoMobileCloseButton = document.getElementById("arinfopanelmobileclosebutton");
  const arInfoMobileNextAnim = document.getElementById("arinfopanelmobilenextanim");
  const arInfoMobileNextButton = document.getElementById("arinfopanelmobilenextbutton");

  let arGamesButton = null;
  let socialArButton = null;

  // ==========================================
  // 1.5 Populate Phone Screen Scroll Contents
  // ==========================================
  const phoneScreenContents = `
    <div class="mobilearprojectsdiv">
      <div class="mobilearprojectsdivtitle"> AR Games </div>
      <div class="mobilearprojectsdivsubtitlewrapper"> <div class="mobilearprojectsdivsubtitle"> Game Code </div> </div>
      <div class="mobilearprojectsdivsubtitlespacer"></div>
      <div class="mobilearprojectsdivsubtitlewrapper"> <div class="mobilearprojectsdivsubtitle"> Technical Art </div> </div>
      <div class="mobilearprojectsdivsubtitlespacer"></div>
      <div class="mobilearprojectsdivsubtitlewrapper"> <div class="mobilearprojectsdivsubtitle"> Networking </div> </div>
      <div class="mobilearprojectsdivcontent"> Multiplayer games for video calling. I built games from prototype to public release. </div>
      <div id="viewargamesbutton" class="mobilearprojectsdivbuttonwrapper">
        <div class="mobilearprojectsdivbutton" style="background-color: #ffae21;"> View Project </div>
      </div>
      <div class="mobilearprojectsdivgradient"></div>
      <div id="argamesdivback" class="mobilearprojectsdivback"></div>
    </div>
    <div style="height: 2%;"></div>
    <div class="mobilearprojectsdiv">
      <div class="mobilearprojectsdivtitle"> Social AR </div>
      <div class="mobilearprojectsdivsubtitlewrapper"> <div class="mobilearprojectsdivsubtitle"> AR Code </div> </div>
      <div class="mobilearprojectsdivsubtitlespacer"></div>
      <div class="mobilearprojectsdivsubtitlewrapper"> <div class="mobilearprojectsdivsubtitle"> Technical Art </div> </div>
      <div class="mobilearprojectsdivsubtitlespacer"></div>
      <div class="mobilearprojectsdivsubtitlewrapper"> <div class="mobilearprojectsdivsubtitle"> Networking </div> </div>
      <div class="mobilearprojectsdivcontent"> Social experiences for video calling. I led Technical Art and development. </div>
      <div id="viewsocialarbutton" class="mobilearprojectsdivbuttonwrapper">
        <div class="mobilearprojectsdivbutton" style="background-color: #ff21a6;"> View Project </div>
      </div>
      <div class="mobilearprojectsdivgradient"></div>
      <div id="socialardivback" class="mobilearprojectsdivback"></div>
    </div>
    <div class="mobilearprojectsdiv" style="height: 2%; background: none;"></div>
  `;
  phoneScreenScrollWrapper.innerHTML = phoneScreenContents;

  const arGamesDivBackground = document.getElementById("argamesdivback");
  arGamesDivBackground.innerHTML = '<video autoplay loop muted playsinline preload="metadata" disablePictureInPicture> <source type="video/mp4" src="' + alienAttackPreviewUrl + '#t=0.1"> </video>';

  const socialArDivBackground = document.getElementById("socialardivback");
  socialArDivBackground.innerHTML = '<video autoplay loop muted playsinline preload="metadata" disablePictureInPicture> <source type="video/mp4" src="' + friendsSpacewalkPreviewUrl + '#t=0.1"> </video>';

  arGamesButton = document.getElementById('viewargamesbutton');
  socialArButton = document.getElementById('viewsocialarbutton');
  const arInfoCloseButton = document.getElementById("arinfopanelclosebutton");

  // ==========================================
  // 2. State & Data Setup
  // ==========================================
  var loadingComplete = false;

  var arProjectContext = 'main'; // 'main', 'arGames', 'socialAr'
  var arInfoPanelVisible = false;
  var arInfoPanelHorizontalLayout = true;

  var metaSocialArCapturesIndex = 0;
  var metaArGamesCapturesIndex = 0;
  var phoneScreenLoadingIndex = -1;
  var mobileNavMenuVisible = false;

  // AR Videos mapping
  const metaSocialArCaptures = [
    document.getElementById('friendsspacewalk'),
    document.getElementById('groupselfie'),
    document.getElementById('costumeselector'),
    document.getElementById('reshape'),
    document.getElementById('wintercoaster'),
    document.getElementById('abstractlove'),
    document.getElementById('angelsanddemons'),
    document.getElementById('poolfloaty'),
    document.getElementById('candycottage')
  ];

  const metaArGamesCaptures = [
    document.getElementById('alienattack'),
    document.getElementById('bumperroyale'),
    document.getElementById('charades'),
    document.getElementById('desertofdoom'),
    document.getElementById('dontfall'),
    document.getElementById('haveyouever'),
    document.getElementById('hotpotato'),
    document.getElementById('jumpwave'),
    document.getElementById('kawaiisushi'),
    document.getElementById('mazeofmystery'),
    document.getElementById('pestcontrol'),
    document.getElementById('sk8erz'),
    document.getElementById('snackup'),
    document.getElementById('snapnsnack'),
    document.getElementById('speedrush'),
    document.getElementById('trivia')
  ];

  // Video thumbnails mapping
  const metaSocialArThumbnails = [
    document.getElementById('friendsspacewalkthumb'),
    document.getElementById('groupselfiethumb'),
    document.getElementById('costumeselectorthumb'),
    document.getElementById('reshapethumb'),
    document.getElementById('wintercoasterthumb'),
    document.getElementById('abstractlovethumb'),
    document.getElementById('angelsanddemonsthumb'),
    document.getElementById('poolfloatythumb'),
    document.getElementById('candycottagethumb')
  ];

  const metaArGamesThumbnails = [
    document.getElementById('alienattackthumb'),
    document.getElementById('bumperroyalethumb'),
    document.getElementById('charadesthumb'),
    document.getElementById('desertofdoomthumb'),
    document.getElementById('dontfallthumb'),
    document.getElementById('haveyoueverthumb'),
    document.getElementById('hotpotatothumb'),
    document.getElementById('jumpwavethumb'),
    document.getElementById('kawaiisushithumb'),
    document.getElementById('mazeofmysterythumb'),
    document.getElementById('pestcontrolthumb'),
    document.getElementById('sk8erzthumb'),
    document.getElementById('snackupthumb'),
    document.getElementById('snapnsnackthumb'),
    document.getElementById('speedrushthumb'),
    document.getElementById('triviathumb')
  ];

  // AR metadata
  const metaSocialArTitles = ['Friends Spacewalk', 'Group Selfie', 'Costume Selector', 'Reshape Face', 'Winter Coaster', 'Abstract Love', 'Angels and Demons', 'Pool Floaty', 'Candy Cottage'];
  const metaArGamesTitles = ['Alien Attack', 'Bumper Royale', 'Charades', 'Desert of Doom', "Don't Fall", 'Have You Ever?', 'Hot Potato', 'Jump Wave', 'Kawaii Sushi', 'Maze of Mystery', 'Pest Control', 'Sk8erz', 'Snack Up', 'Snap N Snack', 'Speed Rush', 'Trivia'];

  const metaSocialArContents = [
    'Composing the faces of all the present callers into the heads of a many-headed alien enjoying a stroll on its tiny planet, this AR experience takes over the whole phone screen and is consistent for each caller, using networking technology to allow callers to see others moving their heads around in space.',
    'This AR experience is simple, but one of my favorites - callers are layered together using background segmentation into the same screen space, as if they were all in the same room. Ideal for taking virtual selfies together, callers can move to the front of the stack by shaking their phone. The possibilities for making funny scenes together are endless.',
    'All callers remain in the standard video calling grid format, taking turns choosing between two ridiculous costume options. Whichever they pick, that costume element will be applied to all callers. If the callers choose all four options in a matching set (pirate, rockstar, cyborg, or princess), a special secret costume element is revealed.',
    'No one is safe from having their face morphed into various shapes in this experience, in which callers can select shapes to morph the faces of everyone on the call.',
    'All callers faces are composed into a winter wonderland riding a sleigh-themed roller coaster. The experience uses the full phone screen, and sends the extracted faces of the other callers over the video call using a custom shader packing and unpacking system, and the rotation of the heads is possible using networking technology to send a rotational vector between callers.',
    'Callers are composed into a lovely scene full of hearts and pastel pinks. Want to capture a moment of love from far away, or create a valentines day AR photo? This is the experience for you!',
    'The Devil on one shoulder and the Angel on the other in this AR experience will be randomly selected from the other participants in the call - be careful who you listen to! This effect uses a variety of custom screen space shader effects to give each character their unique glow.',
    'Enjoy a relaxing trip to the pool on a hot summer day with this AR experience, which composes all callers into a scene complete with floaties, headwear, and a custom water shader. Each caller is given a unique set of accessories, synchronized over the network so everyone has a consistent experience.',
    'Each caller is placed in a window of a lovely gingerbread home in this holiday themed AR experience. Tilt your phone around to see more of the scene and watch out for the gingerbread homeowner peeking out of the door.'
  ];

  const metaArGamesContents = [
    'In this AR Game, callers work together to defend their fort from aliens by firing laser beams at them. As time goes on, stronger aliens arrive, making it harder and harder to keep them at bay. Callers are composed into the area at the bottom of the screen and each given a laser cannon, controlled by tapping on the screen.',
    'A thrilling battle royale, this time with bumper cars! Using Cannon.js for physics, callers are each given a car to drive by tapping on the screen to build momentum. As time goes on, the stage shrinks, giving players less and less room to maneuver. All car positions and events are synchronized over the network.',
    'Classic charades, with prompts only visible to the player taking their turn. Score points by guessing what the active player is acting out, and laugh as everyone tries to figure out how to act things out while holding their phone.',
    'A turn-based cooperative game, where one player tries to navigate a field of dangerous cacti during sandstorm that prevents them from seeing in front of them. The other participants in the call CAN see the cacti, however, and yell at the player to go left or right based on what\'s ahead.',
    'Players navigate a tightrope way up high, where fans suspended by balloons create gusty winds that threaten to blow players away if they don\'t lean in just right. The last player left walking the tightrope wins!',
    'Participants are asked a series of yes or no questions, such as "Have you ever seen a ghost?" If they answer yes, they get a badge corresponding to that answer. Build up a halo of badges to impress your friends with all your experiences!',
    'Hot potato! But this time it\'s alive, and clinging to your face! Shake it off to send it to someone else, and be ever wary of the heat - it might just pop into a delicious potato-based treat at any second.',
    'Jump up and up and up, as high as you can go, in this endless platform jumping game. Watch your friends above or below you with off-screen indicators showing their position - if you fall, you can spectate the current leader until everyone has fallen and the players are ranked.',
    'Catch as much sushi as you can in the limited amount of time available, competing with the other players in the call. Whoever catches the most sushi wins - just be careful that you don\'t swallow the wasabi, which will subtract a point!',
    'This AR game procedurally generates a random haunted house maze each time it\'s played. Avoid ghosts, dead ends, and arguments with your friends as you take turns steering the characters to try and find the hidden magic goal in this mysterious maze.',
    'Just like whack-a-mole, but with a sly twist - in this game, players take turns trying to hit as many moles as they can with their mallets. However, they need to be careful that they don\'t accidentally whack one of their friends by mistake; you never know whose head is going to pop up next.',
    'Skate forever down this city street, if you can, but be careful of the many hazards that you\'ll encounter, including manholes, garbage cans, street signs and even pizza delivery drones. Kickflip and duck your way past more obstacles than your friends to win this game.',
    'Match the snack on your face with one floating down through the air in this object matching game, but be careful of nabbing the wrong one, especially as things move faster and faster. Get the most matches without being knocked out to score a victory and also be the fullest.',
    'Guide your hungry pet turtle to catch leaves, fruit, or, even better, falling stars that triple the points you receive from catching any of these. The most satisfied turtle when time runs out wins, and you and your turtle both get a leaf crown to celebrate.',
    'A good old classic racing game, compete with your friends to be the first to the finish. Steer your car by tilting your phone, and be careful that you don\'t crash, slowing you down and giving your competition a chance to pull ahead.',
    'Who knows more stuff? A classic question for a group of people on a video call, answered by playing a round of AR trivia! That\'s trivia in AR, not about AR. Try and answer as many of these obscure questions correctly to win and be officially recognized as the smartest person on the video call.'
  ];

  // ==========================================
  // 3. Layout & Transition Functions
  // ==========================================
  function updateArInfoPanelLayout() {
    let arInfoPanelX;
    let arInfoPanelXMin;

    if (window.innerWidth - window.innerHeight * 0.33 > window.innerHeight) {
      if (arInfoPanelVisible) {
        arInfoPanelCloseButton.style.visibility = 'visible';
      } else {
        arInfoPanelCloseButton.style.visibility = 'hidden';
      }
      arInfoPanelBackgroundBlur.style.visibility = 'hidden';
      arInfoPanelMobileButtons.style.visibility = 'hidden';
      arInfoPanelX = 46;
      arInfoPanelXMin = 340;
      arInfoPanelHorizontalLayout = true;
    } else {
      arInfoPanelCloseButton.style.visibility = 'hidden';
      if (arInfoPanelVisible) {
        arInfoPanelBackgroundBlur.style.visibility = 'visible';
        arInfoPanelMobileButtons.style.visibility = 'visible';
      } else {
        arInfoPanelBackgroundBlur.style.visibility = 'hidden';
        arInfoPanelMobileButtons.style.visibility = 'hidden';
      }
      arInfoPanelX = 0;
      arInfoPanelXMin = 0;
      arInfoPanelHorizontalLayout = false;
    }
    arInfoPanelParent.style.setProperty('left', 'calc(50% + max(' + arInfoPanelX + 'vh, ' + arInfoPanelXMin + 'px))');
  }

  function updateMainNavLinksLayout() {
    const linkedinDesktop = document.getElementById("linkedin-desktop-wrapper");
    if (window.innerWidth > window.innerHeight) {
      if (mobileNavMenuVisible) showMobileNavMenu();
      mainNavLinks.style.visibility = 'visible';
      if (linkedinDesktop) linkedinDesktop.style.visibility = 'visible';
      mobileNavLinksButton.style.visibility = 'hidden';
    } else {
      mainNavLinks.style.visibility = 'hidden';
      if (linkedinDesktop) linkedinDesktop.style.visibility = 'hidden';
      mobileNavLinksButton.style.visibility = 'visible';
    }
  }

  function updateArInfoPanel() {
    if (arProjectContext == 'socialAr' && arInfoPanelVisible) {
      arInfoPanelSubject.innerHTML = "Social AR";
      arInfoPanelTitle.innerHTML = metaSocialArTitles[metaSocialArCapturesIndex];
      arInfoPanelContent.innerHTML = metaSocialArContents[metaSocialArCapturesIndex];

      metaSocialArThumbnails.forEach(el => { el.style.visibility = 'hidden'; });
      metaSocialArThumbnails[metaSocialArCapturesIndex].style.visibility = 'visible';
    } else if (arProjectContext == 'arGames' && arInfoPanelVisible) {
      arInfoPanelSubject.innerHTML = "AR Games";
      arInfoPanelTitle.innerHTML = metaArGamesTitles[metaArGamesCapturesIndex];
      arInfoPanelContent.innerHTML = metaArGamesContents[metaArGamesCapturesIndex];

      metaArGamesThumbnails.forEach(el => { el.style.visibility = 'hidden'; });
      metaArGamesThumbnails[metaArGamesCapturesIndex].style.visibility = 'visible';
    } else {
      metaSocialArThumbnails.forEach(el => { el.style.visibility = 'hidden'; });
      metaArGamesThumbnails.forEach(el => { el.style.visibility = 'hidden'; });
    }
  }

  function stopCurrentArVideo() {
    if (arProjectContext == 'socialAr') {
      metaSocialArCaptures[metaSocialArCapturesIndex].style = 'display: none';
      metaSocialArCaptures[metaSocialArCapturesIndex].pause();
      metaSocialArCaptures[metaSocialArCapturesIndex].currentTime = 0;
    } else if (arProjectContext == 'arGames') {
      metaArGamesCaptures[metaArGamesCapturesIndex].style = 'display: none';
      metaArGamesCaptures[metaArGamesCapturesIndex].pause();
      metaArGamesCaptures[metaArGamesCapturesIndex].currentTime = 0;
    }
  }

  function showPhoneUI() {
    if (currentTarget == "ar") {
      phoneScreenPanel.style.visibility = 'visible';
      phoneScreenHeader.style.setProperty('animation', 'mobileArProjectsHeaderIn 1.0s forwards');
      phoneScreenHeader.style.visibility = 'visible';
      requestTimeout(() => { phoneScreenHeader.style.setProperty('animation', ''); }, 1000);

      phoneScreenScrollWrapper.style.setProperty('animation', 'mobileArScrollWrapperIn 1.0s forwards');
      phoneScreenScrollWrapper.style.visibility = 'visible';
      requestTimeout(() => { phoneScreenScrollWrapper.style.setProperty('animation', ''); }, 1000);
    } else {
      phoneScreenPanel.style.visibility = 'hidden';
      stopCurrentArVideo();

      phoneScreenHeader.style.visibility = 'hidden';
      phoneScreenScrollWrapper.style.visibility = 'hidden';
      phoneScreenTray.style.visibility = 'hidden';
      phoneScreenInfoButton.style.visibility = 'hidden';
      arLoading.style.visibility = 'hidden';
      phoneScreenLoading.forEach(el => { el.style.visibility = 'hidden'; });

      arInfoPanelVisible = false;
      updateArInfoPanel();

      arInfoPanel.style.setProperty('animation', '');
      arInfoPanelBackgroundBlur.style.setProperty('animation', '');
      arInfoPanelIcon.style.setProperty('animation', '');
      arInfoPanelCloseButton.style.setProperty('animation', '');
      arInfoPanelText.style.setProperty('animation', '');
      arInfoPanel.style.visibility = 'hidden';

      updateArInfoPanelLayout();
      arProjectContext = 'main';
    }
  }

  function showArInfoPanel(animate) {
    canInteract = false;
    if (animate) {
      requestTimeout(() => {
        if (arInfoPanelVisible) {
          arInfoPanelVisible = false;
          arInfoPanel.style.setProperty('animation', 'arInfoPanelOut 0.3s, forwards');
          arInfoPanelBackgroundBlur.style.setProperty('animation', 'arInfoPanelBackgroundBlurOut 0.3s, forwards');
          arInfoPanelIcon.style.setProperty('animation', 'arInfoIconOut 0.3s, forwards');
          arInfoPanelCloseButton.style.setProperty('animation', 'arInfoCloseButtonOut 0.3s, forwards');
          arInfoPanelText.style.setProperty('animation', 'arInfoTextOut 0.3s, forwards');

          requestTimeout(() => {
            arInfoPanel.style.visibility = 'hidden';
            updateArInfoPanel();
            updateArInfoPanelLayout();
          }, 300);
        } else {
          arInfoPanelVisible = true;
          arInfoPanel.style.setProperty('animation', 'arInfoPanelIn 0.7s, forwards');
          arInfoPanelBackgroundBlur.style.setProperty('animation', 'arInfoPanelBackgroundBlurIn 0.7s, forwards');
          arInfoPanelIcon.style.setProperty('animation', 'arInfoIconIn 0.7s, forwards');
          arInfoPanelCloseButton.style.setProperty('animation', 'arInfoCloseButtonIn 0.7s, forwards');
          arInfoPanelText.style.setProperty('animation', 'arInfoTextIn 0.7s, forwards');

          arInfoPanel.style.visibility = 'visible';
          updateArInfoPanelLayout();
          updateArInfoPanel();
        }
        requestTimeout(() => { canInteract = true; }, 400);
      }, 100);
    } else {
      if (arInfoPanelVisible) {
        arInfoPanelVisible = false;
        arInfoPanel.style.setProperty('animation', '');
        arInfoPanelBackgroundBlur.style.setProperty('animation', '');
        arInfoPanelIcon.style.setProperty('animation', '');
        arInfoPanelCloseButton.style.setProperty('animation', '');
        arInfoPanelText.style.setProperty('animation', '');
        arInfoPanel.style.visibility = 'hidden';
        updateArInfoPanel();
        updateArInfoPanelLayout();
      }
      canInteract = true;
    }
  }

  function showMobileNavMenu() {
    if (mobileNavMenuVisible) {
      mobileNavMenu.classList.remove('is-active');
      mobileNavLinksButtonTop.style.setProperty('animation', 'mobileNavButtonTopOut 0.2s forwards');
      mobileNavLinksButtonMiddle.style.setProperty('animation', 'mobileNavButtonMiddleOut 0.2s forwards');
      mobileNavLinksButtonBottom.style.setProperty('animation', 'mobileNavButtonBottomOut 0.2s forwards');
      mobileNavMenuVisible = false;

      requestTimeout(() => {
        mobileNavMenu.style.visibility = 'hidden';
      }, 200);
    } else {
      canInteract = false;
      mobileNavMenu.style.visibility = 'visible';
      requestAnimationFrame(() => {
        mobileNavMenu.classList.add('is-active');
      });
      mobileNavLinksButtonTop.style.setProperty('animation', 'mobileNavButtonTopIn 0.3s forwards');
      mobileNavLinksButtonMiddle.style.setProperty('animation', 'mobileNavButtonMiddleIn 0.3s forwards');
      mobileNavLinksButtonBottom.style.setProperty('animation', 'mobileNavButtonBottomIn 0.3s forwards');
      mobileNavMenuVisible = true;
      requestTimeout(() => {
        if (!isAboutOverlayActive()) {
          canInteract = true;
        }
      }, 300);
    }
  }

  function setAboutPanelDrawn(isDrawn) {
    aboutPanel.classList.toggle('is-drawn', isDrawn);
  }

  function setAboutPanelTransitionDirection(isOpening) {
    aboutPanel.classList.toggle('is-opening', isOpening);
    aboutPanel.classList.toggle('is-closing', !isOpening);
  }

  function isAboutOverlayActive() {
    return aboutOverlayVisible || aboutOverlayAnimating;
  }

  function canUse2DMenu() {
    return canInteract || isAboutOverlayActive();
  }

  function playElementAnimation(el, animation) {
    if (!el) return;
    el.style.setProperty('animation', 'none');
    void el.offsetWidth;
    el.style.setProperty('animation', animation);
  }

  function playMenuPress(...els) {
    els.forEach((el) => playElementAnimation(el, 'menuPress 0.42s forwards'));
  }

  function playMenuSelect(...els) {
    els.forEach((el) => playElementAnimation(el, 'menuSelect 0.42s forwards'));
  }

  function playLogoPress() {
    // Logo bounce animation removed on click
  }

  function startQuestionBoxRespawn() {
    if (questionBoxGroup) {
      isQBoxRegrowingSoundPlayed = false;
      respawnStartTime = performance.now();
    } else {
      canInteract = true;
    }
  }

  function showAboutOverlay(options = {}) {
    if (aboutOverlayVisible || aboutOverlayAnimating) return;

    aboutOverlayVisible = true;
    aboutOverlayAnimating = true;
    regrowQuestionBoxAfterAboutClose = !!options.regrowQuestionBox;
    canInteract = false;
    body.style.setProperty('cursor', 'default');
    clearOutlines();

    if (aboutMePanel) {
      aboutMePanel.style.visibility = 'hidden';
    }
    if (downArrow) {
      downArrow.style.visibility = 'hidden';
    }

    aboutOverlay.classList.add('is-visible');
    setAboutPanelTransitionDirection(true);
    setAboutPanelDrawn(false);

    // Mark the About link as non-interactable while panel is open
    aboutLink.classList.add('is-panel-open');
    aboutLinkMobile.classList.add('is-panel-open');

    requestAnimationFrame(() => {
      updateBorderPaths();
      aboutOverlay.classList.add('is-active');
      setAboutPanelDrawn(true);
    });

    requestTimeout(() => {
      aboutOverlayAnimating = false;
    }, 480);
  }

  function hideAboutOverlay() {
    if (!aboutOverlayVisible && !aboutOverlayAnimating) return;

    aboutOverlayAnimating = true;
    aboutOverlayVisible = false;
    body.style.setProperty('cursor', 'default');

    setAboutPanelTransitionDirection(false);
    setAboutPanelDrawn(false);
    aboutOverlay.classList.remove('is-active');

    // The about link had pointer-events:none while the panel was open, so
    // mouseout never fired. Explicitly clear the hover state now.
    linkHoveredAbout = false;
    clearOutlines();

    aboutLink.style.setProperty('animation', 'resetScaleBorder 0.25s forwards');
    aboutLink.classList.remove('is-panel-open');
    aboutLinkMobile.style.setProperty('animation', '');
    aboutLinkMobile.classList.remove('is-panel-open');
    if (homeLink) {
      homeLink._hoverActive = false;
      homeLink.style.setProperty('animation', 'shrink 0.25s forwards');
    }

    const shouldRespawnQuestionBox = regrowQuestionBoxAfterAboutClose;
    regrowQuestionBoxAfterAboutClose = false;

    requestTimeout(() => {
      aboutOverlay.classList.remove('is-visible');
      aboutOverlayAnimating = false;

      if (shouldRespawnQuestionBox) {
        startQuestionBoxRespawn();
      } else {
        canInteract = true;
      }
    }, 360);
  }

  aboutBlur.onclick = hideAboutOverlay;
  aboutCloseButton.onclick = hideAboutOverlay;
  aboutPanel.onclick = (event) => {
    event.stopPropagation();
  };

  // ==========================================
  // 4. State Transition Actions
  // ==========================================
  const RENDER_MODE_MAP = {
    'default': 0,
    'multiBit': 1,
    'oneBit': 2,
    'pixelated': 3,
    'gameBoy': 4,
    'vhs': 5,
    'halftone': 6,
    'blueprint': 7,
    'thermal': 8,
    'ascii': 9,
    'anaglyph': 10
  };

  function updateLogoImageForRenderMode(modeName) {
    const cfg = SCENE_CONFIG.renderStyles;
    let targetSrc = './graphics/thumbnail_ng_logo.png';

    if (cfg && cfg.logoImages && cfg.logoImages[modeName]) {
      targetSrc = cfg.logoImages[modeName];
    } else if (cfg && cfg[modeName] && cfg[modeName].logoSrc) {
      targetSrc = cfg[modeName].logoSrc;
    }

    const logoImg = document.getElementById("logolink");
    applyMaskToElement(logoImg, targetSrc);
  }

  function cycleRenderStyleMode() {
    const cfg = SCENE_CONFIG.renderStyles;
    if (!cfg || !Array.isArray(cfg.activeModes) || cfg.activeModes.length === 0) return;

    if (cfg.currentModeIndex === undefined) cfg.currentModeIndex = 0;
    cfg.currentModeIndex = (cfg.currentModeIndex + 1) % cfg.activeModes.length;

    const nextModeName = cfg.activeModes[cfg.currentModeIndex];
    updateLogoImageForRenderMode(nextModeName);

    playSoundForRenderMode(nextModeName);

    console.log(`[RenderStyle] Switched to mode [${cfg.currentModeIndex}]: ${nextModeName}`);
  }

  function homeLinkClicked() {
    if (!homeLink._hoverActive) body.style.setProperty('cursor', 'default');

    if (aboutOverlayVisible || aboutOverlayAnimating || currentTarget == "about") {
      hideAboutOverlay();
      if (aboutMePanel) {
        aboutMePanel.style.visibility = 'hidden';
      }
      if (downArrow) {
        downArrow.style.visibility = 'hidden';
      }
      currentTarget = "main";
      return;
    }

    if (mobileNavMenuVisible) {
      showMobileNavMenu();
      return;
    }

    // Cycle through render style modes: default -> multiBit -> oneBit -> toon -> default
    cycleRenderStyleMode();

    if (currentTarget == "ar") {
      arLink.style.setProperty('animation', 'resetScaleBorder 0.25s forwards');
      arLinkMobile.style.setProperty('animation', '');

      showPhoneUI();
      leftArrow.style.visibility = 'hidden';

      currentTarget = "main";
      canInteract = true;
    } else {
      canInteract = true;
    }
  }

  function aboutLinkClicked() {
    if (mobileNavMenuVisible) showMobileNavMenu();

    playMenuSelect(aboutLink, aboutLinkMobile);
    body.style.setProperty('cursor', 'default');

    canInteract = false;
    if (aboutMePanel) {
      aboutMePanel.style.visibility = 'hidden';
    }
    if (downArrow) {
      downArrow.style.visibility = 'hidden';
    }

    const sCfg = SCENE_CONFIG.questionBox.shatter;
    if (questionBoxGroup && questionBoxGroup.visible && sCfg && sCfg.enabled !== false) {
      if (triggerQuestionBoxShatter(true)) {
        return;
      }
    }

    showAboutOverlay();
  }

  function arLinkClicked() {
    if (mobileNavMenuVisible) showMobileNavMenu();

    playMenuSelect(arLink, arLinkMobile);
    body.style.setProperty('cursor', 'default');

    canInteract = false;
    currentTarget = "ar";
    showPhoneUI();
    leftArrow.style.visibility = 'visible';
    canInteract = true;
  }

  function gamesLinkClicked() {
    if (mobileNavMenuVisible) showMobileNavMenu();
    playMenuSelect(gamesLink, gamesLinkMobile);
    body.style.setProperty('cursor', 'default');

    canInteract = false;
    body.style.transition = 'opacity 0.8s ease';
    body.style.opacity = 0;
    requestTimeout(() => {
      window.open("https://noahgunther.com/games", "_top");
    }, 800);
  }

  function webLinkClicked() {
    if (mobileNavMenuVisible) showMobileNavMenu();
    playMenuSelect(webLink, webLinkMobile);
    body.style.setProperty('cursor', 'default');

    const cCfg = SCENE_CONFIG.web3D ? SCENE_CONFIG.web3D.clickAnimation : null;
    if (cCfg && cCfg.enabled !== false) {
      triggerWebGlobeClickAnimation();
    } else {
      canInteract = false;
      body.style.transition = 'opacity 0.8s ease';
      body.style.opacity = 0;
      requestTimeout(() => {
        window.open("https://noahgunther.com/web", "_top");
      }, 800);
    }
  }

  function houdiniLinkClicked() {
    if (mobileNavMenuVisible) showMobileNavMenu();
    playMenuSelect(houdiniLink, houdiniLinkMobile);
    body.style.setProperty('cursor', 'default');

    if (isHoudiniPopping || houdiniRespawnStartTime > 0) return;

    const pCfg = SCENE_CONFIG.houdini3D ? SCENE_CONFIG.houdini3D.pop : null;
    if (pCfg && pCfg.enabled !== false) {
      triggerHoudiniToyPop();
    }
  }

  function arLastButtonFunction() {
    canInteract = false;
    requestTimeout(() => {
      stopCurrentArVideo();
      if (arProjectContext == 'socialAr') {
        metaSocialArCapturesIndex--;
        metaSocialArCapturesIndex = ((metaSocialArCapturesIndex % metaSocialArCaptures.length) + metaSocialArCaptures.length) % metaSocialArCaptures.length;
        metaSocialArCaptures[metaSocialArCapturesIndex].style = '';
        metaSocialArCaptures[metaSocialArCapturesIndex].play();
      } else if (arProjectContext == 'arGames') {
        metaArGamesCapturesIndex--;
        metaArGamesCapturesIndex = ((metaArGamesCapturesIndex % metaArGamesCaptures.length) + metaArGamesCaptures.length) % metaArGamesCaptures.length;
        metaArGamesCaptures[metaArGamesCapturesIndex].style = '';
        metaArGamesCaptures[metaArGamesCapturesIndex].play();
      }

      updateArInfoPanel();
      if (!arInfoPanelVisible && arInfoPanelHorizontalLayout) {
        showArInfoPanel(true);
      } else {
        canInteract = true;
      }
    }, 100);

    requestTimeout(() => {
      arLastButton.style.setProperty('animation', '');
      arInfoMobileLastAnim.style.setProperty('animation', '');
    }, 500);
  }

  function arNextButtonFunction() {
    canInteract = false;
    requestTimeout(() => {
      stopCurrentArVideo();
      if (arProjectContext == 'socialAr') {
        metaSocialArCapturesIndex++;
        metaSocialArCapturesIndex %= metaSocialArCaptures.length;
        metaSocialArCaptures[metaSocialArCapturesIndex].style = '';
        metaSocialArCaptures[metaSocialArCapturesIndex].play();
      } else if (arProjectContext == 'arGames') {
        metaArGamesCapturesIndex++;
        metaArGamesCapturesIndex %= metaArGamesCaptures.length;
        metaArGamesCaptures[metaArGamesCapturesIndex].style = '';
        metaArGamesCaptures[metaArGamesCapturesIndex].play();
      }

      updateArInfoPanel();
      if (!arInfoPanelVisible && arInfoPanelHorizontalLayout) {
        showArInfoPanel(true);
      } else {
        canInteract = true;
      }
    }, 100);

    requestTimeout(() => {
      arNextButton.style.setProperty('animation', '');
      arInfoMobileNextAnim.style.setProperty('animation', '');
    }, 500);
  }

  // Phone clock loop
  function updatePhoneClock() {
    let dateTime = new Date();
    let h = dateTime.getHours();
    let m = dateTime.getMinutes();
    h > 12 ? h %= 12 : h;
    m < 10 ? m = '0' + m : m;
    phoneScreenClock.innerHTML = h + ":" + m;
    setTimeout(updatePhoneClock, 10000);
  }

  // Mobile AR projects loading indicators loop
  function updateArLoadingScreen() {
    if (phoneScreenLoadingIndex >= 0 && phoneScreenLoading[phoneScreenLoadingIndex]) {
      phoneScreenLoading[phoneScreenLoadingIndex].style.visibility = 'hidden';
    }
    phoneScreenLoadingIndex++;
    phoneScreenLoadingIndex %= phoneScreenLoading.length;
    if (currentTarget == 'ar' && arProjectContext != 'main') {
      if (phoneScreenLoading[phoneScreenLoadingIndex]) {
        phoneScreenLoading[phoneScreenLoadingIndex].style.visibility = 'visible';
      }
    }
    setTimeout(updateArLoadingScreen, 500);
  }

  // ==========================================
  // 5. Synchronous Initialization Calls
  // ==========================================
  function handleResize() {
    phoneScreenPanel.style.setProperty('width', window.innerHeight * 0.3 + 'px');
    phoneScreenPanel.style.setProperty('height', window.innerHeight * 0.65 + 'px');
    updateMainNavLinksLayout();
    updateArInfoPanelLayout();

    // Responsive Three.js Viewport sizing
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.fov = SCENE_CONFIG.camera.fov; // Dynamically apply FOV from config
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    composer.setSize(width, height);
    setOutlinePassSize(width, height);

    if (fxaaPass) {
      const pixelRatio = renderer.getPixelRatio();
      fxaaPass.material.uniforms.resolution.value.x = 1 / (width * pixelRatio);
      fxaaPass.material.uniforms.resolution.value.y = 1 / (height * pixelRatio);
    }

    // Plate is flat and horizontal centered under cubes
    plateTargetPos.set(0, SCENE_CONFIG.plate.yPos, 0);
    plateTargetRot.set(0, 0, 0);

  }
  window.onresize = handleResize;

  updatePhoneClock();
  updateArLoadingScreen();
  handleResize();

  // (Loading animation runs via CSS — no JS frame loop needed)

  // Simulated Asset Load timeout
  setTimeout(function() {
    loadingComplete = true;

    // Stop dot animation and fade out loading screen
    if (dotInterval) { clearInterval(dotInterval); dotInterval = null; }
    loadingDiv.style.transition = 'opacity 0.9s ease';
    loadingDiv.style.opacity = 0;
    setTimeout(() => {
      loadingDiv.style.visibility = 'hidden';
    }, 900);

    // Show 2D UI & Homepage Navigation Squares
    homeLink.style.visibility = 'visible';
    // Update nav links layout
    updateMainNavLinksLayout();

    // Start the scale-in intro timer
    introStartTime = performance.now() * 0.001;

    // Enable interaction
    canInteract = true;
  }, 1000);

  // ==========================================
  // 6. Bind Event Listeners
  // ==========================================

  // Left arrow back button (AR view)
  leftArrowFront.onmouseover = function() {
    body.style.setProperty('cursor', 'pointer');
    leftArrowFront.style.setProperty('animation', 'leftArrowMouseOver 0.25s forwards');
  }
  leftArrowFront.onmouseout = function() {
    body.style.setProperty('cursor', 'default');
    leftArrowFront.style.setProperty('animation', 'leftArrowMouseOut 0.25s forwards');
  }
  leftArrowFront.onclick = function() {
    if (canInteract) {
      canInteract = false;
      body.style.setProperty('cursor', 'default');
      leftArrowFront.style.setProperty('animation', 'leftArrowBounce 0.5s forwards');
      requestTimeout(homeLinkClicked, 100);
    }
  }

  // Legacy About view controls are hidden; the About overlay owns its close behavior.
  downArrowFront.onmouseover = null;
  downArrowFront.onmouseout = null;
  downArrowFront.onclick = null;

  // AR Games / Social AR buttons click inside phone scroll view
  arGamesButton.onmouseover = () => {
    arGamesButton.style.setProperty('animation', 'grow 0.25s forwards');
    body.style.setProperty('cursor', 'pointer');
  };
  arGamesButton.onmouseout = () => {
    arGamesButton.style.setProperty('animation', 'shrink 0.25s forwards');
    body.style.setProperty('cursor', 'default');
  };
  arGamesButton.onclick = () => {
    if (canInteract) {
      canInteract = false;
      arGamesButton.style.setProperty('animation', 'bounce 0.5s forwards');
      requestTimeout(() => {
        arProjectContext = 'arGames';
        phoneScreenHeader.style.visibility = 'hidden';
        phoneScreenScrollWrapper.style.visibility = 'hidden';

        phoneScreenTray.style.setProperty('animation', 'mobileArTrayIn 1.0s forwards');
        phoneScreenTray.style.visibility = 'visible';
        requestTimeout(() => { phoneScreenTray.style.setProperty('animation', ''); }, 1000);

        phoneScreenInfoButton.style.setProperty('animation', 'mobileArInfoButtonIn 0.5s forwards');
        phoneScreenInfoButton.style.visibility = 'visible';
        requestTimeout(() => { phoneScreenInfoButton.style.setProperty('animation', ''); }, 500);

        arLoading.style.visibility = 'visible';
        phoneScreenLoading[phoneScreenLoadingIndex].style.visibility = 'visible';

        metaArGamesCaptures[metaArGamesCapturesIndex].style = '';
        metaArGamesCaptures[metaArGamesCapturesIndex].play();

        updateArInfoPanel();
        if (arInfoPanelHorizontalLayout) {
          showArInfoPanel(true);
        } else {
          canInteract = true;
        }
      }, 100);
    }
  };

  socialArButton.onmouseover = () => {
    socialArButton.style.setProperty('animation', 'grow 0.25s forwards');
    body.style.setProperty('cursor', 'pointer');
  };
  socialArButton.onmouseout = () => {
    socialArButton.style.setProperty('animation', 'shrink 0.25s forwards');
    body.style.setProperty('cursor', 'default');
  };
  socialArButton.onclick = () => {
    if (canInteract) {
      canInteract = false;
      socialArButton.style.setProperty('animation', 'bounce 0.5s forwards');
      requestTimeout(() => {
        arProjectContext = 'socialAr';
        phoneScreenHeader.style.visibility = 'hidden';
        phoneScreenScrollWrapper.style.visibility = 'hidden';

        phoneScreenTray.style.setProperty('animation', 'mobileArTrayIn 1.0s forwards');
        phoneScreenTray.style.visibility = 'visible';
        requestTimeout(() => { phoneScreenTray.style.setProperty('animation', ''); }, 1000);

        phoneScreenInfoButton.style.setProperty('animation', 'mobileArInfoButtonIn 0.5s forwards');
        phoneScreenInfoButton.style.visibility = 'visible';
        requestTimeout(() => { phoneScreenInfoButton.style.setProperty('animation', ''); }, 500);

        arLoading.style.visibility = 'visible';
        phoneScreenLoading[phoneScreenLoadingIndex].style.visibility = 'visible';

        metaSocialArCaptures[metaSocialArCapturesIndex].style = '';
        metaSocialArCaptures[metaSocialArCapturesIndex].play();

        updateArInfoPanel();
        if (arInfoPanelHorizontalLayout) {
          showArInfoPanel(true);
        } else {
          canInteract = true;
        }
      }, 100);
    }
  };

  // AR Phone Tray buttons
  arHomeButton.onmouseover = () => {
    arHomeButton.style.setProperty('animation', 'grow 0.25s forwards');
    body.style.setProperty('cursor', 'pointer');
  }
  arHomeButton.onmouseout = () => {
    arHomeButton.style.setProperty('animation', 'shrink 0.25s forwards');
    body.style.setProperty('cursor', 'default');
  }
  arHomeButton.onclick = () => {
    if (canInteract) {
      canInteract = false;
      arHomeButton.style.setProperty('animation', 'bounce 0.5s forwards');
      requestTimeout(() => {
        showArInfoPanel(false);
        phoneScreenHeader.style.visibility = 'visible';
        phoneScreenScrollWrapper.style.visibility = 'visible';

        phoneScreenTray.style.visibility = 'hidden';
        phoneScreenInfoButton.style.visibility = 'hidden';
        arLoading.style.visibility = 'hidden';
        phoneScreenLoading.forEach(el => { el.style.visibility = 'hidden'; });

        stopCurrentArVideo();
        arProjectContext = 'main';
        canInteract = true;
      }, 100);
    }
  };

  arLastButton.onmouseover = () => {
    arLastButton.style.setProperty('animation', 'grow 0.25s forwards');
    body.style.setProperty('cursor', 'pointer');
  }
  arLastButton.onmouseout = () => {
    arLastButton.style.setProperty('animation', 'shrink 0.25s forwards');
    body.style.setProperty('cursor', 'default');
  }
  arLastButton.onclick = () => {
    if (canInteract) {
      arLastButton.style.setProperty('animation', 'bounce 0.5s forwards');
      arLastButtonFunction();
    }
  };

  arNextButton.onmouseover = () => {
    arNextButton.style.setProperty('animation', 'grow 0.25s forwards');
    body.style.setProperty('cursor', 'pointer');
  }
  arNextButton.onmouseout = () => {
    arNextButton.style.setProperty('animation', 'shrink 0.25s forwards');
    body.style.setProperty('cursor', 'default');
  }
  arNextButton.onclick = () => {
    if (canInteract) {
      arNextButton.style.setProperty('animation', 'bounce 0.5s forwards');
      arNextButtonFunction();
    }
  };

  // AR Phone Info panel triggers
  // AR Phone Info panel triggers
  phoneScreenInfoButton.onmouseover = () => {
    if (isMobileBrowser) return;
    phoneScreenInfoButton.style.setProperty('animation', 'grow 0.25s forwards');
    body.style.setProperty('cursor', 'pointer');
  };
  phoneScreenInfoButton.onmouseout = () => {
    if (isMobileBrowser) return;
    phoneScreenInfoButton.style.setProperty('animation', 'shrink 0.25s forwards');
    body.style.setProperty('cursor', 'default');
  };
  phoneScreenInfoButton.onclick = () => {
    if (canInteract) {
      phoneScreenInfoButton.style.setProperty('animation', 'bounce 0.5s forwards');
      requestTimeout(() => { phoneScreenInfoButton.style.setProperty('animation', ''); }, 500);
      showArInfoPanel(true);
    }
  };

  arInfoCloseButton.onmouseover = () => {
    if (isMobileBrowser) return;
    arInfoCloseButton.style.setProperty('animation', 'grow 0.25s forwards');
    body.style.setProperty('cursor', 'pointer');
  };
  arInfoCloseButton.onmouseout = () => {
    if (isMobileBrowser) return;
    arInfoCloseButton.style.setProperty('animation', 'shrink 0.25s forwards');
    body.style.setProperty('cursor', 'default');
  };
  arInfoCloseButton.onclick = () => {
    if (canInteract) {
      arInfoCloseButton.style.setProperty('animation', 'bounce 0.5s forwards');
      showArInfoPanel(true);
    }
  };

  arInfoPanelBackgroundBlur.onclick = () => {
    if (canInteract) showArInfoPanel(true);
  };

  // AR Info Mobile popup buttons
  arInfoMobileLastButton.onmouseover = () => {
    if (isMobileBrowser) return;
    arInfoMobileLastAnim.style.setProperty('animation', 'grow 0.25s forwards');
    body.style.setProperty('cursor', 'pointer');
  }
  arInfoMobileLastButton.onmouseout = () => {
    if (isMobileBrowser) return;
    arInfoMobileLastAnim.style.setProperty('animation', 'shrink 0.25s forwards');
    body.style.setProperty('cursor', 'default');
  }
  arInfoMobileLastButton.onclick = () => {
    if (canInteract) {
      arInfoMobileLastAnim.style.setProperty('animation', 'bounce 0.5s forwards');
      arLastButtonFunction();
    }
  };

  arInfoMobileCloseButton.onmouseover = () => {
    if (isMobileBrowser) return;
    arInfoMobileCloseAnim.style.setProperty('animation', 'grow 0.25s forwards');
    body.style.setProperty('cursor', 'pointer');
  }
  arInfoMobileCloseButton.onmouseout = () => {
    if (isMobileBrowser) return;
    arInfoMobileCloseAnim.style.setProperty('animation', 'shrink 0.25s forwards');
    body.style.setProperty('cursor', 'default');
  }
  arInfoMobileCloseButton.onclick = () => {
    if (canInteract) {
      arInfoMobileCloseAnim.style.setProperty('animation', 'bounce 0.5s forwards');
      showArInfoPanel(true);
    }
  };

  arInfoMobileNextButton.onmouseover = () => {
    if (isMobileBrowser) return;
    arInfoMobileNextAnim.style.setProperty('animation', 'grow 0.25s forwards');
    body.style.setProperty('cursor', 'pointer');
  }
  arInfoMobileNextButton.onmouseout = () => {
    if (isMobileBrowser) return;
    arInfoMobileNextAnim.style.setProperty('animation', 'shrink 0.25s forwards');
    body.style.setProperty('cursor', 'default');
  }
  arInfoMobileNextButton.onclick = () => {
    if (canInteract) {
      arInfoMobileNextAnim.style.setProperty('animation', 'bounce 0.5s forwards');
      arNextButtonFunction();
    }
  };

  // Hamburger mobile menu click button
  mobileNavLinksButton.onmouseover = () => { if (!isMobileBrowser && canUse2DMenu()) body.style.setProperty('cursor', 'pointer'); }
  mobileNavLinksButton.onmouseout = () => { if (!isMobileBrowser) body.style.setProperty('cursor', 'default'); }
  mobileNavLinksButton.onclick = () => { if (canUse2DMenu()) showMobileNavMenu(); }

  // Cubic Ease In Out function
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const triggerSceneSpin = () => {
    if (isSpinning) return;
    isSpinning = true;
    spinStartTime = performance.now() * 0.001;
    startSpinRotation = sceneGroup.rotation.y;
  };

  // Main navigation bindings
  homeLink._hoverActive = false;
  homeLink.onmouseenter = () => {
    if (!isMobileBrowser && canUse2DMenu()) {
      homeLink._hoverActive = true;
      homeLink.style.setProperty('animation', 'grow 0.25s forwards');
      body.style.setProperty('cursor', 'pointer');
    }
  };
  homeLink.onmouseleave = () => {
    if (homeLink._hoverActive) {
      homeLink._hoverActive = false;
      homeLink.style.setProperty('animation', 'shrink 0.25s forwards');
      body.style.setProperty('cursor', 'default');
    }
  };
  homeLink.onclick = () => {
    if (isAboutOverlayActive() || canInteract) {
      homeLinkClicked();
    }
  };

  const setupNavLinkEvents = (el, cfg) => {
    const canUseLink = () => !isMobileBrowser && canUse2DMenu() && (!cfg.currentTarget || currentTarget !== cfg.currentTarget) && !el.classList.contains('is-panel-open');

    el._hoverActive = false; // true only when grow has actually played

    el.onmouseenter = () => {
      if (!canUseLink()) return;

      el._hoverActive = true;
      el.style.setProperty('animation', 'grow 0.25s forwards');
      body.style.setProperty('cursor', 'pointer');

      if (cfg.hoverType === 'about') {
        linkHoveredAbout = true;
      } else if (cfg.hoverType === 'houdini') {
        linkHoveredHoudini = true;
      } else if (cfg.hoverType === 'web') {
        linkHoveredWeb = true;
      } else if (cfg.hoverType === 'cube' && typeof cubes !== 'undefined' && cubes) {
        linkHoveredCube = cubes.find(c => c.userData.name === cfg.name);
      }
    };

    el.onmouseleave = () => {
      // Only shrink if we actually grew — prevents phantom shrink when the mouse
      // leaves while the link was blocked (e.g. during question-box respawn).
      if (!el._hoverActive) return;
      el._hoverActive = false;

      if (!canUseLink()) return;

      el.style.setProperty('animation', 'shrink 0.25s forwards');
      body.style.setProperty('cursor', 'default');

      if (cfg.hoverType === 'about') {
        linkHoveredAbout = false;
        clearOutlines();
      } else if (cfg.hoverType === 'houdini') {
        linkHoveredHoudini = false;
        clearOutlines();
      } else if (cfg.hoverType === 'web') {
        linkHoveredWeb = false;
        clearOutlines();
      } else if (cfg.hoverType === 'cube' && linkHoveredCube && linkHoveredCube.userData.name === cfg.name) {
        linkHoveredCube.userData.isHovered = false;
        linkHoveredCube = null;
        hoveredCube = null;
        clearOutlines();
      }
    };

    el.onclick = () => {
      if (canUseLink()) {
        cfg.onClick();
      }
    };
  };

  [
    { elements: [aboutLink, aboutLinkMobile], name: 'about', currentTarget: 'about', hoverType: 'about', onClick: aboutLinkClicked },
    { elements: [arLink, arLinkMobile], name: 'ar', currentTarget: 'ar', hoverType: 'cube', onClick: arLinkClicked },
    { elements: [gamesLink, gamesLinkMobile], name: 'games', hoverType: 'cube', onClick: gamesLinkClicked },
    { elements: [webLink, webLinkMobile], name: 'web', hoverType: 'web', onClick: webLinkClicked },
    { elements: [houdiniLink, houdiniLinkMobile], name: 'houdini', hoverType: 'houdini', onClick: houdiniLinkClicked }
  ].forEach((cfg) => {
    cfg.elements.forEach((el) => setupNavLinkEvents(el, cfg));
  });

  // LinkedIn logo interactions
  const setupLinkedinEvents = (el) => {
    el.onmouseenter = () => {
      if (canUse2DMenu()) {
        el.style.setProperty('animation', 'grow 0.25s forwards');
        body.style.setProperty('cursor', 'pointer');
        linkHoveredLinkedin = true;
      }
    };
    el.onmouseleave = () => {
      if (canUse2DMenu()) {
        el.style.setProperty('animation', 'shrink 0.25s forwards');
        body.style.setProperty('cursor', 'default');
        linkHoveredLinkedin = false;
        clearOutlines();
      }
    };
  };

  if (linkedinDesktop) setupLinkedinEvents(linkedinDesktop);
  if (linkedinMobile) setupLinkedinEvents(linkedinMobile);

  const plainTextLink = document.getElementById("plaintext-link");
  if (plainTextLink) {
    plainTextLink.onmouseover = () => {
      if (canUse2DMenu()) {
        plainTextLink.style.setProperty('animation', 'plaintextGrow 0.25s forwards');
        body.style.setProperty('cursor', 'pointer');
      }
    };
    plainTextLink.onmouseout = () => {
      if (canUse2DMenu()) {
        plainTextLink.style.setProperty('animation', 'plaintextShrink 0.25s forwards');
        body.style.setProperty('cursor', 'default');
      }
    };
  }

  function setHoveredMenuCube(cube) {
    if (hoveredCube !== cube) {
      if (hoveredCube) hoveredCube.userData.isHovered = false;
      hoveredCube = cube;
      hoveredCube.userData.isHovered = true;
    }
  }

  function clearHoveredMenuCube() {
    if (hoveredCube) {
      hoveredCube.userData.isHovered = false;
      hoveredCube = null;
    }
  }

  function applyHoverTarget(targetType, targetObject) {
    if (!targetType) {
      clearHoveredMenuCube();
      clearOutlines();
      body.style.setProperty('cursor', 'default');
      return;
    }

    body.style.setProperty('cursor', 'pointer');

    if (targetType === 'questionBox') {
      clearHoveredMenuCube();
      selectRegularOutline(questionBoxGroup, SCENE_CONFIG.interaction.hoverColor3D || '#91bfff');
    } else if (targetType === 'houdiniToy') {
      clearHoveredMenuCube();
      selectHoudiniOutline(
        houdiniToyGroup,
        SCENE_CONFIG.interaction.hoverColor3D || '#91bfff'
      );
    } else if (targetType === 'webGlobe') {
      clearHoveredMenuCube();
      selectRegularOutline(webGlobeGroup, SCENE_CONFIG.interaction.hoverColor3D || '#91bfff');
    } else if (targetType === 'bug') {
      clearHoveredMenuCube();
      selectDeformerOutline(
        bugCubeGroup,
        SCENE_CONFIG.interaction.hoverColor3D || '#91bfff'
      );
    } else if (targetType === 'cube') {
      setHoveredMenuCube(targetObject);
      selectRegularOutline(hoveredCube, SCENE_CONFIG.interaction.hoverColor3D || hoveredCube.userData.color);
    }
  }

  function scheduleNextBugPause(fromTime, lCfg) {
    const minWalkAfterInspect = lCfg.minWalkAfterInspect !== undefined ? lCfg.minWalkAfterInspect : 4000;
    const extraWalkVariance = lCfg.walkPauseVariance !== undefined ? lCfg.walkPauseVariance : 4000;
    bugNextPauseTime = fromTime + minWalkAfterInspect + Math.random() * extraWalkVariance;
  }

  function switchBugAnimation(nextState) {
    if (bugCurrentAnimState === nextState) return;

    const fadeOutDuration = 0.2;
    const fadeInDuration = 0.2;

    const actions = {
      walk: bugWalkAction,
      inspect: bugInspectAction,
      fall: bugFallAction,
      stand: bugStandAction
    };

    Object.keys(actions).forEach((key) => {
      const act = actions[key];
      if (act) {
        if (key === nextState) {
          act.reset().fadeIn(fadeInDuration).play();
        } else {
          act.fadeOut(fadeOutDuration);
        }
      }
    });

    bugCurrentAnimState = nextState;
  }

  function triggerBugFall() {
    bugBehaviorState = 'falling';
    switchBugAnimation('fall');
  }

  function triggerBugStand() {
    bugBehaviorState = 'standing';
    switchBugAnimation('stand');
  }

  function triggerBugInspectPostFall() {
    bugBehaviorState = 'inspecting';
    isBugInspecting = true;
    inspectSwayStart = bugCubeGroup.rotation.y;
    
    switchBugAnimation('inspect');

    // Play inspect animation for a single inspection interval (e.g. 2.0 to 3.5 seconds)
    const now = performance.now();
    bugPauseEndTime = now + Math.random() * 1500 + 2000;
    scheduleNextBugPause(bugPauseEndTime, SCENE_CONFIG.linkedin3D);
    bugTargetPos = null;
  }

  function startBugInspect(now, lCfg) {
    const pauseDur = Math.random() * 1500 + 2000; // Inspect for 2 to 3.5 seconds
    bugBehaviorState = 'inspecting';
    isBugInspecting = true;
    inspectSwayStart = bugCubeGroup.rotation.y;
    bugPauseEndTime = now + pauseDur;
    scheduleNextBugPause(bugPauseEndTime, lCfg);
    bugTargetPos = null;
    switchBugAnimation('inspect');
  }


  let activeDishOverrideMat = null;
  let activeGelOverrideMat = null;
  let lastAppliedDishOverrideKey = null;
  let lastAppliedGelOverrideKey = null;

  function updateDishAndGelMaterialOverrides(modeName) {
    const cfg = SCENE_CONFIG.renderStyles;
    const modeCfg = (cfg && cfg[modeName]) || {};

    // 1. Dish (plate) Material Override
    const dishOv = modeCfg.dishMaterialOverride;
    if (plate) {
      if (dishOv && dishOv.override) {
        const key = `${modeName}_dish_${dishOv.type}_${dishOv.color}_${dishOv.roughness}_${dishOv.metalness}`;
        if (lastAppliedDishOverrideKey !== key) {
          lastAppliedDishOverrideKey = key;
          const color = new THREE.Color(dishOv.color || '#ffffff');
          if (dishOv.type === 'unlit') {
            activeDishOverrideMat = new THREE.MeshBasicMaterial({
              color: color,
              transparent: false,
              opacity: 1.0,
              depthWrite: true,
              side: THREE.FrontSide
            });
          } else {
            activeDishOverrideMat = new THREE.MeshStandardMaterial({
              color: color,
              roughness: dishOv.roughness !== undefined ? dishOv.roughness : 0.5,
              metalness: dishOv.metalness !== undefined ? dishOv.metalness : 0.1,
              transparent: false,
              opacity: 1.0,
              depthWrite: true,
              side: THREE.FrontSide
            });
          }
        }
        plate.traverse((child) => {
          if (child.isMesh) {
            if (!child.userData.originalMaterial) child.userData.originalMaterial = child.material;
            child.material = activeDishOverrideMat;
          }
        });
      } else {
        if (lastAppliedDishOverrideKey !== 'default') {
          lastAppliedDishOverrideKey = 'default';
          plate.traverse((child) => {
            if (child.isMesh && child.userData.originalMaterial) {
              child.material = child.userData.originalMaterial;
            }
          });
        }
      }
    }

    // 2. Gel Material Override
    const gelOv = modeCfg.gelMaterialOverride;
    if (gel) {
      if (gelOv && gelOv.override) {
        const key = `${modeName}_gel_${gelOv.type}_${gelOv.color}_${gelOv.roughness}_${gelOv.metalness}`;
        if (lastAppliedGelOverrideKey !== key) {
          lastAppliedGelOverrideKey = key;
          const color = new THREE.Color(gelOv.color || '#ffffff');
          if (gelOv.type === 'unlit') {
            activeGelOverrideMat = new THREE.MeshBasicMaterial({
              color: color,
              transparent: false,
              opacity: 1.0,
              depthWrite: true,
              side: THREE.FrontSide
            });
          } else {
            activeGelOverrideMat = new THREE.MeshStandardMaterial({
              color: color,
              roughness: gelOv.roughness !== undefined ? gelOv.roughness : 0.5,
              metalness: gelOv.metalness !== undefined ? gelOv.metalness : 0.1,
              transparent: false,
              opacity: 1.0,
              depthWrite: true,
              side: THREE.FrontSide
            });
          }
        }
        gel.traverse((child) => {
          if (child.isMesh) {
            if (!child.userData.originalMaterial) child.userData.originalMaterial = child.material;
            child.material = activeGelOverrideMat;
          }
        });
      } else {
        if (lastAppliedGelOverrideKey !== 'default') {
          lastAppliedGelOverrideKey = 'default';
          gel.traverse((child) => {
            if (child.isMesh && child.userData.originalMaterial) {
              child.material = child.userData.originalMaterial;
            }
          });
        }
      }
    }
  }

  let isTabHidden = false;
  document.addEventListener('visibilitychange', () => {
    isTabHidden = document.hidden;
  });

  let lastMobileRenderTime = 0;
  const mobileFrameInterval = 1000 / 60; // Target ~16.666ms for 60 FPS cap

  // ==========================================
  // Three.js Animation Render Loop
  // ==========================================
  function animate() {
    requestAnimationFrame(animate);
    if (isTabHidden) return; // Pause rendering loop when tab is unfocused / hidden

    const nowFrame = performance.now();

    // 60 FPS frame rate cap for mobile devices (prevents battery drain & thermal throttling on 120Hz ProMotion screens)
    if (isMobileBrowser) {
      const elapsed = nowFrame - lastMobileRenderTime;
      if (elapsed < mobileFrameInterval - 1.0) {
        return;
      }
      lastMobileRenderTime = nowFrame - (elapsed % mobileFrameInterval);
    }

    if (stats) stats.update();

    const dt = Math.min(0.1, (nowFrame - lastFrameTime) * 0.001);
    lastFrameTime = nowFrame;

    // Handle drag-rotation physics and updates (lateral only, disabled in mobile context)
    const isMobileContext = window.innerWidth <= window.innerHeight;
    const dragLerpAlpha = 1 - Math.pow(1 - 0.1, dt * 60.0);
    if (currentTarget === 'main' && !isMobileContext) {
      currentRotationX += (targetRotationX - currentRotationX) * dragLerpAlpha;
    } else {
      // Smoothly return to center when navigating to panels or in mobile context
      targetRotationX = 0;
      currentRotationX += (0 - currentRotationX) * dragLerpAlpha;
    }

    // Calculate rotation angular speed to trigger bug falling
    const rotSpeed = dt > 0 ? Math.abs(currentRotationX - lastRotationX) / dt : 0;
    lastRotationX = currentRotationX;

    if (loadingComplete && SCENE_CONFIG.linkedin3D && SCENE_CONFIG.linkedin3D.enabled !== false && bugCubeGroup) {
      const threshold = SCENE_CONFIG.linkedin3D.fallRotationSpeedThreshold !== undefined ? SCENE_CONFIG.linkedin3D.fallRotationSpeedThreshold : 8.0;
      if (rotSpeed > threshold && bugBehaviorState !== 'falling' && bugBehaviorState !== 'standing') {
        triggerBugFall();
      }
    }

    const camCfg = isMobileInitial ? SCENE_CONFIG.camera.mobile : SCENE_CONFIG.camera.desktop;
    const baseCamPos = camCfg.position;
    const baseLookAt = camCfg.lookAt;

    // Keep camera stationary relative to the world and skybox
    camera.position.copy(baseCamPos);
    camera.lookAt(baseLookAt.x, baseLookAt.y, baseLookAt.z);

    // Apply horizontal drag rotation to sceneGroup instead of camera orbit
    if (!isSpinning) {
      sceneGroup.rotation.y = currentRotationX;
    }

    // Intro scale-up: drive sceneGroup.scale directly so the whole scene scales
    // as one unit, with no per-object lerp interference causing seesawing.
    if (introStartTime >= 0) {
      const elapsed = performance.now() * 0.001 - introStartTime;
      const pct = Math.min(elapsed / 0.9, 1.0);
      const eased = 1.0 - Math.pow(1.0 - pct, 3.0); // ease-out cubic
      introScale = 0.05 + 0.95 * eased;
      if (pct >= 1.0) { introScale = 1.0; introStartTime = -1; }
    }
    sceneGroup.scale.setScalar(introScale);

    // Determine target global cube scale factor based on navigation target
    const targetScale = (currentTarget === 'main' && loadingComplete) ? 1.0 : 0.0;

    let isQBoxHovered = false;
    let isHoudiniToyHovered = false;
    let isBugCubeHovered = false;

    // Helper to check if pointer is over 2D UI elements
    function isPointerOver2DUI(clientX, clientY) {
      if (clientX === undefined || clientY === undefined) return false;
      const target = document.elementFromPoint(clientX, clientY);
      if (!target) return false;
      return !!target.closest(
        '#mainnavlinks, #home, #linkedin-desktop-wrapper, #linkedin-desktop, #linkedin-mobile, ' +
        '#mobilenavmenu, #mobilenavlinksbutton, #plaintext-link, .link, .mobilelink, .logolink, ' +
        '#aboutmepanel, #aboutmepanelwrapper, .logo-tint-mask'
      );
    }

    const isPointerOverUI = isPointerOver2DUI(lastClientX, lastClientY);

    // Raycast for hover state (only active on non-mobile devices when interaction is enabled, on main page, once loaded, and when about panel is closed)
    if (!isMobileBrowser && canInteract && currentTarget === 'main' && loadingComplete && !aboutOverlayVisible && !aboutOverlayAnimating) {
      let hoverTargetType = null;
      let hoverTargetObject = null;

      if (linkHoveredAbout && questionBoxGroup && respawnStartTime === 0) {
        hoverTargetType = 'questionBox';
      } else if (linkHoveredHoudini && houdiniToyGroup && !isHoudiniPopping && houdiniRespawnStartTime === 0) {
        hoverTargetType = 'houdiniToy';
      } else if (linkHoveredWeb && webGlobeGroup) {
        hoverTargetType = 'webGlobe';
      } else if (linkHoveredLinkedin && bugCubeGroup) {
        hoverTargetType = 'bug';
      } else if (typeof linkHoveredCube !== 'undefined' && linkHoveredCube) {
        hoverTargetType = 'cube';
        hoverTargetObject = linkHoveredCube;
      } else if (!isPointerOverUI) {
        raycaster.setFromCamera(mouse, camera);

        // Priority is intentional: the small moving insect should win over the larger central/menu targets.
        tmpBugIntersects.length = 0;
        tmpQBoxIntersects.length = 0;
        tmpHoudiniToyIntersects.length = 0;
        tmpCubeIntersects.length = 0;

        if (bugCubeGroup) {
          raycaster.intersectObject(bugCubeGroup, true, tmpBugIntersects);
        }
        if (questionBoxGroup && respawnStartTime === 0) {
          raycaster.intersectObject(questionBoxGroup, true, tmpQBoxIntersects);
        }
        if (houdiniToyGroup && !isHoudiniPopping && houdiniRespawnStartTime === 0) {
          raycaster.intersectObject(houdiniToyGroup, true, tmpHoudiniToyIntersects);
        }
        if (webGlobeGroup) {
          raycaster.intersectObject(webGlobeGroup, true, tmpCubeIntersects);
        } else {
          raycaster.intersectObjects(cubes, false, tmpCubeIntersects);
        }

        if (tmpBugIntersects.length > 0) {
          hoverTargetType = 'bug';
        } else if (tmpQBoxIntersects.length > 0) {
          hoverTargetType = 'questionBox';
        } else if (tmpHoudiniToyIntersects.length > 0) {
          hoverTargetType = 'houdiniToy';
        } else if (webGlobeGroup && tmpCubeIntersects.length > 0) {
          hoverTargetType = 'webGlobe';
        } else if (tmpCubeIntersects.length > 0) {
          hoverTargetType = 'cube';
          hoverTargetObject = tmpCubeIntersects[0].object;
        }
      }

      isQBoxHovered = hoverTargetType === 'questionBox';
      isHoudiniToyHovered = hoverTargetType === 'houdiniToy';
      isWebGlobeHovered = hoverTargetType === 'webGlobe';
      isBugCubeHovered = hoverTargetType === 'bug';
      applyHoverTarget(hoverTargetType, hoverTargetObject);
    } else {
      isQBoxHovered = false;
      isHoudiniToyHovered = false;
      isWebGlobeHovered = false;
      isBugCubeHovered = false;
      clearHoveredMenuCube();
      clearOutlines();
      body.style.setProperty('cursor', 'default');
    }

    if (isQBoxHovered !== lastQBoxHoveredState) {
      if (!isShattering && !aboutOverlayVisible && !aboutOverlayAnimating) {
        if (isQBoxHovered) {
          qBoxReachedFullHoverScale = false;
          playAboutHoverSound();
        } else {
          if (qBoxReachedFullHoverScale) {
            playAboutOutSound();
          }
          qBoxReachedFullHoverScale = false;
        }
      } else {
        qBoxReachedFullHoverScale = false;
      }
      lastQBoxHoveredState = isQBoxHovered;
    }

    if (isHoudiniToyHovered !== lastHoudiniToyHoveredState) {
      if (!isHoudiniPopping) {
        if (isHoudiniToyHovered) {
          houdiniReachedFullHoverScale = false;
          playHoudiniHoverSound();
        } else {
          if (houdiniReachedFullHoverScale) {
            playHoudiniOutSound();
          }
          houdiniReachedFullHoverScale = false;
        }
      } else {
        houdiniReachedFullHoverScale = false;
      }
      lastHoudiniToyHoveredState = isHoudiniToyHovered;
    }

    if (isWebGlobeHovered !== lastWebGlobeHoveredState) {
      if (!isWebGlobeClickAnimating && webRespawnStartTime === 0) {
        if (isWebGlobeHovered) {
          webGlobeReachedFullHoverScale = false;
          playWebHoverSound();
        } else {
          if (webGlobeReachedFullHoverScale) {
            playWebOutSound();
          }
          webGlobeReachedFullHoverScale = false;
        }
      } else {
        webGlobeReachedFullHoverScale = false;
      }
      lastWebGlobeHoveredState = isWebGlobeHovered;
    }

    // Sync 3D hover state back to text menu links (only if hover wasn't initiated by the text links themselves)
    let active3DHoveredName = null;
    if (isQBoxHovered) {
      active3DHoveredName = 'about';
    } else if (isHoudiniToyHovered) {
      active3DHoveredName = 'houdini';
    } else if (isWebGlobeHovered) {
      active3DHoveredName = 'web';
    } else if (isBugCubeHovered) {
      active3DHoveredName = 'linkedin';
    } else if (hoveredCube) {
      active3DHoveredName = hoveredCube.userData.name;
    }

    // Helper to check if a specific link is currently hovered directly via 2D mouse event
    function is2DLinkHovered(name) {
      if (name === 'about') return linkHoveredAbout;
      if (name === 'houdini') return linkHoveredHoudini;
      if (name === 'web') return linkHoveredWeb;
      if (name === 'linkedin') return linkHoveredLinkedin;
      if (linkHoveredCube && linkHoveredCube.userData && linkHoveredCube.userData.name === name) return true;
      return false;
    }

    if (active3DHoveredName !== last3DHoveredName) {
      // Shrink previously 3D-hovered text link (unless it is currently being hovered directly in 2D)
      if (last3DHoveredName && !is2DLinkHovered(last3DHoveredName)) {
        const els = linkElementsMap[last3DHoveredName];
        if (els) {
          if (els.desktop && currentTarget !== last3DHoveredName) {
            els.desktop.style.setProperty('animation', 'shrink 0.25s forwards');
          }
          if (els.mobile && currentTarget !== last3DHoveredName) {
            els.mobile.style.setProperty('animation', 'shrink 0.25s forwards');
          }
        }
      }

      // Grow newly 3D-hovered text link (unless it is already being hovered directly in 2D)
      if (active3DHoveredName && !is2DLinkHovered(active3DHoveredName)) {
        const els = linkElementsMap[active3DHoveredName];
        if (els) {
          if (els.desktop && currentTarget !== active3DHoveredName) {
            els.desktop.style.setProperty('animation', 'grow 0.25s forwards');
          }
          if (els.mobile && currentTarget !== active3DHoveredName) {
            els.mobile.style.setProperty('animation', 'grow 0.25s forwards');
          }
        }
      }

      last3DHoveredName = active3DHoveredName;
    }

    // Frame-rate independent lerp factors for 60 FPS baseline
    const dtScale = dt * 60.0;
    const lerp08 = 1 - Math.pow(1 - 0.08, dtScale);
    const lerp10 = 1 - Math.pow(1 - 0.10, dtScale);

    // Update cube scaling, position and rotation
    cubes.forEach((cube) => {
      // Lerp position to target coordinates
      tmpCubeTargetPos.set(cube.userData.baseX, cube.userData.baseY, cube.userData.baseZ);
      cube.position.lerp(tmpCubeTargetPos, lerp08);

      // Rotations decoupled from frame rate
      if (cube.userData.isHovered) {
        // Spin faster on hover
        cube.rotation.y += cube.userData.rotationSpeedY * 2.5 * dtScale;
        cube.rotation.x += cube.userData.rotationSpeedX * 1.5 * dtScale;
      } else {
        // Slow idle rotation
        cube.rotation.y += cube.userData.rotationSpeedY * dtScale;
        cube.rotation.x += cube.userData.rotationSpeedX * dtScale;
      }

      // Lerp scale to hide or show on hover
      const activeScale = cube.userData.isHovered ? 1.15 : 1.0;
      const s = activeScale * targetScale;
      tmpCubeScale.set(s, s, s);
      cube.scale.lerp(tmpCubeScale, lerp10);
    });

    // Handle scene spin animation
    if (isSpinning) {
      const elapsed = (performance.now() * 0.001) - spinStartTime;
      const duration = SCENE_CONFIG.interaction.spinDuration || 1.5;
      const progress = Math.min(elapsed / duration, 1.0);

      const easeProgress = easeInOutCubic(progress);
      sceneGroup.rotation.y = startSpinRotation + easeProgress * Math.PI * 2.0;

      if (progress >= 1.0) {
        isSpinning = false;
        sceneGroup.rotation.y = (startSpinRotation + Math.PI * 2.0) % (Math.PI * 2.0);
        currentRotationX = sceneGroup.rotation.y;
        targetRotationX = currentRotationX;
      }
    }

    // Check active render mode per-style visibility and material override settings
    const activeModesList = (SCENE_CONFIG.renderStyles && Array.isArray(SCENE_CONFIG.renderStyles.activeModes)) ? SCENE_CONFIG.renderStyles.activeModes : ['default'];
    const activeIdx = (SCENE_CONFIG.renderStyles && SCENE_CONFIG.renderStyles.currentModeIndex !== undefined) ? SCENE_CONFIG.renderStyles.currentModeIndex : 0;
    const curModeName = activeModesList[activeIdx % activeModesList.length] || 'default';
    const curModeCfg = (SCENE_CONFIG.renderStyles && SCENE_CONFIG.renderStyles[curModeName]) || {};

    const shouldHideDish = curModeCfg.hideDish === true;
    const shouldHideGel = curModeCfg.hideGel === true;

    // Apply per-style material overrides for dish & gel
    updateDishAndGelMaterialOverrides(curModeName);

    // Smoothly lerp plate position, rotation, scale, and visibility
    if (plate) {
      plate.visible = (SCENE_CONFIG.plate.enabled !== false) && !shouldHideDish;
      if (plate.visible) {
        const sVal = SCENE_CONFIG.plate.scale * targetScale;
        tmpObjectScale.set(sVal, sVal, sVal);
        plate.scale.lerp(tmpObjectScale, lerp08);
        plate.position.lerp(plateTargetPos, lerp08);

        // Smoothly lerp rotation
        plate.rotation.x += (plateTargetRot.x - plate.rotation.x) * lerp08;
        plate.rotation.y += (plateTargetRot.y - plate.rotation.y) * lerp08;
        plate.rotation.z += (plateTargetRot.z - plate.rotation.z) * lerp08;
      }
    }

    // Smoothly lerp gel scale and update material properties dynamically (only when not overridden)
    if (gel) {
      gel.visible = (SCENE_CONFIG.gel.enabled !== false) && !shouldHideGel;
      if (gel.visible && (!curModeCfg.gelMaterialOverride || !curModeCfg.gelMaterialOverride.override)) {
        const sVal = 1.0 * targetScale;
        tmpObjectScale.set(sVal, sVal, sVal);
        gel.scale.lerp(tmpObjectScale, lerp08);

        gel.children.forEach((child) => {
          if (child.isMesh && child.material) {
            child.material.color.set(SCENE_CONFIG.gel.glass.color);
            child.material.transmission = SCENE_CONFIG.gel.glass.transmission;
            child.material.ior = SCENE_CONFIG.gel.glass.ior;
            child.material.roughness = SCENE_CONFIG.gel.glass.roughness;
            child.material.reflectivity = SCENE_CONFIG.gel.glass.reflectivity;
            child.material.clearcoat = SCENE_CONFIG.gel.glass.clearcoat !== undefined ? SCENE_CONFIG.gel.glass.clearcoat : 0.0;
            child.material.opacity = SCENE_CONFIG.gel.glass.opacity !== undefined ? SCENE_CONFIG.gel.glass.opacity : 0.85;
            child.material.clearcoatRoughness = SCENE_CONFIG.gel.glass.clearcoatRoughness !== undefined ? SCENE_CONFIG.gel.glass.clearcoatRoughness : 0.05;
          }
        });
        if (gel.isMesh && gel.material) {
          gel.material.color.set(SCENE_CONFIG.gel.glass.color);
          gel.material.transmission = SCENE_CONFIG.gel.glass.transmission;
          gel.material.ior = SCENE_CONFIG.gel.glass.ior;
          gel.material.roughness = SCENE_CONFIG.gel.glass.roughness;
          gel.material.reflectivity = SCENE_CONFIG.gel.glass.reflectivity;
          gel.material.opacity = SCENE_CONFIG.gel.glass.opacity !== undefined ? SCENE_CONFIG.gel.glass.opacity : 0.85;
          gel.material.clearcoat = SCENE_CONFIG.gel.glass.clearcoat !== undefined ? SCENE_CONFIG.gel.glass.clearcoat : 0.0;
          gel.material.clearcoatRoughness = SCENE_CONFIG.gel.glass.clearcoatRoughness !== undefined ? SCENE_CONFIG.gel.glass.clearcoatRoughness : 0.05;
        }
      }
    }

    // Update custom shader uniforms via the cached plateShader reference
    if (typeof plateShader !== 'undefined' && plateShader) {
      plateShader.uniforms.uTime.value = performance.now() * 0.001;
      plateShader.uniforms.uRainbowIntensity.value = SCENE_CONFIG.plate.rainbow.intensity;
      plateShader.uniforms.uRainbowScale.value = SCENE_CONFIG.plate.rainbow.scale;
      plateShader.uniforms.uRainbowAngleFactor.value = SCENE_CONFIG.plate.rainbow.angleFactor;
      plateShader.uniforms.uRainbowShimmer.value = SCENE_CONFIG.plate.rainbow.shimmer;
      plateShader.uniforms.uRainbowShimmerSpeed.value = SCENE_CONFIG.plate.rainbow.shimmerSpeed;
      plateShader.uniforms.uRainbowCenterSmoothness.value = SCENE_CONFIG.plate.rainbow.centerSmoothness;
      plateShader.uniforms.uRainbowCenterOffset.value.set(...SCENE_CONFIG.plate.rainbow.centerOffset);
      plateShader.uniforms.uPaletteA.value.set(...SCENE_CONFIG.plate.rainbow.paletteA);
      plateShader.uniforms.uPaletteB.value.set(...SCENE_CONFIG.plate.rainbow.paletteB);
      plateShader.uniforms.uPaletteC.value.set(...SCENE_CONFIG.plate.rainbow.paletteC);
      plateShader.uniforms.uPaletteD.value.set(...SCENE_CONFIG.plate.rainbow.paletteD);
      plateShader.uniforms.uRainbowFresnelMultiply.value = SCENE_CONFIG.plate.rainbow.fresnelMultiply;
      plateShader.uniforms.uSkyboxRotation.value = (SCENE_CONFIG.lights.skyboxRotation || 0.0) * Math.PI / 180.0;

    }

    if (typeof gelShader !== 'undefined' && gelShader) {
      gelShader.uniforms.uSkyboxRotation.value = (SCENE_CONFIG.lights.skyboxRotation || 0.0) * Math.PI / 180.0;
    }

    // Billboard the question box plane to always face the camera
    if (fbxPlane) {
      camera.getWorldPosition(tmpCameraWorldPos);
      fbxPlane.lookAt(tmpCameraWorldPos);

      // Apply configurable billboard rotation offsets to align the texture face with the camera
      if (SCENE_CONFIG.questionBox) {
        const rx = (SCENE_CONFIG.questionBox.billboardRotationX || 0) * Math.PI / 180;
        const ry = (SCENE_CONFIG.questionBox.billboardRotationY || 0) * Math.PI / 180;
        const rz = (SCENE_CONFIG.questionBox.billboardRotationZ || 0) * Math.PI / 180;
        fbxPlane.rotateX(rx);
        fbxPlane.rotateY(ry);
        fbxPlane.rotateZ(rz);

        // Dynamically scale the billboarded plane
        const ps = SCENE_CONFIG.questionBox.planeScale !== undefined ? SCENE_CONFIG.questionBox.planeScale : 1.0;
        fbxPlane.scale.set(ps, ps, ps);
      }
    }

    // Walking behavior and scale updating for LinkedIn organism (curved paths, dynamic collision avoidance)
    if (bugCubeGroup && isBugModelLoaded && SCENE_CONFIG.linkedin3D && SCENE_CONFIG.linkedin3D.enabled !== false) {
      const lCfg = SCENE_CONFIG.linkedin3D;
      const now = performance.now();
      const minObs = lCfg.minObstacleDist !== undefined ? lCfg.minObstacleDist : 0.9;
      const walkRx = lCfg.walkRadiusX !== undefined ? lCfg.walkRadiusX : 2.2;
      const walkRz = lCfg.walkRadiusZ !== undefined ? lCfg.walkRadiusZ : 1.1;

      const isInspecting = (lCfg.inspectEnabled !== false) && (now < bugPauseEndTime);

      // Move towards target if active
      if (currentTarget === 'main' && loadingComplete && !isInspecting && bugBehaviorState !== 'falling' && bugBehaviorState !== 'standing') {
        bugBehaviorState = 'walking';
        isBugInspecting = false;
        switchBugAnimation('walk');

        const currentPos = bugCubeGroup.position;
        const { rx: walkRx, rz: walkRz } = getLinkedInBugWalkRadius();
        const minObs = lCfg.minObstacleDist !== undefined ? lCfg.minObstacleDist : 1.0;
        const avoidRadius = minObs * 1.5;

        // Schedule first pause if not set
        if (bugNextPauseTime === 0) {
          bugNextPauseTime = now + Math.random() * 4000 + 2000; // First pause in 2 to 6 seconds
        }

        // Trigger a random pause
        if (now > bugNextPauseTime) {
          if (lCfg.inspectEnabled !== false) {
            startBugInspect(now, lCfg);
          }
        }

        if (bugBehaviorState !== 'inspecting') {
          // 1. Update internal wander angle with tiny noise delta (smooth curved pathing)
          const turnNoise = (Math.random() - 0.5) * 0.15 * 60.0 * dt;
          bugWanderAngle += turnNoise;

          // Convert angle to movement vector
          const walkDir = tmpWalkDir.set(Math.sin(bugWanderAngle), 0, Math.cos(bugWanderAngle)).normalize();

          // 2. Ellipsoid Boundary Avoidance (smoothly steer back towards center)
          const ellipseVal = (currentPos.x / walkRx) * (currentPos.x / walkRx) + (currentPos.z / walkRz) * (currentPos.z / walkRz);
          if (ellipseVal > 0.8) {
            const centerPush = tmpCenterPush.set(-currentPos.x, 0, -currentPos.z).normalize();
            // The closer it is to the edge (0.8 -> 1.0), the stronger the steering force
            const tBoundary = Math.max(0, Math.min(1, (ellipseVal - 0.8) / (1.0 - 0.8)));
            const steerFactor = Math.min(1.0, tBoundary * 0.8 * 60.0 * dt);
            walkDir.lerp(centerPush, steerFactor).normalize();
          }

          // 3. Obstacle Avoidance (Question Box & Cubes)
          if (lCfg.avoidanceEnabled !== false) {
            // Avoid center Question Box at (0, 0)
            const toInsectQ = tmpToInsectQ.set(currentPos.x, 0, currentPos.z);
            const distQ = toInsectQ.length();
            if (distQ < avoidRadius) {
              const tQ = Math.max(0, Math.min(1, (distQ - minObs) / (avoidRadius - minObs)));

              // Radial outward push direction
              const avoidVec = distQ < 0.001
                ? tmpAvoidVec.set(1, 0, 0)
                : tmpAvoidVec.copy(toInsectQ).normalize();

              // Locked-side cross-product calculation to prevent vibration/switching flips
              let crossQ = avoidVec.x * walkDir.z - avoidVec.z * walkDir.x;
              if (Math.abs(crossQ) < 0.05) {
                crossQ = 1.0; // Force a consistent right-hand turn if straight on
              }

              // Perpendicular glide direction to steer around sides
              const perpQ = tmpPerpVec.set(-avoidVec.z, 0, avoidVec.x);
              if (crossQ < 0) perpQ.negate();

              // Combine radial outward push (0.7) and perpendicular glide (0.3)
              const steerVec = tmpSteerVec.copy(avoidVec).multiplyScalar(0.7).addScaledVector(perpQ, 0.3).normalize();

              // Smoothly blend the walk direction towards steerVec
              const steerFactor = Math.min(1.0, (1.0 - tQ) * 0.9 * 60.0 * dt);
              walkDir.lerp(steerVec, steerFactor).normalize();
            }

            // Avoid other project menu cubes
            if (typeof cubes !== 'undefined' && cubes) {
              cubes.forEach((cube) => {
                const toInsectCube = tmpToInsectCube.subVectors(currentPos, cube.position);
                toInsectCube.y = 0;
                const distC = toInsectCube.length();
                if (distC < avoidRadius) {
                  const tC = Math.max(0, Math.min(1, (distC - minObs) / (avoidRadius - minObs)));

                  const avoidVec = distC < 0.001
                    ? tmpAvoidVec.set(1, 0, 0)
                    : tmpAvoidVec.copy(toInsectCube).normalize();

                  let crossC = avoidVec.x * walkDir.z - avoidVec.z * walkDir.x;
                  if (Math.abs(crossC) < 0.05) {
                    crossC = 1.0;
                  }

                  const perpC = tmpPerpVec.set(-avoidVec.z, 0, avoidVec.x);
                  if (crossC < 0) perpC.negate();

                  const steerVec = tmpSteerVec.copy(avoidVec).multiplyScalar(0.7).addScaledVector(perpC, 0.3).normalize();

                  const steerFactor = Math.min(1.0, (1.0 - tC) * 0.9 * 60.0 * dt);
                  walkDir.lerp(steerVec, steerFactor).normalize();
                }
              });
            }

            // Avoid Houdini Toy
            if (houdiniToyGroup) {
              const toInsectH = tmpToInsectCube.subVectors(currentPos, houdiniToyGroup.position);
              toInsectH.y = 0;
              const distH = toInsectH.length();
              if (distH < avoidRadius) {
                const tH = Math.max(0, Math.min(1, (distH - minObs) / (avoidRadius - minObs)));

                const avoidVec = distH < 0.001
                  ? tmpAvoidVec.set(1, 0, 0)
                  : tmpAvoidVec.copy(toInsectH).normalize();

                let crossH = avoidVec.x * walkDir.z - avoidVec.z * walkDir.x;
                if (Math.abs(crossH) < 0.05) {
                  crossH = 1.0;
                }

                const perpH = tmpPerpVec.set(-avoidVec.z, 0, avoidVec.x);
                if (crossH < 0) perpH.negate();

                const steerVec = tmpSteerVec.copy(avoidVec).multiplyScalar(0.7).addScaledVector(perpH, 0.3).normalize();

                const steerFactor = Math.min(1.0, (1.0 - tH) * 0.9 * 60.0 * dt);
                walkDir.lerp(steerVec, steerFactor).normalize();
              }
            }

            // Avoid Web Globe
            if (webGlobeGroup) {
              const toInsectW = tmpToInsectCube.subVectors(currentPos, webGlobeGroup.position);
              toInsectW.y = 0;
              const distW = toInsectW.length();
              if (distW < avoidRadius) {
                const tW = Math.max(0, Math.min(1, (distW - minObs) / (avoidRadius - minObs)));

                const avoidVec = distW < 0.001
                  ? tmpAvoidVec.set(1, 0, 0)
                  : tmpAvoidVec.copy(toInsectW).normalize();

                let crossW = avoidVec.x * walkDir.z - avoidVec.z * walkDir.x;
                if (Math.abs(crossW) < 0.05) {
                  crossW = 1.0;
                }

                const perpW = tmpPerpVec.set(-avoidVec.z, 0, avoidVec.x);
                if (crossW < 0) perpW.negate();

                const steerVec = tmpSteerVec.copy(avoidVec).multiplyScalar(0.7).addScaledVector(perpW, 0.3).normalize();

                const steerFactor = Math.min(1.0, (1.0 - tW) * 0.9 * 60.0 * dt);
                walkDir.lerp(steerVec, steerFactor).normalize();
              }
            }
          }

          // Re-normalize final direction vector and project back onto internal wander angle
          walkDir.normalize();
          bugWanderAngle = Math.atan2(walkDir.x, walkDir.z);

          // Move the insect
          const speed = lCfg.speed !== undefined ? lCfg.speed : 0.015;
          const speedStep = speed * 60.0 * dt;
          bugCubeGroup.position.addScaledVector(walkDir, speedStep);

          // 4. Silent physical containment fallbacks (hard boundaries to prevent glitches during lag spikes)
          // Hard boundary containment check (instantly snaps if it manages to escape the ellipse)
          const ellipseValEsc = (currentPos.x / walkRx) * (currentPos.x / walkRx) + (currentPos.z / walkRz) * (currentPos.z / walkRz);
          if (ellipseValEsc > 1.01) {
            const borderAngle = Math.atan2(currentPos.z, currentPos.x);
            bugCubeGroup.position.x = Math.cos(borderAngle) * walkRx * 0.98;
            bugCubeGroup.position.z = Math.sin(borderAngle) * walkRz * 0.98;
          }

          // Physical colliders (if avoidance is enabled)
          if (lCfg.avoidanceEnabled !== false) {
            const qBoxDistAfter = Math.sqrt(bugCubeGroup.position.x * bugCubeGroup.position.x + bugCubeGroup.position.z * bugCubeGroup.position.z);
            if (qBoxDistAfter < minObs) {
              let pushVec;
              if (qBoxDistAfter < 0.001) {
                const randomAngle = Math.random() * Math.PI * 2;
                pushVec = tmpPushVec.set(Math.cos(randomAngle), 0, Math.sin(randomAngle));
              } else {
                pushVec = tmpPushVec.set(bugCubeGroup.position.x, 0, bugCubeGroup.position.z).normalize();
              }
              bugCubeGroup.position.x = pushVec.x * (minObs + 0.02);
              bugCubeGroup.position.z = pushVec.z * (minObs + 0.02);
            }
            if (typeof cubes !== 'undefined' && cubes) {
              cubes.forEach((cube) => {
                const dx = bugCubeGroup.position.x - cube.position.x;
                const dz = bugCubeGroup.position.z - cube.position.z;
                const d = Math.sqrt(dx * dx + dz * dz);
                if (d < minObs) {
                  let pushVec;
                  if (d < 0.001) {
                    const randomAngle = Math.random() * Math.PI * 2;
                    pushVec = tmpPushVec.set(Math.cos(randomAngle), 0, Math.sin(randomAngle));
                  } else {
                    pushVec = tmpPushVec.set(dx, 0, dz).normalize();
                  }
                  bugCubeGroup.position.copy(cube.position).addScaledVector(pushVec, minObs + 0.02);
                }
              });
            }
            if (webGlobeGroup) {
              const dx = bugCubeGroup.position.x - webGlobeGroup.position.x;
              const dz = bugCubeGroup.position.z - webGlobeGroup.position.z;
              const d = Math.sqrt(dx * dx + dz * dz);
              if (d < minObs) {
                let pushVec;
                if (d < 0.001) {
                  const randomAngle = Math.random() * Math.PI * 2;
                  pushVec = tmpPushVec.set(Math.cos(randomAngle), 0, Math.sin(randomAngle));
                } else {
                  pushVec = tmpPushVec.set(dx, 0, dz).normalize();
                }
                bugCubeGroup.position.copy(webGlobeGroup.position).addScaledVector(pushVec, minObs + 0.02);
              }
            }
          }

          // Face the direction of actual motion smoothly (frame-rate independent lerp)
          const targetAngle = Math.atan2(walkDir.x, walkDir.z);
          let diff = targetAngle - bugCubeGroup.rotation.y;
          diff = Math.atan2(Math.sin(diff), Math.cos(diff));
          const rotateFactor = Math.min(1.0, 0.08 * 60.0 * dt);
          bugCubeGroup.rotation.y += diff * rotateFactor;
        }
      } else if (isInspecting && currentTarget === 'main' && loadingComplete) {
        // Rotation sway replaced by FBX skeletal Inspect animation action
      }

      // Apply scaling logic (frame-rate independent lerp)
      const bugBaseScale = lCfg.scale || 0.4;
      const bugTargetScale = bugBaseScale * targetScale;
      const currentBScale = bugCubeGroup.scale.x;
      const scaleLerpFactor = Math.min(1.0, 0.1 * 60.0 * dt);
      const nextBScale = THREE.MathUtils.lerp(currentBScale, bugTargetScale, scaleLerpFactor);
      bugCubeGroup.scale.set(nextBScale, nextBScale, nextBScale);

      if (bugMixer) {
        bugMixer.update(dt);
      }

    }

    // Update Question Box shatter particle effect
    if (isShattering && shatterGroup) {
      const sCfg = SCENE_CONFIG.questionBox.shatter;
      const fadeSpeed = sCfg.fadeSpeed !== undefined ? sCfg.fadeSpeed : 1.8;

      let allFaded = true;

      // 1. Update 3D shards
      shatterShards.forEach((shard) => {
        const vel = shard.userData.velocity;
        const rotVel = shard.userData.rotVelocity;

        // Move linearly
        shard.position.addScaledVector(vel, dt);

        // Rotate (decoupled from frame rate)
        const pDtScale = dt * 60.0;
        shard.rotation.x += rotVel.x * pDtScale;
        shard.rotation.y += rotVel.y * pDtScale;
        shard.rotation.z += rotVel.z * pDtScale;

        // Shrink/fade based on fadeSpeed parameter
        shard.userData.lifetime -= fadeSpeed * dt;
        if (shard.userData.lifetime > 0) {
          const ratio = Math.max(0.001, shard.userData.lifetime / shard.userData.initialLifetime);
          const currentScale = shard.userData.initialScale * ratio;
          shard.scale.set(currentScale, currentScale, currentScale);

          if (shard.material) {
            shard.material.opacity = ratio;
          }
          allFaded = false;
        } else {
          shard.scale.set(0, 0, 0);
        }
      });

      // 2. Update billboarded sparkles
      shatterSparkles.forEach((sparkle) => {
        const vel = sparkle.userData.velocity;

        // Move linearly
        sparkle.position.addScaledVector(vel, dt);

        // Billboard towards camera
        sparkle.lookAt(camera.position);

        // Apply flat Z rotation (decoupled from frame rate)
        sparkle.rotation.z += sparkle.userData.rotVelocityZ * (dt * 60.0);

        // Fade scale and opacity based on fadeSpeed parameter
        sparkle.userData.lifetime -= fadeSpeed * dt;
        if (sparkle.userData.lifetime > 0) {
          const ratio = Math.max(0.001, sparkle.userData.lifetime / sparkle.userData.initialLifetime);
          const currentScale = sparkle.userData.initialScale * ratio;
          sparkle.scale.set(currentScale, currentScale, 1.0);

          if (sparkle.material) {
            sparkle.material.opacity = ratio * 0.9;
          }
          allFaded = false;
        } else {
          sparkle.scale.set(0, 0, 0);
          if (sparkle.material) {
            sparkle.material.opacity = 0;
          }
        }
      });

      // If all particles have finished their lifetime, remove the group
      if (allFaded) {
        sceneGroup.remove(shatterGroup);
        // Clean up geometries and materials
        shatterShards.forEach((shard) => {
          if (shard.geometry) shard.geometry.dispose();
          if (shard.material) shard.material.dispose();
        });
        shatterSparkles.forEach((sparkle) => {
          if (sparkle.geometry) sparkle.geometry.dispose();
          if (sparkle.material) sparkle.material.dispose();
        });

        shatterGroup = null;
        shatterShards = [];
        shatterSparkles = [];
        isShattering = false;

        if (pendingAboutOverlayAfterShatter) {
          pendingAboutOverlayAfterShatter = false;
          showAboutOverlay({ regrowQuestionBox: true });
        } else {
          startQuestionBoxRespawn();
        }
      }
    }

  function applyPopEasing(t, curveType) {
    const clamped = Math.max(0.0, Math.min(1.0, t));
    if (curveType === 'easeOutExpo') {
      return clamped === 1.0 ? 1.0 : 1.0 - Math.pow(2.0, -10.0 * clamped);
    } else if (curveType === 'easeOutQuart') {
      return 1.0 - Math.pow(1.0 - clamped, 4.0);
    } else if (curveType === 'easeOutBack') {
      const c1 = 1.70158;
      const c3 = c1 + 1.0;
      return 1.0 + c3 * Math.pow(clamped - 1.0, 3.0) + c1 * Math.pow(clamped - 1.0, 2.0);
    } else if (curveType === 'linear') {
      return clamped;
    }
    // Default: Ease-Out Cubic
    return 1.0 - Math.pow(1.0 - clamped, 3.0);
  }

  // Update Houdini Toy pop sparkles & 3D mesh opacity fade out
  if (isHoudiniPopping && houdiniToyGroup) {
    const pCfg = (SCENE_CONFIG.houdini3D && SCENE_CONFIG.houdini3D.pop) || {};
    const popDuration = pCfg.popDuration !== undefined ? pCfg.popDuration : 450;
    const elapsed = performance.now() - houdiniPopStartTime;
    const linearProgress = Math.min(1.0, elapsed / Math.max(1, popDuration));

    // Calculate curve-based eased progress (explosive pop at start, decelerates smoothly)
    const curveType = pCfg.easing || 'easeOutExpo';
    const easedProgress = applyPopEasing(linearProgress, curveType);

    // 1. Morph shape keys: Inflated stays at 1.0, Pop morphs with eased progress * popMultiplier
    const popMult = pCfg.popMultiplier !== undefined ? pCfg.popMultiplier : 2.5;
    updateHoudiniMorphTargets(houdiniToyGroup, 1.0, easedProgress * popMult);

    // 2. Fade 3D mesh opacity: 1.0 -> 0.0
    const currentOpacity = Math.max(0, 1.0 - linearProgress);
      houdiniToyGroup.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.transparent = true;
          child.material.opacity = currentOpacity;
        }
      });
      if (houdiniShadowMesh && houdiniShadowMaterial) {
        houdiniShadowMaterial.opacity = 0.6 * currentOpacity;
      }

      // 3. Update billboarded sparkles
      if (houdiniPopGroup && houdiniPopSparkles.length > 0) {
        houdiniPopSparkles.forEach((sparkle) => {
          const vel = sparkle.userData.velocity;
          sparkle.position.addScaledVector(vel, dt);
          sparkle.lookAt(camera.position);
          sparkle.rotation.z += sparkle.userData.rotVelocityZ * (dt * 60.0);

          sparkle.userData.lifetime -= dt;
          if (sparkle.userData.lifetime > 0) {
            const ratio = Math.max(0.001, sparkle.userData.lifetime / sparkle.userData.initialLifetime);
            const currentScale = sparkle.userData.initialScale * ratio;
            sparkle.scale.set(currentScale, currentScale, 1.0);
            if (sparkle.material) sparkle.material.opacity = ratio;
          } else {
            sparkle.scale.set(0, 0, 0);
            if (sparkle.material) sparkle.material.opacity = 0;
          }
        });
      }

      // 4. When pop duration finishes, hide toy, end popping state, start respawn
      if (linearProgress >= 1.0) {
        houdiniToyGroup.visible = false;
        if (houdiniShadowMesh) houdiniShadowMesh.visible = false;
        if (houdiniPopGroup) {
          sceneGroup.remove(houdiniPopGroup);
          houdiniPopSparkles.forEach((sparkle) => {
            if (sparkle.geometry) sparkle.geometry.dispose();
            if (sparkle.material) sparkle.material.dispose();
          });
          houdiniPopGroup = null;
          houdiniPopSparkles = [];
        }
        isHoudiniPopping = false;
        startHoudiniToyRespawn();
      }
    }

    // Handle Houdini Toy respawn/grow transition
    if (!isHoudiniPopping && houdiniRespawnStartTime > 0 && houdiniToyGroup) {
      const now = performance.now();
      const pCfg = (SCENE_CONFIG.houdini3D && SCENE_CONFIG.houdini3D.pop) || {};
      const delay = pCfg.respawnDelay !== undefined ? pCfg.respawnDelay : 1000;
      const duration = pCfg.respawnDuration !== undefined ? pCfg.respawnDuration : 800;

      const elapsed = now - houdiniRespawnStartTime;

      if (elapsed < delay) {
        // Still in the wait phase before growing back: keep hidden & un-inflated at baseY
        const baseY = (houdiniToyGroup.userData.baseY !== undefined) ? houdiniToyGroup.userData.baseY : SCENE_CONFIG.houdini3D.desktop.position.y;
        houdiniToyGroup.position.y = baseY;
        houdiniToyGroup.userData.inflatedInfluence = 0.0;
        updateHoudiniMorphTargets(houdiniToyGroup, 0.0, 0.0);

        houdiniToyGroup.visible = false;
        if (houdiniShadowMesh) {
          houdiniShadowMesh.visible = false;
        }
      } else {
        // Grow back phase: fully opaque (opacity = 1.0) with scale and shadow expanding in sync from 0 to target scale
        if (!isHoudiniRegrowingSoundPlayed) {
          isHoudiniRegrowingSoundPlayed = true;
          playHoudiniGrowSound();
        }
        const regrowProgress = Math.min(1.0, (elapsed - delay) / Math.max(1, duration));
        const easeOutCubic = 1.0 - Math.pow(1.0 - regrowProgress, 3.0);

        houdiniToyGroup.visible = true;
        houdiniToyGroup.traverse((child) => {
          if (child.isMesh && child.material) {
            child.material.opacity = 1.0;
          }
        });

        if (houdiniShadowMesh && houdiniShadowMaterial) {
          houdiniShadowMesh.visible = true;
          const shadowBaseScale = SCENE_CONFIG.houdini3D.shadowScale !== undefined ? SCENE_CONFIG.houdini3D.shadowScale : 2.0;
          const currentShadowScale = shadowBaseScale * easeOutCubic * targetScale;
          houdiniShadowMesh.scale.set(currentShadowScale, currentShadowScale, 1.0);
          houdiniShadowMaterial.opacity = 0.6 * easeOutCubic * targetScale;
        }

        const toyBaseScale = SCENE_CONFIG.houdini3D.scale || 0.015;
        const toyTargetScale = toyBaseScale * targetScale;
        const curScale = toyTargetScale * easeOutCubic;
        houdiniToyGroup.scale.set(curScale, curScale, curScale);

        if (regrowProgress >= 1.0) {
          houdiniRespawnStartTime = 0;
          canInteract = true;
        }
      }
    }

    // Handle Question Box respawn/grow transition
    if (!isShattering && respawnStartTime > 0 && questionBoxGroup) {
      const now = performance.now();
      const sCfg = SCENE_CONFIG.questionBox.shatter;
      const delay = sCfg.respawnDelay !== undefined ? sCfg.respawnDelay : 1500;
      const duration = sCfg.respawnDuration !== undefined ? sCfg.respawnDuration : 800;

      const elapsed = now - respawnStartTime;

      if (elapsed < delay) {
        // Still in the wait phase before growing back: keep hidden
        questionBoxGroup.visible = false;
        if (shadowMesh) {
          shadowMesh.visible = false;
        }
      } else {
        // Grow back phase
        if (!isQBoxRegrowingSoundPlayed) {
          isQBoxRegrowingSoundPlayed = true;
          playAboutGrowSound();
        }
        questionBoxGroup.visible = true;
        if (shadowMesh) {
          shadowMesh.visible = true;
        }

        const growElapsed = elapsed - delay;
        const pct = Math.min(1.0, growElapsed / duration);

        // Ease-out cubic formula for a smooth springy grow-back transition
        const easeOutCubic = 1.0 - Math.pow(1.0 - pct, 3.0);

        const qBoxBaseScale = SCENE_CONFIG.questionBox.scale;
        const currentScale = qBoxBaseScale * easeOutCubic * targetScale;
        questionBoxGroup.scale.set(currentScale, currentScale, currentScale);

        // shadow scale and opacity grow back in sync
        if (shadowMesh && shadowMaterial) {
          const shadowBaseY = SCENE_CONFIG.questionBox.shadowY !== undefined ? SCENE_CONFIG.questionBox.shadowY : 0.08;
          const h = questionBoxGroup.position.y - shadowBaseY;

          // Calculate the exact target scale/opacity from the standard loop
          const shadowBaseScale = SCENE_CONFIG.questionBox.shadowScale !== undefined ? SCENE_CONFIG.questionBox.shadowScale : 1.6;
          const targetScaleFactor = Math.max(0.3, 1.0 - h * 0.2) * shadowBaseScale;
          const targetOpacityFactor = Math.max(0.0, (1.0 - h * 0.45) * 0.6);

          // Interpolate using easeOutCubic
          const currentShadowScale = targetScaleFactor * easeOutCubic * targetScale;
          shadowMesh.scale.set(currentShadowScale, currentShadowScale, 1.0);
          shadowMaterial.opacity = targetOpacityFactor * easeOutCubic * targetScale;
        }

        if (pct >= 1.0) {
          // Animation completed: unlock interaction and restore normal hover state
          respawnStartTime = 0;
          canInteract = true;
        }
      }
    }

    // Apply constant rotation, sine-based floating motion, and hover scale/spin to the question box
    if (questionBoxGroup && SCENE_CONFIG.questionBox && SCENE_CONFIG.questionBox.enabled !== false) {
      if (isShattering) {
        // Bypassed completely during shatter
      } else {
        // Rotation speed multiplier based on hover (always 1.0 during respawning/interaction locks since hover is disabled)
        const rotSpeedMult = isQBoxHovered ? (SCENE_CONFIG.questionBox.hoverSpinMultiplier !== undefined ? SCENE_CONFIG.questionBox.hoverSpinMultiplier : 2.5) : 1.0;
        const qBoxDtScale = dt * 60.0;
        questionBoxGroup.rotation.x += (SCENE_CONFIG.questionBox.rotationSpeedX || 0.003) * rotSpeedMult * qBoxDtScale;
        questionBoxGroup.rotation.y += (SCENE_CONFIG.questionBox.rotationSpeedY || 0.005) * rotSpeedMult * qBoxDtScale;

        // Calculate dynamic vertical floating oscillation (use userData.baseY so mobile/desktop positions are respected)
        const freq = SCENE_CONFIG.questionBox.floatFrequency !== undefined ? SCENE_CONFIG.questionBox.floatFrequency : 0.003;
        const amp = SCENE_CONFIG.questionBox.floatAmplitude !== undefined ? SCENE_CONFIG.questionBox.floatAmplitude : 0.15;
        const baseY = questionBoxGroup.userData.baseY !== undefined ? questionBoxGroup.userData.baseY : SCENE_CONFIG.questionBox.position.y;
        questionBoxGroup.position.x = questionBoxGroup.userData.baseX !== undefined ? questionBoxGroup.userData.baseX : SCENE_CONFIG.questionBox.position.x;
        questionBoxGroup.position.z = questionBoxGroup.userData.baseZ !== undefined ? questionBoxGroup.userData.baseZ : SCENE_CONFIG.questionBox.position.z;
        questionBoxGroup.position.y = baseY + Math.sin(performance.now() * freq) * amp;

        if (respawnStartTime > 0) {
          // Bypass only the scale check during respawn/grow transitions (handled by the grow back loop above)
        } else {
          // Lerp scale to hide or show on hover
          const qBoxBaseScale = SCENE_CONFIG.questionBox.scale;
          const qBoxActiveScale = isQBoxHovered ? 1.15 : 1.0;
          const qBoxTargetScale = qBoxBaseScale * qBoxActiveScale * targetScale;

          const currentQScale = questionBoxGroup.scale.x;
          const qBoxScaleLerp = 1 - Math.pow(1 - 0.1, qBoxDtScale);
          const nextQScale = THREE.MathUtils.lerp(currentQScale, qBoxTargetScale, qBoxScaleLerp);
          questionBoxGroup.scale.set(nextQScale, nextQScale, nextQScale);

          if (isQBoxHovered && qBoxBaseScale > 0) {
            const scaleRatio = nextQScale / (qBoxBaseScale * targetScale);
            if (scaleRatio >= 1.12) {
              qBoxReachedFullHoverScale = true;
            }
          }
        }
      }
    }

    // Apply position updates, shape keys ("Inflated" & "Pop"), and opacity fade to the Houdini toy
    if (houdiniToyGroup && SCENE_CONFIG.houdini3D && SCENE_CONFIG.houdini3D.enabled !== false) {
      if (isHoudiniPopping) {
        // Handled in the popping loop above!
      } else {
        // Lerp morph target "Inflated" influence on hover first so we can use nextInfluence for position.y
        const targetInfluence = isHoudiniToyHovered ? 1.0 : 0.0;
        const currentInfluence = (houdiniToyGroup.userData.inflatedInfluence !== undefined) ? houdiniToyGroup.userData.inflatedInfluence : 0.0;
        const houdiniDtScale = dt * 60.0;
        const houdiniLerpFactor = 1 - Math.pow(1 - 0.1, houdiniDtScale);
        const nextInfluence = THREE.MathUtils.lerp(currentInfluence, targetInfluence, houdiniLerpFactor);
        houdiniToyGroup.userData.inflatedInfluence = nextInfluence;

        if (isHoudiniToyHovered && nextInfluence >= 0.85) {
          houdiniReachedFullHoverScale = true;
        }

        updateHoudiniMorphTargets(houdiniToyGroup, nextInfluence, 0.0);

        // Calculate side-to-side LOCAL rotation sway
        const hCfg = SCENE_CONFIG.houdini3D;
        const swayCfg = (hCfg && hCfg.sway) ? hCfg.sway : {};
        const isSwayEnabled = swayCfg.enabled !== false;

        const baseRotX = (hCfg.rotation && hCfg.rotation.x !== undefined ? hCfg.rotation.x : 0) * (Math.PI / 180);
        const baseRotY = (hCfg.rotation && hCfg.rotation.y !== undefined ? hCfg.rotation.y : 210) * (Math.PI / 180);
        const baseRotZ = (hCfg.rotation && hCfg.rotation.z !== undefined ? hCfg.rotation.z : 0) * (Math.PI / 180);

        const baseQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(baseRotX, baseRotY, baseRotZ, 'YXZ'));
        let finalQuaternion = baseQuaternion.clone();
        const pivotShift = new THREE.Vector3(0, 0, 0);

        if (isSwayEnabled) {
          const nowTime = performance.now() * 0.001;

          const xCfg = (swayCfg.x && typeof swayCfg.x === 'object') ? swayCfg.x : null;
          const yCfg = (swayCfg.y && typeof swayCfg.y === 'object') ? swayCfg.y : null;
          const zCfg = (swayCfg.z && typeof swayCfg.z === 'object') ? swayCfg.z : null;

          let swayXRad = 0;
          let swayYRad = 0;
          let swayZRad = 0;

          if (xCfg || yCfg || zCfg) {
            if (xCfg && xCfg.enabled !== false) {
              const amtDeg = xCfg.amount !== undefined ? xCfg.amount : 0.0;
              const spd = xCfg.speed !== undefined ? xCfg.speed : 1.0;
              const phase = xCfg.phase || 0.0;
              swayXRad = Math.sin(nowTime * spd + phase) * (amtDeg * (Math.PI / 180));
            }
            if (yCfg && yCfg.enabled !== false) {
              const amtDeg = yCfg.amount !== undefined ? yCfg.amount : 0.0;
              const spd = yCfg.speed !== undefined ? yCfg.speed : 1.5;
              const phase = yCfg.phase || 0.0;
              swayYRad = Math.sin(nowTime * spd + phase) * (amtDeg * (Math.PI / 180));
            }
            if (zCfg && zCfg.enabled !== false) {
              const amtDeg = zCfg.amount !== undefined ? zCfg.amount : 0.0;
              const spd = zCfg.speed !== undefined ? zCfg.speed : 1.2;
              const phase = zCfg.phase || 0.0;
              swayZRad = Math.sin(nowTime * spd + phase) * (amtDeg * (Math.PI / 180));
            }
          } else {
            // Fallback for single-axis legacy configuration format
            const swayAmountDeg = swayCfg.amount !== undefined ? swayCfg.amount : 15.0;
            const swaySpeed = swayCfg.speed !== undefined ? swayCfg.speed : 1.5;
            const swayAxis = (swayCfg.axis || 'y').toLowerCase();
            const rad = Math.sin(nowTime * swaySpeed) * (swayAmountDeg * (Math.PI / 180));
            if (swayAxis === 'x') swayXRad = rad;
            else if (swayAxis === 'z') swayZRad = rad;
            else swayYRad = rad;
          }

          const localEuler = new THREE.Euler(swayXRad, swayYRad, swayZRad, 'YXZ');
          const swayQuaternion = new THREE.Quaternion().setFromEuler(localEuler);

          // Apply sway rotation in object's local coordinate frame
          finalQuaternion = baseQuaternion.clone().multiply(swayQuaternion);

          const pX = (swayCfg.pivotOffset && swayCfg.pivotOffset.x) || 0.0;
          const pY = (swayCfg.pivotOffset && swayCfg.pivotOffset.y) || 0.0;
          const pZ = (swayCfg.pivotOffset && swayCfg.pivotOffset.z) || 0.0;

          if (pY !== 0 || pX !== 0 || pZ !== 0) {
            const localPivot = new THREE.Vector3(pX, pY, pZ);
            const rotatedLocalPivot = localPivot.clone().applyQuaternion(swayQuaternion);
            pivotShift.copy(rotatedLocalPivot.sub(localPivot)).applyQuaternion(baseQuaternion);
          }
        }

        // Normal position & orientation updates (applied continuously during idling, hover, and regrow)
        const hoverOffsetVal = hCfg.hoverYOffset !== undefined ? hCfg.hoverYOffset : 0.15;
        const baseY = (houdiniToyGroup.userData.baseY !== undefined) ? houdiniToyGroup.userData.baseY : hCfg.desktop.position.y;
        const baseX = (houdiniToyGroup.userData.baseX !== undefined) ? houdiniToyGroup.userData.baseX : hCfg.desktop.position.x;
        const baseZ = (houdiniToyGroup.userData.baseZ !== undefined) ? houdiniToyGroup.userData.baseZ : hCfg.desktop.position.z;

        houdiniToyGroup.position.set(
          baseX + pivotShift.x,
          baseY + (hoverOffsetVal * nextInfluence) + pivotShift.y,
          baseZ + pivotShift.z
        );
        houdiniToyGroup.quaternion.copy(finalQuaternion);

        if (houdiniRespawnStartTime > 0) {
          // Scale is handled by the regrow loop!
        } else {
          // Reset opacity to 1.0 when active
          houdiniToyGroup.traverse((child) => {
            if (child.isMesh && child.material) {
              child.material.opacity = 1.0;
            }
          });
          if (houdiniShadowMesh && houdiniShadowMaterial) {
            houdiniShadowMesh.visible = true;
            houdiniShadowMaterial.opacity = 0.6;
          }

          const toyBaseScale = hCfg.scale || 0.015;
          const toyTargetScale = toyBaseScale * targetScale;

          const currentToyScale = houdiniToyGroup.scale.x;
          const nextToyScale = THREE.MathUtils.lerp(currentToyScale, toyTargetScale, houdiniLerpFactor);
          houdiniToyGroup.scale.set(nextToyScale, nextToyScale, nextToyScale);
        }
      }
    }

    // Continuous spinning of Globe mesh and hover scale-up
    if (webGlobeGroup && SCENE_CONFIG.web3D && SCENE_CONFIG.web3D.enabled !== false) {
      const wCfg = SCENE_CONFIG.web3D;
      const rotSpeedMult = isWebGlobeHovered ? (wCfg.hoverSpinMultiplier !== undefined ? wCfg.hoverSpinMultiplier : 2.5) : 1.0;

      let clickSpinMult = 1.0;
      if (isWebGlobeClickAnimating) {
        const cCfg = wCfg.clickAnimation || {};
        const peakClickSpin = cCfg.clickSpinMultiplier !== undefined ? cCfg.clickSpinMultiplier : 8.0;
        const elapsed = performance.now() - webGlobeClickStartTime;
        const duration = cCfg.duration !== undefined ? cCfg.duration : 1200;
        const pct = Math.min(1.0, elapsed / duration);
        const flashPct = Math.pow(1.0 - pct, 2.0);
        clickSpinMult = THREE.MathUtils.lerp(1.0, peakClickSpin, flashPct);
      }

      const baseSpinSpd = wCfg.rotationSpeedY !== undefined ? wCfg.rotationSpeedY : (wCfg.rotationSpeed || 0.015);
      const webDtScale = dt * 60.0;
      const spinSpd = baseSpinSpd * rotSpeedMult * clickSpinMult * webDtScale;
      const axis = wCfg.rotationAxis || 'y';

      if (webGlobeMesh) {
        if (typeof axis === 'string') {
          const a = axis.toLowerCase();
          if (a === 'x') {
            webGlobeMesh.rotation.x += spinSpd;
          } else if (a === 'z') {
            webGlobeMesh.rotation.z += spinSpd;
          } else {
            webGlobeMesh.rotation.y += spinSpd;
          }
        } else if (typeof axis === 'object') {
          webGlobeMesh.rotation.x += (axis.x || 0) * spinSpd;
          webGlobeMesh.rotation.y += (axis.y || 0) * spinSpd;
          webGlobeMesh.rotation.z += (axis.z || 0) * spinSpd;
        } else {
          webGlobeMesh.rotation.y += spinSpd;
        }
      }

      // Continuous spinning of Moon mesh
      if (webMoonMesh) {
        const mMoonCfg = wCfg.moon || {};
        const moonBaseSpinSpd = mMoonCfg.rotationSpeed !== undefined ? mMoonCfg.rotationSpeed : (mMoonCfg.rotationSpeedY !== undefined ? mMoonCfg.rotationSpeedY : 0.01);
        const moonSpinSpd = moonBaseSpinSpd * rotSpeedMult * clickSpinMult * webDtScale;
        const moonAxis = mMoonCfg.rotationAxis || 'y';

        if (typeof moonAxis === 'string') {
          const a = moonAxis.toLowerCase();
          if (a === 'x') webMoonMesh.rotation.x += moonSpinSpd;
          else if (a === 'z') webMoonMesh.rotation.z += moonSpinSpd;
          else webMoonMesh.rotation.y += moonSpinSpd;
        } else if (typeof moonAxis === 'object') {
          webMoonMesh.rotation.x += (moonAxis.x || 0) * moonSpinSpd;
          webMoonMesh.rotation.y += (moonAxis.y || 0) * moonSpinSpd;
          webMoonMesh.rotation.z += (moonAxis.z || 0) * moonSpinSpd;
        } else {
          webMoonMesh.rotation.y += moonSpinSpd;
        }
      }

      // Cyclically animate signal rings (Signal_Inner, Signal_Middle, Signal_Outer) displaying one at a time & billboarded to camera
      const sigMeshes = [webSignalInnerMesh, webSignalMiddleMesh, webSignalOuterMesh].filter(Boolean);
      if (sigMeshes.length > 0) {
        const sCfg = wCfg.signal || {};
        if (sCfg.enabled !== false) {
          const baseInterval = sCfg.interval || 530;
          const hoverSpeedMult = isWebGlobeHovered ? (sCfg.hoverSpeedMultiplier !== undefined ? sCfg.hoverSpeedMultiplier : 3.5) : 1.0;
          const clickSpeedMult = isWebGlobeClickAnimating ? (sCfg.clickSpeedMultiplier !== undefined ? (sCfg.clickSpeedMultiplier * (clickSpinMult / 8.0)) : (clickSpinMult * 1.5)) : 1.0;
          const effectiveSpeed = hoverSpeedMult * clickSpeedMult;

          webSignalAnimTime += dt * 1000 * effectiveSpeed;
          const activeIndex = Math.floor(webSignalAnimTime / baseInterval) % sigMeshes.length;

          if (sCfg.billboard !== false) {
            camera.getWorldPosition(tmpCameraWorldPos);
          }

          sigMeshes.forEach((mesh, idx) => {
            const isVisible = (idx === activeIndex);
            mesh.visible = isVisible;

            if (isVisible && sCfg.billboard !== false) {
              mesh.lookAt(tmpCameraWorldPos);
              if (sCfg.billboardRotationX) mesh.rotateX(sCfg.billboardRotationX * Math.PI / 180);
              if (sCfg.billboardRotationY) mesh.rotateY(sCfg.billboardRotationY * Math.PI / 180);
              if (sCfg.billboardRotationZ) mesh.rotateZ(sCfg.billboardRotationZ * Math.PI / 180);
            }
          });
        } else {
          sigMeshes.forEach(mesh => mesh.visible = true);
        }
      }

      // Smooth scale-up and vertical lift offset on hover, click lock, and respawn shrink-back with sinusoidal float
      const hoverOffsetVal = wCfg.hoverYOffset !== undefined ? wCfg.hoverYOffset : 0.0;
      const baseY = (webGlobeGroup.userData.baseY !== undefined) ? webGlobeGroup.userData.baseY : (wCfg.desktop ? wCfg.desktop.position.y : 0.6);

      const floatFreq = wCfg.floatFrequency !== undefined ? wCfg.floatFrequency : 0.003;
      const floatAmp = wCfg.floatAmplitude !== undefined ? wCfg.floatAmplitude : 0.1;
      const floatOffset = Math.sin(performance.now() * floatFreq) * floatAmp;

      if (webRespawnStartTime > 0) {
        const cCfg = wCfg.clickAnimation || {};
        const delay = cCfg.respawnDelay !== undefined ? cCfg.respawnDelay : 0;
        const duration = cCfg.respawnDuration !== undefined ? cCfg.respawnDuration : 600;
        const elapsed = performance.now() - webRespawnStartTime;

        if (elapsed < delay) {
          const webBaseScale = wCfg.scale || 0.0055;
          const hoverScaleMult = wCfg.hoverScale !== undefined ? wCfg.hoverScale : 1.15;
          const startScale = webBaseScale * hoverScaleMult * targetScale;
          webGlobeGroup.scale.set(startScale, startScale, startScale);
          webGlobeGroup.position.y = baseY + hoverOffsetVal + floatOffset;
          webGlobeGroup.userData.hoverInfluence = 1.0;
        } else {
          if (!isWebRespawnSoundPlayed) {
            isWebRespawnSoundPlayed = true;
            playWebOutSound();
          }
          const pct = Math.min(1.0, (elapsed - delay) / Math.max(1, duration));
          const easeOutCubic = 1.0 - Math.pow(1.0 - pct, 3.0);

          const webBaseScale = wCfg.scale || 0.0055;
          const hoverScaleMult = wCfg.hoverScale !== undefined ? wCfg.hoverScale : 1.15;
          const startScale = webBaseScale * hoverScaleMult * targetScale;
          const endScale = webBaseScale * 1.0 * targetScale;

          const currentScale = THREE.MathUtils.lerp(startScale, endScale, easeOutCubic);
          webGlobeGroup.scale.set(currentScale, currentScale, currentScale);

          // Lerp position Y back down to baseY in sync with scale while keeping float offset
          const currentYOffset = hoverOffsetVal * (1.0 - easeOutCubic);
          webGlobeGroup.position.y = baseY + currentYOffset + floatOffset;
          webGlobeGroup.userData.hoverInfluence = 1.0 - easeOutCubic;

          if (pct >= 1.0) {
            webRespawnStartTime = 0;
            canInteract = true;
          }
        }
      } else if (isWebGlobeClickAnimating) {
        // Lock scale at full hover scale AND lock position Y at elevated hover height + floatOffset during click animation
        const webBaseScale = wCfg.scale || 0.0055;
        const hoverScaleMult = wCfg.hoverScale !== undefined ? wCfg.hoverScale : 1.15;
        const webClickScale = webBaseScale * hoverScaleMult * targetScale;
        webGlobeGroup.scale.set(webClickScale, webClickScale, webClickScale);
        webGlobeGroup.position.y = baseY + hoverOffsetVal + floatOffset;
        webGlobeGroup.userData.hoverInfluence = 1.0;
      } else {
        // Normal hover lerp for position Y + floatOffset and scale
        const targetHoverInf = isWebGlobeHovered ? 1.0 : 0.0;
        const currentHoverInf = webGlobeGroup.userData.hoverInfluence !== undefined ? webGlobeGroup.userData.hoverInfluence : 0.0;
        const webLerpFactor = 1 - Math.pow(1 - 0.1, dt * 60.0);
        const nextHoverInf = THREE.MathUtils.lerp(currentHoverInf, targetHoverInf, webLerpFactor);
        webGlobeGroup.userData.hoverInfluence = nextHoverInf;

        webGlobeGroup.position.y = baseY + (hoverOffsetVal * nextHoverInf) + floatOffset;

        const webBaseScale = wCfg.scale || 1.0;
        const webActiveScale = isWebGlobeHovered ? (wCfg.hoverScale !== undefined ? wCfg.hoverScale : 1.15) : 1.0;
        const webTargetScale = webBaseScale * webActiveScale * targetScale;

        const currentWebScale = webGlobeGroup.scale.x;
        const nextWebScale = THREE.MathUtils.lerp(currentWebScale, webTargetScale, webLerpFactor);
        webGlobeGroup.scale.set(nextWebScale, nextWebScale, nextWebScale);

        if (isWebGlobeHovered && currentWebScale >= webTargetScale * 0.98) {
          webGlobeReachedFullHoverScale = true;
        }
      }
    }

    // Update Web Globe click animation (emissive flash & god rays)
    if (isWebGlobeClickAnimating && SCENE_CONFIG.web3D) {
      const wCfg = SCENE_CONFIG.web3D;
      const cCfg = wCfg.clickAnimation || {};
      const duration = cCfg.duration !== undefined ? cCfg.duration : 1200;
      const elapsed = performance.now() - webGlobeClickStartTime;
      const pct = Math.min(1.0, elapsed / duration);

      // Ease out quadratic progress curve for flash decay
      const flashPct = Math.pow(1.0 - pct, 2.0);

      // 1. Emissive flash
      if (webGridMaterial) {
        const baseEmissive = (wCfg.materials && wCfg.materials.grid && wCfg.materials.grid.emissiveIntensity !== undefined) ? wCfg.materials.grid.emissiveIntensity : 1.0;
        const peakEmissive = cCfg.emissiveFlashIntensity !== undefined ? cCfg.emissiveFlashIntensity : 4.5;
        webGridMaterial.emissiveIntensity = THREE.MathUtils.lerp(baseEmissive, peakEmissive, flashPct);
      }
      if (webMoonMaterial) {
        const baseEmissiveM = (wCfg.materials && wCfg.materials.moon && wCfg.materials.moon.emissiveIntensity !== undefined) ? wCfg.materials.moon.emissiveIntensity : 1.0;
        const peakEmissiveM = cCfg.moonEmissiveFlashIntensity !== undefined ? cCfg.moonEmissiveFlashIntensity : 3.5;
        webMoonMaterial.emissiveIntensity = THREE.MathUtils.lerp(baseEmissiveM, peakEmissiveM, flashPct);
      }

      // 2. God rays particle animation in a single burst fading out (no scale change)
      if (webGodRayGroup && webGodRays.length > 0) {
        const globeCenterWorld = new THREE.Vector3();
        if (webGlobeMesh) {
          webGlobeMesh.getWorldPosition(globeCenterWorld);
        } else if (webGlobeGroup) {
          webGlobeGroup.getWorldPosition(globeCenterWorld);
        }
        const globeCenterScene = sceneGroup.worldToLocal(globeCenterWorld.clone());
        webGodRayGroup.position.copy(globeCenterScene);

        const rayWorldPos = new THREE.Vector3();
        const worldDir = new THREE.Vector3();
        const camDir = new THREE.Vector3();
        const sideVec = new THREE.Vector3();
        const normVec = new THREE.Vector3();
        const worldMat = new THREE.Matrix4();
        const parentInvMat = new THREE.Matrix4();

        webGodRays.forEach((ray) => {
          const dir = ray.userData.direction;
          const speed = ray.userData.expSpeed;

          // Accumulate radial distance traveled from center
          ray.userData.distance += speed * dt;
          const dist = ray.userData.distance;

          // 100% linear radial motion outward in sceneGroup space
          ray.position.set(dir.x * dist, dir.y * dist, dir.z * dist);

          // Get world position of ray and direction in world space
          ray.getWorldPosition(rayWorldPos);
          worldDir.copy(dir).transformDirection(sceneGroup.matrixWorld).normalize();

          // Camera direction from ray world position
          camDir.subVectors(camera.position, rayWorldPos).normalize();

          // Calculate Z axis facing camera (perpendicular component of camDir relative to worldDir)
          const dot = camDir.dot(worldDir);
          normVec.copy(camDir).addScaledVector(worldDir, -dot);
          if (normVec.lengthSq() < 0.0001) {
            normVec.set(0, 0, 1).addScaledVector(worldDir, -worldDir.z);
          }
          normVec.normalize();

          // X axis = Y (worldDir) cross Z (normVec)
          sideVec.crossVectors(worldDir, normVec).normalize();

          // Set basis: Column 0 = sideVec (X), Column 1 = worldDir (Y), Column 2 = normVec (Z)
          worldMat.makeBasis(sideVec, worldDir, normVec);

          // Convert world matrix to parent local space
          parentInvMat.copy(sceneGroup.matrixWorld).invert();
          const localMat = parentInvMat.multiply(worldMat);
          ray.quaternion.setFromRotationMatrix(localMat);

          // Constant scale (no scale growth or shrink)
          ray.scale.set(1.0, 1.0, 1.0);

          // Fade opacity with flash decay
          if (ray.material) {
            ray.material.opacity = flashPct * 0.95;
          }
        });
      }

      // 3. Animation cleanup on completion
      if (pct >= 1.0) {
        isWebGlobeClickAnimating = false;
        if (webGridMaterial) {
          const baseEmissive = (wCfg.materials && wCfg.materials.grid && wCfg.materials.grid.emissiveIntensity !== undefined) ? wCfg.materials.grid.emissiveIntensity : 1.0;
          webGridMaterial.emissiveIntensity = baseEmissive;
        }
        if (webMoonMaterial) {
          const baseEmissiveM = (wCfg.materials && wCfg.materials.moon && wCfg.materials.moon.emissiveIntensity !== undefined) ? wCfg.materials.moon.emissiveIntensity : 1.0;
          webMoonMaterial.emissiveIntensity = baseEmissiveM;
        }
        if (webGodRayGroup) {
          if (webGodRayGroup.parent) webGodRayGroup.parent.remove(webGodRayGroup);
          webGodRays.forEach((ray) => {
            if (ray.geometry) ray.geometry.dispose();
            if (ray.material) ray.material.dispose();
          });
          webGodRayGroup = null;
          webGodRays = [];
        }
        // Trigger independent respawn transition back to normal scale
        startWebGlobeRespawn();
      }
    }

    // Dynamic contact shadow updates for LinkedIn cube (always follows cube's horizontal coordinates at hardcoded y height)
    if (linkedinShadowMesh && linkedinShadowMaterial && bugCubeGroup && SCENE_CONFIG.linkedin3D) {
      const lCfg = SCENE_CONFIG.linkedin3D;
      const qBoxCfg = SCENE_CONFIG.questionBox;

      // Extract shadowY height dynamically from config parameter
      const shadowBaseY = lCfg.shadowY !== undefined ? lCfg.shadowY : 0.35;

      // Dynamic visibility toggles for red debug geometry
      if (bugBoundaryMesh) {
        bugBoundaryMesh.visible = !!lCfg.showDebug;
      }
      if (bugObstacleMesh) {
        bugObstacleMesh.visible = !!lCfg.showDebug;
      }
      if (houdiniObstacleMesh) {
        if (houdiniToyGroup) {
          const visualShadowBaseY = SCENE_CONFIG.questionBox.shadowY !== undefined ? SCENE_CONFIG.questionBox.shadowY : 0.22;
          houdiniObstacleMesh.position.set(
            houdiniToyGroup.position.x,
            visualShadowBaseY,
            houdiniToyGroup.position.z
          );
        }
        houdiniObstacleMesh.visible = !!lCfg.showDebug;
      }
      if (webGlobeObstacleMesh) {
        if (webGlobeGroup) {
          const visualShadowBaseY = SCENE_CONFIG.questionBox.shadowY !== undefined ? SCENE_CONFIG.questionBox.shadowY : 0.22;
          webGlobeObstacleMesh.position.set(
            webGlobeGroup.position.x,
            visualShadowBaseY,
            webGlobeGroup.position.z
          );
        }
        webGlobeObstacleMesh.visible = !!lCfg.showDebug;
      }

      // Hardcode the bug cube's Y position to its configured base height (0.8)
      const bugInitPos = getLinkedInBugInitialPos();
      bugCubeGroup.position.y = bugInitPos.y !== undefined ? bugInitPos.y : 0.8;

      // Bind coordinates directly underneath the bug cube
      linkedinShadowMesh.position.set(
        bugCubeGroup.position.x,
        shadowBaseY,
        bugCubeGroup.position.z
      );

      const baseShadowScale = qBoxCfg.shadowScale !== undefined ? qBoxCfg.shadowScale : 1.6;
      const sFactor = baseShadowScale * targetScale * 0.45;
      linkedinShadowMesh.scale.set(sFactor, sFactor, 1.0);

      linkedinShadowMaterial.opacity = 0.6 * targetScale;
    }

    // Per-style hideShadows toggle
    const shouldHideShadows = (curModeCfg.hideShadows === true || curModeCfg.shadows === false);
    if (shadowMesh && shouldHideShadows) shadowMesh.visible = false;
    if (houdiniShadowMesh && shouldHideShadows) houdiniShadowMesh.visible = false;
    if (linkedinShadowMesh && shouldHideShadows) linkedinShadowMesh.visible = false;
    if (webShadowMesh && shouldHideShadows) webShadowMesh.visible = false;

    // Contact shadow updates for Web 3D Globe
    if (!shouldHideShadows && webShadowMesh && webShadowMaterial && webGlobeGroup && SCENE_CONFIG.web3D) {
      const wCfg = SCENE_CONFIG.web3D;
      const shadowBaseY = wCfg.shadowY !== undefined ? wCfg.shadowY : 0.33;
      webShadowMesh.position.set(webGlobeGroup.position.x, shadowBaseY, webGlobeGroup.position.z);
      const baseShadowScale = wCfg.shadowScale !== undefined ? wCfg.shadowScale : 1.6;
      const sFactor = baseShadowScale * targetScale;
      webShadowMesh.scale.set(sFactor, sFactor, 1.0);
      webShadowMaterial.opacity = 0.6 * targetScale;
    }

    // Dynamic contact shadow updates based on floating height
    if (!shouldHideShadows && shadowMesh && shadowMaterial && questionBoxGroup && SCENE_CONFIG.questionBox) {
      if (isShattering || respawnStartTime > 0) {
        // Bypass to avoid overriding the shadow visibility during shatter and grow
      } else {
      const qBoxCfg = SCENE_CONFIG.questionBox;
      const shadowBaseY = qBoxCfg.shadowY !== undefined ? qBoxCfg.shadowY : 0.08;

      // Update Y position dynamically
      shadowMesh.position.y = shadowBaseY;

      const h = questionBoxGroup.position.y - shadowBaseY; // Height difference

      // Base scale times the dynamic distance factor
      const baseScale = qBoxCfg.shadowScale !== undefined ? qBoxCfg.shadowScale : 1.5;
      const sFactor = Math.max(0.3, 1.0 - h * 0.2) * baseScale;
      shadowMesh.scale.set(sFactor, sFactor, 1.0);

      // Fade out shadow as box floats higher
      shadowMaterial.opacity = Math.max(0.0, (1.0 - h * 0.45) * 0.6);
      }
    }

    // Dynamic contact shadow updates for Houdini toy based on floating height
    if (!shouldHideShadows && houdiniShadowMesh && houdiniShadowMaterial && houdiniToyGroup && SCENE_CONFIG.houdini3D) {
      if (isHoudiniPopping || houdiniRespawnStartTime > 0) {
        // Bypassed completely during pop and regrow
      } else {
        const shadowBaseY = SCENE_CONFIG.houdini3D.shadowY !== undefined ? SCENE_CONFIG.houdini3D.shadowY : 0.08;

        // Update position dynamically to follow the toy
        houdiniShadowMesh.position.x = houdiniToyGroup.position.x;
        houdiniShadowMesh.position.z = houdiniToyGroup.position.z;
        houdiniShadowMesh.position.y = shadowBaseY;

        // Simple constant scale and opacity linked to targetScale transition
        const baseScale = SCENE_CONFIG.houdini3D.shadowScale !== undefined ? SCENE_CONFIG.houdini3D.shadowScale : 1.6;
        const sFactor = baseScale * targetScale;
        houdiniShadowMesh.scale.set(sFactor, sFactor, 1.0);

        houdiniShadowMaterial.opacity = 0.6 * targetScale;
      }
    }

    // Update vignette pass uniforms dynamically (checking per-style disableVignette & backgroundColor toggles)
    if (vignettePass && SCENE_CONFIG.site.backgroundColorTop && SCENE_CONFIG.site.backgroundColorBottom) {
      const activeModesList = (SCENE_CONFIG.renderStyles && Array.isArray(SCENE_CONFIG.renderStyles.activeModes)) ? SCENE_CONFIG.renderStyles.activeModes : ['default'];
      const activeIdx = (SCENE_CONFIG.renderStyles && SCENE_CONFIG.renderStyles.currentModeIndex !== undefined) ? SCENE_CONFIG.renderStyles.currentModeIndex : 0;
      const curModeName = activeModesList[activeIdx % activeModesList.length] || 'default';
      const curModeCfg = (SCENE_CONFIG.renderStyles && SCENE_CONFIG.renderStyles[curModeName]) || {};

      const isMobile = window.innerWidth <= window.innerHeight;
      const contextVignetteEnabled = isMobile
        ? (SCENE_CONFIG.vignette.enabledMobile !== undefined ? SCENE_CONFIG.vignette.enabledMobile : false)
        : SCENE_CONFIG.vignette.enabled !== false;
      const isVignetteDisabledByMode = (curModeCfg.disableVignette === true || curModeCfg.vignette === false);
      const isVignetteActive = contextVignetteEnabled && !isVignetteDisabledByMode;

      const modeBgColor = curModeCfg.backgroundColor || curModeCfg.bgColor || curModeCfg.solidBackgroundColor;
      const hasSolidBg = !!modeBgColor;

      vignettePass.uniforms.colorTop.value.set(SCENE_CONFIG.site.backgroundColorTop);
      vignettePass.uniforms.colorBottom.value.set(SCENE_CONFIG.site.backgroundColorBottom);
      vignettePass.uniforms.offset.value = SCENE_CONFIG.vignette.offset;
      vignettePass.uniforms.darkness.value = SCENE_CONFIG.vignette.darkness;
      vignettePass.uniforms.vignetteEnabled.value = isVignetteActive;

      vignettePass.uniforms.useSolidBackground.value = hasSolidBg;
      if (hasSolidBg && vignettePass.uniforms.solidBackgroundColor) {
        vignettePass.uniforms.solidBackgroundColor.value.set(modeBgColor);
      }

      const modeTextColor = curModeCfg.textColor || (SCENE_CONFIG.site && SCENE_CONFIG.site.textColor) || '#ffffff';
      const modeHoverColor = curModeCfg.hoverColor || curModeCfg.hoverColorText || (SCENE_CONFIG.site && SCENE_CONFIG.site.hoverColorText) || '#91bfff';

      document.documentElement.style.setProperty('--text-color', modeTextColor, 'important');
      document.documentElement.style.setProperty('--hover-color', modeHoverColor, 'important');
      if (SCENE_CONFIG.interaction) {
        SCENE_CONFIG.interaction.hoverColor3D = modeHoverColor;
      }

      // Synchronize HTML canvas DOM element background & WebGL renderer clear color to prevent CSS gradient bleeding
      const canvasEl = document.getElementById('bg');
      if (hasSolidBg) {
        if (canvasEl) canvasEl.style.background = modeBgColor;
        if (renderer) renderer.setClearColor(new THREE.Color(modeBgColor), 1.0);
      } else {
        const defaultGrad = `linear-gradient(to bottom, ${SCENE_CONFIG.site.backgroundColorTop}, ${SCENE_CONFIG.site.backgroundColorBottom})`;
        if (canvasEl) canvasEl.style.background = defaultGrad;
        if (renderer) renderer.setClearColor(0x000000, 0.0);
      }
    }

    // Update dither pass uniforms dynamically based on active mode from activeModes array
    if (ditherPass && SCENE_CONFIG.renderStyles) {
      const cfg = SCENE_CONFIG.renderStyles;
      const activeModes = Array.isArray(cfg.activeModes) ? cfg.activeModes : ['default'];
      const idx = (cfg.currentModeIndex || 0) % activeModes.length;
      const modeName = activeModes[idx] || 'default';
      const modeId = RENDER_MODE_MAP[modeName] !== undefined ? RENDER_MODE_MAP[modeName] : 0;
      const pRatio = renderer.getPixelRatio();

      ditherPass.uniforms.resolution.value.set(window.innerWidth * pRatio, window.innerHeight * pRatio);
      ditherPass.uniforms.uTime.value = performance.now() * 0.001;
      ditherPass.uniforms.mode.value = modeId;
      ditherPass.enabled = (modeId !== 0);

      if (modeId === 1) { // multiBit
        const mb = cfg.multiBit || {};
        ditherPass.uniforms.colorLevels.value = mb.colorLevels !== undefined ? mb.colorLevels : 6.0;
        ditherPass.uniforms.pixelSize.value = mb.pixelSize !== undefined ? mb.pixelSize : 2.0;
        ditherPass.uniforms.ditherStrength.value = mb.ditherStrength !== undefined ? mb.ditherStrength : 0.25;
      } else if (modeId === 2) { // oneBit
        const ob = cfg.oneBit || {};
        ditherPass.uniforms.pixelSize.value = ob.pixelSize !== undefined ? ob.pixelSize : 2.0;
        ditherPass.uniforms.ditherStrength.value = ob.ditherStrength !== undefined ? ob.ditherStrength : 0.35;
        if (ditherPass.uniforms.darkColor) ditherPass.uniforms.darkColor.value.set(ob.darkColor || '#050510');
        if (ditherPass.uniforms.lightColor) ditherPass.uniforms.lightColor.value.set(ob.lightColor || '#e6e6fa');
      } else if (modeId === 3) { // pixelated
        const px = cfg.pixelated || {};
        ditherPass.uniforms.pixelatedPixelSize.value = px.pixelSize !== undefined ? px.pixelSize : 4.0;
        ditherPass.uniforms.pixelatedColorLevels.value = px.colorLevels !== undefined ? px.colorLevels : 16.0;
        ditherPass.uniforms.scanlineIntensity.value = px.scanlineIntensity !== undefined ? px.scanlineIntensity : 0.08;
      } else if (modeId === 4) { // gameBoy
        const gb = cfg.gameBoy || {};
        ditherPass.uniforms.gbPixelSize.value = gb.pixelSize !== undefined ? gb.pixelSize : 3.0;
        if (ditherPass.uniforms.gbC0) ditherPass.uniforms.gbC0.value.set(gb.c0 || '#0f380f');
        if (ditherPass.uniforms.gbC1) ditherPass.uniforms.gbC1.value.set(gb.c1 || '#306230');
        if (ditherPass.uniforms.gbC2) ditherPass.uniforms.gbC2.value.set(gb.c2 || '#8bac0f');
        if (ditherPass.uniforms.gbC3) ditherPass.uniforms.gbC3.value.set(gb.c3 || '#9bbc0f');
      } else if (modeId === 5) { // vhs
        const v = cfg.vhs || {};
        ditherPass.uniforms.vhsAberration.value = v.chromaticAberration !== undefined ? v.chromaticAberration : 0.006;
        ditherPass.uniforms.vhsJitter.value = v.vhsJitter !== undefined ? v.vhsJitter : 0.003;
        ditherPass.uniforms.vhsNoise.value = v.noiseIntensity !== undefined ? v.noiseIntensity : 0.12;
      } else if (modeId === 6) { // halftone
        const ht = cfg.halftone || {};
        ditherPass.uniforms.halftoneScale.value = ht.dotScale !== undefined ? ht.dotScale : 4.0;
        ditherPass.uniforms.halftoneAngle.value = ht.angle !== undefined ? ht.angle : 0.785398;
      } else if (modeId === 7) { // blueprint
        const bp = cfg.blueprint || {};
        ditherPass.uniforms.blueprintGrid.value = bp.gridScale !== undefined ? bp.gridScale : 32.0;
        if (ditherPass.uniforms.blueprintBg) ditherPass.uniforms.blueprintBg.value.set(bp.bgColor || '#001b3a');
        if (ditherPass.uniforms.blueprintLine) ditherPass.uniforms.blueprintLine.value.set(bp.lineColor || '#00f0ff');
      } else if (modeId === 8) { // thermal
        const th = cfg.thermal || {};
        if (ditherPass.uniforms.thC0) ditherPass.uniforms.thC0.value.set(th.c0 || '#000033');
        if (ditherPass.uniforms.thC1) ditherPass.uniforms.thC1.value.set(th.c1 || '#550088');
        if (ditherPass.uniforms.thC2) ditherPass.uniforms.thC2.value.set(th.c2 || '#cc0066');
        if (ditherPass.uniforms.thC3) ditherPass.uniforms.thC3.value.set(th.c3 || '#ff8800');
        if (ditherPass.uniforms.thC4) ditherPass.uniforms.thC4.value.set(th.c4 || '#ffffff');
      } else if (modeId === 9) { // ascii
        const asc = cfg.ascii || {};
        ditherPass.uniforms.asciiCellSize.value = asc.cellSize !== undefined ? asc.cellSize : 8.0;
        ditherPass.uniforms.asciiColorLevels.value = asc.colorLevels !== undefined ? asc.colorLevels : 4.0;
        ditherPass.uniforms.asciiBrightness.value = asc.brightness !== undefined ? asc.brightness : 1.1;
        ditherPass.uniforms.asciiContrast.value = asc.contrast !== undefined ? asc.contrast : 1.8;
        ditherPass.uniforms.asciiCharacterWeight.value = asc.characterWeight !== undefined ? asc.characterWeight : 1.3;
        ditherPass.uniforms.asciiUseSolidColor.value = asc.useSolidColor !== undefined ? !!asc.useSolidColor : true;
        ditherPass.uniforms.asciiDebugRawScene.value = asc.debugRawScene !== undefined ? !!asc.debugRawScene : false;
        if (ditherPass.uniforms.asciiColor) ditherPass.uniforms.asciiColor.value.set(asc.greenTint || '#00ff66');
      } else if (modeId === 10) { // anaglyph
        const ana = cfg.anaglyph || {};
        ditherPass.uniforms.anaglyphShift.value = ana.shift !== undefined ? ana.shift : 0.005;
      }
    }

    // Update outline pass settings dynamically
    if (SCENE_CONFIG.interaction && SCENE_CONFIG.interaction.outline) {
      [outlinePass, deformerOutlinePass, houdiniOutlinePass].forEach((pass) => {
        if (pass) {
          pass.edgeStrength = SCENE_CONFIG.interaction.outline.edgeStrength;
          pass.edgeGlow = SCENE_CONFIG.interaction.outline.edgeGlow;
          pass.edgeThickness = SCENE_CONFIG.interaction.outline.edgeThickness;
        }
      });
    }

    // Update question box material properties dynamically
    if (fbxExteriorMaterial && SCENE_CONFIG.questionBox) {
      const g_dyn = SCENE_CONFIG.questionBox.glass;
      fbxExteriorMaterial.color.set(g_dyn.color);
      fbxExteriorMaterial.transmission = g_dyn.transmission;
      fbxExteriorMaterial.roughness = g_dyn.roughness;
      fbxExteriorMaterial.ior = g_dyn.ior;
      fbxExteriorMaterial.opacity = g_dyn.opacity;
      fbxExteriorMaterial.reflectivity = g_dyn.reflectivity;
      fbxExteriorMaterial.clearcoat = g_dyn.clearcoat;
      fbxExteriorMaterial.clearcoatRoughness = g_dyn.clearcoatRoughness;
    }

    if (fbxInteriorMaterial && SCENE_CONFIG.questionBox) {
      const m_dyn = SCENE_CONFIG.questionBox.metal;

      // Calculate shifting hue dynamically over time if colorShiftSpeed > 0
      const shiftSpeed = m_dyn.colorShiftSpeed !== undefined ? m_dyn.colorShiftSpeed : 0.15;
      if (shiftSpeed > 0) {
        const hue = (performance.now() * 0.001 * shiftSpeed) % 1.0;
        fbxInteriorMaterial.color.setHSL(hue, 1.0, 0.5);
      } else {
        fbxInteriorMaterial.color.set(m_dyn.color);
      }

      fbxInteriorMaterial.metalness = m_dyn.metalness;
      fbxInteriorMaterial.roughness = m_dyn.roughness;
      if (fbxInteriorMaterial.normalScale) {
        fbxInteriorMaterial.normalScale.set(m_dyn.normalScale, m_dyn.normalScale);
      }
    }

    composer.render();
  }
  animate();

  function get3DHitTarget(clientX, clientY) {
    if (!canInteract || currentTarget !== 'main' || aboutOverlayVisible || aboutOverlayAnimating) return null;
    if (typeof isPointerOver2DUI === 'function' && isPointerOver2DUI(clientX, clientY)) return null;

    const hitMouse = new THREE.Vector2(
      (clientX / window.innerWidth) * 2 - 1,
      -(clientY / window.innerHeight) * 2 + 1
    );

    raycaster.setFromCamera(hitMouse, camera);

    if (questionBoxGroup && respawnStartTime === 0) {
      const qBoxIntersects = raycaster.intersectObject(questionBoxGroup, true);
      if (qBoxIntersects.length > 0) return { type: 'questionBox' };
    }

    if (houdiniToyGroup && !isHoudiniPopping && houdiniRespawnStartTime === 0) {
      const toyIntersects = raycaster.intersectObject(houdiniToyGroup, true);
      if (toyIntersects.length > 0) return { type: 'houdiniToy' };
    }

    if (bugCubeGroup) {
      const bugIntersects = raycaster.intersectObject(bugCubeGroup, true);
      if (bugIntersects.length > 0) return { type: 'bug' };
    }

    if (webGlobeGroup) {
      const webIntersects = raycaster.intersectObject(webGlobeGroup, true);
      if (webIntersects.length > 0) return { type: 'webGlobe' };
    }

    if (cubes && cubes.length > 0) {
      const intersects = raycaster.intersectObjects(cubes);
      if (intersects.length > 0) return { type: 'cube', object: intersects[0].object };
    }

    return null;
  }

  // Mouse drag camera rotation & 3D pointer tracking event listeners
  let pointerDownPos = { x: 0, y: 0 };

  const handlePointerDown = (event) => {
    pointerDownPos = { x: event.clientX, y: event.clientY };
    active3DPointerDownTarget = get3DHitTarget(event.clientX, event.clientY);

    if (!canInteract || currentTarget !== 'main') return;

    // Disable drag rotation in mobile context
    const isMobileContext = window.innerWidth <= window.innerHeight;
    if (isMobileContext) return;

    // Disable drag if clicking on links, logo, navigation containers, or burger menu
    if (event.target && event.target.closest && (
        event.target.closest('a') ||
        event.target.closest('button') ||
        event.target.closest('#mainnavlinks') ||
        event.target.closest('.link') ||
        event.target.closest('#mobilenavlinksbutton') ||
        event.target.closest('#mobilenavmenu') ||
        event.target.closest('.logolink'))) {
      return;
    }

    isDraggingPointer = true;
    previousPointerPos = { x: event.clientX, y: event.clientY };
  };

  window.addEventListener('pointerdown', handlePointerDown);
  const mainCanvas = document.getElementById('bg');
  if (mainCanvas) {
    mainCanvas.addEventListener('pointerdown', handlePointerDown);
  }

  window.addEventListener('pointermove', (event) => {
    if (isDraggingPointer) {
      const deltaX = event.clientX - previousPointerPos.x;

      // Horizontal drag rotates around Y axis (unlimited)
      targetRotationX += deltaX * 0.003;

      previousPointerPos = { x: event.clientX, y: event.clientY };

      // Move raycast pointer away during active drags to prevent accidental hovering highlights
      mouse.set(-9999, -9999);
    }
  });

  window.addEventListener('pointerup', () => {
    isDraggingPointer = false;
  });

  window.addEventListener('pointercancel', () => {
    isDraggingPointer = false;
  });

  function updateHoudiniMorphTargets(meshGroup, inflatedVal, popVal) {
    if (!meshGroup) return;
    meshGroup.traverse((child) => {
      if (child.isMesh && child.morphTargetDictionary && child.morphTargetInfluences) {
        const dict = child.morphTargetDictionary;
        const keys = Object.keys(dict);
        if (keys.length === 0) return;

        // Ensure material morphTargets flag is enabled on child material
        if (child.material) {
          if (!child.material.morphTargets) {
            child.material.morphTargets = true;
            child.material.needsUpdate = true;
          }
        }

        // 1. Inflated shape key index (or fallback Cloth)
        let inflIdx = dict['Inflated'];
        if (inflIdx === undefined) {
          const key = keys.find(k => {
            const kl = k.toLowerCase();
            return kl.includes('inflated') || kl.includes('cloth');
          });
          if (key) inflIdx = dict[key];
        }
        // Fallback to 1st shape key (index 0) if name match is not found
        if (inflIdx === undefined && child.morphTargetInfluences.length > 0) {
          inflIdx = 0;
        }

        if (inflIdx !== undefined && inflIdx < child.morphTargetInfluences.length) {
          child.morphTargetInfluences[inflIdx] = inflatedVal;
        }

        // 2. Pop shape key index
        let popIdx = dict['Pop'];
        if (popIdx === undefined) {
          const key = keys.find(k => k.toLowerCase().includes('pop'));
          if (key) popIdx = dict[key];
        }
        // Fallback to 2nd shape key (index 1) if name match is not found
        if (popIdx === undefined && child.morphTargetInfluences.length > 1) {
          popIdx = 1;
        }

        if (popIdx !== undefined && popIdx < child.morphTargetInfluences.length) {
          child.morphTargetInfluences[popIdx] = popVal;
        }
      }
    });
  }

  // Web Audio API Sound Manager for zero-latency, full-length audio playback
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  let audioCtx = null;
  const soundBuffers = {};

  function loadSoundBuffer(url) {
    fetch(url)
      .then(res => res.arrayBuffer())
      .then(arrayBuffer => {
        if (!audioCtx) audioCtx = new AudioCtx();
        return audioCtx.decodeAudioData(arrayBuffer);
      })
      .then(decodedBuffer => {
        soundBuffers[url] = decodedBuffer;
      })
      .catch(err => {
        console.warn(`[Audio] Failed to load/decode ${url}:`, err);
      });
  }

  ['sound/pop.ogg', 'sound/shatter.ogg', 'sound/aboutGrow.ogg', 'sound/aboutHover.ogg', 'sound/aboutOut.ogg', 'sound/houdiniHover.ogg', 'sound/houdiniOut.ogg', 'sound/webHover.ogg', 'sound/webOut.ogg', 'sound/ring.ogg', 'sound/rm_gameboy.ogg'].forEach(loadSoundBuffer);

  // Global user gesture listener to un-suspend AudioContext on the first interaction anywhere on the page
  function unlockAudioContext() {
    if (!audioCtx) audioCtx = new AudioCtx();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }
  window.addEventListener('pointerdown', unlockAudioContext, { passive: true });
  window.addEventListener('click', unlockAudioContext, { passive: true });
  window.addEventListener('keydown', unlockAudioContext, { passive: true });
  window.addEventListener('touchstart', unlockAudioContext, { passive: true });

  function playWebAudioSound(url, volume = 0.8) {
    const targetVol = Math.max(0.0, Math.min(1.0, volume));
    if (targetVol <= 0) return;

    try {
      if (!audioCtx) audioCtx = new AudioCtx();
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
        // Drop sound playback if AudioContext is still suspended to prevent queued/leftover audio bursts when un-suspended later
        if (audioCtx.state === 'suspended') return;
      }
      const buffer = soundBuffers[url];
      if (buffer) {
        const source = audioCtx.createBufferSource();
        source.buffer = buffer;

        const gainNode = audioCtx.createGain();
        gainNode.gain.value = targetVol;

        source.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        source.start(0);
      }
    } catch (e) {
      console.warn(`[Audio] Playback error for ${url}:`, e);
    }
  }

  function playPopSound() {
    const pCfg = SCENE_CONFIG.houdini3D ? SCENE_CONFIG.houdini3D.pop : null;
    if (!pCfg || pCfg.soundEnabled === false) return;
    const vol = pCfg.volume !== undefined ? pCfg.volume : 0.8;
    playWebAudioSound('sound/pop.ogg', vol);
  }

  function playAboutGrowSound() {
    const sCfg = SCENE_CONFIG.questionBox ? SCENE_CONFIG.questionBox.shatter : null;
    if (!sCfg || sCfg.soundEnabled === false) return;
    const rawVol = sCfg.growVolume !== undefined ? sCfg.growVolume : (sCfg.volume !== undefined ? sCfg.volume : 0.8);
    playWebAudioSound('sound/aboutGrow.ogg', rawVol);
  }

  function playShatterSound() {
    const sCfg = SCENE_CONFIG.questionBox ? SCENE_CONFIG.questionBox.shatter : null;
    if (!sCfg || sCfg.soundEnabled === false) return;
    const vol = sCfg.volume !== undefined ? sCfg.volume : 0.8;
    playWebAudioSound('sound/shatter.ogg', vol);
  }

  function playAboutHoverSound() {
    const hCfg = SCENE_CONFIG.questionBox ? SCENE_CONFIG.questionBox.hover : null;
    if (!hCfg || hCfg.soundEnabled === false) return;
    const rawVol = hCfg.hoverInVolume !== undefined ? hCfg.hoverInVolume : (hCfg.volume !== undefined ? hCfg.volume : 0.8);
    playWebAudioSound('sound/aboutHover.ogg', rawVol);
  }

  function playAboutOutSound() {
    const hCfg = SCENE_CONFIG.questionBox ? SCENE_CONFIG.questionBox.hover : null;
    if (!hCfg || hCfg.soundEnabled === false) return;
    const rawVol = hCfg.hoverOutVolume !== undefined ? hCfg.hoverOutVolume : (hCfg.volume !== undefined ? hCfg.volume : 0.8);
    playWebAudioSound('sound/aboutOut.ogg', rawVol);
  }

  function playHoudiniHoverSound() {
    const hCfg = SCENE_CONFIG.houdini3D ? SCENE_CONFIG.houdini3D.hover : null;
    if (!hCfg || hCfg.soundEnabled === false) return;
    const rawVol = hCfg.hoverInVolume !== undefined ? hCfg.hoverInVolume : (hCfg.volume !== undefined ? hCfg.volume : 0.8);
    playWebAudioSound('sound/houdiniHover.ogg', rawVol);
  }

  function playHoudiniOutSound() {
    const hCfg = SCENE_CONFIG.houdini3D ? SCENE_CONFIG.houdini3D.hover : null;
    if (!hCfg || hCfg.soundEnabled === false) return;
    const rawVol = hCfg.hoverOutVolume !== undefined ? hCfg.hoverOutVolume : (hCfg.volume !== undefined ? hCfg.volume : 0.8);
    playWebAudioSound('sound/houdiniOut.ogg', rawVol);
  }

  function playHoudiniGrowSound() {
    const pCfg = SCENE_CONFIG.houdini3D ? SCENE_CONFIG.houdini3D.pop : null;
    if (!pCfg || pCfg.soundEnabled === false) return;
    const rawVol = pCfg.growVolume !== undefined ? pCfg.growVolume : (pCfg.volume !== undefined ? pCfg.volume : 0.8);
    playWebAudioSound('sound/aboutGrow.ogg', rawVol);
  }

  function playWebHoverSound() {
    const hCfg = SCENE_CONFIG.web3D ? SCENE_CONFIG.web3D.hover : null;
    if (!hCfg || hCfg.soundEnabled === false) return;
    const rawVol = hCfg.hoverInVolume !== undefined ? hCfg.hoverInVolume : (hCfg.volume !== undefined ? hCfg.volume : 0.8);
    playWebAudioSound('sound/webHover.ogg', rawVol);
  }

  function playWebOutSound() {
    const hCfg = SCENE_CONFIG.web3D ? SCENE_CONFIG.web3D.hover : null;
    if (!hCfg || hCfg.soundEnabled === false) return;
    const rawVol = hCfg.hoverOutVolume !== undefined ? hCfg.hoverOutVolume : (hCfg.volume !== undefined ? hCfg.volume : 0.8);
    playWebAudioSound('sound/webOut.ogg', rawVol);
  }

  function playWebRingSound() {
    const cCfg = SCENE_CONFIG.web3D ? SCENE_CONFIG.web3D.clickAnimation : null;
    if (!cCfg || cCfg.soundEnabled === false) return;
    const vol = cCfg.volume !== undefined ? cCfg.volume : 0.8;
    playWebAudioSound('sound/ring.ogg', vol);
  }

  function playGameBoyModeSound() {
    const gCfg = (SCENE_CONFIG.renderStyles && SCENE_CONFIG.renderStyles.gameBoy) ? SCENE_CONFIG.renderStyles.gameBoy : null;
    const vol = (gCfg && gCfg.soundVolume !== undefined) ? gCfg.soundVolume : 0.8;
    playWebAudioSound('sound/rm_gameboy.ogg', vol);
  }

  function playSoundForRenderMode(modeName) {
    const cfg = SCENE_CONFIG.renderStyles;
    if (!cfg) return;

    let soundSrc = '';
    let volume = 0.8;

    if (cfg.modeSounds && cfg.modeSounds[modeName]) {
      const ms = cfg.modeSounds[modeName];
      soundSrc = typeof ms === 'string' ? ms : (ms ? (ms.src || ms.soundSrc || '') : '');
      if (ms && typeof ms === 'object' && ms.volume !== undefined) volume = ms.volume;
    }

    if (!soundSrc && cfg[modeName]) {
      const mObj = cfg[modeName];
      soundSrc = mObj.soundSrc || (mObj.sound ? mObj.sound.src : '');
      if (mObj.soundVolume !== undefined) volume = mObj.soundVolume;
      else if (mObj.sound && mObj.sound.volume !== undefined) volume = mObj.sound.volume;
    }

    if (soundSrc) {
      if (!soundBuffers[soundSrc]) {
        loadSoundBuffer(soundSrc);
      }
      playWebAudioSound(soundSrc, volume);
    }
  }

  function preloadRenderModeSounds() {
    const cfg = SCENE_CONFIG.renderStyles;
    if (!cfg) return;

    const urlsToPreload = [];

    if (cfg.modeSounds) {
      Object.values(cfg.modeSounds).forEach((s) => {
        const src = typeof s === 'string' ? s : (s ? (s.src || s.soundSrc || '') : '');
        if (src && !urlsToPreload.includes(src)) urlsToPreload.push(src);
      });
    }

    if (Array.isArray(cfg.activeModes)) {
      cfg.activeModes.forEach((modeName) => {
        const modeObj = cfg[modeName];
        if (modeObj) {
          const src = modeObj.soundSrc || (modeObj.sound ? modeObj.sound.src : '');
          if (src && !urlsToPreload.includes(src)) urlsToPreload.push(src);
        }
      });
    }

    urlsToPreload.forEach(loadSoundBuffer);
  }
  preloadRenderModeSounds();

  function startHoudiniToyRespawn() {
    isHoudiniRegrowingSoundPlayed = false;
    houdiniRespawnStartTime = performance.now();
    canInteract = false;
  }

  function startWebGlobeRespawn() {
    isWebRespawnSoundPlayed = false;
    webRespawnStartTime = performance.now();
    canInteract = false;
  }

  function triggerHoudiniToyPop() {
    if (isHoudiniPopping || !houdiniToyGroup) return false;

    const pCfg = SCENE_CONFIG.houdini3D ? SCENE_CONFIG.houdini3D.pop : null;
    if (!pCfg || pCfg.enabled === false) return false;

    isHoudiniPopping = true;
    canInteract = false;
    houdiniPopStartTime = performance.now();
    houdiniRespawnStartTime = 0;

    playPopSound();
    clearOutlines();

    if (!sparkleTexture) {
      sparkleTexture = createPlaceholderSparkleTexture();
    }

    // Capture toy position before popping
    const toyPos = houdiniToyGroup.position.clone();
    houdiniPopGroup = new THREE.Group();
    sceneGroup.add(houdiniPopGroup);

    houdiniPopSparkles = [];
    const spCount = pCfg.sparkleCount !== undefined ? pCfg.sparkleCount : 28;
    const minSScale = pCfg.minSparkleScale !== undefined ? pCfg.minSparkleScale : 0.8;
    const maxSScale = pCfg.maxSparkleScale !== undefined ? pCfg.maxSparkleScale : 1.8;
    const spSpeed = pCfg.sparkleSpeed !== undefined ? pCfg.sparkleSpeed : 3.5;
    const spColors = pCfg.sparkleColors || ['#a621ff', '#e099ff', '#ffffff', '#00ffff', '#ffea00', '#ff006e'];

    for (let i = 0; i < spCount; i++) {
      const spGeom = new THREE.PlaneGeometry(0.35, 0.35);
      const colorHex = spColors[Math.floor(Math.random() * spColors.length)];
      const spMat = new THREE.MeshBasicMaterial({
        map: sparkleTexture,
        color: new THREE.Color(colorHex),
        transparent: true,
        opacity: 1.0,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });

      const sparkle = new THREE.Mesh(spGeom, spMat);
      const scaleVal = minSScale + Math.random() * (maxSScale - minSScale);
      sparkle.scale.set(scaleVal, scaleVal, 1.0);

      const startOffset = new THREE.Vector3(
        (Math.random() - 0.5) * 0.4,
        (Math.random() - 0.5) * 0.4,
        (Math.random() - 0.5) * 0.4
      );
      sparkle.position.copy(toyPos).add(startOffset);

      const vel = startOffset.clone();
      if (vel.lengthSq() < 0.001) vel.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
      vel.normalize().multiplyScalar(spSpeed * (0.5 + Math.random() * 0.8));

      sparkle.rotation.z = Math.random() * Math.PI * 2;
      const rotVelZ = (Math.random() - 0.5) * 0.1;
      const sparkleLifetime = 0.6 + Math.random() * 0.5;

      sparkle.userData = {
        velocity: vel,
        rotVelocityZ: rotVelZ,
        initialScale: scaleVal,
        initialLifetime: sparkleLifetime,
        lifetime: sparkleLifetime
      };

      houdiniPopGroup.add(sparkle);
      houdiniPopSparkles.push(sparkle);
    }

    return true;
  }

  function triggerWebGlobeClickAnimation() {
    if (!canInteract || isWebGlobeClickAnimating || !webGlobeGroup) return false;

    const wCfg = SCENE_CONFIG.web3D;
    const cCfg = wCfg ? wCfg.clickAnimation : null;
    if (cCfg && cCfg.enabled === false) return false;

    isWebGlobeClickAnimating = true;
    canInteract = false;
    clearOutlines();
    body.style.setProperty('cursor', 'default');

    playWebRingSound();

    webGlobeClickStartTime = performance.now();

    // Clean up existing god rays if re-triggered mid-animation
    if (webGodRayGroup) {
      if (webGodRayGroup.parent) webGodRayGroup.parent.remove(webGodRayGroup);
      webGodRays.forEach(ray => {
        if (ray.geometry) ray.geometry.dispose();
        if (ray.material) ray.material.dispose();
      });
      webGodRayGroup = null;
      webGodRays = [];
    }

    webGodRayGroup = new THREE.Group();
    webGodRayGroup.renderOrder = 9999;
    sceneGroup.add(webGodRayGroup);

    const globeCenterWorld = new THREE.Vector3();
    if (webGlobeMesh) {
      webGlobeMesh.getWorldPosition(globeCenterWorld);
    } else {
      webGlobeGroup.getWorldPosition(globeCenterWorld);
    }
    const globeCenterScene = sceneGroup.worldToLocal(globeCenterWorld.clone());
    webGodRayGroup.position.copy(globeCenterScene);

    const count = (cCfg && cCfg.godRayCount !== undefined) ? cCfg.godRayCount : 36;
    const minLen = (cCfg && cCfg.minRayLength !== undefined) ? cCfg.minRayLength : 1.0;
    const maxLen = (cCfg && cCfg.maxRayLength !== undefined) ? cCfg.maxRayLength : 2.2;
    const minW = (cCfg && cCfg.minRayWidth !== undefined) ? cCfg.minRayWidth : 0.35;
    const maxW = (cCfg && cCfg.maxRayWidth !== undefined) ? cCfg.maxRayWidth : 0.6;
    const colors = (cCfg && cCfg.rayColors && cCfg.rayColors.length > 0) ? cCfg.rayColors : ['#ffffff', '#21ffd8', '#91bfff'];

    const godRayTex = createGodRayTexture();

    for (let i = 0; i < count; i++) {
      const len = minLen + Math.random() * (maxLen - minLen);
      const w = minW + Math.random() * (maxW - minW);

      const geom = new THREE.PlaneGeometry(w, len);
      geom.translate(0, len * 0.5, 0); // Anchor origin at bottom of ray so it grows outward from center

      const hexColor = colors[i % colors.length];
      const mat = new THREE.MeshBasicMaterial({
        map: godRayTex,
        color: new THREE.Color(hexColor),
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
        side: THREE.DoubleSide
      });

      const rayMesh = new THREE.Mesh(geom, mat);
      rayMesh.position.set(0, 0, 0);

      // Uniform 3D spherical direction (Y spans -1 to +1)
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const dir = new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta),
        Math.cos(phi),
        Math.sin(phi) * Math.sin(theta)
      ).normalize();

      const expSpeed = ((cCfg && cCfg.raySpeed !== undefined) ? cCfg.raySpeed : 1.8) * (0.75 + Math.random() * 0.5);

      rayMesh.userData = {
        direction: dir,
        distance: 0,
        expSpeed: expSpeed,
        initialLength: len,
        initialWidth: w
      };

      webGodRayGroup.add(rayMesh);
      webGodRays.push(rayMesh);
    }

    return true;
  }
  function triggerQuestionBoxShatter(showAboutAfter = false) {
    if (isShattering || !questionBoxGroup) return false;

    const sCfg = SCENE_CONFIG.questionBox.shatter;
    if (!sCfg) return false;

    isShattering = true;
    canInteract = false; // Lock navigation, camera drags, and outline selections
    shatterStartTime = performance.now();
    respawnStartTime = 0;

    playShatterSound();
    pendingAboutOverlayAfterShatter = showAboutAfter;

    // Clear active selections
    clearOutlines();

    // Hide Question Box group and shadow mesh
    questionBoxGroup.visible = false;
    if (shadowMesh) {
      shadowMesh.visible = false;
    }

    // Create shatterGroup container
    shatterGroup = new THREE.Group();
    sceneGroup.add(shatterGroup);

    shatterShards = [];
    shatterSparkles = [];

    // 1. Spawn 3D Shards (glass-only)
    const shardCount = sCfg.shardCount !== undefined ? sCfg.shardCount : 35;
    const minScale = sCfg.minShardScale !== undefined ? sCfg.minShardScale : 0.04;
    const maxScale = sCfg.maxShardScale !== undefined ? sCfg.maxShardScale : 0.15;
    const expSpeed = sCfg.explosionSpeed !== undefined ? sCfg.explosionSpeed : 7.0;

    const qBoxPos = questionBoxGroup.position;

    for (let i = 0; i < shardCount; i++) {
      // Shards geometry: box or tetrahedron
      const geom = Math.random() > 0.5
        ? new THREE.BoxGeometry(1, 1, 1)
        : new THREE.TetrahedronGeometry(1);

      // Glass-only shards (cloned from exterior physical material)
      const mat = fbxExteriorMaterial
        ? fbxExteriorMaterial.clone()
        : new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: 1.0 });

      // Ensure clone handles transparent fades
      mat.transparent = true;
      mat.opacity = 1.0;

      const shard = new THREE.Mesh(geom, mat);

      // Starting position randomized around the center of the question box
      const startOffset = new THREE.Vector3(
        (Math.random() - 0.5) * 0.4,
        (Math.random() - 0.5) * 0.4,
        (Math.random() - 0.5) * 0.4
      );
      shard.position.copy(qBoxPos).add(startOffset);

      // Shard scale
      const scaleVal = minScale + Math.random() * (maxScale - minScale);
      shard.scale.set(scaleVal, scaleVal, scaleVal);

      // Velocity: outward vector from center of Question Box
      const vel = startOffset.clone();
      if (vel.lengthSq() < 0.001) {
        vel.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
      }
      vel.normalize().multiplyScalar(expSpeed * (0.6 + Math.random() * 0.6));

      // Random rotational velocity
      const rotVel = new THREE.Vector3(
        (Math.random() - 0.5) * 0.4,
        (Math.random() - 0.5) * 0.4,
        (Math.random() - 0.5) * 0.4
      );

      // Shard metadata
      const shardLifetime = 1.0 + Math.random() * 0.5; // 1.0 to 1.5 seconds
      shard.userData = {
        velocity: vel,
        rotVelocity: rotVel,
        initialScale: scaleVal,
        initialLifetime: shardLifetime,
        lifetime: shardLifetime
      };

      shatterGroup.add(shard);
      shatterShards.push(shard);
    }

    // 2. Spawn Billboarded Sparkle Quads
    const sparkleCount = sCfg.sparkleCount !== undefined ? sCfg.sparkleCount : 25;
    const minSScale = sCfg.minSparkleScale !== undefined ? sCfg.minSparkleScale : 0.1;
    const maxSScale = sCfg.maxSparkleScale !== undefined ? sCfg.maxSparkleScale : 0.3;
    const spSpeed = sCfg.sparkleSpeed !== undefined ? sCfg.sparkleSpeed : 3.5;
    const colors = sCfg.sparkleColors || ['#ffffff', '#fff8d0', '#ffd0f8'];

    if (!sparkleTexture) {
      sparkleTexture = createPlaceholderSparkleTexture();
    }

    for (let i = 0; i < sparkleCount; i++) {
      const sparkleGeo = new THREE.PlaneGeometry(1, 1);

      // Randomly select one of the three colors from parameters
      const randomColorHex = colors[Math.floor(Math.random() * colors.length)];
      const sparkleColor = new THREE.Color(randomColorHex);

      const sparkleMat = new THREE.MeshBasicMaterial({
        map: sparkleTexture,
        color: sparkleColor,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide
      });

      const sparkle = new THREE.Mesh(sparkleGeo, sparkleMat);

      const startOffset = new THREE.Vector3(
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3
      );
      sparkle.position.copy(qBoxPos).add(startOffset);

      const scaleVal = minSScale + Math.random() * (maxSScale - minSScale);
      sparkle.scale.set(scaleVal, scaleVal, 1.0);

      // Outward velocity vector
      const vel = startOffset.clone();
      if (vel.lengthSq() < 0.001) {
        vel.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
      }
      vel.normalize().multiplyScalar(spSpeed * (0.5 + Math.random() * 0.8));

      // Random starting rotation around Z axis (flat rotation on screen)
      sparkle.rotation.z = Math.random() * Math.PI * 2;
      const rotVelZ = (Math.random() - 0.5) * 0.1;

      const sparkleLifetime = 0.7 + Math.random() * 0.6; // 0.7 to 1.3 seconds
      sparkle.userData = {
        velocity: vel,
        rotVelocityZ: rotVelZ,
        initialScale: scaleVal,
        opacity: 0.9,
        initialLifetime: sparkleLifetime,
        lifetime: sparkleLifetime
      };

      shatterGroup.add(sparkle);
      shatterSparkles.push(sparkle);
    }

    return true;
  }

  // Pointer & Click Raycasting Event Listeners
  window.addEventListener('pointermove', (event) => {
    lastClientX = event.clientX;
    lastClientY = event.clientY;
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  });

  let lastTapTimestamp = 0;
  function handle3DPointerTap(event) {
    if (!canInteract || currentTarget !== 'main' || aboutOverlayVisible || aboutOverlayAnimating) return;

    const now = performance.now();
    if (now - lastTapTimestamp < 60) return; // Deduplicate pointerup and click events
    lastTapTimestamp = now;

    const clientX = event.clientX;
    const clientY = event.clientY;
    if (clientX === undefined || clientY === undefined) return;

    if (typeof isPointerOver2DUI === 'function' && isPointerOver2DUI(clientX, clientY)) return;

    const upTarget = get3DHitTarget(clientX, clientY);

    // Require pointerdown and pointerup to land on the same 3D target!
    if (!active3DPointerDownTarget || !upTarget) {
      active3DPointerDownTarget = null;
      return;
    }

    if (active3DPointerDownTarget.type !== upTarget.type) {
      active3DPointerDownTarget = null;
      return;
    }

    if (active3DPointerDownTarget.type === 'cube' && active3DPointerDownTarget.object !== upTarget.object) {
      active3DPointerDownTarget = null;
      return;
    }

    // Verify finger did not drag significantly across screen (> 20px displacement)
    const distSq = Math.hypot(clientX - pointerDownPos.x, clientY - pointerDownPos.y);
    if (distSq > 20) {
      active3DPointerDownTarget = null;
      return;
    }

    const target = upTarget;
    active3DPointerDownTarget = null;

    // Execute click action for verified 3D target
    if (target.type === 'questionBox') {
      const sCfg = SCENE_CONFIG.questionBox.shatter;
      if (sCfg && sCfg.enabled !== false) {
        triggerQuestionBoxShatter(true);
      } else {
        aboutLinkClicked();
      }
    } else if (target.type === 'houdiniToy') {
      const pCfg = SCENE_CONFIG.houdini3D ? SCENE_CONFIG.houdini3D.pop : null;
      if (pCfg && pCfg.enabled !== false) {
        triggerHoudiniToyPop();
      } else {
        houdiniLinkClicked();
      }
    } else if (target.type === 'webGlobe') {
      const cCfg = SCENE_CONFIG.web3D ? SCENE_CONFIG.web3D.clickAnimation : null;
      if (cCfg && cCfg.enabled !== false) {
        triggerWebGlobeClickAnimation();
      } else {
        webLinkClicked();
      }
    } else if (target.type === 'bug') {
      window.open('https://www.linkedin.com/in/noah-gunther-3128bb185/', '_blank');
    } else if (target.type === 'cube' && target.object && target.object.userData && target.object.userData.onClick) {
      target.object.userData.onClick();
    }
  }

  window.addEventListener('pointerup', handle3DPointerTap);
  window.addEventListener('click', handle3DPointerTap);
  if (mainCanvas) {
    mainCanvas.addEventListener('pointerup', handle3DPointerTap);
    mainCanvas.addEventListener('click', handle3DPointerTap);
  }
}