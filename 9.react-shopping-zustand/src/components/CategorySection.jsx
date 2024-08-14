import React from "react";
import CategoryBtn from "./CategoryBtn";
import Container from "./Container";
import useCategoryStore from "../store/useCategoryStore";

const CategorySection = () => {
  const title = "Product Categories";
  // const categories = [
  //   "electronics",
  //   "jewelery",
  //   "men's clothing",
  //   "women's clothing",
  // ];

  const { categories } = useCategoryStore();

  return (
    <section id="category-section" className="p-5">
      <Container>
        <p className="text-sm text-gray-500 mb-2">{title}</p>
        <div className="flex overflow-auto category-btn-group">
          {categories.map((category) => (
            <CategoryBtn key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
