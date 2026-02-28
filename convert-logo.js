#!/usr/bin/env node

const sharp = require('sharp');
const { join } = require('path');

const inputSvg = join(__dirname, 'public/images/logo.svg');
const outputPng = join(__dirname, 'public/images/logo-atlas-512.png');

async function convertLogo() {
  try {
    console.log('Converting SVG to PNG...');
    await sharp(inputSvg)
      .resize(512, 512)
      .png()
      .toFile(outputPng);
    console.log('✅ Saved:', outputPng);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

convertLogo();