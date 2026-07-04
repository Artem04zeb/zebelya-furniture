import { turnkeyResponsibilities } from "../../data/turnkeyResponsibilities";
import Button from "../ui/Button";

function TurnkeyControlSection() {
  return (
    <section className="turnkey-control" aria-labelledby="turnkey-control-title">
      <div className="turnkey-control__inner">
        <header className="turnkey-control__header">
          <p className="turnkey-control__eyebrow">Под ключ</p>
          <h2 id="turnkey-control-title">Без лишнего контроля с вашей стороны</h2>
          <p className="turnkey-control__lead">
            Вы не собираете подрядчиков по отдельности. Мы берём на себя замер,
            проектирование, подбор материалов, производство, доставку, монтаж и
            финальную проверку мебели на объекте.
          </p>
        </header>

        <div className="turnkey-control__body">
          <div className="turnkey-control__statement">
            <p className="turnkey-control__route">
              Один проект — одна команда — один понятный маршрут до готового
              результата.
            </p>
            <p className="turnkey-control__accent">
              Вам не нужно разбираться в каждом техническом узле, контролировать
              цех и держать в голове десятки мелочей. Мы переводим вашу задачу
              в проект, производство и установленную мебель.
            </p>
            <p className="turnkey-control__note">
              Вы участвуете в ключевых решениях — стиле, материалах, бюджете и
              финальном согласовании. Остальное берём на себя.
            </p>
          </div>

          <div
            className="turnkey-control__responsibilities"
            aria-label="Зоны ответственности компании"
          >
            {turnkeyResponsibilities.map((item, index) => (
              <article className="turnkey-responsibility" key={item.title}>
                <p className="turnkey-responsibility__number">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="turnkey-control__summary">
          <p>
            В результате вы получаете не набор отдельных работ, а завершённую
            мебель, собранную в единую систему.
          </p>
        </div>

        <div className="turnkey-control__cta">
          <div>
            <p className="turnkey-control__cta-title">
              Хотите понять, как может выглядеть ваш проект под ключ?
            </p>
            <p className="turnkey-control__cta-note">
              Можно начать с плана помещения, фото или короткого описания задачи.
            </p>
          </div>
          <Button href="#contact" variant="secondary">
            Обсудить в мессенджере
          </Button>
        </div>
      </div>
    </section>
  );
}

export default TurnkeyControlSection;
