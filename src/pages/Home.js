import Profile from "../sections/Profile"
import About from "../sections/About"


const Home = () => {
  const data = {
    about: "Saya biasanya sering dipanggil Oriz, saat ini saya berusia 22 tahun, ingin menjadi seorang programmer, web designer, dan businessman.\nSaya mempelajari koding sejak SD yang saat itu memang sedang tertarik pada komputer, saya mencoba platform Blogger sebagai media dalam mempelajari website dan web design, setelah itu saya mulai mencoba membuat desain dari website saya sendiri.\nBeberapa koding yang sudah saya pelajari dengan baik yaitu HTML dan CSS dengan struktur website yang rapih dan Responsive pada segala jenis perangkat.\nSaya tidak hanya mempelajari desain website, tapi saya juga dapat membuat desain grafis menggunakan Adobe Photoshop, mengedit video menggunakan Adobe Premiere, dan masih ada beberapa hal lain yang dapat saya lakukan. Oh iya, saya juga hobi bermain game online. Untuk sekarang saya sedang sering bermain game Valorant, kadang-kadang main game Point Blank juga, saya suka bermain game dengan genre FPS.\nUntuk selanjutnya saya ingin belajar untuk menjadi Full-stack Developer dengan mempelajari bahasa pemrograman lain seperti Javascript, PHP, termasuk dengan framework PHP khususnya Laravel dan framework CSS khususnya Tailwind CSS."
  }
  
  
  return (
      <div className={ `py-2 scroll-smooth relative` }>
        <Profile />
        <About about={ data.about } />
      </div>
    );
}

export default Home;