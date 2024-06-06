
        // Datos simulados de ciudades por departamento
        const ciudadesPorDepartamento = {
            Paz: ["El Alto", "La Paz", "Viacha", "Achocalla", "Patacamaya", "Caranavi", "Apolo", "Achacachi"],
            Cochabamba: ["Cochabamba", "Sacaba", "Quillacollo","Tiquipaya", "Vinto","Villa Tunari", "Colcapirhua","Sipe Sipe", "Puerto Villarroel","Entre Ríos","Punata","Mizque","Aiquile","Cliza", "Chimore","Shinaota"],
            Santa: ["Santa Cruz de la Sierra", "Warnes", "Montero","La Guardia","Yapacaní","San Julián","Puerto Suárez","Ascensión de Guarayos","San Ignacio de Velasco","Mineros","Cotoca","El Torno","Portachuelo","Concepción","San José de Chiquitos","Pailón","Vallegrande","Cuatro Cañadas","Mairana","Roboré" ],
            Oruro: ["Oruro", "Challapata", "Huanuni"],
            Pando: ["Cobija"],
            Beni: ["Trinidad", "Riberalta", "Guayaramerin", "San Borja", "Santa Ana del Yacuma", "Rurrenabaque", "San Ignacio de Moxos"],
            Tarija: ["Tarija", "Yacuiba", "Villamontes","Bermejo"],
            Chuquisaca: ["Sucre", "Monteagudo"],
            Potosí: ["Potosí", "Llallagua", "Villazón", "Tupiza", "Uyuni"]
        };
    
        function actualizarCiudades() {
            const departamentoSeleccionado = document.getElementById("pais").value;
            const ciudadDropdown = document.getElementById("ciudad");
          // Limpiar las opciones de la lista desplegable de ciudades
            ciudadDropdown.innerHTML = "";
          // Obtener las ciudades correspondientes al departamento seleccionado
            const ciudades = ciudadesPorDepartamento[departamentoSeleccionado];
          // Agregar las nuevas opciones a la lista desplegable de ciudades
            if (ciudades) {
            ciudades.forEach(function(ciudad) {
                const opcion = document.createElement("option");
                opcion.text = ciudad;
                opcion.value = ciudad;
                ciudadDropdown.add(opcion);
            });
            } else {
            // Si no se ha seleccionado un departamento válido, mostrar un mensaje
            const opcion = document.createElement("option");
            opcion.text = "Selecciona un departamento primero";
            opcion.disabled = true;
            opcion.selected = true;
            ciudadDropdown.add(opcion);
            }
        }