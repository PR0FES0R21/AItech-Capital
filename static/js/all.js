function activateLogo(button) {
    const buttons = document.querySelectorAll('.button-menu');
    
    // Menghapus kelas 'active' dari semua tombol-menu
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Menambahkan kelas 'active' pada tombol yang diklik
    button.classList.add('active');
}
