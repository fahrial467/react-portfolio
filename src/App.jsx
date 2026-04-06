import DataImage from "./data";
import { listTools, listProyek } from "./data";
("./data");

function App() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 grid-cols-1 items-center xl:py-20 lg:py-10 md:py-8 xl:gap-0 gap-6">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
            />
            <q>Ketekukan dan keterampilan adalah kunci.😁</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Saya Muhammad Fahrial Ababil
          </h1>
          <p className="text-base/loose mb-8 opacity-40">
            Saya lulusan Teknik Informatika Universitas Indraprasta PGRI, Saat
            ini saya sudah memiliki pengalaman bekerja di bidang konstruksi dan
            manufaktur sebagai Construction Engineer, Estimator Engineer, dan
            Operator Produksi. Selain itu saya mampu menjalankan tugas sebagai
            IT Support seperti trouble shooting, perbaikan dan instalasi
            hardware software komputer dan printer, instalasi LAN, serta coding
            HTML, CSS, Bootsrap, Tailwind dan JavaScript. Saya juga mempunyai
            hobi editing video, foto dan gambar, serta olahraga Badminton,
            joging, dan bersepeda.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-2s "
        />
      </div>
      {/* End Hero Section */}

      {/* About Section (Tetang) */}
      <div className="Tentang mt-32 py-10" id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-20 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            Hi, Perkenalkan saya Muhammad Fahrial Ababil, seorang Construction
            Engineer dan Estimator Engineer di PT. Wijaya Karya Industri dan
            Konstruksi dengan pengalaman lebih dari 1 tahun di Construction
            Enginner dan 6 Tahun di Estimator Engineer. Saya memiliki keahlian
            dalam perencanaan metode instalasi, pembuatan kinematik 2D dan 3D,
            dan estimasi proyek konstruksi baja. Selain itu, saya juga memiliki
            kemampuan dalam IT Support dan ketertarikan dalam dunia teknologi
            khususnya komputer dan pemrograman.
          </p>
          <div className="flex items-center gap-6">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-20 rounded-md sm:block hidden"
            />
            <div className="flex items-center md:gap-4">
              <div>
                <h1 className="text-4xl mb-1">
                  45<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-4xl mb-1">
                  7<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools yang dipakai
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-45"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            beberapa tools yang sering saya gunakan sebagai penunjang pekerjaan
            dan tools yang dapat saya gunakan.
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 hover:bg-zinc-800 rounded-md group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* End About Section (Tentang) */}

      {/* proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Proyek
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          Beberapa proyek yang telah saya kerjakan.
        </p>
        <div className="proyek-box mt-14 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 hover:bg-zinc-700 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img src={proyek.gambar} alt="proyek image" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="#proyek"
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                  >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* end proyek */}

      {/* kontak */}
      <div
        id="kontak"
        className="kontak mt-32 sm:p-10 p-0"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <h1 className="text-4xl font-bold text-center">kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50">
          Mari tehubung dengan saya
        </p>
        <form
          action="https://formsubmit.co/fahrialababil@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md "
          autoComplete=""
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                className="border border-zinc-500 rounded-md p-2"
                type="text"
                name="nama"
                placeholder="Masukkan nama Anda"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                className="border border-zinc-500 rounded-md p-2"
                type="email"
                name="email"
                placeholder="Masukkan email"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="pesan">
                Pesan
              </label>
              <textarea
                className="border border-zinc-500 rounded-md p-2"
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="pesan..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 border w-full border-zinc-600 hover:bg-violet-600 rounded-lg p-3 cursor-pointer "
              >
                Kirim Pesan <i class="ri-mail-line ri-lg"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* end konteak */}
    </>
  );
}

export default App;
