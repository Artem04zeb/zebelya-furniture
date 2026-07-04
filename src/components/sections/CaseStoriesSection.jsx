import { caseStories } from "../../data/caseStories";
import Button from "../ui/Button";
import CaseStoryCard from "../ui/CaseStoryCard";

function CaseStoriesSection() {
  return (
    <section className="project-stories" aria-labelledby="project-stories-title">
      <div className="project-stories__inner">
        <header className="project-stories__header">
          <p className="project-stories__eyebrow">Кейсы</p>
          <h2 id="project-stories-title">
            Истории проектов, где мебель решила больше, чем задачу хранения
          </h2>
          <p className="project-stories__lead">
            В каждом проекте мы ищем не только форму и материалы, но и ответ
            на вопрос: как мебель должна жить в конкретном пространстве, семье
            и сценарии.
          </p>
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
          <Button href="#contact">Обсудить проект</Button>
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
