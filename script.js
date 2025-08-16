document.addEventListener('DOMContentLoaded', () => {
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseContent = document.getElementById('surpriseContent');
    const surpriseVideo = document.getElementById('surpriseVideo');
    const surpriseAudio = document.getElementById('surpriseAudio');
    
    if (surpriseBtn && surpriseContent && surpriseVideo) {
        surpriseBtn.addEventListener('click', () => {
            // สลับการแสดงผลของเนื้อหาเซอร์ไพรส์
            surpriseContent.classList.toggle('hidden');

            if (!surpriseContent.classList.contains('hidden')) {
                // ถ้าเนื้อหาแสดงขึ้นมา ให้เริ่มเล่นวิดีโอและเพลง
                surpriseVideo.play();
                surpriseAudio.play();
            } else {
                // ถ้าเนื้อหาถูกซ่อน ให้หยุดวิดีโอและเพลง
                surpriseVideo.pause();
                surpriseVideo.currentTime = 0; // ย้อนกลับไปต้นวิดีโอ
                surpriseAudio.pause();
                surpriseAudio.currentTime = 0; // ย้อนกลับไปต้นเพลง
            }
        });
    }
});