import{u as $,h as le,i as te,j,k as se,l as ae,t as re,m as ie,n as L,p as F,q as ue,w as P,v as t,x as ne,R as U,y as oe,z as ce,A as me,D as he,B as ve,C as Ee,E as Ie,F as de,G as ye,H as Se,I as ge,J as D,K as b,L as pe,M as B,N as Ce}from"./app-bY5shUlW.js";const fe=["/","/FIT/","/General/Hall_of_Fame.html","/General/about.html","/General/alumni_share.html","/General/appreciate.html","/General/greenhand.html","/General/quickstart.html","/General/recurit.html","/MIS/","/Tech/Canvas.html","/Tech/CityU_Portal.html","/Tech/it_services.html","/elective/","/FIT/Core_Course/AC5511.html","/FIT/Core_Course/EF5042.html","/FIT/Core_Course/IS5540.html","/FIT/Core_Course/IS5740.html","/FIT/Core_Course/IS6400.html","/FIT/Core_Course/IS6523.html","/FIT/FIT_Elective/EF5052.html","/FIT/FIT_Elective/IS5010.html","/FIT/FIT_Elective/IS6941.html","/MIS/Core_Course/IS5311.html","/MIS/Core_Course/IS5312.html","/MIS/Core_Course/IS5313.html","/MIS/Core_Course/IS5411.html","/MIS/Core_Course/IS5413.html","/MIS/Core_Course/IS5540.html","/MIS/MIS_Elective/IS6335.html","/Useful/CourseEnroll/extension.html","/Useful/CourseEnroll/how_to.html","/Useful/CourseEnroll/pgce.html","/Useful/CourseEnroll/time_arrangement.html","/Useful/CourseEnroll/useful_data.html","/Useful/Learning/BIS_resource.html","/Useful/Learning/coding_greenhand.html","/Useful/Learning/cscse_reco.html","/Useful/Learning/trans_mse_tutorial.html","/elective/IS5/IS5238.html","/elective/IS5/IS5314.html","/elective/IS5/IS5542.html","/elective/IS5/IS5743.html","/elective/IS5/IS5940.html","/elective/IS6/IS6200.html","/elective/IS6/IS6421.html","/elective/IS6/IS6423.html","/elective/IS6/IS6620.html","/elective/IS6/IS6640.html","/elective/IS6/IS6912.html","/elective/IS6/IS6930.html","/elective/IS6/IS6940C.html","/404.html","/General/","/Tech/","/FIT/Core_Course/","/FIT/FIT_Elective/","/MIS/Core_Course/","/MIS/MIS_Elective/","/Useful/CourseEnroll/","/Useful/","/Useful/Learning/","/elective/IS5/","/elective/IS6/","/category/","/category/%E4%B8%93%E4%B8%9A%E6%96%B9%E5%90%91%E4%BB%8B%E7%BB%8D/","/category/%E8%AF%BE%E7%A8%8B%E7%9B%B8%E5%85%B3/","/tag/","/tag/%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81/","/tag/%E5%85%AC%E5%85%B1%E9%80%89%E4%BF%AE%E8%AF%BE%E7%A8%8B/","/tag/fit%E5%BF%85%E4%BF%AE/","/tag/sema/","/tag/%E9%9D%9E%E7%BD%91%E9%80%89/","/tag/semasemb/","/tag/%E7%BD%91%E9%80%89/","/tag/semb/","/tag/fit%E8%AE%A1%E5%88%92%E5%86%85%E9%80%89%E4%BF%AE/","/tag/mis%E5%BF%85%E4%BF%AE/","/tag/mis%E8%AE%A1%E5%88%92%E5%86%85%E9%80%89%E4%BF%AE/","/tag/%E9%80%89%E8%AF%BE/","/tag/%E8%B5%84%E6%BA%90/","/tag/st%E8%AF%BE%E7%A8%8B/","/tag/unknown/","/tag/%E8%AE%BA%E6%96%87%E8%AF%BE%E7%A8%8B/","/article/","/star/","/timeline/"],Fe="SLIMSEARCH_QUERY_HISTORY",d=$(Fe,[]),Be=()=>{const{queryHistoryCount:s}=B,a=s>0;return{enabled:a,queryHistories:d,addQueryHistory:r=>{a&&(d.value=Array.from(new Set([r,...d.value.slice(0,s-1)])))},removeQueryHistory:r=>{d.value=[...d.value.slice(0,r),...d.value.slice(r+1)]}}},q=s=>fe[s.id]+("anchor"in s?`#${s.anchor}`:""),_e="SLIMSEARCH_RESULT_HISTORY",{resultHistoryCount:G}=B,y=$(_e,[]),Ae=()=>{const s=G>0;return{enabled:s,resultHistories:y,addResultHistory:a=>{if(s){const r={link:q(a),display:a.display};"header"in a&&(r.header=a.header),y.value=[r,...y.value.slice(0,G-1)]}},removeResultHistory:a=>{y.value=[...y.value.slice(0,a),...y.value.slice(a+1)]}}},Te=s=>{const a=he(),r=j(),_=ve(),u=L(0),g=F(()=>u.value>0),E=Ee([]);return Ie(()=>{const{search:I,terminate:A}=de(),S=pe(o=>{const{resultsFilter:p=n=>n,querySplitter:x,suggestionsFilter:T,...H}=a.value;o?(u.value+=1,I(o,r.value,H).then(n=>p(n,o,r.value,_.value)).then(n=>{u.value-=1,E.value=n}).catch(n=>{console.warn(n),u.value-=1,u.value||(E.value=[])})):E.value=[]},B.searchDelay-B.suggestDelay,{maxWait:5e3});P([s,r],([o])=>{S(o.join(" "))},{immediate:!0}),ye(()=>{A()})}),{isSearching:g,results:E}};var ke=le({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:a}){const r=te(),_=j(),u=se(ae),{enabled:g,addQueryHistory:E,queryHistories:I,removeQueryHistory:A}=Be(),{enabled:S,resultHistories:o,addResultHistory:p,removeResultHistory:x}=Ae(),T=g||S,H=re(s,"queries"),{results:n,isSearching:O}=Te(H),i=ie({isQuery:!0,index:0}),h=L(0),v=L(0),M=F(()=>T&&(I.value.length>0||o.value.length>0)),k=F(()=>n.value.length>0),R=F(()=>n.value[h.value]||null),Y=()=>{const{isQuery:e,index:l}=i;l===0?(i.isQuery=!e,i.index=e?o.value.length-1:I.value.length-1):i.index=l-1},z=()=>{const{isQuery:e,index:l}=i;l===(e?I.value.length-1:o.value.length-1)?(i.isQuery=!e,i.index=0):i.index=l+1},J=()=>{h.value=h.value>0?h.value-1:n.value.length-1,v.value=R.value.contents.length-1},K=()=>{h.value=h.value<n.value.length-1?h.value+1:0,v.value=0},N=()=>{v.value<R.value.contents.length-1?v.value+=1:K()},V=()=>{v.value>0?v.value-=1:J()},w=e=>e.map(l=>Ce(l)?l:t(l[0],l[1])),W=e=>{if(e.type==="customField"){const l=Se[e.index]||"$content",[c,f=""]=ge(l)?l[_.value].split("$content"):l.split("$content");return e.display.map(m=>t("div",w([c,...m,f])))}return e.display.map(l=>t("div",w(l)))},C=()=>{h.value=0,v.value=0,a("updateQuery",""),a("close")},X=()=>g?t("ul",{class:"slimsearch-result-list"},t("li",{class:"slimsearch-result-list-item"},[t("div",{class:"slimsearch-result-title"},u.value.queryHistory),I.value.map((e,l)=>t("div",{class:["slimsearch-result-item",{active:i.isQuery&&i.index===l}],onClick:()=>{a("updateQuery",e)}},[t(D,{class:"slimsearch-result-type"}),t("div",{class:"slimsearch-result-content"},e),t("button",{class:"slimsearch-remove-icon",innerHTML:b,onClick:c=>{c.preventDefault(),c.stopPropagation(),A(l)}})]))])):null,Z=()=>S?t("ul",{class:"slimsearch-result-list"},t("li",{class:"slimsearch-result-list-item"},[t("div",{class:"slimsearch-result-title"},u.value.resultHistory),o.value.map((e,l)=>t(U,{to:e.link,class:["slimsearch-result-item",{active:!i.isQuery&&i.index===l}],onClick:()=>{C()}},()=>[t(D,{class:"slimsearch-result-type"}),t("div",{class:"slimsearch-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(c=>w(c)).flat())]),t("button",{class:"slimsearch-remove-icon",innerHTML:b,onClick:c=>{c.preventDefault(),c.stopPropagation(),x(l)}})]))])):null;return ue("keydown",e=>{if(s.isFocusing){if(k.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const l=R.value.contents[v.value];E(s.queries.join(" ")),p(l),r.push(q(l)),C()}}else if(S){if(e.key==="ArrowUp")Y();else if(e.key==="ArrowDown")z();else if(e.key==="Enter"){const{index:l}=i;i.isQuery?(a("updateQuery",I.value[l]),e.preventDefault()):(r.push(o.value[l].link),C())}}}}),P([h,v],()=>{var e;(e=document.querySelector(".slimsearch-result-list-item.active .slimsearch-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["slimsearch-result-wrapper",{empty:s.queries.length?!k.value:!M.value}],id:"slimsearch-results"},s.queries.length?O.value?t(ne,{hint:u.value.searching}):k.value?t("ul",{class:"slimsearch-result-list"},n.value.map(({title:e,contents:l},c)=>{const f=h.value===c;return t("li",{class:["slimsearch-result-list-item",{active:f}]},[t("div",{class:"slimsearch-result-title"},e||u.value.defaultTitle),l.map((m,ee)=>{const Q=f&&v.value===ee;return t(U,{to:q(m),class:["slimsearch-result-item",{active:Q,"aria-selected":Q}],onClick:()=>{E(s.queries.join(" ")),p(m),C()}},()=>[m.type==="text"?null:t(m.type==="title"?oe:m.type==="heading"?ce:me,{class:"slimsearch-result-type"}),t("div",{class:"slimsearch-result-content"},[m.type==="text"&&m.header?t("div",{class:"content-header"},m.header):null,t("div",W(m))])])})])})):u.value.emptyResult:T?M.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{ke as default};
