import {
    h as O,
    g as W,
    $ as v,
    aV as N,
    ac as S,
    aW as F,
    aX as I,
    aY as j,
    aZ as M,
    a_ as z,
    s as H,
    a$ as Q,
    at as q,
    b0 as J,
    W as B,
    aM as V
} from "./CUwSMWNa.js";
const ne = () => {
    const a = O(),
        u = N(),
        P = J(),
        {
            $bus: $
        } = W();

    function h() {
        return window.location.search
    }

    function g(e) {
        return /^\/v2\/preview\//.test(e) ? "/v2/preview" : "/preview"
    }

    function k(e) {
        e && (e = e.replace("tel:", ""), window.location.href = "tel://" + e)
    }

    function x(e) {
        e && (e = e.replace("sms:", ""), window.location.href = "sms://" + e)
    }

    function b(e) {
        e && (e = e.replace("mailto:", ""), window.location.href = "mailto:" + e)
    }

    function L(e, t) {
        const n = `_mf_${e}`,
            o = JSON.stringify(t),
            r = B(n, {
                path: "/",
                maxAge: 31536e3
            });
        r.value = o, V(n, o)
    }

    function E(e) {
        const {
            extra: t
        } = e;
        a.value.videoExistsInPage && $.$emit("handle-redirect"), t.action.value === "go-to-next-funnel-step" ? d() : t.action.value === "url" && w(t.visitWebsite.value)
    }

    function d(e, t = !1, n) {
        a.value.videoExistsInPage && $.$emit("handle-redirect");
        try {
            const o = a.value.funnelSteps || [],
                r = e ? S({
                    funnelSteps: o,
                    stepId: e
                }) : S({
                    funnelSteps: o,
                    funnelNextStep: a.value.funnelNextStep
                });
            if (!r || !r.id) return;
            let s = r.url;
            v(u.path) && (s = `${g(u.path)}/${r.id}`), n && (s += `/product/${n}`);
            const f = a.value.funnelDomain;
            if (window.location.hostname !== "localhost" && !v(u.path) && f !== window.location.hostname) {
                const c = `https://${f}${s}` + h();
                w({
                    url: c,
                    newTab: t
                })
            } else {
                if (t) {
                    const c = P.resolve({
                        path: s
                    });
                    window.open(c.href + h(), "_blank");
                    return
                }
                window.location.href = s + h();
                return
            }
        } catch {}
    }

    function w({
        url: e,
        newTab: t
    }) {
        a.value.videoExistsInPage && $.$emit("handle-redirect"), e = H(e);
        let n = a.value.locationId;
        const o = Q(n);
        o && (e = q(e, o)), t ? window.open(e, "_blank") === null && (window.location.href = e) : window.location.href = e
    }
    const T = async ({
            fileUrl: e,
            fileName: t
        }) => {
            try {
                const n = await fetch(e, {
                    mode: "cors"
                });
                if (!n.ok) throw new Error(`HTTP error! status: ${n.status}`);
                const o = await n.blob(),
                    r = URL.createObjectURL(o),
                    s = document.createElement("a");
                s.href = r;
                const f = l => {
                        const m = l.indexOf(".");
                        return m > 0 ? l.substring(0, m) : l
                    },
                    c = t.trim() || "download",
                    i = f(c);
                s.download = i, document.body.appendChild(s), s.click(), s.remove(), URL.revokeObjectURL(r)
            } catch {}
        },
        p = (e, t = !0, n) => {
            try {
                const o = a.value.funnelSteps || [],
                    r = S({
                        funnelSteps: o,
                        stepId: e
                    });
                if (!r || !r.id) return "#";
                if (v(u.path)) {
                    let i = "";
                    return r && (i = `${g(u.path)}/${r.id}`), n && (i += `/product/${n}`), i
                }
                let s = r.url;
                const f = a.value.funnelDomain;
                n && (s += `/product/${n}`);
                const c = new URL(s, `https://${f}`);
                if (t) {
                    const i = { ...u.query
                    };
                    delete i.domain, delete i.page_url, delete i.additional_route, delete i.step_id, delete i.funnel_id, delete i.page_id, Object.keys(i).forEach(l => {
                        c.searchParams.append(l, i[l])
                    })
                }
                return z({
                    url: c.href
                })
            } catch {
                return "#"
            }
        },
        R = (e, t, n) => {
            if (h()) {
                e ? .preventDefault();
                const r = p(t, !0);
                n ? window.open(r, "_blank") === null && (window.location.href = r) : window.location.href = r
            }
        },
        U = () => {
            const e = a.value.funnelSteps ? .find(t => t ? .key === "store-product-list");
            e && d(e ? .value)
        },
        D = e => {
            const t = a.value.funnelSteps ? .find(n => n ? .key === "store-product-detail");
            t && d(t ? .value, !1, e)
        },
        C = (e, t) => {
            const n = a.value.funnelSteps || [],
                o = n.find(s => s ? .key === "store-custom-product-detail" && s ? .products ? .includes(e));
            if (o) return p(o.value, !1, t ? ? e);
            const r = n.find(s => s ? .key === "store-product-detail");
            return r ? p(r.value, !1, t ? ? e) : void 0
        },
        _ = () => {
            const e = a.value.funnelSteps ? .find(t => t ? .key === "store-product-list");
            return e ? v(window.location.pathname) ? `${window.location.origin}${g(window.location.pathname)}/${e?.id}` : `https://${a.value.funnelDomain}${e.url}` : ""
        },
        A = e => {
            const t = a.value.funnelSteps ? .find(n => n ? .key === "store-product-list");
            return !t || v(u.path) ? "" : `https://${a.value.funnelDomain}${t.url}/store/account/${e}`
        },
        y = e => {
            const t = a.value.funnelSteps ? .find(n => n ? .key === "store-product-list");
            if (!t || v(u.path)) return "";
            w({
                url: `https://${a.value.funnelDomain}${t.url}/store/account/${e}`,
                newTab: !1
            })
        };
    return {
        call: k,
        sms: x,
        mailTo: b,
        createMembershipToken: L,
        goToNextFunnelStep: d,
        openUrl: w,
        downloadFile: T,
        getNextFunnelStepURL: p,
        redirectOnSubmit: E,
        goToEcomPrdouctListPage: U,
        goToEcomCartPage: () => {
            const e = a.value.funnelSteps ? .find(t => t ? .key === "store-cart");
            e && d(e ? .value)
        },
        redirectAction: (e, t, n, o, r, s, f) => {
            try {
                const {
                    saleAction: c,
                    stepPath: i,
                    visitWebsite: l
                } = e;
                F(t.value.funnelId, n, f), I(t.value.funnelId);
                const m = {
                    name: o.fullName,
                    addressLine1: o.address,
                    city: o.city,
                    state: o.state,
                    zip: o.zipcode,
                    country: o.country
                };
                if (j(t.value.funnelId, m), !c)
                    if (t.value.funnelNextStep) {
                        d();
                        return
                    } else throw new Error("Redirect not handled");
                switch (c.value) {
                    case "url":
                        if (l && l.value && l.value.url) {
                            w(l.value);
                            break
                        } else throw new Error("Redirect not handled");
                    case "step-path":
                        if (i && i.value) {
                            d(i.value);
                            break
                        } else throw new Error("Redirect not handled");
                    case "go-to-next-funnel-step":
                        if (t.value.funnelNextStep) {
                            d();
                            break
                        } else throw new Error("Redirect not handled")
                }
            } catch {
                if (r) alert(s);
                else {
                    const i = JSON.parse(localStorage.getItem("_ud") || "{}"),
                        l = [M.sepa].includes(localStorage.getItem(`pmt_${t.value.funnelId}_${i?.id}`) || "") ? "We are proccessing your order with the bank. We'll confirm you order after bank's confirmation." : `Order successfully placed! 
 However, Something went wrong while displaying this webpage, please contact the seller.`;
                    alert(l)
                }
            }
        },
        getEcomProductListPageUrl: _,
        goToStep: R,
        goToEcomCheckoutPage: () => {
            const e = a.value.funnelSteps ? .find(t => t ? .key === "store-checkout");
            e ? .value ? d(e.value) : d()
        },
        getEcomProductListPagePath: e => {
            const t = a.value.funnelSteps ? .find(o => o ? .key === "store-product-list");
            if (!t) return "";
            let n = "";
            return v(u.path) ? n = `${g(u.path)}/${t?.id}` : n = `https://${a.value.funnelDomain}${t.url}`, e && (n += `/collections/${e}`), n
        },
        goToEcomPrdouctDetailPage: D,
        getRedirectActionUrl: e => {
            const {
                saleAction: t,
                stepPath: n,
                visitWebsite: o
            } = e;
            if (!t) return a.value.funnelNextStep ? p() : "";
            switch (t.value) {
                case "url":
                    return o ? .value ? .url ? ? "";
                case "step-path":
                    return n ? .value ? p(n.value) : "";
                case "go-to-next-funnel-step":
                    {
                        const r = a.value.funnelSteps || [],
                            s = S({
                                funnelSteps: r,
                                funnelNextStep: a.value.funnelNextStep
                            });
                        return a.value.funnelNextStep && s ? .value ? p(s.value) : ""
                    }
                default:
                    return ""
            }
        },
        getEcomProductDetailURL: C,
        getCustomerAccessCenterUrl: A,
        goToCustomerAccessCenter: y,
        goToCustomerAccessCenterLogin: () => {
            sessionStorage.setItem("redirect", window.location.href), y("login")
        }
    }
};
export {
    ne as u
};