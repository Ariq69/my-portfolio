import Work1 from "../../assets/work1.png";
import Work2 from "../../assets/work2.png";
import Work3 from "../../assets/work3.png";
import Work4 from "../../assets/esdm/work4.png";
import Work5 from "../../assets/risabot/work5.png";
import Work6 from "../../assets/dokumenrsuin/work6.png";

// Gambar Detail E-HAJI
import loginEhaji from "../../assets/loginEhaji.png";
import consentEhaji from "../../assets/consentEhaji.png";
import asesmenSpritualEhaji from "../../assets/asesmenSpritualEhaji.png";
import dialisisEhaji from "../../assets/dialisisEhaji.png";
import formMcuEhaji from "../../assets/formMcuEhaji.png";
import gabungBerkasEhaji from "../../assets/gabungBerkasEhaji.png";
import mmpiEhaji from "../../assets/mmpiEhaji.png";
import pemberianObatEhaji from "../../assets/pemberianObatEhaji.png";

// Gambar Detail E-SDM
import loginEsdm from "../../assets/esdm/loginEsdm.png";
import dataLamaranEsdm from "../../assets/esdm/dataLamaranEsdm.png";
import jadwalEsdm from "../../assets/esdm/jadwalEsdm.png";
import keluargaEsdm from "../../assets/esdm/keluargaEsdm.png";
import ketidakhadiranEsdm from "../../assets/esdm/ketidakhadiranEsdm.png";
import laporanAbsenEsdm from "../../assets/esdm/laporanAbsenEsdm.png";
import payrollEsdm from "../../assets/esdm/payrollEsdm.png";
import presensiOnline from "../../assets/esdm/presensiOnline.png";

// Gambar Detail Chatbot Risa
import satuRisa from "../../assets/risabot/1.png";
import duaRisa from "../../assets/risabot/2.png";
import empatRisa from "../../assets/risabot/4.png";
import limaRisa from "../../assets/risabot/5.png";
import enamRisa from "../../assets/risabot/6.png";
import tujuhRisa from "../../assets/risabot/7.png";
import delapanRisa from "../../assets/risabot/8.png";
import sembilanRisa from "../../assets/risabot/9.png";
import sepuluhRisa from "../../assets/risabot/10.png";

// Gambar Detail Dokumen RSUIN
import loginDokumenRs from "../../assets/dokumenrsuin/loginDokumenRs.png";
import deleteDokumenRs from "../../assets/dokumenrsuin/deleteDokumenRs.png";
import gridDokumenRs from "../../assets/dokumenrsuin/gridDokumenRs.png";
import listDokumenRs from "../../assets/dokumenrsuin/listDokumenRs.png";
import renameDokumenRs from "../../assets/dokumenrsuin/renameDokumenRs.png";
import searchDokumenRs from "../../assets/dokumenrsuin/searchDokumenRs.png";
import uploadDokumenRs from "../../assets/dokumenrsuin/uploadDokumenRs.png";

export const projectsData = [
  {
    id: 6,
    image: [
      Work6,
      loginDokumenRs,
      deleteDokumenRs,
      gridDokumenRs,
      listDokumenRs,
      renameDokumenRs,
      searchDokumenRs,
      uploadDokumenRs,
    ],
    title: "Dokumen RSUIN",
    category: "real project",
    link: "#",
    description:
      "Development of a web-based document storage application to support the collection and management of important hospital documents.",
    longDescription:
      "RSUIN Documents is a web-based application developed to store and manage important hospital documents, such as Standard Operating Procedures (SOPs), accreditation documents, and Working Group (POKJA) documents. This application was built using Laravel 13 as the primary framework, supported by Tailwind CSS and JavaScript for the user interface. RSUIN Documents is used by two categories of users with different access rights: committee members and IT staff act as administrators who can upload files and folders via the document management page, while all hospital employees, as general users, can only access and view documents through the application’s main page.",
    techStack: ["Laravel", "Tailwind CSS", "Javascript"],
    date: "Apr 2026 - Aug 2026",
  },
  {
    id: 5,
    image: [
      Work5,
      satuRisa,
      duaRisa,
      empatRisa,
      limaRisa,
      enamRisa,
      tujuhRisa,
      delapanRisa,
      sembilanRisa,
      sepuluhRisa,
    ],
    title: "RISA (RSUIN Intellegent Service Asistant)",
    category: "real project",
    link: "#",
    description:
      "Development of a WhatsApp chatbot to support the service needs of RSUIN Jakarta.",
    longDescription:
      "RISA (RSUIN Intelligent Service Assistant) is a WhatsApp chatbot I developed to support service needs, such as appointment scheduling (general and insurance), new patient registration, and checking doctors schedules. This chatbot was built using the whatsapp-web.js library as the WhatsApp API provider, with Node.js as the primary runtime, and is integrated with a REST API also developed using Node.js. Currently, Risa is used by all general and insurance patients to schedule appointments and check doctors schedules.",
    techStack: ["Node.js", "MySQL", "REST API"],
    date: "Jan 2026 - Mar 2026",
  },
  {
    id: 4,
    image: [
      Work4,
      loginEsdm,
      dataLamaranEsdm,
      jadwalEsdm,
      keluargaEsdm,
      ketidakhadiranEsdm,
      laporanAbsenEsdm,
      payrollEsdm,
      presensiOnline,
    ],
    title: "E-SDM",
    category: "real project",
    link: "#",
    description:
      "Development of the HRM Module for the SIMRS Khanza RSUIN Jakarta Web-Based Application",
    longDescription:
      "E-SDM is a development module of the Human Resource Management (HRM) system within the Khanza RSUIN Jakarta SIMRS, built as a web-based application. This application was developed by the IT Development Team, and I contributed to the development of most of its features using CodeIgniter 3 as the primary application framework. E-SDM is used by all medical and non-medical staff to record attendance, manage personnel data files, and process payroll.",
    techStack: ["Codeigniter 3", "Bootstrap", "MySQL", "jQuery", "Javascript"],
    date: "Sep 2025 - Present",
  },
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
