'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ec029fba479d6c1208eea98dbc24b256",
".git/config": "0c019e9af37925b7df5373b82a12eb1a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "42b3d73d24e708c92a71225e7e20e8b9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a15cef739d90acba3fdb47e3959eac8c",
".git/logs/refs/heads/main": "a880de9916740b6430d48de21149f916",
".git/logs/refs/remotes/origin/main": "2fea8fc3b9dcba34ab16b5145192ebda",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/02/555dd66ab58af0de31f14717fcfe128231effe": "dcbbcdfe02cb4ea3e54e6ef850059d67",
".git/objects/03/a37fbeaa76397a711d6cb5c94587dabd293795": "07e0ab316fdebdf4e59f795114ef2676",
".git/objects/04/43f8ea7bb201db90797786d413991b08dc7e3d": "2bd2e2036044e61e515c51731b061fad",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/b4aff6a1e0ee8e5c27d792f705462399f94638": "0f6f20df5635ced366d07fb7989328c4",
".git/objects/08/c40d9987c9de5bf16e5b9d7d3de8c8f633bc4c": "d6869659527bc40e13be70826ce7ada6",
".git/objects/0d/49869935867a1164d33e0f6cd071d3f52bef89": "4cbb4737cb05ba4ce08318dbb0099564",
".git/objects/0f/97a6c516d5eb24b7b9448ad3c1f28336497526": "35df5b81fe596406596c1d29c4c6bc15",
".git/objects/14/10b3761a10983d989040e285a5a05df107426d": "661ad9e6ed5627a424351bc63234bf8c",
".git/objects/15/a729652c92f4f856a1486b8464cf3d0fe0545d": "df0cfefbfb4f8c38554502701acd2bad",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1e/0f3109ad2fccb42dc677a36ba186b4c49700a3": "19e7806980bac56550cb3dcbe6a7e34f",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/21/6717d4773f177a2d2742e0c3ae2de783c9e2b2": "e970e6e3181d5f657d916395ac25b1ca",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/8d60b8c63145152aca045a6d072a384dcd0f4e": "1f32c757bf7c37ae7929da9e6d20e8d4",
".git/objects/27/3d6defb2f6f6ac6e82b6a4d7be2a9f214680b1": "5ff599deee46d3729d0b95659adfb08e",
".git/objects/2b/709341681b11c75a46cdcd52b04ba201707819": "3225bccdf38a148697df01a161772f62",
".git/objects/2b/f1f9fdc82df2f1cfc631380e880ffbec70e393": "3eda010a3c926ef95f9589a1fb899411",
".git/objects/2e/0af4905365140527cf068dfc0141adf377d745": "f2742f058b0602b3c2eda1c55ef1f06e",
".git/objects/30/2b8991135041237465b23801c0997308c2bec6": "fb3f91fa9b5ad19d079e0424627e0f1a",
".git/objects/31/39dc7cf301ea55d8f5e781d98d5c58a6ee1ccd": "e26ff2b827306e1115fe3796b3329bdc",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/3f923c6a46d81268d5c92b75bdcc4eb4ee2dd8": "fbe08b66ac1dab5ea9e597e702304e8a",
".git/objects/36/8bf1724740a8dde6d4b4a466d48f20f783a8c9": "13ce332db39e66e8f4f69e2c222f3e75",
".git/objects/36/d8ff7f6981de60628ed03bb9632c5f7ac1d44c": "6a462bf2f3ef3e782f031b2b0ebbf46c",
".git/objects/37/d1a1fa0f05cdc4c6bb1d5ae386e8f948633122": "2d1369f594939113fba3897cee2f0f02",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/00bb717c9a5fdefd9b1fe7f768ece945f432bd": "d390c8b6606a2ab1c888b725e9b5e425",
".git/objects/3e/38e39635cc3f04ceff691af64dbed9ddfceb9e": "d467013de6ee7b9ebce1fa1326c12185",
".git/objects/3e/8d86a1d43137493d15736ea744675337b12693": "6130aa39f00bfe9ef47893b7349c08ab",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/395fce835626ffe6714cd84c18f0acfd742659": "9b923a28b8bf7cad24abf408b2422bb9",
".git/objects/42/658b990afd4c2f7ffaf6a4f83b415ff4b5eed6": "f34e9698b23bc46661f387b983a2eccb",
".git/objects/43/b1ab101170ce878d86de32640a1705204b044b": "18f899a47e2062fef43143d1a21642e4",
".git/objects/43/ec0667daa112f1e3e7651a3f78d738d7c4f3c3": "7adb66c89e3280cab009c3cd81216f7a",
".git/objects/44/7946890d016b3c0d9788bc5ee69636476f1eb5": "9e6caca9b6ed8a78317bf603845e3a72",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/49/d0afb8d0b378bfdceb9fa1bafba389a2519946": "7a56d6eb3c61c778d964ca9633a97c80",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4a/82891a67160169ff17a55ffb845103b35506c4": "b2704934f5d5b108a10eaf2249230fd2",
".git/objects/4a/9a92c70006b49f5c88fa9c7657c265d5471d12": "0736739cf456983f36f9d85641765bde",
".git/objects/52/00ed0cfed624b0da312558900e75a991a2910b": "83eedda6b707ef990fa359c923dc1368",
".git/objects/55/858399addab6da66a3ac0978ef58a84b37fb97": "383b34d9a1bdd6cc06dccbe568c7e568",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/57/53d8dcd7cd2dffdd81442d56af0e9208e6ad8f": "d5bb43347b809ce3eff08ae9cf53f0c1",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/18759564525b7dbe36744883e359d7807ee2a3": "757a09deff1c53908aec69b5d8c8f57c",
".git/objects/5a/32065a0123a7d745fcc2fcafd34a770502c654": "be8b1443bb8ba840d4e3abaeacba591e",
".git/objects/5a/410a49a8a856e257d072b7061e64535e976f2a": "dcf9b96a824efbd463a9c04641ef9928",
".git/objects/5b/5ebf704e610d4b81bc27b438f7a232afeb9c2b": "3f0174f460cffc6b7ed9933d086725ae",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/60/40a3347323d6ab3e35795bd7272afaf8e28674": "52cc31d9bb13ec9f75f79863959958d8",
".git/objects/63/a63d81215a39b66e1775f7345c9e800036e3e5": "fdecec3493b154c1efb95e374d2adbfc",
".git/objects/64/8c1795dee5c328e85b8eec47459ace6c6b3afc": "a062775540eed7e810765a8d0e06a493",
".git/objects/69/70844f595a8641b2f2f586e293da344cc35706": "12ccfd8efffcf4eed4f82184ff347e9a",
".git/objects/6b/dec411c9e62fb54c1e09acceecec63cf1ad68b": "da246abc3318e203408d1b5f315aeabe",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/d9613b378e766bbfde4be8d61325ad6b8d0834": "aa4ed8a831552b1212120b38108086c7",
".git/objects/6f/84ae23cc6a117f7968ea015c13d8ef7e5ecbf7": "79b84bd03fabb85e9f9e5fd8c162f866",
".git/objects/73/07a2cf149185ea277699f29eef3baf8eb8ba3f": "9067d8642e605ddbd8459edb94c0ff46",
".git/objects/75/884df87c2d2c5d8edc38cadd463fc9103772fa": "d42e200459b24db31c6d0f6030ee4990",
".git/objects/78/784dfcf442678fb957c96df46ede8a20ccedb5": "3a278c07836fc87b87a84ffc143dbf48",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7e/f9e0eb83f6722e87caa7b1cdf386b962880a67": "6a2c5d57147f7f35b6c01794469b7349",
".git/objects/80/caed799e118fcefa7a11781e43ff1d84ef1a87": "80596ec682746fb8752546587e3409e9",
".git/objects/80/d99f5608cafe43404377e792bb85179fb39a71": "32d4adfeb9e5196d8a7baf23dbccc4b6",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/328521c1b08243aaad6a5f76c26158dc65c92a": "1bb5a2b79ea495219ec18efffb8f9dbe",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/a46f67d6fff9a92c9b6bfa71efe4d9b2888c1b": "673182cdc1e868ee1ac9778b6b21e55a",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/ffe839b36d4c600c9d9d3de8ac6472d9d52fd8": "71d9335cc3fae36c2ddefe6b4f82563e",
".git/objects/8a/0aca6498b7460e20b21a7ab3e4557a0e3cb836": "f24b761b8a871400c195dda5c954d186",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/8e/5098a233cffda60f38b31488b2c9ca6c22913d": "3f8cf34a815a3d572b1fcfeb41818d66",
".git/objects/8e/e3ecddc8e2432df0df13d94f3e27f85ef35e6e": "177589b428abdf1e1ec058ce10416e52",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/e9dfa9ec021907d9eedf0c1bde3c4318aab379": "16cb6e268bea719b8267287c7bd655c7",
".git/objects/91/f88d552200ee1597ffa3dc0f5beaf24640a12b": "024fb1f31090d68cc647da926456ab77",
".git/objects/96/7dbab3a7ca77dd1133bc0543b5190ab4a37698": "4b60f55fc993cc5ea80989990434793c",
".git/objects/97/0f963ed681095d004b1db86001b84884904fd8": "5ef1a6b78d4dd5773c877101e9436c84",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/9e/bdbc43cc004993aab00bb9d5717dc3ca218636": "8f7cc4891ee2cf0bd138a4b43d825e40",
".git/objects/a1/030ffa6b703f305584003aa7f29314feb72dfb": "48e758c96a90e7af4d842b02cb7f2c0c",
".git/objects/a3/b5760ac12349ca57ca3b6a97f6c8df17f48001": "7e95c502debc239753d6357f95bd715b",
".git/objects/a4/c52fe8a9c8fbb76b6d56ece1e3d226edf70866": "33bdf460510f7de0c49ca9ec431bbe4e",
".git/objects/a5/602932cd50efd939a4dedfb8c2fc9598b5bc93": "3c5a0daa706d82ce72bc5a2598ed71f1",
".git/objects/a9/66a362fb94564bf69d4aaed2d4e3871c129f27": "a84c1d2abadd51760d1b55074e5f21b7",
".git/objects/a9/c55889fa684c6da28a4d06b63743e31a3779c5": "3f621ad718ecbbc8de77e98e479b58fb",
".git/objects/aa/42b8f03865ce5a367d77610f7bf6767112ecdd": "d5adab7fa7c42514e53ce3569e11784f",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ac/1e4ad72589a84eba20a90c6a8fbcb05299d7ec": "ea442c8f48fcf8685d805534e8c198d8",
".git/objects/ac/5259033a454fc0e5509f193fd32f479a7ece3c": "afd597e158e1791cb6af0fed47fcfc11",
".git/objects/b1/06a79eb1c5b96b26e72cfd842564380b6d5254": "be8ee16488ac6c91caf8c271991a130d",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/39846d8095aecd267f7a516e71c83c9eba9015": "4675643a6645223ffa5ee10de041a269",
".git/objects/b3/751a7225d0b0e23e5dd31559c9362d672fdbc7": "49d1a15d5bd0e2767bfe3562b927feae",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/0ea67b56bf1066fe90eee4bd10c686a7ce7ac4": "9ba1fb902bbcc6b9af0dd4098aebada3",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/be/8bd0be41cf27ffe19cc4f1f1b4a710d3d3d0e5": "b8732148f16d11cf5b85566607425669",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c5/1eead59fc3c8011a7e7de4036ee031ec7e3a6f": "66b5702345b41aeacfa58bf1dcbb1ab6",
".git/objects/c6/91f582344690850f0dc43ca58a0f8c60e923e9": "ece9673878dfb682bf77f35d8d41034d",
".git/objects/c7/13445e69e094c8cdfe6cf3c6955763bd9275d0": "52fc44cdaba90a5712d7414c25ce41ae",
".git/objects/c7/6a7c6c05a84245f25602f38aab68305aa6e9ab": "5011242281b2d9a44821124efaff510d",
".git/objects/c7/7a4a8f82b61b0f277d4d836d3aee55f4aea628": "cac22d1b745435b4cd5cd478b5accdaf",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/e2d0f051140d1c83a6673a1d06b5f3b5fb0a3a": "d628f259158df970e7bcd9eab49b0a1a",
".git/objects/cd/c5aace02dfe6cb17e42946402891ebd1052c1e": "ae64ad8c7aee90514432222e40926e3b",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/036c2fb9cddbc5d2e1bfaf2bc7caf0598057d1": "38b895100e3a643760791f54dd96c928",
".git/objects/de/1ed353beb1fee6195695e0ca4379207612e75e": "8927688c5b7f490010904407cd167518",
".git/objects/e0/927a2d6b7f01d4d37f559aa474d4566200d8df": "7eeba77c3bcc45289f0ff883b6137093",
".git/objects/e1/86e356c5658ec3c942b8ef487fdbc109a7d4b6": "a68568546a8e100ca77ece52217cff60",
".git/objects/e1/ed2ec278a66946d7cab85ce6b907c9c02331c1": "58e0745c9b140ec7cf1539fc51cc463a",
".git/objects/e2/08c0cd94267fb3b29dc79a1b5c0b49d93770c2": "17e4c409fece76571cb67d50b8c3b5ec",
".git/objects/e2/a998049c5f2452897bc910c0badbf4d5b37be5": "252ce896677b5aeb1a5d8405ba421da1",
".git/objects/e3/35e8f7fe37571035b0f38e5a6b0885e78c4b88": "be2a32295f298a7de351bb4ab6bcfbd6",
".git/objects/e6/2e1926831965eb2ada068b3c9c0085bea97e4b": "d573a7c097b91132764cc6496ad71c92",
".git/objects/e9/4848c6ffcff22a7c4c4e0c941101ccfa3f5487": "1fb1e9688d6329a0ac8cb25ea7fc288b",
".git/objects/ea/0ab081ac3bd5bb563aa77bdfc9ebf7025085f9": "2f67d12f8f2cae40d3fb5f9a9bee82b4",
".git/objects/eb/87606c790c0b33382bdf4ff1c00ea08a6053bb": "21693e1002cac9da4c4fef442d21d3da",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c0ec061cbbe98c61e29fd3861336ef81a594b7": "f5cbcc74ec5f49467849b0a07b6b4950",
".git/objects/ed/6649998a37c19ef621dfbff082af97f29803f4": "53fe8b6e320dace789d07b3cfe859c27",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/f5ad8c496d45420427c122290ea983d6808624": "cf0007281ee381ee848443f5c04fdde2",
".git/objects/f1/03fac58b3cb932ad6a61d46ff7b4518dd60d06": "f8a85e6942907206c535bc972e895d46",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/2432d44e8562ff0fa09a30935d2ed94c44c36a": "b2b472e67784fbebb628b06c8c3d55c2",
".git/objects/f2/edab9b8165bce1fee4eb1f1d32093b64423eea": "6b64130e901ec28f0f8d5e8ed11a7e6e",
".git/objects/f4/0673c093c6b4d56cca163f18627c7f00adb9a6": "b15a0193406225308fc8b97e3dd0869a",
".git/objects/f4/0a7fa09511bf66068551ae2bbaf1a2ab5769be": "9c5ff3b9c6a703090de3fe36bdd519cc",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/f5/aae2c4ca41d6b81b60821fd1c17d59e5309c74": "09b886f6cc111a05297ccf044fb436a7",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "b59a6def0fa810b12d8e8db5eda6a5cf",
".git/refs/remotes/origin/main": "b59a6def0fa810b12d8e8db5eda6a5cf",
"assets/AssetManifest.bin": "b39b6080deb03db62b0721d43093f7f4",
"assets/AssetManifest.bin.json": "d06b22b8bde28cc94f5f9de5c7b2416a",
"assets/AssetManifest.json": "ebefcb62525a8d537a6e965da588f7ea",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/cpp.svg": "d9496ae833ab0a61133dac14fcbe7d29",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/email.svg": "13a238cf2b82ebadf4b09d1ed7e8a7a3",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/java.svg": "c1842155f0151aebae5bc949bbbc51cf",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/mysql.svg": "0cb2d6a4ee032880703fed4fa80e4f3a",
"assets/assets/icons/photo_profile.svg": "6144c5200721004808b7efcb36c70faa",
"assets/assets/icons/redis.svg": "07de0dac6d9fcc4fce26a4cf6505530b",
"assets/assets/icons/spring_boot.svg": "8eb3d0cb697805dcc58b135e510ad3eb",
"assets/assets/icons/tomcat.svg": "0a71147ef9b73e1c0a72ab6f795b7ecf",
"assets/assets/images/background_dark.png": "f0d5c26bf27351546462dc345b6e2e3f",
"assets/assets/images/background_light.png": "450ab25803d62c15ae678d937a000c1d",
"assets/assets/images/splash.png": "61ef95707bc8e9cfbfbeb2b1cf5708c6",
"assets/assets/images/splash_android_dark.png": "a17c99d57fe935937d7ed9987e9c00aa",
"assets/assets/images/splash_android_light.png": "0a57057c00d93cee029a723a2fe9a409",
"assets/assets/images/splash_image.png": "971a46a9ba209ed5a3c99c6bb12be090",
"assets/assets/images/triangle.png": "086ab5ca50d3e558e3307ff009975083",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "63958cd25ae8eb88241ed981aa41e6eb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "088d57bc5172ba21afd70fcd83429955",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00a0d5a58ed34a52b40eb372392a8b98",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1dec37ae6f66ff59b6c6529e15cfbe68",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "32a15f7713f52ace70814eec9f775ec2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "f50c0d31ce3b22882cedf4a8f8ec42de",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "09f763a931e25a86b10ec8dbd404ef78",
"/": "09f763a931e25a86b10ec8dbd404ef78",
"main.dart.js": "3963643dcd897bec75b6e5003066aad7",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"splash/img/dark-1x.png": "1ca1e9f687f18b2cbfab9f91b9ea2519",
"splash/img/dark-2x.png": "bc5c3fed88a20a38ee784be455a7d09d",
"splash/img/dark-3x.png": "43b9fe2cea06a4e8eb67f35e4a7611d6",
"splash/img/dark-4x.png": "352564d0daa6c222008427de08212cb0",
"splash/img/dark-background.png": "f0d5c26bf27351546462dc345b6e2e3f",
"splash/img/light-1x.png": "1ca1e9f687f18b2cbfab9f91b9ea2519",
"splash/img/light-2x.png": "bc5c3fed88a20a38ee784be455a7d09d",
"splash/img/light-3x.png": "43b9fe2cea06a4e8eb67f35e4a7611d6",
"splash/img/light-4x.png": "352564d0daa6c222008427de08212cb0",
"splash/img/light-background.png": "450ab25803d62c15ae678d937a000c1d",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
