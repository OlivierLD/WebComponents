// Make a GraphDisplay compatible payload from a /astro/declination REST endpoint

let at = '2019-12-18T20:02:09';
let mapDecl = {"2019-12-13T20:02:09":-23.164013669455684,"2019-12-13T21:02:09":-23.16671186853206,"2019-12-13T22:02:09":-23.169396759662956,"2019-12-13T23:02:09":-23.172068340265724,"2019-12-14T00:02:09":-23.174726607851966,"2019-12-14T01:02:09":-23.177371559939417,"2019-12-14T02:02:09":-23.180003193963852,"2019-12-14T03:02:09":-23.182621507454744,"2019-12-14T04:02:09":-23.185226497948957,"2019-12-14T05:02:09":-23.18781816290086,"2019-12-14T06:02:09":-23.19039649985649,"2019-12-14T07:02:09":-23.192961506369016,"2019-12-14T08:02:09":-23.195513179911224,"2019-12-14T09:02:09":-23.19805151804814,"2019-12-14T10:02:09":-23.200576518349635,"2019-12-14T11:02:09":-23.203088178306512,"2019-12-14T12:02:09":-23.205586495501514,"2019-12-14T13:02:09":-23.208071467521627,"2019-12-14T14:02:09":-23.210543091876534,"2019-12-14T15:02:09":-23.213001366165724,"2019-12-14T16:02:09":-23.215446287994933,"2019-12-14T17:02:09":-23.217877854891558,"2019-12-14T18:02:09":-23.220296064471476,"2019-12-14T19:02:09":-23.22270091435888,"2019-12-14T20:02:09":-23.22509240209959,"2019-12-14T21:02:09":-23.227470525328883,"2019-12-14T22:02:09":-23.22983528168701,"2019-12-14T23:02:09":-23.232186668739345,"2019-12-15T00:02:09":-23.234524684139036,"2019-12-15T01:02:09":-23.236849325543425,"2019-12-15T02:02:09":-23.239160590538685,"2019-12-15T03:02:09":-23.24145847679596,"2019-12-15T04:02:09":-23.243742981990955,"2019-12-15T05:02:09":-23.246014103729003,"2019-12-15T06:02:09":-23.248271839700024,"2019-12-15T07:02:09":-23.250516187598848,"2019-12-15T08:02:09":-23.252747145050748,"2019-12-15T09:02:09":-23.254964709764405,"2019-12-15T10:02:09":-23.257168879454422,"2019-12-15T11:02:09":-23.259359651767337,"2019-12-15T12:02:09":-23.261537024430062,"2019-12-15T13:02:09":-23.263700995178034,"2019-12-15T14:02:09":-23.265851561678872,"2019-12-15T15:02:09":-23.267988721679643,"2019-12-15T16:02:09":-23.27011247293561,"2019-12-15T17:02:09":-23.272222813135954,"2019-12-15T18:02:09":-23.274319740049663,"2019-12-15T19:02:09":-23.276403251452848,"2019-12-15T20:02:09":-23.278473345057048,"2019-12-15T21:02:09":-23.28053001865362,"2019-12-15T22:02:09":-23.28257327003758,"2019-12-15T23:02:09":-23.284603096947404,"2019-12-16T00:02:09":-23.286619497193524,"2019-12-16T01:02:09":-23.288622468595943,"2019-12-16T02:02:09":-23.290612008914962,"2019-12-16T03:02:09":-23.292588115986817,"2019-12-16T04:02:09":-23.29455078765273,"2019-12-16T05:02:09":-23.29650002169828,"2019-12-16T06:02:09":-23.298435815983115,"2019-12-16T07:02:09":-23.300358168372643,"2019-12-16T08:02:09":-23.302267076679566,"2019-12-16T09:02:09":-23.304162538786706,"2019-12-16T10:02:09":-23.30604455258568,"2019-12-16T11:02:09":-23.30791311591455,"2019-12-16T12:02:09":-23.30976822668228,"2019-12-16T13:02:09":-23.311609882807343,"2019-12-16T14:02:09":-23.313438082153983,"2019-12-16T15:02:09":-23.31525282265819,"2019-12-16T16:02:09":-23.317054102264674,"2019-12-16T17:02:09":-23.318841918866948,"2019-12-16T18:02:09":-23.32061627042783,"2019-12-16T19:02:09":-23.32237715492138,"2019-12-16T20:02:09":-23.32412457026834,"2019-12-16T21:02:09":-23.325858514462375,"2019-12-16T22:02:09":-23.32757898550355,"2019-12-16T23:02:09":-23.329285981345336,"2019-12-17T00:02:09":-23.33097950000966,"2019-12-17T01:02:09":-23.332659539526734,"2019-12-17T02:02:09":-23.33432609788177,"2019-12-17T03:02:09":-23.33597917312543,"2019-12-17T04:02:09":-23.382955082117885,"2019-12-17T05:02:09":-23.33924486648326,"2019-12-17T06:02:09":-23.340857480697917,"2019-12-17T07:02:09":-23.34245660405632,"2019-12-17T08:02:09":-23.344042234610068,"2019-12-17T09:02:09":-23.345614370474152,"2019-12-17T10:02:09":-23.347173009774995,"2019-12-17T11:02:09":-23.348718150597325,"2019-12-17T12:02:09":-23.350249791089265,"2019-12-17T13:02:09":-23.351767929411693,"2019-12-17T14:02:09":-23.353272563683934,"2019-12-17T15:02:09":-23.354763692089627,"2019-12-17T16:02:09":-23.356241312822792,"2019-12-17T17:02:09":-23.357705424039935,"2019-12-17T18:02:09":-23.359156023960043,"2019-12-17T19:02:09":-23.36059311081249,"2019-12-17T20:02:09":-23.36201668279106,"2019-12-17T21:02:09":-23.363426738150768,"2019-12-17T22:02:09":-23.364823275157836,"2019-12-17T23:02:09":-23.366206292043913,"2019-12-18T00:02:09":-23.36757578710079,"2019-12-18T01:02:09":-23.36893175863315,"2019-12-18T02:02:09":-23.37027420491087,"2019-12-18T03:02:09":-23.371603124264443,"2019-12-18T04:02:09":-23.372918515035067,"2019-12-18T05:02:09":-23.37422037553478,"2019-12-18T06:02:09":-23.37550870413048,"2019-12-18T07:02:09":-23.376783499204766,"2019-12-18T08:02:09":-23.378044759109436,"2019-12-18T09:02:09":-23.379292482251426,"2019-12-18T10:02:09":-23.380526667051953,"2019-12-18T11:02:09":-23.38174731190521,"2019-12-18T12:02:09":-23.382954415259068,"2019-12-18T13:02:09":-23.38414797557457,"2019-12-18T14:02:09":-23.385327991287774,"2019-12-18T15:02:09":-23.38649446088813,"2019-12-18T16:02:09":-23.38764738287894,"2019-12-18T17:02:09":-23.388786755737936,"2019-12-18T18:02:09":-23.389912577996796,"2019-12-18T19:02:09":-23.391024848200015,"2019-12-18T20:02:09":-23.39212356487047,"2019-12-18T21:02:09":-23.393208726580873,"2019-12-18T22:02:09":-23.394280331919582,"2019-12-18T23:02:09":-23.395338379452088,"2019-12-19T00:02:09":-23.396382867795463,"2019-12-19T01:02:09":-23.397413795580025,"2019-12-19T02:02:09":-23.398431161417413,"2019-12-19T03:02:09":-23.399434963967025,"2019-12-19T04:02:09":-23.40042520190384,"2019-12-19T05:02:09":-23.401401873883437,"2019-12-19T06:02:09":-23.40236497861001,"2019-12-19T07:02:09":-23.403314514802492,"2019-12-19T08:02:09":-23.40425048116191,"2019-12-19T09:02:09":-23.40517287643762,"2019-12-19T10:02:09":-23.406081699392292,"2019-12-19T11:02:09":-23.40697694877356,"2019-12-19T12:02:09":-23.407858623374697,"2019-12-19T13:02:09":-23.408726722004147,"2019-12-19T14:02:09":-23.409581243455342,"2019-12-19T15:02:09":-23.410422186567402,"2019-12-19T16:02:09":-23.41124955019306,"2019-12-19T17:02:09":-23.41206333317289,"2019-12-19T18:02:09":-23.412863534391086,"2019-12-19T19:02:09":-23.413650152746314,"2019-12-19T20:02:09":-23.414423187125188,"2019-12-19T21:02:09":-23.415182636458336,"2019-12-19T22:02:09":-23.415928499689088,"2019-12-19T23:02:09":-23.4166607757525,"2019-12-20T00:02:09":-23.417379463622957,"2019-12-20T01:02:09":-23.418084562291366,"2019-12-20T02:02:09":-23.4187760707391,"2019-12-20T03:02:09":-23.41945398798659,"2019-12-20T04:02:09":-23.420118313070187,"2019-12-20T05:02:09":-23.420769045018464,"2019-12-20T06:02:09":-23.421406182898227,"2019-12-20T07:02:09":-23.422029725791432,"2019-12-20T08:02:09":-23.422639672773784,"2019-12-20T09:02:09":-23.4232360229582,"2019-12-20T10:02:09":-23.423818775472025,"2019-12-20T11:02:09":-23.424387929438762,"2019-12-20T12:02:09":-23.424943484016513,"2019-12-20T13:02:09":-23.42548543837893,"2019-12-20T14:02:09":-23.426013791696107,"2019-12-20T15:02:09":-23.42652854317258,"2019-12-20T16:02:09":-23.427029692026665,"2019-12-20T17:02:09":-23.42751723747639,"2019-12-20T18:02:09":-23.427991178771205,"2019-12-20T19:02:09":-23.42845151517542,"2019-12-20T20:02:09":-23.428898245953093,"2019-12-20T21:02:09":-23.429331370399833,"2019-12-20T22:02:09":-23.42975088782478,"2019-12-20T23:02:09":-23.43015679753907,"2019-12-21T00:02:09":-23.43054909888283,"2019-12-21T01:02:09":-23.430927791210575,"2019-12-21T02:02:09":-23.431292873879702,"2019-12-21T03:02:09":-23.431644346275153,"2019-12-21T04:02:09":-23.431982207796352,"2019-12-21T05:02:09":-23.43230645784649,"2019-12-21T06:02:09":-23.432617095855075,"2019-12-21T07:02:09":-23.43291412126607,"2019-12-21T08:02:09":-23.43319753352854,"2019-12-21T09:02:09":-23.433467332115967,"2019-12-21T10:02:09":-23.43372351651637,"2019-12-21T11:02:09":-23.43396608622397,"2019-12-21T12:02:09":-23.43419504075639,"2019-12-21T13:02:09":-23.434410379645254,"2019-12-21T14:02:09":-23.434612102429593,"2019-12-21T15:02:09":-23.434800208670445,"2019-12-21T16:02:09":-23.434974697942707,"2019-12-21T17:02:09":-23.43513556982991,"2019-12-21T18:02:09":-23.4352828239361,"2019-12-21T19:02:09":-23.435416459878898,"2019-12-21T20:02:09":-23.435536477285947,"2019-12-21T21:02:09":-23.43564287580368,"2019-12-21T22:02:09":-23.435735655092135,"2019-12-21T23:02:09":-23.435814814822503,"2019-12-22T00:02:09":-23.435880354683142,"2019-12-22T01:02:09":-23.435932274376032,"2019-12-22T02:02:09":-23.43597057361533,"2019-12-22T03:02:09":-23.435995252130972,"2019-12-22T04:02:09":-23.43600630966617,"2019-12-22T05:02:09":-23.43600374597765,"2019-12-22T06:02:09":-23.435987560836317,"2019-12-22T07:02:09":-23.435957754026198,"2019-12-22T08:02:09":-23.435914325345966,"2019-12-22T09:02:09":-23.43585727460698,"2019-12-22T10:02:09":-23.435786601633527,"2019-12-22T11:02:09":-23.43570230626572,"2019-12-22T12:02:09":-23.43560438835479,"2019-12-22T13:02:09":-23.43549284776474,"2019-12-22T14:02:09":-23.435367684376526,"2019-12-22T15:02:09":-23.435228898080716,"2019-12-22T16:02:09":-23.435076488780492,"2019-12-22T17:02:09":-23.434910456397066,"2019-12-22T18:02:09":-23.434730800859867,"2019-12-22T19:02:09":-23.43453752211051,"2019-12-22T20:02:09":-23.434330620110078,"2019-12-22T21:02:09":-23.43411009482621,"2019-12-22T22:02:09":-23.43387594623835,"2019-12-22T23:02:09":-23.43362817434704,"2019-12-23T00:02:09":-23.433366779157346,"2019-12-23T01:02:09":-23.433091760686324,"2019-12-23T02:02:09":-23.432803118972853,"2019-12-23T03:02:09":-23.432500854059267,"2019-12-23T04:02:09":-23.43218496599962,"2019-12-23T05:02:09":-23.431855454870856,"2019-12-23T06:02:09":-23.431512320751732,"2019-12-23T07:02:09":-23.43115556373261,"2019-12-23T08:02:09":-23.43078518392792,"2019-12-23T09:02:09":-23.430401181452417,"2019-12-23T10:02:09":-23.43000355643237,"2019-12-23T11:02:09":-23.429592309019444,"2019-12-23T12:02:09":-23.429167439363543,"2019-12-23T13:02:09":-23.42872894762611,"2019-12-23T14:02:09":-23.42827683399527,"2019-12-23T15:02:09":-23.42781109865636,"2019-12-23T16:02:09":-23.427331741805386,"2019-12-23T17:02:09":-23.426838763666286,"2019-12-23T18:02:09":-23.42633216445875,"2019-12-23T19:02:09":-23.42581194441342,"2019-12-23T20:02:09":-23.425278103789665};

let finalData = {
	withGrid: false,
	gridColor: 'red',
	xLabels: [],
	minX: 0,
	maxX: 0,
	minY: 0,
	maxY: 0,
	data: [
		{
			name: 'Sun Declination, start',
			lineColor: 'orange',
			fillColor: null, // With gradient
			thickness: 3,
			x: [],
			values: [] // Same cardinality as x
		}, {
			name: 'Sun Declination, all',
			lineColor: 'orange',
			fillColor: null, // With gradient
			thickness: 1,
			x: [],
			values: [] // Same cardinality as x
		}
	]
};

let mini = 90;
let maxi = -90;
let x = 0;

let thick = true;

Object.keys(mapDecl).forEach(key => {
	let decl = mapDecl[key];
	if (decl < mini) {
		mini = decl;
		minTime = key;
	}
	if (decl > maxi) {
		maxi = decl;
		maxTime = key;
	}
	if (thick) {
		finalData.data[0].x.push(x);
		finalData.data[0].values.push(decl);
	}
	finalData.data[1].x.push(x);
	finalData.data[1].values.push(decl);
	x++;
	if (key === at) {
		thick = false;
	}
});

finalData.maxX = x;
finalData.minY = mini;
finalData.maxY = maxi;

// console.log(JSON.stringify(finalData, null, 2));
console.log(JSON.stringify(finalData));