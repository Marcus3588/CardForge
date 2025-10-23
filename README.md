# Business Card Generator

A modular, client-side tool that lets users generate and preview professional business cards in real time. Built with clean DOM logic, secure image handling ,and persistent theme support.

## Features
  Live Preview: Dynamically renders user input(name,title,phone,company,email) onto a styled card
  Image Upload: Secure client side photo preview using 'FileReader' -No server required
  Theme Toggle: Dark light/mode switch with persistent state via localStorage
  Modular structure : Core logic split into reusable functions('renderCard',initTheme) for clarity and scalability

## Project Structure
- index.html – main app entry
- scripts/ – modular JS files
- assets/ – templates, icons, fonts
- style.css – global styling

## 🚀 How It Works

1. User fills out the form with personal details.
2. Inputs are captured via .value and rendered using textContent.
3. If a photo is selected, it's previewed using FileReader and displayed via src.
4. Theme toggle updates the UI and saves preference to localStorage.

## Sample Output
Here is a preview of the generated business card after user input
[Business Card Preview] (./screenshots/card-preview.jpg)


## Setup
Open index.html in a browser.  
Requires internet connection for html2canvas CDN.


Next: Add QR code linking to users portfolio/resume
      Introduce multiple card design templates
      add drag- and drop image upload


 Coming soon!!!     