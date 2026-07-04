function AuthorApproachSection() {
  return (
    <section className="author-approach" aria-labelledby="author-approach-title">
      <div className="author-approach__inner">
        <figure className="author-approach__media">
          <img
            src="/images/about/ashot-zebelyan.jpg"
            alt="Ашот Зебелян, автор корпусной мебели на заказ"
          />
        </figure>

        <div className="author-approach__content">
          <p className="author-approach__eyebrow">О подходе</p>
          <h2 id="author-approach-title">
            Авторский подход к мебели, в которой будут жить
          </h2>

          <div className="author-approach__text">
            <p>
              Меня зовут Ашот Зебелян. Я занимаюсь корпусной мебелью на заказ
              и смотрю на неё не только как на предмет интерьера, а как на
              часть пространства и образа жизни человека.
            </p>
            <p>
              Мой путь начался с мебельного цеха ещё до поступления в
              университет. Позже я получил профильное образование в Академии
              Строганова на кафедре дизайна мебели — и соединил практический
              опыт производства с пониманием композиции, эстетики и
              проектирования пространства.
            </p>
          </div>

          <blockquote className="author-approach__quote">
            Хороший проект — это не просто красивая мебель. Это пространство,
            в котором человеку хочется жить.
          </blockquote>

          <div className="author-approach__principles" aria-label="Принципы работы">
            <article className="author-principle">
              <h3>Сначала сценарий жизни</h3>
              <p>
                Мы выясняем, как вы храните вещи, готовите, перемещаетесь по
                дому и что хотите чувствовать в пространстве.
              </p>
            </article>

            <article className="author-principle">
              <h3>Дизайн, который можно реализовать</h3>
              <p>
                Проектируем мебель с учётом конструкции, материалов,
                фурнитуры, производства и будущего монтажа.
              </p>
            </article>

            <article className="author-principle">
              <h3>Внимание к деталям</h3>
              <p>
                Цвет, фактура, ручки, стыки, свет и внутреннее наполнение
                должны работать вместе, а не существовать отдельно.
              </p>
            </article>
          </div>

          <p className="author-approach__team">
            За проектом — команда конструкторов, цеховых мастеров,
            снабженцев и монтажников, которые доводят идею до готового
            результата.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AuthorApproachSection;
