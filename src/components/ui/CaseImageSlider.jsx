import { useEffect, useMemo, useState } from "react";

function CaseImageSlider({ images = [], caseTitle, autoPlay = true, autoPlayDelay = 5000 }) {
  const slides = useMemo(() => images.filter((image) => image?.src), [images]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const hasMultipleImages = slides.length > 1;

  useEffect(() => {
    if (!autoPlay || !hasMultipleImages || isPaused) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % slides.length);
    }, autoPlayDelay);

    return () => window.clearInterval(intervalId);
  }, [autoPlay, autoPlayDelay, hasMultipleImages, isPaused, slides.length]);

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
      <div className="case-slider case-slider--single">
        <img
          className="case-slider__image case-slider__image--active"
          src={image.src}
          alt={image.alt || caseTitle || "Фото проекта"}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div
      className="case-slider"
      aria-label={caseTitle ? `Фотографии проекта «${caseTitle}»` : "Фотографии проекта"}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={handleBlur}
    >
      <div className="case-slider__viewport">
        {slides.map((image, index) => (
          <img
            key={`${image.src}-${index}`}
            className={[
              "case-slider__image",
              index === currentIndex ? "case-slider__image--active" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            src={image.src}
            alt={image.alt || caseTitle || "Фото проекта"}
            loading="lazy"
            decoding="async"
            aria-hidden={index === currentIndex ? undefined : "true"}
          />
        ))}
      </div>

      <button
        className="case-slider__arrow case-slider__arrow--prev"
        type="button"
        aria-label="Предыдущее фото проекта"
        onClick={showPrevious}
      >
        <span aria-hidden="true" />
      </button>

      <button
        className="case-slider__arrow case-slider__arrow--next"
        type="button"
        aria-label="Следующее фото проекта"
        onClick={showNext}
      >
        <span aria-hidden="true" />
      </button>

      <div className="case-slider__counter" aria-live="polite">
        {currentIndex + 1} / {slides.length}
      </div>

      <div className="case-slider__footer">
        <div className="case-slider__dots" aria-label="Выбор фотографии">
          {slides.map((image, index) => (
            <button
              key={`${image.src}-dot-${index}`}
              className={[
                "case-slider__dot",
                index === currentIndex ? "case-slider__dot--active" : "",
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
    </div>
  );
}

export default CaseImageSlider;
