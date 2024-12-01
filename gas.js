$(function () {
    // 1. Menambahkan efek fade-in ke semua gambar di galeri setelah halaman dimuat
    $(".gallery img").css("opacity", 0).animate({ opacity: 1 }, 1000);
  
    // 2. Menampilkan modal saat gambar di galeri diklik
    $(".gallery img").on("click", function () {
      const imgSource = $(this).attr("src");
      $("#modalImage").attr("src", imgSource);
      $("#imageModal").fadeIn(300);
    });
  
    // 3. Menutup modal ketika tombol "Close" diklik
    $(".close").on("click", function () {
      $("#imageModal").fadeOut(300);
    });
  
    // 4. Menutup modal ketika area luar gambar diklik
    $("#imageModal").on("click", function (event) {
      if (event.target.id === "imageModal") {
        $(this).fadeOut(300);
      }
    });
  });