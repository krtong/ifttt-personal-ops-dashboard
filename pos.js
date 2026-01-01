import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://tbrnarytcojngpbzzwcn.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_E8-dvNNh5V3VQLAcK-xqiQ_dLEu1Bsh";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const authEl = document.getElementById("auth");
const reportEl = document.getElementById("report");
const signInBtn = document.getElementById("sign-in");
const signOutBtn = document.getElementById("sign-out");
const authStatusEl = document.getElementById("auth-status");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");

const reportUpdatedEl = document.getElementById("report-updated");
const reportNoteEl = document.getElementById("report-note");
const reportRangeEl = document.getElementById("report-range");
const reportSummaryEl = document.getElementById("report-summary");
const reportSectionsEl = document.getElementById("report-sections");

const RANGE_OPTIONS = [
  { label: "1d", days: 1 },
  { label: "7d", days: 7 },
  { label: "30d", days: 30 },
];
let currentRange = 7;

function formatNumber(value, decimals = 1) {
  if (value == null || Number.isNaN(value)) return "—";
  return Number(value).toFixed(decimals);
}

function formatMetricValue(metric) {
  if (metric.current == null || metric.current === "") return "Missing";
  if (typeof metric.current === "string") return metric.current;
  const decimals = metric.unit === "score" ? 0 : 1;
  return `${formatNumber(metric.current, decimals)}${metric.unit ? ` ${metric.unit}` : ""}`;
}

function formatTarget(metric) {
  if (metric.target == null && metric.min == null && metric.max == null) return "—";
  const parts = [];
  if (metric.min != null) parts.push(`>= ${formatNumber(metric.min, 1)}${metric.unit ? ` ${metric.unit}` : ""}`);
  if (metric.target != null) parts.push(`${formatNumber(metric.target, 1)}${metric.unit ? ` ${metric.unit}` : ""}`);
  if (metric.max != null) parts.push(`<= ${formatNumber(metric.max, 1)}${metric.unit ? ` ${metric.unit}` : ""}`);
  return parts.join(" · ");
}

function formatTrend(metric) {
  if (metric.trend == null) return "—";
  const decimals = metric.unit === "score" ? 0 : 1;
  const sign = metric.trend > 0 ? "+" : "";
  return `${sign}${formatNumber(metric.trend, decimals)}${metric.trend_unit ? ` ${metric.trend_unit}` : ""} vs prior`;
}

function renderLineChart(series) {
  const width = 320;
  const height = 140;
  const padding = { top: 20, right: 10, bottom: 20, left: 30 };
  const values = series.points.map((p) => p.v);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  const points = series.points.map((point, idx) => {
    const x = padding.left + (idx / Math.max(1, series.points.length - 1)) * (width - padding.left - padding.right);
    const y = height - padding.bottom - ((point.v - min) / range) * (height - padding.top - padding.bottom);
    return `${x},${y}`;
  }).join(" ");

  return `
    <div class="chart-legend">
      <div class="legend-item"><span class="legend-swatch" style="background:${series.color || "#38bdf8"}"></span>${series.label}</div>
    </div>
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${series.label}">
      <line x1="${padding.left}" y1="${height - padding.bottom}" x2="${width - padding.right}" y2="${height - padding.bottom}" stroke="rgba(148,163,184,0.2)" stroke-width="1" />
      <line x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${height - padding.bottom}" stroke="rgba(148,163,184,0.2)" stroke-width="1" />
      <polyline fill="none" stroke="${series.color || "#38bdf8"}" stroke-width="2" points="${points}" />
    </svg>
  `;
}

function buildSummaryCards(report) {
  reportSummaryEl.innerHTML = "";
  const cards = [];

  const raceSection = report.sections?.find((section) => section.key === "race");
  const daysToRace = raceSection?.evidence?.find((m) => m.key === "days_to_race")?.current ?? null;
  cards.push({ label: "Days to race", value: daysToRace ?? "—", meta: "Escape from Alcatraz" });

  cards.push({
    label: "Confidence",
    value: report.confidence != null ? `${formatNumber(report.confidence * 100, 0)}%` : "—",
    meta: report.coverage?.nutrition_coverage != null
      ? `Nutrition coverage ${formatNumber(report.coverage.nutrition_coverage * 100, 0)}%`
      : "Coverage unknown",
  });

  cards.push({
    label: "Workout coverage",
    value: report.coverage?.workout_coverage != null
      ? `${formatNumber(report.coverage.workout_coverage * 100, 0)}%`
      : "—",
    meta: report.coverage?.workout_days != null ? `${report.coverage.workout_days} days logged` : "",
  });

  cards.push({
    label: "Weight stale",
    value: report.coverage?.weight_stale_days != null ? `${formatNumber(report.coverage.weight_stale_days, 1)} d` : "—",
    meta: "Days since last weigh-in",
  });

  cards.forEach((card) => {
    const el = document.createElement("div");
    el.className = "summary-card";
    el.innerHTML = `
      <div class="label">${card.label}</div>
      <div class="value">${card.value}</div>
      <div class="meta">${card.meta || ""}</div>
    `;
    reportSummaryEl.appendChild(el);
  });
}

function renderSection(section, seriesByKey) {
  const wrapper = document.createElement("section");
  wrapper.className = "section";
  wrapper.dataset.section = section.key;

  const hero = document.createElement("div");
  hero.className = "section-hero";
  hero.innerHTML = `
    <div class="section-title">${section.title}</div>
    <div class="section-plan">${section.plan || "Plan: —"}</div>
    <div class="section-actions">
      ${(section.actions || []).map((action) => `<div class="action">${action.text}</div>`).join("")}
    </div>
    ${section.notes ? `<div class="section-notes">${section.notes}</div>` : ""}
  `;

  const evidence = document.createElement("div");
  evidence.className = "evidence-grid";

  const header = document.createElement("div");
  header.className = "evidence-row header";
  header.innerHTML = `
    <div>Metric</div>
    <div>Current</div>
    <div>Target</div>
    <div>Window</div>
    <div>Trend</div>
  `;
  evidence.appendChild(header);

  (section.evidence || []).forEach((metric) => {
    const row = document.createElement("div");
    row.className = "evidence-row";
    row.dataset.metric = metric.key;
    row.dataset.importance = metric.importance ?? "";
    row.innerHTML = `
      <div class="metric">${metric.label}</div>
      <div class="value">${formatMetricValue(metric)}</div>
      <div class="value">${formatTarget(metric)}</div>
      <div class="muted">${metric.window || "—"}</div>
      <div class="muted">${formatTrend(metric)}</div>
    `;
    evidence.appendChild(row);
  });

  wrapper.appendChild(hero);
  wrapper.appendChild(evidence);

  const series = seriesByKey.get(section.key);
  if (series) {
    const chart = document.createElement("div");
    chart.className = "chart-block";
    chart.innerHTML = renderLineChart(series) +
      `<div class="chart-caption">Interval: ${series.interval} · Range: ${series.range_days}d</div>`;
    wrapper.appendChild(chart);
  }

  reportSectionsEl.appendChild(wrapper);
}

function mapSeriesToSections(series, rangeDays) {
  const map = new Map();
  if (!Array.isArray(series)) return map;
  const preferInterval = rangeDays === 1 ? "hourly" : "daily";

  const pick = (labelMatch) => {
    const matches = series.filter((s) => s.label.includes(labelMatch));
    if (!matches.length) return null;
    const intervalMatches = matches.filter((s) => s.interval === preferInterval);
    const rangeMatches = intervalMatches.filter((s) => (s.range_days || 0) >= rangeDays);
    if (rangeMatches.length) return rangeMatches[0];
    if (intervalMatches.length) return intervalMatches[0];
    return matches[0];
  };

  const trainingSeries = pick("Training minutes");
  if (trainingSeries) map.set("training", trainingSeries);
  const nutritionSeries = pick("Calories intake");
  if (nutritionSeries) map.set("nutrition", nutritionSeries);
  const proteinSeries = pick("Protein intake");
  if (proteinSeries && nutritionSeries == null) map.set("nutrition", proteinSeries);
  const sleepSeries = pick("Sleep duration");
  if (sleepSeries) map.set("sleep", sleepSeries);

  return map;
}

function renderRangeTabs() {
  reportRangeEl.innerHTML = "";
  RANGE_OPTIONS.forEach((option) => {
    const tab = document.createElement("button");
    tab.className = `range-tab ${currentRange === option.days ? "active" : ""}`;
    tab.textContent = option.label;
    tab.addEventListener("click", () => {
      currentRange = option.days;
      renderRangeTabs();
      loadReport();
    });
    reportRangeEl.appendChild(tab);
  });
}

async function loadReport() {
  if (!reportSectionsEl) return;
  reportSectionsEl.innerHTML = "";
  reportSummaryEl.innerHTML = "";

  const { data, error } = await supabase
    .from("pos_report_daily")
    .select("date,report_json,updated_at")
    .order("date", { ascending: false })
    .limit(1);

  if (error || !data || !data.length) {
    reportUpdatedEl.textContent = "Updated —";
    reportNoteEl.textContent = "No report data available yet.";
    return;
  }

  const row = data[0];
  const report = row.report_json || {};
  reportUpdatedEl.textContent = `Updated ${row.updated_at || "—"}`;
  reportNoteEl.textContent = report.plan_summary
    ? `Summary: ${report.plan_summary}`
    : "Evidence-first report for training, fuel, and recovery.";

  buildSummaryCards(report);

  const seriesBySection = mapSeriesToSections(report.series || [], currentRange);
  (report.sections || []).forEach((section) => renderSection(section, seriesBySection));
}

async function refreshAuth() {
  const { data } = await supabase.auth.getSession();
  if (data.session) {
    authEl.classList.add("hidden");
    reportEl.classList.remove("hidden");
    if (authStatusEl) authStatusEl.textContent = "";
    await loadReport();
  } else {
    authEl.classList.remove("hidden");
    reportEl.classList.remove("hidden");
    if (authStatusEl) authStatusEl.textContent = "Signed out (read-only).";
    await loadReport();
  }
}

async function signIn() {
  const email = emailEl?.value?.trim();
  const password = passwordEl?.value;
  if (!email || !password) {
    if (authStatusEl) authStatusEl.textContent = "Enter email and password.";
    return;
  }
  if (authStatusEl) authStatusEl.textContent = "Signing in…";
  try {
    const timeout = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Sign-in timed out. Check network or try again.")), 15000);
    });
    const signInPromise = supabase.auth.signInWithPassword({ email, password });
    const { data, error } = await Promise.race([signInPromise, timeout]);
    if (error || !data?.session) {
      if (authStatusEl) authStatusEl.textContent = "Sign-in failed. Retrying direct auth…";
      await signInDirect(email, password);
      await refreshAuth();
      return;
    }
    if (authStatusEl) authStatusEl.textContent = "Signed in";
    await refreshAuth();
  } catch (err) {
    try {
      if (authStatusEl) authStatusEl.textContent = "Sign-in timed out. Retrying direct auth…";
      await signInDirect(email, password);
      await refreshAuth();
    } catch (inner) {
      if (authStatusEl) authStatusEl.textContent = inner?.message || err?.message || "Sign in failed";
    }
  }
}

async function signInDirect(email, password) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const resp = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      signal: controller.signal,
    });
    const payload = await resp.json().catch(() => ({}));
    if (!resp.ok) {
      const message = payload?.error_description || payload?.message || "Direct sign-in failed";
      throw new Error(message);
    }
    if (!payload?.access_token || !payload?.refresh_token) {
      throw new Error("Direct sign-in failed: missing token");
    }
    await supabase.auth.setSession({
      access_token: payload.access_token,
      refresh_token: payload.refresh_token,
    });
  } finally {
    clearTimeout(timer);
  }
}

async function signOut() {
  await supabase.auth.signOut();
  await refreshAuth();
}

signInBtn?.addEventListener("click", signIn);
signOutBtn?.addEventListener("click", signOut);

supabase.auth.onAuthStateChange(() => refreshAuth());
renderRangeTabs();
refreshAuth();
