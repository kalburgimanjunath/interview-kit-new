import { Formik } from 'formik';
import { useState, useEffect, StyleSheet } from 'react';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
// import ReactPDF from '@react-pdf/renderer';
export default function Coverletter() {
  // Create styles
  // const styles = StyleSheet.create({
  //   page: {
  //     flexDirection: 'row',
  //     backgroundColor: '#E4E4E4',
  //   },
  //   section: {
  //     margin: 10,
  //     padding: 10,
  //     flexGrow: 1,
  //   },
  // });
  const [messageBody, setMessageBody] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const senderName = 'Manjunath Kalburgi';
  const receipentName = "[Recipient's Name]";
  const jobTitle = '[Job Title]';
  const companyName = '[Company Name]';
  const sourceName = '[Source of Advertisement]';
  const experienceYear = '12';
  const relevantField = '[Relevant Field]';
  const skills = ['reactjs', 'javascript', 'knockoutjs', 'html', 'css'];

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      let newMessageBody = `
  Dear ${user.receipentName},
  
  I am writing to apply for the ${user.jobTitle} position at ${user.companyName}. With ${user.experienceYear} years of experience in ${user.relevantField}, I am confident in my ability to contribute to your organization's success.
  
  In my previous roles, I have consistently delivered exceptional results by ${user.highlight}. I possess strong skills in ${skills}, which enable me to thrive in dynamic environments.
  
  I am excited about the opportunity to join ${user.companyName} and contribute to its continued growth. Please find attached my resume for further details on my experience.
  
  Thank you for considering my application. I look forward to the possibility of discussing my qualifications in more detail.
  Sincerely,
  ${senderName}  
    `;
      setMessageBody(newMessageBody);
    }
  }, [formSubmitted]);
  //   const newmessageBody2 = `Dear ${receipentName},

  // I am writing to apply for the ${jobTitle} position at ${companyName}. With ${experienceYear} years of experience in ${relevantField}, I am confident in my ability to contribute to your organization's success.

  // In my previous roles, I have consistently delivered exceptional results by [Briefly highlight your key accomplishments or responsibilities]. I possess strong skills in skills, which enable me to thrive in dynamic environments.

  // I am excited about the opportunity to join ${companyName} and contribute to its continued growth. Please find attached my resume for further details on my experience.

  // Thank you for considering my application. I look forward to the possibility of discussing my qualifications in more detail.  `;
  //   setMessageBody(newMessageBody2);

  // const [user, setUser] = useState([]);

  const CoverForm = () => {
    return (
      <div className="coverform">
        <p>Enter the information to appear in the cover letter</p>
        <Formik
          initialValues={{
            receipentName: '',
            jobTitle: '',
            companyName: '',
            sourceName: '',
            experienceYear: '12',
            relevantField: '',
            skills: 'reactjs,reactnative,html5,css3',
            highlight:
              'Leading Frontend development for the group of Oracle Health Care Product and Honeywell ACS Software CoE,Salesforce LWC',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.receipentName) {
              errors.receipentName = 'Required';
            } else if (!values.jobTitle) {
              errors.jobTitle = 'Required';
            } else if (!values.companyName) {
              errors.companyName = 'Required';
            } else if (!values.sourceName) {
              errors.sourceName = 'Required';
            } else if (!values.experienceYear) {
              errors.experienceYear = 'Required';
            } else if (!values.relevantField) {
              errors.relevantField = 'Required';
            } else if (!values.skills) {
              errors.skills = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            localStorage.setItem('user', JSON.stringify(values, null, 2));
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              setFormSubmitted(true);
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
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <div className="form-group">
                  <label className="form-label">receipentName</label>
                  <input
                    type="text"
                    name="receipentName"
                    id="receipentName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.receipentName}
                    className="form-control"
                  />
                  {errors.receipentName &&
                    touched.receipentName &&
                    errors.receipentName}
                </div>
                <div className="form-group">
                  <label className="form-label">Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    id="jobTitle"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.jobTitle}
                    className="form-control"
                  />
                  {errors.jobTitle && touched.jobTitle && errors.jobTitle}
                </div>
                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.companyName}
                    className="form-control"
                  />
                  {errors.companyName &&
                    touched.companyName &&
                    errors.companyName}
                </div>
                <div className="form-group">
                  <label className="form-label">Source of Advertisement</label>
                  <input
                    type="text"
                    name="sourceName"
                    id="sourceName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.sourceName}
                    className="form-control"
                  />
                  {errors.sourceName && touched.sourceName && errors.sourceName}
                </div>
                <div className="form-group">
                  <label className="form-label">Highlights</label>
                  <input
                    type="text"
                    name="highlight"
                    id="highlight"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.highlight}
                    className="form-control"
                  />
                  {errors.highlight && touched.highlight && errors.highlight}
                </div>
                <div className="form-group">
                  <label className="form-label">Experience in Years</label>
                  <input
                    type="text"
                    name="experienceYear"
                    id="experienceYear"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.experienceYear}
                    className="form-control"
                  />
                  {errors.experienceYear &&
                    touched.experienceYear &&
                    errors.experienceYear}
                </div>
                <div className="form-group">
                  <label className="form-label">Relevant Field</label>
                  <input
                    type="text"
                    name="relevantField"
                    id="relevantField"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.relevantField}
                    className="form-control"
                  />
                  {errors.relevantField &&
                    touched.relevantField &&
                    errors.relevantField}
                </div>
                <div className="form-group">
                  <label className="form-label">skills</label>
                  <input
                    type="text"
                    name="skills"
                    id="skills"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.skills}
                    className="form-control"
                  />
                  {errors.skills && touched.skills && errors.skills}
                </div>
                <div className="mr-5 p-2">
                  <button
                    className="w-full bg-blue-200 p-2 m-1 border-2 border-color-blue-100 justify-content-center text-center"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  };
  return (
    <div className="p-24 flex grid grid-cols-2 md:grid-cols-2 absolute">
      <div className="p-2 m-2 bg-gray-100 grid-cols-3">
        <CoverForm />
      </div>
      <div className="grid-cols-2 m-2">
        <h3>Cover Letter</h3>
        <div className="grid-cols-2">
          <pre className=" whitespace-pre-line">{messageBody}</pre>
          {/* <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>{messageBody}</View>
            </Page>
          </Document> */}
        </div>
      </div>
    </div>
  );
}
