if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const f=e=>a(e,d),l={module:{uri:d},exports:c,require:f};s[d]=Promise.all(i.map((e=>l[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-dbb64b4e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html--imleDtx.js",revision:"a698dc3287aead18934f3959ba9b8b3d"},{url:"assets/about.html-B_Ua6ZNl.js",revision:"1a5eeaf5188a2dbfd14444b7350b51f2"},{url:"assets/AC5511.html-Dmu5kjBd.js",revision:"3eb0dbde65da07e08cae69dd3e013c98"},{url:"assets/alumni_share.html-CT31E6mX.js",revision:"2b22840876f41c518e4c0f89624c0c40"},{url:"assets/app-Bm0l-rgy.js",revision:"a14869485eead6ebe85811b9f1358a9d"},{url:"assets/appreciate.html-Q-pFCH-q.js",revision:"8e1cd825c491248e7104da73a5db7a7d"},{url:"assets/arc-ByxMg3He.js",revision:"0088b7d32fc7393989448389f04f99e1"},{url:"assets/array-BKyUJesY.js",revision:"17dcebeaf673b09a1ca5da014d20022f"},{url:"assets/BIS_resource.html-BfA2q6zV.js",revision:"172ec9317c1eb3a95210a8e13b36c66c"},{url:"assets/blockDiagram-91b80b7a-BeHg_Csk.js",revision:"1803551963106d8ddf30a45a50cabe96"},{url:"assets/c4Diagram-b2a90758-BnmdO_rT.js",revision:"bfeb49b127bc95e661d6c72c5a392e5c"},{url:"assets/Canvas.html-DrQ-PM1v.js",revision:"376efda3daf548d0976d0c1a8d672a1f"},{url:"assets/changedata.html-CBMmKNH-.js",revision:"3fd2211d165490a57fa960cafae5be7e"},{url:"assets/channel-D0mnzhab.js",revision:"0d5a547b14c62aef2fdb15e621663659"},{url:"assets/CityU_Portal.html-C3prPpAP.js",revision:"7f13a78040abc2977ec3ec5b0204c85f"},{url:"assets/classDiagram-30eddba6-3ps_blpF.js",revision:"10b0c1add126260d273f3fb473f58d9d"},{url:"assets/classDiagram-v2-f2df5561-BRRQ4Ik-.js",revision:"fb1138b46d4de8981a93090be7833e99"},{url:"assets/clone-C7p_dVVs.js",revision:"f4833aa73a79f46b4d576a7864605e99"},{url:"assets/createText-6b48ae7d-CWV-pv0o.js",revision:"418568881b73a3cdf5389bc6e8d51a2a"},{url:"assets/edges-d32062c0-BFkZxRpi.js",revision:"5e79adb73131bc968698a82ee56accc9"},{url:"assets/EF5042.html-BapxDsqf.js",revision:"e897837d00def4fa860c93b92ffd23db"},{url:"assets/EF5052.html-DNvYMDGD.js",revision:"a14966009075cbb93f76bc88ac00490d"},{url:"assets/erDiagram-47591fe2-im8dyY8p.js",revision:"aa7f1405aec6ca3433ceae31acef91f0"},{url:"assets/extension.html-Cv1DXkq3.js",revision:"b4a22f98efc3e96f0fd1ea03f82782bc"},{url:"assets/flowchart-elk-definition-5fe447d6-9-N_ntti.js",revision:"a992d5f22bf8b0a3834996b3f69f92ed"},{url:"assets/flowDb-4b19a42f-CxGHKryh.js",revision:"7521e562652789accbecf95d6d582b23"},{url:"assets/flowDiagram-5540d9b9-BfzUepHl.js",revision:"19a613b82cb06650b0a357ca61ef96fe"},{url:"assets/flowDiagram-v2-3b53844e-B-Jk_MK_.js",revision:"5eebf233357da5bb7cb57d62926084b7"},{url:"assets/ganttDiagram-9a3bba1f-D9_buerA.js",revision:"35b9496c363cd1a61237d0cc4ad74613"},{url:"assets/giscus-7BMGhbDA.js",revision:"dae7c2db562e417dc4bde3be5134780b"},{url:"assets/gitGraphDiagram-96e6b4ee-BpFTTx64.js",revision:"00fd9a4bfe2b63cba86a9942854070b9"},{url:"assets/graph-Dfd1xALr.js",revision:"d87ee4460a8b1eccc241225917eb5949"},{url:"assets/greenhand.html-CyXSioPv.js",revision:"3d7ebabc5f741adbb1cbd9725b074606"},{url:"assets/Hall_of_Fame.html-CyqfB5Dc.js",revision:"72ae35877c314aa548817079bb1d74f4"},{url:"assets/highlight.esm-B2Y_eiOr.js",revision:"62b5f024c0d2737c1370675313dc2efe"},{url:"assets/how_to.html-CIAezqUf.js",revision:"7b62d12db9c7101812d87123a4fcffdf"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/csp.svg",revision:"ef221342ac908f9173286a7ddacac144"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/image/文字详情.svg",revision:"d36c4a5d4e94e3047fdc796af3685b3c"},{url:"assets/image/权限.svg",revision:"b450d25072f10e1ec58d8ee8cea0d0f7"},{url:"assets/image/查询.svg",revision:"428863e2d75481583360abf8b84555f2"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-fc10efb0-C7b1gEgj.js",revision:"a03ed7860f30359a12a1e343aaf58830"},{url:"assets/index.html-_PzOltdM.js",revision:"0dd54e120228b000a45a36a0324ac6c4"},{url:"assets/index.html-1w0zgOEz.js",revision:"8d43e5fdcdf657681c5645755a0c3ac0"},{url:"assets/index.html-B15gyW8D.js",revision:"3ae623ea46c005c6008f4013d80ec9bd"},{url:"assets/index.html-BBqbCPtO.js",revision:"a0c029ca3c2fd16d063fd582c6e985ea"},{url:"assets/index.html-Bbvhy2wD.js",revision:"4436cacf7f79e6a59d0d1e8c9650ca35"},{url:"assets/index.html-BcFLMDZ0.js",revision:"2a339d90d09a4c468752efda0ed72d5d"},{url:"assets/index.html-BEj1XbxZ.js",revision:"259b90f44425b054379c1eac6f07cb19"},{url:"assets/index.html-BgRnfbbt.js",revision:"cce3485a10aa07474664ab92c6d3ab17"},{url:"assets/index.html-BkuXVvTp.js",revision:"9b7732f8fc73d03100c2746487926a2b"},{url:"assets/index.html-BlP4Nscy.js",revision:"f44eba0fb263d8660a98502fc4a14c9f"},{url:"assets/index.html-BNNdqXP_.js",revision:"6d64b0244b9d6557e993ac7f601ede1f"},{url:"assets/index.html-BoiYvYKs.js",revision:"637a5b686014d9115ba3f52ef0869875"},{url:"assets/index.html-BqWF1nU-.js",revision:"ae5e4b8f52c01cfc2ec564b6725d6837"},{url:"assets/index.html-BVCQI5z1.js",revision:"e1882fe9c70dd80b0965c960da76104a"},{url:"assets/index.html-BvftAnXH.js",revision:"35a4dc15a96fe3865e25a8c22cf900fc"},{url:"assets/index.html-C-pinQ_D.js",revision:"b02d01aeab222314827f09785a974514"},{url:"assets/index.html-C-S87_IF.js",revision:"e17f31a1ff3cb2aaefce5bc9fced6c06"},{url:"assets/index.html-C3dYteV_.js",revision:"fb4735ad804a4e7672c13ed668a51f1e"},{url:"assets/index.html-C9cbF0Ke.js",revision:"b31ad40ee98cd006e4edb4dd645c46ac"},{url:"assets/index.html-Cggm5bSN.js",revision:"c8853398b48457a03f34f77ac1a4b6cf"},{url:"assets/index.html-ChH0mR23.js",revision:"7728c133c49cca5cf0d88ad5c5bdc96e"},{url:"assets/index.html-CKJoo3lO.js",revision:"9ea413aea13a642f4c47bba6a18e9125"},{url:"assets/index.html-CKvbayFR.js",revision:"a9f40ca28938db8ca304fd1d5409a505"},{url:"assets/index.html-Cl8UiH8C.js",revision:"45c0bd8c040093c4f0084987b1b9b699"},{url:"assets/index.html-COInpIR9.js",revision:"aad74c181193e75bbe805871ae801b86"},{url:"assets/index.html-CYkKR1Xl.js",revision:"411812fdf4d00bc98fecba17a99c4312"},{url:"assets/index.html-CZjYZJr-.js",revision:"95b3c49e46d20a69b747c45345436c18"},{url:"assets/index.html-D-9CF3s9.js",revision:"821fae64f169e2a9f25db7003ffd1a60"},{url:"assets/index.html-D0gGwrJA.js",revision:"6d2fd532855843fad0b4c1edb0947d18"},{url:"assets/index.html-D8lR5Jjj.js",revision:"1edaff360fecb8d310c97b85cc4c2968"},{url:"assets/index.html-DcUxa70b.js",revision:"4f81f04103ea72c9de94da960ff75478"},{url:"assets/index.html-DEHcuqyH.js",revision:"19a50ed5572a7a7ab3a19dceb54a77e6"},{url:"assets/index.html-DJJSwvwe.js",revision:"fdbb53fc810665aa6f6074dd2fb16856"},{url:"assets/index.html-DRlMhStH.js",revision:"6932434fa6fc8a8b6f3c96e3c3b9dfe3"},{url:"assets/index.html-DUZ3RE3M.js",revision:"244c1263b134688bfbfdef8a4382c04a"},{url:"assets/index.html-DzN7_l8T.js",revision:"08b3e51e4bff9073ca2646abc464ce67"},{url:"assets/index.html-M0hh69Bo.js",revision:"a0a6c00478f4e87584cc55623b4cc510"},{url:"assets/index.html-R74JJxbR.js",revision:"447dcf771afb5a075a4694648c8687ce"},{url:"assets/infoDiagram-bcd20f53-BsAlU-tW.js",revision:"64c2eda47fcf741b19ba299906ee7d59"},{url:"assets/init-Gi6I4Gst.js",revision:"3ce28180466443e9b617d7b96e9f7b8f"},{url:"assets/IS5010.html-DvA0JrCK.js",revision:"d9e2e326beb96f75687f97fbd1708113"},{url:"assets/IS5238.html-z-h1Ars0.js",revision:"ba12f936e2877ff5e09f4588fd761919"},{url:"assets/IS5311.html-DkPEvMSn.js",revision:"8f1e00d97124b7acf0f05ac1e87a7dbc"},{url:"assets/IS5312.html-o_WpJqSH.js",revision:"72e213acbf71170938683689a2c2bf65"},{url:"assets/IS5313.html-PLjvGU-I.js",revision:"7cbe772f5df74cf1725e79e8b24bf6a1"},{url:"assets/IS5314.html-Cfsm0PNx.js",revision:"4e82bc833663762b3816b337cef20a3e"},{url:"assets/IS5411.html-Cj1LPefS.js",revision:"1b36b7914ff9022b520afaf8666be4f5"},{url:"assets/IS5413.html-CvZcCgQV.js",revision:"400a768676cf81176194fbfdfd84548d"},{url:"assets/IS5540.html-CkGhwFJE.js",revision:"91053248084ce20b1ada2b7ef1c8bf1b"},{url:"assets/IS5540.html-CvJNsMpi.js",revision:"42230f20a78024afae80b7f0ad8a5502"},{url:"assets/IS5542.html-BK8i132w.js",revision:"0e1c0d5d8c02082100134748abc0b202"},{url:"assets/IS5740.html-DY6jv7z2.js",revision:"722004e717b3f6f8987569f79ad1cd9f"},{url:"assets/IS5743.html-Cni-jpc7.js",revision:"f8e76c52bf7a67ecf21e73ba2b2fe061"},{url:"assets/IS5940.html-DOkGVb57.js",revision:"dc3fdb280676a5f51d5c9f6da4ad075f"},{url:"assets/IS6200.html-D99dTHBa.js",revision:"262c083f756dc2d62867a0bc10ac2490"},{url:"assets/IS6322.html-CxlzuFc_.js",revision:"c21bf01df50bd9da163f617400df5b1a"},{url:"assets/IS6335.html-CfqYmuj-.js",revision:"833738159f1c69c2c1dc23c4ddcf95bb"},{url:"assets/IS6400.html-CNoGg-sg.js",revision:"4f785848d5b826c63dace7ea3b7057e4"},{url:"assets/IS6421.html-CcOo016U.js",revision:"744259ea9e2741ff7c4a3f048245b6d2"},{url:"assets/IS6523.html-HNZY6d0_.js",revision:"2f94c6d7ba7fb92c65eebdd350cd5177"},{url:"assets/IS6620.html-BRhM-_Uf.js",revision:"e1fd6c22121d3c4a7dd02e6c392a2a72"},{url:"assets/IS6640.html-CUcb-3mC.js",revision:"bf31c040c8a63e0f8677e81ea9976283"},{url:"assets/IS6912.html-CYUKteh6.js",revision:"e024978beefabcbc5fbf3376fa827a24"},{url:"assets/IS6921.html-BHEqqku7.js",revision:"484e97b6019593ee61aeb0620d9868be"},{url:"assets/IS6930.html-w3INJVy2.js",revision:"bbf2fee97fa477627d8bb838f258aa22"},{url:"assets/IS6940C.html-BUdjWrYV.js",revision:"6bc88a82f2905a1f631c78dc10324033"},{url:"assets/IS6941.html-Bmpfo6F1.js",revision:"3a49748ceeca9f7b7a147b70b42f1d83"},{url:"assets/it_services.html-DNabBbdw.js",revision:"66683fbdcf5bbcfad7ecba96cc072ed5"},{url:"assets/journeyDiagram-4fe6b3dc-D2pcgs1O.js",revision:"a62da14afebb8c12129e325107f575eb"},{url:"assets/katex-rPiVaalG.js",revision:"5915c991bada2201323e84d17c8b9786"},{url:"assets/layout-Do0mmK3S.js",revision:"68e9d3ddf366f57dac165af89309a9ce"},{url:"assets/league-gothic-Cg6O_jDX.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-CHd505-u.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/league-gothic-DDFhcAD7.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/line-DByQCilj.js",revision:"4d18fcdc657da530b215ce6c3bd6a467"},{url:"assets/linear-XVRb8i1D.js",revision:"62b06b15c2f2f883c60045fc25019b24"},{url:"assets/markdown.esm-BG2Xu2Hd.js",revision:"dfebc8121864151002204ef714f81472"},{url:"assets/mermaid.core-ClS7Oi_P.js",revision:"6919c848b797ee12dd1e634575bb9d46"},{url:"assets/mindmap-definition-f354de21-uZcSr1NG.js",revision:"24b7e556b23f839f704a77305d7cb6f2"},{url:"assets/ordinal-Cboi1Yqb.js",revision:"a1d5f6bb98dd6182ddcb9cde64c37dab"},{url:"assets/path-CbwjOpE9.js",revision:"f86c0243cb45746453c6b4f7dbd9f34d"},{url:"assets/photoswipe.esm-SzV8tJDW.js",revision:"481d5342d9bb799640b63b15b698dcd4"},{url:"assets/pieDiagram-79897490-PpaU_iaa.js",revision:"7a9587b04e08c0180b803cc549212b48"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/quadrantDiagram-62f64e94-C5pQjcPu.js",revision:"53d46caac149e1d09b66a93267199c55"},{url:"assets/quickstart.html-DL3eG-li.js",revision:"8fc81f0f68864915d535cf482a86572b"},{url:"assets/recurit.html-B-J2JI6v.js",revision:"cabd600603abd981f389d9ec8e68cc4b"},{url:"assets/requirementDiagram-05bf5f74-CkakV7wQ.js",revision:"7c4b3d344c3c88a68ff26b19a2b6e006"},{url:"assets/reveal.esm-ssIfNQ0c.js",revision:"f0a894a5d545cbebbc7612b589c47be0"},{url:"assets/sankeyDiagram-97764748-Bh1wVJK6.js",revision:"aa712a47964f4deb61368b5b3a5ac782"},{url:"assets/search.esm-DuBqnxcF.js",revision:"d39092c5e0d9959995df72297767dc3f"},{url:"assets/SearchResult-H_4pj4IP.js",revision:"c8972701bc4c6163b7933c49406b6262"},{url:"assets/sequenceDiagram-acc0e65c-Dgd53zmL.js",revision:"5aaffddbf0f7e948bbeccb381f3a23ac"},{url:"assets/source-sans-pro-italic-BRELHCij.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-CRcsOvyS.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-italic-Cv9m8hC5.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-regular-C8xAf4ue.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-regular-Du6DMqU5.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-DVYRbr7L.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-semibold-DJkFd4Pg.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibold-DwriEDPf.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-J0UDcmCq.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibolditalic-BHQoOnJ8.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/source-sans-pro-semibolditalic-DCTsihXp.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-DSkHRpvW.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/stateDiagram-0ff1cf1a-uF46KjfK.js",revision:"7c301581c5d1868000583558d9f17283"},{url:"assets/stateDiagram-v2-9a9d610d-CZF7bKRO.js",revision:"f5667501e0444481566e08ce00df4867"},{url:"assets/style-GeWeuDRg.css",revision:"3b421ff08192b3e488965ee7e7979d84"},{url:"assets/styles-3ed67cfa-BpYPP7rY.js",revision:"b7f74940d66391ed3b74e71f42d935e0"},{url:"assets/styles-991ebdfc-DBX7lBwG.js",revision:"52e4cf0d655f0483282ddcb74a2022d4"},{url:"assets/styles-d20c7d72-D3GKJaQp.js",revision:"d950d59623303a04b93dc6659ba1d6a0"},{url:"assets/svgDrawCommon-5ccd53ef-ezlCxvsa.js",revision:"4d3c5c547b2a7c966c59b01ce630feea"},{url:"assets/Tableau10-B-NsZVaP.js",revision:"f2197f44250cada74e1e663d3abfba3e"},{url:"assets/time_arrangement.html-DE6TmOIW.js",revision:"27dbc6a395179df0f2ddb4ab56d0d365"},{url:"assets/timeline-definition-fea2a41d-DpJzI-qp.js",revision:"dfe247379fb8777fdac124f3967d68e3"},{url:"assets/trans_mse_tutorial.html-CG1rTBrc.js",revision:"52587a55c720bfb2e98085835f986e21"},{url:"assets/useful_data.html-BHUQeQ_T.js",revision:"824b97d9c98cb2ba898b7b5cff89094a"},{url:"assets/xychartDiagram-ab372869-VFMcga0f.js",revision:"0ba300006daf3a68828155fd15b143e0"},{url:"assets/zoom.esm-Ctj_eavO.js",revision:"e6e8f9a61302e3ca14aa4dbeec242607"},{url:"bg1.svg",revision:"7896ae1dad5215c72a8f4e779db28e5f"},{url:"home.svg",revision:"4c402382516c2dec63d36202c30348c1"},{url:"mb.svg",revision:"ef50830d615567d9f32dec21a09eda13"},{url:"sb1.svg",revision:"9684f1de4c13ed9551c7f185c0acc53b"},{url:"sb1dark.svg",revision:"564405dc0e6bcc27191a1bd5f6437a13"},{url:"404.html",revision:"44a3554b79c47a2a1e88e9cb91fcd6cb"},{url:"article/index.html",revision:"95440350009aed10f31f921ba587c3e9"},{url:"category/index.html",revision:"5aefb026846913ec00ba9c2bafc91ba8"},{url:"category/专业方向介绍/index.html",revision:"15f08fc4643cd5732ce2acbb841ea679"},{url:"category/课程相关/index.html",revision:"e47886ff35e14782734229e778145466"},{url:"elective/index.html",revision:"4be23e8237535fbc39e333b4123c4d57"},{url:"elective/IS5/index.html",revision:"14619ef69c968283b1fc544b4e9e19f5"},{url:"elective/IS5/IS5314.html",revision:"3a3ac90a9118475491c66319c5aedbf9"},{url:"elective/IS5/IS5542.html",revision:"5240e51f48d5750dbff4b1b7008cd853"},{url:"elective/IS5/IS5743.html",revision:"54a6f49f824d2162b0f70cfd2bb0cf4d"},{url:"elective/IS5/IS5940.html",revision:"06961a51eb6df501782de1df0dfba893"},{url:"elective/IS6/index.html",revision:"4bbeaaeaae483021541f358398baf1d7"},{url:"elective/IS6/IS6200.html",revision:"c63ea8537fbaa782f4f5706939f23225"},{url:"elective/IS6/IS6322.html",revision:"0e70edb24eba4d81b492e5c4cb5b576e"},{url:"elective/IS6/IS6421.html",revision:"a4c744c49e0949125af166ae853965cc"},{url:"elective/IS6/IS6620.html",revision:"1b25becac1403dd1d9f4de8974c54381"},{url:"elective/IS6/IS6640.html",revision:"192022bb1b3586b10910cdb4669856dd"},{url:"elective/IS6/IS6912.html",revision:"2b9a3079f1acebf1f21931fe3afaa78f"},{url:"elective/IS6/IS6921.html",revision:"5020707492484d5820aea4a89f24487d"},{url:"elective/IS6/IS6930.html",revision:"1ed1f2d69cb18b695b2e122fc848e12f"},{url:"elective/IS6/IS6940C.html",revision:"31c2686e3a38d98d1f4a98e8d01f2536"},{url:"FIT/Core_Course/AC5511.html",revision:"46dfdbfcee4ab7781aab657f09f4529a"},{url:"FIT/Core_Course/EF5042.html",revision:"e025a00228860c64478f539e3cea6755"},{url:"FIT/Core_Course/index.html",revision:"f14c0854f3834df717a105d888abcfda"},{url:"FIT/Core_Course/IS5540.html",revision:"1517b3510e37a1447abe44ce430a9545"},{url:"FIT/Core_Course/IS5740.html",revision:"4264c0ca7e70f53265acb99cddc1c2f3"},{url:"FIT/Core_Course/IS6400.html",revision:"f3b34e6437489eba6279282d0822ea2b"},{url:"FIT/Core_Course/IS6523.html",revision:"954ef997b87f6d1706975bb9edfc0374"},{url:"FIT/FIT_Elective/EF5052.html",revision:"f21d34f37cdfc8db965aadd14e3a9081"},{url:"FIT/FIT_Elective/index.html",revision:"b4e6ecdc9eb28c15753cf3dfd44767ef"},{url:"FIT/FIT_Elective/IS5010.html",revision:"1d1936c82693dd986849b176317617f4"},{url:"FIT/FIT_Elective/IS5238.html",revision:"70c9fd00622d04d038b0de303f592233"},{url:"FIT/FIT_Elective/IS6941.html",revision:"aee672b7c56951ee267dafb0465fb439"},{url:"FIT/index.html",revision:"7f025496d2fa64fa53ce6ca960b1f81e"},{url:"General/about.html",revision:"f1864402d736540098ce3315987a60ad"},{url:"General/alumni_share.html",revision:"94e4e42f44a31abbf7ab24372afd1993"},{url:"General/appreciate.html",revision:"a7906e1ef850d68198d50c71d3d7eaee"},{url:"General/changedata.html",revision:"ae87b48c2444ffa73d6db7af5cbff33f"},{url:"General/greenhand.html",revision:"43809db66eb376991b55b7f217447d7d"},{url:"General/Hall_of_Fame.html",revision:"480aea1f4f516e528d65d4d69564a9e9"},{url:"General/index.html",revision:"68c4acb11b5ea277c52859b37e8ece9d"},{url:"General/quickstart.html",revision:"2dc519a0f2b65e081664a74469a684e9"},{url:"General/recurit.html",revision:"fa78978cd975a061cdabdfd7c2fe1bcb"},{url:"index.html",revision:"218922d9065b7e543c7beacf38555217"},{url:"MIS/Core_Course/index.html",revision:"f04f2a290e031c35f0e85dc7cd30fb2a"},{url:"MIS/Core_Course/IS5311.html",revision:"79f30f4151a39d055cef692ec452bbbc"},{url:"MIS/Core_Course/IS5312.html",revision:"d85cfffaa1a6b77859fcff603db19dbc"},{url:"MIS/Core_Course/IS5313.html",revision:"b182dbbb38e0d4015bfd04cd6c507785"},{url:"MIS/Core_Course/IS5411.html",revision:"50710e26ece3239f741e3035618a3d1f"},{url:"MIS/Core_Course/IS5413.html",revision:"1eea7a4358edaf8c9e0d9977bc5ae41d"},{url:"MIS/Core_Course/IS5540.html",revision:"e76d956ab385af2e699fd96b47c20265"},{url:"MIS/index.html",revision:"09f1aaabc341227a6c9e1502fc811501"},{url:"MIS/MIS_Elective/index.html",revision:"b9d94818c540319f12711c397f68dd60"},{url:"MIS/MIS_Elective/IS6335.html",revision:"ba577f68f08b3e625aa9ed05c9e3b895"},{url:"star/index.html",revision:"3703bdbb7b940e48e7c8e16225c7fd6a"},{url:"tag/fit必修/index.html",revision:"8a9cb83e6c9a61e148c48d6543212390"},{url:"tag/fit计划内选修/index.html",revision:"0cf396a4713573737810bc02238b27d2"},{url:"tag/index.html",revision:"cc64ca71e9c2b8543509dd330f4b3485"},{url:"tag/mis必修/index.html",revision:"e45deb61e00907fb64e340ad05e40f45"},{url:"tag/mis计划内选修/index.html",revision:"a9c24dfa63ee4a86c82c22fabeffc005"},{url:"tag/sema/index.html",revision:"4df11b7b8cd3df7eca312cf1cf574a77"},{url:"tag/semasemb/index.html",revision:"db58f77656397cda4966ff9d69a82302"},{url:"tag/semb/index.html",revision:"2c8a2606adad67dde785949a64021af3"},{url:"tag/st课程/index.html",revision:"84876f1d604b91a4dcbc533af6348ffc"},{url:"tag/unknown/index.html",revision:"829f9f5b35279eb2c56a7b79fe2d1c7f"},{url:"tag/公共选修课程/index.html",revision:"d6681da99d9a0f2f81b3dd554fe9d688"},{url:"tag/技术支持/index.html",revision:"d32cec9c7f5da9c67086d12cac4ed95d"},{url:"tag/网选/index.html",revision:"30772b41add0d4cd349ada71a636527b"},{url:"tag/论文课程/index.html",revision:"4b0a5ff3cb7485d9954fa7029e9108c4"},{url:"tag/资源/index.html",revision:"1c18859f5b935ab859dbaea4d82ece07"},{url:"tag/选课/index.html",revision:"c8df9311cbf33219580ac2dbceedb97a"},{url:"tag/非网选/index.html",revision:"f297ef4dc16c16f1824f91573fbef6bb"},{url:"Tech/Canvas.html",revision:"f1e9441b2007efb6065fde86700fc472"},{url:"Tech/CityU_Portal.html",revision:"7c8e59a78a80635483abad3e06d2565f"},{url:"Tech/index.html",revision:"f11b5ae1d46ae48cb77837992d8b7cae"},{url:"Tech/it_services.html",revision:"2a56f028c3406154bfdaef7886b8bd43"},{url:"timeline/index.html",revision:"2f6aec077ca9f49df80b49d7c289f84d"},{url:"Useful/CourseEnroll/extension.html",revision:"db45bc0777c6ef3a65ea1efedac5c356"},{url:"Useful/CourseEnroll/how_to.html",revision:"d2b370c176c0d6cb1eb4ffaa95dcdf14"},{url:"Useful/CourseEnroll/index.html",revision:"d8ac4258b31a1262a08a7a5215a03100"},{url:"Useful/CourseEnroll/time_arrangement.html",revision:"3059ec95dcd4b4ac2df1233376a2b960"},{url:"Useful/CourseEnroll/useful_data.html",revision:"aa997932e2fd6e88a2f81802ff268f66"},{url:"Useful/index.html",revision:"c386cac27e45d07a7166612834a8ca73"},{url:"Useful/Learning/BIS_resource.html",revision:"442bb77859419f784ccb4255b772872f"},{url:"Useful/Learning/index.html",revision:"d204b35e6188863485d76875a4bb340c"},{url:"Useful/Learning/trans_mse_tutorial.html",revision:"5259de6d67a7f648f8cbe2b128d0b0a7"}],{}),e.cleanupOutdatedCaches()}));
