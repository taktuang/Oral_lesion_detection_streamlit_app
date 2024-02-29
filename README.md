# Oral Lesion Detection YOLOv8 and Streamlit

This project is an image detection desktop application using the streamlit and others.
To detect oral lesion images 5 classes:
- Leukoplakia
- Lichen planus
- Candidiasis
- Other white
- Ulcer

### Let's start

## Installation and Requirements
Clone the repository
```bash
git clone https://github.com/taktuang/Oral_lesion_detection_streamlit_app.git
```

Change to the repository directory
```bash
cd Oral_lesion_detection_streamlit_app
```

Python 3.8+ YOLOv8 Streamlit
```bash
pip install -r requirements.txt
```

## Usage
Run the app with the following command and the app should open in a new browser window.
```bash
streamlit run app.py
```
### Home page
![image](https://github.com/taktuang/Oral_lesion_detection_streamlit_app/assets/61873634/7d61920b-92a6-40ea-9cbf-290e9c9d1432)

### Images Detection
- Click on "Browse files" to choose an image for detection. The original image will appear on the left hand of the main window.
- Click on "Detect Objects" to detect the image. The detected image will appear on the right hand of the main window.
  ***Before detecting the image, you can adjust the confidence score at "Select Minimum Confidence"***

### Reference
- streamlit app: https://github.com/CodingMantras/yolov8-streamlit-detection-tracking
- YOLOv8: https://github.com/ultralytics/ultralytics
