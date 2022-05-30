const f=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};f();const p=`
Hello.

 
Did you know that your brain reads faster than your eyes?
 
We limit our reading speed just because our eyes doesn't keep up.
 
My hackathon idea is to create a reading mode that removing the effort from eyes.



 
How?


 
1.&nbsp;Speed&nbsp;reading

     
 
Sometimes it's just hard to focus on a single word in a monolith block of text, especially when you have to burst through the content while preparing to exams. Speed reader is meant to solve those issues. In&nbsp;fact, you are speed reading this text right now.

    
 
2.&nbsp;Bionic&nbsp;font

     
 
The font that meant to help your brain to "catch" the word meaning without a need to scan the whole word with your eyes. This whole pitch is written like that.
 
     

Mentioned techniques could be enabled separately or all together. 

     
 
We need Frontenders, Designers, Backenders, anyone who is interested in improving core reading experience.

 
Thanks.
`,h=document.querySelector("#app");h.innerHTML=`
  hello
`;const a=50;function d(o,n,i=0,s=n){var c;const e=o[i],t=e.trim();let r=Math.max(t.length-2,1);e.match(/[0-9]/g)&&(r=t.length),h.innerHTML=`<b>${t.slice(0,r)}</b>${t.slice(r)}`;let l=Math.max(o[i].length*a,a*3);e.match(/[!?\.\,]/)&&(l+=a*5),e.match(/\n/g)&&(l+=(((c=e.match(/\n/g))==null?void 0:c.length)||0)*a),n-s>l&&(i+=1,s=n),requestAnimationFrame(u=>{d(o,u,i,s)})}requestAnimationFrame(o=>{d(p.split(" "),o,0,o)});
