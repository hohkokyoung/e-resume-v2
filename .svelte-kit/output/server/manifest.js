export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "e-resume-v2/_app",
	assets: new Set([".nojekyll","favicon.ico"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.BrcJRhfc.js","app":"_app/immutable/entry/app.ddfdfxl1.js","imports":["_app/immutable/entry/start.BrcJRhfc.js","_app/immutable/chunks/entry.DgE4Y9gL.js","_app/immutable/chunks/scheduler.CMswNPJ8.js","_app/immutable/entry/app.ddfdfxl1.js","_app/immutable/chunks/scheduler.CMswNPJ8.js","_app/immutable/chunks/index.BOwdv7r6.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[slug=navigation]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","matcher":"navigation","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: navigation } = await import ('./entries/matchers/navigation.js')
			return { navigation };
		},
		server_assets: {"_app/immutable/assets/university.Pj9xtbps.png":152561,"_app/immutable/assets/high-school.Cc5fOJ46.png":117357,"_app/immutable/assets/tsp.5Ept1rup.png":5093,"_app/immutable/assets/cds-picture-1.CyL8r3yj.png":941431,"_app/immutable/assets/cds-picture-2.BXvpe2b4.png":100203,"_app/immutable/assets/cds-picture-3.BzpwYWLw.png":135067,"_app/immutable/assets/cds-picture-4.Cj0o2N8b.png":85498,"_app/immutable/assets/cds-picture-5.CgnE067V.png":119704,"_app/immutable/assets/cds-picture-6.ReTiV3kW.png":204821,"_app/immutable/assets/cds-picture-7.C8oPqS4g.png":182081,"_app/immutable/assets/cds-picture-8.BIQvmk02.png":97658,"_app/immutable/assets/dr-picture-1.D_Mvg5bJ.png":395178,"_app/immutable/assets/dr-picture-2.DXaajK93.png":256537,"_app/immutable/assets/am-picture-1.CxLxIdZW.png":43628,"_app/immutable/assets/am-picture-2.DCqOCMj5.png":48563,"_app/immutable/assets/am-picture-3.CqxgyUbX.png":146040,"_app/immutable/assets/am-picture-4.B_X06T_7.png":81944,"_app/immutable/assets/am-picture-5.CQVRFJHB.png":112257,"_app/immutable/assets/rr-picture-1.hu9cg4IM.png":2709879,"_app/immutable/assets/rr-picture-2.BQTDfPJf.png":3248067,"_app/immutable/assets/rr-picture-3.DyfENlcI.png":200455,"_app/immutable/assets/rr-picture-4.CJpPKkjg.png":191810,"_app/immutable/assets/rr-picture-5.e2aiQC_b.png":73018,"_app/immutable/assets/aws-sa-badge.D5jP5S1b.png":37859,"_app/immutable/assets/aws-sa-certificate.BxE0Sd6F.png":86152,"_app/immutable/assets/aws-cloud-practitioner-badge.Bf_gp8J8.png":44876,"_app/immutable/assets/aws-cloud-practitioner-certificate.Bra18Xc0.png":87802,"_app/immutable/assets/flutter.9RIUM0rv.png":7357,"_app/immutable/assets/flutter-certificate.dK8UOkef.jpg":1201425}
	}
}
})();
