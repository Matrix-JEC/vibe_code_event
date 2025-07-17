import React, { useState } from 'react'

const inputFieldList = [
  { type: "text", name: "fullName", label: "Full Name", options: { required: true, } },
  { type: "text", name: "teamMember", label: "Team Member" },
  { type: "text", name: "phoneNum", label: "Phone Number", options: { required: true, patten: /^\d+$/, maxLength: 10 } },
  { type: "text", name: "emailId", label: "Email Address", options: { required: true, patten: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/ } },
  { type: "text", name: "branch", label: "Branch", options: { required: true, } },
  { type: "text", name: "semester", label: "Semester", options: { required: true, } },
  { type: "text", name: "github", label: "Github" },
  { type: "text", name: "linkdin", label: "Linkdin" },
]


const InputField = ({ type, name, label, value, onChange, error }) => {
  return (<div className='flex flex-col'>
    <div className='flex w-full justify-between'>
      <label htmlFor={name} className='text-xs'>{label}</label>
      {!!error && <p className='text-xs text-red-600'>{error}</p>}
    </div>
    <input type={type} className='bg-[#D4D4D4] text-black rounded-lg text-xs px-2 py-1' id={name} name={name} value={value} onChange={onChange} />
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

  const handleSubmit = (e)=>{
    console.log(formData);
    const isValid = inputFieldList.reduce((acc, curr)=>{
      console.log(curr.name, curr.options)
      if(!validateField(curr.name, curr.options)) return false;
      else return acc
    }, true)
    if(isValid) console.log("submited!!")
    console.log(isValid)
  }

  const validateField = (field, options={}) => {
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
    <section className='h-dvh w-dvw flex items-center justify-center'>
      <form className='border rounded-2xl flex flex-col items-center gap-4 font-poppins p-4'>
        <h1>Register Now</h1>
        <div className='grid grid-cols-2 gap-4'>
          {inputFieldList.map((ele) => {
            return <InputField {...ele} value={formData[ele.name]} key={ele.name} onChange={(e) => { updateFormData(ele.name, e.target.value) }} error={error[ele.name]} />
          })}
        </div>
        <button type='button' className='rounded-full px-4 py-1 font-semibold bg-[#FF2C41] w-fit' onClick={handleSubmit}>
          REGISTER!
        </button>
      </form>

    </section>
  )
}

export default Register