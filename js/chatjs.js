
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const icon = document.querySelector('.icon');
    const toggleMode = document.querySelector('.toggle-mode');

    icon.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        toggleMode.innerHTML = body.classList.contains('dark-mode') ? '🌙' : '☀️';
    });
});

function showConfirmation() {
    alert("تم إرسال الرسالة بنجاح!");
    return false; // لإلغاء تحميل الصفحة بعد الضغط على زر "Send"
}