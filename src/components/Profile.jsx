export default function Profile() {
  return (
    <div className="bg-customIndigo px-20 md:px-40 lg:px-80 py-16">
      <h1 className="text-5xl text-customLime font-bold mb-8">Profile</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col justify-center gap-5">
          <h2 className="text-3xl">Basic Information</h2>
          <p className="flex gap-2">
            <span className="text-customLime">Doğum Tarihi</span>30.08.1997
          </p>
          <p className="flex gap-2">
            <span className="text-customLime">İkamet Şehri</span>Ankara
          </p>
          <p className="flex gap-2">
            <span className="text-customLime">Eğitim Durumu</span>Gazi Ünv.
            İşletme Lisans, 2020
          </p>
          <p className="flex gap-2">
            <span className="text-customLime">Tercih Ettiği Rol</span>Frontend
            UI
          </p>
        </div>
        <img
          src="https://www.codiga.io/_next/static/media/background-default.1657f1f1.jpg"
          alt="Placeholder"
          className="w-80 rounded-xl"
        />
        <div>
          <h2 className="text-3xl">About Me</h2>
          <p className="text-justify mt-4">
            Merhaba, ben İbrahim. 2020 yılında Gazi Üniversitesi İşletme
            bölümünden mezun oldum. Mezuniyetimden sonra yazılım alanına olan
            ilgim nedeniyle kendimi bu alanda geliştirmeye karar verdim.
          </p>
          <br></br>
          <p>Şu anda Frontend UI Developer olarak kariyerime devam ediyorum.</p>
        </div>
      </div>
    </div>
  );
}
