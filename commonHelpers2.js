import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as M,i as l}from"./assets/vendor-585fe19e.js";function a(e){const f=Math.floor(e/864e5),h=Math.floor(e%864e5/36e5),T=Math.floor(e%864e5%36e5/6e4),S=Math.floor(e%864e5%36e5%6e4/1e3);return{days:f,hours:h,minutes:T,seconds:S}}const t=e=>String(e).padStart(2,"0");const r=document.querySelector("[data-start]"),c=document.querySelector("[data-days]"),d=document.querySelector("[data-hours]"),u=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]"),n=1e3;r.setAttribute("disabled",!0);function m({days:e,hours:o,minutes:i,seconds:s}){c.innerHTML!==t(e)&&(c.innerHTML=t(e)),d.innerHTML!==t(o)&&(d.innerHTML=t(o)),u.innerHTML!==t(i)&&(u.innerHTML=t(i)),b.innerHTML=t(s)}function p(){let e=Number(this.latestSelectedDateObj)-Number(new Date);r.setAttribute("disabled",!0),m(a(e)),e-=n;const o=setInterval(()=>{if(e<n){clearInterval(o),l.show({message:"The time is up",color:"#7dc67d",position:"topRight",messageColor:"#fff"});return}e-=n,m(a(e))},n)}const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){if(Number(e[0])-Number(new Date)<0){l.show({message:"Please choose a date in the future",color:"#ef5350",position:"topRight",messageColor:"#fff"});return}r.removeAttribute("disabled")}},D=M("#datetime-picker",y);r.addEventListener("click",p.bind(D));
//# sourceMappingURL=commonHelpers2.js.map
