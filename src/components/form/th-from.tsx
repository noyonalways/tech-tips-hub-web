"use client";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

interface formConfig {
  defaultValues?: Record<string, unknown>;
  resolver?: any;
}

interface IProps extends formConfig {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
}

const THForm: React.FC<IProps> = ({
  children,
  onSubmit,
  defaultValues,
  resolver,
}) => {
  const formConfig: formConfig = {};

  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const submitHandler = methods.handleSubmit;

  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandler(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default THForm;



// "use client";

// import {
//   FieldValues,
//   FormProvider,
//   SubmitHandler,
//   useForm,
// } from "react-hook-form";
// import { useEffect } from "react";

// interface formConfig {
//   defaultValues?: Record<string, unknown>;
//   resolver?: any;
// }

// interface IProps extends formConfig {
//   children: React.ReactNode;
//   onSubmit: SubmitHandler<FieldValues>;
// }

// const THForm: React.FC<IProps> = ({
//   children,
//   onSubmit,
//   defaultValues,
//   resolver,
// }) => {
//   const methods = useForm({
//     defaultValues,
//     resolver,
//   });

//   useEffect(() => {
//     methods.reset(defaultValues); // Reset form when defaultValues change
//   }, [defaultValues, methods]);

//   const submitHandler = methods.handleSubmit;

//   return (
//     <FormProvider {...methods}>
//       <form onSubmit={submitHandler(onSubmit)}>{children}</form>
//     </FormProvider>
//   );
// };

// export default THForm;
