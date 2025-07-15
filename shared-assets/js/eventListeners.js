// eventListeners.js

import { dom } from './constants-loader.js';
import { infoEvent } from './constants-loader.js';
import { FORMATS_CUSTOMIZED_BANNERS } from './constants-loader.js';
import { LOGOS } from './constants-loader.js';
import { createElement } from './utils.js';
import { generateImage } from './customizedBanners.js';


dom.logoUpload.addEventListener('change', () => {
    dom.fileNameDisplay.textContent = document.documentElement.lang === 'en' ? dom.logoUpload.files[0]?.name || '(No file chosen)' : dom.logoUpload.files[0]?.name || '(Aucun fichier choisi)';
  });

  
dom.submitButton.addEventListener('click', async () => {
    const { logoUpload, tentSelectInput, standNumberInput, generatedImagesSection, imagesContainer } = dom;
    const logoFile = logoUpload.files[0];
    const standNumber = standNumberInput.value;
  
    if (!logoFile || !standNumber) {
      return alert(document.documentElement.lang === 'en' ? 'Please fill all fields.' : 'Veuillez remplir tous les champs.');
    }
  
    imagesContainer.innerHTML = '';
    generatedImagesSection.style.display = 'block';
    const loadingSpinner = createElement('div', { className: 'loading-spinner' });
    generatedImagesSection.appendChild(loadingSpinner);
  
    const logoImg = new Image();
    logoImg.src = URL.createObjectURL(logoFile);
    await new Promise(resolve => logoImg.onload = resolve);
  
    const imageData = await Promise.all(FORMATS_CUSTOMIZED_BANNERS.map(format => generateImage(format, logoImg, tentSelectInput ? tentSelectInput.value.toUpperCase() : "", standNumber)));
  
    loadingSpinner.remove();
    generatedImagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
    dom.downloadAllButton.style.display = 'block';
    dom.downloadAllButton.onclick = () => downloadAllImages(imageData);
});
  
const downloadAllImages = (imageData) => {
    const zip = new JSZip();
    const folder = zip.folder('generated_images');
    imageData.forEach(({ imageURL, fileName }) => {
      const base64Data = imageURL.split(',')[1];
      folder.file(fileName, base64Data, { base64: true });
    });
    zip.generateAsync({ type: 'blob' }).then(content => saveAs(content, document.documentElement.lang === 'en' ? `My-Customized-Logo-${infoEvent.abreviation}-Kit.zip` : `Mon-Kit-${infoEvent.abreviation}-avec-Logo.zip`));
};

dom.genericDownloadAll.onclick = async () => {
    const zip = new JSZip();
    await Promise.all([...document.querySelectorAll('.generic-banners')].map(async img => 
      zip.file(`${img.alt}.png`, await (await fetch(img.src)).blob())
    ));
    saveAs(await zip.generateAsync({ type: 'blob' }), document.documentElement.lang === 'en' ? `My-Generic-${infoEvent.abreviation}-Kit.zip` : `Mon-Kit-${infoEvent.abreviation}-Generique.zip` );
};

dom.downloadAllLogos.onclick = async () => {
  const zip = new JSZip();
  for (const { name, src } of LOGOS) {
    const response = await fetch(src);
    const blob = await response.blob();
    zip.file(`${name}`, blob); // Ensure file format is preserved
  }
  zip.generateAsync({ type: 'blob' }).then(content => saveAs(content, `${infoEvent.abreviation}-logos.zip`));
};


const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');
  
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        const tabId = button.getAttribute('data-tab');
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
      });
    });


document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-button-id]');
  if (button) {
    const buttonId = button.getAttribute('data-button-id');
    
    // Optional: prevent navigation for <a> tags if needed
    if (button.tagName === 'A' && !button.hasAttribute('download')) {
      event.preventDefault(); 
    }
    
    // Send event to GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'downloadButtonClick',
      buttonId: buttonId
    });
  }
});

const submitButton = document.getElementById('submitButton');

if (submitButton) {
  submitButton.addEventListener('click', () => {
    const standNumberElement = document.getElementById('standNumber');
    const standNumberInput = standNumberElement ? standNumberElement.value : null;

    const standNumberValue = standNumberInput ? standNumberInput : 'stand number not set';

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'standNumberSubmit',
      standNumberInput: standNumberValue
    });

    console.log(window.dataLayer)
  });
}


  