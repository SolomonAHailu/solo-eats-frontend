import React, { useEffect, useId } from "react";
import classes from "./UserEditPage.module.css";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getById, updateUser } from "../../services/userService";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import { EMAIL } from "../../constants/patterns";
import Input from "../../components/Input/Input";

export default function UserEditPage() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { userId } = useParams();
  const isEditMode = userId;

  useEffect(() => {
    if (isEditMode) {
      laodUser();
    }
  }, [userId]);

  const laodUser = async () => {
    const user = await getById(userId);
    reset(user);
  };

  const submit = (userData) => {
    updateUser(userData);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Title title={isEditMode ? "Edit User" : "Add User"} />
        <form onSubmit={handleSubmit(submit)} noValidate>
          <Input
            label="Name"
            {...register("name", { required: true, minLength: 3 })}
            error={errors.name}
          />
          <Input
            label="Email"
            {...register("email", { required: true, pattern: EMAIL })}
            error={errors.email}
          />
          <Input
            label="Address"
            {...register("address", { required: true, minLength: 5 })}
            error={errors.address}
          />

          <Input label="Is Admin" type="checkbox" {...register("isAdmin")} />
          <Button type="submit" />
        </form>
      </div>
    </div>
  );
}
