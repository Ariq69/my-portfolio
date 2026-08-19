import Work1 from "../../assets/work1.png";
import Work2 from "../../assets/work2.png";
import Work3 from "../../assets/work3.png";

// Gambar Detail E-HAJI
import loginEhaji from "../../assets/loginEhaji.png";
import consentEhaji from "../../assets/consentEhaji.png";
import asesmenSpritualEhaji from "../../assets/asesmenSpritualEhaji.png";
import dialisisEhaji from "../../assets/dialisisEhaji.png";
import formMcuEhaji from "../../assets/formMcuEhaji.png";
import gabungBerkasEhaji from "../../assets/gabungBerkasEhaji.png";
import mmpiEhaji from "../../assets/mmpiEhaji.png";
import pemberianObatEhaji from "../../assets/pemberianObatEhaji.png";

export const projectsData = [
  {
    id: 3,
    image: [
      Work3,
      loginEhaji,
      consentEhaji,
      asesmenSpritualEhaji,
      dialisisEhaji,
      formMcuEhaji,
      gabungBerkasEhaji,
      mmpiEhaji,
      pemberianObatEhaji,
    ],
    title: "E-HAJI Khanza",
    category: "real project",
    link: "#",
    description:
      "Development of the EMR Module for the SIMRS Khanza RSUIN Jakarta Web-Based Application",
    longDescription:
      "E-HAJI Khanza is a development module of the Electronic Medical Record (EMR) system within the SIMRS Khanza at RSUIN Jakarta, built as a web-based application. This application was developed by the IT Development team, and I contributed to the development of several features using CodeIgniter 3 as the application’s primary framework. E-HAJI Khanza is used by all nursing staff to record patients electronic medical records, for both outpatient and inpatient services.",
    techStack: ["Codeigniter 3", "Bootstrap", "MySQL", "jQuery", "Javascript"],
    date: "Jan 2025 - Present",
  },
  {
    id: 2,
    image: [Work2],
    title: "Sumare ERP Software Landing Page",
    category: "dummy project",
    link: "https://ariq69.github.io/Encryptix/task1",
    description:
      "Developed the landing page for the Sumare ERP Software project using HTML, CSS, and JavaScript.",
    longDescription:
      "Landing page promosi untuk produk ERP fiktif 'Sumare', dibuat sebagai latihan front-end murni tanpa framework — fokus pada responsive layout, animasi scroll, dan struktur semantic HTML.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    date: "Dec 2024 - Jan 2025",
  },
  {
    id: 1,
    image: [Work1],
    title: "Laporan Kunjungan Pasien RS Haji Jakarta",
    category: "real project",
    link: "https://github.com/Ariq69/laporan-kunjungan-pasien-rs-haji-jakarta",
    description:
      "Jakarta Hajj Hospital patient visit report website project using laravel framework",
    longDescription:
      "Sistem pelaporan kunjungan pasien untuk RS Haji Jakarta, dibangun untuk menggantikan proses rekap manual. Mencakup dashboard visualisasi data kunjungan per periode, export laporan, dan role-based access untuk staff administrasi.",
    techStack: ["Laravel", "MySQL", "Bootstrap", "PHP"],
    date: "Sep 2023 - Dec 2023",
  },
];

export const projectsNav = [
  { name: "all" },
  { name: "real project" },
  { name: "dummy project" },
];
