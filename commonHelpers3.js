import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as l}from"./assets/vendor-585fe19e.js";const c=document.querySelector("form"),f={position:"topRight",messageColor:"#fff"};function p(e,t){const o=Math.random()>.3;return new Promise((r,s)=>{setTimeout(()=>{o?r({position:e,delay:t}):s({position:e,delay:t})},t)})}function i(e,t,o){l.show({...f,message:o?`✅ Fulfilled promise ${e} in ${t}ms`:`❌ Rejected promise ${e} in ${t}ms`,color:o?"#7dc67d":"#ef5350"})}function d(e){e.preventDefault();const t=Number(e.target.elements.delay.value),o=Number(e.target.elements.step.value),r=Number(e.target.elements.amount.value);for(let s=0;s<r;s++){const a=s+1,u=t+o*s;p(a,u).then(({position:n,delay:m})=>{i(n,m,!0)}).catch(({position:n,delay:m})=>{i(n,m,!1)})}}c.addEventListener("submit",d);
//# sourceMappingURL=commonHelpers3.js.map
