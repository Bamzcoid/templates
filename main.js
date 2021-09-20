const jo = {};
! function() {
	var e, t, A = window,
		g = document,
		n = setTimeout,
		a = clearTimeout,
		w = Date,
		j = Math,
		D = parseInt,
		o = encodeURIComponent,
		r = RegExp,
		i = XMLHttpRequest,
		l = localStorage,
		s = JSON,
		c = Image,
		k = "innerHTML",
		d = "tagName",
		u = "getElementById",
		f = "querySelector",
		m = "querySelectorAll",
		p = "createElement",
		h = "className",
		v = "replace",
		y = "indexOf",
		b = "EventListener",
		x = "add",
		I = "remove",
		_ = "key",
		P = "parse",
		C = "length",
		S = "push",
		$ = "Attribute",
		T = "set",
		M = "get",
		O = "checked",
		B = "offsetWidth",
		R = "toFixed",
		E = "pageYOffset",
		L = "appendChild",
		z = "firstChild",
		U = "insert",
		q = "Before",
		H = "value",
		J = "match",
		N = "href",
		F = "src",
		G = "target",
		W = "location",
		Y = "trim",
		Q = "open",
		X = "send",
		V = "random",
		K = "toString",
		Z = "parentElement",
		ee = "preventDefault",
		te = "substr",
		ae = "setRequestHeader",
		ne = "responseText",
		oe = "title",
		re = "test",
		ie = "ceil",
		le = "floor",
		se = "min",
		ce = "map",
		de = "contains",
		ue = "textContent",
		fe = "load",
		ge = "false",
		me = "scroll",
		pe = "click",
		he = "mousemove",
		ve = "touchstart",
		ye = "undefined",
		be = "function",
		Ae = "Content-Type",
		we = "text/html",
		je = "pagination",
		De = "loadCustomPosts",
		ke = "custom_posts",
		xe = "config",
		Ie = "adsbygoogle",
		_e = "analytics",
		Pe = typeof isPreview != ye && isPreview,
		Ce = typeof siteUrl != ye ? siteUrl : "",
		Se = typeof currentUrl != ye ? currentUrl : "",
		$e = typeof blogId != ye ? blogId : "",
		Te = typeof blogTitle != ye ? blogTitle : "",
		Me = typeof titleSeparator != ye ? titleSeparator : " - ",
		Oe = typeof pageTitle != ye ? pageTitle : "Page",
		Be = typeof analyticId != ye && analyticId,
		Re = !!(vt = typeof caPubAdsense != ye && caPubAdsense[v](/^\D+/g, "")) && "ca-pub-" + vt,
		Ee = typeof innerAdsDelimiter != ye ? innerAdsDelimiter : "p,br,div",
		Le = typeof ignoreAdsDelimiter != ye ? ignoreAdsDelimiter : "pre,ul,ol,table,blockquote",
		ze = typeof autoTOC != ye && autoTOC,
		Ue = typeof toc_temp == be && toc_temp,
		qe = typeof positionTOC != ye && positionTOC,
		He = typeof bmCallback == be && bmCallback,
		Je = "https://",
		Ne = "www.blogger.com/",
		Fe = "-rw";

	function Ge(e, t) {
		return -1 < (" " + e[h] + " ")[y](" " + t + " ")
	}

	function We(e, t) {
		var a;
		Ge(e, t) || ("" != (a = e[h]) && (t = " " + t), e[h] = a + t)
	}

	function Ye(e, t) {
		e[h] = e[h][v](new r("(?:^|\\s)" + t + "(?!\\S)"), "")[Y]()
	}

	function Qe(e, t, a) {
		Ye(e, t), n(function() {
			Ye(e, "d-block")
		}, a || 300)
	}

	function Xe(e, t) {
		for (var a = 0; a < e[C]; a++)
			if (e[a] === t) return 1
	}

	function Ve(e, t) {
		return !!(e = new r("[?&]" + e + "=([^&#=]*)"))[re](t) && t[J](e)[1]
	}
	e = function(e) {
		e || (Fe = "")
	}, (t = new c).onload = t.onerror = function() {
		e(2 == t.height)
	}, t[F] = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	var Ke, Ze = g[u]("header"),
		et = g[u]("search-toggle"),
		tt = g[u]("search-header"),
		at = g[u]("navbar-toggle"),
		nt = g[u]("navbar"),
		ot = g[u]("back-to-top"),
		rt = g[u]("dark-toggler"),
		it = g[f]("html"),
		lt = g[u]("comment-button"),
		st = g[u]("threaded-comment-form"),
		ct = g[u]("comment-editor"),
		dt = g[u]("comment-editor-src"),
		ut = g[u]("comment-script"),
		ft = g[m](".comment-reply"),
		gt = g[m](".entry-text noscript"),
		mt = g[m](".contact-form-blogger"),
		pt = g[u]("ads-post"),
		ht = g[u]("post-body"),
		vt = g[f](".related-posts"),
		ye = g[f](".related-inline"),
		c = Ve("page", Se);

	function yt(e) {
		var t, a, n, o, r, i, l;
		"IMG" == e[d] && (0 < (l = e[M + $]("data-src"))[y]("bp.blogspot") ? (t = e[B][R](0), a = e[Z][B][R](0), n = e[Z][Z][B][R](0), o = e.offsetHeight[R](0), r = l.split("/"), i = "", i = Ge(e[Z], "ratio") ? "w" + t + Fe + "-h" + o + "-c" : "s" + (i = t < 10 ? a < 10 ? n : a : t) + Fe, l = l[v](r[r[C] - 2], i), e[T + $]("data-src", l)) : l[J](/(img.youtube|i.ytimg)/) && (l = l[te](0, l.lastIndexOf("/")) + "/mqdefault.jpg", e[T + $]("data-src", l)))
	}
	if (Ke = 0, A[x + b](me, function() {
			var e, t = this[E];
			t < Ke && Ge(Ze, "header-hidden") ? e = n(function() {
				Ye(Ze, "header-hidden")
			}, 500) : Ke < t && Ge(Ze, "header-animate") && (a(e), We(Ze, "header-hidden")), Ke = t
		}, !1), 0 < gt[C]) {
		for (var bt = 0; bt < gt[C]; ++bt) {
			var At = gt[bt],
				wt = At[k],
				bm = g[p]("textarea");
			bm[k] = wt[v](/src="(.*?)"/g, 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"');
			wt = g[p]("div");
			wt[k] = bm.value, 0 == bt && We(wt, "feature-image full-width"), At[Z][U + q](wt, At)
		}
		Defer.dom('[lazyload="true"]', 1, "loaded", yt, null, {
			rootMargin: "200%"
		})
	}
	if (null !== ht) {
		if (null !== vt && null !== ye && (ye[k] = vt[k], ye[T + $]("data-no-item", vt[M + $]("data-no-item"))), null !== pt) {
			for (var Dt = ht[m](Ee + "," + Le), kt = pt.childNodes, xt = kt[C], It = [], bt = 0; bt < Dt[C]; bt++) {
				var _t = Dt[bt].closest(Le);
				_t && Dt[bt] != _t || It[S](Dt[bt])
			}
			for (var Pt, bt = 0; bt < xt; bt++) bt == xt - 1 ? ht[L](kt[0]) : (Pt = bt == xt - 1 ? It[C] - 1 : j.round(It[C] / xt) * bt, (Pt = 0 == bt ? It[0] : It[Pt].nextSibling) && Pt[Z][U + q](kt[0], Pt))
		}
		if (ze && ze != ge && Ue && null !== ht[z]) {
			for (var Ct = ht[m]("h2,h3,h4,h5,h6"), ze = g[p]("div"), qe = ht[f](qe), St = [], bt = 0; bt < Ct[C]; bt++) {
				var $t = Ct[bt],
					Tt = $t[ue][v](/[^\w!?]/g, "_")[v](/__/g, "_"),
					Mt = D($t[d][v]("H", ""));
				$t.id = Tt, St[S]({
					level: Mt,
					title: $t[ue],
					id: Tt
				})
			}
			null === qe && (qe = ht[z]), 0 < St[C] && (ze[k] = Ue(St)[Y](), qe && qe[Z][U + q](ze, qe))
		}
	}

	function Ot() {
		(et && et[O] || at && at[O] ? Ye : We)(Ze, "header-animate")
	}

	function Bt(t, a) {
		function e(e) {
			t[de](e[G]) || (a(), n())
		}
		var n = function() {
			g[I + b](pe, e)
		};
		g[x + b](pe, e)
	}

	function Rt(e) {
		e != dt[N] && (We(st, "loader"), dt[N] = e, ct[F] = e), Ge(st, "d-none") && (Ye(st, "d-none"), e = ut[H][J](/<script.*?src='(.*?)'/)[1], Defer.js(e, "comment-js", 500, function() {
			BLOG_CMT_createIframe(Je + Ne + "rpc_relay.html")
		}))
	}
	for (jo[De] = function(u) {
			var f = (j[V]() + 1)[K](36)[te](7),
				e = u[M + $]("data-label"),
				g = u[M + $]("data-title"),
				m = u[M + $]("data-items"),
				p = u[M + $]("data-shuffle"),
				h = u[M + $]("data-no-item"),
				v = u[M + $]("data-func"),
				y = u[M + $]("data-callback"),
				t = h ? D(m) + 1 : m,
				b = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				a = e || u[k],
				n = a.split(","),
				e = "",
				e = 1 < n[C] ? a ? "-/" + o(n[j[le](j[V]() * n[C])]) + "/?" : "?" : a && a != ge ? "-/" + o(a[Y]()) + "/?" : "?";
			Defer.js(Ce + "feeds/posts/summary/" + e + "alt=json&callback=jo." + ke + "_" + _ + "_" + f + "&max-results=" + t), jo[ke + "_" + _ + "_" + f] = function(e) {
				var t = D(e.feed.openSearch$totalResults.$t),
					a = e.feed.category;
				if (0 < t) {
					for (var n = {
							title: g,
							posts: [],
							categories: a
						}, o = e.feed.entry, r = 0, i = 0; i < o[C]; ++i) {
						var l, s, c = o[i],
							d = c.link[c.link[C] - 1][N];
						if (r == m) break;
						d != h && (r++, (l = {}).grup_id = f, l.url = d, l.title = c[oe].$t, l.summary = c.summary.$t[Y](), l.img = c.media$thumbnail && c.media$thumbnail.url, l.author = c.author[0].name.$t, l.comment = c.thr$total && c.thr$total.$t, l.label = c.category, s = c.published.$t, c = (d = new w(s))[M + "Date"](), s = b[d[M + "Month"]()], d = d[M + "FullYear"](), l.date = c + " " + s + ", " + d, n.posts[S](l))
					}
					e = A[v];
					typeof e == be && 0 < n.posts[C] && (p && (n.posts = function(e) {
						for (var t = e.slice(), a = t[C] - 1; 0 < a; a--) {
							var n = j[le](j[V]() * (a + 1)),
								o = t[a];
							t[a] = t[n], t[n] = o
						}
						return t
					}(n.posts).slice(0, p)), u[k] = e(n)[Y](), Ye(u, "visually-hidden"), Defer.dom(".lazy-" + f, 1, "loaded", yt), !y || typeof(e = A[y]) == be && e())
				}
			}
		}, et && et[x + b]("change", function() {
			Ot(), this[O] && n(function() {
				g[u]("search-input").focus()
			}, 100), Bt(tt, function() {
				et[O] = !1, Ot()
			})
		}), at && at[x + b]("change", function() {
			var e, t;
			Ot(), this[O] ? (t = "show", We(e = nt, "d-block"), n(function() {
				We(e, t)
			}, 100), Bt(nt, function() {
				at[O] = !1, Ot(), Qe(nt, "show")
			})) : Qe(nt, "show")
		}), rt && rt[x + b](pe, function(e) {
			var t;
			e[ee](), (Ge(t = it, e = "dark-mode") ? Ye : We)(t, e), null !== l && l.setItem("theme", Ge(it, "dark-mode") ? "dark" : "light")
		}), A[x + b](me, function() {
			(1 <= this[E] && null !== Ze ? We : Ye)(Ze, "shadow-sm"), (1e3 <= this[E] && null !== ot ? Ye : We)(ot, "d-none")
		}, !1), ct && ct[x + b](fe, function(e) {
			Ye(st, "loader")
		}), lt && lt[x + b](pe, function(e) {
			e[ee](), Rt(this[N]), "add-comment" != st[Z].id && g[u]("add-comment")[L](st)
		}), bt = 0; bt < ft[C]; ++bt) ft[bt][x + b](pe, function(e) {
		e[ee]();
		e = this[M + $]("data-comment-id");
		Rt(this[N]), st[Z].id != "c" + e && g[u]("c" + e)[L](st)
	});
	for (bt = 0; bt < mt[C]; ++bt) mt[bt][x + b]("submit", function(e) {
		e[ee]();
		var t = e[G];
		We(t, "loading");
		var a = new FormData(t),
			n = "blogID=" + $e;
		a.forEach(function(e, t) {
			n += "&" + o(t) + "=" + o(e)
		});
		e = Je + Ne + "contact-form.do", a = new i;
		a[Q]("post", e), a[ae](Ae, "application/x-www-form-urlencoded"), a[X](n), a.onreadystatechange = function() {
			var e;
			Ye(t, "loading"), 4 === this.readyState && 200 === this.status && "" != this.response && ((e = function(e) {
				try {
					return s[P](e)
				} catch (e) {
					return !1
				}
			}(this[ne][Y]())) && "true" == e.details.emailSentStatus ? (t.reset(), Ye(t, "send-error"), We(t, "send-success")) : (Ye(t, "send-success"), We(t, "send-error")))
		}
	});

	function Et() {
		g[I + b](he, Et), g[I + b](ve, Et), g[I + b](me, Et), Pe || (Re && ((adsbygoogle = A[Ie] || [])[S]({
			google_ad_client: Re,
			enable_page_level_ads: !0,
			overlays: {
				bottom: !0
			}
		}), Defer.js(Je + "pagead2.googlesyndication.com/pagead/js/" + Ie + ".js", Ie, 100)), Be && Be != ge && Defer.js(Je + "www.googletagmanager.com/gtag/js?id=" + Be, _e, 100, function() {
			function e() {
				dataLayer[S](arguments)
			}
			e("js", new Date), e(xe, Be)
		}), He && He()), $e && Defer.css(Je + Ne + "dyn-css/authorization.css?targetBlogID=" + $e)
	}
	c && (g[oe] = g[oe][v](Me, Me + Oe + " " + c + Me)), Defer.dom(".lazyload", 1, "loaded", yt), Defer.dom("#post-pager", 1, null, function(e) {
		for (var t = e[m]("a"), a = 0; a < t[C]; ++a) {
			var n = t[a],
				o = n[N],
				r = g[p]("span");
			We(r, "d-block fw-bold pt-2 bm-text-primary"), n[L](r),
				function(e, t) {
					var a = new i;
					a[Q](M, e), a[ae](Ae, we), a[X](null), a[x + b](fe, function() {
						var e = a[ne][J](/<title>(.*?)<\/title>/);
						t[k] = e[1][v](Me + Te, "")
					})
				}(o, r)
		}
	}, null, {
		rootMargin: "200%"
	}), Defer.dom("#pagination", 1, null, function(i) {
		var l, r, s, c, e, t, d, u;

		function f(e, t, a) {
			var n = g[p]("li"),
				o = g[p]("span");
			return We(o, "btn btn-sm rounded-pill bm-icon-center"), o[k] = a || e, o[T + $]("data-page", e), e == t ? We(o, "bm-btn-primary") : (We(o, "bm-btn-light hover-btn-primary"), o[x + b](pe, function(e) {
				var t;
				e[ee](), 1 == (u = o[M + $]("data-page")) ? (t = r ? Ce + "search" + c + "?max-results=" + l + "&page=" + u : Ce, A[W][N] = t) : (t = (u - 1) * l, Defer.js(Ce + "feeds/posts/summary/" + s + "?start-index=" + t + "&alt=json&callback=jo." + je + "_date&max-results=1"))
			})), n[L](o), n
		}
		i[M + $]("data-pagination") != ge ? (l = i[M + $]("data-posts"), r = i[M + $]("data-label"), s = (r = o(r)) ? "-/" + r + "/" : "", c = r ? "/label/" + r : "", Defer.js(Ce + "feeds/posts/summary/" + s + "?alt=json&callback=jo." + je + "_" + _ + "&max-results=1"), e = Ve("max-results", Se), t = Ve("page", Se), d = e || l, u = t || 1, jo[je + "_" + _] = function(e) {
			var t = e.feed,
				a = D(t.openSearch$totalResults.$t);
			if (l < a) {
				var e = function(e, t, a, n) {
						e = D(e), t = D(t), a = D(a), n = D(n);
						var o, r, i = j[ie](e / a);
						t < 1 ? t = 1 : i < t && (t = i), r = i <= n ? (o = 1, i) : (e = j[le](n / 2), a = j[ie](n / 2) - 1, t <= e ? (o = 1, n) : i <= t + a ? (o = i - n + 1, i) : (o = t - e, t + a));
						for (var l = (t - 1) * a, n = j[se](l + a - 1, e - 1), s = [], c = 0; c < r + 1 - o; c++) s[S](c);
						return s = s[ce](function(e) {
							return o + e
						}), {
							totalItems: e,
							currentPage: t,
							pageSize: a,
							totalPages: i,
							startPage: o,
							endPage: r,
							startIndex: l,
							endIndex: n,
							pages: s
						}
					}(a, u, d, 5),
					n = g[p]("ul"),
					t = e.totalPages;
				1 != e.currentPage && (a = f(e.currentPage - 1, "", '<svg aria-hidden="true" class="bm-icon"><use xlink:href="#i-arrow-l"/></svg>'), n[L](a)), Xe(e.pages, 1) || (r = f(1, e.currentPage, "1 . ."), n[L](r));
				for (var o = 0; o < e.pages[C]; o++) {
					var r = f(e.pages[o], e.currentPage);
					n[L](r)
				}
				Xe(e.pages, t) || (r = f(t, e.currentPage, ". . " + t), n[L](r)), e.currentPage != t && (t = f(e.currentPage + 1, "", '<svg aria-hidden="true" class="bm-icon"><use xlink:href="#i-arrow-r"/></svg>'), n[L](t)), i[k] = "", We(n, "pagination mb-0"), i[L](n), Ye(i, "visually-hidden")
			}
		}, jo[je + "_date"] = function(e) {
			e = e.feed.entry[0], e = (e = e.published.$t[te](0, 19) + e.published.$t[te](23, 29))[v]("+", "%2B"), e = Ce + "search" + c + "?updated-max=" + e + "&max-results=" + d + "&page=" + u;
			A[W][N] = e
		}) : Ye(i, "visually-hidden")
	}, null, {
		rootMargin: "200%"
	}), Defer.dom(".custom-posts", 1, null, jo[De], null, {
		rootMargin: "200%"
	}), g[x + b](he, Et), g[x + b](ve, Et), g[x + b](me, Et)
}();
