import { turnkeyResponsibilities } from "../../data/turnkeyResponsibilities";
import Container from "../layout/Container";
import Button from "../ui/Button";

function TurnkeyControlSection() {
  return (
    <>
      <section className="turnkey-control" id="turnkey" aria-labelledby="turnkey-control-title">
        <div className="turnkey-control__background" aria-hidden="true">
          <img
            className="turnkey-control__image"
            src="/images/turnkey/ashot-working-wide.jpg"
            alt=""
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = "/images/turnkey/1.png";
            }}
          />
          <div className="turnkey-control__overlay" />
        </div>

        <Container className="turnkey-control__inner">
          <div className="turnkey-control__content">
            <header className="turnkey-control__header">
              <p className="turnkey-control__eyebrow">Под ключ</p>
              <h2 id="turnkey-control-title">
                Без лишнего контроля с вашей стороны
              </h2>
            </header>

            <div className="turnkey-control__statement">
              <p className="turnkey-control__route">
                Один проект — одна команда — один понятный маршрут до готового
                результата.
              </p>
            </div>

            <div
              className="turnkey-control__responsibilities"
              aria-label="Маршрут проекта под ключ"
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
        </Container>
      </section>

      <section className="turnkey-cta" aria-labelledby="turnkey-cta-title">
        <Container className="turnkey-cta__inner">
          <div className="turnkey-cta__panel">
            <div>
              <h2 className="turnkey-cta__title" id="turnkey-cta-title">
                Хотите понять, как может выглядеть ваш проект под ключ?
              </h2>
              <p className="turnkey-cta__note">
                Можно начать с плана помещения, фото или короткого описания
                задачи.
              </p>
            </div>
            <Button href="https://max.ru/u/f9LHodD0cOJi21qF9EFxrFZ8rwu33cRrsAwjLjH0Ei1S4ZGYTMkd2EveFzw" variant="secondary">
              Обсудить в мессенджере
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

export default TurnkeyControlSection;
