  // constants.js

export const dom = {
    logoUpload: document.getElementById('logoUpload'),
    standNumberInput: document.getElementById('standNumber'),
    generatedImagesSection: document.querySelector('.generated-images'),
    imagesContainer: document.querySelector('.images-container'),
    fileNameDisplay: document.querySelector('.file-name'),
    submitButton: document.getElementById('submitButton'),
    downloadAllButton: document.getElementById('downloadAllButton'),
    genericDownloadAll: document.getElementById('generic-downloadAll'),
    downloadAllPicturesButton: document.getElementById('downloadAllPicturesButton'),
    downloadAllLogos: document.getElementById('downloadAllLogos')
  };

export const infoEvent = {
  name: "SHOPPE OBJECT PARIS JAN 26",
  abreviation: 'SOP-JAN-26'
}

  
 export const FORMATS_CUSTOMIZED_BANNERS = [
  { 
    nameEN: 'Square format',
    nameFR:'Format carré', 
    dataId:'SOP-JAN-26_custom-square',
    templateEN: 'assets/templates/1080x1080.png', 
    templateFR: 'assets/templates/1080x1080.png', 
    description: '(1080x1080)', 
    socials: ['instagram', 'facebook', 'x'], 
    dimensions: [1080, 1080], 
    logoCenter: [540, 1033], 
    standLetterPosition: [1080-31, 1044], 
    maxLogoSize: [200, 64], 
    font: '32px dico-mono' 
  },
  { 
    nameEN: 'Story format', 
    nameFR: 'Format story', 
    dataId:'SOP-JAN-26_custom-story',
    templateEN: 'assets/templates/1080x1920.png', 
    templateFR: 'assets/templates/1080x1920.png', 
    description: '(1080x1920)', 
    socials: ['instagram', 'facebook', 'tiktok'], 
    dimensions: [1080, 1920], 
    logoCenter: [540, 1873], 
    standLetterPosition: [1080-31, 1884], 
    maxLogoSize: [200, 64], 
    font: '32px dico-mono' 
  },
  { 
    nameEN: 'Portrait format', 
    nameFR: 'Format portrait', 
    dataId:'SOP-JAN-26_custom-portrait',
    templateEN: 'assets/templates/1080x1350.png', 
    templateFR: 'assets/templates/1080x1350.png', 
    description: '(1080x1350)', 
    socials: ['facebook', 'instagram'], 
    dimensions: [1080, 1350], 
    logoCenter: [540, 1303], 
    standLetterPosition: [1080-31, 1314], 
    maxLogoSize: [200, 64], 
    font: '32px dico-mono' 
  },
  { 
    nameEN: 'LinkedIn Banner', 
    nameFR: 'Bannière Linkedin',
    dataId:'SOP-JAN-26_custom-linkedin', 
    templateEN: 'assets/templates/1584x396.png', 
    templateFR: 'assets/templates/1584x396.png', 
    description: '(1584x396)', 
    socials: ['linkedin'], 
    dimensions: [1584, 396], 
    logoCenter: [792, 361], 
    standLetterPosition: [1584-30, 372], 
    maxLogoSize: [200, 52], 
    font: '32px dico-mono'
   },
   { 
    nameEN: 'Landscape format', 
    nameFR: 'Format paysage', 
    dataId:'SOP-JAN-26_custom-landscape',
    templateEN: 'assets/templates/1200x628.png', 
    templateFR: 'assets/templates/1200x628.png', 
    description: '(1200x628)', 
    socials: ['facebook', 'instagram', 'x'], 
    dimensions: [1200, 628], 
    logoCenter: [600, 593], 
    standLetterPosition: [1200-34, 604], 
    maxLogoSize: [200, 52], 
    font: '32px dico-mono'
   },
   { 
    nameEN: 'Email signature', 
    nameFR: 'Signature Email', 
    dataId:'SOP-JAN-26_custom-email',
    templateEN: 'assets/templates/600x140.png', 
    templateFR: 'assets/templates/600x140.png', 
    description: '(600x140)', 
    socials: ['mail'], 
    dimensions: [600, 140], 
    logoCenter: [300, 128], 
    standLetterPosition: [600-10, 132], 
    maxLogoSize: [70, 16], 
    font: '12px dico-mono'
   },
   { 
    nameEN: 'Small banner', 
    nameFR: 'Petite bannière',
    dataId:'SOP-JAN-26_custom-banner', 
    templateEN: 'assets/templates/300x250.png', 
    templateFR: 'assets/templates/300x250.png', 
    description: '(300x250)', 
    socials: ['google-ads', 'meta'], 
    dimensions: [300, 250], 
    logoCenter: [150, 237], 
    standLetterPosition: [300-9, 242], 
    maxLogoSize: [34, 16], 
    font: '12px dico-mono'
   }
  ];
  

export const LOGOS = [
  {
    name: 'Logo-Shoppe-Object.png',
    src: '../shoppe-object/assets/logos/logo-shoppe-object.png'
  },
  {
    name: 'Logo-Shoppe-Object.svg',
    src: '../shoppe-object/assets/logos/logo-shoppe-object.svg'
  }
]
