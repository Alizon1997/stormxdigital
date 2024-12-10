import React, { useState } from 'react';

interface ContactFormProps {
  translations: {
    name: string;
    contactNumber: string;
    email: string;
    companyBrand: string;
    message: string;
    contactUsNow: string;
  };
}

const ContactForm: React.FC<ContactFormProps> = ({ translations }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Error sending message');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={translations.name}
          className="bg-black border border-[#343434] rounded-xl p-2 text-sm text-white w-full"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={translations.contactNumber}
          className="bg-black border border-[#343434] rounded-xl p-2 text-sm text-white w-full"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={translations.email}
          className="bg-black border border-[#343434] rounded-xl p-2 text-sm text-white w-full"
          required
        />
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder={translations.companyBrand}
          className="bg-black border border-[#343434] rounded-xl p-2 text-sm text-white w-full"
          required
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center lg:items-center">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={translations.message}
          className="w-full bg-black border border-[#343434] rounded-xl p-2 text-sm text-white lg:mr-4"
          rows={4}
          required
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="bg-gradient-to-r from-[#F95C04] via-7% to-[#FF8E0A] to-82% text-white py-1 px-2 rounded-xl w-full lg:w-auto text-base justify-center items-center mt-2 lg:mt-0 disabled:opacity-50"
        >
          {status === 'submitting' ? 'Sending...' : translations.contactUsNow}
        </button>
      </div>

      {status === 'success' && (
        <div className="text-green-500 text-center">Message sent successfully!</div>
      )}
      {status === 'error' && (
        <div className="text-red-500 text-center">Error: {errorMessage}</div>
      )}
    </form>
  );
};

export default ContactForm;