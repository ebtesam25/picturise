import requests
import os, argparse
import csv
import re





parser = argparse.ArgumentParser(description='download into folder from links in csv file')
parser.add_argument('--input', dest='indata', required=True, help="input csv file")

args = parser.parse_args()

with open(args.indata, 'r') as read_obj:
    # pass the file object to reader() to get the reader object
    csv_reader = csv.reader(read_obj)
    # Pass reader object to list() to get a list of lists
    list_of_rows = list(csv_reader)
    print(list_of_rows)
    i = 0
    f = 0
    for l in list_of_rows:
        if i ==0 and f == 0:
            f = 1 
            continue

        url = l[0]
        if url.find('/'):
            # print (url.rsplit('/', 1)[1])
            outfile = r"outfiles\f" +str(i) + url.rsplit('/', 1)[1]
            print(outfile) 
            i +=1
            # url = url.decode()
            url = url.lstrip('http')
            url = 'http' + url
            r = requests.get(url)



            with open(outfile, 'wb') as f:
                f.write(r.content)

