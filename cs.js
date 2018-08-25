"use strict";

setInterval(() => {
  let itens = document.querySelectorAll('div.soldout_property[data-hotelid]');
  if (!itens.length) return;
  console.log(`${itens.length} itens founded`);
  itens.forEach(item => item.remove());
}, 2000);
