if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const f=e=>a(e,d),b={module:{uri:d},exports:c,require:f};s[d]=Promise.all(i.map((e=>b[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-dbb64b4e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-CJXOSx1R.js",revision:"b31667cf88af012d40d75571b8863c4b"},{url:"assets/about.html-DJsmXIWV.js",revision:"470d5099d4fad9f73919d436e128a164"},{url:"assets/AC5511.html-DCLRxQ4y.js",revision:"4204a3e7c9eed1577b0a7b46610bacdf"},{url:"assets/alumni_share.html-CTdMyVkp.js",revision:"c778e3a376f9da8ad677ea5d78b5091b"},{url:"assets/app-iCC0yLhf.js",revision:"ac5bc9e1b270bfcc1eb4e06c224eeeea"},{url:"assets/appreciate.html-CQrk2xkO.js",revision:"56e00551759fe8e3f70080c208e4e38e"},{url:"assets/arc-g5OBeiH_.js",revision:"38f969a77de987450f8ebd5b6b928c41"},{url:"assets/array-BKyUJesY.js",revision:"17dcebeaf673b09a1ca5da014d20022f"},{url:"assets/BIS_resource.html-Bz5rshhJ.js",revision:"f02f49125bbcc8d9e2e55a7298a29cdf"},{url:"assets/blockDiagram-91b80b7a-BLMX35fc.js",revision:"3eef665fc59f9b58cc491b3dee307e76"},{url:"assets/c4Diagram-b2a90758-CZa8dqJn.js",revision:"95d30efe10082f55a28440ec06a95407"},{url:"assets/Canvas.html-BCAnStUe.js",revision:"e3fcd9f47e866a88ec2eb2c06d89a3f7"},{url:"assets/changedata.html-BKzdThyU.js",revision:"b00e0722053a9fce19f7a1233e1ecdb6"},{url:"assets/channel-C4AXDg10.js",revision:"b6533acde771342b5ec3aff44d0059f2"},{url:"assets/CityU_Portal.html-BnOdIS8l.js",revision:"cd21292c246973ab620b0a6a5114893a"},{url:"assets/classDiagram-30eddba6-DfI39mCY.js",revision:"0e92b83c27e1023aaaf4bfa789253f70"},{url:"assets/classDiagram-v2-f2df5561-mrzoYz7n.js",revision:"7500b9ea085968ede3a470449bdcbfcc"},{url:"assets/clone-C0SRKpPJ.js",revision:"3d44279e244b42523c88c141a3751d10"},{url:"assets/createText-6b48ae7d-1WrcJBpR.js",revision:"a6db403d5199a10a0fe5553597b6bc1c"},{url:"assets/edges-d32062c0-DP8HbUXS.js",revision:"ac362c654b6bc8415a2fd40c064e0c48"},{url:"assets/EF5042.html-I26blC2G.js",revision:"be66da1cb6f32dad03b0931ef9e4ec34"},{url:"assets/EF5052.html-CsaR35Xo.js",revision:"68923f381dbf5dd28b732cb495d0e3e3"},{url:"assets/erDiagram-47591fe2-CM3ZONF5.js",revision:"12ec508a687844a95b233c7f4fa4d385"},{url:"assets/extension.html-DcWyRkxk.js",revision:"bd3aa689bdfc8659734d155ddc06f294"},{url:"assets/flowchart-elk-definition-5fe447d6-C7UFooRf.js",revision:"c0e7130e3087b0e95b5780388486d92c"},{url:"assets/flowDb-4b19a42f-BIJ1qfCo.js",revision:"b47765f2918662cd5617efc323f652e6"},{url:"assets/flowDiagram-5540d9b9-nABXgirh.js",revision:"ff6ef384bee3c309632e761cc0944716"},{url:"assets/flowDiagram-v2-3b53844e--7YFnuDa.js",revision:"706788717de88e938aac21f447235c02"},{url:"assets/ganttDiagram-9a3bba1f-Bm4LWPyw.js",revision:"044f6b7b6d095a80c93fefcce1cf5efa"},{url:"assets/giscus-7BMGhbDA.js",revision:"dae7c2db562e417dc4bde3be5134780b"},{url:"assets/gitGraphDiagram-96e6b4ee-CA8FgzY9.js",revision:"364fa2081d50daa4c16a9c350070fde7"},{url:"assets/graph-BRni4OhA.js",revision:"7fd35000c213b0b9a6c0da1c2938a5c7"},{url:"assets/greenhand.html-Di6kvY4Y.js",revision:"0e1aabc572764463ed3d5a7f0b1226df"},{url:"assets/Hall_of_Fame.html-BKAXd3Us.js",revision:"dd41feb901aedf715fcc7a8d7eb3ef6d"},{url:"assets/highlight.esm-B2Y_eiOr.js",revision:"62b5f024c0d2737c1370675313dc2efe"},{url:"assets/how_to.html-BlbqiaLv.js",revision:"13988302d13264d08012ce4837a088f4"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/csp.svg",revision:"ef221342ac908f9173286a7ddacac144"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/image/文字详情.svg",revision:"d36c4a5d4e94e3047fdc796af3685b3c"},{url:"assets/image/权限.svg",revision:"b450d25072f10e1ec58d8ee8cea0d0f7"},{url:"assets/image/查询.svg",revision:"428863e2d75481583360abf8b84555f2"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-fc10efb0-BXEUInr1.js",revision:"e3025513d9ee42c31797a7d965162709"},{url:"assets/index.html-8ecUYqr7.js",revision:"7066944471ab3ee407c0c044d04db9fd"},{url:"assets/index.html-A2LWZ1_8.js",revision:"dbb3385f22a292cb1cba32c62440ac70"},{url:"assets/index.html-B3xyGFIY.js",revision:"9d2c74a1cc4df2edaa5abba88e104f41"},{url:"assets/index.html-Bj1bSg4A.js",revision:"007b25ac454e1609f99feb06a6dc8c4c"},{url:"assets/index.html-BOtV_CPm.js",revision:"b2e457e224d5da11c9a7e8f5fcb05b37"},{url:"assets/index.html-Brk8baiE.js",revision:"52781c182c36e18445cc0784b16c6a63"},{url:"assets/index.html-Bumx2oAi.js",revision:"3cd379b23b1720b4a4c276fa60159eb6"},{url:"assets/index.html-BwLxAdVZ.js",revision:"8874683978f9891f20956152fa749551"},{url:"assets/index.html-ByEst7x4.js",revision:"705733acf295f1019b8ebfa4416c08b6"},{url:"assets/index.html-BzGSAE4X.js",revision:"660ec317a0ef019fd52c680d46b40521"},{url:"assets/index.html-Bzrkg3uM.js",revision:"2a0be5fb7d7d5551acc5a1f55f5c79ce"},{url:"assets/index.html-C2MXiN6W.js",revision:"7892be664c743141113a3c8db0aa22c1"},{url:"assets/index.html-C2v2pveO.js",revision:"9a07e8798ea01a1b73857ce509b5ec84"},{url:"assets/index.html-CAJ9SCgh.js",revision:"80fa12b433e837d69ca9f642f7927b00"},{url:"assets/index.html-CE0-kJxD.js",revision:"b88c7caeae0609de980db0f497f97ef6"},{url:"assets/index.html-CHTUepmn.js",revision:"e6f344543486a41ec78040e461106244"},{url:"assets/index.html-CjJvwJr0.js",revision:"e06fc8e9c8c0e5a4d371a5465453476b"},{url:"assets/index.html-CMTZoDFf.js",revision:"c54b1c3d0ecb90ba85ec05d5576c3d7f"},{url:"assets/index.html-CQJvGs0U.js",revision:"1ad371d8de31d347e520344cac4e90e1"},{url:"assets/index.html-CtBEiN30.js",revision:"ee599cd352be01153f64f9ade4b82f99"},{url:"assets/index.html-CtGhZZyU.js",revision:"b1655a2f344bf2288c242c71bc199802"},{url:"assets/index.html-D1CYxMZ0.js",revision:"d6d60aa924c098e1618721dfa38e8854"},{url:"assets/index.html-Deblf9vM.js",revision:"aadf41990201465379aca24948794a7f"},{url:"assets/index.html-DfR85EzN.js",revision:"78c0d440015f6a43ecbc0951f6988f4f"},{url:"assets/index.html-Dhpo94bG.js",revision:"ba1400813be8c982aa618174ca7c0d61"},{url:"assets/index.html-DNYLKgDY.js",revision:"65e8690f96c886d08cbfd943e9c30b0e"},{url:"assets/index.html-DpQTh5Fh.js",revision:"e11f92e9389eda51e84c4f9c02804182"},{url:"assets/index.html-DvY4RD5J.js",revision:"713b7a60857a9ca2594623ffa6c23b56"},{url:"assets/index.html-Dz4rP-Dk.js",revision:"ce33db8c4f862fe4b24ac7e6394749d9"},{url:"assets/index.html-FGXh5IJu.js",revision:"c4585e156f05499f14fc1b499facb522"},{url:"assets/index.html-fiTYiu2p.js",revision:"c396e31fe1ba627e8b565064d90ea3ec"},{url:"assets/index.html-fuwIfHfw.js",revision:"f8e508bd888f31c8f81d29fd3adb1a93"},{url:"assets/index.html-HyzXzLO4.js",revision:"84b94a056ab45ffd813479f5075e832a"},{url:"assets/index.html-JVIFsRVv.js",revision:"8bff101ba6d5892bdaffacd3c39d351f"},{url:"assets/index.html-LKDEqYDq.js",revision:"959de3396bd41a2b618e2788408abe2e"},{url:"assets/index.html-ro2VSXIL.js",revision:"32553c7a30b68409c9f9a05d79af6685"},{url:"assets/index.html-Tb8YJxOI.js",revision:"ba2c362a90ac6c42d6912369ba198ef0"},{url:"assets/index.html-tkYCWb_T.js",revision:"c2a70d62da54fe2a74e150ffc8c9c0e8"},{url:"assets/infoDiagram-bcd20f53-CBd56AIp.js",revision:"03651ccbecca2c13637c17cf23363e6f"},{url:"assets/init-Gi6I4Gst.js",revision:"3ce28180466443e9b617d7b96e9f7b8f"},{url:"assets/IS5010.html-zY7HSHN1.js",revision:"1dfc5293e0c6cd156fa977d8909c1722"},{url:"assets/IS5238.html-DgTMr6PJ.js",revision:"0088ef51518f6f0941138f9183a0b8f1"},{url:"assets/IS5311.html-Di_rD1XA.js",revision:"1510cfe4c22141434428f9615de256e6"},{url:"assets/IS5312.html-ChB2OJYF.js",revision:"4b98460c4e092d7afe3559a593c03217"},{url:"assets/IS5313.html-17mLbJHb.js",revision:"0a2218b167894a9850c7b9f68c9a6a02"},{url:"assets/IS5314.html-DJN1FEKn.js",revision:"5eb2ac27469fb45efcb811f376dc052e"},{url:"assets/IS5411.html-DKCOs0Ry.js",revision:"23eb71ab7c7cc3dc144af3353f67c961"},{url:"assets/IS5413.html-BT0vfz5X.js",revision:"2f0717744703ae470d64750027c98f0e"},{url:"assets/IS5540.html-CnwTVUaa.js",revision:"9881e1e440710dd74b9f0c6e12a1eb14"},{url:"assets/IS5540.html-lszNM6b6.js",revision:"3c461606c0fb1a24167bcf383f161542"},{url:"assets/IS5542.html-BRbmMcvn.js",revision:"4b9a41533256933e0f85fc2b45456d96"},{url:"assets/IS5740.html-_HeC1cJx.js",revision:"c9658123fe0b3455f77b912b2cc000cd"},{url:"assets/IS5743.html-BKDNJFc9.js",revision:"3dfd8e36a7308ed35853f4a14c666351"},{url:"assets/IS5940.html-YCJnkMyl.js",revision:"931582cd7c97a8a75bac68d301fed1ab"},{url:"assets/IS6200.html-tSQip8M2.js",revision:"9976a47b4ff22304e89e993b437a6472"},{url:"assets/IS6322.html-tBucP5Qq.js",revision:"b2b07cadfa3f13a8541381835e52f816"},{url:"assets/IS6335.html-Cg8u1UyQ.js",revision:"bbc0a20dd5829ef80eee59bbc71c6979"},{url:"assets/IS6400.html-DvqP_yXN.js",revision:"2242f64447e0894804008e3048a156cf"},{url:"assets/IS6421.html-hMhTQg94.js",revision:"e43d0525f125c66fb9cf2ba33add6a52"},{url:"assets/IS6523.html-D2WQk464.js",revision:"fead132153c9f53443b83d712d4ff00a"},{url:"assets/IS6620.html-8SkkB1Q5.js",revision:"155dfe1bef8201423bbdcbd7da18e5c0"},{url:"assets/IS6640.html-DUD9H9Vr.js",revision:"601b69cee80f87bf032eb2fd9c5af8ff"},{url:"assets/IS6912.html-Bx9C8Xrr.js",revision:"9604ba40665b3598648309653fb7f281"},{url:"assets/IS6921.html-BJCp-Mtu.js",revision:"574480f4125159103f09ffbebed48448"},{url:"assets/IS6930.html-Cn8TRUDw.js",revision:"b2c3d943004392f39b14f96c0b9c7532"},{url:"assets/IS6940C.html-DCjQ7nn9.js",revision:"e958cafb5cf39ae839b75b96f58148e4"},{url:"assets/IS6941.html-CpEaziAZ.js",revision:"e3b5de1785694128e4b9e2b885093cb3"},{url:"assets/it_services.html-DuEMvD7o.js",revision:"1276b77e1b1f92644343a65b87c99681"},{url:"assets/journeyDiagram-4fe6b3dc-Cfn2xXHZ.js",revision:"d88ee63183ac9f63a6be4a8a7fb9d769"},{url:"assets/katex-TTlFrSdt.js",revision:"a3992fd3fed819d3ea3e01f26c670474"},{url:"assets/layout-BffsMiBT.js",revision:"9f9e7ded8137b8dde9099639378f34db"},{url:"assets/league-gothic-Cg6O_jDX.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-CHd505-u.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/league-gothic-DDFhcAD7.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/line-C39TCfcb.js",revision:"aebb7287fbdf53eeeea2d4f4b51bf048"},{url:"assets/linear-jBCq7qAR.js",revision:"2edf3cf8a67ec2c3cab895ed0aaa23ff"},{url:"assets/markdown.esm-BG2Xu2Hd.js",revision:"dfebc8121864151002204ef714f81472"},{url:"assets/mermaid.core-Bn0sC61b.js",revision:"9006a9ee800e074d9fb4ce99d99e0b41"},{url:"assets/mindmap-definition-f354de21-CJuWfRSZ.js",revision:"53b51db4ccf4b5489668589f67c21c53"},{url:"assets/ordinal-Cboi1Yqb.js",revision:"a1d5f6bb98dd6182ddcb9cde64c37dab"},{url:"assets/path-CbwjOpE9.js",revision:"f86c0243cb45746453c6b4f7dbd9f34d"},{url:"assets/photoswipe.esm-SzV8tJDW.js",revision:"481d5342d9bb799640b63b15b698dcd4"},{url:"assets/pieDiagram-79897490-6_lMk5kb.js",revision:"7e651ec3087b768d9f28f1c46fc81e9b"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/quadrantDiagram-62f64e94-LQEyu6st.js",revision:"75adae829a9f52ad1611982196164b6b"},{url:"assets/quickstart.html-3jSWBF8y.js",revision:"605d17200762368ad7df52508336359f"},{url:"assets/recurit.html-D_PFNvfW.js",revision:"f809909ed8d2fba113aabcae078ff4e9"},{url:"assets/requirementDiagram-05bf5f74-CiSiwF1F.js",revision:"7f3b3dedb019b06a22df9ba65a3b595e"},{url:"assets/reveal.esm-ssIfNQ0c.js",revision:"f0a894a5d545cbebbc7612b589c47be0"},{url:"assets/sankeyDiagram-97764748-DC4iJRgJ.js",revision:"96f6ea60de46c6ba38f28fbfdbf127c8"},{url:"assets/search.esm-DuBqnxcF.js",revision:"d39092c5e0d9959995df72297767dc3f"},{url:"assets/SearchResult-BVjCj2iU.js",revision:"4956f2899db3f3dfccf41c838a292725"},{url:"assets/sequenceDiagram-acc0e65c-BFfKQuBz.js",revision:"d511a1740cbca7ed5b17cac2f4be2654"},{url:"assets/source-sans-pro-italic-BRELHCij.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-CRcsOvyS.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-italic-Cv9m8hC5.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-regular-C8xAf4ue.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-regular-Du6DMqU5.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-DVYRbr7L.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-semibold-DJkFd4Pg.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibold-DwriEDPf.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-J0UDcmCq.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibolditalic-BHQoOnJ8.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/source-sans-pro-semibolditalic-DCTsihXp.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-DSkHRpvW.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/stateDiagram-0ff1cf1a-BMPFiSdl.js",revision:"9dbff84b7194ac088159b7b82fca7766"},{url:"assets/stateDiagram-v2-9a9d610d-s28VhLlC.js",revision:"9cb11932ebeff70c10d136e91435fd5c"},{url:"assets/style-STZNi92C.css",revision:"25c9be87d94f871f91f5640d53218bc3"},{url:"assets/styles-3ed67cfa-B6iTXvNJ.js",revision:"fc1288bf842db5b32cdaf8d858087782"},{url:"assets/styles-991ebdfc-_sYa5uXL.js",revision:"d7cb194839aa2d015c2fd932dcea024a"},{url:"assets/styles-d20c7d72-6dAtzyT1.js",revision:"673fc9a3f666e89b11e2e84fe62e29c2"},{url:"assets/svgDrawCommon-5ccd53ef-BW3f5GES.js",revision:"26fbc54d9b01e9047ba2b7b496e0d86f"},{url:"assets/Tableau10-B-NsZVaP.js",revision:"f2197f44250cada74e1e663d3abfba3e"},{url:"assets/time_arrangement.html-BmdFS0QJ.js",revision:"6368226d2a98674fdd7529b82851e26b"},{url:"assets/timeline-definition-fea2a41d-DT-U7gvT.js",revision:"5922aaaedf95feff24a8a8081aeddde7"},{url:"assets/trans_mse_tutorial.html-BUhWf-No.js",revision:"ba7aa6b3b18f9f22d97f0dd197497d83"},{url:"assets/useful_data.html-5jxnwZEL.js",revision:"7d7bc28903b6cc5f45d1ea0936952920"},{url:"assets/xychartDiagram-ab372869-Xf9V9Ykm.js",revision:"a89f3472aa8bfe28f970601756891090"},{url:"assets/zoom.esm-Ctj_eavO.js",revision:"e6e8f9a61302e3ca14aa4dbeec242607"},{url:"bg1.svg",revision:"7896ae1dad5215c72a8f4e779db28e5f"},{url:"home.svg",revision:"4c402382516c2dec63d36202c30348c1"},{url:"mb.svg",revision:"ef50830d615567d9f32dec21a09eda13"},{url:"sb1.svg",revision:"9684f1de4c13ed9551c7f185c0acc53b"},{url:"sb1dark.svg",revision:"564405dc0e6bcc27191a1bd5f6437a13"},{url:"404.html",revision:"7c35e9dd8eff0e495b204cf741aba7fd"},{url:"article/index.html",revision:"a474cb6940d124c767fcb6d65a05d1a9"},{url:"category/index.html",revision:"b6a3ed6a2adbbe0739a23390e44ae19b"},{url:"category/专业方向介绍/index.html",revision:"927d397a5c22b6cf3d5290aadf6489e1"},{url:"category/课程相关/index.html",revision:"6de7013a9acaafc53f370c895bba4d69"},{url:"elective/index.html",revision:"6412a8a5e19191e2d5567ef934670da5"},{url:"elective/IS5/index.html",revision:"d28a961df388416cc473b0fa971a44fb"},{url:"elective/IS5/IS5314.html",revision:"7473af86f477a235fda669cae7d6d995"},{url:"elective/IS5/IS5542.html",revision:"98367db4371a9988fb88c78511bab209"},{url:"elective/IS5/IS5743.html",revision:"d40c7cdd10194fa248de55a6a31afb2d"},{url:"elective/IS5/IS5940.html",revision:"83796ec8de6019f9e3829c3c6d84ed5e"},{url:"elective/IS6/index.html",revision:"80e430d5928d2fdc563d8067b77ff725"},{url:"elective/IS6/IS6200.html",revision:"ffbc1ede88e77181f417156d8ef056b4"},{url:"elective/IS6/IS6322.html",revision:"6fb9a86d5eedd7283a3a79158cf9f20c"},{url:"elective/IS6/IS6421.html",revision:"6457fa5b7580c46c87f213587e198e12"},{url:"elective/IS6/IS6620.html",revision:"9d9793583e1415ca096500beeeb2f5a3"},{url:"elective/IS6/IS6640.html",revision:"defd8389409bb6a6fed99f85f1bfcee6"},{url:"elective/IS6/IS6912.html",revision:"39206435ba587a574759a11803b5f14d"},{url:"elective/IS6/IS6921.html",revision:"c5c3bb1cfc1b09b3fbfae136e90c4791"},{url:"elective/IS6/IS6930.html",revision:"a79c2925f66203338429585d29721216"},{url:"elective/IS6/IS6940C.html",revision:"7f5ea400f59d6f97b85ff27f65cf553e"},{url:"FIT/Core_Course/AC5511.html",revision:"7d51d48cfbbdbccf3dbcee49ac6ef9ae"},{url:"FIT/Core_Course/EF5042.html",revision:"b04795f8c0615df06c45986f4113cd0c"},{url:"FIT/Core_Course/index.html",revision:"edaeab82e7b9552d03645889f4398b76"},{url:"FIT/Core_Course/IS5540.html",revision:"355ab581136a9b0de65c042c46601351"},{url:"FIT/Core_Course/IS5740.html",revision:"77c702a7ace25be9dadcceff8a638097"},{url:"FIT/Core_Course/IS6400.html",revision:"1078393ad6e81fb114cdeb036d2b0287"},{url:"FIT/Core_Course/IS6523.html",revision:"57940659a0b4dd0c1c5329a1fab15b78"},{url:"FIT/FIT_Elective/EF5052.html",revision:"40296f348400819770d2330b251a76fe"},{url:"FIT/FIT_Elective/index.html",revision:"07d012e7c4c7d3614a480094a85d17f7"},{url:"FIT/FIT_Elective/IS5010.html",revision:"9300437af38f43b2a103f30f7e633475"},{url:"FIT/FIT_Elective/IS5238.html",revision:"6d47fb49f7cd13f3be261d78947d6dce"},{url:"FIT/FIT_Elective/IS6941.html",revision:"6e992ae615f01b201fbfd68a93339164"},{url:"FIT/index.html",revision:"e868a36e20d31a12c781a1accd3125cf"},{url:"General/about.html",revision:"92c62bc4f941ac2d8a4ab8b85ab8179f"},{url:"General/alumni_share.html",revision:"66eb2ce0b81fd244ead4c3ddfa404c2d"},{url:"General/appreciate.html",revision:"cf842024fe701c0696fc0ced6fff4a5a"},{url:"General/changedata.html",revision:"36bb0a86e78bee2b628fbb3ec49335a7"},{url:"General/greenhand.html",revision:"95f7aefdd44ab0790ed831df89493d60"},{url:"General/Hall_of_Fame.html",revision:"ceed854e9ca3f4b8087a6b4704d1ff56"},{url:"General/index.html",revision:"45c19207291a61978fc2be75dff4c864"},{url:"General/quickstart.html",revision:"729b499ce28830c49fe2c8a6ca52aaf6"},{url:"General/recurit.html",revision:"5f42d3db661a32fbc90d958df382f76c"},{url:"index.html",revision:"c8be7e5528ba6fb992601aaa21dbb591"},{url:"MIS/Core_Course/index.html",revision:"f604fa85b0cc504123ebb69c0131da12"},{url:"MIS/Core_Course/IS5311.html",revision:"64fab44a5d4b234dbc821aebd90c9d96"},{url:"MIS/Core_Course/IS5312.html",revision:"4d9361bd7fc04572208af8940e434671"},{url:"MIS/Core_Course/IS5313.html",revision:"a9f7078b342240d36bf3f19139ead042"},{url:"MIS/Core_Course/IS5411.html",revision:"e98b2ed56181073a0608cc2e0e173f16"},{url:"MIS/Core_Course/IS5413.html",revision:"43acc29d27f412bc5267c761580c068b"},{url:"MIS/Core_Course/IS5540.html",revision:"50499129f1f017b70a20a288565c200f"},{url:"MIS/index.html",revision:"15812708759d2a3bcb44835e4f2cfc42"},{url:"MIS/MIS_Elective/index.html",revision:"7cbbd1ee3f1d81b16dc17047f498f009"},{url:"MIS/MIS_Elective/IS6335.html",revision:"c1a20e3a9b9d5fd19637ab76a51484e5"},{url:"star/index.html",revision:"40961a1435b35a96668adef760de6ca3"},{url:"tag/fit必修/index.html",revision:"da02a4be38851acfa36151ea4033c50b"},{url:"tag/fit计划内选修/index.html",revision:"c8716abdef499cd0bf330267d33fa662"},{url:"tag/index.html",revision:"c1f2275b35389db82a55225ddf10c3f1"},{url:"tag/mis必修/index.html",revision:"e5cb09c91d60668307524cbce2624576"},{url:"tag/mis计划内选修/index.html",revision:"259e8591730f400b5d847545b0d9f1af"},{url:"tag/sema/index.html",revision:"3b45410ba0e332976b1f0e53f91da2e8"},{url:"tag/semasemb/index.html",revision:"642ab769c332d2da9980ec5cf9eab2af"},{url:"tag/semb/index.html",revision:"325375cf611014957ab6caf1ba986bfc"},{url:"tag/st课程/index.html",revision:"40eb4345b1c1e4b6dbdd04070ce05ab3"},{url:"tag/unknown/index.html",revision:"827b6ecb77db2cc5292c591ee1fc0e6a"},{url:"tag/公共选修课程/index.html",revision:"38867d0f92469e1f31f4cb989ece0e91"},{url:"tag/技术支持/index.html",revision:"f65914fcaa54ec98f6f10dc356723be6"},{url:"tag/网选/index.html",revision:"c347b2b66afc1bc6d166d0bab3e87b75"},{url:"tag/论文课程/index.html",revision:"7501932d10c6daf33e661c9f97253ef6"},{url:"tag/资源/index.html",revision:"def363092c9372d4292d50e3a995b696"},{url:"tag/选课/index.html",revision:"8bd844e7b18ad1903299e586798b40b3"},{url:"tag/非网选/index.html",revision:"e4d5f8996ab45138bf7251476f3ee3b6"},{url:"Tech/Canvas.html",revision:"8d39d0b5f523945983a96199d97ac6b6"},{url:"Tech/CityU_Portal.html",revision:"719aaf840d34311d532052c5891e7d87"},{url:"Tech/index.html",revision:"9c6e614d408033a69b147cb8f9997bff"},{url:"Tech/it_services.html",revision:"89975298bf1f4e2edccb7b5f3bfb45ce"},{url:"timeline/index.html",revision:"8fee3aca4316d8f28d759462f660a693"},{url:"Useful/CourseEnroll/extension.html",revision:"e53a5b726b67fb2e6e8984224564f8e6"},{url:"Useful/CourseEnroll/how_to.html",revision:"8a9bf31a1d2c7dff5a412a347df548dd"},{url:"Useful/CourseEnroll/index.html",revision:"f385d14fd41b1f0655ca05f76d0a7f9c"},{url:"Useful/CourseEnroll/time_arrangement.html",revision:"3d957611d9404e331cfbd4d04799d4c2"},{url:"Useful/CourseEnroll/useful_data.html",revision:"cd9fbca061fb8bb4269cb1f8205eab93"},{url:"Useful/index.html",revision:"a8847d24e810a94642bce693611ceb3b"},{url:"Useful/Learning/BIS_resource.html",revision:"020e7a1eb305cbcbfb1ed6331c323ba0"},{url:"Useful/Learning/index.html",revision:"971099737dc6dd95bbf99556dda35838"},{url:"Useful/Learning/trans_mse_tutorial.html",revision:"ee05f546a7a9ad862b2e34248de923c0"}],{}),e.cleanupOutdatedCaches()}));
