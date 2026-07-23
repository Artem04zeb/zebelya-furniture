const createProject = (number, imageFiles) => ({
  title: `Проект №${number}`,
  images: imageFiles.map((fileName, index) => ({
    src: `/images/projects/${number}/${fileName}`,
    alt: `Проект №${number}, фото ${index + 1}`,
  }))
});

export const projects = [
  createProject(1, [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
  ]),
  createProject(2, [
    "IMG_0097.jpg",
    "IMG_0098.jpg",
    "IMG_0103.jpg",
    "IMG_0106.jpg",
    "IMG_0107.jpg",
  ]),
  createProject(3, ["1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG"]),
  createProject(4, ["1.JPG", "2.JPG", "3.JPG", "4.JPG"]),
  createProject(5, ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"]),
  createProject(6, ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"]),
  createProject(7, ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"]),
  createProject(8, ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]),
  createProject(9, ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]),
  createProject(10, ["1.jpeg", "2.jpeg"]),
  createProject(11, [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.JPG",
  ]),
];
