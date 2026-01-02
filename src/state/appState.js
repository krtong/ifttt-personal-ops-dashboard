export const initialState = {
  session: null,
  user: null,
  report: null,
  reportMeta: null,
  rangeDays: 7,
  loading: false,
  error: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case 'SET_SESSION':
      return { ...state, session: action.session, user: action.user || null };
    case 'SET_RANGE':
      return { ...state, rangeDays: action.days };
    case 'SET_REPORT':
      return { ...state, report: action.report, reportMeta: action.meta || null };
    case 'SET_LOADING':
      return { ...state, loading: action.loading };
    case 'SET_ERROR':
      return { ...state, error: action.error };
    default:
      return state;
  }
}
