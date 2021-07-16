#https://www.youtube.com/watch?v=itRLRfuL_PQ
import tkinter as tk
import PyPDF2
from PIL import Image, ImageTk
from tkinter.filedialog import askopenfile
#Pillow is a fork of PIL but it seems you can import as PIL

root = tk.Tk()

canvas = tk.Canvas(root, width = 600, height = 300)
canvas.grid(columnspan=3, rowspan = 3)

#Logo time
logo = Image.open('logo.png')
logo = ImageTk.PhotoImage(logo)
logo_label = tk.Label(image=logo)
logo_label.image = logo
logo_label.grid(column =1, row =0)

#instructions
instructions = tk.Label(text= "Select a PDF file on your computer to extract all its text", font ="Raleway")
instructions.grid(columnspan=3, column=1,row =1)

def open_file():
    browse_text.set("loading...")
    file = askopenfile(parent=root, mood="r", title = "Choose a file", filetype= [("PDF File", "*.pdf")])
    if file:
        print("File was successfully loaded")

#Browse button
browse_text = tk.StringVar()
browse_btn = tk.Button(root, textvariable=(browse_text), command=lambda:open_file(), font ="Raleway", bg = "turquoise", fg = "white", height=2, width=15)
browse_text.set("Browse")
browse_btn.grid(column =1, row =2)

"""
#Time Delay
def message():
    print("Hello")
    browse_text.set('I LIKE ICE CREAM')

def delay():
    root.after(3*10**3, message)
"""
canvas = tk.Canvas(root, width = 600, height = 250, bg="black")
canvas.grid(columnspan=3)

root.mainloop()
