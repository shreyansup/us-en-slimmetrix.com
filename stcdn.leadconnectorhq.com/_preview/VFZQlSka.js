const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./entry.iSOF46tA.css", "./ghl-payment-element.BdWSRE51.css", "./PaymentElementComponent.BtAYlWo5.css", "./PaymentElementModal.DIearxIT.css"]))) => i.map(i => d[i]);
import {
    d as kt,
    a8 as xt,
    h as Lt,
    D as Dt,
    g as Nt,
    z as we,
    r as u,
    c as ye,
    an as Ct,
    y as ze,
    aq as _,
    B as At,
    o as Mt,
    a as E,
    b,
    j as O,
    e as k,
    k as Ft,
    p as X,
    n as Ge,
    f,
    t as K,
    m as Re,
    L as Ne,
    w as Vt,
    x as Wt,
    aj as Ut,
    F as $t,
    W as ee,
    c7 as ke,
    bg as Be,
    bj as Ke,
    c8 as xe,
    bi as je,
    c9 as Ye,
    ca as Ze,
    H as Qe,
    J as Xe,
    ap as ie,
    P as Ht,
    aM as et,
    cb as Le,
    aZ as ue,
    cc as tt,
    O as Ce
} from "./CUwSMWNa.js";
import {
    _ as qt
} from "./DYa7OZHt.js";
import {
    u as Jt,
    S as y,
    E as J
} from "./BEZhev8N.js";
import {
    t as zt,
    f as Gt
} from "./D8Q68R_D.js";
import {
    D as j,
    P as C,
    O as De,
    g as _e,
    b as ge,
    d as he,
    c as Bt
} from "./yhGwvpQ8.js";
import {
    F as at
} from "./90pob4Tc.js";
import {
    h as Kt,
    f as ce,
    b as jt,
    g as Yt,
    c as Zt,
    d as Qt,
    e as Xt
} from "./doZck9cT.js";
import {
    p as ea
} from "./CenvAvwo.js";
import {
    u as ta
} from "./C2AJhYBp.js";
import aa from "./sK6yjIBY.js";
import {
    u as ra,
    g as na
} from "./BfdATLxN.js";
import "./B90Q_W-L.js";
import "./lpY46E9K.js";
import "./D6Boqghv.js";
import "./BmYgOgPf.js";
import "./BPq-Lans.js";
import "./BPHL-qo9.js";
import "./xkmZ3Aaj.js";
const oa = Ne(() => Ce(() =>
        import ("./B-pVTN0K.js"), __vite__mapDeps([0]),
        import.meta.url).then(d => d.default || d)),
    sa = Ne(() => Ce(() =>
        import ("./DCPkOoD9.js"), __vite__mapDeps([0, 1, 2]),
        import.meta.url).then(d => d.default || d)),
    la = Ne(() => Ce(() =>
        import ("./BKeB2TC1.js"), __vite__mapDeps([0, 1, 3]),
        import.meta.url).then(d => d.default || d)),
    ia = ["id", "href", "target", "rel", "data-animation-class", "aria-label"],
    ua = {
        key: 0,
        style: {
            "margin-right": "5px"
        },
        class: "button-icon-start"
    },
    ca = {
        class: "main-heading-button"
    },
    da = {
        key: 1,
        style: {
            "margin-left": "5px"
        },
        class: "button-icon-end"
    },
    va = {
        class: "sub-heading-button"
    },
    pa = {
        key: 1,
        class: "recaptcha-container button-recaptcha-container"
    },
    ma = {
        key: 0
    },
    fa = ["disabled", "data-animation-class", "id", "aria-label"],
    ya = {
        key: 0,
        class: "button-icon-start"
    },
    _a = {
        class: "main-heading-button"
    },
    ga = {
        key: 1,
        class: "button-icon-end"
    },
    ha = {
        class: "sub-heading-button"
    },
    Ia = {
        class: "btn-loader-position",
        style: {
            left: "50%",
            position: "absolute",
            top: "50%",
            transform: "translate(-50%, -50%)"
        }
    },
    Pa = {
        key: 0
    },
    ba = ["id"],
    Sa = {
        key: 0,
        class: "card-el-error-msg"
    },
    Ea = {
        key: 3,
        class: "card-el-error-msg error-message",
        style: {
            "justify-content": "center"
        }
    },
    Oa = {
        inheritAttrs: !1
    },
    Ta = kt({ ...Oa,
        __name: "Button",
        props: {
            element: {
                type: Object,
                required: !0
            },
            classStyles: {
                type: Array,
                required: !0
            }
        },
        setup(d) {
            const {
                t: rt
            } = xt(), c = d, n = Lt(), nt = ra(), {
                openPopup: ot
            } = Jt(), de = Dt(c.element), {
                call: st,
                createMembershipToken: Ae,
                mailTo: lt,
                sms: it,
                goToNextFunnelStep: te,
                openUrl: Ie,
                downloadFile: ut,
                getNextFunnelStepURL: ct,
                goToStep: dt
            } = ta(), vt = Nt(), {
                $bus: Me
            } = vt;
            let Y = c.element.extra ? .text ? .value;
            Y = we(Y);
            let Z = c.element.extra ? .subText ? .value;
            Z = we(Z);
            const pt = n.value.funnelId,
                mt = n.value.stepId,
                ft = n.value.funnelPageId,
                v = n.value.locationId,
                A = c.element.extra ? .productId ? .value ? .id,
                s = u(!1),
                ve = u(!1),
                Pe = u(""),
                be = u(""),
                p = u(),
                Se = u(!1),
                pe = u(""),
                M = u(""),
                g = u(!1),
                F = u(!1),
                yt = ye(() => p.value ? .price.type === "recurring"),
                l = u(),
                T = u(""),
                ae = u(!1),
                V = u(),
                re = u(""),
                Fe = u(!1),
                w = u(!0),
                W = u(),
                Ve = Ct(),
                We = u(),
                U = u({
                    mode: "payment",
                    amount: 0,
                    currency: "",
                    contact: {
                        id: "",
                        full_name: "",
                        email: "",
                        phone: "",
                        shippingAddress: {
                            city: "",
                            state: "",
                            country: "",
                            zipCode: "",
                            line1: ""
                        }
                    }
                }),
                Ue = u(),
                me = u(),
                h = u({
                    mode: "payment",
                    amount: 0,
                    currency: "usd",
                    enableBNPL: !0,
                    paymentMethodConfiguration: n.value.isLivePaymentMode ? Ve.public.STRIPE_DEFAULT_CONFIGURATION_LIVE : Ve.public.STRIPE_DEFAULT_CONFIGURATION_TEST
                }),
                fe = u(""),
                R = u(!1),
                x = u(""),
                Ee = u(!1),
                {
                    action: {
                        value: z
                    },
                    visitWebsite: {
                        value: Oe
                    }
                } = c.element.extra,
                $e = u(""),
                _t = ye(() => ze(de) && !Ee.value),
                G = ye(() => (n.value.paymentProviderDetails ? .provider === _.CUSTOM_PROVIDER && !!n.value.customProviderPublishableKey || $e.value === _.CUSTOM_PROVIDER) && z === y.SELL_PRODUCT),
                gt = async t => {
                    t.type === "ready" ? (w.value = !1, W.value = "", s.value = !1) : t.type === "processing" ? (g.value = !0, W.value = "") : t.type === "error" ? (t.message === "Request failed with status code 429" ? (V.value = void 0, ae.value = !0) : W.value = t.message, g.value = !1, w.value = !1) : t.type === "success" ? (W.value = "", g.value = !1, await ht(t)) : t.type === "close" && (W.value = "Payment cancelled", g.value = !1, w.value = !1)
                },
                ht = async t => {
                    try {
                        let e = localStorage.getItem("_ud");
                        e && (e = JSON.parse(e));
                        const {
                            paymentResponseData: a
                        } = await Kt(e, t.data, t.provider, v);
                        await ne(a)
                    } catch (e) {
                        W.value = e
                    } finally {
                        sessionStorage.removeItem("orderResponse"), sessionStorage.removeItem("contactResponse")
                    }
                },
                He = () => {
                    const t = (Y ? ? "") + " " + (Z ? ? "");
                    if (Y || Z) return t;
                    if (z === y.GO_TO_URL) {
                        const {
                            visitWebsite: {
                                value: e
                            }
                        } = c.element.extra;
                        return e ? .url
                    }
                    return t
                },
                It = t => {
                    if (!t) {
                        re.value = rt("common.errors.verification_failed");
                        return
                    }
                    re.value = "", V.value = t
                },
                qe = [y.CLICK_TO_CALL, y.CLICK_TO_SMS, y.GO_TO_URL, y.GO_TO_STEP];
            qe.includes(z) && (ve.value = !0, At(Oe ? .url) || (Pe.value = Je())), Mt(() => {
                qe.includes(z) && (ve.value = !0, Pe.value = Je()), n.value.orderFormVersion === 2 && A && z === y.SELL_PRODUCT && (Pt(), Ue.value = JSON.parse(localStorage.getItem("_ud") || "{}").country)
            });
            async function Pt() {
                try {
                    const t = await at.findProductById({
                        productId: A
                    });
                    let e = localStorage.getItem("pmc_id");
                    h.value.paymentMethodConfiguration = e;
                    const a = t ? .price ? .setupFee,
                        r = t ? .price ? .trialPeriod,
                        i = t ? .price ? .amount,
                        I = a ? r ? a : i + a : r ? 0 : i;
                    t.amount = I, p.value = { ...t,
                        qty: 1,
                        amount: t.amount
                    }, M.value = t ? .price ? .currency, U.value.amount = p.value.amount, U.value.currency = M.value, U.value.mode = p.value ? .price.type === "recurring" ? "subscription" : "payment", U.value.productDetails = [{
                        productId: t ? .product ? ._id,
                        priceId: t ? .price ? ._id
                    }], h.value.amount = p.value.amount, h.value.currency = M.value.toLowerCase(), p.value ? .price.type === "recurring" ? h.value.mode = "subscription" : p.value.amount ? h.value.mode = "payment" : (h.value.mode = "setup", h.value.amount = void 0);
                    let o = localStorage.getItem("_ud");
                    o && (o = JSON.parse(o), U.value.contact = {
                        id: o ? .id,
                        full_name: o ? .full_name,
                        email: o ? .email,
                        phone: o ? .phone,
                        shippingAddress: {
                            city: o ? .city,
                            state: me.value,
                            country: o ? .country,
                            zipCode: o ? .postal_code,
                            line1: o ? .address1
                        }
                    }), setTimeout(() => {
                        Fe.value = !0
                    }, 1e3)
                } catch (t) {
                    t ? .response ? .data ? .message || t ? .message, alert("Not able to fetch products!")
                }
            }
            async function bt() {
                Ee.value = !0;
                const {
                    action: t
                } = c.element.extra;
                switch (t.value) {
                    case "openPopup":
                        {
                            const e = c.element.extra.popupId ? .value ? ? "";zt(n.value.stepId),
                            ot(e);
                            break
                        }
                    case "url":
                        {
                            const {
                                visitWebsite: e
                            } = c.element.extra;Ie(e.value);
                            break
                        }
                    case y.SHOW_HIDE_ELEMENT:
                        {
                            const {
                                hideElements: e,
                                showElements: a
                            } = c.element.extra;Xe(e.value),
                            Qe(a.value);
                            break
                        }
                    case y.HIDE_ELEMENT:
                        {
                            const {
                                hideElements: e
                            } = c.element.extra;Xe(e.value);
                            break
                        }
                    case y.SHOW_ELEMENT:
                        {
                            const {
                                showElements: e
                            } = c.element.extra;Qe(e.value);
                            break
                        }
                    case "scroll-to-element":
                        {
                            const {
                                scrollToElement: e
                            } = c.element.extra;Me.$emit("scroll-to-element", e.value);
                            break
                        }
                    case "go-to-next-funnel-step":
                        {
                            s.value = !0,
                            te();
                            break
                        }
                    case y.GO_TO_STEP:
                        {
                            s.value = !0,
                            te(c.element.extra.stepPath.value);
                            break
                        }
                    case "sell-product":
                        {
                            if (s.value) return;s.value = !0;
                            try {
                                const e = `_pl_${n.value.funnelId}`,
                                    a = localStorage.getItem(e);
                                let r;
                                if (a && (r = JSON.parse(a)), n.value.orderFormVersion === 2) {
                                    if (!p.value) {
                                        s.value = !1;
                                        return
                                    }
                                    const i = ee("provider").value;
                                    if (p.value ? .amount === 0) {
                                        const P = Te();
                                        if (!P) {
                                            s.value = !1;
                                            return
                                        }
                                        const m = await ce(v, P);
                                        if (m.paymentProvider === "gift_card") {
                                            await $(), R.value = !0;
                                            return
                                        }
                                        if (m.paymentProvider === "free-checkout" || !n.value.requireCreditCard) {
                                            const L = {
                                                    altId: n.value.locationId,
                                                    altType: "location",
                                                    source: {
                                                        type: n.value.pageType === j.FUNNEL ? j.FUNNEL : j.WEBINAR ? j.WEBINAR : j.WEBSITE,
                                                        id: n.value.funnelId,
                                                        name: n.value.funnelName
                                                    },
                                                    products: [{
                                                        id: p.value._id,
                                                        qty: 1
                                                    }]
                                                },
                                                q = await C.getAmountSummary(L),
                                                D = p.value ? .price.type === "recurring",
                                                N = q.recurringSummary ? .subtotalWithDiscount > 0,
                                                S = m.paymentProvider === "free-checkout";
                                            if (D && N || S) {
                                                if (m.paymentProvider === _.MERCADO_PAGO) {
                                                    H(ke, "", m);
                                                    return
                                                }
                                                await $(), fe.value = p.value ? .price ? .type === "recurring" ? "subscription" : "", x.value = B(m.sourceSubType || m.sourceType), R.value = !0;
                                                return
                                            } else await $(), g.value = !1, await ne({});
                                            return
                                        }
                                    }
                                    if (p.value ? .amount > 0 && ee("provider").value !== "pp") {
                                        const P = Te();
                                        if (!P) {
                                            s.value = !1;
                                            return
                                        }
                                        const m = await ce(v, P);
                                        if (m.paymentProvider === "gift_card") {
                                            await $(), R.value = !0;
                                            return
                                        }
                                        if (m.paymentProvider === "free-checkout") {
                                            fe.value = p.value ? .price.type === "recurring" ? "subscription" : "", await $(), x.value = B(m.sourceSubType || m.sourceType), R.value = !0, Se.value = !0;
                                            return
                                        }
                                    }
                                    if (i === _.CUSTOM_PROVIDER && r ? .manualPaymentMethodId) {
                                        H(Be, r ? .manualPaymentMethodId);
                                        return
                                    }
                                    const I = Te();
                                    if (!I) {
                                        s.value = !1;
                                        return
                                    }
                                    const o = await ce(v, I);
                                    if (ee("provider").value === "pp") {
                                        Se.value = !0, H(Ke, "", o);
                                        return
                                    } else {
                                        if (o.paymentProvider === xe) {
                                            H(xe, "", o);
                                            return
                                        } else if (o.paymentProvider === _.AUTHORIZE_NET || o.paymentProvider === _.WHITE_LABEL && o.providerSubType === _.AUTHORIZE_NET) {
                                            H(je, "", o);
                                            return
                                        } else if (o.paymentProvider === _.NMI || o.paymentProvider === _.WHITE_LABEL && o.providerSubType === _.NMI) {
                                            H(Ye, "", o);
                                            return
                                        } else if (o.paymentProvider === _.CUSTOM_PROVIDER) {
                                            $e.value = _.CUSTOM_PROVIDER, x.value = B(o.sourceSubType || o.sourceType), await Rt(_.CUSTOM_PROVIDER);
                                            return
                                        } else if (o.paymentProvider === _.ADYEN) {
                                            H(Ze, "", o);
                                            return
                                        } else if (o.paymentProvider === _.MERCADO_PAGO) {
                                            H(ke, "", o);
                                            return
                                        }
                                        const P = n.value.stripePublishableKey,
                                            m = n.value.stripeAccountId,
                                            L = n.value.stripePublishableKey;
                                        if (P && L) pe.value = await ea.loadStripe(P, {
                                            stripeAccount: m || void 0
                                        });
                                        else {
                                            alert("Stripe account not found!"), s.value = !1;
                                            return
                                        }
                                        St()
                                    }
                                } else Et()
                            } catch {
                                s.value = !1
                            }
                            break
                        }
                    case "click-to-call":
                        {
                            const e = c.element.extra;st(e[J.PHONE_NUMBER].value);
                            break
                        }
                    case "click-to-sms":
                        {
                            const e = c.element.extra;it(e[J.PHONE_NUMBER].value);
                            break
                        }
                    case "click-to-mail":
                        {
                            const e = c.element.extra;lt(e[J.EMAIL_ADDRESS].value);
                            break
                        }
                    case y.DOWNLOAD_FILE:
                        {
                            const e = c.element.extra;
                            if (e[J.DOWNLOAD_FILE].value && e[J.DOWNLOAD_FILE].value.fileUrl) {
                                F.value = !0;
                                try {
                                    await ut(e[J.DOWNLOAD_FILE].value)
                                } catch {} finally {
                                    F.value = !1
                                }
                            }
                            break
                        }
                    case y.GO_TO_MEMBERSHIP:
                        {
                            try {
                                let e;
                                const a = n.value.locationId,
                                    {
                                        ct: r,
                                        previewUrl: i
                                    } = ee(`_mf_${a}`).value;
                                location.hostname === "localhost" ? e = `http://localhost:4040/library/?domain=${i}&token=${r}&location_id=${a}` : e = `${i}/library?&token=${r}&location_id=${a}`, Ie({
                                    url: e,
                                    newTab: !1
                                })
                            } catch {
                                alert("Sorry something went wrong.")
                            }
                            break
                        }
                }
            }
            const Te = () => {
                let t = localStorage.getItem("_ud");
                t && (t = JSON.parse(t), sessionStorage.setItem("contactResponse", JSON.stringify(t)));
                const e = t ? .customer_id;
                if (!e) {
                    T.value = "Contact not found!";
                    return
                }
                return e
            };

            function B(t) {
                switch (t) {
                    case De.ONE_STEP_ORDER_FORM:
                        return ie.ONE_STEP_ORDER_FORMS;
                    case De.TWO_STEP_ORDER_FORM:
                        return ie.TWO_STEP_ORDER_FORMS;
                    case j.FORM:
                        return ie.FORMS;
                    case j.SURVEY:
                        return ie.SURVEYS;
                    default:
                        return ie.ONE_STEP_ORDER_FORMS
                }
            }
            async function ne(t) {
                try {
                    const e = t ? .membershipPurchase;
                    e ? .length && Ae(v, e[0].token);
                    const a = t ? .membershipToken;
                    a && Ae(v, a), Ht(() => {
                        Gt("track", "Upsell")
                    });
                    const r = na(),
                        i = typeof r.name == "string" ? r.name : "",
                        I = r.id || r.customer_id,
                        o = l.value ? .order ? ._id,
                        P = {
                            value: p.value ? .amount || l.value ? .order ? .amount || 0,
                            currency: M.value || n.value.currency,
                            content_ids: [p.value ? ._id, n.value.funnelId].filter(Boolean),
                            orderId: o,
                            contactId: I,
                            userData: {
                                email: r.email,
                                phone: r.phone,
                                firstName: r.first_name || i.split(" ")[0],
                                lastName: r.last_name || i.split(" ").slice(1).join(" ")
                            }
                        };
                    await nt.trackPurchase(P);
                    const {
                        saleAction: m,
                        stepPath: L,
                        visitWebsite: q
                    } = c.element.extra;
                    if (!m)
                        if (n.value.funnelNextStep) {
                            te();
                            return
                        } else throw new Error("Redirect not handled");
                    if (n.value.orderFormVersion === 2) {
                        const D = `_pl_${n.value.funnelId}`,
                            N = localStorage.getItem(D);
                        if (N) {
                            let S = JSON.parse(N);
                            S.products.push(p.value), S.total += l.value ? .order ? .amount, S.tax = l.value ? .order ? .taxSummary ? .map(oe => {
                                const se = S ? .tax ? .find(le => le._id === oe._id);
                                return se ? { ...se,
                                    amount: se.amount + oe.amount
                                } : oe
                            }), S.orderIds = [l.value.order._id, ...S.orderIds], et(D, JSON.stringify(S))
                        }
                    } else {
                        const D = `_pl_v1_${n.value.funnelId}`,
                            N = localStorage.getItem(D);
                        if (N) {
                            let S = JSON.parse(N);
                            S.push(c ? .element.extra ? .productId ? .value), et(D, JSON.stringify(S))
                        }
                    }
                    switch (m.value) {
                        case "url":
                            if (q && q.value && q.value.url) {
                                Ie(q.value);
                                break
                            } else throw new Error("Redirect not handled");
                        case "step-path":
                            if (L && L.value) {
                                te(L.value);
                                break
                            } else throw new Error("Redirect not handled");
                        default:
                            if (n.value.funnelNextStep) {
                                te();
                                break
                            } else throw new Error("Redirect not handled")
                    }
                } catch {
                    {
                        const a = JSON.parse(localStorage.getItem("_ud") || "{}"),
                            r = Le.includes(localStorage.getItem(`pmt_${n.value.funnelId}_${a?.id}`) || "") ? "We are proccessing your order with the bank. We'll confirm you order after bank's confirmation." : `Order successfully placed! 
 However, Something went wrong while displaying this webpage, please contact the seller.`;
                        alert(r)
                    }
                    s.value = !1;
                    return
                }
            }
            const $ = async () => {
                n.value.countryList.length === 0 && await jt();
                const t = ye(() => Yt(Ue ? .value) ? .states.map(r => ({
                    iso: r.code,
                    name: r.name
                })) ? ? []);
                let e = localStorage.getItem("_ud");
                e && (e = JSON.parse(e), sessionStorage.setItem("contactResponse", JSON.stringify(e)));
                const a = e ? .customer_id;
                if (!a) {
                    T.value = "Contact not found!";
                    return
                }
                if (ae.value && !V.value) {
                    re.value = "Invalid Captcha!", g.value = !1, s.value = !1;
                    return
                }
                if (me.value = t.value.find(r => r.name === e ? .state) ? .iso ? ? "", U.value.contact.shippingAddress.state = me.value, l.value = await Zt({
                        contactId: a,
                        domain: n.value.domain,
                        pageUrl: n.value.pageUrl,
                        locationId: v,
                        productPreviewList: [{
                            _id: A,
                            qty: 1
                        }],
                        store: n.value,
                        subType: De.UPSELL,
                        traceId: e ? .traceId,
                        reCaptchaToken: V.value,
                        toZip: e.postal_code,
                        toState: me.value,
                        toCountry: e.country,
                        toCity: e.city,
                        toStreetAddress: e.address1
                    }), V.value = void 0, l.value ? .error) {
                    l.value.status === 429 && (ae.value = !0), T.value = l.value.message ? ? "Error creating order!", g.value = !1, s.value = !1;
                    return
                }
                sessionStorage.setItem("orderResponse", JSON.stringify(l.value))
            };
            async function St() {
                try {
                    if (!A) throw new Error("No product Id found for initiating stripe payment");
                    if (T.value = "", await $(), h.value.amount = l.value ? .order ? .amount, h.value.currency = M.value.toLowerCase(), h.value.mode = p.value ? .price.type === "recurring" ? "subscription" : "payment", !l.value ? .order ? .amount && p.value ? .price.type !== "recurring" && (h.value.mode = "setup"), !l.value || l.value ? .error) {
                        s.value = !1;
                        return
                    }
                    let t = {};
                    t = {
                        altId: v,
                        altType: "location",
                        orderId: l.value.order._id,
                        reCaptchaToken: V.value
                    };
                    const e = JSON.parse(localStorage.getItem("_ud") || "{}");
                    Le.includes(localStorage.getItem(`pmt_${n.value.funnelId}_${e?.id}`) || "") && (t.paymentMethodTypes = [ue.sepa]);
                    const a = await ce(v, l.value.order ? .contactId),
                        r = localStorage.getItem(`pmt_${n.value.funnelId}_${e?.id}`) || "",
                        i = a.paymentMethod || r;
                    if (!!["klarna", "affirm", "afterpay_clearpay", "amazon_pay", "revolut_pay", "zip", "grabpay", "fpx"].includes(i) || l.value.order ? .amount === 0 && i === ue.bacs) {
                        x.value = B(a.sourceSubType || a.sourceType), R.value = !0;
                        return
                    }
                    const o = await C.initiateStripePayment(t);
                    if (!o.success) {
                        T.value = o.message || "We're sorry, but something went wrong. Please try again.", s.value = !1;
                        return
                    }
                    const {
                        clientSecret: P,
                        paymentMethodId: m
                    } = o;
                    if (P && ![ue.bacs, ue.cashapp].includes(i)) {
                        let Q = {};
                        if (Le.includes(r) ? Q = await pe.value.confirmSepaDebitPayment(P, {
                                payment_method: m
                            }) : i === ue.becs ? Q = await pe.value.confirmAuBecsDebitPayment(P, {
                                payment_method: m
                            }) : Q = await pe.value.confirmCardPayment(P, {
                                payment_method: m,
                                setup_future_usage: "off_session"
                            }), Q.error) {
                            Q.error.message && alert(Q.error.message);
                            return
                        }
                    }
                    const {
                        orderId: L,
                        paymentIntentId: q,
                        subscriptionId: D,
                        invoiceId: N,
                        subId: S,
                        txnId: oe
                    } = o, se = {
                        altId: v,
                        altType: "location",
                        orderId: L,
                        paymentIntentId: q,
                        subscriptionId: D,
                        invoiceId: N,
                        isAuth: !1,
                        subId: S,
                        txnId: oe,
                        attribution: {
                            eventData: he(),
                            sessionId: ge(v),
                            sessionFingerprint: _e(v)
                        }
                    }, le = await C.verifyStripePayment(se);
                    if (!le.success) {
                        T.value = le.message || "We're sorry, but something went wrong. Please try again.";
                        return
                    }
                    await ne(le)
                } catch (t) {
                    if (t ? .response ? .status === 429) {
                        ae.value = !0, g.value = !1, s.value = !1;
                        return
                    }
                    T.value = tt(t), s.value = !1
                }
            }
            async function H(t, e, a) {
                try {
                    if (!A) throw new Error(`No product Id found for initiating ${t||"stripe"} payment`);
                    if (g.value = !0, T.value = "", await $(), !l.value || l.value ? .error) {
                        s.value = !1, g.value = !1;
                        return
                    }
                    let r;
                    if (l.value ? .order._id) {
                        a || (a = await ce(v, l.value.order ? .contactId)), r = {
                            altId: v,
                            altType: "location",
                            orderId: l.value ? .order._id,
                            attribution: {
                                eventData: he(),
                                sessionId: ge(v),
                                sessionFingerprint: _e(v)
                            }
                        };
                        let i;
                        switch (t) {
                            case je:
                                {
                                    a ? .paymentProvider && (r.providerType = a.paymentProvider),
                                    a ? .providerId && (r.providerId = a.providerId),
                                    i = await C.authorizeNetOrderPayment(r);
                                    break
                                }
                            case Ye:
                                {
                                    a ? .paymentProvider && (r.providerType = a.paymentProvider),
                                    a ? .providerId && (r.providerId = a.providerId),
                                    i = await C.nmiOrderPayment(r);
                                    break
                                }
                            case Be:
                                {
                                    e && (r.manualPaymentMethodId = e),
                                    i = await C.customProviderOrderPayment(r);
                                    break
                                }
                            case xe:
                                {
                                    const I = await Xt(v, l.value.order ? .contactId);
                                    if (!I || I === "false") {
                                        fe.value = p.value ? .price.type === "recurring" ? "subscription" : "", x.value = B(a ? .sourceSubType || a ? .sourceType), R.value = !0, g.value = !1;
                                        return
                                    }
                                    a ? .providerId && (r.providerId = a.providerId),
                                    i = await C.squareOrderPayment({ ...r,
                                        saveCard: !1
                                    });
                                    break
                                }
                            case Ze:
                                {
                                    a ? .providerId && (r.providerId = a.providerId),
                                    i = await C.adyenOrderPayment(r);
                                    break
                                }
                            case ke:
                                {
                                    const I = await Qt(v, l.value.order ? .contactId);
                                    if (!I || I === "false") {
                                        x.value = B(a ? .sourceSubType || a ? .sourceType), R.value = !0, g.value = !1;
                                        return
                                    }
                                    a ? .providerId && (r.providerId = a.providerId),
                                    i = await C.mercadoPagoOrderPayment({ ...r,
                                        saveCard: !0
                                    });
                                    break
                                }
                            case Ke:
                                x.value = B(a ? .sourceSubType || a ? .sourceType), R.value = !0, g.value = !1;
                                return;
                            default:
                                break
                        }
                        if (g.value = !1, !i ? .success) {
                            T.value = i ? .message || "We're sorry, but something went wrong. Please try again.", s.value = !1;
                            return
                        }
                        await ne({
                            membershipPurchase: i.membershipPurchase,
                            membershipToken: i.membershipToken
                        })
                    }
                } catch (r) {
                    s.value = !1, g.value = !1, T.value = tt(r)
                }
            }
            async function Et() {
                if (!A) {
                    s.value = !1;
                    return
                }
                try {
                    const t = Bt(),
                        e = { ...he(),
                            fbEventId: t
                        },
                        a = ge(v),
                        r = _e(v),
                        i = await at.funnelPayment({
                            fingerprint: ee("msgsndr_id").value,
                            productList: [A],
                            locationId: v,
                            funnelId: pt,
                            stepId: mt,
                            pageId: ft,
                            domain: n.value.domain,
                            pageUrl: n.value.pageUrl,
                            source: "payment_button",
                            submissionType: 3,
                            eventData: e,
                            sessionId: a,
                            sessionFingerprint: r,
                            _mp: ee("_mp").value
                        });
                    await ne(i)
                } catch {
                    s.value = !1
                }
            }

            function Je() {
                let t = "";
                switch (z) {
                    case y.CLICK_TO_CALL:
                        {
                            let e = c.element.extra[J.PHONE_NUMBER] ? .value;e = e ? .replace("tel:", ""),
                            t = `tel:${e}`;
                            break
                        }
                    case y.CLICK_TO_SMS:
                        {
                            let e = c.element.extra[J.PHONE_NUMBER] ? .value;e = e ? .replace("sms:", ""),
                            t = `sms:${e}`;
                            break
                        }
                    case y.GO_TO_URL:
                        {
                            t = Oe ? .url,
                            t = we(t),
                            t && !t.startsWith("#") && !/^https?:/.test(t) && !t.toLowerCase().startsWith("mailto:") && !t.toLowerCase().startsWith("tel:") && !t.toLowerCase().startsWith("sms:") && (t = `https://${t}`),
                            be.value = Oe ? .newTab ? "_blank" : "";
                            break
                        }
                    case y.GO_TO_STEP:
                        {
                            const e = c.element ? .extra ? .stepPath ? .value;t = ct(e, !1);
                            break
                        }
                }
                return t
            }
            async function Ot(t) {
                if (n.value.videoExistsInPage && Me.$emit("handle-redirect"), z === y.GO_TO_STEP) {
                    const e = c.element.extra.stepPath.value;
                    dt(t, e)
                }
            }

            function Tt(t) {
                t.target === t.currentTarget && (Ee.value = !0)
            }

            function wt() {
                R.value = !1, s.value = !1, w.value = !1
            }
            async function Rt(t) {
                if (!A) throw new Error("No product Id found for initiating stripe payment");
                if (T.value = "", await $(), !(l.value ? .order ? ._id && t === _.CUSTOM_PROVIDER)) {
                    s.value = !1;
                    return
                }
                const e = {
                    source: "order",
                    sourceId: l ? .value ? .order ? ._id,
                    sourceDetails: l.value.order,
                    traceId: l.value.traceId,
                    extra: {
                        attribution: {
                            eventData: he(),
                            sessionId: ge(v),
                            sessionFingerprint: _e(v)
                        }
                    },
                    captchaToken: V.value
                };
                We.value ? .confirmPayment(e)
            }
            return (t, e) => {
                const a = oa,
                    r = sa,
                    i = la;
                return b(), E($t, null, [ve.value ? (b(), E("a", {
                    key: 0,
                    id: `${d.element.id}_btn`,
                    href: Pe.value,
                    target: be.value,
                    rel: be.value === "_blank" ? "noreferrer noopener" : void 0,
                    "data-animation-class": f(de),
                    class: Ge([d.classStyles, "text-center"]),
                    style: X(f(ze)(f(de)) ? "opacity: 0" : ""),
                    onClick: e[0] || (e[0] = I => Ot(I)),
                    "aria-label": He()
                }, [k("span", {
                    style: X(s.value ? "visibility: hidden;" : ""),
                    class: "main-heading-group"
                }, [d.element.extra.icon !== "" ? (b(), E("span", ua)) : O("", !0), k("span", ca, K(f(Y)), 1), d.element.extra.icon !== "" ? (b(), E("span", da)) : O("", !0)], 4), d.element.extra.subText && d.element.extra.subText.value ? (b(), E("span", {
                    key: 0,
                    style: X(s.value ? "visibility: hidden;" : ""),
                    class: "sub-heading-group text-xs font-sans"
                }, [k("span", va, K(f(Z)), 1)], 4)) : O("", !0)], 14, ia)) : O("", !0), ae.value ? (b(), E("section", pa, [Re(a, {
                    onExpired: e[1] || (e[1] = () => V.value = ""),
                    onVerify: It
                }), re.value ? (b(), E("p", ma, K(re.value), 1)) : O("", !0)])) : O("", !0), ve.value ? O("", !0) : (b(), E("button", {
                    key: 2,
                    disabled: s.value || f(G) && w.value || F.value,
                    "data-animation-class": f(de),
                    id: `${d.element.id}_btn`,
                    style: X(s.value || f(G) && w.value || F.value ? "cursor: default;" : f(_t) ? "opacity: 0" : ""),
                    class: Ge([d.classStyles]),
                    onClick: bt,
                    onAnimationend: Tt,
                    "aria-label": He()
                }, [k("div", {
                    style: X(s.value || f(G) && w.value || F.value ? "visibility: hidden;" : ""),
                    class: "main-heading-group"
                }, [d.element.extra.icon !== "" ? (b(), E("div", ya)) : O("", !0), k("div", _a, K(f(Y)), 1), d.element.extra.icon !== "" ? (b(), E("div", ga)) : O("", !0)], 4), d.element.extra.subText && d.element.extra.subText.value ? (b(), E("div", {
                    key: 0,
                    style: X(s.value || f(G) && w.value || F.value ? "visibility: hidden;" : ""),
                    class: "text-xs font-sans"
                }, [k("div", ha, K(f(Z)), 1)], 4)) : O("", !0), Vt(k("div", Ia, [Re(aa, {
                    loading: s.value || f(G) && w.value || F.value,
                    color: "rgb(255, 255, 255)",
                    size: "30px"
                }, null, 8, ["loading"])], 512), [
                    [Wt, s.value || f(G) && w.value || F.value]
                ])], 46, fa)), k("div", null, [Fe.value && f(n).funnelPageId && f(G) ? (b(), E("section", Pa, [k("div", {
                    id: `${d.element.id}-payment-form`,
                    class: "payment-form"
                }, [Re(r, {
                    id: `${d.element.id}-payment-element`,
                    ref_key: "confirmPaymentRef",
                    ref: We,
                    customProviderProps: U.value,
                    paymentProps: {
                        currency: M.value,
                        mode: h.value.mode,
                        amount: h.value.amount || p.value ? .amount || 0
                    },
                    entityType: x.value,
                    onPaymentCallback: gt
                }, null, 8, ["id", "customProviderProps", "paymentProps", "entityType"]), W.value ? (b(), E("div", Sa, [e[2] || (e[2] = k("img", {
                    src: qt,
                    alt: "alert"
                }, null, -1)), Ut(" " + K(W.value), 1)])) : O("", !0)], 8, ba)])) : O("", !0)]), T.value ? (b(), E("div", Ea, K(T.value), 1)) : O("", !0), R.value ? (b(), Ft(i, {
                    key: 4,
                    extra: c.element.extra,
                    stripeOptions: h.value,
                    order: l.value,
                    traceId: l.value.traceId,
                    element: c.element,
                    styles: d.classStyles,
                    squarePaymentMode: fe.value,
                    showPaypal: Se.value && M.value,
                    customProviderProps: U.value,
                    paymentProps: {
                        currency: M.value,
                        mode: f(yt) ? "subscription" : "onetime",
                        amount: h.value.amount || p.value ? .amount || 0
                    },
                    entityType: x.value,
                    onClosePaymentElementModal: wt
                }, null, 8, ["extra", "stripeOptions", "order", "traceId", "element", "styles", "squarePaymentMode", "showPaypal", "customProviderProps", "paymentProps", "entityType"])) : O("", !0)], 64)
            }
        }
    }),
    za = Object.assign(Ta, {
        __name: "PreviewElementsButton"
    });
export {
    za as
    default
};