import {
    an as c,
    aM as r
} from "./CUwSMWNa.js";
const w = (i, t) => {
        try {
            window.fbq && (window.fbq("init", i), p("track", t || "PageView"))
        } catch {}
    },
    p = (i, t, n) => {
        if (t !== "None") try {
            window.fbq && (n ? window.fbq(i, t || "SubmitApplication", {}, {
                eventID: n
            }) : window.fbq(i, t || "SubmitApplication"))
        } catch {}
    },
    e = i => {
        window.dataLayer = window.dataLayer || [], window.dataLayer.push(i)
    },
    g = i => {
        const t = c();
        i === t.public.HL_HOMEPAGE_STEPID && e({
            event: "sign_up_open_form"
        })
    },
    u = i => {
        const t = c();
        i === t.public.HL_HOMEPAGE_STEPID && e({
            event: "sign_up_step1_complete"
        })
    },
    S = ({
        stepId: i,
        value: t,
        plan_name: n,
        plan_name_raw: o,
        plan_id: s
    }) => {
        const a = c();
        i === a.public.HL_HOMEPAGE_STEPID && (r("_signup_plan", JSON.stringify({
            plan_name: n,
            plan_name_raw: o,
            plan_id: s
        })), e({
            event: "sign_up",
            value: t,
            plan_name: n,
            plan_name_raw: o,
            plan_id: s
        }))
    };
export {
    u as a, S as b, p as f, w as i, g as t
};