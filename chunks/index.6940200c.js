import{L as P,l as G,O as I,i as R,c as A,u as k,D as g,R as q,d as x,e as B,g as H}from"./stats.module.9a08a616.js";import{A as j,S as U,P as z,au as O}from"./vendor.4a9eae3d.js";import{m as W}from"./makeCommonGUI.8426dbd5.js";const $=[],J=B.Dirlight,K=H.Bug1;let p=null,l=!1;const a=document.querySelector("#container"),E=document.querySelector(".loadingText"),n=new P;n.bounces=2;n.renderWhenOffFocus=!1;n.useTileRender=!1;n.toneMapping=j;n.envMapIntensity=2;n.enableDenoise=!1;n.enableTemporalDenoise=!0;n.enableSpatialDenoise=!0;document.body.appendChild(n.domElement);const b=!0;let M=!1;const{initStats:N,initGUI:Q,initCameraDebugInfo:V}=W();n.loadingCallback={onProgress:e=>{console.log(e)},onComplete:e=>{E.innerText=e,r(!1),M||(X(),Q(b,n),Z()),M=!0,console.log(e)}};const u=N(b),S=V(b);let y=null,f=null;function X(){n.setDenoiseColorFactor(2),n.setDenoisePositionFactor(.01)}const i=new U;G($,i);const o=new z(45,window.innerWidth/window.innerHeight,.001,1e3),h=new I(o,n.domElement);h.screenSpacePanning=!0;function v(e){p&&i.remove(p);const t=e.scene;_(t),i.add(t),p=t,k(o,h,i)}function w(e){i.environment=e}function Y(){const e=document.querySelector("#bubble");document.querySelector("#bubble-close").onclick=()=>{e.style.display="none"},localStorage.getItem("bubble")||(e.style.display="block",document.querySelector(".bubble-confirm").onclick=()=>{e.style.display="none",localStorage.setItem("bubble",!0)})}function D(e){const t=document.querySelector("#bubble");t.style.display="block",document.querySelector(".bubble-text").innerText=e}function L(e){e?a.classList.contains("isDroping")||a.classList.add("isDroping"):a.classList.contains("isDroping")&&a.classList.remove("isDroping")}function r(e){e?a.classList.contains("isLoading")||a.classList.add("isLoading"):a.classList.contains("isLoading")&&a.classList.remove("isLoading")}function Z(){const e=n.domElement;e.addEventListener("dragenter",s=>{L(!0)}),e.addEventListener("dragleave",s=>{L(!1)});const t=new O(e,e);t.on("drop",({files:s})=>{if(L(!1),l){D("previous assets no loading complete!");return}l=!0,E.innerText="Building...",r(!0);const c=Array.from(s);c.find(([d,m])=>m.name.match(/\.(gltf|glb)$/))?R(s).then(d=>{v(d),console.log("gltfInfo",d),n.buildScene(i,o).then(()=>{l=!1,r(!1)})}):c.find(([m,F])=>F.name.match(/\.(hdr)$/))?A(s).then(m=>{w(m),n.updateEnvLight(),n.needsUpdate=!0,l=!1,r(!1)}):(l=!1,r(!1),D("Incorrect resource type(support gltf/glb folder or hdr file)!"))}),t.on("droperror",()=>{console.log("Drop Error")}),Y()}function _(e){e.traverse(t=>{if(t.isMesh&&t.material){if(t.material.isRayTracingMaterial)return;t.material.isMeshStandardMaterial?t.material=new g().fromStandardMaterial(t.material):t.material.isMeshBasicMaterial||t.material.isMeshLambertMaterial||t.material.isMeshToonMaterial?t.material=new g().fromBasicMaterial(t.material):t.material=new g}})}async function ee(){const e=new q,t=await new Promise(c=>{e.load(J,c)});w(t);const s=await x(K);v(s),n.buildScene(i,o).then(()=>{C()})}function T(){if(n.domElement.parentElement){const e=n.domElement.parentElement.clientWidth,t=n.domElement.parentElement.clientHeight;n.setSize(e,t),o.aspect=e/t,o.updateProjectionMatrix()}}window.addEventListener("resize",T);T();function C(e){h.update(),u&&u.begin(),n.render(i,o),u&&u.end(),S&&(f=n.getTotalSamples(),y!=f&&(S.innerText=`Samples: ${f}`,y=f)),requestAnimationFrame(C)}ee();