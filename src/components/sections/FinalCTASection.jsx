import Container from "../layout/Container";
import Button from "../ui/Button";

function FinalCTASection() {
  return (
    <section className="final-cta" id="contact" aria-labelledby="final-cta-title">
      <div className="final-cta__background" aria-hidden="true">
        <img
          src="/images/cta/final-cta-interior.jpg"
          alt=""
          loading="lazy"
        />
        <div className="final-cta__overlay" />
      </div>

      <Container className="final-cta__inner">
        <div className="final-cta__content">
          <p className="final-cta__eyebrow">Обсудим проект</p>
          <h2 id="final-cta-title">
            Расскажите о вашем пространстве — подскажем, с чего начать
          </h2>
          <p className="final-cta__lead">
            Пришлите план, фото помещения, референсы или просто опишите задачу.
            Мы посмотрим вводные, зададим несколько уточняющих вопросов и
            предложим первый понятный шаг.
          </p>

          <div className="final-cta__starter">
            <p>Можно начать с:</p>
            <ul>
              <li>плана или размеров;</li>
              <li>фото помещения;</li>
              <li>референсов или описания идеи.</li>
            </ul>
          </div>

          <div className="final-cta__actions">
            <Button href="#contact">Написать в мессенджер</Button>
            <Button href="tel:+79885006605" variant="secondary">
              Позвонить
            </Button>
          </div>

          <p className="final-cta__note">
            Не нужно готовить техническое задание — достаточно начать с одного
            сообщения.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTASection;
