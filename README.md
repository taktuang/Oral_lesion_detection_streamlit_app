# Oral Lesion Detection YOLOv8 and Streamlit

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
- Click at "Browse files" to choose an image for detection. The original image will appear on left hand of main window.
- Click at "Detect Objects" to detect the image. The detected image will appear on right hand of main window.
  ***Before detect image, you can adjust confidence score at "Select Minimum Confidence"***
