import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, Printer, Camera, User, Briefcase, GraduationCap, Info } from 'lucide-react';
import './CVBuilder.css';

const CVBuilder = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    email: '',
    presentAddress: { village: '' },
    permanentAddress: { village: '' },
    photo: null,
    careerObjective: '',
    personalAttributes: ['Ability to learn quickly and implement efficiently.'],
    jobExperience: [{ institution: '', position: '', duration: '' }],
    education: [{ examination: '', group: '', board: '', year: '', result: '' }],
    computerLiteracy: '',
    interests: '',
    languages: '',
    reference: '',
    personalDetails: {
      name: '',
      fathersName: '',
      mothersName: '',
      dob: '',
      nationality: 'Bangladeshi',
      nidNo: '',
      religion: '',
      maritalStatus: '',
      sex: '',
      height: '',
      weight: '',
      bloodGroup: ''
    }
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const cvRef = useRef();

  const handleInputChange = (e, section, field) => {
    const { value } = e.target;
    if (section) {
      setFormData(prev => ({
        ...prev,
        [section]: { ...prev[section], [field]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleArrayChange = (index, field, section, value) => {
    const newArray = [...formData[section]];
    newArray[index][field] = value;
    setFormData(prev => ({ ...prev, [section]: newArray }));
  };

  const addArrayItem = (section, template) => {
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], template]
    }));
  };

  const removeArrayItem = (section, index) => {
    const newArray = [...formData[section]];
    newArray.splice(index, 1);
    setFormData(prev => ({ ...prev, [section]: newArray }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, photo: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-builder-container">
      <div className="builder-header">
        <h1 className="section-title">CV Builder</h1>
      </div>

      <div className="builder-layout">
        {/* Form Section */}
        <div className="form-section glass-card">
          <div className="form-group-container">
            <h3><User size={18} /> Basic Information</h3>
            <div className="input-grid">
              <input type="text" placeholder="Full Name" onChange={(e) => handleInputChange(e, null, 'name')} />
              <input type="text" placeholder="Contact No" onChange={(e) => handleInputChange(e, null, 'contactNo')} />
              <input type="email" placeholder="Email" onChange={(e) => handleInputChange(e, null, 'email')} />
            </div>
            
            <div className="photo-upload-container">
              <label className="photo-label">
                <Camera size={20} /> Upload Photo
                <input type="file" accept="image/*" onChange={handlePhotoUpload} hidden />
              </label>
              {photoPreview && <img src={photoPreview} alt="Preview" className="small-preview" />}
            </div>

            <div className="input-grid">
              <input type="text" placeholder="Present Address Village" onChange={(e) => handleInputChange(e, 'presentAddress', 'village')} />
              <input type="text" placeholder="Permanent Address Village" onChange={(e) => handleInputChange(e, 'permanentAddress', 'village')} />
            </div>
          </div>

          <div className="form-group-container">
            <h3><Briefcase size={18} /> Career & Experience</h3>
            <textarea placeholder="Career Objective" onChange={(e) => handleInputChange(e, null, 'careerObjective')}></textarea>
            
            <div className="dynamic-list">
              <label>Job Experience</label>
              {formData.jobExperience.map((job, index) => (
                <div key={index} className="dynamic-row">
                  <input type="text" placeholder="Institution" value={job.institution} onChange={(e) => handleArrayChange(index, 'institution', 'jobExperience', e.target.value)} />
                  <input type="text" placeholder="Position" value={job.position} onChange={(e) => handleArrayChange(index, 'position', 'jobExperience', e.target.value)} />
                  <input type="text" placeholder="Duration" value={job.duration} onChange={(e) => handleArrayChange(index, 'duration', 'jobExperience', e.target.value)} />
                  <button className="delete-btn" onClick={() => removeArrayItem('jobExperience', index)}><Trash2 size={16} /></button>
                </div>
              ))}
              <button className="add-btn" onClick={() => addArrayItem('jobExperience', { institution: '', position: '', duration: '' })}><Plus size={16} /> Add Job</button>
            </div>
          </div>

          <div className="form-group-container">
            <h3><GraduationCap size={18} /> Education</h3>
            <div className="dynamic-list">
              {formData.education.map((edu, index) => (
                <div key={index} className="dynamic-row education-row">
                  <input type="text" placeholder="Exam" value={edu.examination} onChange={(e) => handleArrayChange(index, 'examination', 'education', e.target.value)} />
                  <input type="text" placeholder="Group" value={edu.group} onChange={(e) => handleArrayChange(index, 'group', 'education', e.target.value)} />
                  <input type="text" placeholder="Board" value={edu.board} onChange={(e) => handleArrayChange(index, 'board', 'education', e.target.value)} />
                  <input type="text" placeholder="Year" value={edu.year} onChange={(e) => handleArrayChange(index, 'year', 'education', e.target.value)} />
                  <input type="text" placeholder="Result" value={edu.result} onChange={(e) => handleArrayChange(index, 'result', 'education', e.target.value)} />
                  <button className="delete-btn" onClick={() => removeArrayItem('education', index)}><Trash2 size={16} /></button>
                </div>
              ))}
              <button className="add-btn" onClick={() => addArrayItem('education', { examination: '', group: '', board: '', year: '', result: '' })}><Plus size={16} /> Add Education</button>
            </div>
          </div>

          <div className="form-group-container">
            <h3><Info size={18} /> Additional Information</h3>
            <textarea placeholder="Computer Literacy (e.g. MS Word, Excel, Internet)" onChange={(e) => handleInputChange(e, null, 'computerLiteracy')}></textarea>
            <textarea placeholder="Language Proficiency" onChange={(e) => handleInputChange(e, null, 'languages')}></textarea>
            <textarea placeholder="Interests & Hobbies" onChange={(e) => handleInputChange(e, null, 'interests')}></textarea>
            <textarea placeholder="References" onChange={(e) => handleInputChange(e, null, 'reference')}></textarea>
          </div>

          <div className="form-group-container">
            <h3><Info size={18} /> Personal Details</h3>
            <div className="input-grid">
              <div className="form-input-group">
                <label>Father's Name</label>
                <input type="text" placeholder="Father's Name" onChange={(e) => handleInputChange(e, 'personalDetails', 'fathersName')} />
              </div>
              <div className="form-input-group">
                <label>Mother's Name</label>
                <input type="text" placeholder="Mother's Name" onChange={(e) => handleInputChange(e, 'personalDetails', 'mothersName')} />
              </div>
              <div className="form-input-group">
                <label>Date of Birth</label>
                <input type="date" placeholder="Date of Birth" onChange={(e) => handleInputChange(e, 'personalDetails', 'dob')} />
              </div>
              <div className="form-input-group">
                <label>Nationality</label>
                <input type="text" placeholder="Nationality" defaultValue="Bangladeshi" onChange={(e) => handleInputChange(e, 'personalDetails', 'nationality')} />
              </div>
              <div className="form-input-group">
                <label>NID No</label>
                <input type="text" placeholder="NID No" onChange={(e) => handleInputChange(e, 'personalDetails', 'nidNo')} />
              </div>
              <div className="form-input-group">
                <label>Religion</label>
                <input type="text" placeholder="Religion" onChange={(e) => handleInputChange(e, 'personalDetails', 'religion')} />
              </div>
              <div className="form-input-group">
                <label>Marital Status</label>
                <input type="text" placeholder="Marital Status" onChange={(e) => handleInputChange(e, 'personalDetails', 'maritalStatus')} />
              </div>
              <div className="form-input-group">
                <label>Sex</label>
                <input type="text" placeholder="Sex" onChange={(e) => handleInputChange(e, 'personalDetails', 'sex')} />
              </div>
              <div className="form-input-group">
                <label>Height</label>
                <input type="text" placeholder="Height" onChange={(e) => handleInputChange(e, 'personalDetails', 'height')} />
              </div>
              <div className="form-input-group">
                <label>Weight</label>
                <input type="text" placeholder="Weight" onChange={(e) => handleInputChange(e, 'personalDetails', 'weight')} />
              </div>
              <div className="form-input-group">
                <label>Blood Group</label>
                <input type="text" placeholder="Blood Group" onChange={(e) => handleInputChange(e, 'personalDetails', 'bloodGroup')} />
              </div>
            </div>
          </div>
          <div className="form-group-container" style={{ marginTop: '20px', textAlign: 'center' }}>
            <button onClick={handlePrint} className="btn btn-primary print-btn" style={{ width: '100%', padding: '15px', fontSize: '1.2rem' }}>
              <Printer size={24} /> Print CV
            </button>
          </div>
        </div>

        {/* Preview Section - Hidden on screen, visible on print */}
        <div className="preview-section no-screen" id="cv-print-area">
          <div className="cv-document" ref={cvRef}>
            {/* Page 1 */}
            <div className="cv-page">
              <div className="cv-header">
                <div className="cv-title-box" style={{ flex: '1' }}>
                  <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#000' }}>Curriculum Vitae</h2>
                  <h3 style={{ fontSize: '18px', margin: '2px 0' }}>of</h3>
                  <h1 className="cv-name" style={{ color: '#003399', fontSize: '30px', fontWeight: 'bold', marginBottom: '10px' }}>
                    {formData.name ? formData.name.toUpperCase() : 'NAME'}:
                  </h1>
                  <div className="cv-contact-info" style={{ fontSize: '13px', lineHeight: '1.4' }}>
                    <p><strong>Contact no:</strong> {formData.contactNo}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Present Address:</strong></p>
                    <p>Village : {formData.presentAddress.village}</p>
                    <p><strong>Permanent Address:</strong></p>
                    <p>Village : {formData.permanentAddress.village}</p>
                  </div>
                </div>
                <div className="cv-photo-box" style={{ width: '130px', height: '150px', marginLeft: '20px' }}>
                  {photoPreview ? <img src={photoPreview} alt="CV Photo" /> : <div className="photo-placeholder">Photo</div>}
                </div>
              </div>

              <div className="cv-body">
                <section className="cv-section">
                  <h4 className="cv-section-title">CAREER OBJECTIVE</h4>
                  <p style={{ fontSize: '14px' }}>{formData.careerObjective}</p>
                </section>

                <section className="cv-section">
                  <h4 className="cv-section-title">PERSONAL ATTRIBUTES</h4>
                  <ul className="cv-attributes-list" style={{ fontSize: '14px', listStyleType: 'disc', paddingLeft: '25px', margin: '0' }}>
                    {formData.personalAttributes.map((attr, i) => <li key={i} style={{ marginBottom: '5px' }}>{attr}</li>)}
                  </ul>
                </section>

                <section className="cv-section">
                  <h4 className="cv-section-title">JOB EXPERIENCE</h4>
                  <table className="cv-table">
                    <thead>
                      <tr>
                        <th>Institution</th>
                        <th>Position</th>
                        <th>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...formData.jobExperience, ...Array(Math.max(0, 4 - formData.jobExperience.length)).fill({})].map((job, i) => (
                        <tr key={i}>
                          <td>{job.institution || ''}</td>
                          <td>{job.position || ''}</td>
                          <td>{job.duration || ''}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
                
                {formData.computerLiteracy && (
                  <section className="cv-section">
                    <h4 className="cv-section-title">COMPUTER LITERACY</h4>
                    <p style={{ fontSize: '14px' }}>{formData.computerLiteracy}</p>
                  </section>
                )}
              </div>
            </div>

            {/* Page 2 */}
            <div className="cv-page">
              <div className="cv-body">
                <section className="cv-section">
                  <h4 className="cv-section-title">EDUCATIONAL QUALIFICATIONS</h4>
                  <table className="cv-table">
                    <thead>
                      <tr>
                        <th>Examination</th>
                        <th>Group</th>
                        <th>Board</th>
                        <th>Year</th>
                        <th>Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...formData.education, ...Array(Math.max(0, 4 - formData.education.length)).fill({})].map((edu, i) => (
                        <tr key={i}>
                          <td>{edu.examination || ''}</td>
                          <td>{edu.group || ''}</td>
                          <td>{edu.board || ''}</td>
                          <td>{edu.year || ''}</td>
                          <td>{edu.result || ''}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>

                <section className="cv-section">
                  <h4 className="cv-section-title">INTEREST & HOBBY</h4>
                  <p style={{ fontSize: '14px' }}>{formData.interests}</p>
                </section>

                <section className="cv-section">
                  <h4 className="cv-section-title">LANGUAGE PROFICIENCY</h4>
                  <p style={{ fontSize: '14px' }}>{formData.languages}</p>
                </section>

                <section className="cv-section">
                  <h4 className="cv-section-title">PERSONAL DETAILS</h4>
                  <ul className="personal-details-list" style={{ fontSize: '14px', listStyleType: 'disc', paddingLeft: '25px', margin: '0' }}>
                      <li style={{ marginBottom: '3px' }}><strong>Name :</strong> {formData.name}</li>
                      <li style={{ marginBottom: '3px' }}><strong>Father's Name :</strong> {formData.personalDetails.fathersName}</li>
                      <li style={{ marginBottom: '3px' }}><strong>Mother's Name :</strong> {formData.personalDetails.mothersName}</li>
                      <li style={{ marginBottom: '3px' }}><strong>Date of Birth :</strong> {formData.personalDetails.dob}</li>
                      <li style={{ marginBottom: '3px' }}><strong>Nationality :</strong> {formData.personalDetails.nationality}</li>
                      <li style={{ marginBottom: '3px' }}><strong>NID No :</strong> {formData.personalDetails.nidNo}</li>
                      <li style={{ marginBottom: '3px' }}><strong>Religion :</strong> {formData.personalDetails.religion}</li>
                      <li style={{ marginBottom: '3px' }}><strong>Marital Status :</strong> {formData.personalDetails.maritalStatus}</li>
                      <li style={{ marginBottom: '3px' }}><strong>Sex :</strong> {formData.personalDetails.sex}</li>
                      <li style={{ marginBottom: '3px' }}><strong>Height :</strong> {formData.personalDetails.height}</li>
                      <li style={{ marginBottom: '3px' }}><strong>Weight :</strong> {formData.personalDetails.weight}</li>
                      <li style={{ marginBottom: '3px' }}><strong>Blood Group :</strong> {formData.personalDetails.bloodGroup}</li>
                  </ul>
                </section>

                {formData.reference && (
                  <section className="cv-section">
                    <h4 className="cv-section-title">REFERENCE</h4>
                    <p style={{ fontSize: '14px', whiteSpace: 'pre-wrap' }}>{formData.reference}</p>
                  </section>
                )}

                <div className="cv-footer" style={{ marginTop: '30px' }}>
                  <p style={{ fontSize: '14px' }}>I hereby declare that all the details mentioned above are my own and true to the best of my knowledge.</p>
                  <div className="cv-signature" style={{ marginTop: '40px' }}>
                    <p>Signature</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVBuilder;
