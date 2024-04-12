export default function HomeComponent() {
  return (
    <>
      <div>Bienvenido a Motohouse</div>
      <h1>MARCAS</h1>
      <section className="marcas">
        <div className="kawalogo">
          <a href="#"><img src="https://adnraceparts.com/wp-content/uploads/2019/01/LOGO-KAWASAKI.png" alt="Kawasaki-logo"></img></a>
        </div>
        <div className="yamalogo">
          <a href="#"><img src="https://cdn.iconscout.com/icon/free/png-256/free-yamaha-282153.png?f=webp" alt="Yamaha-logo"></img></a>
        </div>
        <div className="ktmlogo">
          <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/KTM-Logo.svg/1280px-KTM-Logo.svg.png" alt="Ktm-logo"></img></a>
        </div>
        <div className="bmwlogo">
          <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/BMW_1970-1989_Logo.svg/1200px-BMW_1970-1989_Logo.svg.png" alt="Bmw-logo"></img></a>
        </div>
      </section>
    </>
  );
}
