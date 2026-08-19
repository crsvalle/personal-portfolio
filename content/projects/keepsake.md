---
title: Keepsake
summary: A full-stack application for storing and managing your keepsakes.
image: keepsake.png
author: 'Cristian Valle'
publishedAt: '2024-01-12'
status: completed
link: "https://keepssake.netlify.app/"
technology:
  - Node.js
  - Express.js
  - PostgreSQL
  - Firebase
  - Google Geolocation API
  - Stripe
  - React
  - Tailwind CSS
---

## Overview

Keepsake provides a platform for individuals or businesses to rent out empty storage spaces. Users can list available storage units, set rental prices, and manage bookings. Renters can browse available storage spaces based on location, size, and pricing, and book the unit that best suits their needs.

## Features

- Location, size, and price-based storage search
- Booking management for renters and listers
- Secure image storage via Firebase
- Geolocation-based listings via Google Maps API
- Stripe-powered payment processing

## Future Features

- [ ] Add a secure chat system to enable users to communicate with one another
- [ ] Notifications and alerts for expiration dates and item reminders
- [ ] Improved user management system

## Requirements

- Node.js installed in your development environment
- A [Firebase account for image storage](https://firebase.google.com/docs/storage)
- A [Google API key for Geolocation](https://developers.google.com/maps/documentation/geolocation/overview)
- A [Stripe API key](https://docs.stripe.com/api)
- [The backend repository](https://github.com/teegrg/keepsake-backend)