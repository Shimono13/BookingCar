export default function Splash() {
  return (
    <div
      className="flex flex-col w-max items-center gap-2
     ">
      <img
        class="w-5/12"
        src="https://immagini.alvolante.it/sites/default/files/styles/anteprima_lunghezza_640/public/serie_auto_galleria/2018/04/lamborghini_urus_ant_0.png"
        alt=""
      />
      <div className="flex flex-col  items-center gap-3">
        <h1 className="text-2xl font-bold text-center">
          Find ideal Car For <br /> Your Next trip
        </h1>
        <p className="text-center">
          The point of using. Lorem ipsum dolor <br /> sit amet consectetur
          adipisicing
        </p>
        <button className="rounded-2xl bg-primary px-16 py-1 font-bold">
          Get Started
        </button>
      </div>
    </div>
  );
}
