const SUPABASE_URL = "https://ldwdtzwqybjdwbbdmnql.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_iCru3UduBGUT1WgC8m33lA_YVk5FhlC";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let authMode = "login";

function openAuth(mode = "login") {
    authMode = mode;
    updateAuthUI();
    document.getElementById("authOverlay").classList.add("active");
    document.getElementById("authEmail")?.focus();
}

function closeAuth() {
    document.getElementById("authOverlay").classList.remove("active");
    clearAuthMessage();
}

function openSettings() {
    document.getElementById("settingsOverlay").classList.add("active");
}

function closeSettings() {
    document.getElementById("settingsOverlay").classList.remove("active");
}

function setTheme(theme) {
    if (theme === "light") {
        document.body.classList.add("light");
        localStorage.setItem("hylodia-theme", "light");
    } else {
        document.body.classList.remove("light");
        localStorage.setItem("hylodia-theme", "dark");
    }
}

// Initial Theme Load
if (localStorage.getItem("hylodia-theme") === "light") {
    document.body.classList.add("light");
}