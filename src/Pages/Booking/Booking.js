import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const data = [
    {
      id: 'name',
      label: 'Name',
      inputType: 'text',
      buttonName: 'Next',
      Placeholder: 'Enter your Name'
    },
    {
      id: 'mobile',
      label: 'Mobile',
      inputType: 'tel',
      buttonName: 'Next',
      Placeholder: 'Mobile no.'
    },
    {
      id: 'city',
      label: 'City',
      inputType: 'text',
      buttonName: 'Next',
      Placeholder: 'City Name'
    },
    {
      id: 'area',
      label: 'Area',
      inputType: 'text',
      buttonName: 'Next',
      Placeholder: 'Area name'
    },
    {
      id: 'date',
      label: 'Date',
      inputType: 'date',
      buttonName: 'Submit',
      Placeholder: 'Booking Date'
    },
  ];

  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: '',
    area: '',
    date: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === data.length - 1) {
      setIsSubmitted(true); // This should be set to true on the final submission
      console.log("Form Submitted Successfully");
    } else {
      setIndex((idx) => idx + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setIndex((idx) => idx - 1);
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  console.log(formData);

  return (
    <div className='booking'>
      {!isSubmitted ? (
        <>
          <h1>Book a PickUp</h1>
          <p>Executive will be at your door step to collect the stuff</p>
          <form onSubmit={handleSubmit}>
            {index > 0 && (
              <a href='/' onClick={handleBack}>
                Back
              </a>
            )}

            <label htmlFor={data[index].id}>{data[index].label}</label>
            <input
              id={data[index].id}
              type={data[index].inputType}
              placeholder={data[index].Placeholder}
              value={formData[data[index].id]}
              onChange={handleInput}
            />

            <button type="submit">{data[index].buttonName}</button>
          </form>
        </>
      ) : (
        <div className='sucess'>
          <h1> Submitted !!</h1>
          <span>Name: {formData.name}</span>
          <span>Mobile: {formData.mobile}</span>
          <span>City: {formData.city}</span>
          <span>Area: {formData.area}</span>
          <span>Date of Pickup: {formData.date}</span>
        </div>
      )}
    </div>
  );
};

export default Booking;
