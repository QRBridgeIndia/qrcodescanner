import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import { Header } from "../loginForm/Header";
import apiClient from "../../api/apiClient";
import { useParams } from "react-router-dom";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [error, seterror] = useState(null);
  const { qrCodeId } = useParams();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await apiClient.get("/api/categories/");
        setCategories(response.data);
      } catch (err) {
        seterror(err);
      }
    };

    getCategories();
  }, []);
  
  if (error) return <div>Server Error</div>;
  return (
    <div className="flex flex-col px-5 pt-6 pb-52 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <Header title="Select Category" />

      {categories.map((category, index) => (
        <CategoryItem
          key={index}
          id={category.id}
          title={category.title}
          items={category.items}
          qrCodeId={qrCodeId}
          className={
            index === categories.length - 1 ? "-mb-10 max-md:mb-2.5" : ""
          }
        />
      ))}
    </div>
  );
}

export default CategoryList;