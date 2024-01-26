import React, { useState } from 'react';

const MyForm = () => {
  const [businessLicense, setBusinessLicense] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cdphLicense, setCdphLicense] = useState('');
  const [cdphExpirationDate, setCdphExpirationDate] = useState('');

  const handleBusinessLicenseChange = (event) => {
    setBusinessLicense(event.target.value);
  };

  const handleExpirationDateChange = (event) => {
    setExpirationDate(event.target.value);
  };

  const handleCdphLicenseChange = (event) => {
    setCdphLicense(event.target.value);
  };

  const handleCdphExpirationDateChange = (event) => {
    setCdphExpirationDate(event.target.value);
  };

  const submitForm = () => {
    if (businessLicense === 'yes') {
      const currentDate = new Date();
      const selectedDate = new Date(expirationDate);

      if (selectedDate < currentDate) {
        console.log('Visit flagged: Expired Business License');
      } else {
        console.log('Valid Business License with Expiration Date:', expirationDate);
      }
    } else {
      console.log('No Valid Business License');
    }

    const hasCDPHLicense = cdphLicense === 'yes';

    if (hasCDPHLicense) {
      console.log('CDPH License with Expiration Date:', cdphExpirationDate);
    } else {
      console.log('No valid CDPH License or Not Applicable');
    }

    // Display pop-up message
    window.alert('Your visit has been submitted!');
  };

  return (
    <div>
      <label>
        Business License:
        <input type="text" value={businessLicense} onChange={handleBusinessLicenseChange} />
      </label>
      <br />
      <label>
        Expiration Date:
        <input type="date" value={expirationDate} onChange={handleExpirationDateChange} />
      </label>
      <br />
      <label>
        CDPH License:
        <input type="text" value={cdphLicense} onChange={handleCdphLicenseChange} />
      </label>
      <br />
      <label>
        CDPH Expiration Date:
        <input type="date" value={cdphExpirationDate} onChange={handleCdphExpirationDateChange} />
      </label>
      <br />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default MyForm;