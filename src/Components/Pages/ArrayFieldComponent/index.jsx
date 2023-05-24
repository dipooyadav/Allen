const validationSchema = Yup.object().shape({
    file: Yup.mixed()
      .test(
        "fileType",
        "Only .txt files are allowed",
        (value) => value && value.type === "text/plain"
      )
      .test(
        "fileSize",
        "File size must be less than 5KB",
        (value) => value && value.size <= 5000
      ),
  });