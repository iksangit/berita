import pdfplumber

with pdfplumber.open("CV_Moch_Iksan (1).pdf") as pdf:
    for i, page in enumerate(pdf.pages):
        text = page.extract_text()
        if text:
            print(f"--- Page {i+1} ---")
            print(text)
            print()