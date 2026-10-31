(() => {
 const system=matchMedia('(prefers-color-scheme: dark)')
 let preference=null
 try{const v=localStorage.getItem('revisions-theme');if(['dark','light'].includes(v))preference=v}catch{}
 function apply(){
  const dark=preference?preference==='dark':system.matches
  document.documentElement.dataset.theme=dark?'dark':'light'
  const b=document.getElementById('theme-toggle')
  if(b){b.setAttribute('aria-pressed',String(dark));b.setAttribute('aria-label',dark?'Activer le mode clair':'Activer le mode sombre');b.textContent=dark?'☀ Mode clair':'☾ Mode sombre'}
  const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=dark?'#070910':'#f5f8ff'
 }
 apply()
 system.addEventListener('change',()=>{if(!preference)apply()})
 document.addEventListener('click',e=>{if(e.target.closest?.('#theme-toggle')){preference=document.documentElement.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('revisions-theme',preference)}catch{}apply()}})
 const sync=()=>{apply();if(!document.getElementById('theme-toggle')){const observer=new MutationObserver(()=>{if(document.getElementById('theme-toggle')){apply();observer.disconnect()}});observer.observe(document.body,{childList:true,subtree:true})}}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',sync,{once:true});else sync()
})()
