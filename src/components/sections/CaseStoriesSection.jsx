import { caseStories } from "../../data/caseStories";
import Button from "../ui/Button";
import CaseStoryCard from "../ui/CaseStoryCard";

function CaseStoriesSection() {
  return (
    <section className="project-stories" id="cases" aria-labelledby="project-stories-title">
      <div className="project-stories__inner">
        <header className="project-stories__header">
          <div className="project-stories__copy">
            <p className="project-stories__eyebrow">Кейсы</p>
            <h2 id="project-stories-title">
              Истории проектов, где мебель решила больше, чем задачу хранения
            </h2>
          </div>
          <Button
            href="https://disk.yandex.ru/d/Y2yVzyPAGB0D-Q"
            variant="secondary"
            className="project-stories__disk-link"
            target="_blank"
            rel="noreferrer"
          >
            Смотреть в Яндекс.Диске
          </Button>
        </header>

        <div className="project-stories__list">
          {caseStories.map((story, index) => (
            <CaseStoryCard key={story.title} story={story} reversed={index % 2 === 1} />
          ))}
        </div>

        <div className="project-stories__cta">
          <p className="project-stories__cta-text">
            У каждого дома — своя задача. Расскажите о вашем пространстве, и
            мы предложим решение.
          </p>
          <Button href="https://max.ru/u/f9LHodD0cOJi21qF9EFxrFZ8rwu33cRrsAwjLjH0Ei1S4ZGYTMkd2EveFzw">Обсудить проект</Button>
          <p className="project-stories__cta-note">
            Можно прислать план помещения, фото или просто описать идею в
            мессенджере.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CaseStoriesSection;
