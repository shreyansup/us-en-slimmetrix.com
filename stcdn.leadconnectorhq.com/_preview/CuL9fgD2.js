import {
    d as c,
    g as d,
    r as i,
    o as r,
    i as u,
    a as f,
    j as v,
    b as p,
    e as o,
    f as _,
    c3 as C,
    n as M,
    m as h
} from "./CUwSMWNa.js";
import {
    T as k
} from "./DnX7mgXc.js";
const b = ["src"],
    T = ["id"],
    g = c({
        __name: "TestimonialModal",
        setup(x) {
            const {
                $bus: t
            } = d(), e = i(null), n = a => {
                e.value = a
            }, s = () => {
                e.value = null
            }, l = i(null), m = a => {
                l.value && !l.value.contains(a.target) && s()
            };
            return r(() => {
                t.$on("open-testimonial-modal", n)
            }), u(() => {
                t.$off("open-testimonial-modal", n)
            }), (a, y) => e.value ? (p(), f("div", {
                key: 0,
                class: "testimonial-modal-overlay",
                onMousedown: m
            }, [o("button", {
                class: "testimonial-modal-close",
                onClick: s,
                "aria-label": "Close"
            }, [o("img", {
                src: _(C),
                class: "testimonial-modal-close-icon",
                alt: "Close"
            }, null, 8, b)]), o("div", {
                class: "testimonial-modal-content",
                ref_key: "modalContentRef",
                ref: l
            }, [o("div", {
                id: e.value.element ? .id,
                class: M(["c-testimonial", "c-wrapper", e.value.element ? .id, e.value.element ? .extra ? .nodeId])
            }, [h(k, {
                testimonial: e.value.testimonial,
                element: e.value.element,
                class: "testimonial-modal-card",
                fullContent: !0
            }, null, 8, ["testimonial", "element"])], 10, T)], 512)], 32)) : v("", !0)
        }
    }),
    w = Object.assign(g, {
        __name: "PreviewElementsTestimonialModal"
    });
export {
    w as
    default
};