import { supabase } from '../supabase.js';
const redirectTo =
	window.location.hostname === 'localhost'
		? 'http://localhost:5502/pages/dashboard.html'
		: 'https://m0373-ia-3.vercel.app/pages/dashboard.html';

document
	.querySelector('.button-continue-google')
	.addEventListener('click', async () => {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: { redirectTo },
		});
	});
