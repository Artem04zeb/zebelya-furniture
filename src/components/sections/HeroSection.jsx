import Button from "../ui/Button";

function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <video
        className="hero__image"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        onLoadedMetadata={(event) => {
          event.currentTarget.currentTime = 0;
          event.currentTarget.playbackRate = 0.75;
        }}
      >
        <source src="/videos/video-hero-compressed.mp4" type="video/mp4" />
      </video>
      <div className="hero__shade" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow">Авторская корпусная мебель</p>
        <h1 id="hero-title">
          Корпусная мебель
          <span className="nowrap">под ключ для домов</span>
          <span className="nowrap">и квартир в Москве</span>
        </h1>
        <p className="hero__lead">
          Проектируем, производим и&nbsp;устанавливаем кухни, гардеробные
          и&nbsp;шкафные системы, которые становятся частью вашего пространства.
        </p>
        <p className="hero__details">Бесплатный замер · Дизайн-проект · Договор · Гарантия · Монтаж</p>

        <div className="hero__actions" aria-label="Связаться с нами">
          <Button href="https://max.ru/u/f9LHodD0cOJi21qF9EFxrFZ8rwu33cRrsAwjLjH0Ei1S4ZGYTMkd2EveFzw">Написать в мессенджер</Button>
          <Button href="tel:+79885006605" variant="secondary">
            Позвонить
          </Button>
        </div>

        <p className="hero__note">
          Обсудим задачу, подскажем первые решения и договоримся о замере.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
