if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const f=e=>a(e,d),b={module:{uri:d},exports:c,require:f};s[d]=Promise.all(i.map((e=>b[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-dbb64b4e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-DU6JsTrS.js",revision:"d732b3773ec5f7bd57eaceac000efd95"},{url:"assets/about.html-y4ZcU4Sj.js",revision:"4abfce00b0b553bfbb0a8d08cef79b26"},{url:"assets/AC5511.html-DmPJJlZb.js",revision:"7de033f380b38676851c379c6f0afe70"},{url:"assets/alumni_share.html-DPz3RUrQ.js",revision:"d9e61eab3792749f65a2d9ba6521d2c7"},{url:"assets/app-BbLUGDby.js",revision:"e6fef44b93c56cdbe3f0175b9fc0e34b"},{url:"assets/appreciate.html-Cev2FsMj.js",revision:"e8643343d2934036327ad38585d48b30"},{url:"assets/arc-6L9n4WXh.js",revision:"5e65c8b395b4c62e7cd51db3a8ee7bf5"},{url:"assets/array-BKyUJesY.js",revision:"17dcebeaf673b09a1ca5da014d20022f"},{url:"assets/BIS_resource.html-xD2nX7x4.js",revision:"f7cb75266320c689e7fd1cb0a29bda7a"},{url:"assets/blockDiagram-91b80b7a-B-A72Avx.js",revision:"8fbb681c1ad33fecc50142f0f4184dd8"},{url:"assets/c4Diagram-b2a90758-BNxMCO3h.js",revision:"cbdf8ee1a96df3893d4f4ec33896264a"},{url:"assets/Canvas.html-0bRfKWrG.js",revision:"6d6c6a3ec40d788d9f88a7982eb1cdee"},{url:"assets/changedata.html-BblH8xKx.js",revision:"33334ed6ac519875fcad489cfd04dff1"},{url:"assets/channel-C0N5trqW.js",revision:"06d8ce340b124ab974a6e7f34721a374"},{url:"assets/CityU_Portal.html-CIXjsKPf.js",revision:"72c475971e0da9a1b444139a41f69b7d"},{url:"assets/classDiagram-30eddba6-C4YTGFA-.js",revision:"dd0aee5fe1af5141fd58d186fa9cad22"},{url:"assets/classDiagram-v2-f2df5561-DVrqgqCq.js",revision:"a2421c7180fb47ecb76d93c3e1674e3f"},{url:"assets/clone-gZn73jIr.js",revision:"2cedb55924ce297931ef43318c353cc8"},{url:"assets/createText-6b48ae7d-sSPJynBA.js",revision:"6976b60e14fd194053e44fd977e8ab5f"},{url:"assets/edges-d32062c0-C265DEGx.js",revision:"e957f5a327f5f367ec9dc29057e08cc7"},{url:"assets/EF5042.html-B15y33jg.js",revision:"37f6b2725ca11a5b9dc79c402e837fc9"},{url:"assets/EF5052.html-Cl1lI7av.js",revision:"1d43554baa9045b5ba51cd4a18ea42b4"},{url:"assets/erDiagram-47591fe2-Dzoh9XNE.js",revision:"accfbc04b56b0e101c5086500b41ecd8"},{url:"assets/extension.html-BdoxZ3qP.js",revision:"bd19140b47182c3c7e1e7d592d90f522"},{url:"assets/flowchart-elk-definition-5fe447d6-BGYFOoLf.js",revision:"4ac4b6237ccb59584f9c09a8941227f2"},{url:"assets/flowDb-4b19a42f-KzxpLu6d.js",revision:"6cd599d2899d661aa8189d6c46f2ce77"},{url:"assets/flowDiagram-5540d9b9-C_V8igyS.js",revision:"1c20b2d0d8377f4dc79ddcde9ff08d78"},{url:"assets/flowDiagram-v2-3b53844e-DaoUfQDb.js",revision:"5eb8faddc5f11b41adf7e8cffa2b28cb"},{url:"assets/ganttDiagram-9a3bba1f-6difHn2S.js",revision:"cb808d46d26ab025138b595dfb46c307"},{url:"assets/giscus-7BMGhbDA.js",revision:"dae7c2db562e417dc4bde3be5134780b"},{url:"assets/gitGraphDiagram-96e6b4ee-Edxb53oy.js",revision:"b268c397891057381cf62db8ab2cfeab"},{url:"assets/graph-B-8uV5kz.js",revision:"86e861596f10f04ec500283a4d0f726e"},{url:"assets/greenhand.html-Meo9w_mD.js",revision:"55c9255dac348df999a0649277ea5ab8"},{url:"assets/Hall_of_Fame.html-CkGdQ4xO.js",revision:"9f0d03926478e39cb60062bcafaac3e5"},{url:"assets/highlight.esm-B2Y_eiOr.js",revision:"62b5f024c0d2737c1370675313dc2efe"},{url:"assets/how_to.html-DaAeQn5d.js",revision:"0623d2857cb9574a1fa0c669ee9cecc4"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/csp.svg",revision:"ef221342ac908f9173286a7ddacac144"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/image/文字详情.svg",revision:"d36c4a5d4e94e3047fdc796af3685b3c"},{url:"assets/image/权限.svg",revision:"b450d25072f10e1ec58d8ee8cea0d0f7"},{url:"assets/image/查询.svg",revision:"428863e2d75481583360abf8b84555f2"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-fc10efb0-CBvb8brr.js",revision:"be96bb1ad5c6588f580195f573cbfe82"},{url:"assets/index.html-6hi9jNrw.js",revision:"8e4a6df6eac0b01f4b5b0932c7d97864"},{url:"assets/index.html-8n8L7ljR.js",revision:"a059bd7db5866350a6c30e958834a8f1"},{url:"assets/index.html-B73k1_9q.js",revision:"d407fae9045af757fb9eebd3f4aa1932"},{url:"assets/index.html-BaiSs7YX.js",revision:"beb7ee9417e99ff08d3840d0ce1297f2"},{url:"assets/index.html-Bu6sNBxj.js",revision:"c25feb994fb1e53985c2fd67bc14c73b"},{url:"assets/index.html-BzAnhYOb.js",revision:"79742c3096346803a2d4ac40edd0331b"},{url:"assets/index.html-BzgY9Lqj.js",revision:"485d1d6b79cd90fc195762193024c482"},{url:"assets/index.html-C_glmrSa.js",revision:"9929500544163cb2cb8ccf372353ee49"},{url:"assets/index.html-C0SiNYtk.js",revision:"a2bac40f5bb71972f622dcdff4ce0d42"},{url:"assets/index.html-C9ftru0D.js",revision:"6e8e1314784792fb1db8180f8af61cb5"},{url:"assets/index.html-CboFXf4q.js",revision:"7581bda2b09bc8163be12a49774b7240"},{url:"assets/index.html-CbuJ8UB9.js",revision:"630c9ee827e710d32357f916fc4d32f6"},{url:"assets/index.html-CC1BkAte.js",revision:"f45d291759d52340d0884993df145d07"},{url:"assets/index.html-Cdvitw1u.js",revision:"ec02dd79eb00a47963ae0b4ed4f4d645"},{url:"assets/index.html-CEBqulXw.js",revision:"01d9c3422ea30c307fcd64aa4f2eed2b"},{url:"assets/index.html-CfF5A9Q8.js",revision:"2039083a39a5c773d63685cb74a7f8e0"},{url:"assets/index.html-CI19djrG.js",revision:"40f4badf9cc41d4111b9baae0223c0ec"},{url:"assets/index.html-Cl9gSRYr.js",revision:"36980dedfb6ec3935a8f111ef05b0dd8"},{url:"assets/index.html-CR-fInMW.js",revision:"1e8ae3df291b16b496bf6767ef982f29"},{url:"assets/index.html-CTVRqLF4.js",revision:"fa4ee1dfa8fecfdc37427cc5c71a5d73"},{url:"assets/index.html-CuzgVh-y.js",revision:"0756b1c693cb4dfeed1ebe429957d8a1"},{url:"assets/index.html-CZyjZ-fT.js",revision:"b0580446a5916c5d78826cf8579c80d0"},{url:"assets/index.html-D1j8XafR.js",revision:"5b68b0e43a3eac6d2de1d6a256daec91"},{url:"assets/index.html-D2obo20h.js",revision:"b122fae9d847731469928f20ade174cd"},{url:"assets/index.html-D8Zxwisr.js",revision:"6ae72ebb14c302805ac93354e73527ea"},{url:"assets/index.html-Dc6-c_Gt.js",revision:"9c2219d6fd8070990b7c386cacb1c93b"},{url:"assets/index.html-DcwyZj6U.js",revision:"62009fba3c12d05dd566d57ef6b15a26"},{url:"assets/index.html-DJZQDSum.js",revision:"75e10d74cd4e6594ded38a2a427ad885"},{url:"assets/index.html-DO0EB1fj.js",revision:"6ae9e1b2a3a4bcbcfa1370170b571dd9"},{url:"assets/index.html-DU9omd1w.js",revision:"cb78cfdad4acf37b9e9c8494ee4dd18c"},{url:"assets/index.html-DXhRGokr.js",revision:"de378e7d421945403149666a5da7820a"},{url:"assets/index.html-DYvSLmCm.js",revision:"d1ce1bc42fa7e3e6c077acdeff30b737"},{url:"assets/index.html-iyCW5aMK.js",revision:"9c795436d1f824fac8ec8663a57030fd"},{url:"assets/index.html-P4i_uI2J.js",revision:"a3183a7ddb51375b16d7b36a85b2e01e"},{url:"assets/index.html-quEErVvH.js",revision:"a374f7b17f1a446457cdd44ea09c24c5"},{url:"assets/index.html-vCqyZwfn.js",revision:"46f291d874389403f5077f451dad2b20"},{url:"assets/index.html-vFWu1ePy.js",revision:"a1b2a163ad40c4cc76dc526d247a4260"},{url:"assets/index.html-wfUY2hAL.js",revision:"684f8c7cb32c43564d7bd382b3f3c925"},{url:"assets/infoDiagram-bcd20f53-i5IGnMgj.js",revision:"f866640488689e5b7246fe29b2b4a284"},{url:"assets/init-Gi6I4Gst.js",revision:"3ce28180466443e9b617d7b96e9f7b8f"},{url:"assets/IS5010.html-D4Mk3num.js",revision:"edc91cf892863db345e820cbee1143b4"},{url:"assets/IS5238.html-DNyrbuqi.js",revision:"e44216f4b81742b042abffa2b827ccb9"},{url:"assets/IS5311.html-Co3ErDqm.js",revision:"e1ce6b61bddb9cc9372c8a6aba149fdd"},{url:"assets/IS5312.html-CDoJf9Yq.js",revision:"0ed95f54a282213fa7f76466f29d3f69"},{url:"assets/IS5313.html-N8Hs0zwA.js",revision:"63331e88cbd0a332e8c8bfee73210ebf"},{url:"assets/IS5314.html-BjdRLTWq.js",revision:"9c876a60bdd904b6bfdf8dbe7d867482"},{url:"assets/IS5411.html-CkIr2g9t.js",revision:"4e38e86184544c605324174b21983a7b"},{url:"assets/IS5413.html-DvHSHFyj.js",revision:"1bafe77f5be71787e3b7c5d34d556d1f"},{url:"assets/IS5540.html-949PhTKA.js",revision:"d14c162ea0715eea4364a50856c82bef"},{url:"assets/IS5540.html-BLy8hquC.js",revision:"abab105faa218af162dd70131f681edc"},{url:"assets/IS5542.html-CRTPm3yx.js",revision:"8cc55f45a075917e62944680083c263b"},{url:"assets/IS5740.html-BtixJ4VQ.js",revision:"129e83c35ea5a1f2cd7262fbdd35378a"},{url:"assets/IS5743.html-BnAmt8si.js",revision:"c2954530288f5b37617a89a92ed91f4e"},{url:"assets/IS5940.html-7haIxkRE.js",revision:"21244fd392755c6c5025245fd1537006"},{url:"assets/IS6200.html-Cia06Zez.js",revision:"4665323d8e0904af02b2508020959e77"},{url:"assets/IS6322.html-YI21OC8p.js",revision:"3dde60b9a16f5d04f8ae625d793e8149"},{url:"assets/IS6335.html-DuZgQVfD.js",revision:"d5ffc3c22903b9b6cf5e1ece74159d81"},{url:"assets/IS6400.html-V1qsEv7_.js",revision:"5340683aaf1921148ec6453f1d15ef84"},{url:"assets/IS6421.html-DBw3YMBP.js",revision:"ebf5b05d804ea8c990d132db58fc98ce"},{url:"assets/IS6523.html-BeedjNTF.js",revision:"c2ff2d19e6a20a743b795d1411ae59ab"},{url:"assets/IS6620.html-DMBiNuaC.js",revision:"10ab180d8ae9124bcc47c4e02bbfce96"},{url:"assets/IS6640.html-CbMCofQt.js",revision:"6982f61d4f458ea57dab93b6429c657c"},{url:"assets/IS6912.html-CFZsKhX7.js",revision:"26442b87bae6ba13121555992685048b"},{url:"assets/IS6921.html-DIW0Qdo9.js",revision:"0307f6971f8cd66beaa31169ee13554a"},{url:"assets/IS6930.html-CavgMd0h.js",revision:"528b6bae2120af0bf5df433cdc282cc6"},{url:"assets/IS6940C.html-DB0Q9IB-.js",revision:"785672878abc22680ea9b18ab47adcbb"},{url:"assets/IS6941.html-BVsURU7i.js",revision:"5be608617e2998457273e58878ac7b6e"},{url:"assets/it_services.html-B8VlKJq4.js",revision:"275f2e5ff72fa0f1c9d16b46028f3c79"},{url:"assets/journeyDiagram-4fe6b3dc-CPydPLLP.js",revision:"ba56c59e51a76800a9091a8d72df072f"},{url:"assets/katex-rPiVaalG.js",revision:"5915c991bada2201323e84d17c8b9786"},{url:"assets/layout-IHfdA7Qa.js",revision:"e369160984e738e06726763d684cb0e5"},{url:"assets/league-gothic-Cg6O_jDX.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-CHd505-u.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/league-gothic-DDFhcAD7.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/line-ByBUfWhV.js",revision:"fb44f7d823a4bc4123ac0fdb7fa8862f"},{url:"assets/linear-C8__7t-u.js",revision:"d66ebf16df6defecbe1185a45b5df7a4"},{url:"assets/markdown.esm-BG2Xu2Hd.js",revision:"dfebc8121864151002204ef714f81472"},{url:"assets/mermaid.core-DQlwlbBj.js",revision:"b7341590cfe41870e786e594ac42e30a"},{url:"assets/mindmap-definition-f354de21-Yk9XN2oh.js",revision:"dbb37085514129a1e229fe799e34f59f"},{url:"assets/ordinal-Cboi1Yqb.js",revision:"a1d5f6bb98dd6182ddcb9cde64c37dab"},{url:"assets/path-CbwjOpE9.js",revision:"f86c0243cb45746453c6b4f7dbd9f34d"},{url:"assets/photoswipe.esm-SzV8tJDW.js",revision:"481d5342d9bb799640b63b15b698dcd4"},{url:"assets/pieDiagram-79897490-B-_sbPep.js",revision:"24c4f6671e5c7fb77968bf3c88c6f377"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/quadrantDiagram-62f64e94-CNfen8ZD.js",revision:"0483b9b87f2cf6e877fcc8dad7d99b6a"},{url:"assets/quickstart.html-DuPrNt1S.js",revision:"c77ca8dac23100a3ef45590a1d934eab"},{url:"assets/recurit.html-CZ3cJZp1.js",revision:"6528d3824e468106036e830fc8b40844"},{url:"assets/requirementDiagram-05bf5f74-BIYCg2N1.js",revision:"767206b0920ee6de55cbc4b5edf8628c"},{url:"assets/reveal.esm-ssIfNQ0c.js",revision:"f0a894a5d545cbebbc7612b589c47be0"},{url:"assets/sankeyDiagram-97764748-Bm8KNg2E.js",revision:"f2d4330da00d2dacfa09450f5459f40a"},{url:"assets/search.esm-DuBqnxcF.js",revision:"d39092c5e0d9959995df72297767dc3f"},{url:"assets/SearchResult-DERUqtr4.js",revision:"57e9d5dc69775b59b2dce5271423e1cc"},{url:"assets/sequenceDiagram-acc0e65c-GKFzn7n8.js",revision:"baf0269963680c3a4a0fc8b3d8cab616"},{url:"assets/source-sans-pro-italic-BRELHCij.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-CRcsOvyS.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-italic-Cv9m8hC5.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-regular-C8xAf4ue.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-regular-Du6DMqU5.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-DVYRbr7L.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-semibold-DJkFd4Pg.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibold-DwriEDPf.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-J0UDcmCq.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibolditalic-BHQoOnJ8.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/source-sans-pro-semibolditalic-DCTsihXp.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-DSkHRpvW.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/stateDiagram-0ff1cf1a-BzfuVuYU.js",revision:"14990c233127367f1ad4d176b5f1f114"},{url:"assets/stateDiagram-v2-9a9d610d-C7hlLfDO.js",revision:"6d8d2ec6b1e2b2ac90982c031becea55"},{url:"assets/style-GeWeuDRg.css",revision:"3b421ff08192b3e488965ee7e7979d84"},{url:"assets/styles-3ed67cfa-BZIt_BS0.js",revision:"321799e1ea0b5d1b400f2c387d6be978"},{url:"assets/styles-991ebdfc-D1qQoyCK.js",revision:"a2ef2b5fc086884f72584918c1ccf5e1"},{url:"assets/styles-d20c7d72-mdHw1Cjh.js",revision:"bafc26abedbff2d65262f26ca19e49dc"},{url:"assets/svgDrawCommon-5ccd53ef-DluyQHIr.js",revision:"c61f261d07115a79e03049fb6f6af5dd"},{url:"assets/Tableau10-B-NsZVaP.js",revision:"f2197f44250cada74e1e663d3abfba3e"},{url:"assets/time_arrangement.html-yOVpY94U.js",revision:"ae07a5c225a5a393c10717209f738466"},{url:"assets/timeline-definition-fea2a41d-lwFOkJMF.js",revision:"c0722be80b3a8d58e77d44e116fbf6f6"},{url:"assets/trans_mse_tutorial.html-BTX0Ynz0.js",revision:"339c553220a1c956377d82895356c6e9"},{url:"assets/useful_data.html-Cq9H7zRF.js",revision:"b35bc97baf563a032cb854048d163e6a"},{url:"assets/xychartDiagram-ab372869-B23ebILJ.js",revision:"39528875fa36ebf043c00f86de9c40dc"},{url:"assets/zoom.esm-Ctj_eavO.js",revision:"e6e8f9a61302e3ca14aa4dbeec242607"},{url:"bg1.svg",revision:"7896ae1dad5215c72a8f4e779db28e5f"},{url:"home.svg",revision:"4c402382516c2dec63d36202c30348c1"},{url:"mb.svg",revision:"ef50830d615567d9f32dec21a09eda13"},{url:"sb1.svg",revision:"9684f1de4c13ed9551c7f185c0acc53b"},{url:"sb1dark.svg",revision:"564405dc0e6bcc27191a1bd5f6437a13"},{url:"404.html",revision:"02c2cce2b65e89817ae706cbd2eaa18e"},{url:"article/index.html",revision:"58351999b58ef9ff258caa1219d3d4a2"},{url:"category/index.html",revision:"ae16bca7f3c7a1f525b2d931c256e829"},{url:"category/专业方向介绍/index.html",revision:"695351ae65c7db51e8c94c8e1e492f06"},{url:"category/课程相关/index.html",revision:"643ab85bf182b0397d9554aed64f7421"},{url:"elective/index.html",revision:"ca301a667bebcc482750a22d3011c842"},{url:"elective/IS5/index.html",revision:"b50453d57e9e97d335c1474b9903ead8"},{url:"elective/IS5/IS5314.html",revision:"4e29fe2e904dd0f3fd766656e6da1ab2"},{url:"elective/IS5/IS5542.html",revision:"3656c566411661f925d55e9fd7e33029"},{url:"elective/IS5/IS5743.html",revision:"1fb318c29ff79ec0c99886aef13bfdfb"},{url:"elective/IS5/IS5940.html",revision:"e06e6ea5ceea2b85b069496f35494f82"},{url:"elective/IS6/index.html",revision:"fffbcabb4f7913d43f4345ef3a5f6ded"},{url:"elective/IS6/IS6200.html",revision:"0daee0f1439fa2a20bfe67910bd7cb8e"},{url:"elective/IS6/IS6322.html",revision:"bfd58b5eb019ef0aaae9665370ca602d"},{url:"elective/IS6/IS6421.html",revision:"31072c7c58d12d789577d0846a144646"},{url:"elective/IS6/IS6620.html",revision:"598aa298c702aacff79f7109cc2b2c91"},{url:"elective/IS6/IS6640.html",revision:"96c4d4f4c126dc29ccbb3be258145d5c"},{url:"elective/IS6/IS6912.html",revision:"d4dd9624c352a8fca5e7251568c21bfa"},{url:"elective/IS6/IS6921.html",revision:"af03fdb747b9a0715ec06c5cb3a88b99"},{url:"elective/IS6/IS6930.html",revision:"3db9c0c2046e1ca211bda84d69d4cb52"},{url:"elective/IS6/IS6940C.html",revision:"353d63c139d0e7c8012119b0a565d7f3"},{url:"FIT/Core_Course/AC5511.html",revision:"138423b859957c95356c31789dc50797"},{url:"FIT/Core_Course/EF5042.html",revision:"d6c95cfebd92aba37323c77dbe4f5351"},{url:"FIT/Core_Course/index.html",revision:"fd18d5cb4dfb0bce440ce6097e9f5023"},{url:"FIT/Core_Course/IS5540.html",revision:"ccd6eb5f49e8120b0c178380b35247c3"},{url:"FIT/Core_Course/IS5740.html",revision:"2b8390b853882e8fda0c52c511e5e050"},{url:"FIT/Core_Course/IS6400.html",revision:"358e3d9d41edd6ca938d98ac25ad1e34"},{url:"FIT/Core_Course/IS6523.html",revision:"2c1f4bb2ae6dc5614517e31fc229bbb7"},{url:"FIT/FIT_Elective/EF5052.html",revision:"bb557c61ed0476713a885bc96d6a76ff"},{url:"FIT/FIT_Elective/index.html",revision:"9033310406ff96f648f31b08d59731fb"},{url:"FIT/FIT_Elective/IS5010.html",revision:"20a63b8467dbbde161b2e14fb6e05e9b"},{url:"FIT/FIT_Elective/IS5238.html",revision:"207876a735385da4c0244244bd78bb69"},{url:"FIT/FIT_Elective/IS6941.html",revision:"81ea8b0e736a61075b1f0278473440ed"},{url:"FIT/index.html",revision:"b64632c4a32dd598e1d5ddb48f6042e2"},{url:"General/about.html",revision:"ed2583a9497074d79dced027cc23e16a"},{url:"General/alumni_share.html",revision:"3f6860d009cded45a4434d5e062d2e61"},{url:"General/appreciate.html",revision:"88cce3f08f2c882c02120af4df395727"},{url:"General/changedata.html",revision:"9f405e5436f51d9a51b0f8535c2c8d05"},{url:"General/greenhand.html",revision:"0cfbc045ca1e94b85201bf67ae677700"},{url:"General/Hall_of_Fame.html",revision:"afc6ea3442dc4fce895544ce86e6d317"},{url:"General/index.html",revision:"b601adfd54e8b2d4ed5cdd2f7ca1306a"},{url:"General/quickstart.html",revision:"f772625a7f7ddf34f809024383e9c132"},{url:"General/recurit.html",revision:"b25808e5e8efde34ddc76a57a92e121b"},{url:"index.html",revision:"e6839cc2848778d053cda3df094a9494"},{url:"MIS/Core_Course/index.html",revision:"45f020166c0ef6eb2b2ce9c0ea740dee"},{url:"MIS/Core_Course/IS5311.html",revision:"706861cbf87a21b07fd9d3d5be82ab92"},{url:"MIS/Core_Course/IS5312.html",revision:"dbdc7933c226cd498c79a3f5e9f3945f"},{url:"MIS/Core_Course/IS5313.html",revision:"b9c53d60334348ebe30119c765ae4ede"},{url:"MIS/Core_Course/IS5411.html",revision:"ea99acdfd6d929f13dfa2b29b5eca599"},{url:"MIS/Core_Course/IS5413.html",revision:"209c60063053f4e8858931f4b402db95"},{url:"MIS/Core_Course/IS5540.html",revision:"06f182144e05523f3bafcff45a32a22b"},{url:"MIS/index.html",revision:"b47ad6f88c4b02b95f3be50d43ed1b7f"},{url:"MIS/MIS_Elective/index.html",revision:"b29d46088595c7bb81f8fc5e4821f09d"},{url:"MIS/MIS_Elective/IS6335.html",revision:"136a694e88bd698965ae0e484d55c956"},{url:"star/index.html",revision:"596997cd7db7e6930debdf188623b0ea"},{url:"tag/fit必修/index.html",revision:"fdf1316875f366f5bf4470f4d62253a5"},{url:"tag/fit计划内选修/index.html",revision:"71e38c4bf19373d0c86cb49faddc6a9f"},{url:"tag/index.html",revision:"1a95a67e783159b5e173f61dae23d640"},{url:"tag/mis必修/index.html",revision:"9e4595815f460f19b412ade27e241fd0"},{url:"tag/mis计划内选修/index.html",revision:"9865a54b5cb681dd612e4476c4244d22"},{url:"tag/sema/index.html",revision:"deefb6ee22ececc815ae129666e4f859"},{url:"tag/semasemb/index.html",revision:"5b5381ffac8edbadb6a8cb91fec12510"},{url:"tag/semb/index.html",revision:"c3241784c3d8ea9c4864748aab58c3e0"},{url:"tag/st课程/index.html",revision:"c092fe348392947951a0424a57f3863b"},{url:"tag/unknown/index.html",revision:"a7233842c57ed5059b0d46f76ec96f98"},{url:"tag/公共选修课程/index.html",revision:"1c61d222bc9ceeb28a816ed8f4ff061d"},{url:"tag/技术支持/index.html",revision:"b7a3b9f68570a6feb47323321eff16ac"},{url:"tag/网选/index.html",revision:"0a003cc0f31a6e1eaff15b293513497d"},{url:"tag/论文课程/index.html",revision:"bcfd02fcd0297a12eb43f378c01e32e9"},{url:"tag/资源/index.html",revision:"a15b46c5b5703564f856f476662887f6"},{url:"tag/选课/index.html",revision:"d7ea76005349a694adf28cac6b51cafa"},{url:"tag/非网选/index.html",revision:"df9fd3c27dcaf59e87d2049db6196cf2"},{url:"Tech/Canvas.html",revision:"2dbb09fb9523c376a4448dc1da6a5798"},{url:"Tech/CityU_Portal.html",revision:"964d77ac4516de5367c23e6480e4b4c6"},{url:"Tech/index.html",revision:"2782f3d7d65d3b569f8926b5c95be679"},{url:"Tech/it_services.html",revision:"a402b33929b278558eb0233ef9dade64"},{url:"timeline/index.html",revision:"6a03db87bb4c88a660901d4a13327292"},{url:"Useful/CourseEnroll/extension.html",revision:"897823e2088c7d40c79e1b9733f3010a"},{url:"Useful/CourseEnroll/how_to.html",revision:"4af1ebdae70be71615ffc3fa31781328"},{url:"Useful/CourseEnroll/index.html",revision:"1ba3d32aa730dd3c07b0ca2e1fba3f1e"},{url:"Useful/CourseEnroll/time_arrangement.html",revision:"ac603ecee9955b2a61187717f0ed4162"},{url:"Useful/CourseEnroll/useful_data.html",revision:"c81e6e0fbc00b93b60f981e0b82d3fdf"},{url:"Useful/index.html",revision:"d0e360f8c0957fd47aaf06ab20d90d80"},{url:"Useful/Learning/BIS_resource.html",revision:"56973a3acceba5486bf562f6b80015f9"},{url:"Useful/Learning/index.html",revision:"a2833611cff4c93433405694b2d76d2e"},{url:"Useful/Learning/trans_mse_tutorial.html",revision:"8fe7ac46817f2ac977fc9b88ac19d775"}],{}),e.cleanupOutdatedCaches()}));
