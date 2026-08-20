# Changelog

## 0.1.0-alpha.3 (2026-08-20)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/maisaai/node-sdk/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#28](https://github.com/maisaai/node-sdk/issues/28)) ([3565f73](https://github.com/maisaai/node-sdk/commit/3565f732457bbe4e5e0267b46de0f48b0f0b25b4))
* **api:** OpenAPI spec update via Stainless API ([#12](https://github.com/maisaai/node-sdk/issues/12)) ([70eaf21](https://github.com/maisaai/node-sdk/commit/70eaf210a89697c46c5cf5ce1677d61f4815917b))
* **api:** OpenAPI spec update via Stainless API ([#14](https://github.com/maisaai/node-sdk/issues/14)) ([39d7ac0](https://github.com/maisaai/node-sdk/commit/39d7ac0350a854f3aeb0d8c19df2cffba70ef001))
* clean up environment call outs ([9650bfb](https://github.com/maisaai/node-sdk/commit/9650bfba397d7496178b3416983a7e50c7605a46))
* **client:** accept RFC6838 JSON content types ([#29](https://github.com/maisaai/node-sdk/issues/29)) ([e18ddd3](https://github.com/maisaai/node-sdk/commit/e18ddd3331647b0c25aed3f6b24d3428df5a64ee))
* **client:** add support for endpoint-specific base URLs ([d3cec19](https://github.com/maisaai/node-sdk/commit/d3cec191d768c173919950d80367d2e78888dde7))
* **stlc:** configurable CI runner and private-production-repo support in workflow templates ([a0c5ab4](https://github.com/maisaai/node-sdk/commit/a0c5ab4c7bad46eb93bc0c3c3b6ac82d2d54e25e))
* support setting headers via env ([73cd33f](https://github.com/maisaai/node-sdk/commit/73cd33fef5fd01323711be99cc3534df5f8479f9))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#38](https://github.com/maisaai/node-sdk/issues/38)) ([837d599](https://github.com/maisaai/node-sdk/commit/837d599f19c3d9b7e57802e72bc258c338d6db9c))
* avoid type error in certain environments ([#34](https://github.com/maisaai/node-sdk/issues/34)) ([4a5837e](https://github.com/maisaai/node-sdk/commit/4a5837edd9fa1738b823777841874c6106eeba82))
* **ci:** release-doctor — report correct token name ([2683b03](https://github.com/maisaai/node-sdk/commit/2683b03ddccdf2dede541acdded547ab985d5419))
* **client:** don't send `Content-Type` for bodyless methods ([1bebaad](https://github.com/maisaai/node-sdk/commit/1bebaad2866e7910bdd0a28362f72caeaa942425))
* **client:** preserve URL params already embedded in path ([48d3a76](https://github.com/maisaai/node-sdk/commit/48d3a7617a90a7ae1565e029482d0118f515780f))
* **client:** send `X-Stainless-Timeout` in seconds ([#36](https://github.com/maisaai/node-sdk/issues/36)) ([b0e7faa](https://github.com/maisaai/node-sdk/commit/b0e7faa8126499453343390a7be1bb0c9d63dda5))
* coerce nullable values to undefined ([8abc12e](https://github.com/maisaai/node-sdk/commit/8abc12ec8cecb9f44e631323bd5a790f0d2e7d85))
* **docs/contributing:** correct pnpm link command ([87e0ce7](https://github.com/maisaai/node-sdk/commit/87e0ce781aa392df571fa9673b036fff02c17f7d))
* **exports:** ensure resource imports don't require /index ([#31](https://github.com/maisaai/node-sdk/issues/31)) ([af90af8](https://github.com/maisaai/node-sdk/commit/af90af83d326d512b81019f04f9bba84e939c4e4))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#35](https://github.com/maisaai/node-sdk/issues/35)) ([633b99a](https://github.com/maisaai/node-sdk/commit/633b99a727dfdf145a1c2f2f6a7244a6576d13d9))
* **mcp:** correct code tool API endpoint ([2175f4a](https://github.com/maisaai/node-sdk/commit/2175f4adac573b5cd2b2050d472b5174a83307d7))
* **mcp:** remove unused tools.ts ([#39](https://github.com/maisaai/node-sdk/issues/39)) ([9a32b34](https://github.com/maisaai/node-sdk/commit/9a32b3417bdebbde3a678e5768107c07d023442f))
* **mcp:** return correct lines on typescript errors ([39e09fb](https://github.com/maisaai/node-sdk/commit/39e09fbcb3ba8ace9a5e959c10c48dfcbe9484f1))
* publish script — handle NPM errors correctly ([9fcc1d6](https://github.com/maisaai/node-sdk/commit/9fcc1d6feeb78995559669a6812fa0a44a10afe0))


### Performance Improvements

* faster formatting ([17f089f](https://github.com/maisaai/node-sdk/commit/17f089f418f965225fc2590d9bbf471c31d0663c))


### Chores

* break long lines in snippets into multiline ([db72364](https://github.com/maisaai/node-sdk/commit/db723646328bd135e924415412ce62cc9271599c))
* ci build action ([eb696f7](https://github.com/maisaai/node-sdk/commit/eb696f73f16d7b7494811905a18131f7b741d263))
* **ci:** add timeout thresholds for CI jobs ([959262c](https://github.com/maisaai/node-sdk/commit/959262c3ac17fceccc76a32ef23c977fa8689201))
* **ci:** bump node version for release workflows ([202d49b](https://github.com/maisaai/node-sdk/commit/202d49b4ae927a582b8b40c5e28c0593f17f5886))
* **ci:** enable for pull requests ([554bc43](https://github.com/maisaai/node-sdk/commit/554bc435bf0c35ccbdf153d9e3d90c92c8020075))
* **ci:** only run for pushes and fork pull requests ([411abab](https://github.com/maisaai/node-sdk/commit/411ababaa9cb6fd7c35bdb28891f6c2ccbfb4c6a))
* **ci:** only use depot for staging repos ([4016e99](https://github.com/maisaai/node-sdk/commit/4016e99d9c7d17947730fbae49b242e039753d5f))
* **ci:** skip lint on metadata-only changes ([70b2d9e](https://github.com/maisaai/node-sdk/commit/70b2d9e3abf1ea056f4ef8ff688ac86cc9331c8c))
* **ci:** skip uploading artifacts on stainless-internal branches ([2795477](https://github.com/maisaai/node-sdk/commit/279547720bd1f3359028096cded81cf15f8c0282))
* **ci:** upgrade `actions/github-script` ([26b60fa](https://github.com/maisaai/node-sdk/commit/26b60fa45899c30f717c5cf979e954422a81b771))
* **client:** do not parse responses with empty content-length ([2146bde](https://github.com/maisaai/node-sdk/commit/2146bde4a683159ec08b047d2a1227fbf0937242))
* **client:** minor internal fixes ([0924cf6](https://github.com/maisaai/node-sdk/commit/0924cf64d7d97376b782168885e8076fa410b1cc))
* **deps:** update dependency node-fetch to v2.6.13 ([fc9ab23](https://github.com/maisaai/node-sdk/commit/fc9ab238c88204698c6e2ecc66d17938e6fd66a4))
* do not install brew dependencies in ./scripts/bootstrap by default ([16353ab](https://github.com/maisaai/node-sdk/commit/16353ab3eff92358d99e16d11df1097c496e7965))
* **docs:** grammar improvements ([2966ec5](https://github.com/maisaai/node-sdk/commit/2966ec5dbf5ce47edd2814ca2645608706d56a27))
* **docs:** use top-level-await in example snippets ([cb12043](https://github.com/maisaai/node-sdk/commit/cb120430cdf94f774ec6d49500ad57d9fde5622a))
* **exports:** cleaner resource index imports ([#32](https://github.com/maisaai/node-sdk/issues/32)) ([b97f68a](https://github.com/maisaai/node-sdk/commit/b97f68a49579b5ef2ea73c4c7989ad7776b3585f))
* **exports:** stop using path fallbacks ([#33](https://github.com/maisaai/node-sdk/issues/33)) ([2282a64](https://github.com/maisaai/node-sdk/commit/2282a64da90602664be9ed9e57a7feec170bb88f))
* fix typo in descriptions ([bab57e2](https://github.com/maisaai/node-sdk/commit/bab57e2971bdc8786ada51ef0c992b05c1a852b0))
* improve publish-npm script --latest tag logic ([2a38060](https://github.com/maisaai/node-sdk/commit/2a38060be33b58fd6d298881574aed704834c2a8))
* **internal:** add aliases for Record and Array ([#37](https://github.com/maisaai/node-sdk/issues/37)) ([bff89be](https://github.com/maisaai/node-sdk/commit/bff89bef422def683f609dfe2b002a183d48e872))
* **internal:** allow the mock server port to be set with STAINLESS_MOCK_PORT ([9e054b2](https://github.com/maisaai/node-sdk/commit/9e054b254070f911f3254c37defea4a87be966de))
* **internal:** codegen related update ([007bf40](https://github.com/maisaai/node-sdk/commit/007bf403afeef5fdee5ee5c05bf82bace33301a5))
* **internal:** codegen related update ([ad7909c](https://github.com/maisaai/node-sdk/commit/ad7909c20b87c65781c087ea3e8e1976f0abd87e))
* **internal:** codegen related update ([ceb4f95](https://github.com/maisaai/node-sdk/commit/ceb4f952168bcdac7e1080ff682f0c2984bd33e4))
* **internal:** codegen related update ([59ebea3](https://github.com/maisaai/node-sdk/commit/59ebea3adcbae40ec8bb1c92de3b4899a298fbae))
* **internal:** codegen related update ([a0eff02](https://github.com/maisaai/node-sdk/commit/a0eff02ff7bb1962dcb3ca2403b0bb0bf3f6b21d))
* **internal:** codegen related update ([51d8020](https://github.com/maisaai/node-sdk/commit/51d80209aa956a6ea5fdc5b4cc485db8267be626))
* **internal:** codegen related update ([618a3aa](https://github.com/maisaai/node-sdk/commit/618a3aa37451f0a7724ca0d5f1655174eb737c32))
* **internal:** codegen related update ([#24](https://github.com/maisaai/node-sdk/issues/24)) ([987a383](https://github.com/maisaai/node-sdk/commit/987a383228232a8d312ec782149d80593ff9ff08))
* **internal:** codegen related update ([#27](https://github.com/maisaai/node-sdk/issues/27)) ([694c674](https://github.com/maisaai/node-sdk/commit/694c6745b6a2c622e597ce249746f26f62352f38))
* **internal:** fix incremental formatting in some cases ([d3f62b4](https://github.com/maisaai/node-sdk/commit/d3f62b4156c77ee1040f582bb0342af287fc11d9))
* **internal:** formatting change ([846300a](https://github.com/maisaai/node-sdk/commit/846300a68c239046ea51be523514afcf453a07d4))
* **internal:** ignore .eslintcache ([638db23](https://github.com/maisaai/node-sdk/commit/638db23350725cad7aca39687d46d02e36c027d7))
* **internal:** make base APIResource abstract ([eef6cdc](https://github.com/maisaai/node-sdk/commit/eef6cdcf1d8c744254b9cfb402b08b0f311cdce6))
* **internal:** more robust bootstrap script ([e6a079e](https://github.com/maisaai/node-sdk/commit/e6a079e6bbe8303c59c56ae38d9906c222bb75da))
* **internal:** move publish config ([151270b](https://github.com/maisaai/node-sdk/commit/151270b19b0ae322989ad049a1d0907beb000ab6))
* **internal:** move stringifyQuery implementation to internal function ([9b1e546](https://github.com/maisaai/node-sdk/commit/9b1e546ec712a2f2fdf239cd357694b674f6391b))
* **internal:** reduce CI branch coverage ([94b6670](https://github.com/maisaai/node-sdk/commit/94b6670329550c6a11860790403bd1b2cdcbd602))
* **internal:** remove .eslintcache ([34ca6c3](https://github.com/maisaai/node-sdk/commit/34ca6c3b4bbf8e0e59f54c2e9d64bfcfa3f6e98a))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([accffdb](https://github.com/maisaai/node-sdk/commit/accffdbb5b22c3ae02df8f4f50589dde5b6223ca))
* **internal:** remove extra empty newlines ([#30](https://github.com/maisaai/node-sdk/issues/30)) ([de5ba3f](https://github.com/maisaai/node-sdk/commit/de5ba3faf8605c664970d642cfa3d0d0b2aa3f57))
* **internal:** remove redundant imports config ([11a7948](https://github.com/maisaai/node-sdk/commit/11a794845c180a0760d5d67d7cdcb24c50571cfb))
* **internal:** tweak CI branches ([454a3b2](https://github.com/maisaai/node-sdk/commit/454a3b267522c0a8b0509ee9346a992668ed2b29))
* **internal:** update `actions/checkout` version ([1b1a007](https://github.com/maisaai/node-sdk/commit/1b1a007aff2bcd038f500b22330ecf22fdfcf8d7))
* **internal:** update comment in script ([ca84bfc](https://github.com/maisaai/node-sdk/commit/ca84bfcaed7cdd34b121078037ce616be6b5b1c6))
* **internal:** update gitignore ([ad82170](https://github.com/maisaai/node-sdk/commit/ad821701c21bca695d20b641f0a35a5c72626907))
* **internal:** update multipart form array serialization ([d2be5a4](https://github.com/maisaai/node-sdk/commit/d2be5a41f5983f7a06e3b0091df28e89494bab16))
* **internal:** upgrade babel, qs, js-yaml ([725bccb](https://github.com/maisaai/node-sdk/commit/725bccbe7669485dd8a30db75ac48c4304d39472))
* **internal:** upload builds and expand CI branch coverage ([730ed99](https://github.com/maisaai/node-sdk/commit/730ed99464ca7b778e0fa030eb6b7b6b9f26d61e))
* **internal:** use npm pack for build uploads ([c3fd8cd](https://github.com/maisaai/node-sdk/commit/c3fd8cd1f78b13db1ddc1f956a463649742d901f))
* make some internal functions async ([8ea868a](https://github.com/maisaai/node-sdk/commit/8ea868af815cf48c7df8a2c8930b484903e9db1c))
* mention unit type in timeout docs ([d5641f8](https://github.com/maisaai/node-sdk/commit/d5641f81cf1e6ee1399a6055133f888da1db620c))
* rebuild project due to codegen change ([#16](https://github.com/maisaai/node-sdk/issues/16)) ([df79224](https://github.com/maisaai/node-sdk/commit/df79224bb82acaee52c77de6bbc473be110e97d2))
* rebuild project due to codegen change ([#18](https://github.com/maisaai/node-sdk/issues/18)) ([036b17d](https://github.com/maisaai/node-sdk/commit/036b17d968f6a3171cd2994a004d8d8bfad79af5))
* rebuild project due to codegen change ([#19](https://github.com/maisaai/node-sdk/issues/19)) ([c8a77bf](https://github.com/maisaai/node-sdk/commit/c8a77bff486ef066c96de6d35246efa96212dbbf))
* rebuild project due to codegen change ([#20](https://github.com/maisaai/node-sdk/issues/20)) ([424c10e](https://github.com/maisaai/node-sdk/commit/424c10e00a0cd21b51295535d875a57b6330c877))
* rebuild project due to codegen change ([#21](https://github.com/maisaai/node-sdk/issues/21)) ([31e045e](https://github.com/maisaai/node-sdk/commit/31e045e7b6edf51a329a2687ced65d2e278a6cb0))
* rebuild project due to oas spec rename ([#15](https://github.com/maisaai/node-sdk/issues/15)) ([9d62f64](https://github.com/maisaai/node-sdk/commit/9d62f6432e15ec16cdcb8b4f8e62ba54a6df3ba0))
* remove redundant word in comment ([#23](https://github.com/maisaai/node-sdk/issues/23)) ([487943a](https://github.com/maisaai/node-sdk/commit/487943aa4079151535a7fd19ea4246cb1607df2b))
* **test:** do not count install time for mock server timeout ([c86bbfc](https://github.com/maisaai/node-sdk/commit/c86bbfc5343ec69a6ae193d484f8e8039cb3c69e))
* **tests:** bump steady to v0.19.4 ([b5d7d9f](https://github.com/maisaai/node-sdk/commit/b5d7d9f6eb306f51af0ae4c4ace9feaebdb9ea49))
* **tests:** bump steady to v0.19.5 ([f72c552](https://github.com/maisaai/node-sdk/commit/f72c5526b6ed5cea736e3f33677deb2fcaed8b24))
* **tests:** bump steady to v0.19.6 ([ca75a49](https://github.com/maisaai/node-sdk/commit/ca75a498a0791a74d12bc54085bad27ecaccb238))
* **tests:** bump steady to v0.19.7 ([ad262cf](https://github.com/maisaai/node-sdk/commit/ad262cf972b2171d2546ff2dbac4f92aaff85595))
* **tests:** bump steady to v0.20.1 ([30bf325](https://github.com/maisaai/node-sdk/commit/30bf325267b8c555aea1777fb25876f01ac1ed29))
* **tests:** bump steady to v0.20.2 ([7f5ab97](https://github.com/maisaai/node-sdk/commit/7f5ab979d3b67b1e34df3be7d04f8f8e906df29d))
* **tests:** bump steady to v0.22.1 ([eceb8f0](https://github.com/maisaai/node-sdk/commit/eceb8f02dc30bdc1594ddcb37a386015828f36ce))
* **tests:** improve enum examples ([#40](https://github.com/maisaai/node-sdk/issues/40)) ([50475c4](https://github.com/maisaai/node-sdk/commit/50475c4c257096ca8c8b06d6cdb970f383c1b3bf))
* **types:** nicer error class types + jsdocs ([#26](https://github.com/maisaai/node-sdk/issues/26)) ([eeae75a](https://github.com/maisaai/node-sdk/commit/eeae75a631ce110cada808b8ad0609b0553a7738))
* update @stainless-api/prism-cli to v5.15.0 ([15c1948](https://github.com/maisaai/node-sdk/commit/15c19485981e9a85f9d9a8e22fce255abcc60708))
* update CI script ([695a63b](https://github.com/maisaai/node-sdk/commit/695a63b5c02e36b9b2469986dd4d27b923b83821))
* update mock server docs ([ec98593](https://github.com/maisaai/node-sdk/commit/ec985936ba0034dd1a2f5afd03feea8c064e8f20))
* update placeholder string ([194604e](https://github.com/maisaai/node-sdk/commit/194604e309f974a187879e781151eca87c3854f8))


### Documentation

* add examples to tsdocs ([c89ae8d](https://github.com/maisaai/node-sdk/commit/c89ae8d485ad35edf887a691dba66f1730f7f714))
* **readme:** fix typo ([9d4ca9a](https://github.com/maisaai/node-sdk/commit/9d4ca9a8d674e96e4897fb4a54c66664e5493bb6))
* remove suggestion to use `npm` call out ([#22](https://github.com/maisaai/node-sdk/issues/22)) ([0331bba](https://github.com/maisaai/node-sdk/commit/0331bbaf7ace3113e9bf4d2ba1220813a40e6a28))
* update examples ([c2857cd](https://github.com/maisaai/node-sdk/commit/c2857cd7168a6ab787ecf0c83883e9cda18d2075))


### Refactors

* **tests:** switch from prism to steady ([31ba293](https://github.com/maisaai/node-sdk/commit/31ba2930540fe4c6b256cf0021f3c6ea81722bd7))
* **types:** replace Record with mapped types ([affc927](https://github.com/maisaai/node-sdk/commit/affc92743d1fac0b927a20f155ef51d6df4c88a8))

## 0.1.0-alpha.2 (2024-03-05)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/maisaai/node-sdk/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* update via SDK Studio ([#10](https://github.com/maisaai/node-sdk/issues/10)) ([ab3b880](https://github.com/maisaai/node-sdk/commit/ab3b88079f8f25d6bee96802011210b807af12f1))

## 0.1.0-alpha.1 (2024-02-20)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/clibrain/node-sdk/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* Add initial Stainless SDK ([9095781](https://github.com/clibrain/node-sdk/commit/9095781b1f87b07f987da0e5c2d23763cee0bda0))
* Add initial Stainless SDK ([eee01d7](https://github.com/clibrain/node-sdk/commit/eee01d787ae413b6c5e482b15769b5f505234e2d))
* Add initial Stainless SDK ([2a3bcae](https://github.com/clibrain/node-sdk/commit/2a3bcae8de28f84c113866eb4629a9731c994542))
* create default branch ([a1d7847](https://github.com/clibrain/node-sdk/commit/a1d78471c846230684211972601419220eb262ce))
* update via SDK Studio ([#6](https://github.com/clibrain/node-sdk/issues/6)) ([f4d6acb](https://github.com/clibrain/node-sdk/commit/f4d6acb0266ff336fd3c9845f33aec0dfb190b5f))


### Chores

* go live ([#1](https://github.com/clibrain/node-sdk/issues/1)) ([ee91802](https://github.com/clibrain/node-sdk/commit/ee9180238666614e20e1e5d8f43c57dde62e5b59))
* go live ([#3](https://github.com/clibrain/node-sdk/issues/3)) ([f8556ed](https://github.com/clibrain/node-sdk/commit/f8556ed369eb2fb568b8c093659ec3905c2d2c7e))
* update branch ([#9](https://github.com/clibrain/node-sdk/issues/9)) ([2bd876f](https://github.com/clibrain/node-sdk/commit/2bd876f50220f4971f978ad735171b94f4b6d758))
