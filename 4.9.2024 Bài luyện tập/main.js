const danhSachSinhVien = new DanhSachSinhVien();

function ThemSinhVien() {
    const maSV = document.getElementById('masv').value;
    const hoTen = document.getElementById('hoten').value;
    const gioiTinh = document.querySelector('input[name="gender"]:checked').value;
    const ngaySinh = document.getElementById('ngaysinh').value;
    const queQuan = document.getElementById('location').value;

    const sv = new SinhVien(maSV, hoTen, gioiTinh, ngaySinh, queQuan);
    danhSachSinhVien.themSinhVien(sv);
    hienThiDanhSachSinhVien();
}

function XoaSinhVien() {
    const maSV = prompt('Nhập mã sinh viên cần xóa:');
    danhSachSinhVien.xoaSinhVien(maSV);
    hienThiDanhSachSinhVien();
}

function hienThiDanhSachSinhVien() {
    const tbody = document.getElementById('tbodySinhVien');
    tbody.innerHTML = '';
    danhSachSinhVien.danhSach.forEach(sv => {
        let gioiTinh = sv.gioiTinh == 1 ? 'Nam' : 'Nữ';
        tbody.innerHTML += `
            <tr>
                <td></td>
                <td>${sv.maSV}</td>
                <td>${sv.hoTen}</td>
                <td>${gioiTinh}</td>
                <td>${sv.ngaySinh}</td>
                <td>${sv.queQuan}</td>
            </tr>
        `;
    });
}

function TimKiemSinhVien() {
    const tuKhoa = document.getElementById('tukhoa').value;
    const ketQua = danhSachSinhVien.timKiemSinhVien(tuKhoa);
}