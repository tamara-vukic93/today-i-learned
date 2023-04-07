import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://afdskwbtgythoiftdqdn.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmZHNrd2J0Z3l0aG9pZnRkcWRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1ODU0NDEsImV4cCI6MTk5NjE2MTQ0MX0.DyRiyv8P8WVlbu3eKkM_nv-DwZ6FgGbTXOx9cVE3uJ0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
