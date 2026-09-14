import{M as _t,B as ha,O as zd,F as Wn,S as hn,U as Ud,V as ft,W as Ya,R as Xr,L as jo,C as du,a as ne,b as Je,D as gn,c as cu,d as uu,N as Ad,e as zr,f as q,A as Ts,g as fu,h as Mi,H as Ir,i as Dr,j as Er,k as _d,l as pu,m as Sd,n as mu,o as Pd,p as Vn,I as hu,q as gu,T as vu,r as Md,s as bu,t as yu,u as Td,v as xu,w as wu,x as Au,G as fn,P as _u,y as Su,z as Pu,E as Mu,J as Br,K as Tu,Q as Fu,X as As,Y as Tt,Z as Fd,_ as Cu,$ as _s,a0 as Ss,a1 as Ps,a2 as _i,a3 as Cd,a4 as vt,a5 as Ur,a6 as Si,a7 as kd,a8 as Pi,a9 as Ld,aa as pn,ab as Vo,ac as ku,ad as Id,ae as Dd,af as Qn,ag as bt,ah as Ms,ai as Ed,aj as Lu,ak as Iu,al as Bd}from"./GLTFLoader-Lmp_kJXg.js";var Fs={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`};class Fi{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const Du=new zd(-1,1,1,-1,0,1),Yr=new ha;Yr.setAttribute("position",new Wn([-1,3,0,-1,-1,0,3,-1,0],3));Yr.setAttribute("uv",new Wn([0,2,0,0,2,0],2));class Xd{constructor(a){this._mesh=new _t(Yr,a)}dispose(){this._mesh.geometry.dispose()}render(a){a.render(this._mesh,Du)}get material(){return this._mesh.material}set material(a){this._mesh.material=a}}class Ti extends Fi{constructor(a,c){super(),this.textureID=c!==void 0?c:"tDiffuse",a instanceof hn?(this.uniforms=a.uniforms,this.material=a):a&&(this.uniforms=Ud.clone(a.uniforms),this.material=new hn({defines:Object.assign({},a.defines),uniforms:this.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader})),this.fsQuad=new Xd(this.material)}render(a,c,b){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=b.texture),this.fsQuad.material=this.material,this.renderToScreen?(a.setRenderTarget(null),this.fsQuad.render(a)):(a.setRenderTarget(c),this.clear&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),this.fsQuad.render(a))}}class Rd extends Fi{constructor(a,c){super(),this.scene=a,this.camera=c,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(a,c,b){const h=a.getContext(),x=a.state;x.buffers.color.setMask(!1),x.buffers.depth.setMask(!1),x.buffers.color.setLocked(!0),x.buffers.depth.setLocked(!0);let u,A;this.inverse?(u=0,A=1):(u=1,A=0),x.buffers.stencil.setTest(!0),x.buffers.stencil.setOp(h.REPLACE,h.REPLACE,h.REPLACE),x.buffers.stencil.setFunc(h.ALWAYS,u,4294967295),x.buffers.stencil.setClear(A),x.buffers.stencil.setLocked(!0),a.setRenderTarget(b),this.clear&&a.clear(),a.render(this.scene,this.camera),a.setRenderTarget(c),this.clear&&a.clear(),a.render(this.scene,this.camera),x.buffers.color.setLocked(!1),x.buffers.depth.setLocked(!1),x.buffers.stencil.setLocked(!1),x.buffers.stencil.setFunc(h.EQUAL,1,4294967295),x.buffers.stencil.setOp(h.KEEP,h.KEEP,h.KEEP),x.buffers.stencil.setLocked(!0)}}class Eu extends Fi{constructor(){super(),this.needsSwap=!1}render(a){a.state.buffers.stencil.setLocked(!1),a.state.buffers.stencil.setTest(!1)}}class Bu{constructor(a,c){if(this.renderer=a,c===void 0){const b={minFilter:jo,magFilter:jo,format:Xr},h=a.getSize(new ft);this._pixelRatio=a.getPixelRatio(),this._width=h.width,this._height=h.height,c=new Ya(this._width*this._pixelRatio,this._height*this._pixelRatio,b),c.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=c.width,this._height=c.height;this.renderTarget1=c,this.renderTarget2=c.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Fs===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Ti===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Ti(Fs),this.clock=new du}swapBuffers(){const a=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=a}addPass(a){this.passes.push(a),a.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(a,c){this.passes.splice(c,0,a),a.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(a){const c=this.passes.indexOf(a);c!==-1&&this.passes.splice(c,1)}isLastEnabledPass(a){for(let c=a+1;c<this.passes.length;c++)if(this.passes[c].enabled)return!1;return!0}render(a){a===void 0&&(a=this.clock.getDelta());const c=this.renderer.getRenderTarget();let b=!1;for(let h=0,x=this.passes.length;h<x;h++){const u=this.passes[h];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(h),u.render(this.renderer,this.writeBuffer,this.readBuffer,a,b),u.needsSwap){if(b){const A=this.renderer.getContext(),P=this.renderer.state.buffers.stencil;P.setFunc(A.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,a),P.setFunc(A.EQUAL,1,4294967295)}this.swapBuffers()}Rd!==void 0&&(u instanceof Rd?b=!0:u instanceof Eu&&(b=!1))}}this.renderer.setRenderTarget(c)}reset(a){if(a===void 0){const c=this.renderer.getSize(new ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=c.width,this._height=c.height,a=this.renderTarget1.clone(),a.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=a,this.renderTarget2=a.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(a,c){this._width=a,this._height=c;const b=this._width*this._pixelRatio,h=this._height*this._pixelRatio;this.renderTarget1.setSize(b,h),this.renderTarget2.setSize(b,h);for(let x=0;x<this.passes.length;x++)this.passes[x].setSize(b,h)}setPixelRatio(a){this._pixelRatio=a,this.setSize(this._width,this._height)}}new zd(-1,1,1,-1,0,1);const Yd=new ha;Yd.setAttribute("position",new Wn([-1,3,0,-1,-1,0,3,-1,0],3));Yd.setAttribute("uv",new Wn([0,2,0,0,2,0],2));class Ru extends Fi{constructor(a,c,b,h,x){super(),this.scene=a,this.camera=c,this.overrideMaterial=b,this.clearColor=h,this.clearAlpha=x!==void 0?x:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ne}render(a,c,b){const h=a.autoClear;a.autoClear=!1;let x,u;this.overrideMaterial!==void 0&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(a.getClearColor(this._oldClearColor),x=a.getClearAlpha(),a.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&a.clearDepth(),a.setRenderTarget(this.renderToScreen?null:b),this.clear&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),a.render(this.scene,this.camera),this.clearColor&&a.setClearColor(this._oldClearColor,x),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=u),a.autoClear=h}}class qo extends Fi{constructor(a,c,b,h){super(),this.renderScene=c,this.renderCamera=b,this.selectedObjects=h!==void 0?h:[],this.visibleEdgeColor=new ne(1,1,1),this.hiddenEdgeColor=new ne(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this.resolution=a!==void 0?new ft(a.x,a.y):new ft(256,256);const x={minFilter:jo,magFilter:jo,format:Xr},u=Math.round(this.resolution.x/this.downSampleRatio),A=Math.round(this.resolution.y/this.downSampleRatio);this.maskBufferMaterial=new Je({color:16777215}),this.maskBufferMaterial.side=gn,this.renderTargetMaskBuffer=new Ya(this.resolution.x,this.resolution.y,x),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new cu,this.depthMaterial.side=gn,this.depthMaterial.depthPacking=uu,this.depthMaterial.blending=Ad,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=gn,this.prepareMaskMaterial.fragmentShader=Q(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new Ya(this.resolution.x,this.resolution.y,x),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new Ya(u,A,x),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new Ya(u,A,x),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new Ya(Math.round(u/2),Math.round(A/2),x),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new Ya(u,A,x),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new Ya(Math.round(u/2),Math.round(A/2),x),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const P=4,Z=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(P),this.separableBlurMaterial1.uniforms.texSize.value.set(u,A),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(Z),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(u/2),Math.round(A/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=Z,this.overlayMaterial=this.getOverlayMaterial(),Fs===void 0&&console.error("THREE.OutlinePass relies on CopyShader");const le=Fs;this.copyUniforms=Ud.clone(le.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new hn({uniforms:this.copyUniforms,vertexShader:le.vertexShader,fragmentShader:le.fragmentShader,blending:Ad,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ne,this.oldClearAlpha=1,this.fsQuad=new Xd(null),this.tempPulseColor1=new ne,this.tempPulseColor2=new ne,this.textureMatrix=new zr;function Q(U,ce){var $=ce.isPerspectiveCamera?"perspective":"orthographic";return U.replace(/DEPTH_TO_VIEW_Z/g,$+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose()}setSize(a,c){this.renderTargetMaskBuffer.setSize(a,c),this.renderTargetDepthBuffer.setSize(a,c);let b=Math.round(a/this.downSampleRatio),h=Math.round(c/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(b,h),this.renderTargetBlurBuffer1.setSize(b,h),this.renderTargetEdgeBuffer1.setSize(b,h),this.separableBlurMaterial1.uniforms.texSize.value.set(b,h),b=Math.round(b/2),h=Math.round(h/2),this.renderTargetBlurBuffer2.setSize(b,h),this.renderTargetEdgeBuffer2.setSize(b,h),this.separableBlurMaterial2.uniforms.texSize.value.set(b,h)}changeVisibilityOfSelectedObjects(a){const c=this._visibilityCache;function b(h){h.isMesh&&(a===!0?h.visible=c.get(h):(c.set(h,h.visible),h.visible=a))}for(let h=0;h<this.selectedObjects.length;h++)this.selectedObjects[h].traverse(b)}changeVisibilityOfNonSelectedObjects(a){const c=this._visibilityCache,b=[];function h(u){u.isMesh&&b.push(u)}for(let u=0;u<this.selectedObjects.length;u++)this.selectedObjects[u].traverse(h);function x(u){if(u.isMesh||u.isSprite){let A=!1;for(let P=0;P<b.length;P++)if(b[P].id===u.id){A=!0;break}if(A===!1){const P=u.visible;(a===!1||c.get(u)===!0)&&(u.visible=a),c.set(u,P)}}else(u.isPoints||u.isLine)&&(a===!0?u.visible=c.get(u):(c.set(u,u.visible),u.visible=a))}this.renderScene.traverse(x)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(a,c,b,h,x){if(this.selectedObjects.length>0){a.getClearColor(this._oldClearColor),this.oldClearAlpha=a.getClearAlpha();const u=a.autoClear;a.autoClear=!1,x&&a.state.buffers.stencil.setTest(!1),a.setClearColor(16777215,1),this.changeVisibilityOfSelectedObjects(!1);const A=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,a.setRenderTarget(this.renderTargetDepthBuffer),a.clear(),a.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,a.setRenderTarget(this.renderTargetMaskBuffer),a.clear(),a.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this.renderScene.background=A,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,a.setRenderTarget(this.renderTargetMaskDownSampleBuffer),a.clear(),this.fsQuad.render(a),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const P=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(P),this.tempPulseColor2.multiplyScalar(P)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,a.setRenderTarget(this.renderTargetEdgeBuffer1),a.clear(),this.fsQuad.render(a),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=qo.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,a.setRenderTarget(this.renderTargetBlurBuffer1),a.clear(),this.fsQuad.render(a),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=qo.BlurDirectionY,a.setRenderTarget(this.renderTargetEdgeBuffer1),a.clear(),this.fsQuad.render(a),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=qo.BlurDirectionX,a.setRenderTarget(this.renderTargetBlurBuffer2),a.clear(),this.fsQuad.render(a),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=qo.BlurDirectionY,a.setRenderTarget(this.renderTargetEdgeBuffer2),a.clear(),this.fsQuad.render(a),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,x&&a.state.buffers.stencil.setTest(!0),a.setRenderTarget(b),this.fsQuad.render(a),a.setClearColor(this._oldClearColor,this.oldClearAlpha),a.autoClear=u}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=b.texture,a.setRenderTarget(null),this.fsQuad.render(a))}getPrepareMaskMaterial(){return new hn({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new ft(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;
					vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new hn({uniforms:{maskTexture:{value:null},texSize:{value:new ft(.5,.5)},visibleEdgeColor:{value:new q(1,1,1)},hiddenEdgeColor:{value:new q(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeperableBlurMaterial(a){return new hn({defines:{MAX_RADIUS:a},uniforms:{colorTexture:{value:null},texSize:{value:new ft(.5,.5)},direction:{value:new ft(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float weightSum = gaussianPdf(0.0, kernelRadius);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float w = gaussianPdf(uvOffset.x, kernelRadius);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new hn({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:Ts,depthTest:!1,depthWrite:!1,transparent:!0})}}qo.BlurDirectionX=new ft(1,0);qo.BlurDirectionY=new ft(0,1);const Ou={uniforms:{tDiffuse:{value:null},resolution:{value:new ft(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		#define FXAA_PC 1
		#define FXAA_GLSL_100 1
		#define FXAA_QUALITY_PRESET 12

		#define FXAA_GREEN_AS_LUMA 1

		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_PC_CONSOLE
				//
				// The console algorithm for PC is included
				// for developers targeting really low spec machines.
				// Likely better to just run FXAA_PC, and use a really low preset.
				//
				#define FXAA_PC_CONSOLE 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GLSL_120
				#define FXAA_GLSL_120 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GLSL_130
				#define FXAA_GLSL_130 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_3
				#define FXAA_HLSL_3 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_4
				#define FXAA_HLSL_4 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_5
				#define FXAA_HLSL_5 0
		#endif
		/*==========================================================================*/
		#ifndef FXAA_GREEN_AS_LUMA
				//
				// For those using non-linear color,
				// and either not able to get luma in alpha, or not wanting to,
				// this enables FXAA to run using green as a proxy for luma.
				// So with this enabled, no need to pack luma in alpha.
				//
				// This will turn off AA on anything which lacks some amount of green.
				// Pure red and blue or combination of only R and B, will get no AA.
				//
				// Might want to lower the settings for both,
				//		fxaaConsoleEdgeThresholdMin
				//		fxaaQualityEdgeThresholdMin
				// In order to insure AA does not get turned off on colors
				// which contain a minor amount of green.
				//
				// 1 = On.
				// 0 = Off.
				//
				#define FXAA_GREEN_AS_LUMA 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_EARLY_EXIT
				//
				// Controls algorithm's early exit path.
				// On PS3 turning this ON adds 2 cycles to the shader.
				// On 360 turning this OFF adds 10ths of a millisecond to the shader.
				// Turning this off on console will result in a more blurry image.
				// So this defaults to on.
				//
				// 1 = On.
				// 0 = Off.
				//
				#define FXAA_EARLY_EXIT 1
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_DISCARD
				//
				// Only valid for PC OpenGL currently.
				// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
				//
				// 1 = Use discard on pixels which don't need AA.
				//		 For APIs which enable concurrent TEX+ROP from same surface.
				// 0 = Return unchanged color on pixels which don't need AA.
				//
				#define FXAA_DISCARD 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_FAST_PIXEL_OFFSET
				//
				// Used for GLSL 120 only.
				//
				// 1 = GL API supports fast pixel offsets
				// 0 = do not use fast pixel offsets
				//
				#ifdef GL_EXT_gpu_shader4
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifdef GL_NV_gpu_shader5
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifdef GL_ARB_gpu_shader5
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifndef FXAA_FAST_PIXEL_OFFSET
						#define FXAA_FAST_PIXEL_OFFSET 0
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GATHER4_ALPHA
				//
				// 1 = API supports gather4 on alpha channel.
				// 0 = API does not support gather4 on alpha channel.
				//
				#if (FXAA_HLSL_5 == 1)
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifdef GL_ARB_gpu_shader5
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifdef GL_NV_gpu_shader5
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifndef FXAA_GATHER4_ALPHA
						#define FXAA_GATHER4_ALPHA 0
				#endif
		#endif


		/*============================================================================
														FXAA QUALITY - TUNING KNOBS
		------------------------------------------------------------------------------
		NOTE the other tuning knobs are now in the shader function inputs!
		============================================================================*/
		#ifndef FXAA_QUALITY_PRESET
				//
				// Choose the quality preset.
				// This needs to be compiled into the shader as it effects code.
				// Best option to include multiple presets is to
				// in each shader define the preset, then include this file.
				//
				// OPTIONS
				// -----------------------------------------------------------------------
				// 10 to 15 - default medium dither (10=fastest, 15=highest quality)
				// 20 to 29 - less dither, more expensive (20=fastest, 29=highest quality)
				// 39			 - no dither, very expensive
				//
				// NOTES
				// -----------------------------------------------------------------------
				// 12 = slightly faster then FXAA 3.9 and higher edge quality (default)
				// 13 = about same speed as FXAA 3.9 and better than 12
				// 23 = closest to FXAA 3.9 visually and performance wise
				//	_ = the lowest digit is directly related to performance
				// _	= the highest digit is directly related to style
				//
				#define FXAA_QUALITY_PRESET 12
		#endif


		/*============================================================================

															 FXAA QUALITY - PRESETS

		============================================================================*/

		/*============================================================================
												 FXAA QUALITY - MEDIUM DITHER PRESETS
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 10)
				#define FXAA_QUALITY_PS 3
				#define FXAA_QUALITY_P0 1.5
				#define FXAA_QUALITY_P1 3.0
				#define FXAA_QUALITY_P2 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 11)
				#define FXAA_QUALITY_PS 4
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 3.0
				#define FXAA_QUALITY_P3 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 12)
				#define FXAA_QUALITY_PS 5
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 4.0
				#define FXAA_QUALITY_P4 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 13)
				#define FXAA_QUALITY_PS 6
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 4.0
				#define FXAA_QUALITY_P5 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 14)
				#define FXAA_QUALITY_PS 7
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 4.0
				#define FXAA_QUALITY_P6 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 15)
				#define FXAA_QUALITY_PS 8
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 4.0
				#define FXAA_QUALITY_P7 12.0
		#endif

		/*============================================================================
												 FXAA QUALITY - LOW DITHER PRESETS
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 20)
				#define FXAA_QUALITY_PS 3
				#define FXAA_QUALITY_P0 1.5
				#define FXAA_QUALITY_P1 2.0
				#define FXAA_QUALITY_P2 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 21)
				#define FXAA_QUALITY_PS 4
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 22)
				#define FXAA_QUALITY_PS 5
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 23)
				#define FXAA_QUALITY_PS 6
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 24)
				#define FXAA_QUALITY_PS 7
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 3.0
				#define FXAA_QUALITY_P6 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 25)
				#define FXAA_QUALITY_PS 8
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 4.0
				#define FXAA_QUALITY_P7 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 26)
				#define FXAA_QUALITY_PS 9
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 4.0
				#define FXAA_QUALITY_P8 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 27)
				#define FXAA_QUALITY_PS 10
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 4.0
				#define FXAA_QUALITY_P9 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 28)
				#define FXAA_QUALITY_PS 11
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 4.0
				#define FXAA_QUALITY_P10 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 29)
				#define FXAA_QUALITY_PS 12
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 2.0
				#define FXAA_QUALITY_P10 4.0
				#define FXAA_QUALITY_P11 8.0
		#endif

		/*============================================================================
												 FXAA QUALITY - EXTREME QUALITY
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 39)
				#define FXAA_QUALITY_PS 12
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.0
				#define FXAA_QUALITY_P2 1.0
				#define FXAA_QUALITY_P3 1.0
				#define FXAA_QUALITY_P4 1.0
				#define FXAA_QUALITY_P5 1.5
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 2.0
				#define FXAA_QUALITY_P10 4.0
				#define FXAA_QUALITY_P11 8.0
		#endif



		/*============================================================================

																		API PORTING

		============================================================================*/
		#if (FXAA_GLSL_100 == 1) || (FXAA_GLSL_120 == 1) || (FXAA_GLSL_130 == 1)
				#define FxaaBool bool
				#define FxaaDiscard discard
				#define FxaaFloat float
				#define FxaaFloat2 vec2
				#define FxaaFloat3 vec3
				#define FxaaFloat4 vec4
				#define FxaaHalf float
				#define FxaaHalf2 vec2
				#define FxaaHalf3 vec3
				#define FxaaHalf4 vec4
				#define FxaaInt2 ivec2
				#define FxaaSat(x) clamp(x, 0.0, 1.0)
				#define FxaaTex sampler2D
		#else
				#define FxaaBool bool
				#define FxaaDiscard clip(-1)
				#define FxaaFloat float
				#define FxaaFloat2 float2
				#define FxaaFloat3 float3
				#define FxaaFloat4 float4
				#define FxaaHalf half
				#define FxaaHalf2 half2
				#define FxaaHalf3 half3
				#define FxaaHalf4 half4
				#define FxaaSat(x) saturate(x)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_100 == 1)
			#define FxaaTexTop(t, p) texture2D(t, p, 0.0)
			#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), 0.0)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_120 == 1)
				// Requires,
				//	#version 120
				// And at least,
				//	#extension GL_EXT_gpu_shader4 : enable
				//	(or set FXAA_FAST_PIXEL_OFFSET 1 to work like DX9)
				#define FxaaTexTop(t, p) texture2DLod(t, p, 0.0)
				#if (FXAA_FAST_PIXEL_OFFSET == 1)
						#define FxaaTexOff(t, p, o, r) texture2DLodOffset(t, p, 0.0, o)
				#else
						#define FxaaTexOff(t, p, o, r) texture2DLod(t, p + (o * r), 0.0)
				#endif
				#if (FXAA_GATHER4_ALPHA == 1)
						// use #extension GL_ARB_gpu_shader5 : enable
						#define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
						#define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
						#define FxaaTexGreen4(t, p) textureGather(t, p, 1)
						#define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_130 == 1)
				// Requires "#version 130" or better
				#define FxaaTexTop(t, p) textureLod(t, p, 0.0)
				#define FxaaTexOff(t, p, o, r) textureLodOffset(t, p, 0.0, o)
				#if (FXAA_GATHER4_ALPHA == 1)
						// use #extension GL_ARB_gpu_shader5 : enable
						#define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
						#define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
						#define FxaaTexGreen4(t, p) textureGather(t, p, 1)
						#define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_3 == 1)
				#define FxaaInt2 float2
				#define FxaaTex sampler2D
				#define FxaaTexTop(t, p) tex2Dlod(t, float4(p, 0.0, 0.0))
				#define FxaaTexOff(t, p, o, r) tex2Dlod(t, float4(p + (o * r), 0, 0))
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_4 == 1)
				#define FxaaInt2 int2
				struct FxaaTex { SamplerState smpl; Texture2D tex; };
				#define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
				#define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_5 == 1)
				#define FxaaInt2 int2
				struct FxaaTex { SamplerState smpl; Texture2D tex; };
				#define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
				#define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
				#define FxaaTexAlpha4(t, p) t.tex.GatherAlpha(t.smpl, p)
				#define FxaaTexOffAlpha4(t, p, o) t.tex.GatherAlpha(t.smpl, p, o)
				#define FxaaTexGreen4(t, p) t.tex.GatherGreen(t.smpl, p)
				#define FxaaTexOffGreen4(t, p, o) t.tex.GatherGreen(t.smpl, p, o)
		#endif


		/*============================================================================
											 GREEN AS LUMA OPTION SUPPORT FUNCTION
		============================================================================*/
		#if (FXAA_GREEN_AS_LUMA == 0)
				FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.w; }
		#else
				FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.y; }
		#endif




		/*============================================================================

																 FXAA3 QUALITY - PC

		============================================================================*/
		#if (FXAA_PC == 1)
		/*--------------------------------------------------------------------------*/
		FxaaFloat4 FxaaPixelShader(
				//
				// Use noperspective interpolation here (turn off perspective interpolation).
				// {xy} = center of pixel
				FxaaFloat2 pos,
				//
				// Used only for FXAA Console, and not used on the 360 version.
				// Use noperspective interpolation here (turn off perspective interpolation).
				// {xy_} = upper left of pixel
				// {_zw} = lower right of pixel
				FxaaFloat4 fxaaConsolePosPos,
				//
				// Input color texture.
				// {rgb_} = color in linear or perceptual color space
				// if (FXAA_GREEN_AS_LUMA == 0)
				//		 {__a} = luma in perceptual color space (not linear)
				FxaaTex tex,
				//
				// Only used on the optimized 360 version of FXAA Console.
				// For everything but 360, just use the same input here as for "tex".
				// For 360, same texture, just alias with a 2nd sampler.
				// This sampler needs to have an exponent bias of -1.
				FxaaTex fxaaConsole360TexExpBiasNegOne,
				//
				// Only used on the optimized 360 version of FXAA Console.
				// For everything but 360, just use the same input here as for "tex".
				// For 360, same texture, just alias with a 3nd sampler.
				// This sampler needs to have an exponent bias of -2.
				FxaaTex fxaaConsole360TexExpBiasNegTwo,
				//
				// Only used on FXAA Quality.
				// This must be from a constant/uniform.
				// {x_} = 1.0/screenWidthInPixels
				// {_y} = 1.0/screenHeightInPixels
				FxaaFloat2 fxaaQualityRcpFrame,
				//
				// Only used on FXAA Console.
				// This must be from a constant/uniform.
				// This effects sub-pixel AA quality and inversely sharpness.
				//	 Where N ranges between,
				//		 N = 0.50 (default)
				//		 N = 0.33 (sharper)
				// {x__} = -N/screenWidthInPixels
				// {_y_} = -N/screenHeightInPixels
				// {_z_} =	N/screenWidthInPixels
				// {__w} =	N/screenHeightInPixels
				FxaaFloat4 fxaaConsoleRcpFrameOpt,
				//
				// Only used on FXAA Console.
				// Not used on 360, but used on PS3 and PC.
				// This must be from a constant/uniform.
				// {x__} = -2.0/screenWidthInPixels
				// {_y_} = -2.0/screenHeightInPixels
				// {_z_} =	2.0/screenWidthInPixels
				// {__w} =	2.0/screenHeightInPixels
				FxaaFloat4 fxaaConsoleRcpFrameOpt2,
				//
				// Only used on FXAA Console.
				// Only used on 360 in place of fxaaConsoleRcpFrameOpt2.
				// This must be from a constant/uniform.
				// {x__} =	8.0/screenWidthInPixels
				// {_y_} =	8.0/screenHeightInPixels
				// {_z_} = -4.0/screenWidthInPixels
				// {__w} = -4.0/screenHeightInPixels
				FxaaFloat4 fxaaConsole360RcpFrameOpt2,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_SUBPIX define.
				// It is here now to allow easier tuning.
				// Choose the amount of sub-pixel aliasing removal.
				// This can effect sharpness.
				//	 1.00 - upper limit (softer)
				//	 0.75 - default amount of filtering
				//	 0.50 - lower limit (sharper, less sub-pixel aliasing removal)
				//	 0.25 - almost off
				//	 0.00 - completely off
				FxaaFloat fxaaQualitySubpix,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_EDGE_THRESHOLD define.
				// It is here now to allow easier tuning.
				// The minimum amount of local contrast required to apply algorithm.
				//	 0.333 - too little (faster)
				//	 0.250 - low quality
				//	 0.166 - default
				//	 0.125 - high quality
				//	 0.063 - overkill (slower)
				FxaaFloat fxaaQualityEdgeThreshold,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_EDGE_THRESHOLD_MIN define.
				// It is here now to allow easier tuning.
				// Trims the algorithm from processing darks.
				//	 0.0833 - upper limit (default, the start of visible unfiltered edges)
				//	 0.0625 - high quality (faster)
				//	 0.0312 - visible limit (slower)
				// Special notes when using FXAA_GREEN_AS_LUMA,
				//	 Likely want to set this to zero.
				//	 As colors that are mostly not-green
				//	 will appear very dark in the green channel!
				//	 Tune by looking at mostly non-green content,
				//	 then start at zero and increase until aliasing is a problem.
				FxaaFloat fxaaQualityEdgeThresholdMin,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_SHARPNESS define.
				// It is here now to allow easier tuning.
				// This does not effect PS3, as this needs to be compiled in.
				//	 Use FXAA_CONSOLE_PS3_EDGE_SHARPNESS for PS3.
				//	 Due to the PS3 being ALU bound,
				//	 there are only three safe values here: 2 and 4 and 8.
				//	 These options use the shaders ability to a free *|/ by 2|4|8.
				// For all other platforms can be a non-power of two.
				//	 8.0 is sharper (default!!!)
				//	 4.0 is softer
				//	 2.0 is really soft (good only for vector graphics inputs)
				FxaaFloat fxaaConsoleEdgeSharpness,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_THRESHOLD define.
				// It is here now to allow easier tuning.
				// This does not effect PS3, as this needs to be compiled in.
				//	 Use FXAA_CONSOLE_PS3_EDGE_THRESHOLD for PS3.
				//	 Due to the PS3 being ALU bound,
				//	 there are only two safe values here: 1/4 and 1/8.
				//	 These options use the shaders ability to a free *|/ by 2|4|8.
				// The console setting has a different mapping than the quality setting.
				// Other platforms can use other values.
				//	 0.125 leaves less aliasing, but is softer (default!!!)
				//	 0.25 leaves more aliasing, and is sharper
				FxaaFloat fxaaConsoleEdgeThreshold,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_THRESHOLD_MIN define.
				// It is here now to allow easier tuning.
				// Trims the algorithm from processing darks.
				// The console setting has a different mapping than the quality setting.
				// This only applies when FXAA_EARLY_EXIT is 1.
				// This does not apply to PS3,
				// PS3 was simplified to avoid more shader instructions.
				//	 0.06 - faster but more aliasing in darks
				//	 0.05 - default
				//	 0.04 - slower and less aliasing in darks
				// Special notes when using FXAA_GREEN_AS_LUMA,
				//	 Likely want to set this to zero.
				//	 As colors that are mostly not-green
				//	 will appear very dark in the green channel!
				//	 Tune by looking at mostly non-green content,
				//	 then start at zero and increase until aliasing is a problem.
				FxaaFloat fxaaConsoleEdgeThresholdMin,
				//
				// Extra constants for 360 FXAA Console only.
				// Use zeros or anything else for other platforms.
				// These must be in physical constant registers and NOT immediates.
				// Immediates will result in compiler un-optimizing.
				// {xyzw} = float4(1.0, -1.0, 0.25, -0.25)
				FxaaFloat4 fxaaConsole360ConstDir
		) {
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posM;
				posM.x = pos.x;
				posM.y = pos.y;
				#if (FXAA_GATHER4_ALPHA == 1)
						#if (FXAA_DISCARD == 0)
								FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
								#if (FXAA_GREEN_AS_LUMA == 0)
										#define lumaM rgbyM.w
								#else
										#define lumaM rgbyM.y
								#endif
						#endif
						#if (FXAA_GREEN_AS_LUMA == 0)
								FxaaFloat4 luma4A = FxaaTexAlpha4(tex, posM);
								FxaaFloat4 luma4B = FxaaTexOffAlpha4(tex, posM, FxaaInt2(-1, -1));
						#else
								FxaaFloat4 luma4A = FxaaTexGreen4(tex, posM);
								FxaaFloat4 luma4B = FxaaTexOffGreen4(tex, posM, FxaaInt2(-1, -1));
						#endif
						#if (FXAA_DISCARD == 1)
								#define lumaM luma4A.w
						#endif
						#define lumaE luma4A.z
						#define lumaS luma4A.x
						#define lumaSE luma4A.y
						#define lumaNW luma4B.w
						#define lumaN luma4B.z
						#define lumaW luma4B.x
				#else
						FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
						#if (FXAA_GREEN_AS_LUMA == 0)
								#define lumaM rgbyM.w
						#else
								#define lumaM rgbyM.y
						#endif
						#if (FXAA_GLSL_100 == 1)
							FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0, 1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 0.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 0.0), fxaaQualityRcpFrame.xy));
						#else
							FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0, 1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 0), fxaaQualityRcpFrame.xy));
						#endif
				#endif
		/*--------------------------------------------------------------------------*/
				FxaaFloat maxSM = max(lumaS, lumaM);
				FxaaFloat minSM = min(lumaS, lumaM);
				FxaaFloat maxESM = max(lumaE, maxSM);
				FxaaFloat minESM = min(lumaE, minSM);
				FxaaFloat maxWN = max(lumaN, lumaW);
				FxaaFloat minWN = min(lumaN, lumaW);
				FxaaFloat rangeMax = max(maxWN, maxESM);
				FxaaFloat rangeMin = min(minWN, minESM);
				FxaaFloat rangeMaxScaled = rangeMax * fxaaQualityEdgeThreshold;
				FxaaFloat range = rangeMax - rangeMin;
				FxaaFloat rangeMaxClamped = max(fxaaQualityEdgeThresholdMin, rangeMaxScaled);
				FxaaBool earlyExit = range < rangeMaxClamped;
		/*--------------------------------------------------------------------------*/
				if(earlyExit)
						#if (FXAA_DISCARD == 1)
								FxaaDiscard;
						#else
								return rgbyM;
						#endif
		/*--------------------------------------------------------------------------*/
				#if (FXAA_GATHER4_ALPHA == 0)
						#if (FXAA_GLSL_100 == 1)
							FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 1.0), fxaaQualityRcpFrame.xy));
						#else
							FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
						#endif
				#else
						FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(1, -1), fxaaQualityRcpFrame.xy));
						FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
				#endif
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNS = lumaN + lumaS;
				FxaaFloat lumaWE = lumaW + lumaE;
				FxaaFloat subpixRcpRange = 1.0/range;
				FxaaFloat subpixNSWE = lumaNS + lumaWE;
				FxaaFloat edgeHorz1 = (-2.0 * lumaM) + lumaNS;
				FxaaFloat edgeVert1 = (-2.0 * lumaM) + lumaWE;
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNESE = lumaNE + lumaSE;
				FxaaFloat lumaNWNE = lumaNW + lumaNE;
				FxaaFloat edgeHorz2 = (-2.0 * lumaE) + lumaNESE;
				FxaaFloat edgeVert2 = (-2.0 * lumaN) + lumaNWNE;
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNWSW = lumaNW + lumaSW;
				FxaaFloat lumaSWSE = lumaSW + lumaSE;
				FxaaFloat edgeHorz4 = (abs(edgeHorz1) * 2.0) + abs(edgeHorz2);
				FxaaFloat edgeVert4 = (abs(edgeVert1) * 2.0) + abs(edgeVert2);
				FxaaFloat edgeHorz3 = (-2.0 * lumaW) + lumaNWSW;
				FxaaFloat edgeVert3 = (-2.0 * lumaS) + lumaSWSE;
				FxaaFloat edgeHorz = abs(edgeHorz3) + edgeHorz4;
				FxaaFloat edgeVert = abs(edgeVert3) + edgeVert4;
		/*--------------------------------------------------------------------------*/
				FxaaFloat subpixNWSWNESE = lumaNWSW + lumaNESE;
				FxaaFloat lengthSign = fxaaQualityRcpFrame.x;
				FxaaBool horzSpan = edgeHorz >= edgeVert;
				FxaaFloat subpixA = subpixNSWE * 2.0 + subpixNWSWNESE;
		/*--------------------------------------------------------------------------*/
				if(!horzSpan) lumaN = lumaW;
				if(!horzSpan) lumaS = lumaE;
				if(horzSpan) lengthSign = fxaaQualityRcpFrame.y;
				FxaaFloat subpixB = (subpixA * (1.0/12.0)) - lumaM;
		/*--------------------------------------------------------------------------*/
				FxaaFloat gradientN = lumaN - lumaM;
				FxaaFloat gradientS = lumaS - lumaM;
				FxaaFloat lumaNN = lumaN + lumaM;
				FxaaFloat lumaSS = lumaS + lumaM;
				FxaaBool pairN = abs(gradientN) >= abs(gradientS);
				FxaaFloat gradient = max(abs(gradientN), abs(gradientS));
				if(pairN) lengthSign = -lengthSign;
				FxaaFloat subpixC = FxaaSat(abs(subpixB) * subpixRcpRange);
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posB;
				posB.x = posM.x;
				posB.y = posM.y;
				FxaaFloat2 offNP;
				offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
				offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;
				if(!horzSpan) posB.x += lengthSign * 0.5;
				if( horzSpan) posB.y += lengthSign * 0.5;
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posN;
				posN.x = posB.x - offNP.x * FXAA_QUALITY_P0;
				posN.y = posB.y - offNP.y * FXAA_QUALITY_P0;
				FxaaFloat2 posP;
				posP.x = posB.x + offNP.x * FXAA_QUALITY_P0;
				posP.y = posB.y + offNP.y * FXAA_QUALITY_P0;
				FxaaFloat subpixD = ((-2.0)*subpixC) + 3.0;
				FxaaFloat lumaEndN = FxaaLuma(FxaaTexTop(tex, posN));
				FxaaFloat subpixE = subpixC * subpixC;
				FxaaFloat lumaEndP = FxaaLuma(FxaaTexTop(tex, posP));
		/*--------------------------------------------------------------------------*/
				if(!pairN) lumaNN = lumaSS;
				FxaaFloat gradientScaled = gradient * 1.0/4.0;
				FxaaFloat lumaMM = lumaM - lumaNN * 0.5;
				FxaaFloat subpixF = subpixD * subpixE;
				FxaaBool lumaMLTZero = lumaMM < 0.0;
		/*--------------------------------------------------------------------------*/
				lumaEndN -= lumaNN * 0.5;
				lumaEndP -= lumaNN * 0.5;
				FxaaBool doneN = abs(lumaEndN) >= gradientScaled;
				FxaaBool doneP = abs(lumaEndP) >= gradientScaled;
				if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P1;
				if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P1;
				FxaaBool doneNP = (!doneN) || (!doneP);
				if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P1;
				if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P1;
		/*--------------------------------------------------------------------------*/
				if(doneNP) {
						if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
						if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
						if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
						if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
						doneN = abs(lumaEndN) >= gradientScaled;
						doneP = abs(lumaEndP) >= gradientScaled;
						if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P2;
						if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P2;
						doneNP = (!doneN) || (!doneP);
						if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P2;
						if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P2;
		/*--------------------------------------------------------------------------*/
						#if (FXAA_QUALITY_PS > 3)
						if(doneNP) {
								if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
								if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
								if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
								if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
								doneN = abs(lumaEndN) >= gradientScaled;
								doneP = abs(lumaEndP) >= gradientScaled;
								if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P3;
								if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P3;
								doneNP = (!doneN) || (!doneP);
								if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P3;
								if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P3;
		/*--------------------------------------------------------------------------*/
								#if (FXAA_QUALITY_PS > 4)
								if(doneNP) {
										if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
										if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
										if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
										if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
										doneN = abs(lumaEndN) >= gradientScaled;
										doneP = abs(lumaEndP) >= gradientScaled;
										if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P4;
										if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P4;
										doneNP = (!doneN) || (!doneP);
										if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P4;
										if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P4;
		/*--------------------------------------------------------------------------*/
										#if (FXAA_QUALITY_PS > 5)
										if(doneNP) {
												if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
												if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
												if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
												if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
												doneN = abs(lumaEndN) >= gradientScaled;
												doneP = abs(lumaEndP) >= gradientScaled;
												if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P5;
												if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P5;
												doneNP = (!doneN) || (!doneP);
												if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P5;
												if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P5;
		/*--------------------------------------------------------------------------*/
												#if (FXAA_QUALITY_PS > 6)
												if(doneNP) {
														if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
														if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
														if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
														if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
														doneN = abs(lumaEndN) >= gradientScaled;
														doneP = abs(lumaEndP) >= gradientScaled;
														if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P6;
														if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P6;
														doneNP = (!doneN) || (!doneP);
														if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P6;
														if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P6;
		/*--------------------------------------------------------------------------*/
														#if (FXAA_QUALITY_PS > 7)
														if(doneNP) {
																if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
																if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
																if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
																if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
																doneN = abs(lumaEndN) >= gradientScaled;
																doneP = abs(lumaEndP) >= gradientScaled;
																if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P7;
																if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P7;
																doneNP = (!doneN) || (!doneP);
																if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P7;
																if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P7;
		/*--------------------------------------------------------------------------*/
				#if (FXAA_QUALITY_PS > 8)
				if(doneNP) {
						if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
						if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
						if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
						if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
						doneN = abs(lumaEndN) >= gradientScaled;
						doneP = abs(lumaEndP) >= gradientScaled;
						if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P8;
						if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P8;
						doneNP = (!doneN) || (!doneP);
						if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P8;
						if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P8;
		/*--------------------------------------------------------------------------*/
						#if (FXAA_QUALITY_PS > 9)
						if(doneNP) {
								if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
								if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
								if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
								if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
								doneN = abs(lumaEndN) >= gradientScaled;
								doneP = abs(lumaEndP) >= gradientScaled;
								if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P9;
								if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P9;
								doneNP = (!doneN) || (!doneP);
								if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P9;
								if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P9;
		/*--------------------------------------------------------------------------*/
								#if (FXAA_QUALITY_PS > 10)
								if(doneNP) {
										if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
										if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
										if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
										if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
										doneN = abs(lumaEndN) >= gradientScaled;
										doneP = abs(lumaEndP) >= gradientScaled;
										if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P10;
										if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P10;
										doneNP = (!doneN) || (!doneP);
										if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P10;
										if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P10;
		/*--------------------------------------------------------------------------*/
										#if (FXAA_QUALITY_PS > 11)
										if(doneNP) {
												if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
												if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
												if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
												if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
												doneN = abs(lumaEndN) >= gradientScaled;
												doneP = abs(lumaEndP) >= gradientScaled;
												if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P11;
												if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P11;
												doneNP = (!doneN) || (!doneP);
												if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P11;
												if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P11;
		/*--------------------------------------------------------------------------*/
												#if (FXAA_QUALITY_PS > 12)
												if(doneNP) {
														if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
														if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
														if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
														if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
														doneN = abs(lumaEndN) >= gradientScaled;
														doneP = abs(lumaEndP) >= gradientScaled;
														if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P12;
														if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P12;
														doneNP = (!doneN) || (!doneP);
														if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P12;
														if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P12;
		/*--------------------------------------------------------------------------*/
												}
												#endif
		/*--------------------------------------------------------------------------*/
										}
										#endif
		/*--------------------------------------------------------------------------*/
								}
								#endif
		/*--------------------------------------------------------------------------*/
						}
						#endif
		/*--------------------------------------------------------------------------*/
				}
				#endif
		/*--------------------------------------------------------------------------*/
														}
														#endif
		/*--------------------------------------------------------------------------*/
												}
												#endif
		/*--------------------------------------------------------------------------*/
										}
										#endif
		/*--------------------------------------------------------------------------*/
								}
								#endif
		/*--------------------------------------------------------------------------*/
						}
						#endif
		/*--------------------------------------------------------------------------*/
				}
		/*--------------------------------------------------------------------------*/
				FxaaFloat dstN = posM.x - posN.x;
				FxaaFloat dstP = posP.x - posM.x;
				if(!horzSpan) dstN = posM.y - posN.y;
				if(!horzSpan) dstP = posP.y - posM.y;
		/*--------------------------------------------------------------------------*/
				FxaaBool goodSpanN = (lumaEndN < 0.0) != lumaMLTZero;
				FxaaFloat spanLength = (dstP + dstN);
				FxaaBool goodSpanP = (lumaEndP < 0.0) != lumaMLTZero;
				FxaaFloat spanLengthRcp = 1.0/spanLength;
		/*--------------------------------------------------------------------------*/
				FxaaBool directionN = dstN < dstP;
				FxaaFloat dst = min(dstN, dstP);
				FxaaBool goodSpan = directionN ? goodSpanN : goodSpanP;
				FxaaFloat subpixG = subpixF * subpixF;
				FxaaFloat pixelOffset = (dst * (-spanLengthRcp)) + 0.5;
				FxaaFloat subpixH = subpixG * fxaaQualitySubpix;
		/*--------------------------------------------------------------------------*/
				FxaaFloat pixelOffsetGood = goodSpan ? pixelOffset : 0.0;
				FxaaFloat pixelOffsetSubpix = max(pixelOffsetGood, subpixH);
				if(!horzSpan) posM.x += pixelOffsetSubpix * lengthSign;
				if( horzSpan) posM.y += pixelOffsetSubpix * lengthSign;
				#if (FXAA_DISCARD == 1)
						return FxaaTexTop(tex, posM);
				#else
						return FxaaFloat4(FxaaTexTop(tex, posM).xyz, lumaM);
				#endif
		}
		/*==========================================================================*/
		#endif

		void main() {
			gl_FragColor = FxaaPixelShader(
				vUv,
				vec4(0.0),
				tDiffuse,
				tDiffuse,
				tDiffuse,
				resolution,
				vec4(0.0),
				vec4(0.0),
				vec4(0.0),
				0.75,
				0.166,
				0.0833,
				0.0,
				0.0,
				0.0,
				vec4(0.0)
			);

			// TODO avoid querying texture twice for same texel
			gl_FragColor.a = texture2D(tDiffuse, vUv).a;
		}`};class Nu extends fu{constructor(a){super(a),this.type=Mi}parse(a){const A=function(X,me){switch(X){case 1:console.error("THREE.RGBELoader Read Error: "+(me||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(me||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(me||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(me||""))}return-1},Q=`
`,U=function(X,me,Pe){me=me||1024;let we=X.pos,de=-1,V=0,Me="",ye=String.fromCharCode.apply(null,new Uint16Array(X.subarray(we,we+128)));for(;0>(de=ye.indexOf(Q))&&V<me&&we<X.byteLength;)Me+=ye,V+=ye.length,we+=128,ye+=String.fromCharCode.apply(null,new Uint16Array(X.subarray(we,we+128)));return-1<de?(X.pos+=V+de+1,Me+ye.slice(0,de)):!1},ce=function(X){const me=/^#\?(\S+)/,Pe=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,be=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,we=/^\s*FORMAT=(\S+)\s*$/,de=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,V={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let Me,ye;if(X.pos>=X.byteLength||!(Me=U(X)))return A(1,"no header found");if(!(ye=Me.match(me)))return A(3,"bad initial token");for(V.valid|=1,V.programtype=ye[1],V.string+=Me+`
`;Me=U(X),Me!==!1;){if(V.string+=Me+`
`,Me.charAt(0)==="#"){V.comments+=Me+`
`;continue}if((ye=Me.match(Pe))&&(V.gamma=parseFloat(ye[1],10)),(ye=Me.match(be))&&(V.exposure=parseFloat(ye[1],10)),(ye=Me.match(we))&&(V.valid|=2,V.format=ye[1]),(ye=Me.match(de))&&(V.valid|=4,V.height=parseInt(ye[1],10),V.width=parseInt(ye[2],10)),V.valid&2&&V.valid&4)break}return V.valid&2?V.valid&4?V:A(3,"missing image size specifier"):A(3,"missing format specifier")},$=function(X,me,Pe){const be=me;if(be<8||be>32767||X[0]!==2||X[1]!==2||X[2]&128)return new Uint8Array(X);if(be!==(X[2]<<8|X[3]))return A(3,"wrong scanline width");const we=new Uint8Array(4*me*Pe);if(!we.length)return A(4,"unable to allocate buffer space");let de=0,V=0;const Me=4*be,ye=new Uint8Array(4),Xe=new Uint8Array(Me);let Qe=Pe;for(;Qe>0&&V<X.byteLength;){if(V+4>X.byteLength)return A(1);if(ye[0]=X[V++],ye[1]=X[V++],ye[2]=X[V++],ye[3]=X[V++],ye[0]!=2||ye[1]!=2||(ye[2]<<8|ye[3])!=be)return A(3,"bad rgbe scanline format");let Ve=0,Oe;for(;Ve<Me&&V<X.byteLength;){Oe=X[V++];const qe=Oe>128;if(qe&&(Oe-=128),Oe===0||Ve+Oe>Me)return A(3,"bad scanline data");if(qe){const pt=X[V++];for(let ot=0;ot<Oe;ot++)Xe[Ve++]=pt}else Xe.set(X.subarray(V,V+Oe),Ve),Ve+=Oe,V+=Oe}const Ot=be;for(let qe=0;qe<Ot;qe++){let pt=0;we[de]=Xe[qe+pt],pt+=be,we[de+1]=Xe[qe+pt],pt+=be,we[de+2]=Xe[qe+pt],pt+=be,we[de+3]=Xe[qe+pt],de+=4}Qe--}return we},ge=function(X,me,Pe,be){const we=X[me+3],de=Math.pow(2,we-128)/255;Pe[be+0]=X[me+0]*de,Pe[be+1]=X[me+1]*de,Pe[be+2]=X[me+2]*de},ie=function(X,me,Pe,be){const we=X[me+3],de=Math.pow(2,we-128)/255;Pe[be+0]=Er.toHalfFloat(X[me+0]*de),Pe[be+1]=Er.toHalfFloat(X[me+1]*de),Pe[be+2]=Er.toHalfFloat(X[me+2]*de)},Se=new Uint8Array(a);Se.pos=0;const pe=ce(Se);if(pe!==-1){const X=pe.width,me=pe.height,Pe=$(Se.subarray(Se.pos),X,me);if(Pe!==-1){let be,we,de,V;switch(this.type){case Mi:be=Pe,we=pu,de=Mi;break;case Dr:V=Pe.length/4*3;const Me=new Float32Array(V);for(let Xe=0;Xe<V;Xe++)ge(Pe,Xe*4,Me,Xe*3);be=Me,we=_d,de=Dr;break;case Ir:V=Pe.length/4*3;const ye=new Uint16Array(V);for(let Xe=0;Xe<V;Xe++)ie(Pe,Xe*4,ye,Xe*3);be=ye,we=_d,de=Ir;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:X,height:me,data:be,header:pe.string,gamma:pe.gamma,exposure:pe.exposure,format:we,type:de}}}return null}setDataType(a){return this.type=a,this}load(a,c,b,h){function x(u,A){switch(u.type){case Mi:u.encoding=mu,u.minFilter=Pd,u.magFilter=Pd,u.generateMipmaps=!1,u.flipY=!0;break;case Dr:u.encoding=Sd,u.minFilter=jo,u.magFilter=jo,u.generateMipmaps=!1,u.flipY=!0;break;case Ir:u.encoding=Sd,u.minFilter=jo,u.magFilter=jo,u.generateMipmaps=!1,u.flipY=!0;break}c&&c(u,A)}return super.load(a,x,b,h)}}class Od{static computeTangents(a){a.computeTangents(),console.warn("THREE.BufferGeometryUtils: .computeTangents() has been removed. Use BufferGeometry.computeTangents() instead.")}static mergeBufferGeometries(a,c=!1){const b=a[0].index!==null,h=new Set(Object.keys(a[0].attributes)),x=new Set(Object.keys(a[0].morphAttributes)),u={},A={},P=a[0].morphTargetsRelative,Z=new ha;let le=0;for(let Q=0;Q<a.length;++Q){const U=a[Q];let ce=0;if(b!==(U.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+Q+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const $ in U.attributes){if(!h.has($))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+Q+'. All geometries must have compatible attributes; make sure "'+$+'" attribute exists among all geometries, or in none of them.'),null;u[$]===void 0&&(u[$]=[]),u[$].push(U.attributes[$]),ce++}if(ce!==h.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+Q+". Make sure all geometries have the same number of attributes."),null;if(P!==U.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+Q+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const $ in U.morphAttributes){if(!x.has($))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+Q+".  .morphAttributes must be consistent throughout all geometries."),null;A[$]===void 0&&(A[$]=[]),A[$].push(U.morphAttributes[$])}if(Z.userData.mergedUserData=Z.userData.mergedUserData||[],Z.userData.mergedUserData.push(U.userData),c){let $;if(b)$=U.index.count;else if(U.attributes.position!==void 0)$=U.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+Q+". The geometry must have either an index or a position attribute"),null;Z.addGroup(le,$,Q),le+=$}}if(b){let Q=0;const U=[];for(let ce=0;ce<a.length;++ce){const $=a[ce].index;for(let ge=0;ge<$.count;++ge)U.push($.getX(ge)+Q);Q+=a[ce].attributes.position.count}Z.setIndex(U)}for(const Q in u){const U=this.mergeBufferAttributes(u[Q]);if(!U)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+Q+" attribute."),null;Z.setAttribute(Q,U)}for(const Q in A){const U=A[Q][0].length;if(U===0)break;Z.morphAttributes=Z.morphAttributes||{},Z.morphAttributes[Q]=[];for(let ce=0;ce<U;++ce){const $=[];for(let ie=0;ie<A[Q].length;++ie)$.push(A[Q][ie][ce]);const ge=this.mergeBufferAttributes($);if(!ge)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+Q+" morphAttribute."),null;Z.morphAttributes[Q].push(ge)}}return Z}static mergeBufferAttributes(a){let c,b,h,x=0;for(let P=0;P<a.length;++P){const Z=a[P];if(Z.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(c===void 0&&(c=Z.array.constructor),c!==Z.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(b===void 0&&(b=Z.itemSize),b!==Z.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(h===void 0&&(h=Z.normalized),h!==Z.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;x+=Z.array.length}const u=new c(x);let A=0;for(let P=0;P<a.length;++P)u.set(a[P].array,A),A+=a[P].array.length;return new Vn(u,b,h)}static interleaveAttributes(a){let c,b=0,h=0;for(let le=0,Q=a.length;le<Q;++le){const U=a[le];if(c===void 0&&(c=U.array.constructor),c!==U.array.constructor)return console.error("AttributeBuffers of different types cannot be interleaved"),null;b+=U.array.length,h+=U.itemSize}const x=new hu(new c(b),h);let u=0;const A=[],P=["getX","getY","getZ","getW"],Z=["setX","setY","setZ","setW"];for(let le=0,Q=a.length;le<Q;le++){const U=a[le],ce=U.itemSize,$=U.count,ge=new gu(x,ce,u,U.normalized);A.push(ge),u+=ce;for(let ie=0;ie<$;ie++)for(let Se=0;Se<ce;Se++)ge[Z[Se]](ie,U[P[Se]](ie))}return A}static estimateBytesUsed(a){let c=0;for(const h in a.attributes){const x=a.getAttribute(h);c+=x.count*x.itemSize*x.array.BYTES_PER_ELEMENT}const b=a.getIndex();return c+=b?b.count*b.itemSize*b.array.BYTES_PER_ELEMENT:0,c}static mergeVertices(a,c=1e-4){c=Math.max(c,Number.EPSILON);const b={},h=a.getIndex(),x=a.getAttribute("position"),u=h?h.count:x.count;let A=0;const P=Object.keys(a.attributes),Z={},le={},Q=[],U=["getX","getY","getZ","getW"];for(let ie=0,Se=P.length;ie<Se;ie++){const pe=P[ie];Z[pe]=[];const X=a.morphAttributes[pe];X&&(le[pe]=new Array(X.length).fill().map(()=>[]))}const ce=Math.log10(1/c),$=Math.pow(10,ce);for(let ie=0;ie<u;ie++){const Se=h?h.getX(ie):ie;let pe="";for(let X=0,me=P.length;X<me;X++){const Pe=P[X],be=a.getAttribute(Pe),we=be.itemSize;for(let de=0;de<we;de++)pe+=`${~~(be[U[de]](Se)*$)},`}if(pe in b)Q.push(b[pe]);else{for(let X=0,me=P.length;X<me;X++){const Pe=P[X],be=a.getAttribute(Pe),we=a.morphAttributes[Pe],de=be.itemSize,V=Z[Pe],Me=le[Pe];for(let ye=0;ye<de;ye++){const Xe=U[ye];if(V.push(be[Xe](Se)),we)for(let Qe=0,Ve=we.length;Qe<Ve;Qe++)Me[Qe].push(we[Qe][Xe](Se))}}b[pe]=A,Q.push(A),A++}}const ge=a.clone();for(let ie=0,Se=P.length;ie<Se;ie++){const pe=P[ie],X=a.getAttribute(pe),me=new X.array.constructor(Z[pe]),Pe=new Vn(me,X.itemSize,X.normalized);if(ge.setAttribute(pe,Pe),pe in le)for(let be=0;be<le[pe].length;be++){const we=a.morphAttributes[pe][be],de=new we.array.constructor(le[pe][be]),V=new Vn(de,we.itemSize,we.normalized);ge.morphAttributes[pe][be]=V}}return ge.setIndex(Q),ge}static toTrianglesDrawMode(a,c){if(c===vu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(c===Md||c===bu){let b=a.getIndex();if(b===null){const A=[],P=a.getAttribute("position");if(P!==void 0){for(let Z=0;Z<P.count;Z++)A.push(Z);a.setIndex(A),b=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const h=b.count-2,x=[];if(c===Md)for(let A=1;A<=h;A++)x.push(b.getX(0)),x.push(b.getX(A)),x.push(b.getX(A+1));else for(let A=0;A<h;A++)A%2===0?(x.push(b.getX(A)),x.push(b.getX(A+1)),x.push(b.getX(A+2))):(x.push(b.getX(A+2)),x.push(b.getX(A+1)),x.push(b.getX(A)));x.length/3!==h&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const u=a.clone();return u.setIndex(x),u.clearGroups(),u}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",c),a}static computeMorphedAttributes(a){if(a.geometry.isBufferGeometry!==!0)return console.error("THREE.BufferGeometryUtils: Geometry is not of type BufferGeometry."),null;const c=new q,b=new q,h=new q,x=new q,u=new q,A=new q,P=new q,Z=new q,le=new q;function Q(no,ga,Nt,_o,ki,$o,Zo,Jo,Gt){c.fromBufferAttribute(Nt,$o),b.fromBufferAttribute(Nt,Zo),h.fromBufferAttribute(Nt,Jo);const bn=no.morphTargetInfluences;if(ga.morphTargets&&_o&&bn){P.set(0,0,0),Z.set(0,0,0),le.set(0,0,0);for(let So=0,Ha=_o.length;So<Ha;So++){const io=bn[So],jn=_o[So];io!==0&&(x.fromBufferAttribute(jn,$o),u.fromBufferAttribute(jn,Zo),A.fromBufferAttribute(jn,Jo),ki?(P.addScaledVector(x,io),Z.addScaledVector(u,io),le.addScaledVector(A,io)):(P.addScaledVector(x.sub(c),io),Z.addScaledVector(u.sub(b),io),le.addScaledVector(A.sub(h),io)))}c.add(P),b.add(Z),h.add(le)}no.isSkinnedMesh&&(no.boneTransform($o,c),no.boneTransform(Zo,b),no.boneTransform(Jo,h)),Gt[$o*3+0]=c.x,Gt[$o*3+1]=c.y,Gt[$o*3+2]=c.z,Gt[Zo*3+0]=b.x,Gt[Zo*3+1]=b.y,Gt[Zo*3+2]=b.z,Gt[Jo*3+0]=h.x,Gt[Jo*3+1]=h.y,Gt[Jo*3+2]=h.z}const U=a.geometry,ce=a.material;let $,ge,ie;const Se=U.index,pe=U.attributes.position,X=U.morphAttributes.position,me=U.morphTargetsRelative,Pe=U.attributes.normal,be=U.morphAttributes.position,we=U.groups,de=U.drawRange;let V,Me,ye,Xe,Qe,Ve,Oe,Ot;const qe=new Float32Array(pe.count*pe.itemSize),pt=new Float32Array(Pe.count*Pe.itemSize);if(Se!==null)if(Array.isArray(ce))for(V=0,ye=we.length;V<ye;V++)for(Qe=we[V],Ve=ce[Qe.materialIndex],Oe=Math.max(Qe.start,de.start),Ot=Math.min(Qe.start+Qe.count,de.start+de.count),Me=Oe,Xe=Ot;Me<Xe;Me+=3)$=Se.getX(Me),ge=Se.getX(Me+1),ie=Se.getX(Me+2),Q(a,Ve,pe,X,me,$,ge,ie,qe),Q(a,Ve,Pe,be,me,$,ge,ie,pt);else for(Oe=Math.max(0,de.start),Ot=Math.min(Se.count,de.start+de.count),V=Oe,ye=Ot;V<ye;V+=3)$=Se.getX(V),ge=Se.getX(V+1),ie=Se.getX(V+2),Q(a,ce,pe,X,me,$,ge,ie,qe),Q(a,ce,Pe,be,me,$,ge,ie,pt);else if(pe!==void 0)if(Array.isArray(ce))for(V=0,ye=we.length;V<ye;V++)for(Qe=we[V],Ve=ce[Qe.materialIndex],Oe=Math.max(Qe.start,de.start),Ot=Math.min(Qe.start+Qe.count,de.start+de.count),Me=Oe,Xe=Ot;Me<Xe;Me+=3)$=Me,ge=Me+1,ie=Me+2,Q(a,Ve,pe,X,me,$,ge,ie,qe),Q(a,Ve,Pe,be,me,$,ge,ie,pt);else for(Oe=Math.max(0,de.start),Ot=Math.min(pe.count,de.start+de.count),V=Oe,ye=Ot;V<ye;V+=3)$=V,ge=V+1,ie=V+2,Q(a,ce,pe,X,me,$,ge,ie,qe),Q(a,ce,Pe,be,me,$,ge,ie,pt);const ot=new Wn(qe,3),Ci=new Wn(pt,3);return{positionAttribute:pe,normalAttribute:Pe,morphedPositionAttribute:ot,morphedNormalAttribute:Ci}}}const Rr=new WeakMap;class Nd extends yu{constructor(a){super(a),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(a){return this.decoderPath=a,this}setDecoderConfig(a){return this.decoderConfig=a,this}setWorkerLimit(a){return this.workerLimit=a,this}load(a,c,b,h){const x=new Td(this.manager);x.setPath(this.path),x.setResponseType("arraybuffer"),x.setRequestHeader(this.requestHeader),x.setWithCredentials(this.withCredentials),x.load(a,u=>{const A={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(u,A).then(c).catch(h)},b,h)}decodeDracoFile(a,c,b,h){const x={attributeIDs:b||this.defaultAttributeIDs,attributeTypes:h||this.defaultAttributeTypes,useUniqueIDs:!!b};this.decodeGeometry(a,x).then(c)}decodeGeometry(a,c){for(const P in c.attributeTypes){const Z=c.attributeTypes[P];Z.BYTES_PER_ELEMENT!==void 0&&(c.attributeTypes[P]=Z.name)}const b=JSON.stringify(c);if(Rr.has(a)){const P=Rr.get(a);if(P.key===b)return P.promise;if(a.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let h;const x=this.workerNextTaskID++,u=a.byteLength,A=this._getWorker(x,u).then(P=>(h=P,new Promise((Z,le)=>{h._callbacks[x]={resolve:Z,reject:le},h.postMessage({type:"decode",id:x,taskConfig:c,buffer:a},[a])}))).then(P=>this._createGeometry(P.geometry));return A.catch(()=>!0).then(()=>{h&&x&&this._releaseTask(h,x)}),Rr.set(a,{key:b,promise:A}),A}_createGeometry(a){const c=new ha;a.index&&c.setIndex(new Vn(a.index.array,1));for(let b=0;b<a.attributes.length;b++){const h=a.attributes[b],x=h.name,u=h.array,A=h.itemSize;c.setAttribute(x,new Vn(u,A))}return c}_loadLibrary(a,c){const b=new Td(this.manager);return b.setPath(this.decoderPath),b.setResponseType(c),b.setWithCredentials(this.withCredentials),new Promise((h,x)=>{b.load(a,h,void 0,x)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const a=typeof WebAssembly!="object"||this.decoderConfig.type==="js",c=[];return a?c.push(this._loadLibrary("draco_decoder.js","text")):(c.push(this._loadLibrary("draco_wasm_wrapper.js","text")),c.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(c).then(b=>{const h=b[0];a||(this.decoderConfig.wasmBinary=b[1]);const x=zu.toString(),u=["/* draco decoder */",h,"","/* worker */",x.substring(x.indexOf("{")+1,x.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([u]))}),this.decoderPending}_getWorker(a,c){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const h=new Worker(this.workerSourceURL);h._callbacks={},h._taskCosts={},h._taskLoad=0,h.postMessage({type:"init",decoderConfig:this.decoderConfig}),h.onmessage=function(x){const u=x.data;switch(u.type){case"decode":h._callbacks[u.id].resolve(u);break;case"error":h._callbacks[u.id].reject(u);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+u.type+'"')}},this.workerPool.push(h)}else this.workerPool.sort(function(h,x){return h._taskLoad>x._taskLoad?-1:1});const b=this.workerPool[this.workerPool.length-1];return b._taskCosts[a]=c,b._taskLoad+=c,b})}_releaseTask(a,c){a._taskLoad-=a._taskCosts[c],delete a._callbacks[c],delete a._taskCosts[c]}debug(){console.log("Task load: ",this.workerPool.map(a=>a._taskLoad))}dispose(){for(let a=0;a<this.workerPool.length;++a)this.workerPool[a].terminate();return this.workerPool.length=0,this}}function zu(){let R,a;onmessage=function(u){const A=u.data;switch(A.type){case"init":R=A.decoderConfig,a=new Promise(function(le){R.onModuleLoaded=function(Q){le({draco:Q})},DracoDecoderModule(R)});break;case"decode":const P=A.buffer,Z=A.taskConfig;a.then(le=>{const Q=le.draco,U=new Q.Decoder,ce=new Q.DecoderBuffer;ce.Init(new Int8Array(P),P.byteLength);try{const $=c(Q,U,ce,Z),ge=$.attributes.map(ie=>ie.array.buffer);$.index&&ge.push($.index.array.buffer),self.postMessage({type:"decode",id:A.id,geometry:$},ge)}catch($){console.error($),self.postMessage({type:"error",id:A.id,error:$.message})}finally{Q.destroy(ce),Q.destroy(U)}});break}};function c(u,A,P,Z){const le=Z.attributeIDs,Q=Z.attributeTypes;let U,ce;const $=A.GetEncodedGeometryType(P);if($===u.TRIANGULAR_MESH)U=new u.Mesh,ce=A.DecodeBufferToMesh(P,U);else if($===u.POINT_CLOUD)U=new u.PointCloud,ce=A.DecodeBufferToPointCloud(P,U);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!ce.ok()||U.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+ce.error_msg());const ge={index:null,attributes:[]};for(const ie in le){const Se=self[Q[ie]];let pe,X;if(Z.useUniqueIDs)X=le[ie],pe=A.GetAttributeByUniqueId(U,X);else{if(X=A.GetAttributeId(U,u[le[ie]]),X===-1)continue;pe=A.GetAttribute(U,X)}ge.attributes.push(h(u,A,U,ie,Se,pe))}return $===u.TRIANGULAR_MESH&&(ge.index=b(u,A,U)),u.destroy(U),ge}function b(u,A,P){const le=P.num_faces()*3,Q=le*4,U=u._malloc(Q);A.GetTrianglesUInt32Array(P,Q,U);const ce=new Uint32Array(u.HEAPF32.buffer,U,le).slice();return u._free(U),{array:ce,itemSize:1}}function h(u,A,P,Z,le,Q){const U=Q.num_components(),$=P.num_points()*U,ge=$*le.BYTES_PER_ELEMENT,ie=x(u,le),Se=u._malloc(ge);A.GetAttributeDataArrayForAllPoints(P,Q,ie,ge,Se);const pe=new le(u.HEAPF32.buffer,Se,$).slice();return u._free(Se),{name:Z,array:pe,itemSize:U}}function x(u,A){switch(A){case Float32Array:return u.DT_FLOAT32;case Int8Array:return u.DT_INT8;case Int16Array:return u.DT_INT16;case Int32Array:return u.DT_INT32;case Uint8Array:return u.DT_UINT8;case Uint16Array:return u.DT_UINT16;case Uint32Array:return u.DT_UINT32}}}const Ga=new xu;Ga.setURLModifier(R=>R&&typeof R=="string"&&R.toLowerCase().endsWith(".png")?R.replace(/\.png$/i,".webp"):R);const o={site:{backgroundColorTop:"#414d4f",backgroundColorBottom:"#394034",backgroundColor:"#414d4f",hoverColorText:"#91bfff"},textures:{disabled:!1,unloadedColor:"#888888"},camera:{fov:24,near:1,far:50,desktop:{position:{x:0,y:16,z:-22},lookAt:{x:0,y:0,z:-1.9}},mobile:{position:{x:0,y:16,z:-22},lookAt:{x:0,y:0,z:-2.25}}},lights:{skyboxRotation:-6,ambient:{color:16777215,intensity:3},directional:{color:16777215,intensity:2.6,position:{x:5,y:5,z:5}}},vignette:{enabled:!0,enabledMobile:!1,offset:1,darkness:1.16},interaction:{spinDuration:1.5,hoverColor3D:"#91bfff",defaultModeShadowBoost:1.6,minDragRadiusThreshold:3.5,rotationDamping:.95,wheelSensitivity:.0018,wheelInvertDirection:!1,wheelMaxVelocity:12,outline:{edgeStrength:3,edgeGlow:1,edgeThickness:2}},plate:{scale:1,yPos:0,color:[.04,.05,.04,.5],glass:{refractionIntensity:.36,ior:1,roughness:.3},rainbow:{intensity:.66,scale:.2,angleFactor:6.6,shimmer:0,shimmerSpeed:0,centerSmoothness:0,centerOffset:[0,0],fresnelMultiply:1,paletteA:[.5,.5,.5],paletteB:[.5,.5,.5],paletteC:[1,1,1],paletteD:[0,.33,.67]}},gel:{glass:{color:"#0c0f16",transmission:0,opacity:.35,ior:1.4,roughness:.3,reflectivity:1,clearcoat:0,clearcoatRoughness:0}},questionBox:{enabled:!0,unloadedColor:14141429,desktop:{position:{x:0,y:1.3,z:0}},mobile:{position:{x:0,y:1.3,z:-3.2}},position:{x:0,y:1.3,z:0},scale:.5,hoverSpinMultiplier:2,glass:{color:16777215,transmission:.8,roughness:.16,ior:1.5,opacity:1,reflectivity:1,clearcoat:0,clearcoatRoughness:0},metal:{color:16777215,metalness:.96,roughness:0,normalScale:1,colorShiftSpeed:.25},rotationSpeedX:.01,rotationSpeedY:.016,billboardRotationY:-90,planeScale:.82,floatFrequency:.003,floatAmplitude:.1,shadowY:.335,shadowScale:1.6,shadowOpacity:.65,hover:{soundEnabled:!0,hoverInVolume:.5,hoverOutVolume:.5,hysteresisRadius:1},shatter:{enabled:!0,shardCount:18,sparkleCount:8,sparkleColors:["#28a200","#ffa527","#3150ff"],minShardScale:.3,maxShardScale:.6,minSparkleScale:1.3,maxSparkleScale:2,explosionSpeed:4,sparkleSpeed:1.5,fadeSpeed:2.5,soundEnabled:!0,volume:.9,growVolume:.4,respawnDelay:100,respawnDuration:400}},houdini3D:{enabled:!0,unloadedColor:1252660,scale:1,rotation:{x:0,y:226,z:0},shadowY:.335,shadowScale:2,shadowOpacity:.36,hoverYOffset:.15,hover:{soundEnabled:!0,hoverInVolume:.16,hoverOutVolume:.2,hysteresisRadius:1.35},material:{color:13421772,specular:2236962,shininess:30},sway:{enabled:!0,pivotOffset:{x:0,y:0,z:0},x:{enabled:!0,amount:7,speed:1,phase:0},y:{enabled:!1,amount:3,speed:1.5,phase:0},z:{enabled:!1,amount:3,speed:1,phase:0}},desktop:{position:{x:4.3,y:.6,z:-2}},mobile:{position:{x:1.3,y:.6,z:-6}},pop:{enabled:!0,popDuration:450,popMultiplier:2.2,easing:"easeOutCubic",sparkleCount:12,minSparkleScale:1,maxSparkleScale:2,sparkleSpeed:3,sparkleColors:["#528ce4","#153d8d","#5d74d4"],soundEnabled:!0,volume:.2,growVolume:.4,respawnDelay:100,respawnDuration:400}},web3D:{enabled:!0,unloadedColor:2900606,scale:.62,rotation:{x:0,y:0,z:0},rotationAxis:"y",rotationSpeedY:.01,floatFrequency:.001,floatAmplitude:.05,hoverScale:1.1,hoverSpinMultiplier:2,hoverYOffset:0,moon:{rotationAxis:"y",rotationSpeed:-.01},signal:{enabled:!0,interval:530,hoverSpeedMultiplier:3.5,clickSpeedMultiplier:12,billboard:!0,billboardRotationX:90,billboardRotationY:0,billboardRotationZ:0},desktop:{position:{x:-4.3,y:1.2,z:2}},mobile:{position:{x:-1.8,y:1.2,z:0}},shadowY:.335,shadowScale:1.4,shadowOpacity:.36,materials:{grid:{color:0,emissive:16777215,emissiveIntensity:1.2,emissiveMap:"./graphics/grid.webp",roughness:.3,metalness:.1},antenna:{color:13421772,roughness:.2,metalness:.9},moon:{color:0,emissive:732799,emissiveIntensity:1,roughness:.6,metalness:0},signal:{color:0,emissive:13491455,emissiveIntensity:1,roughness:.3,metalness:.1}},hover:{soundEnabled:!0,hoverInVolume:.14,hoverOutVolume:.14,hysteresisRadius:1.2},clickAnimation:{enabled:!0,soundEnabled:!0,volume:.26,duration:1e3,clickSpinMultiplier:16,emissiveFlashIntensity:3.5,moonEmissiveFlashIntensity:1.5,godRayCount:26,minRayLength:.5,maxRayLength:1,minRayWidth:.1,maxRayWidth:.2,rayColors:["#ffffff","#21ffd8","#91bfff","#70aaff"],respawnDelay:50,respawnDuration:400}},games3D:{enabled:!0,scale:.086,rotation:{y:90,z:20},lookAtCamera:{enabled:!0,speed:.01},floatFrequency:.002,floatAmplitude:.12,pauseFloatOnHover:!0,poseInterval:700,hoverPoseSpeedMultiplier:3,hoverScale:1.15,hoverYOffset:0,desktop:{position:{x:2,y:1.3,z:4.3}},mobile:{position:{x:1.6,y:1.3,z:2.2}},shadowY:.335,shadowScale:2,shadowOpacity:.55,material:{color:2666173,metalness:.8,roughness:.1},hover:{soundEnabled:!0,hoverInSoundSrc:"sound/gamesHover.mp3",hoverOutSoundSrc:"sound/gamesOut.mp3",hoverInVolume:.1,hoverOutVolume:.1,hoverInCooldown:180,hoverOutCooldown:180,hysteresisRadius:1.5},pop:{enabled:!0,soundEnabled:!0,laserSoundSrc:"sound/lazer.mp3",laserVolume:.35,explodeSoundSrc:"sound/8bitExplode.mp3",explodeVolume:.12,growSoundSrc:"sound/alienGrow.mp3",growVolume:.35,pop0Duration:350,pop1Duration:450,shadowFadeDuration:400,respawnDelay:100,respawnDuration:400,material:{color:16758272,metalness:.8,roughness:.2}}},ar3D:{enabled:!0,unloadedColor:14540287,scale:.44,rotation:{y:-90},walkRadiusX:2.2,walkRadiusZ:2.2,speed:.004,inspectEnabled:!0,initialWalkDelay:4e3,walkDuration:4e3,pauseDuration:3e3,hoverTurnSpeed:400,hoverWalkAnimSpeed:8,idleWalkAnimSpeed:2,animTransitionDuration:.15,floatFrequency:0,floatAmplitude:0,hoverScale:1.075,hoverYOffset:.09,walkRadiusOffsetX:0,walkRadiusOffsetZ:0,showDebug:!1,desktop:{position:{x:-2,y:1.54,z:-4.3}},mobile:{position:{x:-1.4,y:1.54,z:-8.4},walkRadiusX:1.2,walkRadiusZ:1.6,walkRadiusOffsetX:.5,walkRadiusOffsetZ:.8},shadowY:.335,shadowScale:1.4,shadowOpacity:.8,materials:{phone:{color:5857389,roughness:.3,metalness:.8},screen:{color:0,emissive:14540287,emissiveIntensity:1,emissiveMap:"graphics/emojiface.webp",hoverEmissiveMap:"graphics/emojieyes.webp",clickEmissiveMap:"graphics/emojihuh.webp",roughness:.1,metalness:0},camera:{color:3422531,roughness:.1,metalness:.8},cameraHouse:{color:5857389,roughness:.3,metalness:.8},shoes:{color:1450606,roughness:.6,metalness:.2},socks:{color:4473941,roughness:.8,metalness:0}},clickAnimation:{enabled:!0,soundEnabled:!0,soundSrc:"sound/vibration.mp3",volume:.3,duration:800,shakeTransitionDuration:.06},hover:{soundEnabled:!0,hoverInVolume:.35,hoverOutVolume:.25,hoverInSoundSrc:"sound/arHover.mp3",hoverOutSoundSrc:"sound/arOut.mp3",hysteresisRadius:1.4}},linkedin3D:{enabled:!0,unloadedColor:595249,desktop:{spawnPositions:[{x:-5.6,y:.63,z:-4.6},{x:-7.2,y:.63,z:-2.2},{x:5,y:.63,z:4.6},{x:7,y:.63,z:-1.2},{x:.5,y:.63,z:-5.8},{x:-2.8,y:.63,z:4.8}],position:{x:-3.6,y:.63,z:-4.6},walkRadiusX:9,walkRadiusZ:9,minObstacleDist:1},mobile:{spawnPositions:[{x:-2,y:.63,z:-3},{x:2.2,y:.63,z:-2.2},{x:-.2,y:.63,z:3.5}],position:{x:-2,y:.63,z:-6},walkRadiusX:3,walkRadiusZ:9,minObstacleDist:.75},position:{x:-3.6,y:.63,z:-4.6},scale:.166,walkRadiusX:9,walkRadiusZ:9,minObstacleDist:1,speed:.005,shadowY:.335,shadowOpacity:.36,fallRotationSpeedThreshold:2,soundEnabled:!0,fallVolume:.8,fallSoundSrc:"sound/bugFall.mp3",riseVolume:.8,riseSoundSrc:"sound/bugRise.mp3",hoverVolume:.6,hoverSoundSrc:"sound/bugHover.mp3"},boids:{enabled:!0,count:750,yHeight:.37,shadowY:.335,shadowOpacity:.25,shadowScale:2,size:.04,length:.16,maxSpeed:.01,maxForce:5e-4,separationRadius:.25,neighborRadius:.5,separationWeight:1.6,alignmentWeight:.8,cohesionWeight:.6,obstacleAvoidanceWeight:1.75,obstacleAvoidRadius:.8,obstacleLookAhead:1.5,mouseAvoidanceEnabled:!0,cursorAvoidanceWeight:3,cursorAvoidRadius:1.2,desktop:{count:800,walkRadiusX:10,walkRadiusZ:10},mobile:{count:400,walkRadiusX:5,walkRadiusZ:10},walkRadiusX:11,walkRadiusZ:11,colorIntensity:.5,rotationSmoothing:.15,colorSmoothing:.1,material:{roughness:.35,metalness:.5}},renderStyles:{currentModeIndex:0,activeModes:["default","oneBit","pixelated","blueprint","multiBit","gameBoy","ascii"],logoImages:{default:"./graphics/thumbnail_ng_logo.webp",multiBit:"./graphics/thumbnail_ng_logo_dithered_00.webp",oneBit:"./graphics/thumbnail_ng_logo_dithered_01.webp",pixelated:"./graphics/thumbnail_ng_logo_pixelated.webp",gameBoy:"./graphics/thumbnail_ng_logo_gb.webp",blueprint:"./graphics/thumbnail_ng_logo_outline.webp",ascii:"./graphics/thumbnail_ng_logo_ascii.webp"},modeSounds:{default:{src:"sound/rm_wind.mp3",volume:.5},multiBit:{src:"sound/rm_lazer.mp3",volume:.2},oneBit:{src:"sound/rm_123.mp3",volume:.23},pixelated:{src:"sound/rm_pixelate.mp3",volume:.26},gameBoy:{src:"sound/rm_gameboy.mp3",volume:.23},blueprint:{src:"sound/rm_bubble.mp3",volume:.9},ascii:{src:"sound/rm_tone.mp3",volume:.2}},default:{textColor:"#ffffff",hoverColor:"#91bfff",soundSrc:"",soundVolume:.8,shadowBoost:2,hideBoidShadows:!1},multiBit:{colorLevels:4,pixelSize:2,ditherStrength:.25,textColor:"#ffffff",hoverColor:"#aaaaff",soundSrc:"",soundVolume:.8,shadowBoost:1.2,hideBoidShadows:!1},oneBit:{darkColor:"#333319",lightColor:"#e5ffff",pixelSize:2,ditherStrength:.66,textColor:"#ffffff",hoverColor:"#ffffff",soundSrc:"",soundVolume:.8,hideBoidShadows:!0,gelMaterialOverride:{override:!0,type:"unlit",color:"#282828",roughness:1,metalness:0}},pixelated:{pixelSize:8,colorLevels:16,scanlineIntensity:.08,textColor:"#ffffff",hoverColor:"#91bfff",soundSrc:"",soundVolume:.8,shadowBoost:.6,hideBoidShadows:!0,gelMaterialOverride:{override:!0,type:"unlit",color:"#4e4e4e",roughness:1,metalness:0}},gameBoy:{pixelSize:2,hideDish:!1,hideGel:!1,c0:"#0f380f",c1:"#306230",c2:"#76930d",c3:"#adcd1e",textColor:"#ffffff",hoverColor:"#adcd1e",soundSrc:"sound/rm_gameboy.ogg",soundVolume:.8,shadowBoost:.4,hideBoidShadows:!0,boidColorOverride:{override:!0,color:"#d7d7d7"},dishMaterialOverride:{override:!1,type:"unlit",color:"#b3b3b3",roughness:.5,metalness:.1},gelMaterialOverride:{override:!0,type:"unlit",color:"#434343",roughness:.4,metalness:.1},alienMaterialOverride:{override:!0,type:"lit",color:"#2e2e2e",roughness:.1,metalness:0}},blueprint:{bgColor:"#001b3a",lineColor:"#badaff",gridScale:0,textColor:"#ffffff",hoverColor:"#badaff",soundSrc:"",soundVolume:.8,shadowBoost:2,hideBoidShadows:!0,boidColorOverride:{override:!0,type:"unlit",color:"#3a4139"}},ascii:{cellSize:6,colorLevels:256,brightness:1.9,contrast:1.2,characterWeight:1.4,disableVignette:!1,hideShadows:!1,useSolidColor:!1,backgroundColor:"#07070b",debugRawScene:!1,greenTint:"#c3ffc3",textColor:"#ffffff",hoverColor:"#c3ffc3",soundSrc:"",soundVolume:.8,shadowBoost:.8,hideBoidShadows:!0,gelMaterialOverride:{override:!0,type:"unlit",color:"#373737"},alienMaterialOverride:{override:!0,type:"lit",color:"#2e2e2e",roughness:.1,metalness:0}}}},Or=new Map;function Wo(R,a,c,b){if(Or.has(R)){const x=Or.get(R);return a&&a(x),x}const h=new Ur(Ga).load(R,x=>{if(typeof renderer<"u"&&renderer&&renderer.initTexture)try{renderer.initTexture(x)}catch{}a&&a(x)},c,x=>{b&&b(x)});return Or.set(R,h),h}function mn(R,a,c,b,h="color"){const x=o.textures||{},u=b||x.unloadedColor||"#888888";if(x.disabled)return c&&c[h]&&u!==null&&u!==void 0&&c[h].set(u),null;const A=h==="color"?"map":h==="emissive"?"emissiveMap":h;return Wo(a,P=>{c&&A&&(c[A]=P,c.needsUpdate=!0)},void 0,P=>{console.warn(`[loadColorMap] Failed to load texture "${a}". Applying unloaded color (${u}).`),c&&(c[A]!==void 0&&(c[A]=null),c[h]&&u!==null&&u!==void 0&&c[h].set(u),c.needsUpdate=!0)})}const Gd="./graphics/thumbnail_ng_logo.webp";document.getElementById("logo").href=Gd;function Hd(R,a){R&&(R.style.webkitMaskImage=`url("${a}")`,R.style.maskImage=`url("${a}")`,R.style.webkitMaskSize="contain",R.style.maskSize="contain",R.style.webkitMaskRepeat="no-repeat",R.style.maskRepeat="no-repeat",R.style.webkitMaskPosition="center",R.style.maskPosition="center",R.style.backgroundColor="currentColor")}const Uu=document.getElementById("logolink");Hd(Uu,Gd);function vn(R){if(!R)return;const a=new Image;a.src=R}const Nr={};function Xu(){o&&o.renderStyles&&o.renderStyles.logoImages&&Object.values(o.renderStyles.logoImages).forEach(R=>{R&&!Nr[R]&&(vn(R),Nr[R]=new Image,Nr[R].src=R)})}Xu();vn("./graphics/portrait.webp");vn("./graphics/games_logo.webp");vn("./graphics/web_logo.webp");vn("./graphics/houdini_logo.webp");vn("./graphics/ar_logo.webp");vn("./graphics/ar_games_icon.webp");document.getElementById("title").innerHTML="Noah Gunther | Portfolio";const Yu='<div id="houdini" class="link" style="pointer-events: auto;">Houdini</div> <div id="web" class="link" style="pointer-events: auto;">Web</div> <div id="games" class="link" style="pointer-events: auto;">Games</div> <div id="ar" class="link" style="pointer-events: auto;">AR</div> <div id="about" class="link" style="pointer-events: auto;">About</div>';document.getElementById("mainnavlinks").innerHTML=Yu;const Gu=`<div class="mobilemenuwrapper"><div class="mobilelinkwrapper"><div id="aboutmobile" class="mobilelink">About</div></div> <div class="mobilelinkwrapper"><div id="armobile" class="mobilelink">AR</div></div> <div class="mobilelinkwrapper"><div id="gamesmobile" class="mobilelink">Games</div></div> <div class="mobilelinkwrapper"><div id="webmobile" class="mobilelink">Web</div></div> <div class="mobilelinkwrapper"><div id="houdinimobile" class="mobilelink">Houdini</div></div></div><div id="linkedin-mobile-wrapper"><a id="linkedin-mobile" href="https://www.linkedin.com/in/noah-gunther-3128bb185/" target="_blank"><div id="linkedin-mobile-icon" class="logo-tint-mask" style="-webkit-mask-image: url('graphics/li_logo_white.webp'); mask-image: url('graphics/li_logo_white.webp'); width: 100%; height: 100%;"></div></a></div>`;document.getElementById("mobilenavlinks").innerHTML=Gu;function ao(R,a){var c=Date.now,b=window.requestAnimationFrame,h=c(),x,u=function(){c()-h<a?x||b(u):R()};return b(u),{clear:function(){x=1}}}var Ft="main",ue=!1;window.addEventListener("load",Hu,!1);function Hu(){const R=window.innerWidth<=window.innerHeight,a=document.getElementById("body");o.interaction&&o.site.hoverColorText&&document.documentElement.style.setProperty("--hover-color",o.site.hoverColorText);const c=document.getElementById("loading"),b=document.getElementById("bg");if(o.site.backgroundColorTop&&o.site.backgroundColorBottom){const e=`linear-gradient(to bottom, ${o.site.backgroundColorTop}, ${o.site.backgroundColorBottom})`;c&&(c.style.background=e),b&&(b.style.background=e),document.body.style.background="transparent"}else c&&(c.style.backgroundColor=o.site.backgroundColor),b&&(b.style.backgroundColor=o.site.backgroundColor);c&&(c.style.background="rgb(10, 14, 18)");const h=c?Array.from(c.querySelectorAll(".loading-dot")):[];let x=0,u=null;h.length>0&&(u=setInterval(()=>{x=x%h.length+1,x>h.length&&(x=1),h.forEach((e,t)=>{e.style.color=t<x?"rgba(255,255,255,0.9)":""})},180));const A=document.getElementById("mainnavlinks"),P=document.getElementById("home"),Z=document.getElementById("about"),le=document.getElementById("ar"),Q=document.getElementById("games"),U=document.getElementById("web"),ce=document.getElementById("houdini"),$=document.getElementById("mobilenavmenu"),ge=document.getElementById("aboutmobile"),ie=document.getElementById("armobile"),Se=document.getElementById("gamesmobile"),pe=document.getElementById("webmobile"),X=document.getElementById("houdinimobile"),me=document.getElementById("mobilenavlinksbutton"),Pe=document.getElementById("mobilenavlinksbuttontop"),be=document.getElementById("mobilenavlinksbuttonmiddle"),we=document.getElementById("linkedin-desktop"),de=document.getElementById("linkedin-mobile"),V={about:{desktop:Z,mobile:ge},ar:{desktop:le,mobile:ie},games:{desktop:Q,mobile:Se},web:{desktop:U,mobile:pe},houdini:{desktop:ce,mobile:X},linkedin:{desktop:we,mobile:de}},Me=document.getElementById("mobilenavlinksbuttonbottom"),ye=document.getElementById("phonescreen");document.getElementById("mobilearprojectsheader"),document.getElementById("mobilearscrollwrapper");const Xe=document.getElementById("mobilearprojectsheaderclock");document.getElementById("leftarrow");const Qe=document.getElementById("leftarrowfront"),Ve=document.getElementById("aboutmepanel"),Oe=document.getElementById("downarrow"),Ot=document.getElementById("downarrowfront");Ve&&(Ve.style.visibility="hidden"),Oe&&(Oe.style.visibility="hidden");const qe=document.createElement("div"),pt=document.createElement("div"),ot=document.createElement("section"),Ci=document.createElement("div"),no=document.createElement("div"),ga=document.createElement("button");qe.className="about-overlay",pt.className="about-overlay__blur",ot.className="about-panel",Ci.className="about-panel__surface",no.className="about-panel__content",ga.className="about-panel__close";const Nt="http://www.w3.org/2000/svg",_o=document.createElementNS(Nt,"svg"),ki=document.createElementNS(Nt,"path"),$o=document.createElementNS(Nt,"path"),Zo=document.createElementNS(Nt,"path"),Jo=document.createElementNS(Nt,"path");_o.setAttribute("class","about-panel__border-svg"),_o.setAttribute("aria-hidden","true"),[ki,$o,Zo,Jo].forEach(e=>{e.setAttribute("class","about-panel__border-path"),e.setAttribute("pathLength","1"),_o.appendChild(e)});function Gt(){const e=_o.clientWidth,t=_o.clientHeight;if(!e||!t)return;const n=8,s=.5,d=26;ki.setAttribute("d",[`M ${e/2},${s}`,`L ${n+s},${s}`,`A ${n},${n} 0 0 0 ${s},${n+s}`,`L ${s},${t/2}`].join(" ")),$o.setAttribute("d",[`M ${e/2},${s}`,`L ${e-d},${s}`].join(" ")),Zo.setAttribute("d",[`M ${e/2},${t-s}`,`L ${n+s},${t-s}`,`A ${n},${n} 0 0 1 ${s},${t-n-s}`,`L ${s},${t/2}`].join(" ")),Jo.setAttribute("d",[`M ${e/2},${t-s}`,`L ${e-n-s},${t-s}`,`A ${n},${n} 0 0 0 ${e-s},${t-n-s}`,`L ${e-s},${d}`].join(" "))}const bn=document.createElement("div"),So=document.createElement("div");bn.className="about-panel__scroll-fade",So.className="about-panel__scroll-arrow",So.setAttribute("aria-hidden","true"),So.innerHTML=`
    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2L9 8L16 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;function Ha(){if(!no)return;const{scrollTop:e,scrollHeight:t,clientHeight:n}=no,s=t>n+4&&t-n-e>8;bn.classList.toggle("is-visible",s),So.classList.toggle("is-visible",s)}no.addEventListener("scroll",Ha,{passive:!0}),window.ResizeObserver&&ot&&new ResizeObserver(()=>{(Ut||$t)&&(Gt(),Ha())}).observe(ot),no.innerHTML=`
    <h1 class="about-panel__title">About</h1>
    <div class="about-panel__portrait-wrapper">
      <img src="./graphics/portrait.webp" alt="Noah Gunther Self Portrait" class="about-panel__portrait" />
    </div>
    <p class="about-panel__email"><a href="mailto:noah.gunther@gmail.com">noah.gunther@gmail.com</a></p>
    <p class="about-panel__body">I'm a Technical Artist and Creative Coder with a focus on 3D graphics and rendering. I've worked in web development, VR, mobile AR, game development, and offline rendered video.</p>
    <br/>
    <p class="about-panel__body">My work involves writing code and creating graphics for immersive media, as well as creating tools for artists and building more experimental projects such as AI-driven gameplay and Gaussian Splat pipelines.</p>
  `,ga.type="button",ga.setAttribute("aria-label","Close about panel"),ga.innerHTML=`
    <span class="about-panel__close-bar about-panel__close-bar--top"></span>
    <span class="about-panel__close-bar about-panel__close-bar--bottom"></span>
  `,ot.appendChild(Ci),ot.appendChild(_o),ot.appendChild(ga),ot.appendChild(no),ot.appendChild(bn),ot.appendChild(So),qe.appendChild(pt),qe.appendChild(ot),document.body.appendChild(qe);function io(e){const{name:t,title:n,subtitle:s,headerImageSrc:d,headerImageAlt:v,headerImageClass:g,videoSrc:f,bodyHtml:F}=e,B=document.createElement("div"),Y=document.createElement("div"),N=document.createElement("section"),G=document.createElement("div"),W=document.createElement("div"),ve=document.createElement("button");B.className=`about-overlay ${t}-overlay`,Y.className="about-overlay__blur",N.className=`about-panel ${t}-panel`,G.className="about-panel__surface",W.className="about-panel__content",ve.className="about-panel__close";let ae=null,K=null,Ae=null;const ke=f!==void 0?f:"./reels/ar.webm";if(ke){const _=ke.replace(/\.webm$/i,".webp");ae=document.createElement("div"),ae.className="about-panel__header-video-wrapper",ae.innerHTML=`
        <img src="${_}" alt="" class="about-panel__header-video-poster" />
        <video src="${ke}" loop muted playsinline preload="none" class="about-panel__header-video"></video>
        <div class="about-panel__header-video-spinner" aria-label="Loading video"><div class="about-panel__spinner-circle"></div></div>
        <div class="about-panel__header-video-fade"></div>
      `,K=ae.querySelector("video"),Ae=ae.querySelector(".about-panel__header-video-spinner"),K&&(K.preload="none",K.addEventListener("playing",()=>{Ae&&Ae.classList.remove("is-active"),K.style.opacity="1"}),K.addEventListener("waiting",()=>{B.classList.contains("is-visible")&&(Ae&&Ae.classList.add("is-active"),K.play().catch(()=>{}))}),K.addEventListener("stalled",()=>{B.classList.contains("is-visible")&&(Ae&&Ae.classList.add("is-active"),K.load(),K.play().catch(()=>{}))}))}function Le(){if(K)try{Ae&&Ae.classList.add("is-active"),K.readyState<2&&K.load(),K.currentTime=0;const _=K.play();_!==void 0&&_.catch(()=>{Ae&&Ae.classList.remove("is-active"),K.style.opacity="1"})}catch{}}function xe(){if(K)try{Ae&&Ae.classList.remove("is-active"),K.pause(),K.currentTime=0,K.style.opacity="0"}catch{}}K&&window.MutationObserver&&new MutationObserver(l=>{l.forEach(C=>{C.attributeName==="class"&&(B.classList.contains("is-visible")?Le():xe())})}).observe(B,{attributes:!0});const se=document.createElementNS(Nt,"svg"),Ce=document.createElementNS(Nt,"path"),Ye=document.createElementNS(Nt,"path"),Ee=document.createElementNS(Nt,"path"),D=document.createElementNS(Nt,"path");se.setAttribute("class","about-panel__border-svg"),se.setAttribute("aria-hidden","true"),[Ce,Ye,Ee,D].forEach(_=>{_.setAttribute("class","about-panel__border-path"),_.setAttribute("pathLength","1"),se.appendChild(_)});function i(){const _=se.clientWidth,l=se.clientHeight;if(!_||!l)return;const C=8,w=.5,H=26;Ce.setAttribute("d",[`M ${_/2},${w}`,`L ${C+w},${w}`,`A ${C},${C} 0 0 0 ${w},${C+w}`,`L ${w},${l/2}`].join(" ")),Ye.setAttribute("d",[`M ${_/2},${w}`,`L ${_-H},${w}`].join(" ")),Ee.setAttribute("d",[`M ${_/2},${l-w}`,`L ${C+w},${l-w}`,`A ${C},${C} 0 0 1 ${w},${l-C-w}`,`L ${w},${l/2}`].join(" ")),D.setAttribute("d",[`M ${_/2},${l-w}`,`L ${_-C-w},${l-w}`,`A ${C},${C} 0 0 0 ${_-w},${l-C-w}`,`L ${_-w},${H}`].join(" "))}const p=document.createElement("div"),m=document.createElement("div");p.className="about-panel__scroll-fade",m.className="about-panel__scroll-arrow",m.setAttribute("aria-hidden","true"),m.innerHTML=`
      <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L9 8L16 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;function r(){if(!W)return;const{scrollTop:_,scrollHeight:l,clientHeight:C}=W,w=l>C+4&&l-C-_>8;p.classList.toggle("is-visible",w),m.classList.toggle("is-visible",w)}W.addEventListener("scroll",r,{passive:!0}),window.ResizeObserver&&N&&new ResizeObserver(()=>{i(),r()}).observe(N);let y="";if(d){const _=g?`about-panel__portrait ${g}`:"about-panel__portrait";y=`
        <div class="about-panel__portrait-wrapper">
          <img src="${d}" alt="${v||n}" class="${_}" />
        </div>
      `}return W.innerHTML=`
      <h1 class="about-panel__title">${n}</h1>
      <p class="about-panel__email" style="color: var(--hover-color, #ffae21); margin-top: 6px; margin-bottom: 12px; font-weight: 500;">${s}</p>
      ${y}
      ${F}
    `,ve.type="button",ve.setAttribute("aria-label",`Close ${t} panel`),ve.innerHTML=`
      <span class="about-panel__close-bar about-panel__close-bar--top"></span>
      <span class="about-panel__close-bar about-panel__close-bar--bottom"></span>
    `,N.appendChild(G),N.appendChild(se),N.appendChild(ve),ae&&W.insertBefore(ae,W.firstChild),N.appendChild(W),N.appendChild(p),N.appendChild(m),B.appendChild(Y),B.appendChild(N),document.body.appendChild(B),{overlay:B,blur:Y,panel:N,panelContent:W,closeButton:ve,updateBorderPaths:i,updateScrollIndicators:r,videoEl:K,playHeaderVideo:Le,pauseHeaderVideo:xe}}const jn=io({name:"ar",title:"AR",subtitle:"Augmented Reality Social Experiences & Games",videoSrc:"./reels/ar.webm",headerImageSrc:"./graphics/ar_logo.webp",headerImageAlt:"AR Logo",headerImageClass:"about-panel__portrait--logo",bodyHtml:`
      <p class="about-panel__body">A selection of my work on social AR experiences and games. I led technical development for these experiences, writing interaction code, shaders, and developing render pipelines.</p>
      
      <hr class="about-panel__dotted-divider" />
      
      <div class="about-panel__project-section">
        <a href="./ar/social/index.html?from=ar" class="about-panel__project-icon-link">
          <img src="./graphics/social_ar_icon.webp" alt="Social AR" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Social AR</h2>
          <p class="about-panel__project-desc">Real-time social experiences built to enhance and experiment with the group video calling format.</p>
          <a href="./ar/social/index.html?from=ar" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>
      
      <hr class="about-panel__dotted-divider" />
      
      <div class="about-panel__project-section">
        <a href="./ar/games/index.html?from=ar" class="about-panel__project-icon-link">
          <img src="./graphics/ar_games_icon.webp" alt="AR Games" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">AR Games</h2>
          <p class="about-panel__project-desc">Networked AR minigames, uniquely designed and developed for group video calls.</p>
          <a href="./ar/games/index.html?from=ar" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>
    `}),{overlay:Li,blur:Qd,panel:yn,closeButton:Vd,updateBorderPaths:Wd,updateScrollIndicators:Cs,playHeaderVideo:Gr,pauseHeaderVideo:Hr}=jn,nt=io({name:"games",title:"Games",subtitle:"Real-Time Interactive & Game Development",videoSrc:"./reels/games.webm",headerImageSrc:"./graphics/games_logo.webp",headerImageAlt:"Games Logo Placeholder",headerImageClass:"about-panel__portrait--logo",bodyHtml:`
      <p class="about-panel__body">Interactive gameplay experiences, real-time shaders, and custom game mechanics built for VR, desktop, web, and mobile environments.</p>
      
      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="./games/drone/index.html?from=games" class="about-panel__project-icon-link">
          <img src="./graphics/dronedelivery.webp" alt="Drone Delivery" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Drone Delivery</h2>
          <p class="about-panel__project-desc">Breakdown of a slice of a delivery drone flying game.</p>
          <a href="./games/drone/index.html?from=games" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="./games/horizon/index.html?from=games" class="about-panel__project-icon-link">
          <img src="./graphics/metahorizon.webp" alt="Meta Reality Labs | Horizon" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Meta Reality Labs | Horizon</h2>
          <p class="about-panel__project-desc">My work on graphics, gameplay, avatars, and more at Meta RL.</p>
          <a href="./games/horizon/index.html?from=games" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="./ar/games/index.html?from=games" class="about-panel__project-icon-link">
          <img src="./graphics/ar_games_icon.webp" alt="AR Games" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">AR Games</h2>
          <p class="about-panel__project-desc">Multiplayer networked AR games built for mobile.</p>
          <a href="./ar/games/index.html?from=games" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/tokimon.webp" alt="Tokimon" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Tokimon</h2>
          <p class="about-panel__project-desc">A card game where players generate and battle cards by describing them using AI.</p>
          <a href="./games/tokimon/index.html?from=games" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="./horsecorpse/index.html" class="about-panel__project-icon-link">
          <img src="./graphics/horsecorpse.webp" alt="Horse Corpse Adventure Game" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Horse Corpse Adventure Game</h2>
          <p class="about-panel__project-desc">One of my first game projects, a text based adventure game for web.</p>
          <a href="./horsecorpse/index.html" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>
    `}),it=io({name:"web",title:"Web",subtitle:"Interactive Web & 3D Experiences",videoSrc:"./reels/web.webm",headerImageSrc:"./graphics/web_logo.webp",headerImageAlt:"Web Logo Placeholder",headerImageClass:"about-panel__portrait--logo",bodyHtml:`
      <p class="about-panel__body">Web projects, primarily focused on interactive threejs experiences, webgl shaders, and data visualization.</p>
      
      <hr class="about-panel__dotted-divider" />
      
      <div class="about-panel__project-section">
        <a href="./web/gridcity/index.html?from=web" class="about-panel__project-icon-link">
          <img src="./graphics/gridcity.webp" alt="Grid City" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Grid City</h2>
          <p class="about-panel__project-desc">Breakdown of a 3D raymarching shader on Shadertoy.</p>
          <a href="./web/gridcity/index.html?from=web" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>
      
      <hr class="about-panel__dotted-divider" />
      
      <div class="about-panel__project-section">
        <a href="./mta/index.html" class="about-panel__project-icon-link">
          <img src="./graphics/mta.webp" alt="Lately on the MTA" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Lately on the MTA</h2>
          <p class="about-panel__project-desc">My entry in the 2024 MTA Open Data Challenge, winning "most visually appealing."</p>
          <a href="./mta/index.html" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>
      
      <hr class="about-panel__dotted-divider" />
      
      <div class="about-panel__project-section">
        <a href="./jetski/index.html" class="about-panel__project-icon-link">
          <img src="./graphics/jetski.webp" alt="Threejs Jetski Portfolio" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Threejs Jetski Portfolio</h2>
          <p class="about-panel__project-desc">Info on my previous portfolio site built with threejs. 3D art, animation created in collaboration with Cody Drake.</p>
          <a href="./jetski/index.html" class="about-panel__project-link">View Project &gt;</a>
          <a href="./web/jetski/index.html?from=web" class="about-panel__project-link">Project Breakdown &gt;</a>
        </div>
      </div>
      
      <hr class="about-panel__dotted-divider" />
      
      <div class="about-panel__project-section">
        <a href="https://www.shadertoy.com/user/gunthern" class="about-panel__project-icon-link">
          <img src="./graphics/shadertoy.webp" alt="Shadertoy" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Shadertoy</h2>
          <p class="about-panel__project-desc">My Shadertoy profile, featuring a collection of my GLSL shaders.</p>
          <a href="https://www.shadertoy.com/user/gunthern" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>
      
      <hr class="about-panel__dotted-divider" />
      
      <div class="about-panel__project-section">
        <a href="./fireworks/index.html" class="about-panel__project-icon-link">
          <img src="./graphics/fireworks.webp" alt="Interactive Fireworks" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Interactive Fireworks</h2>
          <p class="about-panel__project-desc">An interactive tool for creating and sharing threejs firework displays.</p>
          <a href="./fireworks/index.html" class="about-panel__project-link">View Project &gt;</a>
          <a href="./fireworks/documentation/index.html" class="about-panel__project-link">Project Documentation &gt;</a>
        </div>
      </div>
      
      <hr class="about-panel__dotted-divider" />
      
      <div class="about-panel__project-section">
        <a href="./horsecorpse/index.html" class="about-panel__project-icon-link">
          <img src="./graphics/horsecorpse.webp" alt="Horse Corpse Adventure Game" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Horse Corpse Adventure Game</h2>
          <p class="about-panel__project-desc">A text-based adventure game created with Twine in 2017, based on the Horse Corpse Rock Opera by Kip Hathaway.</p>
          <a href="./horsecorpse/index.html" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>
      
      <hr class="about-panel__dotted-divider" />
      
      <div class="about-panel__project-section">
        <a href="https://noahgunther.wordpress.com/" class="about-panel__project-icon-link">
          <img src="./graphics/wordpress.webp" alt="Wordpress Gallery" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Wordpress Gallery</h2>
          <p class="about-panel__project-desc">A gallery of smaller projects and older work.</p>
          <a href="https://noahgunther.wordpress.com/" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>
    `}),st=io({name:"houdini",title:"Houdini",subtitle:"Procedural Graphics, Tools, & VFX Pipelines",videoSrc:"./reels/houdini.webm",headerImageSrc:"./graphics/houdini_logo.webp",headerImageAlt:"Houdini Logo",headerImageClass:"about-panel__portrait--logo",bodyHtml:`
      <p class="about-panel__body">Procedural geometry generation, particle dynamics, and simulation pipelines created with SideFX Houdini.</p>
      <br/>
      <p class="about-panel__body">Building procedural assets, custom digital assets (HDAs), and automated graphics pipelines for real-time graphics and offline rendered sequences. My more recent work in Houdini has focused on pipelines for creating Gaussian Splatting (GSplats) assets.</p>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="./houdini/droplets/index.html?from=houdini" class="about-panel__project-icon-link">
          <img src="./graphics/droplets.webp" alt="Droplets Tool" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Droplets Tool</h2>
          <p class="about-panel__project-desc">SOP-based tool without fluid simulation that dynamically creates droplet geometry and a wetmap texture on any geometry surface.</p>
          <a href="./houdini/droplets/index.html?from=houdini" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="./houdini/vines/index.html?from=houdini" class="about-panel__project-icon-link">
          <img src="./graphics/vines.webp" alt="Vines Tool" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Vines Tool</h2>
          <p class="about-panel__project-desc">An HDA for procedurally growing vines on any input geometry, that grow based on parameters such as light orientation and surface attraction.</p>
          <a href="./houdini/vines/index.html?from=houdini" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="./houdini/robot/index.html?from=houdini" class="about-panel__project-icon-link">
          <img src="./graphics/robotartist.webp" alt="Robot Artist" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Robot Artist</h2>
          <p class="about-panel__project-desc">A virtual robot that procedurally draws 2D images of 3D meshes, and sometimes gets abstract.</p>
          <a href="./houdini/robot/index.html?from=houdini" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="./houdini/pipes/index.html?from=houdini" class="about-panel__project-icon-link">
          <img src="./graphics/houdinipipes.webp" alt="Pipe Dream Houdini" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Pipe Dream Houdini</h2>
          <p class="about-panel__project-desc">A procedural animation project recreating the classic Microsoft "Pipe Dream" screensaver using VEX and Python.</p>
          <a href="./houdini/pipes/index.html?from=houdini" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="./houdini/volcano/index.html?from=houdini" class="about-panel__project-icon-link">
          <img src="./graphics/volcano.webp" alt="Volcanic Eruption" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Volcanic Eruption</h2>
          <p class="about-panel__project-desc">A volcanic eruption animation using pyro and fluid simulation, and a custom lightning tool created with VEX.</p>
          <a href="./houdini/volcano/index.html?from=houdini" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="./houdini/stainedglass/index.html?from=houdini" class="about-panel__project-icon-link">
          <img src="./graphics/stainedglass.webp" alt="Stained Glass Tool" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Stained Glass Tool</h2>
          <p class="about-panel__project-desc">An HDA that created stained glass geometry from image inputs.</p>
          <a href="./houdini/stainedglass/index.html?from=houdini" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="./houdini/fireworks/index.html?from=houdini" class="about-panel__project-icon-link">
          <img src="./graphics/houdinifireworks.webp" alt="Interactive Fireworks" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Interactive Fireworks</h2>
          <p class="about-panel__project-desc">A Python/VEX based tool to interactively create animated fireworks.</p>
          <a href="./houdini/fireworks/index.html?from=houdini" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="https://noahgunther.wordpress.com" target="_blank" rel="noopener noreferrer" class="about-panel__project-icon-link">
          <img src="./graphics/wordpress.webp" alt="Wordpress Gallery" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Wordpress Gallery</h2>
          <p class="about-panel__project-desc">A gallery of smaller projects and older work largely created with Houdini.</p>
          <a href="https://noahgunther.wordpress.com" target="_blank" rel="noopener noreferrer" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>
    `}),jd=document.getElementById("bg"),qd=new q(0,1,0),St=32,Ii=new Int32Array(St*St);let Di=new Int32Array(512);const Qr=new Ed(0,0,0,"YXZ"),Ei=new Qn,Vr=new Ed(0,0,0,"YXZ"),ks=new Qn,Ls=new Qn,Is=new q,Wr=new q,qn=new q,$d=new q(0,1,0),Ds=new q,Es=new q,jr=new q,Qa=new q,Bs=new q,qr=new q,xn=new q,$r=new zr,Zr=new zr;let Bi,va,wn=null,at=null,yt=null,Ke=new Ms,so=new ft(-9999,-9999),Ri=-9999,Rs=-9999;var Jr=-99999,Kr=-99999,Oi=!1,el=new ft,tl=new ft,ol=new Ms;let ba=null,Va=!1,Wa=!1,$n=!1,ja=null,al=!1,Zn=!1,nl=!1,Jn=!1,Kn=!1,il=!1,sl=!1,Os=!1,Ns=!1,zs=!1,he=null,Ht=null,Ko=null,Us=null,Xs=null,Ys=null,rl=0,Po=null,Ni=null,ea=null,ll=null,An=null,zi=null,ro=!1,ya=!1,ta=!1,Gs=0,_n=0,Pt=null,qa=[],te=null,Mo=null,Ui=null,Hs=null,Xi=null,$a=null,ei=null,ti=null,Sn=null,mt=null,Dt=null,Yi=null,Qs=null,Za=null,Gi=null,Hi=null,Et=null,mo=null,Qt=null,To=null,oa=0;const rt=new wu,oi=new q,Qi=new q,ai=new q,aa=new q,xa=new q,wa=new q,Zd=new q,Fo=new q,ho=new q,Aa=new Qn,dl=new Qn,_a=new Qn,cl=new q(0,0,1),Vi=new ne,Sa=new ne,ul=new Iu,Pn=new q,fl=new Ms;let O=null,go=null,vo=null,zt=null,Vt=null,We=null,Pa=null,Mn=null,ni=null,Ja=!1,Ma=!1,pl=!1,ii=!1,L=null,Ka=null,Tn=null,Wt=null,Fn=null,Wi=null,Cn=null,kn=null,jt=null,Co=null,Ta=null,lo=!1,si=!1,Vs=0,qt=0,Ws=!1,Fa=[],en=null,Ca=null,ka=null,Ct=null,ji=0,qi=0,ko="inspecting",ml=!1,hl=!1,ri=0,Ln=0,li=0,In=0,La=null,Ia=[],co=null,$i=null,di=!1,na=!1,Dn=!1,ci=!1,En=null;function Bn(e){e&&(Wt&&(Wt.emissiveMap=e,Wt.needsUpdate=!0),Ka&&Ka.material&&(Array.isArray(Ka.material)?Ka.material.forEach(t=>{t&&(t.emissiveMap=e,t.needsUpdate=!0)}):(Ka.material.emissiveMap=e,Ka.material.needsUpdate=!0)),L&&L.traverse(t=>{t.isMesh&&t.material&&(Array.isArray(t.material)?t.material.forEach(n=>{n&&(n===Wt||n.name&&n.name.toLowerCase().includes("screen"))&&(n.emissiveMap=e,n.needsUpdate=!0)}):(t.material===Wt||t.material.name&&t.material.name.toLowerCase().includes("screen"))&&(t.material.emissiveMap=e,t.material.needsUpdate=!0))}))}let bo=!1,gl=0,yo=0,js=!1,qs=!1,vl=0,bl=0;const yl=new q;let ia=null,ui=0,Da=!1,Ea=null,fi=[],pi=[],Lo=0,$s=!1,xo=!1,Ba=null,Rn=[],xl=0,Io=0,Zs=!1,Ut=!1,$t=!1,Zt=!1,uo=!1,Do=!1,sa=!1,Eo=!1,ra=!1,Bo=!1,la=!1,Js=!1,Ks=!1,er=!1,tr=!1,On=null,wl=performance.now(),Al=!1,Zi=Math.random()*Math.PI*2,Ji=0,Ra=null,or=null,mi=null,Nn=null,zn=null,ar=null,Jt="idle",tn=0;function _l(){const e=o.linkedin3D;if(!e)return{x:-3.6,y:.63,z:-4.6};if(e._selectedSpawnPos)return e._selectedSpawnPos;const n=typeof R<"u"&&R?e.mobile:e.desktop;if(n&&Array.isArray(n.spawnPositions)&&n.spawnPositions.length>0){const s=Math.floor(Math.random()*n.spawnPositions.length);return e._selectedSpawnPos=n.spawnPositions[s],e._selectedSpawnPos}return n&&n.position?(e._selectedSpawnPos=n.position,e._selectedSpawnPos):e.position||{x:-3.6,y:.63,z:-4.6}}function Sl(){const e=o.linkedin3D;if(!e)return{rx:9,rz:9};if(typeof R<"u"&&R&&e.mobile){const t=e.mobile.walkRadiusX,n=e.mobile.walkRadiusZ;return{rx:t,rz:n}}if(e.desktop){const t=e.desktop.walkRadiusX,n=e.desktop.walkRadiusZ;return{rx:t,rz:n}}return{rx:e.walkRadiusX,rz:e.walkRadiusZ}}function da(){const e=o.linkedin3D;return e?typeof R<"u"&&R&&e.mobile?e.mobile.minObstacleDist:e.desktop?e.desktop.minObstacleDist:e.minObstacleDist:1}const Ki=new q,es=new q,Jd=new q,Kd=new q,ec=new q,tc=new q,Pl=new q,oc=new q,ac=new q,Ml=new q,nc=new q,ts=new q,Ro=new q,hi=new q,gi=new q,Oo=new q,nr=new q,ir=[],sr=[],rr=[],lr=[],dr=[],cr=[];let os=!1,ur=0,as=-1,on=null,Xt=null,No=null,re=null,lt=null,Un=null,oe=null,tt=null,zo=null,ns=null,Tl=[],wo=null,J=null;const Uo=new Au;Uo.background=null;const fe=new fn;Uo.add(fe),window.__sceneGroup=fe;const De=new _u(o.camera.fov,window.innerWidth/window.innerHeight,o.camera.near,o.camera.far);De.position.z=7;const Oa=/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window&&navigator.maxTouchPoints>0,dt=new Su({canvas:jd,antialias:!0,alpha:!0});dt.setSize(window.innerWidth,window.innerHeight),dt.setPixelRatio(Math.min(window.devicePixelRatio,1));const Fl=new Pu(window.innerWidth,window.innerHeight,{minFilter:jo,magFilter:jo,format:Xr});Fl.samples=4;const fr=new Mu(dt);fr.compileEquirectangularShader(),new Nu(Ga).setDataType(Mi).load("graphics/sky.hdr",e=>{e.wrapS=Br,e.offset.x=o.lights.skyboxRotation/360;const t=fr.fromEquirectangular(e).texture;Uo.environment=t,e.dispose(),fr.dispose()});const ic=new Tu(o.lights.ambient.color,o.lights.ambient.intensity);Uo.add(ic);const Cl=new Fu(o.lights.directional.color,o.lights.directional.intensity);Cl.position.set(o.lights.directional.position.x,o.lights.directional.position.y,o.lights.directional.position.z),Uo.add(Cl);const fo=new Bu(dt,Fl),sc=new Ru(Uo,De);fo.addPass(sc);const Yt=new qo(new ft(window.innerWidth,window.innerHeight),Uo,De);fo.addPass(Yt);const Kt=new qo(new ft(window.innerWidth,window.innerHeight),Uo,De);fo.addPass(Kt);const eo=new qo(new ft(window.innerWidth,window.innerHeight),Uo,De);fo.addPass(eo);let an=null;if(!Oa){an=new Ti(Ou);const e=dt.getPixelRatio();an.material.uniforms.resolution.value.x=1/(window.innerWidth*e),an.material.uniforms.resolution.value.y=1/(window.innerHeight*e),fo.addPass(an)}function kl(e,t,n){const s=e.depthMaterial||e.materialDepth,d=e.prepareMaskMaterial||e.materialPrepareMask;s&&(s.skinning=t,s.morphTargets=n,s.needsUpdate=!0),d&&(d.skinning=t,d.morphTargets=n,d.vertexShader=`
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
      `,d.needsUpdate=!0)}kl(Kt,!0,!1),kl(eo,!1,!0),[Yt,Kt,eo].forEach(e=>{e.enabled=!1,e.edgeStrength=6,e.edgeGlow=1,e.edgeThickness=2,e.visibleEdgeColor.set("#ffffff"),e.hiddenEdgeColor.set("#000000")});function Ne(){[Yt,Kt,eo].forEach(e=>{e.selectedObjects=[],e.enabled=!1})}function pr(e,t){Ne();const n=Array.isArray(e)?e:[e];Yt.selectedObjects=n,Yt.visibleEdgeColor.set(t),Yt.enabled=n.length>0}function Ll(e,t){Ne();const n=Array.isArray(e)?e:[e];Kt.selectedObjects=n,Kt.visibleEdgeColor.set(t),Kt.enabled=n.length>0}function rc(e,t){Ne();const n=Array.isArray(e)?e:[e];eo.selectedObjects=n,eo.visibleEdgeColor.set(t),eo.enabled=n.length>0}function lc(e,t){const n=dt.getPixelRatio();[Yt,Kt,eo].forEach(s=>{typeof s.setSize=="function"&&s.setSize(e*n,t*n)}),J&&J.uniforms.resolution&&J.uniforms.resolution.value.set(e*n,t*n)}const dc={uniforms:{tDiffuse:{value:null},offset:{value:o.vignette.offset},darkness:{value:o.vignette.darkness},colorTop:{value:new ne(o.site.backgroundColorTop)},colorBottom:{value:new ne(o.site.backgroundColorBottom)},vignetteEnabled:{value:window.innerWidth<=window.innerHeight?o.vignette.enabledMobile:o.vignette.enabled},useSolidBackground:{value:!1},solidBackgroundColor:{value:new ne(328968)}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
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
    `};wo=new Ti(dc),fo.addPass(wo);const cc={uniforms:{tDiffuse:{value:null},resolution:{value:new ft(window.innerWidth,window.innerHeight)},mode:{value:0},uTime:{value:0},colorLevels:{value:6},pixelSize:{value:2},ditherStrength:{value:.25},darkColor:{value:new ne(328976)},lightColor:{value:new ne(15132410)},pixelatedPixelSize:{value:4},pixelatedColorLevels:{value:16},scanlineIntensity:{value:.08},gbPixelSize:{value:3},gbC0:{value:new ne(997391)},gbC1:{value:new ne(3170864)},gbC2:{value:new ne(9153551)},gbC3:{value:new ne(10206223)},vhsAberration:{value:.006},vhsJitter:{value:.003},vhsNoise:{value:.12},halftoneScale:{value:4},halftoneAngle:{value:.785398},blueprintBg:{value:new ne(6970)},blueprintLine:{value:new ne(61695)},blueprintGrid:{value:32},thC0:{value:new ne(51)},thC1:{value:new ne(5570696)},thC2:{value:new ne(13369446)},thC3:{value:new ne(16746496)},thC4:{value:new ne(16777215)},asciiCellSize:{value:8},asciiColorLevels:{value:4},asciiBrightness:{value:1.1},asciiContrast:{value:1.8},asciiCharacterWeight:{value:1.3},asciiUseSolidColor:{value:!0},asciiDebugRawScene:{value:!1},asciiColor:{value:new ne(65382)},anaglyphShift:{value:.005}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
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
    `};J=new Ti(cc),fo.addPass(J);let Mt,is;const uc={uTime:{value:0},uRainbowIntensity:{value:o.plate.rainbow.intensity},uRainbowScale:{value:o.plate.rainbow.scale},uRainbowAngleFactor:{value:o.plate.rainbow.angleFactor},uRainbowShimmer:{value:o.plate.rainbow.shimmer},uRainbowShimmerSpeed:{value:o.plate.rainbow.shimmerSpeed},uRainbowCenterSmoothness:{value:o.plate.rainbow.centerSmoothness},uRainbowCenterOffset:{value:new ft(...o.plate.rainbow.centerOffset)},uPaletteA:{value:new q(...o.plate.rainbow.paletteA)},uPaletteB:{value:new q(...o.plate.rainbow.paletteB)},uPaletteC:{value:new q(...o.plate.rainbow.paletteC)},uPaletteD:{value:new q(...o.plate.rainbow.paletteD)},uRainbowFresnelMultiply:{value:o.plate.rainbow.fresnelMultiply},uSkyboxRotation:{value:o.lights.skyboxRotation*Math.PI/180}},Il=new As({color:new ne(...o.plate.color.slice(0,3)),transmission:o.plate.glass.refractionIntensity,opacity:1,transparent:!0,roughness:o.plate.glass.roughness,metalness:.05,ior:o.plate.glass.ior,side:Tt,depthWrite:!0});Il.onBeforeCompile=e=>{Object.assign(e.uniforms,uc),Mt=e;let t=Fd.envmap_physical_pars_fragment;t=t.replace(/vec4\s+envMapColor\s*=\s*textureCubeUV\s*\(\s*envMap\s*,\s*reflectVec\s*,\s*roughness\s*\)\s*;/g,"vec4 envMapColor = textureCubeUV( envMap, rotateY(reflectVec, uSkyboxRotation), roughness );"),t=t.replace(/vec4\s+envMapColor\s*=\s*textureCubeUV\s*\(\s*envMap\s*,\s*worldNormal\s*,\s*1\.0\s*\)\s*;/g,"vec4 envMapColor = textureCubeUV( envMap, rotateY(worldNormal, uSkyboxRotation), 1.0 );"),e.fragmentShader=e.fragmentShader.replace("#include <envmap_physical_pars_fragment>",`uniform float uSkyboxRotation;
       vec3 rotateY(vec3 v, float angle) {
         float c = cos(angle);
         float s = sin(angle);
         return vec3(v.x * c - v.z * s, v.y, v.x * s + v.z * c);
       }
       ${t}`),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
       varying vec2 vLocalPosition;`),e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       vLocalPosition = position.xz;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
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
       uniform float uRainbowFresnelMultiply;`),e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
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
       diffuseColor.rgb = mix(diffuseColor.rgb, rainbowColor, uRainbowIntensity * intensityMultiplier * fresnelCustom);`)};const ca=new Cu(Ga);if(ca.setResourcePath("graphics/"),typeof Nd<"u"){const e=new Nd;e.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/"),ca.setDRACOLoader(e)}const Dl=new As({color:new ne(o.gel.glass.color),transmission:o.gel.glass.transmission,ior:o.gel.glass.ior,roughness:o.gel.glass.roughness,clearcoat:o.gel.glass.clearcoat,clearcoatRoughness:o.gel.glass.clearcoatRoughness,side:Tt,transparent:!1,depthWrite:!1,opacity:o.gel.glass.opacity}),fc={uSkyboxRotation:{value:o.lights.skyboxRotation*Math.PI/180}};Dl.onBeforeCompile=e=>{Object.assign(e.uniforms,fc),is=e;let t=Fd.envmap_physical_pars_fragment;t=t.replace(/vec4\s+envMapColor\s*=\s*textureCubeUV\s*\(\s*envMap\s*,\s*reflectVec\s*,\s*roughness\s*\)\s*;/g,"vec4 envMapColor = textureCubeUV( envMap, rotateY(reflectVec, uSkyboxRotation), roughness );"),t=t.replace(/vec4\s+envMapColor\s*=\s*textureCubeUV\s*\(\s*envMap\s*,\s*worldNormal\s*,\s*1\.0\s*\)\s*;/g,"vec4 envMapColor = textureCubeUV( envMap, rotateY(worldNormal, uSkyboxRotation), 1.0 );"),e.fragmentShader=e.fragmentShader.replace("#include <envmap_physical_pars_fragment>",`uniform float uSkyboxRotation;
       vec3 rotateY(vec3 v, float angle) {
         float c = cos(angle);
         float s = sin(angle);
         return vec3(v.x * c - v.z * s, v.y, v.x * s + v.z * c);
       }
       ${t}`),e.fragmentShader=e.fragmentShader.replace("#include <dither_fragment>",`#include <dither_fragment>
       vec3 gelReflectVec = reflect(-vViewPosition, normal);
       vec4 gelEnvSky = textureCubeUV(envMap, rotateY(gelReflectVec, uSkyboxRotation), roughness);
       gl_FragColor.rgb += gelEnvSky.rgb * 1.5;
      `)},ca.load("geometry/dish.glb",e=>{if(yt=e.scene,yt.traverse(n=>{if(n.isMesh){if(n.name.toLowerCase().includes("gel")?(n.material=Dl,n.renderOrder=2,at=n):(n.material=Il,n.renderOrder=1,wn=n),typeof Od<"u")try{n.geometry=Od.mergeVertices(n.geometry)}catch{}n.geometry.computeVertexNormals()}}),yt){yt.position.copy(Bi),yt.rotation.set(va.x,va.y,va.z);const n=o.plate.scale;yt.scale.set(n,n,n)}fe.add(yt)});{const e=o.questionBox.shadowY,{rx:t,rz:n}=Sl(),d=new _s(0,0,t,n,0,2*Math.PI,!1,0).getPoints(64),v=new ha().setFromPoints(d),g=new Ss({color:16711680}),f=new Ps(v,g);f.rotation.x=-Math.PI/2,f.position.y=e+.005,fe.add(f),Hs=f;const F=da(),B=new _i(F,32,16),Y=new Je({color:16711680,wireframe:!0,transparent:!0,opacity:.15}),N=new _t(B,Y),G=R&&o.questionBox.mobile?o.questionBox.mobile.position:o.questionBox.position;N.position.set(G.x,e,G.z),fe.add(N),Xi=N;const W=da(),ve=new _i(W,32,16),ae=new Je({color:16711680,wireframe:!0,transparent:!0,opacity:.15});ei=new _t(ve,ae),fe.add(ei);const K=da(),Ae=new _i(K,32,16),ke=new Je({color:16711680,wireframe:!0,transparent:!0,opacity:.15});ti=new _t(Ae,ke),fe.add(ti);const Le=da(),xe=new _i(Le,32,16),se=new Je({color:16711680,wireframe:!0,transparent:!0,opacity:.15});Sn=new _t(xe,se);const Ce=R&&o.games3D&&o.games3D.mobile?o.games3D.mobile.position:o.games3D.desktop?o.games3D.desktop.position:{x:3.8,z:1.5};Sn.position.set(Ce.x,e,Ce.z),fe.add(Sn);const Ye=da(),Ee=new _i(Ye,32,16),D=new Je({color:16711680,wireframe:!0,transparent:!0,opacity:.15});En=new _t(Ee,D);const i=R&&o.ar3D&&o.ar3D.mobile?o.ar3D.mobile.position:o.ar3D&&o.ar3D.desktop?o.ar3D.desktop.position:{x:-2,z:4.3};En.position.set(i.x,e,i.z),fe.add(En),$a=new fn,$a.renderOrder=20;const p=o.linkedin3D&&o.linkedin3D.desktop&&Array.isArray(o.linkedin3D.desktop.spawnPositions)?o.linkedin3D.desktop.spawnPositions:[],m=o.linkedin3D&&o.linkedin3D.mobile&&Array.isArray(o.linkedin3D.mobile.spawnPositions)?o.linkedin3D.mobile.spawnPositions:[],r=new Cd(.18,.18,.18),y=new Je({color:65382,wireframe:!1,transparent:!0,opacity:.85}),_=new Je({color:39423,wireframe:!1,transparent:!0,opacity:.85});p.forEach(w=>{const H=new _t(r,y);H.position.set(w.x,w.y!==void 0?w.y:.63,w.z),$a.add(H)}),m.forEach(w=>{const H=new _t(r,_);H.position.set(w.x,w.y!==void 0?w.y:.63,w.z),$a.add(H)}),fe.add($a);const l=new vt({roughness:1,metalness:0}),C=mn(new Ur(Ga),"graphics/li_logo_blue.webp",l,o.linkedin3D.unloadedColor);C&&(C.encoding=Si),l.map=C,te=new fn,te.renderOrder=10,ca.load("geometry/bug_cube.glb",w=>{const H=w.scene;H.traverse(k=>{if(k.isMesh){if(k.isSkinnedMesh?(k.material=l.clone(),k.material.skinning=!0):k.material=l,k.geometry&&k.geometry.attributes&&k.geometry.attributes.uv){const S=k.geometry.attributes.uv;for(let j=0;j<S.count;j++)S.setY(j,1-S.getY(j));S.needsUpdate=!0}k.geometry.computeVertexNormals()}}),te.add(H);const ee=w.animations||[];if(ee&&ee.length>0){Ra=new kd(H);const k=ee.find(Te=>Te.name.toLowerCase().includes("inspect"));k&&(or=Ra.clipAction(k),or.setLoop(Pi,1/0));const S=ee.find(Te=>Te.name.toLowerCase().includes("walk"));S&&(mi=Ra.clipAction(S),mi.setLoop(Pi,1/0));const j=ee.find(Te=>Te.name.toLowerCase().includes("fall"));j&&(Nn=Ra.clipAction(j),Nn.setLoop(Ld,1),Nn.clampWhenFinished=!0);const Ge=ee.find(Te=>Te.name.toLowerCase().includes("stand"));Ge&&(zn=Ra.clipAction(Ge),zn.setLoop(Ld,1),zn.clampWhenFinished=!0),Ra.addEventListener("finished",Te=>{Nn&&Te.action===Nn?Fc():zn&&Te.action===zn&&Cc()})}H.traverse(k=>{k.isSkinnedMesh});const z=_l();te.position.set(z.x,z.y,z.z);const M=o.linkedin3D.scale;te.scale.set(M,M,M),fe.add(te);const E=o.linkedin3D.shadowOpacity;Ui=new Je({map:Wo("graphics/shadow.webp"),transparent:!0,opacity:E,depthWrite:!1,depthTest:!0,side:Tt,blending:pn});const T=new Vo(1.5,1.5);Mo=new _t(T,Ui),Mo.rotation.x=-Math.PI/2;const I=o.linkedin3D.shadowY;Mo.position.set(z.x,I,z.z),Mo.renderOrder=3,fe.add(Mo),Al=!0,mi&&(mi.reset().play(),ar="walk")},void 0,w=>{console.error("[GLTFLoader] Failed to load bug_cube.glb",w)})}const Xn=new Ur(Ga),mr=Wo("graphics/dots_normals.webp");mr.wrapS=Br,mr.wrapT=Br;const pc=Wo("graphics/shadow.webp"),mc=o.questionBox.shadowOpacity;Un=new Je({map:pc,transparent:!0,opacity:mc,depthWrite:!1,depthTest:!0,side:Tt,blending:pn});const hc=new Vo(1.5,1.5);{lt=new _t(hc,Un),lt.rotation.x=-Math.PI/2;const e=o.questionBox,t=R&&e.mobile?e.mobile.position:e.desktop?e.desktop.position:e.position,n=e.shadowY;lt.position.set(t.x,n,t.z),lt.renderOrder=3,fe.add(lt)}{const e=o.questionBox.glass;Xt=new As({color:e.color,transparent:!0,opacity:e.opacity,transmission:e.transmission,roughness:e.roughness,ior:e.ior,reflectivity:e.reflectivity,clearcoat:e.clearcoat,clearcoatRoughness:e.clearcoatRoughness,depthWrite:!1});const t=o.questionBox.metal;No=new vt({color:t.color,metalness:t.metalness,roughness:t.roughness,normalMap:mr}),No.normalScale&&No.normalScale.set(t.normalScale,t.normalScale);const n=new Je({transparent:!0,opacity:1,side:gn});n.map=mn(Xn,"graphics/question.webp",n,o.questionBox.unloadedColor),ca.load("geometry/question_box.glb",s=>{const d=s.scene;if(d.children.sort((v,g)=>{const f=(v.name||"").toLowerCase().includes("exterior")?1:0,F=(g.name||"").toLowerCase().includes("exterior")?1:0;return f-F}),d.traverse(v=>{if(v.isMesh){const g=(v.name+" "+(v.parent?v.parent.name:"")).toLowerCase();g.includes("interior")?(v.material=No,v.renderOrder=10):g.includes("plane")?(v.material=n,v.renderOrder=11,on=v):(g.includes("exterior"),v.material=Xt,v.userData.isQuestionBoxExterior=!0,v.renderOrder=12)}}),re=d,re.renderOrder=10,o.questionBox){const v=o.questionBox,g=R&&v.mobile?v.mobile.position:v.desktop?v.desktop.position:v.position;d.position.set(g.x,g.y,g.z),d.userData.baseX=g.x,d.userData.baseY=g.y,d.userData.baseZ=g.z;const f=v.scale;d.scale.set(f,f,f)}fe.add(d)},void 0,s=>{})}if(o.houdini3D&&o.houdini3D.enabled!==!1){const e=Wo("graphics/toyspeclowres.webp"),t=o.houdini3D.material||{};ns=new ku({color:new ne(t.color!==void 0?t.color:16777215),specularMap:e,shininess:t.shininess!==void 0?t.shininess:30,specular:new ne(t.specular!==void 0?t.specular:2236962),morphTargets:!0,skinning:!0});const n=mn(Xn,"graphics/toylowres.webp",ns,o.houdini3D.unloadedColor);n&&(n.encoding=Si),ns.map=n;const s=Wo("graphics/shadow.webp"),d=o.houdini3D.shadowOpacity;zo=new Je({map:s,transparent:!0,opacity:d,depthWrite:!1,depthTest:!0,side:Tt,blending:pn});const v=new Vo(1.5,1.5);tt=new _t(v,zo),tt.rotation.x=-Math.PI/2;const g=R?o.houdini3D.mobile:o.houdini3D.desktop,f=o.houdini3D.shadowY;tt.position.set(g.position.x,f,g.position.z),tt.renderOrder=3,fe.add(tt),ca.load("geometry/rubbertoy.glb",F=>{const B=F.scene;Tl=[],B.traverse(G=>{if(G.isMesh){G.renderOrder=10;const W=ns.clone();if(W.morphTargets=!0,W.skinning=G.isSkinnedMesh===!0,G.material=W,G.geometry&&G.geometry.attributes&&G.geometry.attributes.uv){const ve=G.geometry.attributes.uv;for(let ae=0;ae<ve.count;ae++)ve.setY(ae,1-ve.getY(ae));ve.needsUpdate=!0}if(typeof G.updateMorphTargets=="function"&&G.updateMorphTargets(),G.morphTargetInfluences)for(let ve=0;ve<G.morphTargetInfluences.length;ve++)G.morphTargetInfluences[ve]=0;Tl.push(G)}}),oe=B,oe.renderOrder=10;const Y=g.position;B.position.set(Y.x,Y.y,Y.z),B.userData.baseX=Y.x,B.userData.baseY=Y.y,B.userData.baseZ=Y.z;const N=o.houdini3D.scale;if(B.scale.set(N,N,N),o.houdini3D.rotation){const G=o.houdini3D.rotation;B.rotation.set(0*Math.PI/180,G.y*Math.PI/180,0*Math.PI/180)}fe.add(B)},void 0,F=>{})}if(o.web3D&&o.web3D.enabled!==!1){const e=o.web3D,t=e.materials||{},n=t.grid||{};ea=new vt({color:new ne(n.color!==void 0?n.color:16777215),emissive:new ne(n.emissive!==void 0?n.emissive:16777215),emissiveIntensity:n.emissiveIntensity!==void 0?n.emissiveIntensity:1,roughness:n.roughness!==void 0?n.roughness:.2,metalness:n.metalness!==void 0?n.metalness:.1});const s=mn(Xn,t.grid&&t.grid.emissiveMap||"graphics/grid.webp",ea,o.web3D.unloadedColor,"emissive");ea.emissiveMap=s;const d=t.antenna||{};ll=new vt({color:new ne(d.color!==void 0?d.color:13421772),roughness:d.roughness!==void 0?d.roughness:.3,metalness:d.metalness!==void 0?d.metalness:.8});const v=t.moon||{};An=new vt({color:new ne(v.color!==void 0?v.color:16777215),emissive:new ne(v.emissive!==void 0?v.emissive:16777215),emissiveIntensity:v.emissiveIntensity!==void 0?v.emissiveIntensity:1,roughness:v.roughness!==void 0?v.roughness:.3,metalness:v.metalness!==void 0?v.metalness:.1});const g=t.signal||{};zi=new vt({color:new ne(g.color!==void 0?g.color:0),emissive:new ne(g.emissive!==void 0?g.emissive:2254847),emissiveIntensity:g.emissiveIntensity!==void 0?g.emissiveIntensity:1.2,roughness:g.roughness!==void 0?g.roughness:.3,metalness:g.metalness!==void 0?g.metalness:.1,side:gn});const f=Wo("graphics/shadow.webp"),F=e.shadowOpacity!==void 0?e.shadowOpacity:.85;Ni=new Je({map:f,transparent:!0,opacity:F,depthWrite:!1,depthTest:!0,side:Tt,blending:pn});const B=new Vo(1.5,1.5);Po=new _t(B,Ni),Po.rotation.x=-Math.PI/2;const Y=R?e.mobile.position:e.desktop.position,N=e.shadowY!==void 0?e.shadowY:.33;Po.position.set(Y.x,N,Y.z),Po.renderOrder=3,fe.add(Po),Us=null,Xs=null,Ys=null,ca.load("geometry/globe.glb",G=>{const W=G.scene;W.traverse(ae=>{if(ae.isMesh){const K=(ae.name||"").toLowerCase();K.includes("moon")?(ae.material=An,Ko=ae):K.includes("antenna")?ae.material=ll:K.includes("signal_inner")||K.includes("signalinner")||K.includes("signal_1")||K.includes("signal1")?(ae.material=zi,Us=ae):K.includes("signal_middle")||K.includes("signalmiddle")||K.includes("signal_2")||K.includes("signal2")?(ae.material=zi,Xs=ae):K.includes("signal_outer")||K.includes("signalouter")||K.includes("signal_3")||K.includes("signal3")?(ae.material=zi,Ys=ae):K.includes("globe")?(ae.material=ea,Ht=ae):ae.material=ea}}),he=W,he.renderOrder=10,W.position.set(Y.x,Y.y,Y.z),W.userData.baseX=Y.x,W.userData.baseY=Y.y,W.userData.baseZ=Y.z;const ve=e.scale||.62;W.scale.set(ve,ve,ve),e.rotation&&W.rotation.set((e.rotation.x||0)*Math.PI/180,(e.rotation.y||0)*Math.PI/180,(e.rotation.z||0)*Math.PI/180),fe.add(W)},void 0,G=>{})}if(o.games3D&&o.games3D.enabled!==!1){const e=o.games3D,t=e.material||{},n=e.pop&&e.pop.material||{};Mn=new vt({color:new ne(t.color!==void 0?t.color:1942906),roughness:t.roughness!==void 0?t.roughness:.2,metalness:t.metalness!==void 0?t.metalness:.8}),ni=new vt({color:new ne(n.color!==void 0?n.color:14034984),roughness:n.roughness!==void 0?n.roughness:.2,metalness:n.metalness!==void 0?n.metalness:.8});const s=Wo("graphics/shadow.webp"),d=e.shadowOpacity;Pa=new Je({map:s,transparent:!0,opacity:d,depthWrite:!1,depthTest:!0,side:Tt,blending:pn});const v=new Vo(1.5,1.5);We=new _t(v,Pa),We.rotation.x=-Math.PI/2;const g=R?e.mobile.position:e.desktop.position,f=e.shadowY;We.position.set(g.x,f,g.z),We.renderOrder=3,fe.add(We),ca.load("geometry/alien.glb",F=>{const B=F.scene;go=null,vo=null,zt=null,Vt=null,B.traverse(N=>{if(N.isMesh){N.renderOrder=10;const G=(N.name||"").toLowerCase();G.includes("pop0")||G==="pop0"?(zt=N,N.material=ni,N.visible=!1):G.includes("pop1")||G==="pop1"||G.includes("pop")?(Vt=N,N.material=ni,N.visible=!1):G.includes("pose0")?(go=N,N.material=Mn,N.visible=!0):G.includes("pose1")?(vo=N,N.material=Mn,N.visible=!1):N.material=Mn}}),O=B,O.renderOrder=10,B.position.set(g.x,g.y,g.z),B.userData.baseX=g.x,B.userData.baseY=g.y,B.userData.baseZ=g.z,B.userData.currentHoverY=0;const Y=e.scale;B.scale.set(Y,Y,Y),e.rotation&&B.rotation.set(0*Math.PI/180,e.rotation.y*Math.PI/180,e.rotation.z*Math.PI/180),fe.add(B)},void 0,F=>{})}if(o.ar3D&&o.ar3D.enabled!==!1){const e=o.ar3D,t=e.materials||{},n=t.phone||{};Tn=new vt({color:new ne(n.color!==void 0?n.color:2040877),roughness:n.roughness!==void 0?n.roughness:.25,metalness:n.metalness!==void 0?n.metalness:.75});const s=t.screen||{};Wt=new vt({color:new ne(s.color!==void 0?s.color:461588),emissive:new ne(s.emissive!==void 0?s.emissive:16777215),emissiveIntensity:s.emissiveIntensity!==void 0?s.emissiveIntensity:1,roughness:s.roughness!==void 0?s.roughness:.1,metalness:s.metalness!==void 0?s.metalness:.9,skinning:!0}),jt=mn(Xn,s&&s.emissiveMap||"graphics/emojiface.webp",Wt,o.ar3D.unloadedColor,"emissive"),jt&&(jt.encoding=Si),Co=mn(Xn,s&&s.hoverEmissiveMap||"graphics/emojieyes.webp",null,o.ar3D.unloadedColor,"emissive"),Co&&(Co.encoding=Si),Ta=mn(Xn,s&&s.clickEmissiveMap||"graphics/emojihuh.webp",null,o.ar3D.unloadedColor,"emissive"),Ta&&(Ta.encoding=Si),Wt.emissiveMap=jt;const d=t.camera||{};Fn=new vt({color:new ne(d.color!==void 0?d.color:1118481),roughness:d.roughness!==void 0?d.roughness:.1,metalness:d.metalness!==void 0?d.metalness:.9});const v=t.cameraHouse||{};Wi=new vt({color:new ne(v.color!==void 0?v.color:1711654),roughness:v.roughness!==void 0?v.roughness:.3,metalness:v.metalness!==void 0?v.metalness:.7});const g=t.shoes||{};Cn=new vt({color:new ne(g.color!==void 0?g.color:2236962),roughness:g.roughness!==void 0?g.roughness:.6,metalness:g.metalness!==void 0?g.metalness:.2});const f=t.socks||{};kn=new vt({color:new ne(f.color!==void 0?f.color:15658734),roughness:f.roughness!==void 0?f.roughness:.8,metalness:f.metalness!==void 0?f.metalness:0});const F=Wo("graphics/shadow.webp"),B=e.shadowOpacity;$i=new Je({map:F,transparent:!0,opacity:B,depthWrite:!1,depthTest:!0,side:Tt,blending:pn});const Y=new Vo(1.5,1.5);co=new _t(Y,$i),co.rotation.x=-Math.PI/2;const N=R&&e.mobile?e.mobile.position:e.desktop.position,G=e.shadowY;co.position.set(N.x,G,N.z),co.renderOrder=3,fe.add(co);const W=ls(),{rx:ve,rz:ae}=Zl(),Ae=new _s(0,0,ve,ae,0,2*Math.PI,!1,0).getPoints(64),ke=new ha().setFromPoints(Ae),Le=new Ss({color:65535});La=new Ps(ke,Le),La.rotation.x=-Math.PI/2,La.position.set(W.x,G+.005,W.z),La.visible=e.showDebug===!0,fe.add(La),ca.load("geometry/phone.glb",xe=>{const se=xe.scene;se.traverse(D=>{if(D.isMesh){D.renderOrder=10;const i=Array.isArray(D.material)?D.material.map(m=>m&&m.name||"").join(" "):D.material&&D.material.name||"",p=((D.name||"")+" "+(D.parent&&D.parent.name||"")+" "+i).toLowerCase();if(Array.isArray(D.material))D.material=D.material.map(m=>{const r=(m&&m.name||"").toLowerCase();let y=Tn;return r.includes("screen")?y=Wt:r.includes("camera")&&!r.includes("house")?y=Fn:r.includes("camerahouse")||r.includes("house")?y=Wi:r.includes("sock")?y=kn:r.includes("shoe")&&(y=Cn),D.isSkinnedMesh&&y!==Wt&&(y=y.clone(),y.skinning=!0),y}),Ia.push({mesh:D,isMulti:!0,originalMaterials:[...D.material]});else if(p.includes("sock"))D.material=D.isSkinnedMesh?kn.clone():kn,D.isSkinnedMesh&&(D.material.skinning=!0);else if(p.includes("shoe"))D.material=D.isSkinnedMesh?Cn.clone():Cn,D.isSkinnedMesh&&(D.material.skinning=!0);else if(p.includes("camera")&&!p.includes("house"))D.material=D.isSkinnedMesh?Fn.clone():Fn,D.isSkinnedMesh&&(D.material.skinning=!0);else if(p.includes("camerahouse")||p.includes("house"))D.material=D.isSkinnedMesh?Wi.clone():Wi,D.isSkinnedMesh&&(D.material.skinning=!0),Ia.push({mesh:D,isMulti:!1,originalMaterial:D.material});else if(p.includes("screen")){if(D.material=Wt,D.isSkinnedMesh&&(D.material.skinning=!0),Ka=D,D.geometry&&D.geometry.attributes&&D.geometry.attributes.uv){const m=D.geometry.attributes.uv;for(let r=0;r<m.count;r++)m.setY(r,1-m.getY(r));m.needsUpdate=!0}}else p.includes("leg")?(D.material=D.isSkinnedMesh?Tn.clone():Tn,D.isSkinnedMesh&&(D.material.skinning=!0),Ia.push({mesh:D,isMulti:!1,originalMaterial:D.material})):(D.material=D.isSkinnedMesh?Tn.clone():Tn,D.isSkinnedMesh&&(D.material.skinning=!0),Ia.push({mesh:D,isMulti:!1,originalMaterial:D.material}))}}),L=se,L.renderOrder=10;const Ce=ls();se.position.set(N.x,N.y,N.z),se.userData.baseX=Ce.x,se.userData.baseY=N.y,se.userData.baseZ=Ce.z,se.userData.currentHoverY=0;const Ye=e.scale;if(se.scale.set(Ye,Ye,Ye),e.rotation){const i=e.rotation.y*Math.PI/180+Math.PI;se.rotation.set(0*Math.PI/180,i,0*Math.PI/180)}Fa=[],se.traverse(D=>{D.isSkinnedMesh&&Fa.push(D)});const Ee=xe.animations||[];if(Ee&&Ee.length>0){en=new kd(se);const D=Ee.find(m=>m.name.toLowerCase().includes("walk"))||Ee[0];D&&(Ca=en.clipAction(D),Ca.setLoop(Pi,1/0),Ca.enabled=!0,Ca.setEffectiveWeight(0),Ca.play());const i=Ee.find(m=>{const r=m.name.toLowerCase();return r.includes("stand")||r.includes("neutral")||r.includes("idle")||r.includes("pose")||r.includes("stance")});i&&(ka=en.clipAction(i),ka.setLoop(Pi,1/0),ka.enabled=!0,ka.setEffectiveWeight(1),ka.play());const p=Ee.find(m=>m.name.toLowerCase().includes("shake"));p&&(Ct=en.clipAction(p),Ct.setLoop(Pi,1/0),Ct.enabled=!0,Ct.setEffectiveWeight(0),Ct.play())}fe.add(se)},void 0,xe=>{console.error("[GLTFLoader] Failed to load phone.glb",xe)})}Bi=new q(0,-.8,0),va=new q(0,0,0),Ec(),Ke=new Ms,so=new ft(-9999,-9999),os=!1;let nn=!1,hr={x:0},Na=0,to=0,Ao=0,gc=0,El=0,Bl=0;function Rl(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,"rgba(255, 255, 255, 1.0)"),n.addColorStop(.2,"rgba(255, 255, 220, 0.8)"),n.addColorStop(.6,"rgba(255, 220, 255, 0.2)"),n.addColorStop(1,"rgba(255, 255, 255, 0.0)"),t.fillStyle=n,t.beginPath(),t.arc(32,32,32,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.9)",t.lineWidth=3,t.beginPath(),t.moveTo(32,10),t.lineTo(32,54),t.moveTo(10,32),t.lineTo(54,32),t.stroke(),t.strokeStyle="rgba(255, 255, 255, 0.5)",t.lineWidth=1.5,t.beginPath(),t.moveTo(20,20),t.lineTo(44,44),t.moveTo(20,44),t.lineTo(44,20),t.stroke(),new Bd(e)}function vc(){const e=document.createElement("canvas");e.width=128,e.height=512;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,512);n.addColorStop(0,"rgba(255, 255, 255, 0.0)"),n.addColorStop(.15,"rgba(255, 255, 255, 0.7)"),n.addColorStop(.4,"rgba(255, 255, 255, 1.0)"),n.addColorStop(.75,"rgba(255, 255, 255, 0.4)"),n.addColorStop(1,"rgba(255, 255, 255, 0.0)");const s=t.createLinearGradient(0,0,128,0);return s.addColorStop(0,"rgba(255, 255, 255, 0.0)"),s.addColorStop(.5,"rgba(255, 255, 255, 1.0)"),s.addColorStop(1,"rgba(255, 255, 255, 0.0)"),t.fillStyle=n,t.fillRect(0,0,128,512),t.globalCompositeOperation="destination-in",t.fillStyle=s,t.fillRect(0,0,128,512),new Bd(e)}var Xo=!1,ht=!1;function Ol(){const e=document.getElementById("linkedin-desktop-wrapper"),t=document.getElementById("plaintext-link");window.innerWidth<=window.innerHeight?(A.style.visibility="hidden",e&&(e.style.visibility="hidden"),me.style.visibility="visible",t&&(t.style.display=ht?"flex":"none")):(ht&&ua(),A.style.visibility="visible",e&&(e.style.visibility="visible"),me.style.visibility="hidden",t&&(t.style.display="flex"))}function ua(){const e=document.getElementById("plaintext-link"),t=window.innerWidth<=window.innerHeight;ht?($.classList.remove("is-active"),Pe.style.setProperty("animation","mobileNavButtonTopOut 0.2s forwards"),be.style.setProperty("animation","mobileNavButtonMiddleOut 0.2s forwards"),Me.style.setProperty("animation","mobileNavButtonBottomOut 0.2s forwards"),ht=!1,t&&e&&(e.style.display="none"),ao(()=>{$.style.visibility="hidden"},200)):(ct()&&(oo(),Ve&&(Ve.style.visibility="hidden"),Oe&&(Oe.style.visibility="hidden"),Ft="main"),ue=!1,$.style.visibility="visible",requestAnimationFrame(()=>{$.classList.add("is-active")}),Pe.style.setProperty("animation","mobileNavButtonTopIn 0.3s forwards"),be.style.setProperty("animation","mobileNavButtonMiddleIn 0.3s forwards"),Me.style.setProperty("animation","mobileNavButtonBottomIn 0.3s forwards"),ht=!0,t&&e&&(e.style.display="flex"),ao(()=>{ct()||(ue=!0)},300))}function ss(){return Zt||uo}let kt=!1;function fa(){return!kt&&(ue||ct())}function bc(e,t){e&&(e.style.setProperty("animation","none"),e.offsetWidth,e.style.setProperty("animation",t))}function vi(...e){e.forEach(t=>{t&&(t._hoverActive=!1,t.classList.add("is-panel-open"),bc(t,"menuSelect 0.42s forwards"))})}function Nl(e=!1){re?(Os=e,Lo=performance.now()):ue=!0}function Bt(e,t){e&&e.classList.toggle("is-drawn",t)}function Yo(e,t){e&&(e.classList.toggle("is-opening",t),e.classList.toggle("is-closing",!t),t?(e.style.setProperty("--panel-enter-translate","translate3d(0, 0px, 0)"),e.style.setProperty("--panel-exit-translate","translate3d(0, 24px, 0)")):(e.style.setProperty("--panel-enter-translate","translate3d(0, 24px, 0)"),e.style.setProperty("--panel-exit-translate","translate3d(0, 24px, 0)")))}function ct(){return Ut||$t||Zt||uo||Do||sa||Eo||ra||Bo||la}function oo(e={}){Ut&&gr(e),Zt&&br(e),Do&&xr(e),Eo&&Ar(e),Bo&&Sr(e)}function zl(e={}){Ut||$t||(ct()&&oo({silentRespawn:!0}),Ut=!0,$t=!0,Zs=!!e.regrowQuestionBox,ue=!1,Va=!1,[Z,ge].forEach(t=>{t&&(t._hoverActive=!1,t.style.setProperty("animation","resetScaleBorder 0.25s forwards"))}),a.style.setProperty("cursor","default"),Ne(),Ve&&(Ve.style.visibility="hidden"),Oe&&(Oe.style.visibility="hidden"),qe.classList.add("is-visible"),Yo(ot,!0),Bt(ot,!1),Z.classList.add("is-panel-open"),ge.classList.add("is-panel-open"),requestAnimationFrame(()=>{Gt(),Ha(),qe.classList.add("is-active"),Bt(ot,!0),setTimeout(Ha,120),setTimeout(Ha,320)}),ao(()=>{$t=!1,kt=!1},480))}function gr(e={}){if(!Ut&&!$t)return;$t=!0,Ut=!1,a.style.setProperty("cursor","default"),Yo(ot,!1),Bt(ot,!1),qe.classList.remove("is-active"),Va=!1,Ne(),Z.style.setProperty("animation","resetScaleBorder 0.25s forwards"),Z.classList.remove("is-panel-open"),ge.style.setProperty("animation",""),ge.classList.remove("is-panel-open"),P&&(P._hoverActive=!1,P.style.setProperty("animation","shrink 0.25s forwards"));const t=Zs;Zs=!1;const n=!!(e&&e.silentRespawn);ao(()=>{qe.classList.remove("is-visible"),$t=!1,t?Nl(n):n||(ue=!0)},360)}pt.onclick=gr,ga.onclick=gr,ot.onclick=e=>{e.stopPropagation()};function vr(){Zt||uo||(ct()&&oo({silentRespawn:!0}),Zt=!0,uo=!0,ue=!1,na=!1,Dn=!1,Gr&&Gr(),[le,ie].forEach(e=>{e&&(e._hoverActive=!1,e.style.setProperty("animation","resetScaleBorder 0.25s forwards"))}),a.style.setProperty("cursor","default"),Ne(),Li.classList.add("is-visible"),Yo(yn,!0),Bt(yn,!1),le.classList.add("is-panel-open"),ie.classList.add("is-panel-open"),requestAnimationFrame(()=>{Wd(),Cs(),Li.classList.add("is-active"),Bt(yn,!0),setTimeout(Cs,120),setTimeout(Cs,320)}),ao(()=>{uo=!1,kt=!1},480))}function br(e={}){if(!Zt&&!uo)return;uo=!0,Zt=!1,a.style.setProperty("cursor","default"),Hr&&Hr(),Yo(yn,!1),Bt(yn,!1),Li.classList.remove("is-active"),na=!1,Ne(),le.style.setProperty("animation","resetScaleBorder 0.25s forwards"),le.classList.remove("is-panel-open"),ie.style.setProperty("animation",""),ie.classList.remove("is-panel-open"),P&&(P._hoverActive=!1,P.style.setProperty("animation","shrink 0.25s forwards"));const t=!!(e&&e.silentRespawn);ao(()=>{Li.classList.remove("is-visible"),uo=!1,hd(t)},360)}Qd.onclick=br,Vd.onclick=br,yn.onclick=e=>{e.stopPropagation()};function yr(){Do||sa||(ct()&&oo({silentRespawn:!0}),Do=!0,sa=!0,ue=!1,Ma=!1,nt.playHeaderVideo&&nt.playHeaderVideo(),[Q,Se].forEach(e=>{e&&(e._hoverActive=!1,e.style.setProperty("animation","resetScaleBorder 0.25s forwards"))}),a.style.setProperty("cursor","default"),Ne(),nt.overlay.classList.add("is-visible"),Yo(nt.panel,!0),Bt(nt.panel,!1),Q.classList.add("is-panel-open"),Se.classList.add("is-panel-open"),requestAnimationFrame(()=>{nt.updateBorderPaths(),nt.updateScrollIndicators(),nt.overlay.classList.add("is-active"),Bt(nt.panel,!0),setTimeout(nt.updateScrollIndicators,120),setTimeout(nt.updateScrollIndicators,320)}),ao(()=>{sa=!1,kt=!1},480))}function xr(e={}){if(!Do&&!sa)return;sa=!0,Do=!1,a.style.setProperty("cursor","default"),nt.pauseHeaderVideo&&nt.pauseHeaderVideo(),Yo(nt.panel,!1),Bt(nt.panel,!1),nt.overlay.classList.remove("is-active"),Ma=!1,Ne(),Q.style.setProperty("animation","resetScaleBorder 0.25s forwards"),Q.classList.remove("is-panel-open"),Se.style.setProperty("animation",""),Se.classList.remove("is-panel-open");const t=!!(e&&e.silentRespawn);ao(()=>{nt.overlay.classList.remove("is-visible"),sa=!1,cd(t)},360)}nt.blur.onclick=xr,nt.closeButton.onclick=xr,nt.panel.onclick=e=>{e.stopPropagation()};function wr(){Eo||ra||(ct()&&oo({silentRespawn:!0}),Eo=!0,ra=!0,ue=!1,ya=!1,it.playHeaderVideo&&it.playHeaderVideo(),[U,pe].forEach(e=>{e&&(e._hoverActive=!1,e.style.setProperty("animation","resetScaleBorder 0.25s forwards"))}),a.style.setProperty("cursor","default"),Ne(),it.overlay.classList.add("is-visible"),Yo(it.panel,!0),Bt(it.panel,!1),U.classList.add("is-panel-open"),pe.classList.add("is-panel-open"),requestAnimationFrame(()=>{it.updateBorderPaths(),it.updateScrollIndicators(),it.overlay.classList.add("is-active"),Bt(it.panel,!0),setTimeout(it.updateScrollIndicators,120),setTimeout(it.updateScrollIndicators,320)}),ao(()=>{ra=!1,kt=!1},480))}function Ar(e={}){if(!Eo&&!ra)return;ra=!0,Eo=!1,a.style.setProperty("cursor","default"),it.pauseHeaderVideo&&it.pauseHeaderVideo(),Yo(it.panel,!1),Bt(it.panel,!1),it.overlay.classList.remove("is-active"),ya=!1,Ne(),U.style.setProperty("animation","resetScaleBorder 0.25s forwards"),U.classList.remove("is-panel-open"),pe.style.setProperty("animation",""),pe.classList.remove("is-panel-open");const t=!!(e&&e.silentRespawn);ao(()=>{it.overlay.classList.remove("is-visible"),ra=!1,pd(t)},360)}it.blur.onclick=Ar,it.closeButton.onclick=Ar,it.panel.onclick=e=>{e.stopPropagation()};function _r(){Bo||la||(ct()&&oo({silentRespawn:!0}),Bo=!0,la=!0,ue=!1,Wa=!1,st.playHeaderVideo&&st.playHeaderVideo(),[ce,X].forEach(e=>{e&&(e._hoverActive=!1,e.style.setProperty("animation","resetScaleBorder 0.25s forwards"))}),a.style.setProperty("cursor","default"),Ne(),st.overlay.classList.add("is-visible"),Yo(st.panel,!0),Bt(st.panel,!1),ce.classList.add("is-panel-open"),X.classList.add("is-panel-open"),requestAnimationFrame(()=>{st.updateBorderPaths(),st.updateScrollIndicators(),st.overlay.classList.add("is-active"),Bt(st.panel,!0),setTimeout(st.updateScrollIndicators,120),setTimeout(st.updateScrollIndicators,320)}),ao(()=>{la=!1,kt=!1},480))}function Sr(e={}){if(!Bo&&!la)return;la=!0,Bo=!1,a.style.setProperty("cursor","default"),st.pauseHeaderVideo&&st.pauseHeaderVideo(),Yo(st.panel,!1),Bt(st.panel,!1),st.overlay.classList.remove("is-active"),Wa=!1,Ne(),ce.style.setProperty("animation","resetScaleBorder 0.25s forwards"),ce.classList.remove("is-panel-open"),X.style.setProperty("animation",""),X.classList.remove("is-panel-open");const t=!!(e&&e.silentRespawn);ao(()=>{st.overlay.classList.remove("is-visible"),la=!1,fd(t)},360)}st.blur.onclick=Sr,st.closeButton.onclick=Sr,st.panel.onclick=e=>{e.stopPropagation()};const Ul={default:0,multiBit:1,oneBit:2,pixelated:3,gameBoy:4,vhs:5,halftone:6,blueprint:7,thermal:8,ascii:9,anaglyph:10};function yc(e){const t=o.renderStyles;let n="./graphics/thumbnail_ng_logo.webp";t&&t.logoImages&&t.logoImages[e]?n=t.logoImages[e]:t&&t[e]&&t[e].logoSrc&&(n=t[e].logoSrc);const s=document.getElementById("logolink");Hd(s,n)}function xc(){const e=o.renderStyles;if(!e||!Array.isArray(e.activeModes)||e.activeModes.length===0)return;e.currentModeIndex===void 0&&(e.currentModeIndex=0),e.currentModeIndex=(e.currentModeIndex+1)%e.activeModes.length;const t=e.activeModes[e.currentModeIndex];yc(t),au(t)}function Xl(){if(P._hoverActive||a.style.setProperty("cursor","default"),ct()){oo(),Ve&&(Ve.style.visibility="hidden"),Oe&&(Oe.style.visibility="hidden"),Ft="main";return}if(ht){ua();return}xc(),ue=!0}function Yl(){if(Ut||$t||kt)return;ht&&ua(),vi(Z,ge),a.style.setProperty("cursor","default"),kt=!0,ue=!1,Ve&&(Ve.style.visibility="hidden"),Oe&&(Oe.style.visibility="hidden"),ct()&&oo({silentRespawn:!0});const e=o.questionBox.shatter;re&&re.visible&&e&&e.enabled!==!1&&bd(!0)||zl()}function Gl(){if(Zt||uo||kt)return;ht&&ua(),vi(le,ie),a.style.setProperty("cursor","default"),kt=!0,ue=!1,ct()&&oo({silentRespawn:!0});const e=o.ar3D?o.ar3D.clickAnimation:null;(!e||e.enabled!==!1)&&gd(!0)||vr()}function Hl(){if(Do||sa||kt)return;ht&&ua(),vi(Q,Se),a.style.setProperty("cursor","default"),kt=!0,ue=!1,ct()&&oo({silentRespawn:!0});const e=o.games3D?o.games3D.pop:null;(!e||e.enabled!==!1)&&ud(!0)||yr()}function Ql(){if(Eo||ra||kt)return;ht&&ua(),vi(U,pe),a.style.setProperty("cursor","default"),kt=!0,ue=!1,ct()&&oo({silentRespawn:!0});const e=o.web3D?o.web3D.clickAnimation:null;(!e||e.enabled!==!1)&&vd(!0)||wr()}function Vl(){if(Bo||la||kt)return;ht&&ua(),vi(ce,X),a.style.setProperty("cursor","default"),kt=!0,ue=!1,ct()&&oo({silentRespawn:!0});const e=o.houdini3D?o.houdini3D.pop:null;(!e||e.enabled!==!1)&&md(!0)||_r()}function Wl(){let e=new Date,t=e.getHours(),n=e.getMinutes();t>12&&(t%=12),n<10&&(n="0"+n),Xe.innerHTML=t+":"+n,setTimeout(Wl,1e4)}function jl(){ye.style.setProperty("width",window.innerHeight*.3+"px"),ye.style.setProperty("height",window.innerHeight*.65+"px"),Ol();const e=window.innerWidth,t=window.innerHeight;if(De.aspect=e/t,De.fov=o.camera.fov,De.updateProjectionMatrix(),dt.setSize(e,t),fo.setSize(e,t),lc(e,t),an){const n=dt.getPixelRatio();an.material.uniforms.resolution.value.x=1/(e*n),an.material.uniforms.resolution.value.y=1/(t*n)}Bi.set(0,o.plate.yPos,0),va.set(0,0,0),(Ut||$t)&&Gt()}window.onresize=jl,Wl(),jl();function rs(){if(!Xo){Xo=!0;try{if(typeof dt<"u"&&dt&&dt.initTexture){if(typeof jt<"u"&&jt)try{dt.initTexture(jt)}catch{}if(typeof Co<"u"&&Co)try{dt.initTexture(Co)}catch{}if(typeof Ta<"u"&&Ta)try{dt.initTexture(Ta)}catch{}}if(dt.compile(Uo,De),typeof fo<"u"&&fo){const e=typeof Fa<"u"&&Fa.length>0?Fa:typeof L<"u"&&L?[L]:[];if(typeof Kt<"u"&&Kt&&(Kt.selectedObjects=e,Kt.enabled=e.length>0),typeof Yt<"u"&&Yt){const t=typeof re<"u"&&re?[re]:[];Yt.selectedObjects=t,Yt.enabled=t.length>0}if(typeof eo<"u"&&eo){const t=typeof oe<"u"&&oe?[oe]:[];eo.selectedObjects=t,eo.enabled=t.length>0}fo.render(),Ne()}}catch{}u&&(clearInterval(u),u=null),c.style.transition="opacity 0.35s ease",c.style.opacity=0,setTimeout(()=>{c.style.visibility="hidden"},350),P.style.visibility="visible",Ol(),as=performance.now()*.001,ue=!0}}Ga.onLoad=()=>{document.fonts&&document.fonts.ready?document.fonts.ready.then(()=>{rs()}).catch(rs):rs()},Ga.onError=e=>{console.error(`Failed to load asset: ${e}`)},setTimeout(()=>{Xo||rs()},1e4),Qe.onmouseover=function(){a.style.setProperty("cursor","pointer"),Qe.style.setProperty("animation","leftArrowMouseOver 0.25s forwards")},Qe.onmouseout=function(){a.style.setProperty("cursor","default"),Qe.style.setProperty("animation","leftArrowMouseOut 0.25s forwards")},Qe.onclick=function(){ue&&(ue=!1,a.style.setProperty("cursor","default"),Qe.style.setProperty("animation","leftArrowBounce 0.5s forwards"),ao(Xl,100))},Ot.onmouseover=null,Ot.onmouseout=null,Ot.onclick=null,me.onmouseover=()=>{!Oa&&fa()&&a.style.setProperty("cursor","pointer")},me.onmouseout=()=>{Oa||a.style.setProperty("cursor","default")},me.onclick=()=>{fa()&&ua()};const wc=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;P._hoverActive=!1,P._isMouseInside=!1,P.onmouseenter=()=>{P._isMouseInside=!0,!Oa&&fa()&&(P._hoverActive=!0,P.style.setProperty("animation","grow 0.25s forwards"),a.style.setProperty("cursor","pointer"))},P.onmouseleave=()=>{P._isMouseInside=!1,P._hoverActive&&(P._hoverActive=!1,P.style.setProperty("animation","shrink 0.25s forwards"),a.style.setProperty("cursor","default"))},P.onclick=()=>{(ct()||ue)&&Xl()};const Ac=(e,t)=>{const n=()=>!Oa&&fa()&&(!t.currentTarget||Ft!==t.currentTarget)&&!e.classList.contains("is-panel-open"),s=()=>fa()&&(!t.currentTarget||Ft!==t.currentTarget)&&!e.classList.contains("is-panel-open");e._hoverActive=!1,e._isMouseInside=!1,e.onmouseenter=()=>{e._isMouseInside=!0,!e.classList.contains("is-panel-open")&&n()&&(e._hoverActive=!0,e.style.setProperty("animation","grow 0.25s forwards"),a.style.setProperty("cursor","pointer"),t.hoverType==="about"?Va=!0:t.hoverType==="ar"?na=!0:t.hoverType==="houdini"?Wa=!0:t.hoverType==="web"?ya=!0:t.hoverType==="games"&&(Ma=!0))},e.onmouseleave=()=>{e._isMouseInside=!1,!e.classList.contains("is-panel-open")&&e._hoverActive&&(e._hoverActive=!1,e.style.setProperty("animation","shrink 0.25s forwards"),a.style.setProperty("cursor","default"),t.hoverType==="about"?(Va=!1,Ne()):t.hoverType==="ar"?(na=!1,Ne()):t.hoverType==="houdini"?(Wa=!1,Ne()):t.hoverType==="web"?(ya=!1,Ne()):t.hoverType==="games"&&(Ma=!1,Ne()))},e.onclick=d=>{d&&d.stopPropagation(),s()&&t.onClick()}},ql=[{elements:[Z,ge],name:"about",currentTarget:"about",hoverType:"about",onClick:Yl},{elements:[le,ie],name:"ar",currentTarget:"ar",hoverType:"ar",onClick:Gl},{elements:[Q,Se],name:"games",hoverType:"games",onClick:Hl},{elements:[U,pe],name:"web",hoverType:"web",onClick:Ql},{elements:[ce,X],name:"houdini",hoverType:"houdini",onClick:Vl}];ql.forEach(e=>{e.elements.forEach(t=>Ac(t,e))});const $l=e=>{e._hoverActive=!1,e._isMouseInside=!1,e.onmouseenter=()=>{e._isMouseInside=!0,fa()&&(e._hoverActive=!0,e.style.setProperty("animation","grow 0.25s forwards"),a.style.setProperty("cursor","pointer"),$n=!0)},e.onmouseleave=()=>{e._isMouseInside=!1,e._hoverActive&&(e._hoverActive=!1,e.style.setProperty("animation","shrink 0.25s forwards"),a.style.setProperty("cursor","default"),$n=!1,Ne())}};we&&$l(we),de&&$l(de);const Yn=document.getElementById("plaintext-link");Yn&&(Yn.onmouseover=()=>{fa()&&(Yn.style.setProperty("animation","plaintextGrow 0.25s forwards"),a.style.setProperty("cursor","pointer"))},Yn.onmouseout=()=>{fa()&&(Yn.style.setProperty("animation","plaintextShrink 0.25s forwards"),a.style.setProperty("cursor","default"))},Yn.onclick=e=>{e&&e.stopPropagation();let t="about";typeof Eo<"u"&&Eo?t="web":typeof Zt<"u"&&Zt?t="ar":typeof Do<"u"&&Do?t="games":typeof Bo<"u"&&Bo?t="houdini":typeof Ut<"u"&&Ut&&(t="about"),window.location.href=`./${t}/index.html`});function _c(e){if(!e){Ne(),a.style.setProperty("cursor","default");return}a.style.setProperty("cursor","pointer"),e==="questionBox"?pr(re,o.interaction.hoverColor3D||"#91bfff"):e==="houdiniToy"?rc(oe,o.interaction.hoverColor3D||"#91bfff"):e==="webGlobe"?pr(he,o.interaction.hoverColor3D||"#91bfff"):e==="gamesAlien"?pr(O,o.interaction.hoverColor3D||"#91bfff"):e==="arPhone"?Ll(Fa&&Fa.length>0?Fa:L,o.interaction.hoverColor3D||"#91bfff"):e==="bug"&&Ll(te,o.interaction.hoverColor3D||"#91bfff")}function Sc(){const e=o.ar3D;return e?(R?e.mobile?e.mobile.position:e.desktop.position:e.desktop?e.desktop.position:{x:-2,y:1.54,z:-4.3})||{x:-2,y:1.54,z:-4.3}:{x:-2,y:1.54,z:-4.3}}function Zl(){const e=o.ar3D;if(!e)return{rx:2,rz:1.2};if(typeof R<"u"&&R&&e.mobile){const s=e.mobile.walkRadiusX,d=e.mobile.walkRadiusZ;return{rx:s,rz:d}}const t=e.walkRadiusX,n=e.walkRadiusZ;return{rx:t,rz:n}}function ls(){const e=o.ar3D,t=Sc();if(!e)return{x:t.x,z:t.z};let n=0,s=0;return typeof R<"u"&&R&&e.mobile?(n=e.mobile.walkRadiusOffsetX,s=e.mobile.walkRadiusOffsetZ):(n=e.walkRadiusOffsetX,s=e.walkRadiusOffsetZ),{x:t.x+n,z:t.z+s}}function Jl(e,t){ko="inspecting";const n=t.pauseDuration;li=e+n,Ln=li+t.walkDuration}function Pc(e,t,n){const s=e.x-t,d=e.z-n;ri=Math.atan2(-s,-d)+(Math.random()-.5)*(Math.PI*.5)}function Mc(e){if(!L||!o.ar3D||o.ar3D.enabled===!1)return;const t=o.ar3D,n=performance.now(),s=ls(),{rx:d,rz:v}=Zl(),g=(di||na)&&!lo&&qt===0,f=lo||qt>0,F=typeof ss=="function"&&ss()||Zt||uo,B=g||f||F,Y=(t.rotation&&t.rotation.y!==void 0?t.rotation.y:90)*Math.PI/180,N=Y+Math.PI,G=Y+Math.PI-fe.rotation.y;let W=G-L.rotation.y;if(W=Math.atan2(Math.sin(W),Math.cos(W)),!ml&&typeof Xo<"u"&&Xo){ml=!0,ko="inspecting";const Le=t.initialWalkDelay;li=n+Le,Ln=li+t.walkDuration,L.rotation.y=N}const ae=t.hoverTurnSpeed*Math.PI/180;(L.userData.wasHoveredOrClicked||!1)&&!B&&Jl(n,t),L.userData.wasHoveredOrClicked=B;const Ae=ko==="walking"&&!B?1:0,ke=Math.min(1,7*e);if(In+=(Ae-In)*ke,In<.001&&(In=0),B){if(ko==="walking"&&(ko="inspecting"),f||F)L.rotation.y=G,si=!1;else if(g&&Math.abs(W)>.01){si=!0;const Le=ae*e;L.rotation.y+=Math.sign(W)*Math.min(Math.abs(W),Le)}else g&&(L.rotation.y=G,si=!1);return}if(si=!1,ko==="inspecting"){if(!hl){let Le=N-L.rotation.y;Le=Math.atan2(Math.sin(Le),Math.cos(Le));const xe=Math.min(1,6*e);L.rotation.y+=Le*xe}if(n>=li){ko="walking",hl=!0;const Le=L.position;Pc(Le,s.x,s.z),Ln=n+t.walkDuration}}else if(ko==="walking"){const Le=L.position,xe=s.x,se=s.z,Ce=ec.set(Math.sin(ri),0,Math.cos(ri)).normalize(),Ye=Le.x-xe,Ee=Le.z-se,D=Ye/d*(Ye/d)+Ee/v*(Ee/v);if(D>.75){const r=tc.set(-Ye,0,-Ee).normalize(),y=Math.max(0,Math.min(1,(D-.75)/(1-.75))),_=Math.min(1,y*.8*60*e);Ce.lerp(r,_).normalize(),ri=Math.atan2(Ce.x,Ce.z)}if(te&&o.linkedin3D&&o.linkedin3D.enabled!==!1){const r=da(),y=r*1.5,_=Le.x-te.position.x,l=Le.z-te.position.z,C=Math.sqrt(_*_+l*l);if(C<y){const w=Math.max(0,Math.min(1,(C-r)/(y-r))),H=C<.001?Pl.set(1,0,0):Pl.set(_,0,l).normalize();let ee=H.x*Ce.z-H.z*Ce.x;Math.abs(ee)<.05&&(ee=1);const z=oc.set(-H.z,0,H.x);ee<0&&z.negate();const M=ac.copy(H).multiplyScalar(.7).addScaledVector(z,.3).normalize(),E=Math.min(1,(1-w)*.9*60*e);Ce.lerp(M,E).normalize(),ri=Math.atan2(Ce.x,Ce.z)}}let p=Y+Math.atan2(Ce.x,Ce.z)-L.rotation.y;p=Math.atan2(Math.sin(p),Math.cos(p));const m=Math.min(1,6*e);if(L.rotation.y+=p*m,In>0){const y=t.speed*In*60*e;if(L.position.addScaledVector(Ce,y),te&&o.linkedin3D&&o.linkedin3D.enabled!==!1){const w=da(),H=L.position.x-te.position.x,ee=L.position.z-te.position.z,z=Math.sqrt(H*H+ee*ee);if(z<w){let M;if(z<.001){const E=Math.random()*Math.PI*2;M=Ml.set(Math.cos(E),0,Math.sin(E))}else M=Ml.set(H,0,ee).normalize();L.position.x=te.position.x+M.x*(w+.02),L.position.z=te.position.z+M.z*(w+.02)}}const _=L.position.x-xe,l=L.position.z-se;if(_/d*(_/d)+l/v*(l/v)>1.01){const w=Math.atan2(l,_);L.position.x=xe+Math.cos(w)*d*.98,L.position.z=se+Math.sin(w)*v*.98}}Ln===0&&(Ln=n+t.walkDuration),n>Ln&&t.inspectEnabled!==!1&&Jl(n,t)}else ko="walking"}function Kl(e,t){const n=t.minWalkAfterInspect!==void 0?t.minWalkAfterInspect:4e3,s=t.walkPauseVariance!==void 0?t.walkPauseVariance:4e3;Ji=e+n+Math.random()*s}function bi(e){if(ar===e)return;const t=.2,n=.2,s={walk:mi,inspect:or,fall:Nn,stand:zn};Object.keys(s).forEach(d=>{const v=s[d];v&&(d===e?v.reset().fadeIn(n).play():v.fadeOut(t))}),ar=e}function Tc(){Jt="falling",bi("fall"),Nc()}function Fc(){Jt="standing",bi("stand"),zc()}function Cc(){Jt="inspecting",te.rotation.y,bi("inspect"),ui=performance.now()+Math.random()*1500+2e3,Kl(ui,o.linkedin3D)}function kc(e,t){const n=Math.random()*1500+2e3;Jt="inspecting",te.rotation.y,ui=e+n,Kl(ui,t),bi("inspect")}let Pr=null,Mr=null,Gn=null,ds=null,cs=null,us=null,fs=null,ps=null;function Lc(e){const t=o.renderStyles,n=t&&t[e]||{},s=n.dishMaterialOverride;if(wn)if(s&&s.override){const f=`${e}_dish_${s.type}_${s.color}_${s.roughness}_${s.metalness}`;if(cs!==f){cs=f;const F=new ne(s.color||"#ffffff");s.type==="unlit"?Pr=new Je({color:F,transparent:!1,opacity:1,depthWrite:!0,side:Tt}):Pr=new vt({color:F,roughness:s.roughness!==void 0?s.roughness:.5,metalness:s.metalness!==void 0?s.metalness:.1,transparent:!1,opacity:1,depthWrite:!0,side:Tt})}wn.traverse(F=>{F.isMesh&&(F.userData.originalMaterial||(F.userData.originalMaterial=F.material),F.material=Pr)})}else cs!=="default"&&(cs="default",wn.traverse(f=>{f.isMesh&&f.userData.originalMaterial&&(f.material=f.userData.originalMaterial)}));const d=n.gelMaterialOverride;if(at)if(d&&d.override){const f=`${e}_gel_${d.type}_${d.color}_${d.roughness}_${d.metalness}`;if(us!==f){us=f;const F=new ne(d.color||"#ffffff");d.type==="unlit"?Mr=new Je({color:F,transparent:!1,opacity:1,depthWrite:!0,side:Tt}):Mr=new vt({color:F,roughness:d.roughness!==void 0?d.roughness:.5,metalness:d.metalness!==void 0?d.metalness:.1,transparent:!1,opacity:1,depthWrite:!0,side:Tt})}at.traverse(F=>{F.isMesh&&(F.userData.originalMaterial||(F.userData.originalMaterial=F.material),F.material=Mr)})}else us!=="default"&&(us="default",at.traverse(f=>{f.isMesh&&f.userData.originalMaterial&&(f.material=f.userData.originalMaterial)}));const v=n.alienMaterialOverride;if(go||vo)if(v&&v.override){const f=`${e}_alien_${v.type}_${v.color}_${v.emissive}_${v.emissiveIntensity}_${v.roughness}_${v.metalness}`;if(fs!==f){fs=f;const F=new ne(v.color||"#ffffff"),B=new ne(v.emissive||"#000000"),Y=v.emissiveIntensity!==void 0?v.emissiveIntensity:0;v.type==="unlit"?Gn=new Je({color:F,transparent:!1,opacity:1,depthWrite:!0,side:Tt}):Gn=new vt({color:F,emissive:B,emissiveIntensity:Y,roughness:v.roughness!==void 0?v.roughness:.1,metalness:v.metalness!==void 0?v.metalness:0,transparent:!1,opacity:1,depthWrite:!0,side:Tt})}go&&(go.material=Gn),vo&&(vo.material=Gn),zt&&(zt.material=Gn),Vt&&(Vt.material=Gn)}else fs!=="default"&&(fs="default",go&&(go.material=Mn),vo&&(vo.material=Mn),zt&&(zt.material=ni),Vt&&(Vt.material=ni));const g=n.arMaterialOverride||n.phoneMaterialOverride;if(Ia&&Ia.length>0)if(g&&g.override){const f=`${e}_ar_${g.type}_${g.color}_${g.emissive}_${g.emissiveIntensity}_${g.roughness}_${g.metalness}`;if(ps!==f){ps=f;const F=new ne(g.color||"#ffffff"),B=new ne(g.emissive||"#000000"),Y=g.emissiveIntensity!==void 0?g.emissiveIntensity:0;g.type==="unlit"?ds=new Je({color:F,skinning:!0,transparent:!1,opacity:1,depthWrite:!0,side:Tt}):ds=new vt({color:F,emissive:B,emissiveIntensity:Y,roughness:g.roughness!==void 0?g.roughness:.25,metalness:g.metalness!==void 0?g.metalness:0,skinning:!0,transparent:!1,opacity:1,depthWrite:!0,side:Tt})}Ia.forEach(F=>{F.isMulti&&Array.isArray(F.mesh.material)?F.mesh.material=F.originalMaterials.map(B=>typeof Wt<"u"&&B===Wt||typeof Cn<"u"&&B===Cn||typeof kn<"u"&&B===kn||typeof Fn<"u"&&B===Fn?B:ds):F.mesh.material=ds})}else ps!=="default"&&(ps="default",Ia.forEach(f=>{f.isMulti?f.mesh.material=[...f.originalMaterials]:f.mesh.material=f.originalMaterial}))}function Ic(){const e=o.boids;return e?typeof R<"u"&&R&&e.mobile?e.mobile.count!==void 0?e.mobile.count:e.count!==void 0?e.count:35:e.desktop&&e.desktop.count!==void 0?e.desktop.count:e.count!==void 0?e.count:80:80}function ed(){const e=o.boids;if(!e)return{rx:11,rz:11};if(typeof R<"u"&&R&&e.mobile){const t=e.mobile.walkRadiusX,n=e.mobile.walkRadiusZ;return{rx:t,rz:n}}if(e.desktop){const t=e.desktop.walkRadiusX,n=e.desktop.walkRadiusZ;return{rx:t,rz:n}}return{rx:e.walkRadiusX,rz:e.walkRadiusZ}}function Dc(e,t){const n=new ha,s=e,d=Math.sqrt(3)/2,v=-t*.35,g=t*.65,f=0,F=s*1.5,B=s*.5,Y=[0,F,v],N=[-s*d,f,v],G=[s*d,f,v],W=[0,B,g],ve=new Float32Array([...Y,...G,...N,...Y,...N,...W,...N,...G,...W,...G,...Y,...W]);return n.setAttribute("position",new Vn(ve,3)),n.computeVertexNormals(),n}function Ec(){const e=o.boids;if(!e||e.enabled===!1)return;oa=Ic();const t=e.size,n=e.length,s=e.yHeight,d=e.shadowY,v=e.shadowScale,g=Dc(t,n);Yi=new vt({color:16777215,roughness:e.material&&e.material.roughness!==void 0?e.material.roughness:.35,metalness:e.material&&e.material.metalness!==void 0?e.material.metalness:.5,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),Qs=new Je({color:16777215,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),mt=new Id(g,Yi,oa),mt.instanceMatrix.setUsage(Dd),mt.renderOrder=4,mt.frustumCulled=!1;const f=new Vo(t*2.2*v,n*1.5*v);f.rotateX(-Math.PI/2);const F=Wo("graphics/shadow.webp"),B=new Je({map:F,transparent:!0,opacity:e.shadowOpacity,depthWrite:!1,depthTest:!0,side:Tt,blending:pn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});Dt=new Id(f,B,oa),Dt.instanceMatrix.setUsage(Dd),Dt.renderOrder=3,Dt.frustumCulled=!1,Et=new Float32Array(oa*3),mo=new Float32Array(oa*3),Qt=new Float32Array(oa*4),To=new Float32Array(oa*3);const{rx:Y,rz:N}=ed();for(let se=0;se<oa;se++){const Ce=Math.random()*Math.PI*2,Ye=Math.sqrt(Math.random())*.87,Ee=Math.cos(Ce)*Ye*Y,D=Math.sin(Ce)*Ye*N;Et[se*3+0]=Ee,Et[se*3+1]=s,Et[se*3+2]=D;const i=Math.random()*Math.PI*2,p=e.maxSpeed*(.6+Math.random()*.4),m=Math.cos(i)*p,r=Math.sin(i)*p;mo[se*3+0]=m,mo[se*3+1]=0,mo[se*3+2]=r,oi.set(Ee,s,D),Qi.set(Ee,d,D),ho.set(m,0,r).normalize(),ho.lengthSq()>1e-4?Aa.setFromUnitVectors(cl,ho):Aa.identity(),Qt[se*4+0]=Aa.x,Qt[se*4+1]=Aa.y,Qt[se*4+2]=Aa.z,Qt[se*4+3]=Aa.w;const y=e.colorIntensity,_=1*y,l=.28*y,C=.08*y;To[se*3+0]=_,To[se*3+1]=l,To[se*3+2]=C,Vi.setRGB(_,l,C),mt.setColorAt(se,Vi),rt.position.copy(oi),rt.quaternion.copy(Aa),rt.scale.set(1,1,1),rt.updateMatrix(),mt.setMatrixAt(se,rt.matrix),rt.position.copy(Qi),rt.quaternion.copy(Aa),rt.scale.set(1,1,1),rt.updateMatrix(),Dt.setMatrixAt(se,rt.matrix)}mt.instanceMatrix.needsUpdate=!0,mt.instanceColor&&(mt.instanceColor.needsUpdate=!0),Dt.instanceMatrix.needsUpdate=!0,Za=new fn;const W=new _s(0,0,Y,N,0,2*Math.PI,!1,0).getPoints(64),ve=new ha().setFromPoints(W),ae=new Ss({color:65484});Gi=new Ps(ve,ae),Gi.rotation.x=-Math.PI/2,Gi.position.y=d+.01,Za.add(Gi);const K=e.cursorAvoidRadius,ke=new _s(0,0,K,K,0,2*Math.PI,!1,0).getPoints(32),Le=new ha().setFromPoints(ke),xe=new Ss({color:16750848});Hi=new Ps(Le,xe),Hi.rotation.x=-Math.PI/2,Hi.position.y=d+.01,Za.add(Hi),Za.visible=!1,fe.add(Dt),fe.add(mt),fe.add(Za)}function Bc(e){if(!mt||!o.boids||o.boids.enabled===!1)return;const t=o.renderStyles&&Array.isArray(o.renderStyles.activeModes)?o.renderStyles.activeModes:["default"],n=o.renderStyles&&o.renderStyles.currentModeIndex!==void 0?o.renderStyles.currentModeIndex:0,s=t[n%t.length]||"default",d=o.renderStyles&&o.renderStyles[s]||{},v=d.hideBoidShadows===!0||d.boidShadows===!1||d.hideShadows===!0||d.shadows===!1;Dt&&(Dt.visible=!v);const g=o.boids,f=oa,F=g.yHeight,B=g.shadowY,Y=g.maxSpeed,N=g.maxForce,G=g.separationRadius,W=G*G,ve=g.neighborRadius,ae=ve*ve,K=g.separationWeight,Ae=g.alignmentWeight,ke=g.cohesionWeight,Le=g.obstacleAvoidanceWeight,xe=g.obstacleAvoidRadius,se=xe*xe,{rx:Ce,rz:Ye}=ed(),Ee=d.boidMaterialOverride,D=d.boidColorOverride||d.boidsColorOverride,i=d.boidColor||d.boidsColor,p=Ee&&Ee.override&&Ee.type==="unlit"||D&&D.override&&(D.type==="unlit"||D.unlit===!0)||d.boidUnlit===!0||d.boidsUnlit===!0;if(mt&&Yi&&Qs){const E=p?Qs:Yi;mt.material!==E&&(mt.material=E)}let m=!1;so&&so.x>-900&&De&&Ke&&(ul.set(qd,-F),fl.setFromCamera(so,De),fl.ray.intersectPlane(ul,Pn)&&(fe&&fe.worldToLocal(Pn),m=!0));const r=[],y=re?re.position:R&&o.questionBox.mobile?o.questionBox.mobile.position:o.questionBox.position;y&&r.push(y),oe&&r.push(oe.position),he&&r.push(he.position),O&&r.push(O.position),L&&r.push(L.position),te&&r.push(te.position);const _=Math.min(2,e*60),l=g.colorSmoothing,C=Math.min(1,l*60*e),w=g.rotationSmoothing,H=Math.min(1,w*60*e),ee=g.colorIntensity;Di.length<f&&(Di=new Int32Array(f*2)),Ii.fill(-1);const z=Math.max(.5,ve),M=St/2;for(let E=0;E<f;E++){const T=E*3;let I=Math.floor(Et[T+0]/z)+M,k=Math.floor(Et[T+2]/z)+M;I<0?I=0:I>=St&&(I=St-1),k<0?k=0:k>=St&&(k=St-1);const S=I+k*St;Di[E]=Ii[S],Ii[S]=E}for(let E=0;E<f;E++){const T=E*3,I=Et[T+0],k=Et[T+2];let S=mo[T+0],j=mo[T+2];const Ge=Math.sqrt(S*S+j*j);oi.set(I,F,k),ai.set(S,0,j),aa.set(0,0,0),xa.set(0,0,0),wa.set(0,0,0),Zd.set(0,0,0),Fo.set(0,0,0);let Te=0,Lt=0,gt=0,$e=0,xt=0,Be=Math.floor(I/z)+M,Ze=Math.floor(k/z)+M;Be<0?Be=0:Be>=St&&(Be=St-1),Ze<0?Ze=0:Ze>=St&&(Ze=St-1);const wt=Be>0?Be-1:0,ze=Be<St-1?Be+1:St-1,_e=Ze>0?Ze-1:0,Re=Ze<St-1?Ze+1:St-1;for(let Ue=wt;Ue<=ze;Ue++)for(let He=_e;He<=Re;He++){const It=Ue+He*St;let At=Ii[It];for(;At!==-1;){if(E!==At){const Rt=At*3,Xa=I-Et[Rt+0],ma=k-Et[Rt+2],Qo=Xa*Xa+ma*ma;Qo>1e-5&&Qo<W&&(xa.x+=Xa/Qo,xa.z+=ma/Qo,Te++),Qo>1e-5&&Qo<ae&&(wa.x+=mo[Rt+0],wa.z+=mo[Rt+2],Lt++,$e+=Et[Rt+0],xt+=Et[Rt+2],gt++)}At=Di[At]}}Te>0&&(xa.multiplyScalar(1/Te),xa.lengthSq()>0&&(xa.normalize().multiplyScalar(Y).sub(ai),xa.clampLength(0,N),aa.addScaledVector(xa,K))),Lt>0&&(wa.multiplyScalar(1/Lt),wa.lengthSq()>0&&(wa.normalize().multiplyScalar(Y).sub(ai),wa.clampLength(0,N),aa.addScaledVector(wa,Ae))),gt>0&&($e/=gt,xt/=gt,ho.set($e-I,0,xt-k),ho.lengthSq()>0&&(ho.normalize().multiplyScalar(Y).sub(ai),ho.clampLength(0,N),aa.addScaledVector(ho,ke)));let Fe=0,Ie=0;const je=g.obstacleLookAhead,Go=Math.max(1e-4,Ge),Ho=S/Go*je,xd=j/Go*je;for(let Ue=0;Ue<r.length;Ue++){const He=r[Ue],It=I-He.x,At=k-He.z,Rt=It*It+At*At,Xa=I+Ho-He.x,ma=k+xd-He.z,Qo=Xa*Xa+ma*ma,xs=Math.min(Rt,Qo);if(xs<se){const ws=Math.sqrt(xs),wi=Math.sqrt(Rt),Ai=Math.max(.001,wi),Lr=Math.pow((xe-ws)/xe,1.2);Fo.x+=It/Ai*Lr,Fo.z+=At/Ai*Lr,Fe++,Ie=Math.max(Ie,Lr)}}const iu=g.mouseAvoidanceEnabled!==!1,su=g.cursorAvoidanceWeight,gs=g.cursorAvoidRadius,ru=gs*gs;if(m&&iu){const Ue=I-Pn.x,He=k-Pn.z,It=Ue*Ue+He*He,At=I+Ho-Pn.x,Rt=k+xd-Pn.z,Xa=At*At+Rt*Rt,ma=Math.min(It,Xa);if(ma<ru){const Qo=Math.sqrt(ma),xs=Math.sqrt(It),ws=Math.max(.001,xs),wi=Math.pow((gs-Qo)/gs,1.2),Ai=su/Math.max(.01,Le);Fo.x+=Ue/ws*wi*Ai,Fo.z+=He/ws*wi*Ai,Fe++,Ie=Math.max(Ie,wi)}}Fe>0&&(Fo.multiplyScalar(1/Fe),Fo.lengthSq()>0&&(Fo.normalize().multiplyScalar(Y).sub(ai),Fo.clampLength(0,N*1.8),aa.addScaledVector(Fo,Le)));const wd=I/Ce*(I/Ce)+k/Ye*(k/Ye);if(wd>.75){const Ue=-I,He=-k,It=Math.sqrt(Ue*Ue+He*He);if(It>.001){const At=Math.max(0,Math.min(1,(wd-.75)/.25)),Rt=N*2*At;aa.x+=Ue/It*Rt,aa.z+=He/It*Rt}}S+=aa.x*_,j+=aa.z*_;const rn=Math.sqrt(S*S+j*j);if(rn>Y)S=S/rn*Y,j=j/rn*Y;else if(rn<Y*.3){const Ue=Y*.3;if(rn>1e-5)S=S/rn*Ue,j=j/rn*Ue;else{const He=Math.random()*Math.PI*2;S=Math.cos(He)*Ue,j=Math.sin(He)*Ue}}let ln=I+S*_,dn=k+j*_;if(ln/Ce*(ln/Ce)+dn/Ye*(dn/Ye)>1){const Ue=Math.atan2(dn,ln);ln=Math.cos(Ue)*Ce*.98,dn=Math.sin(Ue)*Ye*.98,S=-S*.5,j=-j*.5}Et[T+0]=ln,Et[T+1]=F,Et[T+2]=dn,mo[T+0]=S,mo[T+1]=0,mo[T+2]=j;let cn=.5,un=.3,Hn=.3;if(D&&D.override&&D.color)Sa.set(D.color),cn=Sa.r,un=Sa.g,Hn=Sa.b;else if(i)Sa.set(i),cn=Sa.r,un=Sa.g,Hn=Sa.b;else{const Ue=Math.sqrt(S*S+j*j);if(Ue>1e-4){const It=Math.abs(j)/Ue,At=Math.abs(S)/Ue;cn=It*1+At*.08,un=It*.28+At*.85,Hn=It*.08+At*.95}const He=Math.max(0,Math.min(1,Ie));cn=cn*(1-He)+1*He,un=un*(1-He)+0*He,Hn=Hn*(1-He)+0*He}cn*=ee,un*=ee;const lu=Hn*ee;let vs=To[T+0],bs=To[T+1],ys=To[T+2];vs+=(cn-vs)*C,bs+=(un-bs)*C,ys+=(lu-ys)*C,To[T+0]=vs,To[T+1]=bs,To[T+2]=ys,Vi.setRGB(vs,bs,ys),mt.setColorAt(E,Vi),oi.set(ln,F,dn),Qi.set(ln,B,dn),ho.set(S,0,j).normalize(),ho.lengthSq()>1e-4&&dl.setFromUnitVectors(cl,ho);const Ua=E*4;_a.set(Qt[Ua+0],Qt[Ua+1],Qt[Ua+2],Qt[Ua+3]),_a.slerp(dl,H),Qt[Ua+0]=_a.x,Qt[Ua+1]=_a.y,Qt[Ua+2]=_a.z,Qt[Ua+3]=_a.w,rt.position.copy(oi),rt.quaternion.copy(_a),rt.scale.set(1,1,1),rt.updateMatrix(),mt.setMatrixAt(E,rt.matrix),rt.position.copy(Qi),rt.quaternion.copy(_a),rt.scale.set(1,1,1),rt.updateMatrix(),Dt&&Dt.setMatrixAt(E,rt.matrix)}mt.instanceMatrix.needsUpdate=!0,mt.instanceColor&&(mt.instanceColor.needsUpdate=!0),Dt&&(Dt.instanceMatrix.needsUpdate=!0),Za&&(Za.visible=!1)}let td=!1;document.addEventListener("visibilitychange",()=>{td=document.hidden});let od=0;const ad=1e3/60;function nd(){if(requestAnimationFrame(nd),td)return;const e=performance.now();if(Oa){const i=e-od;if(i<ad-1)return;od=e-i%ad}const t=Math.min(.1,(e-wl)*.001);wl=e;const n=window.innerWidth<=window.innerHeight;if(Ft==="main"&&!n)if(nn){const i=1-Math.pow(.65,t*60),p=to;to+=(Na-to)*i;const m=(to-p)/Math.max(.001,t);Ao=bt.lerp(Ao,m,.4)}else{const i=o.interaction||{},p=i.rotationDamping!==void 0?i.rotationDamping:.94;Na+=Ao*t,Ao*=Math.pow(p,t*60),Math.abs(Ao)<1e-4&&(Ao=0);const m=1-Math.pow(1-.12,t*60);to+=(Na-to)*m}else{Na=0,Ao=0;const i=1-Math.pow(1-.12,t*60);to+=(0-to)*i}const s=t>0?Math.abs(to-Bl)/t:0;if(Bl=to,Xo&&o.linkedin3D&&o.linkedin3D.enabled!==!1&&te){const i=o.linkedin3D.fallRotationSpeedThreshold;s>i&&Jt!=="falling"&&Jt!=="standing"&&Tc()}const d=R?o.camera.mobile:o.camera.desktop,v=d.position,g=d.lookAt;if(De.position.copy(v),De.lookAt(g.x,g.y,g.z),os||(fe.rotation.y=to),as>=0){const i=performance.now()*.001-as,p=Math.min(i/.9,1);ur=.05+.95*(1-Math.pow(1-p,3)),p>=1&&(ur=1,as=-1)}fe.scale.setScalar(ur);const f=Ft==="main"&&Xo?1:0;let F=!1,B=!1,Y=!1;const N=ms(Ri,Rs),G=ct();if(!Oa&&Xo&&(ue||G)){let i=null;if(Va&&re&&Lo===0)i="questionBox";else if(na&&L&&!lo&&qt===0)i="arPhone";else if(Wa&&oe&&!xo&&Io===0)i="houdiniToy";else if(ya&&he)i="webGlobe";else if(Ma&&O&&!bo&&yo===0)i="gamesAlien";else if($n&&te)i="bug";else if(!G&&!N&&ue&&Ft==="main"){if(so.x<-100&&Math.abs(Ao)<.05&&!nn&&Ri!==-9999&&(so.x=Ri/window.innerWidth*2-1,so.y=-(Rs/window.innerHeight)*2+1),Ke.setFromCamera(so,De),ir.length=0,sr.length=0,rr.length=0,lr.length=0,dr.length=0,cr.length=0,te&&Ke.intersectObject(te,!0,ir),re&&Lo===0&&Ke.intersectObject(re,!0,sr),L&&!lo&&qt===0&&Ke.intersectObject(L,!0,cr),oe&&!xo&&Io===0&&Ke.intersectObject(oe,!0,rr),he&&Ke.intersectObject(he,!0,lr),O&&!bo&&yo===0&&Ke.intersectObject(O,!0,dr),ir.length>0?i="bug":sr.length>0?i="questionBox":cr.length>0?i="arPhone":rr.length>0?i="houdiniToy":he&&lr.length>0?i="webGlobe":O&&dr.length>0&&(i="gamesAlien"),!i&&ia){let p=null,m=.55;if(ia==="questionBox"){p=re;const r=o.questionBox?o.questionBox.hover:null;m=r&&r.hysteresisRadius!==void 0?r.hysteresisRadius:.55}else if(ia==="arPhone"){p=L;const r=o.ar3D?o.ar3D.hover:null;m=r&&r.hysteresisRadius!==void 0?r.hysteresisRadius:.55}else if(ia==="houdiniToy"){p=oe;const r=o.houdini3D?o.houdini3D.hover:null;m=r&&r.hysteresisRadius!==void 0?r.hysteresisRadius:.55}else if(ia==="webGlobe"){p=he;const r=o.web3D?o.web3D.hover:null;m=r&&r.hysteresisRadius!==void 0?r.hysteresisRadius:.55}else if(ia==="gamesAlien"){p=O;const r=o.games3D?o.games3D.hover:null;m=r&&r.hysteresisRadius!==void 0?r.hysteresisRadius:.55}else if(ia==="bug"){p=te;const r=o.linkedin3D?o.linkedin3D.hover:null;m=r&&r.hysteresisRadius!==void 0?r.hysteresisRadius:.35}p&&(p.getWorldPosition(yl),Ke.ray.distanceToPoint(yl)<=m&&(i=ia))}ia=i}F=i==="questionBox",di=i==="arPhone",B=i==="houdiniToy",ro=i==="webGlobe",Ja=i==="gamesAlien",Y=i==="bug",_c(i),i?a.style.setProperty("cursor","pointer"):a.style.setProperty("cursor","default")}else F=!1,di=!1,B=!1,ro=!1,Ja=!1,Y=!1,Ne(),a.style.setProperty("cursor","default");F!==al&&(!Da&&!Ut&&!$t?F?(Zn=!1,Gc()):(Zn&&Hc(),Zn=!1):Zn=!1,al=F),B!==nl&&(xo?Jn=!1:B?(Jn=!1,Qc()):(Jn&&Vc(),Jn=!1),nl=B),ro!==il&&(!ta&&_n===0?ro?(Kn=!1,jc()):(Kn&&ld(),Kn=!1):Kn=!1,il=ro),Ja!==pl&&(!bo&&yo===0?Ja?(ii=!1,tu()):(ii&&ou(),ii=!1):ii=!1,pl=Ja),Y!==sl&&(Jt!=="falling"&&Y&&Uc(),sl=Y);let W=null;F?W="about":di?W="ar":B?W="houdini":ro?W="web":Ja?W="games":Y&&(W="linkedin");function ve(i){return i==="about"?Va:i==="ar"?na:i==="houdini"?Wa:i==="web"?ya:i==="games"?Ma:i==="linkedin"?$n:!1}if(W!==ja){if(ja&&!ve(ja)){const i=V[ja];i&&(i.desktop&&Ft!==ja&&!i.desktop.classList.contains("is-panel-open")&&i.desktop.style.setProperty("animation","shrink 0.25s forwards"),i.mobile&&Ft!==ja&&!i.mobile.classList.contains("is-panel-open")&&i.mobile.style.setProperty("animation","shrink 0.25s forwards"))}if(W&&!ve(W)){const i=V[W];i&&(i.desktop&&Ft!==W&&!i.desktop.classList.contains("is-panel-open")&&i.desktop.style.setProperty("animation","grow 0.25s forwards"),i.mobile&&Ft!==W&&!i.mobile.classList.contains("is-panel-open")&&i.mobile.style.setProperty("animation","grow 0.25s forwards"))}ja=W}if(!Oa&&fa()&&(P&&(P._isMouseInside||P.matches&&P.matches(":hover"))&&!P._hoverActive&&(P._hoverActive=!0,P.style.setProperty("animation","grow 0.25s forwards"),a.style.setProperty("cursor","pointer")),ql.forEach(i=>{const p=!i.currentTarget||Ft!==i.currentTarget;i.elements.forEach(m=>{m&&!m.classList.contains("is-panel-open")&&p&&(m._isMouseInside||m.matches&&m.matches(":hover"))&&!m._hoverActive&&(m._hoverActive=!0,m.style.setProperty("animation","grow 0.25s forwards"),a.style.setProperty("cursor","pointer"),i.hoverType==="about"?Va=!0:i.hoverType==="ar"?na=!0:i.hoverType==="houdini"?Wa=!0:i.hoverType==="web"?ya=!0:i.hoverType==="games"&&(Ma=!0))})}),[we,de].forEach(i=>{i&&(i._isMouseInside||i.matches&&i.matches(":hover"))&&!i._hoverActive&&(i._hoverActive=!0,i.style.setProperty("animation","grow 0.25s forwards"),a.style.setProperty("cursor","pointer"),$n=!0)})),os){const i=performance.now()*.001-gc,p=o.interaction.spinDuration,m=Math.min(i/p,1),r=wc(m);fe.rotation.y=El+r*Math.PI*2,m>=1&&(os=!1,fe.rotation.y=(El+Math.PI*2)%(Math.PI*2),to=fe.rotation.y,Na=to)}const ae=o.renderStyles&&Array.isArray(o.renderStyles.activeModes)?o.renderStyles.activeModes:["default"],K=o.renderStyles&&o.renderStyles.currentModeIndex!==void 0?o.renderStyles.currentModeIndex:0,Ae=ae[K%ae.length]||"default",ke=o.renderStyles&&o.renderStyles[Ae]||{},Le=o.interaction&&o.interaction.defaultModeShadowBoost!==void 0?o.interaction.defaultModeShadowBoost:1.45,xe=ke&&ke.shadowBoost!==void 0?ke.shadowBoost:Ae==="default"?Le:1,se=ke.hideDish===!0,Ce=ke.hideGel===!0;if(Lc(Ae),yt){const i=!se,p=!Ce;if(yt.visible=i||p,wn&&(wn.visible=i),at&&(at.visible=p),yt.visible){const m=o.plate.scale*f;Ki.set(m,m,m),yt.scale.lerp(Ki,.08),yt.position.lerp(Bi,.08),yt.rotation.x+=(va.x-yt.rotation.x)*.08,yt.rotation.y+=(va.y-yt.rotation.y)*.08,yt.rotation.z+=(va.z-yt.rotation.z)*.08}}if(at&&(at.visible=!Ce,at.visible&&(!ke.gelMaterialOverride||!ke.gelMaterialOverride.override))){const i=1*f;Ki.set(i,i,i),at.scale.lerp(Ki,.08),at.children.forEach(p=>{p.isMesh&&p.material&&(p.material.color.set(o.gel.glass.color),p.material.transmission=o.gel.glass.transmission,p.material.ior=o.gel.glass.ior,p.material.roughness=o.gel.glass.roughness,p.material.reflectivity=o.gel.glass.reflectivity,p.material.clearcoat=o.gel.glass.clearcoat,p.material.opacity=o.gel.glass.opacity,p.material.clearcoatRoughness=o.gel.glass.clearcoatRoughness)}),at.isMesh&&at.material&&(at.material.color.set(o.gel.glass.color),at.material.transmission=o.gel.glass.transmission,at.material.ior=o.gel.glass.ior,at.material.roughness=o.gel.glass.roughness,at.material.reflectivity=o.gel.glass.reflectivity,at.material.opacity=o.gel.glass.opacity,at.material.clearcoat=o.gel.glass.clearcoat,at.material.clearcoatRoughness=o.gel.glass.clearcoatRoughness)}if(typeof Mt<"u"&&Mt&&(Mt.uniforms.uTime.value=performance.now()*.001,Mt.uniforms.uRainbowIntensity.value=o.plate.rainbow.intensity,Mt.uniforms.uRainbowScale.value=o.plate.rainbow.scale,Mt.uniforms.uRainbowAngleFactor.value=o.plate.rainbow.angleFactor,Mt.uniforms.uRainbowShimmer.value=o.plate.rainbow.shimmer,Mt.uniforms.uRainbowShimmerSpeed.value=o.plate.rainbow.shimmerSpeed,Mt.uniforms.uRainbowCenterSmoothness.value=o.plate.rainbow.centerSmoothness,Mt.uniforms.uRainbowCenterOffset.value.set(...o.plate.rainbow.centerOffset),Mt.uniforms.uPaletteA.value.set(...o.plate.rainbow.paletteA),Mt.uniforms.uPaletteB.value.set(...o.plate.rainbow.paletteB),Mt.uniforms.uPaletteC.value.set(...o.plate.rainbow.paletteC),Mt.uniforms.uPaletteD.value.set(...o.plate.rainbow.paletteD),Mt.uniforms.uRainbowFresnelMultiply.value=o.plate.rainbow.fresnelMultiply,Mt.uniforms.uSkyboxRotation.value=o.lights.skyboxRotation*Math.PI/180),typeof is<"u"&&is&&(is.uniforms.uSkyboxRotation.value=o.lights.skyboxRotation*Math.PI/180),on&&(De.getWorldPosition(es),on.lookAt(es),o.questionBox)){const i=0*Math.PI/180,p=o.questionBox.billboardRotationY*Math.PI/180,m=0*Math.PI/180;on.rotateX(i),on.rotateY(p),on.rotateZ(m);const r=o.questionBox.planeScale;on.scale.set(r,r,r)}if(te&&Al&&o.linkedin3D&&o.linkedin3D.enabled!==!1){const i=o.linkedin3D,p=performance.now(),m=p<ui,r=Ft==="main"&&Xo&&!m&&Jt!=="falling"&&Jt!=="standing";r&&(Jt!=="walking"&&(Jt="walking",bi("walk")),Ji===0&&(Ji=p+Math.random()*4e3+2e3),p>Ji&&kc(p,i));const y=r&&Jt!=="inspecting"?1:0,_=Math.min(1,7*t);if(tn+=(y-tn)*_,tn<.001&&(tn=0),tn>0){const z=te.position,{rx:M,rz:E}=Sl(),T=da(),I=T*1.5,k=(Math.random()-.5)*.15*60*t;Zi+=k;const S=Jd.set(Math.sin(Zi),0,Math.cos(Zi)).normalize(),j=z.x/M*(z.x/M)+z.z/E*(z.z/E);if(j>.8){const Be=Kd.set(-z.x,0,-z.z).normalize(),Ze=Math.max(0,Math.min(1,(j-.8)/(1-.8))),wt=Math.min(1,Ze*.8*60*t);S.lerp(Be,wt).normalize()}{const Be=re?re.position:R&&o.questionBox.mobile?o.questionBox.mobile.position:o.questionBox.position,Ze=nc.set(z.x-Be.x,0,z.z-Be.z),wt=Ze.length();if(wt<I){const ze=Math.max(0,Math.min(1,(wt-T)/(I-T))),_e=wt<.001?Ro.set(1,0,0):Ro.copy(Ze).normalize();let Re=_e.x*S.z-_e.z*S.x;Math.abs(Re)<.05&&(Re=1);const Fe=hi.set(-_e.z,0,_e.x);Re<0&&Fe.negate();const Ie=gi.copy(_e).multiplyScalar(.7).addScaledVector(Fe,.3).normalize(),je=Math.min(1,(1-ze)*.9*60*t);S.lerp(Ie,je).normalize()}if(oe){const ze=ts.subVectors(z,oe.position);ze.y=0;const _e=ze.length();if(_e<I){const Re=Math.max(0,Math.min(1,(_e-T)/(I-T))),Fe=_e<.001?Ro.set(1,0,0):Ro.copy(ze).normalize();let Ie=Fe.x*S.z-Fe.z*S.x;Math.abs(Ie)<.05&&(Ie=1);const je=hi.set(-Fe.z,0,Fe.x);Ie<0&&je.negate();const Go=gi.copy(Fe).multiplyScalar(.7).addScaledVector(je,.3).normalize(),Ho=Math.min(1,(1-Re)*.9*60*t);S.lerp(Go,Ho).normalize()}}if(he){const ze=ts.subVectors(z,he.position);ze.y=0;const _e=ze.length();if(_e<I){const Re=Math.max(0,Math.min(1,(_e-T)/(I-T))),Fe=_e<.001?Ro.set(1,0,0):Ro.copy(ze).normalize();let Ie=Fe.x*S.z-Fe.z*S.x;Math.abs(Ie)<.05&&(Ie=1);const je=hi.set(-Fe.z,0,Fe.x);Ie<0&&je.negate();const Go=gi.copy(Fe).multiplyScalar(.7).addScaledVector(je,.3).normalize(),Ho=Math.min(1,(1-Re)*.9*60*t);S.lerp(Go,Ho).normalize()}}if(O){const ze=ts.subVectors(z,O.position);ze.y=0;const _e=ze.length();if(_e<I){const Re=Math.max(0,Math.min(1,(_e-T)/(I-T))),Fe=_e<.001?Ro.set(1,0,0):Ro.copy(ze).normalize();let Ie=Fe.x*S.z-Fe.z*S.x;Math.abs(Ie)<.05&&(Ie=1);const je=hi.set(-Fe.z,0,Fe.x);Ie<0&&je.negate();const Go=gi.copy(Fe).multiplyScalar(.7).addScaledVector(je,.3).normalize(),Ho=Math.min(1,(1-Re)*.9*60*t);S.lerp(Go,Ho).normalize()}}if(L){const ze=ts.subVectors(z,L.position);ze.y=0;const _e=ze.length();if(_e<I){const Re=Math.max(0,Math.min(1,(_e-T)/(I-T))),Fe=_e<.001?Ro.set(1,0,0):Ro.copy(ze).normalize();let Ie=Fe.x*S.z-Fe.z*S.x;Math.abs(Ie)<.05&&(Ie=1);const je=hi.set(-Fe.z,0,Fe.x);Ie<0&&je.negate();const Go=gi.copy(Fe).multiplyScalar(.7).addScaledVector(je,.3).normalize(),Ho=Math.min(1,(1-Re)*.9*60*t);S.lerp(Go,Ho).normalize()}}}S.normalize(),Zi=Math.atan2(S.x,S.z);const Te=i.speed*tn*60*t;if(te.position.addScaledVector(S,Te),z.x/M*(z.x/M)+z.z/E*(z.z/E)>1.01){const Be=Math.atan2(z.z,z.x);te.position.x=Math.cos(Be)*M*.98,te.position.z=Math.sin(Be)*E*.98}{const Be=re?re.position:R&&o.questionBox.mobile?o.questionBox.mobile.position:o.questionBox.position,Ze=te.position.x-Be.x,wt=te.position.z-Be.z,ze=Math.sqrt(Ze*Ze+wt*wt);if(ze<T){let _e;if(ze<.001){const Re=Math.random()*Math.PI*2;_e=Oo.set(Math.cos(Re),0,Math.sin(Re))}else _e=Oo.set(Ze,0,wt).normalize();te.position.x=Be.x+_e.x*(T+.02),te.position.z=Be.z+_e.z*(T+.02)}if(he){const _e=te.position.x-he.position.x,Re=te.position.z-he.position.z,Fe=Math.sqrt(_e*_e+Re*Re);if(Fe<T){let Ie;if(Fe<.001){const je=Math.random()*Math.PI*2;Ie=Oo.set(Math.cos(je),0,Math.sin(je))}else Ie=Oo.set(_e,0,Re).normalize();te.position.copy(he.position).addScaledVector(Ie,T+.02)}}if(O){const _e=te.position.x-O.position.x,Re=te.position.z-O.position.z,Fe=Math.sqrt(_e*_e+Re*Re);if(Fe<T){let Ie;if(Fe<.001){const je=Math.random()*Math.PI*2;Ie=Oo.set(Math.cos(je),0,Math.sin(je))}else Ie=Oo.set(_e,0,Re).normalize();te.position.copy(O.position).addScaledVector(Ie,T+.02)}}if(L){const _e=te.position.x-L.position.x,Re=te.position.z-L.position.z,Fe=Math.sqrt(_e*_e+Re*Re);if(Fe<T){let Ie;if(Fe<.001){const je=Math.random()*Math.PI*2;Ie=Oo.set(Math.cos(je),0,Math.sin(je))}else Ie=Oo.set(_e,0,Re).normalize();te.position.copy(L.position).addScaledVector(Ie,T+.02)}}}let $e=Math.atan2(S.x,S.z)-te.rotation.y;$e=Math.atan2(Math.sin($e),Math.cos($e));const xt=Math.min(1,6*t*tn);te.rotation.y+=$e*xt}{const z=da();if(L){const M=te.position.x-L.position.x,E=te.position.z-L.position.z,T=Math.sqrt(M*M+E*E);if(T<z){let I;if(T<.001){const k=Math.random()*Math.PI*2;I=Oo.set(Math.cos(k),0,Math.sin(k))}else I=Oo.set(M,0,E).normalize();te.position.copy(L.position).addScaledVector(I,z+.02)}}}const C=i.scale*f,w=te.scale.x,H=Math.min(1,.1*60*t),ee=bt.lerp(w,C,H);te.scale.set(ee,ee,ee),Ra&&Ra.update(t)}if(Xo&&o.boids&&o.boids.enabled!==!1&&Bc(t),Da&&Ea){const p=o.questionBox.shatter.fadeSpeed;let m=!0;fi.forEach(r=>{const y=r.userData.velocity,_=r.userData.rotVelocity;if(r.position.addScaledVector(y,t),r.rotation.x+=_.x,r.rotation.y+=_.y,r.rotation.z+=_.z,r.userData.lifetime-=p*t,r.userData.lifetime>0){const l=Math.max(.001,r.userData.lifetime/r.userData.initialLifetime),C=r.userData.initialScale*l;r.scale.set(C,C,C),r.material&&(r.material.opacity=l),m=!1}else r.scale.set(0,0,0)}),pi.forEach(r=>{const y=r.userData.velocity;if(r.position.addScaledVector(y,t),r.lookAt(De.position),r.rotation.z+=r.userData.rotVelocityZ,r.userData.lifetime-=p*t,r.userData.lifetime>0){const _=Math.max(.001,r.userData.lifetime/r.userData.initialLifetime),l=r.userData.initialScale*_;r.scale.set(l,l,1),r.material&&(r.material.opacity=_*.9),m=!1}else r.scale.set(0,0,0),r.material&&(r.material.opacity=0)}),m&&(fe.remove(Ea),fi.forEach(r=>{r.geometry&&r.geometry.dispose(),r.material&&r.material.dispose()}),pi.forEach(r=>{r.geometry&&r.geometry.dispose(),r.material&&r.material.dispose()}),Ea=null,fi=[],pi=[],Da=!1,$s?($s=!1,zl({regrowQuestionBox:!0})):Nl())}function Ye(i,p){const m=Math.max(0,Math.min(1,i));return p==="easeOutExpo"?m===1?1:1-Math.pow(2,-10*m):p==="easeOutQuart"?1-Math.pow(1-m,4):p==="easeOutBack"?1+2.70158*Math.pow(m-1,3)+1.70158*Math.pow(m-1,2):p==="linear"?m:1-Math.pow(1-m,3)}if(xo&&oe){const i=o.houdini3D&&o.houdini3D.pop||{},p=i.popDuration!==void 0?i.popDuration:450,m=performance.now()-xl,r=Math.min(1,m/Math.max(1,p)),y=i.easing||"easeOutExpo",_=Ye(r,y),l=i.popMultiplier!==void 0?i.popMultiplier:2.5;Fr(oe,1,_*l);const C=Math.max(0,1-r);if(oe.traverse(w=>{w.isMesh&&w.material&&(w.material.transparent=!0,w.material.opacity=C)}),tt&&zo){const w=o.houdini3D.shadowOpacity;zo.opacity=w*C*xe}Ba&&Rn.length>0&&Rn.forEach(w=>{const H=w.userData.velocity;if(w.position.addScaledVector(H,t),w.lookAt(De.position),w.rotation.z+=w.userData.rotVelocityZ,w.userData.lifetime-=t,w.userData.lifetime>0){const ee=Math.max(.001,w.userData.lifetime/w.userData.initialLifetime),z=w.userData.initialScale*ee;w.scale.set(z,z,1),w.material&&(w.material.opacity=ee)}else w.scale.set(0,0,0),w.material&&(w.material.opacity=0)}),r>=1&&(oe.visible=!1,tt&&(tt.visible=!1),Ba&&(fe.remove(Ba),Rn.forEach(w=>{w.geometry&&w.geometry.dispose(),w.material&&w.material.dispose()}),Ba=null,Rn=[]),xo=!1,tr?(tr=!1,_r()):fd())}if(!xo&&Io>0&&oe){const i=performance.now(),p=o.houdini3D&&o.houdini3D.pop||{},m=p.respawnDelay!==void 0?p.respawnDelay:100,r=p.respawnDuration!==void 0?p.respawnDuration:400,y=i-Io;if(y<m){const _=oe.userData.baseY!==void 0?oe.userData.baseY:o.houdini3D.desktop.position.y;oe.position.y=_,oe.userData.inflatedInfluence=0,Fr(oe,0,0),oe.visible=!1,tt&&(tt.visible=!1)}else{Ns||(Ns=!0,Wc());const _=Math.min(1,(y-m)/Math.max(1,r)),l=1-Math.pow(1-_,3);if(oe.visible=!0,oe.traverse(ee=>{ee.isMesh&&ee.material&&(ee.material.opacity=1)}),tt&&zo){tt.visible=!0;const z=o.houdini3D.shadowScale*l*f;tt.scale.set(z,z,1);const M=o.houdini3D.shadowOpacity;zo.opacity=M*l*f*xe}const H=o.houdini3D.scale*f*l;oe.scale.set(H,H,H),_>=.3&&!ue&&(ue=!0),_>=1&&(Io=0)}}if(bo&&O){const i=o.games3D||{},p=performance.now(),m=i.pop||{},r=m.pop0Duration!==void 0?m.pop0Duration:500,y=m.pop1Duration!==void 0?m.pop1Duration:450,_=r+y,l=p-gl,C=Math.min(1,l/Math.max(1,_)),w=l<r;!w&&!qs&&(qs=!0,Kc()),O.traverse(Te=>{Te.isMesh&&(w&&Te===zt||!w&&Te===Vt?Te.visible=!0:Te.visible=!1)});const ee=(i.rotation&&i.rotation.y!==void 0?i.rotation.y:90)*Math.PI/180,z=nr.setFromMatrixPosition(O.matrixWorld),M=De.position.x-z.x,E=De.position.z-z.z,T=Math.atan2(M,E);if(O.userData.initialCamAngle===void 0){const Te=(R&&i.mobile?i.mobile.position:null)||(i.desktop?i.desktop.position:{x:4.8,z:2});O.userData.initialCamAngle=Math.atan2(De.position.x-Te.x,De.position.z-Te.z)}const I=T-O.userData.initialCamAngle,k=ee-fe.rotation.y+I;if(O.rotation.y=k,We&&Pa){const Te=m.shadowFadeDuration!==void 0?m.shadowFadeDuration:600,Lt=Math.min(1,l/Math.max(1,Te)),gt=Math.max(0,1-Lt),$e=i.shadowY!==void 0?i.shadowY:.335,xt=O.position.y-$e,Be=i.shadowOpacity!==void 0?i.shadowOpacity:.66,Ze=Math.max(0,(1-xt*.45)*Be)*xe,wt=i.shadowScale!==void 0?i.shadowScale:2,ze=Math.max(.3,1-xt*.2)*wt*f;We.position.x=O.position.x,We.position.z=O.position.z,We.position.y=$e,We.scale.set(ze,ze,1),Pa.opacity=Ze*gt,We.visible=gt>.001}const S=1+C*.4,Ge=(i.scale||.086)*S*f;O.scale.set(Ge,Ge,Ge),C>=1&&(O.visible=!1,zt&&(zt.visible=!1),Vt&&(Vt.visible=!1),We&&(We.visible=!1),bo=!1,Ks?(Ks=!1,yr()):cd())}if(!bo&&yo>0&&O){const i=performance.now(),p=o.games3D&&o.games3D.pop||{},m=p.respawnDelay!==void 0?p.respawnDelay:100,r=p.respawnDuration!==void 0?p.respawnDuration:400,y=i-yo;if(y<m)O.visible=!1,We&&(We.visible=!1);else{js||(js=!0,eu());const _=Math.min(1,(y-m)/Math.max(1,r)),l=1-Math.pow(1-_,3);O.visible=!0,zt&&(zt.visible=!1),Vt&&(Vt.visible=!1);const C=o.games3D&&o.games3D.poseInterval||700;O.userData.poseTime===void 0&&(O.userData.poseTime=0),O.userData.poseTime+=t;const w=Math.floor(O.userData.poseTime/(C*.001))%2===1;if(go&&vo&&(go.visible=!w,vo.visible=w),We&&Pa){We.visible=!0;const M=o.games3D,E=M.shadowY,T=O.position.y-E,I=M.shadowScale,S=Math.max(.3,1-T*.2)*I*f*l;We.scale.set(S,S,1);const j=M.shadowOpacity,Ge=Math.max(0,(1-T*.45)*j)*xe;Pa.opacity=Ge*l}const z=o.games3D.scale*f*l;O.scale.set(z,z,z),_>=.3&&!ue&&(ue=!0),_>=1&&(yo=0)}}if(!Da&&Lo>0&&re){const i=performance.now(),p=o.questionBox.shatter,m=p.respawnDelay,r=p.respawnDuration,y=i-Lo;if(y<m)re.visible=!1,lt&&(lt.visible=!1);else{Os||(Os=!0,Xc()),re.visible=!0,lt&&(lt.visible=!0);const _=y-m,l=Math.min(1,_/r),C=1-Math.pow(1-l,3),H=o.questionBox.scale*C*f;if(re.scale.set(H,H,H),lt&&Un){const ee=o.questionBox.shadowY,z=re.position.y-ee,M=o.questionBox.shadowScale,E=o.questionBox.shadowOpacity,T=Math.max(.3,1-z*.2)*M,I=Math.max(0,(1-z*.45)*E),k=T*C*f;lt.scale.set(k,k,1),Un.opacity=I*C*f*xe}l>=.3&&!ue&&(ue=!0),l>=1&&(Lo=0)}}if(re&&o.questionBox&&o.questionBox.enabled!==!1&&!Da){const i=F?o.questionBox.hoverSpinMultiplier:1;re.rotation.x+=o.questionBox.rotationSpeedX*i,re.rotation.y+=o.questionBox.rotationSpeedY*i;const p=o.questionBox.floatFrequency,m=o.questionBox.floatAmplitude,r=re.userData.baseY!==void 0?re.userData.baseY:o.questionBox.position.y;if(re.position.x=re.userData.baseX!==void 0?re.userData.baseX:o.questionBox.position.x,re.position.z=re.userData.baseZ!==void 0?re.userData.baseZ:o.questionBox.position.z,re.position.y=r+Math.sin(performance.now()*p)*m,!(Lo>0)){const y=o.questionBox.scale,l=y*(F?1.15:1)*f,C=re.scale.x,w=bt.lerp(C,l,.1);re.scale.set(w,w,w),F&&y>0&&w/(y*f)>=1.12&&(Zn=!0)}}if(oe&&o.houdini3D&&o.houdini3D.enabled!==!1&&!xo){const i=B?1:0,p=oe.userData.inflatedInfluence!==void 0?oe.userData.inflatedInfluence:0,m=bt.lerp(p,i,.1);oe.userData.inflatedInfluence=m,B&&m>=.85&&(Jn=!0),Fr(oe,m,0);const r=o.houdini3D,y=r&&r.sway?r.sway:{},_=y.enabled!==!1,l=(r.rotation&&r.rotation.x!==void 0?r.rotation.x:0)*(Math.PI/180),C=(r.rotation&&r.rotation.y!==void 0?r.rotation.y:210)*(Math.PI/180),w=(r.rotation&&r.rotation.z!==void 0?r.rotation.z:0)*(Math.PI/180);if(Qr.set(l,C,w,"YXZ"),Ei.setFromEuler(Qr),qn.set(0,0,0),_){const E=performance.now()*.001,T=y.x&&typeof y.x=="object"?y.x:null,I=y.y&&typeof y.y=="object"?y.y:null,k=y.z&&typeof y.z=="object"?y.z:null;let S=0,j=0,Ge=0;if(T||I||k){if(T&&T.enabled!==!1){const $e=T.amount!==void 0?T.amount:0,xt=T.speed!==void 0?T.speed:1,Be=T.phase||0;S=Math.sin(E*xt+Be)*($e*(Math.PI/180))}if(I&&I.enabled!==!1){const $e=I.amount!==void 0?I.amount:0,xt=I.speed!==void 0?I.speed:1.5,Be=I.phase||0;j=Math.sin(E*xt+Be)*($e*(Math.PI/180))}if(k&&k.enabled!==!1){const $e=k.amount!==void 0?k.amount:0,xt=k.speed!==void 0?k.speed:1.2,Be=k.phase||0;Ge=Math.sin(E*xt+Be)*($e*(Math.PI/180))}}else{const $e=y.amount!==void 0?y.amount:15,xt=y.speed!==void 0?y.speed:1.5,Be=(y.axis||"y").toLowerCase(),Ze=Math.sin(E*xt)*($e*(Math.PI/180));Be==="x"?S=Ze:Be==="z"?Ge=Ze:j=Ze}Vr.set(S,j,Ge,"YXZ"),ks.setFromEuler(Vr),Ls.copy(Ei).multiply(ks);const Te=y.pivotOffset&&y.pivotOffset.x||0,Lt=y.pivotOffset&&y.pivotOffset.y||0,gt=y.pivotOffset&&y.pivotOffset.z||0;(Lt!==0||Te!==0||gt!==0)&&(Is.set(Te,Lt,gt),Wr.copy(Is).applyQuaternion(ks),qn.copy(Wr.sub(Is)).applyQuaternion(Ei))}else Ls.copy(Ei);const H=r.hoverYOffset,ee=oe.userData.baseY!==void 0?oe.userData.baseY:r.desktop.position.y,z=oe.userData.baseX!==void 0?oe.userData.baseX:r.desktop.position.x,M=oe.userData.baseZ!==void 0?oe.userData.baseZ:r.desktop.position.z;if(oe.position.set(z+qn.x,ee+H*m+qn.y,M+qn.z),oe.quaternion.copy(Ls),!(Io>0)){if(oe.traverse(S=>{S.isMesh&&S.material&&(S.material.opacity=1)}),tt&&zo){tt.visible=!0;const S=o.houdini3D.shadowOpacity;zo.opacity=S*xe}const T=r.scale*f,I=oe.scale.x,k=bt.lerp(I,T,.1);oe.scale.set(k,k,k)}}if(he&&o.web3D&&o.web3D.enabled!==!1){const i=o.web3D,p=ro?i.hoverSpinMultiplier!==void 0?i.hoverSpinMultiplier:2.5:1;let m=1;if(ta){const M=i.clickAnimation||{},E=M.clickSpinMultiplier!==void 0?M.clickSpinMultiplier:8,T=performance.now()-Gs,I=M.duration!==void 0?M.duration:1200,k=Math.min(1,T/I),S=Math.pow(1-k,2);m=bt.lerp(1,E,S)}const y=(i.rotationSpeedY!==void 0?i.rotationSpeedY:i.rotationSpeed||.015)*p*m,_=i.rotationAxis||"y";if(Ht)if(typeof _=="string"){const M=_.toLowerCase();M==="x"?Ht.rotation.x+=y:M==="z"?Ht.rotation.z+=y:Ht.rotation.y+=y}else typeof _=="object"?(Ht.rotation.x+=(_.x||0)*y,Ht.rotation.y+=(_.y||0)*y,Ht.rotation.z+=(_.z||0)*y):Ht.rotation.y+=y;if(Ko){const M=i.moon||{},T=(M.rotationSpeed!==void 0?M.rotationSpeed:M.rotationSpeedY!==void 0?M.rotationSpeedY:.01)*p*m,I=M.rotationAxis||"y";if(typeof I=="string"){const k=I.toLowerCase();k==="x"?Ko.rotation.x+=T:k==="z"?Ko.rotation.z+=T:Ko.rotation.y+=T}else typeof I=="object"?(Ko.rotation.x+=(I.x||0)*T,Ko.rotation.y+=(I.y||0)*T,Ko.rotation.z+=(I.z||0)*T):Ko.rotation.y+=T}const l=[Us,Xs,Ys].filter(Boolean);if(l.length>0){const M=i.signal||{};if(M.enabled!==!1){const E=M.interval||530,T=ro?M.hoverSpeedMultiplier!==void 0?M.hoverSpeedMultiplier:3.5:1,I=ta?M.clickSpeedMultiplier!==void 0?M.clickSpeedMultiplier*(m/8):m*1.5:1,k=T*I;rl+=t*1e3*k;const S=Math.floor(rl/E)%l.length;M.billboard!==!1&&De.getWorldPosition(es),l.forEach((j,Ge)=>{const Te=Ge===S;j.visible=Te,Te&&M.billboard!==!1&&(j.lookAt(es),M.billboardRotationX&&j.rotateX(M.billboardRotationX*Math.PI/180),M.billboardRotationY&&j.rotateY(M.billboardRotationY*Math.PI/180),M.billboardRotationZ&&j.rotateZ(M.billboardRotationZ*Math.PI/180))})}else l.forEach(E=>E.visible=!0)}const C=i.hoverYOffset!==void 0?i.hoverYOffset:0,w=he.userData.baseY!==void 0?he.userData.baseY:i.desktop?i.desktop.position.y:.6,H=i.floatFrequency!==void 0?i.floatFrequency:.003,ee=i.floatAmplitude!==void 0?i.floatAmplitude:.1,z=Math.sin(performance.now()*H)*ee;if(_n>0){const M=i.clickAnimation||{},E=M.respawnDelay!==void 0?M.respawnDelay:50,T=M.respawnDuration!==void 0?M.respawnDuration:400,I=performance.now()-_n;if(I<E){const k=i.scale||.62,S=i.hoverScale!==void 0?i.hoverScale:1.15,j=k*S*f;he.scale.set(j,j,j),he.position.y=w+C+z,he.userData.hoverInfluence=1}else{zs||(zs=!0,ld());const k=Math.min(1,(I-E)/Math.max(1,T)),S=1-Math.pow(1-k,3),j=i.scale||.62,Ge=i.hoverScale!==void 0?i.hoverScale:1.15,Te=j*Ge*f,Lt=j*1*f,gt=bt.lerp(Te,Lt,S);he.scale.set(gt,gt,gt);const $e=C*(1-S);he.position.y=w+$e+z,he.userData.hoverInfluence=1-S,k>=.3&&!ue&&(ue=!0),k>=1&&(_n=0)}}else if(ta||Eo||ra){const M=i.scale||.62,E=i.hoverScale!==void 0?i.hoverScale:1.15,T=M*E*f;he.scale.set(T,T,T),he.position.y=w+C+z,he.userData.hoverInfluence=1}else{const M=ro?1:0,E=he.userData.hoverInfluence!==void 0?he.userData.hoverInfluence:0,T=bt.lerp(E,M,.1);he.userData.hoverInfluence=T,he.position.y=w+C*T+z;const I=i.scale||.62,k=ro?i.hoverScale!==void 0?i.hoverScale:1.15:1,S=I*k*f,j=he.scale.x,Ge=bt.lerp(j,S,.1);he.scale.set(Ge,Ge,Ge),ro&&j>=S*.98&&(Kn=!0)}}if(O&&o.games3D&&o.games3D.enabled!==!1&&!bo){if(!(yo>0)){const i=o.games3D,p=Ja||Ma;O.userData.poseTime===void 0&&(O.userData.poseTime=0);const m=p?i.hoverPoseSpeedMultiplier:1;O.userData.poseTime+=t*m;const r=i.poseInterval*.001,y=Math.floor(O.userData.poseTime/r)%2===1;go&&vo&&(go.visible=!y,vo.visible=y),zt&&(zt.visible=!1),Vt&&(Vt.visible=!1),O.userData.floatTime===void 0&&(O.userData.floatTime=0),p&&i.pauseFloatOnHover!==!1||(O.userData.floatTime+=t);const l=i.floatFrequency,C=i.floatAmplitude,w=O.userData.baseY!==void 0?O.userData.baseY:i.desktop?i.desktop.position.y:.7,H=p?i.hoverYOffset:0,ee=O.userData.currentHoverY!==void 0?O.userData.currentHoverY:0,z=bt.lerp(ee,H,.1);O.userData.currentHoverY=z;const M=Math.sin(O.userData.floatTime*l*1e3)*C;O.position.y=w+z+M;const E=i.lookAtCamera||{};if(E.enabled!==!1){const Te=(i.rotation&&i.rotation.y!==void 0?i.rotation.y:90)*Math.PI/180,Lt=nr.setFromMatrixPosition(O.matrixWorld),gt=De.position.x-Lt.x,$e=De.position.z-Lt.z,xt=Math.atan2(gt,$e);if(O.userData.initialCamAngle===void 0){const Re=(R&&i.mobile?i.mobile.position:null)||(i.desktop?i.desktop.position:{x:4.8,z:2});O.userData.initialCamAngle=Math.atan2(De.position.x-Re.x,De.position.z-Re.z)}const Be=xt-O.userData.initialCamAngle;let wt=Te-fe.rotation.y+Be-O.rotation.y;wt=Math.atan2(Math.sin(wt),Math.cos(wt));const ze=E.speed!==void 0?E.speed:.04,_e=1-Math.pow(1-Math.min(1,ze*60),t);O.rotation.y+=wt*_e}const T=i.scale,I=p?i.hoverScale:1,k=T*I*f,S=O.scale.x,j=bt.lerp(S,k,.1);O.scale.set(j,j,j),p&&S>=k*.98&&(ii=!0)}}if(L&&o.ar3D&&o.ar3D.enabled!==!1){const i=o.ar3D,p=(di||na)&&!lo&&qt===0&&!ss()&&!Zt&&!uo;!lo&&qt===0?p&&!Dn?(Dn=!0,ci=!1,Co&&Bn(Co),Zc()):!p&&Dn&&(Dn=!1,jt&&Bn(jt),ci&&dd(),ci=!1):(Dn=!1,ci=!1);const m=i.scale,r=i.hoverScale,y=i.hoverYOffset,_=i.floatFrequency,l=i.floatAmplitude,C=Math.sin(performance.now()*_)*l,w=L.userData.baseY!==void 0?L.userData.baseY:i.desktop?i.desktop.position.y:1.3;if(ss()||Zt||uo){const H=m*r*f;L.scale.set(H,H,H),L.position.y=w+y,L.userData.currentHoverY=y;const ee=(i.rotation&&i.rotation.y!==void 0?i.rotation.y:90)*Math.PI/180;L.rotation.y=ee+Math.PI-fe.rotation.y,Co&&Bn(Co)}else if(qt>0){const H=i.clickAnimation||{},ee=H.respawnDelay!==void 0?H.respawnDelay:50,z=H.respawnDuration!==void 0?H.respawnDuration:400,M=performance.now()-qt;if(M<ee){const E=m*r*f;L.scale.set(E,E,E),L.position.y=w+y+C,L.userData.currentHoverY=y}else{Ws||(Ws=!0,dd());const E=Math.min(1,(M-ee)/Math.max(1,z)),T=1-Math.pow(1-E,3),I=m*r*f,k=m*1*f,S=bt.lerp(I,k,T);L.scale.set(S,S,S);const j=y*(1-T);L.position.y=w+j+C,L.userData.currentHoverY=j,E>=.3&&!ue&&(ue=!0),E>=1&&(qt=0)}}else if(lo){const H=i.clickAnimation||{},ee=Ct&&Ct.getClip()?Ct.getClip().duration*1e3:1200,z=H.duration!==void 0?H.duration:ee,M=performance.now()-Vs,E=Math.min(1,M/z),T=m*r*f,I=L.scale.x,k=bt.lerp(I,T,.25);L.scale.set(k,k,k);const S=L.userData.currentHoverY!==void 0?L.userData.currentHoverY:0,j=bt.lerp(S,y,.25);L.userData.currentHoverY=j,L.position.y=w+j+C,E>=1&&(lo=!1,Js?(Js=!1,vr()):(jt&&Bn(jt),hd()))}else{const ee=m*(p?r:1)*f,z=L.scale.x,M=bt.lerp(z,ee,.1);L.scale.set(M,M,M);const E=p?y:0,T=L.userData.currentHoverY!==void 0?L.userData.currentHoverY:0,I=bt.lerp(T,E,.1);L.userData.currentHoverY=I,L.position.y=w+I+C,p&&z>=ee*.98&&(ci=!0)}if(Mc(t),en){const H=i.hoverWalkAnimSpeed,ee=i.idleWalkAnimSpeed,z=i.animTransitionDuration,M=i.clickAnimation||{},E=M.shakeTransitionDuration!==void 0?M.shakeTransitionDuration:.06,T=E*1e3;let I=0,k=0,S=1;if(lo){const Lt=Ct&&Ct.getClip()?Ct.getClip().duration*1e3:1200,gt=M.duration!==void 0?M.duration:Lt;performance.now()-Vs<Math.max(0,gt-T)?k=1:k=0,I=0,S=1}else qt>0?(k=0,I=0,S=1):si?(k=0,I=1,S=H):p?(k=0,I=0,S=1):ko==="walking"?(k=0,I=1,S=ee):(k=0,S=1);en.timeScale=S;const j=Math.min(1,1/Math.max(.01,z)*t),Ge=Math.min(1,1/Math.max(.005,E)*t);ji+=(I-ji)*j,qi+=(k-qi)*Ge;const Te=Math.max(0,1-ji-qi);Ca&&(Ca.enabled=!0,Ca.setEffectiveWeight(ji)),Ct&&(Ct.enabled=!0,Ct.setEffectiveWeight(qi)),ka&&(ka.enabled=!0,ka.setEffectiveWeight(Te)),en.update(t)}}if(ta&&o.web3D){const i=o.web3D,p=i.clickAnimation||{},m=p.duration!==void 0?p.duration:1200,r=performance.now()-Gs,y=Math.min(1,r/m),_=Math.pow(1-y,2);if(ea){const l=i.materials&&i.materials.grid&&i.materials.grid.emissiveIntensity!==void 0?i.materials.grid.emissiveIntensity:1,C=p.emissiveFlashIntensity!==void 0?p.emissiveFlashIntensity:4.5;ea.emissiveIntensity=bt.lerp(l,C,_)}if(An){const l=i.materials&&i.materials.moon&&i.materials.moon.emissiveIntensity!==void 0?i.materials.moon.emissiveIntensity:1,C=p.moonEmissiveFlashIntensity!==void 0?p.moonEmissiveFlashIntensity:3.5;An.emissiveIntensity=bt.lerp(l,C,_)}if(Pt&&qa.length>0&&(Ht?Ht.getWorldPosition(Ds):he&&he.getWorldPosition(Ds),Es.copy(Ds),fe&&fe.worldToLocal(Es),Pt.position.copy(Es),qa.forEach(l=>{const C=l.userData.direction,w=l.userData.expSpeed;l.userData.distance+=w*t;const H=l.userData.distance;l.position.set(C.x*H,C.y*H,C.z*H),l.getWorldPosition(jr),Qa.copy(C).transformDirection(fe.matrixWorld).normalize(),Bs.subVectors(De.position,jr).normalize();const ee=Bs.dot(Qa);xn.copy(Bs).addScaledVector(Qa,-ee),xn.lengthSq()<1e-4&&xn.set(0,0,1).addScaledVector(Qa,-Qa.z),xn.normalize(),qr.crossVectors(Qa,xn).normalize(),$r.makeBasis(qr,Qa,xn),Zr.copy(fe.matrixWorld).invert();const z=Zr.multiply($r);l.quaternion.setFromRotationMatrix(z),l.scale.set(1,1,1),l.material&&(l.material.opacity=_*.95)})),y>=1){if(ta=!1,ea){const l=i.materials&&i.materials.grid&&i.materials.grid.emissiveIntensity!==void 0?i.materials.grid.emissiveIntensity:1;ea.emissiveIntensity=l}if(An){const l=i.materials&&i.materials.moon&&i.materials.moon.emissiveIntensity!==void 0?i.materials.moon.emissiveIntensity:1;An.emissiveIntensity=l}Pt&&(Pt.parent&&Pt.parent.remove(Pt),qa.forEach(l=>{l.geometry&&l.geometry.dispose(),l.material&&l.material.dispose()}),Pt=null,qa=[]),er?(er=!1,wr()):pd()}}if(Mo&&Ui&&te&&o.linkedin3D){const i=o.linkedin3D,p=o.questionBox,m=i.shadowY;if(Hs&&(Hs.visible=!1),La&&o.ar3D){const C=o.ar3D;La.visible=!!C.showWalkRadius;const w=ls(),H=C.shadowY;La.position.set(w.x,H+.005,w.z)}if(Xi){if(re){const C=o.questionBox.shadowY;Xi.position.set(re.position.x,C,re.position.z)}Xi.visible=!1}if(ei){if(oe){const C=o.questionBox.shadowY;ei.position.set(oe.position.x,C,oe.position.z)}ei.visible=!1}if(ti){if(he){const C=o.questionBox.shadowY;ti.position.set(he.position.x,C,he.position.z)}ti.visible=!1}if(Sn){if(O){const C=o.questionBox.shadowY;Sn.position.set(O.position.x,C,O.position.z)}Sn.visible=!1}if(En){if(L){const C=o.ar3D&&o.ar3D.shadowY!==void 0?o.ar3D.shadowY:.22;En.position.set(L.position.x,C,L.position.z)}En.visible=!1}$a&&($a.visible=!1);const r=_l();te.position.y=r.y!==void 0?r.y:.8,Mo.position.set(te.position.x,m,te.position.z);const _=p.shadowScale*f*.45;Mo.scale.set(_,_,1);const l=i.shadowOpacity;Ui.opacity=l*f*xe}const Ee=ke.hideShadows===!0||ke.shadows===!1;if(Po&&Ni&&he&&o.web3D&&(Po.visible=!Ee&&he.visible,Po.visible)){const i=o.web3D,p=i.shadowY!==void 0?i.shadowY:.33;Po.position.set(he.position.x,p,he.position.z);const r=(i.shadowScale!==void 0?i.shadowScale:1.6)*f;Po.scale.set(r,r,1);const y=i.shadowOpacity!==void 0?i.shadowOpacity:.85;Ni.opacity=y*f*xe}if(We&&Pa&&O&&o.games3D&&!(bo||yo>0)){if(!O.visible||Do||sa)We.visible=!1;else if(We.visible=!Ee,!Ee){const i=o.games3D,p=i.shadowY;We.position.x=O.position.x,We.position.z=O.position.z,We.position.y=p;const m=i.shadowScale,r=O.position.y-p,y=Math.max(.3,1-r*.2)*m*f;We.scale.set(y,y,1);const _=i.shadowOpacity;Pa.opacity=Math.max(0,(1-r*.45)*_)*xe}}if(co&&$i&&L&&o.ar3D&&(co.visible=!Ee&&L.visible,co.visible)){const i=o.ar3D,p=i.shadowY;co.position.x=L.position.x,co.position.z=L.position.z,co.position.y=p;const m=i.shadowScale,r=L.position.y-p,y=Math.max(.3,1-r*.2)*m*f;co.scale.set(y,y,1);const _=i.shadowOpacity;$i.opacity=Math.max(0,(1-r*.45)*_)*xe}if(lt&&Un&&re&&o.questionBox&&!(Da||Lo>0)){if(!re.visible||Ut||$t)lt.visible=!1;else if(lt.visible=!Ee,!Ee){const i=o.questionBox,p=i.shadowY;lt.position.x=re.position.x,lt.position.z=re.position.z,lt.position.y=p;const m=re.position.y-p,r=i.shadowScale,y=Math.max(.3,1-m*.2)*r;lt.scale.set(y,y,1);const _=i.shadowOpacity;Un.opacity=Math.max(0,(1-m*.45)*_)*xe}}if(tt&&zo&&oe&&o.houdini3D&&!(xo||Io>0)){if(!oe.visible||Bo||la)tt.visible=!1;else if(tt.visible=!Ee,!Ee){const i=o.houdini3D.shadowY;tt.position.x=oe.position.x,tt.position.z=oe.position.z,tt.position.y=i;const m=o.houdini3D.shadowScale*f;tt.scale.set(m,m,1);const r=o.houdini3D.shadowOpacity;zo.opacity=r*f*xe}}Mo&&(Mo.visible=!Ee);const D=ke.hideBoidShadows===!0||ke.boidShadows===!1||Ee;if(Dt&&(Dt.visible=!D),wo&&o.site.backgroundColorTop&&o.site.backgroundColorBottom){const i=o.renderStyles&&Array.isArray(o.renderStyles.activeModes)?o.renderStyles.activeModes:["default"],p=o.renderStyles&&o.renderStyles.currentModeIndex!==void 0?o.renderStyles.currentModeIndex:0,m=i[p%i.length]||"default",r=o.renderStyles&&o.renderStyles[m]||{},_=window.innerWidth<=window.innerHeight?o.vignette.enabledMobile:o.vignette.enabled!==!1,l=r.disableVignette===!0||r.vignette===!1,C=_&&!l,w=r.backgroundColor||r.bgColor||r.solidBackgroundColor,H=!!w;wo.uniforms.colorTop.value.set(o.site.backgroundColorTop),wo.uniforms.colorBottom.value.set(o.site.backgroundColorBottom),wo.uniforms.offset.value=o.vignette.offset,wo.uniforms.darkness.value=o.vignette.darkness,wo.uniforms.vignetteEnabled.value=C,wo.uniforms.useSolidBackground.value=H,H&&wo.uniforms.solidBackgroundColor&&wo.uniforms.solidBackgroundColor.value.set(w);const ee=r.textColor||o.site&&o.site.textColor||"#ffffff",z=r.hoverColor||r.hoverColorText||o.site&&o.site.hoverColorText||"#91bfff";document.documentElement.style.setProperty("--text-color",ee,"important"),document.documentElement.style.setProperty("--hover-color",z,"important"),o.interaction&&(o.interaction.hoverColor3D=z);const M=document.getElementById("bg");if(H)M&&(M.style.background=w),dt&&dt.setClearColor(new ne(w),1);else{const E=`linear-gradient(to bottom, ${o.site.backgroundColorTop}, ${o.site.backgroundColorBottom})`;M&&(M.style.background=E),dt&&dt.setClearColor(0,0)}}if(J&&o.renderStyles){const i=o.renderStyles,p=Array.isArray(i.activeModes)?i.activeModes:["default"],m=(i.currentModeIndex||0)%p.length,r=p[m]||"default",y=Ul[r]!==void 0?Ul[r]:0,_=dt.getPixelRatio();if(J.uniforms.resolution.value.set(window.innerWidth*_,window.innerHeight*_),J.uniforms.uTime.value=performance.now()*.001,J.uniforms.mode.value=y,J.enabled=y!==0,y===1){const l=i.multiBit||{};J.uniforms.colorLevels.value=l.colorLevels!==void 0?l.colorLevels:6,J.uniforms.pixelSize.value=l.pixelSize!==void 0?l.pixelSize:2,J.uniforms.ditherStrength.value=l.ditherStrength!==void 0?l.ditherStrength:.25}else if(y===2){const l=i.oneBit||{};J.uniforms.pixelSize.value=l.pixelSize!==void 0?l.pixelSize:2,J.uniforms.ditherStrength.value=l.ditherStrength!==void 0?l.ditherStrength:.35,J.uniforms.darkColor&&J.uniforms.darkColor.value.set(l.darkColor||"#050510"),J.uniforms.lightColor&&J.uniforms.lightColor.value.set(l.lightColor||"#e6e6fa")}else if(y===3){const l=i.pixelated||{};J.uniforms.pixelatedPixelSize.value=l.pixelSize!==void 0?l.pixelSize:4,J.uniforms.pixelatedColorLevels.value=l.colorLevels!==void 0?l.colorLevels:16,J.uniforms.scanlineIntensity.value=l.scanlineIntensity!==void 0?l.scanlineIntensity:.08}else if(y===4){const l=i.gameBoy||{};J.uniforms.gbPixelSize.value=l.pixelSize!==void 0?l.pixelSize:3,J.uniforms.gbC0&&J.uniforms.gbC0.value.set(l.c0||"#0f380f"),J.uniforms.gbC1&&J.uniforms.gbC1.value.set(l.c1||"#306230"),J.uniforms.gbC2&&J.uniforms.gbC2.value.set(l.c2||"#8bac0f"),J.uniforms.gbC3&&J.uniforms.gbC3.value.set(l.c3||"#9bbc0f")}else if(y===5){const l=i.vhs||{};J.uniforms.vhsAberration.value=l.chromaticAberration!==void 0?l.chromaticAberration:.006,J.uniforms.vhsJitter.value=l.vhsJitter!==void 0?l.vhsJitter:.003,J.uniforms.vhsNoise.value=l.noiseIntensity!==void 0?l.noiseIntensity:.12}else if(y===6){const l=i.halftone||{};J.uniforms.halftoneScale.value=l.dotScale!==void 0?l.dotScale:4,J.uniforms.halftoneAngle.value=l.angle!==void 0?l.angle:.785398}else if(y===7){const l=i.blueprint||{};J.uniforms.blueprintGrid.value=l.gridScale!==void 0?l.gridScale:32,J.uniforms.blueprintBg&&J.uniforms.blueprintBg.value.set(l.bgColor||"#001b3a"),J.uniforms.blueprintLine&&J.uniforms.blueprintLine.value.set(l.lineColor||"#00f0ff")}else if(y===8){const l=i.thermal||{};J.uniforms.thC0&&J.uniforms.thC0.value.set(l.c0||"#000033"),J.uniforms.thC1&&J.uniforms.thC1.value.set(l.c1||"#550088"),J.uniforms.thC2&&J.uniforms.thC2.value.set(l.c2||"#cc0066"),J.uniforms.thC3&&J.uniforms.thC3.value.set(l.c3||"#ff8800"),J.uniforms.thC4&&J.uniforms.thC4.value.set(l.c4||"#ffffff")}else if(y===9){const l=i.ascii||{};J.uniforms.asciiCellSize.value=l.cellSize!==void 0?l.cellSize:8,J.uniforms.asciiColorLevels.value=l.colorLevels!==void 0?l.colorLevels:4,J.uniforms.asciiBrightness.value=l.brightness!==void 0?l.brightness:1.1,J.uniforms.asciiContrast.value=l.contrast!==void 0?l.contrast:1.8,J.uniforms.asciiCharacterWeight.value=l.characterWeight!==void 0?l.characterWeight:1.3,J.uniforms.asciiUseSolidColor.value=l.useSolidColor!==void 0?!!l.useSolidColor:!0,J.uniforms.asciiDebugRawScene.value=l.debugRawScene!==void 0?!!l.debugRawScene:!1,J.uniforms.asciiColor&&J.uniforms.asciiColor.value.set(l.greenTint||"#00ff66")}else if(y===10){const l=i.anaglyph||{};J.uniforms.anaglyphShift.value=l.shift!==void 0?l.shift:.005}}if(o.interaction&&o.interaction.outline){const i=o.interaction.outline.edgeStrength,p=o.interaction.outline.edgeGlow,m=o.interaction.outline.edgeThickness;Yt&&Yt.edgeStrength!==i&&[Yt,Kt,eo].forEach(r=>{r&&(r.edgeStrength=i,r.edgeGlow=p,r.edgeThickness=m)})}if(Xt&&o.questionBox){const i=o.questionBox.glass;Xt.color.set(i.color),Xt.transmission=i.transmission,Xt.roughness=i.roughness,Xt.ior=i.ior,Xt.opacity=i.opacity,Xt.reflectivity=i.reflectivity,Xt.clearcoat=i.clearcoat,Xt.clearcoatRoughness=i.clearcoatRoughness}if(No&&o.questionBox){const i=o.questionBox.metal,p=i.colorShiftSpeed;{const m=performance.now()*.001*p%1;No.color.setHSL(m,1,.5)}No.metalness=i.metalness,No.roughness=i.roughness,No.normalScale&&No.normalScale.set(i.normalScale,i.normalScale)}fo.render()}nd();function ms(e,t){if(typeof ht<"u"&&ht)return!0;if(e===void 0||t===void 0)return!1;if(e===Jr&&t===Kr)return Oi;Jr=e,Kr=t;const n=document.elementFromPoint(e,t);return n?(Oi=!!n.closest("#mainnavlinks, #home, #linkedin-desktop-wrapper, #linkedin-desktop, #linkedin-mobile, #mobilenavmenu, #mobilenavlinksbutton, #plaintext-link, .link, .mobilelink, .logolink, #aboutmepanel, #aboutmepanelwrapper, .logo-tint-mask, .about-overlay, .ar-overlay, .games-overlay, .web-overlay, .houdini-overlay, .about-panel, .ar-panel, .games-panel, .web-panel, .houdini-panel"),Oi):(Oi=!1,!1)}const po=new q;function id(e,t){if(!ue||Ft!=="main"||ct()||ht||ms(e,t))return null;el.set(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),Ke.setFromCamera(el,De);const n=2.5;return re&&Lo===0&&(re.getWorldPosition(po),Ke.ray.distanceToPoint(po)<n&&Ke.intersectObject(re,!0).length>0)?{type:"questionBox"}:oe&&!xo&&Io===0&&(oe.getWorldPosition(po),Ke.ray.distanceToPoint(po)<n&&Ke.intersectObject(oe,!0).length>0)?{type:"houdiniToy"}:te&&Jt!=="falling"&&(te.getWorldPosition(po),Ke.ray.distanceToPoint(po)<n&&Ke.intersectObject(te,!0).length>0)?{type:"bug"}:he&&!ta&&_n===0&&(he.getWorldPosition(po),Ke.ray.distanceToPoint(po)<n&&Ke.intersectObject(he,!0).length>0)?{type:"webGlobe"}:O&&!bo&&yo===0&&(O.getWorldPosition(po),Ke.ray.distanceToPoint(po)<n&&Ke.intersectObject(O,!0).length>0)?{type:"gamesAlien"}:L&&!lo&&qt===0&&(L.getWorldPosition(po),Ke.ray.distanceToPoint(po)<n&&Ke.intersectObject(L,!0).length>0)?{type:"arPhone"}:null}let sn=null;function sd(e,t){if(!De)return null;const n=e/window.innerWidth*2-1,s=-(t/window.innerHeight)*2+1;tl.set(n,s),ol.setFromCamera(tl,De);const d=-.4,v=ol.ray;if(Math.abs(v.direction.y)<1e-4)return null;const g=(d-v.origin.y)/v.direction.y;if(g<0)return null;const f=v.origin.x+g*v.direction.x,F=v.origin.z+g*v.direction.z,B=Math.sqrt(f*f+F*F);return{angle:Math.atan2(f,F),radius:B}}let Tr={x:0,y:0};const rd=e=>{if(Tr={x:e.clientX,y:e.clientY},ht||ct()||ms(e.clientX,e.clientY)){ba=null;return}ba=id(e.clientX,e.clientY),!(!ue||Ft!=="main"||window.innerWidth<=window.innerHeight)&&(e.target&&e.target.closest&&(e.target.closest("a")||e.target.closest("button")||e.target.closest("#mainnavlinks")||e.target.closest(".link")||e.target.closest("#mobilenavlinksbutton")||e.target.closest("#mobilenavmenu")||e.target.closest(".logolink"))||(nn=!0,hr={x:e.clientX,y:e.clientY},sn=sd(e.clientX,e.clientY)))};window.addEventListener("pointerdown",rd,{passive:!0});const yi=document.getElementById("bg");yi&&yi.addEventListener("pointerdown",rd,{passive:!0}),window.addEventListener("pointermove",e=>{if(nn){const t=sd(e.clientX,e.clientY);if(t!==null&&sn!==null){let n=t.angle-sn.angle;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;const s=o.interaction&&o.interaction.minDragRadiusThreshold!==void 0?o.interaction.minDragRadiusThreshold:3.5,d=(t.radius+sn.radius)*.5,v=Math.min(1,Math.max(0,d/s));n*=v,Na+=n}else{const n=e.clientX-hr.x,d=e.clientY<window.innerHeight*.45?-1:1;Na+=n*.0015*d}hr={x:e.clientX,y:e.clientY},sn=t,so.set(-9999,-9999)}},{passive:!0}),window.addEventListener("pointerup",()=>{nn=!1,sn=null},{passive:!0}),window.addEventListener("pointercancel",()=>{nn=!1,sn=null},{passive:!0}),window.addEventListener("wheel",e=>{if(ht||ct()||e.target&&e.target.closest&&(e.target.closest("#aboutmepanel")||e.target.closest("#aboutmepanelwrapper")||e.target.closest(".about-overlay")||e.target.closest(".ar-overlay")||e.target.closest(".games-overlay")||e.target.closest(".web-overlay")||e.target.closest(".houdini-overlay")||e.target.closest(".about-panel")||e.target.closest(".ar-panel")||e.target.closest(".games-panel")||e.target.closest(".web-panel")||e.target.closest(".houdini-panel")||e.target.closest("#mobilenavmenu"))||!ue||Ft!=="main"||nn||window.innerWidth<=window.innerHeight)return;e.preventDefault();let n=e.deltaY||0,s=e.deltaX||0;e.deltaMode===1?(n*=20,s*=20):e.deltaMode===2&&(n*=400,s*=400);const d=o.interaction||{},v=d.wheelSensitivity!==void 0?d.wheelSensitivity:.0018,g=d.wheelInvertDirection?1:-1,f=d.wheelMaxVelocity!==void 0?d.wheelMaxVelocity:12,F=Math.abs(n)>=Math.abs(s)?n:s;if(Math.abs(F)<.01)return;const B=F*v*g*4.5,Y=F*v*g*.25;Na+=Y,Ao=bt.clamp(Ao+B,-f,f),Math.abs(Ao)>.6&&so.set(-9999,-9999)},{passive:!1});function Fr(e,t,n){e&&e.traverse(s=>{if(s.isMesh&&s.morphTargetDictionary&&s.morphTargetInfluences){const d=s.morphTargetDictionary,v=Object.keys(d);if(v.length===0)return;s.material&&(s.material.morphTargets||(s.material.morphTargets=!0,s.material.needsUpdate=!0));let g=d.Inflate!==void 0?d.Inflate:d.Inflated;if(g===void 0){const F=v.find(B=>{const Y=B.toLowerCase();return Y.includes("inflate")||Y.includes("cloth")});F&&(g=d[F])}g===void 0&&s.morphTargetInfluences.length>0&&(g=0),g!==void 0&&g<s.morphTargetInfluences.length&&(s.morphTargetInfluences[g]=t);let f=d.Pop;if(f===void 0){const F=v.find(B=>B.toLowerCase().includes("pop"));F&&(f=d[F])}f===void 0&&s.morphTargetInfluences.length>1&&(f=1),f!==void 0&&f<s.morphTargetInfluences.length&&(s.morphTargetInfluences[f]=n)}})}const Rc=window.AudioContext||window.webkitAudioContext;let ut=null;const pa={},za={};function Cr(e,t){if(ut)try{ut.decodeAudioData(t.slice(0),n=>{pa[e]=n,e.endsWith(".ogg")?pa[e.replace(/\.ogg$/,".mp3")]=n:e.endsWith(".mp3")&&(pa[e.replace(/\.mp3$/,".ogg")]=n)},n=>{})}catch{}}function kr(e){const t=e.endsWith(".ogg")?e.replace(/\.ogg$/,".mp3"):e,n=e.endsWith(".mp3")?e.replace(/\.mp3$/,".ogg"):e;fetch(t).then(s=>{if(!s.ok)throw new Error("mp3 not found");return s.arrayBuffer()}).catch(()=>fetch(n).then(s=>s.arrayBuffer())).then(s=>{s&&(za[e]=s,za[t]=s,za[n]=s,ut&&Cr(e,s))}).catch(s=>{})}["sound/pop.mp3","sound/shatter.mp3","sound/aboutGrow.mp3","sound/aboutHover.mp3","sound/aboutOut.mp3","sound/houdiniHover.mp3","sound/houdiniOut.mp3","sound/webHover.mp3","sound/webOut.mp3","sound/ring.mp3","sound/vibration.mp3","sound/arHover.mp3","sound/arOut.mp3","sound/rm_gameboy.mp3","sound/lazer.mp3","sound/8bitExplode.mp3","sound/alienGrow.mp3","sound/gamesHover.mp3","sound/gamesOut.mp3","sound/bugFall.mp3","sound/bugRise.mp3","sound/bugHover.mp3"].forEach(kr);function xi(){ut||(ut=new Rc),ut.state==="suspended"&&ut.resume();try{const e=ut.createBuffer(1,1,22050),t=ut.createBufferSource();t.buffer=e,t.connect(ut.destination),t.start(0)}catch{}Object.keys(za).forEach(e=>{!pa[e]&&za[e]&&Cr(e,za[e])})}window.addEventListener("pointerdown",xi,{passive:!0}),window.addEventListener("click",xi,{passive:!0}),window.addEventListener("keydown",xi,{passive:!0}),window.addEventListener("touchstart",xi,{passive:!0}),window.addEventListener("keydown",e=>{(e.key==="Escape"||e.key==="Esc")&&(typeof ht<"u"&&ht?ua():ct()&&oo())});function et(e,t=.8){const n=Math.max(0,Math.min(1,t));if(!(n<=0))try{if(ut||xi(),ut&&ut.state==="suspended"&&(ut.resume(),ut.state==="suspended"))return;let s=pa[e];if(!s){const d=e.endsWith(".ogg")?e.replace(/\.ogg$/,".mp3"):e.endsWith(".mp3")?e.replace(/\.mp3$/,".ogg"):e;s=pa[d]}if(!s&&za[e]&&ut&&(Cr(e,za[e]),s=pa[e]||pa[e.replace(/\.ogg$/,".mp3")]),s&&ut){const d=ut.createBufferSource();d.buffer=s;const v=ut.createGain();v.gain.value=n,d.connect(v),v.connect(ut.destination),d.start(0)}}catch{}}function Oc(){const e=o.houdini3D?o.houdini3D.pop:null;if(!e||e.soundEnabled===!1)return;const t=e.volume!==void 0?e.volume:.8;et("sound/pop.mp3",t)}function Nc(){const e=o.linkedin3D;if(!e||e.soundEnabled===!1)return;const t=e.fallVolume,n=e.fallSoundSrc;et(n,t)}function zc(){const e=o.linkedin3D;if(!e||e.soundEnabled===!1)return;const t=e.riseVolume,n=e.riseSoundSrc;et(n,t)}function Uc(){const e=o.linkedin3D;if(!e||e.soundEnabled===!1)return;const t=e.hoverVolume,n=e.hoverSoundSrc;et(n,t)}function Xc(){const e=o.questionBox?o.questionBox.shatter:null;if(!e||e.soundEnabled===!1)return;const t=e.growVolume!==void 0?e.growVolume:e.volume!==void 0?e.volume:.8;et("sound/aboutGrow.mp3",t)}function Yc(){const e=o.questionBox?o.questionBox.shatter:null;if(!e||e.soundEnabled===!1)return;const t=e.volume!==void 0?e.volume:.8;et("sound/shatter.mp3",t)}function Gc(){const e=o.questionBox?o.questionBox.hover:null;if(!e||e.soundEnabled===!1)return;const t=e.hoverInVolume!==void 0?e.hoverInVolume:e.volume!==void 0?e.volume:.8;et("sound/aboutHover.mp3",t)}function Hc(){const e=o.questionBox?o.questionBox.hover:null;if(!e||e.soundEnabled===!1)return;const t=e.hoverOutVolume!==void 0?e.hoverOutVolume:e.volume!==void 0?e.volume:.8;et("sound/aboutOut.mp3",t)}function Qc(){const e=o.houdini3D?o.houdini3D.hover:null;if(!e||e.soundEnabled===!1)return;const t=e.hoverInVolume!==void 0?e.hoverInVolume:e.volume!==void 0?e.volume:.8;et("sound/houdiniHover.mp3",t)}function Vc(){const e=o.houdini3D?o.houdini3D.hover:null;if(!e||e.soundEnabled===!1)return;const t=e.hoverOutVolume!==void 0?e.hoverOutVolume:e.volume!==void 0?e.volume:.8;et("sound/houdiniOut.mp3",t)}function Wc(){const e=o.houdini3D?o.houdini3D.pop:null;if(!e||e.soundEnabled===!1)return;const t=e.growVolume!==void 0?e.growVolume:e.volume!==void 0?e.volume:.8;et("sound/aboutGrow.mp3",t)}function jc(){const e=o.web3D?o.web3D.hover:null;if(!e||e.soundEnabled===!1)return;const t=e.hoverInVolume!==void 0?e.hoverInVolume:e.volume!==void 0?e.volume:.8;et("sound/webHover.mp3",t)}function ld(){const e=o.web3D?o.web3D.hover:null;if(!e||e.soundEnabled===!1)return;const t=e.hoverOutVolume!==void 0?e.hoverOutVolume:e.volume!==void 0?e.volume:.8;et("sound/webOut.mp3",t)}function qc(){const e=o.web3D?o.web3D.clickAnimation:null;if(!e||e.soundEnabled===!1)return;const t=e.volume!==void 0?e.volume:.8;et("sound/ring.mp3",t)}function $c(){const e=o.ar3D,t=e?e.clickAnimation:null;if(!t||t.soundEnabled===!1)return;const n=t.volume!==void 0?t.volume:.25,s=t.soundSrc||"sound/vibration.mp3";et(s,n)}function Zc(){const e=o.ar3D,t=e?e.hover:null;if(!t||t.soundEnabled===!1)return;const n=t.hoverInVolume!==void 0?t.hoverInVolume:.15,s=t.hoverInSoundSrc||"sound/arHover.mp3";et(s,n)}function dd(){const e=o.ar3D,t=e?e.hover:null;if(!t||t.soundEnabled===!1)return;const n=t.hoverOutVolume!==void 0?t.hoverOutVolume:.15,s=t.hoverOutSoundSrc||"sound/arOut.mp3";et(s,n)}function Jc(){const e=o.games3D?o.games3D.pop:null;if(!e||e.soundEnabled===!1)return;const t=e.laserVolume!==void 0?e.laserVolume:e.volume!==void 0?e.volume:.8,n=e.laserSoundSrc||"sound/lazer.mp3";et(n,t)}function Kc(){const e=o.games3D?o.games3D.pop:null;if(!e||e.soundEnabled===!1)return;const t=e.explodeVolume!==void 0?e.explodeVolume:e.volume!==void 0?e.volume:.8,n=e.explodeSoundSrc||"sound/8bitExplode.mp3";et(n,t)}function eu(){const e=o.games3D?o.games3D.pop:null;if(!e||e.soundEnabled===!1)return;const t=e.growVolume!==void 0?e.growVolume:e.volume!==void 0?e.volume:.8,n=e.growSoundSrc||"sound/alienGrow.mp3";et(n,t)}function tu(){const e=o.games3D?o.games3D.hover:null;if(!e||e.soundEnabled===!1)return;const t=performance.now(),n=e.hoverInCooldown!==void 0?e.hoverInCooldown:180;if(t-vl<n)return;vl=t;const s=e.hoverInVolume!==void 0?e.hoverInVolume:e.volume!==void 0?e.volume:.8,d=e.hoverInSoundSrc||"sound/gamesHover.mp3";et(d,s)}function ou(){const e=o.games3D?o.games3D.hover:null;if(!e||e.soundEnabled===!1)return;const t=performance.now(),n=e.hoverOutCooldown!==void 0?e.hoverOutCooldown:180;if(t-bl<n)return;bl=t;const s=e.hoverOutVolume!==void 0?e.hoverOutVolume:e.volume!==void 0?e.volume:.8,d=e.hoverOutSoundSrc||"sound/gamesOut.mp3";et(d,s)}function au(e){const t=o.renderStyles;if(!t)return;let n="",s=.8;if(t.modeSounds&&t.modeSounds[e]){const d=t.modeSounds[e];n=typeof d=="string"?d:d&&(d.src||d.soundSrc)||"",d&&typeof d=="object"&&d.volume!==void 0&&(s=d.volume)}if(!n&&t[e]){const d=t[e];n=d.soundSrc||(d.sound?d.sound.src:""),d.soundVolume!==void 0?s=d.soundVolume:d.sound&&d.sound.volume!==void 0&&(s=d.sound.volume)}n&&(pa[n]||kr(n),et(n,s))}function nu(){const e=o.renderStyles;if(!e)return;const t=[];e.modeSounds&&Object.values(e.modeSounds).forEach(n=>{const s=typeof n=="string"?n:n&&(n.src||n.soundSrc)||"";s&&!t.includes(s)&&t.push(s)}),Array.isArray(e.activeModes)&&e.activeModes.forEach(n=>{const s=e[n];if(s){const d=s.soundSrc||(s.sound?s.sound.src:"");d&&!t.includes(d)&&t.push(d)}}),t.forEach(kr)}nu();function cd(e=!1){js=e,yo=performance.now(),ue=!1}function ud(e=!1){if(bo||!O||!ue&&!e)return!1;const t=o.games3D,n=t?t.pop:null;if(n&&n.enabled===!1)return!1;qs=!1,Jc(),Ks=e,O.traverse(N=>{N.isMesh&&(N===zt?N.visible=!0:N.visible=!1)});const d=(t&&t.rotation&&t.rotation.y!==void 0?t.rotation.y:90)*Math.PI/180,v=nr.setFromMatrixPosition(O.matrixWorld),g=De.position.x-v.x,f=De.position.z-v.z,F=Math.atan2(g,f);if(O.userData.initialCamAngle===void 0){const N=(R&&t&&t.mobile?t.mobile.position:null)||(t&&t.desktop?t.desktop.position:{x:4.8,z:2});O.userData.initialCamAngle=Math.atan2(De.position.x-N.x,De.position.z-N.z)}const B=F-O.userData.initialCamAngle,Y=d-fe.rotation.y+B;return O.rotation.y=Y,bo=!0,ue=!1,gl=performance.now(),yo=0,Ne(),!0}function fd(e=!1){Ns=e,Io=performance.now(),ue=!1}function pd(e=!1){zs=e,_n=performance.now(),ue=!1}function md(e=!1){if(xo||!oe||!ue&&!e)return!1;const t=o.houdini3D?o.houdini3D.pop:null;if(!t||t.enabled===!1)return!1;xo=!0,ue=!1,tr=e,xl=performance.now(),Io=0,Oc(),Ne(),On||(On=Rl());const n=oe.position.clone();Ba=new fn,Ba.renderOrder=10,fe.add(Ba),Rn=[];const s=t.sparkleCount!==void 0?t.sparkleCount:28,d=t.minSparkleScale!==void 0?t.minSparkleScale:.8,v=t.maxSparkleScale!==void 0?t.maxSparkleScale:1.8,g=t.sparkleSpeed!==void 0?t.sparkleSpeed:3.5,f=t.sparkleColors||["#a621ff","#e099ff","#ffffff","#00ffff","#ffea00","#ff006e"];for(let F=0;F<s;F++){const B=new Vo(.35,.35),Y=f[Math.floor(Math.random()*f.length)],N=new Je({map:On,color:new ne(Y),transparent:!0,opacity:1,depthWrite:!1,blending:Ts}),G=new _t(B,N),W=d+Math.random()*(v-d);G.scale.set(W,W,1);const ve=new q((Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4);G.position.copy(n).add(ve);const ae=ve.clone();ae.lengthSq()<.001&&ae.set(Math.random()-.5,Math.random()-.5,Math.random()-.5),ae.normalize().multiplyScalar(g*(.5+Math.random()*.8)),G.rotation.z=Math.random()*Math.PI*2;const K=(Math.random()-.5)*.1,Ae=.6+Math.random()*.5;G.userData={velocity:ae,rotVelocityZ:K,initialScale:W,initialLifetime:Ae,lifetime:Ae},Ba.add(G),Rn.push(G)}return!0}function hd(e=!1){Ws=e,qt=performance.now(),ue=!1,jt&&Bn(jt)}function gd(e=!1){if(lo||qt>0||!L||!ue&&!e)return!1;const t=o.ar3D,n=t?t.clickAnimation:null;if(n&&n.enabled===!1)return!1;lo=!0,ue=!1,Js=e,Ne(),a.style.setProperty("cursor","default"),Vs=performance.now(),Ct&&Ct.reset().play();const d=(t&&t.rotation&&t.rotation.y!==void 0?t.rotation.y:90)*Math.PI/180+Math.PI-fe.rotation.y;return L.rotation.y=d,Ta&&Bn(Ta),$c(),!0}function vd(e=!1){if(ta||!he||!ue&&!e)return!1;const t=o.web3D,n=t?t.clickAnimation:null;if(n&&n.enabled===!1)return!1;ta=!0,ro=!1,ya=!1,ue=!1,er=e,Ne(),a.style.setProperty("cursor","default"),qc(),Gs=performance.now(),Pt&&(Pt.parent&&Pt.parent.remove(Pt),qa.forEach(G=>{G.geometry&&G.geometry.dispose(),G.material&&G.material.dispose()}),Pt=null,qa=[]),Pt=new fn,Pt.renderOrder=9999,fe.add(Pt);const s=new q;Ht?Ht.getWorldPosition(s):he.getWorldPosition(s);const d=fe.worldToLocal(s.clone());Pt.position.copy(d);const v=n&&n.godRayCount!==void 0?n.godRayCount:36,g=n&&n.minRayLength!==void 0?n.minRayLength:1,f=n&&n.maxRayLength!==void 0?n.maxRayLength:2.2,F=n&&n.minRayWidth!==void 0?n.minRayWidth:.35,B=n&&n.maxRayWidth!==void 0?n.maxRayWidth:.6,Y=n&&n.rayColors&&n.rayColors.length>0?n.rayColors:["#ffffff","#21ffd8","#91bfff"],N=vc();for(let G=0;G<v;G++){const W=g+Math.random()*(f-g),ve=F+Math.random()*(B-F),ae=new Vo(ve,W);ae.translate(0,W/2,0);const K=Y[Math.floor(Math.random()*Y.length)],Ae=new Je({map:N,color:new ne(K),transparent:!0,opacity:0,depthWrite:!1,blending:Ts,side:gn}),ke=new _t(ae,Ae),Le=Math.random(),xe=Math.random(),se=Le*2*Math.PI,Ce=Math.acos(2*xe-1),Ye=new q(Math.sin(Ce)*Math.cos(se),Math.cos(Ce),Math.sin(Ce)*Math.sin(se));ke.quaternion.setFromUnitVectors($d,Ye),ke.userData={direction:Ye,distance:0,expSpeed:3.5*(.8+Math.random()*.4),maxOpacity:.75+Math.random()*.25,targetLength:W,targetWidth:ve,rotSpeed:(Math.random()-.5)*.4},Pt.add(ke),qa.push(ke)}return!0}function bd(e=!1){if(Da||!re)return!1;const t=o.questionBox.shatter;if(!t)return!1;Da=!0,ue=!1,performance.now(),Lo=0,Yc(),$s=e,Ne(),re.visible=!1,lt&&(lt.visible=!1),Ea=new fn,Ea.renderOrder=10,fe.add(Ea),fi=[],pi=[];const n=t.shardCount,s=t.minShardScale,d=t.maxShardScale,v=t.explosionSpeed,g=re.position;for(let G=0;G<n;G++){const W=Math.random()>.5?new Cd(1,1,1):new Lu(1),ve=Xt?Xt.clone():new As({color:16777215,transparent:!0,opacity:1});ve.transparent=!0,ve.opacity=1;const ae=new _t(W,ve),K=new q((Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4);ae.position.copy(g).add(K);const Ae=s+Math.random()*(d-s);ae.scale.set(Ae,Ae,Ae);const ke=K.clone();ke.lengthSq()<.001&&ke.set(Math.random()-.5,Math.random()-.5,Math.random()-.5),ke.normalize().multiplyScalar(v*(.6+Math.random()*.6));const Le=new q((Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4),xe=1+Math.random()*.5;ae.userData={velocity:ke,rotVelocity:Le,initialScale:Ae,initialLifetime:xe,lifetime:xe},Ea.add(ae),fi.push(ae)}const f=t.sparkleCount,F=t.minSparkleScale,B=t.maxSparkleScale,Y=t.sparkleSpeed,N=t.sparkleColors||["#ffffff","#fff8d0","#ffd0f8"];On||(On=Rl());for(let G=0;G<f;G++){const W=new Vo(1,1),ve=N[Math.floor(Math.random()*N.length)],ae=new ne(ve),K=new Je({map:On,color:ae,transparent:!0,opacity:.9,depthWrite:!1,blending:Ts,side:gn}),Ae=new _t(W,K),ke=new q((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3);Ae.position.copy(g).add(ke);const Le=F+Math.random()*(B-F);Ae.scale.set(Le,Le,1);const xe=ke.clone();xe.lengthSq()<.001&&xe.set(Math.random()-.5,Math.random()-.5,Math.random()-.5),xe.normalize().multiplyScalar(Y*(.5+Math.random()*.8)),Ae.rotation.z=Math.random()*Math.PI*2;const se=(Math.random()-.5)*.1,Ce=.7+Math.random()*.6;Ae.userData={velocity:xe,rotVelocityZ:se,initialScale:Le,opacity:.9,initialLifetime:Ce,lifetime:Ce},Ea.add(Ae),pi.push(Ae)}return!0}window.addEventListener("pointermove",e=>{Ri=e.clientX,Rs=e.clientY,so.x=e.clientX/window.innerWidth*2-1,so.y=-(e.clientY/window.innerHeight)*2+1},{passive:!0});let yd=0;function hs(e){if(!ue||Ft!=="main"||Ut||$t||ht)return;const t=performance.now();if(t-yd<60)return;yd=t;const n=e.clientX,s=e.clientY;if(n===void 0||s===void 0||ms(n,s))return;const d=id(n,s);if(!ba||!d){ba=null;return}if(ba.type!==d.type){ba=null;return}if(Math.hypot(n-Tr.x,s-Tr.y)>20){ba=null;return}const g=d;if(ba=null,g.type==="questionBox"){const f=o.questionBox.shatter;f&&f.enabled!==!1?bd(!0):Yl()}else if(g.type==="houdiniToy"){const f=o.houdini3D?o.houdini3D.pop:null;f&&f.enabled!==!1?md(!0):Vl()}else if(g.type==="webGlobe"){const f=o.web3D?o.web3D.clickAnimation:null;f&&f.enabled!==!1?vd(!0):Ql()}else if(g.type==="gamesAlien"){const f=o.games3D?o.games3D.pop:null;f&&f.enabled!==!1?ud(!0):Hl()}else if(g.type==="arPhone"){const f=o.ar3D?o.ar3D.clickAnimation:null;!f||f.enabled!==!1?gd(!0):Gl()}else g.type==="bug"&&window.open("https://www.linkedin.com/in/noah-gunther-3128bb185/","_blank")}window.addEventListener("pointerup",hs,{passive:!0}),window.addEventListener("click",hs,{passive:!0}),yi&&(yi.addEventListener("pointerup",hs,{passive:!0}),yi.addEventListener("click",hs,{passive:!0}));try{const t=new URLSearchParams(window.location.search).get("panel");if(t){const n=t.toLowerCase(),s=(d=0)=>{const v=document.getElementById(n)||document.getElementById(n+"mobile");if(v&&ue){v.click();try{const g=window.location.pathname+window.location.hash;window.history.replaceState({},document.title,g)}catch{}}else d<100&&setTimeout(()=>s(d+1),100)};setTimeout(()=>s(0),100)}}catch{}}
