import { useState } from "react";
import { faqItems } from "../../data/faqItems";
import Container from "../layout/Container";
import SectionHeader from "../layout/SectionHeader";
import Button from "../ui/Button";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section className="faq" aria-labelledby="faq-title">
      <Container className="faq__inner">
        <SectionHeader
          className="faq__header"
          eyebrow="Вопросы"
          title="Что обычно спрашивают перед началом проекта"
          titleId="faq-title"
          subtitle="Собрали ответы на вопросы, которые чаще всего возникают перед замером, проектированием и расчётом корпусной мебели на заказ."
        />

        <div className="faq__body">
          <aside className="faq__accent" aria-label="Как начать проект">
            <p className="faq__accent-title">
              Не нужно знать все технические детали заранее
            </p>
            <p className="faq__accent-text">
              Достаточно описать задачу своими словами. Мы поможем перевести её
              в понятный проект: с замером, материалами, конструкцией, сметой и
              дальнейшей реализацией.
            </p>
            <Button href="#contact" variant="secondary" className="faq__button">
              Задать вопрос в мессенджере
            </Button>
            <p className="faq__accent-note">
              Можно начать с одного сообщения, фото или плана помещения.
            </p>
          </aside>

          <div className="faq__list">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;

              return (
                <article className="faq-item" key={item.question} data-open={isOpen}>
                  <h3 className="faq-item__title">
                    <button
                      className="faq-item__trigger"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => toggleItem(index)}
                    >
                      <span>{item.question}</span>
                      <span className="faq-item__icon" aria-hidden="true">
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div
                    className="faq-item__answer-wrap"
                    id={answerId}
                    role="region"
                    aria-hidden={!isOpen}
                  >
                    <p className="faq-item__answer">{item.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FAQSection;
