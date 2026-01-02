import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://tbrnarytcojngpbzzwcn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_E8-dvNNh5V3VQLAcK-xqiQ_dLEu1Bsh';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true },
});
