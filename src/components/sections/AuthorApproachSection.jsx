function AuthorApproachSection() {
  const handleImageFallback = (event) => {
    const image = event.currentTarget;

    if (image.dataset.fallback === "wide") {
      image.dataset.fallback = "portrait";
      image.src = "/images/about/ashot-zebelyan.png";
      return;
    }

    image.onerror = null;
    image.src = "/images/about/ashot-zebelyan.jpg";
  };

  return (
    <section className="author-approach" id="author" aria-labelledby="author-approach-title">
      <div className="author-approach__inner">
        <div className="author-approach__panel">
          <img
            className="author-approach__image"
            src="/images/about/ashot-zebelyan-new.png"
            data-fallback="wide"
            alt="Ашот Зебелян, автор корпусной мебели на заказ"
            onError={handleImageFallback}
          />,
          <div className="author-approach__overlay" aria-hidden="true" />

          <div className="author-approach__content">
            <p className="author-approach__eyebrow">О подходе</p>
            <h2 id="author-approach-title">
              Авторский подход к&nbsp;мебели, в которой будут жить
            </h2>

            <div className="author-approach__text">
              <p>
                Меня зовут Ашот Зебелян. Я занимаюсь корпусной мебелью на заказ
                и&nbsp;смотрю на неё не только как на предмет интерьера, а как на
                часть пространства и образа жизни человека.
              </p>
              <p>
                Мой путь начался с мебельного цеха ещё до университета. Позже я&nbsp;получил 
                профильное образование в Академии Строганова и соединил
                практический опыт производства с пониманием композиции,
                эстетики и&nbsp;проектирования пространства.
              </p>
            </div>

            <blockquote className="author-approach__quote">
              Хороший проект — это пространство, в котором человеку хочется жить.
            </blockquote>

            <div className="author-approach__principles" aria-label="Принципы работы">
              <article className="author-principle">
                <span className="author-principle__index">01</span>
                <div>
                  <h3>Сначала сценарий жизни</h3>
                  <p>
                    Понимаем, как вы храните вещи, готовите и&nbsp;используете
                    пространство каждый день.
                  </p>
                </div>
              </article>

              <article className="author-principle">
                <span className="author-principle__index">02</span>
                <div>
                  <h3>Дизайн, который можно реализовать</h3>
                  <p>
                    Проектируем с учётом конструкции, материалов, фурнитуры,
                    производства и&nbsp;монтажа.
                  </p>
                </div>
              </article>

              <article className="author-principle">
                <span className="author-principle__index">03</span>
                <div>
                  <h3>Внимание к деталям</h3>
                  <p>
                    Цвет, фактура, ручки, свет и&nbsp;внутреннее наполнение должны
                    работать вместе.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthorApproachSection;
