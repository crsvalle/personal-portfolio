---
title: Real-Time Car Detection
summary: An app that uses AI to learn and detect vehicles from images.
image: real-time.png
author: 'Cristian Valle'
publishedAt: ''
status: current
link: 'https://github.com/crsvalle/real-time-detection-frontend'
technology:
  - Next.js
  - React
  - Tailwind CSS
  - Python
  - FastAPI
  - PyTorch
  - TorchVision
  - YOLOv8
  - ResNet50
---

## Overview

Real-Time Car Detection is a CarVision-style application that uses AI to detect and identify vehicles from uploaded images. The app combines object detection with fine-grained classification to draw bounding boxes around vehicles and identify their make, model.

## Features

- Vehicle detection via Ultralytics YOLOv8n
- Vehicle make/model/year identification via a ResNet50-based classification pipeline
- Bounding box visualization over detected vehicles
- Detection history stored locally in the browser
- REST/multipart HTTP communication between frontend and backend

## Future Features

- [ ] Live video input and real-time inference
- [ ] Object tracking across video frames

## Requirements

- Node.js installed in your development environment
- Python environment with PyTorch, TorchVision, FastAPI installed
- GPU acceleration supported via CUDA (NVIDIA) or MPS (Apple Silicon), with CPU fallback
- [The frontend repository](https://github.com/crsvalle/real-time-detection-frontend)
- [The backend repository](https://github.com/crsvalle/real-time-detection-backend)