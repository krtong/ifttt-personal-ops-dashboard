import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

      const SUPABASE_URL = "https://tbrnarytcojngpbzzwcn.supabase.co";
      const SUPABASE_ANON_KEY = "sb_publishable_E8-dvNNh5V3VQLAcK-xqiQ_dLEu1Bsh";
      const AGENT_INBOX_URL = "";
      const supabase = window.supabaseClient || createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

      const authEl = document.getElementById("auth");
      const settingsEl = document.getElementById("settings");
      const dataEl = document.getElementById("data");

      const emailEl = document.getElementById("email");
      const passwordEl = document.getElementById("password");
      const authStatusEl = document.getElementById("auth-status");
      const posSummaryEl = document.getElementById("pos-summary");
      const posSummaryMetricsEl = document.getElementById("pos-summary-metrics");
      const posSummaryUpdatedEl = document.getElementById("pos-summary-updated");
      const posSummaryFreshnessEl = document.getElementById("pos-summary-freshness");
      const posSummaryNoteEl = document.getElementById("pos-summary-note");
      const posSummaryDriversEl = document.getElementById("pos-summary-drivers");
      const posReportUpdatedEl = document.getElementById("pos-report-updated");
      const posReportCoverageEl = document.getElementById("pos-report-coverage");
      const reportTrainingAssessmentEl = document.getElementById("report-training-assessment");
      const reportTrainingActionEl = document.getElementById("report-training-action");
      const reportTrainingMetricsEl = document.getElementById("report-training-metrics");
      const reportSleepAssessmentEl = document.getElementById("report-sleep-assessment");
      const reportSleepActionEl = document.getElementById("report-sleep-action");
      const reportSleepMetricsEl = document.getElementById("report-sleep-metrics");
      const reportNutritionAssessmentEl = document.getElementById("report-nutrition-assessment");
      const reportNutritionActionEl = document.getElementById("report-nutrition-action");
      const reportNutritionMetricsEl = document.getElementById("report-nutrition-metrics");
      const reportBodyAssessmentEl = document.getElementById("report-body-assessment");
      const reportBodyActionEl = document.getElementById("report-body-action");
      const reportBodyMetricsEl = document.getElementById("report-body-metrics");
      const reportRiskAssessmentEl = document.getElementById("report-risk-assessment");
      const reportRiskActionEl = document.getElementById("report-risk-action");
      const reportRiskMetricsEl = document.getElementById("report-risk-metrics");
      const posDomainSleepMetricsEl = document.getElementById("pos-domain-sleep-metrics");
      const posDomainDietMetricsEl = document.getElementById("pos-domain-diet-metrics");
      const posDomainProgressMetricsEl = document.getElementById("pos-domain-progress-metrics");
      const posDomainWeightMetricsEl = document.getElementById("pos-domain-weight-metrics");
      const posDomainCyclingMetricsEl = document.getElementById("pos-domain-cycling-metrics");
      const posDomainRunningMetricsEl = document.getElementById("pos-domain-running-metrics");
      const posDomainSwimmingMetricsEl = document.getElementById("pos-domain-swimming-metrics");
      const posDomainFacialMetricsEl = document.getElementById("pos-domain-facial-metrics");
      const posSleepQualityDurationEl = document.getElementById("pos-sleep-quality-duration");
      const posSleepQualityScoreEl = document.getElementById("pos-sleep-quality-score");
      const posSleepQualityBarsEl = document.getElementById("pos-sleep-quality-bars");
      const posBreathingQualityValueEl = document.getElementById("pos-breathing-quality-value");
      const posBreathingQualityNoteEl = document.getElementById("pos-breathing-quality-note");
      const posSleepScoreGridEl = document.getElementById("pos-sleep-score-grid");
      const posSleepScoreNoteEl = document.getElementById("pos-sleep-score-note");
      const posSleepHeartChartEl = document.getElementById("pos-sleep-heart-chart");
      const posSleepHeartNoteEl = document.getElementById("pos-sleep-heart-note");
      const posWeekSportTabsEl = document.getElementById("pos-week-sport-tabs");
      const posWeekSportSummaryEl = document.getElementById("pos-week-sport-summary");
      const posWeekSportChartEl = document.getElementById("pos-week-sport-chart");
      const posWeekSportCaptionEl = document.getElementById("pos-week-sport-caption");
      const posFitnessCardChartEl = document.getElementById("pos-fitness-card-chart");
      const posFitnessCardNoteEl = document.getElementById("pos-fitness-card-note");
      const posFitnessCardCaptionEl = document.getElementById("pos-fitness-card-caption");
      const posStreakGridEl = document.getElementById("pos-streak-grid");
      const posStreakLabelsEl = document.getElementById("pos-streak-labels");
      const posStreakNoteEl = document.getElementById("pos-streak-note");
      const posPowerSkillsChartEl = document.getElementById("pos-power-skills-chart");
      const posPowerSkillsNoteEl = document.getElementById("pos-power-skills-note");
      const posDomainSleepPlanEl = document.getElementById("pos-domain-sleep-plan");
      const posDomainDietPlanEl = document.getElementById("pos-domain-diet-plan");
      const posDomainProgressPlanEl = document.getElementById("pos-domain-progress-plan");
      const posDomainWeightPlanEl = document.getElementById("pos-domain-weight-plan");
      const posDomainCyclingPlanEl = document.getElementById("pos-domain-cycling-plan");
      const posDomainRunningPlanEl = document.getElementById("pos-domain-running-plan");
      const posDomainSwimmingPlanEl = document.getElementById("pos-domain-swimming-plan");
      const posDomainFacialPlanEl = document.getElementById("pos-domain-facial-plan");
      const posDomainRacePlanEl = document.getElementById("pos-domain-race-plan");
      const posDomainSleepPlanSubEl = document.getElementById("pos-domain-sleep-plan-sub");
      const posDomainDietPlanSubEl = document.getElementById("pos-domain-diet-plan-sub");
      const posDomainProgressPlanSubEl = document.getElementById("pos-domain-progress-plan-sub");
      const posDomainWeightPlanSubEl = document.getElementById("pos-domain-weight-plan-sub");
      const posDomainCyclingPlanSubEl = document.getElementById("pos-domain-cycling-plan-sub");
      const posDomainRunningPlanSubEl = document.getElementById("pos-domain-running-plan-sub");
      const posDomainSwimmingPlanSubEl = document.getElementById("pos-domain-swimming-plan-sub");
      const posDomainFacialPlanSubEl = document.getElementById("pos-domain-facial-plan-sub");
      const posDomainRacePlanSubEl = document.getElementById("pos-domain-race-plan-sub");
      const posRangeEl = document.getElementById("pos-range");
      const posRecoveryEl = document.getElementById("pos-recovery");
      const posRecoveryListEl = document.getElementById("pos-recovery-list");
      const posRecoveryNoteEl = document.getElementById("pos-recovery-note");
      const posStravaFitnessEl = document.getElementById("pos-strava-fitness");
      const posStravaListEl = document.getElementById("pos-strava-list");
      const posStravaNoteEl = document.getElementById("pos-strava-note");
      const posStravaChartEl = document.getElementById("pos-strava-chart");
      const posStravaChartCaptionEl = document.getElementById("pos-strava-chart-caption");
      const posLoadCapacityEl = document.getElementById("pos-load-capacity");
      const posLoadCapacityListEl = document.getElementById("pos-load-capacity-list");
      const posLoadCapacityNoteEl = document.getElementById("pos-load-capacity-note");
      const posWeeklyLoadEl = document.getElementById("pos-weekly-load");
      const posWeeklyLoadChartEl = document.getElementById("pos-weekly-load-chart");
      const posWeeklyLoadNoteEl = document.getElementById("pos-weekly-load-note");
      const posWeeklyLoadCaptionEl = document.getElementById("pos-weekly-load-caption");
      const posRelationsEl = document.getElementById("pos-relations");
      const posRelationsListEl = document.getElementById("pos-relations-list");
      const posRelationsNoteEl = document.getElementById("pos-relations-note");
      const posLoadSleepChartEl = document.getElementById("pos-load-sleep-chart");
      const posFuelLoadChartEl = document.getElementById("pos-fuel-load-chart");
      const posNavEl = document.getElementById("pos-nav");
      const posDashboardEl = document.getElementById("pos-dashboard");
      const posTrendsEl = document.getElementById("pos-trends");
      const posTrendsListEl = document.getElementById("pos-trends-list");
      const posTrendsNoteEl = document.getElementById("pos-trends-note");
      const posHeatmapEl = document.getElementById("pos-heatmap");
      const posHeatmapGridEl = document.getElementById("pos-heatmap-grid");
      const posHeatmapNoteEl = document.getElementById("pos-heatmap-note");
      const posDayDrawerEl = document.getElementById("pos-day-drawer");
      const posDayDrawerListEl = document.getElementById("pos-day-drawer-list");
      const posDayDrawerDateEl = document.getElementById("pos-day-drawer-date");
      const posStatsEl = document.getElementById("pos-stats");
      const posStatsListEl = document.getElementById("pos-stats-list");
      const posStatsRangeEl = document.getElementById("pos-stats-range");
      const posStatsNoteEl = document.getElementById("pos-stats-note");
      const posSleepTrendEl = document.getElementById("pos-sleep-trend");
      const posSleepTrendChartEl = document.getElementById("pos-sleep-trend-chart");
      const posSleepTrendListEl = document.getElementById("pos-sleep-trend-list");
      const posSleepTrendNoteEl = document.getElementById("pos-sleep-trend-note");
      const posSleepTrendCaptionEl = document.getElementById("pos-sleep-trend-caption");
      const posAppleHealthEl = document.getElementById("pos-apple-health");
      const posAppleHealthListEl = document.getElementById("pos-apple-health-list");
      const posAppleHealthNoteEl = document.getElementById("pos-apple-health-note");
      const posNutritionEl = document.getElementById("pos-nutrition");
      const posNutritionListEl = document.getElementById("pos-nutrition-list");
      const posNutritionNoteEl = document.getElementById("pos-nutrition-note");
      const posDataHealthEl = document.getElementById("pos-data-health");
      const posDataHealthListEl = document.getElementById("pos-data-health-list");
      const posDataHealthNoteEl = document.getElementById("pos-data-health-note");
      const posRaceSummaryEl = document.getElementById("pos-race-summary");
      const posRaceCountdownEl = document.getElementById("pos-race-countdown");
      const posRaceNoteEl = document.getElementById("pos-race-note");
      const posRacePillarsEl = document.getElementById("pos-race-pillars");
      const posRaceLimitersEl = document.getElementById("pos-race-limiters");
      const posRaceLimitersListEl = document.getElementById("pos-race-limiters-list");
      const posRaceLimitersNoteEl = document.getElementById("pos-race-limiters-note");
      const posRacePhaseEl = document.getElementById("pos-race-phase");
      const posRacePhaseListEl = document.getElementById("pos-race-phase-list");
      const posRacePhaseNoteEl = document.getElementById("pos-race-phase-note");

      const posCyclingEl = document.getElementById("pos-cycling-summary");
      const posCyclingListEl = document.getElementById("pos-cycling-list");
      const posCyclingNoteEl = document.getElementById("pos-cycling-note");
      const posRunningEl = document.getElementById("pos-running-summary");
      const posRunningListEl = document.getElementById("pos-running-list");
      const posRunningNoteEl = document.getElementById("pos-running-note");
      const posSwimmingEl = document.getElementById("pos-swimming-summary");
      const posSwimmingListEl = document.getElementById("pos-swimming-list");
      const posSwimmingNoteEl = document.getElementById("pos-swimming-note");
      const posFacialEl = document.getElementById("pos-facial-summary");
      const posFacialListEl = document.getElementById("pos-facial-list");
      const posFacialNoteEl = document.getElementById("pos-facial-note");
      const posBaselinesEl = document.getElementById("pos-baselines");
      const posBaselinesListEl = document.getElementById("pos-baselines-list");
      const posBaselinesNoteEl = document.getElementById("pos-baselines-note");
      const posQualityEl = document.getElementById("pos-quality");
      const posQualityListEl = document.getElementById("pos-quality-list");
      const posQualityNoteEl = document.getElementById("pos-quality-note");
      const posLastSessionEl = document.getElementById("pos-last-session");
      const posLastSessionListEl = document.getElementById("pos-last-session-list");
      const posLastSessionNoteEl = document.getElementById("pos-last-session-note");
      const posStrengthScatterEl = document.getElementById("pos-strength-scatter");
      const posStrengthScatterChartEl = document.getElementById("pos-strength-scatter-chart");
      const posStrengthScatterNoteEl = document.getElementById("pos-strength-scatter-note");
      const posStrengthMatrixEl = document.getElementById("pos-strength-matrix");
      const posStrengthMatrixTableEl = document.getElementById("pos-strength-matrix-table");
      const posStrengthMatrixNoteEl = document.getElementById("pos-strength-matrix-note");
      const posQualityTrendsEl = document.getElementById("pos-quality-trends");
      const posQualityTrendsListEl = document.getElementById("pos-quality-trends-list");
      const posQualityTrendsNoteEl = document.getElementById("pos-quality-trends-note");
      const posWeaknessEl = document.getElementById("pos-weakness");
      const posWeaknessListEl = document.getElementById("pos-weakness-list");
      const posWeaknessNoteEl = document.getElementById("pos-weakness-note");
      const posSleepPlanEl = document.getElementById("pos-sleep-plan");
      const posSleepPlanListEl = document.getElementById("pos-sleep-plan-list");
      const posSleepPlanNoteEl = document.getElementById("pos-sleep-plan-note");
      const posRunStatusEl = document.getElementById("pos-run-status");
      const toastEl = document.getElementById("toast");
      const POS_PROCESS_ID = "personal_ops";
      let currentPosView = "all";
      let currentRangeDays = 7;
      let currentWeekSport = "swim";
      let posInitialized = false;
      const metricGoals = new Map();
      const RANGE_OPTIONS = [
        { label: "Today", days: 1 },
        { label: "7d", days: 7 },
        { label: "30d", days: 30 },
        { label: "90d", days: 90 },
      ];
      const POS_VIEW_OPTIONS = [];
      const DOORS = ["Left", "Middle", "Right"];
      const METRIC_GOAL_TITLE_MAP = {
        "sleep": "sleep_hours",
        "sleep duration": "sleep_hours",
        "sleep last night": "sleep_hours",
        "sleep last": "sleep_hours",
        "sleep delta": "sleep_delta_hours",
        "weight": "weight_kg",
        "body fat": "body_fat_pct",
        "ffm": "ffm_kg",
        "workouts (7d)": "workouts_7d",
        "workouts": "workouts_7d",
        "endurance sessions": "endurance_sessions_7d",
        "strength sessions": "strength_sessions_7d",
        "training minutes": "training_minutes_7d",
        "training load": "training_load_7d",
        "strength load": "strength_load_7d",
        "exercise energy": "exercise_kcal_7d",
        "calories": "calories_kcal_day",
        "protein": "protein_g_day",
        "protein g/kg": "protein_g_per_kg",
        "carbs": "carbs_g_day",
        "fat": "fat_g_day",
        "energy availability": "energy_availability_kcal_per_kg",
        "carb under days": "carb_under_days_7d",
        "protein meal hit": "protein_meal_hit_rate",
        "fat floor ok": "fat_floor_days_7d",
      };

      async function refreshSession() {
        const { data } = await supabase.auth.getSession();
        const session = data?.session;
        if (session) {
          authEl.classList.add("hidden");
          if (settingsEl) settingsEl.classList.add("hidden");
          if (authStatusEl) authStatusEl.textContent = "";
        } else {
          authEl.classList.remove("hidden");
          if (settingsEl) settingsEl.classList.add("hidden");
          if (authStatusEl) {
            authStatusEl.textContent = "Signed out (read-only).";
          }
        }
        if (dataEl) dataEl.classList.remove("hidden");
        if (posDashboardEl) posDashboardEl.classList.remove("hidden");
        if (!posInitialized) {
          posInitialized = true;
          await initPos();
        }
      }

      async function reportAuthState(prefix = "") {
        if (!authStatusEl) return;
        try {
          const { data, error } = await supabase.auth.getSession();
          if (error) {
            authStatusEl.textContent = `${prefix}Session error: ${error.message}`;
            return;
          }
          const session = data?.session;
          if (!session) {
            authStatusEl.textContent = `${prefix}No session found after sign-in.`;
            return;
          }
          const email = session.user?.email || "unknown";
          authStatusEl.textContent = `${prefix}Signed in as ${email}.`;
        } catch (err) {
          authStatusEl.textContent = `${prefix}Auth check failed.`;
        }
      }

      async function signInWithFallback(email, password) {
        const primary = await supabase.auth.signInWithPassword({ email, password });
        if (!primary.error) {
          return primary;
        }
        try {
          const resp = await fetch(
            `${SUPABASE_URL}/auth/v1/token?grant_type=password`,
            {
              method: "POST",
              headers: {
                apikey: SUPABASE_ANON_KEY,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, password }),
            }
          );
          const payload = await resp.json();
          if (!resp.ok) {
            return { data: null, error: { message: payload?.error_description || payload?.error || "Auth failed." } };
          }
          const { access_token, refresh_token } = payload || {};
          if (!access_token || !refresh_token) {
            return { data: null, error: { message: "Auth failed: missing tokens." } };
          }
          const sessionSet = await supabase.auth.setSession({ access_token, refresh_token });
          if (sessionSet.error) {
            return { data: null, error: { message: sessionSet.error.message || "Auth failed to set session." } };
          }
          return { data: sessionSet.data, error: null };
        } catch (err) {
          return { data: null, error: { message: "Auth failed: network error." } };
        }
      }

      const loginBtn = document.getElementById("login");
      if (loginBtn) {
        loginBtn.addEventListener("click", async () => {
          const email = emailEl.value.trim();
          const password = passwordEl.value;
          if (authStatusEl) authStatusEl.textContent = "";
          if (!email || !password) {
            if (authStatusEl) authStatusEl.textContent = "Enter email and password.";
            return;
          }
          const { data, error } = await signInWithFallback(email, password);
          if (error) {
            if (authStatusEl) authStatusEl.textContent = "Sign in failed: " + error.message;
            return;
          }
          if (!data?.session) {
            await reportAuthState("Sign-in ok. ");
          }
          await refreshSession();
        });
      }

      supabase.auth.onAuthStateChange((_event, session) => {
        if (!authStatusEl || authEl.classList.contains("hidden")) return;
        if (session?.user?.email) {
          authStatusEl.textContent = `Signed in as ${session.user.email}.`;
        }
      });

      function showToast(message, type) {
        if (!toastEl) return;
        toastEl.textContent = message;
        toastEl.className = `toast show ${type || ""}`.trim();
        setTimeout(() => {
          toastEl.className = "toast";
          toastEl.textContent = "";
        }, 2000);
      }

      function formatDuration(ms) {
        if (!ms || ms < 0) return "—";
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        if (days > 0) return `${days}d ${hours % 24}h`;
        if (hours > 0) return `${hours}h ${minutes % 60}m`;
        return `${minutes}m`;
      }

      function formatTimestamp(value) {
        if (!value) return "—";
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return String(value);
        return date.toLocaleString([], {
          year: "numeric",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        });
      }

      function formatDistance(meters) {
        const value = Number(meters ?? NaN);
        if (Number.isNaN(value) || value <= 0) return "—";
        const miles = value / 1609.34;
        return `${miles.toFixed(1)} mi`;
      }

      function formatMinutes(seconds) {
        const value = Number(seconds ?? NaN);
        if (Number.isNaN(value) || value <= 0) return "—";
        return `${Math.round(value / 60)} min`;
      }

      function formatDurationHM(seconds) {
        const value = Number(seconds ?? NaN);
        if (Number.isNaN(value) || value <= 0) return "—";
        const totalMinutes = Math.round(value / 60);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes ? ` ${minutes}m` : ""}`;
      }

      function normalizeSeconds(value) {
        const num = Number(value ?? NaN);
        if (Number.isNaN(num) || num <= 0) return null;
        if (num < 1000) return num * 60;
        return num;
      }

      function formatLatency(seconds, label) {
        const value = Number(seconds ?? NaN);
        if (Number.isNaN(value) || value <= 0) {
          return { value: "—", meta: `${label} (min)` };
        }
        const minutes = Math.round(value / 60);
        if (minutes > 240) {
          return { value: `${minutes} min`, meta: `${label} (raw >240 min; check units)` };
        }
        const meta = minutes > 180 ? `${label} (high; verify)` : `${label} (min)`;
        return { value: `${minutes} min`, meta };
      }

      function pickNumber(source, keys) {
        if (!source) return null;
        for (const key of keys) {
          const raw = source[key];
          if (raw === null || raw === undefined || raw === "") continue;
          const num = Number(raw);
          if (!Number.isNaN(num)) return num;
        }
        return null;
      }

      function pickValue(source, keys) {
        if (!source) return null;
        for (const key of keys) {
          const raw = source[key];
          if (raw === null || raw === undefined || raw === "") continue;
          return raw;
        }
        return null;
      }

      function extractCronometerChunk(response) {
        const extract = (values) => {
          if (!Array.isArray(values) || values.length < 12) return null;
          const chunk = values.slice(0, 14);
          const head = chunk.slice(0, 12);
          if (!head.every((value) => typeof value === "number" && Number.isFinite(value))) return null;
          return chunk.map((value) => Number(value));
        };

        if (Array.isArray(response)) {
          if (response.length && Array.isArray(response[0])) {
            const nested = extract(response[0]);
            if (nested) return nested;
          }
          return extract(response);
        }

        if (response && typeof response === "object") {
          const obj = response;
          const keys = ["chunk", "chunks", "data", "values", "response"];
          for (const key of keys) {
            const candidate = obj[key];
            if (Array.isArray(candidate)) {
              if (candidate.length && Array.isArray(candidate[0])) {
                const nested = extract(candidate[0]);
                if (nested) return nested;
              }
              const chunk = extract(candidate);
              if (chunk) return chunk;
            }
          }
        }
        return null;
      }

      function parseCronometerCalories(response) {
        const chunk = extractCronometerChunk(response);
        if (!chunk) {
          return {
            calories_kcal: null,
            protein_g: null,
            carbs_g: null,
            fat_g: null,
            active_energy_kcal: null,
            resting_energy_kcal: null,
          };
        }
        const netKcal = chunk[0];
        const fatKcal = chunk[4];
        const carbsKcal = chunk[5];
        const proteinKcal = chunk[6];
        const restingKcal = chunk[8];
        const consumedKcal = chunk[11];
        const activeEnergy = (Number.isFinite(netKcal) && Number.isFinite(consumedKcal) && Number.isFinite(restingKcal))
          ? consumedKcal - netKcal - restingKcal
          : null;
        const toGrams = (kcal, divisor) => (Number.isFinite(kcal) ? kcal / divisor : null);
        return {
          calories_kcal: Number.isFinite(consumedKcal) ? consumedKcal : null,
          protein_g: toGrams(proteinKcal, 4),
          carbs_g: toGrams(carbsKcal, 4),
          fat_g: toGrams(fatKcal, 9),
          active_energy_kcal: Number.isFinite(activeEnergy) ? activeEnergy : null,
          resting_energy_kcal: Number.isFinite(restingKcal) ? restingKcal : null,
        };
      }

      async function fetchCronometerTotals(startKey, endKey = null) {
        const query = supabase
          .from("cronometer_day_raw")
          .select("day,method,response")
          .eq("method", "getCaloriesConsumedAndBurned")
          .gte("day", startKey);
        const resp = endKey ? await query.lte("day", endKey) : await query;
        const totalsByDay = new Map();
        (resp.data || []).forEach((row) => {
          if (!row.day) return;
          const totals = parseCronometerCalories(row.response);
          const hasTotals = [
            totals.calories_kcal,
            totals.protein_g,
            totals.carbs_g,
            totals.fat_g,
            totals.active_energy_kcal,
            totals.resting_energy_kcal,
          ].some((value) => value != null && value !== 0);
          if (!hasTotals) return;
          totalsByDay.set(row.day, totals);
        });
        return totalsByDay;
      }

      function renderMiniBars(values) {
        if (!values || !values.length) return "";
        const maxVal = Math.max(...values, 1);
        return values
          .map((val) => {
            const height = Math.max(6, Math.round((val / maxVal) * 48));
            const active = val > 0;
            return `<div class="mini-bar ${active ? "active" : ""}" style="height:${height}px"></div>`;
          })
          .join("");
      }

      function formatCount(value) {
        if (value === null || value === undefined) return "—";
        return String(value);
      }

      function formatAgeDays(value) {
        if (!value) return null;
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return null;
        const diffMs = Date.now() - date.getTime();
        if (diffMs < 0) return null;
        return diffMs / (24 * 60 * 60 * 1000);
      }

      async function loadMetricGoals() {
        metricGoals.clear();
        try {
          const { data, error } = await supabase
            .schema("health_core")
            .from("metric_goals")
            .select("metric_key,metric_label,unit,window_key,target_value,min_value,max_value,goal_basis,set_by,updated_at")
            .eq("athlete_id", "global");
          if (error) return;
          (data || []).forEach((row) => {
            if (!row?.metric_key) return;
            metricGoals.set(row.metric_key, row);
          });
        } catch (err) {
          // Keep dashboard usable even if goals are unavailable.
        }
      }

      function goalKeyForTitle(title) {
        if (!title) return null;
        const key = title.trim().toLowerCase();
        return METRIC_GOAL_TITLE_MAP[key] || null;
      }

      function formatGoalLine(goalKey) {
        const goal = metricGoals.get(goalKey);
        if (!goal) return "Goal not set";
        const unit = goal.unit ? ` ${goal.unit}` : "";
        const windowLabel = goal.window_key ? ` (${goal.window_key})` : "";
        if (goal.target_value !== null && goal.target_value !== undefined) {
          return `Goal${windowLabel}: ${formatNumber(goal.target_value, 1)}${unit}`;
        }
        if (goal.min_value !== null || goal.max_value !== null) {
          const minVal = goal.min_value ?? "—";
          const maxVal = goal.max_value ?? "—";
          return `Goal${windowLabel}: ${formatNumber(minVal, 1)}–${formatNumber(maxVal, 1)}${unit}`;
        }
        return "Goal not set";
      }

      function staleLabel(label, ageDays, threshold) {
        if (ageDays === null) return `${label} missing`;
        if (ageDays >= threshold) return `${label} updated ${ageDays.toFixed(1)}d ago`;
        return null;
      }

      async function loadPosSummary() {
        if (!posSummaryMetricsEl || !posSummaryEl) return;
        if (posSummaryNoteEl) posSummaryNoteEl.textContent = "";
        posSummaryMetricsEl.innerHTML = "";

        const trainingReq = supabase
          .from("training_state")
          .select("workout_count_7d,endurance_sessions_7d,strength_sessions_7d,strength_time_s_7d,strength_capacity_7d,total_distance_m_7d,total_time_s_7d,updated_at")
          .eq("id", "global")
          .maybeSingle();
        const readinessReq = supabase
          .from("readiness_state")
          .select("updated_at,sleep_source,weight_source,sleep_updated_at,weight_updated_at")
          .eq("id", "global")
          .maybeSingle();
        const metricsReq = supabase
          .from("pos_day_metrics")
          .select("adherence_7d,training_load_7d,nutrition_entries_7d,nutrition_source,sleep_seconds,sleep_baseline_7d,updated_at")
          .order("date", { ascending: false })
          .limit(1);
        const stravaFormReq = supabase
          .from("strava_fitness_daily")
          .select("form")
          .eq("sport_type", "all")
          .order("date", { ascending: false })
          .limit(1);
        const runReq = supabase
          .from("pos_runs")
          .select("ran_at,ok")
          .order("ran_at", { ascending: false })
          .limit(1);
        const nutritionRangeKey = rangeStartDate(7).toISOString().slice(0, 10);

        const [
          { data: training, error: trainingError },
          { data: readiness },
          { data: metricsRows },
          { data: formRows },
          { data: runData },
          cronoTotals,
        ] = await Promise.all([trainingReq, readinessReq, metricsReq, stravaFormReq, runReq, fetchCronometerTotals(nutritionRangeKey)]);
        const runRow = Array.isArray(runData) && runData.length ? runData[0] : null;
        const metrics = metricsRows?.[0] ?? null;
        const latestForm = Array.isArray(formRows) && formRows.length ? Number(formRows[0].form ?? 0) : null;
        let nutritionDays = cronoTotals?.size ?? null;
        if ((nutritionDays == null || nutritionDays === 0) && metrics?.nutrition_entries_7d != null) {
          nutritionDays = Number(metrics.nutrition_entries_7d) || 0;
        }
        const nutritionDaysDisplay = Math.min(Number(nutritionDays) || 0, 7);

        if (trainingError) {
          if (posSummaryNoteEl) posSummaryNoteEl.textContent = "Training summary unavailable.";
          return;
        }

        const adherence = metrics?.adherence_7d ?? 0;
        const adherenceTone = "neutral";

        const sleepAge = formatAgeDays(readiness?.sleep_updated_at);
        const weightAge = formatAgeDays(readiness?.weight_updated_at);
        const raceStart = new Date("2026-06-06T00:00:00");
        const daysToRace = Math.max(0, Math.ceil((raceStart - new Date()) / (1000 * 60 * 60 * 24)));
        const sleepHours = metrics?.sleep_seconds ? metrics.sleep_seconds / 3600 : null;
        const sleepBaseline = metrics?.sleep_baseline_7d ? metrics.sleep_baseline_7d / 3600 : null;
        const sleepDelta = sleepHours != null && sleepBaseline != null ? sleepHours - sleepBaseline : null;
        const sleepTone = "neutral";
        let confidence = 100;
        if (sleepAge == null || sleepAge >= 2) confidence -= 25;
        if (weightAge == null || weightAge >= 7) confidence -= 15;
        if ((nutritionDays ?? 0) === 0) confidence -= 15;
        if (latestForm == null) confidence -= 10;
        if (!training?.updated_at) confidence -= 10;
        confidence = Math.max(0, Math.min(100, confidence));
        posSummaryMetricsEl.appendChild(
          renderKpiCard({
            label: "Days to race",
            value: `${daysToRace}`,
            tone: "good",
            icon: "🏁",
            sub: "Escape from Alcatraz 2026",
            meta: { importance: 10, group: "race", related: "countdown" },
          }),
        );
        posSummaryMetricsEl.appendChild(
          renderKpiCard({
            label: "Sleep last night",
            value: sleepHours != null ? `${formatNumber(sleepHours, 1)}h` : "—",
            tone: sleepTone,
            icon: "🛌",
            sub: sleepBaseline != null
              ? `Baseline ${formatNumber(sleepBaseline, 1)}h · Δ ${formatNumber(sleepDelta ?? 0, 1)}h`
              : "Baseline missing",
            progress: sleepBaseline ? Math.min(100, (sleepHours ?? 0) / sleepBaseline * 100) : null,
            meta: { importance: 10, group: "sleep", related: "duration,baseline,delta" },
          }),
        );
        posSummaryMetricsEl.appendChild(
          renderKpiCard({
            label: "Workouts (7d)",
            value: `${training?.workout_count_7d ?? 0}`,
            tone: frequencyBand(training?.workout_count_7d ?? 0).tone,
            icon: "📅",
            sub: `Endurance ${training?.endurance_sessions_7d ?? 0} · Strength ${training?.strength_sessions_7d ?? 0}`,
            meta: { importance: 8, group: "training_volume", related: "endurance,strength" },
          }),
        );
        posSummaryMetricsEl.appendChild(
          renderKpiCard({
            label: "Adherence (7d)",
            value: adherence ? `${Math.round(adherence * 100)}%` : "—",
            tone: adherenceTone,
            icon: "✅",
            sub: adherence ? `Planned vs completed` : "No plan data",
            progress: adherence ? adherence * 100 : null,
            meta: { importance: 9, group: "execution", related: "plan,completion" },
          }),
        );
        posSummaryMetricsEl.appendChild(
          renderKpiCard({
            label: "Strength load",
            value: training?.strength_capacity_7d ? `${formatNumber(training.strength_capacity_7d, 0)} load` : "—",
            tone: training?.strength_capacity_7d ? "good" : "bad",
            icon: "🏋️",
            sub: training?.strength_capacity_7d ? "7d capacity (load units)" : "No strength load data",
            meta: { importance: 7, group: "strength_load", related: "capacity,volume" },
          }),
        );

        const updatedAt = training?.updated_at ?? readiness?.updated_at;
        if (posSummaryUpdatedEl) {
          posSummaryUpdatedEl.textContent = updatedAt ? `Updated ${formatTimestamp(updatedAt)}` : "—";
        }

        if (posSummaryNoteEl) {
          const sleepNote = sleepAge != null ? `Sleep updated ${formatNumber(sleepAge, sleepAge >= 10 ? 0 : 1)}d ago` : "Sleep missing";
          const weightNote = weightAge != null ? `Weight updated ${formatNumber(weightAge, weightAge >= 10 ? 0 : 1)}d ago` : "Weight missing";
          const nutritionNote = `Nutrition logs ${nutritionDaysDisplay}/7 days (Cronometer)`;
          posSummaryNoteEl.textContent = `Inputs: ${sleepNote} · ${weightNote} · ${nutritionNote}`;
          if (posSummaryFreshnessEl) {
            posSummaryFreshnessEl.textContent = `Coverage ${confidence}%`;
            posSummaryFreshnessEl.title = `Coverage ${confidence}% (sleep/weight/nutrition freshness + form)`;
            posSummaryFreshnessEl.classList.remove("unknown", "ontrack", "soon", "overdue");
            posSummaryFreshnessEl.classList.add(confidence >= 70 ? "ontrack" : confidence >= 50 ? "soon" : "overdue");
          }
        }

        if (posSummaryDriversEl) {
          posSummaryDriversEl.innerHTML = "";
          const drivers = [];
          const sleepSeconds = metrics?.sleep_seconds ?? null;
          const sleepBaseline = metrics?.sleep_baseline_7d ?? null;
          const sleepDelta = sleepSeconds != null && sleepBaseline != null
            ? sleepSeconds / 3600 - sleepBaseline / 3600
            : null;
          const sleepHours = sleepSeconds != null ? sleepSeconds / 3600 : null;
          const sleepAgeLabel = sleepAge != null ? (sleepAge >= 10 ? formatNumber(sleepAge, 0) : formatNumber(sleepAge, 1)) : null;
          const weightAgeLabel = weightAge != null ? (weightAge >= 10 ? formatNumber(weightAge, 0) : formatNumber(weightAge, 1)) : null;

          if (sleepAge != null && sleepAge >= 2) {
            drivers.push({
              label: `Sleep updated ${sleepAgeLabel}d ago`,
              tone: "warn",
              meta: { importance: 9, group: "drivers", related: "sleep" },
            });
          } else if (sleepDelta != null) {
            drivers.push({
              label: `Sleep Δ ${formatNumber(sleepDelta, 1)}h vs baseline`,
              tone: "neutral",
              meta: { importance: 9, group: "drivers", related: "sleep" },
            });
          } else if (sleepHours != null) {
            drivers.push({
              label: `Sleep ${formatNumber(sleepHours, 1)}h (baseline missing)`,
              tone: "neutral",
              meta: { importance: 8, group: "drivers", related: "sleep" },
            });
          }
          if (latestForm != null) {
            const formLabel = `Strava form ${latestForm >= 0 ? "+" : ""}${formatNumber(latestForm, 0)}`;
            drivers.push({
              label: `${formLabel} (Strava)`,
              tone: "neutral",
              meta: { importance: 8, group: "drivers", related: "form" },
            });
          }
            drivers.push({
              label: `Nutrition logs ${nutritionDaysDisplay}/7 days`,
              tone: nutritionDaysDisplay >= 5 ? "good" : nutritionDaysDisplay >= 2 ? "warn" : "bad",
              meta: { importance: 8, group: "drivers", related: "nutrition,coverage" },
            });
          if (weightAge != null && weightAge >= 7) {
            drivers.push({
              label: `Weight updated ${weightAgeLabel}d ago`,
              tone: "warn",
              meta: { importance: 5, group: "drivers", related: "weight" },
            });
          }
          drivers.slice(0, 4).forEach((driver) => {
            const chip = document.createElement("span");
            chip.className = `stale-chip ${driver.tone}`;
            chip.innerHTML = driver.label.replace(/(\d+(?:\.\d+)?(?:%|d|h)?)/g, "<b>$1</b>");
            attachMeta(chip, driver.meta);
            posSummaryDriversEl.appendChild(chip);
          });
          const confidenceChip = document.createElement("span");
          confidenceChip.className = "stale-chip neutral";
          confidenceChip.innerHTML = `Coverage <b>${confidence}%</b>`;
          attachMeta(confidenceChip, { importance: 9, group: "coverage", related: "coverage,stale" });
          posSummaryDriversEl.appendChild(confidenceChip);
        }

        if (posRunStatusEl) {
          if (runRow?.ran_at) {
            const ranAt = formatTimestamp(runRow.ran_at);
            const ok = runRow.ok !== false;
            posRunStatusEl.textContent = ok ? `Last run OK · ${ranAt}` : `Last run failed · ${ranAt}`;
            posRunStatusEl.classList.remove("unknown", "ontrack", "soon", "overdue");
            posRunStatusEl.classList.add(ok ? "ontrack" : "overdue");
          } else {
            posRunStatusEl.textContent = "Last run unknown";
            posRunStatusEl.classList.remove("ontrack", "soon", "overdue");
            posRunStatusEl.classList.add("unknown");
          }
        }
      }

      async function loadPosRecovery() {
        if (!posRecoveryListEl || !posRecoveryEl) return;
        posRecoveryListEl.innerHTML = "";
        if (posRecoveryNoteEl) posRecoveryNoteEl.textContent = "";

        const [metricsResp, readinessResp] = await Promise.all([
          supabase
            .from("pos_day_metrics")
            .select("sleep_seconds,sleep_baseline_7d,weight_kg,weight_baseline_7d,hrv_baseline_7d,rhr_baseline_7d")
            .order("date", { ascending: false })
            .limit(1),
          supabase
            .from("readiness_state")
            .select("sleep_updated_at,weight_updated_at")
            .eq("id", "global")
            .maybeSingle(),
        ]);

        const metrics = metricsResp.data?.[0] ?? {};
        const readiness = readinessResp.data ?? {};

        const sleepHours = metrics.sleep_seconds ? metrics.sleep_seconds / 3600 : null;
        const sleepBase = metrics.sleep_baseline_7d ? metrics.sleep_baseline_7d / 3600 : null;
        const sleepDelta = sleepHours != null && sleepBase != null ? sleepHours - sleepBase : null;
        const sleepAge = formatAgeDays(readiness.sleep_updated_at);
        const sleepTone = sleepHours != null && sleepBase != null
          ? sleepHours >= sleepBase * 0.9
            ? "good"
            : sleepHours >= sleepBase * 0.7
              ? "warn"
              : "bad"
          : "warn";
        const sleepMetaParts = [];
        if (sleepHours != null) sleepMetaParts.push(`${formatNumber(sleepHours, 1)} h`);
        if (sleepBase != null) sleepMetaParts.push(`baseline ${formatNumber(sleepBase, 1)} h`);
        if (sleepDelta != null) sleepMetaParts.push(`Δ ${formatNumber(sleepDelta, 1)} h`);
        if (sleepAge != null) sleepMetaParts.push(`updated ${formatNumber(sleepAge, 1)}d ago`);
        const sleepStatus = sleepAge != null
          ? `Updated ${formatNumber(sleepAge, sleepAge >= 10 ? 0 : 1)}d ago`
          : sleepHours != null
            ? "Updated recently"
            : "No update";
        posRecoveryListEl.appendChild(
          renderStatusItem(
            "Sleep",
            sleepStatus,
            sleepTone,
            sleepMetaParts.join(" · ") || "No sleep data",
            { importance: 9, group: "sleep", related: "duration,baseline,delta" },
          ),
        );

        const weight = metrics.weight_kg ?? null;
        const weightBase = metrics.weight_baseline_7d ?? null;
        const weightDelta = weight != null && weightBase != null ? weight - weightBase : null;
        const weightAge = formatAgeDays(readiness.weight_updated_at);
        const weightTone = weight != null ? "good" : "warn";
        const weightMetaParts = [];
        if (weight != null) weightMetaParts.push(`${formatNumber(weight, 1)} kg`);
        if (weightBase != null) weightMetaParts.push(`baseline ${formatNumber(weightBase, 1)} kg`);
        if (weightDelta != null) weightMetaParts.push(`Δ ${formatNumber(weightDelta, 1)} kg`);
        if (weightAge != null) weightMetaParts.push(`updated ${formatNumber(weightAge, 1)}d ago`);
        const weightStatus = weightAge != null
          ? `Updated ${formatNumber(weightAge, weightAge >= 10 ? 0 : 1)}d ago`
          : weight != null
            ? "Updated recently"
            : "No update";
        posRecoveryListEl.appendChild(
          renderStatusItem(
            "Weight",
            weightStatus,
            weightTone,
            weightMetaParts.join(" · ") || "No weight data",
            { importance: 5, group: "weight", related: "trend,baseline" },
          ),
        );

        if (metrics.hrv_baseline_7d != null) {
          posRecoveryListEl.appendChild(
            renderStatusItem(
              "HRV baseline (7d)",
              `${formatNumber(metrics.hrv_baseline_7d, 0)}`,
              "warn",
              "Baseline only (current HRV not ingested)",
              { importance: 4, group: "hrv", related: "baseline" },
            ),
          );
        }
        if (metrics.rhr_baseline_7d != null) {
          posRecoveryListEl.appendChild(
            renderStatusItem(
              "Resting HR baseline (7d)",
              `${formatNumber(metrics.rhr_baseline_7d, 0)} bpm`,
              "warn",
              "Baseline only (current RHR not ingested)",
              { importance: 4, group: "rhr", related: "baseline" },
            ),
          );
        }
      }

      async function loadPosDataHealth() {
        if (!posDataHealthListEl || !posDataHealthEl) return;
        posDataHealthListEl.innerHTML = "";
        if (posDataHealthNoteEl) posDataHealthNoteEl.textContent = "";

        const startIso = rangeStartDate(7).toISOString();
        const [readinessResp, trainingResp, stravaResp, strengthResp, metricsResp, cronoTotals] = await Promise.all([
          supabase
            .from("readiness_state")
            .select("sleep_updated_at,weight_updated_at,sleep_source,weight_source")
            .eq("id", "global")
            .maybeSingle(),
          supabase
            .from("training_state")
            .select("updated_at,workout_count_7d")
            .eq("id", "global")
            .maybeSingle(),
          supabase
            .from("strava_fitness_daily")
            .select("date")
            .order("date", { ascending: false })
            .limit(1),
          supabase
            .from("speediance_training_session_scores")
            .select("session_date")
            .order("session_date", { ascending: false })
            .limit(1),
          supabase
            .from("pos_day_metrics")
            .select("date,nutrition_entries_7d,nutrition_source,active_energy_kcal_7d,resting_energy_kcal_7d,active_energy_avg_day,resting_energy_avg_day,updated_at")
            .order("date", { ascending: false })
            .limit(1),
          fetchCronometerTotals(rangeStartDate(7).toISOString().slice(0, 10)),
        ]);

        const readiness = readinessResp.data ?? {};
        const training = trainingResp.data ?? {};
        const metrics = metricsResp.data?.[0] ?? {};
        const sleepAge = formatAgeDays(readiness.sleep_updated_at);
        const weightAge = formatAgeDays(readiness.weight_updated_at);
        const sleepStatus = sleepAge != null ? `Updated ${formatNumber(sleepAge, sleepAge >= 10 ? 0 : 1)}d ago` : "No update";
        const sleepTone = sleepAge != null && sleepAge < 2 ? "good" : "warn";
        const weightStatus = weightAge != null ? `Updated ${formatNumber(weightAge, weightAge >= 10 ? 0 : 1)}d ago` : "No update";
        const weightTone = weightAge != null && weightAge < 7 ? "good" : "warn";

        let nutritionEntries = Number(metrics.nutrition_entries_7d ?? 0);
        if ((!nutritionEntries || nutritionEntries === 0) && cronoTotals && cronoTotals.size) {
          nutritionEntries = cronoTotals.size;
        }
        const nutritionDaysDisplay = Math.min(nutritionEntries || 0, 7);
        const nutritionTone = nutritionDaysDisplay >= 4 ? "good" : nutritionDaysDisplay >= 1 ? "warn" : "bad";
        const nutritionStatus = `Logs ${nutritionDaysDisplay}/7 days`;
        const nutritionSource = metrics.nutrition_source || "unknown";

        const activeEnergy7d = metrics.active_energy_kcal_7d ?? null;
        const restingEnergy7d = metrics.resting_energy_kcal_7d ?? null;
        const activeEnergyAvg = metrics.active_energy_avg_day ?? null;
        const restingEnergyAvg = metrics.resting_energy_avg_day ?? null;
        const energyTone = activeEnergy7d != null || restingEnergy7d != null ? "good" : "warn";
        const energyStatus = activeEnergy7d != null ? `${formatNumber(activeEnergy7d, 0)} kcal (7d)` : "No energy data";
        const energyMetaParts = [];
        if (activeEnergyAvg != null) energyMetaParts.push(`Active avg ${formatNumber(activeEnergyAvg, 0)} kcal/day`);
        if (restingEnergyAvg != null) energyMetaParts.push(`Resting avg ${formatNumber(restingEnergyAvg, 0)} kcal/day`);

        const stravaDate = stravaResp.data?.[0]?.date ?? null;
        const stravaAge = stravaDate ? formatAgeDays(`${stravaDate}T00:00:00`) : null;
        const stravaTone = stravaAge != null && stravaAge < 7 ? "good" : "warn";
        const stravaStatus = stravaAge != null ? `Updated ${formatNumber(stravaAge, stravaAge >= 10 ? 0 : 1)}d ago` : "No update";

        const strengthDate = strengthResp.data?.[0]?.session_date ?? null;
        const strengthAge = strengthDate ? formatAgeDays(`${strengthDate}T00:00:00`) : null;
        const strengthTone = strengthAge != null && strengthAge < 7 ? "good" : "warn";
        const strengthStatus = strengthAge != null ? `Updated ${formatNumber(strengthAge, strengthAge >= 10 ? 0 : 1)}d ago` : "No update";

        posDataHealthListEl.appendChild(
          renderStatusItem(
            "Sleep",
            sleepStatus,
            sleepTone,
            sleepAge != null ? `Target update ≤2d` : "No update yet",
            { importance: 9, group: "data_health", related: "sleep" },
          ),
        );
        posDataHealthListEl.appendChild(
          renderStatusItem(
            "Weight",
            weightStatus,
            weightTone,
            weightAge != null ? `Target update ≤7d` : "No update yet",
            { importance: 7, group: "data_health", related: "weight" },
          ),
        );
        posDataHealthListEl.appendChild(
          renderStatusItem(
            "Nutrition",
            nutritionStatus,
            nutritionTone,
            `${nutritionDaysDisplay}/7 days logged · Source ${nutritionSource}`,
            { importance: 8, group: "data_health", related: "nutrition" },
          ),
        );
        posDataHealthListEl.appendChild(
          renderStatusItem(
            "Activity energy",
            energyStatus,
            energyTone,
            energyMetaParts.join(" · ") || "No energy averages",
            { importance: 6, group: "data_health", related: "energy,activity" },
          ),
        );
        posDataHealthListEl.appendChild(
          renderStatusItem(
            "Strava fitness",
            stravaStatus,
            stravaTone,
            stravaDate ? `Last ${stravaDate}` : "No fitness data",
            { importance: 7, group: "data_health", related: "strava" },
          ),
        );
        posDataHealthListEl.appendChild(
          renderStatusItem(
            "Strength sessions",
            strengthStatus,
            strengthTone,
            strengthDate ? `Last ${strengthDate}` : "No strength data",
            { importance: 7, group: "data_health", related: "speediance" },
          ),
        );

        if (posDataHealthNoteEl) {
          const updatedAt = training.updated_at ? `Training updated ${formatTimestamp(training.updated_at)}` : "Training update unknown";
          posDataHealthNoteEl.textContent = `${updatedAt} · Coverage last 7 days.`;
        }
      }

      function loadPosFacial() {
        if (!posFacialListEl || !posFacialEl) return;
        posFacialListEl.innerHTML = "";
        if (posFacialNoteEl) posFacialNoteEl.textContent = "No tracking source connected.";
        posFacialListEl.appendChild(
          renderStatusItem(
            "Facial exercises",
            "Not tracked",
            "warn",
            "Add a tracking source to log facial sessions",
            { importance: 4, group: "facial", related: "facial" },
          ),
        );
      }

      function renderPillar({ label, score, tone, detail, meta }) {
        const item = document.createElement("div");
        item.className = "pillar-item";
        const scoreLabel = score != null ? `${formatNumber(score, 0)}/100` : "—";
        item.innerHTML = `
          <div class="pillar-header">
            <div class="pillar-title">${label}</div>
            <span class="status-chip ${tone}">${scoreLabel}</span>
          </div>
          <div class="pillar-meta">${detail || ""}</div>
        `;
        attachMeta(item, meta);
        return item;
      }

      async function loadPosRaceReadiness() {
        if (!posRaceSummaryEl || !posRacePillarsEl) return;
        posRacePillarsEl.innerHTML = "";
        if (posRaceLimitersListEl) posRaceLimitersListEl.innerHTML = "";

        const raceStart = new Date("2026-06-06T00:00:00");
        const today = new Date();
        const daysToRace = Math.max(0, Math.ceil((raceStart - today) / (1000 * 60 * 60 * 24)));
        if (posRaceCountdownEl) {
          posRaceCountdownEl.textContent = `${daysToRace} days to race`;
        }
        if (posRaceNoteEl) {
          posRaceNoteEl.textContent = "Cold swim + hilly bike + sand ladder run.";
        }

        const [readinessResp, trainingResp, metricsResp] = await Promise.all([
          supabase
            .from("readiness_state")
            .select("sleep_updated_at,weight_updated_at")
            .eq("id", "global")
            .maybeSingle(),
          supabase
            .from("training_state")
            .select("endurance_sessions_7d,strength_sessions_7d,total_distance_m_7d,total_time_s_7d")
            .eq("id", "global")
            .maybeSingle(),
          supabase
            .from("pos_day_metrics")
            .select("adherence_7d,training_load_7d,sleep_seconds,sleep_baseline_7d")
            .order("date", { ascending: false })
            .limit(1),
        ]);

        const readiness = readinessResp.data ?? {};
        const training = trainingResp.data ?? {};
        const metrics = metricsResp.data?.[0] ?? {};

        const sleepHours = metrics.sleep_seconds ? metrics.sleep_seconds / 3600 : null;
        const sleepBaseline = metrics.sleep_baseline_7d ? metrics.sleep_baseline_7d / 3600 : null;
        const recoveryScore = sleepHours != null && sleepBaseline
          ? Math.max(0, Math.min(100, (sleepHours / sleepBaseline) * 100))
          : null;
        const enduranceCount = training.endurance_sessions_7d ?? 0;
        const strengthCount = training.strength_sessions_7d ?? 0;
        const distanceMiles = formatMiles(training.total_distance_m_7d ?? 0) ?? 0;
        const adherencePct = metrics.adherence_7d != null ? metrics.adherence_7d * 100 : null;

        const sleepAge = formatAgeDays(readiness.sleep_updated_at);
        const weightAge = formatAgeDays(readiness.weight_updated_at);

        const pillarDefs = [
          {
            label: "Cold swim",
            score: enduranceCount ? Math.min(100, enduranceCount * 12 + distanceMiles * 2) : 0,
            tone: enduranceCount >= 2 ? "good" : enduranceCount >= 1 ? "warn" : "bad",
            detail: enduranceCount ? `${enduranceCount} endurance sessions` : "Needs open water exposure",
            meta: { importance: 9, group: "race_pillar", related: "swim,open_water" },
          },
          {
            label: "Bike readiness",
            score: distanceMiles ? Math.min(100, distanceMiles * 4) : 0,
            tone: distanceMiles >= 40 ? "good" : distanceMiles >= 20 ? "warn" : "bad",
            detail: `${formatNumber(distanceMiles, 1)} mi this week`,
            meta: { importance: 8, group: "race_pillar", related: "bike" },
          },
          {
            label: "Run durability",
            score: enduranceCount ? Math.min(100, enduranceCount * 10) : 0,
            tone: enduranceCount >= 2 ? "good" : enduranceCount >= 1 ? "warn" : "bad",
            detail: "Progress run tolerance & ladders",
            meta: { importance: 9, group: "race_pillar", related: "run" },
          },
          {
            label: "Strength & tissue",
            score: strengthCount ? Math.min(100, strengthCount * 15) : 0,
            tone: strengthCount >= 2 ? "good" : strengthCount >= 1 ? "warn" : "bad",
            detail: `${strengthCount} strength sessions`,
            meta: { importance: 7, group: "race_pillar", related: "strength,pt" },
          },
          {
            label: "Recovery",
            score: recoveryScore,
            tone: recoveryScore >= 85 ? "good" : recoveryScore >= 70 ? "warn" : "bad",
            detail: sleepHours != null && sleepBaseline != null
              ? `Sleep ${formatNumber(sleepHours, 1)}h vs ${formatNumber(sleepBaseline, 1)}h baseline`
              : "Sleep baseline missing",
            meta: { importance: 8, group: "race_pillar", related: "sleep" },
          },
          {
            label: "Execution",
            score: adherencePct != null ? adherencePct : 0,
            tone: adherencePct >= 75 ? "good" : adherencePct >= 40 ? "warn" : "bad",
            detail: adherencePct != null ? `Adherence ${formatNumber(adherencePct, 0)}%` : "Plan adherence missing",
            meta: { importance: 7, group: "race_pillar", related: "adherence" },
          },
        ];

        const limiters = [];
        if (sleepAge == null || sleepAge >= 2) {
          limiters.push({
            label: "Sleep update age",
            status: sleepAge != null ? `${formatNumber(sleepAge, sleepAge >= 10 ? 0 : 1)}d since update` : "No update",
            detail: "Target ≤2d",
            tone: "warn",
          });
        }
        if (weightAge == null || weightAge >= 7) {
          limiters.push({
            label: "Weight update age",
            status: weightAge != null ? `${formatNumber(weightAge, weightAge >= 10 ? 0 : 1)}d since update` : "No update",
            detail: "Target ≤7d",
            tone: "warn",
          });
        }
        if (enduranceCount < 2) {
          limiters.push({
            label: "Endurance sessions (7d)",
            status: `${enduranceCount}/2 target`,
            detail: "Aim ≥2 sessions",
            tone: "warn",
          });
        }
        if (strengthCount < 2) {
          limiters.push({
            label: "Strength sessions (7d)",
            status: `${strengthCount}/2 target`,
            detail: "Aim ≥2 sessions",
            tone: "warn",
          });
        }
        if (adherencePct != null && adherencePct < 50) {
          limiters.push({
            label: "Adherence (7d)",
            status: `${formatNumber(adherencePct, 0)}%`,
            detail: "Target ≥50%",
            tone: "bad",
          });
        }

        pillarDefs.forEach((pillar) => {
          posRacePillarsEl.appendChild(renderPillar(pillar));
        });

        if (posRaceLimitersListEl) {
          limiters.slice(0, 4).forEach((limiter) => {
            posRaceLimitersListEl.appendChild(
              renderStatusItem(
                limiter.label,
                limiter.status || "—",
                limiter.tone,
                limiter.detail,
                { importance: 8, group: "race_limiters", related: "limiters" },
              ),
            );
          });
        }
        if (posRaceLimitersNoteEl) {
          posRaceLimitersNoteEl.textContent = limiters.length ? "Top blockers for race readiness." : "No major blockers.";
        }

        if (posRacePhaseListEl) {
          posRacePhaseListEl.innerHTML = "";
          const phase = daysToRace > 180 ? "Base" : daysToRace > 90 ? "Build" : daysToRace > 30 ? "Specific" : "Taper";
          const focus = "Cold swim exposure, hills, run durability";
          posRacePhaseListEl.appendChild(
            renderPlanList("Phase", phase, { importance: 7, group: "race_phase", related: "phase" }),
          );
          posRacePhaseListEl.appendChild(
            renderPlanList("Focus", focus, { importance: 8, group: "race_phase", related: "focus" }),
          );
          if (posDomainRacePlanEl) {
            posDomainRacePlanEl.textContent = `Plan: ${phase} phase · ${focus}`;
            attachMeta(posDomainRacePlanEl, { importance: 9, group: "plan_race", related: "phase,focus" });
          }
          if (posDomainRacePlanSubEl) {
            posDomainRacePlanSubEl.textContent = `${daysToRace} days to race · Endurance ${enduranceCount} sessions · Strength ${strengthCount} sessions`;
            attachMeta(posDomainRacePlanSubEl, { importance: 6, group: "plan_race", related: "inputs" });
          }
        }
        if (posRacePhaseNoteEl) {
          posRacePhaseNoteEl.textContent = `${daysToRace} days to race · phase strategy.`;
        }
      }

      async function loadPosStravaFitness() {
        if (!posStravaListEl || !posStravaFitnessEl) return;
        posStravaListEl.innerHTML = "";
        if (posStravaNoteEl) posStravaNoteEl.textContent = "";
        if (posStravaChartEl) posStravaChartEl.innerHTML = "";
        if (posCyclingListEl) posCyclingListEl.innerHTML = "";
        if (posRunningListEl) posRunningListEl.innerHTML = "";
        if (posSwimmingListEl) posSwimmingListEl.innerHTML = "";
        if (posCyclingNoteEl) posCyclingNoteEl.textContent = "—";
        if (posRunningNoteEl) posRunningNoteEl.textContent = "—";
        if (posSwimmingNoteEl) posSwimmingNoteEl.textContent = "—";

        const since = rangeStartDate(currentRangeDays);
        const sinceIso = since.toISOString().slice(0, 10);

        const { data, error } = await supabase
          .from("strava_fitness_daily")
          .select("date,sport_type,fitness,fatigue,form")
          .gte("date", sinceIso)
          .order("date", { ascending: true });

        if (error || !data || !data.length) {
          posStravaListEl.appendChild(
            renderStatusItem(
              "Strava fitness",
              "No data",
              "warn",
              "Sync Strava fitness to populate.",
              { importance: 8, group: "fitness", related: "fitness,fatigue,form" },
            ),
          );
          return;
        }

        const bySport = {};
        data.forEach((row) => {
          const sport = row.sport_type || "all";
          if (!bySport[sport]) bySport[sport] = [];
          bySport[sport].push(row);
        });

        const renderSportPanel = (listEl, noteEl, rows, label, importance = 8) => {
          if (!listEl) return;
          listEl.innerHTML = "";
          if (!rows || !rows.length) {
            listEl.appendChild(
              renderStatusItem(
                "Strava",
                "No data",
                "warn",
                "Sync Strava to populate",
                { importance, group: label.toLowerCase(), related: "fitness,fatigue,form" },
              ),
            );
            if (noteEl) noteEl.textContent = `${rangeLabel(currentRangeDays)} · ${label}`;
            return;
          }
          const first = rows[0];
          const last = rows[rows.length - 1];
          const deltaFitness = (last.fitness ?? 0) - (first.fitness ?? 0);
          const deltaFatigue = (last.fatigue ?? 0) - (first.fatigue ?? 0);
          const deltaForm = (last.form ?? 0) - (first.form ?? 0);
          const band = formBand(last.form);
          const formLabel = last.form != null ? `${last.form >= 0 ? "+" : ""}${formatNumber(last.form, 1)}` : "—";
          listEl.appendChild(
            renderStatusItem(
              "Form (fitness − fatigue)",
              formLabel,
              band.tone,
              `Δ${currentRangeDays}d ${formatNumber(deltaForm, 1)}`,
              { importance, group: label.toLowerCase(), related: "form" },
            ),
          );
          listEl.appendChild(
            renderStatList(
              "Fitness",
              formatNumber(last.fitness, 1),
              `Δ${currentRangeDays}d ${formatNumber(deltaFitness, 1)}`,
              { importance: importance - 1, group: label.toLowerCase(), related: "fitness" },
            ),
          );
          listEl.appendChild(
            renderStatList(
              "Fatigue",
              formatNumber(last.fatigue, 1),
              `Δ${currentRangeDays}d ${formatNumber(deltaFatigue, 1)}`,
              { importance: importance - 1, group: label.toLowerCase(), related: "fatigue" },
            ),
          );
          if (noteEl) noteEl.textContent = `Interval: daily (Strava) · Range: ${rangeLabel(currentRangeDays)} · ${label}`;
        };

        const order = ["all", "running", "cycling", "swimming"];
        order.forEach((sport) => {
          const rows = bySport[sport];
          if (!rows || !rows.length) return;
          const first = rows[0];
          const last = rows[rows.length - 1];
          const deltaForm = (last.form ?? 0) - (first.form ?? 0);
          const band = formBand(last.form);
          const label = sport === "all" ? "Overall" : sport.charAt(0).toUpperCase() + sport.slice(1);
          const formLabel = last.form != null ? `${last.form >= 0 ? "+" : ""}${formatNumber(last.form, 1)}` : "—";
          const meta = `Fitness ${formatNumber(last.fitness, 1)} · Fatigue ${formatNumber(last.fatigue, 1)} · Form ${formLabel} · Δ${currentRangeDays}d ${formatNumber(deltaForm, 1)}`;
          const importance = sport === "all" ? 9 : 8;
          posStravaListEl.appendChild(
            renderStatusItem(label, formLabel, band.tone, meta, {
              importance,
              group: "fitness",
              related: "fitness,fatigue,form",
            }),
          );
        });

        const chartRows = bySport.all || bySport.running || bySport.cycling || bySport.swimming || [];
        if (posStravaChartEl && chartRows.length) {
          const labels = chartRows.map((row) => row.date);
          const series = [
            { label: "Fitness", color: "#38bdf8", values: chartRows.map((row) => row.fitness ?? 0) },
            { label: "Fatigue", color: "#f59e0b", values: chartRows.map((row) => row.fatigue ?? 0) },
            { label: "Form", color: "#22c55e", values: chartRows.map((row) => row.form ?? 0) },
          ];
          posStravaChartEl.innerHTML = renderLineChart({ labels, series, yLabel: "Score" });
          if (posStravaChartCaptionEl) {
            posStravaChartCaptionEl.textContent = `Interval: daily (Strava) · Range: ${rangeLabel(currentRangeDays)}`;
          }
        }

        if (posStravaNoteEl) posStravaNoteEl.textContent = `Interval: daily (Strava) · Range: ${rangeLabel(currentRangeDays)}.`;

        renderSportPanel(posCyclingListEl, posCyclingNoteEl, bySport.cycling, "Cycling", 8);
        renderSportPanel(posRunningListEl, posRunningNoteEl, bySport.running, "Running", 8);
        renderSportPanel(posSwimmingListEl, posSwimmingNoteEl, bySport.swimming, "Swimming", 8);
      }

      function trendBadge(values) {
        if (!values || values.length < 2) {
          return { label: "Δ 0", tone: "warn" };
        }
        const first = values[0] ?? 0;
        const last = values[values.length - 1] ?? 0;
        const delta = last - first;
        if (Math.abs(delta) < 0.01) return { label: "Δ 0", tone: "warn" };
        const deltaLabel = delta >= 0 ? `Δ +${formatNumber(delta, 1)}` : `Δ ${formatNumber(delta, 1)}`;
        return delta > 0 ? { label: deltaLabel, tone: "good" } : { label: deltaLabel, tone: "bad" };
      }

      async function loadPosTrends() {
        if (!posTrendsListEl || !posTrendsEl) return;
        posTrendsListEl.innerHTML = "";
        if (posTrendsNoteEl) posTrendsNoteEl.textContent = "";

        const now = new Date();
        const dayCount = Math.max(1, currentRangeDays);
        const start = rangeStartDate(dayCount);
        const startIso = start.toISOString();
        const startKey = startIso.slice(0, 10);
        const days = [];
        for (let i = 0; i < dayCount; i += 1) {
          const d = new Date(start);
          d.setDate(start.getDate() + i);
          const key = dateKeyFromIso(d.toISOString());
          days.push(key);
        }

        const [metricsResp, stravaResp, strengthResp] = await Promise.all([
          supabase
            .from("pos_day_metrics")
            .select("date,training_load_today")
            .gte("date", startKey)
            .order("date", { ascending: true }),
          supabase
            .from("pos_events")
            .select("event_timestamp,payload")
            .eq("source", "strava")
            .eq("event_type", "activity")
            .gte("event_timestamp", startIso),
          supabase
            .from("speediance_training_session_scores")
            .select("session_date")
            .gte("session_date", startKey),
        ]);

        const loadMap = new Map();
        (metricsResp.data || []).forEach((row) => {
          if (row.date) {
            loadMap.set(row.date, Number(row.training_load_today ?? 0));
          }
        });

        const distanceByDay = new Map();
        (stravaResp.data || []).forEach((row) => {
          const key = dateKeyFromIso(row.event_timestamp);
          if (!key) return;
          const payload = row.payload || {};
          const distance = Number(payload.distance_m ?? payload.distance ?? 0);
          if (!Number.isNaN(distance) && distance > 0) {
            distanceByDay.set(key, (distanceByDay.get(key) || 0) + distance);
          }
        });

        const strengthByDay = new Map();
        (strengthResp.data || []).forEach((row) => {
          const key = row.session_date || null;
          if (!key) return;
          strengthByDay.set(key, (strengthByDay.get(key) || 0) + 1);
        });

        const loadSeries = days.map((d) => loadMap.get(d) || 0);
        const distanceSeries = days.map((d) => formatMiles(distanceByDay.get(d) || 0) || 0);
        const strengthSeries = days.map((d) => strengthByDay.get(d) || 0);

        const loadTrend = trendBadge(loadSeries);
        const enduranceTrend = trendBadge(distanceSeries);
        const strengthTrend = trendBadge(strengthSeries);

        const loadAvg = avg(loadSeries) ?? 0;
        const loadMin = Math.min(...loadSeries);
        const loadMax = Math.max(...loadSeries);
        const loadEntry = renderStatusItem(
          "Training load",
          loadTrend.label,
          loadTrend.tone,
          `Avg ${formatNumber(loadAvg, 0)} · Min ${formatNumber(loadMin, 0)} · Max ${formatNumber(loadMax, 0)}`,
          { importance: 7, group: "momentum", related: "training_load" },
        );
        const loadSpark = document.createElement("div");
        loadSpark.className = "trend-spark";
        loadSpark.innerHTML = renderSparkline(loadSeries, "rgba(56,189,248,0.9)");
        const loadMeta = document.createElement("div");
        loadMeta.className = "trend-meta";
        loadMeta.textContent = `${rangeLabel(currentRangeDays)}: ${formatNumber(loadSeries[loadSeries.length - 1] ?? 0, 0)} load`;
        loadEntry.appendChild(loadSpark);
        loadEntry.appendChild(loadMeta);
        posTrendsListEl.appendChild(loadEntry);

        const distanceTotal = distanceSeries.reduce((acc, val) => acc + val, 0);
        const distanceMin = Math.min(...distanceSeries);
        const distanceMax = Math.max(...distanceSeries);
        const enduranceEntry = renderStatusItem(
          "Endurance distance",
          enduranceTrend.label,
          enduranceTrend.tone,
          `Total ${formatNumber(distanceTotal ?? 0, 1)} mi · Min ${formatNumber(distanceMin ?? 0, 1)} · Max ${formatNumber(distanceMax ?? 0, 1)}`,
          { importance: 6, group: "endurance", related: "distance,volume" },
        );
        const enduranceSpark = document.createElement("div");
        enduranceSpark.className = "trend-spark";
        enduranceSpark.innerHTML = renderSparkline(distanceSeries, "rgba(16,185,129,0.9)");
        const enduranceMeta = document.createElement("div");
        enduranceMeta.className = "trend-meta";
        enduranceMeta.textContent = "Swim + bike + run";
        enduranceEntry.appendChild(enduranceSpark);
        enduranceEntry.appendChild(enduranceMeta);
        posTrendsListEl.appendChild(enduranceEntry);

        const strengthTotal = strengthSeries.reduce((acc, val) => acc + val, 0);
        const strengthMin = Math.min(...strengthSeries);
        const strengthMax = Math.max(...strengthSeries);
        const strengthEntry = renderStatusItem(
          "Strength sessions",
          strengthTrend.label,
          strengthTrend.tone,
          `${strengthTotal} sessions · Min ${strengthMin} · Max ${strengthMax}`,
          { importance: 6, group: "strength", related: "sessions" },
        );
        const strengthSpark = document.createElement("div");
        strengthSpark.className = "trend-spark";
        strengthSpark.innerHTML = renderSparkline(strengthSeries, "rgba(129,140,248,0.9)");
        const strengthMeta = document.createElement("div");
        strengthMeta.className = "trend-meta";
        strengthMeta.textContent = "Speediance volume trend";
        strengthEntry.appendChild(strengthSpark);
        strengthEntry.appendChild(strengthMeta);
        posTrendsListEl.appendChild(strengthEntry);

        if (posTrendsNoteEl) {
          posTrendsNoteEl.textContent = `Interval: daily totals · Range: ${rangeLabel(currentRangeDays)}.`;
        }
      }

      async function loadPosLoadCapacity() {
        if (!posLoadCapacityListEl || !posLoadCapacityEl) return;
        posLoadCapacityListEl.innerHTML = "";
        if (posLoadCapacityNoteEl) posLoadCapacityNoteEl.textContent = "";

        const [trainingResp, metricsResp] = await Promise.all([
          supabase
            .from("training_state")
            .select("strength_capacity_7d,updated_at")
            .eq("id", "global")
            .maybeSingle(),
          supabase
            .from("pos_day_metrics")
            .select("training_load_7d,updated_at")
            .order("date", { ascending: false })
            .limit(1),
        ]);

        const training = trainingResp.data ?? {};
        const metrics = metricsResp.data?.[0] ?? {};
        const load = Number(metrics.training_load_7d ?? NaN);
        const capacity = Number(training.strength_capacity_7d ?? NaN);

        if (!Number.isNaN(load) && !Number.isNaN(capacity) && capacity > 0) {
          posLoadCapacityListEl.appendChild(
            renderGoalBar({
              label: "Training load (7d)",
              actual: load,
              target: capacity,
              unit: "load",
              meta: { importance: 9, group: "load_capacity", related: "training_load,capacity" },
            }),
          );
        } else if (!Number.isNaN(load)) {
          posLoadCapacityListEl.appendChild(
            renderStatusItem(
              "Training load (7d)",
              `${formatNumber(load, 0)} load`,
              "neutral",
              `${formatNumber(load, 0)} load · Capacity missing`,
              { importance: 8, group: "load_capacity", related: "training_load" },
            ),
          );
        } else {
          posLoadCapacityListEl.appendChild(
            renderStatusItem(
              "Training load (7d)",
              "No data",
              "warn",
              "No load data yet",
              { importance: 8, group: "load_capacity", related: "training_load" },
            ),
          );
        }

        if (posLoadCapacityNoteEl) {
          const parts = [];
          if (metrics.updated_at) parts.push(`Load updated ${formatTimestamp(metrics.updated_at)}`);
          if (training.updated_at) parts.push(`Capacity updated ${formatTimestamp(training.updated_at)}`);
          posLoadCapacityNoteEl.textContent = parts.length ? parts.join(" · ") : "Weekly load vs capacity";
        }
      }

      async function loadPosWeeklyLoad() {
        if (!posWeeklyLoadChartEl || !posWeeklyLoadEl) return;
        posWeeklyLoadChartEl.innerHTML = "";
        if (posWeeklyLoadNoteEl) posWeeklyLoadNoteEl.textContent = "";

        const start = rangeStartDate(28);
        const startKey = start.toISOString().slice(0, 10);
        const { data, error } = await supabase
          .from("pos_day_metrics")
          .select("date,training_load_today")
          .gte("date", startKey)
          .order("date", { ascending: true });

        if (error || !data || !data.length) {
          if (posWeeklyLoadNoteEl) posWeeklyLoadNoteEl.textContent = "No weekly load yet.";
          return;
        }

        const weekTotals = new Map();
        data.forEach((row) => {
          if (!row.date) return;
          const weekStart = startOfWeekSunday(new Date(row.date));
          const key = weekStart.toISOString().slice(0, 10);
          const value = Number(row.training_load_today ?? 0);
          weekTotals.set(key, (weekTotals.get(key) || 0) + (Number.isNaN(value) ? 0 : value));
        });

        const weeks = Array.from(weekTotals.entries())
          .sort(([a], [b]) => (a < b ? -1 : 1))
          .slice(-4);

        const labels = weeks.map(([key]) => {
          const date = new Date(key);
          return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
        });
        const values = weeks.map(([, total]) => total);

        posWeeklyLoadChartEl.innerHTML = renderWeeklyBars({
          labels,
          values,
          avgLabel: "4wk avg",
        });

        if (posWeeklyLoadNoteEl) {
          posWeeklyLoadNoteEl.textContent = "Interval: weekly · 4-week totals with rolling average.";
        }
        if (posWeeklyLoadCaptionEl) {
          posWeeklyLoadCaptionEl.textContent = "Interval: weekly · Range: last 4 weeks";
        }
      }

      async function loadPosHeatmap() {
        if (!posHeatmapGridEl || !posHeatmapEl) return;
        posHeatmapGridEl.innerHTML = "";
        if (posHeatmapNoteEl) posHeatmapNoteEl.textContent = "";
        if (posDayDrawerEl) {
          posDayDrawerEl.classList.add("hidden");
          if (posDayDrawerListEl) posDayDrawerListEl.innerHTML = "";
          if (posDayDrawerDateEl) posDayDrawerDateEl.textContent = "—";
        }

        const daysCount = 7;
        const start = rangeStartDate(daysCount);
        const startIso = start.toISOString();
        const startDateKey = startIso.slice(0, 10);
        const days = [];
        for (let i = 0; i < daysCount; i += 1) {
          const d = new Date(start);
          d.setDate(start.getDate() + i);
          days.push(dateKeyFromIso(d.toISOString()));
        }

        const [metricsResp, nutritionResp, stravaResp, strengthResp] = await Promise.all([
          supabase
            .from("pos_day_metrics")
            .select("date,training_load_today,sleep_seconds")
            .gte("date", startDateKey)
            .order("date", { ascending: true }),
          supabase
            .from("pos_events")
            .select("event_timestamp")
            .eq("source", "nutrition")
            .gte("event_timestamp", startIso),
          supabase
            .from("pos_events")
            .select("event_timestamp,payload")
            .eq("source", "strava")
            .eq("event_type", "activity")
            .gte("event_timestamp", startIso),
          supabase
            .from("speediance_training_session_scores")
            .select("session_date")
            .gte("session_date", startDateKey),
        ]);

        const hasAny =
          (metricsResp.data?.length ?? 0) +
          (nutritionResp.data?.length ?? 0) +
          (stravaResp.data?.length ?? 0) +
          (strengthResp.data?.length ?? 0);
        if (!hasAny) {
          if (posHeatmapNoteEl) posHeatmapNoteEl.textContent = "No recent activity logged.";
          return;
        }

        const loadByDay = new Map();
        const sleepByDay = new Map();
        (metricsResp.data || []).forEach((row) => {
          if (!row.date) return;
          loadByDay.set(row.date, Number(row.training_load_today ?? 0));
          if (row.sleep_seconds != null) {
            sleepByDay.set(row.date, row.sleep_seconds / 3600);
          }
        });

        const nutritionByDay = new Map();
        (nutritionResp.data || []).forEach((row) => {
          const key = dateKeyFromIso(row.event_timestamp);
          if (!key) return;
          nutritionByDay.set(key, (nutritionByDay.get(key) || 0) + 1);
        });

        const stravaMinutesByDay = new Map();
        (stravaResp.data || []).forEach((row) => {
          const key = dateKeyFromIso(row.event_timestamp);
          if (!key) return;
          const payload = row.payload || {};
          const duration = Number(payload.elapsed_s ?? payload.elapsed_time ?? payload.duration_s ?? 0);
          if (!Number.isNaN(duration) && duration > 0) {
            stravaMinutesByDay.set(key, (stravaMinutesByDay.get(key) || 0) + duration / 60);
          }
        });

        const strengthByDay = new Map();
        (strengthResp.data || []).forEach((row) => {
          if (!row.session_date) return;
          strengthByDay.set(row.session_date, (strengthByDay.get(row.session_date) || 0) + 1);
        });

        const loadValues = Array.from(loadByDay.values());
        const maxLoad = loadValues.length ? Math.max(...loadValues) : 0;

        const rowEl = document.createElement("div");
        rowEl.className = "heatmap-row";

        days.forEach((key) => {
          const cell = document.createElement("div");
          const load = loadByDay.get(key) || 0;
          const sleep = sleepByDay.get(key);
          const food = nutritionByDay.get(key) || 0;
          const stravaMin = stravaMinutesByDay.get(key) || 0;
          const strengthCount = strengthByDay.get(key) || 0;

          let toneClass = "";
          if (load > 0 && maxLoad > 0) {
            const ratio = load / maxLoad;
            toneClass = ratio > 0.66 ? "active-high" : ratio > 0.33 ? "active-mid" : "active-low";
          }
          cell.className = `heatmap-cell ${toneClass}`.trim();

          const dateObj = key ? new Date(key) : new Date();
          const dayLabel = dateObj.toLocaleDateString("en-US", { weekday: "short" });
          const loadLabel = load ? `Load ${formatNumber(load, 0)}` : "Load —";
          const sleepLabel = sleep != null ? `${formatNumber(sleep, 1)}h sleep` : "Sleep —";
          const trainLabel = stravaMin || strengthCount ? `${formatNumber(stravaMin, 0)} min · ${strengthCount} strength` : "Training —";
          const foodLabel = food ? `${food} food logs` : "Food —";

          cell.title = `${key}\n${loadLabel}\n${sleepLabel}\n${trainLabel}\n${foodLabel}`;

          const dots = document.createElement("div");
          dots.className = "heatmap-dots";
          const sleepDot = document.createElement("span");
          sleepDot.className = "heatmap-dot dot-sleep";
          sleepDot.style.opacity = sleep != null ? "1" : "0.2";
          const foodDot = document.createElement("span");
          foodDot.className = "heatmap-dot dot-food";
          foodDot.style.opacity = food ? "1" : "0.2";
          const trainDot = document.createElement("span");
          trainDot.className = "heatmap-dot dot-train";
          trainDot.style.opacity = load > 0 || stravaMin > 0 || strengthCount > 0 ? "1" : "0.2";
          dots.appendChild(sleepDot);
          dots.appendChild(foodDot);
          dots.appendChild(trainDot);

          cell.innerHTML = `
            <div class="heatmap-day">${dayLabel}</div>
            <div class="heatmap-meta">${loadLabel}</div>
            <div class="heatmap-meta">${sleepLabel}</div>
            <div class="heatmap-meta">${trainLabel}</div>
            <div class="heatmap-meta">${foodLabel}</div>
          `;
          cell.appendChild(dots);
          cell.addEventListener("click", () => {
            loadPosDayDrawer(key);
          });
          rowEl.appendChild(cell);
        });

        posHeatmapGridEl.appendChild(rowEl);
        if (posHeatmapNoteEl) {
          posHeatmapNoteEl.textContent = "Last 7 days · dots show sleep, food, training coverage.";
        }
      }

      async function loadPosRelations() {
        if (!posRelationsEl) return;
        if (posRelationsListEl) posRelationsListEl.innerHTML = "";
        if (posRelationsNoteEl) posRelationsNoteEl.textContent = "";
        if (posLoadSleepChartEl) posLoadSleepChartEl.innerHTML = "";
        if (posFuelLoadChartEl) posFuelLoadChartEl.innerHTML = "";

        const resolution = currentRangeDays <= 7 ? "hour" : "day";
        const dayCount = Math.max(1, currentRangeDays);
        const start = rangeStartDate(dayCount);
        const startIso = start.toISOString();
        const startKey = startIso.slice(0, 10);

        let labels = [];
        let loadSeries = [];
        let sleepSeries = [];
        let caloriesSeries = [];
        let proteinSeries = [];

        if (resolution === "hour") {
          const hours = [];
          for (let h = 0; h < 24; h += 1) {
            hours.push(h);
          }
          labels = hours.map((h) => `${String(h).padStart(2, "0")}:00`);

          const [metricsResp, nutritionResp, stravaResp] = await Promise.all([
            supabase
              .from("pos_day_metrics")
              .select("date,sleep_seconds")
              .gte("date", startKey)
              .order("date", { ascending: true })
              .limit(1),
            supabase
              .from("pos_events")
              .select("event_timestamp,payload")
              .eq("source", "nutrition")
              .gte("event_timestamp", startIso),
            supabase
              .from("pos_events")
              .select("event_timestamp,payload")
              .eq("source", "strava")
              .eq("event_type", "activity")
              .gte("event_timestamp", startIso),
          ]);

          const sleepHours = metricsResp.data?.[0]?.sleep_seconds
            ? metricsResp.data[0].sleep_seconds / 3600
            : 0;
          sleepSeries = hours.map(() => sleepHours);

          const loadByHour = new Map();
          (stravaResp.data || []).forEach((row) => {
            const ts = new Date(row.event_timestamp);
            const hour = ts.getHours();
            const payload = row.payload || {};
            const duration = Number(payload.elapsed_s ?? payload.elapsed_time ?? payload.duration_s ?? 0);
            const minutes = Number.isNaN(duration) ? 0 : duration / 60;
            loadByHour.set(hour, (loadByHour.get(hour) || 0) + minutes);
          });
          loadSeries = hours.map((h) => loadByHour.get(h) || 0);

          const caloriesByHour = new Map();
          const proteinByHour = new Map();
          (nutritionResp.data || []).forEach((row) => {
            const ts = new Date(row.event_timestamp);
            const hour = ts.getHours();
            const payload = row.payload || {};
            const calories = Number(payload.calories ?? payload.kcal ?? payload.energy_kcal ?? 0);
            const protein = Number(payload.protein_g ?? payload.protein ?? 0);
            if (!Number.isNaN(calories)) caloriesByHour.set(hour, (caloriesByHour.get(hour) || 0) + calories);
            if (!Number.isNaN(protein)) proteinByHour.set(hour, (proteinByHour.get(hour) || 0) + protein);
          });
          caloriesSeries = hours.map((h) => caloriesByHour.get(h) || 0);
          proteinSeries = hours.map((h) => proteinByHour.get(h) || 0);
        } else {
          labels = [];
          for (let i = 0; i < dayCount; i += 1) {
            const d = new Date(start);
            d.setDate(start.getDate() + i);
            labels.push(dateKeyFromIso(d.toISOString()));
          }

          const [metricsResp, cronoTotals] = await Promise.all([
            supabase
              .from("pos_day_metrics")
              .select("date,training_load_today,sleep_seconds")
              .gte("date", startKey)
              .order("date", { ascending: true }),
            fetchCronometerTotals(startKey),
          ]);

          const loadByDay = new Map();
          const sleepByDay = new Map();
          (metricsResp.data || []).forEach((row) => {
            if (!row.date) return;
            loadByDay.set(row.date, Number(row.training_load_today ?? 0));
            if (row.sleep_seconds != null) {
              sleepByDay.set(row.date, row.sleep_seconds / 3600);
            }
          });

          const caloriesByDay = new Map();
          const proteinByDay = new Map();
          if (cronoTotals && cronoTotals.size) {
            cronoTotals.forEach((totals, day) => {
              if (totals.calories_kcal != null) {
                caloriesByDay.set(day, (caloriesByDay.get(day) || 0) + totals.calories_kcal);
              }
              if (totals.protein_g != null) {
                proteinByDay.set(day, (proteinByDay.get(day) || 0) + totals.protein_g);
              }
            });
          }

          loadSeries = labels.map((d) => loadByDay.get(d) || 0);
          sleepSeries = labels.map((d) => sleepByDay.get(d) || 0);
          caloriesSeries = labels.map((d) => caloriesByDay.get(d) || 0);
          proteinSeries = labels.map((d) => proteinByDay.get(d) || 0);
        }

        const loadStat = resolution === "hour" ? sum(loadSeries) : avg(loadSeries) ?? 0;
        const sleepStat = resolution === "hour" ? (sleepSeries[0] || 0) : avg(sleepSeries) ?? 0;
        const caloriesStat = resolution === "hour" ? sum(caloriesSeries) : avg(caloriesSeries) ?? 0;
        const proteinStat = resolution === "hour" ? sum(proteinSeries) : avg(proteinSeries) ?? 0;
        const loadLabel = resolution === "hour" ? "Activity minutes" : "Training load";
        const sleepLabel = resolution === "hour" ? "Sleep (last night)" : "Sleep avg";
        const caloriesLabel = resolution === "hour" ? "Calories (today)" : "Calories avg";
        const proteinLabel = resolution === "hour" ? "Protein (today)" : "Protein avg";

        const intervalLabel = resolution === "hour" ? "Hourly (event timestamps)" : "Daily (day totals)";
        const rangeText = rangeLabel(currentRangeDays);
        const intervalStatus = `${intervalLabel} · ${rangeText}`;
        const loadUnit = resolution === "hour" ? "min" : "load";

        if (posRelationsListEl) {
          posRelationsListEl.appendChild(
            renderStatusItem(
              "Load vs sleep",
              intervalStatus,
              "neutral",
              `${loadLabel} ${formatNumber(loadStat, 0)} ${loadUnit} · ${sleepLabel} ${formatNumber(sleepStat, 1)} h`,
              { importance: 8, group: "relationships", related: "load,sleep" },
            ),
          );
          posRelationsListEl.appendChild(
            renderStatusItem(
              "Calories + protein vs training minutes",
              intervalStatus,
              "neutral",
              `${caloriesLabel} ${formatNumber(caloriesStat, 0)} kcal · ${proteinLabel} ${formatNumber(proteinStat, 0)} g · ${loadLabel} ${formatNumber(loadStat, 0)} ${loadUnit}`,
              { importance: 7, group: "relationships", related: "calories,protein,load" },
            ),
          );
        }

        const caption = `Interval: ${intervalLabel} · Range: ${rangeText}`;
        if (posRelationsNoteEl) {
          posRelationsNoteEl.textContent = caption;
        }

        if (posLoadSleepChartEl) {
          const loadChart = renderLineChart({
            labels,
            series: [{ label: resolution === "hour" ? "Activity min" : "Load", color: "#38bdf8", values: loadSeries }],
            yLabel: resolution === "hour" ? "Minutes" : "Load",
          });
          const sleepChart = renderLineChart({
            labels,
            series: [{ label: "Sleep (h)", color: "#22c55e", values: sleepSeries }],
            yLabel: "Hours",
          });
          posLoadSleepChartEl.innerHTML = `
            <div class="chart-block">${loadChart}<div class="chart-caption">${caption}</div></div>
            <div class="chart-block">${sleepChart}<div class="chart-caption">${caption}</div></div>
          `;
        }

        if (posFuelLoadChartEl) {
          const caloriesChart = renderLineChart({
            labels,
            series: [{ label: "Calories", color: "#f59e0b", values: caloriesSeries }],
            yLabel: "kcal",
          });
          const proteinChart = renderLineChart({
            labels,
            series: [{ label: "Protein", color: "#38bdf8", values: proteinSeries }],
            yLabel: "g",
          });
          posFuelLoadChartEl.innerHTML = `
            <div class="chart-block">${caloriesChart}<div class="chart-caption">${caption}</div></div>
            <div class="chart-block">${proteinChart}<div class="chart-caption">${caption}</div></div>
          `;
        }

        if (posRelationsNoteEl) {
          const sourceLoad = resolution === "hour" ? "Strava activity minutes (event time)" : "pos_day_metrics training_load_today";
          const intervalNote = resolution === "hour" ? "hourly (0–23)" : "daily (one point per day)";
          const fuelSource = resolution === "hour" ? "nutrition event timestamps (logged time)" : "Cronometer day totals";
          posRelationsNoteEl.textContent =
            `Range: ${rangeText} · Interval: ${intervalNote} · Load from ${sourceLoad} · Sleep from pos_day_metrics · Fuel from ${fuelSource}.`;
        }
      }

      async function loadPosSleepQuality() {
        if (!posSleepQualityDurationEl || !posSleepQualityScoreEl || !posSleepQualityBarsEl) return;
        posSleepQualityDurationEl.textContent = "—";
        posSleepQualityScoreEl.textContent = "Efficiency —";
        posSleepQualityBarsEl.innerHTML = "";
        if (posBreathingQualityValueEl) posBreathingQualityValueEl.textContent = "—";
        if (posBreathingQualityNoteEl) posBreathingQualityNoteEl.textContent = "Respiration metrics";

        const recentStart = rangeStartDate(7).toISOString().slice(0, 10);
        const [sleepRawResp, metricsResp] = await Promise.all([
          supabase
            .from("withings_sleep_raw")
            .select("summary_date,summary,payload,start_date,end_date")
            .order("summary_date", { ascending: false })
            .limit(1),
          supabase
            .from("pos_day_metrics")
            .select("date,sleep_seconds")
            .gte("date", recentStart)
            .order("date", { ascending: true }),
        ]);

        const latest = sleepRawResp.data?.[0];
        const summary = latest?.summary || latest?.payload?.summary || latest?.payload || {};
        let duration = pickNumber(summary, [
          "duration",
          "total_sleep_time",
          "sleep_duration",
          "asleepduration",
          "sleep_duration_s",
        ]);
        duration = normalizeSeconds(duration);
        const efficiencyRaw = pickNumber(summary, ["sleep_efficiency", "efficiency"]);
        const efficiencyPct = efficiencyRaw != null
          ? (efficiencyRaw <= 1 ? efficiencyRaw * 100 : efficiencyRaw)
          : null;
        const breathingScore = pickNumber(summary, ["breathing_score", "respiratory_score"]);
        const respRate = pickNumber(summary, ["rr_average", "respiratory_rate", "breathing_rate"]);

        if (duration != null) {
          posSleepQualityDurationEl.textContent = formatDurationHM(duration);
        }
        posSleepQualityScoreEl.textContent = efficiencyPct != null
          ? `Efficiency ${formatNumber(efficiencyPct, 0)}%`
          : "Efficiency —";

        const sleepSeries = (metricsResp.data || []).map((row) => {
          const hrs = row.sleep_seconds ? row.sleep_seconds / 3600 : 0;
          return Number.isNaN(hrs) ? 0 : hrs;
        });
        posSleepQualityBarsEl.innerHTML = renderMiniBars(sleepSeries);

        if (posBreathingQualityValueEl) {
          if (respRate != null) {
            posBreathingQualityValueEl.textContent = `${formatNumber(respRate, 1)} rpm`;
          } else if (breathingScore != null) {
            posBreathingQualityValueEl.textContent = `${formatNumber(breathingScore, 0)}/100`;
          } else {
            hintEmpty(posBreathingQualityValueEl, "No respiratory data");
          }
        }
        if (posBreathingQualityNoteEl) {
          if (respRate != null) {
            posBreathingQualityNoteEl.textContent = "Average respiratory rate";
          } else if (breathingScore != null) {
            posBreathingQualityNoteEl.textContent = "Breathing score (if provided)";
          } else {
            posBreathingQualityNoteEl.textContent = "Respiration not provided by Withings summary";
          }
        }
      }

      async function loadPosSleepScoreGrid() {
        if (!posSleepScoreGridEl) return;
        posSleepScoreGridEl.innerHTML = "";
        if (posSleepScoreNoteEl) posSleepScoreNoteEl.textContent = "";

        const sleepRawResp = await supabase
          .from("withings_sleep_raw")
          .select("summary_date,summary,payload")
          .order("summary_date", { ascending: false })
          .limit(1);

        const latest = sleepRawResp.data?.[0];
        if (!latest) {
          posSleepScoreGridEl.appendChild(renderSleepMetricCard({
            label: "No sleep data",
            value: "—",
            meta: "Sync Withings sleep to populate",
            metricMeta: { importance: 6, group: "sleep_score", related: "coverage" },
          }));
          return;
        }

        const summary = latest.summary || latest.payload?.summary || latest.payload || {};
        let duration = pickNumber(summary, [
          "duration",
          "total_sleep_time",
          "sleep_duration",
          "asleepduration",
          "sleep_duration_s",
        ]);
        duration = normalizeSeconds(duration);
        const deep = normalizeSeconds(pickNumber(summary, ["deep_sleep_duration", "deepsleepduration", "deep_duration"]));
        const light = normalizeSeconds(pickNumber(summary, ["lightsleepduration", "light_sleep_duration"]));
        const rem = normalizeSeconds(pickNumber(summary, ["remsleepduration", "rem_sleep_duration"]));
        const timeInBed = normalizeSeconds(pickNumber(summary, ["total_timeinbed", "time_in_bed"]));
        const waso = normalizeSeconds(pickNumber(summary, ["waso", "wakeupduration", "wakeup_duration"]));
        const regularity = pickNumber(summary, ["regularity", "sleep_regularity_score"]);
        const interruptions = pickNumber(summary, ["wakeupcount", "wakeup_count", "interruptions"]);
        const efficiencyRaw = pickNumber(summary, ["sleep_efficiency", "efficiency"]);
        const efficiencyPct = efficiencyRaw != null
          ? (efficiencyRaw <= 1 ? efficiencyRaw * 100 : efficiencyRaw)
          : null;
        const timeToSleepSeconds = pickNumber(summary, ["time_to_sleep_s"]);
        const timeToGetUpSeconds = pickNumber(summary, ["time_to_getup_s"]);
        let timeToSleep = timeToSleepSeconds ?? pickNumber(summary, ["time_to_sleep", "sleep_latency"]);
        let timeToGetUp = timeToGetUpSeconds ?? pickNumber(summary, ["time_to_getup", "time_to_wakeup"]);

        if (timeToSleep != null && timeToSleepSeconds == null && timeToSleep <= 240) {
          timeToSleep *= 60;
        }
        if (timeToGetUp != null && timeToGetUpSeconds == null && timeToGetUp <= 240) {
          timeToGetUp *= 60;
        }

        const sleepLatency = formatLatency(timeToSleep, "Sleep latency");
        const wakeLatency = formatLatency(timeToGetUp, "Wake latency");
        const entries = [
          { label: "Total sleep", value: duration != null ? formatDurationHM(duration) : "—", meta: "total_sleep_time" },
          { label: "Time in bed", value: timeInBed != null ? formatDurationHM(timeInBed) : "—", meta: "total_timeinbed" },
          { label: "Efficiency", value: efficiencyPct != null ? `${formatNumber(efficiencyPct, 0)}%` : "—", meta: "sleep_efficiency" },
          { label: "REM sleep", value: rem != null ? formatDurationHM(rem) : "—", meta: "remsleepduration" },
          { label: "Light sleep", value: light != null ? formatDurationHM(light) : "—", meta: "lightsleepduration" },
          { label: "Deep sleep", value: deep != null ? formatDurationHM(deep) : "—", meta: "deepsleepduration" },
          { label: "WASO", value: waso != null ? formatDurationHM(waso) : "—", meta: "wake after sleep onset" },
          { label: "Wakeups", value: interruptions != null ? `${formatNumber(interruptions, 0)}` : "—", meta: "wakeupcount" },
          { label: "Sleep latency", value: sleepLatency.value, meta: sleepLatency.meta },
          { label: "Wake latency", value: wakeLatency.value, meta: wakeLatency.meta },
          { label: "Regularity", value: regularity != null ? `${formatNumber(regularity, 0)}/100` : "—", meta: "regularity score" },
        ];

        entries.forEach((entry) => {
          posSleepScoreGridEl.appendChild(renderSleepMetricCard({
            label: entry.label,
            value: entry.value,
            meta: entry.meta,
            metricMeta: { importance: 7, group: "sleep_score", related: "sleep" },
          }));
        });

        if (posSleepScoreNoteEl) {
          posSleepScoreNoteEl.textContent = latest.summary_date
            ? `Latest Withings summary: ${latest.summary_date}`
            : "Latest Withings sleep summary";
        }
      }

      async function loadPosSleepHeartRate() {
        if (!posSleepHeartChartEl) return;
        posSleepHeartChartEl.innerHTML = "";
        if (posSleepHeartNoteEl) posSleepHeartNoteEl.textContent = "";

        const days = Math.max(7, Math.min(30, currentRangeDays));
        const start = rangeStartDate(days).toISOString().slice(0, 10);
        const { data } = await supabase
          .from("withings_sleep_raw")
          .select("summary_date,summary,payload")
          .gte("summary_date", start)
          .order("summary_date", { ascending: true });

        if (!data || !data.length) {
          if (posSleepHeartNoteEl) posSleepHeartNoteEl.textContent = "No sleep HR series yet.";
          return;
        }

        const labels = [];
        const values = [];
        data.forEach((row) => {
          if (!row.summary_date) return;
          const summary = row.summary || row.payload?.summary || row.payload || {};
          const hrAvg = pickNumber(summary, ["hr_average", "hr_avg", "heart_rate_avg"]);
          if (hrAvg == null) return;
          labels.push(row.summary_date);
          values.push(hrAvg);
        });

        if (!values.length) {
          if (posSleepHeartNoteEl) posSleepHeartNoteEl.textContent = "No heart rate values yet.";
          return;
        }

        posSleepHeartChartEl.innerHTML = renderLineChart({
          labels,
          series: [{ label: "Avg HR", color: "#94a3b8", values }],
          yLabel: "bpm",
        });
        if (posSleepHeartNoteEl) {
          posSleepHeartNoteEl.textContent = `Interval: daily · Range: ${rangeLabel(days)}`;
        }
      }

      async function loadPosTrainingWeek() {
        if (!posWeekSportTabsEl || !posWeekSportChartEl || !posWeekSportSummaryEl) return;
        posWeekSportTabsEl.innerHTML = "";
        posWeekSportChartEl.innerHTML = "";
        posWeekSportSummaryEl.textContent = "—";

        const options = [
          { id: "swim", label: "Swim" },
          { id: "ride", label: "Ride" },
          { id: "run", label: "Run" },
        ];

        options.forEach((option) => {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "sport-tab";
          btn.textContent = option.label;
          if (currentWeekSport === option.id) btn.classList.add("active");
          btn.addEventListener("click", async () => {
            currentWeekSport = option.id;
            await loadPosTrainingWeek();
          });
          posWeekSportTabsEl.appendChild(btn);
        });

        const start = rangeStartDate(7);
        const startIso = start.toISOString();
        const endIso = new Date().toISOString();
        const { data } = await supabase
          .from("pos_events")
          .select("event_timestamp,payload")
          .eq("source", "strava")
          .eq("event_type", "activity")
          .gte("event_timestamp", startIso)
          .lte("event_timestamp", endIso);

        const days = [];
        for (let i = 0; i < 7; i += 1) {
          const d = new Date(start);
          d.setDate(start.getDate() + i);
          days.push(d);
        }
        const labels = days.map((d) => d.toLocaleDateString("en-US", { weekday: "short" }));
        const distanceByDay = new Map();
        const timeByDay = new Map();

        (data || []).forEach((row) => {
          const payload = row.payload || {};
          const typeLabel = String(payload.type ?? payload.activity_type ?? payload.sport_type ?? "");
          const typeLower = typeLabel.toLowerCase();
          const isSwim = typeLower.includes("swim");
          const isRun = typeLower.includes("run");
          const isRide = typeLower.includes("ride") || typeLower.includes("bike") || typeLower.includes("cycle");
          const isMatch = currentWeekSport === "swim" ? isSwim : currentWeekSport === "run" ? isRun : isRide;
          if (!isMatch) return;
          const key = dateKeyFromIso(row.event_timestamp);
          if (!key) return;
          const distance = Number(payload.distance_m ?? payload.distance ?? 0);
          const duration = Number(payload.elapsed_s ?? payload.elapsed_time ?? payload.duration_s ?? 0);
          if (!Number.isNaN(distance)) {
            distanceByDay.set(key, (distanceByDay.get(key) || 0) + distance);
          }
          if (!Number.isNaN(duration)) {
            timeByDay.set(key, (timeByDay.get(key) || 0) + duration);
          }
        });

        const distanceSeries = days.map((d) => {
          const key = dateKeyFromIso(d.toISOString());
          const meters = distanceByDay.get(key) || 0;
          if (currentWeekSport === "swim") return meters * 1.09361;
          return meters * 0.000621371;
        });
        const timeSeries = days.map((d) => {
          const key = dateKeyFromIso(d.toISOString());
          const seconds = timeByDay.get(key) || 0;
          return seconds / 60;
        });

        const totalDistance = sum(distanceSeries);
        const totalTime = sum(timeSeries);
        const distanceUnit = currentWeekSport === "swim" ? "yd" : "mi";
        if (!totalDistance && !totalTime) {
          posWeekSportSummaryEl.textContent = "No sessions logged this week.";
          posWeekSportChartEl.innerHTML = "";
        } else {
          posWeekSportSummaryEl.textContent = `Distance ${formatNumber(totalDistance, 1)} ${distanceUnit} · Time ${formatNumber(totalTime, 0)} min`;
          posWeekSportChartEl.innerHTML = renderLineChart({
            labels,
            series: [{ label: `Distance (${distanceUnit})`, color: "#fb923c", values: distanceSeries }],
            yLabel: distanceUnit,
          });
        }
        if (posWeekSportCaptionEl) {
          posWeekSportCaptionEl.textContent = "Interval: daily (Strava activities) · Range: Last 7 days";
        }
      }

      async function loadPosFitnessCard() {
        if (!posFitnessCardChartEl) return;
        posFitnessCardChartEl.innerHTML = "";
        if (posFitnessCardNoteEl) posFitnessCardNoteEl.textContent = "";

        const days = Math.max(30, currentRangeDays);
        const start = rangeStartDate(days).toISOString().slice(0, 10);
        const { data } = await supabase
          .from("strava_fitness_daily")
          .select("date,fitness,form")
          .eq("sport_type", "all")
          .gte("date", start)
          .order("date", { ascending: true });

        if (!data || !data.length) {
          if (posFitnessCardNoteEl) posFitnessCardNoteEl.textContent = "No Strava fitness series yet.";
          return;
        }
        const labels = data.map((row) => row.date);
        const fitness = data.map((row) => Number(row.fitness ?? 0));
        const form = data.map((row) => Number(row.form ?? 0));
        posFitnessCardChartEl.innerHTML = renderLineChart({
          labels,
          series: [
            { label: "Fitness", color: "#fb923c", values: fitness },
            { label: "Form", color: "#38bdf8", values: form },
          ],
          yLabel: "Score",
        });
        if (posFitnessCardNoteEl) {
          posFitnessCardNoteEl.textContent = `Interval: daily (Strava) · Range: ${rangeLabel(days)}`;
        }
        if (posFitnessCardCaptionEl) {
          posFitnessCardCaptionEl.textContent = `Interval: daily (Strava) · Range: ${rangeLabel(days)}`;
        }
      }

      async function loadPosStreakCalendar() {
        if (!posStreakGridEl || !posStreakLabelsEl) return;
        posStreakGridEl.innerHTML = "";
        posStreakLabelsEl.innerHTML = "";
        if (posStreakNoteEl) posStreakNoteEl.textContent = "";

        const today = new Date();
        const first = new Date(today.getFullYear(), today.getMonth(), 1);
        const last = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        const startIso = first.toISOString();
        const endIso = last.toISOString();
        const { data } = await supabase
          .from("pos_events")
          .select("event_timestamp,payload")
          .eq("source", "strava")
          .eq("event_type", "activity")
          .gte("event_timestamp", startIso)
          .lte("event_timestamp", endIso);

        const activeDays = new Set();
        (data || []).forEach((row) => {
          const key = dateKeyFromIso(row.event_timestamp);
          if (key) activeDays.add(key);
        });

        const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];
        dayLabels.forEach((label) => {
          const span = document.createElement("div");
          span.textContent = label;
          posStreakLabelsEl.appendChild(span);
        });

        const offset = (first.getDay() + 6) % 7;
        for (let i = 0; i < offset; i += 1) {
          const cell = document.createElement("div");
          cell.className = "streak-cell";
          cell.style.opacity = "0";
          posStreakGridEl.appendChild(cell);
        }

        let activeCount = 0;
        for (let day = 1; day <= last.getDate(); day += 1) {
          const current = new Date(today.getFullYear(), today.getMonth(), day);
          const key = dateKeyFromIso(current.toISOString());
          const cell = document.createElement("div");
          cell.className = "streak-cell";
          cell.textContent = day;
          if (activeDays.has(key)) {
            cell.classList.add("active");
            activeCount += 1;
          }
          posStreakGridEl.appendChild(cell);
        }

        if (posStreakNoteEl) {
          posStreakNoteEl.textContent = activeCount
            ? `${activeCount} active days in ${today.toLocaleString("en-US", { month: "long" })}`
            : "No activities logged this month.";
        }
      }

      async function loadPosPowerSkills() {
        if (!posPowerSkillsChartEl || !posPowerSkillsNoteEl) return;
        posPowerSkillsChartEl.innerHTML = "";
        posPowerSkillsNoteEl.textContent = "No power profile data yet.";
      }

      async function loadPosSleepTrend() {
        if (!posSleepTrendEl || !posSleepTrendChartEl || !posSleepTrendListEl) return;
        posSleepTrendChartEl.innerHTML = "";
        posSleepTrendListEl.innerHTML = "";
        if (posSleepTrendNoteEl) posSleepTrendNoteEl.textContent = "";

        const dayCount = Math.max(1, Math.min(30, currentRangeDays));
        const start = rangeStartDate(dayCount);
        const startKey = start.toISOString().slice(0, 10);
        const days = [];
        for (let i = 0; i < dayCount; i += 1) {
          const d = new Date(start);
          d.setDate(start.getDate() + i);
          days.push(dateKeyFromIso(d.toISOString()));
        }

        const { data, error } = await supabase
          .from("pos_day_metrics")
          .select("date,sleep_seconds,sleep_baseline_7d")
          .gte("date", startKey)
          .order("date", { ascending: true });

        if (error || !data || !data.length) {
          if (posSleepTrendNoteEl) posSleepTrendNoteEl.textContent = "No sleep trend yet.";
          return;
        }

        const sleepByDay = new Map();
        let baseline = null;
        data.forEach((row) => {
          if (!row.date) return;
          if (row.sleep_seconds != null) {
            sleepByDay.set(row.date, row.sleep_seconds / 3600);
          }
          if (row.sleep_baseline_7d != null) {
            baseline = row.sleep_baseline_7d / 3600;
          }
        });

        const series = days.map((d) => sleepByDay.get(d) || 0);
        const avgSleep = avg(series) ?? 0;
        const sleepStd = stddev(series) ?? 0;
        const target = baseline || 7;
        const totalSleep = series.reduce((acc, val) => acc + val, 0);
        const debt = Math.max(0, target * dayCount - totalSleep);

        posSleepTrendChartEl.innerHTML = renderLineChart({
          labels: days,
          series: [{ label: "Sleep (h)", color: "#38bdf8", values: series }],
          yLabel: "Hours",
        });
        const sleepRangeLabel = rangeLabel(dayCount);
        if (posSleepTrendNoteEl) {
          posSleepTrendNoteEl.textContent = `Interval: daily · Range: ${sleepRangeLabel} · Source: Withings sleep summary.`;
        }
        if (posSleepTrendCaptionEl) {
          posSleepTrendCaptionEl.textContent = `Interval: daily · Range: ${sleepRangeLabel}`;
        }

        posSleepTrendListEl.appendChild(
          renderStatusItem(
            "Average",
            `${formatNumber(avgSleep, 1)} h`,
            "neutral",
            `Target ${formatNumber(target, 1)} h`,
            { importance: 8, group: "sleep_trend", related: "average,target" },
          ),
        );
        posSleepTrendListEl.appendChild(
          renderStatusItem(
            "Consistency",
            `${formatNumber(sleepStd, 1)} h σ`,
            "neutral",
            "Std dev of sleep hours",
            { importance: 6, group: "sleep_trend", related: "variability" },
          ),
        );
        posSleepTrendListEl.appendChild(
          renderStatusItem(
            "Sleep debt",
            `${formatNumber(debt, 1)} h`,
            "neutral",
            `${dayCount}d window`,
            { importance: 7, group: "sleep_trend", related: "debt" },
          ),
        );

        if (posSleepTrendNoteEl) {
          posSleepTrendNoteEl.textContent = `Interval: daily · Range: ${sleepRangeLabel} · Sleep duration & consistency.`;
        }
      }

      async function loadPosStrengthMatrix() {
        if (!posStrengthMatrixEl || !posStrengthMatrixTableEl) return;
        posStrengthMatrixTableEl.innerHTML = "";
        if (posStrengthMatrixNoteEl) posStrengthMatrixNoteEl.textContent = "";

        const [metricsResp, baselineResp] = await Promise.all([
          supabase
            .from("speediance_exercise_session_metrics")
            .select("action_library_group_id,action_library_name,quality_score,completion_ratio,max_watts,watt_asym_pct,speed_asym_pct,amplitude_asym_pct")
            .order("session_date", { ascending: false })
            .limit(200),
          supabase
            .from("speediance_exercise_baselines")
            .select("action_library_group_id,max_watts"),
        ]);

        const metrics = metricsResp.data || [];
        if (!metrics.length) {
          if (posStrengthMatrixNoteEl) posStrengthMatrixNoteEl.textContent = "No strength metrics yet.";
          return;
        }

        const baselineMap = new Map();
        (baselineResp.data || []).forEach((row) => {
          if (row.action_library_group_id) baselineMap.set(row.action_library_group_id, row);
        });

        const byExercise = {};
        metrics.forEach((row) => {
          const key = row.action_library_group_id;
          if (!key) return;
          if (!byExercise[key]) {
            byExercise[key] = {
              name: row.action_library_name || `Exercise ${key}`,
              quality: [],
              asym: [],
              completion: [],
              maxWatts: [],
              baseline: baselineMap.get(key),
            };
          }
          if (row.quality_score != null) byExercise[key].quality.push(row.quality_score);
          if (row.completion_ratio != null) byExercise[key].completion.push(row.completion_ratio);
          if (row.max_watts != null) byExercise[key].maxWatts.push(row.max_watts);
          const asymVals = [row.watt_asym_pct, row.speed_asym_pct, row.amplitude_asym_pct].filter((v) => v != null);
          if (asymVals.length) byExercise[key].asym.push(Math.max(...asymVals));
        });

        const rows = Object.values(byExercise)
          .map((item) => {
            const quality = average(item.quality) ?? 0;
            const asym = item.asym.length ? Math.max(...item.asym) : 0;
            const completion = average(item.completion) ?? 0;
            const maxWatts = item.maxWatts.length ? Math.max(...item.maxWatts) : 0;
            const baselineWatts = item.baseline?.max_watts ?? null;
            const powerPct = baselineWatts ? (maxWatts / baselineWatts) * 100 : null;
            return { name: item.name, quality, asym, completion, powerPct };
          })
          .sort((a, b) => b.quality - a.quality)
          .slice(0, 8);

        const header = document.createElement("div");
        header.className = "matrix-row matrix-header";
        header.innerHTML = `
          <div>Exercise</div>
          <div>Quality</div>
          <div>Asym</div>
          <div>Completion</div>
          <div>Power %</div>
        `;
        posStrengthMatrixTableEl.appendChild(header);

        rows.forEach((row) => {
          const rowEl = document.createElement("div");
          rowEl.className = "matrix-row";
          const qualityPct = Math.min(100, Math.max(0, row.quality));
          const asymPct = Math.min(100, Math.max(0, row.asym));
          const completionPct = Math.min(100, Math.max(0, row.completion * 100));
          const powerPct = row.powerPct != null ? Math.min(140, Math.max(0, row.powerPct)) : 0;

          rowEl.innerHTML = `
            <div class="matrix-name">${row.name}</div>
            <div>
              <div class="matrix-bar"><span style="width:${qualityPct}%;"></span></div>
              <div class="matrix-value">${formatNumber(row.quality, 0)}</div>
            </div>
            <div>
              <div class="matrix-bar"><span style="width:${asymPct}%; background: rgba(248,113,113,0.8);"></span></div>
              <div class="matrix-value">${formatNumber(row.asym, 1)}%</div>
            </div>
            <div>
              <div class="matrix-bar"><span style="width:${completionPct}%; background: rgba(34,197,94,0.8);"></span></div>
              <div class="matrix-value">${formatNumber(completionPct, 0)}%</div>
            </div>
            <div>
              <div class="matrix-bar"><span style="width:${Math.min(powerPct, 100)}%; background: rgba(14,165,233,0.8);"></span></div>
              <div class="matrix-value">${row.powerPct != null ? `${formatNumber(row.powerPct, 0)}%` : "—"}</div>
            </div>
          `;
          posStrengthMatrixTableEl.appendChild(rowEl);
        });

        if (posStrengthMatrixNoteEl) {
          posStrengthMatrixNoteEl.textContent = "Top exercises by quality, with asymmetry and completion context.";
        }
      }

      async function loadPosStrengthScatter() {
        if (!posStrengthScatterChartEl || !posStrengthScatterEl) return;
        posStrengthScatterChartEl.innerHTML = "";
        if (posStrengthScatterNoteEl) posStrengthScatterNoteEl.textContent = "";

        const rangeDays = Math.min(currentRangeDays, 60);
        const start = rangeStartDate(rangeDays);
        const startKey = start.toISOString().slice(0, 10);
        const { data, error } = await supabase
          .from("speediance_exercise_session_metrics")
          .select("action_library_group_id,action_library_name,quality_score,watt_asym_pct,speed_asym_pct,amplitude_asym_pct,session_date")
          .gte("session_date", startKey)
          .order("session_date", { ascending: false })
          .limit(360);

        if (error || !data || !data.length) {
          if (posStrengthScatterNoteEl) posStrengthScatterNoteEl.textContent = "No strength quality data yet.";
          return;
        }

        const byExercise = {};
        data.forEach((row) => {
          const key = row.action_library_group_id;
          if (!byExercise[key]) {
            byExercise[key] = {
              name: row.action_library_name || `Exercise ${row.action_library_group_id}`,
              quality: [],
              asym: [],
            };
          }
          if (row.quality_score != null) byExercise[key].quality.push(row.quality_score);
          const asymVals = [row.watt_asym_pct, row.speed_asym_pct, row.amplitude_asym_pct].filter((v) => v != null);
          if (asymVals.length) byExercise[key].asym.push(Math.max(...asymVals));
        });

        const points = Object.values(byExercise)
          .map((item) => {
            const qualityRaw = average(item.quality);
            const asymRaw = item.asym.length ? Math.max(...item.asym) : null;
            const quality = qualityRaw != null ? Math.min(100, Math.max(0, qualityRaw)) : null;
            const asym = asymRaw != null ? Math.min(100, Math.max(0, asymRaw)) : null;
            return { name: item.name, quality, asym };
          })
          .filter((item) => item.quality != null && item.asym != null)
          .slice(0, 18);

        if (!points.length) {
          if (posStrengthScatterNoteEl) posStrengthScatterNoteEl.textContent = "No usable quality + asymmetry data.";
          return;
        }

        const width = 560;
        const height = 220;
        const padding = { top: 18, right: 16, bottom: 32, left: 44 };
        const plotWidth = width - padding.left - padding.right;
        const plotHeight = height - padding.top - padding.bottom;

        const svgPoints = points.map((point) => {
          const x = padding.left + (point.quality / 100) * plotWidth;
          const y = padding.top + (1 - point.asym / 100) * plotHeight;
          const tone = point.quality >= 70 ? "#22c55e" : point.quality >= 45 ? "#f59e0b" : "#f87171";
          return `
            <circle cx="${x}" cy="${y}" r="4" fill="${tone}">
              <title>${point.name} · Quality ${formatNumber(point.quality, 1)} · Asym ${formatNumber(point.asym, 1)}%</title>
            </circle>
          `;
        }).join("");

        const gridLines = [0, 50, 100].map((val) => {
          const x = padding.left + (val / 100) * plotWidth;
          const y = padding.top + (1 - val / 100) * plotHeight;
          return `
            <line x1="${x}" y1="${padding.top}" x2="${x}" y2="${height - padding.bottom}" stroke="rgba(148,163,184,0.15)" stroke-width="1" />
            <line x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" stroke="rgba(148,163,184,0.15)" stroke-width="1" />
            <text x="${x}" y="${height - 10}" text-anchor="middle" font-size="10" fill="#94a3b8">${val}</text>
            <text x="${padding.left - 8}" y="${y + 4}" text-anchor="end" font-size="10" fill="#94a3b8">${val}</text>
          `;
        }).join("");

        posStrengthScatterChartEl.innerHTML = `
          <div class="chart-legend">
            <span><span class="legend-swatch" style="background:#22c55e"></span>Quality ≥70</span>
            <span><span class="legend-swatch" style="background:#f59e0b"></span>Quality 45–69</span>
            <span><span class="legend-swatch" style="background:#f87171"></span>Quality &lt;45</span>
          </div>
          <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Quality vs asymmetry scatter">
            ${gridLines}
            ${svgPoints}
            <text x="${padding.left + plotWidth / 2}" y="${height - 4}" text-anchor="middle" font-size="10" fill="#94a3b8">Quality score</text>
            <text x="12" y="${padding.top + plotHeight / 2}" text-anchor="middle" font-size="10" fill="#94a3b8" writing-mode="tb">Asymmetry %</text>
          </svg>
        `;

        if (posStrengthScatterNoteEl) {
          posStrengthScatterNoteEl.textContent = `Avg quality vs max asymmetry · ${points.length} exercises · ${rangeLabel(rangeDays).toLowerCase()}.`;
        }
      }

      async function loadPosSleepPlan() {
        if (!posSleepPlanListEl || !posSleepPlanEl) return;
        posSleepPlanListEl.innerHTML = "";
        if (posSleepPlanNoteEl) posSleepPlanNoteEl.textContent = "";

        const { data, error } = await supabase
          .from("pos_day_metrics")
          .select("date,sleep_seconds,sleep_baseline_7d")
          .order("date", { ascending: false })
          .limit(1);

        if (error || !data || !data.length) {
          if (posSleepPlanNoteEl) posSleepPlanNoteEl.textContent = "No sleep data yet.";
          return;
        }

        const latest = data[0];
        const sleepHours = latest.sleep_seconds ? latest.sleep_seconds / 3600 : null;
        const baselineHours = latest.sleep_baseline_7d ? latest.sleep_baseline_7d / 3600 : null;
        const target = baselineHours || 7;
        const delta = sleepHours != null ? target - sleepHours : null;

        posSleepPlanListEl.appendChild(renderPlanList("Last night", sleepHours != null ? `${formatNumber(sleepHours, 1)} h` : "No sleep logged", { importance: 8, group: "sleep_plan", related: "last_night" }));
        posSleepPlanListEl.appendChild(renderPlanList("Target tonight", `${formatNumber(target, 1)} h`, { importance: 9, group: "sleep_plan", related: "target" }));

        if (delta != null && delta > 0.5) {
          posSleepPlanListEl.appendChild(renderPlanList("Make up sleep", `Aim for +${formatNumber(delta, 1)} h`, { importance: 7, group: "sleep_plan", related: "recovery" }));
          posSleepPlanListEl.appendChild(renderPlanList("Wind down", "No caffeine after 2pm · screens off 30 min before bed", { importance: 6, group: "sleep_plan", related: "behavior" }));
          posSleepPlanListEl.appendChild(renderPlanList("Environment", "Cool room, low light, same bedtime/wake time", { importance: 6, group: "sleep_plan", related: "environment" }));
        } else if (sleepHours != null) {
          posSleepPlanListEl.appendChild(renderPlanList("Consistency", "Keep bedtime steady and protect 30 min wind-down", { importance: 6, group: "sleep_plan", related: "consistency" }));
        } else {
          posSleepPlanListEl.appendChild(renderPlanList("Next step", "Log sleep to unlock recovery guidance.", { importance: 5, group: "sleep_plan", related: "logging" }));
        }

        if (posSleepPlanNoteEl) {
          const noteParts = [];
          if (sleepHours != null) noteParts.push(`${formatNumber(sleepHours, 1)} h last night`);
          if (baselineHours != null) noteParts.push(`baseline ${formatNumber(baselineHours, 1)} h`);
          posSleepPlanNoteEl.textContent = noteParts.length ? noteParts.join(" · ") : "Sleep plan ready";
        }
      }

      async function loadPosDayDrawer(dateKey) {
        if (!posDayDrawerEl || !posDayDrawerListEl) return;
        posDayDrawerListEl.innerHTML = "";
        posDayDrawerEl.classList.remove("hidden");
        if (posDayDrawerDateEl) posDayDrawerDateEl.textContent = dateKey;

        const { startIso, endIso } = dayBounds(dateKey);

        const [metricsResp, stravaResp, nutritionResp, strengthResp] = await Promise.all([
          supabase
            .from("pos_day_metrics")
            .select("sleep_seconds,training_load_today")
            .eq("date", dateKey)
            .maybeSingle(),
          supabase
            .from("pos_events")
            .select("event_timestamp,payload")
            .eq("source", "strava")
            .eq("event_type", "activity")
            .gte("event_timestamp", startIso)
            .lte("event_timestamp", endIso),
          supabase
            .from("pos_events")
            .select("event_timestamp,payload")
            .eq("source", "nutrition")
            .gte("event_timestamp", startIso)
            .lte("event_timestamp", endIso),
          supabase
            .from("speediance_training_session_scores")
            .select("session_date,quality_score,training_id")
            .eq("session_date", dateKey),
        ]);

        const metrics = metricsResp.data ?? {};
        if (metrics.sleep_seconds != null) {
          posDayDrawerListEl.appendChild(
            renderStatList(
              "Sleep",
              `${formatNumber(metrics.sleep_seconds / 3600, 1)} h`,
              `Load ${formatNumber(metrics.training_load_today ?? 0, 0)}`,
              { importance: 8, group: "day_detail", related: "sleep,load" },
            ),
          );
        } else {
          posDayDrawerListEl.appendChild(
            renderStatusItem("Sleep", "Missing", "warn", "No sleep data", { importance: 6, group: "day_detail", related: "sleep" }),
          );
        }

        let stravaMinutes = 0;
        let stravaDistance = 0;
        let cyclingMinutes = 0;
        let cyclingDistance = 0;
        let runningMinutes = 0;
        let runningDistance = 0;
        let swimmingMinutes = 0;
        let swimmingDistance = 0;
        (stravaResp.data || []).forEach((row) => {
          const payload = row.payload || {};
          const duration = Number(payload.elapsed_s ?? payload.elapsed_time ?? payload.duration_s ?? 0);
          const distance = Number(payload.distance_m ?? payload.distance ?? 0);
          if (!Number.isNaN(duration)) stravaMinutes += duration / 60;
          if (!Number.isNaN(distance)) stravaDistance += distance;
          const typeLower = String(typeLabel || "").toLowerCase();
          if (typeLower.includes("swim")) {
            if (!Number.isNaN(duration)) swimmingMinutes += duration / 60;
            if (!Number.isNaN(distance)) swimmingDistance += distance;
          } else if (typeLower.includes("run")) {
            if (!Number.isNaN(duration)) runningMinutes += duration / 60;
            if (!Number.isNaN(distance)) runningDistance += distance;
          } else if (typeLower.includes("ride") || typeLower.includes("bike") || typeLower.includes("cycle")) {
            if (!Number.isNaN(duration)) cyclingMinutes += duration / 60;
            if (!Number.isNaN(distance)) cyclingDistance += distance;
          }
        });
        if (stravaMinutes > 0) {
          posDayDrawerListEl.appendChild(
            renderStatList(
              "Endurance",
              `${formatNumber(stravaMinutes, 0)} min`,
              `${formatNumber(formatMiles(stravaDistance) ?? 0, 1)} mi`,
              { importance: 7, group: "day_detail", related: "endurance" },
            ),
          );
        } else {
          posDayDrawerListEl.appendChild(
            renderStatusItem("Endurance", "None", "warn", "No Strava activities", { importance: 5, group: "day_detail", related: "endurance" }),
          );
        }

        const strengthCount = strengthResp.data?.length ?? 0;
        if (strengthCount) {
          const avgQuality = average((strengthResp.data || []).map((row) => row.quality_score).filter((v) => v != null));
          const meta = avgQuality != null ? `Avg quality ${formatScore(avgQuality)}` : "Quality —";
          posDayDrawerListEl.appendChild(
            renderStatList(
              "Strength",
              `${strengthCount} session${strengthCount === 1 ? "" : "s"}`,
              meta,
              { importance: 7, group: "day_detail", related: "strength" },
            ),
          );
        } else {
          posDayDrawerListEl.appendChild(
            renderStatusItem("Strength", "None", "warn", "No Speediance sessions", { importance: 5, group: "day_detail", related: "strength" }),
          );
        }

        let calories = 0;
        let protein = 0;
        let carbs = 0;
        let fat = 0;
        (nutritionResp.data || []).forEach((row) => {
          const payload = row.payload || {};
          calories += Number(payload.calories ?? payload.kcal ?? payload.energy_kcal ?? 0) || 0;
          protein += Number(payload.protein_g ?? payload.protein ?? 0) || 0;
          carbs += Number(payload.carbs_g ?? payload.carbs ?? 0) || 0;
          fat += Number(payload.fat_g ?? payload.fat ?? 0) || 0;
        });
        if (nutritionResp.data?.length) {
          posDayDrawerListEl.appendChild(
            renderStatList(
              "Nutrition",
              `${formatNumber(calories, 0)} kcal`,
              `P ${formatNumber(protein, 0)}g · C ${formatNumber(carbs, 0)}g · F ${formatNumber(fat, 0)}g`,
              { importance: 7, group: "day_detail", related: "nutrition" },
            ),
          );
        } else {
          posDayDrawerListEl.appendChild(
            renderStatusItem("Nutrition", "Missing", "warn", "No nutrition logs", { importance: 6, group: "day_detail", related: "nutrition" }),
          );
        }
      }

      async function loadData() {
        renderRangeTabs();
        renderPosNav();
        setPosSubview(currentPosView);
        await loadPosViewData(currentPosView);
      }

      function localDateKey() {
        const parts = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).formatToParts(new Date());
        const lookup = {};
        parts.forEach((part) => {
          if (part.type !== "literal") lookup[part.type] = part.value;
        });
        return `${lookup.year}-${lookup.month}-${lookup.day}`;
      }

      function dateKeyFromIso(value) {
        if (!value) return null;
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return null;
        const parts = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).formatToParts(date);
        const lookup = {};
        parts.forEach((part) => {
          if (part.type !== "literal") lookup[part.type] = part.value;
        });
        return `${lookup.year}-${lookup.month}-${lookup.day}`;
      }

      function rangeStartDate(days) {
        const start = new Date();
        start.setHours(0, 0, 0, 0);
        start.setDate(start.getDate() - Math.max(0, days - 1));
        return start;
      }

      function rangeLabel(days) {
        if (days === 1) return "Today";
        return `Last ${days} days`;
      }

      function renderRangeTabs() {
        if (!posRangeEl) return;
        posRangeEl.innerHTML = "";
        RANGE_OPTIONS.forEach((option) => {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.textContent = option.label;
          if (currentRangeDays === option.days) btn.classList.add("active");
          btn.addEventListener("click", async () => {
            currentRangeDays = option.days;
            renderRangeTabs();
            await loadPosViewData(currentPosView);
          });
          posRangeEl.appendChild(btn);
        });
      }

      function renderPosNav() {
        if (!posNavEl) return;
        posNavEl.innerHTML = "";
        posNavEl.classList.add("hidden");
        const labelEl = posNavEl.previousElementSibling;
        if (labelEl && labelEl.classList.contains("meta")) {
          labelEl.classList.add("hidden");
        }
      }

      function setPosSubview(viewId) {
        if (!posDashboardEl) return;
        const nodes = posDashboardEl.querySelectorAll("[data-pos-view]");
        nodes.forEach((node) => {
          if (node.classList.contains("pos-day-drawer")) return;
          node.classList.remove("hidden");
        });
      }

      if (posDashboardEl) {
        const legacyNodes = posDashboardEl.querySelectorAll(".pos-hero, .pos-domains, .pos-body");
        legacyNodes.forEach((node) => node.classList.remove("hidden"));
      }

      async function loadPosViewData(viewId) {
        const tasks = [
          loadPosPlan(),
          loadPosSummary(),
          loadPosSleepQuality(),
          loadPosSleepScoreGrid(),
          loadPosSleepHeartRate(),
          loadPosRecovery(),
          loadPosSleepTrend(),
          loadPosSleepPlan(),
          loadPosNutrition(),
          loadPosTrainingWeek(),
          loadPosFitnessCard(),
          loadPosStreakCalendar(),
          loadPosPowerSkills(),
          loadPosHeatmap(),
          loadPosStravaFitness(),
          loadPosLoadCapacity(),
          loadPosWeeklyLoad(),
          loadPosRelations(),
          loadPosTrends(),
          loadPosDataHealth(),
          loadPosAppleHealth(),
          loadPosStats(),
          loadPosBaselines(),
          loadPosQuality(),
          loadPosLastSession(),
          loadPosStrengthScatter(),
          loadPosStrengthMatrix(),
          loadPosQualityTrends(),
          loadPosWeakness(),
          loadPosFacial(),
          loadPosRaceReadiness(),
        ];
        if (posReportUpdatedEl) tasks.push(loadPosReport());
        await Promise.all(tasks);
      }

      function attachMeta(el, meta) {
        if (!el || !meta) return;
        if (meta.importance !== undefined) {
          el.dataset.importance = String(meta.importance);
        }
        if (meta.group) el.dataset.group = meta.group;
        if (meta.related) el.dataset.related = meta.related;
      }

      function renderPlanList(title, value, metricMeta = null) {
        const item = document.createElement("div");
        item.className = "list-item";
        const displayValue = value === "—" || value === "" || value == null ? "No data" : value;
        item.innerHTML = `<div class="list-title">${title}</div><div class="list-meta">${displayValue}</div>`;
        attachMeta(item, metricMeta);
        return item;
      }

      function renderStatList(title, value, meta, metricMeta = null) {
        const item = document.createElement("div");
        item.className = "list-item";
        const displayValue = value === "—" || value === "" || value == null ? "No data" : value;
        item.innerHTML = `
          <div class="list-title">${title}</div>
          <div class="list-meta">${displayValue}</div>
          ${meta ? `<div class="list-row">${meta}</div>` : ""}
        `;
        attachMeta(item, metricMeta);
        return item;
      }

      function renderSleepMetricCard({ label, value, meta = "", tone = "" , metricMeta = null }) {
        const card = document.createElement("div");
        card.className = "sleep-metric-card";
        card.innerHTML = `
          <div class="list-title">${label}</div>
          <strong>${value}</strong>
          <div class="meta">${meta || ""}</div>
        `;
        if (tone) card.dataset.tone = tone;
        attachMeta(card, metricMeta);
        return card;
      }

      function renderKpiCard({ label, value, tone = "good", icon = "•", sub = "", progress = null, meta = null }) {
        const card = document.createElement("div");
        card.className = "kpi-card";
        const goalKey = meta?.goalKey || goalKeyForTitle(label);
        const goalLine = goalKey ? formatGoalLine(goalKey) : "";
        card.innerHTML = `
          <div class="row-inline">
            <div class="kpi-title">${label}</div>
            <div class="kpi-icon">${icon}</div>
          </div>
          <div class="kpi-value">${value}</div>
          <div class="kpi-sub">${sub}</div>
          ${goalLine ? `<div class="kpi-goal">${goalLine}</div>` : ""}
        `;
        attachMeta(card, meta);
        if (progress !== null && progress !== undefined && !Number.isNaN(progress)) {
          const bar = document.createElement("div");
          bar.className = "bar";
          const fill = document.createElement("div");
          fill.className = `bar-fill ${tone}`;
          fill.style.width = `${Math.max(5, Math.min(progress, 100))}%`;
          bar.appendChild(fill);
          card.appendChild(bar);
        }
        return card;
      }

      function renderStatusItem(title, status, tone = "good", meta = "", metricMeta = null) {
        const item = document.createElement("div");
        item.className = "list-item";
        const metaLines = [];
        if (meta) metaLines.push(meta);
        const goalKey = metricMeta?.goalKey || goalKeyForTitle(title);
        if (goalKey) {
          const goalLine = formatGoalLine(goalKey);
          if (goalLine) metaLines.push(goalLine);
          item.dataset.goalKey = goalKey;
        }
        const metaHtml = metaLines.length
          ? metaLines.map((line) => `<div class="list-meta">${line}</div>`).join("")
          : "";
        item.innerHTML = `<div class="list-title">${title}</div>${metaHtml}`;
        const chip = document.createElement("div");
        chip.className = `status-chip ${tone}`;
        chip.textContent = status;
        item.appendChild(chip);
        attachMeta(item, metricMeta);
        return item;
      }

      function renderBarItem(title, status, tone = "good", percent = 60, meta = "", metricMeta = null) {
        const item = document.createElement("div");
        item.className = "list-item";
        const metaHtml = meta ? `<div class="list-meta">${meta}</div>` : "";
        item.innerHTML = `<div class="list-title">${title}</div>${metaHtml}`;
        const chip = document.createElement("div");
        chip.className = `status-chip ${tone}`;
        chip.textContent = status;
        item.appendChild(chip);
        attachMeta(item, metricMeta);
        const bar = document.createElement("div");
        bar.className = "bar";
        const fill = document.createElement("div");
        fill.className = `bar-fill ${tone}`;
        fill.style.width = `${Math.max(5, Math.min(percent, 100))}%`;
        bar.appendChild(fill);
        item.appendChild(bar);
        return item;
      }

      function renderGoalBar({ label, actual, target, unit, meta = null }) {
        const hasTarget = target !== null && target !== undefined && !Number.isNaN(target) && Number(target) > 0;
        const ratio = hasTarget ? actual / target : null;
        const percent = hasTarget ? Math.round(ratio * 100) : null;
        const status = hasTarget && Number.isFinite(percent) ? `${percent}% of goal` : "Goal not set";
        const tone = hasTarget
          ? ratio >= 0.9 && ratio <= 1.1
            ? "good"
            : ratio >= 0.6
              ? "warn"
              : "bad"
          : "neutral";
        const metaText = hasTarget
          ? `${formatNumber(actual, 1)} ${unit} / ${formatNumber(target, 0)} ${unit} (${percent}%)`
          : `${formatNumber(actual, 1)} ${unit} · set goal`;

        const item = document.createElement("div");
        item.className = "list-item";
        item.innerHTML = `<div class="list-title">${label}</div><div class="list-meta">${metaText}</div>`;
        const chip = document.createElement("div");
        chip.className = `status-chip ${tone}`;
        chip.textContent = status;
        item.appendChild(chip);

        if (hasTarget) {
          const bar = document.createElement("div");
          bar.className = "bar goal-bar";
          const fill = document.createElement("div");
          fill.className = `bar-fill ${tone}`;
          fill.style.width = `${Math.max(3, Math.min(percent, 100))}%`;
          bar.appendChild(fill);

          const tickLow = document.createElement("div");
          tickLow.className = "bar-tick";
          tickLow.style.left = "60%";
          const tickTarget = document.createElement("div");
          tickTarget.className = "bar-tick";
          tickTarget.style.left = "90%";
          bar.appendChild(tickLow);
          bar.appendChild(tickTarget);
          item.appendChild(bar);
        }
        attachMeta(item, meta);
        return item;
      }

      function renderBullet({ label, actual, target, unit, coverage = "", meta = null }) {
        const safeTarget = Number(target ?? 0);
        const safeActual = Number(actual ?? 0);
        const ratio = safeTarget > 0 ? safeActual / safeTarget : 0;
        const percent = Math.round(ratio * 100);
        const status = Number.isFinite(percent) ? `${percent}% of target` : "Target missing";
        const tone = ratio >= 0.9 && ratio <= 1.1 ? "good" : ratio >= 0.6 ? "warn" : "bad";
        const decimals = unit === "kcal" ? 0 : 1;
        const metaText = `Avg logged day ${formatNumber(safeActual, decimals)} ${unit} · Target ${formatNumber(safeTarget, 0)} ${unit} (${Number.isFinite(percent) ? percent : 0}%)`;
        const coverageText = coverage ? ` · ${coverage}` : "";

        const item = document.createElement("div");
        item.className = "list-item";
        item.innerHTML = `<div class="list-title">${label}</div><div class="list-meta">${metaText}${coverageText}</div>`;
        const chip = document.createElement("div");
        chip.className = `status-chip ${tone}`;
        chip.textContent = status;
        item.appendChild(chip);

        const scaleMax = safeTarget > 0 ? safeTarget * 1.2 : safeActual || 1;
        const fillPct = scaleMax > 0 ? Math.min(100, (safeActual / scaleMax) * 100) : 0;
        const targetPct = scaleMax > 0 ? Math.min(100, (safeTarget / scaleMax) * 100) : 0;

        const bullet = document.createElement("div");
        bullet.className = "bullet";
        bullet.title = `${formatNumber(safeActual, decimals)} ${unit} of ${formatNumber(safeTarget, 0)} ${unit} (${percent}%)`;
        const fill = document.createElement("div");
        fill.className = "bullet-fill";
        fill.style.width = `${Math.max(2, fillPct)}%`;
        const targetLine = document.createElement("div");
        targetLine.className = "bullet-target";
        targetLine.style.left = `${targetPct}%`;
        bullet.appendChild(fill);
        bullet.appendChild(targetLine);
        item.appendChild(bullet);

        const scale = document.createElement("div");
        scale.className = "bullet-scale";
        scale.innerHTML = `
          <span>0</span>
          <span>Target ${formatNumber(safeTarget, 0)} ${unit}</span>
          <span>Scale max (120% target) ${formatNumber(scaleMax, 0)} ${unit}</span>
        `;
        item.appendChild(scale);
        attachMeta(item, meta);
        return item;
      }

      function renderGauge({ label, value, percent, icon }) {
        const safePercent = Math.max(0, Math.min(100, percent ?? 0));
        const radius = 42;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (safePercent / 100) * circumference;
        const tone = safePercent >= 90 ? "good" : safePercent >= 60 ? "warn" : "bad";
        const svg = `
          <svg class="gauge-svg" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="${radius}" stroke="rgba(148,163,184,0.2)" stroke-width="10" fill="none" />
            <circle cx="60" cy="60" r="${radius}" stroke="currentColor" stroke-width="10" fill="none"
              stroke-dasharray="${circumference.toFixed(1)}"
              stroke-dashoffset="${offset.toFixed(1)}"
              stroke-linecap="round"
              transform="rotate(-90 60 60)" />
            <text x="60" y="64" text-anchor="middle" font-size="16" fill="#e2e8f0">${safePercent}%</text>
          </svg>
        `;
        const card = document.createElement("div");
        card.className = "gauge-card";
        card.innerHTML = `
          <div class="gauge-title">${icon ? `${icon} ` : ""}${label}</div>
          <div style="color: var(--${tone === "good" ? "success" : tone === "warn" ? "warn" : "danger"});">${svg}</div>
          <div class="gauge-value">${value}</div>
        `;
        return card;
      }

      function renderStars(score) {
        const stars = document.createElement("div");
        stars.className = "stars";
        const max = 5;
        const count = Math.round(Math.max(0, Math.min(score, max)));
        for (let i = 0; i < max; i += 1) {
          const span = document.createElement("span");
          span.textContent = "★";
          if (i >= count) span.className = "star-off";
          stars.appendChild(span);
        }
        return stars;
      }

      function renderThresholdBar(percent) {
        const wrap = document.createElement("div");
        wrap.className = "threshold-wrap";
        const bar = document.createElement("div");
        bar.className = "threshold-bar";
        const marker = document.createElement("div");
        marker.className = "threshold-marker";
        marker.style.left = `${Math.max(0, Math.min(percent, 100))}%`;
        bar.appendChild(marker);
        const scale = document.createElement("div");
        scale.className = "bar-scale";
        scale.innerHTML = "<span>0</span><span>50</span><span>100</span>";
        wrap.appendChild(bar);
        wrap.appendChild(scale);
        return wrap;
      }

      function formatScore(score) {
        if (score === null || score === undefined || Number.isNaN(score)) return "—";
        return `${formatNumber(score, 0)}/100`;
      }

      function avg(values) {
        if (!values || !values.length) return null;
        const sum = values.reduce((acc, v) => acc + v, 0);
        return sum / values.length;
      }

      function sum(values) {
        if (!values || !values.length) return 0;
        return values.reduce((acc, v) => acc + v, 0);
      }

      function renderMacroDonut({ proteinPct, carbsPct, fatPct, meta = null }) {
        const donut = document.createElement("div");
        donut.className = "donut-card";
        const p = Math.round(proteinPct);
        const c = Math.round(carbsPct);
        const f = Math.round(fatPct);
        const startC = p;
        const startF = p + c;
        donut.innerHTML = `
          <div class="list-title">Macro distribution</div>
          <div class="donut-chart" style="background: conic-gradient(#38bdf8 0% ${p}%, #22c55e ${startC}% ${startF}%, #f59e0b ${startF}% 100%);">
            <div class="donut-hole">${p}% P</div>
          </div>
          <div class="legend">
            <div class="legend-item"><span class="legend-swatch swatch-protein"></span>Protein ${p}%</div>
            <div class="legend-item"><span class="legend-swatch swatch-carbs"></span>Carbs ${c}%</div>
            <div class="legend-item"><span class="legend-swatch swatch-fat"></span>Fat ${f}%</div>
          </div>
        `;
        attachMeta(donut, meta);
        return donut;
      }

      function renderLineChart({ labels, series, yLabel }) {
        if (!series || !series.length || !labels || !labels.length) return "";
        const width = 560;
        const height = 220;
        const padding = { top: 16, right: 16, bottom: 32, left: 44 };
        const plotWidth = width - padding.left - padding.right;
        const plotHeight = height - padding.top - padding.bottom;
        const values = series.flatMap((s) => s.values.filter((v) => v != null));
        const minVal = Math.min(...values);
        const maxVal = Math.max(...values);
        const span = maxVal - minVal || 1;
        const xStep = labels.length > 1 ? plotWidth / (labels.length - 1) : plotWidth;

        const yAt = (val) => padding.top + (1 - (val - minVal) / span) * plotHeight;
        const xAt = (idx) => padding.left + idx * xStep;

        const gridLines = [0, 0.5, 1].map((p) => {
          const y = padding.top + (1 - p) * plotHeight;
          const val = minVal + p * span;
          return `
            <line x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" stroke="rgba(148,163,184,0.2)" stroke-width="1" />
            <text x="${padding.left - 8}" y="${y + 4}" text-anchor="end" font-size="10" fill="#94a3b8">${formatNumber(val, 1)}</text>
          `;
        }).join("");

        const paths = series.map((s) => {
          const points = s.values.map((val, idx) => `${xAt(idx)},${yAt(val ?? minVal)}`).join(" ");
          return `<polyline fill="none" stroke="${s.color}" stroke-width="2" points="${points}" />`;
        }).join("");

        const startLabel = labels[0] ?? "";
        const endLabel = labels[labels.length - 1] ?? "";
        const legend = series.map((s) => {
          const last = s.values[s.values.length - 1];
          return `<span><span class="legend-swatch" style="background:${s.color}"></span>${s.label} ${formatNumber(last, 1)}</span>`;
        }).join("");

        return `
          <div class="chart-legend">${legend}</div>
          <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Trend chart">
            ${gridLines}
            ${paths}
            <text x="${padding.left}" y="${height - 10}" font-size="10" fill="#94a3b8">${startLabel}</text>
            <text x="${width - padding.right}" y="${height - 10}" text-anchor="end" font-size="10" fill="#94a3b8">${endLabel}</text>
            ${yLabel ? `<text x="12" y="${padding.top}" font-size="10" fill="#94a3b8" writing-mode="tb">${yLabel}</text>` : ""}
          </svg>
        `;
      }

      function renderWeeklyBars({ labels, values, avgLabel = "Avg" }) {
        if (!labels || !labels.length) return "";
        const width = 560;
        const height = 200;
        const padding = { top: 16, right: 16, bottom: 32, left: 44 };
        const plotWidth = width - padding.left - padding.right;
        const plotHeight = height - padding.top - padding.bottom;
        const maxVal = Math.max(...values, 1);
        const barWidth = plotWidth / labels.length * 0.6;
        const gap = plotWidth / labels.length * 0.4;
        const avg = average(values) ?? 0;
        const avgY = padding.top + (1 - avg / maxVal) * plotHeight;

        const bars = values.map((value, idx) => {
          const x = padding.left + idx * (barWidth + gap) + gap * 0.5;
          const barHeight = (value / maxVal) * plotHeight;
          const y = padding.top + (plotHeight - barHeight);
          return `
            <rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${barHeight.toFixed(1)}" rx="6" fill="rgba(56,189,248,0.65)">
              <title>${labels[idx]} · ${formatNumber(value, 0)}</title>
            </rect>
            <text x="${x + barWidth / 2}" y="${height - 10}" text-anchor="middle" font-size="10" fill="#94a3b8">${labels[idx]}</text>
          `;
        }).join("");

        return `
          <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Weekly load bars">
            <line x1="${padding.left}" y1="${avgY}" x2="${width - padding.right}" y2="${avgY}" stroke="rgba(34,197,94,0.6)" stroke-width="1.5" stroke-dasharray="4 4" />
            <text x="${width - padding.right}" y="${avgY - 6}" text-anchor="end" font-size="10" fill="#86efac">${avgLabel} ${formatNumber(avg, 0)}</text>
            ${bars}
          </svg>
        `;
      }

      function bandFromScore(score) {
        if (score === null || score === undefined || Number.isNaN(score)) {
          return { tone: "warn", percent: 40 };
        }
        if (score >= 70) return { tone: "good", percent: 85 };
        if (score >= 50) return { tone: "warn", percent: 60 };
        return { tone: "bad", percent: 25 };
      }

      function frequencyBand(count) {
        if (count >= 2) return { label: "≥2 sessions", tone: "good", percent: 90 };
        if (count === 1) return { label: "1 session", tone: "warn", percent: 55 };
        return { label: "0 sessions", tone: "bad", percent: 15 };
      }

      function durationBand(minutes) {
        if (!minutes) return { label: "0 min", tone: "bad", percent: 10 };
        if (minutes <= 20) return { label: "≤20 min", tone: "warn", percent: 40 };
        if (minutes <= 45) return { label: "21–45 min", tone: "good", percent: 65 };
        if (minutes <= 75) return { label: "46–75 min", tone: "good", percent: 85 };
        return { label: "≥76 min", tone: "good", percent: 95 };
      }

      function loadBand(value) {
        if (!value || Number.isNaN(value)) return { label: "Missing", tone: "bad", percent: 10 };
        if (value < 5000) return { label: "<5000 load", tone: "warn", percent: 40 };
        if (value < 15000) return { label: "5000–14999 load", tone: "good", percent: 70 };
        return { label: "≥15000 load", tone: "good", percent: 90 };
      }

      function qualityBand(value) {
        if (value === null || value === undefined || Number.isNaN(value)) {
          return { label: "—", tone: "warn" };
        }
        const label = `${formatNumber(value, 0)}`;
        if (value >= 70) return { label, tone: "good" };
        if (value >= 45) return { label, tone: "warn" };
        return { label, tone: "bad" };
      }

      function formBand(value) {
        if (value === null || value === undefined || Number.isNaN(value)) {
          return { label: "—", tone: "warn" };
        }
        const label = `${value >= 0 ? "+" : ""}${formatNumber(value, 0)}`;
        if (value >= 8) return { label, tone: "good" };
        if (value >= -4) return { label, tone: "warn" };
        return { label, tone: "bad" };
      }

      function renderSparkline(values, color = "rgba(56,189,248,0.9)") {
        if (!values || values.length < 2) return "";
        const width = 120;
        const height = 36;
        const min = Math.min(...values);
        const max = Math.max(...values);
        const range = max - min || 1;
        const step = width / (values.length - 1);
        const points = values
          .map((v, i) => {
            const x = i * step;
            const y = height - ((v - min) / range) * height;
            return `${x.toFixed(1)},${y.toFixed(1)}`;
          })
          .join(" ");
        return `
          <svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" aria-hidden="true">
            <polyline fill="none" stroke="${color}" stroke-width="2" points="${points}" />
          </svg>
        `;
      }

      function clamp01(value) {
        if (value === null || value === undefined || Number.isNaN(value)) return 0;
        return Math.min(1, Math.max(0, value));
      }

      function average(values) {
        if (!values || !values.length) return null;
        const sum = values.reduce((acc, value) => acc + value, 0);
        return sum / values.length;
      }

      function stddev(values) {
        if (!values || values.length < 2) return null;
        const mean = average(values);
        if (mean == null) return null;
        const variance = values.reduce((acc, val) => acc + (val - mean) ** 2, 0) / values.length;
        return Math.sqrt(variance);
      }

      function trendDelta(values) {
        if (!values || values.length < 4) return null;
        const mid = Math.floor(values.length / 2);
        const recent = values.slice(mid);
        const prior = values.slice(0, mid);
        const recentAvg = average(recent);
        const priorAvg = average(prior);
        if (recentAvg == null || priorAvg == null) return null;
        return recentAvg - priorAvg;
      }

      function startOfWeekSunday(date) {
        const start = new Date(date);
        const day = start.getDay();
        start.setHours(0, 0, 0, 0);
        start.setDate(start.getDate() - day);
        return start;
      }

      function daysSinceSunday(date) {
        const day = date.getDay();
        return Math.max(1, day);
      }

      function dayBounds(dateKey) {
        const start = new Date(`${dateKey}T00:00:00`);
        const end = new Date(`${dateKey}T23:59:59.999`);
        return { startIso: start.toISOString(), endIso: end.toISOString() };
      }

      function formatNumber(value, decimals = 0) {
        if (value === null || value === undefined || Number.isNaN(value)) return "—";
        return Number(value).toFixed(decimals);
      }

      function normalizeExerciseName(value) {
        if (!value) return "";
        return String(value).toLowerCase().replace(/\s+/g, " ").trim();
      }

      function formatMiles(meters) {
        if (meters === null || meters === undefined || Number.isNaN(meters)) return null;
        return meters / 1609.34;
      }

      function formatYards(meters) {
        if (meters === null || meters === undefined || Number.isNaN(meters)) return null;
        return meters * 1.09361;
      }

      async function loadPosStats() {
        if (!posStatsListEl) return;
        posStatsListEl.innerHTML = "";
        if (posStatsNoteEl) posStatsNoteEl.textContent = "";

        const now = new Date();
        const rangeStart = rangeStartDate(currentRangeDays);
        const daysElapsed = Math.max(1, currentRangeDays);
        const weekStartIso = rangeStart.toISOString();
        if (posStatsRangeEl) {
          posStatsRangeEl.textContent = `${rangeLabel(currentRangeDays)} (${daysElapsed} day${daysElapsed === 1 ? "" : "s"})`;
        }

        const [stravaResp, healthResp, cronoTotals] = await Promise.all([
          supabase
            .from("pos_events")
            .select("event_timestamp,payload")
            .eq("source", "strava")
            .eq("event_type", "activity")
            .gte("event_timestamp", weekStartIso),
          supabase
            .from("pos_events")
            .select("event_timestamp,payload")
            .eq("source", "apple_health")
            .eq("event_type", "health_metric")
            .gte("event_timestamp", weekStartIso),
          fetchCronometerTotals(weekStartIso.slice(0, 10)),
        ]);

        let rideMeters = 0;
        let swimMeters = 0;
        let exerciseSeconds = 0;
        if (stravaResp.data) {
          stravaResp.data.forEach((row) => {
            const payload = row.payload || {};
            const distance = Number(payload.distance_m ?? payload.distance ?? 0);
            const duration = Number(payload.elapsed_s ?? payload.elapsed_time ?? payload.duration_s ?? 0);
            const typeRaw = payload.type ?? payload.activity_type ?? payload.sport_type ?? payload.workout_type ?? "";
            const type = String(typeRaw).toLowerCase();
            if (!Number.isNaN(distance) && distance > 0) {
              if (type.includes("swim")) {
                swimMeters += distance;
              } else if (type.includes("ride") || type.includes("cycle") || type.includes("bike")) {
                rideMeters += distance;
              }
            }
            if (!Number.isNaN(duration) && duration > 0) {
              exerciseSeconds += duration;
            }
          });
        }

        let steps = 0;
        let activeCalories = 0;
        let restingCalories = 0;
        let exerciseMinutes = 0;
        if (healthResp.data) {
          healthResp.data.forEach((row) => {
            const payload = row.payload || {};
            const metricRaw = payload.metric ?? payload.value1 ?? "";
            const metric = String(metricRaw).toLowerCase();
            const value = Number(payload.value ?? payload.value2 ?? payload.amount ?? 0);
            if (Number.isNaN(value)) return;
            if (["steps", "step_count", "stepcount"].includes(metric)) {
              steps += value;
            } else if (["active_calories", "active_energy", "active_energy_burned", "active_calorie"].includes(metric)) {
              activeCalories += value;
            } else if (["resting_calories", "basal_energy", "basal_calories", "resting_energy", "bmr"].includes(metric)) {
              restingCalories += value;
            } else if (["exercise_minutes", "exercise_time", "apple_exercise_time"].includes(metric)) {
              exerciseMinutes += value;
            }
          });
        }

        const milesTotal = formatMiles(rideMeters);
        const yardsTotal = formatYards(swimMeters);
        const hoursTotal = exerciseMinutes > 0 ? exerciseMinutes / 60 : exerciseSeconds / 3600;
        let caloriesEaten = 0;
        let proteinG = 0;
        let carbsG = 0;
        let fatG = 0;
        let activeCaloriesCrono = 0;
        let restingCaloriesCrono = 0;
        if (cronoTotals && cronoTotals.size) {
          cronoTotals.forEach((totals) => {
            if (totals.calories_kcal != null) caloriesEaten += totals.calories_kcal;
            if (totals.protein_g != null) proteinG += totals.protein_g;
            if (totals.carbs_g != null) carbsG += totals.carbs_g;
            if (totals.fat_g != null) fatG += totals.fat_g;
            if (totals.active_energy_kcal != null) activeCaloriesCrono += totals.active_energy_kcal;
            if (totals.resting_energy_kcal != null) restingCaloriesCrono += totals.resting_energy_kcal;
          });
        }
        if (activeCaloriesCrono > 0) activeCalories = activeCaloriesCrono;
        if (restingCaloriesCrono > 0) restingCalories = restingCaloriesCrono;
        if (caloriesEaten <= 0) caloriesEaten = null;
        if (proteinG <= 0) proteinG = null;
        if (carbsG <= 0) carbsG = null;
        if (fatG <= 0) fatG = null;

        const stats = [
          {
            label: "Miles ridden",
            total: milesTotal,
            unit: "mi",
          },
          {
            label: "Yards swam",
            total: yardsTotal,
            unit: "yd",
          },
          {
            label: "Steps",
            total: steps,
            unit: "steps",
          },
          {
            label: "Resting calories",
            total: restingCalories,
            unit: "kcal",
          },
          {
            label: "Active calories",
            total: activeCalories,
            unit: "kcal",
          },
          {
            label: "Exercise hours",
            total: hoursTotal,
            unit: "hrs",
          },
          {
            label: "Calories eaten",
            total: caloriesEaten,
            unit: "kcal",
          },
          {
            label: "Protein",
            total: proteinG,
            unit: "g",
          },
          {
            label: "Carbs",
            total: carbsG,
            unit: "g",
          },
          {
            label: "Fat",
            total: fatG,
            unit: "g",
          },
        ];

        const statMeta = {
          "Miles ridden": { importance: 5, group: "endurance", related: "cycling" },
          "Yards swam": { importance: 5, group: "endurance", related: "swim" },
          Steps: { importance: 4, group: "activity", related: "steps" },
          "Resting calories": { importance: 4, group: "energy", related: "bmr" },
          "Active calories": { importance: 5, group: "energy", related: "active" },
          "Exercise hours": { importance: 6, group: "training_volume", related: "duration" },
          "Calories eaten": { importance: 6, group: "nutrition", related: "calories" },
          Protein: { importance: 7, group: "nutrition", related: "protein" },
          Carbs: { importance: 5, group: "nutrition", related: "carbs" },
          Fat: { importance: 5, group: "nutrition", related: "fat" },
        };

        stats.forEach((stat) => {
          const meta = statMeta[stat.label];
          if (stat.total === null || stat.total === undefined || Number.isNaN(stat.total) || stat.total === 0) {
            posStatsListEl.appendChild(renderStatusItem(stat.label, "No data", "bad", "Log source to unlock.", meta));
            return;
          }
          const avg = stat.total / daysElapsed;
          const decimals = stat.unit === "steps" ? 0 : 1;
          const avgLabel = `${formatNumber(avg, decimals)} ${stat.unit}/day`;
          const totalLabel = `Total ${formatNumber(stat.total, decimals)} ${stat.unit}`;
          posStatsListEl.appendChild(renderStatusItem(stat.label, avgLabel, "neutral", totalLabel, meta));
        });

        if ((!cronoTotals || cronoTotals.size === 0) && posStatsNoteEl) {
          posStatsNoteEl.textContent = "Nutrition not connected yet.";
        } else if (posStatsNoteEl) {
          posStatsNoteEl.textContent = `Interval: daily totals · Range: ${rangeLabel(currentRangeDays)}`;
        }
      }

      async function loadPosAppleHealth() {
        if (!posAppleHealthListEl || !posAppleHealthEl) return;
        posAppleHealthListEl.innerHTML = "";
        if (posAppleHealthNoteEl) posAppleHealthNoteEl.textContent = "";

        const now = new Date();
        const rangeStart = rangeStartDate(currentRangeDays);
        const daysElapsed = Math.max(1, currentRangeDays);
        const weekStartIso = rangeStart.toISOString();

        const { data, error } = await supabase
          .from("pos_events")
          .select("event_timestamp,payload")
          .eq("source", "apple_health")
          .eq("event_type", "health_metric")
          .gte("event_timestamp", weekStartIso);

        if (error || !data || !data.length) {
          posAppleHealthListEl.appendChild(
            renderStatusItem(
              "Apple Health",
              "No data",
              "warn",
              "No metrics logged this week.",
              { importance: 5, group: "activity", related: "steps,calories,exercise" },
            ),
          );
          return;
        }

        let steps = 0;
        let activeCalories = 0;
        let restingCalories = 0;
        let exerciseMinutes = 0;
        let latestTimestamp = null;

        data.forEach((row) => {
          const payload = row.payload || {};
          const metricRaw = payload.metric ?? payload.value1 ?? "";
          const metric = String(metricRaw).toLowerCase();
          const value = Number(payload.value ?? payload.value2 ?? payload.amount ?? 0);
          if (Number.isNaN(value)) return;
          if (row.event_timestamp && (!latestTimestamp || row.event_timestamp > latestTimestamp)) {
            latestTimestamp = row.event_timestamp;
          }
          if (["steps", "step_count", "stepcount"].includes(metric)) {
            steps += value;
          } else if (["active_calories", "active_energy", "active_energy_burned", "active_calorie"].includes(metric)) {
            activeCalories += value;
          } else if (["resting_calories", "basal_energy", "basal_calories", "resting_energy", "bmr"].includes(metric)) {
            restingCalories += value;
          } else if (["exercise_minutes", "exercise_time", "apple_exercise_time"].includes(metric)) {
            exerciseMinutes += value;
          }
        });

        const entries = [
          { label: "Steps", total: steps, unit: "steps", meta: { importance: 4, group: "activity", related: "steps" } },
          { label: "Active calories", total: activeCalories, unit: "kcal", meta: { importance: 5, group: "energy", related: "active_calories" } },
          { label: "Resting calories", total: restingCalories, unit: "kcal", meta: { importance: 4, group: "energy", related: "resting_calories" } },
          { label: "Exercise minutes", total: exerciseMinutes, unit: "min", meta: { importance: 5, group: "activity", related: "exercise_minutes" } },
        ];

        entries.forEach((entry) => {
          if (!entry.total || Number.isNaN(entry.total)) {
            posAppleHealthListEl.appendChild(renderStatusItem(entry.label, "Missing", "bad", "No entries", entry.meta));
            return;
          }
          const avg = entry.total / daysElapsed;
          const decimals = entry.unit === "steps" ? 0 : 1;
          const meta = `Avg ${formatNumber(avg, decimals)} ${entry.unit}/day · Total ${formatNumber(entry.total, decimals)} ${entry.unit}`;
          posAppleHealthListEl.appendChild(renderStatusItem(entry.label, `${formatNumber(avg, decimals)} ${entry.unit}/day`, "neutral", meta, entry.meta));
        });

        if (posAppleHealthNoteEl) {
          const updateLabel = latestTimestamp ? `Updated ${formatTimestamp(latestTimestamp)}` : "Updated this week";
          posAppleHealthNoteEl.textContent = `${updateLabel} · ${rangeLabel(currentRangeDays).toLowerCase()}`;
        }
      }

      async function loadPosNutrition() {
        if (!posNutritionListEl) return;
        posNutritionListEl.innerHTML = "";
        if (posNutritionNoteEl) posNutritionNoteEl.textContent = "";

        const dateKey = localDateKey();
        const [metricsResp, planResp] = await Promise.all([
          supabase
            .from("pos_day_metrics")
            .select("date,nutrition_entries_7d,calories_avg_day,protein_avg_day,carbs_avg_day,fat_avg_day,calories_today_kcal,protein_today_g,carbs_today_g,fat_today_g,nutrition_source")
            .order("date", { ascending: false })
            .limit(1),
          supabase
            .from("coach_plan_daily")
            .select("date,plan_json")
            .lte("date", dateKey)
            .order("date", { ascending: false })
            .limit(1),
        ]);

        const metrics = metricsResp.data?.[0] ?? null;
        const plan = planResp.data?.[0] ?? null;
        const targets = plan?.plan_json?.nutrition_targets ?? {};
        const nutritionDaysDisplay = Math.min(Number(metrics?.nutrition_entries_7d ?? 0), 7);

        if (!metrics && !targets) {
          if (posNutritionNoteEl) posNutritionNoteEl.textContent = "No nutrition data yet.";
          return;
        }

        if (posNutritionNoteEl) {
          const noteParts = [];
          noteParts.push(`Coverage ${nutritionDaysDisplay}/7 days logged (last 7d)`);
          if (!targets?.calories_target) {
            noteParts.push("Targets missing");
          } else {
            noteParts.push("Scale cap = 120% of target");
          }
          posNutritionNoteEl.textContent = noteParts.join(" · ");
        }

        const rows = [
          { label: "Calories", actual: metrics?.calories_avg_day, target: targets.calories_target, unit: "kcal", meta: { importance: 8, group: "nutrition", related: "calories" } },
          { label: "Protein", actual: metrics?.protein_avg_day, target: targets.protein_target_g, unit: "g", meta: { importance: 8, group: "nutrition", related: "protein" } },
          { label: "Carbs", actual: metrics?.carbs_avg_day, target: targets.carbs_target_g, unit: "g", meta: { importance: 6, group: "nutrition", related: "carbs" } },
          { label: "Fat", actual: metrics?.fat_avg_day, target: targets.fat_target_g, unit: "g", meta: { importance: 6, group: "nutrition", related: "fat" } },
        ];

        rows.forEach((row) => {
          const actualVal = row.actual;
          const targetVal = row.target;
          if (actualVal == null || Number.isNaN(actualVal)) {
            posNutritionListEl.appendChild(
              renderStatusItem(
                row.label,
                "No data",
                "warn",
                `Coverage ${nutritionDaysDisplay}/7 days logged`,
                row.meta,
              ),
            );
            return;
          }
          if (!targetVal || Number.isNaN(Number(targetVal))) {
            posNutritionListEl.appendChild(
              renderStatusItem(
                row.label,
                `${formatNumber(actualVal, row.unit === "kcal" ? 0 : 1)} ${row.unit}`,
                "warn",
                `Target missing · ${nutritionDaysDisplay}/7 days logged`,
                row.meta,
              ),
            );
            return;
          }
          posNutritionListEl.appendChild(
            renderBullet({
              label: row.label,
              actual: actualVal,
              target: targetVal,
              unit: row.unit,
              coverage: `${nutritionDaysDisplay}/7 days logged (last 7d)`,
              meta: row.meta,
            }),
          );
        });

        const protein = rows.find((row) => row.label === "Protein");
        const carbs = rows.find((row) => row.label === "Carbs");
        const fat = rows.find((row) => row.label === "Fat");
        if (protein?.actual && carbs?.actual && fat?.actual) {
          const proteinCalories = protein.actual * 4;
          const carbsCalories = carbs.actual * 4;
          const fatCalories = fat.actual * 9;
          const total = proteinCalories + carbsCalories + fatCalories;
          if (total > 0) {
            const donut = renderMacroDonut({
              proteinPct: (proteinCalories / total) * 100,
              carbsPct: (carbsCalories / total) * 100,
              fatPct: (fatCalories / total) * 100,
              meta: { importance: 5, group: "nutrition", related: "macro_distribution" },
            });
            posNutritionListEl.appendChild(donut);
          }
        }

        const legend = document.createElement("div");
        legend.className = "goal-legend";
        legend.innerHTML = `
          <span><span class="legend-dot bad"></span>&lt;60% of target</span>
          <span><span class="legend-dot warn"></span>60–90% of target</span>
          <span><span class="legend-dot good"></span>90–110% of target</span>
          <span><span class="legend-dot warn"></span>&gt;110% of target</span>
        `;
        posNutritionListEl.appendChild(legend);
      }

      async function loadPosBaselines() {
        if (!posBaselinesListEl) return;
        posBaselinesListEl.innerHTML = "";
        if (posBaselinesNoteEl) posBaselinesNoteEl.textContent = "";

        const { data: goalData } = await supabase
          .schema("health_core")
          .from("strength_goals")
          .select("exercise_id,exercise_name,goal_watts,goal_basis,set_by,updated_at");
        const goalByName = new Map();
        const goalById = new Map();
        (goalData || []).forEach((row) => {
          if (row.exercise_name) {
            goalByName.set(normalizeExerciseName(row.exercise_name), row);
          }
          if (row.exercise_id) {
            goalById.set(String(row.exercise_id), row);
          }
        });

        const { data, error } = await supabase
          .from("speediance_exercise_baselines")
          .select("action_library_group_id,action_library_name,max_weight,max_watts,avg_watts,one_rm,watt_asym_pct,speed_asym_pct,amplitude_asym_pct,total_reps,last_seen_at")
          .order("max_watts", { ascending: false })
          .limit(6);

        if (error || !data || !data.length) {
          if (posBaselinesNoteEl) posBaselinesNoteEl.textContent = "No baselines yet.";
          return;
        }
        if (posBaselinesNoteEl) posBaselinesNoteEl.textContent = "Peak watts vs per-exercise goals";
        data.forEach((row) => {
          const name = row.action_library_name || `Exercise ${row.action_library_group_id}`;
          const exerciseId = row.action_library_group_id ? String(row.action_library_group_id) : null;
          const goal =
            (exerciseId && goalById.get(exerciseId)) ||
            goalByName.get(normalizeExerciseName(name)) ||
            null;

          const item = document.createElement("div");
          item.className = "list-item baseline-item";
          attachMeta(item, { importance: 7, group: "strength_goal", related: "max_watts,goal_watts" });

          const header = document.createElement("div");
          header.className = "baseline-header";
          header.innerHTML = `
            <div class="baseline-title">${name}</div>
            <div class="baseline-value">${formatNumber(row.max_watts, 0)} W peak</div>
          `;
          item.appendChild(header);

          const goalBar = renderGoalBar({
            label: "Goal vs peak",
            actual: row.max_watts || 0,
            target: goal?.goal_watts ?? null,
            unit: "W",
            meta: { importance: 7, group: "strength_goal", related: "goal_watts" },
          });
          item.appendChild(goalBar);

          const editor = document.createElement("div");
          editor.className = "goal-editor";
          const input = document.createElement("input");
          input.type = "number";
          input.placeholder = "Set goal watts";
          if (goal?.goal_watts) input.value = String(Math.round(goal.goal_watts));
          const button = document.createElement("button");
          button.className = "secondary";
          button.textContent = "Save goal";
          const meta = document.createElement("div");
          meta.className = "goal-meta";
          if (goal?.goal_watts) {
            const updated = goal.updated_at ? new Date(goal.updated_at).toLocaleDateString() : "—";
            meta.textContent = `Goal ${formatNumber(goal.goal_watts, 0)} W · ${goal.goal_basis || "manual"} · ${updated}`;
          } else {
            meta.textContent = "Goal not set";
          }
          editor.appendChild(input);
          editor.appendChild(button);
          editor.appendChild(meta);
          item.appendChild(editor);

          button.addEventListener("click", async () => {
            const value = Number(input.value);
            if (!Number.isFinite(value) || value <= 0) {
              showToast("Enter a valid goal in watts.", "error");
              return;
            }
            const payload = {
              athlete_id: "global",
              exercise_id: exerciseId,
              exercise_name: name,
              goal_watts: value,
              goal_basis: "manual",
              set_by: "user",
              updated_at: new Date().toISOString(),
            };
            const { error: upsertError } = await supabase
              .schema("health_core")
              .from("strength_goals")
              .upsert(payload, { onConflict: "athlete_id,exercise_name" });
            if (upsertError) {
              showToast("Failed to save goal.", "error");
              return;
            }
            showToast("Goal saved.", "success");
            await loadPosBaselines();
          });

          posBaselinesListEl.appendChild(item);
        });
      }

      async function loadPosQuality() {
        if (!posQualityListEl) return;
        posQualityListEl.innerHTML = "";
        if (posQualityNoteEl) posQualityNoteEl.textContent = "";

        const { data, error } = await supabase
          .from("speediance_training_session_scores")
          .select("training_id,session_date,quality_score,exercise_count,total_reps")
          .order("session_date", { ascending: false })
          .limit(6);

        if (error || !data || !data.length) {
          if (posQualityNoteEl) posQualityNoteEl.textContent = "No session quality data yet.";
          return;
        }
        if (posQualityNoteEl) posQualityNoteEl.textContent = "Recent strength sessions";

        data.forEach((row) => {
          const label = row.session_date ? new Date(row.session_date).toLocaleDateString() : row.training_id;
          const band = qualityBand(row.quality_score);
          const item = renderStatusItem(label, band.label, band.tone, `Quality ${formatScore(row.quality_score)}`, { importance: 7, group: "session_quality", related: "quality_score" });
          item.appendChild(renderThresholdBar(row.quality_score ?? 0));
          posQualityListEl.appendChild(item);
        });
      }

      async function loadPosLastSession() {
        if (!posLastSessionListEl) return;
        posLastSessionListEl.innerHTML = "";
        if (posLastSessionNoteEl) posLastSessionNoteEl.textContent = "";

        const { data: sessionData, error: sessionError } = await supabase
          .from("speediance_training_session_scores")
          .select("training_id,session_date,quality_score")
          .order("session_date", { ascending: false })
          .limit(1);

        if (sessionError || !sessionData || !sessionData.length) {
          if (posLastSessionNoteEl) posLastSessionNoteEl.textContent = "No session data yet.";
          return;
        }

        const session = sessionData[0];
        const sessionLabel = session.session_date
          ? new Date(session.session_date).toLocaleDateString()
          : session.training_id;
        if (posLastSessionNoteEl) {
          posLastSessionNoteEl.textContent = `Latest: ${sessionLabel}`;
        }

        const { data: metricsData, error: metricsError } = await supabase
          .from("speediance_exercise_session_metrics")
          .select("action_library_name,quality_score,rep_time_cv,completion_ratio,avg_watts,max_watts,total_reps")
          .eq("training_id", session.training_id)
          .order("quality_score", { ascending: false })
          .limit(8);

        if (metricsError || !metricsData || !metricsData.length) {
          if (posLastSessionNoteEl) posLastSessionNoteEl.textContent = "No exercise details yet.";
          return;
        }

        metricsData.forEach((row) => {
          const title = row.action_library_name || "Exercise";
          const band = qualityBand(row.quality_score);
          const item = renderStatusItem(
            title,
            band.label,
            band.tone,
            `Quality ${formatScore(row.quality_score)}`,
            { importance: 5, group: "session_detail", related: "quality,watts,reps" },
          );
          item.appendChild(renderThresholdBar(row.quality_score ?? 0));
          posLastSessionListEl.appendChild(item);
        });
      }

      async function loadPosQualityTrends() {
        if (!posQualityTrendsListEl) return;
        posQualityTrendsListEl.innerHTML = "";
        if (posQualityTrendsNoteEl) posQualityTrendsNoteEl.textContent = "";

        const [metricsResp, baselineResp] = await Promise.all([
          supabase
            .from("speediance_exercise_session_metrics")
            .select("action_library_group_id,action_library_name,session_date,quality_score,avg_watts,max_watts,avg_speed,avg_amplitude,completion_ratio,max_weight,watt_asym_pct,speed_asym_pct,amplitude_asym_pct")
            .order("session_date", { ascending: false })
            .limit(240),
          supabase
            .from("speediance_exercise_baselines")
            .select("action_library_group_id,max_watts,max_weight,one_rm"),
        ]);
        const { data, error } = metricsResp;
        const baselineData = baselineResp.data ?? [];

        if (error || !data || !data.length) {
          if (posQualityTrendsNoteEl) posQualityTrendsNoteEl.textContent = "No quality trends yet.";
          return;
        }
        if (posQualityTrendsNoteEl) posQualityTrendsNoteEl.textContent = "Last 6 sessions per exercise";

        const baselineMap = new Map();
        baselineData.forEach((row) => {
          if (!row?.action_library_group_id) return;
          baselineMap.set(row.action_library_group_id, row);
        });

        const grouped = {};
        data.forEach((row) => {
          if (!row.action_library_group_id) return;
          const key = row.action_library_group_id;
          if (!grouped[key]) {
            grouped[key] = {
              id: key,
              name: row.action_library_name || `Exercise ${row.action_library_group_id}`,
              lastDate: row.session_date,
              latest: {
                quality: row.quality_score ?? null,
                avgWatts: row.avg_watts ?? null,
                maxWatts: row.max_watts ?? null,
                avgSpeed: row.avg_speed ?? null,
                avgAmplitude: row.avg_amplitude ?? null,
                completion: row.completion_ratio ?? null,
                maxWeight: row.max_weight ?? null,
                asym: null,
              },
              series: {
                quality: [],
                asym: [],
                watts: [],
                speed: [],
                amplitude: [],
              },
            };
          }
          const asymVals = [row.watt_asym_pct, row.speed_asym_pct, row.amplitude_asym_pct].filter(
            (value) => value !== null && value !== undefined && !Number.isNaN(value)
          );
          const asym = asymVals.length ? Math.max(...asymVals) : null;
          if (grouped[key].latest.asym === null && asym !== null) {
            grouped[key].latest.asym = asym;
          }
          if (row.quality_score !== null && row.quality_score !== undefined) {
            grouped[key].series.quality.push(row.quality_score);
          }
          if (asym !== null) {
            grouped[key].series.asym.push(asym);
          }
          if (row.avg_watts != null) grouped[key].series.watts.push(row.avg_watts);
          if (row.avg_speed != null) grouped[key].series.speed.push(row.avg_speed);
          if (row.avg_amplitude != null) grouped[key].series.amplitude.push(row.avg_amplitude);
        });

        Object.values(grouped)
          .map((item) => {
            const qualitySeries = item.series.quality.slice(0, 6).reverse();
            const asymSeries = item.series.asym.slice(0, 6).reverse();
            const wattsSeries = item.series.watts.slice(0, 6).reverse();
            const speedSeries = item.series.speed.slice(0, 6).reverse();
            const ampSeries = item.series.amplitude.slice(0, 6).reverse();
            const qualityDelta = trendDelta(qualitySeries);
            const wattsDelta = trendDelta(wattsSeries);
            const speedDelta = trendDelta(speedSeries);
            const ampDelta = trendDelta(ampSeries);
            const baseline = baselineMap.get(item.id);
            return {
              id: item.id,
              name: item.name,
              lastDate: item.lastDate,
              latest: item.latest,
              qualitySeries,
              asymSeries,
              wattsSeries,
              speedSeries,
              ampSeries,
              deltas: {
                quality: qualityDelta,
                watts: wattsDelta,
                speed: speedDelta,
                amplitude: ampDelta,
              },
              baseline,
            };
          })
          .sort((a, b) => new Date(b.lastDate ?? 0) - new Date(a.lastDate ?? 0))
          .slice(0, 5)
          .forEach((item) => {
            const band = qualityBand(item.latest.quality);
            const qualitySpark = renderSparkline(item.qualitySeries, "rgba(56,189,248,0.9)");
            const asymSpark = renderSparkline(item.asymSeries, "rgba(248,113,113,0.9)");
            const wattsSpark = renderSparkline(item.wattsSeries, "rgba(14,165,233,0.85)");
            const speedSpark = renderSparkline(item.speedSeries, "rgba(129,140,248,0.9)");
            const ampSpark = renderSparkline(item.ampSeries, "rgba(16,185,129,0.9)");
            const statParts = [];
            if (item.latest.avgWatts != null) statParts.push(`Avg ${formatNumber(item.latest.avgWatts, 0)} W`);
            if (item.latest.avgSpeed != null) statParts.push(`Speed ${formatNumber(item.latest.avgSpeed, 2)}`);
            if (item.latest.avgAmplitude != null) statParts.push(`ROM ${formatNumber(item.latest.avgAmplitude, 2)}`);
            if (item.latest.completion != null) {
              statParts.push(`Comp ${formatNumber(item.latest.completion * 100, 0)}%`);
            }
            if (item.latest.asym != null) statParts.push(`Asym ${formatNumber(item.latest.asym, 1)}%`);
            if (item.baseline) {
              const baseline = item.baseline;
              const ratioParts = [];
              if (baseline.max_watts && item.latest.maxWatts) {
                const ratio = (item.latest.maxWatts / baseline.max_watts) * 100;
                ratioParts.push(`Peak W ${formatNumber(ratio, 0)}%`);
              }
              if (baseline.max_weight && item.latest.maxWeight) {
                const ratio = (item.latest.maxWeight / baseline.max_weight) * 100;
                ratioParts.push(`Peak wt ${formatNumber(ratio, 0)}%`);
              }
              if (baseline.one_rm && item.latest.maxWeight) {
                const ratio = (item.latest.maxWeight / baseline.one_rm) * 100;
                ratioParts.push(`1RM ${formatNumber(ratio, 0)}%`);
              }
              if (ratioParts.length) {
                statParts.push(`Vs baseline: ${ratioParts.join(" · ")}`);
              }
            }
            const statsLine = statParts.join(" · ");
            const deltaParts = [];
            if (item.deltas.quality != null) {
              deltaParts.push(`ΔQ ${formatNumber(item.deltas.quality, 1)}`);
            }
            if (item.deltas.watts != null) {
              deltaParts.push(`ΔW ${formatNumber(item.deltas.watts, 0)}`);
            }
            if (item.deltas.speed != null) {
              deltaParts.push(`ΔS ${formatNumber(item.deltas.speed, 2)}`);
            }
            if (item.deltas.amplitude != null) {
              deltaParts.push(`ΔROM ${formatNumber(item.deltas.amplitude, 2)}`);
            }
            const deltaLine = deltaParts.length ? `Recent trend: ${deltaParts.join(" · ")}` : "";
            const trendBlocks = [];
            if (qualitySpark) {
              trendBlocks.push(`
                <div class="trend-item">
                  <div class="trend-label">Quality</div>
                  ${qualitySpark}
                </div>
              `);
            }
            if (asymSpark) {
              trendBlocks.push(`
                <div class="trend-item">
                  <div class="trend-label">Asymmetry</div>
                  ${asymSpark}
                </div>
              `);
            }
            if (wattsSpark) {
              trendBlocks.push(`
                <div class="trend-item">
                  <div class="trend-label">Watts</div>
                  ${wattsSpark}
                </div>
              `);
            }
            if (speedSpark) {
              trendBlocks.push(`
                <div class="trend-item">
                  <div class="trend-label">Speed</div>
                  ${speedSpark}
                </div>
              `);
            }
            if (ampSpark) {
              trendBlocks.push(`
                <div class="trend-item">
                  <div class="trend-label">ROM</div>
                  ${ampSpark}
                </div>
              `);
            }
            const meta = `
              <div class="trend-block">
                ${trendBlocks.length ? `<div class="trend-lines">${trendBlocks.join("")}</div>` : ""}
                ${statsLine ? `<div class="trend-stats">${statsLine}</div>` : ""}
                ${deltaLine ? `<div class="trend-stats">${deltaLine}</div>` : ""}
              </div>
            `;
            const entry = renderStatusItem(
              item.name,
              band.label,
              band.tone,
              "Trend snapshot",
              { importance: 6, group: "exercise_trends", related: "quality,watts,speed,rom" },
            );
            if (meta) {
              const metaWrap = document.createElement("div");
              metaWrap.className = "list-row";
              metaWrap.innerHTML = meta;
              entry.appendChild(metaWrap);
            }
            posQualityTrendsListEl.appendChild(entry);
          });
      }

      async function loadPosWeakness() {
        if (!posWeaknessListEl) return;
        posWeaknessListEl.innerHTML = "";
        if (posWeaknessNoteEl) posWeaknessNoteEl.textContent = "";

        const { data, error } = await supabase
          .from("speediance_exercise_session_metrics")
          .select("action_library_group_id,action_library_name,quality_score,rep_time_cv,completion_ratio,watt_asym_pct,speed_asym_pct,amplitude_asym_pct")
          .order("session_date", { ascending: false })
          .limit(240);

        if (error || !data || !data.length) {
          if (posWeaknessNoteEl) posWeaknessNoteEl.textContent = "No weakness data yet.";
          return;
        }
        if (posWeaknessNoteEl) posWeaknessNoteEl.textContent = "Lowest quality + highest asymmetry";

        const byExercise = {};
        data.forEach((row) => {
          const key = row.action_library_group_id;
          if (!byExercise[key]) {
            byExercise[key] = {
              name: row.action_library_name || `Exercise ${row.action_library_group_id}`,
              scores: [],
              asym: [],
              repCv: [],
              completion: [],
            };
          }
          if (row.quality_score != null) byExercise[key].scores.push(row.quality_score);
          if (row.rep_time_cv != null) byExercise[key].repCv.push(row.rep_time_cv);
          if (row.completion_ratio != null) byExercise[key].completion.push(row.completion_ratio);
          const asymVals = [row.watt_asym_pct, row.speed_asym_pct, row.amplitude_asym_pct].filter((v) => v != null);
          if (asymVals.length) byExercise[key].asym.push(Math.max(...asymVals));
        });

        const ranked = Object.values(byExercise)
          .map((item) => {
            const avgScore = average(item.scores);
            const maxAsym = item.asym.length ? Math.max(...item.asym) : null;
            const avgRepCv = average(item.repCv);
            const avgCompletion = average(item.completion);
            const scoreNorm = avgScore != null ? clamp01(avgScore / 100) : 0;
            const asymNorm = maxAsym != null ? clamp01(maxAsym / 100) : 0;
            const repCvNorm = avgRepCv != null ? clamp01(avgRepCv / 0.35) : 0;
            const completionNorm = avgCompletion != null ? clamp01(1 - avgCompletion) : 0;
            const weakness = (1 - scoreNorm) * 0.45 + asymNorm * 0.3 + repCvNorm * 0.15 + completionNorm * 0.1;
            return { name: item.name, avgScore, maxAsym, avgRepCv, avgCompletion, weakness, scoreNorm, asymNorm, repCvNorm, completionNorm };
          })
          .sort((a, b) => b.weakness - a.weakness)
          .slice(0, 5);

        ranked.forEach((item) => {
          const band = qualityBand(item.avgScore);
          const metaParts = [];
          if (item.maxAsym != null) metaParts.push(`Max asym ${formatNumber(item.maxAsym, 1)}%`);
          if (item.avgRepCv != null) metaParts.push(`Rep CV ${formatNumber(item.avgRepCv, 2)}`);
          if (item.avgCompletion != null) metaParts.push(`Completion ${formatNumber(item.avgCompletion * 100, 0)}%`);

          const factors = [
            { key: "quality", value: 1 - item.scoreNorm, label: "Quality" },
            { key: "asym", value: item.asymNorm, label: "Asymmetry" },
            { key: "rep", value: item.repCvNorm, label: "Tempo" },
            { key: "completion", value: item.completionNorm, label: "Completion" },
          ].sort((a, b) => b.value - a.value);
          const driver = factors[0]?.key;
          let fixNote = "Tighten form and reduce load 10–20% until scores stabilize.";
          if (driver === "asym") {
            fixNote = "Fix asymmetry: drop load 10–20%, add unilateral reps, slow eccentric.";
          } else if (driver === "rep") {
            fixNote = "Fix tempo: use 3-1-1 cadence and full ROM for 1–2 sessions.";
          } else if (driver === "completion") {
            fixNote = "Fix completion: reduce target reps or add 20–30s rest.";
          }
          const meta = `
            <div class="trend-block">
              ${metaParts.length ? `<div class="trend-stats">${metaParts.join(" · ")}</div>` : ""}
              <div class="weakness-note">Fix: ${fixNote}</div>
            </div>
          `;
          const entry = renderStatusItem(
            item.name,
            band.label,
            band.tone,
            "Focus area",
            { importance: 8, group: "strength_fix", related: "asymmetry,quality,completion,tempo" },
          );
          const metaWrap = document.createElement("div");
          metaWrap.className = "list-row";
          metaWrap.innerHTML = meta;
          entry.appendChild(metaWrap);
          posWeaknessListEl.appendChild(entry);
        });
      }

      async function loadPosPlan() {
        const planTargets = [
          posDomainSleepPlanEl,
          posDomainDietPlanEl,
          posDomainProgressPlanEl,
          posDomainWeightPlanEl,
          posDomainCyclingPlanEl,
          posDomainRunningPlanEl,
          posDomainSwimmingPlanEl,
          posDomainFacialPlanEl,
        ].filter(Boolean);
        if (!planTargets.length) return;

        const setPlanLine = (el, text, meta) => {
          if (!el) return;
          el.textContent = text;
          attachMeta(el, meta);
        };
        const setPlanSubLine = (el, text, meta) => {
          if (!el) return;
          el.textContent = text;
          attachMeta(el, meta);
        };

        setPlanLine(posDomainSleepPlanEl, "Plan: —", { importance: 9, group: "plan_sleep", related: "sleep,baseline,delta" });
        setPlanLine(posDomainDietPlanEl, "Plan: —", { importance: 9, group: "plan_diet", related: "calories,protein,coverage" });
        setPlanLine(posDomainProgressPlanEl, "Plan: —", { importance: 9, group: "plan_progress", related: "recommendation,intensity,duration" });
        setPlanLine(posDomainWeightPlanEl, "Plan: —", { importance: 8, group: "plan_strength", related: "strength,quality,volume" });
        setPlanLine(posDomainCyclingPlanEl, "Plan: —", { importance: 7, group: "plan_cycling", related: "cycling,volume" });
        setPlanLine(posDomainRunningPlanEl, "Plan: —", { importance: 7, group: "plan_running", related: "running,volume" });
        setPlanLine(posDomainSwimmingPlanEl, "Plan: —", { importance: 7, group: "plan_swimming", related: "swimming,volume" });
        setPlanLine(posDomainFacialPlanEl, "Plan: —", { importance: 4, group: "plan_facial", related: "facial" });
        setPlanSubLine(posDomainSleepPlanSubEl, "Inputs used below", { importance: 6, group: "plan_sleep", related: "inputs" });
        setPlanSubLine(posDomainDietPlanSubEl, "Inputs used below", { importance: 6, group: "plan_diet", related: "inputs" });
        setPlanSubLine(posDomainProgressPlanSubEl, "Inputs used below", { importance: 6, group: "plan_progress", related: "inputs" });
        setPlanSubLine(posDomainWeightPlanSubEl, "Inputs used below", { importance: 6, group: "plan_strength", related: "inputs" });
        setPlanSubLine(posDomainCyclingPlanSubEl, "Inputs used below", { importance: 6, group: "plan_cycling", related: "inputs" });
        setPlanSubLine(posDomainRunningPlanSubEl, "Inputs used below", { importance: 6, group: "plan_running", related: "inputs" });
        setPlanSubLine(posDomainSwimmingPlanSubEl, "Inputs used below", { importance: 6, group: "plan_swimming", related: "inputs" });
        setPlanSubLine(posDomainFacialPlanSubEl, "Inputs used below", { importance: 5, group: "plan_facial", related: "inputs" });
        const dateKey = localDateKey();
        const { startIso, endIso } = dayBounds(dateKey);

        const [planResp, metricsResp, readinessResp, settingsResp, stravaResp, strengthResp, formResp, cronoTotals] = await Promise.all([
          supabase
            .from("coach_plan_daily")
            .select("date,summary_text,plan_json,created_at")
            .lte("date", dateKey)
            .order("date", { ascending: false })
            .limit(1),
          supabase
            .from("pos_day_metrics")
            .select("sleep_seconds,sleep_baseline_7d,adherence_7d,training_load_7d,workout_count_7d,endurance_sessions_7d,strength_sessions_7d,strength_time_s_7d,strength_capacity_7d,nutrition_entries_7d,calories_today_kcal,protein_today_g,carbs_today_g,fat_today_g,nutrition_source")
            .order("date", { ascending: false })
            .limit(1),
          supabase
            .from("readiness_state")
            .select("sleep_updated_at")
            .eq("id", "global")
            .maybeSingle(),
          supabase
            .from("coach_settings")
            .select("min_weekly_workouts")
            .eq("id", "global")
            .maybeSingle(),
          supabase
            .from("pos_events")
            .select("event_timestamp,payload")
            .eq("source", "strava")
            .eq("event_type", "activity")
            .gte("event_timestamp", startIso)
            .lte("event_timestamp", endIso),
          supabase
            .from("speediance_training_session_scores")
            .select("training_id,session_date,quality_score,exercise_count,total_reps")
            .eq("session_date", dateKey),
          supabase
            .from("strava_fitness_daily")
            .select("form")
            .eq("sport_type", "all")
            .order("date", { ascending: false })
            .limit(1),
          fetchCronometerTotals(dateKey),
        ]);

        const { data, error } = planResp;
        const plan = !error && data?.length ? data[0] : null;
        const rec = plan?.plan_json?.recommendation ?? {};
        const targets = plan?.plan_json?.nutrition_targets ?? {};
        const metrics = metricsResp.data?.[0] ?? {};
        const readiness = readinessResp.data ?? {};
        const settings = settingsResp.data ?? {};
        const sleepHours = metrics.sleep_seconds ? metrics.sleep_seconds / 3600 : null;
        const sleepBaseline = metrics.sleep_baseline_7d ? metrics.sleep_baseline_7d / 3600 : null;
        const sleepDelta = sleepHours != null && sleepBaseline != null ? sleepHours - sleepBaseline : null;
        const sleepAge = formatAgeDays(readiness.sleep_updated_at);
        const formValue = formResp.data?.[0]?.form ?? null;
        const sleepTarget = plan?.plan_json?.recovery_targets?.sleep_target_hours ?? null;
        const minWeeklyWorkouts = Number(settings.min_weekly_workouts ?? 0) || null;

        let stravaMinutes = 0;
        let stravaDistance = 0;
        let cyclingMinutes = 0;
        let cyclingDistance = 0;
        let runningMinutes = 0;
        let runningDistance = 0;
        let swimmingMinutes = 0;
        let swimmingDistance = 0;
        const stravaItems = [];
        (stravaResp.data || []).forEach((row) => {
          const payload = row.payload || {};
          const duration = Number(payload.elapsed_s ?? payload.elapsed_time ?? payload.duration_s ?? 0);
          const distance = Number(payload.distance_m ?? payload.distance ?? 0);
          const typeLabel = payload.type ?? payload.activity_type ?? payload.sport_type ?? payload.workout_type ?? "Activity";
          const typeLower = String(typeLabel || "").toLowerCase();
          if (!Number.isNaN(duration)) stravaMinutes += duration / 60;
          if (!Number.isNaN(distance)) stravaDistance += distance;
          if (typeLower.includes("swim")) {
            if (!Number.isNaN(duration)) swimmingMinutes += duration / 60;
            if (!Number.isNaN(distance)) swimmingDistance += distance;
          } else if (typeLower.includes("run")) {
            if (!Number.isNaN(duration)) runningMinutes += duration / 60;
            if (!Number.isNaN(distance)) runningDistance += distance;
          } else if (typeLower.includes("ride") || typeLower.includes("bike") || typeLower.includes("cycle")) {
            if (!Number.isNaN(duration)) cyclingMinutes += duration / 60;
            if (!Number.isNaN(distance)) cyclingDistance += distance;
          }
          stravaItems.push({
            type: typeLabel,
            duration,
            distance,
            avgHr: payload.average_hr ?? payload.avg_hr ?? null,
          });
        });
        const strengthSessions = strengthResp.data || [];
        const strengthCount = strengthSessions.length;
        const strengthQualities = strengthSessions
          .map((session) => Number(session.quality_score))
          .filter((value) => !Number.isNaN(value));
        const strengthAvgQuality = avg(strengthQualities);
        const strengthExerciseCounts = strengthSessions
          .map((session) => Number(session.exercise_count))
          .filter((value) => !Number.isNaN(value));
        const strengthAvgExercises = avg(strengthExerciseCounts);
        const strengthTotalReps = strengthSessions
          .map((session) => Number(session.total_reps))
          .filter((value) => !Number.isNaN(value))
          .reduce((acc, val) => acc + val, 0);
        const strengthPrograms = Array.from(new Set(strengthSessions.map((session) => session.training_id).filter(Boolean)));
        const strengthProgramLabel = strengthPrograms.length ? strengthPrograms.join(", ") : null;
        const nutritionDaysDisplay = Math.min(Number(metrics.nutrition_entries_7d ?? 0), 7);
        const cronoToday = cronoTotals && cronoTotals.size ? cronoTotals.get(dateKey) : null;
        const todayNutritionCalories = metrics.calories_today_kcal ?? cronoToday?.calories_kcal ?? 0;
        const todayNutritionProtein = metrics.protein_today_g ?? cronoToday?.protein_g ?? 0;

        const setMetrics = (el, items) => {
          if (!el) return;
          el.innerHTML = "";
          items.filter(Boolean).forEach((item) => {
            el.appendChild(renderStatList(item.title, item.value, item.meta, item.metricMeta));
          });
        };

        let sleepPlanLine = "Plan: Set a sleep target";
        if (sleepHours != null) {
          const targetLabel = sleepTarget != null
            ? `Target ${formatNumber(sleepTarget, 1)}h`
            : sleepBaseline != null
              ? `Target ${formatNumber(sleepBaseline, 1)}h`
              : "Target —";
          const lastLabel = `Last ${formatNumber(sleepHours, 1)}h`;
          const baselineLabel = sleepBaseline != null ? `Baseline ${formatNumber(sleepBaseline, 1)}h` : "Baseline —";
          sleepPlanLine = `Plan: ${targetLabel} · ${lastLabel} · ${baselineLabel}`;
          if (sleepAge != null && sleepAge >= 2) sleepPlanLine += ` · Updated ${formatNumber(sleepAge, 1)}d ago`;
        }
        setPlanLine(posDomainSleepPlanEl, sleepPlanLine, { importance: 9, group: "plan_sleep", related: "sleep,baseline,delta" });
        const sleepInputs = [
          sleepHours != null ? `Last ${formatNumber(sleepHours, 1)}h` : "Last —",
          sleepBaseline != null ? `Baseline ${formatNumber(sleepBaseline, 1)}h` : "Baseline —",
          sleepDelta != null ? `Δ ${formatNumber(sleepDelta, 1)}h` : "Δ —",
          sleepAge != null ? `Updated ${formatNumber(sleepAge, 1)}d ago` : "Updated —",
        ];
        setPlanSubLine(posDomainSleepPlanSubEl, sleepInputs.join(" · "), { importance: 6, group: "plan_sleep", related: "inputs" });

        const dietTargets = [];
        if (targets.calories_target) dietTargets.push(`${formatNumber(targets.calories_target, 0)} kcal`);
        if (targets.protein_target_g) dietTargets.push(`${formatNumber(targets.protein_target_g, 0)}g protein`);
        const dietPlanLine = dietTargets.length
          ? `Plan: ${dietTargets.join(" · ")} · Logged ${formatNumber(todayNutritionCalories, 0) || 0} kcal`
          : `Plan: Set nutrition targets · Logged ${formatNumber(todayNutritionCalories, 0) || 0} kcal`;
        setPlanLine(posDomainDietPlanEl, dietPlanLine, { importance: 9, group: "plan_diet", related: "calories,protein,coverage" });
        const dietInputs = [
          `Today ${formatNumber(todayNutritionCalories, 0) || 0} kcal`,
          `Protein ${formatNumber(todayNutritionProtein, 0) || 0} g`,
          `Coverage ${nutritionDaysDisplay}/7 days`,
        ];
        setPlanSubLine(posDomainDietPlanSubEl, dietInputs.join(" · "), { importance: 6, group: "plan_diet", related: "inputs" });

        const stripReadinessText = (text) => {
          if (!text) return "";
          return text
            .replace(/readiness[^.]*?(?:\.|$)/gi, "")
            .replace(/\b(yellow|green|red)\b/gi, "")
            .replace(/score\s*\d+\s*\/\s*\d+/gi, "")
            .replace(/\s{2,}/g, " ")
            .replace(/^[-·\s]+|[-·\s]+$/g, "")
            .trim();
        };

        const planPieces = [];
        const optionName =
          rec?.workout_options?.[0]?.name ??
          rec?.workout_option?.name ??
          rec?.workout_name ??
          rec?.name ??
          "";
        if (optionName) planPieces.push(optionName);
        if (rec?.type) planPieces.push(rec.type);
        if (rec?.duration_min) planPieces.push(`${rec.duration_min} min`);
        if (rec?.intensity) planPieces.push(`${rec.intensity} intensity`);
        let planText = planPieces.join(" · ");
        if (!planText && plan?.summary_text) {
          const cleaned = stripReadinessText(plan.summary_text);
          planText = cleaned.length > 140 ? `${cleaned.slice(0, 137)}…` : cleaned;
        }
        const windowLabel = rec?.window_start && rec?.window_end ? ` · Window ${rec.window_start}-${rec.window_end}` : "";
        const progressPlanLine = planText ? `Plan: ${planText}${windowLabel}` : "Plan: No training prescription yet";
        setPlanLine(posDomainProgressPlanEl, progressPlanLine, { importance: 9, group: "plan_progress", related: "recommendation,intensity,duration" });
        const progressInputs = [
          metrics.workout_count_7d != null ? `Workouts 7d ${formatNumber(metrics.workout_count_7d, 0)}` : "Workouts 7d —",
          metrics.training_load_7d != null ? `Load 7d ${formatNumber(metrics.training_load_7d, 0)}` : "Load 7d —",
          formValue != null ? `Form ${formatNumber(formValue, 0)}` : "Form —",
        ];
        setPlanSubLine(posDomainProgressPlanSubEl, progressInputs.join(" · "), { importance: 6, group: "plan_progress", related: "inputs" });

        const planLower = planText.toLowerCase();
        const hasStrengthPlan = !!planText && /(strength|lift|weights|speediance|kettlebell)/.test(planLower);
        const hasCyclingPlan = !!planText && /(bike|ride|cycle|cycling)/.test(planLower);
        const hasRunningPlan = !!planText && /(run|jog|walk|tread)/.test(planLower);
        const hasSwimmingPlan = !!planText && /(swim|pool|open water)/.test(planLower);

        const strengthPlanLine = hasStrengthPlan ? `Plan: ${planText}` : "Plan: Schedule strength session";
        setPlanLine(posDomainWeightPlanEl, strengthPlanLine, { importance: 8, group: "plan_strength", related: "strength,quality,volume" });
        const strengthInputs = [
          metrics.strength_sessions_7d != null ? `Strength 7d ${formatNumber(metrics.strength_sessions_7d, 0)} sessions` : "Strength 7d —",
          strengthAvgQuality != null ? `Avg quality ${formatScore(strengthAvgQuality)}` : "Avg quality —",
          strengthProgramLabel ? `Program ${strengthProgramLabel}` : "Program —",
        ];
        setPlanSubLine(posDomainWeightPlanSubEl, strengthInputs.join(" · "), { importance: 6, group: "plan_strength", related: "inputs" });

        const cyclingPlanLine = hasCyclingPlan ? `Plan: ${planText}` : "Plan: Schedule cycling session";
        setPlanLine(posDomainCyclingPlanEl, cyclingPlanLine, { importance: 7, group: "plan_cycling", related: "cycling,volume" });
        const cyclingInputs = [
          cyclingMinutes ? `Today ${formatNumber(cyclingMinutes, 0)} min` : "Today —",
          cyclingDistance ? `${formatNumber(formatMiles(cyclingDistance) ?? 0, 1)} mi` : "Distance —",
        ];
        setPlanSubLine(posDomainCyclingPlanSubEl, cyclingInputs.join(" · "), { importance: 6, group: "plan_cycling", related: "inputs" });

        const runningPlanLine = hasRunningPlan ? `Plan: ${planText}` : "Plan: Schedule run/walk session";
        setPlanLine(posDomainRunningPlanEl, runningPlanLine, { importance: 7, group: "plan_running", related: "running,volume" });
        const runningInputs = [
          runningMinutes ? `Today ${formatNumber(runningMinutes, 0)} min` : "Today —",
          runningDistance ? `${formatNumber(formatMiles(runningDistance) ?? 0, 1)} mi` : "Distance —",
        ];
        setPlanSubLine(posDomainRunningPlanSubEl, runningInputs.join(" · "), { importance: 6, group: "plan_running", related: "inputs" });

        const swimmingPlanLine = hasSwimmingPlan ? `Plan: ${planText}` : "Plan: Schedule swim session";
        setPlanLine(posDomainSwimmingPlanEl, swimmingPlanLine, { importance: 7, group: "plan_swimming", related: "swimming,volume" });
        const swimInputs = [
          swimmingMinutes ? `Today ${formatNumber(swimmingMinutes, 0)} min` : "Today —",
          swimmingDistance ? `${formatNumber(swimmingDistance * 1.09361, 0)} yd` : "Distance —",
        ];
        setPlanSubLine(posDomainSwimmingPlanSubEl, swimInputs.join(" · "), { importance: 6, group: "plan_swimming", related: "inputs" });

        setPlanLine(posDomainFacialPlanEl, "Plan: Manual routine (not tracked)", { importance: 4, group: "plan_facial", related: "facial" });
        setPlanSubLine(posDomainFacialPlanSubEl, "Tracking source missing · manual routine only", { importance: 5, group: "plan_facial", related: "inputs" });

        setMetrics(posDomainSleepMetricsEl, [
          {
            title: "Sleep target",
            value: sleepTarget != null ? `${formatNumber(sleepTarget, 1)} h` : "—",
            meta: sleepTarget != null ? "Target for tonight" : "Target missing",
            metricMeta: { importance: 9, group: "sleep_metrics", related: "target" },
          },
          {
            title: "Sleep last night",
            value: sleepHours != null ? `${formatNumber(sleepHours, 1)} h` : "—",
            meta: sleepBaseline != null ? `Baseline ${formatNumber(sleepBaseline, 1)} h` : "Baseline missing",
            metricMeta: { importance: 9, group: "sleep_metrics", related: "duration,baseline" },
          },
          {
            title: "Sleep delta",
            value: sleepDelta != null ? `${formatNumber(sleepDelta, 1)} h` : "—",
            meta: sleepAge != null ? `Updated ${formatNumber(sleepAge, 1)}d ago` : "No update",
            metricMeta: { importance: 8, group: "sleep_metrics", related: "delta,stale" },
          },
        ]);

        setMetrics(posDomainDietMetricsEl, [
          {
            title: "Calories logged today",
            value: `${formatNumber(todayNutritionCalories, 0) || 0} kcal`,
            meta: targets.calories_target ? `Target ${formatNumber(targets.calories_target, 0)} kcal` : "Target missing",
            metricMeta: { importance: 8, group: "diet_metrics", related: "calories,target" },
          },
          {
            title: "Protein logged today",
            value: `${formatNumber(todayNutritionProtein, 0) || 0} g`,
            meta: targets.protein_target_g ? `Target ${formatNumber(targets.protein_target_g, 0)} g` : "Target missing",
            metricMeta: { importance: 8, group: "diet_metrics", related: "protein,target" },
          },
          {
            title: "Nutrition logs",
            value: `${nutritionDaysDisplay}/7 days`,
            meta: "Coverage only · missing logs ≠ no intake",
            metricMeta: { importance: 7, group: "diet_metrics", related: "coverage" },
          },
        ]);

        const stravaSummary = stravaItems.length ? `${stravaItems.length} activity${stravaItems.length === 1 ? "" : "ies"}` : "No Strava activities";
        const stravaDetail = stravaItems.length
          ? stravaItems.slice(0, 4).map((item) => {
            const mins = item.duration ? `${formatNumber(item.duration / 60, 0)}m` : "—";
            return `${item.type} ${mins}`;
          }).join(" · ")
          : "No Strava activity logged today";

        setMetrics(posDomainProgressMetricsEl, [
          {
            title: "Workouts (7d)",
            value: metrics.workout_count_7d != null ? `${formatNumber(metrics.workout_count_7d, 0)} sessions` : "—",
            meta: minWeeklyWorkouts ? `Goal ${minWeeklyWorkouts} sessions` : "Goal missing",
            metricMeta: { importance: 9, group: "progress_metrics", related: "workouts,goal" },
          },
          {
            title: "Adherence (7d)",
            value: metrics.adherence_7d != null ? `${formatNumber(metrics.adherence_7d * 100, 0)}%` : "—",
            meta: "Planned vs completed",
            metricMeta: { importance: 8, group: "progress_metrics", related: "adherence" },
          },
          {
            title: "Strava activities today",
            value: stravaSummary,
            meta: stravaDetail,
            metricMeta: { importance: 8, group: "progress_metrics", related: "strava,activities" },
          },
          {
            title: "Training load (7d)",
            value: metrics.training_load_7d != null ? `${formatNumber(metrics.training_load_7d, 0)}` : "—",
            meta: "Total load window",
            metricMeta: { importance: 8, group: "progress_metrics", related: "training_load" },
          },
          {
            title: "Form (Strava)",
            value: formValue != null ? formatNumber(formValue, 0) : "—",
            meta: "Fitness − fatigue",
            metricMeta: { importance: 7, group: "progress_metrics", related: "form" },
          },
        ]);

        setMetrics(posDomainWeightMetricsEl, [
          {
            title: "Strength sessions (7d)",
            value: metrics.strength_sessions_7d != null ? `${formatNumber(metrics.strength_sessions_7d, 0)}` : "—",
            meta: "Rolling 7d count",
            metricMeta: { importance: 8, group: "strength_metrics", related: "sessions" },
          },
          {
            title: "Strength today",
            value: `${strengthCount}`,
            meta: strengthCount ? "Speediance sessions" : "No session logged today",
            metricMeta: { importance: 7, group: "strength_metrics", related: "sessions_today" },
          },
          {
            title: "Avg quality",
            value: strengthAvgQuality != null ? formatScore(strengthAvgQuality) : "—",
            meta: "Quality score",
            metricMeta: { importance: 7, group: "strength_metrics", related: "quality" },
          },
          {
            title: "Program IDs",
            value: strengthProgramLabel || "—",
            meta: strengthProgramLabel ? "Speediance training_id" : "No program logged",
            metricMeta: { importance: 6, group: "strength_metrics", related: "program" },
          },
          {
            title: "Exercises per session",
            value: strengthAvgExercises != null ? formatNumber(strengthAvgExercises, 1) : "—",
            meta: strengthAvgExercises != null ? "Average count" : "No exercise count",
            metricMeta: { importance: 6, group: "strength_metrics", related: "exercise_count" },
          },
          {
            title: "Total reps today",
            value: strengthTotalReps ? formatNumber(strengthTotalReps, 0) : "—",
            meta: strengthTotalReps ? "Logged reps" : "No rep counts",
            metricMeta: { importance: 6, group: "strength_metrics", related: "total_reps" },
          },
        ]);

        setMetrics(posDomainCyclingMetricsEl, [
          {
            title: "Minutes today",
            value: cyclingMinutes ? `${formatNumber(cyclingMinutes, 0)} min` : "No ride logged",
            meta: cyclingMinutes ? `Distance ${formatNumber(formatMiles(cyclingDistance) ?? 0, 1)} mi` : "Add a cycling session to populate",
            metricMeta: { importance: 7, group: "cycling_metrics", related: "minutes,distance" },
          },
        ]);

        setMetrics(posDomainRunningMetricsEl, [
          {
            title: "Minutes today",
            value: runningMinutes ? `${formatNumber(runningMinutes, 0)} min` : "No run logged",
            meta: runningMinutes ? `Distance ${formatNumber(formatMiles(runningDistance) ?? 0, 1)} mi` : "Add a run/walk to populate",
            metricMeta: { importance: 7, group: "running_metrics", related: "minutes,distance" },
          },
        ]);

        setMetrics(posDomainSwimmingMetricsEl, [
          {
            title: "Minutes today",
            value: swimmingMinutes ? `${formatNumber(swimmingMinutes, 0)} min` : "No swim logged",
            meta: swimmingMinutes ? `Distance ${formatNumber((swimmingDistance * 1.09361), 0)} yd` : "Add a swim to populate",
            metricMeta: { importance: 7, group: "swim_metrics", related: "minutes,distance" },
          },
        ]);

        setMetrics(posDomainFacialMetricsEl, [
          {
            title: "Tracking",
            value: "Not connected",
            meta: "Manual routine only",
            metricMeta: { importance: 4, group: "facial_metrics", related: "facial" },
          },
        ]);
      }

      function renderReportMetrics(targetEl, metrics) {
        if (!targetEl) return;
        targetEl.innerHTML = "";
        metrics.forEach((metric) => {
          const row = document.createElement("div");
          row.className = "report-metric-row";
          row.innerHTML = `
            <div class="report-metric-name">${metric.name}</div>
            <div class="report-metric-cell">${metric.current}</div>
            <div class="report-metric-cell">${metric.target}</div>
            <div class="report-metric-cell">${metric.window}</div>
            <div class="report-metric-cell">${metric.direction}</div>
          `;
          targetEl.appendChild(row);
        });
      }

      async function loadPosReport() {
        const dateKey = localDateKey();
        const { startIso, endIso } = dayBounds(dateKey);
        const [
          planResp,
          metricsResp,
          readinessResp,
          settingsResp,
          stravaResp,
          formResp,
        ] = await Promise.all([
          supabase
            .from("coach_plan_daily")
            .select("date,summary_text,plan_json,created_at")
            .lte("date", dateKey)
            .order("date", { ascending: false })
            .limit(1),
          supabase
            .from("pos_day_metrics")
            .select("sleep_seconds,sleep_baseline_7d,adherence_7d,training_load_7d,workout_count_7d,endurance_sessions_7d,strength_sessions_7d,weight_kg,weight_baseline_7d,nutrition_entries_7d,calories_today_kcal,protein_today_g")
            .order("date", { ascending: false })
            .limit(1),
          supabase
            .from("readiness_state")
            .select("sleep_updated_at,weight_updated_at")
            .eq("id", "global")
            .maybeSingle(),
          supabase
            .from("coach_settings")
            .select("min_weekly_workouts")
            .eq("id", "global")
            .maybeSingle(),
          supabase
            .from("pos_events")
            .select("event_timestamp,payload")
            .eq("source", "strava")
            .eq("event_type", "activity")
            .gte("event_timestamp", startIso)
            .lte("event_timestamp", endIso),
          supabase
            .from("strava_fitness_daily")
            .select("form")
            .eq("sport_type", "all")
            .order("date", { ascending: false })
            .limit(1),
        ]);

        const plan = planResp.data?.[0] ?? null;
        const planJson = plan?.plan_json ?? {};
        const rec = planJson.recommendation ?? {};
        const targets = planJson.nutrition_targets ?? {};
        const sleepTarget = planJson.recovery_targets?.sleep_target_hours ?? null;
        const metrics = metricsResp.data?.[0] ?? {};
        const readiness = readinessResp.data ?? {};
        const settings = settingsResp.data ?? {};
        const formValue = formResp.data?.[0]?.form ?? null;

        const updatedAt = plan?.created_at ?? metrics.updated_at ?? readiness.updated_at ?? null;
        if (posReportUpdatedEl) {
          posReportUpdatedEl.textContent = updatedAt ? `Updated ${formatTimestamp(updatedAt)}` : "Updated —";
        }

        const sleepAge = formatAgeDays(readiness.sleep_updated_at);
        const weightAge = formatAgeDays(readiness.weight_updated_at);
        const coverageLabel = [
          sleepAge != null ? `Sleep ${formatNumber(sleepAge, 1)}d` : "Sleep —",
          weightAge != null ? `Weight ${formatNumber(weightAge, 1)}d` : "Weight —",
        ].join(" · ");
        if (posReportCoverageEl) {
          posReportCoverageEl.textContent = `Coverage: ${coverageLabel}`;
        }

        const sleepHours = metrics.sleep_seconds ? metrics.sleep_seconds / 3600 : null;
        const sleepBaseline = metrics.sleep_baseline_7d ? metrics.sleep_baseline_7d / 3600 : null;
        const sleepDelta = sleepHours != null && sleepBaseline != null ? sleepHours - sleepBaseline : null;

        const todayCalories = metrics.calories_today_kcal ?? 0;
        const todayProtein = metrics.protein_today_g ?? 0;
        const nutritionDaysDisplay = Math.min(Number(metrics.nutrition_entries_7d ?? 0), 7);

        const workoutGoal = Number(settings.min_weekly_workouts ?? 0) || null;
        const workoutCount = metrics.workout_count_7d ?? null;
        const trainingLoad7d = metrics.training_load_7d ?? null;
        const enduranceSessions = metrics.endurance_sessions_7d ?? null;
        const strengthSessions = metrics.strength_sessions_7d ?? null;

        const planPieces = [];
        const optionName =
          rec?.workout_options?.[0]?.name ??
          rec?.workout_option?.name ??
          rec?.workout_name ??
          rec?.name ??
          "";
        if (optionName) planPieces.push(optionName);
        if (rec?.type) planPieces.push(rec.type);
        if (rec?.duration_min) planPieces.push(`${rec.duration_min} min`);
        if (rec?.intensity) planPieces.push(`${rec.intensity} intensity`);
        const windowLabel = rec?.window_start && rec?.window_end ? `Window ${rec.window_start}-${rec.window_end}` : "Window —";
        const planText = planPieces.length ? planPieces.join(" · ") : "No training prescription";

        if (reportTrainingAssessmentEl) {
          reportTrainingAssessmentEl.textContent = workoutCount != null && workoutGoal
            ? `Workouts 7d: ${workoutCount} vs goal ${workoutGoal}. Load 7d: ${trainingLoad7d ?? "—"}.`
            : `Workouts 7d: ${workoutCount ?? "—"}. Load 7d: ${trainingLoad7d ?? "—"}.`;
        }
        if (reportTrainingActionEl) {
          reportTrainingActionEl.textContent = `Next: ${planText} · ${windowLabel}`;
        }
        renderReportMetrics(reportTrainingMetricsEl, [
          {
            name: "Workouts (7d)",
            current: workoutCount != null ? `${workoutCount} sessions` : "—",
            target: workoutGoal ? `Goal ${workoutGoal} sessions` : "Target —",
            window: "7d",
            direction: "Higher until goal",
          },
          {
            name: "Training load (7d)",
            current: trainingLoad7d != null ? `${formatNumber(trainingLoad7d, 0)}` : "—",
            target: "Target —",
            window: "7d",
            direction: "Higher = more stress",
          },
          {
            name: "Endurance sessions (7d)",
            current: enduranceSessions != null ? `${enduranceSessions}` : "—",
            target: "Target —",
            window: "7d",
            direction: "Higher until goal",
          },
          {
            name: "Strength sessions (7d)",
            current: strengthSessions != null ? `${strengthSessions}` : "—",
            target: "Target —",
            window: "7d",
            direction: "Higher until goal",
          },
        ]);

        if (reportSleepAssessmentEl) {
          const deltaLabel = sleepDelta != null ? `${formatNumber(sleepDelta, 1)}h` : "—";
          reportSleepAssessmentEl.textContent = `Sleep last night ${sleepHours != null ? formatNumber(sleepHours, 1) : "—"}h vs target ${sleepTarget != null ? formatNumber(sleepTarget, 1) : "—"}h (Δ ${deltaLabel}).`;
        }
        if (reportSleepActionEl) {
          reportSleepActionEl.textContent = sleepTarget != null
            ? `Target ${formatNumber(sleepTarget, 1)}h tonight.`
            : "Set a sleep target for tonight.";
        }
        renderReportMetrics(reportSleepMetricsEl, [
          {
            name: "Sleep last night",
            current: sleepHours != null ? `${formatNumber(sleepHours, 1)} h` : "—",
            target: sleepTarget != null ? `${formatNumber(sleepTarget, 1)} h` : "Target —",
            window: "last night",
            direction: "Higher toward target",
          },
          {
            name: "Sleep baseline (7d)",
            current: sleepBaseline != null ? `${formatNumber(sleepBaseline, 1)} h` : "—",
            target: "Target —",
            window: "7d",
            direction: "Higher = more recovery",
          },
          {
            name: "Sleep updated",
            current: sleepAge != null ? `${formatNumber(sleepAge, 1)} d ago` : "—",
            target: "<2 d",
            window: "recency",
            direction: "Lower = fresher",
          },
        ]);

        if (reportNutritionAssessmentEl) {
          reportNutritionAssessmentEl.textContent =
            `Logged ${formatNumber(todayCalories, 0) || 0} kcal and ${formatNumber(todayProtein, 0) || 0} g protein today. ` +
            `Coverage ${nutritionDaysDisplay}/7 days logged (missing logs ≠ no intake).`;
        }
        if (reportNutritionActionEl) {
          const calorieTarget = targets.calories_target ? formatNumber(targets.calories_target, 0) : "—";
          const proteinTarget = targets.protein_target_g ? formatNumber(targets.protein_target_g, 0) : "—";
          reportNutritionActionEl.textContent = `Hit targets: ${calorieTarget} kcal · ${proteinTarget} g protein.`;
        }
        renderReportMetrics(reportNutritionMetricsEl, [
          {
            name: "Calories logged today",
            current: `${formatNumber(todayCalories, 0) || 0} kcal`,
            target: targets.calories_target ? `${formatNumber(targets.calories_target, 0)} kcal` : "Target —",
            window: "today",
            direction: "Higher until target",
          },
          {
            name: "Protein logged today",
            current: `${formatNumber(todayProtein, 0) || 0} g`,
            target: targets.protein_target_g ? `${formatNumber(targets.protein_target_g, 0)} g` : "Target —",
            window: "today",
            direction: "Higher until target",
          },
          {
            name: "Nutrition coverage",
            current: `${nutritionDaysDisplay}/7 days`,
            target: "≥6/7 days",
            window: "7d",
            direction: "Higher = more confidence",
          },
        ]);

        const weightKg = metrics.weight_kg ?? null;
        const weightBaseline = metrics.weight_baseline_7d ?? null;
        const weightDelta = weightKg != null && weightBaseline != null ? weightKg - weightBaseline : null;
        if (reportBodyAssessmentEl) {
          reportBodyAssessmentEl.textContent = `Weight ${weightKg != null ? formatNumber(weightKg, 1) : "—"} kg (Δ ${weightDelta != null ? formatNumber(weightDelta, 2) : "—"} kg).`;
        }
        if (reportBodyActionEl) {
          reportBodyActionEl.textContent = weightAge != null && weightAge >= 7
            ? "Update weight to refresh recovery signals."
            : "Maintain weight trend unless goal changes.";
        }
        renderReportMetrics(reportBodyMetricsEl, [
          {
            name: "Weight",
            current: weightKg != null ? `${formatNumber(weightKg, 1)} kg` : "—",
            target: weightBaseline != null ? `${formatNumber(weightBaseline, 1)} kg baseline` : "Baseline —",
            window: "latest",
            direction: "Goal dependent",
          },
          {
            name: "Weight updated",
            current: weightAge != null ? `${formatNumber(weightAge, 1)} d ago` : "—",
            target: "<7 d",
            window: "recency",
            direction: "Lower = fresher",
          },
        ]);

        if (reportRiskAssessmentEl) {
          reportRiskAssessmentEl.textContent = `Form ${formValue != null ? formatNumber(formValue, 0) : "—"} (Strava). Data gaps: sleep ${sleepAge != null ? formatNumber(sleepAge, 1) : "—"}d, weight ${weightAge != null ? formatNumber(weightAge, 1) : "—"}d.`;
        }
        if (reportRiskActionEl) {
          reportRiskActionEl.textContent = "If form < -10 or sleep delta < -1h, avoid intensity.";
        }
        renderReportMetrics(reportRiskMetricsEl, [
          {
            name: "Form (Strava)",
            current: formValue != null ? formatNumber(formValue, 0) : "—",
            target: "-10 to +10",
            window: "latest",
            direction: "Higher = fresher",
          },
          {
            name: "Sleep delta",
            current: sleepDelta != null ? `${formatNumber(sleepDelta, 1)} h` : "—",
            target: "≥ 0 h",
            window: "last night",
            direction: "Higher = better recovered",
          },
          {
            name: "Data freshness",
            current: `Sleep ${sleepAge != null ? formatNumber(sleepAge, 1) : "—"}d · Weight ${weightAge != null ? formatNumber(weightAge, 1) : "—"}d`,
            target: "Sleep <2d · Weight <7d",
            window: "recency",
            direction: "Lower = fresher",
          },
        ]);
      }

      async function initPos() {
        if (!posDashboardEl) return;
        renderRangeTabs();
        renderPosNav();
        await loadMetricGoals();
        setPosSubview(currentPosView);
        await loadPosViewData(currentPosView);
      }

      window.posInit = initPos;
      refreshSession();
