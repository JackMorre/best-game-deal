import { useFormik } from "formik";
import * as yup from "yup";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Searchbar.css";

export const SearchBar = ({ handleUrlChange }) => {
  function onSubmit(values, actions) {
    handleUrlChange(values.search);

    actions.resetForm();
  }

  const basicSchema = yup.object().shape({
    search: yup.string().required("Please enter a game name!"),
  });

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  return (
    <div className="search-c">
      <form className="search-form" onSubmit={formik.handleSubmit}>
        <input
          value={formik.values.search}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="search-input"
          type="text"
          name="search"
          id="search"
          placeholder="Search Games"
        ></input>
        <button
          disabled={formik.isSubmitting}
          className="search-btn"
          type="submit"
        >
          <ArrowForwardIosIcon sx={{ height: "20px" }} />
        </button>
      </form>
      {formik.errors.search && formik.touched.search ? (
        <p className="search-error">{formik.errors.search}</p>
      ) : (
        ""
      )}
    </div>
  );
};
