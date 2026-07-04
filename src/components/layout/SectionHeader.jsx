function SectionHeader({ eyebrow, title, subtitle, titleId, className = "" }) {
  const baseClass = className || "section-header";

  return (
    <header className={baseClass}>
      {eyebrow ? <p className={`${baseClass}__eyebrow`}>{eyebrow}</p> : null}
      <h2 id={titleId}>{title}</h2>
      {subtitle ? <p className={`${baseClass}__lead`}>{subtitle}</p> : null}
    </header>
  );
}

export default SectionHeader;
