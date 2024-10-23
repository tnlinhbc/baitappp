window.onload = function () {
    var params = new URLSearchParams(window.location.search);
    var hoTen = params.get('hoTen');
    var tuoi = params.get('tuoi');
    var gioiTinh = params.get('gioiTinh');
    var diaChi = params.get('diaChi');
    var tinh = params.get('tinh');
    var soThich = params.get('soThich');
    var noiDung = params.get('noiDung');
    document.getElementById("hoTen").innerHTML = '<p><span><b>Họ tên: </b></span>' + hoTen + '<p>';
    document.getElementById("tuoi").innerHTML = '<p><span><b>Tuổi: </b></span>' + tuoi + '<p>';
    document.getElementById("gioiTinh").innerHTML = '<p><span><b>Giới tính: </b></span>' + gioiTinh + '<p>';
    document.getElementById("diaChi").innerHTML = '<p><span><b>Địa chỉ: </b></span>' + diaChi + '<p>';
    document.getElementById("tinh").innerHTML = '<p><span><b>Tỉnh: </b></span>' + tinh + '<p>';
    document.getElementById("soThich").innerHTML = '<p><span><b>Sở thích: </b></span>' + soThich + '<p>';
    document.getElementById("noiDung").innerHTML = '<p><span><b>Nội dung: </b></span>' + noiDung + '<p>';

}