import { processSteps } from "../../data/processSteps";

function WorkProcessSection() {
  if (processSteps.length === 0) {
    return null;
  }

  return (
    <section className="work-process" aria-labelledby="work-process-title">
      <div className="work-process__inner">
        <header className="work-process__header">
          <p className="work-process__eyebrow">Как проходит работа</p>
          <h2 id="work-process-title">От первой идеи до мебели, которая встаёт на своё место</h2>
          <p className="work-process__lead">
            Мы ведём проект последовательно: сначала разбираемся в задаче и
            пространстве, затем собираем решение, которое можно красиво
            реализовать в материале.
          </p>
        </header>

        <div className="work-process__steps">
          {processSteps.map((step, index) => (
            <article className="work-step" key={step.title}>
              <p className="work-step__number">{String(index + 1).padStart(2, "0")}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkProcessSection;
