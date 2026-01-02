import React, { useEffect, useReducer } from 'react';
import { supabase } from './lib/supabase.js';
import { initialState, reducer } from './state/appState.js';
import AuthPanel from './components/AuthPanel.jsx';
import ReportHeader from './components/ReportHeader.jsx';
import SummaryCards from './components/SummaryCards.jsx';
import ReportSection from './components/ReportSection.jsx';

function formatUpdated(value) {
  if (!value) return null;
  try {
    return new Date(value).toLocaleString();
  } catch {
    return value;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let mounted = true;

    async function init() {
      const { data } = await supabase.auth.getSession();
      if (!mounted) return;
      dispatch({ type: 'SET_SESSION', session: data.session, user: data.session?.user });
    }

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      dispatch({ type: 'SET_SESSION', session, user: session?.user });
    });

    init();

    return () => {
      mounted = false;
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!state.session) return;
    dispatch({ type: 'SET_LOADING', loading: true });
    dispatch({ type: 'SET_ERROR', error: null });

    async function loadReport() {
      const { data, error } = await supabase
        .from('pos_report_daily')
        .select('date,report_json,updated_at')
        .order('date', { ascending: false })
        .limit(1);

      if (error) {
        dispatch({ type: 'SET_ERROR', error: error.message });
        dispatch({ type: 'SET_REPORT', report: null, meta: null });
        dispatch({ type: 'SET_LOADING', loading: false });
        return;
      }

      const row = data?.[0];
      dispatch({
        type: 'SET_REPORT',
        report: row?.report_json || null,
        meta: row ? { updatedAt: row.updated_at, date: row.date } : null,
      });
      dispatch({ type: 'SET_LOADING', loading: false });
    }

    loadReport();
  }, [state.session, state.rangeDays]);

  const handleSignIn = async (email, password) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    const { error, data } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      dispatch({ type: 'SET_ERROR', error: error.message });
      dispatch({ type: 'SET_LOADING', loading: false });
      return;
    }
    dispatch({ type: 'SET_SESSION', session: data.session, user: data.session?.user });
    dispatch({ type: 'SET_LOADING', loading: false });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    dispatch({ type: 'SET_SESSION', session: null, user: null });
  };

  const updatedAt = formatUpdated(state.reportMeta?.updatedAt);

  return (
    <div className="app">
      <div className="wrap">
        {!state.session ? (
          <AuthPanel onSignIn={handleSignIn} status={state.error} loading={state.loading} />
        ) : (
          <div className="report">
            <ReportHeader
              updatedAt={updatedAt}
              rangeDays={state.rangeDays}
              onRangeChange={(days) => dispatch({ type: 'SET_RANGE', days })}
            />

            {state.error ? <div className="error">{state.error}</div> : null}
            {state.loading ? <div className="meta">Loading report…</div> : null}

            {state.report ? (
              <>
                <SummaryCards report={state.report} />
                <div className="section-grid">
                  {state.report.sections?.map((section) => (
                    <ReportSection key={section.key || section.title} section={section} />
                  ))}
                </div>
              </>
            ) : (
              !state.loading && <div className="meta">No report data yet.</div>
            )}

            <button className="secondary" type="button" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
