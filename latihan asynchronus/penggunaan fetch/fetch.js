// PENGGUNAAN FETCH DAN CALLBACK PART 2
// API OMDB https://www.omdbapi.com/?i=tt3896198&apikey=a78cf8b
// www.omdbapi.com/?apikey[yourkey]&

// request data dengan ajax
// untuk  api selalu ada http INGAT

let judul = "";
const royanCard = document.querySelector(".row.royan-card");

$(".favian-dibunuh").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=a78cf8b&s=" +
      $(".favian-membunuh-sammy").val(),
    success: (results) => {
      const movies = results.Search;
      let cards = "";
      movies.forEach((e) => {
        cards += /* html */ `
            <div class="col-md-4 my-3">
                <div class="card">
                  <img src="${e.Poster}" class="card-img-top" alt="${e.Title}" />
                  <div class="card-body">
                    <h5 class="card-title">${e.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${e.Year}</h6>
                    <a href="#" class="btn btn-primary favian-bunuh-diri" data-bs-toggle="modal"
                    data-bs-target="#movieDetailModal" data-imdb = "${e.imdbID}">Show Detail</a>
                  </div>
                </div>
              </div>
            `;

        // Ganti insertAdjacentElement dengan insertAdjacentHTML
      });

      // menggunakan fungsi jquery
      $(".row.royan-card").html(cards);

      // ketika tombol detail di klik
      $(".favian-bunuh-diri").on("click", function () {
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=a78cf8b&i=" + $(this).data("imdb"),
          success: (m) => {
            const movieDetail = /* html */ `
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-3">
                      <img src="${m.Poster}" class="img-fluid" />
                    </div>
                    <div class="col-md">
                      <ul class="list-group">
                        <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                        <li class="list-group-item">
                          <strong>Director : </strong> ${m.Director}
                        </li>
                        <li class="list-group-item">
                          <strong>Actor : </strong> ${m.Actors}
                        </li>
                        <li class="list-group-item">
                          <strong>Writers : </strong>${m.Writer}
                        </li>
                        <li class="list-group-item">
                          <strong>Plot : </strong> <br />
                          ${m.Plot}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                `; //bisa di ubah ke function agar lebih rapi barisan kodenya

            $(".modal-body").html(movieDetail);
          },
          error: () => {
            alert("No Detail Founded");
          },
        });
      });
    },
    error: () => {
      alert("invalid api key");
    },
  });
});

$(".favian-membunuh-sammy").on("keypress", function (event) {
  if (event.which === 13) {
    $.ajax({
      url:
        "http://www.omdbapi.com/?apikey=a78cf8b&s=" +
        $(".favian-membunuh-sammy").val(),
      success: (results) => {
        const movies = results.Search;
        let cards = "";
        movies.forEach((e) => {
          cards += /* html */ `
                    <div class="col-md-4 my-3">
                        <div class="card">
                          <img src="${e.Poster}" class="card-img-top" alt="${e.Title}" />
                          <div class="card-body">
                            <h5 class="card-title">${e.Title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${e.Year}</h6>
                            <a href="#" class="btn btn-primary favian-bunuh-diri" data-bs-toggle="modal"
                            data-bs-target="#movieDetailModal" data-imdb = "${e.imdbID}">Show Detail</a>
                          </div>
                        </div>
                      </div>
                    `;

          // Ganti insertAdjacentElement dengan insertAdjacentHTML
        });

        // menggunakan fungsi jquery
        $(".row.royan-card").html(cards);

        // ketika tombol detail di klik
        $(".favian-bunuh-diri").on("click", function () {
          $.ajax({
            url:
              "http://www.omdbapi.com/?apikey=a78cf8b&i=" +
              $(this).data("imdb"),
            success: (m) => {
              const movieDetail = /* html */ `
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-md-3">
                              <img src="${m.Poster}" class="img-fluid" />
                            </div>
                            <div class="col-md">
                              <ul class="list-group">
                                <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                                <li class="list-group-item">
                                  <strong>Director : </strong> ${m.Director}
                                </li>
                                <li class="list-group-item">
                                  <strong>Actor : </strong> ${m.Actors}
                                </li>
                                <li class="list-group-item">
                                  <strong>Writers : </strong>${m.Writer}
                                </li>
                                <li class="list-group-item">
                                  <strong>Plot : </strong> <br />
                                  ${m.Plot}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        `; //bisa di ubah ke function agar lebih rapi barisan kodenya

              $(".modal-body").html(movieDetail);
            },
            error: () => {
              alert("No Detail Founded");
            },
          });
        });
      },
      error: () => {
        alert("invalid api key");
      },
    });
  }
});
