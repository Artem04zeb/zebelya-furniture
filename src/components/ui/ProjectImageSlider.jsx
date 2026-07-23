import { useEffect, useMemo, useState } from "react";

function ProjectImageSlider({ images = [], projectTitle, autoPlayDelay = 16000 }) {
  const slides = useMemo(() => images.filter((image) => image?.src), [images]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const hasMultipleImages = slides.length > 1;

  useEffect(() => {
    if (!hasMultipleImages || isPaused) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % slides.length);
    }, autoPlayDelay);

    return () => window.clearInterval(intervalId);
  }, [autoPlayDelay, hasMultipleImages, isPaused, slides.length]);

  useEffect(() => {
    if (currentIndex > slides.length - 1) {
      setCurrentIndex(0);
    }
  }, [currentIndex, slides.length]);

  if (!slides.length) {
    return null;
  }

  const showPrevious = () => {
    setCurrentIndex((index) => (index - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setCurrentIndex((index) => (index + 1) % slides.length);
  };

  const showSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false);
    }
  };

  if (!hasMultipleImages) {
    const [image] = slides;

    return (
      <div className="project-slider project-slider--single">
        <img
          className="project-slider__image project-slider__image--active"
          src={image.src}
          alt={image.alt || projectTitle || "Фото проекта"}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div
      className="project-slider"
      aria-label={projectTitle ? `Фотографии проекта «${projectTitle}»` : "Фотографии проекта"}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={handleBlur}
    >
      <div className="project-slider__viewport">
        {slides.map((image, index) => (
          <img
            key={`${image.src}-${index}`}
            className={[
              "project-slider__image",
              index === currentIndex ? "project-slider__image--active" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            src={image.src}
            alt={image.alt || projectTitle || "Фото проекта"}
            loading="lazy"
            decoding="async"
            aria-hidden={index === currentIndex ? undefined : "true"}
          />
        ))}
      </div>

      <button
        className="project-slider__arrow project-slider__arrow--prev"
        type="button"
        aria-label="Предыдущее фото проекта"
        onClick={showPrevious}
      >
        <span aria-hidden="true" />
      </button>

      <button
        className="project-slider__arrow project-slider__arrow--next"
        type="button"
        aria-label="Следующее фото проекта"
        onClick={showNext}
      >
        <span aria-hidden="true" />
      </button>

      <div className="project-slider__counter" aria-live="polite">
        {currentIndex + 1} / {slides.length}
      </div>

      <div className="project-slider__dots" aria-label="Выбор фотографии">
        {slides.map((image, index) => (
          <button
            key={`${image.src}-dot-${index}`}
            className={[
              "project-slider__dot",
              index === currentIndex ? "project-slider__dot--active" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            type="button"
            aria-label={`Показать фото ${index + 1}`}
            aria-pressed={index === currentIndex}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectImageSlider;
