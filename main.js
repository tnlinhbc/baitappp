function kiemTra() {
    var hoTen = document.frmYKien.hoTen.value;
    var tuoi = parseInt(document.frmYKien.tuoi.value);
    var Tuoi = document.frmYKien.tuoi.value;
    var gioiTinh = document.frmYKien.gioiTinh.value;
    var diaChi = document.frmYKien.diaChi.value;
    var tinh = document.frmYKien.tinh.value;
    var checkbox = document.frmYKien.soThich;
    var st = document.getElementById("st");
    var noiDung = document.frmYKien.noiDung.value;
    var soThich = "";
    if (hoTen == '') {
        alert('Nhập họ tên');
        document.frmYKien.hoTen.focus();
        return false;
    }
    else
        if (hoTen.length < 8) {
            alert('Họ tên ít nhất 8 ký tự');
            document.frmYKien.hoTen.focus();
            return false;
        }
    if (Tuoi == "") {
        alert('Nhập tuổi');
        document.frmYKien.tuoi.focus();
        return false;
    }
    else
        if (tuoi < 15) {
            alert('Ít nhất phải 15 tuổi');
            document.frmYKien.tuoi.focus();
            return false;
        }
    if (gioiTinh == 'chon') {
        alert('Chọn giới tính');
        return false;
    }
    if (diaChi == '') {
        alert('Nhập dịa chỉ');
        document.frmYKien.diaChi.focus();
        return false;
    }
    if (tinh == 'chon') {
        alert('Chọn tỉnh');
        return false;
    }
    if (st.checked == false) {
        alert('Chọn sở thích');
        return false;
    }
    alert("Cám ơn bạn đã góp ý");
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked === true) {
            soThich += checkbox[i].value + ",";
        }
    }
    var thongTin = '?hoTen=' + encodeURIComponent(hoTen) +
        '&tuoi=' + encodeURIComponent(tuoi) +
        '&gioiTinh=' + encodeURIComponent(gioiTinh) +
        '&diaChi=' + encodeURIComponent(diaChi) +
        '&tinh=' + encodeURIComponent(tinh) +
        '&soThich=' + encodeURIComponent(soThich) +
        '&noiDung=' + encodeURIComponent(noiDung);
    window.location.href = 'thongTin.html' + thongTin;

}
function bq() {
    var bieuQuyet = document.frmBieuQuyet.bieuQuyet.value;
    if (bieuQuyet == '') {
        alert("Vui lòng biểu quyết");
        return false;
    }
    if (bieuQuyet == 'Mục thông tin thống kê') {
        alert("Biểu quyết Mục thông tin thống kê");
        return false;
    } if (bieuQuyet == 'Niên giám thống kê') {
        alert("Biểu quyết Niên giám thống kê");
        return false;
    } if (bieuQuyet == 'Tin tức - sự kiện ngành thống kê') {
        alert("biểu quyết Tin tức - sự kiện ngành thống kê");
        return false;
    } if (bieuQuyet == 'Kết quả điều tra') {
        alert("Biểu quyết Kết quả điều tra");
        return false;
    } if (bieuQuyet == 'Khác') {
        alert("biểu quyết Khác");
        return false;
    }
}
function xkq() {
    alert('Kết quả đang cập nhật');
}