function submitForm() {
    const businessLicenseInput = document.getElementById('business-license');
    const expirationDateInput = document.getElementById('expiration-date');

    const cdphLicenseInput = document.getElementById('cdph-license');
    const cdphExpirationDateInput = document.getElementById('cdph-expiration-date');

    
    const hasValidLicense = businessLicenseInput.value === 'yes';

    if (hasValidLicense) {
        const expirationDate = expirationDateInput.value;

        
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


    const hasCDPHLicense = cdphLicenseInput.value === 'yes';

    if (hasCDPHLicense) {
        const cdphExpirationDate = cdphExpirationDateInput.value;

        console.log('CDPH License with Expiration Date:', cdphExpirationDate);
    } else {
        console.log('No valid CDPH License or Not Applicable');
    }
}
