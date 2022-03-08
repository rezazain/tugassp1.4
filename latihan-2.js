function hitungVolumeDanLuasPermukaanBalok(p, l, t) {
  var volume;
  var luaspermukaan;

  volume = p * l * t;
  luaspermukaan = 2 * (p * l) + p * t + l * t;

  document.write("panjang balok : ", p + " &nbsp " + "//");
  document.write(" &nbsp " + "Lebar balok : ", l + " &nbsp " + " //");
  document.write(" &nbsp " + "Tinggi balok : ", t + " &nbsp " + "//");

  document.write(" &nbsp " + "volume balok : ", volume + " &nbsp " + "//");
  document.write(" &nbsp " + "luas balok : ", luaspermukaan);
}

hitungVolumeDanLuasPermukaanBalok(8, 24, 10);
