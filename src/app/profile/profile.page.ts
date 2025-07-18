import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {
  user = {
    photo: 'https://i.pravatar.cc/150?img=12'
  };

  nama: string = 'Andi Setiawan';
  jabatan: string = 'Staff IT';
  nik: string = '1234567890123456';
  npwp: string = '12.345.678.9-012.345';
  statusKepegawaian: string = 'Pegawai Tetap';
  email: string = 'andi.setiawan@example.com';
  noTelepon: string = '0812-3456-7890';
  keteranganSP: string = 'Tidak ada SP aktif';

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {}

  goTo(route: string) {
    switch (route) {
      case 'perusahaan':
        this.router.navigate(['/about']);
        break;
      case 'beranda':
        this.router.navigate(['/dashboard']);
        break;
      case 'pengaturan':
        this.router.navigate(['/pengaturan']);
        break;
      default:
        console.warn('Rute tidak dikenali:', route);
    }
  }

  goBack() {
    this.location.back();
  }
}

