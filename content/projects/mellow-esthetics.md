---
title: Bare Kare Studio
summary: A booking and admin management app for a waxing and beauty studio, with scheduling and Stripe deposits.
image: bare-kare-studio.png
author: 'crsvall'
publishedAt: 'YYYY-MM-DD'
status: current
link: 'https://github.com/crsvalle/REPO-NAME'
technology:
  - Next.js
  - React
  - Tailwind CSS
  - shadcn/ui
  - Express.js
  - PostgreSQL
  - Prisma
  - Stripe
---

## Overview

Bare Kare Studio is a booking and admin management application built for a waxing and beauty studio. Clients can book appointments online and pay a deposit to hold their slot, while the studio manages availability, bookings, and blocked dates from an admin dashboard. This is a client project, so the source code is private.

## Features

- Appointment scheduling with availability management
- Stripe checkout for booking deposits
- Admin dashboard for managing bookings and services
- Day and week calendar views with drag-to-select time blocking
- Blocked-date management through right-click and long-press menus
- Responsive layout that works on both desktop and mobile
- Backend error monitoring with Sentry

## Future Features

- [ ] Customer login with a "My Bookings" page
- [ ] Frontend error monitoring

## Requirements

- Node.js installed in your development environment
- A PostgreSQL database
- A [Stripe account](https://docs.stripe.com/api) for deposit payments