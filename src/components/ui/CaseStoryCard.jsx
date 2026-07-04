function CaseStoryCard({ story, reversed = false }) {
  const className = ["case-story", reversed ? "case-story--reversed" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={className}>
      <figure className="case-story__media">
        <img src={story.image} alt={story.alt} loading="lazy" decoding="async" />
      </figure>

      <div className="case-story__content">
        <p className="case-story__category">{story.category}</p>
        <h3>{story.title}</h3>

        <div className="case-story__points">
          <section className="case-story__point">
            <h4>Задача</h4>
            <p>{story.task}</p>
          </section>

          <section className="case-story__point">
            <h4>Решение</h4>
            <p>{story.solution}</p>
          </section>

          <section className="case-story__point">
            <h4>Результат</h4>
            <p>{story.result}</p>
          </section>
        </div>

        <blockquote className="case-story__quote">{story.quote}</blockquote>
      </div>
    </article>
  );
}

export default CaseStoryCard;
