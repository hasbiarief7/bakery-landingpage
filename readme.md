# Bakery Landing Page (React JS)

Buat sebuah website modern menggunakan React JS + Vite yang tampilannya semirip mungkin dengan desain referensi.

## Teknologi

- React JS (Vite)
- React Router DOM
- CSS Modules / SCSS (lebih disarankan)
- React Icons
- Framer Motion untuk animasi
- SwiperJS untuk slider hero
- Responsive Desktop, Tablet, Mobile
- Tidak menggunakan Bootstrap.
- Gunakan Flexbox dan CSS Grid.

## Struktur Folder

```
src/
│
├── assets/
│   ├── images/
│   ├── icons/
│
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Features/
│   ├── Promo/
│   ├── Specials/
│   ├── Categories/
│   ├── Story/
│   ├── Services/
│   ├── Testimonials/
│   ├── Footer/
│   ├── Buttons/
│   ├── Cards/
│
├── pages/
│   └── Home.jsx
│
├── styles/
│
├── App.jsx
└── main.jsx
```

## Color Palette

Gunakan warna yang identik.

| Warna | Hex |
|-------|-----|
| **Primary** | `#5B2D1E` |
| **Secondary** | `#F7A63A` |
| **Background** | `#FFF7F2` |
| **Cream** | `#FDEBD8` |
| **Pink** | `#FFA8A8` |
| **Light Blue** | `#C9F0FF` |
| **Yellow** | `#FFD76D` |
| **White** | `#FFFFFF` |
| **Text** | `#2B2B2B` |

## Typography

| Jenis | Font |
|-------|------|
| **Heading** | Baloo 2 atau Fredoka |
| **Body** | Poppins |

## Navbar

### Desktop

- **Kiri:** Logo — `impecify.com`
- **Tengah:** Menu — Home, About, Products, Recipes, Contact
- **Kanan:** Search Icon, Cart Icon, Button "Book a Table"

- Navbar sticky.
- Hover animation.

## Hero Section

- **Layout:** 2 Column — Kiri 45%, Kanan 55%
- **Background:** Dark Brown, `border-radius: 40px`
- Padding besar.

### Isi Kiri

- **Judul:** SWEET DELIGHT!
- **Subtitle:** Deskripsi bakery.
- **Rating:** 4.9 — Since 1995
- **CTA:** Order Now

### Isi Kanan

- Cookie besar memenuhi area.
- Tambahkan floating decorative dots.
- Tambahkan icon cookie kecil kiri atas.
- Tambahkan indikator slider.
- Hero memiliki animasi fade.

## Feature Cards

4 Card sejajar.

- **Card**
  - **Radius:** 25px
  - Shadow lembut.
- **Isi:**
  1. Premium Ingredients — Icon + Deskripsi
  2. Baked Fresh Daily
  3. Made With Love
  4. 100% Natural & Healthy
- **Warna masing-masing card berbeda:** Cream, Pink, Blue, Yellow
- **Hover:** Naik 10px.

## Promo Section

### Layout — 2 Card

#### Card Kiri (60%)

- Background cream.
- **Isi:** Donut besar, Text "20% OFF", Button "Claim Discount"

#### Card Kanan

- Dark Brown.
- **Today's Special**
  - Chocolate Brownie
  - Cream Doughnut
  - Berry Cupcake
- **Button:** View Menu

## Categories

- **Judul:** Explore Our Delicious Creations
- **Button kanan:** View All

### Grid — 6 Kategori

Setiap kategori memiliki: Lingkaran, Foto, Nama.

1. Cupcakes
2. Brownies
3. Doughnuts
4. Pastries
5. Cookies
6. Muffins

**Hover:** Scale 1.08

## Story Section

**Layout:** 2 Kolom

### Kiri

- **Heading:** Our Story, Baked With Love
- Paragraf.
- Button "Learn More"

### Kanan

- Foto baker (lingkaran besar).
- Badge: "Freshly Baked Everyday"
- Animasi floating.

## Services

- **Background:** Dark Brown
- **4 item:**
  1. Fast Delivery
  2. Secure Payment
  3. 100% Fresh
  4. 24/7 Support
- Setiap item: icon putih, text putih.

## Mobile Sidebar

Saat `width < 768px`:

- Navbar berubah.
- Hamburger.
- Sidebar slide.
- Menu + Search + Button.

## Mobile Layout

- Hero menjadi vertical.
- Cookie menjadi full width.
- Feature: 2 kolom.
- Promo: Stack.
- Story: Stack.
- Footer: Stack.
- Padding: 20px.

## Desktop Layout

- **Container:** `max-width: 1400px; margin: auto; padding: 40px;`
- **Gap:** 32px.
- Border radius besar.

## Right Floating Panel (Desktop)

Seperti referensi.

- **Lebar:** 340px
- **Posisi:** Sticky
- **Berisi:** Hero Mini, Promo Mini, Story Mini, Categories Mini, Menu Mini, Testimonials, Footer Mini
- Saat tablet dan mobile panel ini hilang.

## Footer

- **Background:** Dark Brown
- **Kiri:** Logo + Deskripsi
- **Tengah:** Quick Links, Support
- **Kanan:** Social Media, Copyright
- Tambahkan gambar pastry di kiri bawah.

## Animation

Gunakan Framer Motion.

| Elemen | Animasi |
|--------|---------|
| Navbar | Slide Down |
| Hero | Fade Up |
| Card | Scale Hover |
| Button | Ripple Hover |
| Image | Float |
| Testimonials | Fade |
| Scroll | Reveal |

## Button Style

### Primary

- Background Orange
- Text putih
- Radius: 999px
- Hover: sedikit membesar + shadow

### Secondary

- Outline Brown
- Hover: Brown

## Cards

- **Radius:** 24px
- **Shadow:** `0 10px 30px rgba(0,0,0,.08)`
- **Hover:** `translateY(-10px)`

## Responsive Breakpoints

| Device | Width |
|--------|-------|
| Desktop | 1400px |
| Laptop | 1200px |
| Tablet | 992px |
| Tablet kecil | 768px |
| Mobile | 576px |
| Small Mobile | 375px |

## Image Style

- Semua gambar: `object-fit: cover`
- Lazy Loading
- Rounded

## SEO

Gunakan semantic HTML:

- `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Tambahkan meta title
- Meta description

## Performance

- Gunakan lazy loading
- Code splitting
- Reusable components
- Memo jika perlu

## Clean Code

- Pisahkan seluruh section menjadi component.
- Gunakan props.
- Tidak boleh ada inline CSS.
- Gunakan CSS Module.
- Naming konsisten.
- Folder rapi.

## Hasil yang Diharapkan

Website harus terlihat premium seperti landing page bakery modern.

Mengikuti layout referensi:
- Hero besar dengan cookie
- Feature cards warna-warni
- Promo 20%
- Today's Special
- Explore Categories
- Story
- Services
- Floating right sidebar
- Footer premium

Desain harus memiliki white space yang luas, rounded corner besar, ilustrasi makanan berkualitas tinggi, animasi halus, dan sepenuhnya responsive pada desktop, tablet, dan mobile.
