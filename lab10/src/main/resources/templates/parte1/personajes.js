// $(document).ready() para asegurar que todo cargue primero
$(document).ready(function() {

    // --- Variables para guardar el estado de la paginación ---
    var aotNextPageUrl = null;
    var aotPrevPageUrl = null;
    var dsNextPageUrl = null;
    var dsPrevPageUrl = null;

    // URLs base de las APIs
    var AOT_API_URL = "https://api.attackontitanapi.com/characters";
    var DS_API_URL = "https://www.demonslayer-api.com/api/v1/characters?limit=20";

    /**
     * ==========================================================
     * 1. LÓGICA DE ATTACK ON TITAN (AoT)
     * ==========================================================
     */
    function cargarAttackOnTitan(url) {

        // Usamos $.ajax() como en la Clase 12
        $.ajax({
            method: "GET",
            url: url,
            dataType: "json"
        })
            .done(function(data) { // Si la petición funciona
                var personajes = data.results;

                // Actualizamos el contador
                $("#aot-total").text(data.info.count);

                // Guardamos las URLs de paginación
                aotNextPageUrl = data.info.next_page;
                aotPrevPageUrl = data.info.prev_page;

                // Activamos o desactivamos los botones
                $("#aot-next").prop("disabled", !aotNextPageUrl);
                $("#aot-prev").prop("disabled", !aotPrevPageUrl);

                // Limpiamos la galería
                $("#aot-gallery").empty();

                // Recorremos los personajes y creamos el HTML
                personajes.forEach(function(char) {
                    // Creamos la "Card"
                    var cardHtml = `
                    <div class="card aot-card" data-id="${char.id}">
                        <img src="${char.img}" alt="${char.name}">
                        <h4>${char.name}</h4>
                        <p>Universo: Attack On Titan</p>
                    </div>
                `;
                    // Agregamos la card a la galería
                    $("#aot-gallery").append(cardHtml);
                });
            })
            .fail(function(err) { // Si la petición falla
                console.log("Error en AoT:", err);
                $("#aot-gallery").html("<p>Error al cargar datos.</p>");
            });
    }


    $("#aot-next").click(function() {
        if (aotNextPageUrl) {
            cargarAttackOnTitan(aotNextPageUrl);
        }
    });

    $("#aot-prev").click(function() {
        if (aotPrevPageUrl) {
            cargarAttackOnTitan(aotPrevPageUrl);
        }
    });

    $("#aot-filter-status").change(function() {
        var status = $(this).val();
        var filterUrl = AOT_API_URL;

        if (status) {
            filterUrl = AOT_API_URL + "?status=" + status;
        }

        cargarAttackOnTitan(filterUrl);
    });


    cargarAttackOnTitan(AOT_API_URL);


    function cargarDemonSlayer(url) {

        $.ajax({
            method: "GET",
            url: url,
            dataType: "json"
        })
            .done(function(data) {
                var personajes = data.content;


                $("#ds-total").text(data.pagination.totalElements);
                dsNextPageUrl = data.pagination.nextPage;
                dsPrevPageUrl = data.pagination.previousPage;
                $("#ds-next").prop("disabled", !dsNextPageUrl);
                $("#ds-prev").prop("disabled", !dsPrevPageUrl);
                $("#ds-gallery").empty();
                personajes.forEach(function(char) {

                    var cardHtml = `
                    <div class="card ds-card" data-id="${char.id}">
                        <img src="${char.img}" alt="${char.name}">
                        <h4>${char.name}</h4>
                        <p>Universo: Demon Slayer</p>
                    </div>
                `;
                    $("#ds-gallery").append(cardHtml);
                });
            })
            .fail(function(err) {
                console.log("Error en DS:", err);
                $("#ds-gallery").html("<p>Error al cargar datos.</p>");
            });
    }


    $("#ds-next").click(function() {
        if (dsNextPageUrl) {
            cargarDemonSlayer(dsNextPageUrl);
        }
    });

    $("#ds-prev").click(function() {
        if (dsPrevPageUrl) {
            cargarDemonSlayer(dsPrevPageUrl);
        }
    });


    cargarDemonSlayer(DS_API_URL);


    function poblarModal(objeto) {
        $("#modal-body").empty();


        for (var key in objeto) {
            var valor = objeto[key];


            if (typeof valor === 'object' && valor !== null) {
                valor = JSON.stringify(valor);
            }

            $("#modal-body").append("<p><strong>" + key + ":</strong> " + valor + "</p>");
        }

        $("#modal-fondo").show();
    }

    $("#aot-gallery").on("click", ".aot-card", function() {
        var charId = $(this).data("id");


        $.ajax({
            method: "GET",
            url: "https://api.attackontitanapi.com/characters/" + charId,
            dataType: "json"
        })
            .done(function(charData) {
                poblarModal(charData);
            });
    });


    $("#ds-gallery").on("click", ".ds-card", function() {
        var charId = $(this).data("id");


        $.ajax({
            method: "GET",
            url: "https://www.demonslayer-api.com/api/v1/characters?id=" + charId,
            dataType: "json"
        })
            .done(function(charData) {

                poblarModal(charData.content[0]);
            });
    });


    $("#btn-modal-cerrar").click(function() {
        $("#modal-fondo").hide();
    });

});