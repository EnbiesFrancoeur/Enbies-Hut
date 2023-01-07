// const mahasiswa = {
//   nama: "Nicolas Batara",
//   nrp: "123456789",
//   email: "batara_nicolas@yahoo.com"
// }
// console.log(JSON.stringify(mahasiswa));



// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     let mahasiswa = JSON.parse(this.responseText);
//     console.log(mahasiswa);
//   }
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();


// $.getJSON('coba.json', function (data) {
//   console.log(data);
// });

function showAllMenu() {
  $.getJSON('pizza.json', function (data) {
    let menu = data.menu;
    $.each(menu, function (i, data) {
      $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/' + data.gambar + '"class="card-img-top" style="height:400px"><div class="card-body" style="height:200px"><h5 class="card-title">' + data.nama + ' </h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title"> Rp ' + data.harga + '</h5><a href="#" class="btn btn-primary">Order now</a></div></div></div>');
    });
  });
}
showAllMenu();


$('.nav-link').on('click', function () {
  $('.nav-link').removeClass('active');
  $(this).addClass('active');

  let kategori = $(this).html();
  $('h1').html(kategori);


  $.getJSON('pizza.json', function (data) {
    let menu = data.menu;
    let content = '';

    $.each(menu, function (i, data) {
      if (data.kategori == kategori.toLowerCase()) {
        content += '<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/' + data.gambar + '"class="card-img-top" style="height:400px"><div class="card-body"  style="height:200px"><h5 class="card-title">' + data.nama + ' </h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title"> Rp ' + data.harga + '</h5><a href="#" class="btn btn-primary">Order now</a></div></div></div>';
      };
    });
    $('#daftar-menu').html(content);

    if (kategori == 'All menu') {
      showAllMenu();
    }
  });
});


