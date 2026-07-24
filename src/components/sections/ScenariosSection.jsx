import { useEffect, useState } from "react";
import { scenarios } from "../../data/scenarios";

const AUTOPLAY_DELAY = 4500;
const approachVideoSrc = "/videos/approach.mp4";

function ScenariosSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? scenarios.length - 1 : currentIndex - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % scenarios.length);
  };

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timerId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % scenarios.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timerId);
  }, [isPaused]);

  return (
    <section className="furniture-for-life" id="approach" aria-labelledby="furniture-for-life-title">
      <div className="furniture-for-life__inner">
        <div className="furniture-for-life__layout">
          <div className="furniture-for-life__content">
            <div className="furniture-for-life__copy">
              <p className="furniture-for-life__eyebrow">Подход</p>
              <h2 id="furniture-for-life-title">
                Мебель, которая начинается с&nbsp;образа&nbsp;жизни
              </h2>
            </div>

            <p className="furniture-for-life__lead">
              Мы проектируем не отдельные шкафы и кухни, а решения под конкретное
              пространство: как вы храните вещи, готовите, отдыхаете, встречаете
              гостей и используете каждый метр дома.
            </p>

            <div
              className="approach-cards"
              aria-label="Сценарии для корпусной мебели"
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="approach-cards__viewport">
                <div
                  className="approach-cards__track"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {scenarios.map((scenario) => (
                    <article className="approach-card" key={scenario.number}>
                      <p className="approach-card__number">{scenario.number}</p>
                      <h3 className="approach-card__title">{scenario.title}</h3>
                      <p className="approach-card__text">{scenario.description}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="approach-controls" aria-label="Управление карточками подхода">
                <button
                  className="approach-arrow"
                  type="button"
                  aria-label="Предыдущий сценарий"
                  onClick={goToPrevious}
                >
                  <span aria-hidden="true">‹</span>
                </button>

                <div className="approach-dots" role="tablist" aria-label="Выбор сценария">
                  {scenarios.map((scenario, index) => (
                    <button
                      className={[
                        "approach-dot",
                        index === activeIndex ? "approach-dot--active" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      type="button"
                      role="tab"
                      aria-label={`Показать сценарий ${scenario.number}`}
                      aria-selected={index === activeIndex}
                      key={scenario.number}
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </div>

                <button
                  className="approach-arrow"
                  type="button"
                  aria-label="Следующий сценарий"
                  onClick={goToNext}
                >
                  <span aria-hidden="true">›</span>
                </button>
              </div>
            </div>
          </div>

          <figure className="approach-video-card">
            <video
              className="approach-video"
              src={approachVideoSrc}
              controls
              preload="metadata"
              playsInline
            />
            <figcaption className="approach-video-caption">
              Квартира 20 м²: как уместить комфорт, хранение и уют
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default ScenariosSection;
