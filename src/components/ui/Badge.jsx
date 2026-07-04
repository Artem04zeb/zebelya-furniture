function Badge({ children, className = "" }) {
  const classes = ["badge", className].filter(Boolean).join(" ");

  return <p className={classes}>{children}</p>;
}

export default Badge;
