function Container({ as: Tag = "div", className = "", children, ...props }) {
  const classes = ["container", className].filter(Boolean).join(" ");

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}

export default Container;
