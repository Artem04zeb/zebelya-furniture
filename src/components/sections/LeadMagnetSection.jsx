import { leadMagnetItems } from "../../data/leadMagnetItems";
import Container from "../layout/Container";
import SectionHeader from "../layout/SectionHeader";
import Button from "../ui/Button";

function LeadMagnetSection() {
  return (
    <section className="lead-magnet" aria-labelledby="lead-magnet-title">
      <Container className="lead-magnet__inner">
        <div className="lead-magnet__card">
          <div className="lead-magnet__content">
            <SectionHeader
              className="lead-magnet__header"
              eyebrow="Первый шаг"
              title="Начать можно с плана, фото или короткого описания"
              titleId="lead-magnet-title"
              subtitle="Не нужно сразу готовить техническое задание. Пришлите то, что уже есть: план помещения, фото, размеры, референсы или просто опишите задачу — мы подскажем, как подойти к проекту."
            />

            <div className="lead-magnet__offer">
              <p>Предварительно разберём вашу задачу и подскажем:</p>
              <ul>
                <li>какие решения возможны;</li>
                <li>что важно учесть до замера;</li>
                <li>какие материалы и фурнитура подойдут;</li>
                <li>что может повлиять на стоимость;</li>
                <li>с чего лучше начать проект.</li>
              </ul>
            </div>

            <div className="lead-magnet__actions">
              <Button href="#contact">Написать в мессенджер</Button>
              <Button href="tel:+79885006605" variant="secondary">
                Позвонить
              </Button>
            </div>
          </div>

          <aside className="lead-magnet__aside" aria-label="Что можно прислать">
            <div className="lead-magnet__items">
              <p className="lead-magnet__aside-title">Что можно прислать</p>
              <div className="lead-magnet__list">
                {leadMagnetItems.map((item, index) => (
                  <article className="lead-magnet-item" key={item.title}>
                    <p className="lead-magnet-item__number">
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
          </aside>
        </div>
      </Container>
    </section>
  );
}

export default LeadMagnetSection;
