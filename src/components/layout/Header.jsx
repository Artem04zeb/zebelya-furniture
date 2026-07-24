const navigationItems = [
  { href: "#home", label: "Главная" },
  { href: "#projects", label: "Проекты" },
  { href: "#approach", label: "Подход" },
  { href: "#author", label: "Автор" },
  { href: "#turnkey", label: "Под ключ" },
  { href: "#cases", label: "Кейсы" },
  { href: "#faq", label: "Вопросы" },
  { href: "#contact", label: "Контакты" },
];

function Header() {
  return (
    <header className="site-header" aria-label="Навигация по странице">
      <nav className="side-nav" aria-label="Разделы страницы">
        {navigationItems.map((item) => (
          <a className="side-nav__link" href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
