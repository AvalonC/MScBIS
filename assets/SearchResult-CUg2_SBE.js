import{u as O,g as te,h as le,i as $,j as se,P as ae,t as re,k as ue,l as U,m as _,n as ie,p as j,q as l,s as oe,R as M,v as ne,x as ce,y as ve,C as he,z as me,A as Ee,B as pe,D as de,E as ye,F as B,G as Ie,H as ge,I as Se,J as b,K as G,L as Ce}from"./app-DhGxrYyJ.js";const fe=["/","/FIT/","/General/Hall_of_Fame.html","/General/about.html","/General/alumni_share.html","/General/appreciate.html","/General/changedata.html","/General/greenhand.html","/General/quickstart.html","/General/recurit.html","/MIS/","/Tech/Canvas.html","/Tech/CityU_Portal.html","/Tech/it_services.html","/elective/","/FIT/Core_Course/AC5511.html","/FIT/Core_Course/EF5042.html","/FIT/Core_Course/IS5540.html","/FIT/Core_Course/IS5740.html","/FIT/Core_Course/IS6400.html","/FIT/Core_Course/IS6523.html","/FIT/FIT_Elective/EF5052.html","/FIT/FIT_Elective/IS5010.html","/FIT/FIT_Elective/IS6941.html","/MIS/Core_Course/IS5311.html","/MIS/Core_Course/IS5312.html","/MIS/Core_Course/IS5313.html","/MIS/Core_Course/IS5411.html","/MIS/Core_Course/IS5413.html","/MIS/Core_Course/IS5540.html","/MIS/MIS_Elective/IS6335.html","/Useful/CourseEnroll/extension.html","/Useful/CourseEnroll/how_to.html","/Useful/CourseEnroll/pgce.html","/Useful/CourseEnroll/time_arrangement.html","/Useful/CourseEnroll/useful_data.html","/Useful/Learning/BIS_resource.html","/Useful/Learning/coding_greenhand.html","/Useful/Learning/cscse_reco.html","/Useful/Learning/trans_mse_tutorial.html","/elective/IS5/IS5238.html","/elective/IS5/IS5314.html","/elective/IS5/IS5743.html","/elective/IS5/IS5940.html","/elective/IS6/IS6200.html","/elective/IS6/IS6421.html","/elective/IS6/IS6640.html","/elective/IS6/IS6912.html","/elective/IS6/IS6930.html","/elective/IS6/IS6940C.html","/404.html","/General/","/Tech/","/FIT/Core_Course/","/FIT/FIT_Elective/","/MIS/Core_Course/","/MIS/MIS_Elective/","/Useful/CourseEnroll/","/Useful/","/Useful/Learning/","/elective/IS5/","/elective/IS6/","/category/","/category/%E4%B8%93%E4%B8%9A%E6%96%B9%E5%90%91%E4%BB%8B%E7%BB%8D/","/category/%E8%AF%BE%E7%A8%8B%E7%9B%B8%E5%85%B3/","/tag/","/tag/%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81/","/tag/%E5%85%AC%E5%85%B1%E9%80%89%E4%BF%AE%E8%AF%BE%E7%A8%8B/","/tag/fit%E5%BF%85%E4%BF%AE/","/tag/sema/","/tag/%E9%9D%9E%E7%BD%91%E9%80%89/","/tag/semasemb/","/tag/%E7%BD%91%E9%80%89/","/tag/semb/","/tag/fit%E8%AE%A1%E5%88%92%E5%86%85%E9%80%89%E4%BF%AE/","/tag/mis%E5%BF%85%E4%BF%AE/","/tag/mis%E8%AE%A1%E5%88%92%E5%86%85%E9%80%89%E4%BF%AE/","/tag/%E9%80%89%E8%AF%BE/","/tag/%E8%B5%84%E6%BA%90/","/tag/st%E8%AF%BE%E7%A8%8B/","/tag/unknown/","/tag/%E8%AE%BA%E6%96%87%E8%AF%BE%E7%A8%8B/","/article/","/star/","/timeline/"],Fe="SEARCH_PRO_QUERY_HISTORY",y=O(Fe,[]),_e=()=>{const{queryHistoryCount:s}=B,a=s>0;return{enabled:a,queryHistory:y,addQueryHistory:r=>{a&&(y.value=Array.from(new Set([r,...y.value.slice(0,s-1)])))},removeQueryHistory:r=>{y.value=[...y.value.slice(0,r),...y.value.slice(r+1)]}}},q=s=>fe[s.id]+("anchor"in s?`#${s.anchor}`:""),Be="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:P}=B,I=O(Be,[]),Ae=()=>{const s=P>0;return{enabled:s,resultHistory:I,addResultHistory:a=>{if(s){const r={link:q(a),display:a.display};"header"in a&&(r.header=a.header),I.value=[r,...I.value.slice(0,P-1)]}},removeResultHistory:a=>{I.value=[...I.value.slice(0,a),...I.value.slice(a+1)]}}},He=s=>{const a=he(),r=$(),A=me(),i=U(0),C=_(()=>i.value>0),E=Ee([]);return pe(()=>{const{search:p,terminate:H}=de(),g=ye(c=>{const S=c.join(" "),{searchFilter:T=m=>m,splitWord:R,suggestionsFilter:x,...d}=a.value;S?(i.value+=1,p(c.join(" "),r.value,d).then(m=>T(m,S,r.value,A.value)).then(m=>{i.value-=1,E.value=m}).catch(m=>{console.warn(m),i.value-=1,i.value||(E.value=[])})):E.value=[]},B.searchDelay-B.suggestDelay);j([s,r],([c])=>g(c),{immediate:!0}),Ie(()=>{H()})}),{isSearching:C,results:E}};var Re=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:a}){const r=le(),A=$(),i=se(ae),{enabled:C,addQueryHistory:E,queryHistory:p,removeQueryHistory:H}=_e(),{enabled:g,resultHistory:c,addResultHistory:S,removeResultHistory:T}=Ae(),R=C||g,x=re(s,"queries"),{results:d,isSearching:m}=He(x),u=ue({isQuery:!0,index:0}),v=U(0),h=U(0),L=_(()=>R&&(p.value.length>0||c.value.length>0)),k=_(()=>d.value.length>0),w=_(()=>d.value[v.value]||null),Y=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?c.value.length-1:p.value.length-1):u.index=t-1},z=()=>{const{isQuery:e,index:t}=u;t===(e?p.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},J=()=>{v.value=v.value>0?v.value-1:d.value.length-1,h.value=w.value.contents.length-1},K=()=>{v.value=v.value<d.value.length-1?v.value+1:0,h.value=0},V=()=>{h.value<w.value.contents.length-1?h.value+=1:K()},N=()=>{h.value>0?h.value-=1:J()},Q=e=>e.map(t=>Ce(t)?t:l(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=ge[e.index]||"$content",[o,F=""]=Se(t)?t[A.value].split("$content"):t.split("$content");return e.display.map(n=>l("div",Q([o,...n,F])))}return e.display.map(t=>l("div",Q(t)))},f=()=>{v.value=0,h.value=0,a("updateQuery",""),a("close")},X=()=>C?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},i.value.queryHistory),p.value.map((e,t)=>l("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{a("updateQuery",e)}},[l(b,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},e),l("button",{class:"search-pro-remove-icon",innerHTML:G,onClick:o=>{o.preventDefault(),o.stopPropagation(),H(t)}})]))])):null,Z=()=>g?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,t)=>l(M,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{f()}},()=>[l(b,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(o=>Q(o)).flat())]),l("button",{class:"search-pro-remove-icon",innerHTML:G,onClick:o=>{o.preventDefault(),o.stopPropagation(),T(t)}})]))])):null;return ie("keydown",e=>{if(s.isFocusing){if(k.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=w.value.contents[h.value];E(s.queries.join(" ")),S(t),r.push(q(t)),f()}}else if(g){if(e.key==="ArrowUp")Y();else if(e.key==="ArrowDown")z();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(a("updateQuery",p.value[t]),e.preventDefault()):(r.push(c.value[t].link),f())}}}}),j([v,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!k.value:!L.value}],id:"search-pro-results"},s.queries.length?m.value?l(oe,{hint:i.value.searching}):k.value?l("ul",{class:"search-pro-result-list"},d.value.map(({title:e,contents:t},o)=>{const F=v.value===o;return l("li",{class:["search-pro-result-list-item",{active:F}]},[l("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),t.map((n,ee)=>{const D=F&&h.value===ee;return l(M,{to:q(n),class:["search-pro-result-item",{active:D,"aria-selected":D}],onClick:()=>{E(s.queries.join(" ")),S(n),f()}},()=>[n.type==="text"?null:l(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?l("div",{class:"content-header"},n.header):null,l("div",W(n))])])})])})):i.value.emptyResult:R?L.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Re as default};