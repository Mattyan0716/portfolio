const menuButton = document.getElementById('menuButton');
const menuOverlay = document.getElementById('menuOverlay');

// メニューボタンのクリックでオーバーレイを表示・非表示
menuButton.addEventListener('click', () => {
    menuOverlay.classList.toggle('active');
});

// オーバーレイのクリックで非表示にする
menuOverlay.addEventListener('click', (event) => {
    if (event.target === menuOverlay) {
        menuOverlay.classList.remove('active');
    }
});
