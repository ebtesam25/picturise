#!/usr/bin/env python
#Importing the required libraries
import os, random, argparse
from PIL import Image
import numpy as np

parser = argparse.ArgumentParser(description='Checks background images for correct number of channels')
parser.add_argument('--images', dest='images', required=True, help="Diectory of images")

args = parser.parse_args()



moveme = []
## This tests to make sure the dimensions of all the photos are the same
i = 0
for filename in os.listdir(args.images):
    path = args.images+filename
    print (path)
    try:
        x = Image.open(path)
        rgb_im = x.convert('RGB')
        im = np.array(x)
        try:
            w, h, d = im.shape
            newfilename = r'outfilez\\' + "u"+str(i) +".png"
            rgb_im.save(newfilename)
            i +=1
            print (i)
        except:
            moveme.append(filename)
            print(i)
        from PIL import Image

        # im = Image.open("Ba_b_do8mag_c6_big.png")
        
        

    except:
        continue
    
if (len(moveme) > 0):
    command = "mkdir Unusable_Images"
    os.system(command)
    for item in moveme:
        q = '"' + args.images+item + '"'
        command = "mv " + q + " Unusable_Images/"
        os.system(command)

    
  

