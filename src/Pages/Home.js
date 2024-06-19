import React, { useEffect, useState, useRef } from 'react';
import ImageWithDescription from '../Components/ImageWithDescription';

function Home() {
  const [familyMembers, setFamilyMembers] = useState([]);
  const [currMembers, setCurrMembers] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch("/Family.json")
      .then(response => response.json())
      .then(data => {
        setFamilyMembers(data);
      });
  }, []);

  useEffect(() => {
    if (currMembers.length > 0) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currMembers]);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    if (query.length < 3) {
      setCurrMembers([]);
      return;
    }
    const filteredMembers = familyMembers.filter(item => item.name.toLowerCase().includes(query));
    setCurrMembers(filteredMembers);
  }

  return (
    <div data-theme="synthwave" className="min-h-screen">
      <ImageWithDescription />
      <div className="flex justify-center">
        <label className="mt-10 input input-bordered flex w-full max-w-md items-center gap-2">
          <input onChange={handleChange} type="text" className="grow" placeholder="Search For Weasleys" />
          <button className='hover:scale-110 ease-out duration-200'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
              <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
            </svg>
          </button>
        </label>
      </div>
      <div ref={containerRef}>
        {currMembers.map((item) => {
          let fatherName = "";
          let motherName = "";
          if (item.parentId !== null) {
            const father = familyMembers.find(member => member.id === item.parentId);
            if (father) {
              fatherName = father.name;
              motherName = familyMembers.find(member => member.id === father.spouseId).name;
            }
          }
          return (
            <div key={item.id} className="flex justify-center mt-10">
              <div className="w-1/2 bg-base-200 py-8 mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                  <img src={`/Images/${item.id}.png`} className="max-w-xs h-[40vh] rounded-lg shadow-2xl" />
                  <div className="ml-4">
                    <h1 className="text-3xl font-bold">{item.name}</h1>
                    {fatherName.length > 1 && <h2 className="text-xl mt-4">Father: {fatherName}</h2>}
                    {motherName.length > 1 && <h2 className="text-xl mt-4">Mother: {motherName}</h2>}
                    <div className="py-4">{item.description}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;





