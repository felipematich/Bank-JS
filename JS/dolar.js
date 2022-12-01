dolarOficialCompra = document.getElementById("dolarOficialCompra");
dolarOficialVenta = document.getElementById("dolarOficialVenta");
dolarblueCompra = document.getElementById("dolarblueCompra");
dolarblueVenta = document.getElementById("dolarblueVenta");
dolarbolsaCompra = document.getElementById("dolarbolsaCompra");
dolarbolsaVenta = document.getElementById("dolarbolsaVenta");
dolarturistaVenta = document.getElementById("dolarturistaVenta");

fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    dolarOficialCompra.innerHTML = `<p>$${data[0].casa.compra}</p>`
    dolarOficialVenta.innerHTML = `<p>$${data[0].casa.venta}</p>`
    dolarblueCompra.innerHTML = `<p>$${data[1].casa.compra}</p>`
    dolarblueVenta.innerHTML = `<p>$${data[1].casa.venta}</p>`
    dolarbolsaCompra.innerHTML = `<p>$${data[4].casa.compra}</p>`
    dolarbolsaVenta.innerHTML = `<p>$${data[4].casa.venta}</p>`
    dolarturistaVenta.innerHTML = `<p>$${data[6].casa.venta}</p>`
  });






