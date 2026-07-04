import { scenarios } from "../../data/scenarios";

function ScenariosSection() {
  return (
    <section className="furniture-for-life" aria-labelledby="furniture-for-life-title">
      <div className="furniture-for-life__inner">
        <div className="furniture-for-life__header">
          <div className="furniture-for-life__copy">
            <p className="furniture-for-life__eyebrow">Подход</p>
            <h2 id="furniture-for-life-title">
              Мебель под конкретный дом, привычки и сценарии жизни
            </h2>
          </div>
          <p className="furniture-for-life__lead">
            Мы начинаем не с фасадов и фурнитуры, а с того, как вы живёте:
            где храните вещи, как готовите, как встречаете гостей и что
            хотите чувствовать в своём пространстве.
          </p>
        </div>

        <div className="furniture-for-life__layout">
          <aside className="furniture-for-life__quote">
            <p>
              Хорошая мебель не спорит с домом. Она поддерживает его ритм,
              хранит вещи, упрощает быт и создаёт ощущение порядка.
            </p>
          </aside>

          <div className="scenario-grid" aria-label="Сценарии для корпусной мебели">
            {scenarios.map((scenario) => (
              <article
                className={["scenario-card", scenario.className].filter(Boolean).join(" ")}
                key={scenario.number}
              >
                <p className="scenario-card__number">{scenario.number}</p>
                <h3>{scenario.title}</h3>
                <p>{scenario.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScenariosSection;
