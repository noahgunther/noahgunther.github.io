(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _g="128",Qv=0,Up=1,Zv=2,bg=1,$v=2,zl=3,xn=0,On=1,Yi=2,wg=1,Xs=0,Wi=1,Ia=2,Hp=3,Gp=4,Jv=5,Ea=100,Kv=101,ex=102,Vp=103,Wp=104,tx=200,nx=201,ix=202,sx=203,Mg=204,Sg=205,rx=206,ox=207,ax=208,lx=209,cx=210,ux=0,dx=1,fx=2,Cf=3,hx=4,px=5,mx=6,gx=7,Bu=0,vx=1,xx=2,Da=0,yx=1,_x=2,bx=3,wx=4,Mx=5,Ag=300,jf=301,Qf=302,Xp=303,Yp=304,ku=306,Zf=307,xr=1e3,vi=1001,Cu=1002,An=1003,Rf=1004,Ff=1005,en=1006,Tg=1007,Wa=1008,Hs=1009,Sx=1010,Ax=1011,Ru=1012,Tx=1013,Lu=1014,ds=1015,Ro=1016,Ex=1017,Lx=1018,Px=1019,Hl=1020,Cx=1021,Ys=1022,ui=1023,Rx=1024,Fx=1025,Eg=ui,Na=1026,ql=1027,Ix=1028,Dx=1029,Nx=1030,Bx=1031,kx=1032,Ox=1033,qp=33776,jp=33777,Qp=33778,Zp=33779,$p=35840,Jp=35841,Kp=35842,em=35843,zx=36196,tm=37492,nm=37496,Ux=37808,Hx=37809,Gx=37810,Vx=37811,Wx=37812,Xx=37813,Yx=37814,qx=37815,jx=37816,Qx=37817,Zx=37818,$x=37819,Jx=37820,Kx=37821,ey=36492,ty=37840,ny=37841,iy=37842,sy=37843,ry=37844,oy=37845,ay=37846,ly=37847,cy=37848,uy=37849,dy=37850,fy=37851,hy=37852,py=37853,If=2200,La=2201,my=2202,jl=2300,Oa=2301,Gd=2302,Pa=2400,Ca=2401,Fu=2402,$f=2500,Lg=2501,Pg=0,Cg=1,Iu=2,ei=3e3,fs=3001,Jf=3007,Ou=3002,gy=3003,Rg=3004,Fg=3005,Ig=3006,vy=3200,Dg=3201,Io=0,xy=1,Vd=7680,yy=519,Ql=35044,za=35048,im="300 es";class Do{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Gn=[];for(let r=0;r<256;r++)Gn[r]=(r<16?"0":"")+r.toString(16);let Qc=1234567;const Gl=Math.PI/180,Zl=180/Math.PI;function qi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[t&63|128]+Gn[t>>8&255]+"-"+Gn[t>>16&255]+Gn[t>>24&255]+Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]).toUpperCase()}function gi(r,e,t){return Math.max(e,Math.min(t,r))}function Kf(r,e){return(r%e+e)%e}function _y(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function by(r,e,t){return r!==e?(t-r)/(e-r):0}function Vl(r,e,t){return(1-t)*r+t*e}function wy(r,e,t,n){return Vl(r,e,1-Math.exp(-t*n))}function My(r,e=1){return e-Math.abs(Kf(r,e*2)-e)}function Sy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ay(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ty(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ey(r,e){return r+Math.random()*(e-r)}function Ly(r){return r*(.5-Math.random())}function Py(r){return r!==void 0&&(Qc=r%2147483647),Qc=Qc*16807%2147483647,(Qc-1)/2147483646}function Cy(r){return r*Gl}function Ry(r){return r*Zl}function Df(r){return(r&r-1)===0&&r!==0}function Ng(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Bg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Fy(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),d=s((e-n)/2),h=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*d,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*d,a*c);break;case"ZXZ":r.set(l*d,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*p,a*c);break;case"YXY":r.set(l*p,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}var Cn=Object.freeze({__proto__:null,DEG2RAD:Gl,RAD2DEG:Zl,generateUUID:qi,clamp:gi,euclideanModulo:Kf,mapLinear:_y,inverseLerp:by,lerp:Vl,damp:wy,pingpong:My,smoothstep:Sy,smootherstep:Ay,randInt:Ty,randFloat:Ey,randFloatSpread:Ly,seededRandom:Py,degToRad:Cy,radToDeg:Ry,isPowerOfTwo:Df,ceilPowerOfTwo:Ng,floorPowerOfTwo:Bg,setQuaternionFromProperEuler:Fy});class ae{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}ae.prototype.isVector2=!0;class Vn{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],y=i[0],b=i[3],v=i[6],m=i[1],M=i[4],L=i[7],C=i[2],w=i[5],F=i[8];return s[0]=o*y+a*m+l*C,s[3]=o*b+a*M+l*w,s[6]=o*v+a*L+l*F,s[1]=c*y+u*m+d*C,s[4]=c*b+u*M+d*w,s[7]=c*v+u*L+d*F,s[2]=h*y+p*m+g*C,s[5]=h*b+p*M+g*w,s[8]=h*v+p*L+g*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=t*d+n*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(i*c-u*n)*y,e[2]=(a*n-i*o)*y,e[3]=h*y,e[4]=(u*t-i*l)*y,e[5]=(i*s-a*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*o+n*c,i[6]=t*a+n*u,i[1]=-n*s+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}Vn.prototype.isMatrix3=!0;let la;class Xa{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{la===void 0&&(la=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),la.width=e.width,la.height=e.height;const n=la.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=la}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let Iy=0;class Wn extends Do{constructor(e=Wn.DEFAULT_IMAGE,t=Wn.DEFAULT_MAPPING,n=vi,i=vi,s=en,o=Wa,a=ui,l=Hs,c=1,u=ei){super(),Object.defineProperty(this,"id",{value:Iy++}),this.uuid=qi(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=qi()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Wd(i[o].image)):s.push(Wd(i[o]))}else s=Wd(i);e.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ag)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xr:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case Cu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xr:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case Cu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}Wn.DEFAULT_IMAGE=void 0;Wn.DEFAULT_MAPPING=Ag;Wn.prototype.isTexture=!0;function Wd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xa.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class jt{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],y=l[2],b=l[6],v=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-b)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+b)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,L=(p+1)/2,C=(v+1)/2,w=(u+h)/4,F=(d+y)/4,B=(g+b)/4;return M>L&&M>C?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=F/n):L>C?L<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(L),n=w/i,s=B/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=F/s,i=B/s),this.set(n,i,s,t),this}let m=Math.sqrt((b-g)*(b-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(m)<.001&&(m=1),this.x=(b-g)/m,this.y=(d-y)/m,this.z=(h-u)/m,this.w=Math.acos((c+p+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}jt.prototype.isVector4=!0;class Jn extends Do{constructor(e,t,n){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t),n=n||{},this.texture=new Wn(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:en,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Jn.prototype.isWebGLRenderTarget=!0;class kg extends Jn{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}kg.prototype.isWebGLMultisampleRenderTarget=!0;class _n{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(d!==y||l!==h||c!==p||u!==g){let b=1-a;const v=l*h+c*p+u*g+d*y,m=v>=0?1:-1,M=1-v*v;if(M>Number.EPSILON){const C=Math.sqrt(M),w=Math.atan2(C,v*m);b=Math.sin(b*w)/C,a=Math.sin(a*w)/C}const L=a*m;if(l=l*b+h*L,c=c*b+p*L,u=u*b+g*L,d=d*b+y*L,b===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*p-c*h,e[t+1]=l*g+u*h+c*d-a*p,e[t+2]=c*g+u*p+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),h=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gi(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}_n.prototype.isQuaternion=!0;class S{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(sm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,d=l*i+s*n-o*t,h=-s*t-o*n-a*i;return this.x=c*l+h*-s+u*-a-d*-o,this.y=u*l+h*-o+d*-s-c*-a,this.z=d*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xd.copy(this).projectOnVector(e),this.sub(Xd)}reflect(e){return this.sub(Xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gi(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}S.prototype.isVector3=!0;const Xd=new S,sm=new _n;class ki{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],h=e[l+2];u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>s&&(s=u),d>o&&(o=d),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),h=e.getZ(l);u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>s&&(s=u),d>o&&(o=d),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Al.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new S),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new S),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Yd.copy(t.boundingBox),Yd.applyMatrix4(e.matrixWorld),this.union(Yd));const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new S),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Al),Al.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tl),Zc.subVectors(this.max,Tl),ca.subVectors(e.a,Tl),ua.subVectors(e.b,Tl),da.subVectors(e.c,Tl),Wr.subVectors(ua,ca),Xr.subVectors(da,ua),So.subVectors(ca,da);let t=[0,-Wr.z,Wr.y,0,-Xr.z,Xr.y,0,-So.z,So.y,Wr.z,0,-Wr.x,Xr.z,0,-Xr.x,So.z,0,-So.x,-Wr.y,Wr.x,0,-Xr.y,Xr.x,0,-So.y,So.x,0];return!qd(t,ca,ua,da,Zc)||(t=[1,0,0,0,1,0,0,0,1],!qd(t,ca,ua,da,Zc))?!1:($c.crossVectors(Wr,Xr),t=[$c.x,$c.y,$c.z],qd(t,ca,ua,da,Zc))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new S),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Al.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(Al).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}ki.prototype.isBox3=!0;const fr=[new S,new S,new S,new S,new S,new S,new S,new S],Al=new S,Yd=new ki,ca=new S,ua=new S,da=new S,Wr=new S,Xr=new S,So=new S,Tl=new S,Zc=new S,$c=new S,Ao=new S;function qd(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ao.fromArray(r,s);const a=i.x*Math.abs(Ao.x)+i.y*Math.abs(Ao.y)+i.z*Math.abs(Ao.z),l=e.dot(Ao),c=t.dot(Ao),u=n.dot(Ao);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Dy=new ki,rm=new S,jd=new S,Qd=new S;class No{constructor(e=new S,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Dy.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new S),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new ki),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Qd.subVectors(e,this.center);const t=Qd.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Qd.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return jd.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(rm.copy(e.center).add(jd)),this.expandByPoint(rm.copy(e.center).sub(jd)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hr=new S,Zd=new S,Jc=new S,Yr=new S,$d=new S,Kc=new S,Jd=new S;class Bo{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new S),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hr)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new S),t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hr.copy(this.direction).multiplyScalar(t).add(this.origin),hr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Zd.copy(e).add(t).multiplyScalar(.5),Jc.copy(t).sub(e).normalize(),Yr.copy(this.origin).sub(Zd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Jc),a=Yr.dot(this.direction),l=-Yr.dot(Jc),c=Yr.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*l-a,h=o*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const y=1/u;d*=y,h*=y,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Jc).multiplyScalar(h).add(Zd),p}intersectSphere(e,t){hr.subVectors(e.center,this.origin);const n=hr.dot(this.direction),i=hr.dot(hr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,hr)!==null}intersectTriangle(e,t,n,i,s){$d.subVectors(t,e),Kc.subVectors(n,e),Jd.crossVectors($d,Kc);let o=this.direction.dot(Jd),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yr.subVectors(this.origin,e);const l=a*this.direction.dot(Kc.crossVectors(Yr,Kc));if(l<0)return null;const c=a*this.direction.dot($d.cross(Yr));if(c<0||l+c>o)return null;const u=-a*Yr.dot(Jd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c,u,d,h,p,g,y,b){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=d,v[14]=h,v[3]=p,v[7]=g,v[11]=y,v[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fa.setFromMatrixColumn(e,0).length(),s=1/fa.setFromMatrixColumn(e,1).length(),o=1/fa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,g=a*u,y=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=h-y*c,t[9]=-a*l,t[2]=y-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,g=c*u,y=c*d;t[0]=h+y*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=y+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,g=c*u,y=c*d;t[0]=h-y*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=y-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,g=a*u,y=a*d;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+y,t[1]=l*d,t[5]=y*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=y-h*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+g,t[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+y,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ny,e,By)}lookAt(e,t,n){const i=this.elements;return Di.subVectors(e,t),Di.lengthSq()===0&&(Di.z=1),Di.normalize(),qr.crossVectors(n,Di),qr.lengthSq()===0&&(Math.abs(n.z)===1?Di.x+=1e-4:Di.z+=1e-4,Di.normalize(),qr.crossVectors(n,Di)),qr.normalize(),eu.crossVectors(Di,qr),i[0]=qr.x,i[4]=eu.x,i[8]=Di.x,i[1]=qr.y,i[5]=eu.y,i[9]=Di.y,i[2]=qr.z,i[6]=eu.z,i[10]=Di.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],y=n[6],b=n[10],v=n[14],m=n[3],M=n[7],L=n[11],C=n[15],w=i[0],F=i[4],B=i[8],D=i[12],V=i[1],Y=i[5],q=i[9],I=i[13],H=i[2],U=i[6],z=i[10],ne=i[14],pe=i[3],le=i[7],ze=i[11],Ee=i[15];return s[0]=o*w+a*V+l*H+c*pe,s[4]=o*F+a*Y+l*U+c*le,s[8]=o*B+a*q+l*z+c*ze,s[12]=o*D+a*I+l*ne+c*Ee,s[1]=u*w+d*V+h*H+p*pe,s[5]=u*F+d*Y+h*U+p*le,s[9]=u*B+d*q+h*z+p*ze,s[13]=u*D+d*I+h*ne+p*Ee,s[2]=g*w+y*V+b*H+v*pe,s[6]=g*F+y*Y+b*U+v*le,s[10]=g*B+y*q+b*z+v*ze,s[14]=g*D+y*I+b*ne+v*Ee,s[3]=m*w+M*V+L*H+C*pe,s[7]=m*F+M*Y+L*U+C*le,s[11]=m*B+M*q+L*z+C*ze,s[15]=m*D+M*I+L*ne+C*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],y=e[7],b=e[11],v=e[15];return g*(+s*l*d-i*c*d-s*a*h+n*c*h+i*a*p-n*l*p)+y*(+t*l*p-t*c*h+s*o*h-i*o*p+i*c*u-s*l*u)+b*(+t*c*d-t*a*p-s*o*d+n*o*p+s*a*u-n*c*u)+v*(-i*a*u-t*l*d+t*a*h+i*o*d-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],y=e[13],b=e[14],v=e[15],m=d*b*c-y*h*c+y*l*p-a*b*p-d*l*v+a*h*v,M=g*h*c-u*b*c-g*l*p+o*b*p+u*l*v-o*h*v,L=u*y*c-g*d*c+g*a*p-o*y*p-u*a*v+o*d*v,C=g*d*l-u*y*l-g*a*h+o*y*h+u*a*b-o*d*b,w=t*m+n*M+i*L+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/w;return e[0]=m*F,e[1]=(y*h*s-d*b*s-y*i*p+n*b*p+d*i*v-n*h*v)*F,e[2]=(a*b*s-y*l*s+y*i*c-n*b*c-a*i*v+n*l*v)*F,e[3]=(d*l*s-a*h*s-d*i*c+n*h*c+a*i*p-n*l*p)*F,e[4]=M*F,e[5]=(u*b*s-g*h*s+g*i*p-t*b*p-u*i*v+t*h*v)*F,e[6]=(g*l*s-o*b*s-g*i*c+t*b*c+o*i*v-t*l*v)*F,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*p+t*l*p)*F,e[8]=L*F,e[9]=(g*d*s-u*y*s-g*n*p+t*y*p+u*n*v-t*d*v)*F,e[10]=(o*y*s-g*a*s+g*n*c-t*y*c-o*n*v+t*a*v)*F,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*p-t*a*p)*F,e[12]=C*F,e[13]=(u*y*i-g*d*i+g*n*h-t*y*h-u*n*b+t*d*b)*F,e[14]=(g*a*i-o*y*i-g*n*l+t*y*l+o*n*b-t*a*b)*F,e[15]=(o*d*i-u*a*i+u*n*l-t*d*l-o*n*h+t*a*h)*F,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,g=s*d,y=o*u,b=o*d,v=a*d,m=l*c,M=l*u,L=l*d,C=n.x,w=n.y,F=n.z;return i[0]=(1-(y+v))*C,i[1]=(p+L)*C,i[2]=(g-M)*C,i[3]=0,i[4]=(p-L)*w,i[5]=(1-(h+v))*w,i[6]=(b+m)*w,i[7]=0,i[8]=(g+M)*F,i[9]=(b-m)*F,i[10]=(1-(h+y))*F,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=fa.set(i[0],i[1],i[2]).length();const o=fa.set(i[4],i[5],i[6]).length(),a=fa.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],rs.copy(this);const c=1/s,u=1/o,d=1/a;return rs.elements[0]*=c,rs.elements[1]*=c,rs.elements[2]*=c,rs.elements[4]*=u,rs.elements[5]*=u,rs.elements[6]*=u,rs.elements[8]*=d,rs.elements[9]*=d,rs.elements[10]*=d,t.setFromRotationMatrix(rs),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),h=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),d=(t+e)*l,h=(n+i)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}qe.prototype.isMatrix4=!0;const fa=new S,rs=new qe,Ny=new S(0,0,0),By=new S(1,1,1),qr=new S,eu=new S,Di=new S,om=new qe,am=new _n;class io{constructor(e=0,t=0,n=0,i=io.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,n){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],p=i[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(gi(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gi(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(gi(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gi(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gi(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-gi(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(om,t,n)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return am.setFromEuler(this),this.setFromQuaternion(am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new S(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}io.prototype.isEuler=!0;io.DefaultOrder="XYZ";io.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Og{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let ky=0;const lm=new S,ha=new _n,pr=new qe,tu=new S,El=new S,Oy=new S,zy=new _n,cm=new S(1,0,0),um=new S(0,1,0),dm=new S(0,0,1),Uy={type:"added"},fm={type:"removed"};class Ht extends Do{constructor(){super(),Object.defineProperty(this,"id",{value:ky++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DefaultUp.clone();const e=new S,t=new io,n=new _n,i=new S(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new Vn}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=Ht.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Og,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ha.setFromAxisAngle(e,t),this.quaternion.multiply(ha),this}rotateOnWorldAxis(e,t){return ha.setFromAxisAngle(e,t),this.quaternion.premultiply(ha),this}rotateX(e){return this.rotateOnAxis(cm,e)}rotateY(e){return this.rotateOnAxis(um,e)}rotateZ(e){return this.rotateOnAxis(dm,e)}translateOnAxis(e,t){return lm.copy(e).applyQuaternion(this.quaternion),this.position.add(lm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cm,e)}translateY(e){return this.translateOnAxis(um,e)}translateZ(e){return this.translateOnAxis(dm,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tu.copy(e):tu.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),El.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(El,tu,this.up):pr.lookAt(tu,El,this.up),this.quaternion.setFromRotationMatrix(pr),i&&(pr.extractRotation(i.matrixWorld),ha.setFromRotationMatrix(pr),this.quaternion.premultiply(ha.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Uy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fm)),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(fm)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new S),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new _n),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,e,Oy),e}getWorldScale(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new S),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,zy,e),e}getWorldDirection(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new S),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ht.DefaultUp=new S(0,1,0);Ht.DefaultMatrixAutoUpdate=!0;Ht.prototype.isObject3D=!0;const Kd=new S,Hy=new S,Gy=new Vn;class us{constructor(e=new S(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Kd.subVectors(n,t).cross(Hy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new S),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new S);const n=e.delta(Kd),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new S),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gy.getNormalMatrix(e),i=this.coplanarPoint(Kd).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}us.prototype.isPlane=!0;const os=new S,mr=new S,ef=new S,gr=new S,pa=new S,ma=new S,hm=new S,tf=new S,nf=new S,sf=new S;class Rn{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new S),i.subVectors(n,t),os.subVectors(e,t),i.cross(os);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){os.subVectors(i,t),mr.subVectors(n,t),ef.subVectors(e,t);const o=os.dot(os),a=os.dot(mr),l=os.dot(ef),c=mr.dot(mr),u=mr.dot(ef),d=o*c-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new S),d===0)return s.set(-2,-1,-1);const h=1/d,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gr),gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,gr),l.set(0,0),l.addScaledVector(s,gr.x),l.addScaledVector(o,gr.y),l.addScaledVector(a,gr.z),l}static isFrontFacing(e,t,n,i){return os.subVectors(n,t),mr.subVectors(e,t),os.cross(mr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return os.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),os.cross(mr).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new S),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new us),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Rn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new S);const n=this.a,i=this.b,s=this.c;let o,a;pa.subVectors(i,n),ma.subVectors(s,n),tf.subVectors(e,n);const l=pa.dot(tf),c=ma.dot(tf);if(l<=0&&c<=0)return t.copy(n);nf.subVectors(e,i);const u=pa.dot(nf),d=ma.dot(nf);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(pa,o);sf.subVectors(e,s);const p=pa.dot(sf),g=ma.dot(sf);if(g>=0&&p<=g)return t.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ma,a);const b=u*g-p*d;if(b<=0&&d-u>=0&&p-g>=0)return hm.subVectors(s,i),a=(d-u)/(d-u+(p-g)),t.copy(i).addScaledVector(hm,a);const v=1/(b+y+h);return o=y*v,a=h*v,t.copy(n).addScaledVector(pa,o).addScaledVector(ma,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Vy=0;function Tn(){Object.defineProperty(this,"id",{value:Vy++}),this.uuid=qi(),this.name="",this.type="Material",this.fog=!0,this.blending=Wi,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Mg,this.blendDst=Sg,this.blendEquation=Ea,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Cf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vd,this.stencilZFail=Vd,this.stencilZPass=Vd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Tn.prototype=Object.assign(Object.create(Do.prototype),{constructor:Tn,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(r){if(r!==void 0)for(const e in r){const t=r[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===wg;continue}const n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(t):n&&n.isVector3&&t&&t.isVector3?n.copy(t):this[e]=t}},toJSON:function(r){const e=r===void 0||typeof r=="string";e&&(r={textures:{},images:{}});const t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(r).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(r).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(r).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(r).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(r).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(r).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(r).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(r).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(r).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(r).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(r).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(r).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(r).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(r).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(r).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(r).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(r).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(t.blending=this.blending),this.side!==xn&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function n(i){const s=[];for(const o in i){const a=i[o];delete a.metadata,s.push(a)}return s}if(e){const i=n(r.textures),s=n(r.images);i.length>0&&(t.textures=i),s.length>0&&(t.images=s)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(r){this.name=r.name,this.fog=r.fog,this.blending=r.blending,this.side=r.side,this.vertexColors=r.vertexColors,this.opacity=r.opacity,this.transparent=r.transparent,this.blendSrc=r.blendSrc,this.blendDst=r.blendDst,this.blendEquation=r.blendEquation,this.blendSrcAlpha=r.blendSrcAlpha,this.blendDstAlpha=r.blendDstAlpha,this.blendEquationAlpha=r.blendEquationAlpha,this.depthFunc=r.depthFunc,this.depthTest=r.depthTest,this.depthWrite=r.depthWrite,this.stencilWriteMask=r.stencilWriteMask,this.stencilFunc=r.stencilFunc,this.stencilRef=r.stencilRef,this.stencilFuncMask=r.stencilFuncMask,this.stencilFail=r.stencilFail,this.stencilZFail=r.stencilZFail,this.stencilZPass=r.stencilZPass,this.stencilWrite=r.stencilWrite;const e=r.clippingPlanes;let t=null;if(e!==null){const n=e.length;t=new Array(n);for(let i=0;i!==n;++i)t[i]=e[i].clone()}return this.clippingPlanes=t,this.clipIntersection=r.clipIntersection,this.clipShadows=r.clipShadows,this.shadowSide=r.shadowSide,this.colorWrite=r.colorWrite,this.precision=r.precision,this.polygonOffset=r.polygonOffset,this.polygonOffsetFactor=r.polygonOffsetFactor,this.polygonOffsetUnits=r.polygonOffsetUnits,this.dithering=r.dithering,this.alphaTest=r.alphaTest,this.alphaToCoverage=r.alphaToCoverage,this.premultipliedAlpha=r.premultipliedAlpha,this.visible=r.visible,this.toneMapped=r.toneMapped,this.userData=JSON.parse(JSON.stringify(r.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Tn.prototype,"needsUpdate",{set:function(r){r===!0&&this.version++}});const zg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},nu={h:0,s:0,l:0};function rf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function of(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function af(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}class se{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=Kf(e,1),t=gi(t,0,1),n=gi(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=rf(s,i,e+1/3),this.g=rf(s,i,e),this.b=rf(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=zg[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=of(e.r),this.g=of(e.g),this.b=of(e.b),this}copyLinearToSRGB(e){return this.r=af(e.r),this.g=af(e.g),this.b=af(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),o=Math.min(t,n,i);let a,l;const c=(o+s)/2;if(o===s)a=0,l=0;else{const u=s-o;switch(l=c<=.5?u/(s+o):u/(2-s-o),s){case t:a=(n-i)/u+(n<i?6:0);break;case n:a=(i-t)/u+2;break;case i:a=(t-n)/u+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(as),as.h+=e,as.s+=t,as.l+=n,this.setHSL(as.h,as.s,as.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(nu);const n=Vl(as.h,nu.h,t),i=Vl(as.s,nu.s,t),s=Vl(as.l,nu.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}se.NAMES=zg;se.prototype.isColor=!0;se.prototype.r=1;se.prototype.g=1;se.prototype.b=1;class Ut extends Tn{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}}Ut.prototype.isMeshBasicMaterial=!0;const on=new S,iu=new ae;class qt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Ql,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new se),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new ae),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new S),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new jt),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)iu.fromBufferAttribute(this,t),iu.applyMatrix3(e),this.setXY(t,iu.x,iu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.x=this.getX(t),on.y=this.getY(t),on.z=this.getZ(t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.x=this.getX(t),on.y=this.getY(t),on.z=this.getZ(t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.x=this.getX(t),on.y=this.getY(t),on.z=this.getZ(t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ql&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}qt.prototype.isBufferAttribute=!0;class Ug extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hg extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wy extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Wy.prototype.isFloat16BufferAttribute=!0;class Yt extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}function Gg(r){if(r.length===0)return-1/0;let e=r[0];for(let t=1,n=r.length;t<n;++t)r[t]>e&&(e=r[t]);return e}let Xy=0;const ks=new qe,lf=new Ht,ga=new S,Ni=new ki,Ll=new ki,kn=new S;class Et extends Do{constructor(){super(),Object.defineProperty(this,"id",{value:Xy++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gg(e)>65535?Hg:Ug)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(e){return ks.makeRotationX(e),this.applyMatrix4(ks),this}rotateY(e){return ks.makeRotationY(e),this.applyMatrix4(ks),this}rotateZ(e){return ks.makeRotationZ(e),this.applyMatrix4(ks),this}translate(e,t,n){return ks.makeTranslation(e,t,n),this.applyMatrix4(ks),this}scale(e,t,n){return ks.makeScale(e,t,n),this.applyMatrix4(ks),this}lookAt(e){return lf.lookAt(e),lf.updateMatrix(),this.applyMatrix4(lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ga).negate(),this.translate(ga.x,ga.y,ga.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ni.setFromBufferAttribute(s),this.morphTargetsRelative?(kn.addVectors(this.boundingBox.min,Ni.min),this.boundingBox.expandByPoint(kn),kn.addVectors(this.boundingBox.max,Ni.max),this.boundingBox.expandByPoint(kn)):(this.boundingBox.expandByPoint(Ni.min),this.boundingBox.expandByPoint(Ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new No);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(e){const n=this.boundingSphere.center;if(Ni.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ll.setFromBufferAttribute(a),this.morphTargetsRelative?(kn.addVectors(Ni.min,Ll.min),Ni.expandByPoint(kn),kn.addVectors(Ni.max,Ll.max),Ni.expandByPoint(kn)):(Ni.expandByPoint(Ll.min),Ni.expandByPoint(Ll.max))}Ni.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)kn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(kn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kn.fromBufferAttribute(a,c),l&&(ga.fromBufferAttribute(e,c),kn.add(ga)),i=Math.max(i,n.distanceToSquared(kn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new qt(new Float32Array(4*a),4));const l=t.tangent.array,c=[],u=[];for(let V=0;V<a;V++)c[V]=new S,u[V]=new S;const d=new S,h=new S,p=new S,g=new ae,y=new ae,b=new ae,v=new S,m=new S;function M(V,Y,q){d.fromArray(i,V*3),h.fromArray(i,Y*3),p.fromArray(i,q*3),g.fromArray(o,V*2),y.fromArray(o,Y*2),b.fromArray(o,q*2),h.sub(d),p.sub(d),y.sub(g),b.sub(g);const I=1/(y.x*b.y-b.x*y.y);isFinite(I)&&(v.copy(h).multiplyScalar(b.y).addScaledVector(p,-y.y).multiplyScalar(I),m.copy(p).multiplyScalar(y.x).addScaledVector(h,-b.x).multiplyScalar(I),c[V].add(v),c[Y].add(v),c[q].add(v),u[V].add(m),u[Y].add(m),u[q].add(m))}let L=this.groups;L.length===0&&(L=[{start:0,count:n.length}]);for(let V=0,Y=L.length;V<Y;++V){const q=L[V],I=q.start,H=q.count;for(let U=I,z=I+H;U<z;U+=3)M(n[U+0],n[U+1],n[U+2])}const C=new S,w=new S,F=new S,B=new S;function D(V){F.fromArray(s,V*3),B.copy(F);const Y=c[V];C.copy(Y),C.sub(F.multiplyScalar(F.dot(Y))).normalize(),w.crossVectors(B,Y);const I=w.dot(u[V])<0?-1:1;l[V*4]=C.x,l[V*4+1]=C.y,l[V*4+2]=C.z,l[V*4+3]=I}for(let V=0,Y=L.length;V<Y;++V){const q=L[V],I=q.start,H=q.count;for(let U=I,z=I+H;U<z;U+=3)D(n[U+0]),D(n[U+1]),D(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new S,s=new S,o=new S,a=new S,l=new S,c=new S,u=new S,d=new S;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),y=e.getX(h+1),b=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,b),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,b),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(b,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let d=0,h=c;d<u;d++,h++)o[h]=l[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kn.fromBufferAttribute(e,t),kn.normalize(),e.setXYZ(t,kn.x,kn.y,kn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let y=0,b=l.length;y<b;y++){p=l[y]*u;for(let v=0;v<u;v++)h[g++]=c[p++]}return new qt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new Et().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}Et.prototype.isBufferGeometry=!0;const pm=new qe,va=new Bo,cf=new No,jr=new S,Qr=new S,Zr=new S,uf=new S,df=new S,ff=new S,su=new S,ru=new S,ou=new S,au=new ae,lu=new ae,cu=new ae,hf=new S,uu=new S;class Nt extends Ht{constructor(e=new Et,t=new Ut){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),cf.copy(n.boundingSphere),cf.applyMatrix4(s),e.ray.intersectsSphere(cf)===!1)||(pm.copy(s).invert(),va.copy(e.ray).applyMatrix4(pm),n.boundingBox!==null&&va.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,d=n.attributes.uv,h=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let y=0,b=p.length;y<b;y++){const v=p[y],m=i[v.materialIndex],M=Math.max(v.start,g.start),L=Math.min(v.start+v.count,g.start+g.count);for(let C=M,w=L;C<w;C+=3){const F=a.getX(C),B=a.getX(C+1),D=a.getX(C+2);o=du(this,m,e,va,l,c,u,d,h,F,B,D),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const y=Math.max(0,g.start),b=Math.min(a.count,g.start+g.count);for(let v=y,m=b;v<m;v+=3){const M=a.getX(v),L=a.getX(v+1),C=a.getX(v+2);o=du(this,i,e,va,l,c,u,d,h,M,L,C),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let y=0,b=p.length;y<b;y++){const v=p[y],m=i[v.materialIndex],M=Math.max(v.start,g.start),L=Math.min(v.start+v.count,g.start+g.count);for(let C=M,w=L;C<w;C+=3){const F=C,B=C+1,D=C+2;o=du(this,m,e,va,l,c,u,d,h,F,B,D),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const y=Math.max(0,g.start),b=Math.min(l.count,g.start+g.count);for(let v=y,m=b;v<m;v+=3){const M=v,L=v+1,C=v+2;o=du(this,i,e,va,l,c,u,d,h,M,L,C),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Nt.prototype.isMesh=!0;function Yy(r,e,t,n,i,s,o,a){let l;if(e.side===On?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side!==Yi,a),l===null)return null;uu.copy(a),uu.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(uu);return c<t.near||c>t.far?null:{distance:c,point:uu.clone(),object:r}}function du(r,e,t,n,i,s,o,a,l,c,u,d){jr.fromBufferAttribute(i,c),Qr.fromBufferAttribute(i,u),Zr.fromBufferAttribute(i,d);const h=r.morphTargetInfluences;if(e.morphTargets&&s&&h){su.set(0,0,0),ru.set(0,0,0),ou.set(0,0,0);for(let g=0,y=s.length;g<y;g++){const b=h[g],v=s[g];b!==0&&(uf.fromBufferAttribute(v,c),df.fromBufferAttribute(v,u),ff.fromBufferAttribute(v,d),o?(su.addScaledVector(uf,b),ru.addScaledVector(df,b),ou.addScaledVector(ff,b)):(su.addScaledVector(uf.sub(jr),b),ru.addScaledVector(df.sub(Qr),b),ou.addScaledVector(ff.sub(Zr),b)))}jr.add(su),Qr.add(ru),Zr.add(ou)}r.isSkinnedMesh&&e.skinning&&(r.boneTransform(c,jr),r.boneTransform(u,Qr),r.boneTransform(d,Zr));const p=Yy(r,e,t,n,jr,Qr,Zr,hf);if(p){a&&(au.fromBufferAttribute(a,c),lu.fromBufferAttribute(a,u),cu.fromBufferAttribute(a,d),p.uv=Rn.getUV(hf,jr,Qr,Zr,au,lu,cu,new ae)),l&&(au.fromBufferAttribute(l,c),lu.fromBufferAttribute(l,u),cu.fromBufferAttribute(l,d),p.uv2=Rn.getUV(hf,jr,Qr,Zr,au,lu,cu,new ae));const g={a:c,b:u,c:d,normal:new S,materialIndex:0};Rn.getNormal(jr,Qr,Zr,g.normal),p.face=g}return p}class $l extends Et{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(d,2));function g(y,b,v,m,M,L,C,w,F,B,D){const V=L/F,Y=C/B,q=L/2,I=C/2,H=w/2,U=F+1,z=B+1;let ne=0,pe=0;const le=new S;for(let ze=0;ze<z;ze++){const Ee=ze*Y-I;for(let Ke=0;Ke<U;Ke++){const Qe=Ke*V-q;le[y]=Qe*m,le[b]=Ee*M,le[v]=H,c.push(le.x,le.y,le.z),le[y]=0,le[b]=0,le[v]=w>0?1:-1,u.push(le.x,le.y,le.z),d.push(Ke/F),d.push(1-ze/B),ne+=1}}for(let ze=0;ze<B;ze++)for(let Ee=0;Ee<F;Ee++){const Ke=h+Ee+U*ze,Qe=h+Ee+U*(ze+1),ie=h+(Ee+1)+U*(ze+1),Bt=h+(Ee+1)+U*ze;l.push(Ke,Qe,Bt),l.push(Qe,ie,Bt),pe+=6}a.addGroup(p,pe,D),p+=pe,h+=ne}}}function Ua(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $n(r){const e={};for(let t=0;t<r.length;t++){const n=Ua(r[t]);for(const i in n)e[i]=n[i]}return e}const eh={clone:Ua,merge:$n};var qy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Tn{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=qy,this.fragmentShader=jy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ua(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}xi.prototype.isShaderMaterial=!0;class th extends Ht{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new S),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}th.prototype.isCamera=!0;class Kn extends th{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zl*2*Math.atan(Math.tan(Gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}Kn.prototype.isPerspectiveCamera=!0;const xa=90,ya=1;class nh extends Ht{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Kn(xa,ya,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new S(1,0,0)),this.add(i);const s=new Kn(xa,ya,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new S(-1,0,0)),this.add(s);const o=new Kn(xa,ya,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new S(0,1,0)),this.add(o);const a=new Kn(xa,ya,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new S(0,-1,0)),this.add(a);const l=new Kn(xa,ya,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new S(0,0,1)),this.add(l);const c=new Kn(xa,ya,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new S(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.xr.enabled,d=e.getRenderTarget();e.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(d),e.xr.enabled=u}}class zu extends Wn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:jf,a=a!==void 0?a:Ys,super(e,t,n,i,s,o,a,l,c,u),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}zu.prototype.isCubeTexture=!0;class Vg extends Jn{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new zu(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=ui,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new $l(5,5,5),s=new xi({name:"CubemapFromEquirect",uniforms:Ua(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:Xs});s.uniforms.tEquirect.value=t;const o=new Nt(i,s),a=t.minFilter;return t.minFilter===Wa&&(t.minFilter=en),new nh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}Vg.prototype.isWebGLCubeRenderTarget=!0;class ih extends Wn{constructor(e,t,n,i,s,o,a,l,c,u,d,h){super(null,o,a,l,c,u,i,s,d,h),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=c!==void 0?c:An,this.minFilter=u!==void 0?u:An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}ih.prototype.isDataTexture=!0;const _a=new No,fu=new S;class Uu{constructor(e=new us,t=new us,n=new us,i=new us,s=new us,o=new us){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7],h=n[8],p=n[9],g=n[10],y=n[11],b=n[12],v=n[13],m=n[14],M=n[15];return t[0].setComponents(a-i,d-l,y-h,M-b).normalize(),t[1].setComponents(a+i,d+l,y+h,M+b).normalize(),t[2].setComponents(a+s,d+c,y+p,M+v).normalize(),t[3].setComponents(a-s,d-c,y-p,M-v).normalize(),t[4].setComponents(a-o,d-u,y-g,M-m).normalize(),t[5].setComponents(a+o,d+u,y+g,M+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),_a.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(_a)}intersectsSprite(e){return _a.center.set(0,0,0),_a.radius=.7071067811865476,_a.applyMatrix4(e.matrixWorld),this.intersectsSphere(_a)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(fu.x=i.normal.x>0?e.max.x:e.min.x,fu.y=i.normal.y>0?e.max.y:e.min.y,fu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Qy(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,h=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,d,h),c.onUploadCallback();let g=5126;return d instanceof Float32Array?g=5126:d instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):d instanceof Uint16Array?c.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:d instanceof Int16Array?g=5122:d instanceof Uint32Array?g=5125:d instanceof Int32Array?g=5124:d instanceof Int8Array?g=5120:d instanceof Uint8Array&&(g=5121),{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const h=u.array,p=u.updateRange;r.bindBuffer(d,c),p.count===-1?r.bufferSubData(d,0,h):(t?r.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):r.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class cs extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,h=t/l,p=[],g=[],y=[],b=[];for(let v=0;v<u;v++){const m=v*h-o;for(let M=0;M<c;M++){const L=M*d-s;g.push(L,-m,0),y.push(0,0,1),b.push(M/a),b.push(1-v/l)}}for(let v=0;v<l;v++)for(let m=0;m<a;m++){const M=m+c*v,L=m+c*(v+1),C=m+1+c*(v+1),w=m+1+c*v;p.push(M,L,w),p.push(L,C,w)}this.setIndex(p),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(b,2))}}var Zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,$y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jy=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Ky=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,e_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t_="vec3 transformed = vec3( position );",n_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i_=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,s_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,h_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,p_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,m_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,__="gl_FragColor = linearToOutputTexel( gl_FragColor );",b_=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,w_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,A_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,E_=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,L_=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,P_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,F_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,I_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D_=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,N_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,B_=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,k_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O_=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,z_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,H_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,G_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,V_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,X_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Y_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Q_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Z_=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,$_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,K_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,ib=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,rb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,ob=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ab=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,lb=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,cb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ub=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,db=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,fb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xb=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yb=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_b=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,bb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Sb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ab=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pb=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cb=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,Rb=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,Fb=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ib=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Db=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Nb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Bb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,kb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ob=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zb=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ub=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hb=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wb=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$b=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kb=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ew=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nw=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sw=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aw=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lw=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,uw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,pw=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,gw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;const Tt={alphamap_fragment:Zy,alphamap_pars_fragment:$y,alphatest_fragment:Jy,aomap_fragment:Ky,aomap_pars_fragment:e_,begin_vertex:t_,beginnormal_vertex:n_,bsdfs:i_,bumpmap_pars_fragment:s_,clipping_planes_fragment:r_,clipping_planes_pars_fragment:o_,clipping_planes_pars_vertex:a_,clipping_planes_vertex:l_,color_fragment:c_,color_pars_fragment:u_,color_pars_vertex:d_,color_vertex:f_,common:h_,cube_uv_reflection_fragment:p_,defaultnormal_vertex:m_,displacementmap_pars_vertex:g_,displacementmap_vertex:v_,emissivemap_fragment:x_,emissivemap_pars_fragment:y_,encodings_fragment:__,encodings_pars_fragment:b_,envmap_fragment:w_,envmap_common_pars_fragment:M_,envmap_pars_fragment:S_,envmap_pars_vertex:A_,envmap_physical_pars_fragment:B_,envmap_vertex:T_,fog_vertex:E_,fog_pars_vertex:L_,fog_fragment:P_,fog_pars_fragment:C_,gradientmap_pars_fragment:R_,lightmap_fragment:F_,lightmap_pars_fragment:I_,lights_lambert_vertex:D_,lights_pars_begin:N_,lights_toon_fragment:k_,lights_toon_pars_fragment:O_,lights_phong_fragment:z_,lights_phong_pars_fragment:U_,lights_physical_fragment:H_,lights_physical_pars_fragment:G_,lights_fragment_begin:V_,lights_fragment_maps:W_,lights_fragment_end:X_,logdepthbuf_fragment:Y_,logdepthbuf_pars_fragment:q_,logdepthbuf_pars_vertex:j_,logdepthbuf_vertex:Q_,map_fragment:Z_,map_pars_fragment:$_,map_particle_fragment:J_,map_particle_pars_fragment:K_,metalnessmap_fragment:eb,metalnessmap_pars_fragment:tb,morphnormal_vertex:nb,morphtarget_pars_vertex:ib,morphtarget_vertex:sb,normal_fragment_begin:rb,normal_fragment_maps:ob,normalmap_pars_fragment:ab,clearcoat_normal_fragment_begin:lb,clearcoat_normal_fragment_maps:cb,clearcoat_pars_fragment:ub,packing:db,premultiplied_alpha_fragment:fb,project_vertex:hb,dithering_fragment:pb,dithering_pars_fragment:mb,roughnessmap_fragment:gb,roughnessmap_pars_fragment:vb,shadowmap_pars_fragment:xb,shadowmap_pars_vertex:yb,shadowmap_vertex:_b,shadowmask_pars_fragment:bb,skinbase_vertex:wb,skinning_pars_vertex:Mb,skinning_vertex:Sb,skinnormal_vertex:Ab,specularmap_fragment:Tb,specularmap_pars_fragment:Eb,tonemapping_fragment:Lb,tonemapping_pars_fragment:Pb,transmissionmap_fragment:Cb,transmissionmap_pars_fragment:Rb,uv_pars_fragment:Fb,uv_pars_vertex:Ib,uv_vertex:Db,uv2_pars_fragment:Nb,uv2_pars_vertex:Bb,uv2_vertex:kb,worldpos_vertex:Ob,background_frag:zb,background_vert:Ub,cube_frag:Hb,cube_vert:Gb,depth_frag:Vb,depth_vert:Wb,distanceRGBA_frag:Xb,distanceRGBA_vert:Yb,equirect_frag:qb,equirect_vert:jb,linedashed_frag:Qb,linedashed_vert:Zb,meshbasic_frag:$b,meshbasic_vert:Jb,meshlambert_frag:Kb,meshlambert_vert:ew,meshmatcap_frag:tw,meshmatcap_vert:nw,meshtoon_frag:iw,meshtoon_vert:sw,meshphong_frag:rw,meshphong_vert:ow,meshphysical_frag:aw,meshphysical_vert:lw,normal_frag:cw,normal_vert:uw,points_frag:dw,points_vert:fw,shadow_frag:hw,shadow_vert:pw,sprite_frag:mw,sprite_vert:gw},De={common:{diffuse:{value:new se(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new Vn},uv2Transform:{value:new Vn},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new Vn}},sprite:{diffuse:{value:new se(15658734)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new Vn}}},Us={basic:{uniforms:$n([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:$n([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.fog,De.lights,{emissive:{value:new se(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:$n([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:$n([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:$n([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new se(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:$n([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:$n([De.points,De.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:$n([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:$n([De.common,De.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:$n([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.normal_vert,fragmentShader:Tt.normal_frag},sprite:{uniforms:$n([De.sprite,De.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vn},t2D:{value:null}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},cube:{uniforms:$n([De.envmap,{opacity:{value:1}}]),vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:$n([De.common,De.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:$n([De.lights,De.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Us.physical={uniforms:$n([Us.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ae(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new se(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};function vw(r,e,t,n,i){const s=new se(0);let o=0,a,l,c=null,u=0,d=null;function h(g,y,b,v){let m=y.isScene===!0?y.background:null;m&&m.isTexture&&(m=e.get(m));const M=r.xr,L=M.getSession&&M.getSession();L&&L.environmentBlendMode==="additive"&&(m=null),m===null?p(s,o):m&&m.isColor&&(p(m,1),v=!0),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),m&&(m.isCubeTexture||m.mapping===ku)?(l===void 0&&(l=new Nt(new $l(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Ua(Us.cube.uniforms),vertexShader:Us.cube.vertexShader,fragmentShader:Us.cube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,w,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=m,l.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m._needsFlipEnvMap?-1:1,(c!==m||u!==m.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,c=m,u=m.version,d=r.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):m&&m.isTexture&&(a===void 0&&(a=new Nt(new cs(2,2),new xi({name:"BackgroundMaterial",uniforms:Ua(Us.background.uniforms),vertexShader:Us.background.vertexShader,fragmentShader:Us.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),a.material.uniforms.uvTransform.value.copy(m.matrix),(c!==m||u!==m.version||d!==r.toneMapping)&&(a.material.needsUpdate=!0,c=m,u=m.version,d=r.toneMapping),g.unshift(a,a.geometry,a.material,0,0,null))}function p(g,y){t.buffers.color.setClear(g.r,g.g,g.b,y,i)}return{getClearColor:function(){return s},setClearColor:function(g,y=1){s.set(g),o=y,p(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,p(s,o)},render:h}}function xw(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=y(null);let c=l;function u(I,H,U,z,ne){let pe=!1;if(o){const le=g(z,U,H);c!==le&&(c=le,h(c.object)),pe=b(z,ne),pe&&v(z,ne)}else{const le=H.wireframe===!0;(c.geometry!==z.id||c.program!==U.id||c.wireframe!==le)&&(c.geometry=z.id,c.program=U.id,c.wireframe=le,pe=!0)}I.isInstancedMesh===!0&&(pe=!0),ne!==null&&t.update(ne,34963),pe&&(F(I,H,U,z),ne!==null&&r.bindBuffer(34963,t.get(ne).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function h(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function p(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function g(I,H,U){const z=U.wireframe===!0;let ne=a[I.id];ne===void 0&&(ne={},a[I.id]=ne);let pe=ne[H.id];pe===void 0&&(pe={},ne[H.id]=pe);let le=pe[z];return le===void 0&&(le=y(d()),pe[z]=le),le}function y(I){const H=[],U=[],z=[];for(let ne=0;ne<i;ne++)H[ne]=0,U[ne]=0,z[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:U,attributeDivisors:z,object:I,attributes:{},index:null}}function b(I,H){const U=c.attributes,z=I.attributes;let ne=0;for(const pe in z){const le=U[pe],ze=z[pe];if(le===void 0||le.attribute!==ze||le.data!==ze.data)return!0;ne++}return c.attributesNum!==ne||c.index!==H}function v(I,H){const U={},z=I.attributes;let ne=0;for(const pe in z){const le=z[pe],ze={};ze.attribute=le,le.data&&(ze.data=le.data),U[pe]=ze,ne++}c.attributes=U,c.attributesNum=ne,c.index=H}function m(){const I=c.newAttributes;for(let H=0,U=I.length;H<U;H++)I[H]=0}function M(I){L(I,0)}function L(I,H){const U=c.newAttributes,z=c.enabledAttributes,ne=c.attributeDivisors;U[I]=1,z[I]===0&&(r.enableVertexAttribArray(I),z[I]=1),ne[I]!==H&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,H),ne[I]=H)}function C(){const I=c.newAttributes,H=c.enabledAttributes;for(let U=0,z=H.length;U<z;U++)H[U]!==I[U]&&(r.disableVertexAttribArray(U),H[U]=0)}function w(I,H,U,z,ne,pe){n.isWebGL2===!0&&(U===5124||U===5125)?r.vertexAttribIPointer(I,H,U,ne,pe):r.vertexAttribPointer(I,H,U,z,ne,pe)}function F(I,H,U,z){if(n.isWebGL2===!1&&(I.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const ne=z.attributes,pe=U.getAttributes(),le=H.defaultAttributeValues;for(const ze in pe){const Ee=pe[ze];if(Ee>=0){const Ke=ne[ze];if(Ke!==void 0){const Qe=Ke.normalized,ie=Ke.itemSize,Bt=t.get(Ke);if(Bt===void 0)continue;const bt=Bt.buffer,st=Bt.type,Ze=Bt.bytesPerElement;if(Ke.isInterleavedBufferAttribute){const vt=Ke.data,yt=vt.stride,mt=Ke.offset;vt&&vt.isInstancedInterleavedBuffer?(L(Ee,vt.meshPerAttribute),z._maxInstanceCount===void 0&&(z._maxInstanceCount=vt.meshPerAttribute*vt.count)):M(Ee),r.bindBuffer(34962,bt),w(Ee,ie,st,Qe,yt*Ze,mt*Ze)}else Ke.isInstancedBufferAttribute?(L(Ee,Ke.meshPerAttribute),z._maxInstanceCount===void 0&&(z._maxInstanceCount=Ke.meshPerAttribute*Ke.count)):M(Ee),r.bindBuffer(34962,bt),w(Ee,ie,st,Qe,0,0)}else if(ze==="instanceMatrix"){const Qe=t.get(I.instanceMatrix);if(Qe===void 0)continue;const ie=Qe.buffer,Bt=Qe.type;L(Ee+0,1),L(Ee+1,1),L(Ee+2,1),L(Ee+3,1),r.bindBuffer(34962,ie),r.vertexAttribPointer(Ee+0,4,Bt,!1,64,0),r.vertexAttribPointer(Ee+1,4,Bt,!1,64,16),r.vertexAttribPointer(Ee+2,4,Bt,!1,64,32),r.vertexAttribPointer(Ee+3,4,Bt,!1,64,48)}else if(ze==="instanceColor"){const Qe=t.get(I.instanceColor);if(Qe===void 0)continue;const ie=Qe.buffer,Bt=Qe.type;L(Ee,1),r.bindBuffer(34962,ie),r.vertexAttribPointer(Ee,3,Bt,!1,12,0)}else if(le!==void 0){const Qe=le[ze];if(Qe!==void 0)switch(Qe.length){case 2:r.vertexAttrib2fv(Ee,Qe);break;case 3:r.vertexAttrib3fv(Ee,Qe);break;case 4:r.vertexAttrib4fv(Ee,Qe);break;default:r.vertexAttrib1fv(Ee,Qe)}}}}C()}function B(){Y();for(const I in a){const H=a[I];for(const U in H){const z=H[U];for(const ne in z)p(z[ne].object),delete z[ne];delete H[U]}delete a[I]}}function D(I){if(a[I.id]===void 0)return;const H=a[I.id];for(const U in H){const z=H[U];for(const ne in z)p(z[ne].object),delete z[ne];delete H[U]}delete a[I.id]}function V(I){for(const H in a){const U=a[H];if(U[I.id]===void 0)continue;const z=U[I.id];for(const ne in z)p(z[ne].object),delete z[ne];delete U[I.id]}}function Y(){q(),c!==l&&(c=l,h(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:q,dispose:B,releaseStatesOfGeometry:D,releaseStatesOfProgram:V,initAttributes:m,enableAttribute:M,disableUnusedAttributes:C}}function yw(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,d){if(d===0)return;let h,p;if(i)h=r,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,d),t.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function _w(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=t.logarithmicDepthBuffer===!0,u=r.getParameter(34930),d=r.getParameter(35660),h=r.getParameter(3379),p=r.getParameter(34076),g=r.getParameter(34921),y=r.getParameter(36347),b=r.getParameter(36348),v=r.getParameter(36349),m=d>0,M=o||e.has("OES_texture_float"),L=m&&M,C=o?r.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:d,maxTextureSize:h,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:m,floatFragmentTextures:M,floatVertexTextures:L,maxSamples:C}}function bw(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new us,a=new Vn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h,p){const g=d.length!==0||h||n!==0||i;return i=h,t=u(d,p,0),n=d.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(d,h,p){const g=d.clippingPlanes,y=d.clipIntersection,b=d.clipShadows,v=r.get(d);if(!i||g===null||g.length===0||s&&!b)s?u(null):c();else{const m=s?0:n,M=m*4;let L=v.clippingState||null;l.value=L,L=u(g,h,M,p);for(let C=0;C!==M;++C)L[C]=t[C];v.clippingState=L,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,g){const y=d!==null?d.length:0;let b=null;if(y!==0){if(b=l.value,g!==!0||b===null){const v=p+y*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(b===null||b.length<v)&&(b=new Float32Array(v));for(let M=0,L=p;M!==y;++M,L+=4)o.copy(d[M]).applyMatrix4(m,a),o.normal.toArray(b,L),b[L+3]=o.constant}l.value=b,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,b}}function ww(r){let e=new WeakMap;function t(o,a){return a===Xp?o.mapping=jf:a===Yp&&(o.mapping=Qf),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xp||a===Yp)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=r.getRenderTarget(),u=new Vg(l.height/2);return u.fromEquirectangularTexture(r,o),e.set(o,u),r.setRenderTarget(c),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}function Mw(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Sw(r,e,t,n){const i={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],34962);const p=d.morphAttributes;for(const g in p){const y=p[g];for(let b=0,v=y.length;b<v;b++)e.update(y[b],34962)}}function c(d){const h=[],p=d.index,g=d.attributes.position;let y=0;if(p!==null){const m=p.array;y=p.version;for(let M=0,L=m.length;M<L;M+=3){const C=m[M+0],w=m[M+1],F=m[M+2];h.push(C,w,w,F,F,C)}}else{const m=g.array;y=g.version;for(let M=0,L=m.length/3-1;M<L;M+=3){const C=M+0,w=M+1,F=M+2;h.push(C,w,w,F,F,C)}}const b=new(Gg(h)>65535?Hg:Ug)(h,1);b.version=y;const v=s.get(d);v&&e.remove(v),s.set(d,b)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Aw(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){r.drawElements(s,p,a,h*l),t.update(p,s,1)}function d(h,p,g){if(g===0)return;let y,b;if(i)y=r,b="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),b="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[b](s,p,a,h*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function Tw(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ew(r,e){return r[0]-e[0]}function Lw(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Pw(r){const e={},t=new Float32Array(8),n=[];for(let s=0;s<8;s++)n[s]=[s,0];function i(s,o,a,l){const c=s.morphTargetInfluences,u=c===void 0?0:c.length;let d=e[o.id];if(d===void 0){d=[];for(let b=0;b<u;b++)d[b]=[b,0];e[o.id]=d}for(let b=0;b<u;b++){const v=d[b];v[0]=b,v[1]=c[b]}d.sort(Lw);for(let b=0;b<8;b++)b<u&&d[b][1]?(n[b][0]=d[b][0],n[b][1]=d[b][1]):(n[b][0]=Number.MAX_SAFE_INTEGER,n[b][1]=0);n.sort(Ew);const h=a.morphTargets&&o.morphAttributes.position,p=a.morphNormals&&o.morphAttributes.normal;let g=0;for(let b=0;b<8;b++){const v=n[b],m=v[0],M=v[1];m!==Number.MAX_SAFE_INTEGER&&M?(h&&o.getAttribute("morphTarget"+b)!==h[m]&&o.setAttribute("morphTarget"+b,h[m]),p&&o.getAttribute("morphNormal"+b)!==p[m]&&o.setAttribute("morphNormal"+b,p[m]),t[b]=M,g+=M):(h&&o.hasAttribute("morphTarget"+b)===!0&&o.deleteAttribute("morphTarget"+b),p&&o.hasAttribute("morphNormal"+b)===!0&&o.deleteAttribute("morphNormal"+b),t[b]=0)}const y=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",y),l.getUniforms().setValue(r,"morphTargetInfluences",t)}return{update:i}}function Cw(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Xg extends Wn{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=An,this.minFilter=An,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Xg.prototype.isDataTexture2DArray=!0;class Yg extends Wn{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=An,this.minFilter=An,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Yg.prototype.isDataTexture3D=!0;const qg=new Wn,Rw=new Xg,Fw=new Yg,jg=new zu,mm=[],gm=[],vm=new Float32Array(16),xm=new Float32Array(9),ym=new Float32Array(4);function Ya(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=mm[i];if(s===void 0&&(s=new Float32Array(i),mm[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function di(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ti(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Qg(r,e){let t=gm[e];t===void 0&&(t=new Int32Array(e),gm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Iw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Dw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(di(t,e))return;r.uniform2fv(this.addr,e),ti(t,e)}}function Nw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(di(t,e))return;r.uniform3fv(this.addr,e),ti(t,e)}}function Bw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(di(t,e))return;r.uniform4fv(this.addr,e),ti(t,e)}}function kw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(di(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ti(t,e)}else{if(di(t,n))return;ym.set(n),r.uniformMatrix2fv(this.addr,!1,ym),ti(t,n)}}function Ow(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(di(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ti(t,e)}else{if(di(t,n))return;xm.set(n),r.uniformMatrix3fv(this.addr,!1,xm),ti(t,n)}}function zw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(di(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ti(t,e)}else{if(di(t,n))return;vm.set(n),r.uniformMatrix4fv(this.addr,!1,vm),ti(t,n)}}function Uw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Hw(r,e){const t=this.cache;di(t,e)||(r.uniform2iv(this.addr,e),ti(t,e))}function Gw(r,e){const t=this.cache;di(t,e)||(r.uniform3iv(this.addr,e),ti(t,e))}function Vw(r,e){const t=this.cache;di(t,e)||(r.uniform4iv(this.addr,e),ti(t,e))}function Ww(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Xw(r,e){const t=this.cache;di(t,e)||(r.uniform2uiv(this.addr,e),ti(t,e))}function Yw(r,e){const t=this.cache;di(t,e)||(r.uniform3uiv(this.addr,e),ti(t,e))}function qw(r,e){const t=this.cache;di(t,e)||(r.uniform4uiv(this.addr,e),ti(t,e))}function jw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||qg,i)}function Qw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Fw,i)}function Zw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||jg,i)}function $w(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Rw,i)}function Jw(r){switch(r){case 5126:return Iw;case 35664:return Dw;case 35665:return Nw;case 35666:return Bw;case 35674:return kw;case 35675:return Ow;case 35676:return zw;case 5124:case 35670:return Uw;case 35667:case 35671:return Hw;case 35668:case 35672:return Gw;case 35669:case 35673:return Vw;case 5125:return Ww;case 36294:return Xw;case 36295:return Yw;case 36296:return qw;case 35678:case 36198:case 36298:case 36306:case 35682:return jw;case 35679:case 36299:case 36307:return Qw;case 35680:case 36300:case 36308:case 36293:return Zw;case 36289:case 36303:case 36311:case 36292:return $w}}function Kw(r,e){r.uniform1fv(this.addr,e)}function eM(r,e){const t=Ya(e,this.size,2);r.uniform2fv(this.addr,t)}function tM(r,e){const t=Ya(e,this.size,3);r.uniform3fv(this.addr,t)}function nM(r,e){const t=Ya(e,this.size,4);r.uniform4fv(this.addr,t)}function iM(r,e){const t=Ya(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function sM(r,e){const t=Ya(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function rM(r,e){const t=Ya(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function oM(r,e){r.uniform1iv(this.addr,e)}function aM(r,e){r.uniform2iv(this.addr,e)}function lM(r,e){r.uniform3iv(this.addr,e)}function cM(r,e){r.uniform4iv(this.addr,e)}function uM(r,e){r.uniform1uiv(this.addr,e)}function dM(r,e){r.uniform2uiv(this.addr,e)}function fM(r,e){r.uniform3uiv(this.addr,e)}function hM(r,e){r.uniform4uiv(this.addr,e)}function pM(r,e,t){const n=e.length,i=Qg(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||qg,i[s])}function mM(r,e,t){const n=e.length,i=Qg(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||jg,i[s])}function gM(r){switch(r){case 5126:return Kw;case 35664:return eM;case 35665:return tM;case 35666:return nM;case 35674:return iM;case 35675:return sM;case 35676:return rM;case 5124:case 35670:return oM;case 35667:case 35671:return aM;case 35668:case 35672:return lM;case 35669:case 35673:return cM;case 5125:return uM;case 36294:return dM;case 36295:return fM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return pM;case 35680:case 36300:case 36308:case 36293:return mM}}function vM(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=Jw(e.type)}function Zg(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=gM(e.type)}Zg.prototype.updateCache=function(r){const e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),ti(e,r)};function $g(r){this.id=r,this.seq=[],this.map={}}$g.prototype.setValue=function(r,e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const o=n[i];o.setValue(r,e[o.id],t)}};const pf=/(\w+)(\])?(\[|\.)?/g;function _m(r,e){r.seq.push(e),r.map[e.id]=e}function xM(r,e,t){const n=r.name,i=n.length;for(pf.lastIndex=0;;){const s=pf.exec(n),o=pf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){_m(t,c===void 0?new vM(a,r,e):new Zg(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new $g(a),_m(t,d)),t=d}}}function eo(r,e){this.seq=[],this.map={};const t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);xM(i,s,this)}}eo.prototype.setValue=function(r,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(r,t,n)};eo.prototype.setOptional=function(r,e,t){const n=e[t];n!==void 0&&this.setValue(r,t,n)};eo.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){const o=e[i],a=t[o.id];a.needsUpdate!==!1&&o.setValue(r,a.value,n)}};eo.seqWithValue=function(r,e){const t=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in e&&t.push(s)}return t};function bm(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let yM=0;function _M(r){const e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Jg(r){switch(r){case ei:return["Linear","( value )"];case fs:return["sRGB","( value )"];case Ou:return["RGBE","( value )"];case Rg:return["RGBM","( value, 7.0 )"];case Fg:return["RGBM","( value, 16.0 )"];case Ig:return["RGBD","( value, 256.0 )"];case Jf:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case gy:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function wm(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=r.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+i+_M(s)}function Pl(r,e){const t=Jg(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function bM(r,e){const t=Jg(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function wM(r,e){let t;switch(e){case yx:t="Linear";break;case _x:t="Reinhard";break;case bx:t="OptimizedCineon";break;case wx:t="ACESFilmic";break;case Mx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function MM(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ul).join(`
`)}function SM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function AM(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const o=r.getActiveAttrib(e,i).name;t[o]=r.getAttribLocation(e,o)}return t}function Ul(r){return r!==""}function Mm(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nf(r){return r.replace(TM,EM)}function EM(r,e){const t=Tt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Nf(t)}const LM=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,PM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Am(r){return r.replace(PM,Kg).replace(LM,CM)}function CM(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Kg(r,e,t,n)}function Kg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Tm(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function RM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===bg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===$v?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===zl&&(e="SHADOWMAP_TYPE_VSM"),e}function FM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case jf:case Qf:e="ENVMAP_TYPE_CUBE";break;case ku:case Zf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Qf:case Zf:e="ENVMAP_MODE_REFRACTION";break}return e}function DM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Bu:e="ENVMAP_BLENDING_MULTIPLY";break;case vx:e="ENVMAP_BLENDING_MIX";break;case xx:e="ENVMAP_BLENDING_ADD";break}return e}function NM(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=RM(t),c=FM(t),u=IM(t),d=DM(t),h=r.gammaFactor>0?r.gammaFactor:1,p=t.isWebGL2?"":MM(t),g=SM(s),y=i.createProgram();let b,v,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=[g].filter(Ul).join(`
`),b.length>0&&(b+=`
`),v=[p,g].filter(Ul).join(`
`),v.length>0&&(v+=`
`)):(b=[Tm(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+h,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ul).join(`
`),v=[p,Tm(t),"#define SHADER_NAME "+t.shaderName,g,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Da?"#define TONE_MAPPING":"",t.toneMapping!==Da?Tt.tonemapping_pars_fragment:"",t.toneMapping!==Da?wM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",Tt.encodings_pars_fragment,t.map?Pl("mapTexelToLinear",t.mapEncoding):"",t.matcap?Pl("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Pl("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Pl("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?Pl("lightMapTexelToLinear",t.lightMapEncoding):"",bM("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ul).join(`
`)),o=Nf(o),o=Mm(o,t),o=Sm(o,t),a=Nf(a),a=Mm(a,t),a=Sm(a,t),o=Am(o),a=Am(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,b=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,v=["#define varying in",t.glslVersion===im?"":"out highp vec4 pc_fragColor;",t.glslVersion===im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=m+b+o,L=m+v+a,C=bm(i,35633,M),w=bm(i,35632,L);if(i.attachShader(y,C),i.attachShader(y,w),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y),r.debug.checkShaderErrors){const D=i.getProgramInfoLog(y).trim(),V=i.getShaderInfoLog(C).trim(),Y=i.getShaderInfoLog(w).trim();let q=!0,I=!0;if(i.getProgramParameter(y,35714)===!1){q=!1;const H=wm(i,C,"vertex"),U=wm(i,w,"fragment");console.error("THREE.WebGLProgram: shader error: ",i.getError(),"35715",i.getProgramParameter(y,35715),"gl.getProgramInfoLog",D,H,U)}else D!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",D):(V===""||Y==="")&&(I=!1);I&&(this.diagnostics={runnable:q,programLog:D,vertexShader:{log:V,prefix:b},fragmentShader:{log:Y,prefix:v}})}i.deleteShader(C),i.deleteShader(w);let F;this.getUniforms=function(){return F===void 0&&(F=new eo(i,y)),F};let B;return this.getAttributes=function(){return B===void 0&&(B=AM(i,y)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.name=t.shaderName,this.id=yM++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=w,this}function BM(r,e,t,n,i,s){const o=[],a=n.isWebGL2,l=n.logarithmicDepthBuffer,c=n.floatVertexTextures,u=n.maxVertexUniforms,d=n.vertexTextures;let h=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},g=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function y(w){const B=w.skeleton.bones;if(c)return 1024;{const V=Math.floor((u-20)/4),Y=Math.min(V,B.length);return Y<B.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+B.length+" bones. This GPU supports "+Y+"."),0):Y}}function b(w){let F;return w&&w.isTexture?F=w.encoding:w&&w.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),F=w.texture.encoding):F=ei,F}function v(w,F,B,D,V){const Y=D.fog,q=w.isMeshStandardMaterial?D.environment:null,I=e.get(w.envMap||q),H=p[w.type],U=V.isSkinnedMesh?y(V):0;w.precision!==null&&(h=n.getMaxPrecision(w.precision),h!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",h,"instead."));let z,ne;if(H){const ze=Us[H];z=ze.vertexShader,ne=ze.fragmentShader}else z=w.vertexShader,ne=w.fragmentShader;const pe=r.getRenderTarget();return{isWebGL2:a,shaderID:H,shaderName:w.type,vertexShader:z,fragmentShader:ne,defines:w.defines,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:h,instancing:V.isInstancedMesh===!0,instancingColor:V.isInstancedMesh===!0&&V.instanceColor!==null,supportsVertexTextures:d,outputEncoding:pe!==null?b(pe.texture):r.outputEncoding,map:!!w.map,mapEncoding:b(w.map),matcap:!!w.matcap,matcapEncoding:b(w.matcap),envMap:!!I,envMapMode:I&&I.mapping,envMapEncoding:b(I),envMapCubeUV:!!I&&(I.mapping===ku||I.mapping===Zf),lightMap:!!w.lightMap,lightMapEncoding:b(w.lightMap),aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,emissiveMapEncoding:b(w.emissiveMap),bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===xy,tangentSpaceNormalMap:w.normalMapType===Io,clearcoatMap:!!w.clearcoatMap,clearcoatRoughnessMap:!!w.clearcoatRoughnessMap,clearcoatNormalMap:!!w.clearcoatNormalMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,alphaMap:!!w.alphaMap,gradientMap:!!w.gradientMap,sheen:!!w.sheen,transmissionMap:!!w.transmissionMap,combine:w.combine,vertexTangents:w.normalMap&&w.vertexTangents,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&V.geometry&&V.geometry.attributes.color&&V.geometry.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.displacementMap||!!w.transmissionMap,uvsVertexOnly:!(w.map||w.bumpMap||w.normalMap||w.specularMap||w.alphaMap||w.emissiveMap||w.roughnessMap||w.metalnessMap||w.clearcoatNormalMap||w.transmissionMap)&&!!w.displacementMap,fog:!!Y,useFog:w.fog,fogExp2:Y&&Y.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:l,skinning:w.skinning&&U>0,maxBones:U,useVertexTexture:c,morphTargets:w.morphTargets,morphNormals:w.morphNormals,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:w.toneMapped?r.toneMapping:Da,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,alphaTest:w.alphaTest,doubleSided:w.side===Yi,flipSided:w.side===On,depthPacking:w.depthPacking!==void 0?w.depthPacking:!1,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||t.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function m(w){const F=[];if(w.shaderID?F.push(w.shaderID):(F.push(w.fragmentShader),F.push(w.vertexShader)),w.defines!==void 0)for(const B in w.defines)F.push(B),F.push(w.defines[B]);if(w.isRawShaderMaterial===!1){for(let B=0;B<g.length;B++)F.push(w[g[B]]);F.push(r.outputEncoding),F.push(r.gammaFactor)}return F.push(w.customProgramCacheKey),F.join()}function M(w){const F=p[w.type];let B;if(F){const D=Us[F];B=eh.clone(D.uniforms)}else B=w.uniforms;return B}function L(w,F){let B;for(let D=0,V=o.length;D<V;D++){const Y=o[D];if(Y.cacheKey===F){B=Y,++B.usedTimes;break}}return B===void 0&&(B=new NM(r,F,w,i),o.push(B)),B}function C(w){if(--w.usedTimes===0){const F=o.indexOf(w);o[F]=o[o.length-1],o.pop(),w.destroy()}}return{getParameters:v,getProgramCacheKey:m,getUniforms:M,acquireProgram:L,releaseProgram:C,programs:o}}function kM(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function OM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.program!==e.program?r.program.id-e.program.id:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function zM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Em(r){const e=[];let t=0;const n=[],i=[],s={id:-1};function o(){t=0,n.length=0,i.length=0}function a(h,p,g,y,b,v){let m=e[t];const M=r.get(g);return m===void 0?(m={id:h.id,object:h,geometry:p,material:g,program:M.program||s,groupOrder:y,renderOrder:h.renderOrder,z:b,group:v},e[t]=m):(m.id=h.id,m.object=h,m.geometry=p,m.material=g,m.program=M.program||s,m.groupOrder=y,m.renderOrder=h.renderOrder,m.z=b,m.group=v),t++,m}function l(h,p,g,y,b,v){const m=a(h,p,g,y,b,v);(g.transparent===!0?i:n).push(m)}function c(h,p,g,y,b,v){const m=a(h,p,g,y,b,v);(g.transparent===!0?i:n).unshift(m)}function u(h,p){n.length>1&&n.sort(h||OM),i.length>1&&i.sort(p||zM)}function d(){for(let h=t,p=e.length;h<p;h++){const g=e[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.program=null,g.group=null}}return{opaque:n,transparent:i,init:o,push:l,unshift:c,finish:d,sort:u}}function UM(r){let e=new WeakMap;function t(i,s){let o;return e.has(i)===!1?(o=new Em(r),e.set(i,[o])):s>=e.get(i).length?(o=new Em(r),e.get(i).push(o)):o=e.get(i)[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function HM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new se};break;case"SpotLight":t={position:new S,direction:new S,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new se,groundColor:new se};break;case"RectAreaLight":t={color:new se,position:new S,halfWidth:new S,halfHeight:new S};break}return r[e.id]=t,t}}}function GM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let VM=0;function WM(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function XM(r,e){const t=new HM,n=GM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new S);const s=new S,o=new qe,a=new qe;function l(u){let d=0,h=0,p=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let g=0,y=0,b=0,v=0,m=0,M=0,L=0,C=0;u.sort(WM);for(let F=0,B=u.length;F<B;F++){const D=u[F],V=D.color,Y=D.intensity,q=D.distance,I=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=V.r*Y,h+=V.g*Y,p+=V.b*Y;else if(D.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],Y);else if(D.isDirectionalLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const U=D.shadow,z=n.get(D);z.shadowBias=U.bias,z.shadowNormalBias=U.normalBias,z.shadowRadius=U.radius,z.shadowMapSize=U.mapSize,i.directionalShadow[g]=z,i.directionalShadowMap[g]=I,i.directionalShadowMatrix[g]=D.shadow.matrix,M++}i.directional[g]=H,g++}else if(D.isSpotLight){const H=t.get(D);if(H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(V).multiplyScalar(Y),H.distance=q,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,D.castShadow){const U=D.shadow,z=n.get(D);z.shadowBias=U.bias,z.shadowNormalBias=U.normalBias,z.shadowRadius=U.radius,z.shadowMapSize=U.mapSize,i.spotShadow[b]=z,i.spotShadowMap[b]=I,i.spotShadowMatrix[b]=D.shadow.matrix,C++}i.spot[b]=H,b++}else if(D.isRectAreaLight){const H=t.get(D);H.color.copy(V).multiplyScalar(Y),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),i.rectArea[v]=H,v++}else if(D.isPointLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const U=D.shadow,z=n.get(D);z.shadowBias=U.bias,z.shadowNormalBias=U.normalBias,z.shadowRadius=U.radius,z.shadowMapSize=U.mapSize,z.shadowCameraNear=U.camera.near,z.shadowCameraFar=U.camera.far,i.pointShadow[y]=z,i.pointShadowMap[y]=I,i.pointShadowMatrix[y]=D.shadow.matrix,L++}i.point[y]=H,y++}else if(D.isHemisphereLight){const H=t.get(D);H.skyColor.copy(D.color).multiplyScalar(Y),H.groundColor.copy(D.groundColor).multiplyScalar(Y),i.hemi[m]=H,m++}}v>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=p;const w=i.hash;(w.directionalLength!==g||w.pointLength!==y||w.spotLength!==b||w.rectAreaLength!==v||w.hemiLength!==m||w.numDirectionalShadows!==M||w.numPointShadows!==L||w.numSpotShadows!==C)&&(i.directional.length=g,i.spot.length=b,i.rectArea.length=v,i.point.length=y,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=L,i.spotShadowMatrix.length=C,w.directionalLength=g,w.pointLength=y,w.spotLength=b,w.rectAreaLength=v,w.hemiLength=m,w.numDirectionalShadows=M,w.numPointShadows=L,w.numSpotShadows=C,i.version=VM++)}function c(u,d){let h=0,p=0,g=0,y=0,b=0;const v=d.matrixWorldInverse;for(let m=0,M=u.length;m<M;m++){const L=u[m];if(L.isDirectionalLight){const C=i.directional[h];C.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(v),h++}else if(L.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(v),C.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(v),g++}else if(L.isRectAreaLight){const C=i.rectArea[y];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(v),a.identity(),o.copy(L.matrixWorld),o.premultiply(v),a.extractRotation(o),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),y++}else if(L.isPointLight){const C=i.point[p];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(v),p++}else if(L.isHemisphereLight){const C=i.hemi[b];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(v),C.direction.normalize(),b++}}}return{setup:l,setupView:c,state:i}}function Lm(r,e){const t=new XM(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(){t.setup(n)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function YM(r,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new Lm(r,e),t.set(s,[a])):o>=t.get(s).length?(a=new Lm(r,e),t.get(s).push(a)):a=t.get(s)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class sh extends Tn{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=vy,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}sh.prototype.isMeshDepthMaterial=!0;class e0 extends Tn{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new S,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}e0.prototype.isMeshDistanceMaterial=!0;var qM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,jM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function t0(r,e,t){let n=new Uu;const i=new ae,s=new ae,o=new jt,a=[],l=[],c={},u=t.maxTextureSize,d={0:On,1:xn,2:Yi},h=new xi({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:jM,fragmentShader:qM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Nt(g,h),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bg,this.render=function(w,F,B){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||w.length===0)return;const D=r.getRenderTarget(),V=r.getActiveCubeFace(),Y=r.getActiveMipmapLevel(),q=r.state;q.setBlending(Xs),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);for(let I=0,H=w.length;I<H;I++){const U=w[I],z=U.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const ne=z.getFrameExtents();if(i.multiply(ne),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ne.x),i.x=s.x*ne.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ne.y),i.y=s.y*ne.y,z.mapSize.y=s.y)),z.map===null&&!z.isPointLightShadow&&this.type===zl){const le={minFilter:en,magFilter:en,format:ui};z.map=new Jn(i.x,i.y,le),z.map.texture.name=U.name+".shadowMap",z.mapPass=new Jn(i.x,i.y,le),z.camera.updateProjectionMatrix()}if(z.map===null){const le={minFilter:An,magFilter:An,format:ui};z.map=new Jn(i.x,i.y,le),z.map.texture.name=U.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const pe=z.getViewportCount();for(let le=0;le<pe;le++){const ze=z.getViewport(le);o.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),q.viewport(o),z.updateMatrices(U,le),n=z.getFrustum(),C(F,B,z.camera,U,this.type)}!z.isPointLightShadow&&this.type===zl&&v(z,B),z.needsUpdate=!1}b.needsUpdate=!1,r.setRenderTarget(D,V,Y)};function v(w,F){const B=e.update(y);h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(F,null,B,h,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(F,null,B,p,y,null)}function m(w,F,B){const D=w<<0|F<<1|B<<2;let V=a[D];return V===void 0&&(V=new sh({depthPacking:Dg,morphTargets:w,skinning:F}),a[D]=V),V}function M(w,F,B){const D=w<<0|F<<1|B<<2;let V=l[D];return V===void 0&&(V=new e0({morphTargets:w,skinning:F}),l[D]=V),V}function L(w,F,B,D,V,Y,q){let I=null,H=m,U=w.customDepthMaterial;if(D.isPointLight===!0&&(H=M,U=w.customDistanceMaterial),U===void 0){let z=!1;B.morphTargets===!0&&(z=F.morphAttributes&&F.morphAttributes.position&&F.morphAttributes.position.length>0);let ne=!1;w.isSkinnedMesh===!0&&(B.skinning===!0?ne=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",w));const pe=w.isInstancedMesh===!0;I=H(z,ne,pe)}else I=U;if(r.localClippingEnabled&&B.clipShadows===!0&&B.clippingPlanes.length!==0){const z=I.uuid,ne=B.uuid;let pe=c[z];pe===void 0&&(pe={},c[z]=pe);let le=pe[ne];le===void 0&&(le=I.clone(),pe[ne]=le),I=le}return I.visible=B.visible,I.wireframe=B.wireframe,q===zl?I.side=B.shadowSide!==null?B.shadowSide:B.side:I.side=B.shadowSide!==null?B.shadowSide:d[B.side],I.clipShadows=B.clipShadows,I.clippingPlanes=B.clippingPlanes,I.clipIntersection=B.clipIntersection,I.wireframeLinewidth=B.wireframeLinewidth,I.linewidth=B.linewidth,D.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(D.matrixWorld),I.nearDistance=V,I.farDistance=Y),I}function C(w,F,B,D,V){if(w.visible===!1)return;if(w.layers.test(F.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&V===zl)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld);const I=e.update(w),H=w.material;if(Array.isArray(H)){const U=I.groups;for(let z=0,ne=U.length;z<ne;z++){const pe=U[z],le=H[pe.materialIndex];if(le&&le.visible){const ze=L(w,I,le,D,B.near,B.far,V);r.renderBufferDirect(B,null,I,ze,w,pe)}}}else if(H.visible){const U=L(w,I,H,D,B.near,B.far,V);r.renderBufferDirect(B,null,I,U,w,null)}}const q=w.children;for(let I=0,H=q.length;I<H;I++)C(q[I],F,B,D,V)}}function QM(r,e,t){const n=t.isWebGL2;function i(){let k=!1;const Te=new jt;let Ie=null;const Ue=new jt(0,0,0,0);return{setMask:function(ce){Ie!==ce&&!k&&(r.colorMask(ce,ce,ce,ce),Ie=ce)},setLocked:function(ce){k=ce},setClear:function(ce,lt,kt,an,ps){ps===!0&&(ce*=an,lt*=an,kt*=an),Te.set(ce,lt,kt,an),Ue.equals(Te)===!1&&(r.clearColor(ce,lt,kt,an),Ue.copy(Te))},reset:function(){k=!1,Ie=null,Ue.set(-1,0,0,0)}}}function s(){let k=!1,Te=null,Ie=null,Ue=null;return{setTest:function(ce){ce?Ke(2929):Qe(2929)},setMask:function(ce){Te!==ce&&!k&&(r.depthMask(ce),Te=ce)},setFunc:function(ce){if(Ie!==ce){if(ce)switch(ce){case ux:r.depthFunc(512);break;case dx:r.depthFunc(519);break;case fx:r.depthFunc(513);break;case Cf:r.depthFunc(515);break;case hx:r.depthFunc(514);break;case px:r.depthFunc(518);break;case mx:r.depthFunc(516);break;case gx:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);Ie=ce}},setLocked:function(ce){k=ce},setClear:function(ce){Ue!==ce&&(r.clearDepth(ce),Ue=ce)},reset:function(){k=!1,Te=null,Ie=null,Ue=null}}}function o(){let k=!1,Te=null,Ie=null,Ue=null,ce=null,lt=null,kt=null,an=null,ps=null;return{setTest:function(ln){k||(ln?Ke(2960):Qe(2960))},setMask:function(ln){Te!==ln&&!k&&(r.stencilMask(ln),Te=ln)},setFunc:function(ln,yi,ni){(Ie!==ln||Ue!==yi||ce!==ni)&&(r.stencilFunc(ln,yi,ni),Ie=ln,Ue=yi,ce=ni)},setOp:function(ln,yi,ni){(lt!==ln||kt!==yi||an!==ni)&&(r.stencilOp(ln,yi,ni),lt=ln,kt=yi,an=ni)},setLocked:function(ln){k=ln},setClear:function(ln){ps!==ln&&(r.clearStencil(ln),ps=ln)},reset:function(){k=!1,Te=null,Ie=null,Ue=null,ce=null,lt=null,kt=null,an=null,ps=null}}}const a=new i,l=new s,c=new o;let u={},d=null,h={},p=null,g=!1,y=null,b=null,v=null,m=null,M=null,L=null,C=null,w=!1,F=null,B=null,D=null,V=null,Y=null;const q=r.getParameter(35661);let I=!1,H=0;const U=r.getParameter(7938);U.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(U)[1]),I=H>=1):U.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),I=H>=2);let z=null,ne={};const pe=new jt(0,0,r.canvas.width,r.canvas.height),le=new jt(0,0,r.canvas.width,r.canvas.height);function ze(k,Te,Ie){const Ue=new Uint8Array(4),ce=r.createTexture();r.bindTexture(k,ce),r.texParameteri(k,10241,9728),r.texParameteri(k,10240,9728);for(let lt=0;lt<Ie;lt++)r.texImage2D(Te+lt,0,6408,1,1,0,6408,5121,Ue);return ce}const Ee={};Ee[3553]=ze(3553,3553,1),Ee[34067]=ze(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ke(2929),l.setFunc(Cf),mt(!1),ge(Up),Ke(2884),vt(Xs);function Ke(k){u[k]!==!0&&(r.enable(k),u[k]=!0)}function Qe(k){u[k]!==!1&&(r.disable(k),u[k]=!1)}function ie(k){k!==d&&(r.bindFramebuffer(36160,k),d=k)}function Bt(k,Te){Te===null&&d!==null&&(Te=d),h[k]!==Te&&(r.bindFramebuffer(k,Te),h[k]=Te,n&&(k===36009&&(h[36160]=Te),k===36160&&(h[36009]=Te)))}function bt(k){return p!==k?(r.useProgram(k),p=k,!0):!1}const st={[Ea]:32774,[Kv]:32778,[ex]:32779};if(n)st[Vp]=32775,st[Wp]=32776;else{const k=e.get("EXT_blend_minmax");k!==null&&(st[Vp]=k.MIN_EXT,st[Wp]=k.MAX_EXT)}const Ze={[tx]:0,[nx]:1,[ix]:768,[Mg]:770,[cx]:776,[ax]:774,[rx]:772,[sx]:769,[Sg]:771,[lx]:775,[ox]:773};function vt(k,Te,Ie,Ue,ce,lt,kt,an){if(k===Xs){g===!0&&(Qe(3042),g=!1);return}if(g===!1&&(Ke(3042),g=!0),k!==Jv){if(k!==y||an!==w){if((b!==Ea||M!==Ea)&&(r.blendEquation(32774),b=Ea,M=Ea),an)switch(k){case Wi:r.blendFuncSeparate(1,771,1,771);break;case Ia:r.blendFunc(1,1);break;case Hp:r.blendFuncSeparate(0,0,769,771);break;case Gp:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Wi:r.blendFuncSeparate(770,771,1,771);break;case Ia:r.blendFunc(770,1);break;case Hp:r.blendFunc(0,769);break;case Gp:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}v=null,m=null,L=null,C=null,y=k,w=an}return}ce=ce||Te,lt=lt||Ie,kt=kt||Ue,(Te!==b||ce!==M)&&(r.blendEquationSeparate(st[Te],st[ce]),b=Te,M=ce),(Ie!==v||Ue!==m||lt!==L||kt!==C)&&(r.blendFuncSeparate(Ze[Ie],Ze[Ue],Ze[lt],Ze[kt]),v=Ie,m=Ue,L=lt,C=kt),y=k,w=null}function yt(k,Te){k.side===Yi?Qe(2884):Ke(2884);let Ie=k.side===On;Te&&(Ie=!Ie),mt(Ie),k.blending===Wi&&k.transparent===!1?vt(Xs):vt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),a.setMask(k.colorWrite);const Ue=k.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Pe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ke(32926):Qe(32926)}function mt(k){F!==k&&(k?r.frontFace(2304):r.frontFace(2305),F=k)}function ge(k){k!==Qv?(Ke(2884),k!==B&&(k===Up?r.cullFace(1029):k===Zv?r.cullFace(1028):r.cullFace(1032))):Qe(2884),B=k}function ye(k){k!==D&&(I&&r.lineWidth(k),D=k)}function Pe(k,Te,Ie){k?(Ke(32823),(V!==Te||Y!==Ie)&&(r.polygonOffset(Te,Ie),V=Te,Y=Ie)):Qe(32823)}function Ye(k){k?Ke(3089):Qe(3089)}function Be(k){k===void 0&&(k=33984+q-1),z!==k&&(r.activeTexture(k),z=k)}function R(k,Te){z===null&&Be();let Ie=ne[z];Ie===void 0&&(Ie={type:void 0,texture:void 0},ne[z]=Ie),(Ie.type!==k||Ie.texture!==Te)&&(r.bindTexture(k,Te||Ee[k]),Ie.type=k,Ie.texture=Te)}function P(){const k=ne[z];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function re(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function je(k){pe.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),pe.copy(k))}function rt(k){le.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),le.copy(k))}function We(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},z=null,ne={},d=null,h={},p=null,g=!1,y=null,b=null,v=null,m=null,M=null,L=null,C=null,w=!1,F=null,B=null,D=null,V=null,Y=null,pe.set(0,0,r.canvas.width,r.canvas.height),le.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ke,disable:Qe,bindFramebuffer:Bt,bindXRFramebuffer:ie,useProgram:bt,setBlending:vt,setMaterial:yt,setFlipSided:mt,setCullFace:ge,setLineWidth:ye,setPolygonOffset:Pe,setScissorTest:Ye,activeTexture:Be,bindTexture:R,unbindTexture:P,compressedTexImage2D:re,texImage2D:oe,texImage3D:Ne,scissor:je,viewport:rt,reset:We}}function ZM(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,h=new WeakMap;let p,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,P){return g?new OffscreenCanvas(R,P):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function b(R,P,re,oe){let Ne=1;if((R.width>oe||R.height>oe)&&(Ne=oe/Math.max(R.width,R.height)),Ne<1||P===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const je=P?Bg:Math.floor,rt=je(Ne*R.width),We=je(Ne*R.height);p===void 0&&(p=y(rt,We));const k=re?y(rt,We):p;return k.width=rt,k.height=We,k.getContext("2d").drawImage(R,0,0,rt,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+rt+"x"+We+")."),k}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function v(R){return Df(R.width)&&Df(R.height)}function m(R){return a?!1:R.wrapS!==vi||R.wrapT!==vi||R.minFilter!==An&&R.minFilter!==en}function M(R,P){return R.generateMipmaps&&P&&R.minFilter!==An&&R.minFilter!==en}function L(R,P,re,oe){r.generateMipmap(R);const Ne=n.get(P);Ne.__maxMipLevel=Math.log2(Math.max(re,oe))}function C(R,P,re){if(a===!1)return P;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe=P;return P===6403&&(re===5126&&(oe=33326),re===5131&&(oe=33325),re===5121&&(oe=33321)),P===6407&&(re===5126&&(oe=34837),re===5131&&(oe=34843),re===5121&&(oe=32849)),P===6408&&(re===5126&&(oe=34836),re===5131&&(oe=34842),re===5121&&(oe=32856)),(oe===33325||oe===33326||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function w(R){return R===An||R===Rf||R===Ff?9728:9729}function F(R){const P=R.target;P.removeEventListener("dispose",F),D(P),P.isVideoTexture&&h.delete(P),o.memory.textures--}function B(R){const P=R.target;P.removeEventListener("dispose",B),V(P),o.memory.textures--}function D(R){const P=n.get(R);P.__webglInit!==void 0&&(r.deleteTexture(P.__webglTexture),n.remove(R))}function V(R){const P=R.texture,re=n.get(R),oe=n.get(P);if(R){if(oe.__webglTexture!==void 0&&r.deleteTexture(oe.__webglTexture),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Ne=0;Ne<6;Ne++)r.deleteFramebuffer(re.__webglFramebuffer[Ne]),re.__webglDepthbuffer&&r.deleteRenderbuffer(re.__webglDepthbuffer[Ne]);else r.deleteFramebuffer(re.__webglFramebuffer),re.__webglDepthbuffer&&r.deleteRenderbuffer(re.__webglDepthbuffer),re.__webglMultisampledFramebuffer&&r.deleteFramebuffer(re.__webglMultisampledFramebuffer),re.__webglColorRenderbuffer&&r.deleteRenderbuffer(re.__webglColorRenderbuffer),re.__webglDepthRenderbuffer&&r.deleteRenderbuffer(re.__webglDepthRenderbuffer);n.remove(P),n.remove(R)}}let Y=0;function q(){Y=0}function I(){const R=Y;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),Y+=1,R}function H(R,P){const re=n.get(R);if(R.isVideoTexture&&ge(R),R.version>0&&re.__version!==R.version){const oe=R.image;if(oe===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(re,R,P);return}}t.activeTexture(33984+P),t.bindTexture(3553,re.__webglTexture)}function U(R,P){const re=n.get(R);if(R.version>0&&re.__version!==R.version){Ke(re,R,P);return}t.activeTexture(33984+P),t.bindTexture(35866,re.__webglTexture)}function z(R,P){const re=n.get(R);if(R.version>0&&re.__version!==R.version){Ke(re,R,P);return}t.activeTexture(33984+P),t.bindTexture(32879,re.__webglTexture)}function ne(R,P){const re=n.get(R);if(R.version>0&&re.__version!==R.version){Qe(re,R,P);return}t.activeTexture(33984+P),t.bindTexture(34067,re.__webglTexture)}const pe={[xr]:10497,[vi]:33071,[Cu]:33648},le={[An]:9728,[Rf]:9984,[Ff]:9986,[en]:9729,[Tg]:9985,[Wa]:9987};function ze(R,P,re){if(re?(r.texParameteri(R,10242,pe[P.wrapS]),r.texParameteri(R,10243,pe[P.wrapT]),(R===32879||R===35866)&&r.texParameteri(R,32882,pe[P.wrapR]),r.texParameteri(R,10240,le[P.magFilter]),r.texParameteri(R,10241,le[P.minFilter])):(r.texParameteri(R,10242,33071),r.texParameteri(R,10243,33071),(R===32879||R===35866)&&r.texParameteri(R,32882,33071),(P.wrapS!==vi||P.wrapT!==vi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,10240,w(P.magFilter)),r.texParameteri(R,10241,w(P.minFilter)),P.minFilter!==An&&P.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(P.type===ds&&e.has("OES_texture_float_linear")===!1||a===!1&&P.type===Ro&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(r.texParameterf(R,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,i.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function Ee(R,P){R.__webglInit===void 0&&(R.__webglInit=!0,P.addEventListener("dispose",F),R.__webglTexture=r.createTexture(),o.memory.textures++)}function Ke(R,P,re){let oe=3553;P.isDataTexture2DArray&&(oe=35866),P.isDataTexture3D&&(oe=32879),Ee(R,P),t.activeTexture(33984+re),t.bindTexture(oe,R.__webglTexture),r.pixelStorei(37440,P.flipY),r.pixelStorei(37441,P.premultiplyAlpha),r.pixelStorei(3317,P.unpackAlignment),r.pixelStorei(37443,0);const Ne=m(P)&&v(P.image)===!1,je=b(P.image,Ne,!1,u),rt=v(je)||a,We=s.convert(P.format);let k=s.convert(P.type),Te=C(P.internalFormat,We,k);ze(oe,P,rt);let Ie;const Ue=P.mipmaps;if(P.isDepthTexture)Te=6402,a?P.type===ds?Te=36012:P.type===Lu?Te=33190:P.type===Hl?Te=35056:Te=33189:P.type===ds&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===Na&&Te===6402&&P.type!==Ru&&P.type!==Lu&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=Ru,k=s.convert(P.type)),P.format===ql&&Te===6402&&(Te=34041,P.type!==Hl&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=Hl,k=s.convert(P.type))),t.texImage2D(3553,0,Te,je.width,je.height,0,We,k,null);else if(P.isDataTexture)if(Ue.length>0&&rt){for(let ce=0,lt=Ue.length;ce<lt;ce++)Ie=Ue[ce],t.texImage2D(3553,ce,Te,Ie.width,Ie.height,0,We,k,Ie.data);P.generateMipmaps=!1,R.__maxMipLevel=Ue.length-1}else t.texImage2D(3553,0,Te,je.width,je.height,0,We,k,je.data),R.__maxMipLevel=0;else if(P.isCompressedTexture){for(let ce=0,lt=Ue.length;ce<lt;ce++)Ie=Ue[ce],P.format!==ui&&P.format!==Ys?We!==null?t.compressedTexImage2D(3553,ce,Te,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,ce,Te,Ie.width,Ie.height,0,We,k,Ie.data);R.__maxMipLevel=Ue.length-1}else if(P.isDataTexture2DArray)t.texImage3D(35866,0,Te,je.width,je.height,je.depth,0,We,k,je.data),R.__maxMipLevel=0;else if(P.isDataTexture3D)t.texImage3D(32879,0,Te,je.width,je.height,je.depth,0,We,k,je.data),R.__maxMipLevel=0;else if(Ue.length>0&&rt){for(let ce=0,lt=Ue.length;ce<lt;ce++)Ie=Ue[ce],t.texImage2D(3553,ce,Te,We,k,Ie);P.generateMipmaps=!1,R.__maxMipLevel=Ue.length-1}else t.texImage2D(3553,0,Te,We,k,je),R.__maxMipLevel=0;M(P,rt)&&L(oe,P,je.width,je.height),R.__version=P.version,P.onUpdate&&P.onUpdate(P)}function Qe(R,P,re){if(P.image.length!==6)return;Ee(R,P),t.activeTexture(33984+re),t.bindTexture(34067,R.__webglTexture),r.pixelStorei(37440,P.flipY),r.pixelStorei(37441,P.premultiplyAlpha),r.pixelStorei(3317,P.unpackAlignment),r.pixelStorei(37443,0);const oe=P&&(P.isCompressedTexture||P.image[0].isCompressedTexture),Ne=P.image[0]&&P.image[0].isDataTexture,je=[];for(let ce=0;ce<6;ce++)!oe&&!Ne?je[ce]=b(P.image[ce],!1,!0,c):je[ce]=Ne?P.image[ce].image:P.image[ce];const rt=je[0],We=v(rt)||a,k=s.convert(P.format),Te=s.convert(P.type),Ie=C(P.internalFormat,k,Te);ze(34067,P,We);let Ue;if(oe){for(let ce=0;ce<6;ce++){Ue=je[ce].mipmaps;for(let lt=0;lt<Ue.length;lt++){const kt=Ue[lt];P.format!==ui&&P.format!==Ys?k!==null?t.compressedTexImage2D(34069+ce,lt,Ie,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+ce,lt,Ie,kt.width,kt.height,0,k,Te,kt.data)}}R.__maxMipLevel=Ue.length-1}else{Ue=P.mipmaps;for(let ce=0;ce<6;ce++)if(Ne){t.texImage2D(34069+ce,0,Ie,je[ce].width,je[ce].height,0,k,Te,je[ce].data);for(let lt=0;lt<Ue.length;lt++){const an=Ue[lt].image[ce].image;t.texImage2D(34069+ce,lt+1,Ie,an.width,an.height,0,k,Te,an.data)}}else{t.texImage2D(34069+ce,0,Ie,k,Te,je[ce]);for(let lt=0;lt<Ue.length;lt++){const kt=Ue[lt];t.texImage2D(34069+ce,lt+1,Ie,k,Te,kt.image[ce])}}R.__maxMipLevel=Ue.length}M(P,We)&&L(34067,P,rt.width,rt.height),R.__version=P.version,P.onUpdate&&P.onUpdate(P)}function ie(R,P,re,oe){const Ne=P.texture,je=s.convert(Ne.format),rt=s.convert(Ne.type),We=C(Ne.internalFormat,je,rt);oe===32879||oe===35866?t.texImage3D(oe,0,We,P.width,P.height,P.depth,0,je,rt,null):t.texImage2D(oe,0,We,P.width,P.height,0,je,rt,null),t.bindFramebuffer(36160,R),r.framebufferTexture2D(36160,re,oe,n.get(Ne).__webglTexture,0),t.bindFramebuffer(36160,null)}function Bt(R,P,re){if(r.bindRenderbuffer(36161,R),P.depthBuffer&&!P.stencilBuffer){let oe=33189;if(re){const Ne=P.depthTexture;Ne&&Ne.isDepthTexture&&(Ne.type===ds?oe=36012:Ne.type===Lu&&(oe=33190));const je=mt(P);r.renderbufferStorageMultisample(36161,je,oe,P.width,P.height)}else r.renderbufferStorage(36161,oe,P.width,P.height);r.framebufferRenderbuffer(36160,36096,36161,R)}else if(P.depthBuffer&&P.stencilBuffer){if(re){const oe=mt(P);r.renderbufferStorageMultisample(36161,oe,35056,P.width,P.height)}else r.renderbufferStorage(36161,34041,P.width,P.height);r.framebufferRenderbuffer(36160,33306,36161,R)}else{const oe=P.texture,Ne=s.convert(oe.format),je=s.convert(oe.type),rt=C(oe.internalFormat,Ne,je);if(re){const We=mt(P);r.renderbufferStorageMultisample(36161,We,rt,P.width,P.height)}else r.renderbufferStorage(36161,rt,P.width,P.height)}r.bindRenderbuffer(36161,null)}function bt(R,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,R),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),H(P.depthTexture,0);const oe=n.get(P.depthTexture).__webglTexture;if(P.depthTexture.format===Na)r.framebufferTexture2D(36160,36096,3553,oe,0);else if(P.depthTexture.format===ql)r.framebufferTexture2D(36160,33306,3553,oe,0);else throw new Error("Unknown depthTexture format")}function st(R){const P=n.get(R),re=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture){if(re)throw new Error("target.depthTexture not supported in Cube render targets");bt(P.__webglFramebuffer,R)}else if(re){P.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(36160,P.__webglFramebuffer[oe]),P.__webglDepthbuffer[oe]=r.createRenderbuffer(),Bt(P.__webglDepthbuffer[oe],R,!1)}else t.bindFramebuffer(36160,P.__webglFramebuffer),P.__webglDepthbuffer=r.createRenderbuffer(),Bt(P.__webglDepthbuffer,R,!1);t.bindFramebuffer(36160,null)}function Ze(R){const P=R.texture,re=n.get(R),oe=n.get(P);R.addEventListener("dispose",B),oe.__webglTexture=r.createTexture(),oe.__version=P.version,o.memory.textures++;const Ne=R.isWebGLCubeRenderTarget===!0,je=R.isWebGLMultisampleRenderTarget===!0,rt=P.isDataTexture3D||P.isDataTexture2DArray,We=v(R)||a;if(a&&P.format===Ys&&(P.type===ds||P.type===Ro)&&(P.format=ui,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),Ne){re.__webglFramebuffer=[];for(let k=0;k<6;k++)re.__webglFramebuffer[k]=r.createFramebuffer()}else if(re.__webglFramebuffer=r.createFramebuffer(),je)if(a){re.__webglMultisampledFramebuffer=r.createFramebuffer(),re.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,re.__webglColorRenderbuffer);const k=s.convert(P.format),Te=s.convert(P.type),Ie=C(P.internalFormat,k,Te),Ue=mt(R);r.renderbufferStorageMultisample(36161,Ue,Ie,R.width,R.height),t.bindFramebuffer(36160,re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,re.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),R.depthBuffer&&(re.__webglDepthRenderbuffer=r.createRenderbuffer(),Bt(re.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(Ne){t.bindTexture(34067,oe.__webglTexture),ze(34067,P,We);for(let k=0;k<6;k++)ie(re.__webglFramebuffer[k],R,36064,34069+k);M(P,We)&&L(34067,P,R.width,R.height),t.bindTexture(34067,null)}else{let k=3553;rt&&(a?k=P.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(k,oe.__webglTexture),ze(k,P,We),ie(re.__webglFramebuffer,R,36064,k),M(P,We)&&L(3553,P,R.width,R.height),t.bindTexture(3553,null)}R.depthBuffer&&st(R)}function vt(R){const P=R.texture,re=v(R)||a;if(M(P,re)){const oe=R.isWebGLCubeRenderTarget?34067:3553,Ne=n.get(P).__webglTexture;t.bindTexture(oe,Ne),L(oe,P,R.width,R.height),t.bindTexture(oe,null)}}function yt(R){if(R.isWebGLMultisampleRenderTarget)if(a){const P=R.width,re=R.height;let oe=16384;R.depthBuffer&&(oe|=256),R.stencilBuffer&&(oe|=1024);const Ne=n.get(R);t.bindFramebuffer(36008,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Ne.__webglFramebuffer),r.blitFramebuffer(0,0,P,re,0,0,P,re,oe,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,Ne.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function mt(R){return a&&R.isWebGLMultisampleRenderTarget?Math.min(d,R.samples):0}function ge(R){const P=o.render.frame;h.get(R)!==P&&(h.set(R,P),R.update())}let ye=!1,Pe=!1;function Ye(R,P){R&&R.isWebGLRenderTarget&&(ye===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),ye=!0),R=R.texture),H(R,P)}function Be(R,P){R&&R.isWebGLCubeRenderTarget&&(Pe===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Pe=!0),R=R.texture),ne(R,P)}this.allocateTextureUnit=I,this.resetTextureUnits=q,this.setTexture2D=H,this.setTexture2DArray=U,this.setTexture3D=z,this.setTextureCube=ne,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=yt,this.safeSetTexture2D=Ye,this.safeSetTextureCube=Be}function $M(r,e,t){const n=t.isWebGL2;function i(s){let o;if(s===Hs)return 5121;if(s===Ex)return 32819;if(s===Lx)return 32820;if(s===Px)return 33635;if(s===Sx)return 5120;if(s===Ax)return 5122;if(s===Ru)return 5123;if(s===Tx)return 5124;if(s===Lu)return 5125;if(s===ds)return 5126;if(s===Ro)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Cx)return 6406;if(s===Ys)return 6407;if(s===ui)return 6408;if(s===Rx)return 6409;if(s===Fx)return 6410;if(s===Na)return 6402;if(s===ql)return 34041;if(s===Ix)return 6403;if(s===Dx)return 36244;if(s===Nx)return 33319;if(s===Bx)return 33320;if(s===kx)return 36248;if(s===Ox)return 36249;if(s===qp||s===jp||s===Qp||s===Zp)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===qp)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jp)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qp)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zp)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$p||s===Jp||s===Kp||s===em)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===$p)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===em)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zx)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===tm||s===nm)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===tm)return o.COMPRESSED_RGB8_ETC2;if(s===nm)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===Ux||s===Hx||s===Gx||s===Vx||s===Wx||s===Xx||s===Yx||s===qx||s===jx||s===Qx||s===Zx||s===$x||s===Jx||s===Kx||s===ty||s===ny||s===iy||s===sy||s===ry||s===oy||s===ay||s===ly||s===cy||s===uy||s===dy||s===fy||s===hy||s===py)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===ey)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===Hl)return n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class n0 extends Kn{constructor(e=[]){super(),this.cameras=e}}n0.prototype.isArrayCamera=!0;class ci extends Ht{constructor(){super(),this.type="Group"}}ci.prototype.isGroup=!0;const JM={type:"move"};class mf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(JM))),c&&e.hand){o=!0;for(const y of e.hand.values()){const b=t.getJointPose(y,n);if(c.joints[y.jointName]===void 0){const m=new ci;m.matrixAutoUpdate=!1,m.visible=!1,c.joints[y.jointName]=m,c.add(m)}const v=c.joints[y.jointName];b!==null&&(v.matrix.fromArray(b.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=b.radius),v.visible=b!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class KM extends Do{constructor(e,t){super();const n=this,i=e.state;let s=null,o=1,a=null,l="local-floor",c=null;const u=[],d=new Map,h=new Kn;h.layers.enable(1),h.viewport=new jt;const p=new Kn;p.layers.enable(2),p.viewport=new jt;const g=[h,p],y=new n0;y.layers.enable(1),y.layers.enable(2);let b=null,v=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let I=u[q];return I===void 0&&(I=new mf,u[q]=I),I.getTargetRaySpace()},this.getControllerGrip=function(q){let I=u[q];return I===void 0&&(I=new mf,u[q]=I),I.getGripSpace()},this.getHand=function(q){let I=u[q];return I===void 0&&(I=new mf,u[q]=I),I.getHandSpace()};function m(q){const I=d.get(q.inputSource);I&&I.dispatchEvent({type:q.type,data:q.inputSource})}function M(){d.forEach(function(q,I){q.disconnect(I)}),d.clear(),b=null,v=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),Y.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){l=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){s.addEventListener("select",m),s.addEventListener("selectstart",m),s.addEventListener("selectend",m),s.addEventListener("squeeze",m),s.addEventListener("squeezestart",m),s.addEventListener("squeezeend",m),s.addEventListener("end",M),s.addEventListener("inputsourceschange",L);const I=t.getContextAttributes();I.xrCompatible!==!0&&await t.makeXRCompatible();const H={antialias:I.antialias,alpha:I.alpha,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:o},U=new XRWebGLLayer(s,t,H);s.updateRenderState({baseLayer:U}),a=await s.requestReferenceSpace(l),Y.setContext(s),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function L(q){const I=s.inputSources;for(let H=0;H<u.length;H++)d.set(I[H],u[H]);for(let H=0;H<q.removed.length;H++){const U=q.removed[H],z=d.get(U);z&&(z.dispatchEvent({type:"disconnected",data:U}),d.delete(U))}for(let H=0;H<q.added.length;H++){const U=q.added[H],z=d.get(U);z&&z.dispatchEvent({type:"connected",data:U})}}const C=new S,w=new S;function F(q,I,H){C.setFromMatrixPosition(I.matrixWorld),w.setFromMatrixPosition(H.matrixWorld);const U=C.distanceTo(w),z=I.projectionMatrix.elements,ne=H.projectionMatrix.elements,pe=z[14]/(z[10]-1),le=z[14]/(z[10]+1),ze=(z[9]+1)/z[5],Ee=(z[9]-1)/z[5],Ke=(z[8]-1)/z[0],Qe=(ne[8]+1)/ne[0],ie=pe*Ke,Bt=pe*Qe,bt=U/(-Ke+Qe),st=bt*-Ke;I.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(st),q.translateZ(bt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const Ze=pe+bt,vt=le+bt,yt=ie-st,mt=Bt+(U-st),ge=ze*le/vt*Ze,ye=Ee*le/vt*Ze;q.projectionMatrix.makePerspective(yt,mt,ge,ye,Ze,vt)}function B(q,I){I===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(I.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.getCamera=function(q){y.near=p.near=h.near=q.near,y.far=p.far=h.far=q.far,(b!==y.near||v!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,v=y.far);const I=q.parent,H=y.cameras;B(y,I);for(let z=0;z<H.length;z++)B(H[z],I);q.matrixWorld.copy(y.matrixWorld),q.matrix.copy(y.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale);const U=q.children;for(let z=0,ne=U.length;z<ne;z++)U[z].updateMatrixWorld(!0);return H.length===2?F(y,h,p):y.projectionMatrix.copy(h.projectionMatrix),y};let D=null;function V(q,I){if(c=I.getViewerPose(a),c!==null){const U=c.views,z=s.renderState.baseLayer;i.bindXRFramebuffer(z.framebuffer);let ne=!1;U.length!==y.cameras.length&&(y.cameras.length=0,ne=!0);for(let pe=0;pe<U.length;pe++){const le=U[pe],ze=z.getViewport(le),Ee=g[pe];Ee.matrix.fromArray(le.transform.matrix),Ee.projectionMatrix.fromArray(le.projectionMatrix),Ee.viewport.set(ze.x,ze.y,ze.width,ze.height),pe===0&&y.matrix.copy(Ee.matrix),ne===!0&&y.cameras.push(Ee)}}const H=s.inputSources;for(let U=0;U<u.length;U++){const z=u[U],ne=H[U];z.update(ne,I,a)}D&&D(q,I)}const Y=new Wg;Y.setAnimationLoop(V),this.setAnimationLoop=function(q){D=q},this.dispose=function(){}}}function eS(r){function e(v,m){v.fogColor.value.copy(m.color),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function t(v,m,M,L){m.isMeshBasicMaterial?n(v,m):m.isMeshLambertMaterial?(n(v,m),l(v,m)):m.isMeshToonMaterial?(n(v,m),u(v,m)):m.isMeshPhongMaterial?(n(v,m),c(v,m)):m.isMeshStandardMaterial?(n(v,m),m.isMeshPhysicalMaterial?h(v,m):d(v,m)):m.isMeshMatcapMaterial?(n(v,m),p(v,m)):m.isMeshDepthMaterial?(n(v,m),g(v,m)):m.isMeshDistanceMaterial?(n(v,m),y(v,m)):m.isMeshNormalMaterial?(n(v,m),b(v,m)):m.isLineBasicMaterial?(i(v,m),m.isLineDashedMaterial&&s(v,m)):m.isPointsMaterial?o(v,m,M,L):m.isSpriteMaterial?a(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map),m.alphaMap&&(v.alphaMap.value=m.alphaMap),m.specularMap&&(v.specularMap.value=m.specularMap);const M=r.get(m).envMap;if(M){v.envMap.value=M,v.flipEnvMap.value=M.isCubeTexture&&M._needsFlipEnvMap?-1:1,v.reflectivity.value=m.reflectivity,v.refractionRatio.value=m.refractionRatio;const w=r.get(M).__maxMipLevel;w!==void 0&&(v.maxMipLevel.value=w)}m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity);let L;m.map?L=m.map:m.specularMap?L=m.specularMap:m.displacementMap?L=m.displacementMap:m.normalMap?L=m.normalMap:m.bumpMap?L=m.bumpMap:m.roughnessMap?L=m.roughnessMap:m.metalnessMap?L=m.metalnessMap:m.alphaMap?L=m.alphaMap:m.emissiveMap?L=m.emissiveMap:m.clearcoatMap?L=m.clearcoatMap:m.clearcoatNormalMap?L=m.clearcoatNormalMap:m.clearcoatRoughnessMap&&(L=m.clearcoatRoughnessMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),v.uvTransform.value.copy(L.matrix));let C;m.aoMap?C=m.aoMap:m.lightMap&&(C=m.lightMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),v.uv2Transform.value.copy(C.matrix))}function i(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity}function s(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function o(v,m,M,L){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*M,v.scale.value=L*.5,m.map&&(v.map.value=m.map),m.alphaMap&&(v.alphaMap.value=m.alphaMap);let C;m.map?C=m.map:m.alphaMap&&(C=m.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),v.uvTransform.value.copy(C.matrix))}function a(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map),m.alphaMap&&(v.alphaMap.value=m.alphaMap);let M;m.map?M=m.map:m.alphaMap&&(M=m.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),v.uvTransform.value.copy(M.matrix))}function l(v,m){m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap)}function c(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap),m.bumpMap&&(v.bumpMap.value=m.bumpMap,v.bumpScale.value=m.bumpScale,m.side===On&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,v.normalScale.value.copy(m.normalScale),m.side===On&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias)}function u(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap),m.bumpMap&&(v.bumpMap.value=m.bumpMap,v.bumpScale.value=m.bumpScale,m.side===On&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,v.normalScale.value.copy(m.normalScale),m.side===On&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias)}function d(v,m){v.roughness.value=m.roughness,v.metalness.value=m.metalness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap),m.bumpMap&&(v.bumpMap.value=m.bumpMap,v.bumpScale.value=m.bumpScale,m.side===On&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,v.normalScale.value.copy(m.normalScale),m.side===On&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),r.get(m).envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function h(v,m){d(v,m),v.reflectivity.value=m.reflectivity,v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.sheen&&v.sheen.value.copy(m.sheen),m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),v.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===On&&v.clearcoatNormalScale.value.negate()),v.transmission.value=m.transmission,m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap)}function p(v,m){m.matcap&&(v.matcap.value=m.matcap),m.bumpMap&&(v.bumpMap.value=m.bumpMap,v.bumpScale.value=m.bumpScale,m.side===On&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,v.normalScale.value.copy(m.normalScale),m.side===On&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias)}function g(v,m){m.displacementMap&&(v.displacementMap.value=m.displacementMap,v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias)}function y(v,m){m.displacementMap&&(v.displacementMap.value=m.displacementMap,v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),v.referencePosition.value.copy(m.referencePosition),v.nearDistance.value=m.nearDistance,v.farDistance.value=m.farDistance}function b(v,m){m.bumpMap&&(v.bumpMap.value=m.bumpMap,v.bumpScale.value=m.bumpScale,m.side===On&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,v.normalScale.value.copy(m.normalScale),m.side===On&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function tS(){const r=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return r.style.display="block",r}function Qt(r){r=r||{};const e=r.canvas!==void 0?r.canvas:tS(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0?r.alpha:!1,i=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,o=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let d=null,h=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=ei,this.physicallyCorrectLights=!1,this.toneMapping=Da,this.toneMappingExposure=1;const y=this;let b=!1,v=0,m=0,M=null,L=-1,C=null;const w=new jt,F=new jt;let B=null,D=e.width,V=e.height,Y=1,q=null,I=null;const H=new jt(0,0,D,V),U=new jt(0,0,D,V);let z=!1;const ne=new Uu;let pe=!1,le=!1;const ze=new qe,Ee=new S,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qe(){return M===null?Y:1}let ie=t;function Bt(E,J){for(let X=0;X<E.length;X++){const K=E[X],ve=e.getContext(K,J);if(ve!==null)return ve}return null}try{const E={alpha:n,depth:i,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",kt,!1),ie===null){const J=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&J.shift(),ie=Bt(J,E),ie===null)throw Bt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ie.getShaderPrecisionFormat===void 0&&(ie.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let bt,st,Ze,vt,yt,mt,ge,ye,Pe,Ye,Be,R,P,re,oe,Ne,je,rt,We,k,Te,Ie;function Ue(){bt=new Mw(ie),st=new _w(ie,bt,r),bt.init(st),Te=new $M(ie,bt,st),Ze=new QM(ie,bt,st),vt=new Tw,yt=new kM,mt=new ZM(ie,bt,Ze,yt,st,Te,vt),ge=new ww(y),ye=new Qy(ie,st),Ie=new xw(ie,bt,ye,st),Pe=new Sw(ie,ye,vt,Ie),Ye=new Cw(ie,Pe,ye,vt),rt=new Pw(ie),oe=new bw(yt),Be=new BM(y,ge,bt,st,Ie,oe),R=new eS(yt),P=new UM(yt),re=new YM(bt,st),je=new vw(y,ge,Ze,Ye,a),Ne=new t0(y,Ye,st),We=new yw(ie,bt,vt,st),k=new Aw(ie,bt,vt,st),vt.programs=Be.programs,y.capabilities=st,y.extensions=bt,y.properties=yt,y.renderLists=P,y.shadowMap=Ne,y.state=Ze,y.info=vt}Ue();const ce=new KM(y,ie);this.xr=ce,this.getContext=function(){return ie},this.getContextAttributes=function(){return ie.getContextAttributes()},this.forceContextLoss=function(){const E=bt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=bt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(D,V,!1))},this.getSize=function(E){return E===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),E=new ae),E.set(D,V)},this.setSize=function(E,J,X){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=E,V=J,e.width=Math.floor(E*Y),e.height=Math.floor(J*Y),X!==!1&&(e.style.width=E+"px",e.style.height=J+"px"),this.setViewport(0,0,E,J)},this.getDrawingBufferSize=function(E){return E===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),E=new ae),E.set(D*Y,V*Y).floor()},this.setDrawingBufferSize=function(E,J,X){D=E,V=J,Y=X,e.width=Math.floor(E*X),e.height=Math.floor(J*X),this.setViewport(0,0,E,J)},this.getCurrentViewport=function(E){return E===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),E=new jt),E.copy(w)},this.getViewport=function(E){return E.copy(H)},this.setViewport=function(E,J,X,K){E.isVector4?H.set(E.x,E.y,E.z,E.w):H.set(E,J,X,K),Ze.viewport(w.copy(H).multiplyScalar(Y).floor())},this.getScissor=function(E){return E.copy(U)},this.setScissor=function(E,J,X,K){E.isVector4?U.set(E.x,E.y,E.z,E.w):U.set(E,J,X,K),Ze.scissor(F.copy(U).multiplyScalar(Y).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(E){Ze.setScissorTest(z=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){I=E},this.getClearColor=function(E){return E===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),E=new se),E.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(E,J,X){let K=0;(E===void 0||E)&&(K|=16384),(J===void 0||J)&&(K|=256),(X===void 0||X)&&(K|=1024),ie.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",kt,!1),P.dispose(),re.dispose(),yt.dispose(),ge.dispose(),Ye.dispose(),Ie.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",br),ce.removeEventListener("sessionend",ac),Qi.stop()};function lt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=vt.autoReset,J=Ne.enabled,X=Ne.autoUpdate,K=Ne.needsUpdate,ve=Ne.type;Ue(),vt.autoReset=E,Ne.enabled=J,Ne.autoUpdate=X,Ne.needsUpdate=K,Ne.type=ve}function an(E){const J=E.target;J.removeEventListener("dispose",an),ps(J)}function ps(E){ln(E),yt.remove(E)}function ln(E){const J=yt.get(E).programs;J!==void 0&&J.forEach(function(X){Be.releaseProgram(X)})}function yi(E,J){E.render(function(X){y.renderBufferImmediate(X,J)})}this.renderBufferImmediate=function(E,J){Ie.initAttributes();const X=yt.get(E);E.hasPositions&&!X.position&&(X.position=ie.createBuffer()),E.hasNormals&&!X.normal&&(X.normal=ie.createBuffer()),E.hasUvs&&!X.uv&&(X.uv=ie.createBuffer()),E.hasColors&&!X.color&&(X.color=ie.createBuffer());const K=J.getAttributes();E.hasPositions&&(ie.bindBuffer(34962,X.position),ie.bufferData(34962,E.positionArray,35048),Ie.enableAttribute(K.position),ie.vertexAttribPointer(K.position,3,5126,!1,0,0)),E.hasNormals&&(ie.bindBuffer(34962,X.normal),ie.bufferData(34962,E.normalArray,35048),Ie.enableAttribute(K.normal),ie.vertexAttribPointer(K.normal,3,5126,!1,0,0)),E.hasUvs&&(ie.bindBuffer(34962,X.uv),ie.bufferData(34962,E.uvArray,35048),Ie.enableAttribute(K.uv),ie.vertexAttribPointer(K.uv,2,5126,!1,0,0)),E.hasColors&&(ie.bindBuffer(34962,X.color),ie.bufferData(34962,E.colorArray,35048),Ie.enableAttribute(K.color),ie.vertexAttribPointer(K.color,3,5126,!1,0,0)),Ie.disableUnusedAttributes(),ie.drawArrays(4,0,E.count),E.count=0},this.renderBufferDirect=function(E,J,X,K,ve,$e){J===null&&(J=Ke);const ot=ve.isMesh&&ve.matrixWorld.determinant()<0,_t=Qs(E,J,K,ve);Ze.setMaterial(K,ot);let Wt=X.index;const xt=X.attributes.position;if(Wt===null){if(xt===void 0||xt.count===0)return}else if(Wt.count===0)return;let Ct=1;K.wireframe===!0&&(Wt=Pe.getWireframeAttribute(X),Ct=2),(K.morphTargets||K.morphNormals)&&rt.update(ve,X,K,_t),Ie.setup(ve,K,_t,X,Wt);let ct,Ot=We;Wt!==null&&(ct=ye.get(Wt),Ot=k,Ot.setIndex(ct));const _i=Wt!==null?Wt.count:xt.count,Fn=X.drawRange.start*Ct,Xn=X.drawRange.count*Ct,Zt=$e!==null?$e.start*Ct:0,ii=$e!==null?$e.count*Ct:1/0,tn=Math.max(Fn,Zt),Zi=Math.min(_i,Fn+Xn,Zt+ii)-1,zn=Math.max(0,Zi-tn+1);if(zn!==0){if(ve.isMesh)K.wireframe===!0?(Ze.setLineWidth(K.wireframeLinewidth*Qe()),Ot.setMode(1)):Ot.setMode(4);else if(ve.isLine){let si=K.linewidth;si===void 0&&(si=1),Ze.setLineWidth(si*Qe()),ve.isLineSegments?Ot.setMode(1):ve.isLineLoop?Ot.setMode(2):Ot.setMode(3)}else ve.isPoints?Ot.setMode(0):ve.isSprite&&Ot.setMode(4);if(ve.isInstancedMesh)Ot.renderInstances(tn,zn,ve.count);else if(X.isInstancedBufferGeometry){const si=Math.min(X.instanceCount,X._maxInstanceCount);Ot.renderInstances(tn,zn,si)}else Ot.render(tn,zn)}},this.compile=function(E,J){h=re.get(E),h.init(),E.traverseVisible(function(X){X.isLight&&X.layers.test(J.layers)&&(h.pushLight(X),X.castShadow&&h.pushShadow(X))}),h.setupLights(),E.traverse(function(X){const K=X.material;if(K)if(Array.isArray(K))for(let ve=0;ve<K.length;ve++){const $e=K[ve];ro($e,E,X)}else ro(K,E,X)})};let ni=null;function oc(E){ni&&ni(E)}function br(){Qi.stop()}function ac(){Qi.start()}const Qi=new Wg;Qi.setAnimationLoop(oc),typeof window<"u"&&Qi.setContext(window),this.setAnimationLoop=function(E){ni=E,ce.setAnimationLoop(E),E===null?Qi.stop():Qi.start()},ce.addEventListener("sessionstart",br),ce.addEventListener("sessionend",ac),this.render=function(E,J){let X,K;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),X=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),K=arguments[3]),J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),J.parent===null&&J.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(J=ce.getCamera(J)),E.isScene===!0&&E.onBeforeRender(y,E,J,X||M),h=re.get(E,g.length),h.init(),g.push(h),ze.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),ne.setFromProjectionMatrix(ze),le=this.localClippingEnabled,pe=oe.init(this.clippingPlanes,le,J),d=P.get(E,p.length),d.init(),p.push(d),Oo(E,J,0,y.sortObjects),d.finish(),y.sortObjects===!0&&d.sort(q,I),pe===!0&&oe.beginShadows();const ve=h.state.shadowsArray;Ne.render(ve,E,J),h.setupLights(),h.setupLightsView(J),pe===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),X!==void 0&&this.setRenderTarget(X),je.render(d,E,J,K);const $e=d.opaque,ot=d.transparent;$e.length>0&&$a($e,E,J),ot.length>0&&$a(ot,E,J),M!==null&&(mt.updateRenderTargetMipmap(M),mt.updateMultisampleRenderTarget(M)),E.isScene===!0&&E.onAfterRender(y,E,J),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1),Ie.resetDefaultState(),L=-1,C=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?d=p[p.length-1]:d=null};function Oo(E,J,X,K){if(E.visible===!1)return;if(E.layers.test(J.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(J);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ne.intersectsSprite(E)){K&&Ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ze);const ot=Ye.update(E),_t=E.material;_t.visible&&d.push(E,ot,_t,X,Ee.z,null)}}else if(E.isImmediateRenderObject)K&&Ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ze),d.push(E,null,E.material,X,Ee.z,null);else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==vt.render.frame&&(E.skeleton.update(),E.skeleton.frame=vt.render.frame),!E.frustumCulled||ne.intersectsObject(E))){K&&Ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ze);const ot=Ye.update(E),_t=E.material;if(Array.isArray(_t)){const Wt=ot.groups;for(let xt=0,Ct=Wt.length;xt<Ct;xt++){const ct=Wt[xt],Ot=_t[ct.materialIndex];Ot&&Ot.visible&&d.push(E,ot,Ot,X,Ee.z,ct)}}else _t.visible&&d.push(E,ot,_t,X,Ee.z,null)}}const $e=E.children;for(let ot=0,_t=$e.length;ot<_t;ot++)Oo($e[ot],J,X,K)}function $a(E,J,X){const K=J.isScene===!0?J.overrideMaterial:null;for(let ve=0,$e=E.length;ve<$e;ve++){const ot=E[ve],_t=ot.object,Wt=ot.geometry,xt=K===null?ot.material:K,Ct=ot.group;if(X.isArrayCamera){const ct=X.cameras;for(let Ot=0,_i=ct.length;Ot<_i;Ot++){const Fn=ct[Ot];_t.layers.test(Fn.layers)&&(Ze.viewport(w.copy(Fn.viewport)),h.setupLightsView(Fn),ms(_t,J,Fn,Wt,xt,Ct))}}else ms(_t,J,X,Wt,xt,Ct)}}function ms(E,J,X,K,ve,$e){if(E.onBeforeRender(y,J,X,K,ve,$e),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),E.isImmediateRenderObject){const ot=Qs(X,J,ve,E);Ze.setMaterial(ve),Ie.reset(),yi(E,ot)}else y.renderBufferDirect(X,J,K,ve,E,$e);E.onAfterRender(y,J,X,K,ve,$e)}function ro(E,J,X){J.isScene!==!0&&(J=Ke);const K=yt.get(E),ve=h.state.lights,$e=h.state.shadowsArray,ot=ve.state.version,_t=Be.getParameters(E,ve.state,$e,J,X),Wt=Be.getProgramCacheKey(_t);let xt=K.programs;K.environment=E.isMeshStandardMaterial?J.environment:null,K.fog=J.fog,K.envMap=ge.get(E.envMap||K.environment),xt===void 0&&(E.addEventListener("dispose",an),xt=new Map,K.programs=xt);let Ct=xt.get(Wt);if(Ct!==void 0){if(K.currentProgram===Ct&&K.lightsStateVersion===ot)return Ja(E,_t),Ct}else _t.uniforms=Be.getUniforms(E),E.onBuild(_t,y),E.onBeforeCompile(_t,y),Ct=Be.acquireProgram(_t,Wt),xt.set(Wt,Ct),K.uniforms=_t.uniforms;const ct=K.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ct.clippingPlanes=oe.uniform),Ja(E,_t),K.needsLights=cc(E),K.lightsStateVersion=ot,K.needsLights&&(ct.ambientLightColor.value=ve.state.ambient,ct.lightProbe.value=ve.state.probe,ct.directionalLights.value=ve.state.directional,ct.directionalLightShadows.value=ve.state.directionalShadow,ct.spotLights.value=ve.state.spot,ct.spotLightShadows.value=ve.state.spotShadow,ct.rectAreaLights.value=ve.state.rectArea,ct.ltc_1.value=ve.state.rectAreaLTC1,ct.ltc_2.value=ve.state.rectAreaLTC2,ct.pointLights.value=ve.state.point,ct.pointLightShadows.value=ve.state.pointShadow,ct.hemisphereLights.value=ve.state.hemi,ct.directionalShadowMap.value=ve.state.directionalShadowMap,ct.directionalShadowMatrix.value=ve.state.directionalShadowMatrix,ct.spotShadowMap.value=ve.state.spotShadowMap,ct.spotShadowMatrix.value=ve.state.spotShadowMatrix,ct.pointShadowMap.value=ve.state.pointShadowMap,ct.pointShadowMatrix.value=ve.state.pointShadowMatrix);const Ot=Ct.getUniforms(),_i=eo.seqWithValue(Ot.seq,ct);return K.currentProgram=Ct,K.uniformsList=_i,Ct}function Ja(E,J){const X=yt.get(E);X.outputEncoding=J.outputEncoding,X.instancing=J.instancing,X.numClippingPlanes=J.numClippingPlanes,X.numIntersection=J.numClipIntersection,X.vertexAlphas=J.vertexAlphas}function Qs(E,J,X,K){J.isScene!==!0&&(J=Ke),mt.resetTextureUnits();const ve=J.fog,$e=X.isMeshStandardMaterial?J.environment:null,ot=M===null?y.outputEncoding:M.texture.encoding,_t=ge.get(X.envMap||$e),Wt=X.vertexColors===!0&&K.geometry&&K.geometry.attributes.color&&K.geometry.attributes.color.itemSize===4,xt=yt.get(X),Ct=h.state.lights;if(pe===!0&&(le===!0||E!==C)){const tn=E===C&&X.id===L;oe.setState(X,E,tn)}let ct=!1;X.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==Ct.state.version||xt.outputEncoding!==ot||K.isInstancedMesh&&xt.instancing===!1||!K.isInstancedMesh&&xt.instancing===!0||xt.envMap!==_t||X.fog&&xt.fog!==ve||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==oe.numPlanes||xt.numIntersection!==oe.numIntersection)||xt.vertexAlphas!==Wt)&&(ct=!0):(ct=!0,xt.__version=X.version);let Ot=xt.currentProgram;ct===!0&&(Ot=ro(X,J,K));let _i=!1,Fn=!1,Xn=!1;const Zt=Ot.getUniforms(),ii=xt.uniforms;if(Ze.useProgram(Ot.program)&&(_i=!0,Fn=!0,Xn=!0),X.id!==L&&(L=X.id,Fn=!0),_i||C!==E){if(Zt.setValue(ie,"projectionMatrix",E.projectionMatrix),st.logarithmicDepthBuffer&&Zt.setValue(ie,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),C!==E&&(C=E,Fn=!0,Xn=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const tn=Zt.map.cameraPosition;tn!==void 0&&tn.setValue(ie,Ee.setFromMatrixPosition(E.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Zt.setValue(ie,"isOrthographic",E.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||X.skinning)&&Zt.setValue(ie,"viewMatrix",E.matrixWorldInverse)}if(X.skinning){Zt.setOptional(ie,K,"bindMatrix"),Zt.setOptional(ie,K,"bindMatrixInverse");const tn=K.skeleton;if(tn){const Zi=tn.bones;if(st.floatVertexTextures){if(tn.boneTexture===null){let zn=Math.sqrt(Zi.length*4);zn=Ng(zn),zn=Math.max(zn,4);const si=new Float32Array(zn*zn*4);si.set(tn.boneMatrices);const uc=new ih(si,zn,zn,ui,ds);tn.boneMatrices=si,tn.boneTexture=uc,tn.boneTextureSize=zn}Zt.setValue(ie,"boneTexture",tn.boneTexture,mt),Zt.setValue(ie,"boneTextureSize",tn.boneTextureSize)}else Zt.setOptional(ie,tn,"boneMatrices")}}return(Fn||xt.receiveShadow!==K.receiveShadow)&&(xt.receiveShadow=K.receiveShadow,Zt.setValue(ie,"receiveShadow",K.receiveShadow)),Fn&&(Zt.setValue(ie,"toneMappingExposure",y.toneMappingExposure),xt.needsLights&&lc(ii,Xn),ve&&X.fog&&R.refreshFogUniforms(ii,ve),R.refreshMaterialUniforms(ii,X,Y,V),eo.upload(ie,xt.uniformsList,ii,mt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(eo.upload(ie,xt.uniformsList,ii,mt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Zt.setValue(ie,"center",K.center),Zt.setValue(ie,"modelViewMatrix",K.modelViewMatrix),Zt.setValue(ie,"normalMatrix",K.normalMatrix),Zt.setValue(ie,"modelMatrix",K.matrixWorld),Ot}function lc(E,J){E.ambientLightColor.needsUpdate=J,E.lightProbe.needsUpdate=J,E.directionalLights.needsUpdate=J,E.directionalLightShadows.needsUpdate=J,E.pointLights.needsUpdate=J,E.pointLightShadows.needsUpdate=J,E.spotLights.needsUpdate=J,E.spotLightShadows.needsUpdate=J,E.rectAreaLights.needsUpdate=J,E.hemisphereLights.needsUpdate=J}function cc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return M},this.setRenderTarget=function(E,J=0,X=0){M=E,v=J,m=X,E&&yt.get(E).__webglFramebuffer===void 0&&mt.setupRenderTarget(E);let K=null,ve=!1,$e=!1;if(E){const ot=E.texture;(ot.isDataTexture3D||ot.isDataTexture2DArray)&&($e=!0);const _t=yt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(K=_t[J],ve=!0):E.isWebGLMultisampleRenderTarget?K=yt.get(E).__webglMultisampledFramebuffer:K=_t,w.copy(E.viewport),F.copy(E.scissor),B=E.scissorTest}else w.copy(H).multiplyScalar(Y).floor(),F.copy(U).multiplyScalar(Y).floor(),B=z;if(Ze.bindFramebuffer(36160,K),Ze.viewport(w),Ze.scissor(F),Ze.setScissorTest(B),ve){const ot=yt.get(E.texture);ie.framebufferTexture2D(36160,36064,34069+J,ot.__webglTexture,X)}else if($e){const ot=yt.get(E.texture),_t=J||0;ie.framebufferTextureLayer(36160,36064,ot.__webglTexture,X||0,_t)}},this.readRenderTargetPixels=function(E,J,X,K,ve,$e,ot){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ot!==void 0&&(_t=_t[ot]),_t){Ze.bindFramebuffer(36160,_t);try{const Wt=E.texture,xt=Wt.format,Ct=Wt.type;if(xt!==ui&&Te.convert(xt)!==ie.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ct=Ct===Ro&&(bt.has("EXT_color_buffer_half_float")||st.isWebGL2&&bt.has("EXT_color_buffer_float"));if(Ct!==Hs&&Te.convert(Ct)!==ie.getParameter(35738)&&!(Ct===ds&&(st.isWebGL2||bt.has("OES_texture_float")||bt.has("WEBGL_color_buffer_float")))&&!ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie.checkFramebufferStatus(36160)===36053?J>=0&&J<=E.width-K&&X>=0&&X<=E.height-ve&&ie.readPixels(J,X,K,ve,Te.convert(xt),Te.convert(Ct),$e):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Wt=M!==null?yt.get(M).__webglFramebuffer:null;Ze.bindFramebuffer(36160,Wt)}}},this.copyFramebufferToTexture=function(E,J,X=0){const K=Math.pow(2,-X),ve=Math.floor(J.image.width*K),$e=Math.floor(J.image.height*K),ot=Te.convert(J.format);mt.setTexture2D(J,0),ie.copyTexImage2D(3553,X,ot,E.x,E.y,ve,$e,0),Ze.unbindTexture()},this.copyTextureToTexture=function(E,J,X,K=0){const ve=J.image.width,$e=J.image.height,ot=Te.convert(X.format),_t=Te.convert(X.type);mt.setTexture2D(X,0),ie.pixelStorei(37440,X.flipY),ie.pixelStorei(37441,X.premultiplyAlpha),ie.pixelStorei(3317,X.unpackAlignment),J.isDataTexture?ie.texSubImage2D(3553,K,E.x,E.y,ve,$e,ot,_t,J.image.data):J.isCompressedTexture?ie.compressedTexSubImage2D(3553,K,E.x,E.y,J.mipmaps[0].width,J.mipmaps[0].height,ot,J.mipmaps[0].data):ie.texSubImage2D(3553,K,E.x,E.y,ot,_t,J.image),K===0&&X.generateMipmaps&&ie.generateMipmap(3553),Ze.unbindTexture()},this.copyTextureToTexture3D=function(E,J,X,K,ve=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const{width:$e,height:ot,data:_t}=X.image,Wt=Te.convert(K.format),xt=Te.convert(K.type);let Ct;if(K.isDataTexture3D)mt.setTexture3D(K,0),Ct=32879;else if(K.isDataTexture2DArray)mt.setTexture2DArray(K,0),Ct=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ie.pixelStorei(37440,K.flipY),ie.pixelStorei(37441,K.premultiplyAlpha),ie.pixelStorei(3317,K.unpackAlignment);const ct=ie.getParameter(3314),Ot=ie.getParameter(32878),_i=ie.getParameter(3316),Fn=ie.getParameter(3315),Xn=ie.getParameter(32877);ie.pixelStorei(3314,$e),ie.pixelStorei(32878,ot),ie.pixelStorei(3316,E.min.x),ie.pixelStorei(3315,E.min.y),ie.pixelStorei(32877,E.min.z),ie.texSubImage3D(Ct,ve,J.x,J.y,J.z,E.max.x-E.min.x+1,E.max.y-E.min.y+1,E.max.z-E.min.z+1,Wt,xt,_t),ie.pixelStorei(3314,ct),ie.pixelStorei(32878,Ot),ie.pixelStorei(3316,_i),ie.pixelStorei(3315,Fn),ie.pixelStorei(32877,Xn),ve===0&&K.generateMipmaps&&ie.generateMipmap(Ct),Ze.unbindTexture()},this.initTexture=function(E){mt.setTexture2D(E,0),Ze.unbindTexture()},this.resetState=function(){v=0,m=0,M=null,Ze.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class nS extends Qt{}nS.prototype.isWebGL1Renderer=!0;class rh extends Ht{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}rh.prototype.isScene=!0;class _r{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ql,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=qi(),this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new _r(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}_r.prototype.isInterleavedBuffer=!0;const yn=new S;class Fo{constructor(e,t,n,i){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yn.x=this.getX(t),yn.y=this.getY(t),yn.z=this.getZ(t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.x=this.getX(t),yn.y=this.getY(t),yn.z=this.getZ(t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.x=this.getX(t),yn.y=this.getY(t),yn.z=this.getZ(t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Fo.prototype.isInterleavedBufferAttribute=!0;class i0 extends Tn{constructor(e){super(),this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}i0.prototype.isSpriteMaterial=!0;let ba;const Cl=new S,wa=new S,Ma=new S,Sa=new ae,Rl=new ae,s0=new qe,hu=new S,Fl=new S,pu=new S,Pm=new ae,gf=new ae,Cm=new ae;class iS extends Ht{constructor(e){if(super(),this.type="Sprite",ba===void 0){ba=new Et;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _r(t,5);ba.setIndex([0,1,2,0,2,3]),ba.setAttribute("position",new Fo(n,3,0,!1)),ba.setAttribute("uv",new Fo(n,2,3,!1))}this.geometry=ba,this.material=e!==void 0?e:new i0,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wa.setFromMatrixScale(this.matrixWorld),s0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ma.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wa.multiplyScalar(-Ma.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;mu(hu.set(-.5,-.5,0),Ma,o,wa,i,s),mu(Fl.set(.5,-.5,0),Ma,o,wa,i,s),mu(pu.set(.5,.5,0),Ma,o,wa,i,s),Pm.set(0,0),gf.set(1,0),Cm.set(1,1);let a=e.ray.intersectTriangle(hu,Fl,pu,!1,Cl);if(a===null&&(mu(Fl.set(-.5,.5,0),Ma,o,wa,i,s),gf.set(0,1),a=e.ray.intersectTriangle(hu,pu,Fl,!1,Cl),a===null))return;const l=e.ray.origin.distanceTo(Cl);l<e.near||l>e.far||t.push({distance:l,point:Cl.clone(),uv:Rn.getUV(Cl,hu,Fl,pu,Pm,gf,Cm,new ae),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}iS.prototype.isSprite=!0;function mu(r,e,t,n,i,s){Sa.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Rl.x=s*Sa.x-i*Sa.y,Rl.y=i*Sa.x+s*Sa.y):Rl.copy(Sa),r.copy(e),r.x+=Rl.x,r.y+=Rl.y,r.applyMatrix4(s0)}const Rm=new S,Fm=new jt,Im=new jt,sS=new S,Dm=new qe;class oh extends Nt{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new qe,this.bindMatrixInverse=new qe}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new jt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Fm.fromBufferAttribute(i.attributes.skinIndex,e),Im.fromBufferAttribute(i.attributes.skinWeight,e),Rm.fromBufferAttribute(i.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Im.getComponent(s);if(o!==0){const a=Fm.getComponent(s);Dm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(sS.copy(Rm).applyMatrix4(Dm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}oh.prototype.isSkinnedMesh=!0;class ah extends Ht{constructor(){super(),this.type="Bone"}}ah.prototype.isBone=!0;const Nm=new qe,rS=new qe;class lh{constructor(e=[],t=[]){this.uuid=qi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:rS;Nm.multiplyMatrices(a,t[s]),Nm.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new lh(this.bones,this.boneInverses)}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new ah),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}const Bm=new qe,km=new qe,gu=[],Il=new Nt;class Bf extends Nt{constructor(e,t,n){super(e,t),this.instanceMatrix=new qt(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Il.geometry=this.geometry,Il.material=this.material,Il.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Bm),km.multiplyMatrices(n,Bm),Il.matrixWorld=km,Il.raycast(e,gu);for(let o=0,a=gu.length;o<a;o++){const l=gu[o];l.instanceId=s,l.object=this,t.push(l)}gu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qt(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Bf.prototype.isInstancedMesh=!0;class Gs extends Tn{constructor(e){super(),this.type="LineBasicMaterial",this.color=new se(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}}Gs.prototype.isLineBasicMaterial=!0;const Om=new S,zm=new S,Um=new qe,vf=new Bo,vu=new No;class Hu extends Ht{constructor(e=new Et,t=new Gs){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Om.fromBufferAttribute(t,i-1),zm.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Om.distanceTo(zm);e.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vu.copy(n.boundingSphere),vu.applyMatrix4(i),vu.radius+=s,e.ray.intersectsSphere(vu)===!1)return;Um.copy(i).invert(),vf.copy(e.ray).applyMatrix4(Um);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new S,u=new S,d=new S,h=new S,p=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,b=n.attributes.position;if(g!==null){const v=Math.max(0,o.start),m=Math.min(g.count,o.start+o.count);for(let M=v,L=m-1;M<L;M+=p){const C=g.getX(M),w=g.getX(M+1);if(c.fromBufferAttribute(b,C),u.fromBufferAttribute(b,w),vf.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(h);B<e.near||B>e.far||t.push({distance:B,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),m=Math.min(b.count,o.start+o.count);for(let M=v,L=m-1;M<L;M+=p){if(c.fromBufferAttribute(b,M),u.fromBufferAttribute(b,M+1),vf.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||t.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Hu.prototype.isLine=!0;const Hm=new S,Gm=new S;class Gu extends Hu{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Hm.fromBufferAttribute(t,i),Gm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hm.distanceTo(Gm);e.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Gu.prototype.isLineSegments=!0;class Ra extends Hu{constructor(e,t){super(e,t),this.type="LineLoop"}}Ra.prototype.isLineLoop=!0;class ch extends Tn{constructor(e){super(),this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}}ch.prototype.isPointsMaterial=!0;const Vm=new qe,kf=new Bo,xu=new No,yu=new S;class r0 extends Ht{constructor(e=new Et,t=new ch){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xu.copy(n.boundingSphere),xu.applyMatrix4(i),xu.radius+=s,e.ray.intersectsSphere(xu)===!1)return;Vm.copy(i).invert(),kf.copy(e.ray).applyMatrix4(Vm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,y=p;g<y;g++){const b=c.getX(g);yu.fromBufferAttribute(d,b),Wm(yu,b,l,i,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=h,y=p;g<y;g++)yu.fromBufferAttribute(d,g),Wm(yu,g,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}r0.prototype.isPoints=!0;function Wm(r,e,t,n,i,s,o){const a=kf.distanceSqToPoint(r);if(a<t){const l=new S;kf.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class oS extends Wn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.format=a!==void 0?a:Ys,this.minFilter=o!==void 0?o:en,this.magFilter=s!==void 0?s:en,this.generateMipmaps=!1;const u=this;function d(){u.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}oS.prototype.isVideoTexture=!0;class aS extends Wn{constructor(e,t,n,i,s,o,a,l,c,u,d,h){super(null,o,a,l,c,u,i,s,d,h),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}aS.prototype.isCompressedTexture=!0;class Du extends Wn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.needsUpdate=!0}}Du.prototype.isCanvasTexture=!0;class lS extends Wn{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Na,u!==Na&&u!==ql)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Na&&(n=Ru),n===void 0&&u===ql&&(n=Hl),super(null,i,s,o,a,l,u,n,c),this.image={width:e,height:t},this.magFilter=a!==void 0?a:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1}}lS.prototype.isDepthTexture=!0;class cS extends Et{constructor(e,t,n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(s.slice(),3)),this.setAttribute("uv",new Yt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const M=new S,L=new S,C=new S;for(let w=0;w<t.length;w+=3)p(t[w+0],M),p(t[w+1],L),p(t[w+2],C),l(M,L,C,m)}function l(m,M,L,C){const w=C+1,F=[];for(let B=0;B<=w;B++){F[B]=[];const D=m.clone().lerp(L,B/w),V=M.clone().lerp(L,B/w),Y=w-B;for(let q=0;q<=Y;q++)q===0&&B===w?F[B][q]=D:F[B][q]=D.clone().lerp(V,q/Y)}for(let B=0;B<w;B++)for(let D=0;D<2*(w-B)-1;D++){const V=Math.floor(D/2);D%2===0?(h(F[B][V+1]),h(F[B+1][V]),h(F[B][V])):(h(F[B][V+1]),h(F[B+1][V+1]),h(F[B+1][V]))}}function c(m){const M=new S;for(let L=0;L<s.length;L+=3)M.x=s[L+0],M.y=s[L+1],M.z=s[L+2],M.normalize().multiplyScalar(m),s[L+0]=M.x,s[L+1]=M.y,s[L+2]=M.z}function u(){const m=new S;for(let M=0;M<s.length;M+=3){m.x=s[M+0],m.y=s[M+1],m.z=s[M+2];const L=b(m)/2/Math.PI+.5,C=v(m)/Math.PI+.5;o.push(L,1-C)}g(),d()}function d(){for(let m=0;m<o.length;m+=6){const M=o[m+0],L=o[m+2],C=o[m+4],w=Math.max(M,L,C),F=Math.min(M,L,C);w>.9&&F<.1&&(M<.2&&(o[m+0]+=1),L<.2&&(o[m+2]+=1),C<.2&&(o[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function p(m,M){const L=m*3;M.x=e[L+0],M.y=e[L+1],M.z=e[L+2]}function g(){const m=new S,M=new S,L=new S,C=new S,w=new ae,F=new ae,B=new ae;for(let D=0,V=0;D<s.length;D+=9,V+=6){m.set(s[D+0],s[D+1],s[D+2]),M.set(s[D+3],s[D+4],s[D+5]),L.set(s[D+6],s[D+7],s[D+8]),w.set(o[V+0],o[V+1]),F.set(o[V+2],o[V+3]),B.set(o[V+4],o[V+5]),C.copy(m).add(M).add(L).divideScalar(3);const Y=b(C);y(w,V+0,m,Y),y(F,V+2,M,Y),y(B,V+4,L,Y)}}function y(m,M,L,C){C<0&&m.x===1&&(o[M]=m.x-1),L.x===0&&L.z===0&&(o[M]=C/2/Math.PI+.5)}function b(m){return Math.atan2(m.z,-m.x)}function v(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}}const uS={triangulate:function(r,e,t){t=t||2;const n=e&&e.length,i=n?e[0]*t:r.length;let s=o0(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,d,h,p;if(n&&(s=mS(r,e,s,t)),r.length>80*t){a=c=r[0],l=u=r[1];for(let g=t;g<i;g+=t)d=r[g],h=r[g+1],d<a&&(a=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);p=Math.max(c-a,u-l),p=p!==0?1/p:0}return Jl(s,o,t,a,l,p),o}};function o0(r,e,t,n,i){let s,o;if(i===TS(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Xm(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Xm(s,r[s],r[s+1],o);return o&&Vu(o,o.next)&&(ec(o),o=o.next),o}function so(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Vu(t,t.next)||gn(t.prev,t,t.next)===0)){if(ec(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Jl(r,e,t,n,i,s,o){if(!r)return;!o&&s&&_S(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?fS(r,n,i,s):dS(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),ec(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=hS(so(r),e,t),Jl(r,e,t,n,i,s,2)):o===2&&pS(r,e,t,n,i,s):Jl(so(r),e,t,n,i,s,1);break}}}function dS(r){const e=r.prev,t=r,n=r.next;if(gn(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(Fa(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&gn(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function fS(r,e,t,n){const i=r.prev,s=r,o=r.next;if(gn(i,s,o)>=0)return!1;const a=i.x<s.x?i.x<o.x?i.x:o.x:s.x<o.x?s.x:o.x,l=i.y<s.y?i.y<o.y?i.y:o.y:s.y<o.y?s.y:o.y,c=i.x>s.x?i.x>o.x?i.x:o.x:s.x>o.x?s.x:o.x,u=i.y>s.y?i.y>o.y?i.y:o.y:s.y>o.y?s.y:o.y,d=Of(a,l,e,t,n),h=Of(c,u,e,t,n);let p=r.prevZ,g=r.nextZ;for(;p&&p.z>=d&&g&&g.z<=h;){if(p!==r.prev&&p!==r.next&&Fa(i.x,i.y,s.x,s.y,o.x,o.y,p.x,p.y)&&gn(p.prev,p,p.next)>=0||(p=p.prevZ,g!==r.prev&&g!==r.next&&Fa(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&gn(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;p&&p.z>=d;){if(p!==r.prev&&p!==r.next&&Fa(i.x,i.y,s.x,s.y,o.x,o.y,p.x,p.y)&&gn(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;g&&g.z<=h;){if(g!==r.prev&&g!==r.next&&Fa(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&gn(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function hS(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Vu(i,s)&&a0(i,n,n.next,s)&&Kl(i,s)&&Kl(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),ec(n),ec(n.next),n=r=s),n=n.next}while(n!==r);return so(n)}function pS(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&MS(o,a)){let l=l0(o,a);o=so(o,o.next),l=so(l,l.next),Jl(o,e,t,n,i,s),Jl(l,e,t,n,i,s);return}a=a.next}o=o.next}while(o!==r)}function mS(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=o0(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(wS(c));for(i.sort(gS),s=0;s<i.length;s++)vS(i[s],t),t=so(t,t.next);return t}function gS(r,e){return r.x-e.x}function vS(r,e){if(e=xS(r,e),e){const t=l0(e,r);so(e,e.next),so(t,t.next)}}function xS(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s){if(s=h,h===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;const a=o,l=o.x,c=o.y;let u=1/0,d;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Fa(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(d=Math.abs(i-t.y)/(n-t.x),Kl(t,r)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&yS(o,t)))&&(o=t,u=d)),t=t.next;while(t!==a);return o}function yS(r,e){return gn(r.prev,r,e.prev)<0&&gn(e.next,r,r.next)<0}function _S(r,e,t,n){let i=r;do i.z===null&&(i.z=Of(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,bS(i)}function bS(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function Of(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function wS(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Fa(r,e,t,n,i,s,o,a){return(i-o)*(e-a)-(r-o)*(s-a)>=0&&(r-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(i-o)*(n-a)>=0}function MS(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!SS(r,e)&&(Kl(r,e)&&Kl(e,r)&&AS(r,e)&&(gn(r.prev,r,e.prev)||gn(r,e.prev,e))||Vu(r,e)&&gn(r.prev,r,r.next)>0&&gn(e.prev,e,e.next)>0)}function gn(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Vu(r,e){return r.x===e.x&&r.y===e.y}function a0(r,e,t,n){const i=bu(gn(r,e,t)),s=bu(gn(r,e,n)),o=bu(gn(t,n,r)),a=bu(gn(t,n,e));return!!(i!==s&&o!==a||i===0&&_u(r,t,e)||s===0&&_u(r,n,e)||o===0&&_u(t,r,n)||a===0&&_u(t,e,n))}function _u(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function bu(r){return r>0?1:r<0?-1:0}function SS(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&a0(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Kl(r,e){return gn(r.prev,r,r.next)<0?gn(r,e,r.next)>=0&&gn(r,r.prev,e)>=0:gn(r,e,r.prev)<0||gn(r,r.next,e)<0}function AS(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function l0(r,e){const t=new zf(r.i,r.x,r.y),n=new zf(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Xm(r,e,t,n){const i=new zf(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ec(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function zf(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function TS(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class to{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return to.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Ym(e),qm(n,e);let o=e.length;t.forEach(Ym);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,qm(n,t[l]);const a=uS.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Ym(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function qm(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Wu extends Et{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Yt(i,3)),this.setAttribute("uv",new Yt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let d=t.depth!==void 0?t.depth:100,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:6,g=t.bevelSize!==void 0?t.bevelSize:p-2,y=t.bevelOffset!==void 0?t.bevelOffset:0,b=t.bevelSegments!==void 0?t.bevelSegments:3;const v=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:ES;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),d=t.amount);let M,L=!1,C,w,F,B;v&&(M=v.getSpacedPoints(u),L=!0,h=!1,C=v.computeFrenetFrames(u,!1),w=new S,F=new S,B=new S),h||(b=0,p=0,g=0,y=0);const D=a.extractPoints(c);let V=D.shape;const Y=D.holes;if(!to.isClockWise(V)){V=V.reverse();for(let ge=0,ye=Y.length;ge<ye;ge++){const Pe=Y[ge];to.isClockWise(Pe)&&(Y[ge]=Pe.reverse())}}const I=to.triangulateShape(V,Y),H=V;for(let ge=0,ye=Y.length;ge<ye;ge++){const Pe=Y[ge];V=V.concat(Pe)}function U(ge,ye,Pe){return ye||console.error("THREE.ExtrudeGeometry: vec does not exist"),ye.clone().multiplyScalar(Pe).add(ge)}const z=V.length,ne=I.length;function pe(ge,ye,Pe){let Ye,Be,R;const P=ge.x-ye.x,re=ge.y-ye.y,oe=Pe.x-ge.x,Ne=Pe.y-ge.y,je=P*P+re*re,rt=P*Ne-re*oe;if(Math.abs(rt)>Number.EPSILON){const We=Math.sqrt(je),k=Math.sqrt(oe*oe+Ne*Ne),Te=ye.x-re/We,Ie=ye.y+P/We,Ue=Pe.x-Ne/k,ce=Pe.y+oe/k,lt=((Ue-Te)*Ne-(ce-Ie)*oe)/(P*Ne-re*oe);Ye=Te+P*lt-ge.x,Be=Ie+re*lt-ge.y;const kt=Ye*Ye+Be*Be;if(kt<=2)return new ae(Ye,Be);R=Math.sqrt(kt/2)}else{let We=!1;P>Number.EPSILON?oe>Number.EPSILON&&(We=!0):P<-Number.EPSILON?oe<-Number.EPSILON&&(We=!0):Math.sign(re)===Math.sign(Ne)&&(We=!0),We?(Ye=-re,Be=P,R=Math.sqrt(je)):(Ye=P,Be=re,R=Math.sqrt(je/2))}return new ae(Ye/R,Be/R)}const le=[];for(let ge=0,ye=H.length,Pe=ye-1,Ye=ge+1;ge<ye;ge++,Pe++,Ye++)Pe===ye&&(Pe=0),Ye===ye&&(Ye=0),le[ge]=pe(H[ge],H[Pe],H[Ye]);const ze=[];let Ee,Ke=le.concat();for(let ge=0,ye=Y.length;ge<ye;ge++){const Pe=Y[ge];Ee=[];for(let Ye=0,Be=Pe.length,R=Be-1,P=Ye+1;Ye<Be;Ye++,R++,P++)R===Be&&(R=0),P===Be&&(P=0),Ee[Ye]=pe(Pe[Ye],Pe[R],Pe[P]);ze.push(Ee),Ke=Ke.concat(Ee)}for(let ge=0;ge<b;ge++){const ye=ge/b,Pe=p*Math.cos(ye*Math.PI/2),Ye=g*Math.sin(ye*Math.PI/2)+y;for(let Be=0,R=H.length;Be<R;Be++){const P=U(H[Be],le[Be],Ye);st(P.x,P.y,-Pe)}for(let Be=0,R=Y.length;Be<R;Be++){const P=Y[Be];Ee=ze[Be];for(let re=0,oe=P.length;re<oe;re++){const Ne=U(P[re],Ee[re],Ye);st(Ne.x,Ne.y,-Pe)}}}const Qe=g+y;for(let ge=0;ge<z;ge++){const ye=h?U(V[ge],Ke[ge],Qe):V[ge];L?(F.copy(C.normals[0]).multiplyScalar(ye.x),w.copy(C.binormals[0]).multiplyScalar(ye.y),B.copy(M[0]).add(F).add(w),st(B.x,B.y,B.z)):st(ye.x,ye.y,0)}for(let ge=1;ge<=u;ge++)for(let ye=0;ye<z;ye++){const Pe=h?U(V[ye],Ke[ye],Qe):V[ye];L?(F.copy(C.normals[ge]).multiplyScalar(Pe.x),w.copy(C.binormals[ge]).multiplyScalar(Pe.y),B.copy(M[ge]).add(F).add(w),st(B.x,B.y,B.z)):st(Pe.x,Pe.y,d/u*ge)}for(let ge=b-1;ge>=0;ge--){const ye=ge/b,Pe=p*Math.cos(ye*Math.PI/2),Ye=g*Math.sin(ye*Math.PI/2)+y;for(let Be=0,R=H.length;Be<R;Be++){const P=U(H[Be],le[Be],Ye);st(P.x,P.y,d+Pe)}for(let Be=0,R=Y.length;Be<R;Be++){const P=Y[Be];Ee=ze[Be];for(let re=0,oe=P.length;re<oe;re++){const Ne=U(P[re],Ee[re],Ye);L?st(Ne.x,Ne.y+M[u-1].y,M[u-1].x+Pe):st(Ne.x,Ne.y,d+Pe)}}}ie(),Bt();function ie(){const ge=i.length/3;if(h){let ye=0,Pe=z*ye;for(let Ye=0;Ye<ne;Ye++){const Be=I[Ye];Ze(Be[2]+Pe,Be[1]+Pe,Be[0]+Pe)}ye=u+b*2,Pe=z*ye;for(let Ye=0;Ye<ne;Ye++){const Be=I[Ye];Ze(Be[0]+Pe,Be[1]+Pe,Be[2]+Pe)}}else{for(let ye=0;ye<ne;ye++){const Pe=I[ye];Ze(Pe[2],Pe[1],Pe[0])}for(let ye=0;ye<ne;ye++){const Pe=I[ye];Ze(Pe[0]+z*u,Pe[1]+z*u,Pe[2]+z*u)}}n.addGroup(ge,i.length/3-ge,0)}function Bt(){const ge=i.length/3;let ye=0;bt(H,ye),ye+=H.length;for(let Pe=0,Ye=Y.length;Pe<Ye;Pe++){const Be=Y[Pe];bt(Be,ye),ye+=Be.length}n.addGroup(ge,i.length/3-ge,1)}function bt(ge,ye){let Pe=ge.length;for(;--Pe>=0;){const Ye=Pe;let Be=Pe-1;Be<0&&(Be=ge.length-1);for(let R=0,P=u+b*2;R<P;R++){const re=z*R,oe=z*(R+1),Ne=ye+Ye+re,je=ye+Be+re,rt=ye+Be+oe,We=ye+Ye+oe;vt(Ne,je,rt,We)}}}function st(ge,ye,Pe){l.push(ge),l.push(ye),l.push(Pe)}function Ze(ge,ye,Pe){yt(ge),yt(ye),yt(Pe);const Ye=i.length/3,Be=m.generateTopUV(n,i,Ye-3,Ye-2,Ye-1);mt(Be[0]),mt(Be[1]),mt(Be[2])}function vt(ge,ye,Pe,Ye){yt(ge),yt(ye),yt(Ye),yt(ye),yt(Pe),yt(Ye);const Be=i.length/3,R=m.generateSideWallUV(n,i,Be-6,Be-3,Be-2,Be-1);mt(R[0]),mt(R[1]),mt(R[3]),mt(R[1]),mt(R[2]),mt(R[3])}function yt(ge){i.push(l[ge*3+0]),i.push(l[ge*3+1]),i.push(l[ge*3+2])}function mt(ge){s.push(ge.x),s.push(ge.y)}}}toJSON(){const e=Et.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return LS(t,n,e)}}const ES={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new ae(s,o),new ae(a,l),new ae(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[i*3],p=e[i*3+1],g=e[i*3+2],y=e[s*3],b=e[s*3+1],v=e[s*3+2];return Math.abs(a-u)<.01?[new ae(o,1-l),new ae(c,1-d),new ae(h,1-g),new ae(y,1-v)]:[new ae(a,1-l),new ae(u,1-d),new ae(p,1-g),new ae(b,1-v)]}};function LS(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class PS extends Et{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Yt(i,3)),this.setAttribute("normal",new Yt(s,3)),this.setAttribute("uv",new Yt(o,2));function c(u){const d=i.length/3,h=u.extractPoints(t);let p=h.shape;const g=h.holes;to.isClockWise(p)===!1&&(p=p.reverse());for(let b=0,v=g.length;b<v;b++){const m=g[b];to.isClockWise(m)===!0&&(g[b]=m.reverse())}const y=to.triangulateShape(p,g);for(let b=0,v=g.length;b<v;b++){const m=g[b];p=p.concat(m)}for(let b=0,v=p.length;b<v;b++){const m=p[b];i.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let b=0,v=y.length;b<v;b++){const m=y[b],M=m[0]+d,L=m[1]+d,C=m[2]+d;n.push(M,L,C),l+=3}}}toJSON(){const e=Et.prototype.toJSON.call(this),t=this.parameters.shapes;return CS(t,e)}}function CS(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Dl extends Et{constructor(e=1,t=8,n=6,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new S,h=new S,p=[],g=[],y=[],b=[];for(let v=0;v<=n;v++){const m=[],M=v/n;let L=0;v==0&&o==0?L=.5/t:v==n&&l==Math.PI&&(L=-.5/t);for(let C=0;C<=t;C++){const w=C/t;d.x=-e*Math.cos(i+w*s)*Math.sin(o+M*a),d.y=e*Math.cos(o+M*a),d.z=e*Math.sin(i+w*s)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),b.push(w+L,1-M),m.push(c++)}u.push(m)}for(let v=0;v<n;v++)for(let m=0;m<t;m++){const M=u[v][m+1],L=u[v][m],C=u[v+1][m],w=u[v+1][m+1];(v!==0||o>0)&&p.push(M,L,w),(v!==n-1||l<Math.PI)&&p.push(L,C,w)}this.setIndex(p),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(b,2))}}class RS extends cS{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}}class FS extends Tn{constructor(e){super(),this.type="ShadowMaterial",this.color=new se(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}FS.prototype.isShadowMaterial=!0;class Xu extends xi{constructor(e){super(e),this.type="RawShaderMaterial"}}Xu.prototype.isRawShaderMaterial=!0;class hn extends Tn{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this.vertexTangents=e.vertexTangents,this}}hn.prototype.isMeshStandardMaterial=!0;class Co extends hn{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=gi(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new se).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this}}Co.prototype.isMeshPhysicalMaterial=!0;class c0 extends Tn{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new se(16777215),this.specular=new se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}c0.prototype.isMeshPhongMaterial=!0;class IS extends Tn{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}IS.prototype.isMeshToonMaterial=!0;class DS extends Tn{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}DS.prototype.isMeshNormalMaterial=!0;class NS extends Tn{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}NS.prototype.isMeshLambertMaterial=!0;class BS extends Tn{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new se(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}BS.prototype.isMeshMatcapMaterial=!0;class kS extends Gs{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}kS.prototype.isLineDashedMaterial=!0;const pn={arraySlice:function(r,e,t){return pn.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),d=[],h=[];for(let p=0;p<c.times.length;++p){const g=c.times[p]*i;if(!(g<t||g>=n)){d.push(c.times[p]);for(let y=0;y<u;++y)h.push(c.values[p*u+y])}}d.length!==0&&(c.times=pn.convertArray(d,c.times.constructor),c.values=pn.convertArray(h,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(v){return v.name===a.name&&v.ValueTypeName===l});if(c===void 0)continue;let u=0;const d=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let h=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=p/3);const g=a.times.length-1;let y;if(s<=a.times[0]){const v=u,m=d-u;y=pn.arraySlice(a.values,v,m)}else if(s>=a.times[g]){const v=g*d+u,m=v+d-u;y=pn.arraySlice(a.values,v,m)}else{const v=a.createInterpolant(),m=u,M=d-u;v.evaluate(s),y=pn.arraySlice(v.resultBuffer,m,M)}l==="quaternion"&&new _n().fromArray(y).normalize().conjugate().toArray(y);const b=c.times.length;for(let v=0;v<b;++v){const m=v*p+h;if(l==="quaternion")_n.multiplyQuaternionsFlat(c.values,m,y,0,c.values,m);else{const M=p-h*2;for(let L=0;L<M;++L)c.values[m+L]-=y[L]}}}return r.blendMode=Lg,r}};class yr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}yr.prototype.beforeStart_=yr.prototype.copySampleValue_;yr.prototype.afterEnd_=yr.prototype.copySampleValue_;class OS extends yr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pa,endingEnd:Pa}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ca:s=e,a=2*t-n;break;case Fu:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ca:o=e,l=2*n-t;break;case Fu:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),y=g*g,b=y*g,v=-h*b+2*h*y-h*g,m=(1+h)*b+(-1.5-2*h)*y+(-.5+h)*g+1,M=(-1-p)*b+(1.5+p)*y+.5*g,L=p*b-p*y;for(let C=0;C!==a;++C)s[C]=v*o[u+C]+m*o[c+C]+M*o[l+C]+L*o[d+C];return s}}class u0 extends yr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}}class zS extends yr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class js{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pn.convertArray(t,this.TimeBufferType),this.values=pn.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pn.convertArray(e.times,Array),values:pn.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new u0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new OS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case jl:t=this.InterpolantFactoryMethodDiscrete;break;case Oa:t=this.InterpolantFactoryMethodLinear;break;case Gd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jl;case this.InterpolantFactoryMethodLinear:return Oa;case this.InterpolantFactoryMethodSmooth:return Gd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=pn.arraySlice(n,s,o),this.values=pn.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&pn.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=pn.arraySlice(this.times),t=pn.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Gd,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,h=d-n,p=d+n;for(let g=0;g!==n;++g){const y=t[d+g];if(y!==t[h+g]||y!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=pn.arraySlice(e,0,o),this.values=pn.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=pn.arraySlice(this.times,0),t=pn.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}js.prototype.TimeBufferType=Float32Array;js.prototype.ValueBufferType=Float32Array;js.prototype.DefaultInterpolation=Oa;class qa extends js{}qa.prototype.ValueTypeName="bool";qa.prototype.ValueBufferType=Array;qa.prototype.DefaultInterpolation=jl;qa.prototype.InterpolantFactoryMethodLinear=void 0;qa.prototype.InterpolantFactoryMethodSmooth=void 0;class d0 extends js{}d0.prototype.ValueTypeName="color";class tc extends js{}tc.prototype.ValueTypeName="number";class US extends yr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)_n.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ja extends js{InterpolantFactoryMethodLinear(e){return new US(this.times,this.values,this.getValueSize(),e)}}ja.prototype.ValueTypeName="quaternion";ja.prototype.DefaultInterpolation=Oa;ja.prototype.InterpolantFactoryMethodSmooth=void 0;class Qa extends js{}Qa.prototype.ValueTypeName="string";Qa.prototype.ValueBufferType=Array;Qa.prototype.DefaultInterpolation=jl;Qa.prototype.InterpolantFactoryMethodLinear=void 0;Qa.prototype.InterpolantFactoryMethodSmooth=void 0;class nc extends js{}nc.prototype.ValueTypeName="vector";class Uf{constructor(e,t=-1,n,i=$f){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=qi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(GS(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(js.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=pn.getKeyframeOrder(l);l=pn.sortedArray(l,1,u),c=pn.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new tc(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,p,g,y){if(p.length!==0){const b=[],v=[];pn.flattenJSON(p,b,v,g),b.length!==0&&y.push(new d(h,b,v))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let y=0;y<h[g].morphTargets.length;y++)p[h[g].morphTargets[y]]=-1;for(const y in p){const b=[],v=[];for(let m=0;m!==h[g].morphTargets.length;++m){const M=h[g];b.push(M.time),v.push(M.morphTarget===y?1:0)}i.push(new tc(".morphTargetInfluence["+y+"]",b,v))}l=p.length*o}else{const p=".bones["+t[d].name+"]";n(nc,p+".position",h,"pos",i),n(ja,p+".quaternion",h,"rot",i),n(nc,p+".scale",h,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function HS(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tc;case"vector":case"vector2":case"vector3":case"vector4":return nc;case"color":return d0;case"quaternion":return ja;case"bool":case"boolean":return qa;case"string":return Qa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function GS(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=HS(r.type);if(r.times===void 0){const t=[],n=[];pn.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ha={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class f0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const VS=new f0;class hs{constructor(e){this.manager=e!==void 0?e:VS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ls={};class Ga extends hs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ha.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;if(ls[e]!==void 0){ls[e].push({onLoad:t,onProgress:n,onError:i});return}const a=/^data:(.*?)(;base64)?,(.*)$/,l=e.match(a);let c;if(l){const u=l[1],d=!!l[2];let h=l[3];h=decodeURIComponent(h),d&&(h=atob(h));try{let p;const g=(this.responseType||"").toLowerCase();switch(g){case"arraybuffer":case"blob":const y=new Uint8Array(h.length);for(let v=0;v<h.length;v++)y[v]=h.charCodeAt(v);g==="blob"?p=new Blob([y.buffer],{type:u}):p=y.buffer;break;case"document":p=new DOMParser().parseFromString(h,u);break;case"json":p=JSON.parse(h);break;default:p=h;break}setTimeout(function(){t&&t(p),s.manager.itemEnd(e)},0)}catch(p){setTimeout(function(){i&&i(p),s.manager.itemError(e),s.manager.itemEnd(e)},0)}}else{ls[e]=[],ls[e].push({onLoad:t,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(u){const d=this.response,h=ls[e];if(delete ls[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),Ha.add(e,d);for(let p=0,g=h.length;p<g;p++){const y=h[p];y.onLoad&&y.onLoad(d)}s.manager.itemEnd(e)}else{for(let p=0,g=h.length;p<g;p++){const y=h[p];y.onError&&y.onError(u)}s.manager.itemError(e),s.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(u){const d=ls[e];for(let h=0,p=d.length;h<p;h++){const g=d[h];g.onProgress&&g.onProgress(u)}},!1),c.addEventListener("error",function(u){const d=ls[e];delete ls[e];for(let h=0,p=d.length;h<p;h++){const g=d[h];g.onError&&g.onError(u)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),c.addEventListener("abort",function(u){const d=ls[e];delete ls[e];for(let h=0,p=d.length;h<p;h++){const g=d[h];g.onError&&g.onError(u)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const u in this.requestHeader)c.setRequestHeader(u,this.requestHeader[u]);c.send(null)}return s.manager.itemStart(e),c}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class h0 extends hs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ha.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=document.createElementNS("http://www.w3.org/1999/xhtml","img");function l(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1),Ha.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class WS extends hs{constructor(e){super(e)}load(e,t,n,i){const s=new zu,o=new h0(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class XS extends hs{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new ih,a=new Ga(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){const c=s.parse(l);c&&(c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:vi,o.wrapT=c.wrapT!==void 0?c.wrapT:vi,o.magFilter=c.magFilter!==void 0?c.magFilter:en,o.minFilter=c.minFilter!==void 0?c.minFilter:en,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Wa),c.mipmapCount===1&&(o.minFilter=en),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c))},n,i),o}}class ic extends hs{constructor(e){super(e)}load(e,t,n,i){const s=new Wn,o=new h0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a;const l=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;s.format=l?Ys:ui,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ji{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],h=n[i+1]-u,p=(o-u)/h;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new ae:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new S,i=[],s=[],o=[],a=new S,l=new qe;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new S),i[p].normalize()}s[0]=new S,o[0]=new S;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(gi(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(gi(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Kr extends ji{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new ae,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Kr.prototype.isEllipseCurve=!0;class p0 extends Kr{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.type="ArcCurve"}}p0.prototype.isArcCurve=!0;function uh(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,p*=u,i(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const wu=new S,xf=new uh,yf=new uh,_f=new uh;class m0 extends ji{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(wu.subVectors(i[0],i[1]).add(i[0]),c=wu);const d=i[a%s],h=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(wu.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=wu),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(h),p),b=Math.pow(h.distanceToSquared(u),p);y<1e-4&&(y=1),g<1e-4&&(g=y),b<1e-4&&(b=y),xf.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,y,b),yf.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,y,b),_f.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,y,b)}else this.curveType==="catmullrom"&&(xf.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),yf.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),_f.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(xf.calc(l),yf.calc(l),_f.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}m0.prototype.isCatmullRomCurve3=!0;function jm(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function YS(r,e){const t=1-r;return t*t*e}function qS(r,e){return 2*(1-r)*r*e}function jS(r,e){return r*r*e}function Wl(r,e,t,n){return YS(r,e)+qS(r,t)+jS(r,n)}function QS(r,e){const t=1-r;return t*t*t*e}function ZS(r,e){const t=1-r;return 3*t*t*r*e}function $S(r,e){return 3*(1-r)*r*r*e}function JS(r,e){return r*r*r*e}function Xl(r,e,t,n,i){return QS(r,e)+ZS(r,t)+$S(r,n)+JS(r,i)}class dh extends ji{constructor(e=new ae,t=new ae,n=new ae,i=new ae){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ae){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Xl(e,i.x,s.x,o.x,a.x),Xl(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}dh.prototype.isCubicBezierCurve=!0;class g0 extends ji{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Xl(e,i.x,s.x,o.x,a.x),Xl(e,i.y,s.y,o.y,a.y),Xl(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}g0.prototype.isCubicBezierCurve3=!0;class Yu extends ji{constructor(e=new ae,t=new ae){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new ae;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Yu.prototype.isLineCurve=!0;class KS extends ji{constructor(e=new S,t=new S){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new S){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fh extends ji{constructor(e=new ae,t=new ae,n=new ae){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Wl(e,i.x,s.x,o.x),Wl(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}fh.prototype.isQuadraticBezierCurve=!0;class v0 extends ji{constructor(e=new S,t=new S,n=new S){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Wl(e,i.x,s.x,o.x),Wl(e,i.y,s.y,o.y),Wl(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}v0.prototype.isQuadraticBezierCurve3=!0;class hh extends ji{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(jm(a,l.x,c.x,u.x,d.x),jm(a,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ae().fromArray(i))}return this}}hh.prototype.isSplineCurve=!0;var eA=Object.freeze({__proto__:null,ArcCurve:p0,CatmullRomCurve3:m0,CubicBezierCurve:dh,CubicBezierCurve3:g0,EllipseCurve:Kr,LineCurve:Yu,LineCurve3:KS,QuadraticBezierCurve:fh,QuadraticBezierCurve3:v0,SplineCurve:hh});class tA extends ji{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Yu(t,e))}getPoint(e){const t=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=t){const s=n[i]-t,o=this.curves[i],a=o.getLength(),l=a===0?0:1-s/a;return o.getPointAt(l)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new eA[i.type]().fromJSON(i))}return this}}class Hf extends tA{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Yu(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new fh(this.currentPoint.clone(),new ae(e,t),new ae(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new dh(this.currentPoint.clone(),new ae(e,t),new ae(n,i),new ae(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new hh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new Kr(e,t,n,i,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ph extends Hf{constructor(e){super(e),this.uuid=qi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Hf().fromJSON(i))}return this}}class qs extends Ht{constructor(e,t=1){super(),this.type="Light",this.color=new se(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}qs.prototype.isLight=!0;class nA extends qs{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(Ht.DefaultUp),this.updateMatrix(),this.groundColor=new se(t)}copy(e){return qs.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}nA.prototype.isHemisphereLight=!0;const Qm=new qe,Zm=new S,$m=new S;class mh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uu,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zm),$m.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($m),t.updateMatrixWorld(),Qm.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qm),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class x0 extends mh{constructor(){super(new Kn(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=Zl*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}x0.prototype.isSpotLightShadow=!0;class y0 extends qs{constructor(e,t,n=0,i=Math.PI/3,s=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(Ht.DefaultUp),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.shadow=new x0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}y0.prototype.isSpotLight=!0;const Jm=new qe,Nl=new S,bf=new S;class _0 extends mh{constructor(){super(new Kn(90,1,.5,500)),this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Nl.setFromMatrixPosition(e.matrixWorld),n.position.copy(Nl),bf.copy(n.position),bf.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(bf),n.updateMatrixWorld(),i.makeTranslation(-Nl.x,-Nl.y,-Nl.z),Jm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jm)}}_0.prototype.isPointLightShadow=!0;class b0 extends qs{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}b0.prototype.isPointLight=!0;class Za extends th{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Za.prototype.isOrthographicCamera=!0;class w0 extends mh{constructor(){super(new Za(-5,5,5,-5,.5,500))}}w0.prototype.isDirectionalLightShadow=!0;class gh extends qs{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Ht.DefaultUp),this.updateMatrix(),this.target=new Ht,this.shadow=new w0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}gh.prototype.isDirectionalLight=!0;class M0 extends qs{constructor(e,t){super(e,t),this.type="AmbientLight"}}M0.prototype.isAmbientLight=!0;class iA extends qs{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}iA.prototype.isRectAreaLight=!0;class S0{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new S)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}S0.prototype.isSphericalHarmonics3=!0;class vh extends qs{constructor(e=new S0,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}vh.prototype.isLightProbe=!0;class Ba{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}class sA extends Et{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}sA.prototype.isInstancedBufferGeometry=!0;class rA extends qt{constructor(e,t,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}rA.prototype.isInstancedBufferAttribute=!0;class A0 extends hs{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ha.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Ha.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}A0.prototype.isImageBitmapLoader=!0;let Mu;const oA={getContext:function(){return Mu===void 0&&(Mu=new(window.AudioContext||window.webkitAudioContext)),Mu},setContext:function(r){Mu=r}};class aA extends hs{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Ga(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);oA.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class lA extends vh{constructor(e,t,n=1){super(void 0,n);const i=new se().set(e),s=new se().set(t),o=new S(i.r,i.g,i.b),a=new S(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}lA.prototype.isHemisphereLightProbe=!0;class cA extends vh{constructor(e,t=1){super(void 0,t);const n=new se().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}cA.prototype.isAmbientLightProbe=!0;class uA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Km(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Km();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Km(){return(typeof performance>"u"?Date:performance).now()}class dA extends Ht{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class fA{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){_n.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;_n.multiplyQuaternionsFlat(e,o,e,t,e,n),_n.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const xh="\\[\\]\\.:\\/",hA=new RegExp("["+xh+"]","g"),yh="[^"+xh+"]",pA="[^"+xh.replace("\\.","")+"]",mA=/((?:WC+[\/:])*)/.source.replace("WC",yh),gA=/(WCOD+)?/.source.replace("WCOD",pA),vA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yh),xA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yh),yA=new RegExp("^"+mA+gA+vA+xA+"$"),_A=["material","materials","bones"];class bA{constructor(e,t,n){const i=n||Xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Xt{constructor(e,t,n){this.path=t,this.parsedPath=n||Xt.parseTrackName(t),this.node=Xt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Xt.Composite(e,t,n):new Xt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hA,"")}static parseTrackName(e){const t=yA.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);_A.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.node[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Xt.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Xt.Composite=bA;Xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xt.prototype.GetterByBindingType=[Xt.prototype._getValue_direct,Xt.prototype._getValue_array,Xt.prototype._getValue_arrayElement,Xt.prototype._getValue_toArray];Xt.prototype.SetterByBindingTypeAndVersioning=[[Xt.prototype._setValue_direct,Xt.prototype._setValue_direct_setNeedsUpdate,Xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_array,Xt.prototype._setValue_array_setNeedsUpdate,Xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_arrayElement,Xt.prototype._setValue_arrayElement_setNeedsUpdate,Xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_fromArray,Xt.prototype._setValue_fromArray_setNeedsUpdate,Xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class wA{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Pa,endingEnd:Pa};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=La,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Lg:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case $f:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===my;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===If){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ca,i.endingEnd=Ca):(e?i.endingStart=this.zeroSlopeAtStart?Ca:Pa:i.endingStart=Fu,t?i.endingEnd=this.zeroSlopeAtEnd?Ca:Pa:i.endingEnd=Fu)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}class Gf extends Do{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==s;++d){const h=i[d],p=h.name;let g=u[p];if(g!==void 0)o[d]=g;else{if(g=o[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const y=t&&t._propertyBindings[d].binding.parsedPath;g=new fA(Xt.create(n,p,y),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),o[d]=g}a[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete d[h],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new u0(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Uf.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=$f),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new wA(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Uf.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}Gf.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class MA extends _r{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}MA.prototype.isInstancedInterleavedBuffer=!0;class Su{constructor(e,t,n=0,i=1/0){this.ray=new Bo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Og,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!1,n=[]){return Vf(e,this,n,t),n.sort(eg),n}intersectObjects(e,t=!1,n=[]){for(let i=0,s=e.length;i<s;i++)Vf(e[i],this,n,t);return n.sort(eg),n}}function eg(r,e){return r.distance-e.distance}function Vf(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Vf(i[s],e,t,!0)}}class SA extends Ht{constructor(e){super(),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}SA.prototype.isImmediateRenderObject=!0;const $r=new S,Au=new qe,wf=new qe;class AA extends Gu{constructor(e){const t=T0(e),n=new Et,i=[],s=[],o=new se(0,0,1),a=new se(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new Yt(i,3)),n.setAttribute("color",new Yt(s,3));const l=new Gs({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");wf.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(Au.multiplyMatrices(wf,a.matrixWorld),$r.setFromMatrixPosition(Au),i.setXYZ(o,$r.x,$r.y,$r.z),Au.multiplyMatrices(wf,a.parent.matrixWorld),$r.setFromMatrixPosition(Au),i.setXYZ(o+1,$r.x,$r.y,$r.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function T0(r){const e=[];r&&r.isBone&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,T0(r.children[t]));return e}class TA extends Gu{constructor(e=10,t=10,n=4473924,i=8947848){n=new se(n),i=new se(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,p=0,g=-a;h<=t;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const y=h===s?n:i;y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3}const u=new Et;u.setAttribute("position",new Yt(l,3)),u.setAttribute("color",new Yt(c,3));const d=new Gs({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}}const E0=new Float32Array(1),EA=new Int32Array(E0.buffer);class Mf{static toHalfFloat(e){E0[0]=e;const t=EA[0];let n=t>>16&32768,i=t>>12&2047;const s=t>>23&255;return s<103?n:s>142?(n|=31744,n|=(s==255?0:1)&&t&8388607,n):s<113?(i|=2048,n|=(i>>114-s)+(i>>113-s&1),n):(n|=s-112<<10|i>>1,n+=i&1,n)}}const ka=4,no=8,zs=Math.pow(2,no),L0=[.125,.215,.35,.446,.526,.582],P0=no-ka+1+L0.length,Aa=20,Vs={[ei]:0,[fs]:1,[Ou]:2,[Rg]:3,[Fg]:4,[Ig]:5,[Jf]:6},Eo=new Ut({side:On,depthWrite:!1,depthTest:!1}),LA=new Nt(new $l,Eo),Sf=new Za,{_lodPlanes:Bl,_sizeLods:tg,_sigmas:Tu}=RA(),ng=new se;let Af=null;const Lo=(1+Math.sqrt(5))/2,Ta=1/Lo,ig=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,Lo,Ta),new S(0,Lo,-Ta),new S(Ta,0,Lo),new S(-Ta,0,Lo),new S(Lo,Ta,0),new S(-Lo,Ta,0)];function sg(r){const e=Math.max(r.r,r.g,r.b),t=Math.min(Math.max(Math.ceil(Math.log2(e)),-128),127);return r.multiplyScalar(Math.pow(2,-t)),(t+128)/255}class PA{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=FA(Aa),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Af=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=ag(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=og(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Bl.length;e++)Bl[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Af),e.scissorTest=!1,Eu(e,0,0,e.width,e.height)}_fromTexture(e){Af=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:An,minFilter:An,generateMipmaps:!1,type:Hs,format:Eg,encoding:CA(e)?e.encoding:Ou,depthBuffer:!1},n=rg(t);return n.depthBuffer=!e,this._pingPongRenderTarget=rg(t),n}_compileMaterial(e){const t=new Nt(Bl[0],e);this._renderer.compile(t,Sf)}_sceneToCubeUV(e,t,n,i){const a=new Kn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.outputEncoding,p=u.toneMapping;u.getClearColor(ng),u.toneMapping=Da,u.outputEncoding=ei,u.autoClear=!1;let g=!1;const y=e.background;if(y){if(y.isColor){Eo.color.copy(y).convertSRGBToLinear(),e.background=null;const b=sg(Eo.color);Eo.opacity=b,g=!0}}else{Eo.color.copy(ng).convertSRGBToLinear();const b=sg(Eo.color);Eo.opacity=b,g=!0}for(let b=0;b<6;b++){const v=b%3;v==0?(a.up.set(0,l[b],0),a.lookAt(c[b],0,0)):v==1?(a.up.set(0,0,l[b]),a.lookAt(0,c[b],0)):(a.up.set(0,l[b],0),a.lookAt(0,0,c[b])),Eu(i,v*zs,b>2?zs:0,zs,zs),u.setRenderTarget(i),g&&u.render(LA,a),u.render(e,a)}u.toneMapping=p,u.outputEncoding=h,u.autoClear=d}_textureToCubeUV(e,t){const n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=ag()):this._equirectShader==null&&(this._equirectShader=og());const i=e.isCubeTexture?this._cubemapShader:this._equirectShader,s=new Nt(Bl[0],i),o=i.uniforms;o.envMap.value=e,e.isCubeTexture||o.texelSize.value.set(1/e.image.width,1/e.image.height),o.inputEncoding.value=Vs[e.encoding],o.outputEncoding.value=Vs[t.texture.encoding],Eu(t,0,0,3*zs,2*zs),n.setRenderTarget(t),n.render(s,Sf)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<P0;i++){const s=Math.sqrt(Tu[i]*Tu[i]-Tu[i-1]*Tu[i-1]),o=ig[(i-1)%ig.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Nt(Bl[i],c),h=c.uniforms,p=tg[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Aa-1),y=s/g,b=isFinite(s)?1+Math.floor(u*y):Aa;b>Aa&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Aa}`);const v=[];let m=0;for(let w=0;w<Aa;++w){const F=w/y,B=Math.exp(-F*F/2);v.push(B),w==0?m+=B:w<b&&(m+=2*B)}for(let w=0;w<v.length;w++)v[w]=v[w]/m;h.envMap.value=e.texture,h.samples.value=b,h.weights.value=v,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a),h.dTheta.value=g,h.mipInt.value=no-n,h.inputEncoding.value=Vs[e.texture.encoding],h.outputEncoding.value=Vs[e.texture.encoding];const M=tg[i],L=3*Math.max(0,zs-2*M),C=(i===0?0:2*zs)+2*M*(i>no-ka?i-no+ka:0);Eu(t,L,C,3*M,2*M),l.setRenderTarget(t),l.render(d,Sf)}}function CA(r){return r===void 0||r.type!==Hs?!1:r.encoding===ei||r.encoding===fs||r.encoding===Jf}function RA(){const r=[],e=[],t=[];let n=no;for(let i=0;i<P0;i++){const s=Math.pow(2,n);e.push(s);let o=1/s;i>no-ka?o=L0[i-no+ka-1]:i==0&&(o=0),t.push(o);const a=1/(s-1),l=-a/2,c=1+a/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,p=3,g=2,y=1,b=new Float32Array(p*h*d),v=new Float32Array(g*h*d),m=new Float32Array(y*h*d);for(let L=0;L<d;L++){const C=L%3*2/3-1,w=L>2?0:-1,F=[C,w,0,C+2/3,w,0,C+2/3,w+1,0,C,w,0,C+2/3,w+1,0,C,w+1,0];b.set(F,p*h*L),v.set(u,g*h*L);const B=[L,L,L,L,L,L];m.set(B,y*h*L)}const M=new Et;M.setAttribute("position",new qt(b,p)),M.setAttribute("uv",new qt(v,g)),M.setAttribute("faceIndex",new qt(m,y)),r.push(M),n>ka&&n--}return{_lodPlanes:r,_sizeLods:e,_sigmas:t}}function rg(r){const e=new Jn(3*zs,3*zs,r);return e.texture.mapping=ku,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Eu(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function FA(r){const e=new Float32Array(r),t=new S(0,1,0);return new Xu({name:"SphericalGaussianBlur",defines:{n:r},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:Vs[ei]},outputEncoding:{value:Vs[ei]}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${bh()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Xs,depthTest:!1,depthWrite:!1})}function og(){const r=new ae(1,1);return new Xu({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:r},inputEncoding:{value:Vs[ei]},outputEncoding:{value:Vs[ei]}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${bh()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Xs,depthTest:!1,depthWrite:!1})}function ag(){return new Xu({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Vs[ei]},outputEncoding:{value:Vs[ei]}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${bh()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Xs,depthTest:!1,depthWrite:!1})}function _h(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bh(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}ji.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(ji.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};Hf.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};TA.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};AA.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};hs.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Ba.extractUrlBase(r)};hs.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};ki.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};ki.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};ki.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};ki.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};ki.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};No.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Uu.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};Vn.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};Vn.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};Vn.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};Vn.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};Vn.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};Vn.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};qe.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};qe.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};qe.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new S().setFromMatrixColumn(this,3)};qe.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};qe.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};qe.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};qe.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};qe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};qe.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};qe.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};qe.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};qe.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};qe.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};qe.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};qe.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};qe.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};qe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};qe.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)};qe.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};us.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};_n.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};_n.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Bo.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Bo.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};Bo.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Rn.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};Rn.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};Rn.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};Rn.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};Rn.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};Rn.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Rn.getBarycoord(r,e,t,n,i)};Rn.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Rn.getNormal(r,e,t,n)};ph.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};ph.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Wu(this,r)};ph.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new PS(this,r)};ae.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};ae.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};ae.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};S.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};S.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};S.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};S.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};S.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};S.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};S.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};S.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};S.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};jt.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};jt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ht.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};Ht.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Ht.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};Ht.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Ht.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Ht.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Nt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Nt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Pg},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});oh.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Kn.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties(qs.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(qt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===za},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(za)}}});qt.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?za:Ql),this};qt.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},qt.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Et.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};Et.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new qt(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};Et.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};Et.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Et.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Et.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};Et.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Et.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});_r.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?za:Ql),this};_r.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Wu.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Wu.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Wu.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};rh.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(Tn.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new se}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===wg}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}}});Object.defineProperties(xi.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});Qt.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};Qt.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};Qt.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Qt.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Qt.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Qt.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Qt.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Qt.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Qt.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Qt.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Qt.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Qt.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Qt.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Qt.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Qt.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};Qt.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Qt.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Qt.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Qt.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Qt.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Qt.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Qt.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Qt.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Qt.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Qt.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Qt.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?fs:ei}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(t0.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Jn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});dA.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new aA().load(r,function(n){e.setBuffer(n)}),this};nh.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};nh.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};Xa.crossOrigin=void 0;Xa.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new ic;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};Xa.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new WS;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};Xa.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Xa.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_g}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_g);var Nu={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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

		}`};class rc{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const IA=new Za(-1,1,1,-1,0,1),wh=new Et;wh.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3));wh.setAttribute("uv",new Yt([0,2,0,0,2,0],2));class C0{constructor(e){this._mesh=new Nt(wh,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,IA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Yl extends rc{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof xi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=eh.clone(e.uniforms),this.material=new xi({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new C0(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class lg extends rc{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class DA extends rc{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class NA{constructor(e,t){if(this.renderer=e,t===void 0){const n={minFilter:en,magFilter:en,format:ui},i=e.getSize(new ae);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new Jn(this._width*this._pixelRatio,this._height*this._pixelRatio,n),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Nu===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Yl===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Yl(Nu),this.clock=new uA}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}lg!==void 0&&(o instanceof lg?n=!0:o instanceof DA&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new Za(-1,1,1,-1,0,1);const R0=new Et;R0.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3));R0.setAttribute("uv",new Yt([0,2,0,0,2,0],2));class BA extends rc{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new se}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}class Ws extends rc{constructor(e,t,n,i){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=i!==void 0?i:[],this.visibleEdgeColor=new se(1,1,1),this.hiddenEdgeColor=new se(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256);const s={minFilter:en,magFilter:en,format:ui},o=Math.round(this.resolution.x/this.downSampleRatio),a=Math.round(this.resolution.y/this.downSampleRatio);this.maskBufferMaterial=new Ut({color:16777215}),this.maskBufferMaterial.side=Yi,this.renderTargetMaskBuffer=new Jn(this.resolution.x,this.resolution.y,s),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new sh,this.depthMaterial.side=Yi,this.depthMaterial.depthPacking=Dg,this.depthMaterial.blending=Xs,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=Yi,this.prepareMaskMaterial.fragmentShader=d(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new Jn(this.resolution.x,this.resolution.y,s),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new Jn(o,a,s),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new Jn(o,a,s),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new Jn(Math.round(o/2),Math.round(a/2),s),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new Jn(o,a,s),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new Jn(Math.round(o/2),Math.round(a/2),s),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const l=4,c=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(l),this.separableBlurMaterial1.uniforms.texSize.value.set(o,a),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(c),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(o/2),Math.round(a/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=c,this.overlayMaterial=this.getOverlayMaterial(),Nu===void 0&&console.error("THREE.OutlinePass relies on CopyShader");const u=Nu;this.copyUniforms=eh.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new xi({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Xs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new se,this.oldClearAlpha=1,this.fsQuad=new C0(null),this.tempPulseColor1=new se,this.tempPulseColor2=new se,this.textureMatrix=new qe;function d(h,p){var g=p.isPerspectiveCamera?"perspective":"orthographic";return h.replace(/DEPTH_TO_VIEW_Z/g,g+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),i=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,i),this.renderTargetBlurBuffer1.setSize(n,i),this.renderTargetEdgeBuffer1.setSize(n,i),this.separableBlurMaterial1.uniforms.texSize.value.set(n,i),n=Math.round(n/2),i=Math.round(i/2),this.renderTargetBlurBuffer2.setSize(n,i),this.renderTargetEdgeBuffer2.setSize(n,i),this.separableBlurMaterial2.uniforms.texSize.value.set(n,i)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;function n(i){i.isMesh&&(e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e))}for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(n)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,n=[];function i(o){o.isMesh&&n.push(o)}for(let o=0;o<this.selectedObjects.length;o++)this.selectedObjects[o].traverse(i);function s(o){if(o.isMesh||o.isSprite){let a=!1;for(let l=0;l<n.length;l++)if(n[l].id===o.id){a=!0;break}if(a===!1){const l=o.visible;(e===!1||t.get(o)===!0)&&(o.visible=e),t.set(o,l)}}else(o.isPoints||o.isLine)&&(e===!0?o.visible=t.get(o):(t.set(o,o.visible),o.visible=e))}this.renderScene.traverse(s)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,n,i,s){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,s&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.changeVisibilityOfSelectedObjects(!1);const a=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this.renderScene.background=a,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Ws.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Ws.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=Ws.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=Ws.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,s&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new xi({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new ae(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
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

				}`})}getEdgeDetectionMaterial(){return new xi({uniforms:{maskTexture:{value:null},texSize:{value:new ae(.5,.5)},visibleEdgeColor:{value:new S(1,1,1)},hiddenEdgeColor:{value:new S(1,1,1)}},vertexShader:`varying vec2 vUv;

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
				}`})}getSeperableBlurMaterial(e){return new xi({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

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
				}`})}getOverlayMaterial(){return new xi({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

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
				}`,blending:Ia,depthTest:!1,depthWrite:!1,transparent:!0})}}Ws.BlurDirectionX=new ae(1,0);Ws.BlurDirectionY=new ae(0,1);const kA={uniforms:{tDiffuse:{value:null},resolution:{value:new ae(1/1024,1/512)}},vertexShader:`

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
		}`};class OA extends XS{constructor(e){super(e),this.type=Hs}parse(e){const a=function(M,L){switch(M){case 1:console.error("THREE.RGBELoader Read Error: "+(L||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(L||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(L||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(L||""))}return-1},d=`
`,h=function(M,L,C){L=L||1024;let F=M.pos,B=-1,D=0,V="",Y=String.fromCharCode.apply(null,new Uint16Array(M.subarray(F,F+128)));for(;0>(B=Y.indexOf(d))&&D<L&&F<M.byteLength;)V+=Y,D+=Y.length,F+=128,Y+=String.fromCharCode.apply(null,new Uint16Array(M.subarray(F,F+128)));return-1<B?(M.pos+=D+B+1,V+Y.slice(0,B)):!1},p=function(M){const L=/^#\?(\S+)/,C=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,F=/^\s*FORMAT=(\S+)\s*$/,B=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,D={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let V,Y;if(M.pos>=M.byteLength||!(V=h(M)))return a(1,"no header found");if(!(Y=V.match(L)))return a(3,"bad initial token");for(D.valid|=1,D.programtype=Y[1],D.string+=V+`
`;V=h(M),V!==!1;){if(D.string+=V+`
`,V.charAt(0)==="#"){D.comments+=V+`
`;continue}if((Y=V.match(C))&&(D.gamma=parseFloat(Y[1],10)),(Y=V.match(w))&&(D.exposure=parseFloat(Y[1],10)),(Y=V.match(F))&&(D.valid|=2,D.format=Y[1]),(Y=V.match(B))&&(D.valid|=4,D.height=parseInt(Y[1],10),D.width=parseInt(Y[2],10)),D.valid&2&&D.valid&4)break}return D.valid&2?D.valid&4?D:a(3,"missing image size specifier"):a(3,"missing format specifier")},g=function(M,L,C){const w=L;if(w<8||w>32767||M[0]!==2||M[1]!==2||M[2]&128)return new Uint8Array(M);if(w!==(M[2]<<8|M[3]))return a(3,"wrong scanline width");const F=new Uint8Array(4*L*C);if(!F.length)return a(4,"unable to allocate buffer space");let B=0,D=0;const V=4*w,Y=new Uint8Array(4),q=new Uint8Array(V);let I=C;for(;I>0&&D<M.byteLength;){if(D+4>M.byteLength)return a(1);if(Y[0]=M[D++],Y[1]=M[D++],Y[2]=M[D++],Y[3]=M[D++],Y[0]!=2||Y[1]!=2||(Y[2]<<8|Y[3])!=w)return a(3,"bad rgbe scanline format");let H=0,U;for(;H<V&&D<M.byteLength;){U=M[D++];const ne=U>128;if(ne&&(U-=128),U===0||H+U>V)return a(3,"bad scanline data");if(ne){const pe=M[D++];for(let le=0;le<U;le++)q[H++]=pe}else q.set(M.subarray(D,D+U),H),H+=U,D+=U}const z=w;for(let ne=0;ne<z;ne++){let pe=0;F[B]=q[ne+pe],pe+=w,F[B+1]=q[ne+pe],pe+=w,F[B+2]=q[ne+pe],pe+=w,F[B+3]=q[ne+pe],B+=4}I--}return F},y=function(M,L,C,w){const F=M[L+3],B=Math.pow(2,F-128)/255;C[w+0]=M[L+0]*B,C[w+1]=M[L+1]*B,C[w+2]=M[L+2]*B},b=function(M,L,C,w){const F=M[L+3],B=Math.pow(2,F-128)/255;C[w+0]=Mf.toHalfFloat(M[L+0]*B),C[w+1]=Mf.toHalfFloat(M[L+1]*B),C[w+2]=Mf.toHalfFloat(M[L+2]*B)},v=new Uint8Array(e);v.pos=0;const m=p(v);if(m!==-1){const M=m.width,L=m.height,C=g(v.subarray(v.pos),M,L);if(C!==-1){let w,F,B,D;switch(this.type){case Hs:w=C,F=Eg,B=Hs;break;case ds:D=C.length/4*3;const V=new Float32Array(D);for(let q=0;q<D;q++)y(C,q*4,V,q*3);w=V,F=Ys,B=ds;break;case Ro:D=C.length/4*3;const Y=new Uint16Array(D);for(let q=0;q<D;q++)b(C,q*4,Y,q*3);w=Y,F=Ys,B=Ro;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:M,height:L,data:w,header:m.string,gamma:m.gamma,exposure:m.exposure,format:F,type:B}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){switch(o.type){case Hs:o.encoding=Ou,o.minFilter=An,o.magFilter=An,o.generateMipmaps=!1,o.flipY=!0;break;case ds:o.encoding=ei,o.minFilter=en,o.magFilter=en,o.generateMipmaps=!1,o.flipY=!0;break;case Ro:o.encoding=ei,o.minFilter=en,o.magFilter=en,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,i)}}class cg{static computeTangents(e){e.computeTangents(),console.warn("THREE.BufferGeometryUtils: .computeTangents() has been removed. Use BufferGeometry.computeTangents() instead.")}static mergeBufferGeometries(e,t=!1){const n=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),s=new Set(Object.keys(e[0].morphAttributes)),o={},a={},l=e[0].morphTargetsRelative,c=new Et;let u=0;for(let d=0;d<e.length;++d){const h=e[d];let p=0;if(n!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const g in h.attributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(h.attributes[g]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(l!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const g in h.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;a[g]===void 0&&(a[g]=[]),a[g].push(h.morphAttributes[g])}if(c.userData.mergedUserData=c.userData.mergedUserData||[],c.userData.mergedUserData.push(h.userData),t){let g;if(n)g=h.index.count;else if(h.attributes.position!==void 0)g=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,g,d),u+=g}}if(n){let d=0;const h=[];for(let p=0;p<e.length;++p){const g=e[p].index;for(let y=0;y<g.count;++y)h.push(g.getX(y)+d);d+=e[p].attributes.position.count}c.setIndex(h)}for(const d in o){const h=this.mergeBufferAttributes(o[d]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,h)}for(const d in a){const h=a[d][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let p=0;p<h;++p){const g=[];for(let b=0;b<a[d].length;++b)g.push(a[d][b][p]);const y=this.mergeBufferAttributes(g);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(y)}}return c}static mergeBufferAttributes(e){let t,n,i,s=0;for(let l=0;l<e.length;++l){const c=e[l];if(c.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=c.itemSize),n!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;s+=c.array.length}const o=new t(s);let a=0;for(let l=0;l<e.length;++l)o.set(e[l].array,a),a+=e[l].array.length;return new qt(o,n,i)}static interleaveAttributes(e){let t,n=0,i=0;for(let u=0,d=e.length;u<d;++u){const h=e[u];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("AttributeBuffers of different types cannot be interleaved"),null;n+=h.array.length,i+=h.itemSize}const s=new _r(new t(n),i);let o=0;const a=[],l=["getX","getY","getZ","getW"],c=["setX","setY","setZ","setW"];for(let u=0,d=e.length;u<d;u++){const h=e[u],p=h.itemSize,g=h.count,y=new Fo(s,p,o,h.normalized);a.push(y),o+=p;for(let b=0;b<g;b++)for(let v=0;v<p;v++)y[c[v]](b,h[l[v]](b))}return a}static estimateBytesUsed(e){let t=0;for(const i in e.attributes){const s=e.getAttribute(i);t+=s.count*s.itemSize*s.array.BYTES_PER_ELEMENT}const n=e.getIndex();return t+=n?n.count*n.itemSize*n.array.BYTES_PER_ELEMENT:0,t}static mergeVertices(e,t=1e-4){t=Math.max(t,Number.EPSILON);const n={},i=e.getIndex(),s=e.getAttribute("position"),o=i?i.count:s.count;let a=0;const l=Object.keys(e.attributes),c={},u={},d=[],h=["getX","getY","getZ","getW"];for(let b=0,v=l.length;b<v;b++){const m=l[b];c[m]=[];const M=e.morphAttributes[m];M&&(u[m]=new Array(M.length).fill().map(()=>[]))}const p=Math.log10(1/t),g=Math.pow(10,p);for(let b=0;b<o;b++){const v=i?i.getX(b):b;let m="";for(let M=0,L=l.length;M<L;M++){const C=l[M],w=e.getAttribute(C),F=w.itemSize;for(let B=0;B<F;B++)m+=`${~~(w[h[B]](v)*g)},`}if(m in n)d.push(n[m]);else{for(let M=0,L=l.length;M<L;M++){const C=l[M],w=e.getAttribute(C),F=e.morphAttributes[C],B=w.itemSize,D=c[C],V=u[C];for(let Y=0;Y<B;Y++){const q=h[Y];if(D.push(w[q](v)),F)for(let I=0,H=F.length;I<H;I++)V[I].push(F[I][q](v))}}n[m]=a,d.push(a),a++}}const y=e.clone();for(let b=0,v=l.length;b<v;b++){const m=l[b],M=e.getAttribute(m),L=new M.array.constructor(c[m]),C=new qt(L,M.itemSize,M.normalized);if(y.setAttribute(m,C),m in u)for(let w=0;w<u[m].length;w++){const F=e.morphAttributes[m][w],B=new F.array.constructor(u[m][w]),D=new qt(B,F.itemSize,F.normalized);y.morphAttributes[m][w]=D}}return y.setIndex(d),y}static toTrianglesDrawMode(e,t){if(t===Pg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===Iu||t===Cg){let n=e.getIndex();if(n===null){const a=[],l=e.getAttribute("position");if(l!==void 0){for(let c=0;c<l.count;c++)a.push(c);e.setIndex(a),n=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}const i=n.count-2,s=[];if(t===Iu)for(let a=1;a<=i;a++)s.push(n.getX(0)),s.push(n.getX(a)),s.push(n.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(n.getX(a)),s.push(n.getX(a+1)),s.push(n.getX(a+2))):(s.push(n.getX(a+2)),s.push(n.getX(a+1)),s.push(n.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=e.clone();return o.setIndex(s),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}static computeMorphedAttributes(e){if(e.geometry.isBufferGeometry!==!0)return console.error("THREE.BufferGeometryUtils: Geometry is not of type BufferGeometry."),null;const t=new S,n=new S,i=new S,s=new S,o=new S,a=new S,l=new S,c=new S,u=new S;function d(Ee,Ke,Qe,ie,Bt,bt,st,Ze,vt){t.fromBufferAttribute(Qe,bt),n.fromBufferAttribute(Qe,st),i.fromBufferAttribute(Qe,Ze);const yt=Ee.morphTargetInfluences;if(Ke.morphTargets&&ie&&yt){l.set(0,0,0),c.set(0,0,0),u.set(0,0,0);for(let mt=0,ge=ie.length;mt<ge;mt++){const ye=yt[mt],Pe=ie[mt];ye!==0&&(s.fromBufferAttribute(Pe,bt),o.fromBufferAttribute(Pe,st),a.fromBufferAttribute(Pe,Ze),Bt?(l.addScaledVector(s,ye),c.addScaledVector(o,ye),u.addScaledVector(a,ye)):(l.addScaledVector(s.sub(t),ye),c.addScaledVector(o.sub(n),ye),u.addScaledVector(a.sub(i),ye)))}t.add(l),n.add(c),i.add(u)}Ee.isSkinnedMesh&&(Ee.boneTransform(bt,t),Ee.boneTransform(st,n),Ee.boneTransform(Ze,i)),vt[bt*3+0]=t.x,vt[bt*3+1]=t.y,vt[bt*3+2]=t.z,vt[st*3+0]=n.x,vt[st*3+1]=n.y,vt[st*3+2]=n.z,vt[Ze*3+0]=i.x,vt[Ze*3+1]=i.y,vt[Ze*3+2]=i.z}const h=e.geometry,p=e.material;let g,y,b;const v=h.index,m=h.attributes.position,M=h.morphAttributes.position,L=h.morphTargetsRelative,C=h.attributes.normal,w=h.morphAttributes.position,F=h.groups,B=h.drawRange;let D,V,Y,q,I,H,U,z;const ne=new Float32Array(m.count*m.itemSize),pe=new Float32Array(C.count*C.itemSize);if(v!==null)if(Array.isArray(p))for(D=0,Y=F.length;D<Y;D++)for(I=F[D],H=p[I.materialIndex],U=Math.max(I.start,B.start),z=Math.min(I.start+I.count,B.start+B.count),V=U,q=z;V<q;V+=3)g=v.getX(V),y=v.getX(V+1),b=v.getX(V+2),d(e,H,m,M,L,g,y,b,ne),d(e,H,C,w,L,g,y,b,pe);else for(U=Math.max(0,B.start),z=Math.min(v.count,B.start+B.count),D=U,Y=z;D<Y;D+=3)g=v.getX(D),y=v.getX(D+1),b=v.getX(D+2),d(e,p,m,M,L,g,y,b,ne),d(e,p,C,w,L,g,y,b,pe);else if(m!==void 0)if(Array.isArray(p))for(D=0,Y=F.length;D<Y;D++)for(I=F[D],H=p[I.materialIndex],U=Math.max(I.start,B.start),z=Math.min(I.start+I.count,B.start+B.count),V=U,q=z;V<q;V+=3)g=V,y=V+1,b=V+2,d(e,H,m,M,L,g,y,b,ne),d(e,H,C,w,L,g,y,b,pe);else for(U=Math.max(0,B.start),z=Math.min(m.count,B.start+B.count),D=U,Y=z;D<Y;D+=3)g=D,y=D+1,b=D+2,d(e,p,m,M,L,g,y,b,ne),d(e,p,C,w,L,g,y,b,pe);const le=new Yt(ne,3),ze=new Yt(pe,3);return{positionAttribute:m,normalAttribute:C,morphedPositionAttribute:le,morphedNormalAttribute:ze}}}class zA extends hs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new VA(t)}),this.register(function(t){return new XA(t)}),this.register(function(t){return new YA(t)}),this.register(function(t){return new WA(t)}),this.register(function(t){return new HA(t)}),this.register(function(t){return new qA(t)})}load(e,t,n,i){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Ba.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ga(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={};if(typeof e=="string")s=e;else if(Ba.decodeText(new Uint8Array(e,0,4))===F0){try{o[Vt.KHR_BINARY_GLTF]=new jA(e)}catch(d){i&&i(d);return}s=o[Vt.KHR_BINARY_GLTF].content}else s=Ba.decodeText(new Uint8Array(e));const l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new sT(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);a[d.name]=d,o[d.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){const d=l.extensionsUsed[u],h=l.extensionsRequired||[];switch(d){case Vt.KHR_MATERIALS_UNLIT:o[d]=new GA;break;case Vt.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[d]=new $A;break;case Vt.KHR_DRACO_MESH_COMPRESSION:o[d]=new QA(l,this.dracoLoader);break;case Vt.KHR_TEXTURE_TRANSFORM:o[d]=new ZA;break;case Vt.KHR_MESH_QUANTIZATION:o[d]=new JA;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}}function UA(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class HA{constructor(e){this.parser=e,this.name=Vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new se(16777215);l.color!==void 0&&u.fromArray(l.color);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new gh(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new b0(u),c.distance=d;break;case"spot":c=new y0(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class GA{constructor(){this.name=Vt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ut}extendParams(e,t,n){const i=[];e.color=new se(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture))}return Promise.all(i)}}class VA{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Co}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(a,-a)}return Promise.all(s)}}class WA{constructor(e){this.parser=e,this.name=Vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Co}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class XA{constructor(e){this.parser=e,this.name=Vt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=n.images[s.source],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o,a)}}class YA{constructor(e){this.parser=e,this.name=Vt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qA{constructor(e){this.name=Vt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([s,o.ready]).then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,h=new ArrayBuffer(u*d),p=new Uint8Array(a[0],l,c);return o.decodeGltfBuffer(new Uint8Array(h),u,d,p,i.mode,i.filter),h})}else return null}}const F0="glTF",kl=12,ug={JSON:1313821514,BIN:5130562};class jA{constructor(e){this.name=Vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,kl);if(this.header={magic:Ba.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==F0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-kl,i=new DataView(e,kl);let s=0;for(;s<n;){const o=i.getUint32(s,!0);s+=4;const a=i.getUint32(s,!0);if(s+=4,a===ug.JSON){const l=new Uint8Array(e,kl+s,o);this.content=Ba.decodeText(l)}else if(a===ug.BIN){const l=kl+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class QA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=Xf[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=Xf[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],p=sc[h.componentType];c[d]=p,l[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d){i.decodeDracoFile(u,function(h){for(const p in h.attributes){const g=h.attributes[p],y=l[p];y!==void 0&&(g.normalized=y)}d(h)},a,c)})})}}class ZA{constructor(){this.name=Vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),e.needsUpdate=!0,e}}class Wf extends hn{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.specularRoughness += geometryRoughness;","material.specularRoughness = min( material.specularRoughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new se().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class $A{constructor(){this.name=Vt.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return Wf}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new se(1,1,1),e.opacity=1;const s=[];if(Array.isArray(i.diffuseFactor)){const o=i.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(i.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",i.diffuseTexture)),e.emissive=new se(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new se(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const o=i.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",o)),s.push(n.assignTexture(e,"specularMap",o))}return Promise.all(s)}createMaterial(e){const t=new Wf(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Io,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}class JA{constructor(){this.name=Vt.KHR_MESH_QUANTIZATION}}class Va extends yr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}}Va.prototype.beforeStart_=Va.prototype.copySampleValue_;Va.prototype.afterEnd_=Va.prototype.copySampleValue_;Va.prototype.interpolate_=function(r,e,t,n){const i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=o*2,l=o*3,c=n-e,u=(t-e)/c,d=u*u,h=d*u,p=r*l,g=p-l,y=-2*h+3*d,b=h-d,v=1-y,m=b-d+u;for(let M=0;M!==o;M++){const L=s[g+M+o],C=s[g+M+a]*c,w=s[p+M+o],F=s[p+M]*c;i[M]=v*L+m*C+y*w+b*F}return i};const vr={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},sc={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},dg={9728:An,9729:en,9984:Rf,9985:Tg,9986:Ff,9987:Wa},fg={33071:vi,33648:Cu,10497:xr},hg={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},KA={CUBICSPLINE:void 0,LINEAR:Oa,STEP:jl},Tf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pg(r,e){return typeof r!="string"||r===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(r)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(r)||/^data:.*,.*$/i.test(r)||/^blob:.*$/i.test(r)?r:e+r)}function eT(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new hn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xn})),r.DefaultMaterial}function Ol(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Po(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function tT(r,e,t){let n=!1,i=!1;for(let a=0,l=e.length;a<l;a++){const c=e[a];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),n&&i)break}if(!n&&!i)return Promise.resolve(r);const s=[],o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];if(n){const u=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):r.attributes.position;s.push(u)}if(i){const u=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):r.attributes.normal;o.push(u)}}return Promise.all([Promise.all(s),Promise.all(o)]).then(function(a){const l=a[0],c=a[1];return n&&(r.morphAttributes.position=l),i&&(r.morphAttributes.normal=c),r.morphTargetsRelative=!0,r})}function nT(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iT(r){const e=r.extensions&&r.extensions[Vt.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+mg(e.attributes):t=r.indices+":"+mg(r.attributes)+":"+r.mode,t}function mg(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Yf(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}class sT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new UA,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.nodeNamesUsed={},typeof createImageBitmap<"u"&&/Firefox/.test(navigator.userAgent)===!1?this.textureLoader=new A0(this.options.manager):this.textureLoader=new ic(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ga(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};Ol(s,a,i),Po(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone();return i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this.loadAnimation(t);break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Vt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(pg(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=hg[i.type],c=sc[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let y,b;if(p&&p!==d){const v=Math.floor(h/p),m="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let M=t.cache.get(m);M||(y=new c(a,v*p,i.count*p/u),M=new _r(y,p/u),t.cache.add(m,M)),b=new Fo(M,l,h%p/u,g)}else a===null?y=new c(i.count*l):y=new c(a,h,i.count*l),b=new qt(y,l,g);if(i.sparse!==void 0){const v=hg.SCALAR,m=sc[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,L=i.sparse.values.byteOffset||0,C=new m(o[1],M,i.sparse.count*v),w=new c(o[2],L,i.sparse.count*l);a!==null&&(b=new qt(b.array.slice(),b.itemSize,b.normalized));for(let F=0,B=C.length;F<B;F++){const D=C[F];if(b.setX(D,w[F*l]),l>=2&&b.setY(D,w[F*l+1]),l>=3&&b.setZ(D,w[F*l+2]),l>=4&&b.setW(D,w[F*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return b})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e],s=t.images[i.source];let o=this.textureLoader;if(s.uri){const a=n.manager.getHandler(s.uri);a!==null&&(o=a)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,o=this.options,a=s.textures[e],l=self.URL||self.webkitURL;let c=t.uri,u=!1,d=!0;if(t.mimeType==="image/jpeg"&&(d=!1),t.bufferView!==void 0)c=i.getDependency("bufferView",t.bufferView).then(function(h){if(t.mimeType==="image/png"){const g=new DataView(h,25,1).getUint8(0,!1);d=g===6||g===4||g===3}u=!0;const p=new Blob([h],{type:t.mimeType});return c=l.createObjectURL(p),c});else if(t.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");return Promise.resolve(c).then(function(h){return new Promise(function(p,g){let y=p;n.isImageBitmapLoader===!0&&(y=function(b){p(new Du(b))}),n.load(pg(h,o.path),y,void 0,g)})}).then(function(h){u===!0&&l.revokeObjectURL(c),h.flipY=!1,a.name&&(h.name=a.name),d||(h.format=Ys);const g=(s.samplers||{})[a.sampler]||{};return h.magFilter=dg[g.magFilter]||en,h.minFilter=dg[g.minFilter]||Wa,h.wrapS=fg[g.wrapS]||xr,h.wrapT=fg[g.wrapT]||xr,i.associations.set(h,{type:"textures",index:e}),h})}assignTexture(e,t,n){const i=this;return this.getDependency("texture",n.index).then(function(s){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),i.extensions[Vt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Vt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const a=i.associations.get(s);s=i.extensions[Vt.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),i.associations.set(s,a)}}e[t]=s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent!==void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0,a=e.isSkinnedMesh===!0,l=Object.keys(t.morphAttributes).length>0,c=l&&t.morphAttributes.normal!==void 0;if(e.isPoints){const u="PointsMaterial:"+n.uuid;let d=this.cache.get(u);d||(d=new ch,Tn.prototype.copy.call(d,n),d.color.copy(n.color),d.map=n.map,d.sizeAttenuation=!1,this.cache.add(u,d)),n=d}else if(e.isLine){const u="LineBasicMaterial:"+n.uuid;let d=this.cache.get(u);d||(d=new Gs,Tn.prototype.copy.call(d,n),d.color.copy(n.color),this.cache.add(u,d)),n=d}if(i||s||o||a||l){let u="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(u+="specular-glossiness:"),a&&(u+="skinning:"),i&&(u+="vertex-tangents:"),s&&(u+="vertex-colors:"),o&&(u+="flat-shading:"),l&&(u+="morph-targets:"),c&&(u+="morph-normals:");let d=this.cache.get(u);d||(d=n.clone(),a&&(d.skinning=!0),s&&(d.vertexColors=!0),o&&(d.flatShading=!0),l&&(d.morphTargets=!0),c&&(d.morphNormals=!0),i&&(d.vertexTangents=!0,d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(u,d),this.associations.set(d,this.associations.get(n))),n=d}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return hn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Vt.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const d=i[Vt.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else if(l[Vt.KHR_MATERIALS_UNLIT]){const d=i[Vt.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new se(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.fromArray(h),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Yi);const u=s.alphaMode||Tf.OPAQUE;return u===Tf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Tf.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ut&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ae(1,-1),s.normalTexture.scale!==void 0&&a.normalScale.set(s.normalTexture.scale,-s.normalTexture.scale)),s.occlusionTexture!==void 0&&o!==Ut&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ut&&(a.emissive=new se().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==Ut&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture)),Promise.all(c).then(function(){let d;return o===Wf?d=i[Vt.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):d=new o(a),s.name&&(d.name=s.name),d.map&&(d.map.encoding=fs),d.emissiveMap&&(d.emissiveMap.encoding=fs),Po(d,s),t.associations.set(d,{type:"materials",index:e}),s.extensions&&Ol(i,d,s),d})}createUniqueName(e){const t=Xt.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return gg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=iT(c),d=i[u];if(d)o.push(d.promise);else{let h;c.extensions&&c.extensions[Vt.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=gg(new Et,c,t),i[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?eT(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,g=u.length;p<g;p++){const y=u[p],b=o[p];let v;const m=c[p];if(b.mode===vr.TRIANGLES||b.mode===vr.TRIANGLE_STRIP||b.mode===vr.TRIANGLE_FAN||b.mode===void 0)v=s.isSkinnedMesh===!0?new oh(y,m):new Nt(y,m),v.isSkinnedMesh===!0&&!v.geometry.attributes.skinWeight.normalized&&v.normalizeSkinWeights(),b.mode===vr.TRIANGLE_STRIP?v.geometry=vg(v.geometry,Cg):b.mode===vr.TRIANGLE_FAN&&(v.geometry=vg(v.geometry,Iu));else if(b.mode===vr.LINES)v=new Gu(y,m);else if(b.mode===vr.LINE_STRIP)v=new Hu(y,m);else if(b.mode===vr.LINE_LOOP)v=new Ra(y,m);else if(b.mode===vr.POINTS)v=new r0(y,m);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+b.mode);Object.keys(v.geometry.morphAttributes).length>0&&nT(v,s),v.name=t.createUniqueName(s.name||"mesh_"+e),Po(v,s),b.extensions&&Ol(i,v,b),t.assignFinalMaterial(v),d.push(v)}if(d.length===1)return d[0];const h=new ci;for(let p=0,g=d.length;p<g;p++)h.add(d[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kn(Cn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Za(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Po(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const d=n.channels[c],h=n.samplers[d.sampler],p=d.target,g=p.node!==void 0?p.node:p.id,y=n.parameters!==void 0?n.parameters[h.input]:h.input,b=n.parameters!==void 0?n.parameters[h.output]:h.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",y)),o.push(this.getDependency("accessor",b)),a.push(h),l.push(p)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2],p=c[3],g=c[4],y=[];for(let v=0,m=u.length;v<m;v++){const M=u[v],L=d[v],C=h[v],w=p[v],F=g[v];if(M===void 0)continue;M.updateMatrix(),M.matrixAutoUpdate=!0;let B;switch(Jr[F.path]){case Jr.weights:B=tc;break;case Jr.rotation:B=ja;break;case Jr.position:case Jr.scale:default:B=nc;break}const D=M.name?M.name:M.uuid,V=w.interpolation!==void 0?KA[w.interpolation]:Oa,Y=[];Jr[F.path]===Jr.weights?M.traverse(function(I){I.isMesh===!0&&I.morphTargetInfluences&&Y.push(I.name?I.name:I.uuid)}):Y.push(D);let q=C.array;if(C.normalized){const I=Yf(q.constructor),H=new Float32Array(q.length);for(let U=0,z=q.length;U<z;U++)H[U]=q[U]*I;q=H}for(let I=0,H=Y.length;I<H;I++){const U=new B(Y[I]+"."+Jr[F.path],L.array,q,V);w.interpolation==="CUBICSPLINE"&&(U.createInterpolant=function(ne){return new Va(this.times,this.values,this.getValueSize()/3,ne)},U.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),y.push(U)}}const b=n.name?n.name:"animation_"+e;return new Uf(b,void 0,y)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"";return function(){const a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(s.isBone===!0?l=new ah:a.length>1?l=new ci:a.length===1?l=a[0]:l=new Ht,l!==a[0])for(let c=0,u=a.length;c<u;c++)l.add(a[c]);if(s.name&&(l.userData.name=s.name,l.name=o),Po(l,s),s.extensions&&Ol(n,l,s),s.matrix!==void 0){const c=new qe;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return i.associations.set(l,{type:"nodes",index:e}),l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],s=this,o=new ci;i.name&&(o.name=s.createUniqueName(i.name)),Po(o,i),i.extensions&&Ol(n,o,i);const a=i.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(I0(a[c],o,t,s));return Promise.all(l).then(function(){return o})}}function I0(r,e,t,n){const i=t.nodes[r];return n.getDependency("node",r).then(function(s){if(i.skin===void 0)return s;let o;return n.getDependency("skin",i.skin).then(function(a){o=a;const l=[];for(let c=0,u=o.joints.length;c<u;c++)l.push(n.getDependency("node",o.joints[c]));return Promise.all(l)}).then(function(a){return s.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let d=0,h=a.length;d<h;d++){const p=a[d];if(p){c.push(p);const g=new qe;o.inverseBindMatrices!==void 0&&g.fromArray(o.inverseBindMatrices.array,d*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[d])}l.bind(new lh(c,u),l.matrixWorld)}),s})}).then(function(s){e.add(s);const o=[];if(i.children){const a=i.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];o.push(I0(u,s,t,n))}}return Promise.all(o)})}function rT(r,e,t){const n=e.attributes,i=new ki;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new S(l[0],l[1],l[2]),new S(c[0],c[1],c[2])),a.normalized){const u=Yf(sc[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new S,l=new S;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){const y=Yf(sc[h.componentType]);l.multiplyScalar(y)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new No;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function gg(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Xf[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Po(r,e),rT(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?tT(r,e.targets,t):r})}function vg(r,e){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Iu)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s}const Ef=new WeakMap;class xg extends hs{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Ga(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{const a={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(o,a).then(t).catch(i)},n,i)}decodeDracoFile(e,t,n,i){const s={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};this.decodeGeometry(e,s).then(t)}decodeGeometry(e,t){for(const l in t.attributeTypes){const c=t.attributeTypes[l];c.BYTES_PER_ELEMENT!==void 0&&(t.attributeTypes[l]=c.name)}const n=JSON.stringify(t);if(Ef.has(e)){const l=Ef.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[s]={resolve:c,reject:u},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Ef.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Et;e.index&&t.setIndex(new qt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize;t.setAttribute(s,new qt(o,a))}return t}_loadLibrary(e,t){const n=new Ga(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=oT.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function oT(){let r,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(u){r.onModuleLoaded=function(d){u({draco:d})},DracoDecoderModule(r)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const d=u.draco,h=new d.Decoder,p=new d.DecoderBuffer;p.Init(new Int8Array(l),l.byteLength);try{const g=t(d,h,p,c),y=g.attributes.map(b=>b.array.buffer);g.index&&y.push(g.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:g},y)}catch(g){console.error(g),self.postMessage({type:"error",id:a.id,error:g.message})}finally{d.destroy(p),d.destroy(h)}});break}};function t(o,a,l,c){const u=c.attributeIDs,d=c.attributeTypes;let h,p;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)h=new o.Mesh,p=a.DecodeBufferToMesh(l,h);else if(g===o.POINT_CLOUD)h=new o.PointCloud,p=a.DecodeBufferToPointCloud(l,h);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||h.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const y={index:null,attributes:[]};for(const b in u){const v=self[d[b]];let m,M;if(c.useUniqueIDs)M=u[b],m=a.GetAttributeByUniqueId(h,M);else{if(M=a.GetAttributeId(h,o[u[b]]),M===-1)continue;m=a.GetAttribute(h,M)}y.attributes.push(i(o,a,h,b,v,m))}return g===o.TRIANGULAR_MESH&&(y.index=n(o,a,h)),o.destroy(h),y}function n(o,a,l){const u=l.num_faces()*3,d=u*4,h=o._malloc(d);a.GetTrianglesUInt32Array(l,d,h);const p=new Uint32Array(o.HEAPF32.buffer,h,u).slice();return o._free(h),{array:p,itemSize:1}}function i(o,a,l,c,u,d){const h=d.num_components(),g=l.num_points()*h,y=g*u.BYTES_PER_ELEMENT,b=s(o,u),v=o._malloc(y);a.GetAttributeDataArrayForAllPoints(l,d,b,y,v);const m=new u(o.HEAPF32.buffer,v,g).slice();return o._free(v),{name:c,array:m,itemSize:h}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}const Xi=new f0,qf=performance.now(),D0=new Map,Pu=[];Xi.setURLModifier(r=>r&&typeof r=="string"&&r.toLowerCase().endsWith(".png")?r.replace(/\.png$/i,".webp"):r);const yg=Xi.itemStart;Xi.itemStart=function(r){r&&D0.set(r,performance.now()),yg&&yg.call(Xi,r)};Xi.onProgress=(r,e,t)=>{const n=performance.now(),i=D0.get(r)||qf,s=Math.round(n-i),o=r?r.split("/").pop().split("?")[0]:"Asset",a=Pu.findIndex(u=>u["Full URL"]===r),l={Asset:o,Duration:`${s} ms`,DurationMs:s,Progress:`${e}/${t}`,"Full URL":r};a>=0?Pu[a]=l:Pu.push(l);const c=s>500?"color: #ff5555; font-weight: bold;":s>200?"color: #ffae21;":"color: #55ff55;";console.log(`%c[Asset Loader] %c${o}%c loaded in %c${s}ms%c (${e}/${t})`,"color: #91bfff; font-weight: bold;","color: #ffffff; font-weight: bold;","color: #aaaaaa;",c,"color: #888888;")};const _={site:{backgroundColorTop:"#414d4f",backgroundColorBottom:"#394034",backgroundColor:"#414d4f",hoverColorText:"#91bfff"},textures:{disabled:!1,unloadedColor:"#888888"},camera:{fov:24,near:1,far:50,desktop:{position:{x:0,y:16,z:-22},lookAt:{x:0,y:0,z:-1.9}},mobile:{position:{x:0,y:16,z:-22},lookAt:{x:0,y:0,z:-2.25}}},lights:{skyboxRotation:-6,ambient:{color:16777215,intensity:3},directional:{color:16777215,intensity:2.6,position:{x:5,y:5,z:5}}},vignette:{enabled:!0,enabledMobile:!1,offset:1,darkness:1.16},interaction:{spinDuration:1.5,hoverColor3D:"#91bfff",defaultModeShadowBoost:1.6,minDragRadiusThreshold:3.5,rotationDamping:.95,outline:{edgeStrength:3,edgeGlow:1,edgeThickness:2}},plate:{scale:1,yPos:0,color:[.04,.05,.04,.5],glass:{refractionIntensity:.36,ior:1,roughness:.3},rainbow:{intensity:.66,scale:.2,angleFactor:6.6,shimmer:0,shimmerSpeed:0,centerSmoothness:0,centerOffset:[0,0],fresnelMultiply:1,paletteA:[.5,.5,.5],paletteB:[.5,.5,.5],paletteC:[1,1,1],paletteD:[0,.33,.67]}},gel:{glass:{color:"#0c0f16",transmission:0,opacity:.35,ior:1.4,roughness:.3,reflectivity:1,clearcoat:0,clearcoatRoughness:0}},questionBox:{enabled:!0,unloadedColor:14141429,desktop:{position:{x:0,y:1.3,z:0}},mobile:{position:{x:0,y:1.3,z:-3.2}},position:{x:0,y:1.3,z:0},scale:.5,hoverSpinMultiplier:2,glass:{color:16777215,transmission:.8,roughness:.16,ior:1.5,opacity:1,reflectivity:1,clearcoat:0,clearcoatRoughness:0},metal:{color:16777215,metalness:.96,roughness:0,normalScale:1,colorShiftSpeed:.25},rotationSpeedX:.01,rotationSpeedY:.016,billboardRotationY:-90,planeScale:.82,floatFrequency:.003,floatAmplitude:.1,shadowY:.335,shadowScale:1.6,shadowOpacity:.65,hover:{soundEnabled:!0,hoverInVolume:.5,hoverOutVolume:.5,hysteresisRadius:1},shatter:{enabled:!0,shardCount:18,sparkleCount:8,sparkleColors:["#28a200","#ffa527","#3150ff"],minShardScale:.3,maxShardScale:.6,minSparkleScale:1.3,maxSparkleScale:2,explosionSpeed:4,sparkleSpeed:1.5,fadeSpeed:2.5,soundEnabled:!0,volume:.9,growVolume:.4,respawnDelay:100,respawnDuration:400}},houdini3D:{enabled:!0,unloadedColor:1252660,scale:1,rotation:{x:0,y:226,z:0},shadowY:.335,shadowScale:2,shadowOpacity:.36,hoverYOffset:.15,hover:{soundEnabled:!0,hoverInVolume:.16,hoverOutVolume:.2,hysteresisRadius:1.35},material:{color:13421772,specular:2236962,shininess:30},sway:{enabled:!0,pivotOffset:{x:0,y:0,z:0},x:{enabled:!0,amount:7,speed:1,phase:0},y:{enabled:!1,amount:3,speed:1.5,phase:0},z:{enabled:!1,amount:3,speed:1,phase:0}},desktop:{position:{x:4.3,y:.6,z:-2}},mobile:{position:{x:1.3,y:.6,z:-6}},pop:{enabled:!0,popDuration:450,popMultiplier:2.2,easing:"easeOutCubic",sparkleCount:12,minSparkleScale:1,maxSparkleScale:2,sparkleSpeed:3,sparkleColors:["#528ce4","#153d8d","#5d74d4"],soundEnabled:!0,volume:.2,growVolume:.4,respawnDelay:100,respawnDuration:400}},web3D:{enabled:!0,unloadedColor:2900606,scale:.62,rotation:{x:0,y:0,z:0},rotationAxis:"y",rotationSpeedY:.01,floatFrequency:.001,floatAmplitude:.05,hoverScale:1.1,hoverSpinMultiplier:2,hoverYOffset:0,moon:{rotationAxis:"y",rotationSpeed:-.01},signal:{enabled:!0,interval:530,hoverSpeedMultiplier:3.5,clickSpeedMultiplier:12,billboard:!0,billboardRotationX:90,billboardRotationY:0,billboardRotationZ:0},desktop:{position:{x:-4.3,y:1.2,z:2}},mobile:{position:{x:-1.8,y:1.2,z:0}},shadowY:.335,shadowScale:1.4,shadowOpacity:.36,materials:{grid:{color:0,emissive:16777215,emissiveIntensity:1.2,emissiveMap:"./graphics/grid.webp",roughness:.3,metalness:.1},antenna:{color:13421772,roughness:.2,metalness:.9},moon:{color:0,emissive:732799,emissiveIntensity:1,roughness:.6,metalness:0},signal:{color:0,emissive:13491455,emissiveIntensity:1,roughness:.3,metalness:.1}},hover:{soundEnabled:!0,hoverInVolume:.14,hoverOutVolume:.14,hysteresisRadius:1.2},clickAnimation:{enabled:!0,soundEnabled:!0,volume:.26,duration:1e3,clickSpinMultiplier:16,emissiveFlashIntensity:3.5,moonEmissiveFlashIntensity:1.5,godRayCount:26,minRayLength:.5,maxRayLength:1,minRayWidth:.1,maxRayWidth:.2,rayColors:["#ffffff","#21ffd8","#91bfff","#70aaff"],respawnDelay:50,respawnDuration:400}},games3D:{enabled:!0,scale:.086,rotation:{y:90,z:20},lookAtCamera:{enabled:!0,speed:.01},floatFrequency:.002,floatAmplitude:.12,pauseFloatOnHover:!0,poseInterval:700,hoverPoseSpeedMultiplier:3,hoverScale:1.15,hoverYOffset:0,desktop:{position:{x:2,y:1.3,z:4.3}},mobile:{position:{x:1.6,y:1.3,z:2.2}},shadowY:.335,shadowScale:2,shadowOpacity:.55,material:{color:2666173,metalness:.8,roughness:.1},hover:{soundEnabled:!0,hoverInSoundSrc:"sound/gamesHover.mp3",hoverOutSoundSrc:"sound/gamesOut.mp3",hoverInVolume:.1,hoverOutVolume:.1,hoverInCooldown:180,hoverOutCooldown:180,hysteresisRadius:1.5},pop:{enabled:!0,soundEnabled:!0,laserSoundSrc:"sound/lazer.mp3",laserVolume:.35,explodeSoundSrc:"sound/8bitExplode.mp3",explodeVolume:.12,growSoundSrc:"sound/alienGrow.mp3",growVolume:.35,pop0Duration:350,pop1Duration:450,shadowFadeDuration:400,respawnDelay:100,respawnDuration:400,material:{color:16758272,metalness:.8,roughness:.2}}},ar3D:{enabled:!0,unloadedColor:14540287,scale:.44,rotation:{y:-90},walkRadiusX:2.2,walkRadiusZ:2.2,speed:.004,inspectEnabled:!0,initialWalkDelay:4e3,walkDuration:4e3,pauseDuration:3e3,hoverTurnSpeed:400,hoverWalkAnimSpeed:8,idleWalkAnimSpeed:2,animTransitionDuration:.15,floatFrequency:0,floatAmplitude:0,hoverScale:1.075,hoverYOffset:.09,walkRadiusOffsetX:0,walkRadiusOffsetZ:0,showDebug:!1,desktop:{position:{x:-2,y:1.54,z:-4.3}},mobile:{position:{x:-1.4,y:1.54,z:-8.4},walkRadiusX:1.2,walkRadiusZ:1.6,walkRadiusOffsetX:.5,walkRadiusOffsetZ:.8},shadowY:.335,shadowScale:1.4,shadowOpacity:.8,materials:{phone:{color:5857389,roughness:.3,metalness:.8},screen:{color:0,emissive:14540287,emissiveIntensity:1,emissiveMap:"graphics/emojiface.webp",hoverEmissiveMap:"graphics/emojieyes.webp",clickEmissiveMap:"graphics/emojihuh.webp",roughness:.1,metalness:0},camera:{color:3422531,roughness:.1,metalness:.8},cameraHouse:{color:5857389,roughness:.3,metalness:.8},shoes:{color:1450606,roughness:.6,metalness:.2},socks:{color:4473941,roughness:.8,metalness:0}},clickAnimation:{enabled:!0,soundEnabled:!0,soundSrc:"sound/vibration.mp3",volume:.3,duration:800,shakeTransitionDuration:.06},hover:{soundEnabled:!0,hoverInVolume:.35,hoverOutVolume:.25,hoverInSoundSrc:"sound/arHover.mp3",hoverOutSoundSrc:"sound/arOut.mp3",hysteresisRadius:1.4}},linkedin3D:{enabled:!0,unloadedColor:595249,desktop:{spawnPositions:[{x:-5.6,y:.63,z:-4.6},{x:-7.2,y:.63,z:-2.2},{x:5,y:.63,z:4.6},{x:7,y:.63,z:-1.2},{x:.5,y:.63,z:-5.8},{x:-2.8,y:.63,z:4.8}],position:{x:-3.6,y:.63,z:-4.6},walkRadiusX:9,walkRadiusZ:9,minObstacleDist:1},mobile:{spawnPositions:[{x:-2,y:.63,z:-3},{x:2.2,y:.63,z:-2.2},{x:-.2,y:.63,z:3.5}],position:{x:-2,y:.63,z:-6},walkRadiusX:3,walkRadiusZ:9,minObstacleDist:.75},position:{x:-3.6,y:.63,z:-4.6},scale:.166,walkRadiusX:9,walkRadiusZ:9,minObstacleDist:1,speed:.005,shadowY:.335,shadowOpacity:.36,fallRotationSpeedThreshold:2,soundEnabled:!0,fallVolume:.8,fallSoundSrc:"sound/bugFall.mp3",riseVolume:.8,riseSoundSrc:"sound/bugRise.mp3",hoverVolume:.6,hoverSoundSrc:"sound/bugHover.mp3"},boids:{enabled:!0,count:750,yHeight:.37,shadowY:.335,shadowOpacity:.25,shadowScale:2,size:.04,length:.16,maxSpeed:.01,maxForce:5e-4,separationRadius:.25,neighborRadius:.5,separationWeight:1.6,alignmentWeight:.8,cohesionWeight:.6,obstacleAvoidanceWeight:1.75,obstacleAvoidRadius:.8,obstacleLookAhead:1.5,mouseAvoidanceEnabled:!0,cursorAvoidanceWeight:3,cursorAvoidRadius:1.2,desktop:{count:800,walkRadiusX:10,walkRadiusZ:10},mobile:{count:400,walkRadiusX:5,walkRadiusZ:10},walkRadiusX:11,walkRadiusZ:11,colorIntensity:.5,rotationSmoothing:.15,colorSmoothing:.1,material:{roughness:.35,metalness:.5}},renderStyles:{currentModeIndex:0,activeModes:["default","oneBit","pixelated","blueprint","multiBit","gameBoy","ascii"],logoImages:{default:"./graphics/thumbnail_ng_logo.webp",multiBit:"./graphics/thumbnail_ng_logo_dithered_00.webp",oneBit:"./graphics/thumbnail_ng_logo_dithered_01.webp",pixelated:"./graphics/thumbnail_ng_logo_pixelated.webp",gameBoy:"./graphics/thumbnail_ng_logo_gb.webp",blueprint:"./graphics/thumbnail_ng_logo_outline.webp",ascii:"./graphics/thumbnail_ng_logo_ascii.webp"},modeSounds:{default:{src:"sound/rm_wind.mp3",volume:.5},multiBit:{src:"sound/rm_lazer.mp3",volume:.2},oneBit:{src:"sound/rm_123.mp3",volume:.23},pixelated:{src:"sound/rm_pixelate.mp3",volume:.26},gameBoy:{src:"sound/rm_gameboy.mp3",volume:.23},blueprint:{src:"sound/rm_bubble.mp3",volume:.9},ascii:{src:"sound/rm_tone.mp3",volume:.2}},default:{textColor:"#ffffff",hoverColor:"#91bfff",soundSrc:"",soundVolume:.8,shadowBoost:2,hideBoidShadows:!1},multiBit:{colorLevels:4,pixelSize:2,ditherStrength:.25,textColor:"#ffffff",hoverColor:"#aaaaff",soundSrc:"",soundVolume:.8,shadowBoost:1.2,hideBoidShadows:!1},oneBit:{darkColor:"#333319",lightColor:"#e5ffff",pixelSize:2,ditherStrength:.66,textColor:"#ffffff",hoverColor:"#ffffff",soundSrc:"",soundVolume:.8,hideBoidShadows:!0,gelMaterialOverride:{override:!0,type:"unlit",color:"#282828",roughness:1,metalness:0}},pixelated:{pixelSize:8,colorLevels:16,scanlineIntensity:.08,textColor:"#ffffff",hoverColor:"#91bfff",soundSrc:"",soundVolume:.8,shadowBoost:.6,hideBoidShadows:!0,gelMaterialOverride:{override:!0,type:"unlit",color:"#4e4e4e",roughness:1,metalness:0}},gameBoy:{pixelSize:2,hideDish:!1,hideGel:!1,c0:"#0f380f",c1:"#306230",c2:"#76930d",c3:"#adcd1e",textColor:"#ffffff",hoverColor:"#adcd1e",soundSrc:"sound/rm_gameboy.ogg",soundVolume:.8,shadowBoost:.4,hideBoidShadows:!0,boidColorOverride:{override:!0,color:"#d7d7d7"},dishMaterialOverride:{override:!1,type:"unlit",color:"#b3b3b3",roughness:.5,metalness:.1},gelMaterialOverride:{override:!0,type:"unlit",color:"#434343",roughness:.4,metalness:.1},alienMaterialOverride:{override:!0,type:"lit",color:"#2e2e2e",roughness:.1,metalness:0}},blueprint:{bgColor:"#001b3a",lineColor:"#badaff",gridScale:0,textColor:"#ffffff",hoverColor:"#badaff",soundSrc:"",soundVolume:.8,shadowBoost:2,hideBoidShadows:!0,boidColorOverride:{override:!0,type:"unlit",color:"#3a4139"}},ascii:{cellSize:6,colorLevels:256,brightness:1.9,contrast:1.2,characterWeight:1.4,disableVignette:!1,hideShadows:!1,useSolidColor:!1,backgroundColor:"#07070b",debugRawScene:!1,greenTint:"#c3ffc3",textColor:"#ffffff",hoverColor:"#c3ffc3",soundSrc:"",soundVolume:.8,shadowBoost:.8,hideBoidShadows:!0,gelMaterialOverride:{override:!0,type:"unlit",color:"#373737"},alienMaterialOverride:{override:!0,type:"lit",color:"#2e2e2e",roughness:.1,metalness:0}}}},Lf=new Map;function Os(r,e,t,n){if(Lf.has(r)){const s=Lf.get(r);return e&&e(s),s}const i=new ic(Xi).load(r,s=>{if(typeof renderer<"u"&&renderer&&renderer.initTexture)try{renderer.initTexture(s)}catch{}e&&e(s)},t,s=>{n&&n(s)});return Lf.set(r,i),i}function To(r,e,t,n,i="color"){const s=_.textures||{},o=n||s.unloadedColor||"#888888";if(s.disabled)return t&&t[i]&&o!==null&&o!==void 0&&t[i].set(o),null;const a=i==="color"?"map":i==="emissive"?"emissiveMap":i;return Os(e,l=>{t&&a&&(t[a]=l,t.needsUpdate=!0)},void 0,l=>{console.warn(`[loadColorMap] Failed to load texture "${e}". Applying unloaded color (${o}).`),t&&(t[a]!==void 0&&(t[a]=null),t[i]&&o!==null&&o!==void 0&&t[i].set(o),t.needsUpdate=!0)})}const N0="./graphics/thumbnail_ng_logo.webp";document.getElementById("logo").href=N0;function B0(r,e){r&&(r.style.webkitMaskImage=`url("${e}")`,r.style.maskImage=`url("${e}")`,r.style.webkitMaskSize="contain",r.style.maskSize="contain",r.style.webkitMaskRepeat="no-repeat",r.style.maskRepeat="no-repeat",r.style.webkitMaskPosition="center",r.style.maskPosition="center",r.style.backgroundColor="currentColor")}const aT=document.getElementById("logolink");B0(aT,N0);function ko(r){if(!r)return;const e=new Image;e.src=r}const Pf={};function lT(){_&&_.renderStyles&&_.renderStyles.logoImages&&Object.values(_.renderStyles.logoImages).forEach(r=>{r&&!Pf[r]&&(ko(r),Pf[r]=new Image,Pf[r].src=r)})}lT();ko("./graphics/portrait.webp");ko("./graphics/games_logo.webp");ko("./graphics/web_logo.webp");ko("./graphics/houdini_logo.webp");ko("./graphics/ar_logo.webp");ko("./graphics/ar_games_icon.webp");document.getElementById("title").innerHTML="Noah Gunther | Portfolio";const cT='<div id="houdini" class="link" style="pointer-events: auto;">Houdini</div> <div id="web" class="link" style="pointer-events: auto;">Web</div> <div id="games" class="link" style="pointer-events: auto;">Games</div> <div id="ar" class="link" style="pointer-events: auto;">AR</div> <div id="about" class="link" style="pointer-events: auto;">About</div>';document.getElementById("mainnavlinks").innerHTML=cT;const uT=`<div class="mobilemenuwrapper"><div class="mobilelinkwrapper"><div id="aboutmobile" class="mobilelink">About</div></div> <div class="mobilelinkwrapper"><div id="armobile" class="mobilelink">AR</div></div> <div class="mobilelinkwrapper"><div id="gamesmobile" class="mobilelink">Games</div></div> <div class="mobilelinkwrapper"><div id="webmobile" class="mobilelink">Web</div></div> <div class="mobilelinkwrapper"><div id="houdinimobile" class="mobilelink">Houdini</div></div></div><div id="linkedin-mobile-wrapper"><a id="linkedin-mobile" href="https://www.linkedin.com/in/noah-gunther-3128bb185/" target="_blank"><div id="linkedin-mobile-icon" class="logo-tint-mask" style="-webkit-mask-image: url('graphics/li_logo_white.webp'); mask-image: url('graphics/li_logo_white.webp'); width: 100%; height: 100%;"></div></a></div>`;document.getElementById("mobilenavlinks").innerHTML=uT;function Bi(r,e){var t=Date.now,n=window.requestAnimationFrame,i=t(),s,o=function(){t()-i<e?s||n(o):r()};return n(o),{clear:function(){s=1}}}var Zn="main",ft=!1;window.addEventListener("load",dT,!1);function dT(){const r=window.innerWidth<=window.innerHeight,e=document.getElementById("body");_.interaction&&_.site.hoverColorText&&document.documentElement.style.setProperty("--hover-color",_.site.hoverColorText);const t=document.getElementById("loading"),n=document.getElementById("bg");if(_.site.backgroundColorTop&&_.site.backgroundColorBottom){const f=`linear-gradient(to bottom, ${_.site.backgroundColorTop}, ${_.site.backgroundColorBottom})`;t&&(t.style.background=f),n&&(n.style.background=f),document.body.style.background="transparent"}else t&&(t.style.backgroundColor=_.site.backgroundColor),n&&(n.style.backgroundColor=_.site.backgroundColor);t&&(t.style.background="rgb(10, 14, 18)");const i=t?Array.from(t.querySelectorAll(".loading-dot")):[];let s=0,o=null;i.length>0&&(o=setInterval(()=>{s=s%i.length+1,s>i.length&&(s=1),i.forEach((f,x)=>{f.style.color=x<s?"rgba(255,255,255,0.9)":""})},180));const a=document.getElementById("mainnavlinks"),l=document.getElementById("home"),c=document.getElementById("about"),u=document.getElementById("ar"),d=document.getElementById("games"),h=document.getElementById("web"),p=document.getElementById("houdini"),g=document.getElementById("mobilenavmenu"),y=document.getElementById("aboutmobile"),b=document.getElementById("armobile"),v=document.getElementById("gamesmobile"),m=document.getElementById("webmobile"),M=document.getElementById("houdinimobile"),L=document.getElementById("mobilenavlinksbutton"),C=document.getElementById("mobilenavlinksbuttontop"),w=document.getElementById("mobilenavlinksbuttonmiddle"),F=document.getElementById("linkedin-desktop"),B=document.getElementById("linkedin-mobile"),D={about:{desktop:c,mobile:y},ar:{desktop:u,mobile:b},games:{desktop:d,mobile:v},web:{desktop:h,mobile:m},houdini:{desktop:p,mobile:M},linkedin:{desktop:F,mobile:B}},V=document.getElementById("mobilenavlinksbuttonbottom"),Y=document.getElementById("phonescreen");document.getElementById("mobilearprojectsheader"),document.getElementById("mobilearscrollwrapper");const q=document.getElementById("mobilearprojectsheaderclock");document.getElementById("leftarrow");const I=document.getElementById("leftarrowfront"),H=document.getElementById("aboutmepanel"),U=document.getElementById("downarrow"),z=document.getElementById("downarrowfront");H&&(H.style.visibility="hidden"),U&&(U.style.visibility="hidden");const ne=document.createElement("div"),pe=document.createElement("div"),le=document.createElement("section"),ze=document.createElement("div"),Ee=document.createElement("div"),Ke=document.createElement("button");ne.className="about-overlay",pe.className="about-overlay__blur",le.className="about-panel",ze.className="about-panel__surface",Ee.className="about-panel__content",Ke.className="about-panel__close";const Qe="http://www.w3.org/2000/svg",ie=document.createElementNS(Qe,"svg"),Bt=document.createElementNS(Qe,"path"),bt=document.createElementNS(Qe,"path"),st=document.createElementNS(Qe,"path"),Ze=document.createElementNS(Qe,"path");ie.setAttribute("class","about-panel__border-svg"),ie.setAttribute("aria-hidden","true"),[Bt,bt,st,Ze].forEach(f=>{f.setAttribute("class","about-panel__border-path"),f.setAttribute("pathLength","1"),ie.appendChild(f)});function vt(){const f=ie.clientWidth,x=ie.clientHeight;if(!f||!x)return;const A=8,N=.5,W=26;Bt.setAttribute("d",[`M ${f/2},${N}`,`L ${A+N},${N}`,`A ${A},${A} 0 0 0 ${N},${A+N}`,`L ${N},${x/2}`].join(" ")),bt.setAttribute("d",[`M ${f/2},${N}`,`L ${f-W},${N}`].join(" ")),st.setAttribute("d",[`M ${f/2},${x-N}`,`L ${A+N},${x-N}`,`A ${A},${A} 0 0 1 ${N},${x-A-N}`,`L ${N},${x/2}`].join(" ")),Ze.setAttribute("d",[`M ${f/2},${x-N}`,`L ${f-A-N},${x-N}`,`A ${A},${A} 0 0 0 ${f-N},${x-A-N}`,`L ${f-N},${W}`].join(" "))}const yt=document.createElement("div"),mt=document.createElement("div");yt.className="about-panel__scroll-fade",mt.className="about-panel__scroll-arrow",mt.setAttribute("aria-hidden","true"),mt.innerHTML=`
    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2L9 8L16 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;function ge(){if(!Ee)return;const{scrollTop:f,scrollHeight:x,clientHeight:A}=Ee,N=x>A+4&&x-A-f>8;yt.classList.toggle("is-visible",N),mt.classList.toggle("is-visible",N)}Ee.addEventListener("scroll",ge,{passive:!0}),window.ResizeObserver&&le&&new ResizeObserver(()=>{(hi||Ei)&&(vt(),ge())}).observe(le),Ee.innerHTML=`
    <h1 class="about-panel__title">About</h1>
    <div class="about-panel__portrait-wrapper">
      <img src="./graphics/portrait.webp" alt="Noah Gunther Self Portrait" class="about-panel__portrait" />
    </div>
    <p class="about-panel__email"><a href="mailto:noah.gunther@gmail.com">noah.gunther@gmail.com</a></p>
    <p class="about-panel__body">I'm a Technical Artist and Creative Coder with a focus on 3D graphics and rendering. I've worked in web development, VR, mobile AR, game development, and offline rendered video.</p>
    <br/>
    <p class="about-panel__body">My work involves writing code and creating graphics for immersive media, as well as creating tools for artists and building more experimental projects such as AI-driven gameplay and Gaussian Splat pipelines.</p>
  `,Ke.type="button",Ke.setAttribute("aria-label","Close about panel"),Ke.innerHTML=`
    <span class="about-panel__close-bar about-panel__close-bar--top"></span>
    <span class="about-panel__close-bar about-panel__close-bar--bottom"></span>
  `,le.appendChild(ze),le.appendChild(ie),le.appendChild(Ke),le.appendChild(Ee),le.appendChild(yt),le.appendChild(mt),ne.appendChild(pe),ne.appendChild(le),document.body.appendChild(ne);function ye(f){const{name:x,title:A,subtitle:N,headerImageSrc:W,headerImageAlt:te,headerImageClass:ee,videoSrc:Z,bodyHtml:be}=f,Le=document.createElement("div"),ke=document.createElement("div"),Re=document.createElement("section"),Oe=document.createElement("div"),He=document.createElement("div"),gt=document.createElement("button");Le.className=`about-overlay ${x}-overlay`,ke.className="about-overlay__blur",Re.className=`about-panel ${x}-panel`,Oe.className="about-panel__surface",He.className="about-panel__content",gt.className="about-panel__close";let nt=null,it=null;const zt=Z!==void 0?Z:"./reels/ar.webm";zt&&(nt=document.createElement("div"),nt.className="about-panel__header-video-wrapper",nt.innerHTML=`
        <video src="${zt}" loop muted playsinline preload="none" class="about-panel__header-video"></video>
        <div class="about-panel__header-video-fade"></div>
      `,it=nt.querySelector("video"),it&&(it.preload="none",it.addEventListener("waiting",()=>{Le.classList.contains("is-visible")&&it.play().catch(()=>{})}),it.addEventListener("stalled",()=>{Le.classList.contains("is-visible")&&(it.load(),it.play().catch(()=>{}))})));function Lt(){if(it)try{it.readyState<2&&it.load(),it.currentTime=0;const Q=it.play();Q!==void 0&&Q.catch(()=>{})}catch{}}function Pt(){if(it)try{it.pause(),it.currentTime=0}catch{}}it&&window.MutationObserver&&new MutationObserver(_e=>{_e.forEach(G=>{G.attributeName==="class"&&(Le.classList.contains("is-visible")?Lt():Pt())})}).observe(Le,{attributes:!0});const ut=document.createElementNS(Qe,"svg"),dt=document.createElementNS(Qe,"path"),At=document.createElementNS(Qe,"path"),nn=document.createElementNS(Qe,"path"),It=document.createElementNS(Qe,"path");ut.setAttribute("class","about-panel__border-svg"),ut.setAttribute("aria-hidden","true"),[dt,At,nn,It].forEach(Q=>{Q.setAttribute("class","about-panel__border-path"),Q.setAttribute("pathLength","1"),ut.appendChild(Q)});function Se(){const Q=ut.clientWidth,_e=ut.clientHeight;if(!Q||!_e)return;const G=8,de=.5,fe=26;dt.setAttribute("d",[`M ${Q/2},${de}`,`L ${G+de},${de}`,`A ${G},${G} 0 0 0 ${de},${G+de}`,`L ${de},${_e/2}`].join(" ")),At.setAttribute("d",[`M ${Q/2},${de}`,`L ${Q-fe},${de}`].join(" ")),nn.setAttribute("d",[`M ${Q/2},${_e-de}`,`L ${G+de},${_e-de}`,`A ${G},${G} 0 0 1 ${de},${_e-G-de}`,`L ${de},${_e/2}`].join(" ")),It.setAttribute("d",[`M ${Q/2},${_e-de}`,`L ${Q-G-de},${_e-de}`,`A ${G},${G} 0 0 0 ${Q-de},${_e-G-de}`,`L ${Q-de},${fe}`].join(" "))}const T=document.createElement("div"),j=document.createElement("div");T.className="about-panel__scroll-fade",j.className="about-panel__scroll-arrow",j.setAttribute("aria-hidden","true"),j.innerHTML=`
      <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L9 8L16 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;function $(){if(!He)return;const{scrollTop:Q,scrollHeight:_e,clientHeight:G}=He,de=_e>G+4&&_e-G-Q>8;T.classList.toggle("is-visible",de),j.classList.toggle("is-visible",de)}He.addEventListener("scroll",$,{passive:!0}),window.ResizeObserver&&Re&&new ResizeObserver(()=>{Se(),$()}).observe(Re);let O="";if(W){const Q=ee?`about-panel__portrait ${ee}`:"about-panel__portrait";O=`
        <div class="about-panel__portrait-wrapper">
          <img src="${W}" alt="${te||A}" class="${Q}" />
        </div>
      `}return He.innerHTML=`
      <h1 class="about-panel__title">${A}</h1>
      <p class="about-panel__email" style="color: var(--hover-color, #ffae21); margin-top: 6px; margin-bottom: 12px; font-weight: 500;">${N}</p>
      ${O}
      ${be}
    `,gt.type="button",gt.setAttribute("aria-label",`Close ${x} panel`),gt.innerHTML=`
      <span class="about-panel__close-bar about-panel__close-bar--top"></span>
      <span class="about-panel__close-bar about-panel__close-bar--bottom"></span>
    `,Re.appendChild(Oe),Re.appendChild(ut),Re.appendChild(gt),nt&&He.insertBefore(nt,He.firstChild),Re.appendChild(He),Re.appendChild(T),Re.appendChild(j),Le.appendChild(ke),Le.appendChild(Re),document.body.appendChild(Le),{overlay:Le,blur:ke,panel:Re,panelContent:He,closeButton:gt,updateBorderPaths:Se,updateScrollIndicators:$,videoEl:it,playHeaderVideo:Lt,pauseHeaderVideo:Pt}}const Pe=ye({name:"ar",title:"AR",subtitle:"Augmented Reality Social Experiences & Games",videoSrc:"./reels/ar.webm",headerImageSrc:"./graphics/ar_logo.webp",headerImageAlt:"AR Logo",headerImageClass:"about-panel__portrait--logo",bodyHtml:`
      <p class="about-panel__body">A selection of my work on social AR experiences and games. I led technical development for these experiences, writing interaction code, shaders, and developing render pipelines.</p>
      
      <hr class="about-panel__dotted-divider" />
      
      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/social_ar_icon.webp" alt="Social AR" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Social AR</h2>
          <p class="about-panel__project-desc">Real-time social experiences built to enhance and experiment with the group video calling format.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>
      
      <hr class="about-panel__dotted-divider" />
      
      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/ar_games_icon.webp" alt="AR Games" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">AR Games</h2>
          <p class="about-panel__project-desc">Networked AR minigames, uniquely designed and developed for group video calls.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>
    `}),{overlay:Ye,blur:Be,panel:R,closeButton:P,updateBorderPaths:re,updateScrollIndicators:oe,playHeaderVideo:Ne,pauseHeaderVideo:je}=Pe,rt=ye({name:"games",title:"Games",subtitle:"Real-Time Interactive & Game Development",videoSrc:"./reels/games.webm",headerImageSrc:"./graphics/games_logo.webp",headerImageAlt:"Games Logo Placeholder",headerImageClass:"about-panel__portrait--logo",bodyHtml:`
      <p class="about-panel__body">Interactive gameplay experiences, real-time shaders, and custom game mechanics built for VR, desktop, web, and mobile environments.</p>
      
      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/dronedelivery.webp" alt="Drone Delivery" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Drone Delivery</h2>
          <p class="about-panel__project-desc">Breakdown of a slice of a delivery drone flying game.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/metahorizon.webp" alt="Meta Reality Labs | Horizon" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Meta Reality Labs | Horizon</h2>
          <p class="about-panel__project-desc">My work on graphics, gameplay, avatars, and more at Meta RL.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/ar_games_icon.webp" alt="AR Games" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">AR Games</h2>
          <p class="about-panel__project-desc">Multiplayer networked AR games built for mobile.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/tokenmon.webp" alt="Tokenmon" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Tokenmon</h2>
          <p class="about-panel__project-desc">A card game where players generate and battle cards by describing them using AI.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/horsecorpse.webp" alt="Horse Corpse Adventure Game" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Horse Corpse Adventure Game</h2>
          <p class="about-panel__project-desc">One of my first game projects, a text based adventure game for web.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>
    `}),We=ye({name:"web",title:"Web",subtitle:"Interactive Web & 3D Experiences",videoSrc:"./reels/web.webm",headerImageSrc:"./graphics/web_logo.webp",headerImageAlt:"Web Logo Placeholder",headerImageClass:"about-panel__portrait--logo",bodyHtml:`
      <p class="about-panel__body">Web projects, primarily focused on interactive threejs experiences, webgl shaders, and data visualization.</p>
      
      <hr class="about-panel__dotted-divider" />
      
      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/gridcity.webp" alt="Grid City" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Grid City</h2>
          <p class="about-panel__project-desc">Breakdown of a 3D raymarching shader on Shadertoy.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>
      
      <hr class="about-panel__dotted-divider" />
      
      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/mta.webp" alt="Lately on the MTA" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Lately on the MTA</h2>
          <p class="about-panel__project-desc">My entry in the 2024 MTA Open Data Challenge, winning "most visually appealing."</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>
      
      <hr class="about-panel__dotted-divider" />
      
      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/jetski.webp" alt="Threejs Jetski Portfolio" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Threejs Jetski Portfolio</h2>
          <p class="about-panel__project-desc">Info on my previous portfolio site built with threejs. 3D art, animation created in collaboration with Cody Drake.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
          <a href="#" class="about-panel__project-link">Project Breakdown &gt;</a>
        </div>
      </div>
      
      <hr class="about-panel__dotted-divider" />
      
      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/shadertoy.webp" alt="Shadertoy" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Shadertoy</h2>
          <p class="about-panel__project-desc">My Shadertoy profile, featuring a collection of my GLSL shaders.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>
      
      <hr class="about-panel__dotted-divider" />
      
      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/fireworks.webp" alt="Interactive Fireworks" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Interactive Fireworks</h2>
          <p class="about-panel__project-desc">An interactive tool for creating and sharing threejs firework displays.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>
      
      <hr class="about-panel__dotted-divider" />
      
      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/horsecorpse.webp" alt="Horse Corpse Adventure Game" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Horse Corpse Adventure Game</h2>
          <p class="about-panel__project-desc">A text-based adventure game created with Twine in 2017, based on the Horse Corpse Rock Opera by Kip Hathaway.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>
      
      <hr class="about-panel__dotted-divider" />
      
      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/wordpress.webp" alt="Wordpress Gallery" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Wordpress Gallery</h2>
          <p class="about-panel__project-desc">A gallery of smaller projects and older work.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>
    `}),k=ye({name:"houdini",title:"Houdini",subtitle:"Procedural Graphics, Tools, & VFX Pipelines",videoSrc:"./reels/houdini.webm",headerImageSrc:"./graphics/houdini_logo.webp",headerImageAlt:"Houdini Logo",headerImageClass:"about-panel__portrait--logo",bodyHtml:`
      <p class="about-panel__body">Procedural geometry generation, particle dynamics, and simulation pipelines created with SideFX Houdini.</p>
      <br/>
      <p class="about-panel__body">Building procedural assets, custom digital assets (HDAs), and automated graphics pipelines for real-time graphics and offline rendered sequences. My more recent work in Houdini has focused on pipelines for creating Gaussian Splatting (GSplats) assets.</p>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/droplets.webp" alt="Droplets Tool" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Droplets Tool</h2>
          <p class="about-panel__project-desc">SOP-based tool without fluid simulation that dynamically creates droplet geometry and a wetmap texture on any geometry surface.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/vines.webp" alt="Vines Tool" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Vines Tool</h2>
          <p class="about-panel__project-desc">An HDA for procedurally growing vines on any input geometry, that grow based on paramters such as light orientation and surface attraction.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/robotartist.webp" alt="Robot Artist" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Robot Artist</h2>
          <p class="about-panel__project-desc">A virtual robot that procedurally draws 2D images of 3D meshes, and sometimes gets abstract.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/houdinipipes.webp" alt="Pipe Dream Houdini" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Pipe Dream Houdini</h2>
          <p class="about-panel__project-desc">A procedural animation project recreating the classic Microsoft "Pipe Dream" screensaver using VEX and Python.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/volcano.webp" alt="Volcanic Eruption" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Volcanic Eruption</h2>
          <p class="about-panel__project-desc">A volcanic eruption animation using pyro and fluid simulation, and a custom lightning tool created with VEX.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/stainedglass.webp" alt="Stained Glass Tool" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Stained Glass Tool</h2>
          <p class="about-panel__project-desc">An HDA that created stained glass geometry from image inputs.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/houdinifireworks.webp" alt="Interactive Fireworks" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Interactive Fireworks</h2>
          <p class="about-panel__project-desc">A Python/VEX based tool to interactively create animated fireworks.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>

      <hr class="about-panel__dotted-divider" />

      <div class="about-panel__project-section">
        <a href="#" class="about-panel__project-icon-link">
          <img src="./graphics/wordpress.webp" alt="Wordpress Gallery" class="about-panel__project-icon" />
        </a>
        <div class="about-panel__project-info">
          <h2 class="about-panel__project-title">Wordpress Gallery</h2>
          <p class="about-panel__project-desc">A gallery of smaller projects and older work largely created with Houdini.</p>
          <a href="#" class="about-panel__project-link">View Project &gt;</a>
        </div>
      </div>
    `}),Te=document.getElementById("bg"),Ie=new S(0,1,0),Ue=32,ce=new Int32Array(Ue*Ue);let lt=new Int32Array(512);const kt=new io(0,0,0,"YXZ"),an=new _n,ps=new io(0,0,0,"YXZ"),ln=new _n,yi=new _n,ni=new S,oc=new S,br=new S,ac=new S(0,1,0),Qi=new S,Oo=new S,$a=new S,ms=new S,ro=new S,Ja=new S,Qs=new S,lc=new qe,cc=new qe;let E,J,X=null,K=null,ve=null,$e=new Su,ot=new ae(-9999,-9999),_t=-9999,Wt=-9999;var xt=-99999,Ct=-99999,ct=!1,Ot=new ae,_i=new ae,Fn=new Su;let Xn=null,Zt=!1,ii=!1,tn=!1,Zi=null,zn=!1,si=!1,uc=!1,Ka=!1,el=!1,Mh=!1,Sh=!1,qu=!1,ju=!1,Qu=!1,ht=null,bi=null,Zs=null,Zu=null,$u=null,Ju=null,Ah=0,gs=null,dc=null,$s=null,Th=null,zo=null,fc=null,Oi=!1,wr=!1,Js=!1,Ku=0,Uo=0,Un=null,oo=[],et=null,vs=null,hc=null,ed=null,pc=null,ao=null,tl=null,nl=null,Ho=null,En=null,ri=null,mc=null,td=null,lo=null,gc=null,vc=null,oi=null,$i=null,wi=null,xs=null,Ks=0;const bn=new Ht,il=new S,xc=new S,sl=new S,er=new S,Mr=new S,Sr=new S,k0=new S,ys=new S,Ji=new S,Ar=new _n,Eh=new _n,Tr=new _n,Lh=new S(0,0,1),yc=new se,Er=new se,Ph=new us,Go=new S,Ch=new Su;let Ce=null,Ki=null,es=null,fi=null,Mi=null,cn=null,Lr=null,Vo=null,rl=null,co=!1,Pr=!1,Rh=!1,ol=!1,we=null,uo=null,Wo=null,Si=null,Xo=null,_c=null,Yo=null,qo=null,Ai=null,_s=null,Cr=null,zi=!1,al=!1,nd=0,Ti=0,id=!1,Rr=[],fo=null,Fr=null,Ir=null,Yn=null,bc=0,wc=0,bs="inspecting",Fh=!1,Ih=!1,ll=0,jo=0,cl=0,Qo=0,Dr=null,Nr=[],Ui=null,Mc=null,ul=!1,tr=!1,Zo=!1,dl=!1,$o=null;function Jo(f){f&&(Si&&(Si.emissiveMap=f,Si.needsUpdate=!0),uo&&uo.material&&(Array.isArray(uo.material)?uo.material.forEach(x=>{x&&(x.emissiveMap=f,x.needsUpdate=!0)}):(uo.material.emissiveMap=f,uo.material.needsUpdate=!0)),we&&we.traverse(x=>{x.isMesh&&x.material&&(Array.isArray(x.material)?x.material.forEach(A=>{A&&(A===Si||A.name&&A.name.toLowerCase().includes("screen"))&&(A.emissiveMap=f,A.needsUpdate=!0)}):(x.material===Si||x.material.name&&x.material.name.toLowerCase().includes("screen"))&&(x.material.emissiveMap=f,x.material.needsUpdate=!0))}))}let ts=!1,Dh=0,ns=0,sd=!1,rd=!1,Nh=0,Bh=0;const kh=new S;let nr=null,fl=0,Br=!1,kr=null,hl=[],pl=[],ws=0,od=!1,is=!1,Or=null,Ko=[],Oh=0,Ms=0,ad=!1,hi=!1,Ei=!1,Li=!1,Hi=!1,Ss=!1,ir=!1,As=!1,sr=!1,Ts=!1,rr=!1,ld=!1,cd=!1,ud=!1,dd=!1,ea=null,zh=performance.now(),Uh=!1,Sc=Math.random()*Math.PI*2,Ac=0,zr=null,fd=null,ml=null,ta=null,na=null,hd=null,Pi="idle",ho=0;function Hh(){const f=_.linkedin3D;if(!f)return{x:-3.6,y:.63,z:-4.6};if(f._selectedSpawnPos)return f._selectedSpawnPos;const A=typeof r<"u"&&r?f.mobile:f.desktop;if(A&&Array.isArray(A.spawnPositions)&&A.spawnPositions.length>0){const N=Math.floor(Math.random()*A.spawnPositions.length);return f._selectedSpawnPos=A.spawnPositions[N],f._selectedSpawnPos}return A&&A.position?(f._selectedSpawnPos=A.position,f._selectedSpawnPos):f.position||{x:-3.6,y:.63,z:-4.6}}function Gh(){const f=_.linkedin3D;if(!f)return{rx:9,rz:9};if(typeof r<"u"&&r&&f.mobile){const x=f.mobile.walkRadiusX,A=f.mobile.walkRadiusZ;return{rx:x,rz:A}}if(f.desktop){const x=f.desktop.walkRadiusX,A=f.desktop.walkRadiusZ;return{rx:x,rz:A}}return{rx:f.walkRadiusX,rz:f.walkRadiusZ}}function or(){const f=_.linkedin3D;return f?typeof r<"u"&&r&&f.mobile?f.mobile.minObstacleDist:f.desktop?f.desktop.minObstacleDist:f.minObstacleDist:1}const Tc=new S,Ec=new S,O0=new S,z0=new S,U0=new S,H0=new S,Vh=new S,G0=new S,V0=new S,Wh=new S,W0=new S,Lc=new S,Es=new S,gl=new S,vl=new S,Ls=new S,pd=new S,md=[],gd=[],vd=[],xd=[],yd=[],_d=[];let Pc=!1,bd=0,Cc=-1,po=null,pi=null,Ps=null,at=null,wn=null,ia=null,tt=null,vn=null,Cs=null,Rc=null,Xh=[],ss=null,Xe=null;const Rs=new rh;Rs.background=null;const pt=new ci;Rs.add(pt);const Ft=new Kn(_.camera.fov,window.innerWidth/window.innerHeight,_.camera.near,_.camera.far);Ft.position.z=7;const Ur=/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window&&navigator.maxTouchPoints>0,Mn=new Qt({canvas:Te,antialias:!0,alpha:!0});Mn.setSize(window.innerWidth,window.innerHeight),Mn.setPixelRatio(Math.min(window.devicePixelRatio,1));const Yh=new kg(window.innerWidth,window.innerHeight,{minFilter:en,magFilter:en,format:ui});Yh.samples=4;const wd=new PA(Mn);wd.compileEquirectangularShader(),new OA(Xi).setDataType(Hs).load("graphics/sky.hdr",f=>{f.wrapS=xr,f.offset.x=_.lights.skyboxRotation/360;const x=wd.fromEquirectangular(f).texture;Rs.environment=x,f.dispose(),wd.dispose()});const X0=new M0(_.lights.ambient.color,_.lights.ambient.intensity);Rs.add(X0);const qh=new gh(_.lights.directional.color,_.lights.directional.intensity);qh.position.set(_.lights.directional.position.x,_.lights.directional.position.y,_.lights.directional.position.z),Rs.add(qh);const Gi=new NA(Mn,Yh),Y0=new BA(Rs,Ft);Gi.addPass(Y0);const mi=new Ws(new ae(window.innerWidth,window.innerHeight),Rs,Ft);Gi.addPass(mi);const Ci=new Ws(new ae(window.innerWidth,window.innerHeight),Rs,Ft);Gi.addPass(Ci);const Ri=new Ws(new ae(window.innerWidth,window.innerHeight),Rs,Ft);Gi.addPass(Ri);let mo=null;if(!Ur){mo=new Yl(kA);const f=Mn.getPixelRatio();mo.material.uniforms.resolution.value.x=1/(window.innerWidth*f),mo.material.uniforms.resolution.value.y=1/(window.innerHeight*f),Gi.addPass(mo)}function jh(f,x,A){const N=f.depthMaterial||f.materialDepth,W=f.prepareMaskMaterial||f.materialPrepareMask;N&&(N.skinning=x,N.morphTargets=A,N.needsUpdate=!0),W&&(W.skinning=x,W.morphTargets=A,W.vertexShader=`
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
      `,W.needsUpdate=!0)}jh(Ci,!0,!1),jh(Ri,!1,!0),[mi,Ci,Ri].forEach(f=>{f.enabled=!1,f.edgeStrength=6,f.edgeGlow=1,f.edgeThickness=2,f.visibleEdgeColor.set("#ffffff"),f.hiddenEdgeColor.set("#000000")});function $t(){[mi,Ci,Ri].forEach(f=>{f.selectedObjects=[],f.enabled=!1})}function Md(f,x){$t();const A=Array.isArray(f)?f:[f];mi.selectedObjects=A,mi.visibleEdgeColor.set(x),mi.enabled=A.length>0}function Qh(f,x){$t();const A=Array.isArray(f)?f:[f];Ci.selectedObjects=A,Ci.visibleEdgeColor.set(x),Ci.enabled=A.length>0}function q0(f,x){$t();const A=Array.isArray(f)?f:[f];Ri.selectedObjects=A,Ri.visibleEdgeColor.set(x),Ri.enabled=A.length>0}function j0(f,x){const A=Mn.getPixelRatio();[mi,Ci,Ri].forEach(N=>{typeof N.setSize=="function"&&N.setSize(f*A,x*A)}),Xe&&Xe.uniforms.resolution&&Xe.uniforms.resolution.value.set(f*A,x*A)}const Q0={uniforms:{tDiffuse:{value:null},offset:{value:_.vignette.offset},darkness:{value:_.vignette.darkness},colorTop:{value:new se(_.site.backgroundColorTop)},colorBottom:{value:new se(_.site.backgroundColorBottom)},vignetteEnabled:{value:window.innerWidth<=window.innerHeight?_.vignette.enabledMobile:_.vignette.enabled},useSolidBackground:{value:!1},solidBackgroundColor:{value:new se(328968)}},vertexShader:`
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
    `};ss=new Yl(Q0),Gi.addPass(ss);const Z0={uniforms:{tDiffuse:{value:null},resolution:{value:new ae(window.innerWidth,window.innerHeight)},mode:{value:0},uTime:{value:0},colorLevels:{value:6},pixelSize:{value:2},ditherStrength:{value:.25},darkColor:{value:new se(328976)},lightColor:{value:new se(15132410)},pixelatedPixelSize:{value:4},pixelatedColorLevels:{value:16},scanlineIntensity:{value:.08},gbPixelSize:{value:3},gbC0:{value:new se(997391)},gbC1:{value:new se(3170864)},gbC2:{value:new se(9153551)},gbC3:{value:new se(10206223)},vhsAberration:{value:.006},vhsJitter:{value:.003},vhsNoise:{value:.12},halftoneScale:{value:4},halftoneAngle:{value:.785398},blueprintBg:{value:new se(6970)},blueprintLine:{value:new se(61695)},blueprintGrid:{value:32},thC0:{value:new se(51)},thC1:{value:new se(5570696)},thC2:{value:new se(13369446)},thC3:{value:new se(16746496)},thC4:{value:new se(16777215)},asciiCellSize:{value:8},asciiColorLevels:{value:4},asciiBrightness:{value:1.1},asciiContrast:{value:1.8},asciiCharacterWeight:{value:1.3},asciiUseSolidColor:{value:!0},asciiDebugRawScene:{value:!1},asciiColor:{value:new se(65382)},anaglyphShift:{value:.005}},vertexShader:`
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
    `};Xe=new Yl(Z0),Gi.addPass(Xe);let Hn,Fc;const $0={uTime:{value:0},uRainbowIntensity:{value:_.plate.rainbow.intensity},uRainbowScale:{value:_.plate.rainbow.scale},uRainbowAngleFactor:{value:_.plate.rainbow.angleFactor},uRainbowShimmer:{value:_.plate.rainbow.shimmer},uRainbowShimmerSpeed:{value:_.plate.rainbow.shimmerSpeed},uRainbowCenterSmoothness:{value:_.plate.rainbow.centerSmoothness},uRainbowCenterOffset:{value:new ae(..._.plate.rainbow.centerOffset)},uPaletteA:{value:new S(..._.plate.rainbow.paletteA)},uPaletteB:{value:new S(..._.plate.rainbow.paletteB)},uPaletteC:{value:new S(..._.plate.rainbow.paletteC)},uPaletteD:{value:new S(..._.plate.rainbow.paletteD)},uRainbowFresnelMultiply:{value:_.plate.rainbow.fresnelMultiply},uSkyboxRotation:{value:_.lights.skyboxRotation*Math.PI/180}},Zh=new Co({color:new se(..._.plate.color.slice(0,3)),transmission:_.plate.glass.refractionIntensity,opacity:1,transparent:!0,roughness:_.plate.glass.roughness,metalness:.05,ior:_.plate.glass.ior,side:xn,depthWrite:!0});Zh.onBeforeCompile=f=>{Object.assign(f.uniforms,$0),Hn=f;let x=Tt.envmap_physical_pars_fragment;x=x.replace(/vec4\s+envMapColor\s*=\s*textureCubeUV\s*\(\s*envMap\s*,\s*reflectVec\s*,\s*roughness\s*\)\s*;/g,"vec4 envMapColor = textureCubeUV( envMap, rotateY(reflectVec, uSkyboxRotation), roughness );"),x=x.replace(/vec4\s+envMapColor\s*=\s*textureCubeUV\s*\(\s*envMap\s*,\s*worldNormal\s*,\s*1\.0\s*\)\s*;/g,"vec4 envMapColor = textureCubeUV( envMap, rotateY(worldNormal, uSkyboxRotation), 1.0 );"),f.fragmentShader=f.fragmentShader.replace("#include <envmap_physical_pars_fragment>",`uniform float uSkyboxRotation;
       vec3 rotateY(vec3 v, float angle) {
         float c = cos(angle);
         float s = sin(angle);
         return vec3(v.x * c - v.z * s, v.y, v.x * s + v.z * c);
       }
       ${x}`),f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
       varying vec2 vLocalPosition;`),f.vertexShader=f.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       vLocalPosition = position.xz;`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
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
       uniform float uRainbowFresnelMultiply;`),f.fragmentShader=f.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
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
       diffuseColor.rgb = mix(diffuseColor.rgb, rainbowColor, uRainbowIntensity * intensityMultiplier * fresnelCustom);`)};const ar=new zA(Xi);if(ar.setResourcePath("graphics/"),typeof xg<"u"){const f=new xg;f.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/"),ar.setDRACOLoader(f)}const $h=new Co({color:new se(_.gel.glass.color),transmission:_.gel.glass.transmission,ior:_.gel.glass.ior,roughness:_.gel.glass.roughness,clearcoat:_.gel.glass.clearcoat,clearcoatRoughness:_.gel.glass.clearcoatRoughness,side:xn,transparent:!1,depthWrite:!1,opacity:_.gel.glass.opacity}),J0={uSkyboxRotation:{value:_.lights.skyboxRotation*Math.PI/180}};$h.onBeforeCompile=f=>{Object.assign(f.uniforms,J0),Fc=f;let x=Tt.envmap_physical_pars_fragment;x=x.replace(/vec4\s+envMapColor\s*=\s*textureCubeUV\s*\(\s*envMap\s*,\s*reflectVec\s*,\s*roughness\s*\)\s*;/g,"vec4 envMapColor = textureCubeUV( envMap, rotateY(reflectVec, uSkyboxRotation), roughness );"),x=x.replace(/vec4\s+envMapColor\s*=\s*textureCubeUV\s*\(\s*envMap\s*,\s*worldNormal\s*,\s*1\.0\s*\)\s*;/g,"vec4 envMapColor = textureCubeUV( envMap, rotateY(worldNormal, uSkyboxRotation), 1.0 );"),f.fragmentShader=f.fragmentShader.replace("#include <envmap_physical_pars_fragment>",`uniform float uSkyboxRotation;
       vec3 rotateY(vec3 v, float angle) {
         float c = cos(angle);
         float s = sin(angle);
         return vec3(v.x * c - v.z * s, v.y, v.x * s + v.z * c);
       }
       ${x}`),f.fragmentShader=f.fragmentShader.replace("#include <dither_fragment>",`#include <dither_fragment>
       vec3 gelReflectVec = reflect(-vViewPosition, normal);
       vec4 gelEnvSky = textureCubeUV(envMap, rotateY(gelReflectVec, uSkyboxRotation), roughness);
       gl_FragColor.rgb += gelEnvSky.rgb * 1.5;
      `)},ar.load("geometry/dish.glb",f=>{if(ve=f.scene,ve.traverse(A=>{if(A.isMesh){if(A.name.toLowerCase().includes("gel")?(A.material=$h,A.renderOrder=2,K=A):(A.material=Zh,A.renderOrder=1,X=A),typeof cg<"u")try{A.geometry=cg.mergeVertices(A.geometry)}catch{}A.geometry.computeVertexNormals()}}),ve){ve.position.copy(E),ve.rotation.set(J.x,J.y,J.z);const A=_.plate.scale;ve.scale.set(A,A,A)}pt.add(ve)});{const f=_.questionBox.shadowY,{rx:x,rz:A}=Gh(),W=new Kr(0,0,x,A,0,2*Math.PI,!1,0).getPoints(64),te=new Et().setFromPoints(W),ee=new Gs({color:16711680}),Z=new Ra(te,ee);Z.rotation.x=-Math.PI/2,Z.position.y=f+.005,pt.add(Z),ed=Z;const be=or(),Le=new Dl(be,32,16),ke=new Ut({color:16711680,wireframe:!0,transparent:!0,opacity:.15}),Re=new Nt(Le,ke),Oe=r&&_.questionBox.mobile?_.questionBox.mobile.position:_.questionBox.position;Re.position.set(Oe.x,f,Oe.z),pt.add(Re),pc=Re;const He=or(),gt=new Dl(He,32,16),nt=new Ut({color:16711680,wireframe:!0,transparent:!0,opacity:.15});tl=new Nt(gt,nt),pt.add(tl);const it=or(),zt=new Dl(it,32,16),Lt=new Ut({color:16711680,wireframe:!0,transparent:!0,opacity:.15});nl=new Nt(zt,Lt),pt.add(nl);const Pt=or(),ut=new Dl(Pt,32,16),dt=new Ut({color:16711680,wireframe:!0,transparent:!0,opacity:.15});Ho=new Nt(ut,dt);const At=r&&_.games3D&&_.games3D.mobile?_.games3D.mobile.position:_.games3D.desktop?_.games3D.desktop.position:{x:3.8,z:1.5};Ho.position.set(At.x,f,At.z),pt.add(Ho);const nn=or(),It=new Dl(nn,32,16),Se=new Ut({color:16711680,wireframe:!0,transparent:!0,opacity:.15});$o=new Nt(It,Se);const T=r&&_.ar3D&&_.ar3D.mobile?_.ar3D.mobile.position:_.ar3D&&_.ar3D.desktop?_.ar3D.desktop.position:{x:-2,z:4.3};$o.position.set(T.x,f,T.z),pt.add($o),ao=new ci,ao.renderOrder=20;const j=_.linkedin3D&&_.linkedin3D.desktop&&Array.isArray(_.linkedin3D.desktop.spawnPositions)?_.linkedin3D.desktop.spawnPositions:[],$=_.linkedin3D&&_.linkedin3D.mobile&&Array.isArray(_.linkedin3D.mobile.spawnPositions)?_.linkedin3D.mobile.spawnPositions:[],O=new $l(.18,.18,.18),Q=new Ut({color:65382,wireframe:!1,transparent:!0,opacity:.85}),_e=new Ut({color:39423,wireframe:!1,transparent:!0,opacity:.85});j.forEach(fe=>{const Ge=new Nt(O,Q);Ge.position.set(fe.x,fe.y!==void 0?fe.y:.63,fe.z),ao.add(Ge)}),$.forEach(fe=>{const Ge=new Nt(O,_e);Ge.position.set(fe.x,fe.y!==void 0?fe.y:.63,fe.z),ao.add(Ge)}),pt.add(ao);const G=new hn({roughness:1,metalness:0}),de=To(new ic(Xi),"graphics/li_logo_blue.webp",G,_.linkedin3D.unloadedColor);de&&(de.encoding=fs),G.map=de,et=new ci,et.renderOrder=10,ar.load("geometry/bug_cube.glb",fe=>{const Ge=fe.scene;Ge.traverse(xe=>{if(xe.isMesh){if(xe.isSkinnedMesh?(xe.material=G.clone(),xe.material.skinning=!0):xe.material=G,xe.geometry&&xe.geometry.attributes&&xe.geometry.attributes.uv){const ue=xe.geometry.attributes.uv;for(let Ve=0;Ve<ue.count;Ve++)ue.setY(Ve,1-ue.getY(Ve));ue.needsUpdate=!0}xe.geometry.computeVertexNormals()}}),et.add(Ge);const Je=fe.animations||[];if(Je&&Je.length>0){zr=new Gf(Ge);const xe=Je.find(Mt=>Mt.name.toLowerCase().includes("inspect"));xe&&(fd=zr.clipAction(xe),fd.setLoop(La,1/0));const ue=Je.find(Mt=>Mt.name.toLowerCase().includes("walk"));ue&&(ml=zr.clipAction(ue),ml.setLoop(La,1/0));const Ve=Je.find(Mt=>Mt.name.toLowerCase().includes("fall"));Ve&&(ta=zr.clipAction(Ve),ta.setLoop(If,1),ta.clampWhenFinished=!0);const sn=Je.find(Mt=>Mt.name.toLowerCase().includes("stand"));sn&&(na=zr.clipAction(sn),na.setLoop(If,1),na.clampWhenFinished=!0),zr.addEventListener("finished",Mt=>{ta&&Mt.action===ta?pv():na&&Mt.action===na&&mv()})}Ge.traverse(xe=>{xe.isSkinnedMesh});const Fe=Hh();et.position.set(Fe.x,Fe.y,Fe.z);const he=_.linkedin3D.scale;et.scale.set(he,he,he),pt.add(et);const Ae=_.linkedin3D.shadowOpacity;hc=new Ut({map:Os("graphics/shadow.webp"),transparent:!0,opacity:Ae,depthWrite:!1,depthTest:!0,side:xn,blending:Wi});const me=new cs(1.5,1.5);vs=new Nt(me,hc),vs.rotation.x=-Math.PI/2;const Me=_.linkedin3D.shadowY;vs.position.set(Fe.x,Me,Fe.z),vs.renderOrder=3,pt.add(vs),Uh=!0,ml&&(ml.reset().play(),hd="walk")},void 0,fe=>{console.error("[GLTFLoader] Failed to load bug_cube.glb",fe)})}const sa=new ic(Xi),Sd=Os("graphics/dots_normals.webp");Sd.wrapS=xr,Sd.wrapT=xr;const K0=Os("graphics/shadow.webp"),ev=_.questionBox.shadowOpacity;ia=new Ut({map:K0,transparent:!0,opacity:ev,depthWrite:!1,depthTest:!0,side:xn,blending:Wi});const tv=new cs(1.5,1.5);{wn=new Nt(tv,ia),wn.rotation.x=-Math.PI/2;const f=_.questionBox,x=r&&f.mobile?f.mobile.position:f.desktop?f.desktop.position:f.position,A=f.shadowY;wn.position.set(x.x,A,x.z),wn.renderOrder=3,pt.add(wn)}{const f=_.questionBox.glass;pi=new Co({color:f.color,transparent:!0,opacity:f.opacity,transmission:f.transmission,roughness:f.roughness,ior:f.ior,reflectivity:f.reflectivity,clearcoat:f.clearcoat,clearcoatRoughness:f.clearcoatRoughness,depthWrite:!1});const x=_.questionBox.metal;Ps=new hn({color:x.color,metalness:x.metalness,roughness:x.roughness,normalMap:Sd}),Ps.normalScale&&Ps.normalScale.set(x.normalScale,x.normalScale);const A=new Ut({transparent:!0,opacity:1,side:Yi});A.map=To(sa,"graphics/question.webp",A,_.questionBox.unloadedColor),ar.load("geometry/question_box.glb",N=>{const W=N.scene;if(W.children.sort((te,ee)=>{const Z=(te.name||"").toLowerCase().includes("exterior")?1:0,be=(ee.name||"").toLowerCase().includes("exterior")?1:0;return Z-be}),W.traverse(te=>{if(te.isMesh){const ee=(te.name+" "+(te.parent?te.parent.name:"")).toLowerCase();ee.includes("interior")?(te.material=Ps,te.renderOrder=10):ee.includes("plane")?(te.material=A,te.renderOrder=11,po=te):(ee.includes("exterior"),te.material=pi,te.userData.isQuestionBoxExterior=!0,te.renderOrder=12)}}),at=W,at.renderOrder=10,_.questionBox){const te=_.questionBox,ee=r&&te.mobile?te.mobile.position:te.desktop?te.desktop.position:te.position;W.position.set(ee.x,ee.y,ee.z),W.userData.baseX=ee.x,W.userData.baseY=ee.y,W.userData.baseZ=ee.z;const Z=te.scale;W.scale.set(Z,Z,Z)}pt.add(W)},void 0,N=>{})}if(_.houdini3D&&_.houdini3D.enabled!==!1){const f=Os("graphics/toyspeclowres.webp"),x=_.houdini3D.material||{};Rc=new c0({color:new se(x.color!==void 0?x.color:16777215),specularMap:f,shininess:x.shininess!==void 0?x.shininess:30,specular:new se(x.specular!==void 0?x.specular:2236962),morphTargets:!0,skinning:!0});const A=To(sa,"graphics/toylowres.webp",Rc,_.houdini3D.unloadedColor);A&&(A.encoding=fs),Rc.map=A;const N=Os("graphics/shadow.webp"),W=_.houdini3D.shadowOpacity;Cs=new Ut({map:N,transparent:!0,opacity:W,depthWrite:!1,depthTest:!0,side:xn,blending:Wi});const te=new cs(1.5,1.5);vn=new Nt(te,Cs),vn.rotation.x=-Math.PI/2;const ee=r?_.houdini3D.mobile:_.houdini3D.desktop,Z=_.houdini3D.shadowY;vn.position.set(ee.position.x,Z,ee.position.z),vn.renderOrder=3,pt.add(vn),ar.load("geometry/rubbertoy.glb",be=>{const Le=be.scene;Xh=[],Le.traverse(Oe=>{if(Oe.isMesh){Oe.renderOrder=10;const He=Rc.clone();if(He.morphTargets=!0,He.skinning=Oe.isSkinnedMesh===!0,Oe.material=He,Oe.geometry&&Oe.geometry.attributes&&Oe.geometry.attributes.uv){const gt=Oe.geometry.attributes.uv;for(let nt=0;nt<gt.count;nt++)gt.setY(nt,1-gt.getY(nt));gt.needsUpdate=!0}if(typeof Oe.updateMorphTargets=="function"&&Oe.updateMorphTargets(),Oe.morphTargetInfluences)for(let gt=0;gt<Oe.morphTargetInfluences.length;gt++)Oe.morphTargetInfluences[gt]=0;Xh.push(Oe)}}),tt=Le,tt.renderOrder=10;const ke=ee.position;Le.position.set(ke.x,ke.y,ke.z),Le.userData.baseX=ke.x,Le.userData.baseY=ke.y,Le.userData.baseZ=ke.z;const Re=_.houdini3D.scale;if(Le.scale.set(Re,Re,Re),_.houdini3D.rotation){const Oe=_.houdini3D.rotation;Le.rotation.set(0*Math.PI/180,Oe.y*Math.PI/180,0*Math.PI/180)}pt.add(Le)},void 0,be=>{})}if(_.web3D&&_.web3D.enabled!==!1){const f=_.web3D,x=f.materials||{},A=x.grid||{};$s=new hn({color:new se(A.color!==void 0?A.color:16777215),emissive:new se(A.emissive!==void 0?A.emissive:16777215),emissiveIntensity:A.emissiveIntensity!==void 0?A.emissiveIntensity:1,roughness:A.roughness!==void 0?A.roughness:.2,metalness:A.metalness!==void 0?A.metalness:.1});const N=To(sa,x.grid&&x.grid.emissiveMap||"graphics/grid.webp",$s,_.web3D.unloadedColor,"emissive");$s.emissiveMap=N;const W=x.antenna||{};Th=new hn({color:new se(W.color!==void 0?W.color:13421772),roughness:W.roughness!==void 0?W.roughness:.3,metalness:W.metalness!==void 0?W.metalness:.8});const te=x.moon||{};zo=new hn({color:new se(te.color!==void 0?te.color:16777215),emissive:new se(te.emissive!==void 0?te.emissive:16777215),emissiveIntensity:te.emissiveIntensity!==void 0?te.emissiveIntensity:1,roughness:te.roughness!==void 0?te.roughness:.3,metalness:te.metalness!==void 0?te.metalness:.1});const ee=x.signal||{};fc=new hn({color:new se(ee.color!==void 0?ee.color:0),emissive:new se(ee.emissive!==void 0?ee.emissive:2254847),emissiveIntensity:ee.emissiveIntensity!==void 0?ee.emissiveIntensity:1.2,roughness:ee.roughness!==void 0?ee.roughness:.3,metalness:ee.metalness!==void 0?ee.metalness:.1,side:Yi});const Z=Os("graphics/shadow.webp"),be=f.shadowOpacity!==void 0?f.shadowOpacity:.85;dc=new Ut({map:Z,transparent:!0,opacity:be,depthWrite:!1,depthTest:!0,side:xn,blending:Wi});const Le=new cs(1.5,1.5);gs=new Nt(Le,dc),gs.rotation.x=-Math.PI/2;const ke=r?f.mobile.position:f.desktop.position,Re=f.shadowY!==void 0?f.shadowY:.33;gs.position.set(ke.x,Re,ke.z),gs.renderOrder=3,pt.add(gs),Zu=null,$u=null,Ju=null,ar.load("geometry/globe.glb",Oe=>{const He=Oe.scene;He.traverse(nt=>{if(nt.isMesh){const it=(nt.name||"").toLowerCase();it.includes("moon")?(nt.material=zo,Zs=nt):it.includes("antenna")?nt.material=Th:it.includes("signal_inner")||it.includes("signalinner")||it.includes("signal_1")||it.includes("signal1")?(nt.material=fc,Zu=nt):it.includes("signal_middle")||it.includes("signalmiddle")||it.includes("signal_2")||it.includes("signal2")?(nt.material=fc,$u=nt):it.includes("signal_outer")||it.includes("signalouter")||it.includes("signal_3")||it.includes("signal3")?(nt.material=fc,Ju=nt):it.includes("globe")?(nt.material=$s,bi=nt):nt.material=$s}}),ht=He,ht.renderOrder=10,He.position.set(ke.x,ke.y,ke.z),He.userData.baseX=ke.x,He.userData.baseY=ke.y,He.userData.baseZ=ke.z;const gt=f.scale||.62;He.scale.set(gt,gt,gt),f.rotation&&He.rotation.set((f.rotation.x||0)*Math.PI/180,(f.rotation.y||0)*Math.PI/180,(f.rotation.z||0)*Math.PI/180),pt.add(He)},void 0,Oe=>{})}if(_.games3D&&_.games3D.enabled!==!1){const f=_.games3D,x=f.material||{},A=f.pop&&f.pop.material||{};Vo=new hn({color:new se(x.color!==void 0?x.color:1942906),roughness:x.roughness!==void 0?x.roughness:.2,metalness:x.metalness!==void 0?x.metalness:.8}),rl=new hn({color:new se(A.color!==void 0?A.color:14034984),roughness:A.roughness!==void 0?A.roughness:.2,metalness:A.metalness!==void 0?A.metalness:.8});const N=Os("graphics/shadow.webp"),W=f.shadowOpacity;Lr=new Ut({map:N,transparent:!0,opacity:W,depthWrite:!1,depthTest:!0,side:xn,blending:Wi});const te=new cs(1.5,1.5);cn=new Nt(te,Lr),cn.rotation.x=-Math.PI/2;const ee=r?f.mobile.position:f.desktop.position,Z=f.shadowY;cn.position.set(ee.x,Z,ee.z),cn.renderOrder=3,pt.add(cn),ar.load("geometry/alien.glb",be=>{const Le=be.scene;Ki=null,es=null,fi=null,Mi=null,Le.traverse(Re=>{if(Re.isMesh){Re.renderOrder=10;const Oe=(Re.name||"").toLowerCase();Oe.includes("pop0")||Oe==="pop0"?(fi=Re,Re.material=rl,Re.visible=!1):Oe.includes("pop1")||Oe==="pop1"||Oe.includes("pop")?(Mi=Re,Re.material=rl,Re.visible=!1):Oe.includes("pose0")?(Ki=Re,Re.material=Vo,Re.visible=!0):Oe.includes("pose1")?(es=Re,Re.material=Vo,Re.visible=!1):Re.material=Vo}}),Ce=Le,Ce.renderOrder=10,Le.position.set(ee.x,ee.y,ee.z),Le.userData.baseX=ee.x,Le.userData.baseY=ee.y,Le.userData.baseZ=ee.z,Le.userData.currentHoverY=0;const ke=f.scale;Le.scale.set(ke,ke,ke),f.rotation&&Le.rotation.set(0*Math.PI/180,f.rotation.y*Math.PI/180,f.rotation.z*Math.PI/180),pt.add(Le)},void 0,be=>{})}if(_.ar3D&&_.ar3D.enabled!==!1){const f=_.ar3D,x=f.materials||{},A=x.phone||{};Wo=new hn({color:new se(A.color!==void 0?A.color:2040877),roughness:A.roughness!==void 0?A.roughness:.25,metalness:A.metalness!==void 0?A.metalness:.75});const N=x.screen||{};Si=new hn({color:new se(N.color!==void 0?N.color:461588),emissive:new se(N.emissive!==void 0?N.emissive:16777215),emissiveIntensity:N.emissiveIntensity!==void 0?N.emissiveIntensity:1,roughness:N.roughness!==void 0?N.roughness:.1,metalness:N.metalness!==void 0?N.metalness:.9,skinning:!0}),Ai=To(sa,N&&N.emissiveMap||"graphics/emojiface.webp",Si,_.ar3D.unloadedColor,"emissive"),Ai&&(Ai.encoding=fs),_s=To(sa,N&&N.hoverEmissiveMap||"graphics/emojieyes.webp",null,_.ar3D.unloadedColor,"emissive"),_s&&(_s.encoding=fs),Cr=To(sa,N&&N.clickEmissiveMap||"graphics/emojihuh.webp",null,_.ar3D.unloadedColor,"emissive"),Cr&&(Cr.encoding=fs),Si.emissiveMap=Ai;const W=x.camera||{};Xo=new hn({color:new se(W.color!==void 0?W.color:1118481),roughness:W.roughness!==void 0?W.roughness:.1,metalness:W.metalness!==void 0?W.metalness:.9});const te=x.cameraHouse||{};_c=new hn({color:new se(te.color!==void 0?te.color:1711654),roughness:te.roughness!==void 0?te.roughness:.3,metalness:te.metalness!==void 0?te.metalness:.7});const ee=x.shoes||{};Yo=new hn({color:new se(ee.color!==void 0?ee.color:2236962),roughness:ee.roughness!==void 0?ee.roughness:.6,metalness:ee.metalness!==void 0?ee.metalness:.2});const Z=x.socks||{};qo=new hn({color:new se(Z.color!==void 0?Z.color:15658734),roughness:Z.roughness!==void 0?Z.roughness:.8,metalness:Z.metalness!==void 0?Z.metalness:0});const be=Os("graphics/shadow.webp"),Le=f.shadowOpacity;Mc=new Ut({map:be,transparent:!0,opacity:Le,depthWrite:!1,depthTest:!0,side:xn,blending:Wi});const ke=new cs(1.5,1.5);Ui=new Nt(ke,Mc),Ui.rotation.x=-Math.PI/2;const Re=r&&f.mobile?f.mobile.position:f.desktop.position,Oe=f.shadowY;Ui.position.set(Re.x,Oe,Re.z),Ui.renderOrder=3,pt.add(Ui);const He=Nc(),{rx:gt,rz:nt}=mp(),zt=new Kr(0,0,gt,nt,0,2*Math.PI,!1,0).getPoints(64),Lt=new Et().setFromPoints(zt),Pt=new Gs({color:65535});Dr=new Ra(Lt,Pt),Dr.rotation.x=-Math.PI/2,Dr.position.set(He.x,Oe+.005,He.z),Dr.visible=f.showDebug===!0,pt.add(Dr),ar.load("geometry/phone.glb",ut=>{const dt=ut.scene;dt.traverse(Se=>{if(Se.isMesh){Se.renderOrder=10;const T=Array.isArray(Se.material)?Se.material.map($=>$&&$.name||"").join(" "):Se.material&&Se.material.name||"",j=((Se.name||"")+" "+(Se.parent&&Se.parent.name||"")+" "+T).toLowerCase();if(Array.isArray(Se.material))Se.material=Se.material.map($=>{const O=($&&$.name||"").toLowerCase();let Q=Wo;return O.includes("screen")?Q=Si:O.includes("camera")&&!O.includes("house")?Q=Xo:O.includes("camerahouse")||O.includes("house")?Q=_c:O.includes("sock")?Q=qo:O.includes("shoe")&&(Q=Yo),Se.isSkinnedMesh&&Q!==Si&&(Q=Q.clone(),Q.skinning=!0),Q}),Nr.push({mesh:Se,isMulti:!0,originalMaterials:[...Se.material]});else if(j.includes("sock"))Se.material=Se.isSkinnedMesh?qo.clone():qo,Se.isSkinnedMesh&&(Se.material.skinning=!0);else if(j.includes("shoe"))Se.material=Se.isSkinnedMesh?Yo.clone():Yo,Se.isSkinnedMesh&&(Se.material.skinning=!0);else if(j.includes("camera")&&!j.includes("house"))Se.material=Se.isSkinnedMesh?Xo.clone():Xo,Se.isSkinnedMesh&&(Se.material.skinning=!0);else if(j.includes("camerahouse")||j.includes("house"))Se.material=Se.isSkinnedMesh?_c.clone():_c,Se.isSkinnedMesh&&(Se.material.skinning=!0),Nr.push({mesh:Se,isMulti:!1,originalMaterial:Se.material});else if(j.includes("screen")){if(Se.material=Si,Se.isSkinnedMesh&&(Se.material.skinning=!0),uo=Se,Se.geometry&&Se.geometry.attributes&&Se.geometry.attributes.uv){const $=Se.geometry.attributes.uv;for(let O=0;O<$.count;O++)$.setY(O,1-$.getY(O));$.needsUpdate=!0}}else j.includes("leg")?(Se.material=Se.isSkinnedMesh?Wo.clone():Wo,Se.isSkinnedMesh&&(Se.material.skinning=!0),Nr.push({mesh:Se,isMulti:!1,originalMaterial:Se.material})):(Se.material=Se.isSkinnedMesh?Wo.clone():Wo,Se.isSkinnedMesh&&(Se.material.skinning=!0),Nr.push({mesh:Se,isMulti:!1,originalMaterial:Se.material}))}}),we=dt,we.renderOrder=10;const At=Nc();dt.position.set(Re.x,Re.y,Re.z),dt.userData.baseX=At.x,dt.userData.baseY=Re.y,dt.userData.baseZ=At.z,dt.userData.currentHoverY=0;const nn=f.scale;if(dt.scale.set(nn,nn,nn),f.rotation){const T=f.rotation.y*Math.PI/180+Math.PI;dt.rotation.set(0*Math.PI/180,T,0*Math.PI/180)}Rr=[],dt.traverse(Se=>{Se.isSkinnedMesh&&Rr.push(Se)});const It=ut.animations||[];if(It&&It.length>0){fo=new Gf(dt);const Se=It.find($=>$.name.toLowerCase().includes("walk"))||It[0];Se&&(Fr=fo.clipAction(Se),Fr.setLoop(La,1/0),Fr.enabled=!0,Fr.setEffectiveWeight(0),Fr.play());const T=It.find($=>{const O=$.name.toLowerCase();return O.includes("stand")||O.includes("neutral")||O.includes("idle")||O.includes("pose")||O.includes("stance")});T&&(Ir=fo.clipAction(T),Ir.setLoop(La,1/0),Ir.enabled=!0,Ir.setEffectiveWeight(1),Ir.play());const j=It.find($=>$.name.toLowerCase().includes("shake"));j&&(Yn=fo.clipAction(j),Yn.setLoop(La,1/0),Yn.enabled=!0,Yn.setEffectiveWeight(0),Yn.play())}pt.add(dt)},void 0,ut=>{console.error("[GLTFLoader] Failed to load phone.glb",ut)})}E=new S(0,-.8,0),J=new S(0,0,0),_v(),$e=new Su,ot=new ae(-9999,-9999),Pc=!1;let xl=!1,Ad={x:0},go=0,Fi=0,vo=0,nv=0,Jh=0,Kh=0;function ep(){const f=document.createElement("canvas");f.width=64,f.height=64;const x=f.getContext("2d"),A=x.createRadialGradient(32,32,0,32,32,32);return A.addColorStop(0,"rgba(255, 255, 255, 1.0)"),A.addColorStop(.2,"rgba(255, 255, 220, 0.8)"),A.addColorStop(.6,"rgba(255, 220, 255, 0.2)"),A.addColorStop(1,"rgba(255, 255, 255, 0.0)"),x.fillStyle=A,x.beginPath(),x.arc(32,32,32,0,Math.PI*2),x.fill(),x.strokeStyle="rgba(255, 255, 255, 0.9)",x.lineWidth=3,x.beginPath(),x.moveTo(32,10),x.lineTo(32,54),x.moveTo(10,32),x.lineTo(54,32),x.stroke(),x.strokeStyle="rgba(255, 255, 255, 0.5)",x.lineWidth=1.5,x.beginPath(),x.moveTo(20,20),x.lineTo(44,44),x.moveTo(20,44),x.lineTo(44,20),x.stroke(),new Du(f)}function iv(){const f=document.createElement("canvas");f.width=128,f.height=512;const x=f.getContext("2d"),A=x.createLinearGradient(0,0,0,512);A.addColorStop(0,"rgba(255, 255, 255, 0.0)"),A.addColorStop(.15,"rgba(255, 255, 255, 0.7)"),A.addColorStop(.4,"rgba(255, 255, 255, 1.0)"),A.addColorStop(.75,"rgba(255, 255, 255, 0.4)"),A.addColorStop(1,"rgba(255, 255, 255, 0.0)");const N=x.createLinearGradient(0,0,128,0);return N.addColorStop(0,"rgba(255, 255, 255, 0.0)"),N.addColorStop(.5,"rgba(255, 255, 255, 1.0)"),N.addColorStop(1,"rgba(255, 255, 255, 0.0)"),x.fillStyle=A,x.fillRect(0,0,128,512),x.globalCompositeOperation="destination-in",x.fillStyle=N,x.fillRect(0,0,128,512),new Du(f)}var Fs=!1,In=!1;function tp(){const f=document.getElementById("linkedin-desktop-wrapper"),x=document.getElementById("plaintext-link");window.innerWidth<=window.innerHeight?(a.style.visibility="hidden",f&&(f.style.visibility="hidden"),L.style.visibility="visible",x&&(x.style.display=In?"flex":"none")):(In&&lr(),a.style.visibility="visible",f&&(f.style.visibility="visible"),L.style.visibility="hidden",x&&(x.style.display="flex"))}function lr(){const f=document.getElementById("plaintext-link"),x=window.innerWidth<=window.innerHeight;In?(g.classList.remove("is-active"),C.style.setProperty("animation","mobileNavButtonTopOut 0.2s forwards"),w.style.setProperty("animation","mobileNavButtonMiddleOut 0.2s forwards"),V.style.setProperty("animation","mobileNavButtonBottomOut 0.2s forwards"),In=!1,x&&f&&(f.style.display="none"),Bi(()=>{g.style.visibility="hidden"},200)):(Ln()&&(Ii(),H&&(H.style.visibility="hidden"),U&&(U.style.visibility="hidden"),Zn="main"),ft=!1,g.style.visibility="visible",requestAnimationFrame(()=>{g.classList.add("is-active")}),C.style.setProperty("animation","mobileNavButtonTopIn 0.3s forwards"),w.style.setProperty("animation","mobileNavButtonMiddleIn 0.3s forwards"),V.style.setProperty("animation","mobileNavButtonBottomIn 0.3s forwards"),In=!0,x&&f&&(f.style.display="flex"),Bi(()=>{Ln()||(ft=!0)},300))}function Ic(){return Li||Hi}let qn=!1;function cr(){return!qn&&(ft||Ln())}function sv(f,x){f&&(f.style.setProperty("animation","none"),f.offsetWidth,f.style.setProperty("animation",x))}function yl(...f){f.forEach(x=>{x&&(x._hoverActive=!1,x.classList.add("is-panel-open"),sv(x,"menuSelect 0.42s forwards"))})}function np(f=!1){at?(qu=f,ws=performance.now()):ft=!0}function ai(f,x){f&&f.classList.toggle("is-drawn",x)}function Is(f,x){f&&(f.classList.toggle("is-opening",x),f.classList.toggle("is-closing",!x),x?(f.style.setProperty("--panel-enter-translate","translate3d(0, 0px, 0)"),f.style.setProperty("--panel-exit-translate","translate3d(0, 24px, 0)")):(f.style.setProperty("--panel-enter-translate","translate3d(0, 24px, 0)"),f.style.setProperty("--panel-exit-translate","translate3d(0, 24px, 0)")))}function Ln(){return hi||Ei||Li||Hi||Ss||ir||As||sr||Ts||rr}function Ii(f={}){hi&&Td(f),Li&&Ld(f),Ss&&Cd(f),As&&Fd(f),Ts&&Dd(f)}function ip(f={}){hi||Ei||(Ln()&&Ii({silentRespawn:!0}),hi=!0,Ei=!0,ad=!!f.regrowQuestionBox,ft=!1,Zt=!1,[c,y].forEach(x=>{x&&(x._hoverActive=!1,x.style.setProperty("animation","resetScaleBorder 0.25s forwards"))}),e.style.setProperty("cursor","default"),$t(),H&&(H.style.visibility="hidden"),U&&(U.style.visibility="hidden"),ne.classList.add("is-visible"),Is(le,!0),ai(le,!1),c.classList.add("is-panel-open"),y.classList.add("is-panel-open"),requestAnimationFrame(()=>{vt(),ge(),ne.classList.add("is-active"),ai(le,!0),setTimeout(ge,120),setTimeout(ge,320)}),Bi(()=>{Ei=!1,qn=!1},480))}function Td(f={}){if(!hi&&!Ei)return;Ei=!0,hi=!1,e.style.setProperty("cursor","default"),Is(le,!1),ai(le,!1),ne.classList.remove("is-active"),Zt=!1,$t(),c.style.setProperty("animation","resetScaleBorder 0.25s forwards"),c.classList.remove("is-panel-open"),y.style.setProperty("animation",""),y.classList.remove("is-panel-open"),l&&(l._hoverActive=!1,l.style.setProperty("animation","shrink 0.25s forwards"));const x=ad;ad=!1;const A=!!(f&&f.silentRespawn);Bi(()=>{ne.classList.remove("is-visible"),Ei=!1,x?np(A):A||(ft=!0)},360)}pe.onclick=Td,Ke.onclick=Td,le.onclick=f=>{f.stopPropagation()};function Ed(){Li||Hi||(Ln()&&Ii({silentRespawn:!0}),Li=!0,Hi=!0,ft=!1,tr=!1,Zo=!1,Ne&&Ne(),[u,b].forEach(f=>{f&&(f._hoverActive=!1,f.style.setProperty("animation","resetScaleBorder 0.25s forwards"))}),e.style.setProperty("cursor","default"),$t(),Ye.classList.add("is-visible"),Is(R,!0),ai(R,!1),u.classList.add("is-panel-open"),b.classList.add("is-panel-open"),requestAnimationFrame(()=>{re(),oe(),Ye.classList.add("is-active"),ai(R,!0),setTimeout(oe,120),setTimeout(oe,320)}),Bi(()=>{Hi=!1,qn=!1},480))}function Ld(f={}){if(!Li&&!Hi)return;Hi=!0,Li=!1,e.style.setProperty("cursor","default"),je&&je(),Is(R,!1),ai(R,!1),Ye.classList.remove("is-active"),tr=!1,$t(),u.style.setProperty("animation","resetScaleBorder 0.25s forwards"),u.classList.remove("is-panel-open"),b.style.setProperty("animation",""),b.classList.remove("is-panel-open"),l&&(l._hoverActive=!1,l.style.setProperty("animation","shrink 0.25s forwards"));const x=!!(f&&f.silentRespawn);Bi(()=>{Ye.classList.remove("is-visible"),Hi=!1,Ip(x)},360)}Be.onclick=Ld,P.onclick=Ld,R.onclick=f=>{f.stopPropagation()};function Pd(){Ss||ir||(Ln()&&Ii({silentRespawn:!0}),Ss=!0,ir=!0,ft=!1,Pr=!1,rt.playHeaderVideo&&rt.playHeaderVideo(),[d,v].forEach(f=>{f&&(f._hoverActive=!1,f.style.setProperty("animation","resetScaleBorder 0.25s forwards"))}),e.style.setProperty("cursor","default"),$t(),rt.overlay.classList.add("is-visible"),Is(rt.panel,!0),ai(rt.panel,!1),d.classList.add("is-panel-open"),v.classList.add("is-panel-open"),requestAnimationFrame(()=>{rt.updateBorderPaths(),rt.updateScrollIndicators(),rt.overlay.classList.add("is-active"),ai(rt.panel,!0),setTimeout(rt.updateScrollIndicators,120),setTimeout(rt.updateScrollIndicators,320)}),Bi(()=>{ir=!1,qn=!1},480))}function Cd(f={}){if(!Ss&&!ir)return;ir=!0,Ss=!1,e.style.setProperty("cursor","default"),rt.pauseHeaderVideo&&rt.pauseHeaderVideo(),Is(rt.panel,!1),ai(rt.panel,!1),rt.overlay.classList.remove("is-active"),Pr=!1,$t(),d.style.setProperty("animation","resetScaleBorder 0.25s forwards"),d.classList.remove("is-panel-open"),v.style.setProperty("animation",""),v.classList.remove("is-panel-open");const x=!!(f&&f.silentRespawn);Bi(()=>{rt.overlay.classList.remove("is-visible"),ir=!1,Lp(x)},360)}rt.blur.onclick=Cd,rt.closeButton.onclick=Cd,rt.panel.onclick=f=>{f.stopPropagation()};function Rd(){As||sr||(Ln()&&Ii({silentRespawn:!0}),As=!0,sr=!0,ft=!1,wr=!1,We.playHeaderVideo&&We.playHeaderVideo(),[h,m].forEach(f=>{f&&(f._hoverActive=!1,f.style.setProperty("animation","resetScaleBorder 0.25s forwards"))}),e.style.setProperty("cursor","default"),$t(),We.overlay.classList.add("is-visible"),Is(We.panel,!0),ai(We.panel,!1),h.classList.add("is-panel-open"),m.classList.add("is-panel-open"),requestAnimationFrame(()=>{We.updateBorderPaths(),We.updateScrollIndicators(),We.overlay.classList.add("is-active"),ai(We.panel,!0),setTimeout(We.updateScrollIndicators,120),setTimeout(We.updateScrollIndicators,320)}),Bi(()=>{sr=!1,qn=!1},480))}function Fd(f={}){if(!As&&!sr)return;sr=!0,As=!1,e.style.setProperty("cursor","default"),We.pauseHeaderVideo&&We.pauseHeaderVideo(),Is(We.panel,!1),ai(We.panel,!1),We.overlay.classList.remove("is-active"),wr=!1,$t(),h.style.setProperty("animation","resetScaleBorder 0.25s forwards"),h.classList.remove("is-panel-open"),m.style.setProperty("animation",""),m.classList.remove("is-panel-open");const x=!!(f&&f.silentRespawn);Bi(()=>{We.overlay.classList.remove("is-visible"),sr=!1,Rp(x)},360)}We.blur.onclick=Fd,We.closeButton.onclick=Fd,We.panel.onclick=f=>{f.stopPropagation()};function Id(){Ts||rr||(Ln()&&Ii({silentRespawn:!0}),Ts=!0,rr=!0,ft=!1,ii=!1,k.playHeaderVideo&&k.playHeaderVideo(),[p,M].forEach(f=>{f&&(f._hoverActive=!1,f.style.setProperty("animation","resetScaleBorder 0.25s forwards"))}),e.style.setProperty("cursor","default"),$t(),k.overlay.classList.add("is-visible"),Is(k.panel,!0),ai(k.panel,!1),p.classList.add("is-panel-open"),M.classList.add("is-panel-open"),requestAnimationFrame(()=>{k.updateBorderPaths(),k.updateScrollIndicators(),k.overlay.classList.add("is-active"),ai(k.panel,!0),setTimeout(k.updateScrollIndicators,120),setTimeout(k.updateScrollIndicators,320)}),Bi(()=>{rr=!1,qn=!1},480))}function Dd(f={}){if(!Ts&&!rr)return;rr=!0,Ts=!1,e.style.setProperty("cursor","default"),k.pauseHeaderVideo&&k.pauseHeaderVideo(),Is(k.panel,!1),ai(k.panel,!1),k.overlay.classList.remove("is-active"),ii=!1,$t(),p.style.setProperty("animation","resetScaleBorder 0.25s forwards"),p.classList.remove("is-panel-open"),M.style.setProperty("animation",""),M.classList.remove("is-panel-open");const x=!!(f&&f.silentRespawn);Bi(()=>{k.overlay.classList.remove("is-visible"),rr=!1,Cp(x)},360)}k.blur.onclick=Dd,k.closeButton.onclick=Dd,k.panel.onclick=f=>{f.stopPropagation()};const sp={default:0,multiBit:1,oneBit:2,pixelated:3,gameBoy:4,vhs:5,halftone:6,blueprint:7,thermal:8,ascii:9,anaglyph:10};function rv(f){const x=_.renderStyles;let A="./graphics/thumbnail_ng_logo.webp";x&&x.logoImages&&x.logoImages[f]?A=x.logoImages[f]:x&&x[f]&&x[f].logoSrc&&(A=x[f].logoSrc);const N=document.getElementById("logolink");B0(N,A)}function ov(){const f=_.renderStyles;if(!f||!Array.isArray(f.activeModes)||f.activeModes.length===0)return;f.currentModeIndex===void 0&&(f.currentModeIndex=0),f.currentModeIndex=(f.currentModeIndex+1)%f.activeModes.length;const x=f.activeModes[f.currentModeIndex];rv(x),Vv(x)}function rp(){if(l._hoverActive||e.style.setProperty("cursor","default"),Ln()){Ii(),H&&(H.style.visibility="hidden"),U&&(U.style.visibility="hidden"),Zn="main";return}if(In){lr();return}ov(),ft=!0}function op(){if(hi||Ei||qn)return;In&&lr(),yl(c,y),e.style.setProperty("cursor","default"),qn=!0,ft=!1,H&&(H.style.visibility="hidden"),U&&(U.style.visibility="hidden"),Ln()&&Ii({silentRespawn:!0});const f=_.questionBox.shatter;at&&at.visible&&f&&f.enabled!==!1&&Bp(!0)||ip()}function ap(){if(Li||Hi||qn)return;In&&lr(),yl(u,b),e.style.setProperty("cursor","default"),qn=!0,ft=!1,Ln()&&Ii({silentRespawn:!0});const f=_.ar3D?_.ar3D.clickAnimation:null;(!f||f.enabled!==!1)&&Dp(!0)||Ed()}function lp(){if(Ss||ir||qn)return;In&&lr(),yl(d,v),e.style.setProperty("cursor","default"),qn=!0,ft=!1,Ln()&&Ii({silentRespawn:!0});const f=_.games3D?_.games3D.pop:null;(!f||f.enabled!==!1)&&Pp(!0)||Pd()}function cp(){if(As||sr||qn)return;In&&lr(),yl(h,m),e.style.setProperty("cursor","default"),qn=!0,ft=!1,Ln()&&Ii({silentRespawn:!0});const f=_.web3D?_.web3D.clickAnimation:null;(!f||f.enabled!==!1)&&Np(!0)||Rd()}function up(){if(Ts||rr||qn)return;In&&lr(),yl(p,M),e.style.setProperty("cursor","default"),qn=!0,ft=!1,Ln()&&Ii({silentRespawn:!0});const f=_.houdini3D?_.houdini3D.pop:null;(!f||f.enabled!==!1)&&Fp(!0)||Id()}function dp(){let f=new Date,x=f.getHours(),A=f.getMinutes();x>12&&(x%=12),A<10&&(A="0"+A),q.innerHTML=x+":"+A,setTimeout(dp,1e4)}function fp(){Y.style.setProperty("width",window.innerHeight*.3+"px"),Y.style.setProperty("height",window.innerHeight*.65+"px"),tp();const f=window.innerWidth,x=window.innerHeight;if(Ft.aspect=f/x,Ft.fov=_.camera.fov,Ft.updateProjectionMatrix(),Mn.setSize(f,x),Gi.setSize(f,x),j0(f,x),mo){const A=Mn.getPixelRatio();mo.material.uniforms.resolution.value.x=1/(f*A),mo.material.uniforms.resolution.value.y=1/(x*A)}E.set(0,_.plate.yPos,0),J.set(0,0,0),(hi||Ei)&&vt()}window.onresize=fp,dp(),fp();function Dc(){if(!Fs){Fs=!0;try{if(typeof Mn<"u"&&Mn&&Mn.initTexture){if(typeof Ai<"u"&&Ai)try{Mn.initTexture(Ai)}catch{}if(typeof _s<"u"&&_s)try{Mn.initTexture(_s)}catch{}if(typeof Cr<"u"&&Cr)try{Mn.initTexture(Cr)}catch{}}if(Mn.compile(Rs,Ft),typeof Gi<"u"&&Gi){const f=typeof Rr<"u"&&Rr.length>0?Rr:typeof we<"u"&&we?[we]:[];if(typeof Ci<"u"&&Ci&&(Ci.selectedObjects=f,Ci.enabled=f.length>0),typeof mi<"u"&&mi){const x=typeof at<"u"&&at?[at]:[];mi.selectedObjects=x,mi.enabled=x.length>0}if(typeof Ri<"u"&&Ri){const x=typeof tt<"u"&&tt?[tt]:[];Ri.selectedObjects=x,Ri.enabled=x.length>0}Gi.render(),$t()}}catch{}o&&(clearInterval(o),o=null),t.style.transition="opacity 0.35s ease",t.style.opacity=0,setTimeout(()=>{t.style.visibility="hidden"},350),l.style.visibility="visible",tp(),Cc=performance.now()*.001,ft=!0}}Xi.onLoad=()=>{const f=Math.round(performance.now()-qf);try{console.group(`%c[Asset Loader] All 3D Assets Loaded in ${f}ms`,"color: #55ff55; font-weight: bold; font-size: 13px;");const A=[...Pu].sort((N,W)=>W.DurationMs-N.DurationMs);console.table(A.map(({Asset:N,Duration:W,Progress:te})=>({Asset:N,Duration:W,Progress:te}))),console.groupEnd()}catch{}const x=performance.now();document.fonts&&document.fonts.ready?document.fonts.ready.then(()=>{const A=Math.round(performance.now()-x),N=Math.round(performance.now()-qf);console.log(`%c[Asset Loader] Fonts ready in ${A}ms. Total startup time: ${N}ms.`,"color: #91bfff; font-weight: bold;"),Dc()}).catch(Dc):Dc()},Xi.onError=f=>{console.error(`%c[Asset Loader] Failed to load asset: ${f}`,"color: #ff5555; font-weight: bold;")},setTimeout(()=>{Fs||Dc()},1e4),I.onmouseover=function(){e.style.setProperty("cursor","pointer"),I.style.setProperty("animation","leftArrowMouseOver 0.25s forwards")},I.onmouseout=function(){e.style.setProperty("cursor","default"),I.style.setProperty("animation","leftArrowMouseOut 0.25s forwards")},I.onclick=function(){ft&&(ft=!1,e.style.setProperty("cursor","default"),I.style.setProperty("animation","leftArrowBounce 0.5s forwards"),Bi(rp,100))},z.onmouseover=null,z.onmouseout=null,z.onclick=null,L.onmouseover=()=>{!Ur&&cr()&&e.style.setProperty("cursor","pointer")},L.onmouseout=()=>{Ur||e.style.setProperty("cursor","default")},L.onclick=()=>{cr()&&lr()};const av=f=>f<.5?4*f*f*f:1-Math.pow(-2*f+2,3)/2;l._hoverActive=!1,l._isMouseInside=!1,l.onmouseenter=()=>{l._isMouseInside=!0,!Ur&&cr()&&(l._hoverActive=!0,l.style.setProperty("animation","grow 0.25s forwards"),e.style.setProperty("cursor","pointer"))},l.onmouseleave=()=>{l._isMouseInside=!1,l._hoverActive&&(l._hoverActive=!1,l.style.setProperty("animation","shrink 0.25s forwards"),e.style.setProperty("cursor","default"))},l.onclick=()=>{(Ln()||ft)&&rp()};const lv=(f,x)=>{const A=()=>!Ur&&cr()&&(!x.currentTarget||Zn!==x.currentTarget)&&!f.classList.contains("is-panel-open"),N=()=>cr()&&(!x.currentTarget||Zn!==x.currentTarget)&&!f.classList.contains("is-panel-open");f._hoverActive=!1,f._isMouseInside=!1,f.onmouseenter=()=>{f._isMouseInside=!0,!f.classList.contains("is-panel-open")&&A()&&(f._hoverActive=!0,f.style.setProperty("animation","grow 0.25s forwards"),e.style.setProperty("cursor","pointer"),x.hoverType==="about"?Zt=!0:x.hoverType==="ar"?tr=!0:x.hoverType==="houdini"?ii=!0:x.hoverType==="web"?wr=!0:x.hoverType==="games"&&(Pr=!0))},f.onmouseleave=()=>{f._isMouseInside=!1,!f.classList.contains("is-panel-open")&&f._hoverActive&&(f._hoverActive=!1,f.style.setProperty("animation","shrink 0.25s forwards"),e.style.setProperty("cursor","default"),x.hoverType==="about"?(Zt=!1,$t()):x.hoverType==="ar"?(tr=!1,$t()):x.hoverType==="houdini"?(ii=!1,$t()):x.hoverType==="web"?(wr=!1,$t()):x.hoverType==="games"&&(Pr=!1,$t()))},f.onclick=W=>{W&&W.stopPropagation(),N()&&x.onClick()}},hp=[{elements:[c,y],name:"about",currentTarget:"about",hoverType:"about",onClick:op},{elements:[u,b],name:"ar",currentTarget:"ar",hoverType:"ar",onClick:ap},{elements:[d,v],name:"games",hoverType:"games",onClick:lp},{elements:[h,m],name:"web",hoverType:"web",onClick:cp},{elements:[p,M],name:"houdini",hoverType:"houdini",onClick:up}];hp.forEach(f=>{f.elements.forEach(x=>lv(x,f))});const pp=f=>{f._hoverActive=!1,f._isMouseInside=!1,f.onmouseenter=()=>{f._isMouseInside=!0,cr()&&(f._hoverActive=!0,f.style.setProperty("animation","grow 0.25s forwards"),e.style.setProperty("cursor","pointer"),tn=!0)},f.onmouseleave=()=>{f._isMouseInside=!1,f._hoverActive&&(f._hoverActive=!1,f.style.setProperty("animation","shrink 0.25s forwards"),e.style.setProperty("cursor","default"),tn=!1,$t())}};F&&pp(F),B&&pp(B);const ra=document.getElementById("plaintext-link");ra&&(ra.onmouseover=()=>{cr()&&(ra.style.setProperty("animation","plaintextGrow 0.25s forwards"),e.style.setProperty("cursor","pointer"))},ra.onmouseout=()=>{cr()&&(ra.style.setProperty("animation","plaintextShrink 0.25s forwards"),e.style.setProperty("cursor","default"))},ra.onclick=f=>{f&&f.stopPropagation();let x="about";typeof As<"u"&&As?x="web":typeof Li<"u"&&Li?x="ar":typeof Ss<"u"&&Ss?x="games":typeof Ts<"u"&&Ts?x="houdini":typeof hi<"u"&&hi&&(x="about"),window.location.href=`./${x}/index.html`});function cv(f){if(!f){$t(),e.style.setProperty("cursor","default");return}e.style.setProperty("cursor","pointer"),f==="questionBox"?Md(at,_.interaction.hoverColor3D||"#91bfff"):f==="houdiniToy"?q0(tt,_.interaction.hoverColor3D||"#91bfff"):f==="webGlobe"?Md(ht,_.interaction.hoverColor3D||"#91bfff"):f==="gamesAlien"?Md(Ce,_.interaction.hoverColor3D||"#91bfff"):f==="arPhone"?Qh(Rr&&Rr.length>0?Rr:we,_.interaction.hoverColor3D||"#91bfff"):f==="bug"&&Qh(et,_.interaction.hoverColor3D||"#91bfff")}function uv(){const f=_.ar3D;return f?(r?f.mobile?f.mobile.position:f.desktop.position:f.desktop?f.desktop.position:{x:-2,y:1.54,z:-4.3})||{x:-2,y:1.54,z:-4.3}:{x:-2,y:1.54,z:-4.3}}function mp(){const f=_.ar3D;if(!f)return{rx:2,rz:1.2};if(typeof r<"u"&&r&&f.mobile){const N=f.mobile.walkRadiusX,W=f.mobile.walkRadiusZ;return{rx:N,rz:W}}const x=f.walkRadiusX,A=f.walkRadiusZ;return{rx:x,rz:A}}function Nc(){const f=_.ar3D,x=uv();if(!f)return{x:x.x,z:x.z};let A=0,N=0;return typeof r<"u"&&r&&f.mobile?(A=f.mobile.walkRadiusOffsetX,N=f.mobile.walkRadiusOffsetZ):(A=f.walkRadiusOffsetX,N=f.walkRadiusOffsetZ),{x:x.x+A,z:x.z+N}}function gp(f,x){bs="inspecting";const A=x.pauseDuration;cl=f+A,jo=cl+x.walkDuration}function dv(f,x,A){const N=f.x-x,W=f.z-A;ll=Math.atan2(-N,-W)+(Math.random()-.5)*(Math.PI*.5)}function fv(f){if(!we||!_.ar3D||_.ar3D.enabled===!1)return;const x=_.ar3D,A=performance.now(),N=Nc(),{rx:W,rz:te}=mp(),ee=(ul||tr)&&!zi&&Ti===0,Z=zi||Ti>0,be=typeof Ic=="function"&&Ic()||Li||Hi,Le=ee||Z||be,ke=(x.rotation&&x.rotation.y!==void 0?x.rotation.y:90)*Math.PI/180,Re=ke+Math.PI,Oe=ke+Math.PI-pt.rotation.y;let He=Oe-we.rotation.y;if(He=Math.atan2(Math.sin(He),Math.cos(He)),!Fh&&typeof Fs<"u"&&Fs){Fh=!0,bs="inspecting";const Pt=x.initialWalkDelay;cl=A+Pt,jo=cl+x.walkDuration,we.rotation.y=Re}const nt=x.hoverTurnSpeed*Math.PI/180;(we.userData.wasHoveredOrClicked||!1)&&!Le&&gp(A,x),we.userData.wasHoveredOrClicked=Le;const zt=bs==="walking"&&!Le?1:0,Lt=Math.min(1,7*f);if(Qo+=(zt-Qo)*Lt,Qo<.001&&(Qo=0),Le){if(bs==="walking"&&(bs="inspecting"),Z||be)we.rotation.y=Oe,al=!1;else if(ee&&Math.abs(He)>.01){al=!0;const Pt=nt*f;we.rotation.y+=Math.sign(He)*Math.min(Math.abs(He),Pt)}else ee&&(we.rotation.y=Oe,al=!1);return}if(al=!1,bs==="inspecting"){if(!Ih){let Pt=Re-we.rotation.y;Pt=Math.atan2(Math.sin(Pt),Math.cos(Pt));const ut=Math.min(1,6*f);we.rotation.y+=Pt*ut}if(A>=cl){bs="walking",Ih=!0;const Pt=we.position;dv(Pt,N.x,N.z),jo=A+x.walkDuration}}else if(bs==="walking"){const Pt=we.position,ut=N.x,dt=N.z,At=U0.set(Math.sin(ll),0,Math.cos(ll)).normalize(),nn=Pt.x-ut,It=Pt.z-dt,Se=nn/W*(nn/W)+It/te*(It/te);if(Se>.75){const O=H0.set(-nn,0,-It).normalize(),Q=Math.max(0,Math.min(1,(Se-.75)/(1-.75))),_e=Math.min(1,Q*.8*60*f);At.lerp(O,_e).normalize(),ll=Math.atan2(At.x,At.z)}if(et&&_.linkedin3D&&_.linkedin3D.enabled!==!1){const O=or(),Q=O*1.5,_e=Pt.x-et.position.x,G=Pt.z-et.position.z,de=Math.sqrt(_e*_e+G*G);if(de<Q){const fe=Math.max(0,Math.min(1,(de-O)/(Q-O))),Ge=de<.001?Vh.set(1,0,0):Vh.set(_e,0,G).normalize();let Je=Ge.x*At.z-Ge.z*At.x;Math.abs(Je)<.05&&(Je=1);const Fe=G0.set(-Ge.z,0,Ge.x);Je<0&&Fe.negate();const he=V0.copy(Ge).multiplyScalar(.7).addScaledVector(Fe,.3).normalize(),Ae=Math.min(1,(1-fe)*.9*60*f);At.lerp(he,Ae).normalize(),ll=Math.atan2(At.x,At.z)}}let j=ke+Math.atan2(At.x,At.z)-we.rotation.y;j=Math.atan2(Math.sin(j),Math.cos(j));const $=Math.min(1,6*f);if(we.rotation.y+=j*$,Qo>0){const Q=x.speed*Qo*60*f;if(we.position.addScaledVector(At,Q),et&&_.linkedin3D&&_.linkedin3D.enabled!==!1){const fe=or(),Ge=we.position.x-et.position.x,Je=we.position.z-et.position.z,Fe=Math.sqrt(Ge*Ge+Je*Je);if(Fe<fe){let he;if(Fe<.001){const Ae=Math.random()*Math.PI*2;he=Wh.set(Math.cos(Ae),0,Math.sin(Ae))}else he=Wh.set(Ge,0,Je).normalize();we.position.x=et.position.x+he.x*(fe+.02),we.position.z=et.position.z+he.z*(fe+.02)}}const _e=we.position.x-ut,G=we.position.z-dt;if(_e/W*(_e/W)+G/te*(G/te)>1.01){const fe=Math.atan2(G,_e);we.position.x=ut+Math.cos(fe)*W*.98,we.position.z=dt+Math.sin(fe)*te*.98}}jo===0&&(jo=A+x.walkDuration),A>jo&&x.inspectEnabled!==!1&&gp(A,x)}else bs="walking"}function vp(f,x){const A=x.minWalkAfterInspect!==void 0?x.minWalkAfterInspect:4e3,N=x.walkPauseVariance!==void 0?x.walkPauseVariance:4e3;Ac=f+A+Math.random()*N}function _l(f){if(hd===f)return;const x=.2,A=.2,N={walk:ml,inspect:fd,fall:ta,stand:na};Object.keys(N).forEach(W=>{const te=N[W];te&&(W===f?te.reset().fadeIn(A).play():te.fadeOut(x))}),hd=f}function hv(){Pi="falling",_l("fall"),Sv()}function pv(){Pi="standing",_l("stand"),Av()}function mv(){Pi="inspecting",et.rotation.y,_l("inspect"),fl=performance.now()+Math.random()*1500+2e3,vp(fl,_.linkedin3D)}function gv(f,x){const A=Math.random()*1500+2e3;Pi="inspecting",et.rotation.y,fl=f+A,vp(fl,x),_l("inspect")}let Nd=null,Bd=null,oa=null,Bc=null,kc=null,Oc=null,zc=null,Uc=null;function vv(f){const x=_.renderStyles,A=x&&x[f]||{},N=A.dishMaterialOverride;if(X)if(N&&N.override){const Z=`${f}_dish_${N.type}_${N.color}_${N.roughness}_${N.metalness}`;if(kc!==Z){kc=Z;const be=new se(N.color||"#ffffff");N.type==="unlit"?Nd=new Ut({color:be,transparent:!1,opacity:1,depthWrite:!0,side:xn}):Nd=new hn({color:be,roughness:N.roughness!==void 0?N.roughness:.5,metalness:N.metalness!==void 0?N.metalness:.1,transparent:!1,opacity:1,depthWrite:!0,side:xn})}X.traverse(be=>{be.isMesh&&(be.userData.originalMaterial||(be.userData.originalMaterial=be.material),be.material=Nd)})}else kc!=="default"&&(kc="default",X.traverse(Z=>{Z.isMesh&&Z.userData.originalMaterial&&(Z.material=Z.userData.originalMaterial)}));const W=A.gelMaterialOverride;if(K)if(W&&W.override){const Z=`${f}_gel_${W.type}_${W.color}_${W.roughness}_${W.metalness}`;if(Oc!==Z){Oc=Z;const be=new se(W.color||"#ffffff");W.type==="unlit"?Bd=new Ut({color:be,transparent:!1,opacity:1,depthWrite:!0,side:xn}):Bd=new hn({color:be,roughness:W.roughness!==void 0?W.roughness:.5,metalness:W.metalness!==void 0?W.metalness:.1,transparent:!1,opacity:1,depthWrite:!0,side:xn})}K.traverse(be=>{be.isMesh&&(be.userData.originalMaterial||(be.userData.originalMaterial=be.material),be.material=Bd)})}else Oc!=="default"&&(Oc="default",K.traverse(Z=>{Z.isMesh&&Z.userData.originalMaterial&&(Z.material=Z.userData.originalMaterial)}));const te=A.alienMaterialOverride;if(Ki||es)if(te&&te.override){const Z=`${f}_alien_${te.type}_${te.color}_${te.emissive}_${te.emissiveIntensity}_${te.roughness}_${te.metalness}`;if(zc!==Z){zc=Z;const be=new se(te.color||"#ffffff"),Le=new se(te.emissive||"#000000"),ke=te.emissiveIntensity!==void 0?te.emissiveIntensity:0;te.type==="unlit"?oa=new Ut({color:be,transparent:!1,opacity:1,depthWrite:!0,side:xn}):oa=new hn({color:be,emissive:Le,emissiveIntensity:ke,roughness:te.roughness!==void 0?te.roughness:.1,metalness:te.metalness!==void 0?te.metalness:0,transparent:!1,opacity:1,depthWrite:!0,side:xn})}Ki&&(Ki.material=oa),es&&(es.material=oa),fi&&(fi.material=oa),Mi&&(Mi.material=oa)}else zc!=="default"&&(zc="default",Ki&&(Ki.material=Vo),es&&(es.material=Vo),fi&&(fi.material=rl),Mi&&(Mi.material=rl));const ee=A.arMaterialOverride||A.phoneMaterialOverride;if(Nr&&Nr.length>0)if(ee&&ee.override){const Z=`${f}_ar_${ee.type}_${ee.color}_${ee.emissive}_${ee.emissiveIntensity}_${ee.roughness}_${ee.metalness}`;if(Uc!==Z){Uc=Z;const be=new se(ee.color||"#ffffff"),Le=new se(ee.emissive||"#000000"),ke=ee.emissiveIntensity!==void 0?ee.emissiveIntensity:0;ee.type==="unlit"?Bc=new Ut({color:be,skinning:!0,transparent:!1,opacity:1,depthWrite:!0,side:xn}):Bc=new hn({color:be,emissive:Le,emissiveIntensity:ke,roughness:ee.roughness!==void 0?ee.roughness:.25,metalness:ee.metalness!==void 0?ee.metalness:0,skinning:!0,transparent:!1,opacity:1,depthWrite:!0,side:xn})}Nr.forEach(be=>{be.isMulti&&Array.isArray(be.mesh.material)?be.mesh.material=be.originalMaterials.map(Le=>typeof Si<"u"&&Le===Si||typeof Yo<"u"&&Le===Yo||typeof qo<"u"&&Le===qo||typeof Xo<"u"&&Le===Xo?Le:Bc):be.mesh.material=Bc})}else Uc!=="default"&&(Uc="default",Nr.forEach(Z=>{Z.isMulti?Z.mesh.material=[...Z.originalMaterials]:Z.mesh.material=Z.originalMaterial}))}function xv(){const f=_.boids;return f?typeof r<"u"&&r&&f.mobile?f.mobile.count!==void 0?f.mobile.count:f.count!==void 0?f.count:35:f.desktop&&f.desktop.count!==void 0?f.desktop.count:f.count!==void 0?f.count:80:80}function xp(){const f=_.boids;if(!f)return{rx:11,rz:11};if(typeof r<"u"&&r&&f.mobile){const x=f.mobile.walkRadiusX,A=f.mobile.walkRadiusZ;return{rx:x,rz:A}}if(f.desktop){const x=f.desktop.walkRadiusX,A=f.desktop.walkRadiusZ;return{rx:x,rz:A}}return{rx:f.walkRadiusX,rz:f.walkRadiusZ}}function yv(f,x){const A=new Et,N=f,W=Math.sqrt(3)/2,te=-x*.35,ee=x*.65,Z=0,be=N*1.5,Le=N*.5,ke=[0,be,te],Re=[-N*W,Z,te],Oe=[N*W,Z,te],He=[0,Le,ee],gt=new Float32Array([...ke,...Oe,...Re,...ke,...Re,...He,...Re,...Oe,...He,...Oe,...ke,...He]);return A.setAttribute("position",new qt(gt,3)),A.computeVertexNormals(),A}function _v(){const f=_.boids;if(!f||f.enabled===!1)return;Ks=xv();const x=f.size,A=f.length,N=f.yHeight,W=f.shadowY,te=f.shadowScale,ee=yv(x,A);mc=new hn({color:16777215,roughness:f.material&&f.material.roughness!==void 0?f.material.roughness:.35,metalness:f.material&&f.material.metalness!==void 0?f.material.metalness:.5,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),td=new Ut({color:16777215,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),En=new Bf(ee,mc,Ks),En.instanceMatrix.setUsage(za),En.renderOrder=4,En.frustumCulled=!1;const Z=new cs(x*2.2*te,A*1.5*te);Z.rotateX(-Math.PI/2);const be=Os("graphics/shadow.webp"),Le=new Ut({map:be,transparent:!0,opacity:f.shadowOpacity,depthWrite:!1,depthTest:!0,side:xn,blending:Wi,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});ri=new Bf(Z,Le,Ks),ri.instanceMatrix.setUsage(za),ri.renderOrder=3,ri.frustumCulled=!1,oi=new Float32Array(Ks*3),$i=new Float32Array(Ks*3),wi=new Float32Array(Ks*4),xs=new Float32Array(Ks*3);const{rx:ke,rz:Re}=xp();for(let dt=0;dt<Ks;dt++){const At=Math.random()*Math.PI*2,nn=Math.sqrt(Math.random())*.87,It=Math.cos(At)*nn*ke,Se=Math.sin(At)*nn*Re;oi[dt*3+0]=It,oi[dt*3+1]=N,oi[dt*3+2]=Se;const T=Math.random()*Math.PI*2,j=f.maxSpeed*(.6+Math.random()*.4),$=Math.cos(T)*j,O=Math.sin(T)*j;$i[dt*3+0]=$,$i[dt*3+1]=0,$i[dt*3+2]=O,il.set(It,N,Se),xc.set(It,W,Se),Ji.set($,0,O).normalize(),Ji.lengthSq()>1e-4?Ar.setFromUnitVectors(Lh,Ji):Ar.identity(),wi[dt*4+0]=Ar.x,wi[dt*4+1]=Ar.y,wi[dt*4+2]=Ar.z,wi[dt*4+3]=Ar.w;const Q=f.colorIntensity,_e=1*Q,G=.28*Q,de=.08*Q;xs[dt*3+0]=_e,xs[dt*3+1]=G,xs[dt*3+2]=de,yc.setRGB(_e,G,de),En.setColorAt(dt,yc),bn.position.copy(il),bn.quaternion.copy(Ar),bn.scale.set(1,1,1),bn.updateMatrix(),En.setMatrixAt(dt,bn.matrix),bn.position.copy(xc),bn.quaternion.copy(Ar),bn.scale.set(1,1,1),bn.updateMatrix(),ri.setMatrixAt(dt,bn.matrix)}En.instanceMatrix.needsUpdate=!0,En.instanceColor&&(En.instanceColor.needsUpdate=!0),ri.instanceMatrix.needsUpdate=!0,lo=new ci;const He=new Kr(0,0,ke,Re,0,2*Math.PI,!1,0).getPoints(64),gt=new Et().setFromPoints(He),nt=new Gs({color:65484});gc=new Ra(gt,nt),gc.rotation.x=-Math.PI/2,gc.position.y=W+.01,lo.add(gc);const it=f.cursorAvoidRadius,Lt=new Kr(0,0,it,it,0,2*Math.PI,!1,0).getPoints(32),Pt=new Et().setFromPoints(Lt),ut=new Gs({color:16750848});vc=new Ra(Pt,ut),vc.rotation.x=-Math.PI/2,vc.position.y=W+.01,lo.add(vc),lo.visible=!1,pt.add(ri),pt.add(En),pt.add(lo)}function bv(f){if(!En||!_.boids||_.boids.enabled===!1)return;const x=_.renderStyles&&Array.isArray(_.renderStyles.activeModes)?_.renderStyles.activeModes:["default"],A=_.renderStyles&&_.renderStyles.currentModeIndex!==void 0?_.renderStyles.currentModeIndex:0,N=x[A%x.length]||"default",W=_.renderStyles&&_.renderStyles[N]||{},te=W.hideBoidShadows===!0||W.boidShadows===!1||W.hideShadows===!0||W.shadows===!1;ri&&(ri.visible=!te);const ee=_.boids,Z=Ks,be=ee.yHeight,Le=ee.shadowY,ke=ee.maxSpeed,Re=ee.maxForce,Oe=ee.separationRadius,He=Oe*Oe,gt=ee.neighborRadius,nt=gt*gt,it=ee.separationWeight,zt=ee.alignmentWeight,Lt=ee.cohesionWeight,Pt=ee.obstacleAvoidanceWeight,ut=ee.obstacleAvoidRadius,dt=ut*ut,{rx:At,rz:nn}=xp(),It=W.boidMaterialOverride,Se=W.boidColorOverride||W.boidsColorOverride,T=W.boidColor||W.boidsColor,j=It&&It.override&&It.type==="unlit"||Se&&Se.override&&(Se.type==="unlit"||Se.unlit===!0)||W.boidUnlit===!0||W.boidsUnlit===!0;if(En&&mc&&td){const Ae=j?td:mc;En.material!==Ae&&(En.material=Ae)}let $=!1;ot&&ot.x>-900&&Ft&&$e&&(Ph.set(Ie,-be),Ch.setFromCamera(ot,Ft),Ch.ray.intersectPlane(Ph,Go)&&(pt&&pt.worldToLocal(Go),$=!0));const O=[],Q=at?at.position:r&&_.questionBox.mobile?_.questionBox.mobile.position:_.questionBox.position;Q&&O.push(Q),tt&&O.push(tt.position),ht&&O.push(ht.position),Ce&&O.push(Ce.position),we&&O.push(we.position),et&&O.push(et.position);const _e=Math.min(2,f*60),G=ee.colorSmoothing,de=Math.min(1,G*60*f),fe=ee.rotationSmoothing,Ge=Math.min(1,fe*60*f),Je=ee.colorIntensity;lt.length<Z&&(lt=new Int32Array(Z*2)),ce.fill(-1);const Fe=Math.max(.5,gt),he=Ue/2;for(let Ae=0;Ae<Z;Ae++){const me=Ae*3;let Me=Math.floor(oi[me+0]/Fe)+he,xe=Math.floor(oi[me+2]/Fe)+he;Me<0?Me=0:Me>=Ue&&(Me=Ue-1),xe<0?xe=0:xe>=Ue&&(xe=Ue-1);const ue=Me+xe*Ue;lt[Ae]=ce[ue],ce[ue]=Ae}for(let Ae=0;Ae<Z;Ae++){const me=Ae*3,Me=oi[me+0],xe=oi[me+2];let ue=$i[me+0],Ve=$i[me+2];const sn=Math.sqrt(ue*ue+Ve*Ve);il.set(Me,be,xe),sl.set(ue,0,Ve),er.set(0,0,0),Mr.set(0,0,0),Sr.set(0,0,0),k0.set(0,0,0),ys.set(0,0,0);let Mt=0,jn=0,Pn=0,dn=0,Dn=0,Dt=Math.floor(Me/Fe)+he,fn=Math.floor(xe/Fe)+he;Dt<0?Dt=0:Dt>=Ue&&(Dt=Ue-1),fn<0?fn=0:fn>=Ue&&(fn=Ue-1);const Nn=Dt>0?Dt-1:0,Jt=Dt<Ue-1?Dt+1:Ue-1,wt=fn>0?fn-1:0,Gt=fn<Ue-1?fn+1:Ue-1;for(let Kt=Nn;Kt<=Jt;Kt++)for(let rn=wt;rn<=Gt;rn++){const Qn=Kt+rn*Ue;let Bn=ce[Qn];for(;Bn!==-1;){if(Ae!==Bn){const li=Bn*3,Vr=Me-oi[li+0],dr=xe-oi[li+2],Bs=Vr*Vr+dr*dr;Bs>1e-5&&Bs<He&&(Mr.x+=Vr/Bs,Mr.z+=dr/Bs,Mt++),Bs>1e-5&&Bs<nt&&(Sr.x+=$i[li+0],Sr.z+=$i[li+2],jn++,dn+=oi[li+0],Dn+=oi[li+2],Pn++)}Bn=lt[Bn]}}Mt>0&&(Mr.multiplyScalar(1/Mt),Mr.lengthSq()>0&&(Mr.normalize().multiplyScalar(ke).sub(sl),Mr.clampLength(0,Re),er.addScaledVector(Mr,it))),jn>0&&(Sr.multiplyScalar(1/jn),Sr.lengthSq()>0&&(Sr.normalize().multiplyScalar(ke).sub(sl),Sr.clampLength(0,Re),er.addScaledVector(Sr,zt))),Pn>0&&(dn/=Pn,Dn/=Pn,Ji.set(dn-Me,0,Dn-xe),Ji.lengthSq()>0&&(Ji.normalize().multiplyScalar(ke).sub(sl),Ji.clampLength(0,Re),er.addScaledVector(Ji,Lt)));let St=0,Rt=0;const un=ee.obstacleLookAhead,Ds=Math.max(1e-4,sn),Ns=ue/Ds*un,Op=Ve/Ds*un;for(let Kt=0;Kt<O.length;Kt++){const rn=O[Kt],Qn=Me-rn.x,Bn=xe-rn.z,li=Qn*Qn+Bn*Bn,Vr=Me+Ns-rn.x,dr=xe+Op-rn.z,Bs=Vr*Vr+dr*dr,qc=Math.min(li,Bs);if(qc<dt){const jc=Math.sqrt(qc),Ml=Math.sqrt(li),Sl=Math.max(.001,Ml),Hd=Math.pow((ut-jc)/ut,1.2);ys.x+=Qn/Sl*Hd,ys.z+=Bn/Sl*Hd,St++,Rt=Math.max(Rt,Hd)}}const Xv=ee.mouseAvoidanceEnabled!==!1,Yv=ee.cursorAvoidanceWeight,Vc=ee.cursorAvoidRadius,qv=Vc*Vc;if($&&Xv){const Kt=Me-Go.x,rn=xe-Go.z,Qn=Kt*Kt+rn*rn,Bn=Me+Ns-Go.x,li=xe+Op-Go.z,Vr=Bn*Bn+li*li,dr=Math.min(Qn,Vr);if(dr<qv){const Bs=Math.sqrt(dr),qc=Math.sqrt(Qn),jc=Math.max(.001,qc),Ml=Math.pow((Vc-Bs)/Vc,1.2),Sl=Yv/Math.max(.01,Pt);ys.x+=Kt/jc*Ml*Sl,ys.z+=rn/jc*Ml*Sl,St++,Rt=Math.max(Rt,Ml)}}St>0&&(ys.multiplyScalar(1/St),ys.lengthSq()>0&&(ys.normalize().multiplyScalar(ke).sub(sl),ys.clampLength(0,Re*1.8),er.addScaledVector(ys,Pt)));const zp=Me/At*(Me/At)+xe/nn*(xe/nn);if(zp>.75){const Kt=-Me,rn=-xe,Qn=Math.sqrt(Kt*Kt+rn*rn);if(Qn>.001){const Bn=Math.max(0,Math.min(1,(zp-.75)/.25)),li=Re*2*Bn;er.x+=Kt/Qn*li,er.z+=rn/Qn*li}}ue+=er.x*_e,Ve+=er.z*_e;const yo=Math.sqrt(ue*ue+Ve*Ve);if(yo>ke)ue=ue/yo*ke,Ve=Ve/yo*ke;else if(yo<ke*.3){const Kt=ke*.3;if(yo>1e-5)ue=ue/yo*Kt,Ve=Ve/yo*Kt;else{const rn=Math.random()*Math.PI*2;ue=Math.cos(rn)*Kt,Ve=Math.sin(rn)*Kt}}let _o=Me+ue*_e,bo=xe+Ve*_e;if(_o/At*(_o/At)+bo/nn*(bo/nn)>1){const Kt=Math.atan2(bo,_o);_o=Math.cos(Kt)*At*.98,bo=Math.sin(Kt)*nn*.98,ue=-ue*.5,Ve=-Ve*.5}oi[me+0]=_o,oi[me+1]=be,oi[me+2]=bo,$i[me+0]=ue,$i[me+1]=0,$i[me+2]=Ve;let wo=.5,Mo=.3,aa=.3;if(Se&&Se.override&&Se.color)Er.set(Se.color),wo=Er.r,Mo=Er.g,aa=Er.b;else if(T)Er.set(T),wo=Er.r,Mo=Er.g,aa=Er.b;else{const Kt=Math.sqrt(ue*ue+Ve*Ve);if(Kt>1e-4){const Qn=Math.abs(Ve)/Kt,Bn=Math.abs(ue)/Kt;wo=Qn*1+Bn*.08,Mo=Qn*.28+Bn*.85,aa=Qn*.08+Bn*.95}const rn=Math.max(0,Math.min(1,Rt));wo=wo*(1-rn)+1*rn,Mo=Mo*(1-rn)+0*rn,aa=aa*(1-rn)+0*rn}wo*=Je,Mo*=Je;const jv=aa*Je;let Wc=xs[me+0],Xc=xs[me+1],Yc=xs[me+2];Wc+=(wo-Wc)*de,Xc+=(Mo-Xc)*de,Yc+=(jv-Yc)*de,xs[me+0]=Wc,xs[me+1]=Xc,xs[me+2]=Yc,yc.setRGB(Wc,Xc,Yc),En.setColorAt(Ae,yc),il.set(_o,be,bo),xc.set(_o,Le,bo),Ji.set(ue,0,Ve).normalize(),Ji.lengthSq()>1e-4&&Eh.setFromUnitVectors(Lh,Ji);const Gr=Ae*4;Tr.set(wi[Gr+0],wi[Gr+1],wi[Gr+2],wi[Gr+3]),Tr.slerp(Eh,Ge),wi[Gr+0]=Tr.x,wi[Gr+1]=Tr.y,wi[Gr+2]=Tr.z,wi[Gr+3]=Tr.w,bn.position.copy(il),bn.quaternion.copy(Tr),bn.scale.set(1,1,1),bn.updateMatrix(),En.setMatrixAt(Ae,bn.matrix),bn.position.copy(xc),bn.quaternion.copy(Tr),bn.scale.set(1,1,1),bn.updateMatrix(),ri&&ri.setMatrixAt(Ae,bn.matrix)}En.instanceMatrix.needsUpdate=!0,En.instanceColor&&(En.instanceColor.needsUpdate=!0),ri&&(ri.instanceMatrix.needsUpdate=!0),lo&&(lo.visible=!1)}let yp=!1;document.addEventListener("visibilitychange",()=>{yp=document.hidden});let _p=0;const bp=1e3/60;function wp(){if(requestAnimationFrame(wp),yp)return;const f=performance.now();if(Ur){const T=f-_p;if(T<bp-1)return;_p=f-T%bp}const x=Math.min(.1,(f-zh)*.001);zh=f;const A=window.innerWidth<=window.innerHeight;if(Zn==="main"&&!A)if(xl){const T=1-Math.pow(.65,x*60),j=Fi;Fi+=(go-Fi)*T;const $=(Fi-j)/Math.max(.001,x);vo=Cn.lerp(vo,$,.4)}else{const T=_.interaction||{},j=T.rotationDamping!==void 0?T.rotationDamping:.94;go+=vo*x,vo*=Math.pow(j,x*60),Math.abs(vo)<1e-4&&(vo=0);const $=1-Math.pow(1-.12,x*60);Fi+=(go-Fi)*$}else{go=0,vo=0;const T=1-Math.pow(1-.12,x*60);Fi+=(0-Fi)*T}const N=x>0?Math.abs(Fi-Kh)/x:0;if(Kh=Fi,Fs&&_.linkedin3D&&_.linkedin3D.enabled!==!1&&et){const T=_.linkedin3D.fallRotationSpeedThreshold;N>T&&Pi!=="falling"&&Pi!=="standing"&&hv()}const W=r?_.camera.mobile:_.camera.desktop,te=W.position,ee=W.lookAt;if(Ft.position.copy(te),Ft.lookAt(ee.x,ee.y,ee.z),Pc||(pt.rotation.y=Fi),Cc>=0){const T=performance.now()*.001-Cc,j=Math.min(T/.9,1);bd=.05+.95*(1-Math.pow(1-j,3)),j>=1&&(bd=1,Cc=-1)}pt.scale.setScalar(bd);const Z=Zn==="main"&&Fs?1:0;let be=!1,Le=!1,ke=!1;const Re=Hc(_t,Wt),Oe=Ln();if(!Ur&&Fs&&(ft||Oe)){let T=null;if(Zt&&at&&ws===0)T="questionBox";else if(tr&&we&&!zi&&Ti===0)T="arPhone";else if(ii&&tt&&!is&&Ms===0)T="houdiniToy";else if(wr&&ht)T="webGlobe";else if(Pr&&Ce&&!ts&&ns===0)T="gamesAlien";else if(tn&&et)T="bug";else if(!Oe&&!Re&&ft&&Zn==="main"){if($e.setFromCamera(ot,Ft),md.length=0,gd.length=0,vd.length=0,xd.length=0,yd.length=0,_d.length=0,et&&$e.intersectObject(et,!0,md),at&&ws===0&&$e.intersectObject(at,!0,gd),we&&!zi&&Ti===0&&$e.intersectObject(we,!0,_d),tt&&!is&&Ms===0&&$e.intersectObject(tt,!0,vd),ht&&$e.intersectObject(ht,!0,xd),Ce&&!ts&&ns===0&&$e.intersectObject(Ce,!0,yd),md.length>0?T="bug":gd.length>0?T="questionBox":_d.length>0?T="arPhone":vd.length>0?T="houdiniToy":ht&&xd.length>0?T="webGlobe":Ce&&yd.length>0&&(T="gamesAlien"),!T&&nr){let j=null,$=.55;if(nr==="questionBox"){j=at;const O=_.questionBox?_.questionBox.hover:null;$=O&&O.hysteresisRadius!==void 0?O.hysteresisRadius:.55}else if(nr==="arPhone"){j=we;const O=_.ar3D?_.ar3D.hover:null;$=O&&O.hysteresisRadius!==void 0?O.hysteresisRadius:.55}else if(nr==="houdiniToy"){j=tt;const O=_.houdini3D?_.houdini3D.hover:null;$=O&&O.hysteresisRadius!==void 0?O.hysteresisRadius:.55}else if(nr==="webGlobe"){j=ht;const O=_.web3D?_.web3D.hover:null;$=O&&O.hysteresisRadius!==void 0?O.hysteresisRadius:.55}else if(nr==="gamesAlien"){j=Ce;const O=_.games3D?_.games3D.hover:null;$=O&&O.hysteresisRadius!==void 0?O.hysteresisRadius:.55}else if(nr==="bug"){j=et;const O=_.linkedin3D?_.linkedin3D.hover:null;$=O&&O.hysteresisRadius!==void 0?O.hysteresisRadius:.35}j&&(j.getWorldPosition(kh),$e.ray.distanceToPoint(kh)<=$&&(T=nr))}nr=T}be=T==="questionBox",ul=T==="arPhone",Le=T==="houdiniToy",Oi=T==="webGlobe",co=T==="gamesAlien",ke=T==="bug",cv(T),T?e.style.setProperty("cursor","pointer"):e.style.setProperty("cursor","default")}else be=!1,ul=!1,Le=!1,Oi=!1,co=!1,ke=!1,$t(),e.style.setProperty("cursor","default");be!==zn&&(!Br&&!hi&&!Ei?be?(si=!1,Pv()):(si&&Cv(),si=!1):si=!1,zn=be),Le!==uc&&(is?Ka=!1:Le?(Ka=!1,Rv()):(Ka&&Fv(),Ka=!1),uc=Le),Oi!==Mh&&(!Js&&Uo===0?Oi?(el=!1,Dv()):(el&&Tp(),el=!1):el=!1,Mh=Oi),co!==Rh&&(!ts&&ns===0?co?(ol=!1,Hv()):(ol&&Gv(),ol=!1):ol=!1,Rh=co),ke!==Sh&&(Pi!=="falling"&&ke&&Tv(),Sh=ke);let He=null;be?He="about":ul?He="ar":Le?He="houdini":Oi?He="web":co?He="games":ke&&(He="linkedin");function gt(T){return T==="about"?Zt:T==="ar"?tr:T==="houdini"?ii:T==="web"?wr:T==="games"?Pr:T==="linkedin"?tn:!1}if(He!==Zi){if(Zi&&!gt(Zi)){const T=D[Zi];T&&(T.desktop&&Zn!==Zi&&!T.desktop.classList.contains("is-panel-open")&&T.desktop.style.setProperty("animation","shrink 0.25s forwards"),T.mobile&&Zn!==Zi&&!T.mobile.classList.contains("is-panel-open")&&T.mobile.style.setProperty("animation","shrink 0.25s forwards"))}if(He&&!gt(He)){const T=D[He];T&&(T.desktop&&Zn!==He&&!T.desktop.classList.contains("is-panel-open")&&T.desktop.style.setProperty("animation","grow 0.25s forwards"),T.mobile&&Zn!==He&&!T.mobile.classList.contains("is-panel-open")&&T.mobile.style.setProperty("animation","grow 0.25s forwards"))}Zi=He}if(!Ur&&cr()&&(l&&(l._isMouseInside||l.matches&&l.matches(":hover"))&&!l._hoverActive&&(l._hoverActive=!0,l.style.setProperty("animation","grow 0.25s forwards"),e.style.setProperty("cursor","pointer")),hp.forEach(T=>{const j=!T.currentTarget||Zn!==T.currentTarget;T.elements.forEach($=>{$&&!$.classList.contains("is-panel-open")&&j&&($._isMouseInside||$.matches&&$.matches(":hover"))&&!$._hoverActive&&($._hoverActive=!0,$.style.setProperty("animation","grow 0.25s forwards"),e.style.setProperty("cursor","pointer"),T.hoverType==="about"?Zt=!0:T.hoverType==="ar"?tr=!0:T.hoverType==="houdini"?ii=!0:T.hoverType==="web"?wr=!0:T.hoverType==="games"&&(Pr=!0))})}),[F,B].forEach(T=>{T&&(T._isMouseInside||T.matches&&T.matches(":hover"))&&!T._hoverActive&&(T._hoverActive=!0,T.style.setProperty("animation","grow 0.25s forwards"),e.style.setProperty("cursor","pointer"),tn=!0)})),Pc){const T=performance.now()*.001-nv,j=_.interaction.spinDuration,$=Math.min(T/j,1),O=av($);pt.rotation.y=Jh+O*Math.PI*2,$>=1&&(Pc=!1,pt.rotation.y=(Jh+Math.PI*2)%(Math.PI*2),Fi=pt.rotation.y,go=Fi)}const nt=_.renderStyles&&Array.isArray(_.renderStyles.activeModes)?_.renderStyles.activeModes:["default"],it=_.renderStyles&&_.renderStyles.currentModeIndex!==void 0?_.renderStyles.currentModeIndex:0,zt=nt[it%nt.length]||"default",Lt=_.renderStyles&&_.renderStyles[zt]||{},Pt=_.interaction&&_.interaction.defaultModeShadowBoost!==void 0?_.interaction.defaultModeShadowBoost:1.45,ut=Lt&&Lt.shadowBoost!==void 0?Lt.shadowBoost:zt==="default"?Pt:1,dt=Lt.hideDish===!0,At=Lt.hideGel===!0;if(vv(zt),ve){const T=!dt,j=!At;if(ve.visible=T||j,X&&(X.visible=T),K&&(K.visible=j),ve.visible){const $=_.plate.scale*Z;Tc.set($,$,$),ve.scale.lerp(Tc,.08),ve.position.lerp(E,.08),ve.rotation.x+=(J.x-ve.rotation.x)*.08,ve.rotation.y+=(J.y-ve.rotation.y)*.08,ve.rotation.z+=(J.z-ve.rotation.z)*.08}}if(K&&(K.visible=!At,K.visible&&(!Lt.gelMaterialOverride||!Lt.gelMaterialOverride.override))){const T=1*Z;Tc.set(T,T,T),K.scale.lerp(Tc,.08),K.children.forEach(j=>{j.isMesh&&j.material&&(j.material.color.set(_.gel.glass.color),j.material.transmission=_.gel.glass.transmission,j.material.ior=_.gel.glass.ior,j.material.roughness=_.gel.glass.roughness,j.material.reflectivity=_.gel.glass.reflectivity,j.material.clearcoat=_.gel.glass.clearcoat,j.material.opacity=_.gel.glass.opacity,j.material.clearcoatRoughness=_.gel.glass.clearcoatRoughness)}),K.isMesh&&K.material&&(K.material.color.set(_.gel.glass.color),K.material.transmission=_.gel.glass.transmission,K.material.ior=_.gel.glass.ior,K.material.roughness=_.gel.glass.roughness,K.material.reflectivity=_.gel.glass.reflectivity,K.material.opacity=_.gel.glass.opacity,K.material.clearcoat=_.gel.glass.clearcoat,K.material.clearcoatRoughness=_.gel.glass.clearcoatRoughness)}if(typeof Hn<"u"&&Hn&&(Hn.uniforms.uTime.value=performance.now()*.001,Hn.uniforms.uRainbowIntensity.value=_.plate.rainbow.intensity,Hn.uniforms.uRainbowScale.value=_.plate.rainbow.scale,Hn.uniforms.uRainbowAngleFactor.value=_.plate.rainbow.angleFactor,Hn.uniforms.uRainbowShimmer.value=_.plate.rainbow.shimmer,Hn.uniforms.uRainbowShimmerSpeed.value=_.plate.rainbow.shimmerSpeed,Hn.uniforms.uRainbowCenterSmoothness.value=_.plate.rainbow.centerSmoothness,Hn.uniforms.uRainbowCenterOffset.value.set(..._.plate.rainbow.centerOffset),Hn.uniforms.uPaletteA.value.set(..._.plate.rainbow.paletteA),Hn.uniforms.uPaletteB.value.set(..._.plate.rainbow.paletteB),Hn.uniforms.uPaletteC.value.set(..._.plate.rainbow.paletteC),Hn.uniforms.uPaletteD.value.set(..._.plate.rainbow.paletteD),Hn.uniforms.uRainbowFresnelMultiply.value=_.plate.rainbow.fresnelMultiply,Hn.uniforms.uSkyboxRotation.value=_.lights.skyboxRotation*Math.PI/180),typeof Fc<"u"&&Fc&&(Fc.uniforms.uSkyboxRotation.value=_.lights.skyboxRotation*Math.PI/180),po&&(Ft.getWorldPosition(Ec),po.lookAt(Ec),_.questionBox)){const T=0*Math.PI/180,j=_.questionBox.billboardRotationY*Math.PI/180,$=0*Math.PI/180;po.rotateX(T),po.rotateY(j),po.rotateZ($);const O=_.questionBox.planeScale;po.scale.set(O,O,O)}if(et&&Uh&&_.linkedin3D&&_.linkedin3D.enabled!==!1){const T=_.linkedin3D,j=performance.now(),$=j<fl,O=Zn==="main"&&Fs&&!$&&Pi!=="falling"&&Pi!=="standing";O&&(Pi!=="walking"&&(Pi="walking",_l("walk")),Ac===0&&(Ac=j+Math.random()*4e3+2e3),j>Ac&&gv(j,T));const Q=O&&Pi!=="inspecting"?1:0,_e=Math.min(1,7*x);if(ho+=(Q-ho)*_e,ho<.001&&(ho=0),ho>0){const Fe=et.position,{rx:he,rz:Ae}=Gh(),me=or(),Me=me*1.5,xe=(Math.random()-.5)*.15*60*x;Sc+=xe;const ue=O0.set(Math.sin(Sc),0,Math.cos(Sc)).normalize(),Ve=Fe.x/he*(Fe.x/he)+Fe.z/Ae*(Fe.z/Ae);if(Ve>.8){const Dt=z0.set(-Fe.x,0,-Fe.z).normalize(),fn=Math.max(0,Math.min(1,(Ve-.8)/(1-.8))),Nn=Math.min(1,fn*.8*60*x);ue.lerp(Dt,Nn).normalize()}{const Dt=at?at.position:r&&_.questionBox.mobile?_.questionBox.mobile.position:_.questionBox.position,fn=W0.set(Fe.x-Dt.x,0,Fe.z-Dt.z),Nn=fn.length();if(Nn<Me){const Jt=Math.max(0,Math.min(1,(Nn-me)/(Me-me))),wt=Nn<.001?Es.set(1,0,0):Es.copy(fn).normalize();let Gt=wt.x*ue.z-wt.z*ue.x;Math.abs(Gt)<.05&&(Gt=1);const St=gl.set(-wt.z,0,wt.x);Gt<0&&St.negate();const Rt=vl.copy(wt).multiplyScalar(.7).addScaledVector(St,.3).normalize(),un=Math.min(1,(1-Jt)*.9*60*x);ue.lerp(Rt,un).normalize()}if(tt){const Jt=Lc.subVectors(Fe,tt.position);Jt.y=0;const wt=Jt.length();if(wt<Me){const Gt=Math.max(0,Math.min(1,(wt-me)/(Me-me))),St=wt<.001?Es.set(1,0,0):Es.copy(Jt).normalize();let Rt=St.x*ue.z-St.z*ue.x;Math.abs(Rt)<.05&&(Rt=1);const un=gl.set(-St.z,0,St.x);Rt<0&&un.negate();const Ds=vl.copy(St).multiplyScalar(.7).addScaledVector(un,.3).normalize(),Ns=Math.min(1,(1-Gt)*.9*60*x);ue.lerp(Ds,Ns).normalize()}}if(ht){const Jt=Lc.subVectors(Fe,ht.position);Jt.y=0;const wt=Jt.length();if(wt<Me){const Gt=Math.max(0,Math.min(1,(wt-me)/(Me-me))),St=wt<.001?Es.set(1,0,0):Es.copy(Jt).normalize();let Rt=St.x*ue.z-St.z*ue.x;Math.abs(Rt)<.05&&(Rt=1);const un=gl.set(-St.z,0,St.x);Rt<0&&un.negate();const Ds=vl.copy(St).multiplyScalar(.7).addScaledVector(un,.3).normalize(),Ns=Math.min(1,(1-Gt)*.9*60*x);ue.lerp(Ds,Ns).normalize()}}if(Ce){const Jt=Lc.subVectors(Fe,Ce.position);Jt.y=0;const wt=Jt.length();if(wt<Me){const Gt=Math.max(0,Math.min(1,(wt-me)/(Me-me))),St=wt<.001?Es.set(1,0,0):Es.copy(Jt).normalize();let Rt=St.x*ue.z-St.z*ue.x;Math.abs(Rt)<.05&&(Rt=1);const un=gl.set(-St.z,0,St.x);Rt<0&&un.negate();const Ds=vl.copy(St).multiplyScalar(.7).addScaledVector(un,.3).normalize(),Ns=Math.min(1,(1-Gt)*.9*60*x);ue.lerp(Ds,Ns).normalize()}}if(we){const Jt=Lc.subVectors(Fe,we.position);Jt.y=0;const wt=Jt.length();if(wt<Me){const Gt=Math.max(0,Math.min(1,(wt-me)/(Me-me))),St=wt<.001?Es.set(1,0,0):Es.copy(Jt).normalize();let Rt=St.x*ue.z-St.z*ue.x;Math.abs(Rt)<.05&&(Rt=1);const un=gl.set(-St.z,0,St.x);Rt<0&&un.negate();const Ds=vl.copy(St).multiplyScalar(.7).addScaledVector(un,.3).normalize(),Ns=Math.min(1,(1-Gt)*.9*60*x);ue.lerp(Ds,Ns).normalize()}}}ue.normalize(),Sc=Math.atan2(ue.x,ue.z);const Mt=T.speed*ho*60*x;if(et.position.addScaledVector(ue,Mt),Fe.x/he*(Fe.x/he)+Fe.z/Ae*(Fe.z/Ae)>1.01){const Dt=Math.atan2(Fe.z,Fe.x);et.position.x=Math.cos(Dt)*he*.98,et.position.z=Math.sin(Dt)*Ae*.98}{const Dt=at?at.position:r&&_.questionBox.mobile?_.questionBox.mobile.position:_.questionBox.position,fn=et.position.x-Dt.x,Nn=et.position.z-Dt.z,Jt=Math.sqrt(fn*fn+Nn*Nn);if(Jt<me){let wt;if(Jt<.001){const Gt=Math.random()*Math.PI*2;wt=Ls.set(Math.cos(Gt),0,Math.sin(Gt))}else wt=Ls.set(fn,0,Nn).normalize();et.position.x=Dt.x+wt.x*(me+.02),et.position.z=Dt.z+wt.z*(me+.02)}if(ht){const wt=et.position.x-ht.position.x,Gt=et.position.z-ht.position.z,St=Math.sqrt(wt*wt+Gt*Gt);if(St<me){let Rt;if(St<.001){const un=Math.random()*Math.PI*2;Rt=Ls.set(Math.cos(un),0,Math.sin(un))}else Rt=Ls.set(wt,0,Gt).normalize();et.position.copy(ht.position).addScaledVector(Rt,me+.02)}}if(Ce){const wt=et.position.x-Ce.position.x,Gt=et.position.z-Ce.position.z,St=Math.sqrt(wt*wt+Gt*Gt);if(St<me){let Rt;if(St<.001){const un=Math.random()*Math.PI*2;Rt=Ls.set(Math.cos(un),0,Math.sin(un))}else Rt=Ls.set(wt,0,Gt).normalize();et.position.copy(Ce.position).addScaledVector(Rt,me+.02)}}if(we){const wt=et.position.x-we.position.x,Gt=et.position.z-we.position.z,St=Math.sqrt(wt*wt+Gt*Gt);if(St<me){let Rt;if(St<.001){const un=Math.random()*Math.PI*2;Rt=Ls.set(Math.cos(un),0,Math.sin(un))}else Rt=Ls.set(wt,0,Gt).normalize();et.position.copy(we.position).addScaledVector(Rt,me+.02)}}}let dn=Math.atan2(ue.x,ue.z)-et.rotation.y;dn=Math.atan2(Math.sin(dn),Math.cos(dn));const Dn=Math.min(1,6*x*ho);et.rotation.y+=dn*Dn}{const Fe=or();if(we){const he=et.position.x-we.position.x,Ae=et.position.z-we.position.z,me=Math.sqrt(he*he+Ae*Ae);if(me<Fe){let Me;if(me<.001){const xe=Math.random()*Math.PI*2;Me=Ls.set(Math.cos(xe),0,Math.sin(xe))}else Me=Ls.set(he,0,Ae).normalize();et.position.copy(we.position).addScaledVector(Me,Fe+.02)}}}const de=T.scale*Z,fe=et.scale.x,Ge=Math.min(1,.1*60*x),Je=Cn.lerp(fe,de,Ge);et.scale.set(Je,Je,Je),zr&&zr.update(x)}if(Fs&&_.boids&&_.boids.enabled!==!1&&bv(x),Br&&kr){const j=_.questionBox.shatter.fadeSpeed;let $=!0;hl.forEach(O=>{const Q=O.userData.velocity,_e=O.userData.rotVelocity;if(O.position.addScaledVector(Q,x),O.rotation.x+=_e.x,O.rotation.y+=_e.y,O.rotation.z+=_e.z,O.userData.lifetime-=j*x,O.userData.lifetime>0){const G=Math.max(.001,O.userData.lifetime/O.userData.initialLifetime),de=O.userData.initialScale*G;O.scale.set(de,de,de),O.material&&(O.material.opacity=G),$=!1}else O.scale.set(0,0,0)}),pl.forEach(O=>{const Q=O.userData.velocity;if(O.position.addScaledVector(Q,x),O.lookAt(Ft.position),O.rotation.z+=O.userData.rotVelocityZ,O.userData.lifetime-=j*x,O.userData.lifetime>0){const _e=Math.max(.001,O.userData.lifetime/O.userData.initialLifetime),G=O.userData.initialScale*_e;O.scale.set(G,G,1),O.material&&(O.material.opacity=_e*.9),$=!1}else O.scale.set(0,0,0),O.material&&(O.material.opacity=0)}),$&&(pt.remove(kr),hl.forEach(O=>{O.geometry&&O.geometry.dispose(),O.material&&O.material.dispose()}),pl.forEach(O=>{O.geometry&&O.geometry.dispose(),O.material&&O.material.dispose()}),kr=null,hl=[],pl=[],Br=!1,od?(od=!1,ip({regrowQuestionBox:!0})):np())}function nn(T,j){const $=Math.max(0,Math.min(1,T));return j==="easeOutExpo"?$===1?1:1-Math.pow(2,-10*$):j==="easeOutQuart"?1-Math.pow(1-$,4):j==="easeOutBack"?1+2.70158*Math.pow($-1,3)+1.70158*Math.pow($-1,2):j==="linear"?$:1-Math.pow(1-$,3)}if(is&&tt){const T=_.houdini3D&&_.houdini3D.pop||{},j=T.popDuration!==void 0?T.popDuration:450,$=performance.now()-Oh,O=Math.min(1,$/Math.max(1,j)),Q=T.easing||"easeOutExpo",_e=nn(O,Q),G=T.popMultiplier!==void 0?T.popMultiplier:2.5;Od(tt,1,_e*G);const de=Math.max(0,1-O);if(tt.traverse(fe=>{fe.isMesh&&fe.material&&(fe.material.transparent=!0,fe.material.opacity=de)}),vn&&Cs){const fe=_.houdini3D.shadowOpacity;Cs.opacity=fe*de*ut}Or&&Ko.length>0&&Ko.forEach(fe=>{const Ge=fe.userData.velocity;if(fe.position.addScaledVector(Ge,x),fe.lookAt(Ft.position),fe.rotation.z+=fe.userData.rotVelocityZ,fe.userData.lifetime-=x,fe.userData.lifetime>0){const Je=Math.max(.001,fe.userData.lifetime/fe.userData.initialLifetime),Fe=fe.userData.initialScale*Je;fe.scale.set(Fe,Fe,1),fe.material&&(fe.material.opacity=Je)}else fe.scale.set(0,0,0),fe.material&&(fe.material.opacity=0)}),O>=1&&(tt.visible=!1,vn&&(vn.visible=!1),Or&&(pt.remove(Or),Ko.forEach(fe=>{fe.geometry&&fe.geometry.dispose(),fe.material&&fe.material.dispose()}),Or=null,Ko=[]),is=!1,dd?(dd=!1,Id()):Cp())}if(!is&&Ms>0&&tt){const T=performance.now(),j=_.houdini3D&&_.houdini3D.pop||{},$=j.respawnDelay!==void 0?j.respawnDelay:100,O=j.respawnDuration!==void 0?j.respawnDuration:400,Q=T-Ms;if(Q<$){const _e=tt.userData.baseY!==void 0?tt.userData.baseY:_.houdini3D.desktop.position.y;tt.position.y=_e,tt.userData.inflatedInfluence=0,Od(tt,0,0),tt.visible=!1,vn&&(vn.visible=!1)}else{ju||(ju=!0,Iv());const _e=Math.min(1,(Q-$)/Math.max(1,O)),G=1-Math.pow(1-_e,3);if(tt.visible=!0,tt.traverse(Je=>{Je.isMesh&&Je.material&&(Je.material.opacity=1)}),vn&&Cs){vn.visible=!0;const Fe=_.houdini3D.shadowScale*G*Z;vn.scale.set(Fe,Fe,1);const he=_.houdini3D.shadowOpacity;Cs.opacity=he*G*Z*ut}const Ge=_.houdini3D.scale*Z*G;tt.scale.set(Ge,Ge,Ge),_e>=.3&&!ft&&(ft=!0),_e>=1&&(Ms=0)}}if(ts&&Ce){const T=_.games3D||{},j=performance.now(),$=T.pop||{},O=$.pop0Duration!==void 0?$.pop0Duration:500,Q=$.pop1Duration!==void 0?$.pop1Duration:450,_e=O+Q,G=j-Dh,de=Math.min(1,G/Math.max(1,_e)),fe=G<O;!fe&&!rd&&(rd=!0,zv()),Ce.traverse(Mt=>{Mt.isMesh&&(fe&&Mt===fi||!fe&&Mt===Mi?Mt.visible=!0:Mt.visible=!1)});const Je=(T.rotation&&T.rotation.y!==void 0?T.rotation.y:90)*Math.PI/180,Fe=pd.setFromMatrixPosition(Ce.matrixWorld),he=Ft.position.x-Fe.x,Ae=Ft.position.z-Fe.z,me=Math.atan2(he,Ae);if(Ce.userData.initialCamAngle===void 0){const Mt=(r&&T.mobile?T.mobile.position:null)||(T.desktop?T.desktop.position:{x:4.8,z:2});Ce.userData.initialCamAngle=Math.atan2(Ft.position.x-Mt.x,Ft.position.z-Mt.z)}const Me=me-Ce.userData.initialCamAngle,xe=Je-pt.rotation.y+Me;if(Ce.rotation.y=xe,cn&&Lr){const Mt=$.shadowFadeDuration!==void 0?$.shadowFadeDuration:600,jn=Math.min(1,G/Math.max(1,Mt)),Pn=Math.max(0,1-jn),dn=T.shadowY!==void 0?T.shadowY:.335,Dn=Ce.position.y-dn,Dt=T.shadowOpacity!==void 0?T.shadowOpacity:.66,fn=Math.max(0,(1-Dn*.45)*Dt)*ut,Nn=T.shadowScale!==void 0?T.shadowScale:2,Jt=Math.max(.3,1-Dn*.2)*Nn*Z;cn.position.x=Ce.position.x,cn.position.z=Ce.position.z,cn.position.y=dn,cn.scale.set(Jt,Jt,1),Lr.opacity=fn*Pn,cn.visible=Pn>.001}const ue=1+de*.4,sn=(T.scale||.086)*ue*Z;Ce.scale.set(sn,sn,sn),de>=1&&(Ce.visible=!1,fi&&(fi.visible=!1),Mi&&(Mi.visible=!1),cn&&(cn.visible=!1),ts=!1,cd?(cd=!1,Pd()):Lp())}if(!ts&&ns>0&&Ce){const T=performance.now(),j=_.games3D&&_.games3D.pop||{},$=j.respawnDelay!==void 0?j.respawnDelay:100,O=j.respawnDuration!==void 0?j.respawnDuration:400,Q=T-ns;if(Q<$)Ce.visible=!1,cn&&(cn.visible=!1);else{sd||(sd=!0,Uv());const _e=Math.min(1,(Q-$)/Math.max(1,O)),G=1-Math.pow(1-_e,3);Ce.visible=!0,fi&&(fi.visible=!1),Mi&&(Mi.visible=!1);const de=_.games3D&&_.games3D.poseInterval||700;Ce.userData.poseTime===void 0&&(Ce.userData.poseTime=0),Ce.userData.poseTime+=x;const fe=Math.floor(Ce.userData.poseTime/(de*.001))%2===1;if(Ki&&es&&(Ki.visible=!fe,es.visible=fe),cn&&Lr){cn.visible=!0;const he=_.games3D,Ae=he.shadowY,me=Ce.position.y-Ae,Me=he.shadowScale,ue=Math.max(.3,1-me*.2)*Me*Z*G;cn.scale.set(ue,ue,1);const Ve=he.shadowOpacity,sn=Math.max(0,(1-me*.45)*Ve)*ut;Lr.opacity=sn*G}const Fe=_.games3D.scale*Z*G;Ce.scale.set(Fe,Fe,Fe),_e>=.3&&!ft&&(ft=!0),_e>=1&&(ns=0)}}if(!Br&&ws>0&&at){const T=performance.now(),j=_.questionBox.shatter,$=j.respawnDelay,O=j.respawnDuration,Q=T-ws;if(Q<$)at.visible=!1,wn&&(wn.visible=!1);else{qu||(qu=!0,Ev()),at.visible=!0,wn&&(wn.visible=!0);const _e=Q-$,G=Math.min(1,_e/O),de=1-Math.pow(1-G,3),Ge=_.questionBox.scale*de*Z;if(at.scale.set(Ge,Ge,Ge),wn&&ia){const Je=_.questionBox.shadowY,Fe=at.position.y-Je,he=_.questionBox.shadowScale,Ae=_.questionBox.shadowOpacity,me=Math.max(.3,1-Fe*.2)*he,Me=Math.max(0,(1-Fe*.45)*Ae),xe=me*de*Z;wn.scale.set(xe,xe,1),ia.opacity=Me*de*Z*ut}G>=.3&&!ft&&(ft=!0),G>=1&&(ws=0)}}if(at&&_.questionBox&&_.questionBox.enabled!==!1&&!Br){const T=be?_.questionBox.hoverSpinMultiplier:1;at.rotation.x+=_.questionBox.rotationSpeedX*T,at.rotation.y+=_.questionBox.rotationSpeedY*T;const j=_.questionBox.floatFrequency,$=_.questionBox.floatAmplitude,O=at.userData.baseY!==void 0?at.userData.baseY:_.questionBox.position.y;if(at.position.x=at.userData.baseX!==void 0?at.userData.baseX:_.questionBox.position.x,at.position.z=at.userData.baseZ!==void 0?at.userData.baseZ:_.questionBox.position.z,at.position.y=O+Math.sin(performance.now()*j)*$,!(ws>0)){const Q=_.questionBox.scale,G=Q*(be?1.15:1)*Z,de=at.scale.x,fe=Cn.lerp(de,G,.1);at.scale.set(fe,fe,fe),be&&Q>0&&fe/(Q*Z)>=1.12&&(si=!0)}}if(tt&&_.houdini3D&&_.houdini3D.enabled!==!1&&!is){const T=Le?1:0,j=tt.userData.inflatedInfluence!==void 0?tt.userData.inflatedInfluence:0,$=Cn.lerp(j,T,.1);tt.userData.inflatedInfluence=$,Le&&$>=.85&&(Ka=!0),Od(tt,$,0);const O=_.houdini3D,Q=O&&O.sway?O.sway:{},_e=Q.enabled!==!1,G=(O.rotation&&O.rotation.x!==void 0?O.rotation.x:0)*(Math.PI/180),de=(O.rotation&&O.rotation.y!==void 0?O.rotation.y:210)*(Math.PI/180),fe=(O.rotation&&O.rotation.z!==void 0?O.rotation.z:0)*(Math.PI/180);if(kt.set(G,de,fe,"YXZ"),an.setFromEuler(kt),br.set(0,0,0),_e){const Ae=performance.now()*.001,me=Q.x&&typeof Q.x=="object"?Q.x:null,Me=Q.y&&typeof Q.y=="object"?Q.y:null,xe=Q.z&&typeof Q.z=="object"?Q.z:null;let ue=0,Ve=0,sn=0;if(me||Me||xe){if(me&&me.enabled!==!1){const dn=me.amount!==void 0?me.amount:0,Dn=me.speed!==void 0?me.speed:1,Dt=me.phase||0;ue=Math.sin(Ae*Dn+Dt)*(dn*(Math.PI/180))}if(Me&&Me.enabled!==!1){const dn=Me.amount!==void 0?Me.amount:0,Dn=Me.speed!==void 0?Me.speed:1.5,Dt=Me.phase||0;Ve=Math.sin(Ae*Dn+Dt)*(dn*(Math.PI/180))}if(xe&&xe.enabled!==!1){const dn=xe.amount!==void 0?xe.amount:0,Dn=xe.speed!==void 0?xe.speed:1.2,Dt=xe.phase||0;sn=Math.sin(Ae*Dn+Dt)*(dn*(Math.PI/180))}}else{const dn=Q.amount!==void 0?Q.amount:15,Dn=Q.speed!==void 0?Q.speed:1.5,Dt=(Q.axis||"y").toLowerCase(),fn=Math.sin(Ae*Dn)*(dn*(Math.PI/180));Dt==="x"?ue=fn:Dt==="z"?sn=fn:Ve=fn}ps.set(ue,Ve,sn,"YXZ"),ln.setFromEuler(ps),yi.copy(an).multiply(ln);const Mt=Q.pivotOffset&&Q.pivotOffset.x||0,jn=Q.pivotOffset&&Q.pivotOffset.y||0,Pn=Q.pivotOffset&&Q.pivotOffset.z||0;(jn!==0||Mt!==0||Pn!==0)&&(ni.set(Mt,jn,Pn),oc.copy(ni).applyQuaternion(ln),br.copy(oc.sub(ni)).applyQuaternion(an))}else yi.copy(an);const Ge=O.hoverYOffset,Je=tt.userData.baseY!==void 0?tt.userData.baseY:O.desktop.position.y,Fe=tt.userData.baseX!==void 0?tt.userData.baseX:O.desktop.position.x,he=tt.userData.baseZ!==void 0?tt.userData.baseZ:O.desktop.position.z;if(tt.position.set(Fe+br.x,Je+Ge*$+br.y,he+br.z),tt.quaternion.copy(yi),!(Ms>0)){if(tt.traverse(ue=>{ue.isMesh&&ue.material&&(ue.material.opacity=1)}),vn&&Cs){vn.visible=!0;const ue=_.houdini3D.shadowOpacity;Cs.opacity=ue*ut}const me=O.scale*Z,Me=tt.scale.x,xe=Cn.lerp(Me,me,.1);tt.scale.set(xe,xe,xe)}}if(ht&&_.web3D&&_.web3D.enabled!==!1){const T=_.web3D,j=Oi?T.hoverSpinMultiplier!==void 0?T.hoverSpinMultiplier:2.5:1;let $=1;if(Js){const he=T.clickAnimation||{},Ae=he.clickSpinMultiplier!==void 0?he.clickSpinMultiplier:8,me=performance.now()-Ku,Me=he.duration!==void 0?he.duration:1200,xe=Math.min(1,me/Me),ue=Math.pow(1-xe,2);$=Cn.lerp(1,Ae,ue)}const Q=(T.rotationSpeedY!==void 0?T.rotationSpeedY:T.rotationSpeed||.015)*j*$,_e=T.rotationAxis||"y";if(bi)if(typeof _e=="string"){const he=_e.toLowerCase();he==="x"?bi.rotation.x+=Q:he==="z"?bi.rotation.z+=Q:bi.rotation.y+=Q}else typeof _e=="object"?(bi.rotation.x+=(_e.x||0)*Q,bi.rotation.y+=(_e.y||0)*Q,bi.rotation.z+=(_e.z||0)*Q):bi.rotation.y+=Q;if(Zs){const he=T.moon||{},me=(he.rotationSpeed!==void 0?he.rotationSpeed:he.rotationSpeedY!==void 0?he.rotationSpeedY:.01)*j*$,Me=he.rotationAxis||"y";if(typeof Me=="string"){const xe=Me.toLowerCase();xe==="x"?Zs.rotation.x+=me:xe==="z"?Zs.rotation.z+=me:Zs.rotation.y+=me}else typeof Me=="object"?(Zs.rotation.x+=(Me.x||0)*me,Zs.rotation.y+=(Me.y||0)*me,Zs.rotation.z+=(Me.z||0)*me):Zs.rotation.y+=me}const G=[Zu,$u,Ju].filter(Boolean);if(G.length>0){const he=T.signal||{};if(he.enabled!==!1){const Ae=he.interval||530,me=Oi?he.hoverSpeedMultiplier!==void 0?he.hoverSpeedMultiplier:3.5:1,Me=Js?he.clickSpeedMultiplier!==void 0?he.clickSpeedMultiplier*($/8):$*1.5:1,xe=me*Me;Ah+=x*1e3*xe;const ue=Math.floor(Ah/Ae)%G.length;he.billboard!==!1&&Ft.getWorldPosition(Ec),G.forEach((Ve,sn)=>{const Mt=sn===ue;Ve.visible=Mt,Mt&&he.billboard!==!1&&(Ve.lookAt(Ec),he.billboardRotationX&&Ve.rotateX(he.billboardRotationX*Math.PI/180),he.billboardRotationY&&Ve.rotateY(he.billboardRotationY*Math.PI/180),he.billboardRotationZ&&Ve.rotateZ(he.billboardRotationZ*Math.PI/180))})}else G.forEach(Ae=>Ae.visible=!0)}const de=T.hoverYOffset!==void 0?T.hoverYOffset:0,fe=ht.userData.baseY!==void 0?ht.userData.baseY:T.desktop?T.desktop.position.y:.6,Ge=T.floatFrequency!==void 0?T.floatFrequency:.003,Je=T.floatAmplitude!==void 0?T.floatAmplitude:.1,Fe=Math.sin(performance.now()*Ge)*Je;if(Uo>0){const he=T.clickAnimation||{},Ae=he.respawnDelay!==void 0?he.respawnDelay:50,me=he.respawnDuration!==void 0?he.respawnDuration:400,Me=performance.now()-Uo;if(Me<Ae){const xe=T.scale||.62,ue=T.hoverScale!==void 0?T.hoverScale:1.15,Ve=xe*ue*Z;ht.scale.set(Ve,Ve,Ve),ht.position.y=fe+de+Fe,ht.userData.hoverInfluence=1}else{Qu||(Qu=!0,Tp());const xe=Math.min(1,(Me-Ae)/Math.max(1,me)),ue=1-Math.pow(1-xe,3),Ve=T.scale||.62,sn=T.hoverScale!==void 0?T.hoverScale:1.15,Mt=Ve*sn*Z,jn=Ve*1*Z,Pn=Cn.lerp(Mt,jn,ue);ht.scale.set(Pn,Pn,Pn);const dn=de*(1-ue);ht.position.y=fe+dn+Fe,ht.userData.hoverInfluence=1-ue,xe>=.3&&!ft&&(ft=!0),xe>=1&&(Uo=0)}}else if(Js||As||sr){const he=T.scale||.62,Ae=T.hoverScale!==void 0?T.hoverScale:1.15,me=he*Ae*Z;ht.scale.set(me,me,me),ht.position.y=fe+de+Fe,ht.userData.hoverInfluence=1}else{const he=Oi?1:0,Ae=ht.userData.hoverInfluence!==void 0?ht.userData.hoverInfluence:0,me=Cn.lerp(Ae,he,.1);ht.userData.hoverInfluence=me,ht.position.y=fe+de*me+Fe;const Me=T.scale||.62,xe=Oi?T.hoverScale!==void 0?T.hoverScale:1.15:1,ue=Me*xe*Z,Ve=ht.scale.x,sn=Cn.lerp(Ve,ue,.1);ht.scale.set(sn,sn,sn),Oi&&Ve>=ue*.98&&(el=!0)}}if(Ce&&_.games3D&&_.games3D.enabled!==!1&&!ts){if(!(ns>0)){const T=_.games3D,j=co||Pr;Ce.userData.poseTime===void 0&&(Ce.userData.poseTime=0);const $=j?T.hoverPoseSpeedMultiplier:1;Ce.userData.poseTime+=x*$;const O=T.poseInterval*.001,Q=Math.floor(Ce.userData.poseTime/O)%2===1;Ki&&es&&(Ki.visible=!Q,es.visible=Q),fi&&(fi.visible=!1),Mi&&(Mi.visible=!1),Ce.userData.floatTime===void 0&&(Ce.userData.floatTime=0),j&&T.pauseFloatOnHover!==!1||(Ce.userData.floatTime+=x);const G=T.floatFrequency,de=T.floatAmplitude,fe=Ce.userData.baseY!==void 0?Ce.userData.baseY:T.desktop?T.desktop.position.y:.7,Ge=j?T.hoverYOffset:0,Je=Ce.userData.currentHoverY!==void 0?Ce.userData.currentHoverY:0,Fe=Cn.lerp(Je,Ge,.1);Ce.userData.currentHoverY=Fe;const he=Math.sin(Ce.userData.floatTime*G*1e3)*de;Ce.position.y=fe+Fe+he;const Ae=T.lookAtCamera||{};if(Ae.enabled!==!1){const Mt=(T.rotation&&T.rotation.y!==void 0?T.rotation.y:90)*Math.PI/180,jn=pd.setFromMatrixPosition(Ce.matrixWorld),Pn=Ft.position.x-jn.x,dn=Ft.position.z-jn.z,Dn=Math.atan2(Pn,dn);if(Ce.userData.initialCamAngle===void 0){const Gt=(r&&T.mobile?T.mobile.position:null)||(T.desktop?T.desktop.position:{x:4.8,z:2});Ce.userData.initialCamAngle=Math.atan2(Ft.position.x-Gt.x,Ft.position.z-Gt.z)}const Dt=Dn-Ce.userData.initialCamAngle;let Nn=Mt-pt.rotation.y+Dt-Ce.rotation.y;Nn=Math.atan2(Math.sin(Nn),Math.cos(Nn));const Jt=Ae.speed!==void 0?Ae.speed:.04,wt=1-Math.pow(1-Math.min(1,Jt*60),x);Ce.rotation.y+=Nn*wt}const me=T.scale,Me=j?T.hoverScale:1,xe=me*Me*Z,ue=Ce.scale.x,Ve=Cn.lerp(ue,xe,.1);Ce.scale.set(Ve,Ve,Ve),j&&ue>=xe*.98&&(ol=!0)}}if(we&&_.ar3D&&_.ar3D.enabled!==!1){const T=_.ar3D,j=(ul||tr)&&!zi&&Ti===0&&!Ic()&&!Li&&!Hi;!zi&&Ti===0?j&&!Zo?(Zo=!0,dl=!1,_s&&Jo(_s),kv()):!j&&Zo&&(Zo=!1,Ai&&Jo(Ai),dl&&Ep(),dl=!1):(Zo=!1,dl=!1);const $=T.scale,O=T.hoverScale,Q=T.hoverYOffset,_e=T.floatFrequency,G=T.floatAmplitude,de=Math.sin(performance.now()*_e)*G,fe=we.userData.baseY!==void 0?we.userData.baseY:T.desktop?T.desktop.position.y:1.3;if(Ic()||Li||Hi){const Ge=$*O*Z;we.scale.set(Ge,Ge,Ge),we.position.y=fe+Q,we.userData.currentHoverY=Q;const Je=(T.rotation&&T.rotation.y!==void 0?T.rotation.y:90)*Math.PI/180;we.rotation.y=Je+Math.PI-pt.rotation.y,_s&&Jo(_s)}else if(Ti>0){const Ge=T.clickAnimation||{},Je=Ge.respawnDelay!==void 0?Ge.respawnDelay:50,Fe=Ge.respawnDuration!==void 0?Ge.respawnDuration:400,he=performance.now()-Ti;if(he<Je){const Ae=$*O*Z;we.scale.set(Ae,Ae,Ae),we.position.y=fe+Q+de,we.userData.currentHoverY=Q}else{id||(id=!0,Ep());const Ae=Math.min(1,(he-Je)/Math.max(1,Fe)),me=1-Math.pow(1-Ae,3),Me=$*O*Z,xe=$*1*Z,ue=Cn.lerp(Me,xe,me);we.scale.set(ue,ue,ue);const Ve=Q*(1-me);we.position.y=fe+Ve+de,we.userData.currentHoverY=Ve,Ae>=.3&&!ft&&(ft=!0),Ae>=1&&(Ti=0)}}else if(zi){const Ge=T.clickAnimation||{},Je=Yn&&Yn.getClip()?Yn.getClip().duration*1e3:1200,Fe=Ge.duration!==void 0?Ge.duration:Je,he=performance.now()-nd,Ae=Math.min(1,he/Fe),me=$*O*Z,Me=we.scale.x,xe=Cn.lerp(Me,me,.25);we.scale.set(xe,xe,xe);const ue=we.userData.currentHoverY!==void 0?we.userData.currentHoverY:0,Ve=Cn.lerp(ue,Q,.25);we.userData.currentHoverY=Ve,we.position.y=fe+Ve+de,Ae>=1&&(zi=!1,ld?(ld=!1,Ed()):(Ai&&Jo(Ai),Ip()))}else{const Je=$*(j?O:1)*Z,Fe=we.scale.x,he=Cn.lerp(Fe,Je,.1);we.scale.set(he,he,he);const Ae=j?Q:0,me=we.userData.currentHoverY!==void 0?we.userData.currentHoverY:0,Me=Cn.lerp(me,Ae,.1);we.userData.currentHoverY=Me,we.position.y=fe+Me+de,j&&Fe>=Je*.98&&(dl=!0)}if(fv(x),fo){const Ge=T.hoverWalkAnimSpeed,Je=T.idleWalkAnimSpeed,Fe=T.animTransitionDuration,he=T.clickAnimation||{},Ae=he.shakeTransitionDuration!==void 0?he.shakeTransitionDuration:.06,me=Ae*1e3;let Me=0,xe=0,ue=1;if(zi){const jn=Yn&&Yn.getClip()?Yn.getClip().duration*1e3:1200,Pn=he.duration!==void 0?he.duration:jn;performance.now()-nd<Math.max(0,Pn-me)?xe=1:xe=0,Me=0,ue=1}else Ti>0?(xe=0,Me=0,ue=1):al?(xe=0,Me=1,ue=Ge):j?(xe=0,Me=0,ue=1):bs==="walking"?(xe=0,Me=1,ue=Je):(xe=0,ue=1);fo.timeScale=ue;const Ve=Math.min(1,1/Math.max(.01,Fe)*x),sn=Math.min(1,1/Math.max(.005,Ae)*x);bc+=(Me-bc)*Ve,wc+=(xe-wc)*sn;const Mt=Math.max(0,1-bc-wc);Fr&&(Fr.enabled=!0,Fr.setEffectiveWeight(bc)),Yn&&(Yn.enabled=!0,Yn.setEffectiveWeight(wc)),Ir&&(Ir.enabled=!0,Ir.setEffectiveWeight(Mt)),fo.update(x)}}if(Js&&_.web3D){const T=_.web3D,j=T.clickAnimation||{},$=j.duration!==void 0?j.duration:1200,O=performance.now()-Ku,Q=Math.min(1,O/$),_e=Math.pow(1-Q,2);if($s){const G=T.materials&&T.materials.grid&&T.materials.grid.emissiveIntensity!==void 0?T.materials.grid.emissiveIntensity:1,de=j.emissiveFlashIntensity!==void 0?j.emissiveFlashIntensity:4.5;$s.emissiveIntensity=Cn.lerp(G,de,_e)}if(zo){const G=T.materials&&T.materials.moon&&T.materials.moon.emissiveIntensity!==void 0?T.materials.moon.emissiveIntensity:1,de=j.moonEmissiveFlashIntensity!==void 0?j.moonEmissiveFlashIntensity:3.5;zo.emissiveIntensity=Cn.lerp(G,de,_e)}if(Un&&oo.length>0&&(bi?bi.getWorldPosition(Qi):ht&&ht.getWorldPosition(Qi),Oo.copy(Qi),pt&&pt.worldToLocal(Oo),Un.position.copy(Oo),oo.forEach(G=>{const de=G.userData.direction,fe=G.userData.expSpeed;G.userData.distance+=fe*x;const Ge=G.userData.distance;G.position.set(de.x*Ge,de.y*Ge,de.z*Ge),G.getWorldPosition($a),ms.copy(de).transformDirection(pt.matrixWorld).normalize(),ro.subVectors(Ft.position,$a).normalize();const Je=ro.dot(ms);Qs.copy(ro).addScaledVector(ms,-Je),Qs.lengthSq()<1e-4&&Qs.set(0,0,1).addScaledVector(ms,-ms.z),Qs.normalize(),Ja.crossVectors(ms,Qs).normalize(),lc.makeBasis(Ja,ms,Qs),cc.copy(pt.matrixWorld).invert();const Fe=cc.multiply(lc);G.quaternion.setFromRotationMatrix(Fe),G.scale.set(1,1,1),G.material&&(G.material.opacity=_e*.95)})),Q>=1){if(Js=!1,$s){const G=T.materials&&T.materials.grid&&T.materials.grid.emissiveIntensity!==void 0?T.materials.grid.emissiveIntensity:1;$s.emissiveIntensity=G}if(zo){const G=T.materials&&T.materials.moon&&T.materials.moon.emissiveIntensity!==void 0?T.materials.moon.emissiveIntensity:1;zo.emissiveIntensity=G}Un&&(Un.parent&&Un.parent.remove(Un),oo.forEach(G=>{G.geometry&&G.geometry.dispose(),G.material&&G.material.dispose()}),Un=null,oo=[]),ud?(ud=!1,Rd()):Rp()}}if(vs&&hc&&et&&_.linkedin3D){const T=_.linkedin3D,j=_.questionBox,$=T.shadowY;if(ed&&(ed.visible=!1),Dr&&_.ar3D){const de=_.ar3D;Dr.visible=!!de.showWalkRadius;const fe=Nc(),Ge=de.shadowY;Dr.position.set(fe.x,Ge+.005,fe.z)}if(pc){if(at){const de=_.questionBox.shadowY;pc.position.set(at.position.x,de,at.position.z)}pc.visible=!1}if(tl){if(tt){const de=_.questionBox.shadowY;tl.position.set(tt.position.x,de,tt.position.z)}tl.visible=!1}if(nl){if(ht){const de=_.questionBox.shadowY;nl.position.set(ht.position.x,de,ht.position.z)}nl.visible=!1}if(Ho){if(Ce){const de=_.questionBox.shadowY;Ho.position.set(Ce.position.x,de,Ce.position.z)}Ho.visible=!1}if($o){if(we){const de=_.ar3D&&_.ar3D.shadowY!==void 0?_.ar3D.shadowY:.22;$o.position.set(we.position.x,de,we.position.z)}$o.visible=!1}ao&&(ao.visible=!1);const O=Hh();et.position.y=O.y!==void 0?O.y:.8,vs.position.set(et.position.x,$,et.position.z);const _e=j.shadowScale*Z*.45;vs.scale.set(_e,_e,1);const G=T.shadowOpacity;hc.opacity=G*Z*ut}const It=Lt.hideShadows===!0||Lt.shadows===!1;if(gs&&dc&&ht&&_.web3D&&(gs.visible=!It&&ht.visible,gs.visible)){const T=_.web3D,j=T.shadowY!==void 0?T.shadowY:.33;gs.position.set(ht.position.x,j,ht.position.z);const O=(T.shadowScale!==void 0?T.shadowScale:1.6)*Z;gs.scale.set(O,O,1);const Q=T.shadowOpacity!==void 0?T.shadowOpacity:.85;dc.opacity=Q*Z*ut}if(cn&&Lr&&Ce&&_.games3D&&!(ts||ns>0)){if(!Ce.visible||Ss||ir)cn.visible=!1;else if(cn.visible=!It,!It){const T=_.games3D,j=T.shadowY;cn.position.x=Ce.position.x,cn.position.z=Ce.position.z,cn.position.y=j;const $=T.shadowScale,O=Ce.position.y-j,Q=Math.max(.3,1-O*.2)*$*Z;cn.scale.set(Q,Q,1);const _e=T.shadowOpacity;Lr.opacity=Math.max(0,(1-O*.45)*_e)*ut}}if(Ui&&Mc&&we&&_.ar3D&&(Ui.visible=!It&&we.visible,Ui.visible)){const T=_.ar3D,j=T.shadowY;Ui.position.x=we.position.x,Ui.position.z=we.position.z,Ui.position.y=j;const $=T.shadowScale,O=we.position.y-j,Q=Math.max(.3,1-O*.2)*$*Z;Ui.scale.set(Q,Q,1);const _e=T.shadowOpacity;Mc.opacity=Math.max(0,(1-O*.45)*_e)*ut}if(wn&&ia&&at&&_.questionBox&&!(Br||ws>0)){if(!at.visible||hi||Ei)wn.visible=!1;else if(wn.visible=!It,!It){const T=_.questionBox,j=T.shadowY;wn.position.x=at.position.x,wn.position.z=at.position.z,wn.position.y=j;const $=at.position.y-j,O=T.shadowScale,Q=Math.max(.3,1-$*.2)*O;wn.scale.set(Q,Q,1);const _e=T.shadowOpacity;ia.opacity=Math.max(0,(1-$*.45)*_e)*ut}}if(vn&&Cs&&tt&&_.houdini3D&&!(is||Ms>0)){if(!tt.visible||Ts||rr)vn.visible=!1;else if(vn.visible=!It,!It){const T=_.houdini3D.shadowY;vn.position.x=tt.position.x,vn.position.z=tt.position.z,vn.position.y=T;const $=_.houdini3D.shadowScale*Z;vn.scale.set($,$,1);const O=_.houdini3D.shadowOpacity;Cs.opacity=O*Z*ut}}vs&&(vs.visible=!It);const Se=Lt.hideBoidShadows===!0||Lt.boidShadows===!1||It;if(ri&&(ri.visible=!Se),ss&&_.site.backgroundColorTop&&_.site.backgroundColorBottom){const T=_.renderStyles&&Array.isArray(_.renderStyles.activeModes)?_.renderStyles.activeModes:["default"],j=_.renderStyles&&_.renderStyles.currentModeIndex!==void 0?_.renderStyles.currentModeIndex:0,$=T[j%T.length]||"default",O=_.renderStyles&&_.renderStyles[$]||{},_e=window.innerWidth<=window.innerHeight?_.vignette.enabledMobile:_.vignette.enabled!==!1,G=O.disableVignette===!0||O.vignette===!1,de=_e&&!G,fe=O.backgroundColor||O.bgColor||O.solidBackgroundColor,Ge=!!fe;ss.uniforms.colorTop.value.set(_.site.backgroundColorTop),ss.uniforms.colorBottom.value.set(_.site.backgroundColorBottom),ss.uniforms.offset.value=_.vignette.offset,ss.uniforms.darkness.value=_.vignette.darkness,ss.uniforms.vignetteEnabled.value=de,ss.uniforms.useSolidBackground.value=Ge,Ge&&ss.uniforms.solidBackgroundColor&&ss.uniforms.solidBackgroundColor.value.set(fe);const Je=O.textColor||_.site&&_.site.textColor||"#ffffff",Fe=O.hoverColor||O.hoverColorText||_.site&&_.site.hoverColorText||"#91bfff";document.documentElement.style.setProperty("--text-color",Je,"important"),document.documentElement.style.setProperty("--hover-color",Fe,"important"),_.interaction&&(_.interaction.hoverColor3D=Fe);const he=document.getElementById("bg");if(Ge)he&&(he.style.background=fe),Mn&&Mn.setClearColor(new se(fe),1);else{const Ae=`linear-gradient(to bottom, ${_.site.backgroundColorTop}, ${_.site.backgroundColorBottom})`;he&&(he.style.background=Ae),Mn&&Mn.setClearColor(0,0)}}if(Xe&&_.renderStyles){const T=_.renderStyles,j=Array.isArray(T.activeModes)?T.activeModes:["default"],$=(T.currentModeIndex||0)%j.length,O=j[$]||"default",Q=sp[O]!==void 0?sp[O]:0,_e=Mn.getPixelRatio();if(Xe.uniforms.resolution.value.set(window.innerWidth*_e,window.innerHeight*_e),Xe.uniforms.uTime.value=performance.now()*.001,Xe.uniforms.mode.value=Q,Xe.enabled=Q!==0,Q===1){const G=T.multiBit||{};Xe.uniforms.colorLevels.value=G.colorLevels!==void 0?G.colorLevels:6,Xe.uniforms.pixelSize.value=G.pixelSize!==void 0?G.pixelSize:2,Xe.uniforms.ditherStrength.value=G.ditherStrength!==void 0?G.ditherStrength:.25}else if(Q===2){const G=T.oneBit||{};Xe.uniforms.pixelSize.value=G.pixelSize!==void 0?G.pixelSize:2,Xe.uniforms.ditherStrength.value=G.ditherStrength!==void 0?G.ditherStrength:.35,Xe.uniforms.darkColor&&Xe.uniforms.darkColor.value.set(G.darkColor||"#050510"),Xe.uniforms.lightColor&&Xe.uniforms.lightColor.value.set(G.lightColor||"#e6e6fa")}else if(Q===3){const G=T.pixelated||{};Xe.uniforms.pixelatedPixelSize.value=G.pixelSize!==void 0?G.pixelSize:4,Xe.uniforms.pixelatedColorLevels.value=G.colorLevels!==void 0?G.colorLevels:16,Xe.uniforms.scanlineIntensity.value=G.scanlineIntensity!==void 0?G.scanlineIntensity:.08}else if(Q===4){const G=T.gameBoy||{};Xe.uniforms.gbPixelSize.value=G.pixelSize!==void 0?G.pixelSize:3,Xe.uniforms.gbC0&&Xe.uniforms.gbC0.value.set(G.c0||"#0f380f"),Xe.uniforms.gbC1&&Xe.uniforms.gbC1.value.set(G.c1||"#306230"),Xe.uniforms.gbC2&&Xe.uniforms.gbC2.value.set(G.c2||"#8bac0f"),Xe.uniforms.gbC3&&Xe.uniforms.gbC3.value.set(G.c3||"#9bbc0f")}else if(Q===5){const G=T.vhs||{};Xe.uniforms.vhsAberration.value=G.chromaticAberration!==void 0?G.chromaticAberration:.006,Xe.uniforms.vhsJitter.value=G.vhsJitter!==void 0?G.vhsJitter:.003,Xe.uniforms.vhsNoise.value=G.noiseIntensity!==void 0?G.noiseIntensity:.12}else if(Q===6){const G=T.halftone||{};Xe.uniforms.halftoneScale.value=G.dotScale!==void 0?G.dotScale:4,Xe.uniforms.halftoneAngle.value=G.angle!==void 0?G.angle:.785398}else if(Q===7){const G=T.blueprint||{};Xe.uniforms.blueprintGrid.value=G.gridScale!==void 0?G.gridScale:32,Xe.uniforms.blueprintBg&&Xe.uniforms.blueprintBg.value.set(G.bgColor||"#001b3a"),Xe.uniforms.blueprintLine&&Xe.uniforms.blueprintLine.value.set(G.lineColor||"#00f0ff")}else if(Q===8){const G=T.thermal||{};Xe.uniforms.thC0&&Xe.uniforms.thC0.value.set(G.c0||"#000033"),Xe.uniforms.thC1&&Xe.uniforms.thC1.value.set(G.c1||"#550088"),Xe.uniforms.thC2&&Xe.uniforms.thC2.value.set(G.c2||"#cc0066"),Xe.uniforms.thC3&&Xe.uniforms.thC3.value.set(G.c3||"#ff8800"),Xe.uniforms.thC4&&Xe.uniforms.thC4.value.set(G.c4||"#ffffff")}else if(Q===9){const G=T.ascii||{};Xe.uniforms.asciiCellSize.value=G.cellSize!==void 0?G.cellSize:8,Xe.uniforms.asciiColorLevels.value=G.colorLevels!==void 0?G.colorLevels:4,Xe.uniforms.asciiBrightness.value=G.brightness!==void 0?G.brightness:1.1,Xe.uniforms.asciiContrast.value=G.contrast!==void 0?G.contrast:1.8,Xe.uniforms.asciiCharacterWeight.value=G.characterWeight!==void 0?G.characterWeight:1.3,Xe.uniforms.asciiUseSolidColor.value=G.useSolidColor!==void 0?!!G.useSolidColor:!0,Xe.uniforms.asciiDebugRawScene.value=G.debugRawScene!==void 0?!!G.debugRawScene:!1,Xe.uniforms.asciiColor&&Xe.uniforms.asciiColor.value.set(G.greenTint||"#00ff66")}else if(Q===10){const G=T.anaglyph||{};Xe.uniforms.anaglyphShift.value=G.shift!==void 0?G.shift:.005}}if(_.interaction&&_.interaction.outline){const T=_.interaction.outline.edgeStrength,j=_.interaction.outline.edgeGlow,$=_.interaction.outline.edgeThickness;mi&&mi.edgeStrength!==T&&[mi,Ci,Ri].forEach(O=>{O&&(O.edgeStrength=T,O.edgeGlow=j,O.edgeThickness=$)})}if(pi&&_.questionBox){const T=_.questionBox.glass;pi.color.set(T.color),pi.transmission=T.transmission,pi.roughness=T.roughness,pi.ior=T.ior,pi.opacity=T.opacity,pi.reflectivity=T.reflectivity,pi.clearcoat=T.clearcoat,pi.clearcoatRoughness=T.clearcoatRoughness}if(Ps&&_.questionBox){const T=_.questionBox.metal,j=T.colorShiftSpeed;{const $=performance.now()*.001*j%1;Ps.color.setHSL($,1,.5)}Ps.metalness=T.metalness,Ps.roughness=T.roughness,Ps.normalScale&&Ps.normalScale.set(T.normalScale,T.normalScale)}Gi.render()}wp();function Hc(f,x){if(typeof In<"u"&&In)return!0;if(f===void 0||x===void 0)return!1;if(f===xt&&x===Ct)return ct;xt=f,Ct=x;const A=document.elementFromPoint(f,x);return A?(ct=!!A.closest("#mainnavlinks, #home, #linkedin-desktop-wrapper, #linkedin-desktop, #linkedin-mobile, #mobilenavmenu, #mobilenavlinksbutton, #plaintext-link, .link, .mobilelink, .logolink, #aboutmepanel, #aboutmepanelwrapper, .logo-tint-mask, .about-overlay, .ar-overlay, .games-overlay, .web-overlay, .houdini-overlay, .about-panel, .ar-panel, .games-panel, .web-panel, .houdini-panel"),ct):(ct=!1,!1)}const Vi=new S;function Mp(f,x){if(!ft||Zn!=="main"||Ln()||In||Hc(f,x))return null;Ot.set(f/window.innerWidth*2-1,-(x/window.innerHeight)*2+1),$e.setFromCamera(Ot,Ft);const A=2.5;return at&&ws===0&&(at.getWorldPosition(Vi),$e.ray.distanceToPoint(Vi)<A&&$e.intersectObject(at,!0).length>0)?{type:"questionBox"}:tt&&!is&&Ms===0&&(tt.getWorldPosition(Vi),$e.ray.distanceToPoint(Vi)<A&&$e.intersectObject(tt,!0).length>0)?{type:"houdiniToy"}:et&&Pi!=="falling"&&(et.getWorldPosition(Vi),$e.ray.distanceToPoint(Vi)<A&&$e.intersectObject(et,!0).length>0)?{type:"bug"}:ht&&!Js&&Uo===0&&(ht.getWorldPosition(Vi),$e.ray.distanceToPoint(Vi)<A&&$e.intersectObject(ht,!0).length>0)?{type:"webGlobe"}:Ce&&!ts&&ns===0&&(Ce.getWorldPosition(Vi),$e.ray.distanceToPoint(Vi)<A&&$e.intersectObject(Ce,!0).length>0)?{type:"gamesAlien"}:we&&!zi&&Ti===0&&(we.getWorldPosition(Vi),$e.ray.distanceToPoint(Vi)<A&&$e.intersectObject(we,!0).length>0)?{type:"arPhone"}:null}let xo=null;function Sp(f,x){if(!Ft)return null;const A=f/window.innerWidth*2-1,N=-(x/window.innerHeight)*2+1;_i.set(A,N),Fn.setFromCamera(_i,Ft);const W=-.4,te=Fn.ray;if(Math.abs(te.direction.y)<1e-4)return null;const ee=(W-te.origin.y)/te.direction.y;if(ee<0)return null;const Z=te.origin.x+ee*te.direction.x,be=te.origin.z+ee*te.direction.z,Le=Math.sqrt(Z*Z+be*be);return{angle:Math.atan2(Z,be),radius:Le}}let kd={x:0,y:0};const Ap=f=>{if(kd={x:f.clientX,y:f.clientY},In||Ln()||Hc(f.clientX,f.clientY)){Xn=null;return}Xn=Mp(f.clientX,f.clientY),!(!ft||Zn!=="main"||window.innerWidth<=window.innerHeight)&&(f.target&&f.target.closest&&(f.target.closest("a")||f.target.closest("button")||f.target.closest("#mainnavlinks")||f.target.closest(".link")||f.target.closest("#mobilenavlinksbutton")||f.target.closest("#mobilenavmenu")||f.target.closest(".logolink"))||(xl=!0,Ad={x:f.clientX,y:f.clientY},xo=Sp(f.clientX,f.clientY)))};window.addEventListener("pointerdown",Ap,{passive:!0});const bl=document.getElementById("bg");bl&&bl.addEventListener("pointerdown",Ap,{passive:!0}),window.addEventListener("pointermove",f=>{if(xl){const x=Sp(f.clientX,f.clientY);if(x!==null&&xo!==null){let A=x.angle-xo.angle;for(;A>Math.PI;)A-=Math.PI*2;for(;A<-Math.PI;)A+=Math.PI*2;const N=_.interaction&&_.interaction.minDragRadiusThreshold!==void 0?_.interaction.minDragRadiusThreshold:3.5,W=(x.radius+xo.radius)*.5,te=Math.min(1,Math.max(0,W/N));A*=te,go+=A}else{const A=f.clientX-Ad.x,W=f.clientY<window.innerHeight*.45?-1:1;go+=A*.0015*W}Ad={x:f.clientX,y:f.clientY},xo=x,ot.set(-9999,-9999)}},{passive:!0}),window.addEventListener("pointerup",()=>{xl=!1,xo=null},{passive:!0}),window.addEventListener("pointercancel",()=>{xl=!1,xo=null},{passive:!0});function Od(f,x,A){f&&f.traverse(N=>{if(N.isMesh&&N.morphTargetDictionary&&N.morphTargetInfluences){const W=N.morphTargetDictionary,te=Object.keys(W);if(te.length===0)return;N.material&&(N.material.morphTargets||(N.material.morphTargets=!0,N.material.needsUpdate=!0));let ee=W.Inflate!==void 0?W.Inflate:W.Inflated;if(ee===void 0){const be=te.find(Le=>{const ke=Le.toLowerCase();return ke.includes("inflate")||ke.includes("cloth")});be&&(ee=W[be])}ee===void 0&&N.morphTargetInfluences.length>0&&(ee=0),ee!==void 0&&ee<N.morphTargetInfluences.length&&(N.morphTargetInfluences[ee]=x);let Z=W.Pop;if(Z===void 0){const be=te.find(Le=>Le.toLowerCase().includes("pop"));be&&(Z=W[be])}Z===void 0&&N.morphTargetInfluences.length>1&&(Z=1),Z!==void 0&&Z<N.morphTargetInfluences.length&&(N.morphTargetInfluences[Z]=A)}})}const wv=window.AudioContext||window.webkitAudioContext;let Sn=null;const ur={},Hr={};function zd(f,x){if(Sn)try{Sn.decodeAudioData(x.slice(0),A=>{ur[f]=A,f.endsWith(".ogg")?ur[f.replace(/\.ogg$/,".mp3")]=A:f.endsWith(".mp3")&&(ur[f.replace(/\.mp3$/,".ogg")]=A)},A=>{})}catch{}}function Ud(f){const x=f.endsWith(".ogg")?f.replace(/\.ogg$/,".mp3"):f,A=f.endsWith(".mp3")?f.replace(/\.mp3$/,".ogg"):f;fetch(x).then(N=>{if(!N.ok)throw new Error("mp3 not found");return N.arrayBuffer()}).catch(()=>fetch(A).then(N=>N.arrayBuffer())).then(N=>{N&&(Hr[f]=N,Hr[x]=N,Hr[A]=N,Sn&&zd(f,N))}).catch(N=>{})}["sound/pop.mp3","sound/shatter.mp3","sound/aboutGrow.mp3","sound/aboutHover.mp3","sound/aboutOut.mp3","sound/houdiniHover.mp3","sound/houdiniOut.mp3","sound/webHover.mp3","sound/webOut.mp3","sound/ring.mp3","sound/vibration.mp3","sound/arHover.mp3","sound/arOut.mp3","sound/rm_gameboy.mp3","sound/lazer.mp3","sound/8bitExplode.mp3","sound/alienGrow.mp3","sound/gamesHover.mp3","sound/gamesOut.mp3","sound/bugFall.mp3","sound/bugRise.mp3","sound/bugHover.mp3"].forEach(Ud);function wl(){Sn||(Sn=new wv),Sn.state==="suspended"&&Sn.resume();try{const f=Sn.createBuffer(1,1,22050),x=Sn.createBufferSource();x.buffer=f,x.connect(Sn.destination),x.start(0)}catch{}Object.keys(Hr).forEach(f=>{!ur[f]&&Hr[f]&&zd(f,Hr[f])})}window.addEventListener("pointerdown",wl,{passive:!0}),window.addEventListener("click",wl,{passive:!0}),window.addEventListener("keydown",wl,{passive:!0}),window.addEventListener("touchstart",wl,{passive:!0}),window.addEventListener("keydown",f=>{(f.key==="Escape"||f.key==="Esc")&&(typeof In<"u"&&In?lr():Ln()&&Ii())});function mn(f,x=.8){const A=Math.max(0,Math.min(1,x));if(!(A<=0))try{if(Sn||wl(),Sn&&Sn.state==="suspended"&&(Sn.resume(),Sn.state==="suspended"))return;let N=ur[f];if(!N){const W=f.endsWith(".ogg")?f.replace(/\.ogg$/,".mp3"):f.endsWith(".mp3")?f.replace(/\.mp3$/,".ogg"):f;N=ur[W]}if(!N&&Hr[f]&&Sn&&(zd(f,Hr[f]),N=ur[f]||ur[f.replace(/\.ogg$/,".mp3")]),N&&Sn){const W=Sn.createBufferSource();W.buffer=N;const te=Sn.createGain();te.gain.value=A,W.connect(te),te.connect(Sn.destination),W.start(0)}}catch{}}function Mv(){const f=_.houdini3D?_.houdini3D.pop:null;if(!f||f.soundEnabled===!1)return;const x=f.volume!==void 0?f.volume:.8;mn("sound/pop.mp3",x)}function Sv(){const f=_.linkedin3D;if(!f||f.soundEnabled===!1)return;const x=f.fallVolume,A=f.fallSoundSrc;mn(A,x)}function Av(){const f=_.linkedin3D;if(!f||f.soundEnabled===!1)return;const x=f.riseVolume,A=f.riseSoundSrc;mn(A,x)}function Tv(){const f=_.linkedin3D;if(!f||f.soundEnabled===!1)return;const x=f.hoverVolume,A=f.hoverSoundSrc;mn(A,x)}function Ev(){const f=_.questionBox?_.questionBox.shatter:null;if(!f||f.soundEnabled===!1)return;const x=f.growVolume!==void 0?f.growVolume:f.volume!==void 0?f.volume:.8;mn("sound/aboutGrow.mp3",x)}function Lv(){const f=_.questionBox?_.questionBox.shatter:null;if(!f||f.soundEnabled===!1)return;const x=f.volume!==void 0?f.volume:.8;mn("sound/shatter.mp3",x)}function Pv(){const f=_.questionBox?_.questionBox.hover:null;if(!f||f.soundEnabled===!1)return;const x=f.hoverInVolume!==void 0?f.hoverInVolume:f.volume!==void 0?f.volume:.8;mn("sound/aboutHover.mp3",x)}function Cv(){const f=_.questionBox?_.questionBox.hover:null;if(!f||f.soundEnabled===!1)return;const x=f.hoverOutVolume!==void 0?f.hoverOutVolume:f.volume!==void 0?f.volume:.8;mn("sound/aboutOut.mp3",x)}function Rv(){const f=_.houdini3D?_.houdini3D.hover:null;if(!f||f.soundEnabled===!1)return;const x=f.hoverInVolume!==void 0?f.hoverInVolume:f.volume!==void 0?f.volume:.8;mn("sound/houdiniHover.mp3",x)}function Fv(){const f=_.houdini3D?_.houdini3D.hover:null;if(!f||f.soundEnabled===!1)return;const x=f.hoverOutVolume!==void 0?f.hoverOutVolume:f.volume!==void 0?f.volume:.8;mn("sound/houdiniOut.mp3",x)}function Iv(){const f=_.houdini3D?_.houdini3D.pop:null;if(!f||f.soundEnabled===!1)return;const x=f.growVolume!==void 0?f.growVolume:f.volume!==void 0?f.volume:.8;mn("sound/aboutGrow.mp3",x)}function Dv(){const f=_.web3D?_.web3D.hover:null;if(!f||f.soundEnabled===!1)return;const x=f.hoverInVolume!==void 0?f.hoverInVolume:f.volume!==void 0?f.volume:.8;mn("sound/webHover.mp3",x)}function Tp(){const f=_.web3D?_.web3D.hover:null;if(!f||f.soundEnabled===!1)return;const x=f.hoverOutVolume!==void 0?f.hoverOutVolume:f.volume!==void 0?f.volume:.8;mn("sound/webOut.mp3",x)}function Nv(){const f=_.web3D?_.web3D.clickAnimation:null;if(!f||f.soundEnabled===!1)return;const x=f.volume!==void 0?f.volume:.8;mn("sound/ring.mp3",x)}function Bv(){const f=_.ar3D,x=f?f.clickAnimation:null;if(!x||x.soundEnabled===!1)return;const A=x.volume!==void 0?x.volume:.25,N=x.soundSrc||"sound/vibration.mp3";mn(N,A)}function kv(){const f=_.ar3D,x=f?f.hover:null;if(!x||x.soundEnabled===!1)return;const A=x.hoverInVolume!==void 0?x.hoverInVolume:.15,N=x.hoverInSoundSrc||"sound/arHover.mp3";mn(N,A)}function Ep(){const f=_.ar3D,x=f?f.hover:null;if(!x||x.soundEnabled===!1)return;const A=x.hoverOutVolume!==void 0?x.hoverOutVolume:.15,N=x.hoverOutSoundSrc||"sound/arOut.mp3";mn(N,A)}function Ov(){const f=_.games3D?_.games3D.pop:null;if(!f||f.soundEnabled===!1)return;const x=f.laserVolume!==void 0?f.laserVolume:f.volume!==void 0?f.volume:.8,A=f.laserSoundSrc||"sound/lazer.mp3";mn(A,x)}function zv(){const f=_.games3D?_.games3D.pop:null;if(!f||f.soundEnabled===!1)return;const x=f.explodeVolume!==void 0?f.explodeVolume:f.volume!==void 0?f.volume:.8,A=f.explodeSoundSrc||"sound/8bitExplode.mp3";mn(A,x)}function Uv(){const f=_.games3D?_.games3D.pop:null;if(!f||f.soundEnabled===!1)return;const x=f.growVolume!==void 0?f.growVolume:f.volume!==void 0?f.volume:.8,A=f.growSoundSrc||"sound/alienGrow.mp3";mn(A,x)}function Hv(){const f=_.games3D?_.games3D.hover:null;if(!f||f.soundEnabled===!1)return;const x=performance.now(),A=f.hoverInCooldown!==void 0?f.hoverInCooldown:180;if(x-Nh<A)return;Nh=x;const N=f.hoverInVolume!==void 0?f.hoverInVolume:f.volume!==void 0?f.volume:.8,W=f.hoverInSoundSrc||"sound/gamesHover.mp3";mn(W,N)}function Gv(){const f=_.games3D?_.games3D.hover:null;if(!f||f.soundEnabled===!1)return;const x=performance.now(),A=f.hoverOutCooldown!==void 0?f.hoverOutCooldown:180;if(x-Bh<A)return;Bh=x;const N=f.hoverOutVolume!==void 0?f.hoverOutVolume:f.volume!==void 0?f.volume:.8,W=f.hoverOutSoundSrc||"sound/gamesOut.mp3";mn(W,N)}function Vv(f){const x=_.renderStyles;if(!x)return;let A="",N=.8;if(x.modeSounds&&x.modeSounds[f]){const W=x.modeSounds[f];A=typeof W=="string"?W:W&&(W.src||W.soundSrc)||"",W&&typeof W=="object"&&W.volume!==void 0&&(N=W.volume)}if(!A&&x[f]){const W=x[f];A=W.soundSrc||(W.sound?W.sound.src:""),W.soundVolume!==void 0?N=W.soundVolume:W.sound&&W.sound.volume!==void 0&&(N=W.sound.volume)}A&&(ur[A]||Ud(A),mn(A,N))}function Wv(){const f=_.renderStyles;if(!f)return;const x=[];f.modeSounds&&Object.values(f.modeSounds).forEach(A=>{const N=typeof A=="string"?A:A&&(A.src||A.soundSrc)||"";N&&!x.includes(N)&&x.push(N)}),Array.isArray(f.activeModes)&&f.activeModes.forEach(A=>{const N=f[A];if(N){const W=N.soundSrc||(N.sound?N.sound.src:"");W&&!x.includes(W)&&x.push(W)}}),x.forEach(Ud)}Wv();function Lp(f=!1){sd=f,ns=performance.now(),ft=!1}function Pp(f=!1){if(ts||!Ce||!ft&&!f)return!1;const x=_.games3D,A=x?x.pop:null;if(A&&A.enabled===!1)return!1;rd=!1,Ov(),cd=f,Ce.traverse(Re=>{Re.isMesh&&(Re===fi?Re.visible=!0:Re.visible=!1)});const W=(x&&x.rotation&&x.rotation.y!==void 0?x.rotation.y:90)*Math.PI/180,te=pd.setFromMatrixPosition(Ce.matrixWorld),ee=Ft.position.x-te.x,Z=Ft.position.z-te.z,be=Math.atan2(ee,Z);if(Ce.userData.initialCamAngle===void 0){const Re=(r&&x&&x.mobile?x.mobile.position:null)||(x&&x.desktop?x.desktop.position:{x:4.8,z:2});Ce.userData.initialCamAngle=Math.atan2(Ft.position.x-Re.x,Ft.position.z-Re.z)}const Le=be-Ce.userData.initialCamAngle,ke=W-pt.rotation.y+Le;return Ce.rotation.y=ke,ts=!0,ft=!1,Dh=performance.now(),ns=0,$t(),!0}function Cp(f=!1){ju=f,Ms=performance.now(),ft=!1}function Rp(f=!1){Qu=f,Uo=performance.now(),ft=!1}function Fp(f=!1){if(is||!tt||!ft&&!f)return!1;const x=_.houdini3D?_.houdini3D.pop:null;if(!x||x.enabled===!1)return!1;is=!0,ft=!1,dd=f,Oh=performance.now(),Ms=0,Mv(),$t(),ea||(ea=ep());const A=tt.position.clone();Or=new ci,Or.renderOrder=10,pt.add(Or),Ko=[];const N=x.sparkleCount!==void 0?x.sparkleCount:28,W=x.minSparkleScale!==void 0?x.minSparkleScale:.8,te=x.maxSparkleScale!==void 0?x.maxSparkleScale:1.8,ee=x.sparkleSpeed!==void 0?x.sparkleSpeed:3.5,Z=x.sparkleColors||["#a621ff","#e099ff","#ffffff","#00ffff","#ffea00","#ff006e"];for(let be=0;be<N;be++){const Le=new cs(.35,.35),ke=Z[Math.floor(Math.random()*Z.length)],Re=new Ut({map:ea,color:new se(ke),transparent:!0,opacity:1,depthWrite:!1,blending:Ia}),Oe=new Nt(Le,Re),He=W+Math.random()*(te-W);Oe.scale.set(He,He,1);const gt=new S((Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4);Oe.position.copy(A).add(gt);const nt=gt.clone();nt.lengthSq()<.001&&nt.set(Math.random()-.5,Math.random()-.5,Math.random()-.5),nt.normalize().multiplyScalar(ee*(.5+Math.random()*.8)),Oe.rotation.z=Math.random()*Math.PI*2;const it=(Math.random()-.5)*.1,zt=.6+Math.random()*.5;Oe.userData={velocity:nt,rotVelocityZ:it,initialScale:He,initialLifetime:zt,lifetime:zt},Or.add(Oe),Ko.push(Oe)}return!0}function Ip(f=!1){id=f,Ti=performance.now(),ft=!1,Ai&&Jo(Ai)}function Dp(f=!1){if(zi||Ti>0||!we||!ft&&!f)return!1;const x=_.ar3D,A=x?x.clickAnimation:null;if(A&&A.enabled===!1)return!1;zi=!0,ft=!1,ld=f,$t(),e.style.setProperty("cursor","default"),nd=performance.now(),Yn&&Yn.reset().play();const W=(x&&x.rotation&&x.rotation.y!==void 0?x.rotation.y:90)*Math.PI/180+Math.PI-pt.rotation.y;return we.rotation.y=W,Cr&&Jo(Cr),Bv(),!0}function Np(f=!1){if(Js||!ht||!ft&&!f)return!1;const x=_.web3D,A=x?x.clickAnimation:null;if(A&&A.enabled===!1)return!1;Js=!0,Oi=!1,wr=!1,ft=!1,ud=f,$t(),e.style.setProperty("cursor","default"),Nv(),Ku=performance.now(),Un&&(Un.parent&&Un.parent.remove(Un),oo.forEach(Oe=>{Oe.geometry&&Oe.geometry.dispose(),Oe.material&&Oe.material.dispose()}),Un=null,oo=[]),Un=new ci,Un.renderOrder=9999,pt.add(Un);const N=new S;bi?bi.getWorldPosition(N):ht.getWorldPosition(N);const W=pt.worldToLocal(N.clone());Un.position.copy(W);const te=A&&A.godRayCount!==void 0?A.godRayCount:36,ee=A&&A.minRayLength!==void 0?A.minRayLength:1,Z=A&&A.maxRayLength!==void 0?A.maxRayLength:2.2,be=A&&A.minRayWidth!==void 0?A.minRayWidth:.35,Le=A&&A.maxRayWidth!==void 0?A.maxRayWidth:.6,ke=A&&A.rayColors&&A.rayColors.length>0?A.rayColors:["#ffffff","#21ffd8","#91bfff"],Re=iv();for(let Oe=0;Oe<te;Oe++){const He=ee+Math.random()*(Z-ee),gt=be+Math.random()*(Le-be),nt=new cs(gt,He);nt.translate(0,He/2,0);const it=ke[Math.floor(Math.random()*ke.length)],zt=new Ut({map:Re,color:new se(it),transparent:!0,opacity:0,depthWrite:!1,blending:Ia,side:Yi}),Lt=new Nt(nt,zt),Pt=Math.random(),ut=Math.random(),dt=Pt*2*Math.PI,At=Math.acos(2*ut-1),nn=new S(Math.sin(At)*Math.cos(dt),Math.cos(At),Math.sin(At)*Math.sin(dt));Lt.quaternion.setFromUnitVectors(ac,nn),Lt.userData={direction:nn,distance:0,expSpeed:3.5*(.8+Math.random()*.4),maxOpacity:.75+Math.random()*.25,targetLength:He,targetWidth:gt,rotSpeed:(Math.random()-.5)*.4},Un.add(Lt),oo.push(Lt)}return!0}function Bp(f=!1){if(Br||!at)return!1;const x=_.questionBox.shatter;if(!x)return!1;Br=!0,ft=!1,performance.now(),ws=0,Lv(),od=f,$t(),at.visible=!1,wn&&(wn.visible=!1),kr=new ci,kr.renderOrder=10,pt.add(kr),hl=[],pl=[];const A=x.shardCount,N=x.minShardScale,W=x.maxShardScale,te=x.explosionSpeed,ee=at.position;for(let Oe=0;Oe<A;Oe++){const He=Math.random()>.5?new $l(1,1,1):new RS(1),gt=pi?pi.clone():new Co({color:16777215,transparent:!0,opacity:1});gt.transparent=!0,gt.opacity=1;const nt=new Nt(He,gt),it=new S((Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4);nt.position.copy(ee).add(it);const zt=N+Math.random()*(W-N);nt.scale.set(zt,zt,zt);const Lt=it.clone();Lt.lengthSq()<.001&&Lt.set(Math.random()-.5,Math.random()-.5,Math.random()-.5),Lt.normalize().multiplyScalar(te*(.6+Math.random()*.6));const Pt=new S((Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4),ut=1+Math.random()*.5;nt.userData={velocity:Lt,rotVelocity:Pt,initialScale:zt,initialLifetime:ut,lifetime:ut},kr.add(nt),hl.push(nt)}const Z=x.sparkleCount,be=x.minSparkleScale,Le=x.maxSparkleScale,ke=x.sparkleSpeed,Re=x.sparkleColors||["#ffffff","#fff8d0","#ffd0f8"];ea||(ea=ep());for(let Oe=0;Oe<Z;Oe++){const He=new cs(1,1),gt=Re[Math.floor(Math.random()*Re.length)],nt=new se(gt),it=new Ut({map:ea,color:nt,transparent:!0,opacity:.9,depthWrite:!1,blending:Ia,side:Yi}),zt=new Nt(He,it),Lt=new S((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3);zt.position.copy(ee).add(Lt);const Pt=be+Math.random()*(Le-be);zt.scale.set(Pt,Pt,1);const ut=Lt.clone();ut.lengthSq()<.001&&ut.set(Math.random()-.5,Math.random()-.5,Math.random()-.5),ut.normalize().multiplyScalar(ke*(.5+Math.random()*.8)),zt.rotation.z=Math.random()*Math.PI*2;const dt=(Math.random()-.5)*.1,At=.7+Math.random()*.6;zt.userData={velocity:ut,rotVelocityZ:dt,initialScale:Pt,opacity:.9,initialLifetime:At,lifetime:At},kr.add(zt),pl.push(zt)}return!0}window.addEventListener("pointermove",f=>{_t=f.clientX,Wt=f.clientY,ot.x=f.clientX/window.innerWidth*2-1,ot.y=-(f.clientY/window.innerHeight)*2+1},{passive:!0});let kp=0;function Gc(f){if(!ft||Zn!=="main"||hi||Ei||In)return;const x=performance.now();if(x-kp<60)return;kp=x;const A=f.clientX,N=f.clientY;if(A===void 0||N===void 0||Hc(A,N))return;const W=Mp(A,N);if(!Xn||!W){Xn=null;return}if(Xn.type!==W.type){Xn=null;return}if(Math.hypot(A-kd.x,N-kd.y)>20){Xn=null;return}const ee=W;if(Xn=null,ee.type==="questionBox"){const Z=_.questionBox.shatter;Z&&Z.enabled!==!1?Bp(!0):op()}else if(ee.type==="houdiniToy"){const Z=_.houdini3D?_.houdini3D.pop:null;Z&&Z.enabled!==!1?Fp(!0):up()}else if(ee.type==="webGlobe"){const Z=_.web3D?_.web3D.clickAnimation:null;Z&&Z.enabled!==!1?Np(!0):cp()}else if(ee.type==="gamesAlien"){const Z=_.games3D?_.games3D.pop:null;Z&&Z.enabled!==!1?Pp(!0):lp()}else if(ee.type==="arPhone"){const Z=_.ar3D?_.ar3D.clickAnimation:null;!Z||Z.enabled!==!1?Dp(!0):ap()}else ee.type==="bug"&&window.open("https://www.linkedin.com/in/noah-gunther-3128bb185/","_blank")}window.addEventListener("pointerup",Gc,{passive:!0}),window.addEventListener("click",Gc,{passive:!0}),bl&&(bl.addEventListener("pointerup",Gc,{passive:!0}),bl.addEventListener("click",Gc,{passive:!0}));try{const x=new URLSearchParams(window.location.search).get("panel");if(x){const A=x.toLowerCase(),N=(W=0)=>{const te=document.getElementById(A)||document.getElementById(A+"mobile");if(te&&ft){te.click();try{const ee=window.location.pathname+window.location.hash;window.history.replaceState({},document.title,ee)}catch{}}else W<100&&setTimeout(()=>N(W+1),100)};setTimeout(()=>N(0),100)}}catch{}}
