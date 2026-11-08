// ====== PENGATURAN USAHA (ganti sesuai usahamu) ======
const NOMOR_WA = '6281398863711'; // format: 62 + nomor tanpa 0 di depan
const NAMA_USAHA = 'Kedai Nusa Rasa';

// Foto menu: foto ditaruh di folder yang SAMA dengan index.html.
// Di setiap menu, tulis nama file fotonya TANPA .jpg di bagian foto: '...'
// Ekstensi dicari otomatis (jpg, jpeg, png, webp, jfif). Kalau foto tidak ketemu, kartu memakai huruf awal berwarna.
const FOLDER_FOTO = '';
const EKSTENSI = ['jpg', 'jpeg', 'png', 'webp', 'jfif'];
function fotoGagal(img) {
  const i = +img.dataset.i + 1;
  if (i < EKSTENSI.length) { img.dataset.i = i; img.src = FOLDER_FOTO + img.dataset.b + '.' + EKSTENSI[i]; }
  else img.remove();
}

const MENU = [
  // --- Makanan ---
  { id: 1, nama: 'Nasi Ayam Bakar Madu', kat: 'makanan', harga: 25000, tag: 'Terlaris', desc: 'Ayam bakar bumbu madu, nasi hangat, lalapan, dan sambal.', foto: 'ayam bakar madu' },
  { id: 2, nama: 'Nasi Rendang Sapi', kat: 'makanan', harga: 32000, desc: 'Rendang empuk berbumbu pekat dengan nasi dan daun singkong.', foto: 'rendang sapi' },
  { id: 3, nama: 'Soto Ayam Kuning', kat: 'makanan', harga: 20000, desc: 'Kuah kuning gurih, suwiran ayam, telur, dan soun.', foto: 'soto ayam kuning' },
  { id: 4, nama: 'Mie Goreng Jawa', kat: 'makanan', harga: 18000, desc: 'Mie goreng manis gurih dengan telur dan sayuran.', foto: 'mie goreng jawa' },
  { id: 10, nama: 'Nasi Campur Bali', kat: 'makanan', harga: 45000, desc: 'Nasi dengan aneka lauk khas Bali: ayam suwir, sate lilit, lawar, dan sambal matah.', foto: 'nasi campur bali' },
  { id: 11, nama: 'Nasi Rawon', kat: 'makanan', harga: 30000, desc: 'Daging sapi berkuah hitam kluwek khas Jawa Timur, dengan tauge dan telur asin.', foto: 'nasi rawon' },
  { id: 12, nama: 'Nasi Ayam Betutu', kat: 'makanan', harga: 35000, desc: 'Ayam berbumbu rempah khas Bali yang dimasak empuk, disajikan dengan nasi dan sambal.', foto: 'nasi ayam betutu' },
  { id: 13, nama: 'Gudeg', kat: 'makanan', harga: 30000, desc: 'Nangka muda manis khas Yogyakarta dengan ayam, telur, krecek, dan nasi.', foto: 'gudeg' },
  { id: 14, nama: 'Mie Aceh', kat: 'makanan', harga: 25000, desc: 'Mie tebal berbumbu rempah khas Aceh, pedas gurih, dengan irisan daging.', foto: 'mie aceh' },
  // --- Minuman ---
  { id: 5, nama: 'Es Teh Tarik Nusa', kat: 'minuman', harga: 12000, desc: 'Teh pekat dengan susu, disajikan dingin.', foto: 'es teh tarik' },
  { id: 6, nama: 'Es Kopi Gula Aren', kat: 'minuman', harga: 15000, tag: 'Favorit', desc: 'Kopi susu dengan gula aren yang manisnya pas.', foto: 'es kopi gula aren' },
  { id: 7, nama: 'Wedang Jahe Serai', kat: 'minuman', harga: 10000, desc: 'Minuman hangat jahe dan serai untuk menenangkan badan.', foto: 'wedang jahe serai' },
  { id: 15, nama: 'Air Mineral', kat: 'minuman', harga: 7000, desc: 'Air mineral kemasan yang segar dan menyegarkan.', foto: 'air mineral' },
  { id: 16, nama: 'Es Kelapa', kat: 'minuman', harga: 10000, desc: 'Kelapa muda serut dengan sirup dan es batu.', foto: 'es kelapa' },
  { id: 17, nama: 'Es Campur', kat: 'minuman', harga: 15000, desc: 'Aneka isian buah, cincau, dan kelapa muda dengan sirup dan susu.', foto: 'es campur' },
  { id: 18, nama: 'Es Cendol', kat: 'minuman', harga: 13000, desc: 'Cendol hijau dengan santan, gula merah cair, dan es serut.', foto: 'es cendol' },
  { id: 19, nama: 'Es Teler', kat: 'minuman', harga: 15000, desc: 'Alpukat, nangka, dan kelapa muda dengan susu dan sirup.', foto: 'es teler' },
  { id: 20, nama: 'Bir Pletok', kat: 'minuman', harga: 15000, desc: 'Minuman rempah khas Betawi dari jahe, secang, dan kayu manis. Tanpa alkohol.', foto: 'bir pletok' },
  { id: 21, nama: 'Teh Talua', kat: 'minuman', harga: 10000, desc: 'Teh telur khas Minang: kocokan kuning telur, teh, dan gula.', foto: 'teh talua' },
  // --- Camilan ---
  { id: 8, nama: 'Pisang Goreng Keju', kat: 'camilan', harga: 15000, desc: 'Pisang goreng renyah dengan keju parut dan susu.', foto: 'pisang goreng keju' },
  { id: 9, nama: 'Tahu Crispy Sambal', kat: 'camilan', harga: 13000, desc: 'Tahu goreng tepung renyah dengan sambal kecap.', foto: 'tahu crispy sambal' },
  { id: 22, nama: 'French Fries', kat: 'camilan', harga: 20000, desc: 'Kentang goreng renyah dengan saus sambal dan mayones.', foto: 'ff' }
];

const $ = s => document.querySelector(s);
const rp = n => 'Rp ' + n.toLocaleString('id-ID');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
let keranjang = {}, kategori = 'semua';
try { keranjang = JSON.parse(localStorage.getItem('nusarasa_keranjang') || '{}'); } catch { keranjang = {}; }

function toast(pesan) { const t = $('#toast'); t.textContent = pesan; t.classList.add('on'); setTimeout(() => t.classList.remove('on'), 1800); }
function simpan() { try { localStorage.setItem('nusarasa_keranjang', JSON.stringify(keranjang)); } catch {} }

// ====== MENU ======
function tampilMenu() {
  const daftar = MENU.filter(m => kategori === 'semua' || m.kat === kategori);
  $('#daftarMenu').innerHTML = daftar.map(m => `
    <div class="kartu">
      <div class="kartu-atas ${m.kat}"><span class="inisial">${esc(m.nama[0])}</span>${m.foto ? `<img data-b="${encodeURI(m.foto)}" data-i="0" src="${FOLDER_FOTO}${encodeURI(m.foto)}.${EKSTENSI[0]}" alt="${esc(m.nama)}" loading="lazy" onerror="fotoGagal(this)">` : ''}${m.tag ? `<span class="tag">${esc(m.tag)}</span>` : ''}</div>
      <div class="kartu-isi">
        <h3>${esc(m.nama)}</h3><p>${esc(m.desc)}</p>
        <div class="harga-baris"><span class="harga">${rp(m.harga)}</span><button class="btn btn-kecil" data-tambah="${m.id}">Tambah</button></div>
      </div>
    </div>`).join('');
}
$('#filter').onclick = e => {
  const b = e.target.closest('[data-kat]'); if (!b) return;
  kategori = b.dataset.kat;
  document.querySelectorAll('.chip').forEach(c => c.classList.toggle('aktif', c === b));
  tampilMenu();
};
$('#daftarMenu').onclick = e => {
  const b = e.target.closest('[data-tambah]'); if (!b) return;
  const id = b.dataset.tambah; keranjang[id] = (keranjang[id] || 0) + 1;
  simpan(); tampilKeranjang(); toast('Ditambahkan ke pesanan');
};

// ====== KERANJANG ======
function tampilKeranjang() {
  const ids = Object.keys(keranjang).filter(id => MENU.some(m => m.id == id));
  const jumlah = ids.reduce((s, id) => s + keranjang[id], 0);
  const total = ids.reduce((s, id) => s + keranjang[id] * MENU.find(m => m.id == id).harga, 0);
  $('#jumlah').textContent = jumlah; $('#total').textContent = rp(total);
  $('#isiKeranjang').innerHTML = ids.length ? ids.map(id => {
    const m = MENU.find(x => x.id == id);
    return `<div class="item"><div class="item-atas"><span>${esc(m.nama)}</span><span>${rp(m.harga * keranjang[id])}</span></div>
      <div class="qty"><button data-ubah="${id}" data-d="-1" aria-label="Kurangi">-</button><span>${keranjang[id]}</span><button data-ubah="${id}" data-d="1" aria-label="Tambah">+</button></div></div>`;
  }).join('') : '<p class="kosong">Belum ada pesanan. Pilih menu dulu, ya.</p>';
}
$('#isiKeranjang').onclick = e => {
  const b = e.target.closest('[data-ubah]'); if (!b) return;
  const id = b.dataset.ubah; keranjang[id] += +b.dataset.d;
  if (keranjang[id] <= 0) delete keranjang[id];
  simpan(); tampilKeranjang();
};
const buka = () => { document.body.classList.add('buka'); $('#keranjang').setAttribute('aria-hidden', 'false'); };
const tutup = () => { document.body.classList.remove('buka'); $('#keranjang').setAttribute('aria-hidden', 'true'); };
$('#bukaKeranjang').onclick = buka; $('#tutupKeranjang').onclick = tutup; $('#tirai').onclick = tutup;
document.onkeydown = e => { if (e.key === 'Escape') tutup(); };

// ====== KIRIM KE WHATSAPP ======
const bukaWA = teks => window.open(`https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(teks)}`, '_blank', 'noopener');
$('#kirimWA').onclick = () => {
  const ids = Object.keys(keranjang).filter(id => MENU.some(m => m.id == id));
  if (!ids.length) return toast('Pesanan masih kosong');
  const nama = $('#namaPemesan').value.trim();
  if (!nama) { $('#namaPemesan').focus(); return toast('Isi nama pemesan dulu'); }
  let total = 0;
  const baris = ids.map(id => { const m = MENU.find(x => x.id == id), sub = m.harga * keranjang[id]; total += sub; return `- ${m.nama} x${keranjang[id]} = ${rp(sub)}`; });
  const catatan = $('#catatan').value.trim();
  bukaWA(`Halo ${NAMA_USAHA}, saya ingin memesan:\n${baris.join('\n')}\n\nTotal: ${rp(total)}\nNama: ${nama}${catatan ? '\nCatatan: ' + catatan : ''}`);
};
$('#formKontak').onsubmit = e => {
  e.preventDefault();
  const f = new FormData(e.target);
  bukaWA(`Halo ${NAMA_USAHA}, saya ${f.get('nama')}.\n${f.get('pesan')}`);
};

// ====== AWAL ======
$('#tampilNomor').textContent = '+' + NOMOR_WA.replace(/^(\d{2})(\d{3})(\d{4})(\d+)$/, '$1 $2-$3-$4');
$('#tahun').textContent = new Date().getFullYear();
tampilMenu(); tampilKeranjang();