import React, { useState } from 'react'
import DropdownInputField from '../components/DropdownInputField'

const inputFieldList = [
  { type: "text", name: "fullName", label: "Full Name", options: { required: true, } },
  { type: "text", name: "teamMember", label: "Team Member" },
  { type: "text", name: "phoneNum", label: "Phone Number", options: { required: true, patten: /^\d+$/, maxLength: 10 } },
  { type: "text", name: "emailId", label: "Email Address", options: { required: true, patten: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/ } },
  { type: "text", name: "branch", label: "Branch", options: { required: true, }, dropdown: true, values: ["AI", "CE", "CS", "EE", "MT", "IP", "IT"] },
  { type: "text", name: "semester", label: "Semester", options: { required: true, }, dropdown: true, values: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"] },
  { type: "text", name: "github", label: "Github" },
  { type: "text", name: "linkdin", label: "Linkdin" },
]


const InputField = ({ type, name, label, value, onChange, error, dropdown, values }) => {
  return (<div className='flex flex-col'>
    <div className='flex w-56 justify-between'>
      <label htmlFor={name} className='text-xs'>{label}</label>
      {!!error && <p className='text-xs text-red-600'>{error}</p>}
    </div>
    {dropdown
      ? <DropdownInputField value={value} setValue={onChange} options={values}/>
      : <input type={type} className='bg-[#D4D4D4] text-black rounded-lg text-xs px-2 py-1' id={name} name={name} value={value} onChange={onChange} />}
  </div>)
}

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNum: "",
    emailId: "",
    github: "",
    linkdin: "",
    branch: "",
    semester: "",
    teamMember: ""
  });
  const [error, setError] = useState({})

  const handleSubmit = (e) => {
    console.log(formData);
    const isValid = inputFieldList.reduce((acc, curr) => {
      if (!validateField(curr.name, curr.options)) return false;
      else return acc
    }, true)
    if (isValid) console.log("submited!!")
  }

  const validateField = (field, options = {}) => {
    const currValue = formData[field]
    if (options.required) {
      if (!currValue) { updateError(field, "required!!"); return false }
    }
    if (options.maxLength) {
      if ((currValue.length > options.maxLength)) { updateError(field, "maxLength"); return false }
    }
    if (options.patten) {
      if (!options.patten.test(currValue)) { updateError(field, "patten"); return false }
    }
    if (options.minLength) {
      if ((currValue.length < options.minLength)) { updateError(field, "minLength"); return false }
    }
    updateError(field, "")
    return true;
  }

  const updateError = (field, message) => {
    setError((error) => {
      return { ...error, [field]: message }
    })
  }

  const updateFormData = (field, value) => {
    setFormData((formData) => {
      return { ...formData, [field]: value }
    })
  }

  return (
    <section className='w-dvw min-w-fit h-fit flex items-center justify-center pt-4'>
      <form className='rounded-xl flex flex-col items-center gap-4 font-poppins py-4 px-8 bg-[#1A1A1A]'>
        <h1 className='font-semibold text-3xl text-[#FF0105]'>Register Now</h1>
        <div className='grid ms:grid-cols-2 grid-cols-1 gap-6'>
          {inputFieldList.map((ele) => {
            if (ele.dropdown) {
              return <InputField {...ele} key={ele.name} value={formData[ele.name]} onChange={(value) => { updateFormData(ele.name, value) }} options={ele.values} error={error[ele.name]} />
            }
            return <InputField {...ele} value={formData[ele.name]} key={ele.name} onChange={(e) => { updateFormData(ele.name, e.target.value) }} error={error[ele.name]} />
          })}
        </div>
        <button type='button' className='font-inter font-bold text-sm bg-[#FF0000CC] rounded-lg px-8 py-1.5 cursor-pointer mt-4 mb-2' onClick={handleSubmit}>
          REGISTER!
        </button>
      </form>

    </section>
  )
}

export default Register