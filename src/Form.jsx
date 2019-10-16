import React from 'react'
import {withFormik, Field, Form} from 'formik'

function FormComponent({values, handleChange}) {
        return (
            <Form>
                
              <Field type="email" name="email" value={values.email} placeholder="email" />
              <br />
              <Field type="text" name="name" value={values.name} placeholder="name" />
              <br />
              <label>Accept Terms</label>
              <Field type="checkbox" name="terms" />
              <Field type="submit" name="submit" />  
            </Form>
        )
}

const FormikForm = withFormik({
    mapPropsToValues({email, name})  {
        return {
            email: email || "",
            name: name || ""
        }
    },
    handleSubmit(values){
        console.log(values)
    }

})(FormComponent)

export default FormikForm