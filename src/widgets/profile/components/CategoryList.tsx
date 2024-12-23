import { XCircleIcon } from "@heroicons/react/16/solid";
import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { categoryAll, deleteCategory } from "../../../entities/category/thunk";

import style from "../index.module.scss";

const CategoryList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { category } = useSelector((state: RootState) => state.category);

  useEffect(() => {
    dispatch(categoryAll());
  }, [dispatch]);

  const handleDeleteCategory = (id: number) => {
    dispatch(deleteCategory(id)).then(() => dispatch(categoryAll()));
    setIsModalOpen(false);
  };

  const showModalCategory = () => {
    setIsModalOpen(true);
  };

  const handleCancelCategory = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <span>Мои категории:</span>
      <ul className="flex gap-2 w-4/5 flex-wrap">
        {category?.map((categories) => (
          <li key={categories.id}>
            <div className={style.category} onClick={showModalCategory}>
              <span className={style.title}>{categories.title}</span>
              <div className={style.delete}>
                <XCircleIcon className="w-5" />
              </div>
            </div>
            <Modal
              open={isModalOpen}
              onCancel={handleCancelCategory}
              footer={[
                <Button key="cancel" onClick={handleCancelCategory}>
                  Отмена
                </Button>,
                <Button
                  key="delete"
                  onClick={() => handleDeleteCategory(categories.id)}
                >
                  Удалить
                </Button>,
              ]}
            >
              <span className="text-lg">Хотите удалить категорию?</span>
            </Modal>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
