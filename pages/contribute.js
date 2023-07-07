import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
export default function Contribute() {
  const saveData = (data) => {
    const url = `https://api.airtable.com/v0/appXy3Z9EQGEQveKp/Questions`;
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer keyeNXyxxuuYJY19w',
      },
      body: JSON.stringify(data),
      typecast: true,
    };
    console.log(requestOptions);
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="max-w-xl mx-auto py-12 md:max-w-4xl">
      <h4 className="text-2xl font-bold">
        Contribute problem statement to community or
        <Link href="./createblog"> Write a Document</Link>
      </h4>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-1 gap-6 items-start">
        <Formik
          initialValues={{ title: '' }}
          // validate={(values) => {
          //   const errors = {};
          //   if (!values.title) {
          //     errors.title = 'Required';
          //   }
          //   if (!values.description) {
          //     errors.description = 'Required';
          //   }
          //   if (!values.content) {
          //     errors.content = 'Required';
          //   }
          //   if (!values.tags) {
          //     errors.tags = 'Required';
          //   }
          //   if (!values.category) {
          //     errors.category = 'Required';
          //   }
          //   return errors;
          // }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              toast('Successfully saved');
              saveData({
                fields: values,
              });
              resetForm({
                values: {
                  title: '',
                  difficulty: '',
                  problemStatement: '',
                  solution: '',
                  date: '',
                  samplecode: '',
                  tags: '',
                  language: '',
                  companies: '',
                  slug: '',
                },
              });
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            resetForm,
          }) => (
            <>
              <Form>
                <ToastContainer />
                <div className="grid grid-cols-2 gap-6">
                  <label className="block">
                    <span className="text-gray-700">Title</span>
                    <input
                      type="text"
                      name="title"
                      className="form-input mt-1 block  w-full"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=""
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700"> Difficulty</span>
                    <select
                      type="select"
                      name="difficulty"
                      className="form-select mt-1 block  w-full"
                      value={values.difficulty}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=""
                    >
                      <option value="">Select Difficulty</option>
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-gray-700"> Problem Statement</span>
                    <textarea
                      type="text"
                      name="problemStatement"
                      className="form-textarea mt-1 block  w-full"
                      value={values.problemStatement}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=""
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700"> Solution</span>
                    <textarea
                      type="text"
                      className="form-textarea mt-1 block  w-full"
                      name="solution"
                      value={values.solution}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=""
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700"> Date</span>
                    <input
                      type="text"
                      className="form-input mt-1 block  w-full"
                      name="date"
                      value={values.date}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=""
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700"> Sample Code</span>
                    <textarea
                      type="text"
                      className="form-textarea mt-1 block  w-full"
                      name="samplecode"
                      value={values.samplecode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=""
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700"> Tags</span>
                    <input
                      type="text"
                      className="form-input mt-1 block  w-full"
                      name="tags"
                      value={values.tags}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=""
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700"> Language</span>
                    <input
                      type="text"
                      className="form-input mt-1 block  w-full"
                      placeholder=""
                      name="language"
                      value={values.language}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700"> Companies</span>
                    <input
                      type="text"
                      className="form-input mt-1 block  w-full"
                      placeholder=""
                      name="companies"
                      value={values.companies}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700"> Slug</span>
                    <input
                      type="text"
                      className="form-input mt-1 block  w-full"
                      placeholder=""
                      name="slug"
                      value={values.slug}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </label>
                </div>
                <button
                  className="mt-2 p-2 bg-blue-700 text-gray-100 hover:bg-blue-500 text-gray-200 w-full "
                  type="submit"
                  disabled={isSubmitting}
                >
                  Save
                </button>
              </Form>
            </>
          )}
        </Formik>
      </div>
      {/* <button className="mt-2 p-2 bg-blue-700 text-gray-100 hover:bg-blue-500 text-gray-200 w-full ">
        Save
      </button> */}
    </div>
  );
}
