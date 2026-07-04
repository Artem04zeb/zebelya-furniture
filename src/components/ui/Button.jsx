function Button({ href, variant = "primary", children, className = "", ...props }) {
  const classes = ["button", `button--${variant}`, className].filter(Boolean).join(" ");

  return (
    <a className={classes} href={href} {...props}>
      {children}
    </a>
  );
}

export default Button;
