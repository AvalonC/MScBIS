if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const f=e=>a(e,c),l={module:{uri:c},exports:d,require:f};s[c]=Promise.all(i.map((e=>l[e]||f(e)))).then((e=>(r(...e),d)))}}define(["./workbox-b584cb72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-OYJljxzN.js",revision:"e914c588c4de75979fb4260bdde6906e"},{url:"assets/about.html-42LFoQqr.js",revision:"ae9ece6ce3a9614996a1ec398e98b126"},{url:"assets/AC5511.html-1Z_P7YeU.js",revision:"a762c731b47640807b578cd12022a90f"},{url:"assets/alumni_share.html-DYICYC1h.js",revision:"3ea2895481f1d7f2f703ab66be050c07"},{url:"assets/app-BhMO5Tk5.js",revision:"499e2285ced151e0aa2820ed0f1d7ee1"},{url:"assets/appreciate.html-BERLSoE9.js",revision:"e7fddb9043a8acff03a43325d5af5234"},{url:"assets/arc-BLZYjD2-.js",revision:"2049885bafcdc77e31262fe6e31f00cb"},{url:"assets/array-BKyUJesY.js",revision:"17dcebeaf673b09a1ca5da014d20022f"},{url:"assets/BIS_resource.html-BJ143T4v.js",revision:"b10efefa0526571c019acf074043b87c"},{url:"assets/blockDiagram-9f4a6865-DxoC-Nnu.js",revision:"cd524266f44c0d5ab4808d308f402f82"},{url:"assets/c4Diagram-ae766693-DS_OryU3.js",revision:"9b63513f2cb773cdde4ac15913e9bec8"},{url:"assets/Canvas.html-DrKFUrTX.js",revision:"05df025083259d92cf7d979fe3be76ce"},{url:"assets/changedata.html-TU29DuP4.js",revision:"45dc71401e6d12df757b6e9fb251472b"},{url:"assets/channel-CjUqTlEs.js",revision:"c6d1d97e5d84a4abf792c78023cbe544"},{url:"assets/CityU_Portal.html-C1T6HQX-.js",revision:"2d70500747727be0a0049ecef5f7ee8a"},{url:"assets/classDiagram-fb54d2a0-C8AK2jKi.js",revision:"10fcd2108f512a75cff60f343766a3c9"},{url:"assets/classDiagram-v2-a2b738ad-C6GMoa-q.js",revision:"add96961a50fa56de12cb909a82332c1"},{url:"assets/clone-BFRVzM1p.js",revision:"a81be56025ca357cdd7bb00e12e67e28"},{url:"assets/coding_greenhand.html-CzUIePmL.js",revision:"2b8627b4292aa5580fb98e929c53bd1e"},{url:"assets/createText-ca0c5216-CKkFaSVC.js",revision:"b606375c1e6bb71d84eb7b565c805d82"},{url:"assets/cscse_reco.html-BrULhe8F.js",revision:"027d1a798371480a2f40f5c9ec43d261"},{url:"assets/edges-066a5561-CHlJ2Jbh.js",revision:"643118a2e01862e058c0a7f29cc15484"},{url:"assets/EF5042.html-Bcmd3wCz.js",revision:"f32f65096a69f89495a05a13a9c78ed0"},{url:"assets/EF5052.html-D3-9Lm6I.js",revision:"c861c4625e2a349b08b67b53b7bddbc2"},{url:"assets/erDiagram-09d1c15f-DY5Q0W09.js",revision:"f458d161e400c61f6df9236560b04a9b"},{url:"assets/extension.html-CPhcH66Q.js",revision:"5bedb610b9637f45921c76f46b8edc37"},{url:"assets/flowchart-elk-definition-ae0efee6-DCR2Qxdn.js",revision:"11725b3473370efef6edecf70991abd3"},{url:"assets/flowDb-c1833063-smS_eAAt.js",revision:"0e2bca233d09b47277ddecd180aba0ce"},{url:"assets/flowDiagram-b222e15a-B4MRJ5a5.js",revision:"dfa3a7b52ebba5247b73c6cb9929b40b"},{url:"assets/flowDiagram-v2-13329dc7-Jd3Qd2et.js",revision:"9ad713f6d3f8bdb1baf908c985262ca4"},{url:"assets/ganttDiagram-b62c793e-D0Yb08qs.js",revision:"738d2625cc9ea311aef92492780f19c5"},{url:"assets/giscus-D-fkNSKD.js",revision:"9215a76234a985e12f7abb9d670bd6d1"},{url:"assets/gitGraphDiagram-942e62fe-CWMk_QQP.js",revision:"b4403373fe12ac0fe0fcb042c7b75c86"},{url:"assets/graph-DleTvsOa.js",revision:"bd155443d88299725a254263fe9ed84f"},{url:"assets/greenhand.html-C7pb0XOJ.js",revision:"60d77307be3f4a3d6db37ce438c3a0c0"},{url:"assets/Hall_of_Fame.html-DIFH932-.js",revision:"63196bb4866db91f6c839209033f18aa"},{url:"assets/highlight.esm-C34tS8ua.js",revision:"9f54844d940e046894f2d0fc42704cf6"},{url:"assets/how_to.html-D6JoMUcY.js",revision:"ca08e47ed0b2464fb3d809ef3ca6d17d"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/csp.svg",revision:"ef221342ac908f9173286a7ddacac144"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/image/文字详情.svg",revision:"d36c4a5d4e94e3047fdc796af3685b3c"},{url:"assets/image/权限.svg",revision:"b450d25072f10e1ec58d8ee8cea0d0f7"},{url:"assets/image/查询.svg",revision:"428863e2d75481583360abf8b84555f2"},{url:"assets/index-01f381cb-9i6v_AtD.js",revision:"c51a28e50907ac916a18f0571724f1af"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html--K_8-IN_.js",revision:"77d94372a6b8eac1c2df5d7e17d48363"},{url:"assets/index.html-5I2GrIP2.js",revision:"496ad1af4a7c89852fddcc65fc137de3"},{url:"assets/index.html-7uqABPuk.js",revision:"58dff828159f4c991ef6b1209233973b"},{url:"assets/index.html-ACE_Lt4_.js",revision:"37fb6c7f55f7da901e226221712c7671"},{url:"assets/index.html-B3ItYsTT.js",revision:"0968530ca5a0ae25f405921f86e71eef"},{url:"assets/index.html-B63Q1Z81.js",revision:"9877596bb0e17291ed764d19864e365c"},{url:"assets/index.html-BBU0l0b8.js",revision:"50427c0b756db3c64b343786a55b7056"},{url:"assets/index.html-BgfGCrqy.js",revision:"d11cdc679ccd13cd45ae6d50aa5fcd5b"},{url:"assets/index.html-BhXn4z7Q.js",revision:"d3dc60a338f5177e9c6d6b557b915965"},{url:"assets/index.html-BI-pyzZE.js",revision:"f5c863f2a0c8dddcf7a06eef702cca6a"},{url:"assets/index.html-BLQuoqBC.js",revision:"f072f50d39874fac54e589ac73d4f959"},{url:"assets/index.html-BmL5I-Ej.js",revision:"7d3a6e3a812572258b70e2436ceb1030"},{url:"assets/index.html-BOl2nzJ0.js",revision:"9817493b67a3442b7b7e9069cfde92cc"},{url:"assets/index.html-BqmlXURH.js",revision:"99aa9a6bb48cdf4884527742f2f0ffe2"},{url:"assets/index.html-BVe_iaJh.js",revision:"2b5fa1496e7fd79c3f120d23cf8b1daa"},{url:"assets/index.html-C7wT83BC.js",revision:"cc839301835105e6abc60b3b42fd8a9c"},{url:"assets/index.html-CDUcomWy.js",revision:"e1eb9deb7329a4a3f17b6fdf908587c3"},{url:"assets/index.html-CEVUynO-.js",revision:"7f342f684fd2f686569b51769544a36b"},{url:"assets/index.html-CTeUp0xS.js",revision:"73f78d8336b29902cc83d5c7176555fc"},{url:"assets/index.html-CtynWBHV.js",revision:"3ed65c3f7132b2c6b35ba3a146b029da"},{url:"assets/index.html-Cy6dhPMN.js",revision:"d8ff78f56e951af56e2cec90c5aa3600"},{url:"assets/index.html-D1iBF82u.js",revision:"de1c24832ecc31dc0e94c30f9fc82018"},{url:"assets/index.html-D7x0cCRp.js",revision:"3c3176bb5163ad94c58233f73f78be9f"},{url:"assets/index.html-D8dXqJU3.js",revision:"7d25e831ef99437fadf6501c92a26fa0"},{url:"assets/index.html-Db4iVVGS.js",revision:"062f8b68c7b7213940412bd56a657cc4"},{url:"assets/index.html-DdOLqyRp.js",revision:"220316bb7ef6babe7d30031b9ab53013"},{url:"assets/index.html-DElRTCRM.js",revision:"0b8d7a2001301d1a9f64c9745028a1fa"},{url:"assets/index.html-DGkrFz1L.js",revision:"963ef320bb1304c8b96dad7fdc6df522"},{url:"assets/index.html-DJVuhaS0.js",revision:"0f964d3998622508ec3f5aa6fd41cce4"},{url:"assets/index.html-DK7Ut6rH.js",revision:"58de7bd7abca5939779f5237727020c4"},{url:"assets/index.html-Dq8cwN6l.js",revision:"c65811a8b8cde34c3163bfb926ffa292"},{url:"assets/index.html-DqA5saAi.js",revision:"a63be47228fa70720d3bb885b009e3d4"},{url:"assets/index.html-DQHiGHgv.js",revision:"56eec1cfa7fd727bd8e13377d30fdbb3"},{url:"assets/index.html-DZbVfghd.js",revision:"67e80b856b796c21023a38292eb503b0"},{url:"assets/index.html-Hak01Pde.js",revision:"f4b51478c407e6b4813e07f706a6cbb9"},{url:"assets/index.html-kT_u2Ufw.js",revision:"8d1861ccfb9f5eb0619f14c2a9fe24bb"},{url:"assets/index.html-Rf3uLB2a.js",revision:"2cbdffe429d146d73227736f61dc4a7e"},{url:"assets/index.html-xaT_k2R8.js",revision:"744b118bc9b6a390be156ad718597b45"},{url:"assets/infoDiagram-94cd232f-BZs1wLB4.js",revision:"4d612947b9ce7c264d672616bab3bcbe"},{url:"assets/init-Gi6I4Gst.js",revision:"3ce28180466443e9b617d7b96e9f7b8f"},{url:"assets/IS5010.html-BB-T3jvS.js",revision:"96bb9b0881d7558e414f75915997e40d"},{url:"assets/IS5238.html-CF6jvfCg.js",revision:"31f58fcca031bc00aba4b19f98b0953b"},{url:"assets/IS5311.html-Dp3mgqYF.js",revision:"cbf288df7e87ec712b5445bd4b35dee4"},{url:"assets/IS5312.html-CVXA1_Ij.js",revision:"9161d1e51b5931422c72adb9c3f44998"},{url:"assets/IS5313.html-UlAl9RU4.js",revision:"1e2990caf69b483d7586f475ef42e221"},{url:"assets/IS5314.html-B3BaZxq8.js",revision:"37c7bde3b36a5077ebf29ddaa172278d"},{url:"assets/IS5411.html-BJtlJp44.js",revision:"9a3f04cd2c98de5b94995d80514ac077"},{url:"assets/IS5413.html-DTITT8Ug.js",revision:"cadecaba9d8ac79994f5ff30c72de427"},{url:"assets/IS5540.html-BMv4ecGV.js",revision:"6f16d0d2a644fb0c2d76723f5ee74fe5"},{url:"assets/IS5540.html-Q3bCb-Aj.js",revision:"97e5e09de79f4ec6b3219bc535d18bc8"},{url:"assets/IS5542.html-Cz5Eh08I.js",revision:"67cb6fe92e39569f66b4d0cde1b3f39c"},{url:"assets/IS5740.html-C2QKxXlz.js",revision:"6b7bf9487dc703acc597a721c663ee42"},{url:"assets/IS5743.html-B30fgJgh.js",revision:"73f4e9f4115e3c5bfbe5c8bb7c1e87e9"},{url:"assets/IS5940.html-BsNrRMzQ.js",revision:"27140b545a19c2441e44003ea21622f9"},{url:"assets/IS6200.html-BakmsSEY.js",revision:"075fd384bee4f92e45eaa2c8aaf1a0ab"},{url:"assets/IS6322.html-CDhe3HAt.js",revision:"5b2b37a12be6b3c67538ae851a0982a9"},{url:"assets/IS6335.html-CL-cHCT_.js",revision:"8bb66225078fd06acf07cb78c75cefa0"},{url:"assets/IS6400.html-NbcYvnGV.js",revision:"24797cea418f6a4f3b0c2235c27cfddf"},{url:"assets/IS6421.html-eAymG-u0.js",revision:"2890bd511011dc64bdd55d399e85d30e"},{url:"assets/IS6523.html-9zujaNO2.js",revision:"c9fd5317e38e65f45daeeb2d58f2c786"},{url:"assets/IS6620.html-VTJc9Gn-.js",revision:"05195df85b77b6f2109ea29bc99f68f0"},{url:"assets/IS6640.html-DuQieVx3.js",revision:"528f635302076727137f39991bf747cd"},{url:"assets/IS6912.html-C8VLKuEp.js",revision:"de87aae25114342a40d90823fbbf74b5"},{url:"assets/IS6921.html-BQa3i96o.js",revision:"72dce34031d2dd54223a05e3bc6e76cf"},{url:"assets/IS6930.html-CZ3sE0_5.js",revision:"8379d459fc3beb1d336f704443038d47"},{url:"assets/IS6940C.html-BYqO8kO_.js",revision:"8eee1542d8f2ab9449d262202eb4270b"},{url:"assets/IS6941.html-DuY-iBSt.js",revision:"ba6796cf19b8cd7e53d691eb30fafbcc"},{url:"assets/it_services.html--8ulmZeN.js",revision:"fac796f1865fe2f5e292ba83f4766f9c"},{url:"assets/journeyDiagram-6625b456-ap08f2oH.js",revision:"48ea72afaf0d2c75757dc7952b86a75e"},{url:"assets/katex-rPiVaalG.js",revision:"5915c991bada2201323e84d17c8b9786"},{url:"assets/layout-Sv1RP_7G.js",revision:"084d239bbcf8816184000ff26df13344"},{url:"assets/line-CMACcLgE.js",revision:"ac29ff69040013023b388e55e9450b02"},{url:"assets/linear-D-B61q4H.js",revision:"73ac09bf9b325b3d043b176ff95e6f00"},{url:"assets/markdown.esm-BG2Xu2Hd.js",revision:"dfebc8121864151002204ef714f81472"},{url:"assets/mermaid.core-Bgh8y4gN.js",revision:"cdfb1a79e5a3b90ac8c9fdf90c7197ac"},{url:"assets/mindmap-definition-307c710a-Co2XAvrN.js",revision:"ca922003e8f645f5e0af834487dbece8"},{url:"assets/ordinal-Cboi1Yqb.js",revision:"a1d5f6bb98dd6182ddcb9cde64c37dab"},{url:"assets/path-CbwjOpE9.js",revision:"f86c0243cb45746453c6b4f7dbd9f34d"},{url:"assets/pgce.html-COKe6OzJ.js",revision:"9ce2159cba9e4d081d2275a1cd5251eb"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/pieDiagram-bb1d19e5-BXYA3cxD.js",revision:"c1bb0cf3f47d814a89cbd3cef7f5e5cc"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/quadrantDiagram-c759a472-1hx0HGUu.js",revision:"b744f4b160df6dfe6290be857bb4bfbe"},{url:"assets/quickstart.html-C-GpFmpS.js",revision:"5156929b200f281a2696e12d65571ec6"},{url:"assets/recurit.html-CR-jCm6u.js",revision:"7cebfa4a86e807e84ef4272155bf399f"},{url:"assets/requirementDiagram-87253d64-DP-mIvb6.js",revision:"987f3a2877b06a8b64c4ff7beb57d4db"},{url:"assets/reveal.esm-CYbl4_PU.js",revision:"d7a2a78c9e57530577ca771ebd6203f1"},{url:"assets/sankeyDiagram-707fac0f-CK2A-Bfo.js",revision:"df54e715d4b370e37db97a9707f0d498"},{url:"assets/search.esm-DuBqnxcF.js",revision:"d39092c5e0d9959995df72297767dc3f"},{url:"assets/SearchResult-DIjforNq.js",revision:"aa2a91039e4ce58334447ba0383f4746"},{url:"assets/sequenceDiagram-6894f283-DdbT5esO.js",revision:"e2dc958bd6cf8745cae561a4bbe0bc1f"},{url:"assets/stateDiagram-5dee940d-DKApHRtj.js",revision:"aba4bc8a5d96aab6000e7b73f8adc6c1"},{url:"assets/stateDiagram-v2-1992cada-Dv4Bptu0.js",revision:"53585b7e2d127da2cf7acb9200ef16fc"},{url:"assets/style-Cq3XQ3GE.css",revision:"8307e42f29a8a060f47bdee76b41b113"},{url:"assets/styles-0784dbeb-DvTHlMWb.js",revision:"7a5f9efa6026930e693dd46206f8ed5f"},{url:"assets/styles-483fbfea-Dj5GtShH.js",revision:"eb1625b322d6d7cfbde65da466b400be"},{url:"assets/styles-b83b31c9-CLiB-D8W.js",revision:"d106cf818db86c4ca1c9e22e423147c3"},{url:"assets/svgDrawCommon-5e1cfd1d-xcYa_dbm.js",revision:"9f7bd4b48f35f3969e2b0e0cca5a2033"},{url:"assets/Tableau10-B-NsZVaP.js",revision:"f2197f44250cada74e1e663d3abfba3e"},{url:"assets/time_arrangement.html-CKscKTX9.js",revision:"0f3f0d2c0809ad6dc8b8449114e72fc9"},{url:"assets/timeline-definition-bf702344-DWGlFQlf.js",revision:"c3dee55a19dbe362c9789d2c5d4a19c3"},{url:"assets/trans_mse_tutorial.html-CTR6TiJR.js",revision:"6df999e667ee1eee929f508e4924c4b4"},{url:"assets/useful_data.html-IgNf3s3O.js",revision:"5d4ec14124ad65e9657f1358015fc788"},{url:"assets/xychartDiagram-f11f50a6-CcU1AlEZ.js",revision:"6d7b87a8418e0422dc4df109c660f70f"},{url:"assets/zoom.esm-Ctj_eavO.js",revision:"e6e8f9a61302e3ca14aa4dbeec242607"},{url:"bg1.svg",revision:"7896ae1dad5215c72a8f4e779db28e5f"},{url:"home.svg",revision:"4c402382516c2dec63d36202c30348c1"},{url:"mb.svg",revision:"ef50830d615567d9f32dec21a09eda13"},{url:"sb1.svg",revision:"9684f1de4c13ed9551c7f185c0acc53b"},{url:"sb1dark.svg",revision:"564405dc0e6bcc27191a1bd5f6437a13"},{url:"404.html",revision:"d4ae607b3f14ed9cab9d27d7332dc727"},{url:"article/index.html",revision:"1b5489cac3c28bc489c098b5ce3a8d4a"},{url:"category/index.html",revision:"f6e97305e2e5c003978df4b6131bfb26"},{url:"category/专业方向介绍/index.html",revision:"2a563fd20e7cf61e2667e3cf972a51f1"},{url:"category/课程相关/index.html",revision:"199473b41aa51ca8510a8dd02e188c60"},{url:"elective/index.html",revision:"c8fd1fc39927f48da25bde128df08aad"},{url:"elective/IS5/index.html",revision:"00b40e31b30d97636801ec2af23fca54"},{url:"elective/IS5/IS5314.html",revision:"82b9c6e047f998cc26dd9d8a40a614fc"},{url:"elective/IS5/IS5542.html",revision:"af0524c420281386d36954f0921dd7e0"},{url:"elective/IS5/IS5743.html",revision:"a003eb2467fdcf3b81a12db86ac4bd5a"},{url:"elective/IS5/IS5940.html",revision:"f64ebbaf24e118c3ffe5299d8bde7d4a"},{url:"elective/IS6/index.html",revision:"ba858fc23eb55852a0d1ea41374261ed"},{url:"elective/IS6/IS6200.html",revision:"47c786d4ee3ea2cc15dc77dc1d24ec0f"},{url:"elective/IS6/IS6322.html",revision:"2d63435b10665af2a5a099574ad093b6"},{url:"elective/IS6/IS6421.html",revision:"96520f8c8d5eb90f81c5dae6fc65f74d"},{url:"elective/IS6/IS6620.html",revision:"45ac521cce469bc448416084d1d30773"},{url:"elective/IS6/IS6640.html",revision:"7471dd1845967f3d048e9e7172035f0b"},{url:"elective/IS6/IS6912.html",revision:"9431cb702618c8f2857091d2ed601297"},{url:"elective/IS6/IS6921.html",revision:"2637a7d8162cf8652254fe9c8f83cf8e"},{url:"elective/IS6/IS6930.html",revision:"b72c1ee05058a4262ded8bb4f88bd57f"},{url:"elective/IS6/IS6940C.html",revision:"e0663ff49422ec8b71c4337ee77bb502"},{url:"FIT/Core_Course/AC5511.html",revision:"d2f3b2e4c10ff41dca6531ebb375812d"},{url:"FIT/Core_Course/EF5042.html",revision:"ac7d2289e30c23fe90ff899e0c263fe9"},{url:"FIT/Core_Course/index.html",revision:"5003f791863885aab2db0be96c389ca1"},{url:"FIT/Core_Course/IS5540.html",revision:"79a838d292fa556b8462c869c27f148f"},{url:"FIT/Core_Course/IS5740.html",revision:"48bf9708f673e0a61d53e1c709ae07aa"},{url:"FIT/Core_Course/IS6400.html",revision:"a0e37cf8f30996776825fac6b2405f5c"},{url:"FIT/Core_Course/IS6523.html",revision:"6cbc58d542b899f7bcb4818083c0f168"},{url:"FIT/FIT_Elective/EF5052.html",revision:"766550c6099d9c1215e56136456f0a91"},{url:"FIT/FIT_Elective/index.html",revision:"269783753e5496d1ab47b00e1136fb21"},{url:"FIT/FIT_Elective/IS5010.html",revision:"ddab562fcfee6629ca6db960b1f5c39f"},{url:"FIT/FIT_Elective/IS5238.html",revision:"4fb64cdc056cf0a95d2d8736c75f96e6"},{url:"FIT/FIT_Elective/IS6941.html",revision:"81261f9a0d5b3c25c081650771b6ba44"},{url:"FIT/index.html",revision:"e241ccf2f3b9329e5eb655218aa80293"},{url:"General/about.html",revision:"d1f42b59ccd8c10573baaed6cc51c579"},{url:"General/alumni_share.html",revision:"ce6e53a90ccd5225c063cca229c580cd"},{url:"General/appreciate.html",revision:"87b91ebb70f91775e0e705602f428c93"},{url:"General/changedata.html",revision:"81e7fa13eeab6407e91520774ab31a67"},{url:"General/greenhand.html",revision:"2ce36800912529822ea036a0ebeb131a"},{url:"General/Hall_of_Fame.html",revision:"628b439fa6c219a0359b0c66d362c1e8"},{url:"General/index.html",revision:"188875baa7060ccdccdda0e90d7d2389"},{url:"General/quickstart.html",revision:"cb6be0974e7a6faec6d9549d79105ff1"},{url:"General/recurit.html",revision:"d533a7a3dbe01cd8ba50181426d846a7"},{url:"index.html",revision:"30eef15c020f5791b8464795fabd0010"},{url:"MIS/Core_Course/index.html",revision:"8f76d221164da655871ec986a7852c94"},{url:"MIS/Core_Course/IS5311.html",revision:"3244fa88b8625437063695767c05ac3c"},{url:"MIS/Core_Course/IS5312.html",revision:"7d7059bd761de45787ed8c669de9d85e"},{url:"MIS/Core_Course/IS5313.html",revision:"532a22c3ee94246bd216f68fa4e18d11"},{url:"MIS/Core_Course/IS5411.html",revision:"56e8918e2d884b84cd291ba5b3b900f2"},{url:"MIS/Core_Course/IS5413.html",revision:"7e560f4079458b42c79b80bacd3c1c3c"},{url:"MIS/Core_Course/IS5540.html",revision:"9ae770944115f9d90bc64ae14d50a07f"},{url:"MIS/index.html",revision:"d29a784508db662432fe74dfc38440ed"},{url:"MIS/MIS_Elective/index.html",revision:"a9510a7abc275c57c28581927901ba6a"},{url:"MIS/MIS_Elective/IS6335.html",revision:"b0895b46a490a5ae659bdcaeadc72e52"},{url:"star/index.html",revision:"ef4fc0259ac199690eb18c30356c1cf6"},{url:"tag/fit必修/index.html",revision:"142bb2c3edc08b5b67f79237fc308d84"},{url:"tag/fit计划内选修/index.html",revision:"a1cf59a9ea0d811093303eb16faafce0"},{url:"tag/index.html",revision:"e90376a4bd619e4e2537eaa545dc08af"},{url:"tag/mis必修/index.html",revision:"4477526264ec69c4704d8631378faeee"},{url:"tag/mis计划内选修/index.html",revision:"939a7229f134ce9ffdad7aad278f012f"},{url:"tag/sema/index.html",revision:"4a2539a69216a8c0690b153ed963890d"},{url:"tag/semasemb/index.html",revision:"ef7985cf1abb4b9ab04ce54392910376"},{url:"tag/semb/index.html",revision:"d48eef8d0bca29dd1fe4115deb3e35d2"},{url:"tag/st课程/index.html",revision:"c9725e452650a07265321bd49a9c6800"},{url:"tag/unknown/index.html",revision:"f74f7bb1a14cffd95f6d677745672343"},{url:"tag/公共选修课程/index.html",revision:"59c823efe6ec349554bca41ff52ea420"},{url:"tag/技术支持/index.html",revision:"6ed440b13b3b2268bdcd0f601488fb56"},{url:"tag/网选/index.html",revision:"cc9e362c077a78620baa90d2992730b1"},{url:"tag/论文课程/index.html",revision:"348139b539a07621230d045f29d9abcf"},{url:"tag/资源/index.html",revision:"9bdf9012d6d23e819df1baafb06c8c46"},{url:"tag/选课/index.html",revision:"cc5016b6d106bcdaffe61dce6d34f862"},{url:"tag/非网选/index.html",revision:"a89d0cc56750c8afc28ade3c42bfdd75"},{url:"Tech/Canvas.html",revision:"517068a50a37fc35a2fd2137014d8f84"},{url:"Tech/CityU_Portal.html",revision:"167ca953062324b719b8e07f5deeadc9"},{url:"Tech/index.html",revision:"45b2d22a01045f315da77df18f95ff8b"},{url:"Tech/it_services.html",revision:"de945cfab1794ce6597ae35cd1f9b6b7"},{url:"timeline/index.html",revision:"b81f03d5b528bb22af0bb10795f2f474"},{url:"Useful/CourseEnroll/extension.html",revision:"dc975080fa0fab128ba20a79a976a6c7"},{url:"Useful/CourseEnroll/how_to.html",revision:"55a9857c477e4b426ff3d8ef04098fd0"},{url:"Useful/CourseEnroll/index.html",revision:"c9f8413bf4f777a4800125afdef6c61c"},{url:"Useful/CourseEnroll/pgce.html",revision:"5ef2869772a99d975086697920fe8f1b"},{url:"Useful/CourseEnroll/time_arrangement.html",revision:"93d8bfed520a3888ea5828cc42f5a23b"},{url:"Useful/CourseEnroll/useful_data.html",revision:"5f6e43dd57b47d05871c567b66b50b2c"},{url:"Useful/index.html",revision:"1ea8b688fa73c371ecc482e86ec196da"},{url:"Useful/Learning/BIS_resource.html",revision:"610dd0ff5748fd66758f0e3a226413db"},{url:"Useful/Learning/coding_greenhand.html",revision:"9e51d40431bda976f4e5813f4ace1fb3"},{url:"Useful/Learning/cscse_reco.html",revision:"53fcbf3ebe4cd0e1aa847d619c1081ac"},{url:"Useful/Learning/index.html",revision:"7477ef5d0a7a718b5fa099141226ddaa"},{url:"Useful/Learning/trans_mse_tutorial.html",revision:"2087b8977da77b5994c9b56eeebd4e9d"}],{}),e.cleanupOutdatedCaches()}));