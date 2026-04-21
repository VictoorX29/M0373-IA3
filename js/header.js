import { supabase } from './supabase.js';
const {
	data: { user },
} = await supabase.auth.getUser();
if (user) {
	document.querySelector('.header-iconos').classList.remove('hidden');
} else {
	document.querySelector('.header-botones').classList.remove('hidden');
}
