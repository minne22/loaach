// src/lib/supabaseClients.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ylslzovkvrilalcrkicx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlsc2x6b3ZrdnJpbGFsY3JraWN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMDIwMTksImV4cCI6MjA2NTc3ODAxOX0.HHf-dN6rECnKt3_6WDIHbDoK2954b7BxEJR3uwA4oVA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);