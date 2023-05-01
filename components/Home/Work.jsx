import React from "react";

import { motion } from "framer-motion";

import Masonry from "react-masonry-css";
import Section from "../Customs/Section";
import WorkCard from "../Customs/WorkCard";

const Work = () => {
  const categories = [
    {
      name: "React JS",
      slug: "react-js",
    },
    {
      name: "Java",
      slug: "java",
    },
    {
      name: "Tailwind CSS",
      slug: "tailwind-css",
    },
    {
      name: "Node JS",
      slug: "node-js",
    },
    {
      name: "MERN Stack",
      slug: "mern-stack",
    },
    {
      name: "JAM Stack",
      slug: "jam-stack",
    },
  ];
  const works = [
    {
      thumbnail: "/images/work/work-1.jpg",
      title: "MockUp Mobile App",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus velit dignissimos.",
      status: 1,
      categories: [categories[5], categories[3]],
      demoURL: "#demo",
      codeURL: "#code",
    },
    {
      thumbnail: "/images/work/work-2.jpg",
      title: "Landing Page Using Tailwind CSS",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      status: 2,
      categories: [categories[1], categories[2], categories[3]],
      demoURL: "#demo",
      codeURL: "#code",
    },
    {
      thumbnail: "/images/work/work-3.jpg",
      title: "Website Design Using Tailwind CSS",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus velit dignissimos.",
      status: 2,
      categories: [categories[0], categories[2], categories[4]],
      demoURL: "#demo",
      codeURL: "#code",
    },
    {
      thumbnail: "/images/work/work-4.jpg",
      title: "Landing Page With CMS",
      description: "Lorem, ipsum dolor sit amet.",
      status: 3,
      categories: [categories[0], categories[5]],
      demoURL: "#demo",
      codeURL: "#code",
    },
    {
      thumbnail: "/images/work/work-5.jpg",
      title: "hello",
      description: "lorem",
      status: 2,
      categories: [categories[0], categories[2], categories[4]],
      demoURL: "#demo",
      codeURL: "#code",
    },
    {
      thumbnail: "/images/work/work-6.jpg",
      title: "Single Page Static Website",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      status: 2,
      categories: [categories[0], categories[2], categories[4]],
      demoURL: "#demo",
      codeURL: "#code",
    },
    {
      thumbnail: "/images/work/work-7.jpg",
      title: "Landing Page Using MUI",
      description: "Lorem, ipsum dolor velit dignissimos.",
      status: 3,
      categories: [categories[0], categories[5]],
      demoURL: "#demo",
      codeURL: "#code",
    },
    {
      thumbnail: "/images/work/work-8.jpg",
      title: "Landing Page using tailwind",
      description:
        "Lorem amet consectetur adipisicing elit. Quisquam temporibus",
      status: 2,
      categories: [categories[0], categories[4]],
      demoURL: "#demo",
      codeURL: "#code",
    },
  ];

  const [category, setCategory] = React.useState("all");
  const [filteredWorks, setFilteredWorks] = React.useState([]);
  const [animateCard, setAnimateCard] = React.useState({ y: 0, opacity: 1 });

  React.useEffect(() => {
    setFilteredWorks(works);
  }, []);

  const handleWorkFilter = (category) => {
    setCategory(category);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (category === "all") {
        setFilteredWorks(works);
      } else {
        let workList = [];
        works.forEach((work) => {
          let workCategories = [];
          work.categories.forEach((category) =>
            workCategories.push(category.slug)
          );
          if (workCategories.includes(category)) {
            workList.push(work);
          }
        });
        setFilteredWorks(workList);
      }
    }, 400);
  };

  return (
    <Section
      id="work"
      title="Works"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus velit dignissimos."
      subtitle="My Projects since last 5 years"
      className="!pb-14 md:!pb-28"
    >
      <div className="flex items-center m-auto flex-col text-center w-full mb-10">
        <ul className="flex flex-wrap justify-center text-sm font-medium text-center">
          {[{ name: "All", slug: "all" }, ...categories].map((ct, index) => (
            <li className="m-1 mb-1" key={index}>
              <div
                onClick={() => {
                  handleWorkFilter(ct.slug);
                }}
                className={` inline-block shadow-normal py-2.5 px-5 cursor-pointer rounded-full transition-all duration-300 text-textPrimary  bg-paper hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white  ${
                  ct.slug == category && "!text-white !bg-primary"
                }`}
              >
                {ct.name}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
        className="flex flex-wrap"
      >
        {filteredWorks.map((work, index) => (
          <motion.div
            key={index}
            animate={animateCard}
            transition={{ duration: 0.4, delayChildren: 0.4 }}
          >
            <WorkCard {...work} />
          </motion.div>
        ))}
      </Masonry>
    </Section>
  );
};

export default Work;
