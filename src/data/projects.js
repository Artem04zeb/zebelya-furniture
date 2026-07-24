const createProject = (number, imageFiles) => ({
  title: `Проект №${number}`,
  images: imageFiles.map((fileName, index) => ({
    src: `/images/projects/${number}/${fileName}`,
    alt: `Проект №${number}, фото ${index + 1}`,
  }))
});

export const projects = [
  createProject(1, ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]),
  createProject(3, ["1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG"]),
  createProject(5, ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"]),
  createProject(6, ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"]),
  createProject(8, ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]),
  {
    title: "Больше проектов",
    label: "Смотреть портфолио",
    description: "Откроется папка с дополнительными работами в Яндекс.Диске.",
    href: "https://disk.yandex.ru/d/Y2yVzyPAGB0D-Q",
  },
];
