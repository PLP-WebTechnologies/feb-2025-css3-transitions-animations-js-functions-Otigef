// Theme Management
        function initializeTheme() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            document.body.classList.toggle('dark-theme', savedTheme === 'dark');
            document.getElementById('themeToggle').checked = savedTheme === 'dark';
        }

        function toggleTheme() {
            const isDark = document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }

        // Like System
        function handleLike() {
            const likeCount = parseInt(localStorage.getItem('likeCount') || 0) + 1;
            localStorage.setItem('likeCount', likeCount);
            document.getElementById('likeCount').textContent = likeCount;
        }

        // Initialize
        window.onload = () => {
            initializeTheme();
            document.getElementById('likeCount').textContent = 
                localStorage.getItem('likeCount') || 0;
        };