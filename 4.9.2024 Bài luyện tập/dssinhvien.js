class DanhSachSinhVien {
    constructor() {
        this.danhSach = this.layDanhSachTuLocalStorage();
    }

    themSinhVien(sv) {
        this.danhSach.push(sv);
        this.capNhatLocalStorage();
    }

    xoaSinhVien(maSV) {
        this.danhSach = this.danhSach.filter(sv => sv.maSV !== maSV);
        this.capNhatLocalStorage();
    }

    capNhatSinhVien(svMoi) {
        let index = this.danhSach.findIndex(sv => sv.maSV === svMoi.maSV);
        if (index !== -1) {
            this.danhSach[index] = svMoi;
            this.capNhatLocalStorage();
        }
    }

    layDanhSachTuLocalStorage() {
        let data = localStorage.getItem('DanhSachSinhVien');
        return data ? JSON.parse(data) : [];
    }

    capNhatLocalStorage() {
        localStorage.setItem('DanhSachSinhVien', JSON.stringify(this.danhSach));
    }

    timKiemSinhVien(tuKhoa) {
        return this.danhSach.filter(sv => sv.hoTen.toLowerCase().includes(tuKhoa.toLowerCase()));
    }
}
        