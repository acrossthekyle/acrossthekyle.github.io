/* eslint-disable */
// @ts-nocheck

// import { go as albums } from './albums';
// import { go as exif } from './exif';

// async function go() {
//   await exif();

//   albums();
// };

// go();

// async function getBase64FromUrl(url) {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     // Read the response as an ArrayBuffer
//     const arrayBuffer = await response.arrayBuffer();

//     // Convert the ArrayBuffer to a Node.js Buffer
//     const buffer = Buffer.from(arrayBuffer);

//     // Encode to base64
//     const base64String = buffer.toString('base64');

//     // Optional: Create a Data URI for use in HTML <img> tags
//     const mimeType = response.headers.get('content-type');
//     return `data:${mimeType};base64,${base64String}`;

//   } catch (error) {
//     console.error('Encoding error:', error.message);
//   }
// }

// // Example usage with an ImageKit URL
// const imageUrl = 'https://ik.imagekit.io/acrossthekyle/uploads/2023/07/05/a7519e17-dc25-46cc-b8c7-8b293684b8ef.jpeg?tr=w-10,q-10';
// getBase64FromUrl(imageUrl).then(console.log);
