import type { MetricType } from "web-vitals";

type OnPerfEntry = ((metric: MetricType) => void) | undefined;

/**
 * Report the web vitals using a callback function like `console.log`.
 *
 * @param {OnPerfEntry} [onPerfEntry] - A callback function to log the perf.
 */
const reportWebVitals = async (onPerfEntry?: OnPerfEntry) => {
  if (typeof onPerfEntry !== "function") return;

  await import("web-vitals").then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
    onCLS(onPerfEntry);
    onINP(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  });
};

export default reportWebVitals;
