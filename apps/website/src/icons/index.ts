import { defineComponent, h, type FunctionalComponent } from "vue";

/**
 * Minimal Heroicons-style outline icons (24x24, stroke-based) so the
 * landing page has no external icon-font/SVG-sprite dependency.
 * Usage: <CheckIcon class="h-5 w-5 text-success" />
 */
function icon(paths: string[]): FunctionalComponent {
  return defineComponent({
    inheritAttrs: false,
    setup(_, { attrs }) {
      return () =>
        h(
          "svg",
          {
            ...attrs,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": 1.5,
          },
          paths.map((d) => h("path", { d, "stroke-linecap": "round", "stroke-linejoin": "round" })),
        );
    },
  }) as unknown as FunctionalComponent;
}

export const CheckIcon = icon(["M4.5 12.75l6 6 9-13.5"]);
export const XIcon = icon(["M6 18L18 6M6 6l12 12"]);
export const ArrowRightIcon = icon(["M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"]);
export const ChevronDownIcon = icon(["M19.5 8.25l-7.5 7.5-7.5-7.5"]);
export const MenuIcon = icon(["M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"]);

export const GlobeIcon = icon([
  "M12 21a9 9 0 100-18 9 9 0 000 18z",
  "M3.6 9h16.8M3.6 15h16.8",
  "M12 3a14.5 14.5 0 000 18 14.5 14.5 0 000-18z",
]);

export const ChartIcon = icon([
  "M3 3v18h18",
  "M7.5 16.5v-4.5",
  "M12 16.5v-8",
  "M16.5 16.5v-6",
]);

export const QrIcon = icon([
  "M3.75 3.75h4.5v4.5h-4.5v-4.5z",
  "M15.75 3.75h4.5v4.5h-4.5v-4.5z",
  "M3.75 15.75h4.5v4.5h-4.5v-4.5z",
  "M13.5 13.5h2.25v2.25H13.5v-2.25z",
  "M17.25 13.5h3v3h-3v-3z",
  "M13.5 18h2.25v2.25H13.5V18z",
  "M17.25 18h3v2.25h-3V18z",
]);

export const BoltIcon = icon(["M13.5 3L4.5 14.25h6l-1.5 6.75 9-11.25h-6l1.5-6.75z"]);

export const ClockIcon = icon([
  "M12 21a9 9 0 100-18 9 9 0 000 18z",
  "M12 7.5V12l3 1.5",
]);

export const UsersIcon = icon([
  "M15 19.5a3 3 0 00-6 0",
  "M15 19.5a6 6 0 10-6 0",
  "M9 19.5H4.5v-.75a3.75 3.75 0 013.9-3.745",
  "M15 19.5h4.5v-.75a3.75 3.75 0 00-3.9-3.745",
  "M9 8.25a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z",
  "M4.5 9.75a1.875 1.875 0 113.75 0 1.875 1.875 0 01-3.75 0z",
  "M15.75 9.75a1.875 1.875 0 113.75 0 1.875 1.875 0 01-3.75 0z",
]);

export const DownloadIcon = icon([
  "M12 3v13.5",
  "M7.5 12l4.5 4.5 4.5-4.5",
  "M4.5 19.5h15",
]);

export const ShieldIcon = icon([
  "M12 3l7.5 3v6c0 4.5-3 8.25-7.5 9-4.5-.75-7.5-4.5-7.5-9V6l7.5-3z",
  "M9.25 12l2 2 3.5-4",
]);

export const WifiOffIcon = icon([
  "M3 3l18 18",
  "M8.25 8.7a10.4 10.4 0 0110.4 2.6",
  "M5.1 11.3a10.4 10.4 0 013-2.05",
  "M11.1 15.15a4.5 4.5 0 013.9 1.1",
  "M12 19.5h.01",
]);
