import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://kwzqtbwcsamesdbmjyvb.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3enF0Yndjc2FtZXNkYm1qeXZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0MTUxNjksImV4cCI6MjA5MDk5MTE2OX0.gHfbEg-kpCH-baxotW-M7Zb0nGRIg5oQ9CCJSX5SusI';

export const supabase = createClient(supabaseUrl, supabaseKey);
